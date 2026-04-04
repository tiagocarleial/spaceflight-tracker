'use client';

import { useState } from 'react';

const ARTEMIS_LIVE_YOUTUBE_ID = 'NQ3gSBrhSk4';

export default function ArtemisLiveCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Main Card - Compact */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="relative bg-gradient-to-r from-red-900/30 via-gray-800/50 to-blue-900/30 border-2 border-red-500/50 rounded-lg overflow-hidden cursor-pointer group hover:border-red-400 transition-all hover:shadow-xl hover:shadow-red-500/20"
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 animate-pulse pointer-events-none"></div>

        <div className="relative z-10 p-4 md:p-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Left: Live Indicator & Title */}
            <div className="flex items-center gap-3 flex-1">
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-red-400 font-bold text-sm md:text-base">🔴 LIVE NOW</span>
                  <span className="text-gray-500">•</span>
                  <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    Artemis II Special Coverage
                  </h2>
                </div>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  NASA's historic return to the Moon - Watch the live stream
                </p>
              </div>
            </div>

            {/* Right: Watch Button */}
            <button className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 group-hover:scale-105 shadow-lg shadow-red-500/30">
              <i className="fa-solid fa-play"></i>
              <span>Watch Live</span>
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white text-xl font-bold hover:text-red-400 transition-colors flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg"
              aria-label="Close video"
            >
              <i className="fa-solid fa-times"></i>
              Close
            </button>

            {/* Video Container */}
            <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl border-2 border-red-500/30" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${ARTEMIS_LIVE_YOUTUBE_ID}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                title="Artemis II Live Coverage - Full Screen"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Info Below Video */}
            <div className="mt-4 bg-gray-900/80 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                <h3 className="text-white font-bold text-lg">LIVE: Artemis II Special Coverage</h3>
              </div>
              <p className="text-gray-400 text-sm">
                NASA's Artemis II mission marks humanity's return to lunar orbit with a crewed spacecraft.
                This historic mission will pave the way for sustained lunar exploration and eventual Mars missions.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
