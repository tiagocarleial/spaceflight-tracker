import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Watch Rocket Launches Live - Complete Guide | Spaceflight Tracker',
  description: 'Learn how to watch rocket launches in person or online. Find viewing locations, schedules, what to bring, how to handle delays, and safety tips for watching SpaceX, NASA, and other launches.',
  keywords: ['watch rocket launch', 'Kennedy Space Center viewing', 'rocket launch locations', 'SpaceX launch viewing', 'NASA launch schedule', 'rocket launch tips'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/guides/watch-launches',
  },
};

export default function WatchLaunchesGuide() {
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
          <span className="text-gray-300">Watch Rocket Launches</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-rocket text-green-400"></i>
            <span className="text-green-400 text-sm font-medium">Beginner Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How to Watch Rocket Launches Live</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Everything you need to know about watching rocket launches in person or online, from finding schedules to choosing viewing locations and handling inevitable delays.
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
            <h2 className="text-3xl font-bold text-white mb-4">Finding Launch Schedules and Times</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              The first step to watching any rocket launch is knowing when and where it will happen. Launch schedules change frequently due to weather, technical issues, and range conflicts, so you need reliable, up-to-date sources.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Best Launch Tracking Websites</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Top Resources:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Spaceflight Tracker</strong> (this site!) — Real-time countdowns with filters by agency and mission type. Check our <Link href="/launches" className="text-blue-400 hover:text-blue-300">launches page</Link> for the latest schedule.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <div>
                    <strong className="text-white">SpaceflightNow.com</strong> — Comprehensive launch schedule with detailed mission information and countdown clocks.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <div>
                    <strong className="text-white">NextSpaceflight.com</strong> — Community-driven with excellent filtering options and launch history.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Official agency websites</strong> — SpaceX.com, NASA.gov, BlueOrigin.com for authoritative updates directly from the source.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Understanding Launch Windows</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              Most launches have a launch window rather than an exact time. This is a period (anywhere from instantaneous to several hours) during which the rocket can lift off. For example, a typical SpaceX Starlink mission might have a 4-hour window opening at 3:47 PM EST.
            </p>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Pro Tip: T-Minus Time</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Launch times are often listed as T-0, meaning the target launch time. T-30 minutes means 30 minutes before launch. T+10 seconds means 10 seconds after liftoff. This countdown clock continues throughout the mission.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Setting Up Launch Alerts</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              To never miss a launch, set up notifications through these methods:
            </p>

            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span><strong className="text-white">Twitter/X:</strong> Follow @SpaceX, @NASA, @SpaceflightNow, and turn on notifications for launch updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span><strong className="text-white">Apps:</strong> Download Next Spaceflight or Space Launch Now for mobile push notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span><strong className="text-white">Email:</strong> Subscribe to NASA Launch Services Program updates at NASA.gov</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span><strong className="text-white">Discord/Reddit:</strong> Join r/SpaceX or space-focused Discord servers for real-time community updates</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Best In-Person Viewing Locations</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Watching a rocket launch in person is an unforgettable experience. The ground shakes, the sky lights up, and you feel the raw power of humanity reaching for the stars. Here are the best public viewing spots for launches in the United States.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Kennedy Space Center, Florida (Cape Canaveral)</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <p className="text-gray-300 mb-4">
                The most active launch site in the US, home to SpaceX, NASA, and United Launch Alliance missions.
              </p>

              <h4 className="text-lg font-semibold text-white mb-3">Viewing Locations:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">1.</span>
                  <div>
                    <strong className="text-white">KSC Visitor Complex</strong> — Official viewing with expert commentary. Tickets $30-80, closest public access (6-10 miles from pads). Book early for popular launches.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Jetty Park</strong> — Free public beach in Cape Canaveral, 7-10 miles from pads. Great for SpaceX launches from LC-39A and SLC-40. Arrive 2-3 hours early for parking.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Playalinda Beach</strong> — Part of Canaveral National Seashore, closest public beach to LC-39A (about 3 miles). Often closed for launches, check ahead. $20 vehicle fee.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Space View Park, Titusville</strong> — Free park across the Indian River, 12 miles from pads. Less crowded, good viewing with binoculars.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">5.</span>
                  <div>
                    <strong className="text-white">Cocoa Beach</strong> — Hotels and restaurants along A1A offer distant views (15+ miles). Good for nighttime launches.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Vandenberg Space Force Base, California</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              West Coast launch site for polar orbit missions. SpaceX and ULA launch from here regularly.
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Viewing Locations:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Ocean Avenue, Lompoc</strong> — West Ocean Avenue offers direct views of the launch pads about 10 miles away.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Surf Beach</strong> — Public beach access southwest of the base. Check if open before launch day.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Harris Grade Road</strong> — Elevated viewpoint popular with photographers, about 7 miles from SLC-4E.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Blue Origin West Texas Launch Site</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              Blue Origin&apos;s suborbital launch facility near Van Horn, Texas. Public access is extremely limited. Blue Origin sells tickets to launches for invited guests only. Most people watch the live stream instead.
            </p>

            <div className="bg-orange-900/20 border border-orange-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-triangle-exclamation text-orange-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Important: Check Access Before You Go</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Many viewing locations close or have restricted access on launch day. Always check official sources 24 hours before launch. Beaches near Kennedy can close 1-2 hours before T-0. Roads may be blocked. Have a backup location ready.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What to Bring to a Launch</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Watching a launch often involves hours of waiting in unpredictable conditions. Being prepared makes the experience much more enjoyable.
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h3 className="text-xl font-semibold text-white mb-4">Essential Checklist:</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Must Have:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span><strong className="text-white">Smartphone with full battery</strong> — For updates, photos, and livestreams</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span><strong className="text-white">Portable charger/power bank</strong> — Essential for long delays</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span><strong className="text-white">Water and snacks</strong> — Food vendors may be limited or closed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span><strong className="text-white">Sunscreen and hat</strong> — Florida sun is intense, even in winter</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check text-green-400 mt-1"></i>
                      <span><strong className="text-white">Folding chair or blanket</strong> — You will be standing/sitting for hours</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Recommended:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Binoculars</strong> — 7x35 or 10x50 binoculars let you see the rocket on the pad and track it after liftoff ($50-150)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Camera with telephoto lens</strong> — 200-400mm lens ideal for launch photography</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Tripod</strong> — For steady photos and video</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Headphones</strong> — To listen to SpaceX webcasts or NASA commentary</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Jacket/layers</strong> — Coastal weather changes quickly, especially for early morning launches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Bug spray</strong> — Florida mosquitoes are relentless near water</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                      <span><strong className="text-white">Portable radio</strong> — Some viewing areas broadcast launch commentary on FM radio</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Timing Tip</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Arrive at least 2-3 hours before T-0 for popular launches. Traffic to Kennedy Space Center can back up for miles. For Falcon Heavy or crewed missions, arrive 4-5 hours early. Some people camp overnight at Jetty Park.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How to Watch Launches Online</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Can&apos;t make it to the launch site? Online streams offer excellent coverage with expert commentary, multiple camera angles, and technical telemetry. Often, watching online gives you a better view than being there in person.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Best Live Streams</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">1.</span>
                  <div>
                    <strong className="text-white">SpaceX YouTube Channel</strong> — The gold standard for launch webcasts. Multiple camera views, telemetry data, typically starts 15-20 minutes before T-0. Live commentary from SpaceX hosts. Always shows booster landings.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">2.</span>
                  <div>
                    <strong className="text-white">NASA TV</strong> — Available on YouTube, NASA.gov, and NASA app. Professional production, starts 1-2 hours before major launches with extensive pre-launch coverage.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Everyday Astronaut (YouTube)</strong> — Independent stream with technical deep-dives. Tim Dodd provides excellent explanations of what&apos;s happening and why. Great for learning.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">4.</span>
                  <div>
                    <strong className="text-white">NASASpaceflight.com (YouTube)</strong> — Multiple dedicated cameras at launch sites. Often streams 24/7 showing rocket on pad. Great for watching rollout and pre-launch activities.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">5.</span>
                  <div>
                    <strong className="text-white">ULA WebCast</strong> — United Launch Alliance streams on their YouTube channel for Atlas V and Vulcan launches. Professional production similar to NASA.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">What to Watch For During a Launch</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              Launch webcasts pack in a lot of information. Here&apos;s what to pay attention to:
            </p>

            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">T-0 countdown clock</strong> — Shows time until launch. Can hold at T-10 minutes or other points</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Go/No-Go poll</strong> — Flight director polls all stations for launch readiness</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Propellant loading</strong> — Rocket fueling typically starts 35-60 minutes before launch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Engine ignition</strong> — Happens at T-0 or just before (T-3 seconds for SpaceX)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Max-Q</strong> — Point of maximum aerodynamic stress, around 60-90 seconds after liftoff</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">MECO</strong> — Main Engine Cut-Off, when first stage engines shut down</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Stage separation</strong> — First and second stages separate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Booster landing</strong> — For reusable rockets like Falcon 9, about 8-10 minutes after launch</span>
              </li>
            </ul>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Pro Viewing Tip</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Open multiple streams at once. Watch SpaceX&apos;s official stream on your TV, and Everyday Astronaut or NASASpaceflight on your phone/laptop for different perspectives and commentary. Mute one to avoid echo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Understanding Delays and Scrubs</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Here&apos;s the reality of launch watching: most launches are delayed or scrubbed. It&apos;s frustrating but necessary for safety. Understanding why launches get delayed helps manage expectations.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Common Reasons for Delays</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-cloud text-blue-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Weather (50% of scrubs)</strong> — Lightning within 10 nautical miles, high winds, thick clouds, upper-level winds. NASA has strict weather rules. SpaceX is more willing to push limits but still scrubs for safety.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-wrench text-orange-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Technical Issues (30% of scrubs)</strong> — Sensor readings, propellant loading problems, ground system issues, boat in keep-out zone. Better to scrub than rush.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-plane text-gray-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Range Conflicts (10% of scrubs)</strong> — Other launches scheduled, airspace not clear, tracking ships not in position.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-stopwatch text-purple-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Instantaneous Windows (10% of scrubs)</strong> — Some missions (like ISS resupply) have instantaneous windows. If anything delays the countdown by even one second, scrub to next day.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">How Delays Work</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              There are different types of delays you&apos;ll encounter:
            </p>

            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Hold:</strong> Countdown clock stops but launch still possible today. Common at T-10 minutes. Can last minutes or hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Scrub:</strong> Launch canceled for the day. Usually rescheduled within 24-72 hours depending on issue.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Abort:</strong> Automatic safety system stops launch at last second (engines may ignite but rocket doesn&apos;t leave pad). Requires investigation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">•</span>
                <span><strong className="text-white">Postponement:</strong> Launch delayed days or weeks in advance, usually for technical work or payload readiness.</span>
              </li>
            </ul>

            <div className="bg-orange-900/20 border border-orange-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-triangle-exclamation text-orange-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Managing Scrub Frustration</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    If you traveled to Florida for a launch, have backup plans. Many visitors plan 3-4 day trips to catch a launch, with other activities (Kennedy Space Center tour, beaches, theme parks) as backups. The experienced launch watchers say: &quot;Come for the launch, stay for the scrub.&quot;
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Check weather forecasts 48 hours before launch. If weather probability is below 40%, seriously consider postponing your trip. SpaceX usually posts weather updates 1 day before launch.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Safety and Etiquette Tips</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Launch watching is safe when you follow basic precautions and respect other viewers and the environment.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Safety Guidelines</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-shield-halved text-green-400 mt-1"></i>
                  <span><strong className="text-white">Respect closure zones:</strong> Never enter restricted areas or closed beaches. Penalties are severe and you could disrupt the launch.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-shield-halved text-green-400 mt-1"></i>
                  <span><strong className="text-white">Park legally:</strong> Don&apos;t block roads or driveways. Police actively ticket and tow on launch days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-shield-halved text-green-400 mt-1"></i>
                  <span><strong className="text-white">Stay hydrated:</strong> Florida heat and sun can be dangerous. Drink water even if you don&apos;t feel thirsty.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-shield-halved text-green-400 mt-1"></i>
                  <span><strong className="text-white">Watch from safe distance:</strong> All public viewing areas are safely outside blast zones, but don&apos;t try to get closer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-shield-halved text-green-400 mt-1"></i>
                  <span><strong className="text-white">Protect hearing:</strong> Sonic booms from landing boosters can be startling. Not dangerous at public viewing distances but unexpected.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Launch Viewing Etiquette</h3>

            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                <span><strong className="text-white">Be quiet during countdown:</strong> Especially final 10 seconds. People want to hear the official audio.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                <span><strong className="text-white">Don&apos;t block views:</strong> Keep your head and camera at seated/crouched level until liftoff if people are behind you.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                <span><strong className="text-white">Share information:</strong> If you hear updates about delays, share with nearby viewers politely.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                <span><strong className="text-white">Leave no trace:</strong> Take all trash with you. Popular viewing spots get overwhelmed with litter.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                <span><strong className="text-white">Help newcomers:</strong> The space community is welcoming. Answer questions from first-time viewers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                <span><strong className="text-white">No drones:</strong> Illegal near launch sites and airspace will be restricted. Don&apos;t even bring one.</span>
              </li>
            </ul>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Sound and Light Delay</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    You&apos;ll see the rocket lift off before you hear it. Sound travels about 1 mile every 5 seconds. From 10 miles away, you&apos;ll hear the roar about 50 seconds after liftoff. Don&apos;t worry - you didn&apos;t miss it! The rumble and ground shaking will arrive. Be patient and wait for it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Reference Checklist</h2>

            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">24 Hours Before Launch:</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Check launch time hasn&apos;t changed</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Review weather forecast (aim for 60%+ probability)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Confirm viewing location is open/accessible</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Charge all devices and power banks</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Launch Day:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Arrive 2-4 hours early (more for popular launches)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Apply sunscreen before leaving</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Fill gas tank - traffic after launch is heavy</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Download offline maps in case cell service is poor</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Follow Twitter/X updates for real-time status</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-green-400 mt-1"></i>
                  <span>Enjoy the experience - you&apos;re watching history!</span>
                </li>
              </ul>
            </div>
          </section>

        </article>

        {/* Related Guides */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/guides/astronomy-apps" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-mobile-screen text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Astronomy Apps</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Best apps for tracking launches and planning observations
              </p>
            </Link>

            <Link href="/guides/photograph-iss" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-camera text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Photograph the ISS</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Capture stunning photos of the International Space Station
              </p>
            </Link>

            <Link href="/guides/astrophotography-basics" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-star text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Astrophotography Basics</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Get started with photographing the night sky
              </p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Watch Your First Launch?</h3>
          <p className="text-gray-300 mb-6">Check out our live launch schedule with real-time countdowns</p>
          <Link href="/launches">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-colors">
              View Upcoming Launches
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
