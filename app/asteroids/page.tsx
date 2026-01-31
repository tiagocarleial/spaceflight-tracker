import { Metadata } from 'next';
import Link from 'next/link';
import AsteroidCard from '@/components/AsteroidCard';
import { getNearEarthAsteroids } from '@/lib/nasa-api';

export const metadata: Metadata = {
  title: 'Near-Earth Asteroids - Real-Time Asteroid Tracker',
  description: 'Track near-Earth asteroids and their close approaches. Live data from NASA showing asteroid size, speed, distance, and potential hazards for the next 7 days.',
  keywords: ['asteroid tracker', 'near earth asteroids', 'NEO tracker', 'asteroid watch', 'potentially hazardous asteroids', 'asteroid close approach', 'NASA asteroids'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/asteroids',
  },
  openGraph: {
    title: 'Near-Earth Asteroids - Real-Time Asteroid Tracker',
    description: 'Track near-Earth asteroids and their close approaches with live NASA data.',
    url: 'https://www.spaceflight-tracker.com/asteroids',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Near-Earth Asteroids Tracker',
    description: 'Track near-Earth asteroids with live NASA data.',
  },
};

export default async function AsteroidsPage() {
  const asteroids = await getNearEarthAsteroids(7);

  const hazardousCount = asteroids.filter(a => a.isPotentiallyHazardous).length;
  const averageDistance = asteroids.length > 0
    ? asteroids.reduce((sum, a) => sum + a.missDistanceLunar, 0) / asteroids.length
    : 0;
  const closestAsteroid = asteroids.length > 0
    ? asteroids.reduce((closest, a) => a.missDistanceLunar < closest.missDistanceLunar ? a : closest)
    : null;

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
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Launches
                </button>
              </Link>
              <Link href="/rockets">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Rockets
                </button>
              </Link>
              <Link href="/iss">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  ISS Live
                </button>
              </Link>
              <Link href="/asteroids">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm md:text-base font-medium transition-colors">
                  Asteroids
                </button>
              </Link>
              <Link href="/events">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Events
                </button>
              </Link>
              <Link href="/earthquakes">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Earthquakes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h1 className="text-3xl font-bold text-white">Near-Earth Asteroids</h1>
        </div>
        <p className="text-gray-400 mb-6 ml-4">
          Tracking asteroids approaching Earth in the next 7 days • Data from NASA JPL
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Total Asteroids</div>
            <div className="text-3xl font-bold text-white">{asteroids.length}</div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Potentially Hazardous</div>
            <div className="text-3xl font-bold text-red-400">{hazardousCount}</div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Average Distance</div>
            <div className="text-3xl font-bold text-blue-400">
              {averageDistance.toFixed(1)} LD
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Closest Approach</div>
            <div className="text-3xl font-bold text-green-400">
              {closestAsteroid ? `${closestAsteroid.missDistanceLunar.toFixed(2)} LD` : 'N/A'}
            </div>
          </div>
        </div>

        {/* Info Alert */}
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <i className="fa-solid fa-info-circle text-blue-400 text-xl mt-0.5"></i>
            <div>
              <h3 className="text-blue-300 font-semibold mb-1">What are Near-Earth Objects (NEO)?</h3>
              <p className="text-blue-200/80 text-sm">
                NEOs are asteroids and comets with orbits that bring them within 30 million miles (50 million km) of Earth's orbit.
                NASA tracks these objects to assess potential impact hazards. A "Potentially Hazardous Asteroid" (PHA) is larger than 140 meters
                and passes within 4.6 million miles (7.5 million km) of Earth's orbit.
              </p>
            </div>
          </div>
        </div>

        {/* Asteroids Grid */}
        {asteroids.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {asteroids.map((asteroid) => (
              <AsteroidCard key={asteroid.id} asteroid={asteroid} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <i className="fa-solid fa-meteor text-gray-600 text-6xl mb-4"></i>
            <p className="text-gray-400 text-lg">No asteroids approaching Earth in the next 7 days</p>
            <p className="text-gray-500 text-sm mt-2">Check back later for updates</p>
          </div>
        )}

        {/* Data Source Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">
              Data provided by{' '}
              <a
                href="https://api.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                NASA JPL NeoWs API
              </a>
            </p>
            <p className="text-xs">
              Updates hourly • LD = Lunar Distance (384,400 km) • 1 AU = 149,597,871 km
            </p>
          </div>
        </div>
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
