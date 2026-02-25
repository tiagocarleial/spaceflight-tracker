import RocketCard from '@/components/RocketCard';
import { mockRockets } from '@/data/mockRockets';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Space Rockets Database - Specifications & Details',
  description: 'Explore detailed specifications of rockets from SpaceX, NASA, Blue Origin, ISRO, CNSA and more. View payload capacity, dimensions, reusability, and technical details of all major launch vehicles.',
  keywords: ['space rockets', 'rocket specifications', 'Falcon 9', 'Starship', 'SLS', 'rocket database', 'launch vehicles', 'rocket technology'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/rockets',
  },
  openGraph: {
    title: 'Space Rockets Database - Specifications & Details',
    description: 'Complete database of space rockets with detailed specifications, payload capacity, and technical information.',
    url: 'https://www.spaceflight-tracker.com/rockets',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Rockets Database - Specifications & Details',
    description: 'Complete database of space rockets with detailed specifications and technical information.',
  },
};

export default function RocketsPage() {
  const rockets = mockRockets;

  // Calculate stats
  const stats = {
    total: rockets.length,
    active: rockets.filter(r => r.status === 'Active').length,
    inDevelopment: rockets.filter(r => r.status === 'In Development').length,
    reusable: rockets.filter(r => r.reusable).length,
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <Navigation currentPage="rockets" variant="standard" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Title with inline stats */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
            <h1 className="text-2xl font-bold text-white">Space Rockets Database</h1>
          </div>

          {/* Inline Stats */}
          <div className="flex flex-wrap gap-2">
            <div className="bg-gray-800/50 border border-gray-700 rounded px-3 py-1 flex items-center gap-2">
              <span className="text-green-400 font-bold text-sm">{stats.active}</span>
              <span className="text-gray-400 text-xs">Active</span>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded px-3 py-1 flex items-center gap-2">
              <span className="text-blue-400 font-bold text-sm">{stats.inDevelopment}</span>
              <span className="text-gray-400 text-xs">In Development</span>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded px-3 py-1 flex items-center gap-2">
              <span className="text-purple-400 font-bold text-sm">{stats.reusable}</span>
              <span className="text-gray-400 text-xs">Reusable</span>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded px-3 py-1 flex items-center gap-2">
              <span className="text-blue-400 font-bold text-sm">{stats.total}</span>
              <span className="text-gray-400 text-xs">Total</span>
            </div>
          </div>
        </div>

        {/* Rockets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {rockets.map((rocket) => (
            <RocketCard key={rocket.id} rocket={rocket} />
          ))}
        </div>
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
