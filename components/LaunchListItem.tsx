'use client';

import { Launch } from '@/types/launch';

interface LaunchListItemProps {
  launch: Launch;
  onClick: (launchId: string) => void;
}

export default function LaunchListItem({ launch, onClick }: LaunchListItemProps) {
  const launchTime = new Date(launch.launchDate);
  const timeString = launchTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Go':
        return 'bg-green-500/20 text-green-400';
      case 'TBD':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Hold':
        return 'bg-orange-500/20 text-orange-400';
      case 'Success':
        return 'bg-blue-500/20 text-blue-400';
      case 'Failure':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <button
      onClick={() => onClick(launch.id)}
      className="w-full bg-gray-800 hover:bg-gray-700 rounded p-3 transition-colors text-left"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-white font-medium text-sm line-clamp-1">{launch.name}</span>
        <span className={`px-2 py-0.5 rounded text-xs flex-shrink-0 ml-2 ${getStatusColor(launch.status)}`}>
          {launch.status}
        </span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <span>{timeString}</span>
        <span>•</span>
        <span className="line-clamp-1">{launch.operator}</span>
      </div>
    </button>
  );
}
