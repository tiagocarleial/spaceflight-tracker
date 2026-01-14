'use client';

import { Launch } from '@/types/launch';
import { Rocket } from '@/types/rocket';
import { useCountdown } from '@/hooks/useCountdown';
import Link from 'next/link';

interface LaunchDetailClientProps {
  launch: Launch;
  rocket?: Rocket;
}

export default function LaunchDetailClient({ launch, rocket }: LaunchDetailClientProps) {
  const timeLeft = useCountdown(launch.launchDate);

  const formatCountdown = () => {
    const prefix = timeLeft.total < 0 ? 'T+' : 'T-';

    if (timeLeft.days > 0) {
      return `${prefix}${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`;
    } else if (timeLeft.hours > 0) {
      return `${prefix}${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
    } else {
      return `${prefix}${timeLeft.minutes}m ${timeLeft.seconds}s`;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Go':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'TBD':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Hold':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Success':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Failure':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div>
      {/* Mission Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(launch.status)}`}>
            {launch.status}
          </span>
          <span className={`font-mono text-lg font-bold ${timeLeft.total < 0 ? 'text-green-400' : 'text-blue-400'}`} suppressHydrationWarning>
            {formatCountdown()}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-white mb-2">{launch.name}</h1>
        <p className="text-xl text-gray-400">{launch.operator}</p>
      </div>

      {/* Mission Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left Column - Mission Info */}
        <div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Mission Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Launch Date</p>
                <p className="text-white font-medium">{formatDate(launch.launchDate)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white font-medium">{launch.location}</p>
              </div>
              {launch.recovery && (
                <div>
                  <p className="text-gray-400 text-sm mb-1">Recovery</p>
                  <p className="text-white font-medium">{launch.recovery}</p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Description</h2>
            <p className="text-gray-300">{launch.description}</p>
          </div>

          {/* Livestream */}
          {launch.livestream && timeLeft.total > -3600000 && timeLeft.total <= 5400000 && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mt-6">
              <h2 className="text-xl font-bold text-white mb-4">Watch Live</h2>
              <button
                onClick={() => window.open(launch.livestream, '_blank')}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors animate-pulse"
              >
                🔴 Watch Live Stream
              </button>
            </div>
          )}
        </div>

        {/* Right Column - Rocket Info */}
        {rocket && (
          <div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Rocket</h2>

              {/* Rocket Image */}
              <div className="relative h-64 bg-gray-900 rounded-lg overflow-hidden mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${rocket.image})` }}
                />
              </div>

              {/* Rocket Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{rocket.fullName}</h3>
                  <p className="text-gray-400">{rocket.operator}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Height</p>
                    <p className="text-white font-medium">
                      {rocket.specs.height.meters}m / {rocket.specs.height.feet}ft
                    </p>
                  </div>
                  {rocket.specs.payloadToLEO && (
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Payload to LEO</p>
                      <p className="text-white font-medium">
                        {rocket.specs.payloadToLEO.kg.toLocaleString()} kg
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Stages</p>
                    <p className="text-white font-medium">{rocket.specs.stages}</p>
                  </div>
                  {rocket.reusable && (
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Reusable</p>
                      <p className="text-purple-400 font-medium">Yes</p>
                    </div>
                  )}
                </div>

                {/* Link to Rocket Details */}
                <Link href={`/rockets/${rocket.id}`}>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors mt-4">
                    View Rocket Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
