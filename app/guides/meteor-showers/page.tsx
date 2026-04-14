import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meteor Shower Observation Guide 2026 - How to Watch Shooting Stars | Spaceflight Tracker',
  description: 'Complete guide to observing meteor showers in 2026. Learn about Perseids, Geminids, Leonids, and more. Best viewing times, locations, photography tips, and what to bring.',
  keywords: ['meteor showers', 'Perseids', 'Geminids', 'Leonids', 'shooting stars', 'meteor shower calendar 2026', 'how to watch meteors'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/guides/meteor-showers',
  },
};

export default function MeteorShowersGuide() {
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
          <span className="text-gray-300">Meteor Showers</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-meteor text-green-400"></i>
            <span className="text-green-400 text-sm font-medium">Beginner Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Meteor Shower Observation Guide</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Learn everything you need to watch meteor showers. From understanding what causes shooting stars to finding the best viewing spots and capturing them on camera.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 p-6 bg-gray-800 border border-gray-700 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">10 min</div>
            <div className="text-sm text-gray-400">Read Time</div>
          </div>
          <div className="text-center border-l border-r border-gray-700">
            <div className="text-2xl font-bold text-green-400 mb-1">Beginner</div>
            <div className="text-sm text-gray-400">Difficulty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">Free</div>
            <div className="text-sm text-gray-400">Cost</div>
          </div>
        </div>

        {/* Main Content */}
        <article className="prose prose-invert prose-lg max-w-none">

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">2026 Meteor Shower Calendar</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Each year, Earth passes through debris trails left by comets, creating predictable meteor showers. Here are the major showers for 2026, with peak viewing dates and expected rates.
            </p>

            {/* Quadrantids */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-white">Quadrantids</h3>
                <span className="text-xs bg-yellow-600 text-white px-3 py-1 rounded-full font-semibold">EXCELLENT</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-400">Peak:</span> <span className="text-white font-semibold">January 3-4</span>
                </div>
                <div>
                  <span className="text-gray-400">ZHR:</span> <span className="text-white font-semibold">120 meteors/hour</span>
                </div>
                <div>
                  <span className="text-gray-400">Moon:</span> <span className="text-white font-semibold">Waxing Crescent (14%)</span>
                </div>
                <div>
                  <span className="text-gray-400">Active:</span> <span className="text-white">Dec 28 - Jan 12</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                One of the best showers of the year but often overlooked due to cold January weather. Peak is very sharp - best viewing in a 6-hour window. Bright, blue meteors. New Year makes this convenient for many viewers.
              </p>
              <div className="bg-blue-900/20 rounded-lg p-3">
                <p className="text-gray-300 text-xs"><strong className="text-white">Best Time:</strong> After midnight on Jan 3-4, looking northeast. Moon sets early, leaving dark skies for peak.</p>
              </div>
            </div>

            {/* Lyrids */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-white">Lyrids</h3>
                <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">GOOD</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-400">Peak:</span> <span className="text-white font-semibold">April 22-23</span>
                </div>
                <div>
                  <span className="text-gray-400">ZHR:</span> <span className="text-white font-semibold">18 meteors/hour</span>
                </div>
                <div>
                  <span className="text-gray-400">Moon:</span> <span className="text-white font-semibold">Waning Crescent (28%)</span>
                </div>
                <div>
                  <span className="text-gray-400">Active:</span> <span className="text-white">Apr 14-30</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Oldest recorded meteor shower (observed for 2,700 years). Moderate rates but known for occasional bright fireballs. Pleasant spring temperatures make viewing comfortable.
              </p>
            </div>

            {/* Eta Aquariids */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-white">Eta Aquariids</h3>
                <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">GOOD</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-400">Peak:</span> <span className="text-white font-semibold">May 5-6</span>
                </div>
                <div>
                  <span className="text-gray-400">ZHR:</span> <span className="text-white font-semibold">50 meteors/hour</span>
                </div>
                <div>
                  <span className="text-gray-400">Moon:</span> <span className="text-white font-semibold">Waxing Gibbous (67%)</span>
                </div>
                <div>
                  <span className="text-gray-400">Active:</span> <span className="text-white">Apr 19 - May 28</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Debris from Halley&apos;s Comet. Best viewed from Southern Hemisphere but visible in Northern Hemisphere before dawn. Fast meteors with persistent trains. Moon interference in 2026.
              </p>
            </div>

            {/* Perseids */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-white">Perseids</h3>
                <span className="text-xs bg-red-600 text-white px-3 py-1 rounded-full font-semibold">POOR (MOON)</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-400">Peak:</span> <span className="text-white font-semibold">August 12-13</span>
                </div>
                <div>
                  <span className="text-gray-400">ZHR:</span> <span className="text-white font-semibold">100 meteors/hour</span>
                </div>
                <div>
                  <span className="text-gray-400">Moon:</span> <span className="text-white font-semibold">Full Moon (98%)</span>
                </div>
                <div>
                  <span className="text-gray-400">Active:</span> <span className="text-white">Jul 17 - Aug 24</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Usually the most popular meteor shower due to warm August nights and high rates. Unfortunately, 2026 has terrible moon interference - nearly full moon washes out all but the brightest meteors. Still worth watching for fireballs.
              </p>
              <div className="bg-orange-900/20 rounded-lg p-3">
                <p className="text-gray-300 text-xs"><strong className="text-white">Moon Strategy:</strong> Watch during moonset window or early morning when moon is low. Focus on bright fireballs only.</p>
              </div>
            </div>

            {/* Orionids */}
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-white">Orionids</h3>
                <span className="text-xs bg-yellow-600 text-white px-3 py-1 rounded-full font-semibold">EXCELLENT</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-400">Peak:</span> <span className="text-white font-semibold">October 21-22</span>
                </div>
                <div>
                  <span className="text-gray-400">ZHR:</span> <span className="text-white font-semibold">20 meteors/hour</span>
                </div>
                <div>
                  <span className="text-gray-400">Moon:</span> <span className="text-white font-semibold">Waxing Crescent (2%)</span>
                </div>
                <div>
                  <span className="text-gray-400">Active:</span> <span className="text-white">Oct 2 - Nov 7</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Second shower from Halley&apos;s Comet. Fast meteors (148,000 mph) often leave glowing trains. Excellent dark sky conditions in 2026 with new moon. Pleasant fall temperatures.
              </p>
            </div>

            {/* Leonids */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-white">Leonids</h3>
                <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">GOOD</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-400">Peak:</span> <span className="text-white font-semibold">November 17-18</span>
                </div>
                <div>
                  <span className="text-gray-400">ZHR:</span> <span className="text-white font-semibold">15 meteors/hour</span>
                </div>
                <div>
                  <span className="text-gray-400">Moon:</span> <span className="text-white font-semibold">Waning Crescent (6%)</span>
                </div>
                <div>
                  <span className="text-gray-400">Active:</span> <span className="text-white">Nov 6-30</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Famous for producing meteor storms every 33 years (last in 1999-2002). Normal years have modest rates but very fast meteors. Dark skies in 2026. Can produce bright fireballs.
              </p>
            </div>

            {/* Geminids */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-white">Geminids</h3>
                <span className="text-xs bg-yellow-600 text-white px-3 py-1 rounded-full font-semibold">EXCELLENT</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-400">Peak:</span> <span className="text-white font-semibold">December 13-14</span>
                </div>
                <div>
                  <span className="text-gray-400">ZHR:</span> <span className="text-white font-semibold">150 meteors/hour</span>
                </div>
                <div>
                  <span className="text-gray-400">Moon:</span> <span className="text-white font-semibold">Waning Gibbous (82%)</span>
                </div>
                <div>
                  <span className="text-gray-400">Active:</span> <span className="text-white">Dec 4-17</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Arguably the best meteor shower of the year. Reliable, high rates, colorful meteors, visible from 9 PM onward (no need to wait until midnight). Only shower from an asteroid (3200 Phaethon), not a comet. Some moon interference in 2026 but still excellent.
              </p>
              <div className="bg-blue-900/20 rounded-lg p-3">
                <p className="text-gray-300 text-xs"><strong className="text-white">Why It&apos;s Best:</strong> Active all night (not just pre-dawn), slower meteors easier to see, multi-colored meteors, reliable rates, and visible early in evening.</p>
              </div>
            </div>

            {/* Ursids */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-600/20 rounded-xl p-6 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-white">Ursids</h3>
                <span className="text-xs bg-gray-600 text-white px-3 py-1 rounded-full font-semibold">MINOR</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-400">Peak:</span> <span className="text-white font-semibold">December 22-23</span>
                </div>
                <div>
                  <span className="text-gray-400">ZHR:</span> <span className="text-white font-semibold">10 meteors/hour</span>
                </div>
                <div>
                  <span className="text-gray-400">Moon:</span> <span className="text-white font-semibold">Waning Crescent (42%)</span>
                </div>
                <div>
                  <span className="text-gray-400">Active:</span> <span className="text-white">Dec 17-26</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Minor shower closing out the year. Low rates but occasionally produces outbursts. Best viewed from Northern Hemisphere. Close to winter solstice means very long nights.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Best Viewing Times and Locations</h2>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">When to Watch</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Optimal Viewing Windows:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-clock text-yellow-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">After Midnight (Best):</strong> Meteor rates are typically 2-3x higher after midnight compared to evening. This is because after midnight, you&apos;re on the leading edge of Earth as it plows through space, sweeping up more debris.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-moon text-blue-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Pre-Dawn Hours (Peak):</strong> The hours between 2 AM and dawn offer the highest meteor rates. This is when the radiant point is highest in the sky and you&apos;re moving head-on into the meteor stream.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-calendar text-green-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Peak Night ± 1 Day:</strong> Don&apos;t worry if clouds interfere on peak night. Most showers have good rates for 2-3 nights around the peak. Check the night before and after.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-eye text-purple-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Dark Adaptation:</strong> Give your eyes 20-30 minutes to adapt to darkness before expecting to see faint meteors. Avoid looking at phones or bright lights during viewing.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Where to Watch</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Location Requirements:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-location-dot text-red-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Dark Skies Essential:</strong> Light pollution is the biggest enemy of meteor watching. Get as far from cities as possible. A Bortle Class 3-4 or darker site shows 3-5x more meteors than suburban locations.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-eye text-blue-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Wide Open View:</strong> You want to see as much sky as possible. Avoid trees, buildings, hills that block large portions of sky. Open fields, beaches, or high elevation sites are ideal.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-shield text-green-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Safe & Legal:</strong> Choose locations where you&apos;re allowed to be at night. State parks often close at dusk. BLM land, designated dark sky parks, and private property (with permission) work well.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-car text-orange-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Accessible Year-Round:</strong> Consider weather and road conditions. Winter showers (Geminids, Quadrantids) may have snow/ice. Check road conditions before heading to remote sites.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Moon Phase Strategy</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The Moon is brighter than you think. A half moon reduces visible meteors by 50%. Full moon can reduce counts by 75-90%. When moon is present, position yourself so the moon is behind you or behind trees/buildings. Look away from the moon toward the darkest part of the sky.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What to Bring</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Meteor watching involves hours of reclining outdoors at night. Comfort is critical - if you&apos;re cold, wet, or uncomfortable, you won&apos;t last long enough to see many meteors.
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h3 className="text-xl font-semibold text-white mb-4">Essential Gear Checklist:</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Must Have:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span><strong className="text-white">Reclining chair or blanket:</strong> Laying on your back is most comfortable for hours of sky watching. Zero-gravity chairs ($30-80) are perfect. Sleeping bag on foam pad works too.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span><strong className="text-white">Warm clothing:</strong> Dress warmer than you think necessary. Nights get cold, especially while sitting still for hours. Layer: base layer, fleece, insulated jacket.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span><strong className="text-white">Sleeping bag or blankets:</strong> Even in summer, temperatures drop significantly after midnight. Bring extra blankets.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span><strong className="text-white">Red flashlight:</strong> Preserves night vision. White light ruins dark adaptation for 20 minutes. Cover a regular flashlight with red cellophane or buy a red LED headlamp ($10-20).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span><strong className="text-white">Snacks and drinks:</strong> Hot chocolate, coffee, or tea in a thermos. Energy bars, fruit, trail mix. Avoid alcohol - impairs dark adaptation and reaction time.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span><strong className="text-white">Bug spray:</strong> Mosquitoes and biting insects are active during meteor shower season. DEET-based repellent works best.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Recommended:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Pillow:</strong> Neck support makes extended viewing comfortable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Tarp or ground cloth:</strong> Protects blankets from dew and dirt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Portable table:</strong> For drinks, cameras, phone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Star chart or app:</strong> Identify constellations while waiting for meteors. Use red night mode.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Camera and tripod:</strong> For photography (see tips below)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Companions:</strong> Meteor watching is more fun with friends. Easier to stay alert. Plus safety in remote locations.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Tally counter or notebook:</strong> If you want to record your meteor counts scientifically</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">What NOT to Bring</h3>

            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-xmark text-red-400 mt-1"></i>
                <span><strong className="text-white">Telescope or binoculars:</strong> Meteors move across wide areas of sky. Optical instruments limit field of view and you&apos;ll miss meteors. Use naked eyes only.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-xmark text-red-400 mt-1"></i>
                <span><strong className="text-white">Bright lights:</strong> Lanterns, bright flashlights, car headlights ruin night vision for everyone</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-xmark text-red-400 mt-1"></i>
                <span><strong className="text-white">Loud music:</strong> Many people come for peaceful nature experience. Be respectful of other observers.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How to See the Most Meteors</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Maximizing your meteor count is about technique, patience, and knowing where to look.
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h3 className="text-xl font-semibold text-white mb-4">Viewing Technique:</h3>

              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Don&apos;t Stare at the Radiant:</strong> The radiant is where meteors appear to originate from (e.g., Perseus for Perseids). However, meteors are visible across the entire sky. Looking directly at the radiant means you see short, faint meteors. Look 30-50° away from the radiant for longer, brighter meteor trails.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Scan the Darkest Sky:</strong> Look toward the darkest portion of sky away from light pollution and the Moon. Let your eyes wander naturally - don&apos;t fixate on one spot.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Use Peripheral Vision:</strong> Your eyes are more sensitive to motion in peripheral vision. Slight movement draws attention - this is how you&apos;ll catch many meteors.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Be Patient:</strong> Meteors come in bursts and lulls. You might see 5 in 2 minutes, then nothing for 10 minutes. This is normal. Don&apos;t give up after 20 minutes. Stay at least 1-2 hours, ideally 3-4 hours.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">5.</span>
                  <div>
                    <strong className="text-white">Trace Paths Backward:</strong> When you see a meteor, mentally trace its path backward. If it points toward the radiant, it&apos;s part of the shower. Random meteors (sporadics) appear from any direction.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">6.</span>
                  <div>
                    <strong className="text-white">Call Out Sightings:</strong> If with others, call out when you see one (&quot;Meteor!&quot; or &quot;There!&quot;). Others might catch the tail end. Makes it more interactive and fun.
                  </div>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Understanding ZHR (Zenithal Hourly Rate)</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              Meteor showers are rated by ZHR - the number of meteors a single observer would see per hour under perfect conditions (radiant directly overhead, perfectly dark sky, 6.5 magnitude limiting visibility). In reality, you&apos;ll see 30-50% of the ZHR:
            </p>

            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>ZHR 100 = expect to see 30-50 meteors/hour in good conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>ZHR 50 = expect 15-25 meteors/hour</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>ZHR 20 = expect 6-10 meteors/hour</span>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed mb-4">
              Remember, meteors come in clusters. You might see 10 in 15 minutes, then 2 in the next 45 minutes, averaging out to the expected rate.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Photography Tips for Capturing Meteors</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Photographing meteors is challenging but rewarding. You&apos;re essentially taking long exposures of the sky and hoping a meteor crosses your frame.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Camera Settings</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Recommended Settings:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-camera text-purple-400 mt-1"></i>
                  <span><strong className="text-white">Camera:</strong> DSLR or mirrorless with manual controls. Full-frame sensor helps but crop sensor works fine.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-film text-purple-400 mt-1"></i>
                  <span><strong className="text-white">Lens:</strong> Wide-angle (14-24mm) captures more sky. Use fastest aperture available (f/1.4, f/1.8, f/2.8).</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-aperture text-purple-400 mt-1"></i>
                  <span><strong className="text-white">Aperture:</strong> Wide open (f/1.4-2.8). Stop down slightly (f/2.8-4.0) if stars are soft at corners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-stopwatch text-purple-400 mt-1"></i>
                  <span><strong className="text-white">Shutter Speed:</strong> 15-30 seconds. Longer captures more meteors but stars trail due to Earth rotation. 20 seconds is sweet spot.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-signal text-purple-400 mt-1"></i>
                  <span><strong className="text-white">ISO:</strong> 1600-6400. Higher ISO = brighter meteors but more noise. Test your camera to find acceptable noise level.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-crosshairs text-purple-400 mt-1"></i>
                  <span><strong className="text-white">Focus:</strong> Manual focus to infinity. Use live view on bright star, zoom 10x, focus until sharp. Tape focus ring.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-file text-purple-400 mt-1"></i>
                  <span><strong className="text-white">Format:</strong> RAW for maximum editing flexibility</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Shooting Strategy</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ol className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Continuous Shooting:</strong> Set up camera and trigger it to take back-to-back exposures automatically (intervalometer or built-in interval timer). Keep shooting for hours. More exposures = higher chance of catching meteors.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Compose Wisely:</strong> Include interesting foreground (trees, mountains, building silhouettes). Point camera 30-50° away from radiant, toward darkest sky.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Use Intervalometer:</strong> Wired or wireless intervalometer ($15-40) or camera&apos;s built-in timer. Set to shoot continuously with minimal gap between exposures (1-2 second gap).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Battery Management:</strong> Cold drains batteries fast. Bring 3-4 fully charged batteries. Keep spares warm in pocket.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">5.</span>
                  <div>
                    <strong className="text-white">Dew Prevention:</strong> Dew forms on lens in humid conditions. Use lens hood. Chemical hand warmers rubber-banded around lens barrel can prevent fogging.
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Realistic Expectations</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Even during peak showers, you might shoot 200 frames and capture 2-5 meteors. That&apos;s normal and successful! One great meteor shot is worth hours of waiting. For more detailed astrophotography guidance, see our <Link href="/guides/astrophotography-basics" className="text-blue-400 hover:text-blue-300">astrophotography guide</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Weather and Moon Phase Considerations</h2>

            <h3 className="text-2xl font-semibold text-white mb-3">Weather Planning</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-cloud text-blue-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Clear Skies Required:</strong> Clouds block meteors. Check hourly forecast for peak night. Clear.darksky.net shows cloud cover predictions. 70%+ clear sky needed for good viewing.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-temperature-low text-cyan-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Temperature Drops:</strong> Expect temperatures 15-25°F colder than daytime high. Pre-dawn is coldest. Check forecast and dress even warmer.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-wind text-gray-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Wind Chill:</strong> Wind makes cold feel much colder. Bring windbreaker. Consider finding wind-sheltered location (valley, behind hill).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-droplet text-blue-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Dew Point:</strong> High humidity creates dew on everything - blankets, cameras, eyeglasses. Bring towels. Chemical hand warmers on camera lens prevents fogging.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Moon Phase Impact</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="p-3 bg-green-900/20 border border-green-500/20 rounded-lg">
                  <strong className="text-white">New Moon (0-15%):</strong> Ideal conditions. Dark sky shows faint meteors. Best possible viewing.
                </div>
                <div className="p-3 bg-yellow-900/20 border border-yellow-500/20 rounded-lg">
                  <strong className="text-white">Crescent/Quarter (16-50%):</strong> Good conditions. Moon sets before peak hours or rises after. Plan around moonset/moonrise.
                </div>
                <div className="p-3 bg-orange-900/20 border border-orange-500/20 rounded-lg">
                  <strong className="text-white">Gibbous (51-90%):</strong> Challenging. Moon washes out faint meteors. Only bright meteors visible. Still worth watching bright showers (Geminids, Perseids).
                </div>
                <div className="p-3 bg-red-900/20 border border-red-500/20 rounded-lg">
                  <strong className="text-white">Full Moon (91-100%):</strong> Poor conditions. Sky is bright all night. Only fireballs visible. Consider skipping unless it&apos;s a major shower.
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Planning Checklist</h2>

            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">One Week Before:</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Confirm peak date for chosen shower</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Check moon phase - determine if viewing is worthwhile</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Scout dark sky location - visit during day if unfamiliar</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Check extended weather forecast</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Day Of:</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Recheck hourly cloud forecast</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Charge camera batteries and phone</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Prepare warm clothes and viewing setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Pack snacks, drinks, and comfort items</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Tell someone where you&apos;re going</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">At Site:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Arrive 30 minutes before viewing starts for setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Position yourself away from lights and other viewers</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Let eyes adapt to darkness for 20-30 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Relax and enjoy - meteors will come!</span>
                </li>
              </ul>
            </div>
          </section>

        </article>

        {/* Related Guides */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/guides/astrophotography-basics" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-star text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Astrophotography Basics</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Master photographing the night sky including meteors
              </p>
            </Link>

            <Link href="/guides/astronomy-apps" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-mobile-screen text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Astronomy Apps</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Apps for tracking meteor showers and planning observations
              </p>
            </Link>

            <Link href="/guides/spot-satellites" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-satellite text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Spot Satellites</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Another way to enjoy the night sky beyond meteor showers
              </p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Check Upcoming Astronomical Events</h3>
          <p className="text-gray-300 mb-6">Discover what&apos;s happening in the sky this month</p>
          <Link href="/events">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-colors">
              View Sky Events Calendar
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
