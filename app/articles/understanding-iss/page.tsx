import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding the International Space Station | Spaceflight Tracker',
  description: 'Complete guide to the ISS - history, purpose, structure, and daily life aboard humanity\'s orbital laboratory. Learn about the space station orbiting Earth.',
  keywords: ['ISS', 'International Space Station', 'space station', 'orbital laboratory', 'astronaut life', 'space research'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/understanding-iss',
  },
};

export default function UnderstandingISSPage() {
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
              <Link href="/iss">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Track ISS Live
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
            <span className="text-gray-500">Understanding the ISS</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
              Space Stations
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">12 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Understanding the International Space Station
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            A comprehensive guide to humanity's orbital laboratory—how it was built, what happens aboard,
            and why it matters for the future of space exploration
          </p>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">What is the International Space Station?</h2>
              <p>
                The International Space Station (ISS) is the largest human-made structure in space—a football field-sized
                laboratory orbiting Earth at 17,500 mph (28,000 km/h) approximately 250 miles (400 km) above our planet.
                Since November 2000, the ISS has been continuously inhabited, making it humanity's longest-lasting presence
                beyond Earth.
              </p>
              <p>
                The ISS isn't owned by any single nation. It's a collaborative project between five space agencies:
                NASA (United States), Roscosmos (Russia), ESA (European Space Agency), JAXA (Japan), and CSA (Canada).
                This makes it one of the most significant examples of international cooperation in history.
              </p>
              <p>
                Weighing approximately 420,000 kg (925,000 pounds), the station is larger than a six-bedroom house and
                has more living space than a conventional five-bedroom home. It consists of multiple modules, each
                serving different purposes—from laboratories to living quarters to docking ports.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Building the ISS: A Two-Decade Project</h2>
              <p>
                Construction of the ISS began in 1998 and required more than 40 missions across 13 years to assemble.
                The first piece launched was the Russian Zarya module in November 1998, followed by the U.S. Unity node
                two weeks later. The first crew arrived in November 2000.
              </p>
              <p>
                Major milestones in ISS construction:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">1998:</strong> Zarya and Unity modules launched and connected</li>
                <li><strong className="text-white">2000:</strong> First crew (Expedition 1) arrives - continuous habitation begins</li>
                <li><strong className="text-white">2001:</strong> Destiny laboratory module added</li>
                <li><strong className="text-white">2008:</strong> Japanese Kibo laboratory installed</li>
                <li><strong className="text-white">2010:</strong> Cupola observation module added</li>
                <li><strong className="text-white">2011:</strong> Assembly largely complete with final shuttle missions</li>
                <li><strong className="text-white">2021:</strong> New Russian modules added, expansion continues</li>
              </ul>
              <p>
                The Space Shuttle played a crucial role, delivering 36 missions' worth of components. After the shuttle's
                retirement in 2011, Russian Soyuz, Progress, SpaceX Dragon, Northrop Grumman Cygnus, and other vehicles
                have continued supplying the station.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Life Aboard the ISS</h2>

              <h3 className="text-2xl font-semibold text-white mb-3">Daily Routine</h3>
              <p>
                Astronauts follow a structured schedule divided into work, exercise, meals, and sleep. A typical day includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">6:00 AM:</strong> Wake up and morning routine</li>
                <li><strong className="text-white">7:30 AM - 12:30 PM:</strong> Work period (experiments, maintenance)</li>
                <li><strong className="text-white">12:30 PM:</strong> Lunch</li>
                <li><strong className="text-white">1:00 PM - 6:00 PM:</strong> Afternoon work period</li>
                <li><strong className="text-white">6:00 PM:</strong> Dinner</li>
                <li><strong className="text-white">Evening:</strong> Exercise (mandatory 2 hours), personal time</li>
                <li><strong className="text-white">9:30 PM:</strong> Sleep preparation</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Eating in Microgravity</h3>
              <p>
                Food on the ISS is specially prepared and packaged. Crew members eat a variety of dehydrated,
                thermostabilized, and fresh foods (when available from recent cargo deliveries). Liquids are drunk from
                pouches with straws. Salt and pepper come in liquid form—regular granules would float away and could
                damage equipment or get in astronauts' eyes.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Hygiene and Bathrooms</h3>
              <p>
                With no running water, astronauts use rinse-free shampoo, edible toothpaste (no need to spit), and
                body wipes. The toilet uses airflow instead of water to direct waste. Solid waste is compressed and
                stored for disposal in cargo vehicles that burn up on reentry. Urine is recycled into drinking water
                through sophisticated filtration systems—about 90% of water aboard the ISS is recycled.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Exercise</h3>
              <p>
                Without Earth's gravity, muscles and bones deteriorate rapidly. Astronauts must exercise 2-2.5 hours
                daily using specialized equipment: treadmills (with harnesses to stay "down"), stationary bikes, and
                resistance machines. Despite this, they still lose bone density and muscle mass, which takes months to
                recover after returning to Earth.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Scientific Research on the ISS</h2>
              <p>
                The ISS is fundamentally a research laboratory. Microgravity allows experiments impossible on Earth:
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Human Health</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Studying bone density loss and muscle atrophy</li>
                <li>Cardiovascular changes in microgravity</li>
                <li>Effects of radiation exposure on human cells</li>
                <li>Protein crystal growth for drug development</li>
                <li>Preparing for long-duration Mars missions</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-4">Materials Science</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Developing new alloys and materials</li>
                <li>Manufacturing fiber optics and semiconductors</li>
                <li>Creating materials that can't form properly under gravity</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-4">Earth Science</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Monitoring climate change, hurricanes, and natural disasters</li>
                <li>Studying ocean currents and atmospheric conditions</li>
                <li>Tracking deforestation and urban development</li>
                <li>Observing auroras and atmospheric phenomena</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-4">Biology</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Growing plants in space for future long-duration missions</li>
                <li>Studying how bacteria behave in microgravity</li>
                <li>Investigating cellular and genetic changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Notable Experiments and Discoveries</h2>
              <p>
                Research aboard the ISS has led to real-world benefits:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Cancer treatment advances:</strong> Drug developments using protein crystals grown in microgravity</li>
                <li><strong className="text-white">Water purification:</strong> Technology developed for ISS now used in remote areas on Earth</li>
                <li><strong className="text-white">Robotic surgery:</strong> Techniques refined for remote operations</li>
                <li><strong className="text-white">Materials science:</strong> New alloys and manufacturing techniques</li>
                <li><strong className="text-white">Salmonella vaccine:</strong> Developed using ISS research</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Spacewalks (EVAs)</h2>
              <p>
                Extravehicular Activities (EVAs), or spacewalks, are performed regularly for maintenance, repairs, and
                installations. Astronauts wear specialized suits providing oxygen, temperature control, and protection
                from radiation and micrometeoroids.
              </p>
              <p>
                A typical spacewalk lasts 6-8 hours and requires extensive preparation. Astronauts pre-breathe pure
                oxygen to prevent decompression sickness (the "bends"). They work in pairs, tethered to the station,
                using specialized tools designed for use in bulky gloves.
              </p>
              <p>
                As of 2026, over 270 spacewalks have been conducted at the ISS, totaling more than 1,700 hours of EVA time.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Future of the ISS</h2>
              <p>
                The ISS is currently funded through at least 2030, with discussions about extending operations beyond that.
                However, the station is aging, and some components are reaching the end of their design life.
              </p>
              <p>
                Several companies are developing commercial space stations intended to eventually replace the ISS:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Axiom Station:</strong> Commercial modules initially attached to ISS, later independent</li>
                <li><strong className="text-white">Orbital Reef:</strong> Blue Origin and Sierra Space collaboration</li>
                <li><strong className="text-white">Starlab:</strong> Nanoracks commercial station</li>
              </ul>
              <p>
                When the ISS is eventually retired, it will be safely deorbited into a remote ocean area. Until then,
                it continues serving as a crucial stepping stone toward future deep space exploration, including missions
                to the Moon and Mars.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Why the ISS Matters</h2>
              <p>
                Beyond scientific research, the ISS demonstrates that international cooperation can achieve extraordinary
                things. Despite political tensions on Earth, the ISS partnership between the United States, Russia,
                Europe, Japan, and Canada has remained strong for over 25 years.
              </p>
              <p>
                The station has hosted over 270 people from 21 countries. It has taught us how to live and work in space
                long-term, lessons essential for future missions to the Moon, Mars, and beyond.
              </p>
              <p>
                Every sunrise and sunset the ISS witnesses (16 per day) is a reminder of humanity's capability to push
                boundaries and explore the unknown—together.
              </p>
            </section>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Track the ISS Right Now</h3>
              <p className="mb-4">
                See exactly where the International Space Station is at this moment. Our live tracker shows the ISS
                position updated every 5 seconds, along with altitude, velocity, and orbital path.
              </p>
              <Link href="/iss">
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                  Track ISS Live
                </button>
              </Link>
            </div>

          </div>
        </article>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Continue Learning</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/how-rockets-work" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-purple-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">How Do Rockets Work?</h4>
              <p className="text-gray-400 text-sm">Learn the physics behind rocket propulsion</p>
            </Link>
            <Link href="/faq" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-purple-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Space FAQ</h4>
              <p className="text-gray-400 text-sm">Answers to common space questions</p>
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
