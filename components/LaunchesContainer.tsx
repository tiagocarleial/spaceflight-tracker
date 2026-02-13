'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import LaunchCard from './LaunchCard';
import LaunchFilters, { FilterState } from './LaunchFilters';
import CalendarModal from './CalendarModal';
import { Launch } from '@/types/launch';
import { fetchUpcomingLaunches } from '@/lib/api';
import EzoicAd from './EzoicAd';

interface LaunchesContainerProps {
  initialLaunches: Launch[];
  initialCount: number;
  agencies: Array<{ id: number; name: string }>;
  stats: {
    total: number;
    confirmed: number;
    tbd: number;
    operators: number;
  };
}

// Filter out launches that are more than 4 hours past their launch time
function filterRecentLaunches(launches: Launch[]): Launch[] {
  const fourHoursInMs = 4 * 60 * 60 * 1000;
  const now = Date.now();

  return launches.filter((launch) => {
    const launchTime = new Date(launch.launchDate).getTime();
    const timeSinceLaunch = now - launchTime;
    // Keep if launch is in the future OR less than 4 hours past
    return timeSinceLaunch < fourHoursInMs;
  });
}

// Sort launches: T+ (launched) first, then by status priority
function sortLaunchesByStatus(launches: Launch[]): Launch[] {
  const statusPriority: Record<string, number> = {
    'Go': 1,
    'Hold': 2,
    'TBD': 3,
    'Success': 4,
    'Failure': 5,
  };

  return [...launches].sort((a, b) => {
    const now = Date.now();
    const aLaunched = new Date(a.launchDate).getTime() < now;
    const bLaunched = new Date(b.launchDate).getTime() < now;

    // If one has launched and the other hasn't, prioritize the launched one
    if (aLaunched && !bLaunched) return -1;
    if (!aLaunched && bLaunched) return 1;

    // If both launched, sort by launch time (most recent first)
    if (aLaunched && bLaunched) {
      return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
    }

    // If neither launched, sort by status priority
    const priorityA = statusPriority[a.status] || 999;
    const priorityB = statusPriority[b.status] || 999;
    return priorityA - priorityB;
  });
}

