import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Photograph the ISS - International Space Station Photography Guide | Spaceflight Tracker',
  description: 'Step-by-step guide to photographing the ISS. Learn camera settings, tracking techniques, equipment recommendations, and post-processing tips for stunning ISS photos.',
  keywords: ['photograph ISS', 'ISS photography', 'space station photos', 'ISS camera settings', 'track ISS', 'ISS flyover photography'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/guides/photograph-iss',
  },
};

export default function PhotographISSGuide() {
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
          <span className="text-gray-300">Photograph the ISS</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-camera text-purple-400"></i>
            <span className="text-purple-400 text-sm font-medium">Intermediate Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How to Photograph the International Space Station</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Capture stunning images of the ISS as it streaks across the night sky. This complete guide covers everything from finding flyover times to camera settings and post-processing techniques.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 p-6 bg-gray-800 border border-gray-700 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">15 min</div>
            <div className="text-sm text-gray-400">Read Time</div>
          </div>
          <div className="text-center border-l border-r border-gray-700">
            <div className="text-2xl font-bold text-purple-400 mb-1">Intermediate</div>
            <div className="text-sm text-gray-400">Difficulty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">$0-500</div>
            <div className="text-sm text-gray-400">Equipment Cost</div>
          </div>
        </div>

        {/* Main Content */}
        <article className="prose prose-invert prose-lg max-w-none">

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Finding ISS Flyover Times for Your Location</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              The ISS orbits Earth every 90 minutes at 17,500 mph, but it&apos;s only visible when the station is illuminated by the sun while you&apos;re in darkness. This happens during morning twilight (before sunrise) and evening twilight (after sunset). Your first step is finding when visible passes occur over your location.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Best Tracking Tools</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Top Resources for ISS Predictions:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Heavens-Above (heavens-above.com)</strong> — The gold standard. Shows precise path across the sky, exact times, brightness (magnitude), and duration. Free account lets you save your location. Shows ISS path overlaid on star chart.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">2.</span>
                  <div>
                    <strong className="text-white">NASA Spot The Station (spotthestation.nasa.gov)</strong> — Official NASA site. Email or text alerts for visible passes. Simple interface great for beginners. Provides viewing direction and max altitude.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">3.</span>
                  <div>
                    <strong className="text-white">ISS Detector App (iOS/Android)</strong> — $1.99, best mobile option. Push notifications, augmented reality view showing ISS position, built-in compass. Shows Starlink and other satellites too.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Spaceflight Tracker ISS Live</strong> — Track the ISS in real-time on our <Link href="/iss" className="text-blue-400 hover:text-blue-300">ISS tracker page</Link>, though this doesn&apos;t show local visibility predictions.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Understanding Pass Quality</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              Not all ISS passes are equal for photography. Here&apos;s what to look for:
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-star text-yellow-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Magnitude:</strong> Brightness measured in negative numbers (lower = brighter). Look for passes of -2.0 or brighter (more negative). The brightest passes reach -3.9, rivaling Venus. Anything dimmer than -1.0 is harder to photograph.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-arrow-up text-blue-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Maximum Altitude:</strong> How high above the horizon the ISS gets, in degrees. 0° = horizon, 90° = directly overhead. Best passes reach 40-90°. Below 20° means more atmospheric haze and harder photography.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-clock text-green-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Duration:</strong> Most visible passes last 2-6 minutes. Longer passes give more opportunities for different compositions. Very short passes (under 2 minutes) are challenging for beginners.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-compass text-orange-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Direction:</strong> ISS can appear from any direction. West-to-east passes are most common. Note where it appears (e.g., WSW) and disappears (e.g., ENE).
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Perfect Pass Criteria</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Ideal ISS photography conditions: Magnitude -3.0 or brighter, maximum altitude above 45°, duration 4+ minutes, clear skies, and low light pollution. These bright, high passes happen a few times per month at any given location.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Timing Is Everything</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              ISS predictions are accurate to within seconds, but orbital adjustments happen occasionally. Check predictions the day of your shoot. The ISS regularly boosts its orbit to compensate for atmospheric drag, which changes flyover times slightly.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Be in position and ready to shoot 5-10 minutes before the predicted appearance time. The ISS appears suddenly and moves fast - there&apos;s no time to fumble with equipment once it&apos;s visible.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Equipment Needed</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              The good news: you don&apos;t need expensive equipment to photograph the ISS. Here&apos;s what works at different budget levels.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Budget Option: Smartphone ($0)</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <p className="text-gray-300 mb-3">
                Modern smartphones can capture the ISS as a bright streak across the sky during long exposures.
              </p>
              <h4 className="text-lg font-semibold text-white mb-2">What You Need:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">Smartphone with manual mode</strong> — iPhone 11 or newer (Pro models better), Android phones with Pro/Manual camera mode</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">Tripod or stable surface</strong> — Small phone tripod ($10-25) or prop against stable object</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">Camera app with manual controls</strong> — ProCam, Halide, or built-in Pro mode</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-gray-900/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Smartphone Settings:</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Exposure: 10-30 seconds</li>
                  <li>• ISO: 800-1600</li>
                  <li>• Focus: Manual, set to infinity (∞)</li>
                  <li>• Use self-timer or remote to avoid shake</li>
                  <li>• Shoot in RAW if available</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Enthusiast Option: DSLR or Mirrorless ($300-1500)</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <p className="text-gray-300 mb-3">
                A dedicated camera gives you much more control and better image quality.
              </p>
              <h4 className="text-lg font-semibold text-white mb-2">Recommended Equipment:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-camera text-purple-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Camera Body:</strong> Any DSLR or mirrorless with manual mode. Entry-level options: Canon EOS Rebel T7 ($400), Nikon D3500 ($450), Sony A6000 ($500). Used cameras work great.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-film text-purple-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Lens:</strong> Wide-angle to standard zoom. 18-55mm kit lens is perfect. For more dramatic shots, try 10-24mm ultra-wide ($200-500). Fast aperture (f/2.8 or wider) helps but isn&apos;t required.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-grip-vertical text-purple-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Sturdy Tripod:</strong> Essential. Get one rated for your camera weight plus 50%. Manfrotto Compact ($40-70) or Vanguard Alta Pro ($120-180) are solid choices.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-plug text-purple-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Cable Release or Remote:</strong> Prevents camera shake. Wired cable release ($10-25) or wireless remote ($15-40). Can use camera&apos;s self-timer as free alternative.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Advanced Option: Telescope + Camera ($500-3000+)</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              For detailed shots showing the ISS structure (solar panels, modules), you need a telescope. This is advanced astrophotography requiring precise tracking.
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">What You Need:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                  <span>Telescope: 6-8 inch Schmidt-Cassegrain or Newtonian reflector ($600-2000)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                  <span>Tracking mount: Motorized equatorial mount or computerized alt-az mount ($500-3000)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                  <span>High-speed camera: Planetary camera or DSLR capable of video mode</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle text-blue-400 text-xs mt-2"></i>
                  <span>Skill level: Advanced - requires practice tracking fast-moving objects</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-triangle-exclamation text-orange-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Start Simple</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Most beginners should start with the smartphone or DSLR approach. Wide-field ISS trail photos are beautiful and much easier than trying to resolve details with a telescope. Master basic ISS photography before investing in telescope equipment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Camera Settings and Techniques</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              ISS photography comes in two main styles: trail photos (long exposure showing the ISS as a streak) and close-up detail shots (telescope required). This section covers trail photography, which is accessible to everyone.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">DSLR/Mirrorless Settings for ISS Trails</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-4">Step-by-Step Camera Configuration:</h4>

              <div className="space-y-4 text-gray-300">
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">1. Shooting Mode: Manual (M)</h5>
                  <p className="text-sm">You need complete control over exposure, aperture, and ISO. Switch your mode dial to M.</p>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">2. Aperture: f/2.8 to f/5.6</h5>
                  <p className="text-sm mb-2">Wider aperture (lower f-number) captures more light. Sweet spot is f/2.8-4.0 for most lenses.</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• f/1.4-2.8: Maximum light, but stars may show aberrations at corners</li>
                    <li>• f/4.0: Good balance of light and sharpness</li>
                    <li>• f/5.6-8.0: Sharper stars, but need higher ISO or longer exposure</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">3. Shutter Speed: 10-30 seconds</h5>
                  <p className="text-sm mb-2">Longer exposure = longer ISS trail. The ISS crosses about 1° of sky per second.</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 10 seconds: Short trail, good for dense star backgrounds</li>
                    <li>• 15-20 seconds: Medium trail, most versatile</li>
                    <li>• 25-30 seconds: Long trail, dramatic effect</li>
                    <li>• Over 30 seconds: Stars start to trail due to Earth&apos;s rotation</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">4. ISO: 800-3200</h5>
                  <p className="text-sm mb-2">Higher ISO = brighter image but more noise. Modern cameras handle high ISO well.</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• ISO 800-1600: Best quality, use if aperture is f/2.8 or wider</li>
                    <li>• ISO 2000-3200: More noise but acceptable, needed with smaller apertures</li>
                    <li>• Test your camera - some handle ISO 6400 cleanly, others get noisy at 1600</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">5. Focus: Manual, Set to Infinity</h5>
                  <p className="text-sm mb-2">Autofocus won&apos;t work in the dark. Switch to manual focus.</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Switch lens to MF (manual focus)</li>
                    <li>• Turn focus ring all the way to infinity (∞) mark</li>
                    <li>• Back off slightly - many lenses focus past infinity</li>
                    <li>• Use Live View at 10x zoom on a bright star to fine-tune focus</li>
                    <li>• Mark the focus position with tape for future shoots</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">6. White Balance: Daylight (5500K) or Auto</h5>
                  <p className="text-sm">Daylight WB gives natural star colors. Shoot RAW so you can adjust later.</p>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">7. Image Format: RAW</h5>
                  <p className="text-sm">RAW files preserve maximum data for post-processing. JPEGs discard information you might need later.</p>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">8. Image Stabilization: OFF</h5>
                  <p className="text-sm">Turn off in-body or lens IS when using a tripod. It can introduce blur during long exposures.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Recommended Starting Settings</h3>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Try These Settings First:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <h5 className="text-white font-semibold mb-2">Wide Angle (18-35mm)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Aperture: f/2.8-4.0</li>
                    <li>• Shutter: 20 seconds</li>
                    <li>• ISO: 1600</li>
                    <li>• Shows ISS trail plus landscape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-2">Standard (40-60mm)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Aperture: f/4.0-5.6</li>
                    <li>• Shutter: 15 seconds</li>
                    <li>• ISO: 2000</li>
                    <li>• Tighter composition on sky</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Test Before the ISS Arrives</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Take test shots 10-15 minutes before the predicted ISS pass. Check exposure, focus, and composition. Adjust settings based on test results. You won&apos;t have time to troubleshoot once the ISS appears.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Tracking and Framing the ISS</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              The ISS moves across the sky at about 1 degree per second - that&apos;s roughly two Moon-widths per second. Proper framing is critical since you can&apos;t recompose during the pass.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Composition Strategies</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-4">Three Approaches:</h4>

              <div className="space-y-4 text-gray-300">
                <div>
                  <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-mountain text-green-400"></i>
                    1. Landscape + ISS Trail
                  </h5>
                  <p className="text-sm mb-2">
                    Frame interesting foreground (trees, buildings, mountains) with sky above. ISS trail becomes element in composed scene.
                  </p>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• Use wide angle lens (18-35mm)</li>
                    <li>• Position foreground in bottom third</li>
                    <li>• ISS trail crosses upper two-thirds of frame</li>
                    <li>• Best during twilight when foreground is still visible</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-stars text-blue-400"></i>
                    2. Star Field + ISS Trail
                  </h5>
                  <p className="text-sm mb-2">
                    Pure sky shot showing ISS trail against stars and maybe the Milky Way.
                  </p>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• Wide to standard focal length (24-50mm)</li>
                    <li>• Frame area of sky where ISS will pass</li>
                    <li>• Include bright stars or constellations for context</li>
                    <li>• Wait for darker skies after twilight ends</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-moon text-yellow-400"></i>
                    3. ISS Crossing Moon or Planet
                  </h5>
                  <p className="text-sm mb-2">
                    Advanced technique: capture ISS transiting across the Moon or a bright planet.
                  </p>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• Requires specialized prediction tools (CalSky.com)</li>
                    <li>• Need telephoto lens (200-400mm+)</li>
                    <li>• Very narrow time window (under 1 second for Moon transits)</li>
                    <li>• Spectacular results but challenging to execute</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Shooting the Pass</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Step-by-Step Process:</h4>

              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold mt-1">1.</span>
                  <div>
                    <strong className="text-white">Arrive Early:</strong> Set up 15-20 minutes before the predicted time. Find your location, set up tripod, compose shot, dial in settings.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold mt-1">2.</span>
                  <div>
                    <strong className="text-white">Pre-visualize the Path:</strong> Use your tracking app to understand where the ISS will appear and disappear. Hold your phone up to the sky to see the predicted path.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold mt-1">3.</span>
                  <div>
                    <strong className="text-white">Frame Your Shot:</strong> Position camera so ISS path crosses through your desired composition. Leave extra space - predictions can be off by a few degrees.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold mt-1">4.</span>
                  <div>
                    <strong className="text-white">Watch for Appearance:</strong> Keep eyes on the predicted appearance point. ISS will suddenly become visible, looking like a steady white/yellowish star moving smoothly.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold mt-1">5.</span>
                  <div>
                    <strong className="text-white">Start Shooting:</strong> As soon as you see the ISS enter your frame, trigger the shutter with remote or self-timer. Take multiple exposures as it crosses.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold mt-1">6.</span>
                  <div>
                    <strong className="text-white">Multiple Frames:</strong> Take 3-5 exposures during the pass. At 20 seconds per exposure, you&apos;ll get multiple trail segments you can composite later.
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Binocular Trick</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Bring binoculars. After you&apos;ve taken your photos, watch the ISS through binoculars. You can actually see the shape - a bright cross-shaped object with solar panels. It&apos;s a thrilling view that makes the achievement real.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Processing ISS Photos</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Raw ISS photos often look dark and unimpressive. Post-processing brings out the details and creates compelling images.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Basic Editing in Free Software</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Recommended Free Tools:</h4>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">RawTherapee</strong> (Windows/Mac/Linux) — Powerful RAW editor, completely free</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">darktable</strong> (Windows/Mac/Linux) — Professional-grade RAW processor</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">GIMP</strong> — Free alternative to Photoshop for compositing</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span><strong className="text-white">Adobe Lightroom</strong> (Paid, $10/mo) — Industry standard, worth it if you&apos;re serious</span>
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-white mb-3 mt-4">Basic Workflow:</h4>
              <ol className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">1.</span>
                  <span><strong className="text-white">Increase Exposure:</strong> +0.5 to +1.5 stops to brighten the overall image</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">2.</span>
                  <span><strong className="text-white">Boost Contrast:</strong> +10 to +30 to make ISS trail pop against sky</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">3.</span>
                  <span><strong className="text-white">Adjust Highlights:</strong> -10 to -30 to recover bright star details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">4.</span>
                  <span><strong className="text-white">Lift Shadows:</strong> +10 to +40 to reveal foreground details without brightening sky too much</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">5.</span>
                  <span><strong className="text-white">Increase Clarity/Sharpening:</strong> +10 to +25 to sharpen stars (don&apos;t overdo it)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">6.</span>
                  <span><strong className="text-white">Reduce Noise:</strong> Apply luminance noise reduction if using high ISO (50-75% strength)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">7.</span>
                  <span><strong className="text-white">Adjust White Balance:</strong> Cool it down (4500-5000K) for blue night sky or warm it up (6000-7000K) for golden twilight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">8.</span>
                  <span><strong className="text-white">Increase Vibrance:</strong> +10 to +30 to make star colors pop subtly</span>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Advanced: Compositing Multiple Passes</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              If you photographed multiple frames during the ISS pass, you can stack them in Photoshop or GIMP to create a single image showing the complete trail.
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Stacking Process:</h4>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li>1. Open all frames as layers in Photoshop/GIMP</li>
                <li>2. Auto-align layers (Edit → Auto-Align Layers)</li>
                <li>3. Change blend mode of upper layers to &quot;Lighten&quot; or &quot;Screen&quot;</li>
                <li>4. The ISS trails from each frame combine into one continuous trail</li>
                <li>5. Flatten and export final image</li>
              </ol>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Common Mistakes and How to Avoid Them</h2>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <div className="space-y-4 text-gray-300">
                <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-xmark text-red-400"></i>
                    Mistake: Out of Focus Stars
                  </h4>
                  <p className="text-sm"><strong className="text-white">Solution:</strong> Use Live View to zoom 10x on a bright star. Manually focus until star is smallest possible point. Mark focus position with tape.</p>
                </div>

                <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-xmark text-red-400"></i>
                    Mistake: Camera Shake/Blurry Trail
                  </h4>
                  <p className="text-sm"><strong className="text-white">Solution:</strong> Use cable release or 2-second self-timer. Never touch camera during exposure. Ensure tripod is on solid ground, not wobbling.</p>
                </div>

                <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-xmark text-red-400"></i>
                    Mistake: ISS Not in Frame
                  </h4>
                  <p className="text-sm"><strong className="text-white">Solution:</strong> Use ISS Detector app with AR view to visualize path before shooting. Frame wider than you think necessary. Predictions can be off by a few degrees.</p>
                </div>

                <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-xmark text-red-400"></i>
                    Mistake: Overexposed Sky
                  </h4>
                  <p className="text-sm"><strong className="text-white">Solution:</strong> Shoot during darker twilight, not right after sunset. Reduce exposure time or ISO. Light pollution requires shorter exposures.</p>
                </div>

                <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-xmark text-red-400"></i>
                    Mistake: ISS Trail Too Faint
                  </h4>
                  <p className="text-sm"><strong className="text-white">Solution:</strong> Only shoot bright passes (magnitude -2.0 or better). Increase ISO or exposure time. Open aperture wider. Boost contrast in post-processing.</p>
                </div>

                <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-xmark text-red-400"></i>
                    Mistake: Excessive Noise
                  </h4>
                  <p className="text-sm"><strong className="text-white">Solution:</strong> Lower ISO if possible. Use wider aperture instead. Apply noise reduction in post-processing (but not too much or stars lose definition).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Reference Checklist</h2>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Before the Shoot:</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Find bright ISS pass (magnitude -2.0 or brighter, altitude 40°+)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Check weather - need clear skies in predicted path direction</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Charge all camera batteries</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Clear memory card or ensure plenty of space</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Scout location in daylight if possible</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Camera Setup:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Mode: Manual (M)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Aperture: f/2.8-5.6 (wider is better)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Shutter: 15-25 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>ISO: 1600-3200</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Focus: Manual, infinity</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Format: RAW</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Image stabilization: OFF</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-square-check text-purple-400 mt-1"></i>
                  <span>Self-timer: 2-second delay</span>
                </li>
              </ul>
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
                Learn to identify and track satellites in the night sky
              </p>
            </Link>

            <Link href="/guides/astrophotography-basics" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-star text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Astrophotography Basics</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Master the fundamentals of night sky photography
              </p>
            </Link>

            <Link href="/guides/astronomy-apps" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-mobile-screen text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Astronomy Apps</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Best apps for tracking the ISS and planning observations
              </p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Track the ISS in Real-Time</h3>
          <p className="text-gray-300 mb-6">See where the International Space Station is right now</p>
          <Link href="/iss">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition-colors">
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
