import Link from 'next/link';
import { Metadata } from 'next';
import EarthquakeMapClient from '@/components/EarthquakeMapClient';

export const metadata: Metadata = {
  title: 'Earthquake Monitor - Real-Time Global Earthquake Tracking',
  description: 'Track earthquakes worldwide in real-time. Live data from USGS showing magnitude, depth, location, and impact for all seismic events in the last 24 hours.',
  keywords: ['earthquake tracker', 'seismic activity', 'USGS earthquakes', 'real-time earthquakes', 'earthquake map', 'global earthquakes', 'earthquake monitoring', 'seismology'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/earthquakes',
  },
  openGraph: {
    title: 'Earthquake Monitor - Real-Time Global Earthquake Tracking',
    description: 'Track earthquakes worldwide with live USGS data showing magnitude, depth, and location for all seismic events.',
    url: 'https://www.spaceflight-tracker.com/earthquakes',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earthquake Monitor - Real-Time Earthquake Tracking',
    description: 'Track global earthquakes with live USGS data showing magnitude, depth, and location.',
  },
};

export default function EarthquakesPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fixed Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-[1001] border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <div className="cursor-pointer">
                <div className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <i className="fa-solid fa-rocket text-white"></i>
                  <span className="hidden sm:inline">Spaceflight Tracker</span>
                  <span className="sm:hidden">SpaceFlight</span>
                </div>
              </div>
            </Link>
            <div className="flex gap-2 md:gap-3">
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
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Asteroids
                </button>
              </Link>
              <Link href="/events">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Events
                </button>
              </Link>
              <Link href="/earthquakes">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm md:text-base font-medium transition-colors">
                  Earthquakes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Map */}
      <div className="h-screen w-full pt-[60px]">
        <EarthquakeMapClient />
      </div>
    </div>
  );
}
