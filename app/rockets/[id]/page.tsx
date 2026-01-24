import { mockRockets } from '@/data/mockRockets';
import { mockLaunches } from '@/data/mockLaunches';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface RocketDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function RocketDetailPage({ params }: RocketDetailPageProps) {
  const { id } = await params;
  const rocket = mockRockets.find(r => r.id === id);

  if (!rocket) {
    notFound();
  }

  // Find launches using this rocket
  const relatedLaunches = mockLaunches.filter(
    launch => launch.rocketId === id || launch.rocket.includes(rocket.name)
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <div className="cursor-pointer">
                <h1 className="text-xl md:text-3xl font-bold text-white mb-1 flex items-center gap-2 md:gap-3">
                  <i className="fa-solid fa-rocket text-white"></i>
                  <span className="hidden sm:inline">Spaceflight Tracker</span>
                  <span className="sm:hidden">SpaceFlight</span>
                </h1>
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
                <button className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm md:text-base font-medium transition-colors">
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
          <Link href="/rockets" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Back to Rockets
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image */}
          <div className="relative h-96 lg:h-full min-h-[400px] bg-gray-800 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${rocket.image})` }}
            />
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                rocket.status === 'Active'
                  ? 'bg-green-500/20 text-green-400 border-green-500/30'
                  : rocket.status === 'In Development'
                  ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
              }`}>
                {rocket.status}
              </span>
              {rocket.reusable && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-purple-500/20 text-purple-400 border-purple-500/30">
                  Reusable
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold text-white mb-2">{rocket.fullName}</h1>
            <p className="text-xl text-gray-400 mb-6">{rocket.operator}</p>
            <p className="text-gray-300 mb-6">{rocket.description}</p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {rocket.firstFlight && (
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">First Flight</p>
                  <p className="text-white font-semibold">
                    {new Date(rocket.firstFlight).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              )}
              {rocket.totalLaunches !== undefined && (
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Total Launches</p>
                  <p className="text-white font-semibold">{rocket.totalLaunches}</p>
                </div>
              )}
              {rocket.successRate !== undefined && (
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Success Rate</p>
                  <p className="text-white font-semibold">{rocket.successRate}%</p>
                </div>
              )}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Stages</p>
                <p className="text-white font-semibold">{rocket.specs.stages}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Dimensions */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Dimensions</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Height</p>
                  <p className="text-white font-medium">
                    {rocket.specs.height.meters} m / {rocket.specs.height.feet} ft
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Diameter</p>
                  <p className="text-white font-medium">
                    {rocket.specs.diameter.meters} m / {rocket.specs.diameter.feet} ft
                  </p>
                </div>
              </div>
            </div>

            {/* Mass */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Mass</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Total Mass</p>
                  <p className="text-white font-medium">
                    {rocket.specs.mass.kg.toLocaleString()} kg
                  </p>
                  <p className="text-gray-400 text-xs">
                    {rocket.specs.mass.lb.toLocaleString()} lb
                  </p>
                </div>
              </div>
            </div>

            {/* Payload Capacity */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Payload Capacity</h3>
              <div className="space-y-3">
                {rocket.specs.payloadToLEO && (
                  <div>
                    <p className="text-gray-400 text-sm">LEO</p>
                    <p className="text-white font-medium">
                      {rocket.specs.payloadToLEO.kg.toLocaleString()} kg
                    </p>
                    <p className="text-gray-400 text-xs">
                      {rocket.specs.payloadToLEO.lb.toLocaleString()} lb
                    </p>
                  </div>
                )}
                {rocket.specs.payloadToGTO && (
                  <div>
                    <p className="text-gray-400 text-sm">GTO</p>
                    <p className="text-white font-medium">
                      {rocket.specs.payloadToGTO.kg.toLocaleString()} kg
                    </p>
                    <p className="text-gray-400 text-xs">
                      {rocket.specs.payloadToGTO.lb.toLocaleString()} lb
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Thrust */}
            {rocket.specs.thrust && (
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Thrust</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">Liftoff Thrust</p>
                    <p className="text-white font-medium">
                      {rocket.specs.thrust.kN.toLocaleString()} kN
                    </p>
                    <p className="text-gray-400 text-xs">
                      {rocket.specs.thrust.lbf.toLocaleString()} lbf
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Launch History Section */}
        {relatedLaunches.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Launch History</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="space-y-4">
                {relatedLaunches.map((launch) => (
                  <Link
                    key={launch.id}
                    href={`/launches/${launch.id}`}
                    className="block p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors border border-gray-700 hover:border-gray-600"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-white font-semibold mb-1">{launch.name}</h3>
                        <p className="text-gray-400 text-sm">{launch.location}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          launch.status === 'Go'
                            ? 'bg-green-500/20 text-green-400'
                            : launch.status === 'TBD'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {launch.status}
                        </span>
                        <p className="text-gray-400 text-xs mt-1">
                          {new Date(launch.launchDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
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
