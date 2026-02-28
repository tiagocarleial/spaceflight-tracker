import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Do Rockets Work? Complete Guide to Rocket Science | Spaceflight Tracker',
  description: 'Learn the fundamental physics and engineering behind rocket propulsion. Understand how rockets generate thrust, reach orbit, and explore space.',
  keywords: ['how rockets work', 'rocket science', 'rocket propulsion', 'space launch physics', 'rocket engines'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/how-rockets-work',
  },
};

export default function HowRocketsWorkPage() {
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
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-gray-300">Articles</Link>
            <span>/</span>
            <span className="text-gray-500">How Do Rockets Work?</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              Education
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">10 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Do Rockets Work? Complete Guide to Rocket Science
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Understanding the fundamental physics and engineering that allows rockets to overcome Earth's gravity
            and explore space
          </p>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Basic Principle: Newton's Third Law</h2>
              <p>
                At their core, rockets work based on Newton's Third Law of Motion: "For every action, there is an equal and
                opposite reaction." When a rocket expels hot gas downward at high speed (the action), the rocket is pushed
                upward with equal force (the reaction). This principle works the same whether the rocket is in Earth's
                atmosphere or the vacuum of space.
              </p>
              <p>
                Unlike jet engines, which need air to operate, rockets carry both fuel and oxidizer. This allows them to
                generate thrust in the vacuum of space where there's no air to "push against"—a common misconception.
                Rockets don't push against air or ground; they push against their own expelled propellant.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Rocket Propulsion: Thrust and Exhaust</h2>
              <p>
                Rocket engines generate thrust by burning fuel and oxidizer in a combustion chamber. This creates extremely
                hot, high-pressure gas that expands and accelerates through a nozzle. Modern rocket engines can produce
                exhaust velocities of 2-4.5 km/s (4,500-10,000 mph), depending on the propellant combination.
              </p>
              <p>
                The amount of thrust depends on two factors:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Mass flow rate:</strong> How much propellant is expelled per second</li>
                <li><strong className="text-white">Exhaust velocity:</strong> How fast the exhaust leaves the nozzle</li>
              </ul>
              <p>
                SpaceX's Falcon 9 first stage generates about 7.6 million pounds of thrust at liftoff, burning approximately
                2,500 kg of propellant every second. NASA's Space Launch System (SLS) produces over 8.8 million pounds of
                thrust, making it the most powerful operational rocket.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Types of Rocket Propellants</h2>

              <h3 className="text-2xl font-semibold text-white mb-3">Liquid Propellants</h3>
              <p>
                Most modern orbital rockets use liquid propellants because they offer better performance and can be throttled
                or shut down:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">LOX/RP-1:</strong> Liquid oxygen and refined kerosene (used by Falcon 9). High thrust, proven reliability.</li>
                <li><strong className="text-white">LOX/LH2:</strong> Liquid oxygen and liquid hydrogen (used by Delta IV, SLS). Best specific impulse but requires large tanks.</li>
                <li><strong className="text-white">LOX/Methane:</strong> Liquid oxygen and liquid methane (Starship, New Glenn). Good performance, easier to produce on Mars.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Solid Propellants</h3>
              <p>
                Solid rocket boosters use pre-mixed fuel and oxidizer in a solid form. Once ignited, they burn until
                depleted and cannot be shut down. They provide high thrust and are simpler but less flexible than liquid
                engines. Space Shuttle and SLS use solid rocket boosters for additional liftoff power.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Staging: Shedding Weight for Efficiency</h2>
              <p>
                Reaching orbit requires achieving approximately 17,500 mph (28,000 km/h). Carrying empty fuel tanks and
                extra engines all the way to orbit would waste enormous amounts of energy. The solution is staging—
                dropping parts of the rocket as they become deadweight.
              </p>
              <p>
                A typical two-stage rocket works like this:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>The first stage (booster) provides initial thrust to climb through the atmosphere</li>
                <li>At about 60-80 km altitude and several km/s velocity, the first stage separates</li>
                <li>The second stage engine ignites and continues to orbit</li>
                <li>Now much lighter, the second stage efficiently accelerates to orbital velocity</li>
              </ol>
              <p>
                The Falcon 9 first stage returns to Earth and lands, while the second stage places the payload in orbit
                before deorbiting. Some missions use a third stage or kick stage for higher orbits.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Rocket Equation: Math Behind Spaceflight</h2>
              <p>
                The Tsiolkovsky rocket equation describes the relationship between a rocket's velocity change (delta-v),
                exhaust velocity, and the ratio of initial to final mass:
              </p>
              <p className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center font-mono">
                Δv = v<sub>e</sub> × ln(m<sub>0</sub> / m<sub>f</sub>)
              </p>
              <p>
                Where:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Δv is the change in velocity</li>
                <li>v<sub>e</sub> is the effective exhaust velocity</li>
                <li>m<sub>0</sub> is the initial mass (with propellant)</li>
                <li>m<sub>f</sub> is the final mass (empty)</li>
              </ul>
              <p>
                This equation reveals a fundamental challenge: to go faster, you need more propellant, but more propellant
                means more mass to accelerate. This is why rockets are mostly fuel—a Falcon 9's mass is about 96% propellant,
                4% structure and payload. It's also why reusability is revolutionary: reusing the booster means you don't
                need to build a new one for each flight, dramatically reducing costs.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Guidance and Control</h2>
              <p>
                Getting to orbit isn't just about going up—it's about reaching a precise velocity and direction.
                Rockets use several systems for guidance:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Gimbaling:</strong> Tilting the engine to vector thrust and steer the rocket</li>
                <li><strong className="text-white">Grid fins:</strong> Aerodynamic surfaces for atmospheric steering (used during Falcon 9 landing)</li>
                <li><strong className="text-white">Reaction control system (RCS):</strong> Small thrusters for fine adjustments in space</li>
                <li><strong className="text-white">Inertial navigation:</strong> Gyroscopes and accelerometers to track position and velocity</li>
                <li><strong className="text-white">GPS:</strong> Additional positioning data when available</li>
              </ul>
              <p>
                Modern rockets use sophisticated computer systems to continuously adjust trajectory during ascent,
                compensating for winds, slight performance variations, and ensuring precise orbital insertion.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Challenges of Rocket Design</h2>
              <p>
                Building a reliable rocket is extraordinarily difficult. Engineers must balance:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Extreme temperatures:</strong> Combustion chambers reach 3,000°C while cryogenic propellants are -200°C</li>
                <li><strong className="text-white">Vibration and stress:</strong> Massive forces during launch and landing</li>
                <li><strong className="text-white">Weight optimization:</strong> Every kilogram of structure reduces payload capacity</li>
                <li><strong className="text-white">Reliability:</strong> Millions of components must work perfectly</li>
                <li><strong className="text-white">Cost:</strong> Traditional expendable rockets are very expensive</li>
              </ul>
              <p>
                SpaceX's innovations in reusability have addressed the cost challenge. By landing and reusing first-stage
                boosters, they've reduced launch costs by an order of magnitude compared to expendable rockets. Starship
                aims to make both stages fully reusable, potentially reducing costs even further.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Future of Rocket Technology</h2>
              <p>
                Rocket technology continues to evolve:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Full reusability:</strong> SpaceX Starship, Blue Origin New Glenn</li>
                <li><strong className="text-white">Advanced engines:</strong> Rotating detonation engines, nuclear thermal propulsion</li>
                <li><strong className="text-white">Efficiency improvements:</strong> Better materials, manufacturing techniques</li>
                <li><strong className="text-white">In-space refueling:</strong> Enables missions beyond Earth orbit</li>
                <li><strong className="text-white">Alternative propulsion:</strong> Ion drives for deep space, air-breathing engines for first stages</li>
              </ul>
              <p>
                As technology advances, rockets are becoming more powerful, efficient, and affordable—opening space
                exploration to more missions, more countries, and eventually, more people.
              </p>
            </section>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Track Real Launches</h3>
              <p className="mb-4">
                Now that you understand how rockets work, track real launches in real-time on Spaceflight Tracker.
                See upcoming SpaceX, NASA, and international launches with live countdowns.
              </p>
              <Link href="/launches">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  View Launch Schedule
                </button>
              </Link>
            </div>

          </div>
        </article>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Continue Learning</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/faq" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Space FAQ</h4>
              <p className="text-gray-400 text-sm">Answers to common questions about space exploration</p>
            </Link>
            <Link href="/glossary" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Space Glossary</h4>
              <p className="text-gray-400 text-sm">Learn the terminology used in spaceflight</p>
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
