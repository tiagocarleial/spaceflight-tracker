import LaunchesContainer from '@/components/LaunchesContainer';
import { fetchUpcomingLaunches, fetchLaunchProviders } from '@/lib/api';
import { mockLaunches } from '@/data/mockLaunches';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upcoming Space Launches - Real-Time Launch Schedule',
  description: 'View all upcoming space launches from SpaceX, NASA, Blue Origin, ISRO, CNSA and more. Track launch dates, times, and mission details in real-time with live countdowns.',
  keywords: ['space launches', 'upcoming launches', 'SpaceX launch', 'NASA launch', 'rocket launch schedule', 'space mission tracker'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/launches',
  },
  openGraph: {
    title: 'Upcoming Space Launches - Real-Time Launch Schedule',
    description: 'Track all upcoming space launches from major space agencies worldwide. Live countdowns and mission details.',
    url: 'https://www.spaceflight-tracker.com/launches',
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
      <Navigation currentPage="launches" variant="standard" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Intro Section */}
        <section className="mb-12 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Space Launch Schedule</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Track upcoming rocket launches from space agencies around the world in real-time. Every launch represents a mission
              to deploy satellites, resupply the International Space Station, send probes to explore other planets, or advance
              humanity's presence in space. Stay updated with live countdowns, mission details, and direct links to livestreams.
            </p>
          </div>

          {/* How to Use Guide */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <i className="fa-solid fa-circle-info text-blue-400"></i>
              How to Use This Page
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-white">Filter by Agency:</strong> Use the agency dropdown to view launches from specific space programs like SpaceX, NASA, or ISRO.
              </p>
              <p>
                <strong className="text-white">Filter by Status:</strong> Select "Go" for confirmed launches, "TBD" for tentative dates, or "Hold" for delayed missions.
              </p>
              <p>
                <strong className="text-white">Search Missions:</strong> Enter keywords to find specific missions or payloads.
              </p>
              <p>
                <strong className="text-white">Live Countdowns:</strong> Each launch card shows a real-time countdown to liftoff. Countdowns update every second.
              </p>
              <p>
                <strong className="text-white">Watch Live:</strong> Click the "Watch Live" button when available to view the official launch livestream.
              </p>
            </div>
          </div>
        </section>

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

        {/* Educational Content Below Launches */}
        <section className="mb-12 max-w-6xl mx-auto">
          {/* Understanding Launch Status */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              Understanding Launch Status
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-check text-green-400 text-lg"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Go / Confirmed</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  The launch has been confirmed by the space agency with a specific date and time. Weather and technical checks
                  still apply, but the mission is officially scheduled and likely to proceed as planned.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-clock text-yellow-400 text-lg"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white">TBD / TBC</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  To Be Determined or To Be Confirmed. The launch is planned but the exact date/time hasn't been finalized.
                  This is common for missions early in their planning phase or awaiting regulatory approval.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-pause text-red-400 text-lg"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Hold / Delayed</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  The launch has been delayed from its original schedule. This can occur due to weather, technical issues,
                  range conflicts, or payload preparation delays. A new launch date will be announced.
                </p>
              </div>
            </div>
          </div>

          {/* Major Space Agencies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              Major Space Agencies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">SpaceX (USA)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Private company revolutionizing spaceflight with reusable rockets. Operates Falcon 9, Falcon Heavy, and is
                  developing Starship. Regularly launches Starlink satellites and cargo to the ISS.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">NASA (USA)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  United States space agency conducting scientific missions, crewed spaceflight, and planetary exploration.
                  Developing the Space Launch System (SLS) for Artemis moon missions.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">CNSA (China)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  China National Space Administration operates the Long March family of rockets and the Tiangong space station.
                  Active in lunar exploration and Mars missions.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Roscosmos (Russia)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Russian space agency with decades of experience. Operates Soyuz rockets for crewed missions and Progress
                  cargo vehicles. Partner in the International Space Station.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">ISRO (India)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Indian Space Research Organisation known for cost-effective missions. Operates PSLV and GSLV rockets.
                  Successfully sent missions to Mars and the Moon.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Blue Origin (USA)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Private aerospace company developing New Shepard for suborbital tourism and New Glenn for orbital missions.
                  Focused on reusability and expanding access to space.
                </p>
              </div>
            </div>
          </div>

          {/* Why Watch Launches */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why Watch Space Launches?</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Every space launch is a remarkable achievement of human engineering and ambition. Watching a rocket launch—whether
                live in person or via livestream—is witnessing the moment when years of planning, design, and preparation culminate
                in a controlled explosion that propels tons of metal and fuel into the sky at thousands of miles per hour.
              </p>
              <p>
                Modern space launches serve diverse purposes: deploying communication satellites that enable global internet,
                sending scientific instruments to study Earth's climate, delivering supplies to astronauts aboard the ISS,
                launching telescopes to observe distant galaxies, and sending rovers to explore other planets.
              </p>
              <p>
                By tracking launches on Spaceflight Tracker, you're staying connected to humanity's ongoing journey of exploration
                and discovery. Each mission brings us closer to understanding our universe and expanding our presence beyond Earth.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 - Spaceflight Tracker
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-gray-500 hover:text-gray-300 transition-colors">About</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
