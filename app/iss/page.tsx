import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ISSMapClient from '@/components/ISSMapClient';
import AmazonAffiliateBanner from '@/components/AmazonAffiliateBanner';
import { getShuffledProducts } from '@/data/amazonProducts';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ISS Live - International Space Station Real-Time Tracking',
  description: 'Track the International Space Station (ISS) in real-time. See current position, altitude, velocity, and crew members. Live orbital tracking map updated every 5 seconds.',
  keywords: ['ISS tracking', 'International Space Station', 'ISS live', 'space station tracker', 'ISS position', 'ISS location', 'satellite tracking'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/iss',
  },
  openGraph: {
    title: 'ISS Live - International Space Station Real-Time Tracking',
    description: 'Track the International Space Station in real-time with live position updates, orbital path, and crew information.',
    url: 'https://www.spaceflight-tracker.com/iss',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISS Live - Track the International Space Station',
    description: 'Real-time ISS tracking with live position, velocity, and crew data.',
  },
};

export default function ISSPage() {
  // Shuffle Amazon products for random banner order
  const shuffledProducts = getShuffledProducts();

  return (
    <div className="relative w-full">
      {/* Fixed Navigation Header */}
      <Navigation currentPage="iss" variant="compact" />

      {/* Fullscreen Map */}
      <div className="h-screen w-full pt-[60px]">
        <ISSMapClient />
      </div>

      {/* Educational Content Section - Below the Map */}
      <div className="bg-gray-900">
        <main className="container mx-auto px-4 py-12">
          <section className="mb-12 max-w-7xl mx-auto">
            {/* ISS Overview */}
            <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <i className="fa-solid fa-space-station text-blue-400"></i>
                The International Space Station: Humanity's Orbital Laboratory
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The International Space Station (ISS) is the largest human-made structure in space and one of the most ambitious
                  international scientific collaborations in history. Orbiting Earth at an altitude of approximately 400 kilometers
                  (250 miles), this habitable artificial satellite travels at 28,000 kilometers per hour (17,500 mph), completing
                  one orbit around our planet every 90 minutes. This means the astronauts aboard witness 16 sunrises and sunsets
                  every 24 hours as they circle the globe.
                </p>

                <p>
                  Spanning the size of a football field with its solar arrays fully extended, the ISS measures 109 meters (358 feet)
                  across and weighs approximately 420,000 kilograms (925,000 pounds). The station's pressurized volume is roughly
                  equivalent to a Boeing 747, providing about 388 cubic meters (13,696 cubic feet) of living and working space for
                  its international crew. Since the first module launched in 1998, the ISS has been continuously occupied since
                  November 2, 2000—making it the longest continuous human presence in space at over 25 years.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Construction and International Cooperation</h3>
                <p>
                  The ISS represents unprecedented international cooperation in space exploration, with five space agencies
                  collaborating on its construction, operation, and scientific program: NASA (United States), Roscosmos (Russia),
                  JAXA (Japan), ESA (European Space Agency representing 22 countries), and CSA (Canadian Space Agency). Assembly
                  required more than 40 missions and took over a decade, with modules, components, and systems launched incrementally
                  and assembled in orbit by spacewalking astronauts and robotic arms.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Russian Segment</h4>
                    <p className="text-sm text-gray-400">
                      Includes Zvezda (living quarters), Zarya (cargo and propulsion), Nauka (multipurpose laboratory module),
                      and several docking ports. Provides life support, propulsion, and crew accommodations.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">US Segment</h4>
                    <p className="text-sm text-gray-400">
                      Features Destiny laboratory, Quest airlock, Tranquility node with Cupola observation module, and commercial
                      docking ports. Houses primary research facilities and exercise equipment.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">International Modules</h4>
                    <p className="text-sm text-gray-400">
                      Includes Columbus laboratory (ESA), Kibo laboratory (JAXA) with external platform, and Canadarm2 robotic
                      arm (CSA). Each contributes unique scientific capabilities.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Life Aboard the Space Station</h3>
                <p>
                  Living in microgravity presents unique challenges and requires extensive adaptation. Astronauts' typical day
                  begins at 6:00 AM GMT and includes 6.5 hours of scheduled work time, 2.5 hours of physical exercise (mandatory
                  to prevent muscle atrophy and bone density loss), time for meals and personal hygiene, and scientific research.
                  The crew must exercise rigorously using specialized equipment—the Advanced Resistive Exercise Device (ARED) and
                  the Treadmill with Vibration Isolation Stabilization (TVIS)—to counteract the effects of prolonged weightlessness,
                  which can cause astronauts to lose up to 1% of bone mass per month without countermeasures.
                </p>

                <p>
                  Water and oxygen are precious resources continuously recycled through the Environmental Control and Life Support
                  System (ECLSS). The Water Recovery System reclaims about 90% of all water-based liquids, including crew urine and
                  sweat, purifying them back into drinking water—a process astronauts joke about as "yesterday's coffee becoming
                  tomorrow's coffee." The Oxygen Generation System electrolyzes water to produce breathable oxygen, while carbon
                  dioxide scrubbers remove exhaled CO2 from the atmosphere. Despite these systems, regular cargo resupply missions
                  from SpaceX Dragon, Northrop Grumman Cygnus, and Russian Progress vehicles remain essential, delivering fresh
                  food, equipment, experiments, and spare parts every few months.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Scientific Research and Discoveries</h3>
                <p>
                  The ISS serves as a unique microgravity and space environment research laboratory where scientists conduct
                  experiments impossible to replicate on Earth. Research aboard the station has led to breakthroughs in multiple
                  fields, with over 3,000 scientific investigations conducted since operations began, involving researchers from
                  more than 100 countries. The microgravity environment allows protein crystals to grow larger and more perfect
                  than on Earth, enabling detailed structural analysis that has accelerated drug development for diseases including
                  cancer, muscular dystrophy, and Alzheimer's.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Human Health Research</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Studies examine how long-duration spaceflight affects the human body, including bone density loss, muscle
                      atrophy, vision changes, immune system suppression, and cardiovascular adaptation. This research is critical
                      for planning future missions to Mars and beyond.
                    </p>
                    <p className="text-sm text-gray-400">
                      Notable experiments include the Twins Study, which compared astronaut Scott Kelly (who spent nearly a year
                      in space) with his identical twin Mark Kelly (who remained on Earth), revealing insights into genetic
                      expression changes during spaceflight.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Materials Science</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Manufacturing processes in microgravity produce materials with unique properties impossible to achieve on
                      Earth. Experiments have created stronger metal alloys, more uniform semiconductor crystals, and innovative
                      optical fibers by eliminating convection and sedimentation effects.
                    </p>
                    <p className="text-sm text-gray-400">
                      The Materials International Space Station Experiment (MISSE) exposes samples to the harsh space environment
                      to test durability for future spacecraft materials.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Earth Observation</h4>
                    <p className="text-sm text-gray-400">
                      The ISS provides a unique vantage point for studying Earth's atmosphere, oceans, and land surfaces. Instruments
                      monitor climate change, track hurricanes and severe weather, study lightning phenomena, and capture
                      high-resolution imagery for disaster response. The ECOSTRESS instrument measures plant water use and heat
                      stress, while GEDI creates 3D maps of forests to understand carbon storage.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Technology Demonstrations</h4>
                    <p className="text-sm text-gray-400">
                      The ISS serves as a testbed for technologies needed for deep space exploration, including advanced life
                      support systems, robotic servicing capabilities, 3D printing in space, and experimental propulsion systems.
                      Commercial companies test new technologies and manufacturing processes in the unique environment.
                    </p>
                  </div>
                </div>

                <p className="mt-4">
                  Beyond purely scientific research, the ISS has become a platform for commercial development and space industry
                  growth. NASA has opened the station to commercial opportunities, including pharmaceutical manufacturing, materials
                  production, and even space tourism through partnerships with companies like Axiom Space. These commercial activities
                  help offset operational costs while demonstrating the economic potential of low Earth orbit.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">The Future of the ISS</h3>
                <p>
                  While the ISS is currently approved for operation through at least 2030, discussions about its eventual retirement
                  and replacement have begun. NASA is supporting development of commercial space stations that could succeed the ISS,
                  with companies like Axiom Space planning to attach commercial modules to the existing station before eventually
                  separating to form independent facilities. The lessons learned from over three decades of ISS operations—from
                  international cooperation frameworks to life support technologies to long-duration spaceflight effects on human
                  health—will inform the design of future space stations and support humanity's expansion into deep space, including
                  planned missions to the Moon through the Artemis program and eventual crewed missions to Mars.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Amazon Affiliate Banners - All 4 products in random order */}
        {shuffledProducts.map((product) => (
          <AmazonAffiliateBanner key={product.asin} product={product} />
        ))}

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-gray-900">
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
    </div>
  );
}
