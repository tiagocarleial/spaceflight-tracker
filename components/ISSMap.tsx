'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ISSPosition, Astronaut } from '@/types/iss';
import { getISSPosition, getAstronauts, getISSFuturePositions } from '@/lib/iss-api';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom ISS icon
const issIcon = L.icon({
  iconUrl: '/images/iss-icon.png',
  iconSize: [50, 50],
  iconAnchor: [25, 25],
  popupAnchor: [0, -25],
});

// Component to handle map centering and following
function MapController({ position, follow }: { position: [number, number]; follow: boolean }) {
  const map = useMap();

  useEffect(() => {
    if (follow && position) {
      map.setView(position, map.getZoom(), { animate: true });
    }
  }, [position, follow, map]);

  return null;
}

export default function ISSMap() {
  const [issPosition, setIssPosition] = useState<ISSPosition | null>(null);
  const [orbitPath, setOrbitPath] = useState<[number, number][]>([]);
  const [futurePath, setFuturePath] = useState<[number, number][]>([]);
  const [astronauts, setAstronauts] = useState<Astronaut[]>([]);
  const [follow, setFollow] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial fetch
    fetchISSData();
    fetchAstronauts();
    fetchFuturePath();

    // Update ISS position every 5 seconds
    const interval = setInterval(fetchISSData, 5000);

    // Update astronauts every 60 seconds
    const astronautsInterval = setInterval(fetchAstronauts, 60000);

    // Update future path every 5 minutes
    const futurePathInterval = setInterval(fetchFuturePath, 300000);

    return () => {
      clearInterval(interval);
      clearInterval(astronautsInterval);
      clearInterval(futurePathInterval);
    };
  }, []);

  async function fetchISSData() {
    const position = await getISSPosition();
    if (position) {
      setIssPosition(position);
      setLoading(false);

      // Add to orbit path (keep last 50 points)
      setOrbitPath((prev) => {
        const newPath = [...prev, [position.latitude, position.longitude] as [number, number]];
        return newPath.slice(-50);
      });
    }
  }

  async function fetchAstronauts() {
    const crew = await getAstronauts();
    setAstronauts(crew);
  }

  async function fetchFuturePath() {
    const future = await getISSFuturePositions(2); // Next 2 hours
    setFuturePath(future);
  }

  if (loading || !issPosition) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading ISS position...</p>
        </div>
      </div>
    );
  }

  const currentPosition: [number, number] = [issPosition.latitude, issPosition.longitude];

  return (
    <div className="relative h-screen w-full">
      <MapContainer
        center={currentPosition}
        zoom={3}
        className="h-full w-full"
        zoomControl={true}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController position={currentPosition} follow={follow} />

        {/* Past orbit path (blue, dashed) - split to handle longitude wrapping */}
        {orbitPath.length > 1 && (
          <>
            {(() => {
              const segments: [number, number][][] = [];
              let currentSegment: [number, number][] = [orbitPath[0]];

              for (let i = 1; i < orbitPath.length; i++) {
                const prevLng = orbitPath[i - 1][1];
                const currLng = orbitPath[i][1];

                // Check if longitude wraps around (crosses 180°/-180°)
                if (Math.abs(currLng - prevLng) > 180) {
                  segments.push(currentSegment);
                  currentSegment = [orbitPath[i]];
                } else {
                  currentSegment.push(orbitPath[i]);
                }
              }

              if (currentSegment.length > 0) {
                segments.push(currentSegment);
              }

              return segments.map((segment, idx) => (
                <Polyline
                  key={`past-${idx}`}
                  positions={segment}
                  pathOptions={{
                    color: '#0066ff',
                    weight: 2,
                    opacity: 0.6,
                    dashArray: '10, 10',
                  }}
                />
              ));
            })()}
          </>
        )}

        {/* Future orbit path (red, solid) - split to handle longitude wrapping */}
        {futurePath.length > 1 && (
          <>
            {(() => {
              const segments: [number, number][][] = [];
              let currentSegment: [number, number][] = [futurePath[0]];

              for (let i = 1; i < futurePath.length; i++) {
                const prevLng = futurePath[i - 1][1];
                const currLng = futurePath[i][1];

                // Check if longitude wraps around (crosses 180°/-180°)
                if (Math.abs(currLng - prevLng) > 180) {
                  segments.push(currentSegment);
                  currentSegment = [futurePath[i]];
                } else {
                  currentSegment.push(futurePath[i]);
                }
              }

              if (currentSegment.length > 0) {
                segments.push(currentSegment);
              }

              return segments.map((segment, idx) => (
                <Polyline
                  key={`future-${idx}`}
                  positions={segment}
                  pathOptions={{
                    color: '#ef4444',
                    weight: 3,
                    opacity: 0.7,
                  }}
                />
              ));
            })()}
          </>
        )}

        {/* ISS Marker */}
        <Marker position={currentPosition} icon={issIcon}>
          <Popup>
            <div className="text-sm">
              <h3 className="font-bold text-lg mb-2">International Space Station</h3>
              <p><strong>Latitude:</strong> {issPosition.latitude.toFixed(4)}°</p>
              <p><strong>Longitude:</strong> {issPosition.longitude.toFixed(4)}°</p>
              <p><strong>Altitude:</strong> {issPosition.altitude.toFixed(2)} km</p>
              <p><strong>Velocity:</strong> {issPosition.velocity.toFixed(2)} km/h</p>
              <p><strong>Visibility:</strong> {issPosition.visibility}</p>
              {astronauts.length > 0 && (
                <div className="mt-2">
                  <strong>Crew ({astronauts.length}):</strong>
                  <ul className="list-disc list-inside">
                    {astronauts.map((astronaut, idx) => (
                      <li key={idx}>{astronaut.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Info Panel */}
      <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-[1000] max-w-xs">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          🛰️ ISS Live Tracking
        </h2>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Altitude:</span>
            <span className="font-semibold">{issPosition.altitude.toFixed(2)} km</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Velocity:</span>
            <span className="font-semibold">{issPosition.velocity.toFixed(2)} km/h</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Latitude:</span>
            <span className="font-semibold">{issPosition.latitude.toFixed(4)}°</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Longitude:</span>
            <span className="font-semibold">{issPosition.longitude.toFixed(4)}°</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Visibility:</span>
            <span className="font-semibold capitalize">{issPosition.visibility}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700">
          <h3 className="font-semibold mb-2 text-sm">Orbital Path:</h3>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-blue-500 opacity-60" style={{ borderTop: '2px dashed' }}></div>
              <span className="text-gray-400">Past orbit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-red-500 opacity-70 rounded"></div>
              <span className="text-gray-400">Future path (2h)</span>
            </div>
          </div>
        </div>

        {astronauts.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <h3 className="font-semibold mb-2">👨‍🚀 Crew on Board ({astronauts.length})</h3>
            <ul className="text-sm space-y-1">
              {astronauts.map((astronaut, idx) => (
                <li key={idx} className="text-gray-300">• {astronaut.name}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-gray-700">
          <button
            onClick={() => setFollow(!follow)}
            className={`w-full py-2 px-4 rounded transition-colors ${
              follow
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {follow ? '📍 Following ISS' : '🔓 Free Camera'}
          </button>
        </div>

        <div className="mt-2 text-xs text-gray-500 text-center">
          Updated every 5 seconds
        </div>
      </div>
    </div>
  );
}