export default function LaunchesContainer({
  initialLaunches,
  initialCount,
  agencies,
  stats
}: LaunchesContainerProps) {
  const [launches, setLaunches] = useState<Launch[]>(sortLaunchesByStatus(filterRecentLaunches(initialLaunches)));
  const [count, setCount] = useState(initialCount);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    agency: '',
    status: '',
    search: '',
  });
  const [hasFiltersChanged, setHasFiltersChanged] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Periodically filter and re-sort launches
  useEffect(() => {
    const interval = setInterval(() => {
      setLaunches((prev) => sortLaunchesByStatus(filterRecentLaunches(prev)));
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Load launches only when filters change (not on initial mount)
  useEffect(() => {
    // Skip the initial mount
    if (!hasFiltersChanged) {
      setHasFiltersChanged(true);
      return;
    }

    const loadLaunches = async () => {
      setLoading(true);
      setError(null);

      try {
        const params: any = { limit: 20, offset: 0 };

        if (filters.agency) {
          params.lsp = filters.agency;
        }

        if (filters.status) {
          params.status = filters.status;
        }

        if (filters.search) {
          params.search = filters.search;
        }

        const data = await fetchUpcomingLaunches(params);
        setLaunches(sortLaunchesByStatus(filterRecentLaunches(data.launches)));
        setCount(data.count);
      } catch (err) {
        setError('Failed to load launches. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadLaunches();
  }, [filters.agency, filters.status, filters.search]);

  // Refresh ads after filter-driven content replacement
  const prevLoadingRef = useRef(false);
  useEffect(() => {
    if (prevLoadingRef.current && !loading && window.ezstandalone) {
      window.ezstandalone.cmd.push(() => {
        window.ezstandalone!.destroyPlaceholders(101, 102, 103);
        window.ezstandalone!.showAds(101, 102, 103);
      });
    }
    prevLoadingRef.current = loading;
  }, [loading]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleLoadMore = async () => {
    setLoadingMore(true);
    setError(null);

    try {
      const params: any = {
        limit: 20,
        offset: launches.length
      };

      if (filters.agency) {
        params.lsp = filters.agency;
      }

      if (filters.status) {
        params.status = filters.status;
      }

      if (filters.search) {
        params.search = filters.search;
      }

      const data = await fetchUpcomingLaunches(params);
      setLaunches(prev => sortLaunchesByStatus(filterRecentLaunches([...prev, ...data.launches])));
      setCount(data.count);

      if (window.ezstandalone) {
        window.ezstandalone.cmd.push(() => {
          window.ezstandalone!.destroyPlaceholders(102, 103);
          window.ezstandalone!.showAds(102, 103);
        });
      }
    } catch (err) {
      setError('Failed to load more launches. Please try again.');
      console.error(err);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleSelectLaunch = useCallback((launchId: string) => {
    // Fechar modal (já acontece no handler do modal)
    setIsCalendarOpen(false);

    // Aguardar um frame para garantir que modal fechou
    requestAnimationFrame(() => {
      const element = document.getElementById(`launch-${launchId}`);
      if (element) {
        // Scroll suave até o elemento
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center', // Centraliza na tela
        });

        // Adicionar highlight temporário
        element.classList.add('ring-4', 'ring-blue-500', 'ring-opacity-50');
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-blue-500', 'ring-opacity-50');
        }, 2000);
      }
    });
  }, []);

  return (
    <>
      {/* Filters */}
      <LaunchFilters onFilterChange={handleFilterChange} agencies={agencies} />

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="text-gray-400 mt-4">Loading launches...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-8">
          <p className="text-red-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 text-sm text-red-300 hover:text-red-200 underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* Launches Grid */}
      {!loading && !error && (
        <>
          {/* Title with inline stats */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              <h1 className="text-2xl font-bold text-white">Upcoming Space Launches</h1>
            </div>

            <div className="flex items-center gap-4 flex-1">
              {/* Inline Stats */}
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray-800/50 border border-gray-700 rounded px-3 py-1 flex items-center gap-2">
                  <span className="text-green-400 font-bold text-sm">{stats.confirmed}</span>
                  <span className="text-gray-400 text-xs">Confirmed</span>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded px-3 py-1 flex items-center gap-2">
                  <span className="text-yellow-400 font-bold text-sm">{stats.tbd}</span>
                  <span className="text-gray-400 text-xs">TBD</span>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded px-3 py-1 flex items-center gap-2">
                  <span className="text-purple-400 font-bold text-sm">{stats.operators}</span>
                  <span className="text-gray-400 text-xs">Operators</span>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded px-3 py-1 flex items-center gap-2">
                  <span className="text-blue-400 font-bold text-sm">{stats.total}</span>
                  <span className="text-gray-400 text-xs">Upcoming</span>
                </div>
              </div>

              {/* Calendar Icon Button */}
              <button
                onClick={() => setIsCalendarOpen(true)}
                className="ml-auto p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Open calendar"
              >
                <i className="fa-regular fa-calendar text-blue-400 text-xl"></i>
              </button>
            </div>
          </div>

          {/* Ezoic - Top Banner */}
          <div className="my-4">
            <EzoicAd id={101} />
          </div>

          {launches.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No launches found matching your filters.</p>
              <button
                onClick={() => handleFilterChange({ agency: '', status: '', search: '' })}
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {launches.map((launch, index) => (
                  <LaunchCard key={launch.id} launch={launch} />
                ))}
              </div>

              {/* Ezoic - In-feed after 6 cards */}
              {launches.length > 6 && (
                <div className="my-4">
                  <EzoicAd id={102} />
                </div>
              )}

              {/* Ezoic - Before Load More */}
              <div className="mt-6">
                <EzoicAd id={103} />
              </div>

              {/* Load More Section */}
              {launches.length < count && (
                <div className="mt-8 text-center">
                  <p className="text-gray-400 text-sm mb-4">
                    Showing {launches.length} of {count} launches
                  </p>
                  <button
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                  >
                    {loadingMore ? (
                      <>
                        <div className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                        Loading...
                      </>
                    ) : (
                      <>
                        Load More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        launches={launches}
        onSelectLaunch={handleSelectLaunch}
      />
    </>
  );
}
