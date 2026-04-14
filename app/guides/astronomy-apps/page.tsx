import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Astronomy Apps & Tools 2026 - Complete Guide | Spaceflight Tracker',
  description: 'Comprehensive review of the best astronomy apps and tools for 2026. Compare SkySafari, Stellarium, NASA app, Heavens-Above, and more for star gazing, satellite tracking, and launch alerts.',
  keywords: ['astronomy apps', 'star gazing apps', 'SkySafari', 'Stellarium', 'NASA app', 'satellite tracking apps', 'astronomy tools'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/guides/astronomy-apps',
  },
};

export default function AstronomyAppsGuide() {
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
              <Link href="/guides">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Guides
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link href="/guides" className="text-gray-400 hover:text-gray-300">Guides</Link>
          <i className="fa-solid fa-chevron-right text-gray-600 text-xs"></i>
          <span className="text-gray-300">Astronomy Apps & Tools</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-mobile-screen text-green-400"></i>
            <span className="text-green-400 text-sm font-medium">Beginner Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Best Astronomy Apps & Tools for 2026</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Your complete guide to the best mobile apps and online tools for astronomy, from star identification and satellite tracking to launch alerts and meteor shower predictions.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 p-6 bg-gray-800 border border-gray-700 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">12 min</div>
            <div className="text-sm text-gray-400">Read Time</div>
          </div>
          <div className="text-center border-l border-r border-gray-700">
            <div className="text-2xl font-bold text-green-400 mb-1">Beginner</div>
            <div className="text-sm text-gray-400">Difficulty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">$0-40</div>
            <div className="text-sm text-gray-400">Cost Range</div>
          </div>
        </div>

        {/* Main Content */}
        <article className="prose prose-invert prose-lg max-w-none">

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Sky Map & Star Identification Apps</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              These apps help you identify stars, constellations, planets, and deep-sky objects by pointing your phone at the sky. Essential for learning your way around the night sky.
            </p>

            {/* SkySafari */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">SkySafari</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">iOS</span>
                  <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">Android</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">Basic ($2.99) • Plus ($14.99) • Pro ($39.99)</span>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm font-semibold text-white">Rating:</span>
                <div className="flex gap-1 text-yellow-400">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <span className="text-gray-400 text-sm">4.7/5</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                The most powerful and comprehensive astronomy app available. SkySafari is essentially a planetarium in your pocket with databases containing millions of stars, galaxies, nebulae, and solar system objects.
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Real-time sky simulation:</strong> Point your device at the sky and see constellations, stars, planets overlay in AR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Massive database:</strong> 120,000 stars (Basic) up to 25 million stars, 740,000 galaxies (Pro)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Time travel:</strong> View sky from any location on Earth at any time past or future</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Satellite tracking:</strong> Track ISS and thousands of satellites with predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Telescope control:</strong> Connect to computerized telescopes (Plus/Pro)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Night vision mode:</strong> Red theme preserves dark adaptation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Search & notifications:</strong> Find any object, get alerts for events</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm">Best For:</h4>
                <p className="text-gray-300 text-sm">Serious amateur astronomers, telescope owners, anyone wanting the most comprehensive sky reference. Worth the higher price if you&apos;re committed to astronomy.</p>
              </div>

              <div className="mt-3 p-4 bg-blue-900/20 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm">Our Verdict:</h4>
                <p className="text-gray-300 text-sm">Industry-leading features and accuracy. Basic version is excellent for most users. Upgrade to Plus or Pro if you have a telescope or want advanced features.</p>
              </div>
            </div>

            {/* Stellarium */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">Stellarium Mobile</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">iOS</span>
                  <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">Android</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">Free (limited) • Plus ($9.99 one-time)</span>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm font-semibold text-white">Rating:</span>
                <div className="flex gap-1 text-yellow-400">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <span className="text-gray-400 text-sm">4.6/5</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Based on the renowned desktop planetarium software, Stellarium Mobile brings beautiful, realistic sky rendering to your phone. Free version is surprisingly capable.
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Photorealistic sky:</strong> Gorgeous rendering with realistic Milky Way, nebulae, and galaxies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Free database:</strong> 600,000+ stars, all planets, major moons, 80,000+ deep sky objects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Beautiful constellation art:</strong> Multiple culture&apos;s constellation imagery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Time controls:</strong> Speed up time to watch planets move, predict sky for any date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Plus upgrade adds:</strong> No ads, more objects (1.69 billion stars), telescope control, advanced features</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm">Best For:</h4>
                <p className="text-gray-300 text-sm">Beginners wanting a beautiful, free introduction to astronomy. Those who value aesthetics and realism. Great learning tool.</p>
              </div>

              <div className="mt-3 p-4 bg-purple-900/20 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm">Our Verdict:</h4>
                <p className="text-gray-300 text-sm">Best free astronomy app. Gorgeous interface, intuitive controls. Free version is sufficient for most casual users. Plus upgrade is excellent value.</p>
              </div>
            </div>

            {/* Star Walk 2 */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">Star Walk 2</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">iOS</span>
                  <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">Android</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">Free (with ads) • $2.99 (ad-free)</span>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm font-semibold text-white">Rating:</span>
                <div className="flex gap-1 text-yellow-400">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="text-gray-400 text-sm">4.4/5</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                The most user-friendly and visually stunning sky guide. Perfect for families and casual stargazers who want something that just works beautifully.
              </p>

              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm">Best For:</h4>
                <p className="text-gray-300 text-sm">Complete beginners, families with kids, casual users wanting simplicity and beauty over advanced features.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Satellite Tracking Apps</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Specialized apps for tracking the ISS, Starlink, and other satellites. More focused than general astronomy apps.
            </p>

            {/* ISS Detector */}
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">ISS Detector</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">iOS</span>
                  <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">Android</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">$1.99 • Extensions $0.99 each (Starlink, Comets, Radio Satellites)</span>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm font-semibold text-white">Rating:</span>
                <div className="flex gap-1 text-yellow-400">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span className="text-gray-400 text-sm">4.8/5</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                The best dedicated satellite tracking app. Simple, accurate, and packed with useful features specifically for ISS and satellite watching.
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Push notifications:</strong> Alerts 15 min before ISS passes (customizable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">AR mode:</strong> Point phone at sky to see exactly where satellite is</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Compass integration:</strong> Shows direction and altitude in real-time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Weather integration:</strong> Shows cloud cover predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Starlink extension:</strong> Track Starlink trains with predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span><strong className="text-white">Multiple satellites:</strong> Hubble, Tiangong, GPS, amateur radio satellites</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-orange-900/20 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm">Our Verdict:</h4>
                <p className="text-gray-300 text-sm">Essential app for satellite watchers. $1.99 is a steal for the functionality. The Starlink extension ($0.99) is worth it if you want to catch satellite trains. See our <Link href="/guides/spot-satellites" className="text-blue-400 hover:text-blue-300">satellite spotting guide</Link> for tips.</p>
              </div>
            </div>

            {/* Heavens-Above */}
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">Heavens-Above</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full font-semibold">Web</span>
                  <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">iOS</span>
                  <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">Android</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">Free (website and app)</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                The most comprehensive satellite prediction tool. Website is more powerful than app. Shows hundreds of satellites with precise predictions and star charts. Read more in our <Link href="/guides/photograph-iss" className="text-blue-400 hover:text-blue-300">ISS photography guide</Link>.
              </p>

              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm">Best For:</h4>
                <p className="text-gray-300 text-sm">Serious satellite observers wanting detailed predictions. Ham radio operators. Astrophotographers planning ISS shoots.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Launch Tracking Apps & Websites</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Stay informed about upcoming rocket launches with real-time countdowns and notifications.
            </p>

            {/* Spaceflight Tracker */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">Spaceflight Tracker (This Site!)</h3>
                <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full font-semibold">Web</span>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">Free</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Real-time launch tracking with live countdowns, mission details, and agency filters. No app download required - works in any browser.
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>Live countdowns to T-0</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>Filter by agency (SpaceX, NASA, Blue Origin, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>Mission descriptions and rocket details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>Links to live streams when available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>Status indicators (Go, TBD, Hold, Success)</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-900/20 rounded-lg">
                <p className="text-gray-300 text-sm">Check our <Link href="/launches" className="text-blue-400 hover:text-blue-300">launches page</Link> for the latest schedule. See our <Link href="/guides/watch-launches" className="text-blue-400 hover:text-blue-300">launch viewing guide</Link> for tips.</p>
              </div>
            </div>

            {/* Next Spaceflight */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">Next Spaceflight & Space Launch Now</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full font-semibold">Web</span>
                  <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">iOS</span>
                  <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">Android</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">Free (website) • Free with ads (app) • $2.99/mo (app subscription for no ads)</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Comprehensive launch database with excellent filtering, notifications, and community features. App and website complement each other well.
              </p>

              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm">Best For:</h4>
                <p className="text-gray-300 text-sm">Launch enthusiasts wanting push notifications for every launch worldwide. Great for following specific agencies or launch sites.</p>
              </div>
            </div>

            {/* SpaceflightNow */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-600/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">Spaceflight Now</h3>
                <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full font-semibold">Web</span>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">Free</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Long-running spaceflight news site with detailed launch schedule, mission updates, and in-depth coverage. More journalistic than database-focused.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Official Space Agency Apps</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Direct from the source - official apps from space agencies provide authoritative information and unique content.
            </p>

            {/* NASA App */}
            <div className="bg-gradient-to-br from-blue-900/30 to-red-900/30 border border-blue-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">NASA App</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">iOS</span>
                  <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">Android</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">Free</span>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm font-semibold text-white">Rating:</span>
                <div className="flex gap-1 text-yellow-400">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <span className="text-gray-400 text-sm">4.7/5</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Official NASA app with access to thousands of images, videos, mission information, and live NASA TV. The most comprehensive official space agency app.
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>19,000+ images from missions and telescopes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>Live NASA TV stream and on-demand videos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>Latest NASA news and mission updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>ISS sighting opportunities (Spot The Station)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>Access to NASA podcasts and social media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>Astronomy Picture of the Day (APOD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>Mission information for all NASA spacecraft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i>
                    <span>Notifications for launches and major events</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-blue-900/20 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm">Our Verdict:</h4>
                <p className="text-gray-300 text-sm">Essential app for space enthusiasts. Completely free with no ads. Best source for official NASA content, images, and live coverage. The APOD feature alone is worth the download.</p>
              </div>
            </div>

            {/* ESA App */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">ESA (European Space Agency)</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">iOS</span>
                  <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">Android</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">Free</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Official app from the European Space Agency. Great for following ESA missions, Ariane launches, and European space exploration efforts.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meteor Shower & Sky Event Apps</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Track meteor showers, eclipses, and other astronomical events with these specialized tools.
            </p>

            {/* Meteor Shower Calendar */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">Meteor Shower Calendar</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">iOS</span>
                  <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">Android</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">Free (with ads) • $2.99 (ad-free)</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Dedicated meteor shower tracker with notifications for peak viewing times. Shows radiant point, expected meteor rates (ZHR), and moon phase for each shower.
              </p>

              <div className="p-4 bg-gray-900/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm">Best For:</h4>
                <p className="text-gray-300 text-sm">Meteor enthusiasts wanting alerts for all annual showers. Check our <Link href="/guides/meteor-showers" className="text-blue-400 hover:text-blue-300">meteor shower guide</Link> for viewing tips.</p>
              </div>
            </div>

            {/* SkEye */}
            <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">SkEye</h3>
                <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">Android</span>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-white">Price: </span>
                <span className="text-gray-300 text-sm">Free</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Android-only planetarium app optimized for telescope use. Shows field of view circles for different eyepieces, perfect for telescope pointing.
              </p>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Comparison Guide</h2>

            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-900">
                    <tr className="text-left">
                      <th className="px-4 py-3 text-white font-semibold">App/Tool</th>
                      <th className="px-4 py-3 text-white font-semibold">Best For</th>
                      <th className="px-4 py-3 text-white font-semibold">Price</th>
                      <th className="px-4 py-3 text-white font-semibold">Platform</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="text-gray-300">
                      <td className="px-4 py-3 font-medium text-white">SkySafari Plus</td>
                      <td className="px-4 py-3">Serious astronomers</td>
                      <td className="px-4 py-3">$14.99</td>
                      <td className="px-4 py-3">iOS, Android</td>
                    </tr>
                    <tr className="text-gray-300 bg-gray-900/50">
                      <td className="px-4 py-3 font-medium text-white">Stellarium Mobile</td>
                      <td className="px-4 py-3">Free beauty & accuracy</td>
                      <td className="px-4 py-3">Free</td>
                      <td className="px-4 py-3">iOS, Android</td>
                    </tr>
                    <tr className="text-gray-300">
                      <td className="px-4 py-3 font-medium text-white">Star Walk 2</td>
                      <td className="px-4 py-3">Beginners & families</td>
                      <td className="px-4 py-3">$2.99</td>
                      <td className="px-4 py-3">iOS, Android</td>
                    </tr>
                    <tr className="text-gray-300 bg-gray-900/50">
                      <td className="px-4 py-3 font-medium text-white">ISS Detector</td>
                      <td className="px-4 py-3">Satellite tracking</td>
                      <td className="px-4 py-3">$1.99</td>
                      <td className="px-4 py-3">iOS, Android</td>
                    </tr>
                    <tr className="text-gray-300">
                      <td className="px-4 py-3 font-medium text-white">Heavens-Above</td>
                      <td className="px-4 py-3">Detailed sat predictions</td>
                      <td className="px-4 py-3">Free</td>
                      <td className="px-4 py-3">Web, iOS, Android</td>
                    </tr>
                    <tr className="text-gray-300 bg-gray-900/50">
                      <td className="px-4 py-3 font-medium text-white">NASA App</td>
                      <td className="px-4 py-3">Official NASA content</td>
                      <td className="px-4 py-3">Free</td>
                      <td className="px-4 py-3">iOS, Android</td>
                    </tr>
                    <tr className="text-gray-300">
                      <td className="px-4 py-3 font-medium text-white">Spaceflight Tracker</td>
                      <td className="px-4 py-3">Launch countdowns</td>
                      <td className="px-4 py-3">Free</td>
                      <td className="px-4 py-3">Web</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Recommendations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Recommendations by User Type</h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Complete Beginner</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">1.</span>
                    <span><strong className="text-white">Stellarium Mobile (Free)</strong> — Learn constellations and planets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">2.</span>
                    <span><strong className="text-white">NASA App (Free)</strong> — Stunning images and educational content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">3.</span>
                    <span><strong className="text-white">Spaceflight Tracker (Free)</strong> — Follow upcoming launches</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-400">Total cost: $0</p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Casual Stargazer</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">1.</span>
                    <span><strong className="text-white">SkySafari Basic ($2.99)</strong> — More features than free apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">2.</span>
                    <span><strong className="text-white">ISS Detector ($1.99)</strong> — Never miss the ISS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">3.</span>
                    <span><strong className="text-white">Meteor Shower Calendar ($2.99)</strong> — Track annual showers</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-400">Total cost: $7.97</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Serious Amateur Astronomer</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">1.</span>
                    <span><strong className="text-white">SkySafari Plus ($14.99)</strong> — Telescope control & advanced features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">2.</span>
                    <span><strong className="text-white">ISS Detector + Extensions ($3.97)</strong> — Complete satellite suite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">3.</span>
                    <span><strong className="text-white">Heavens-Above (Free)</strong> — Detailed predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">4.</span>
                    <span><strong className="text-white">NASA App (Free)</strong> — Official resources</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-400">Total cost: $18.96</p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Launch Enthusiast</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">1.</span>
                    <span><strong className="text-white">Spaceflight Tracker (Free)</strong> — Real-time countdowns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">2.</span>
                    <span><strong className="text-white">Space Launch Now (Free)</strong> — Push notifications for all launches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">3.</span>
                    <span><strong className="text-white">NASA App (Free)</strong> — NASA TV live streams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">4.</span>
                    <span><strong className="text-white">Twitter/X</strong> — Follow @SpaceX, @NASA, @SpaceflightNow</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-400">Total cost: $0</p>
              </div>
            </div>
          </section>

        </article>

        {/* Related Guides */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/guides/spot-satellites" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-satellite text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Spot Satellites</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Put these apps to use by spotting satellites tonight
              </p>
            </Link>

            <Link href="/guides/watch-launches" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-rocket text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Watch Launches</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Use launch apps to never miss a rocket launch
              </p>
            </Link>

            <Link href="/guides/meteor-showers" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-meteor text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Meteor Showers</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Track annual meteor showers with the right apps
              </p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Start Exploring Space Today</h3>
          <p className="text-gray-300 mb-6">Track live launches and discover what&apos;s happening in space right now</p>
          <Link href="/launches">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-colors">
              View Launch Schedule
            </button>
          </Link>
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
