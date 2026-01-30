import Link from 'next/link';
import { Metadata } from 'next';
import ISSMapClient from '@/components/ISSMapClient';

export const metadata: Metadata = {
  title: 'ISS Live - International Space Station Real-Time Tracking',
  description: 'Track the International Space Station (ISS) in real-time. See current position, altitude, velocity, and crew members. Live orbital tracking map updated every 5 seconds.',
  keywords: ['ISS tracking', 'International Space Station', 'ISS live', 'space station tracker', 'ISS position', 'ISS location', 'satellite tracking'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/iss',
  },
  openGraph: {
    title: 'ISS Live - International Space Station Real-Time Tracking',
    description: 'Track the International Space Station in real-time with live position updates, orbital path, and crew information.',
    url: 'https://www.spaceflight-tracker.com/iss',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISS Live - Track the International Space Station',
    description: 'Real-time ISS tracking with live position, velocity, and crew data.',
  },
};

export default function ISSPage() {
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
                <button className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm md:text-base font-medium transition-colors">
                  ISS Live
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Map */}
      <div className="h-screen w-full pt-[60px]">
        <ISSMapClient />
      </div>
    </div>
  );
}
