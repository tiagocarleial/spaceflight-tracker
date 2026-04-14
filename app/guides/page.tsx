import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Space Guides & Tutorials - Practical Space Exploration Tips | Spaceflight Tracker',
  description: 'Learn how to watch launches, photograph the ISS, spot satellites, use astronomy apps, and more with our practical space guides and tutorials.',
  keywords: ['space guides', 'watch rocket launch', 'photograph ISS', 'satellite spotting', 'astronomy tutorials'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/guides',
  },
};

export default function GuidesPage() {
  const guides = [
    {
      title: 'How to Watch Rocket Launches Live',
      description: 'Complete guide to watching launches in person or online, from finding viewing locations to understanding launch schedules and weather delays.',
      icon: 'fa-rocket',
      link: '/guides/watch-launches',
      level: 'Beginner',
      time: '10 min read'
    },
    {
      title: 'How to Photograph the ISS',
      description: 'Step-by-step tutorial for capturing stunning photos of the International Space Station as it passes overhead using cameras or smartphones.',
      icon: 'fa-camera',
      link: '/guides/photograph-iss',
      level: 'Intermediate',
      time: '15 min read'
    },
    {
      title: 'Satellite Spotting Guide',
      description: 'Learn to identify and track satellites in the night sky, including Starlink trains, using apps and websites for predictions.',
      icon: 'fa-satellite',
      link: '/guides/spot-satellites',
      level: 'Beginner',
      time: '8 min read'
    },
    {
      title: 'Best Astronomy Apps & Tools',
      description: 'Comprehensive review of the best mobile apps and online tools for tracking launches, identifying constellations, and planning observations.',
      icon: 'fa-mobile-screen',
      link: '/guides/astronomy-apps',
      level: 'Beginner',
      time: '12 min read'
    },
    {
      title: 'Meteor Shower Observation Guide',
      description: 'Everything you need to know to observe meteor showers: timing, locations, equipment, and photography tips for capturing shooting stars.',
      icon: 'fa-meteor',
      link: '/guides/meteor-showers',
      level: 'Beginner',
      time: '10 min read'
    },
    {
      title: 'Astrophotography for Beginners',
      description: 'Start your astrophotography journey with this beginner-friendly guide covering equipment, settings, techniques, and post-processing basics.',
      icon: 'fa-star',
      link: '/guides/astrophotography-basics',
      level: 'Intermediate',
      time: '20 min read'
    }
  ];

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
              <Link href="/about">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  About
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-book text-green-400"></i>
            <span className="text-green-400 text-sm font-medium">Practical Guides & Tutorials</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Space Exploration Guides</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hands-on tutorials to help you watch launches, photograph space objects, spot satellites, and get started with amateur astronomy
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map((guide, idx) => (
            <Link key={idx} href={guide.link}>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all cursor-pointer group h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors flex-shrink-0">
                    <i className={`fa-solid ${guide.icon} text-green-400 text-xl`}></i>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                    {guide.level}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-700">
                  <span className="text-gray-500 flex items-center gap-1">
                    <i className="fa-solid fa-clock text-xs"></i>
                    {guide.time}
                  </span>
                  <span className="text-green-400 flex items-center gap-2 font-medium group-hover:gap-3 transition-all">
                    Read Guide
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why These Guides Section */}
        <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Why Use These Guides?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-green-400"></i>
                Practical & Actionable
              </h3>
              <p className="text-gray-300 text-sm">
                Each guide provides step-by-step instructions you can follow immediately, with specific recommendations for equipment, settings, and techniques.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-green-400"></i>
                Beginner-Friendly
              </h3>
              <p className="text-gray-300 text-sm">
                Written for people with no prior experience, our guides explain everything clearly without overwhelming technical jargon.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-green-400"></i>
                Equipment Recommendations
              </h3>
              <p className="text-gray-300 text-sm">
                We suggest specific apps, tools, and equipment at various price points, so you can get started regardless of budget.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-green-400"></i>
                Real Examples
              </h3>
              <p className="text-gray-300 text-sm">
                Learn from real-world examples, sample photos, and common mistakes to avoid based on actual experience.
              </p>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/faq" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-circle-question text-green-400"></i>
                FAQ
              </h3>
              <p className="text-gray-400 text-sm">
                Find answers to common questions about space exploration, rockets, and astronomy
              </p>
            </Link>

            <Link href="/articles" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-newspaper text-green-400"></i>
                Articles
              </h3>
              <p className="text-gray-400 text-sm">
                In-depth educational articles about space technology, missions, and science
              </p>
            </Link>

            <Link href="/glossary" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <i className="fa-solid fa-book text-green-400"></i>
                Glossary
              </h3>
              <p className="text-gray-400 text-sm">
                Learn the terminology and vocabulary used in spaceflight and astronomy
              </p>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2026 - Spaceflight Tracker</p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-gray-500 hover:text-gray-300 transition-colors">About</Link>
              <Link href="/faq" className="text-gray-500 hover:text-gray-300 transition-colors">FAQ</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
