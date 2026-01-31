'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { getAstronomyEvents } from '@/lib/astronomy-events-api';
import AstronomyEventCard from '@/components/AstronomyEventCard';

export default function EventsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [showPastEvents, setShowPastEvents] = useState(false);

  const allEvents = getAstronomyEvents();

  const filteredEvents = useMemo(() => {
    let filtered = allEvents;

    // Filter by type
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(event => event.type === selectedFilter);
    }

    // Filter past events
    if (!showPastEvents) {
      filtered = filtered.filter(event => !event.isPast);
    }

    return filtered;
  }, [allEvents, selectedFilter, showPastEvents]);

  const upcomingCount = allEvents.filter(e => !e.isPast).length;
  const pastCount = allEvents.filter(e => e.isPast).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-black">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40 backdrop-blur-sm bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
              <i className="fa-solid fa-rocket text-xl"></i>
              <span className="font-bold text-lg">Spaceflight Tracker</span>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/launches"
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Launches
              </Link>
              <Link
                href="/rockets"
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Rockets
              </Link>
              <Link
                href="/iss"
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                ISS Live
              </Link>
              <Link
                href="/asteroids"
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Asteroids
              </Link>
              <Link
                href="/events"
                className="text-white px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-semibold"
              >
                Events
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 px-4">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <i className="fa-solid fa-calendar-star text-yellow-300"></i>
            <span className="text-white text-sm font-semibold">2026 Astronomy Calendar</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Astronomical Events
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Explore upcoming eclipses, meteor showers, supermoons, and other celestial events in 2026
          </p>
          <div className="flex items-center justify-center gap-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">{upcomingCount}</div>
              <div className="text-sm text-gray-300">Upcoming Events</div>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">{allEvents.length}</div>
              <div className="text-sm text-gray-300">Total Events</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Event Type Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <i className="fa-solid fa-star mr-2"></i>
                All Events
              </button>
              <button
                onClick={() => setSelectedFilter('eclipse-solar')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === 'eclipse-solar'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <i className="fa-solid fa-sun mr-2"></i>
                Solar Eclipses
              </button>
              <button
                onClick={() => setSelectedFilter('eclipse-lunar')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === 'eclipse-lunar'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <i className="fa-solid fa-moon mr-2"></i>
                Lunar Eclipses
              </button>
              <button
                onClick={() => setSelectedFilter('meteor-shower')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === 'meteor-shower'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <i className="fa-solid fa-meteor mr-2"></i>
                Meteor Showers
              </button>
              <button
                onClick={() => setSelectedFilter('supermoon')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === 'supermoon'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <i className="fa-solid fa-moon mr-2"></i>
                Supermoons
              </button>
              <button
                onClick={() => setSelectedFilter('conjunction')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === 'conjunction'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <i className="fa-solid fa-circle-dot mr-2"></i>
                Conjunctions
              </button>
            </div>

            {/* Show Past Events Toggle */}
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPastEvents}
                  onChange={(e) => setShowPastEvents(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                />
                <span className="text-sm text-gray-300">Show Past Events</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <i className="fa-solid fa-calendar-xmark text-6xl text-gray-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-white mb-2">No Events Found</h3>
            <p className="text-gray-400 mb-6">
              {showPastEvents
                ? 'No events match your current filter.'
                : 'Try enabling "Show Past Events" or change your filter.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <AstronomyEventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <i className="fa-solid fa-circle-info text-blue-400 text-xl mt-0.5"></i>
            <div className="flex-1">
              <h4 className="text-blue-300 font-semibold mb-2">About These Events</h4>
              <p className="text-blue-200/80 text-sm mb-3">
                This calendar includes major astronomical events for 2026, including solar and lunar eclipses,
                meteor showers, supermoons, and planetary conjunctions. All times are in UTC. Check local
                visibility conditions and convert times to your timezone for the best viewing experience.
              </p>
              <p className="text-blue-200/60 text-xs">
                Data compiled from astronomical calendars and predictions. Actual visibility may vary based
                on weather conditions and local geography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
