import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Spaceflight Tracker',
  description: 'Learn about Spaceflight Tracker — a real-time space launch tracking platform covering SpaceX, NASA, Blue Origin, ISRO, and more.',
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <div className="cursor-pointer">
                <div className="text-xl md:text-3xl font-bold text-white mb-1 flex items-center gap-2 md:gap-3">
                  <i className="fa-solid fa-rocket text-white"></i>
                  <span className="hidden sm:inline">Spaceflight Tracker</span>
                  <span className="sm:hidden">SpaceFlight</span>
                </div>
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
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">About Spaceflight Tracker</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Your real-time companion for following humanity&apos;s journey into space — from the next Falcon 9 launch to near-Earth asteroids and the International Space Station.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Space exploration is one of humanity&apos;s greatest endeavors, yet much of it goes unnoticed by the general public. Spaceflight Tracker was created to bridge that gap — making space launches, rocket information, orbital mechanics, and astronomical events accessible and engaging for everyone, from casual enthusiasts to dedicated space fans.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            We aggregate data from trusted scientific sources including NASA, The Space Devs API, and USGS to give you a live, accurate picture of what&apos;s happening in space and on Earth right now.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">What We Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-rocket text-blue-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Space Launches</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Real-time countdowns and details for upcoming launches from SpaceX, NASA, Blue Origin, ISRO, CNSA, Roscosmos, and more. Filter by agency, status, and mission type.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-satellite text-purple-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">ISS Live Tracking</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Follow the International Space Station in real-time on an interactive map. Updated every 5 seconds with the current orbital position of the ISS.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-meteor text-orange-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Near-Earth Asteroids</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                NASA-powered data on asteroids passing close to Earth. Includes size estimates, velocity, miss distance, and hazard classification updated hourly.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-star text-yellow-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Astronomical Events</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A curated calendar of 2026 sky events including solar and lunar eclipses, meteor showers, supermoons, and planetary conjunctions with visibility information.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-earth-americas text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Earthquake Monitor</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Live global earthquake data from the USGS, visualized on an interactive map with magnitude-based indicators and real-time seismic activity updates.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-database text-cyan-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Rocket Database</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Detailed technical specifications for active and historic rockets including dimensions, payload capacity, reusability, and full launch history.
              </p>
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Data Sources</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We are committed to accuracy and reliability. All data displayed on Spaceflight Tracker comes from reputable, publicly available scientific and institutional sources:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <div>
                <strong className="text-white">The Space Devs API</strong>
                <span className="text-gray-400"> — Launch Library 2, the most comprehensive open-source space launch database</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <div>
                <strong className="text-white">NASA JPL NeoWs</strong>
                <span className="text-gray-400"> — Near Earth Object Web Service from NASA&apos;s Jet Propulsion Laboratory</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <div>
                <strong className="text-white">USGS Earthquake Hazards Program</strong>
                <span className="text-gray-400"> — Real-time global seismic data from the United States Geological Survey</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <div>
                <strong className="text-white">Open Notify ISS API</strong>
                <span className="text-gray-400"> — Real-time ISS position tracking</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            Have a suggestion, found a bug, or want to get in touch? We&apos;d love to hear from you. Spaceflight Tracker is a passion project dedicated to making space accessible for everyone.
          </p>
          <div className="mt-4 bg-gray-800 border border-gray-700 rounded-xl p-6">
            <p className="text-gray-300">
              <strong className="text-white">Website:</strong>{' '}
              <a href="https://www.spaceflight-tracker.com" className="text-blue-400 hover:text-blue-300">
                spaceflight-tracker.com
              </a>
            </p>
          </div>
        </section>

      </main>

      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 - Spaceflight Tracker
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-gray-400 hover:text-gray-300 transition-colors">About</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
