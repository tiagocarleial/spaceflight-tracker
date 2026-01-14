import { mockLaunches } from '@/data/mockLaunches';
import { mockRockets } from '@/data/mockRockets';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LaunchDetailClient from './LaunchDetailClient';

interface LaunchDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function LaunchDetailPage({ params }: LaunchDetailPageProps) {
  const { id } = await params;
  const launch = mockLaunches.find(l => l.id === id);

  if (!launch) {
    notFound();
  }

  // Find the rocket used for this launch
  const rocket = mockRockets.find(
    r => r.id === launch.rocketId || launch.rocket.includes(r.name)
  );

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
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Launches
                </button>
              </Link>
              <Link href="/rockets">
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg font-medium transition-colors">
                  Rockets
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/launches" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Back to Launches
          </Link>
        </div>

        {/* Use Client Component for Countdown */}
        <LaunchDetailClient launch={launch} rocket={rocket} />
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
