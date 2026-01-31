'use client';

import { useState } from 'react';
import { ProcessedAsteroid } from '@/types/asteroid';
import { getAsteroidSizeComparison, getMissDistanceCategory } from '@/lib/nasa-api';
import AsteroidModal from './AsteroidModal';

interface AsteroidCardProps {
  asteroid: ProcessedAsteroid;
}

export default function AsteroidCard({ asteroid }: AsteroidCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sizeComparison = getAsteroidSizeComparison(asteroid.diameterAvg);
  const distanceCategory = getMissDistanceCategory(asteroid.missDistanceLunar);

  return (
    <>
      <div
        className={`relative bg-gray-800 border-2 rounded-lg p-6 hover:shadow-lg transition-all ${
          asteroid.isPotentiallyHazardous
            ? 'border-red-500/50 bg-red-900/10'
            : 'border-gray-700 hover:border-gray-600'
        }`}
      >
      {/* Pin Icon for Hazardous */}
      {asteroid.isPotentiallyHazardous && (
        <div className="absolute top-3 left-3">
          <i className="fa-solid fa-thumbtack text-red-500 text-xl transform rotate-45"></i>
        </div>
      )}

      {/* Header */}
      <div className={`flex items-start justify-between mb-4 ${asteroid.isPotentiallyHazardous ? 'pl-6' : ''}`}>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
            {asteroid.cleanName}
          </h3>
          <p className="text-sm text-gray-400">
            {asteroid.dateFormatted}
          </p>
        </div>

        {asteroid.isPotentiallyHazardous && (
          <div className="flex-shrink-0 ml-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded border border-red-500/30">
              <i className="fa-solid fa-triangle-exclamation"></i>
              Hazardous
            </span>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Size */}
        <div className="bg-gray-900/50 rounded p-3">
          <div className="text-gray-400 text-xs mb-1">Estimated Size</div>
          <div className="text-white font-bold text-lg">
            {Math.round(asteroid.diameterAvg)} m
          </div>
          <div className="text-gray-500 text-xs mt-1">
            {sizeComparison}
          </div>
        </div>

        {/* Speed */}
        <div className="bg-gray-900/50 rounded p-3">
          <div className="text-gray-400 text-xs mb-1">Velocity</div>
          <div className="text-white font-bold text-lg">
            {Math.round(asteroid.velocity).toLocaleString()} km/h
          </div>
          <div className="text-gray-500 text-xs mt-1">
            {Math.round(asteroid.velocity / 3600)} km/s
          </div>
        </div>

        {/* Miss Distance */}
        <div className="bg-gray-900/50 rounded p-3">
          <div className="text-gray-400 text-xs mb-1">Miss Distance</div>
          <div className="text-white font-bold text-lg">
            {asteroid.missDistanceLunar.toFixed(2)} LD
          </div>
          <div className="text-gray-500 text-xs mt-1">
            {distanceCategory}
          </div>
        </div>

        {/* Distance in km */}
        <div className="bg-gray-900/50 rounded p-3">
          <div className="text-gray-400 text-xs mb-1">Distance (km)</div>
          <div className="text-white font-bold text-lg">
            {(asteroid.missDistance / 1000000).toFixed(2)}M
          </div>
          <div className="text-gray-500 text-xs mt-1">
            {Math.round(asteroid.missDistance).toLocaleString()} km
          </div>
        </div>
      </div>

      {/* Info note */}
      <div className="text-xs text-gray-500 mb-3 bg-gray-900/30 rounded p-2">
        <i className="fa-solid fa-info-circle mr-1"></i>
        1 LD (Lunar Distance) = 384,400 km (Earth-Moon distance)
      </div>

      {/* View Orbit Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full mb-3 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-satellite-dish"></i>
        View Solar System Position
      </button>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-700">
        <div className="text-xs text-gray-500">
          ID: {asteroid.id}
        </div>
        <a
          href={asteroid.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
        >
          NASA JPL Data
          <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
        </a>
      </div>
    </div>

    {/* Modal - Outside card to prevent hover issues */}
    <AsteroidModal
      asteroid={asteroid}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    />
    </>
  );
}
