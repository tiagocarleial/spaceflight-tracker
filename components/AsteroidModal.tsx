'use client';

import { ProcessedAsteroid } from '@/types/asteroid';
import SolarSystemMap from './SolarSystemMap';
import { useEffect } from 'react';

interface AsteroidModalProps {
  asteroid: ProcessedAsteroid;
  isOpen: boolean;
  onClose: () => void;
}

export default function AsteroidModal({ asteroid, isOpen, onClose }: AsteroidModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-start gap-4">
            {asteroid.isPotentiallyHazardous && (
              <i className="fa-solid fa-triangle-exclamation text-red-500 text-3xl mt-1"></i>
            )}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">
                {asteroid.cleanName}
              </h2>
              <p className="text-gray-400 mb-2">
                Close Approach: {asteroid.dateFormatted}
              </p>
              {asteroid.isPotentiallyHazardous && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 text-sm font-semibold rounded border border-red-500/30">
                  <i className="fa-solid fa-exclamation-circle"></i>
                  Potentially Hazardous Asteroid
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Solar System Map */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <i className="fa-solid fa-globe"></i>
              Solar System Position
            </h3>
            <SolarSystemMap asteroid={asteroid} />
            <p className="text-sm text-gray-500 mt-2 text-center">
              This is a simplified 2D representation showing the asteroid's approximate path relative to Earth's orbit
            </p>
          </div>

          {/* Asteroid Details */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <i className="fa-solid fa-info-circle"></i>
              Detailed Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Size Info */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-gray-400 text-sm mb-2">Estimated Diameter</div>
                <div className="text-white text-2xl font-bold mb-1">
                  {asteroid.diameterMin.toFixed(0)} - {asteroid.diameterMax.toFixed(0)} m
                </div>
                <div className="text-gray-500 text-xs">
                  Average: {asteroid.diameterAvg.toFixed(0)} meters
                </div>
              </div>

              {/* Velocity */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-gray-400 text-sm mb-2">Relative Velocity</div>
                <div className="text-white text-2xl font-bold mb-1">
                  {Math.round(asteroid.velocity).toLocaleString()} km/h
                </div>
                <div className="text-gray-500 text-xs">
                  {Math.round(asteroid.velocity / 3600).toLocaleString()} km/s
                </div>
              </div>

              {/* Miss Distance (km) */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-gray-400 text-sm mb-2">Miss Distance (km)</div>
                <div className="text-white text-2xl font-bold mb-1">
                  {(asteroid.missDistance / 1000000).toFixed(3)}M
                </div>
                <div className="text-gray-500 text-xs">
                  {Math.round(asteroid.missDistance).toLocaleString()} kilometers
                </div>
              </div>

              {/* Miss Distance (Lunar) */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-gray-400 text-sm mb-2">Miss Distance (Lunar)</div>
                <div className="text-white text-2xl font-bold mb-1">
                  {asteroid.missDistanceLunar.toFixed(2)} LD
                </div>
                <div className="text-gray-500 text-xs">
                  LD = Lunar Distance (384,400 km)
                </div>
              </div>

              {/* Miss Distance (AU) */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-gray-400 text-sm mb-2">Miss Distance (AU)</div>
                <div className="text-white text-2xl font-bold mb-1">
                  {asteroid.missDistanceAU.toFixed(4)} AU
                </div>
                <div className="text-gray-500 text-xs">
                  AU = Astronomical Unit (149.6M km)
                </div>
              </div>

              {/* Absolute Magnitude */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-gray-400 text-sm mb-2">Absolute Magnitude</div>
                <div className="text-white text-2xl font-bold mb-1">
                  {asteroid.absoluteMagnitude.toFixed(1)}
                </div>
                <div className="text-gray-500 text-xs">
                  Brightness measure (H)
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-lightbulb text-blue-400 text-xl mt-0.5"></i>
              <div className="flex-1">
                <h4 className="text-blue-300 font-semibold mb-2">Did you know?</h4>
                <p className="text-blue-200/80 text-sm">
                  {asteroid.isPotentiallyHazardous
                    ? 'This asteroid is classified as "Potentially Hazardous" because it is larger than 140 meters and its orbit brings it within 7.5 million km of Earth. However, "potentially hazardous" does not mean it will impact Earth.'
                    : 'Near-Earth Objects (NEOs) are asteroids and comets with orbits that bring them within 50 million km of Earth\'s orbit. NASA tracks over 30,000 NEOs to assess potential impact hazards.'}
                </p>
              </div>
            </div>
          </div>

          {/* NASA JPL Link */}
          <div className="flex justify-center">
            <a
              href={asteroid.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              <i className="fa-solid fa-external-link-alt"></i>
              View on NASA JPL Database
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
