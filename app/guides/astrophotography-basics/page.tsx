import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astrophotography for Beginners - Complete Guide 2026 | Spaceflight Tracker',
  description: 'Learn astrophotography from scratch. Equipment guide, camera settings, focusing techniques, composition tips, image stacking, and post-processing for stunning night sky photos.',
  keywords: ['astrophotography', 'night sky photography', 'photograph stars', 'Milky Way photography', 'star photography', 'astrophotography for beginners'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/guides/astrophotography-basics',
  },
};

export default function AstrophotoBasicsGuide() {
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
          <span className="text-gray-300">Astrophotography Basics</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-star text-purple-400"></i>
            <span className="text-purple-400 text-sm font-medium">Intermediate Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Astrophotography for Beginners</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Your complete introduction to photographing the night sky. Learn equipment recommendations, camera settings, focusing techniques, composition strategies, and post-processing basics to capture stunning space photos.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 p-6 bg-gray-800 border border-gray-700 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">20 min</div>
            <div className="text-sm text-gray-400">Read Time</div>
          </div>
          <div className="text-center border-l border-r border-gray-700">
            <div className="text-2xl font-bold text-purple-400 mb-1">Intermediate</div>
            <div className="text-sm text-gray-400">Difficulty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">$300+</div>
            <div className="text-sm text-gray-400">Equipment Cost</div>
          </div>
        </div>

        {/* Main Content */}
        <article className="prose prose-invert prose-lg max-w-none">

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Equipment Guide</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              You don&apos;t need thousands of dollars of gear to start astrophotography, but you do need the right basic equipment. Here&apos;s what you need at different investment levels.
            </p>

            {/* Budget Tier */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Budget Tier ($300-800)</h3>

              <p className="text-gray-300 mb-4 text-sm">Good for: Learning basics, Milky Way landscapes, bright targets (Moon, planets)</p>

              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Camera Options:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Used DSLR:</strong> Canon T3i-T7i ($200-400), Nikon D3300-D5600 ($250-450). Look for low shutter count on used market. Entry-level DSLRs from 2012+ work fine.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Newer smartphone:</strong> iPhone 13 Pro or newer, Samsung S21+ or newer with dedicated night mode can capture Milky Way with apps like NightCap ($3)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Lens:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Kit lens (18-55mm f/3.5-5.6):</strong> Comes with camera. Not ideal but usable at wide end.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Budget fast prime:</strong> Canon 24mm f/2.8 STM ($130), Nikon 35mm f/1.8G ($170), Rokinon 24mm f/1.4 ($400)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Tripod:</h4>
                  <p className="text-gray-300 text-sm mb-2">Essential. Camera must be rock-solid for long exposures.</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Manfrotto Compact Action ($40-60):</strong> Aluminum, supports 3.3 lbs, decent for entry cameras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">AmazonBasics Tripod ($25-35):</strong> Bare minimum, but works for learning</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Accessories:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Cable release or intervalometer:</strong> $10-25, prevents camera shake</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Extra batteries:</strong> $15-40 each, cold drains batteries fast</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Red headlamp:</strong> $10-20, preserves night vision</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-green-900/20 rounded-lg">
                <p className="text-white font-semibold mb-1">Total Budget Investment: $300-800</p>
                <p className="text-gray-300 text-sm">Example: Used Canon T5i ($300) + Rokinon 24mm f/1.4 ($400) + Basic tripod ($30) + Cable release ($15) = $745</p>
              </div>
            </div>

            {/* Enthusiast Tier */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Enthusiast Tier ($1500-3500)</h3>

              <p className="text-gray-300 mb-4 text-sm">Good for: Serious Milky Way work, deep sky objects, planetary imaging, tracked exposures</p>

              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Camera:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-white">Full-frame DSLR:</strong> Canon 6D Mark II ($1000 used), Nikon D750 ($800 used), better low-light performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-white">Mirrorless:</strong> Sony A7III ($1400 used), Canon R6 ($1800 used), lighter, better sensors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-white">Astro-modified camera:</strong> Some photographers have cameras modified to remove IR filter for better H-alpha sensitivity ($300-500 modification)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Lenses:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-white">Wide-angle zoom:</strong> Tamron 17-28mm f/2.8 ($700), Sigma 14-24mm f/2.8 ($900-1200)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-white">Fast prime:</strong> Sigma 14mm f/1.8 Art ($1600), Samyang 135mm f/2 ($500) for deep sky</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-white">Telephoto:</strong> 70-200mm f/2.8 or 200mm prime for Moon/planets</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Tripod & Mount:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-white">Heavy-duty tripod:</strong> Vanguard Alta Pro ($150-200), Manfrotto MT055 ($200-250)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-white">Star tracker:</strong> Sky-Watcher Star Adventurer ($400), iOptron SkyGuider Pro ($450), allows multi-minute exposures</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-900/20 rounded-lg">
                <p className="text-white font-semibold mb-1">Total Enthusiast Investment: $1500-3500</p>
                <p className="text-gray-300 text-sm">Star trackers dramatically improve image quality by allowing longer exposures without star trails</p>
              </div>
            </div>

            {/* Advanced Tier */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Advanced Tier ($3000-10000+)</h3>

              <p className="text-gray-300 mb-4 text-sm">Good for: Deep sky imaging, planetary imaging, professional-quality astrophotos</p>

              <div className="space-y-3 text-gray-300 text-sm">
                <p>This tier includes dedicated astronomy cameras, motorized telescope mounts, guiding systems, filter wheels, and advanced processing software. Beyond the scope of this beginner guide, but the natural progression for serious astrophotographers.</p>
                <p>Equipment includes: ZWO ASI cameras ($500-3000), computerized equatorial mounts ($1500-5000), refractor or reflector telescopes ($800-5000+), filter wheels, off-axis guiders, and more.</p>
              </div>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-triangle-exclamation text-orange-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Start Simple</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Begin with the budget tier and learn fundamental techniques. Upgrading equipment won&apos;t improve your photos until you master camera settings, composition, focusing, and post-processing. A skilled photographer with a used T5i produces better results than a beginner with a $3000 camera.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Camera Settings</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Astrophotography requires full manual control. Automatic modes don&apos;t work in near-total darkness. Here&apos;s how to configure your camera for different types of night sky photography.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Understanding the Exposure Triangle</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <p className="text-gray-300 mb-4 text-sm">
                Three settings control exposure in astrophotography. Each has trade-offs:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">1. Aperture (f-stop)</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    How wide the lens opening is. Lower f-number = wider opening = more light.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm ml-4">
                    <li>• <strong className="text-white">f/1.4-2.0:</strong> Ideal for astrophoto. Maximum light gathering. May have softer corners.</li>
                    <li>• <strong className="text-white">f/2.8:</strong> Sweet spot for most lenses. Sharp across frame. Good light gathering.</li>
                    <li>• <strong className="text-white">f/4.0-5.6:</strong> Sharper stars but less light. Need higher ISO or longer exposure.</li>
                    <li>• <strong className="text-white">f/8 and above:</strong> Too slow for most astrophotography unless using tracker.</li>
                  </ul>
                  <p className="text-gray-300 text-sm mt-2">
                    <strong className="text-white">Recommendation:</strong> Use widest aperture your lens offers (typically f/1.4, f/1.8, or f/2.8). If stars are soft at corners, stop down to f/2.8 or f/4.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">2. Shutter Speed (Exposure Time)</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    How long the shutter stays open. Limited by star trailing from Earth&apos;s rotation.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm ml-4">
                    <li>• <strong className="text-white">Rule of 500:</strong> Maximum exposure = 500 ÷ (focal length × crop factor)</li>
                    <li>• Example 1: 20mm lens on full-frame = 500 ÷ 20 = 25 seconds max</li>
                    <li>• Example 2: 18mm lens on crop sensor (1.6x) = 500 ÷ (18 × 1.6) = 17 seconds max</li>
                    <li>• <strong className="text-white">Modern rule:</strong> Some use Rule of 300 for sharper stars (shorter exposures)</li>
                  </ul>
                  <p className="text-gray-300 text-sm mt-2">
                    <strong className="text-white">Typical settings:</strong> 15-30 seconds for wide-angle, 10-15 seconds for standard focal lengths, under 10 seconds for telephoto
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">3. ISO (Sensor Sensitivity)</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    How sensitive the sensor is to light. Higher ISO = brighter image but more noise.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm ml-4">
                    <li>• <strong className="text-white">ISO 800-1600:</strong> Best quality, less noise. Use if aperture is f/2.8 or wider.</li>
                    <li>• <strong className="text-white">ISO 2000-3200:</strong> Good compromise. Most common for Milky Way work.</li>
                    <li>• <strong className="text-white">ISO 4000-6400:</strong> Very bright but noisy. Use for faint targets or smaller apertures.</li>
                    <li>• <strong className="text-white">ISO 8000+:</strong> Extremely noisy on most cameras. Avoid unless necessary.</li>
                  </ul>
                  <p className="text-gray-300 text-sm mt-2">
                    <strong className="text-white">Note:</strong> Modern cameras (especially full-frame) handle high ISO much better than older models. Test your camera to find acceptable noise level.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Settings by Subject</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <div className="space-y-4">
                <div className="p-4 bg-blue-900/20 border border-blue-500/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Milky Way Landscape</h4>
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-300">
                    <div>
                      <span className="text-white font-semibold">Aperture:</span> f/1.4-2.8
                    </div>
                    <div>
                      <span className="text-white font-semibold">Shutter:</span> 20-25 seconds
                    </div>
                    <div>
                      <span className="text-white font-semibold">ISO:</span> 3200-6400
                    </div>
                    <div>
                      <span className="text-white font-semibold">Lens:</span> 14-24mm
                    </div>
                    <div>
                      <span className="text-white font-semibold">Focus:</span> Infinity
                    </div>
                    <div>
                      <span className="text-white font-semibold">Format:</span> RAW
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Star Trails (Stacked)</h4>
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-300">
                    <div>
                      <span className="text-white font-semibold">Aperture:</span> f/4.0-5.6
                    </div>
                    <div>
                      <span className="text-white font-semibold">Shutter:</span> 30-60 seconds each
                    </div>
                    <div>
                      <span className="text-white font-semibold">ISO:</span> 400-800
                    </div>
                    <div>
                      <span className="text-white font-semibold">Count:</span> 100-300 frames
                    </div>
                    <div>
                      <span className="text-white font-semibold">Intervalometer:</span> Required
                    </div>
                    <div>
                      <span className="text-white font-semibold">Total Time:</span> 1-4 hours
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-900/20 border border-green-500/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Moon (Detailed)</h4>
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-300">
                    <div>
                      <span className="text-white font-semibold">Aperture:</span> f/8.0-11
                    </div>
                    <div>
                      <span className="text-white font-semibold">Shutter:</span> 1/125 - 1/500 sec
                    </div>
                    <div>
                      <span className="text-white font-semibold">ISO:</span> 100-400
                    </div>
                    <div>
                      <span className="text-white font-semibold">Lens:</span> 200-600mm
                    </div>
                    <div>
                      <span className="text-white font-semibold">Focus:</span> Manual, precise
                    </div>
                    <div>
                      <span className="text-white font-semibold">Tripod:</span> Essential
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-900/20 border border-yellow-500/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">ISS/Satellite Trails</h4>
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-300">
                    <div>
                      <span className="text-white font-semibold">Aperture:</span> f/2.8-4.0
                    </div>
                    <div>
                      <span className="text-white font-semibold">Shutter:</span> 15-20 seconds
                    </div>
                    <div>
                      <span className="text-white font-semibold">ISO:</span> 1600-3200
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">See our <Link href="/guides/photograph-iss" className="text-blue-400 hover:text-blue-300">ISS photography guide</Link> for detailed instructions.</p>
                </div>

                <div className="p-4 bg-orange-900/20 border border-orange-500/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Meteor Showers</h4>
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-300">
                    <div>
                      <span className="text-white font-semibold">Aperture:</span> f/2.0-2.8
                    </div>
                    <div>
                      <span className="text-white font-semibold">Shutter:</span> 20 seconds
                    </div>
                    <div>
                      <span className="text-white font-semibold">ISO:</span> 3200-6400
                    </div>
                    <div>
                      <span className="text-white font-semibold">Continuous:</span> Yes (intervalometer)
                    </div>
                    <div>
                      <span className="text-white font-semibold">Duration:</span> 2-4 hours
                    </div>
                    <div>
                      <span className="text-white font-semibold">Hope:</span> High!
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Check our <Link href="/guides/meteor-showers" className="text-blue-400 hover:text-blue-300">meteor shower guide</Link> for more tips.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Focusing on Stars</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Achieving sharp focus on stars is one of the biggest challenges for beginners. Autofocus doesn&apos;t work in darkness, and the infinity mark on lenses is often inaccurate.
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h3 className="text-xl font-semibold text-white mb-4">Step-by-Step Focusing Method:</h3>

              <ol className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl">1</span>
                  <div>
                    <strong className="text-white text-lg">Switch to Manual Focus</strong>
                    <p className="text-sm mt-1">Set both camera and lens to MF (manual focus). Autofocus will hunt endlessly and never lock on stars.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl">2</span>
                  <div>
                    <strong className="text-white text-lg">Find a Bright Star</strong>
                    <p className="text-sm mt-1">Look for the brightest star visible. Good targets: Sirius, Vega, Arcturus, Jupiter, or Venus. Point camera toward it.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl">3</span>
                  <div>
                    <strong className="text-white text-lg">Enable Live View</strong>
                    <p className="text-sm mt-1">Switch camera to Live View mode (the LCD screen shows what sensor sees). Frame the bright star in the center of screen.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl">4</span>
                  <div>
                    <strong className="text-white text-lg">Zoom Live View to Maximum</strong>
                    <p className="text-sm mt-1">Use the magnification button to zoom in 5x or 10x on the star. The star should appear as a blob on screen.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl">5</span>
                  <div>
                    <strong className="text-white text-lg">Adjust Focus Ring</strong>
                    <p className="text-sm mt-1">Slowly turn the focus ring on your lens. Watch the star blob get smaller. Keep adjusting until the star is the smallest, sharpest pinpoint possible. It should look like a tiny dot, not a bloated circle.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl">6</span>
                  <div>
                    <strong className="text-white text-lg">Fine-Tune</strong>
                    <p className="text-sm mt-1">Rock the focus ring back and forth slightly to find the absolute sharpest point. When perfect, the star should be a crisp pinpoint even at 10x magnification.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl">7</span>
                  <div>
                    <strong className="text-white text-lg">Lock Focus Position</strong>
                    <p className="text-sm mt-1">Mark the focus position with tape or a marker. Many photographers put a small piece of gaffer tape on the lens barrel at the exact focus position. This lets you return to perfect focus quickly on future nights.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl">8</span>
                  <div>
                    <strong className="text-white text-lg">Take Test Shot</strong>
                    <p className="text-sm mt-1">Exit Live View and take a test exposure. Zoom in on playback to verify stars are sharp across the frame. If soft, repeat focusing process.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Alternative: Daytime Focus</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    During daylight, focus on an object at the horizon (mountain, building, antenna) using autofocus. Switch to manual focus and mark the position. This approximates infinity focus and works in a pinch. However, Live View focusing on stars is more accurate.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Some lenses have a &quot;hard stop&quot; at infinity - the focus ring won&apos;t turn past a certain point. For these lenses, infinity is at the hard stop. But verify with Live View test because manufacturing tolerances vary.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-triangle-exclamation text-orange-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Common Focusing Mistakes</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong className="text-white">Trusting the infinity mark:</strong> Many lenses focus PAST infinity. Don&apos;t just turn to ∞ and assume it&apos;s sharp.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong className="text-white">Bumping the focus ring:</strong> Easy to knock out of focus while handling camera. Be careful and recheck focus periodically.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong className="text-white">Temperature shifts:</strong> Extreme temperature changes can affect focus. If you go from warm car to cold night, recheck after 20 minutes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong className="text-white">Using autofocus:</strong> Just doesn&apos;t work in darkness. Always manual.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Composition and Framing</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Technical perfection means nothing without good composition. Here&apos;s how to create compelling astrophotos beyond just pointing at the sky.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Compositional Techniques</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">1. Foreground Interest</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    The most compelling astrophotos combine sky with interesting foreground elements. Pure sky shots get boring quickly.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm ml-4">
                    <li>• Silhouetted trees, rock formations, or mountains</li>
                    <li>• Illuminated buildings, lighthouses, or structures</li>
                    <li>• Reflections in water (lakes, ocean, puddles)</li>
                    <li>• Desert landscapes with unique features</li>
                    <li>• People (use headlamp/flashlight for fill light during exposure)</li>
                  </ul>
                  <p className="text-gray-300 text-sm mt-2">
                    <strong className="text-white">Rule of thirds:</strong> Place horizon in lower third, sky in upper two-thirds. Or place interesting foreground feature on 1/3 intersection points.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">2. Leading Lines</h4>
                  <p className="text-gray-300 text-sm">
                    Roads, rivers, fences, or natural features that draw the eye from foreground into the sky. Creates depth and guides viewer through image. S-curves are particularly effective.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">3. Milky Way Positioning</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    The galactic core (brightest, most detailed part) rises in the southeast and arcs across southern sky during summer months (May-October in Northern Hemisphere).
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm ml-4">
                    <li>• Best months: June-August when core is highest and visible longest</li>
                    <li>• Position core rising from horizon or arching over foreground</li>
                    <li>• Use PhotoPills or Stellarium apps to preview Milky Way position</li>
                    <li>• Scout locations during day to visualize composition</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">4. Panoramas</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Stitch multiple frames for ultra-wide views of the Milky Way arching across entire sky.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm ml-4">
                    <li>• Shoot 5-10 overlapping frames (30-40% overlap)</li>
                    <li>• Keep settings identical for all frames</li>
                    <li>• Shoot in portrait orientation for more vertical coverage</li>
                    <li>• Stitch in Photoshop (Photomerge) or Microsoft ICE (free)</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">5. Time of Night</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Different times create different moods:
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm ml-4">
                    <li>• <strong className="text-white">Blue hour (30-60 min after sunset):</strong> Foreground still visible, sky deep blue, stars appearing. Great for balanced exposures.</li>
                    <li>• <strong className="text-white">Astronomical twilight:</strong> Darkening sky, core becomes visible. Good blend of sky and foreground.</li>
                    <li>• <strong className="text-white">True darkness (2+ hours after sunset):</strong> Darkest skies, faintest stars visible, but foreground goes black unless illuminated.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Foreground Illumination Techniques</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <p className="text-gray-300 mb-3 text-sm">
                Once astronomical twilight ends, foreground goes completely black. If you want visible foreground detail:
              </p>

              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">1.</span>
                  <span><strong className="text-white">Composite exposures:</strong> Shoot one frame during blue hour (properly exposed foreground), then shoot sky later when darker. Blend in Photoshop.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">2.</span>
                  <span><strong className="text-white">Light painting:</strong> During the 20-30 second exposure, use flashlight or LED panel to illuminate foreground. Paint light across features. Use warm gel for natural look.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">3.</span>
                  <span><strong className="text-white">Ambient light:</strong> Position yourself where ambient light (distant cities, moon, twilight) naturally illuminates foreground.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">4.</span>
                  <span><strong className="text-white">Silhouettes:</strong> Embrace pure black foreground shapes against starry sky. Simple and dramatic.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Stacking Images</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Image stacking combines multiple exposures to reduce noise and reveal faint details invisible in single frames. Essential technique for serious astrophotography.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Why Stack?</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-layer-group text-blue-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Noise Reduction:</strong> Random noise averages out when combining frames. 10 stacked images reduce noise by ~3x compared to single frame. 25 images reduce by ~5x.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-eye text-purple-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Reveal Faint Details:</strong> Lower noise floor allows aggressive stretching in post-processing, revealing faint nebulosity and galactic structure.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-plane text-orange-400 text-lg mt-1"></i>
                  <div>
                    <strong className="text-white">Remove Artifacts:</strong> Airplanes, satellites, and hot pixels appear in different locations each frame. Stacking algorithms reject these outliers.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">How to Stack</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Step-by-Step Process:</h4>

              <ol className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <span><strong className="text-white">Capture Light Frames:</strong> Shoot 10-50 exposures of the same composition using identical settings. More frames = better results but longer processing. Don&apos;t move tripod between shots.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">2.</span>
                  <span><strong className="text-white">Optional: Capture Dark Frames:</strong> With lens cap ON, take 5-10 exposures using same ISO/shutter as light frames. These calibration frames map sensor noise for subtraction. Advanced technique.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">3.</span>
                  <span><strong className="text-white">Choose Stacking Software:</strong> Free options: DeepSkyStacker (Windows), Starry Landscape Stacker (Mac, $40), Sequator (Windows, free). Paid: PixInsight ($300+, professional)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">4.</span>
                  <span><strong className="text-white">Load Images:</strong> Import all light frames into stacking software. Import dark frames if you shot them.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">5.</span>
                  <span><strong className="text-white">Align Frames:</strong> Software automatically detects stars and aligns frames. This compensates for minor tripod movement or polar misalignment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">6.</span>
                  <span><strong className="text-white">Stack:</strong> Software combines frames using median or mean algorithm. Median rejects outliers (satellites, planes). Mean preserves all data but more sensitive to outliers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">7.</span>
                  <span><strong className="text-white">Save Result:</strong> Export stacked image as 16-bit TIFF for maximum editing headroom in post-processing.</span>
                </li>
              </ol>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-lightbulb text-yellow-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Simple vs. Advanced Stacking</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Beginners: Start with simple stacking - just load light frames and stack. Even without dark/bias/flat frames, you&apos;ll see huge improvement over single exposures. Advanced calibration frames add maybe 5-10% quality improvement but triple complexity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Basic Post-Processing</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Raw astrophotos look terrible straight out of camera - dark, flat, unimpressive. Post-processing brings out the hidden data. Here&apos;s a basic workflow using free software.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Software Options</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <div>
                    <strong className="text-white">RawTherapee (Free, Windows/Mac/Linux):</strong> Powerful RAW editor. Steep learning curve but produces professional results. Excellent for astrophotos.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <div>
                    <strong className="text-white">darktable (Free, Windows/Mac/Linux):</strong> Alternative to RawTherapee. Different interface, equally capable.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <div>
                    <strong className="text-white">Adobe Lightroom ($10/mo):</strong> Industry standard. Intuitive interface, excellent for batching multiple images. Worth the subscription if you&apos;re serious.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <div>
                    <strong className="text-white">GIMP (Free):</strong> For final touches, compositing, advanced edits after RAW processing.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Basic Editing Workflow</h3>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Import RAW File:</strong> Load your single exposure or stacked TIFF into editing software.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">2.</span>
                  <div>
                    <strong className="text-white">White Balance:</strong> Set to 3800-4500K for cooler blue sky or 5500-6500K for warmer tone. Experiment to taste.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Increase Exposure:</strong> +0.5 to +1.5 stops to brighten overall image. Don&apos;t clip highlights.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Boost Contrast:</strong> +15 to +35. Makes Milky Way structure pop.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">5.</span>
                  <div>
                    <strong className="text-white">Adjust Highlights/Shadows:</strong> Reduce highlights (-20 to -40) to recover blown areas. Lift shadows (+20 to +50) to reveal foreground detail without brightening sky excessively.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">6.</span>
                  <div>
                    <strong className="text-white">Increase Clarity/Texture:</strong> +15 to +30 adds definition to Milky Way detail and enhances star sharpness. Don&apos;t overdo or halos appear.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">7.</span>
                  <div>
                    <strong className="text-white">Boost Vibrance/Saturation:</strong> Vibrance +20 to +40 enhances subtle star colors. Saturation +10 to +20 for more dramatic effect. Easy to oversaturate.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">8.</span>
                  <div>
                    <strong className="text-white">Noise Reduction:</strong> Luminance NR 30-60%, Color NR 40-80%. Reduces noise from high ISO. Too much softens stars.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">9.</span>
                  <div>
                    <strong className="text-white">Sharpening:</strong> Amount 40-60, Radius 0.8-1.2, Detail 15-30. Sharpens stars without creating halos.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">10.</span>
                  <div>
                    <strong className="text-white">Lens Corrections:</strong> Enable profile corrections to remove vignetting and distortion.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">11.</span>
                  <div>
                    <strong className="text-white">Graduated Filter (Optional):</strong> Darken top of frame or brighten bottom to balance exposure between bright foreground and darker sky.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">12.</span>
                  <div>
                    <strong className="text-white">Export:</strong> Save as high-quality JPEG (95-100%) for sharing or 16-bit TIFF for further editing.
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/20 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-triangle-exclamation text-orange-400 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Don&apos;t Over-Process</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Common beginner mistake: cranking every slider to maximum. Results look garish, oversaturated, and unnatural. Subtlety wins. Edit until it looks good, then back off 20%. When in doubt, less is more. Natural-looking images age better than overdone HDR nightmares.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Target Selection for Beginners</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Start with easier targets before tackling challenging deep-sky objects. Here&apos;s a progression from easiest to hardest.
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
              <div className="space-y-4">
                <div className="p-4 bg-green-900/20 border border-green-500/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fa-solid fa-moon text-yellow-400 text-xl"></i>
                    <h4 className="text-white font-semibold">1. The Moon (Easiest)</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">
                    Bright, easy to find, beautiful detail visible with any camera. Use 200mm+ lens, f/8-11, ISO 100-400, 1/125-1/500 sec. Crescent and quarter phases show most dramatic shadows on craters.
                  </p>
                  <p className="text-gray-300 text-sm"><strong className="text-white">Skills learned:</strong> Focusing, tripod stability, manual exposure</p>
                </div>

                <div className="p-4 bg-green-900/20 border border-green-500/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fa-solid fa-star text-blue-400 text-xl"></i>
                    <h4 className="text-white font-semibold">2. Star Trails (Easy)</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">
                    Point camera at north (Polaris) and shoot 100-300 exposures of 30-60 seconds each. Stack in Starry Landscape Stacker or free StarStaX software. Creates beautiful circular star trails around celestial pole.
                  </p>
                  <p className="text-gray-300 text-sm"><strong className="text-white">Skills learned:</strong> Intervalometer use, stacking basics, long sessions</p>
                </div>

                <div className="p-4 bg-yellow-900/20 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fa-solid fa-galaxy text-purple-400 text-xl"></i>
                    <h4 className="text-white font-semibold">3. Milky Way (Moderate)</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">
                    Summer months (May-Oct) when galactic core visible. Requires dark skies away from cities. 14-24mm f/1.4-2.8, 20-30 sec, ISO 3200-6400. Compose with foreground interest.
                  </p>
                  <p className="text-gray-300 text-sm"><strong className="text-white">Skills learned:</strong> Dark sky location scouting, composition, post-processing, timing</p>
                </div>

                <div className="p-4 bg-yellow-900/20 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fa-solid fa-circle-dot text-orange-400 text-xl"></i>
                    <h4 className="text-white font-semibold">4. Planets (Moderate-Hard)</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">
                    Jupiter, Saturn, Mars, Venus. Need 200mm+ lens or telescope. Shoot video (60fps, 30-60 sec), extract best frames, stack hundreds in AutoStakkert, sharpen in Registax. Advanced technique.
                  </p>
                  <p className="text-gray-300 text-sm"><strong className="text-white">Skills learned:</strong> Video processing, advanced stacking, planetary imaging workflow</p>
                </div>

                <div className="p-4 bg-orange-900/20 border border-orange-500/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fa-solid fa-cloud text-cyan-400 text-xl"></i>
                    <h4 className="text-white font-semibold">5. Deep Sky Objects (Hard)</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">
                    Nebulae, galaxies (M31 Andromeda, M42 Orion Nebula, etc.). Requires star tracker for multi-minute exposures, dark skies, stacking dozens of frames. Intermediate to advanced astrophotography.
                  </p>
                  <p className="text-gray-300 text-sm"><strong className="text-white">Skills learned:</strong> Polar alignment, guided tracking, advanced stacking, calibration frames</p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Start Checklist</h2>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Your First Astrophoto Session:</h3>
              <ol className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">1.</span>
                  <span>Check weather - need clear skies, check moon phase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">2.</span>
                  <span>Scout dark location away from city lights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">3.</span>
                  <span>Charge camera batteries (bring spares)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">4.</span>
                  <span>Format memory card - ensure plenty of space</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">5.</span>
                  <span>Set camera: Manual mode, RAW, widest aperture, ISO 3200, 20 sec shutter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">6.</span>
                  <span>Mount on sturdy tripod, compose shot with foreground interest</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">7.</span>
                  <span>Focus using Live View on bright star, mark position with tape</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">8.</span>
                  <span>Take test shot, check exposure and focus on LCD</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">9.</span>
                  <span>Shoot 10-20 frames for stacking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">10.</span>
                  <span>Process in RawTherapee or Lightroom - boost contrast, vibrance, clarity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">11.</span>
                  <span>Celebrate your first astrophoto!</span>
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
                Apply your new skills to photograph the space station
              </p>
            </Link>

            <Link href="/guides/meteor-showers" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-meteor text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Meteor Showers</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Capture shooting stars with long exposure techniques
              </p>
            </Link>

            <Link href="/guides/astronomy-apps" className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-mobile-screen text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold text-white">Astronomy Apps</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Tools to plan your astrophotography sessions
              </p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Shooting?</h3>
          <p className="text-gray-300 mb-6">Check tonight&apos;s sky conditions and plan your first session</p>
          <Link href="/events">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition-colors">
              View Sky Events
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
