'use client';

import { Rocket } from '@/types/rocket';
import Link from 'next/link';

interface RocketCardProps {
  rocket: Rocket;
}

export default function RocketCard({ rocket }: RocketCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Development':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Retired':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Link href={`/rockets/${rocket.id}`}>
      <div className="group relative bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-blue-500/10 flex flex-col h-full overflow-hidden cursor-pointer">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity group-hover:opacity-100"
          style={{ backgroundImage: `url(${rocket.image})` }}
          role="img"
          aria-label={`${rocket.fullName} rocket`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/50 to-gray-900/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Status Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(rocket.status)}`}>
              {rocket.status}
            </span>
            {rocket.reusable && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-purple-500/20 text-purple-400 border-purple-500/30">
                Reusable
              </span>
            )}
          </div>

          {/* Rocket Name */}
          <h3 className="text-xl font-bold text-white mb-2">{rocket.fullName}</h3>

          {/* Rocket Info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-start">
              <span className="text-gray-400 text-sm w-20 flex-shrink-0">Operator:</span>
              <span className="text-gray-200 text-sm font-medium">{rocket.operator}</span>
            </div>
            <div className="flex items-start">
              <span className="text-gray-400 text-sm w-20 flex-shrink-0">Height:</span>
              <span className="text-gray-200 text-sm">{rocket.specs.height.meters}m / {rocket.specs.height.feet}ft</span>
            </div>
            {rocket.specs.payloadToLEO && (
              <div className="flex items-start">
                <span className="text-gray-400 text-sm w-20 flex-shrink-0">To LEO:</span>
                <span className="text-gray-200 text-sm">{rocket.specs.payloadToLEO.kg.toLocaleString()} kg</span>
              </div>
            )}
            {rocket.totalLaunches !== undefined && (
              <div className="flex items-start">
                <span className="text-gray-400 text-sm w-20 flex-shrink-0">Launches:</span>
                <span className="text-gray-200 text-sm">{rocket.totalLaunches}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{rocket.description}</p>

          {/* Spacer to push button to bottom */}
          <div className="flex-grow"></div>

          {/* View Details Button */}
          <div className="mt-auto">
            <div className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors text-center">
              View Details
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
