'use client';

import { useState, useEffect } from 'react';
import { getEarthquakes } from '@/lib/earthquake-api';
import type { Earthquake } from '@/types/earthquake';

export default function EarthquakeFooter() {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEarthquakes();
    // Refresh every 5 minutes
    const interval = setInterval(fetchEarthquakes, 300000);
    return () => clearInterval(interval);
  }, []);

  async function fetchEarthquakes() {
    try {
      const data = await getEarthquakes();
      setEarthquakes(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load earthquakes:', error);
      setLoading(false);
    }
  }

  function getMagnitudeColorClass(magnitude: number): string {
    if (magnitude >= 7.0) return 'text-red-500';
    if (magnitude >= 5.0) return 'text-orange-500';
    if (magnitude >= 3.0) return 'text-yellow-500';
    return 'text-green-500';
  }

  return (
    <div className="md:hidden bg-gray-900 border-t border-gray-700 h-[35vh] flex-shrink-0 overflow-y-auto">
      <div className="p-3">
        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          📋 Recent Earthquakes ({earthquakes.length})
        </h3>

        {loading ? (
          <div className="text-center py-6">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-2"></div>
            <p className="text-gray-400 text-xs">Loading earthquakes...</p>
          </div>
        ) : earthquakes.length === 0 ? (
          <div className="text-center py-6">
            <i className="fa-solid fa-earth-americas text-gray-600 text-3xl mb-2"></i>
            <p className="text-gray-400 text-sm">No earthquakes in the last 24 hours</p>
          </div>
        ) : (
          <div className="space-y-2">
            {earthquakes
              .sort((a, b) => b.magnitude - a.magnitude)
              .slice(0, 15)
              .map((eq) => (
                <div
                  key={eq.id}
                  className="bg-gray-800 p-2 rounded-lg active:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-base ${getMagnitudeColorClass(eq.magnitude)}`}>
                        M{eq.magnitude.toFixed(1)}
                      </span>
                      <span className="text-gray-300 text-xs line-clamp-1">{eq.place}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{eq.timeFormatted}</span>
                    <span>
                      {eq.depthKm} • {eq.continent}
                      {eq.tsunami && <span className="text-yellow-400 ml-1">⚠️</span>}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
