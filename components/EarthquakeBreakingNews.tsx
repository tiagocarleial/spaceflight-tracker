'use client';

import Link from 'next/link';

interface Props {
  magnitude: number;
  place: string;
  timeFormatted: string;
  tsunami: boolean;
}

export default function EarthquakeBreakingNews({ magnitude, place, timeFormatted, tsunami }: Props) {
  return (
    <Link href="/earthquakes">
      <div className="w-full bg-gradient-to-r from-red-950 via-red-900 to-red-950 border-y border-red-700 hover:from-red-900 hover:via-red-800 hover:to-red-900 transition-colors cursor-pointer group">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Breaking label */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-red-300 font-black text-[10px] md:text-xs tracking-widest uppercase">
                Breaking
              </span>
            </div>

            <div className="h-4 w-px bg-red-700 flex-shrink-0 hidden sm:block"></div>

            {/* Icon + magnitude */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <i className="fa-solid fa-earth-americas text-red-400 text-sm"></i>
              <span className="text-white font-black text-sm md:text-base">
                M{magnitude.toFixed(1)}
              </span>
              <span className="text-red-300 text-xs md:text-sm font-semibold">
                {magnitude >= 8.0 ? 'Great' : magnitude >= 7.0 ? 'Major' : 'Strong'} Earthquake
              </span>
            </div>

            <div className="h-4 w-px bg-red-700 flex-shrink-0 hidden sm:block"></div>

            {/* Location */}
            <span className="text-gray-200 text-xs md:text-sm min-w-0 flex-1 truncate">
              <i className="fa-solid fa-location-dot text-red-400 mr-1.5"></i>
              {place}
            </span>

            {/* Time + tsunami warning */}
            <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
              {tsunami && (
                <span className="bg-yellow-500 text-yellow-950 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wide animate-pulse">
                  Tsunami Alert
                </span>
              )}
              <span className="text-red-400 text-[10px] md:text-xs">{timeFormatted}</span>
              <i className="fa-solid fa-arrow-right text-red-400 text-xs group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
