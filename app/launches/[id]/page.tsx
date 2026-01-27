import { mockLaunches } from '@/data/mockLaunches';
import { mockRockets } from '@/data/mockRockets';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LaunchDetailClient from './LaunchDetailClient';
import { Metadata } from 'next';

interface LaunchDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: LaunchDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const launch = mockLaunches.find(l => l.id === id);

  if (!launch) {
    return {
      title: 'Launch Not Found',
    };
  }

  const launchDate = new Date(launch.launchDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return {
    title: `${launch.name} - Launch Details & Live Stream`,
    description: `${launch.description} Launch date: ${launchDate} from ${launch.location}. Rocket: ${launch.rocket} by ${launch.operator}.`,
    keywords: [launch.name, launch.rocket, launch.operator, 'space launch', 'rocket launch', launch.location],
    alternates: {
      canonical: `https://spaceflight-tracker.vercel.app/launches/${id}`,
    },
    openGraph: {
      title: `${launch.name} - Launch Details`,
      description: launch.description,
      url: `https://spaceflight-tracker.vercel.app/launches/${id}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${launch.name} - Launch Details`,
      description: launch.description,
    },
  };
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
                <button className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm md:text-base font-medium transition-colors">
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
