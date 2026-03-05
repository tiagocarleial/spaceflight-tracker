import Link from 'next/link';
import { fetchUpcomingLaunches } from '@/lib/api';
import { mockLaunches } from '@/data/mockLaunches';
import Navigation from '@/components/Navigation';
import LaunchCard from '@/components/LaunchCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spaceflight Tracker - Real-Time Space Launch Schedule & Space News',
  description: 'Track upcoming space launches, monitor the ISS in real-time, discover near-Earth asteroids, and explore astronomical events. Your comprehensive guide to space exploration from SpaceX, NASA, Blue Origin, ISRO, and more.',
  keywords: ['space launches', 'rocket launches', 'ISS tracker', 'space news', 'NASA', 'SpaceX', 'astronomy', 'space exploration'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com',
  },
  openGraph: {
    title: 'Spaceflight Tracker - Your Gateway to Space Exploration',
    description: 'Real-time tracking of space launches, ISS position, asteroids, and astronomical events. Stay updated with the latest in space exploration.',
    url: 'https://www.spaceflight-tracker.com',
    type: 'website',
  },
};

export default async function HomePage() {
  // Fetch next 3 upcoming launches for highlights
  let nextLaunches = mockLaunches.slice(0, 3);
  let totalLaunches = mockLaunches.length;

  try {
    // Fetch more launches to ensure we get enough "Go" status ones
    const data = await fetchUpcomingLaunches({ limit: 10 });

    // Sort launches: "Go" status first, then others
    const sortedLaunches = data.launches.sort((a, b) => {
      // Define priority order (lower number = higher priority)
      const statusPriority: Record<string, number> = {
        'Go': 1,
        'TBD': 2,
        'Hold': 3,
        'Success': 4,
        'Failure': 5,
      };

      const priorityA = statusPriority[a.status] || 999;
      const priorityB = statusPriority[b.status] || 999;

      // If status priority is the same, maintain original order (by date)
      if (priorityA === priorityB) return 0;

      return priorityA - priorityB;
    });

    // Take the first 3 after sorting
    nextLaunches = sortedLaunches.slice(0, 3);
    totalLaunches = data.count;
  } catch (error) {
    console.error('Failed to fetch launches for homepage:', error);
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage="home" variant="standard" />

      {/* Hero Section - Compact */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-8 md:py-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-3 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-xs font-medium">Live Tracking • Real-Time Updates</span>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Your Gateway to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Space Exploration
              </span>
            </h1>

            <p className="text-sm md:text-base text-gray-400 mb-4 max-w-2xl mx-auto">
              Track space launches, monitor the ISS, discover asteroids, and explore astronomical events in real-time.
            </p>

            {/* Compact Stats */}
            <div className="flex flex-wrap gap-2 justify-center text-xs">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-2">
                <span className="font-bold text-blue-400">{totalLaunches}+</span>
                <span className="text-gray-400">Launches</span>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-2">
                <i className="fa-solid fa-satellite text-purple-400"></i>
                <span className="text-gray-400">ISS Live</span>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-2">
                <i className="fa-solid fa-meteor text-orange-400"></i>
                <span className="text-gray-400">Asteroids</span>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-2">
                <i className="fa-solid fa-earth-americas text-green-400"></i>
                <span className="text-gray-400">Earthquakes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Launches Highlight - MOVED UP */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Next Launches</h2>
            </div>
            <Link href="/launches">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2 text-sm">
                View All {totalLaunches}+
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
          <p className="text-gray-400">
            Don't miss these upcoming space missions with live countdowns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nextLaunches.map((launch) => (
            <LaunchCard key={launch.id} launch={launch} />
          ))}
        </div>
      </section>

      {/* What We Track Section */}
      <section className="bg-gray-800/30 border-y border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What We Track</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Comprehensive coverage of space activities, astronomical phenomena, and Earth science data from trusted sources like NASA, The Space Devs, and USGS.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Space Launches */}
              <Link href="/launches">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <i className="fa-solid fa-rocket text-blue-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Space Launches</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Real-time tracking of upcoming launches from SpaceX, NASA, Blue Origin, ISRO, CNSA, Roscosmos, and more.
                    Features live countdowns, mission details, launch locations, and direct links to livestreams.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                    <span>Explore Launches</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>

              {/* ISS Tracking */}
              <Link href="/iss">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <i className="fa-solid fa-satellite text-purple-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">ISS Live Tracking</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Follow the International Space Station in real-time on an interactive map. Updated every 5 seconds with current position,
                    altitude, velocity, and orbital path. See where the ISS is right now.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                    <span>Track ISS</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>

              {/* Asteroids */}
              <Link href="/asteroids">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <i className="fa-solid fa-meteor text-orange-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Near-Earth Asteroids</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    NASA-powered data on asteroids passing close to Earth. Includes size estimates, velocity, closest approach distance,
                    and potential hazard classification. Updated hourly from JPL NeoWs.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
                    <span>View Asteroids</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>

              {/* Astronomical Events */}
              <Link href="/events">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                      <i className="fa-solid fa-star text-yellow-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Astronomical Events</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Curated calendar of 2026 sky events including solar and lunar eclipses, meteor showers, supermoons,
                    and planetary conjunctions with detailed visibility information.
                  </p>
                  <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                    <span>Browse Events</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>

              {/* Earthquakes */}
              <Link href="/earthquakes">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <i className="fa-solid fa-earth-americas text-green-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Earthquake Monitor</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Live global earthquake data from USGS visualized on an interactive map. Magnitude-based indicators,
                    depth information, and real-time seismic activity updates from around the world.
                  </p>
                  <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                    <span>Monitor Earthquakes</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>

              {/* Rockets */}
              <Link href="/rockets">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <i className="fa-solid fa-database text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Rocket Database</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Comprehensive technical specifications for active and historic rockets. Dimensions, payload capacity,
                    reusability features, and complete launch history for vehicles from Falcon 9 to Starship.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    <span>Browse Rockets</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Space Matters Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Why Space Exploration Matters</h2>
            </div>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Space exploration represents humanity's drive to understand our universe and our place within it.
              Every rocket launch, every satellite deployed, and every mission to distant worlds expands our knowledge
              and capabilities in ways that benefit life on Earth.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-flask text-blue-400"></i>
                  Scientific Discovery
                </h3>
                <p className="text-gray-400">
                  Space missions have led to breakthroughs in physics, chemistry, biology, and medicine.
                  From understanding the origins of the universe to developing new materials, space research drives innovation.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-lightbulb text-yellow-400"></i>
                  Technology Development
                </h3>
                <p className="text-gray-400">
                  GPS navigation, weather forecasting, satellite communications, medical imaging, and countless other
                  technologies we use daily originated from space research and development.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-leaf text-green-400"></i>
                  Earth Observation
                </h3>
                <p className="text-gray-400">
                  Satellites monitor climate change, track deforestation, predict natural disasters, and help manage
                  resources. Space-based observation is crucial for understanding and protecting our planet.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-users text-purple-400"></i>
                  Global Cooperation
                </h3>
                <p className="text-gray-400">
                  The International Space Station demonstrates how nations can work together toward common goals.
                  Space exploration unites humanity in pursuit of knowledge and advancement.
                </p>
              </div>
            </div>

            <p className="text-lg">
              By tracking launches, monitoring space activities, and staying informed about discoveries, you're part of
              this incredible journey. Spaceflight Tracker makes it easy to follow the missions that are shaping our future.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="bg-gray-800/30 border-y border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Trusted Data Sources</h2>
              <p className="text-gray-400 text-lg">
                All information on Spaceflight Tracker comes from reputable scientific and institutional sources
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-rocket text-blue-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">The Space Devs API</h3>
                    <p className="text-gray-400 text-sm">
                      Launch Library 2 — the most comprehensive open-source space launch database maintained by a dedicated
                      community of space enthusiasts and professionals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-meteor text-orange-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">NASA JPL NeoWs</h3>
                    <p className="text-gray-400 text-sm">
                      Near Earth Object Web Service from NASA's Jet Propulsion Laboratory provides authoritative data on
                      asteroids and their trajectories near Earth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-earth-americas text-green-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">USGS Earthquake Hazards</h3>
                    <p className="text-gray-400 text-sm">
                      Real-time global seismic data from the United States Geological Survey, the world's leading authority
                      on earthquake monitoring and research.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-satellite text-purple-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Open Notify ISS API</h3>
                    <p className="text-gray-400 text-sm">
                      Real-time International Space Station position tracking with precise orbital data updated every few seconds
                      for accurate location monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Exploring Space Today</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of space enthusiasts tracking launches, monitoring the ISS, and staying informed about cosmic events
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/launches">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
                View Upcoming Launches
              </button>
            </Link>
            <Link href="/blog">
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg font-semibold transition-all transform hover:scale-105">
                Read Space News
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2026 - Spaceflight Tracker</p>
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
