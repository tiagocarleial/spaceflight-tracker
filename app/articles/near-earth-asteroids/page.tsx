import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Near-Earth Asteroids: Understanding the Threat and Opportunity | Spaceflight Tracker',
  description: 'Complete guide to near-Earth asteroids - what they are, how we track them, the real threat level, and opportunities for science and mining.',
  keywords: ['asteroids', 'near-Earth asteroids', 'NEO', 'planetary defense', 'asteroid mining', 'space threats'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/near-earth-asteroids',
  },
};

export default function NearEarthAsteroidsPage() {
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
              <Link href="/asteroids">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  View Asteroids
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
            <span className="text-gray-500">Near-Earth Asteroids</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium">
              Planetary Defense
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">11 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Near-Earth Asteroids: Understanding the Threat and Opportunity
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Everything you need to know about asteroids that pass close to Earth—how we track them,
            the real risks, and why they matter for our future
          </p>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">What Are Near-Earth Asteroids?</h2>
              <p>
                Near-Earth Asteroids (NEAs) are rocky objects orbiting the Sun that come within 1.3 astronomical units
                (AU) of Earth—about 120 million miles or 195 million kilometers. To put this in perspective, Earth orbits
                at 1 AU from the Sun, so NEAs are those asteroids whose paths bring them relatively close to our planet's
                orbital neighborhood.
              </p>
              <p>
                Most NEAs are remnants from the early solar system, 4.6 billion years old. They're leftover building
                blocks that never coalesced into planets. Their orbits can be influenced by the gravitational pull of
                planets, particularly Jupiter, which occasionally nudges asteroids from the main asteroid belt (between
                Mars and Jupiter) into orbits that cross Earth's path.
              </p>
              <p>
                Currently, we've discovered over 34,000 NEAs, with new ones found regularly. They range in size from
                small boulders just a few meters across to massive objects over 30 kilometers (18 miles) in diameter.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Categories of Near-Earth Objects</h2>
              <p>
                NEAs are classified into groups based on their orbital characteristics:
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Atens</h3>
              <p>
                Asteroids with orbits that lie mostly inside Earth's orbit. Their average distance from the Sun is
                less than 1 AU, but their elliptical paths cross Earth's orbit. About 2,500 known Atens exist.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Apollos</h3>
              <p>
                The largest NEA group with over 17,000 known members. Apollos have orbits larger than Earth's
                (more than 1 AU from the Sun) but cross Earth's orbital path during part of their journey around the Sun.
                These pose the most common potential impact threat.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Amors</h3>
              <p>
                Asteroids with orbits entirely outside Earth's orbit but inside Mars' orbit. While they don't currently
                cross Earth's path, gravitational perturbations could eventually change their orbits to become Earth-crossers.
                About 10,000 Amors are known.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Atiras</h3>
              <p>
                Rare asteroids with orbits entirely inside Earth's orbit. Only about 40 are known because they're difficult
                to observe—they're always close to the Sun from our perspective, making detection challenging.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Potentially Hazardous Asteroids (PHAs)</h2>
              <p>
                Not all NEAs are considered potentially hazardous. An asteroid earns the PHA designation if it meets
                two criteria:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong className="text-white">Size:</strong> Larger than approximately 140 meters (460 feet) in diameter</li>
                <li><strong className="text-white">Proximity:</strong> Orbit comes within 0.05 AU (4.6 million miles / 7.5 million km) of Earth's orbit</li>
              </ol>
              <p>
                The size threshold represents the point where an impact would cause regional devastation rather than
                just local damage. The proximity criterion identifies objects that pass close enough to potentially
                collide if orbital perturbations occur.
              </p>
              <p>
                Currently, about 2,300 PHAs are known. The "potentially hazardous" label doesn't mean they will hit
                Earth—it means they're large enough to cause significant damage if they did, and they pass close enough
                that careful tracking is warranted. For most PHAs, we can predict their orbits decades or even centuries
                ahead with high precision.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">How We Detect and Track Asteroids</h2>
              <p>
                Discovering and monitoring asteroids requires systematic observation of the night sky:
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Survey Programs</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Catalina Sky Survey (CSS):</strong> Uses telescopes in Arizona to scan the sky</li>
                <li><strong className="text-white">Pan-STARRS:</strong> Two telescopes in Hawaii with wide-field cameras</li>
                <li><strong className="text-white">ATLAS:</strong> Four telescopes designed for detecting fast-moving objects</li>
                <li><strong className="text-white">NEOWISE:</strong> Space-based infrared telescope detecting asteroids by their heat signature</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Detection Process</h3>
              <p>
                Telescopes photograph the same region of sky multiple times per night. Software compares images to
                identify moving objects—asteroids appear as points of light that shift position between frames while
                stars remain stationary. Once detected, the object is tracked across multiple nights to determine its
                orbit precisely.
              </p>
              <p>
                NASA's Center for Near-Earth Object Studies (CNEOS) at JPL maintains a database of all known NEAs,
                calculating their orbits and predicting close approaches for decades into the future. This data is
                publicly available and used by observatories worldwide.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Real Risk: Should We Worry?</h2>
              <p>
                Hollywood loves asteroid disaster movies, but what's the actual threat level?
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Historical Context</h3>
              <p>
                Earth has been struck by asteroids throughout its history. The most famous impact occurred 66 million
                years ago when a 10-kilometer (6-mile) asteroid struck near Mexico's Yucatan Peninsula. The impact
                created the Chicxulub crater and contributed to the extinction of the dinosaurs, along with about 75%
                of all species.
              </p>
              <p>
                More recently, the 1908 Tunguska event in Siberia saw a 50-100 meter asteroid or comet fragment explode
                in the atmosphere, flattening 2,000 square kilometers of forest. In 2013, a 20-meter asteroid exploded
                over Chelyabinsk, Russia, with the energy of 500 kilotons of TNT, injuring over 1,500 people (mostly
                from broken glass).
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Current Threat Assessment</h3>
              <p>
                Thanks to detection programs, we've found over 95% of NEAs larger than 1 kilometer—the "civilization-ending"
                size. None of these pose any threat for at least the next 100 years. For smaller but still dangerous
                objects (140+ meters), we've found about 40% of the estimated population.
              </p>
              <p>
                Impact probability is measured on the Torino Scale (0-10) and Palermo Technical Impact Hazard Scale.
                Currently, no known asteroid rates above 0 (no hazard) on the Torino Scale. When new asteroids are
                discovered, they sometimes briefly show a low impact probability that disappears as we refine their orbit
                with additional observations.
              </p>
              <p>
                Statistically:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Asteroids capable of global catastrophe (~1 km) strike roughly every 500,000 years</li>
                <li>Regional devastation-size impacts (~140 m) occur every 10,000-20,000 years</li>
                <li>Tunguska-sized events (~50 m) happen every few centuries</li>
                <li>Chelyabinsk-sized events (~20 m) occur every few decades</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Planetary Defense: The DART Mission</h2>
              <p>
                In September 2022, NASA successfully demonstrated humanity's ability to defend against asteroid threats.
                The Double Asteroid Redirection Test (DART) deliberately crashed a spacecraft into Dimorphos, a small
                moon orbiting the asteroid Didymos.
              </p>
              <p>
                DART's kinetic impact changed Dimorphos' orbital period by about 33 minutes—far exceeding the mission's
                success criteria of just 73 seconds. This proved we can alter an asteroid's trajectory if given enough
                warning time.
              </p>
              <p>
                Key lessons from DART:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Kinetic impact works:</strong> Hitting an asteroid can meaningfully change its orbit</li>
                <li><strong className="text-white">Time is crucial:</strong> The earlier we detect a threat, the smaller the deflection needed</li>
                <li><strong className="text-white">Ejecta matters:</strong> Material ejected from impact contributed significantly to the momentum change</li>
                <li><strong className="text-white">Follow-up needed:</strong> ESA's Hera mission will visit in 2026 to study the impact crater in detail</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Asteroids as Resources</h2>
              <p>
                While asteroids can pose threats, they also represent extraordinary opportunities. These space rocks
                contain valuable materials:
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Metal-Rich Asteroids</h3>
              <p>
                M-type asteroids consist primarily of metallic iron and nickel, often with platinum-group metals. A
                single metallic asteroid 500 meters across could contain more platinum than has ever been mined on Earth.
                The asteroid 16 Psyche (target of NASA's Psyche mission) might contain metal worth $10,000 quadrillion
                at current market prices—though flooding the market would crash prices.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-4">Water-Rich Asteroids</h3>
              <p>
                C-type (carbonaceous) asteroids contain water ice and organic compounds. Water can be split into hydrogen
                and oxygen—rocket fuel. Establishing "gas stations" in space using asteroid water could enable much cheaper
                deep space exploration since we wouldn't need to launch all fuel from Earth.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-4">Scientific Value</h3>
              <p>
                Asteroids are primitive, unchanged remnants from the solar system's formation. Studying them helps us
                understand:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>How planets formed</li>
                <li>The composition of the early solar system</li>
                <li>How organic molecules might have arrived on Earth</li>
                <li>The potential for life's building blocks elsewhere</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Recent and Upcoming Asteroid Missions</h2>
              <p>
                Several spacecraft have visited or are en route to asteroids:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">OSIRIS-REx (NASA):</strong> Returned samples from asteroid Bennu in 2023</li>
                <li><strong className="text-white">Hayabusa2 (JAXA):</strong> Returned samples from asteroid Ryugu in 2020</li>
                <li><strong className="text-white">DART (NASA):</strong> Successfully impacted Dimorphos in 2022</li>
                <li><strong className="text-white">Hera (ESA):</strong> Will arrive at Didymos system in 2026 to study DART's impact</li>
                <li><strong className="text-white">Psyche (NASA):</strong> En route to metallic asteroid 16 Psyche, arriving 2029</li>
                <li><strong className="text-white">Lucy (NASA):</strong> Touring Jupiter's Trojan asteroids through 2033</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">What You Can Do</h2>
              <p>
                You don't need to be a professional astronomer to contribute to asteroid science:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Track asteroids:</strong> Use our asteroid tracker to monitor upcoming close approaches</li>
                <li><strong className="text-white">Citizen science:</strong> Projects like Asteroid Zoo let volunteers help classify asteroids</li>
                <li><strong className="text-white">Stay informed:</strong> Follow NASA CNEOS for official impact assessments</li>
                <li><strong className="text-white">Amateur astronomy:</strong> Backyard telescopes can contribute observations to global tracking networks</li>
              </ul>
            </section>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Track Near-Earth Asteroids</h3>
              <p className="mb-4">
                See which asteroids are passing close to Earth right now. Our tracker shows upcoming close approaches
                with size estimates, velocity, and miss distance—updated hourly from NASA JPL data.
              </p>
              <Link href="/asteroids">
                <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors">
                  View Asteroid Tracker
                </button>
              </Link>
            </div>

          </div>
        </article>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Continue Learning</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/how-rockets-work" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-orange-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">How Do Rockets Work?</h4>
              <p className="text-gray-400 text-sm">Learn the physics behind rocket propulsion</p>
            </Link>
            <Link href="/faq" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-orange-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Space FAQ</h4>
              <p className="text-gray-400 text-sm">Common questions about asteroids and space</p>
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
