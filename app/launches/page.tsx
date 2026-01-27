import LaunchesContainer from '@/components/LaunchesContainer';
import { fetchUpcomingLaunches, fetchLaunchProviders } from '@/lib/api';
import { mockLaunches } from '@/data/mockLaunches';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upcoming Space Launches - Real-Time Launch Schedule',
  description: 'View all upcoming space launches from SpaceX, NASA, Blue Origin, ISRO, CNSA and more. Track launch dates, times, and mission details in real-time with live countdowns.',
  keywords: ['space launches', 'upcoming launches', 'SpaceX launch', 'NASA launch', 'rocket launch schedule', 'space mission tracker'],
  alternates: {
    canonical: 'https://spaceflight-tracker.vercel.app/launches',
  },
  openGraph: {
    title: 'Upcoming Space Launches - Real-Time Launch Schedule',
    description: 'Track all upcoming space launches from major space agencies worldwide. Live countdowns and mission details.',
    url: 'https://spaceflight-tracker.vercel.app/launches',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upcoming Space Launches - Real-Time Launch Schedule',
    description: 'Track all upcoming space launches from major space agencies worldwide.',
  },
};

export default async function LaunchesPage() {
  // Try to fetch real data, fallback to mock data if API fails
  let launches = mockLaunches;
  let count = mockLaunches.length;
  let agencies: Array<{ id: number; name: string }> = [];
  let useRealData = false;

  try {
    const [launchData, agencyData] = await Promise.all([
      fetchUpcomingLaunches({ limit: 20 }),
      fetchLaunchProviders(),
    ]);
    launches = launchData.launches;
    count = launchData.count;
    agencies = agencyData;
    useRealData = true;
  } catch (error) {
    console.error('Failed to fetch from API, using mock data:', error);
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <div className="cursor-pointer">
                <div className="text-xl md:text-3xl font-bold text-white mb-1 flex items-center gap-2 md:gap-3">
                  <i className="fa-solid fa-rocket text-white"></i>
                  <span className="hidden sm:inline">Spaceflight Tracker</span>
                  <span className="sm:hidden">SpaceFlight</span>
                </div>
                <p className="text-gray-400 text-xs md:text-sm hidden sm:block">
                  Keep up to date with upcoming space launches
                </p>
              </div>
            </Link>
            <div className="flex gap-2 md:gap-4">
              <Link href="/launches">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm md:text-base font-medium transition-colors">
                  Launches
                </button>
              </Link>
              <Link href="/rockets">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Rockets
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Data Source Indicator */}
        {!useRealData && (
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 mb-6">
            <p className="text-yellow-400 text-sm">
              Using mock data. Real data from The Space Devs API could not be loaded.
            </p>
          </div>
        )}

        {/* Launches Section with Filters */}
        <section className="mb-12">
          <LaunchesContainer
            initialLaunches={launches}
            initialCount={count}
            agencies={agencies}
            stats={{
              total: count,
              confirmed: launches.filter(l => l.status === 'Go').length,
              tbd: launches.filter(l => l.status === 'TBD').length,
              operators: new Set(launches.map(l => l.operator)).size,
            }}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-gray-500 text-sm text-center">
            © 2026 - Spaceflight Tracker 
          </p>
        </div>
      </footer>
    </div>
  );
}
