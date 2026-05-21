import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import AsteroidCard from '@/components/AsteroidCard';
import AmazonAffiliateBanner from '@/components/AmazonAffiliateBanner';
import { getShuffledProducts } from '@/data/amazonProducts';
import { getNearEarthAsteroids } from '@/lib/nasa-api';

export const metadata: Metadata = {
  title: 'Near-Earth Asteroids - Real-Time Asteroid Tracker',
  description: 'Track near-Earth asteroids and their close approaches. Live data from NASA showing asteroid size, speed, distance, and potential hazards for the next 7 days.',
  keywords: ['asteroid tracker', 'near earth asteroids', 'NEO tracker', 'asteroid watch', 'potentially hazardous asteroids', 'asteroid close approach', 'NASA asteroids'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/asteroids',
  },
  openGraph: {
    title: 'Near-Earth Asteroids - Real-Time Asteroid Tracker',
    description: 'Track near-Earth asteroids and their close approaches with live NASA data.',
    url: 'https://www.spaceflight-tracker.com/asteroids',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Near-Earth Asteroids Tracker',
    description: 'Track near-Earth asteroids with live NASA data.',
  },
};

export default async function AsteroidsPage() {
  // Shuffle Amazon products for random banner order
  const shuffledProducts = getShuffledProducts();

  const asteroids = await getNearEarthAsteroids(7);

  const hazardousCount = asteroids.filter(a => a.isPotentiallyHazardous).length;
  const averageDistance = asteroids.length > 0
    ? asteroids.reduce((sum, a) => sum + a.missDistanceLunar, 0) / asteroids.length
    : 0;
  const closestAsteroid = asteroids.length > 0
    ? asteroids.reduce((closest, a) => a.missDistanceLunar < closest.missDistanceLunar ? a : closest)
    : null;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <Navigation currentPage="asteroids" variant="standard" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h1 className="text-3xl font-bold text-white">Near-Earth Asteroids</h1>
        </div>
        <p className="text-gray-400 mb-6 ml-4">
          Tracking asteroids approaching Earth in the next 7 days • Data from NASA JPL
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Total Asteroids</div>
            <div className="text-3xl font-bold text-white">{asteroids.length}</div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Potentially Hazardous</div>
            <div className="text-3xl font-bold text-red-400">{hazardousCount}</div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Average Distance</div>
            <div className="text-3xl font-bold text-blue-400">
              {averageDistance.toFixed(1)} LD
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Closest Approach</div>
            <div className="text-3xl font-bold text-green-400">
              {closestAsteroid ? `${closestAsteroid.missDistanceLunar.toFixed(2)} LD` : 'N/A'}
            </div>
          </div>
        </div>

        {/* Info Alert */}
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <i className="fa-solid fa-info-circle text-blue-400 text-xl mt-0.5"></i>
            <div>
              <h3 className="text-blue-300 font-semibold mb-1">What are Near-Earth Objects (NEO)?</h3>
              <p className="text-blue-200/80 text-sm">
                NEOs are asteroids and comets with orbits that bring them within 30 million miles (50 million km) of Earth's orbit.
                NASA tracks these objects to assess potential impact hazards. A "Potentially Hazardous Asteroid" (PHA) is larger than 140 meters
                and passes within 4.6 million miles (7.5 million km) of Earth's orbit.
              </p>
            </div>
          </div>
        </div>

        {/* Educational Content - Asteroid Classification */}
        <section className="mb-8 max-w-7xl mx-auto">
          <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <i className="fa-solid fa-meteor text-blue-400"></i>
              Asteroid Classification and Composition
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Asteroids are rocky remnants from the early solar system, formed approximately 4.6 billion years ago when the planets
                were coalescing from the protoplanetary disk. Most asteroids reside in the Main Asteroid Belt between Mars and Jupiter,
                but gravitational interactions with Jupiter and other planets occasionally perturb their orbits, sending some into the
                inner solar system where they become Near-Earth Objects. Scientists classify asteroids by their spectral characteristics,
                which reveal their composition and formation history.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Major Asteroid Types</h3>

              <div className="space-y-4">
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-5">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-red-400">C-Type (Carbonaceous)</span>
                    <span className="text-sm text-gray-400 font-normal">~75% of known asteroids</span>
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    C-type asteroids are the most common and among the most primitive objects in the solar system. Composed primarily of
                    clay and silicate rocks with high carbon content, they appear very dark with albedo (reflectivity) values as low as 3-9%.
                    These asteroids have remained relatively unchanged since the solar system's formation, making them valuable for studying
                    primordial conditions. Many contain water ice and organic compounds, which makes them scientifically important for
                    understanding the origins of life. Asteroids like Bennu (target of NASA's OSIRIS-REx mission) and Ryugu (visited by
                    Japan's Hayabusa2) are C-type, chosen specifically because their composition may preserve chemical signatures from
                    the early solar system.
                  </p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-5">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-yellow-400">S-Type (Silicaceous)</span>
                    <span className="text-sm text-gray-400 font-normal">~17% of known asteroids</span>
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    S-type asteroids are composed primarily of iron and magnesium silicates, making them brighter than C-types with albedo
                    values of 10-22%. These rocky bodies dominate the inner asteroid belt and are thought to be the parent bodies of ordinary
                    chondrite meteorites—the most common type found on Earth. S-type asteroids have undergone more thermal processing than
                    C-types, meaning they were heated enough early in solar system history to partially differentiate (separate) their
                    materials by density. Asteroid 433 Eros, visited by NASA's NEAR Shoemaker mission in 2000, is a well-studied S-type
                    that provided crucial data about asteroid internal structure and surface properties.
                  </p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-5">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-gray-400">M-Type (Metallic)</span>
                    <span className="text-sm text-gray-400 font-normal">~8% of known asteroids</span>
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    M-type asteroids are composed primarily of metallic iron and nickel, appearing moderately bright with albedo around 10-18%.
                    These objects are believed to be the exposed cores of larger differentiated planetesimals that were catastrophically
                    disrupted by collisions early in solar system history. When asteroids large enough to melt internally formed, heavier metals
                    sank to their centers while lighter rocky materials floated to the surface. M-types represent what remains after violent
                    impacts stripped away the outer layers. Asteroid 16 Psyche, the target of NASA's Psyche mission launched in 2023, is an
                    M-type that may be worth an estimated $10 quintillion in metals—though mining it remains in the realm of science fiction.
                    Studying M-types helps scientists understand planetary core formation and early solar system dynamics.
                  </p>
                </div>
              </div>

              <p className="mt-6">
                Beyond these main categories, astronomers have identified numerous subcategories and rare types including X-type (metallic or
                with unusual compositions), D-type (extremely dark, possibly rich in organic compounds), and V-type (basaltic, likely
                fragments from differentiated bodies). The diversity of asteroid compositions provides a window into the varied conditions
                and processes that occurred throughout the early solar system's different regions.
              </p>
            </div>
          </div>

          {/* Planetary Defense Section */}
          <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <i className="fa-solid fa-shield-halved text-blue-400"></i>
              Planetary Defense and Impact Mitigation
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                While catastrophic asteroid impacts are statistically rare, they pose an existential threat that humanity takes seriously.
                The asteroid that ended the Cretaceous period 66 million years ago was approximately 10-15 kilometers in diameter and
                released energy equivalent to billions of nuclear weapons, causing mass extinctions that wiped out the dinosaurs. Even
                smaller impacts can cause regional devastation—the 1908 Tunguska event in Siberia, caused by an object only 60-190 meters
                across, flattened 2,000 square kilometers of forest with the force of 10-15 megatons of TNT.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Detection and Tracking Systems</h3>
              <p>
                NASA's Planetary Defense Coordination Office oversees efforts to detect, track, and characterize near-Earth objects.
                The Center for Near-Earth Object Studies (CNEOS) at NASA's Jet Propulsion Laboratory maintains precise orbital calculations
                for all known potentially hazardous asteroids. Ground-based telescopes like the Catalina Sky Survey, Pan-STARRS in Hawaii,
                and the upcoming NEO Surveyor space telescope continuously scan the sky for previously unknown objects and refine orbits
                of known threats.
              </p>

              <p>
                As of 2026, astronomers have cataloged over 31,000 near-Earth asteroids, with approximately 2,300 classified as potentially
                hazardous. NASA estimates they have found roughly 95% of the largest and most dangerous NEOs (those exceeding 1 kilometer
                in diameter), but only about 40% of the 140+ meter size range—large enough to cause regional devastation. Current survey
                programs discover approximately 3,000 new near-Earth asteroids annually, with detection rates improving as telescope
                technology advances.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Deflection Strategies</h3>
              <p>
                If a threatening asteroid is detected with sufficient warning time—ideally decades before potential impact—several deflection
                methods could alter its orbit enough to miss Earth. The kinetic impactor technique involves crashing a spacecraft into the
                asteroid at high velocity to change its momentum, nudging it onto a safer trajectory. NASA successfully demonstrated this
                approach with the Double Asteroid Redirection Test (DART) mission in September 2022.
              </p>

              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-5 my-4">
                <h4 className="font-semibold text-white mb-3">DART Mission: Humanity's First Planetary Defense Test</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  On September 26, 2022, NASA's DART spacecraft intentionally collided with Dimorphos, a 160-meter moonlet orbiting the
                  larger asteroid Didymos. Traveling at 6.6 kilometers per second (14,760 mph), the 570-kilogram spacecraft struck
                  Dimorphos head-on, releasing energy equivalent to roughly 3 tons of TNT. The impact successfully altered Dimorphos's
                  orbital period around Didymos by 33 minutes—far exceeding the mission's minimum success threshold of 73 seconds.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  The European Space Agency's Hera mission, launched in October 2024, will arrive at the Didymos system in 2026 to conduct
                  detailed surveys of the impact crater, measure changes to Dimorphos's mass distribution, and precisely characterize the
                  asteroid's internal structure. This data will inform future planetary defense planning and validate computer models used
                  to predict deflection mission outcomes. DART proved that humanity now possesses the technology to deflect a dangerous
                  asteroid given adequate warning time.
                </p>
              </div>

              <p>
                Alternative deflection concepts include gravity tractors (using a spacecraft's gravitational pull to gradually tug an
                asteroid over years or decades), ion beam deflection (using sustained low-thrust propulsion to slowly push the asteroid),
                and nuclear devices (deployed near but not on the asteroid to vaporize surface material, creating thrust that alters the
                orbit). The optimal technique depends on warning time, asteroid size and composition, and mission constraints.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">International Cooperation and Future Preparedness</h3>
              <p>
                Planetary defense requires global coordination because asteroid impacts don't respect national borders. The United Nations
                has established the International Asteroid Warning Network (IAWN) and the Space Mission Planning Advisory Group (SMPAG) to
                facilitate information sharing and coordinate response planning among space-faring nations. Regular international exercises
                simulate asteroid threat scenarios to test communication protocols and decision-making processes.
              </p>

              <p>
                Looking ahead, the NEO Surveyor space telescope, scheduled to launch in 2027, will dramatically improve detection
                capabilities, particularly for asteroids in orbits that keep them in daylight skies where ground-based telescopes struggle
                to observe them. Combined with continued advances in deflection technology demonstrated by missions like DART, humanity is
                developing robust capabilities to protect Earth from asteroid impacts—transforming what was once an inevitable cosmic threat
                into a manageable engineering challenge.
              </p>
            </div>
          </div>
        </section>

        {/* Asteroids Grid */}
        {asteroids.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {asteroids.map((asteroid) => (
              <AsteroidCard key={asteroid.id} asteroid={asteroid} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <i className="fa-solid fa-meteor text-gray-600 text-6xl mb-4"></i>
            <p className="text-gray-400 text-lg">No asteroids approaching Earth in the next 7 days</p>
            <p className="text-gray-500 text-sm mt-2">Check back later for updates</p>
          </div>
        )}

        {/* Data Source Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">
              Data provided by{' '}
              <a
                href="https://api.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                NASA JPL NeoWs API
              </a>
            </p>
            <p className="text-xs">
              Updates hourly • LD = Lunar Distance (384,400 km) • 1 AU = 149,597,871 km
            </p>
          </div>
        </div>
      </main>

      {/* Amazon Affiliate Banners - All 4 products in random order */}
      {shuffledProducts.map((product) => (
        <AmazonAffiliateBanner key={product.asin} product={product} />
      ))}

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 - Spaceflight Tracker
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-gray-500 hover:text-gray-300 transition-colors">About</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
