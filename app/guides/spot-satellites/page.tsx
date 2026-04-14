import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Satellite Spotting Guide - How to See Satellites in the Night Sky | Spaceflight Tracker',
  description: 'Learn how to spot satellites with the naked eye. Identify Starlink trains, distinguish satellites from planes and stars, use tracking apps, and record your observations.',
  keywords: ['spot satellites', 'satellite watching', 'Starlink trains', 'satellite tracking apps', 'see satellites', 'Heavens-Above'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/guides/spot-satellites',
  },
};

export default function SpotSatellitesGuide() {
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
          <span className="text-gray-300">Satellite Spotting</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-satellite text-green-400"></i>
            <span className="text-green-400 text-sm font-medium">Beginner Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Satellite Spotting Guide</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover the magic of spotting satellites with your naked eye. Learn what to look for, when to watch, how to use tracking apps, and identify the spectacular Starlink satellite trains.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 p-6 bg-gray-800 border border-gray-700 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">8 min</div>
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
            <h2 className="text-3xl font-bold text-white mb-4">What Satellites Look Like in the Sky</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Satellites look like stars moving smoothly and steadily across the sky. Unlike airplanes, they don&apos;t have blinking lights. Unlike meteors, they don&apos;t streak across the sky in a second or two. They glide silently, taking anywhere from 30 seconds to several minutes to cross from horizon to horizon.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Key Characteristics</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-star text-yellow-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Appearance:</strong> Point of light like a star, usually white or slightly yellowish. Brightness varies from barely visible to brighter than the brightest stars. The ISS can reach magnitude -3.9, brighter than everything except the Moon, Venus, and occasionally Jupiter.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-arrows-alt text-blue-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Movement:</strong> Steady, smooth motion in a straight line. Speed appears constant (though actual speed is 17,000+ mph in orbit). Crosses from one side of sky to another in 2-6 minutes typically.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-volume-xmark text-gray-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Sound:</strong> Completely silent. Satellites are 100+ miles high - far too distant to hear. If you hear it, it&apos;s an airplane.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-lightbulb-on text-orange-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Brightness Changes:</strong> May fade in/out or change brightness as it crosses the sky. This happens when the satellite rotates and reflects different amounts of sunlight, or when it enters/exits Earth&apos;s shadow.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-ban text-red-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">No Blinking:</strong> Steady light. Airplanes have blinking red/white/green navigation lights. Satellites reflect sunlight steadily like a moving star.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Why Satellites Are Visible</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              Satellites don&apos;t generate light - they reflect sunlight, just like the Moon. You can only see them when:
            </p>

            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">The satellite is illuminated by the Sun</strong> — Must be in sunlight, not Earth&apos;s shadow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">You are in darkness or twilight</strong> — Sun must be below your horizon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">The satellite passes overhead</strong> — Must be above your local horizon</span>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed mb-4">
              This is why the best viewing times are right after sunset (evening twilight) or before sunrise (morning twilight). The sky is dark enough to see satellites, but they&apos;re high enough to still be in sunlight.
            </p>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Iridium Flares (Now Rare)</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Older Iridium satellites used to produce spectacular &quot;flares&quot; - brief, brilliant reflections reaching magnitude -8 (brighter than Venus). Most original Iridium satellites have been deorbited, making flares much rarer. The new Iridium NEXT constellation doesn&apos;t flare as dramatically.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Best Times and Conditions for Satellite Watching</h2>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Optimal Viewing Times</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Prime Satellite Watching Windows:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-sunset text-orange-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Evening Twilight (30 min to 2 hours after sunset):</strong> Most popular time. Sky is dark but satellites overhead are still illuminated. Casual viewers find this most convenient. More satellites visible early in this window.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-sunrise text-yellow-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Morning Twilight (2 hours to 30 min before sunrise):</strong> Often has clearer skies than evening. Fewer people watch, but equally good viewing. Sky brightens as sunrise approaches.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-moon text-gray-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Deep Night (Not Ideal):</strong> Fewer satellites visible because many are in Earth&apos;s shadow. The brightest satellites like ISS can still be seen if they&apos;re high enough to catch sunlight. Most satellites disappear mid-pass as they enter shadow.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Weather and Sky Conditions</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-cloud-sun text-blue-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Clear Skies Required:</strong> Clouds will block satellites. Need at least 70% clear sky for good viewing. Check weather forecast for clear evenings.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-city text-yellow-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Light Pollution Matters:</strong> Dark skies show more satellites. City dwellers can still see bright satellites (ISS, Starlink trains), but rural areas reveal dozens more. Even modest satellites become visible under dark skies.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-moon text-gray-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Moon Phase:</strong> Bright Moon washes out dimmer satellites but doesn&apos;t prevent seeing bright ones. New Moon weeks are best for spotting faint satellites. Full Moon weeks limit viewing to brightest objects.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-wind text-cyan-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Atmospheric Clarity:</strong> After rain or cold fronts, atmosphere is clearer. Hazy, humid nights reduce visibility. High altitude locations offer clearer views.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Seasonal Variations</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              Satellite viewing windows change with seasons:
            </p>

            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Summer:</strong> Short twilight window, but warm weather makes longer observing sessions comfortable. Evening window lasts 1-2 hours after sunset.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Winter:</strong> Longer twilight window, clearer atmosphere, but cold temperatures limit comfort. Dress warmly. Morning sessions can be harsh in winter.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Spring/Fall:</strong> Balanced conditions - moderate twilight length and comfortable temperatures. Often ideal for beginners.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Using Satellite Tracking Apps and Websites</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              While you can stumble upon satellites by watching the sky, tracking apps tell you exactly when and where to look. This dramatically increases your success rate.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Best Satellite Tracking Tools</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <div className="space-y-4 text-gray-300">
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Heavens-Above</h4>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">FREE</span>
                  </div>
                  <p className="text-sm mb-2">
                    <strong className="text-white">Website:</strong> heavens-above.com • <strong className="text-white">App:</strong> iOS/Android
                  </p>
                  <p className="text-sm mb-2">
                    The most comprehensive satellite prediction tool. Shows hundreds of satellites, precise pass times, star charts with satellite paths, brightness predictions, and sky maps.
                  </p>
                  <div className="mt-3">
                    <h5 className="text-white font-semibold text-sm mb-1">Best For:</h5>
                    <p className="text-sm">Serious satellite watchers. Provides more detail than any other free tool. Slightly technical interface.</p>
                  </div>
                  <div className="mt-2">
                    <h5 className="text-white font-semibold text-sm mb-1">Key Features:</h5>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• 10-day predictions for all visible satellites</li>
                      <li>• Interactive star charts showing satellite path</li>
                      <li>• Brightness (magnitude) predictions</li>
                      <li>• Radio satellite frequencies for ham radio operators</li>
                      <li>• Saves your location for quick access</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">ISS Detector</h4>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">$1.99</span>
                  </div>
                  <p className="text-sm mb-2">
                    <strong className="text-white">App:</strong> iOS/Android (Premium features available)
                  </p>
                  <p className="text-sm mb-2">
                    User-friendly mobile app with push notifications and augmented reality view. Best mobile experience for casual users. Shows ISS, Starlink, and other bright satellites.
                  </p>
                  <div className="mt-3">
                    <h5 className="text-white font-semibold text-sm mb-1">Best For:</h5>
                    <p className="text-sm">Beginners and casual viewers. Easiest to use. Great for kids and family viewing.</p>
                  </div>
                  <div className="mt-2">
                    <h5 className="text-white font-semibold text-sm mb-1">Key Features:</h5>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Push notifications 15 min before ISS passes</li>
                      <li>• AR mode - point phone at sky to see satellite position</li>
                      <li>• Built-in compass and altitude display</li>
                      <li>• Starlink train predictions (add-on purchase)</li>
                      <li>• Radio satellites extension available</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">SkySafari</h4>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">$3-40</span>
                  </div>
                  <p className="text-sm mb-2">
                    <strong className="text-white">App:</strong> iOS/Android (Basic/Plus/Pro versions)
                  </p>
                  <p className="text-sm mb-2">
                    Powerful astronomy app that includes satellite tracking as one feature among many. Shows constellations, planets, deep sky objects, AND satellites.
                  </p>
                  <div className="mt-3">
                    <h5 className="text-white font-semibold text-sm mb-1">Best For:</h5>
                    <p className="text-sm">Astronomy enthusiasts who want an all-in-one app for stars, planets, and satellites.</p>
                  </div>
                  <div className="mt-2">
                    <h5 className="text-white font-semibold text-sm mb-1">Key Features:</h5>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Satellite tracking integrated with star maps</li>
                      <li>• Real-time satellite positions</li>
                      <li>• Telescope control (Pro version)</li>
                      <li>• Huge database of celestial objects</li>
                      <li>• Night mode for preserving dark adaptation</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Satellite Tracker by Star Walk</h4>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">FREE</span>
                  </div>
                  <p className="text-sm mb-2">
                    <strong className="text-white">App:</strong> iOS/Android
                  </p>
                  <p className="text-sm mb-2">
                    Simple, beautiful interface focused on ISS and major satellites. Good for beginners who find Heavens-Above overwhelming.
                  </p>
                  <div className="mt-3">
                    <h5 className="text-white font-semibold text-sm mb-1">Best For:</h5>
                    <p className="text-sm">Complete beginners wanting the simplest possible tool.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">How to Use Tracking Apps</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Set Your Location:</strong> Enter your exact location or let the app use GPS. Predictions are location-specific - a satellite visible in New York might not be visible in Los Angeles.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Browse Upcoming Passes:</strong> Apps show list of satellites passing over your location in the next days. Look for passes with high maximum altitude (above 40°) and bright magnitude (negative numbers, lower is brighter).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Note the Details:</strong> Each prediction shows start time, direction satellite appears from, maximum altitude, disappearance direction, duration, and brightness. Example: &quot;ISS - Start: 7:42 PM WSW, Max alt: 67°, Ends: 7:48 PM ENE, Mag: -3.5&quot;
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Set Alerts:</strong> Enable notifications so you don&apos;t miss good passes. Most apps alert 15-30 minutes before.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">5.</span>
                  <div>
                    <strong className="text-white">Use Sky Map/AR:</strong> Minutes before the pass, use the app&apos;s sky map or AR view to see exactly where to look. Point your phone at the sky - the app overlays satellite position.
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Understanding Altitude</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Altitude is measured in degrees above the horizon. 0° = horizon, 90° = directly overhead (zenith), 45° = halfway up. A satellite at 20° altitude is low and may be hard to see. One at 70° is high and prominent. Best viewing is above 40° altitude.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Identifying Starlink Trains</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              SpaceX Starlink satellites create spectacular &quot;trains&quot; shortly after launch - a string of 20-50+ satellites following each other in a line, looking like a parade of stars marching across the sky. This is one of the most dramatic satellite sights accessible to casual observers.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">What Makes Starlink Trains Special</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-train text-blue-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Formation:</strong> Satellites are launched together and initially travel in a close string before spreading out to operational orbits. Spacing is typically 10-30 seconds apart - you see one satellite, then another, then another, all following the same path.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-clock text-yellow-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Duration:</strong> The train can take 5-15 minutes to fully pass overhead. First satellite appears, then the rest follow in succession. Count how many you can see!
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-star text-yellow-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Brightness:</strong> Newly-launched Starlink satellites are very bright, often magnitude 1-2 (similar to stars in the Big Dipper). After reaching operational orbit, they dim significantly as they orient edge-on to reduce reflections.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-calendar text-green-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Visibility Window:</strong> Trains are visible for about 1-3 weeks after launch. After that, satellites spread out and are harder to distinguish from other satellites.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">How to Find Starlink Trains</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Step-by-Step:</h4>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Check Launch Schedule:</strong> Visit our <Link href="/launches" className="text-blue-400 hover:text-blue-300">launches page</Link> or SpaceX.com to see when the next Starlink launch is scheduled. Launches happen 1-3 times per month.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Wait 1-2 Days:</strong> Starlink trains are typically visible starting 24-48 hours after launch, once they raise their orbit slightly.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Use Tracking Tools:</strong> FindStarlink.com is dedicated to Starlink predictions. Enter your location for precise pass times. Heavens-Above also shows Starlink trains. ISS Detector app has Starlink extension.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Pick a Good Pass:</strong> Look for passes with high altitude (50°+) during evening or morning twilight for best visibility.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">5.</span>
                  <div>
                    <strong className="text-white">Watch the Whole Train:</strong> The first satellite appears at the predicted time and direction. Keep watching - more satellites follow the same path. Count them! Recent launches have 20-50+ satellites.
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-exclamation-circle text-purple-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Starlink Controversy</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Astronomers have expressed concerns about Starlink satellites interfering with telescope observations. SpaceX has responded by adding visors to new satellites and orienting them to reduce reflectivity. Newer Starlink satellites are significantly dimmer than early versions, though still visible to the naked eye during the initial weeks after launch.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Distinguishing Satellites from Planes and Stars</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Beginners often confuse satellites with airplanes, meteors, or planets. Here&apos;s how to tell them apart:
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <div className="space-y-4 text-gray-300">
                <div className="p-4 bg-gray-900/50 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold text-white mb-2">Satellite</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Steady, non-blinking light</li>
                    <li>• Moves smoothly in straight line</li>
                    <li>• Takes minutes to cross sky</li>
                    <li>• Completely silent</li>
                    <li>• May fade in/out gradually</li>
                    <li>• White or slightly yellow/orange color</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold text-white mb-2">Airplane</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Blinking lights (red, white, sometimes green)</li>
                    <li>• May have steady landing lights too</li>
                    <li>• Often audible (jet engine rumble)</li>
                    <li>• Multiple lights visible - wings, tail, fuselage</li>
                    <li>• Lower altitude, slower apparent motion</li>
                    <li>• Can change direction</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="text-lg font-semibold text-white mb-2">Meteor (Shooting Star)</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Extremely fast - crosses sky in 1-3 seconds</li>
                    <li>• Often leaves brief trail/streak</li>
                    <li>• Can be very bright, sometimes colorful</li>
                    <li>• Appears suddenly, gone almost instantly</li>
                    <li>• Can appear anywhere in sky</li>
                    <li>• Rare (see a few per hour during good conditions)</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="text-lg font-semibold text-white mb-2">Planet (Venus, Jupiter, Mars)</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Doesn&apos;t move relative to stars (over minutes)</li>
                    <li>• Very bright and steady</li>
                    <li>• Doesn&apos;t twinkle as much as stars</li>
                    <li>• Venus appears near sunrise/sunset only</li>
                    <li>• Jupiter/Mars can be visible all night</li>
                    <li>• Position changes slowly over weeks</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-lg font-semibold text-white mb-2">Star</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Stationary (doesn&apos;t move across sky)</li>
                    <li>• Twinkles noticeably</li>
                    <li>• Maintains same position relative to other stars</li>
                    <li>• Rises in east, sets in west over hours (due to Earth rotation)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Quick Test</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    If it blinks, it&apos;s an airplane. If it streaks across in seconds, it&apos;s a meteor. If it glides smoothly for minutes without blinking, it&apos;s a satellite. If it doesn&apos;t move, it&apos;s a star or planet.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Recording Your Observations</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Many satellite watchers enjoy keeping logs of their observations. It&apos;s not required, but it adds educational value and helps you track which satellites you&apos;ve seen.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">What to Record</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">Date and Time:</strong> When did you see it?</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">Satellite Name:</strong> ISS, Starlink train, Hubble, etc.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">Location:</strong> Where were you watching from?</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">Brightness:</strong> Estimate magnitude or describe (bright as Polaris, dimmer than Big Dipper, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">Path:</strong> Which direction it traveled (SW to NE, W to E, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">Notes:</strong> Any interesting observations (flares, fading, color changes)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Simple Observation Log Template</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4 font-mono text-sm">
              <div className="text-gray-300">
                <p className="mb-1">Date: April 13, 2026</p>
                <p className="mb-1">Time: 8:42 PM local</p>
                <p className="mb-1">Satellite: ISS</p>
                <p className="mb-1">Location: Austin, TX</p>
                <p className="mb-1">Brightness: Very bright, brighter than any star</p>
                <p className="mb-1">Path: Appeared WSW, crossed overhead, disappeared ENE</p>
                <p className="mb-1">Duration: About 5 minutes visible</p>
                <p className="mb-4">Notes: Clear night, saw it with naked eye. Pointed it out to neighbors!</p>

                <p className="mb-1">Date: April 15, 2026</p>
                <p className="mb-1">Time: 9:15 PM local</p>
                <p className="mb-1">Satellite: Starlink train (Group 9-3)</p>
                <p className="mb-1">Location: Austin, TX</p>
                <p className="mb-1">Brightness: Moderately bright, like Polaris</p>
                <p className="mb-1">Path: SW to NE, altitude about 50 degrees</p>
                <p className="mb-1">Duration: Watched for 10 minutes</p>
                <p>Notes: Counted 23 satellites in the train! Amazing sight.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Photography</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              Satellite trails are beautiful and relatively easy to photograph. See our <Link href="/guides/photograph-iss" className="text-blue-400 hover:text-blue-300">ISS Photography Guide</Link> for detailed instructions. Basic approach:
            </p>

            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span>Tripod-mounted camera or smartphone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span>15-30 second exposure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span>ISO 1600-3200</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span>Wide aperture (f/2.8-4.0)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span>Manual focus set to infinity</span>
              </li>
            </ul>
          </section>

          {/* Quick Reference */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Start Guide</h2>

            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Your First Satellite Spotting Session:</h3>
              <ol className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">1.</span>
                  <span>Download Heavens-Above or ISS Detector app</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">2.</span>
                  <span>Set your location in the app</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">3.</span>
                  <span>Find the next bright ISS pass (magnitude -2.0 or brighter)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">4.</span>
                  <span>Go outside 5-10 minutes before predicted time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">5.</span>
                  <span>Look in the direction where satellite will appear (app shows you)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">6.</span>
                  <span>Watch for a bright &quot;star&quot; moving smoothly across the sky</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">7.</span>
                  <span>Track it across the sky until it fades or disappears</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">8.</span>
                  <span>Congratulations - you just spotted a satellite! 🛰️</span>
                </li>
              </ol>
            </div>
          </section>

        </article>

        {/* Related Guides */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/guides/photograph-iss" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-camera text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Photograph the ISS</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Take your satellite watching to the next level with photography
              </p>
            </Link>

            <Link href="/guides/astronomy-apps" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-mobile-screen text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Astronomy Apps</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Comprehensive guide to apps for tracking satellites and more
              </p>
            </Link>

            <Link href="/guides/watch-launches" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-rocket text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Watch Launches</h3>
              </div>
              <p className="text-gray-400 text-sm">
                See how satellites get to orbit by watching launches
              </p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Track the ISS Right Now</h3>
          <p className="text-gray-300 mb-6">See the current position of the International Space Station in real-time</p>
          <Link href="/iss">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-colors">
              View ISS Tracker
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
