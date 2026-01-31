'use client';

import { ProcessedAstronomyEvent } from '@/types/astronomy-event';

interface AstronomyEventCardProps {
  event: ProcessedAstronomyEvent;
}

const EVENT_ICONS: Record<string, string> = {
  'eclipse-solar': 'fa-sun',
  'eclipse-lunar': 'fa-moon',
  'meteor-shower': 'fa-meteor',
  'supermoon': 'fa-moon',
  'conjunction': 'fa-circle-dot',
  'planet-visibility': 'fa-planet-ringed',
  'comet': 'fa-comet',
  'moon-phase': 'fa-moon-stars',
};

const EVENT_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  'eclipse-solar': { bg: 'bg-yellow-900/20', border: 'border-yellow-500/50', text: 'text-yellow-400' },
  'eclipse-lunar': { bg: 'bg-red-900/20', border: 'border-red-500/50', text: 'text-red-400' },
  'meteor-shower': { bg: 'bg-purple-900/20', border: 'border-purple-500/50', text: 'text-purple-400' },
  'supermoon': { bg: 'bg-blue-900/20', border: 'border-blue-500/50', text: 'text-blue-400' },
  'conjunction': { bg: 'bg-green-900/20', border: 'border-green-500/50', text: 'text-green-400' },
  'planet-visibility': { bg: 'bg-indigo-900/20', border: 'border-indigo-500/50', text: 'text-indigo-400' },
  'comet': { bg: 'bg-cyan-900/20', border: 'border-cyan-500/50', text: 'text-cyan-400' },
  'moon-phase': { bg: 'bg-gray-900/20', border: 'border-gray-500/50', text: 'text-gray-400' },
};

export default function AstronomyEventCard({ event }: AstronomyEventCardProps) {
  const colors = EVENT_COLORS[event.type] || EVENT_COLORS['moon-phase'];
  const icon = EVENT_ICONS[event.type] || 'fa-star';

  return (
    <div
      className={`bg-gray-800 border-2 rounded-lg p-6 hover:shadow-lg transition-all ${colors.border} ${colors.bg}`}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`flex-shrink-0 w-14 h-14 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center`}>
          <i className={`fa-solid ${icon} ${colors.text} text-2xl`}></i>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
          <p className="text-sm text-gray-400">{event.dateFormatted}</p>
          {event.peakTime && (
            <p className="text-xs text-gray-500 mt-1">
              <i className="fa-solid fa-clock mr-1"></i>
              Peak: {event.peakTime}
            </p>
          )}
        </div>
        <div className="flex-shrink-0">
          <span className={`inline-flex items-center px-3 py-1 ${colors.bg} ${colors.text} text-xs font-semibold rounded-full border ${colors.border}`}>
            {event.category}
          </span>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mb-4">
        {event.isPast ? (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-700/50 text-gray-400 text-xs font-semibold rounded">
            <i className="fa-solid fa-check-circle"></i>
            Past Event
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded border border-green-500/30">
            <i className="fa-solid fa-calendar-days"></i>
            {event.daysUntil === 0
              ? 'Today!'
              : event.daysUntil === 1
              ? 'Tomorrow'
              : `In ${event.daysUntil} days`}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{event.description}</p>

      {/* Visibility */}
      <div className="bg-gray-900/50 rounded-lg p-3 mb-4">
        <div className="flex items-start gap-2">
          <i className="fa-solid fa-location-dot text-gray-400 mt-0.5"></i>
          <div>
            <div className="text-xs text-gray-500 mb-1">Visibility</div>
            <div className="text-sm text-gray-300">{event.visibility}</div>
          </div>
        </div>
      </div>

      {/* Details */}
      {event.details && event.details.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <i className="fa-solid fa-circle-info"></i>
            Details
          </h4>
          <ul className="space-y-1.5">
            {event.details.map((detail, index) => (
              <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                <i className="fa-solid fa-chevron-right text-gray-600 mt-1 text-[8px]"></i>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
