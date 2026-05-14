'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ISSPosition, Astronaut } from '@/types/iss';
import { getTiangongPosition, getTaikonauts, getTiangongFuturePositions } from '@/lib/tiangong-api';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom Tiangong icon (using ISS icon for now, can be customized later)
const tiangongIcon = L.icon({
  iconUrl: '/images/iss-icon.png', // Can create tiangong-icon.png later
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

export default function TiangongMap() {
  const [tiangongPosition, setTiangongPosition] = useState<ISSPosition | null>(null);
  const [orbitPath, setOrbitPath] = useState<[number, number][]>([]);
  const [futurePath, setFuturePath] = useState<[number, number][]>([]);
  const [taikonauts, setTaikonauts] = useState<Astronaut[]>([]);
  const [follow, setFollow] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial fetch
    fetchTiangongData();
    fetchTaikonauts();
    fetchFuturePath();

    // Update Tiangong position every 5 seconds
    const interval = setInterval(fetchTiangongData, 5000);

    // Update taikonauts every 60 seconds
    const taikonautsInterval = setInterval(fetchTaikonauts, 60000);

    // Update future path every 5 minutes
    const futurePathInterval = setInterval(fetchFuturePath, 300000);

    return () => {
      clearInterval(interval);
      clearInterval(taikonautsInterval);
      clearInterval(futurePathInterval);
    };
  }, []);

  async function fetchTiangongData() {
    const position = await getTiangongPosition();
    if (position) {
      setTiangongPosition(position);
      setLoading(false);

      // Add to orbit path (keep last 50 points)
      setOrbitPath((prev) => {
        const newPath = [...prev, [position.latitude, position.longitude] as [number, number]];
        return newPath.slice(-50);
      });
    }
  }

  async function fetchTaikonauts() {
    const crew = await getTaikonauts();
    setTaikonauts(crew);
  }

  async function fetchFuturePath() {
    const future = await getTiangongFuturePositions(2); // Next 2 hours
    setFuturePath(future);
  }

  if (loading || !tiangongPosition) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading Tiangong position...</p>
        </div>
      </div>
    );
  }

  const currentPosition: [number, number] = [tiangongPosition.latitude, tiangongPosition.longitude];

  return (
    <div className="relative h-full w-full">
      {/* Map */}
      <MapContainer
        center={currentPosition}
        zoom={3}
        className="h-full w-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Tiangong marker */}
        <Marker position={currentPosition} icon={tiangongIcon}>
          <Popup>
            <div className="text-center font-semibold">
              <h3 className="text-lg mb-2">🇨🇳 Tiangong Space Station</h3>
              <p className="text-sm">天宮太空站</p>
            </div>
          </Popup>
        </Marker>

        {/* Orbit trail (past positions) */}
        {orbitPath.length > 1 && (
          <Polyline positions={orbitPath} color="red" weight={2} opacity={0.6} />
        )}

        {/* Future orbit path */}
        {futurePath.length > 1 && (
          <Polyline positions={futurePath} color="orange" weight={2} opacity={0.4} dashArray="5, 10" />
        )}

        <MapController position={currentPosition} follow={follow} />
      </MapContainer>

      {/* Info Panel */}
      <div className="absolute top-4 left-4 bg-gray-900/95 backdrop-blur-sm text-white p-6 rounded-lg shadow-2xl border border-gray-700 max-w-sm z-[1000]">
        <div className="flex items-center gap-3 mb-4">
          <i className="fa-solid fa-satellite text-3xl text-red-400"></i>
          <div>
            <h2 className="text-2xl font-bold">Tiangong Live</h2>
            <p className="text-sm text-gray-400">天宮太空站</p>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400">Latitude:</span>
            <span className="font-mono font-semibold">{tiangongPosition.latitude.toFixed(4)}°</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400">Longitude:</span>
            <span className="font-mono font-semibold">{tiangongPosition.longitude.toFixed(4)}°</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400">Altitude:</span>
            <span className="font-mono font-semibold">{tiangongPosition.altitude.toFixed(2)} km</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400">Velocity:</span>
            <span className="font-mono font-semibold">{tiangongPosition.velocity.toFixed(2)} km/h</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400">Visibility:</span>
            <span className="font-semibold capitalize">{tiangongPosition.visibility}</span>
          </div>

          {/* Taikonauts */}
          <div className="pt-3">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <i className="fa-solid fa-users text-red-400"></i>
              Taikonauts Aboard
            </h3>
            {taikonauts.length > 0 ? (
              <ul className="space-y-1">
                {taikonauts.map((person, index) => (
                  <li key={index} className="text-sm bg-gray-800/50 p-2 rounded">
                    {person.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400">Crew: 3 taikonauts</p>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <button
            onClick={() => setFollow(!follow)}
            className={`w-full py-2 px-4 rounded transition-colors ${
              follow
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
            }`}
          >
            {follow ? '🔒 Following' : '🔓 Click to Follow'}
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-3 text-center">
          Updates every 5 seconds
        </p>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-gray-900/95 backdrop-blur-sm text-white p-4 rounded-lg shadow-2xl border border-gray-700 z-[1000]">
        <h3 className="text-sm font-semibold mb-2">Legend</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-red-500"></div>
            <span>Orbit Trail (past)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-orange-500 opacity-60" style={{borderTop: '2px dashed'}}></div>
            <span>Predicted Path (2h)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
