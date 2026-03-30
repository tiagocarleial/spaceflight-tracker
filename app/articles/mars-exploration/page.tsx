import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Future of Mars Exploration | Spaceflight Tracker',
  description: 'Comprehensive guide to Mars exploration—current missions, future plans, SpaceX Starship, NASA Artemis connection, challenges of human Mars missions.',
  keywords: ['Mars exploration', 'Mars missions', 'SpaceX Mars', 'Starship', 'Mars colonization', 'NASA Mars'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/mars-exploration',
  },
};

export default function MarsExplorationArticle() {
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
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">Launches</button>
              </Link>
              <Link href="/articles">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">Articles</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link href="/articles" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 mb-4">
            <i className="fa-solid fa-arrow-left"></i>
            Back to Articles
          </Link>
          <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
            <span className="text-red-400 text-sm font-medium">Mars Exploration</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The Future of Mars Exploration: Humanity's Next Giant Leap</h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>15 min read</span>
            <span>•</span>
            <span>Updated March 2026</span>
          </div>
        </div>

        <article className="prose prose-invert max-w-none">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 leading-relaxed m-0">
              Mars has captivated human imagination for centuries. Today, we stand on the brink of making interplanetary travel a reality.
              This comprehensive guide explores current Mars missions, ambitious future plans from NASA and SpaceX, the technological
              challenges we must overcome, and what it will take to establish a permanent human presence on the Red Planet.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              Current Mars Missions
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Multiple robotic missions currently operate on or around Mars, paving the way for human exploration. NASA's Perseverance
                rover, which landed in February 2021, searches for signs of ancient microbial life and collects samples for future return
                to Earth. The Ingenuity helicopter demonstrated powered flight in Mars' thin atmosphere—the first on another planet.
              </p>
              <p className="text-gray-300 leading-relaxed">
                China's Zhurong rover successfully landed in 2021, making China the second nation to successfully operate a rover on Mars.
                The UAE's Hope orbiter studies Martian atmosphere and weather patterns. NASA's InSight lander studied Mars' interior until
                late 2022, while the Curiosity rover continues exploring Gale Crater since 2012.
              </p>
              <p className="text-gray-300 leading-relaxed">
                These missions provide crucial data about Mars' geology, climate, water ice deposits, and radiation environment—all
                essential for planning human missions.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              NASA's Mars Program
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Mars Sample Return</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  NASA and ESA are collaborating on an ambitious Mars Sample Return mission to bring Perseverance's collected samples
                  back to Earth. This multi-mission campaign involves a fetch rover, a Mars Ascent Vehicle to launch samples into Mars
                  orbit, and a spacecraft to capture and return them to Earth by the early 2030s. These pristine Martian samples will
                  undergo detailed laboratory analysis impossible with rover instruments.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Moon to Mars: The Artemis Connection</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  NASA's Artemis program isn't just about returning to the Moon—it's a proving ground for Mars technologies. The
                  Lunar Gateway space station will test deep-space habitat systems, life support, and radiation protection. Long-duration
                  lunar surface missions will validate Mars surface systems. Artemis is developing the Space Launch System (SLS) and
                  advanced spacesuits that will evolve for Mars use.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The experience gained from sustaining humans beyond low Earth orbit for extended periods is directly applicable to
                  Mars missions, where crews will be 6-9 months from Earth and unable to abort back home.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              SpaceX's Mars Ambitions
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                SpaceX founder Elon Musk has made Mars colonization the company's ultimate goal. The centerpiece is Starship, a fully
                reusable super-heavy-lift launch system designed to carry 100+ tons to Mars. At 120 meters tall when stacked with its
                Super Heavy booster, Starship would be the most powerful rocket ever built.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Starship uses liquid methane and liquid oxygen—propellants that can theoretically be manufactured on Mars using its
                atmosphere and water ice (a process called in-situ resource utilization or ISRU). This would enable refueling for the
                return journey, making round trips economically feasible.
              </p>
              <p className="text-gray-300 leading-relaxed">
                SpaceX plans to send uncrewed Starships to Mars first, likely in the late 2020s, to demonstrate landing capability and
                begin establishing infrastructure. Crewed missions could follow in the 2030s. Musk envisions eventually building a
                self-sustaining city on Mars with a million inhabitants, though this remains an extremely ambitious long-term goal.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Starship is currently undergoing intensive flight testing at SpaceX's Starbase facility in Texas, with orbital test
                flights demonstrating rapid progress in 2024-2026.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              The Challenges of Human Mars Missions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Journey Duration and Health Risks</h3>
                <p className="text-gray-300 leading-relaxed">
                  The trip to Mars takes 6-9 months each way with current propulsion. During this time, astronauts face prolonged
                  exposure to cosmic radiation and solar particle events, significantly increasing cancer risk. Microgravity causes
                  muscle atrophy, bone density loss, vision problems, and cardiovascular deconditioning. Psychological challenges of
                  isolation, confinement, and 20-minute communication delays with Earth add further complexity.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Entry, Descent, and Landing (EDL)</h3>
                <p className="text-gray-300 leading-relaxed">
                  Mars' thin atmosphere (less than 1% of Earth's) makes landing difficult—it's thick enough to create dangerous heating
                  during entry but too thin for parachutes alone to slow large spacecraft. The Perseverance rover massed about 1 ton;
                  crewed missions will require landing 20-50 tons or more. New technologies like supersonic retropropulsion must be
                  perfected. There's also only one chance—abort-to-orbit isn't an option.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Life Support and ISRU</h3>
                <p className="text-gray-300 leading-relaxed">
                  Crews will need air, water, food, and fuel for potentially 2+ years (including surface time and the return journey).
                  Shipping all supplies from Earth is impractical. In-situ resource utilization—producing water, oxygen, and rocket
                  propellant from Martian resources—is essential. This technology must be pre-deployed and proven reliable before
                  humans arrive. Water extraction from ice, CO2 conversion to methane and oxygen, and possibly growing food in Martian
                  greenhouses are all being developed.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Surface Hazards</h3>
                <p className="text-gray-300 leading-relaxed">
                  Mars' surface presents numerous dangers: toxic perchlorates in the soil, abrasive dust that penetrates equipment,
                  extreme temperature swings (-125°C to 20°C), global dust storms, high surface radiation (no magnetic field or thick
                  atmosphere for protection), and low air pressure (0.6% of Earth's). Habitats must protect against all these while
                  being light enough to land and robust enough to last years.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              Timeline to Mars
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                While exact timelines remain uncertain, a plausible roadmap is emerging:
              </p>
              <div className="bg-gray-900/50 rounded-lg p-4 space-y-3">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Late 2020s</h4>
                  <p className="text-gray-400 text-sm">
                    First uncrewed cargo missions arrive on Mars, pre-deploying supplies, power systems, and ISRU equipment. Mars
                    Sample Return missions launch, bringing Martian soil and rocks to Earth for analysis.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Early-to-Mid 2030s</h4>
                  <p className="text-gray-400 text-sm">
                    First crewed Mars mission launches during a favorable launch window. The crew of 4-6 astronauts spends 400-500
                    days on Mars' surface conducting exploration and establishing initial infrastructure before returning to Earth.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Late 2030s-2040s</h4>
                  <p className="text-gray-400 text-sm">
                    Regular cargo and crew missions every 26 months during optimal launch windows. Permanent base established with
                    rotating crews. Production of propellant, water, and oxygen from Mars resources operational.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Beyond 2050</h4>
                  <p className="text-gray-400 text-sm">
                    If all goes well, expansion toward self-sufficiency and a growing permanent settlement. This remains highly
                    speculative and dependent on sustained funding, technological breakthroughs, and political will.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              Why Mars?
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Mars is the most viable destination for human colonization in our solar system. It has a 24.6-hour day (similar to
                Earth's), abundant water ice, an atmosphere (though thin), and raw materials for construction and fuel production.
                Its surface area equals all of Earth's continents combined.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond scientific curiosity and the search for past or present life, Mars offers humanity a backup location—a
                safeguard against existential risks to Earth from asteroid impacts, nuclear war, climate catastrophe, or pandemics.
                While we should absolutely protect Earth, establishing a second self-sustaining branch of civilization reduces the
                risk of total human extinction.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The technological challenges of reaching Mars drive innovation with applications on Earth: advanced life support,
                renewable energy, robotics, materials science, medicine, and more. The inspiration factor—uniting humanity in a
                common goal—should not be underestimated either.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              Conclusion
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Sending humans to Mars represents one of the greatest challenges humanity has ever undertaken. The technical, financial,
                and physiological obstacles are immense. Yet, for the first time in history, we possess the fundamental knowledge and
                emerging technologies to make it possible.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether the first footprints on Mars are made in 2033 or 2045, the direction is clear: humanity is becoming an
                interplanetary species. The robots exploring Mars today are pathfinders. The infrastructure being tested on the Moon
                will enable Mars missions. And somewhere on Earth today, the first person to walk on Mars is already alive.
              </p>
            </div>
          </section>
        </article>

        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/faq" className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-colors">
              <i className="fa-solid fa-circle-question text-blue-400 text-2xl mb-2"></i>
              <h3 className="text-white font-semibold mb-1">FAQ</h3>
              <p className="text-gray-400 text-sm">Space questions answered</p>
            </Link>
            <Link href="/glossary" className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-purple-500 transition-colors">
              <i className="fa-solid fa-book text-purple-400 text-2xl mb-2"></i>
              <h3 className="text-white font-semibold mb-1">Glossary</h3>
              <p className="text-gray-400 text-sm">Space terminology</p>
            </Link>
            <Link href="/launches" className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-orange-500 transition-colors">
              <i className="fa-solid fa-rocket text-orange-400 text-2xl mb-2"></i>
              <h3 className="text-white font-semibold mb-1">Launches</h3>
              <p className="text-gray-400 text-sm">Track space launches</p>
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
              <Link href="/glossary" className="text-gray-500 hover:text-gray-300 transition-colors">Glossary</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
