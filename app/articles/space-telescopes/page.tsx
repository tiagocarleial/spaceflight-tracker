import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Space Telescopes: Windows to the Universe | Spaceflight Tracker',
  description: 'Explore the technology and discoveries of space telescopes from Hubble to James Webb. Learn how they work and what they reveal about the cosmos.',
  keywords: ['space telescopes', 'Hubble telescope', 'James Webb', 'astronomy', 'telescope technology'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/space-telescopes',
  },
};

export default function SpaceTelescopesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
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
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-gray-300">Articles</Link>
            <span>/</span>
            <span className="text-gray-500">Space Telescopes</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              Technology
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">12 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Space Telescopes: Windows to the Universe
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Discover how space telescopes overcome Earth's atmosphere to reveal the cosmos in unprecedented detail, from distant galaxies to nearby exoplanets.
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Why Send Telescopes to Space?</h2>
              <p>
                Earth's atmosphere, while essential for life, is terrible for astronomy. It distorts starlight through turbulence
                (causing the "twinkling" we see), absorbs most wavelengths of electromagnetic radiation, and emits its own infrared
                light that interferes with observations. Ground-based telescopes, no matter how large, face these fundamental limitations.
              </p>
              <p>
                Space telescopes orbit above the atmosphere, providing crystal-clear views across wavelengths impossible to observe
                from Earth's surface. They can detect ultraviolet, X-rays, and infrared light that never reaches the ground. This
                capability has revolutionized astronomy, revealing phenomena from the birth of the universe to the formation of planets
                around distant stars.
              </p>
              <p>
                The trade-off is complexity and cost. Space telescopes must operate autonomously millions of kilometers from Earth,
                survive launch stresses and space radiation, and function for years or decades with limited possibility for repairs.
                Despite these challenges, the scientific return has proven invaluable.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Hubble Space Telescope Legacy</h2>
              <p>
                Launched in 1990, the Hubble Space Telescope transformed our understanding of the universe. Its 2.4-meter mirror,
                though smaller than many ground telescopes, provides unparalleled clarity by observing from 547 km above Earth.
                Hubble orbits every 97 minutes, completing over 175,000 orbits to date.
              </p>
              <p>
                Hubble's early years were troubled—a manufacturing error in its primary mirror caused blurry images. The 1993 Space
                Shuttle servicing mission installed corrective optics, restoring full capability. This mission demonstrated the value
                of designing satellites for repair and upgrade, a lesson that influenced future spacecraft design.
              </p>
              <p>
                Over three decades, Hubble has made over 1.5 million observations, contributing to more than 19,000 scientific papers.
                Key discoveries include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Precise measurement of the universe's expansion rate (Hubble constant)</li>
                <li>Evidence that supermassive black holes exist in most galaxy centers</li>
                <li>Detailed images of distant galaxies formed when the universe was young</li>
                <li>Detection and characterization of exoplanet atmospheres</li>
                <li>Observations of dark energy accelerating cosmic expansion</li>
              </ul>
              <p>
                Hubble images have also captured public imagination, with iconic views like the "Pillars of Creation" in the Eagle
                Nebula and the "Ultra Deep Field" showing thousands of galaxies in a tiny patch of sky.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">James Webb Space Telescope: The New Era</h2>
              <p>
                Launched on December 25, 2021, the James Webb Space Telescope (JWST) represents the most powerful space observatory
                ever built. With a 6.5-meter segmented gold-plated mirror—nearly three times Hubble's diameter—Webb collects far
                more light and sees much fainter objects.
              </p>
              <p>
                Webb orbits the Sun at the L2 Lagrange point, 1.5 million km from Earth—about four times farther than the Moon.
                This location provides gravitational stability and keeps the Sun, Earth, and Moon in the same direction, allowing
                Webb's massive sunshield to block their heat and light simultaneously.
              </p>
              <p>
                Operating primarily in infrared wavelengths, Webb detects heat signatures from objects too cool, distant, or obscured
                to see in visible light. Its instruments must be cooled to -233°C (40 Kelvin) to prevent their own heat from
                overwhelming faint cosmic signals. A tennis-court-sized sunshield maintains this temperature by blocking sunlight.
              </p>
              <p>
                Webb's early discoveries have exceeded expectations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Galaxies that formed just 200-400 million years after the Big Bang</li>
                <li>Detailed chemical composition of exoplanet atmospheres, including CO2, water, and methane</li>
                <li>Unprecedented views of star formation within dusty nebulae</li>
                <li>Detailed structure of distant galaxies showing evolution over cosmic time</li>
                <li>Chemical signatures that may indicate biological processes on distant worlds</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Specialized Space Observatories</h2>

              <h3 className="text-2xl font-semibold text-white mb-3">Chandra X-ray Observatory</h3>
              <p>
                Launched in 1999, Chandra observes X-rays from extremely hot regions of the universe: supernova remnants, clusters
                of galaxies, matter falling into black holes, and neutron stars. X-rays cannot penetrate Earth's atmosphere, making
                space observation essential. Chandra's resolution is comparable to reading a newspaper from half a mile away.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Spitzer Space Telescope</h3>
              <p>
                Spitzer (2003-2020) was NASA's infrared observatory before Webb. Operating at wavelengths between 3-180 micrometers,
                Spitzer discovered thousands of exoplanets, revealed hidden star-forming regions, and detected light from some of
                the earliest galaxies. It operated successfully for 16 years before running out of coolant and being retired.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Kepler and TESS</h3>
              <p>
                The Kepler mission (2009-2018) revolutionized exoplanet science by continuously monitoring 150,000 stars,
                discovering over 2,700 confirmed planets. Its successor, TESS (Transiting Exoplanet Survey Satellite), launched
                in 2018, surveys the entire sky searching for planets around the nearest and brightest stars, making them ideal
                targets for detailed study by Webb and future missions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">How Space Telescopes Work</h2>

              <h3 className="text-2xl font-semibold text-white mb-3">Optical Design</h3>
              <p>
                Most space telescopes use reflecting designs with curved mirrors that focus light. The primary mirror collects
                light and reflects it to a secondary mirror, which then directs it to scientific instruments. This design avoids
                chromatic aberration (color distortion) that affects lens-based telescopes.
              </p>
              <p>
                Mirror surfaces must be extraordinarily smooth—Hubble's mirror has imperfections smaller than 1/10 the wavelength
                of light. Webb's mirror segments align to within 50 nanometers (thousandths of a human hair width) using precise
                mechanical actuators.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Pointing and Stabilization</h3>
              <p>
                To capture detailed images requiring hours of exposure, telescopes must point extremely accurately and remain
                perfectly still. Hubble can lock onto a target with precision equivalent to shining a laser on a coin 320 km away.
                Reaction wheels spin up and slow down to adjust orientation without using fuel.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Scientific Instruments</h3>
              <p>
                Space telescopes carry multiple specialized instruments:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Cameras:</strong> Capture images across different wavelengths</li>
                <li><strong className="text-white">Spectrographs:</strong> Split light into component wavelengths to determine chemical composition and motion</li>
                <li><strong className="text-white">Coronagraphs:</strong> Block bright star light to reveal faint planets or debris disks</li>
                <li><strong className="text-white">Polarimeters:</strong> Measure light polarization to study magnetic fields and dust</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Future Space Telescopes</h2>
              <p>
                The Nancy Grace Roman Space Telescope, scheduled for launch in 2027, will have a field of view 100 times larger
                than Hubble while maintaining similar image quality. Roman will conduct large-scale surveys to study dark energy,
                search for exoplanets, and map the structure of our galaxy.
              </p>
              <p>
                ESA's Euclid mission (launched 2023) maps the geometry of the universe by observing billions of galaxies, studying
                how dark matter and dark energy shaped cosmic structure. PLATO (planned 2026) will search for Earth-like planets
                in the habitable zones of Sun-like stars.
              </p>
              <p>
                Concepts for future observatories include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Larger segmented mirrors (10-15 meters) for even greater light-gathering power</li>
                <li>Telescopes specialized for detecting biosignatures on exoplanets</li>
                <li>X-ray observatories more powerful than Chandra</li>
                <li>Gravitational wave detectors in space (LISA)</li>
                <li>Far-infrared observatories cooled to near absolute zero</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Impact on Our Understanding</h2>
              <p>
                Space telescopes have fundamentally transformed astronomy from a science of observation to one of precision
                measurement and discovery. They've revealed that the universe is 13.8 billion years old, accelerating in its
                expansion, and filled with hundreds of billions of galaxies each containing hundreds of billions of stars.
              </p>
              <p>
                Perhaps most importantly, they've shown that planets are common—most stars have planetary systems, and many have
                worlds in habitable zones where liquid water could exist. This discovery has profound implications for the
                possibility of life beyond Earth and our place in the cosmos.
              </p>
              <p>
                As technology advances and new observatories launch, we continue to push the boundaries of what we can see and
                understand about the universe, answering age-old questions while discovering phenomena we never imagined existed.
              </p>
            </section>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Explore Current Space Missions</h3>
              <p className="mb-4">
                Learn about active telescope missions and upcoming launches that will expand our view of the universe.
              </p>
              <Link href="/launches">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  View Mission Schedule
                </button>
              </Link>
            </div>

          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/history-space-exploration" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">History of Space Exploration</h4>
              <p className="text-gray-400 text-sm">From Sputnik to modern space missions</p>
            </Link>
            <Link href="/events" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Astronomical Events</h4>
              <p className="text-gray-400 text-sm">Track celestial phenomena you can observe</p>
            </Link>
          </div>
        </div>
      </main>

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
