'use client';

import React, { useEffect, useState, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { ProcessedEarthquake, Continent } from '@/types/earthquake';
import { getEarthquakes, getMagnitudeColor, getMarkerSize } from '@/lib/earthquake-api';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Check if earthquake is a critical alert (magnitude >= 6.7 and occurred within last hour)
function isCriticalAlert(earthquake: ProcessedEarthquake): boolean {
  const oneHourAgo = Date.now() - (60 * 60 * 1000);
  return earthquake.magnitude >= 6.7 && earthquake.time >= oneHourAgo;
}

export default function EarthquakeMap() {
  const [earthquakes, setEarthquakes] = useState<ProcessedEarthquake[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [minMagnitude, setMinMagnitude] = useState(1.0);
  const [maxDepth, setMaxDepth] = useState(1000);
  const [selectedContinents, setSelectedContinents] = useState<Continent[]>([]);
  const [showTsunamiOnly, setShowTsunamiOnly] = useState(false);
  const [showList, setShowList] = useState(false);

  // Fetch earthquake data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getEarthquakes();
        setEarthquakes(data);
      } catch (err) {
        setError('Failed to load earthquake data');
        console.error('Error loading earthquakes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  // Filter earthquakes based on user selections
  const filteredEarthquakes = useMemo(() => {
    return earthquakes.filter(eq => {
      if (eq.magnitude < minMagnitude) return false;
      if (eq.depth > maxDepth) return false;
      if (selectedContinents.length > 0 && !selectedContinents.includes(eq.continent as Continent)) return false;
      if (showTsunamiOnly && !eq.tsunami) return false;
      return true;
    });
  }, [earthquakes, minMagnitude, maxDepth, selectedContinents, showTsunamiOnly]);

  // Calculate statistics
  const stats = useMemo(() => {
    if (filteredEarthquakes.length === 0) {
      return {
        total: 0,
        strongest: 0,
        deepest: 0,
        criticalAlerts: 0,
      };
    }

    const criticalAlerts = filteredEarthquakes.filter(eq => isCriticalAlert(eq)).length;

    return {
      total: filteredEarthquakes.length,
      strongest: Math.max(...filteredEarthquakes.map(e => e.magnitude)),
      deepest: Math.max(...filteredEarthquakes.map(e => e.depth)),
      criticalAlerts,
    };
  }, [filteredEarthquakes]);

  // Clear all filters
  const clearFilters = () => {
    setMinMagnitude(1.0);
    setMaxDepth(1000);
    setSelectedContinents([]);
    setShowTsunamiOnly(false);
  };

  // Toggle continent selection
  const toggleContinent = (continent: Continent) => {
    if (selectedContinents.includes(continent)) {
      setSelectedContinents(selectedContinents.filter(c => c !== continent));
    } else {
      setSelectedContinents([...selectedContinents, continent]);
    }
  };

  // Get text color class for magnitude
  const getMagnitudeColorClass = (magnitude: number): string => {
    if (magnitude < 3) return 'text-green-400';
    if (magnitude < 5) return 'text-yellow-400';
    if (magnitude < 7) return 'text-orange-400';
    return 'text-red-400';
  };

  // Loading state
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading earthquake data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <i className="fa-solid fa-exclamation-triangle text-red-500 text-6xl mb-4"></i>
          <p className="text-white text-xl mb-2">Failed to load earthquake data</p>
          <p className="text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      {/* CSS for blinking animation */}
      <style jsx>{`
        @keyframes earthquake-pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.3);
          }
        }
        .earthquake-alert-ring {
          animation: earthquake-pulse 1.5s ease-in-out infinite;
        }
      `}</style>

      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="h-full w-full"
        zoomControl={true}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Earthquake Markers */}
        {filteredEarthquakes.map((earthquake) => {
          const isAlert = isCriticalAlert(earthquake);

          return (
            <React.Fragment key={earthquake.id}>
              {/* Blinking outer ring for critical alerts */}
              {isAlert && (
                <CircleMarker
                  center={earthquake.coordinates}
                  radius={getMarkerSize(earthquake.magnitude) * 1.8}
                  pathOptions={{
                    color: '#ff0000',
                    fillColor: '#ff0000',
                    fillOpacity: 0.3,
                    weight: 3,
                    className: 'earthquake-alert-ring',
                  }}
                />
              )}

              {/* Main marker */}
              <CircleMarker
                center={earthquake.coordinates}
                radius={getMarkerSize(earthquake.magnitude)}
                pathOptions={{
                  color: getMagnitudeColor(earthquake.magnitude),
                  fillColor: getMagnitudeColor(earthquake.magnitude),
                  fillOpacity: 0.7,
                  weight: 2,
                }}
              >
                <Popup>
                  <div className="text-sm min-w-[200px]">
                    {isAlert && (
                      <div className="bg-red-600 text-white px-3 py-2 rounded mb-2 font-bold text-center">
                        🚨 CRITICAL ALERT - STRONG EARTHQUAKE
                      </div>
                    )}
                    <h3 className="font-bold text-lg mb-2">M {earthquake.magnitude.toFixed(1)}</h3>
                    <p className="mb-1">
                      <strong>Location:</strong> {earthquake.place}
                    </p>
                    <p className="mb-1">
                      <strong>Time:</strong> {earthquake.timeFormatted}
                    </p>
                    <p className="mb-1">
                      <strong>Depth:</strong> {earthquake.depthKm}
                    </p>
                    <p className="mb-1">
                      <strong>Region:</strong> {earthquake.continent}
                    </p>
                    {earthquake.tsunami && (
                      <p className="text-yellow-600 font-bold mt-2">⚠️ Tsunami Warning</p>
                    )}
                    <a
                      href={earthquake.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-600 block mt-2"
                    >
                      View on USGS →
                    </a>
                  </div>
                </Popup>
              </CircleMarker>
            </React.Fragment>
          );
        })}
      </MapContainer>

      {/* Info Panel (Left) */}
      <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-[1000] max-w-sm">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          🌍 Earthquake Monitor
        </h2>

        {/* Critical Alert Banner */}
        {stats.criticalAlerts > 0 && (
          <div className="bg-red-600 text-white px-3 py-2 rounded mb-3 font-bold text-center text-sm animate-pulse">
            🚨 {stats.criticalAlerts} CRITICAL ALERT{stats.criticalAlerts > 1 ? 'S' : ''} (M6.7+)
          </div>
        )}

        {/* Statistics */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Total Events (24h):</span>
            <span className="font-semibold">{stats.total}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Strongest:</span>
            <span className="font-semibold text-red-400">
              M {stats.strongest.toFixed(1)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Deepest:</span>
            <span className="font-semibold">{stats.deepest.toFixed(0)} km</span>
          </div>
        </div>

        {/* Magnitude Legend */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <h3 className="font-semibold mb-2 text-sm">Magnitude Scale:</h3>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span>1.0 - 2.9 (Minor)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <span>3.0 - 4.9 (Light)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <span>5.0 - 6.9 (Moderate)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span>7.0+ (Major)</span>
            </div>
          </div>
        </div>

        <div className="mt-3 text-xs text-gray-500 text-center">
          Auto-refresh every 5 minutes
        </div>
      </div>

      {/* Filter Panel (Right) */}
      <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-[1000] max-w-xs max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-bold mb-3">Filters</h3>

        {/* Magnitude Slider */}
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">
            Min Magnitude: {minMagnitude.toFixed(1)}
          </label>
          <input
            type="range"
            min="1"
            max="9"
            step="0.1"
            value={minMagnitude}
            onChange={(e) => setMinMagnitude(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1.0</span>
            <span>9.0</span>
          </div>
        </div>

        {/* Depth Slider */}
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">
            Max Depth: {maxDepth} km
          </label>
          <input
            type="range"
            min="0"
            max="700"
            step="10"
            value={maxDepth}
            onChange={(e) => setMaxDepth(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0 km</span>
            <span>700 km</span>
          </div>
        </div>

        {/* Continent Checkboxes */}
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Regions:</label>
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {(['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Oceania', 'Antarctica'] as Continent[]).map((continent) => (
              <label key={continent} className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedContinents.includes(continent)}
                  onChange={() => toggleContinent(continent)}
                  className="rounded cursor-pointer"
                />
                <span>{continent}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tsunami Filter */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={showTsunamiOnly}
              onChange={(e) => setShowTsunamiOnly(e.target.checked)}
              className="rounded cursor-pointer"
            />
            <span>Tsunami Warning Only</span>
          </label>
        </div>

        {/* Active Filters Count */}
        {(minMagnitude > 1.0 || maxDepth < 1000 || selectedContinents.length > 0 || showTsunamiOnly) && (
          <div className="mb-3 text-xs text-blue-400">
            {(() => {
              let count = 0;
              if (minMagnitude > 1.0) count++;
              if (maxDepth < 1000) count++;
              if (selectedContinents.length > 0) count++;
              if (showTsunamiOnly) count++;
              return `${count} active filter${count !== 1 ? 's' : ''}`;
            })()}
          </div>
        )}

        {/* Clear Filters Button */}
        <button
          onClick={clearFilters}
          className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-sm"
        >
          Clear Filters
        </button>
      </div>

      {/* List View (Bottom, Collapsible) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 z-[1000]">
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-white">
              Recent Earthquakes ({filteredEarthquakes.length})
            </h3>
            <button
              onClick={() => setShowList(!showList)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {showList ? 'Hide' : 'Show'} List
            </button>
          </div>

          {showList && (
            <div className="space-y-2 max-h-56 overflow-y-auto">
              {filteredEarthquakes.length === 0 ? (
                <div className="text-center py-8">
                  <i className="fa-solid fa-earth-americas text-gray-600 text-4xl mb-2"></i>
                  <p className="text-gray-400">No earthquakes match your filters</p>
                  <button
                    onClick={clearFilters}
                    className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                filteredEarthquakes
                  .sort((a, b) => b.magnitude - a.magnitude)
                  .slice(0, 20)
                  .map((eq) => (
                    <div
                      key={eq.id}
                      className="bg-gray-800 p-3 rounded-lg hover:bg-gray-750 cursor-pointer transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <span className={`font-bold text-lg ${getMagnitudeColorClass(eq.magnitude)}`}>
                            M {eq.magnitude.toFixed(1)}
                          </span>
                          <span className="text-gray-400 ml-2">{eq.place}</span>
                        </div>
                        <span className="text-xs text-gray-500">{eq.timeFormatted}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Depth: {eq.depthKm} • {eq.continent}
                        {eq.tsunami && <span className="text-yellow-400 ml-2">⚠️ Tsunami</span>}
                      </div>
                    </div>
                  ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
