import RocketCard from '@/components/RocketCard';
import { mockRockets } from '@/data/mockRockets';
import Link from 'next/link';

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
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="cursor-pointer">
                <h1 className="text-3xl font-bold text-white mb-1 flex items-center gap-3">
                  <i className="fa-solid fa-rocket text-white"></i>
                  Spaceflight Tracker
                </h1>
                <p className="text-gray-400 text-sm">
                  Keep up to date with upcoming space launches
                </p>
              </div>
            </Link>
            <div className="flex gap-4">
              <Link href="/launches">
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg font-medium transition-colors">
                  Launches
                </button>
              </Link>
              <Link href="/rockets">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Rockets
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Title with inline stats */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">Rockets</h2>
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
          <p className="text-gray-500 text-sm text-center">
            © 2026 - Spaceflight Tracker
          </p>
        </div>
      </footer>
    </div>
  );
}
