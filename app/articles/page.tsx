import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Space Education Articles | Spaceflight Tracker',
  description: 'In-depth educational articles about space exploration, rockets, the ISS, asteroids, and the science of spaceflight.',
  keywords: ['space articles', 'space education', 'rocket science', 'space exploration guides', 'astronomy articles'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles',
  },
};

export default function ArticlesPage() {
  const articles = [
    {
      title: 'How Do Rockets Work?',
      description: 'Complete guide to rocket science—learn the fundamental physics and engineering behind rocket propulsion, staging, and orbital mechanics.',
      category: 'Rocket Science',
      readTime: '10 min read',
      href: '/articles/how-rockets-work',
      color: 'blue',
    },
    {
      title: 'Understanding the International Space Station',
      description: 'A comprehensive guide to the ISS—history, construction, daily life aboard, scientific research, and why it matters for future exploration.',
      category: 'Space Stations',
      readTime: '12 min read',
      href: '/articles/understanding-iss',
      color: 'purple',
    },
    {
      title: 'Near-Earth Asteroids: Threat and Opportunity',
      description: 'Everything about asteroids that pass close to Earth—how we track them, the real risks, planetary defense, and asteroid mining potential.',
      category: 'Planetary Defense',
      readTime: '11 min read',
      href: '/articles/near-earth-asteroids',
      color: 'orange',
    },
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
              <Link href="/faq">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  FAQ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-graduation-cap text-blue-400"></i>
            <span className="text-blue-400 text-sm font-medium">Educational Articles</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Space Education Articles</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In-depth guides to understand space exploration, rocket science, and the wonders of our universe
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article, idx) => (
            <Link key={idx} href={article.href}>
              <div className={`bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-${article.color}-500 transition-all cursor-pointer h-full flex flex-col group`}>
                <div className="mb-4">
                  <div className={`inline-block px-3 py-1 bg-${article.color}-500/10 border border-${article.color}-500/20 rounded-full mb-3`}>
                    <span className={`text-${article.color}-400 text-sm font-medium`}>{article.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 flex-grow">
                    {article.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700">
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                  <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Other Resources */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">More Learning Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/faq" className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-circle-question text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-white font-semibold mb-2">FAQ</h3>
              <p className="text-gray-400 text-sm">26 answered questions about space exploration</p>
            </Link>

            <Link href="/glossary" className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-colors text-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-book text-purple-400 text-2xl"></i>
              </div>
              <h3 className="text-white font-semibold mb-2">Glossary</h3>
              <p className="text-gray-400 text-sm">80+ space terms and definitions</p>
            </Link>

            <Link href="/launches" className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-colors text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-rocket text-orange-400 text-2xl"></i>
              </div>
              <h3 className="text-white font-semibold mb-2">Launch Tracker</h3>
              <p className="text-gray-400 text-sm">Track real launches in real-time</p>
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
              <Link href="/glossary" className="text-gray-500 hover:text-gray-300 transition-colors">Glossary</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
