import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Space Tourism: The New Era | Spaceflight Tracker',
  description: 'Everything you need to know about commercial space tourism—current providers, costs, safety, training, and the future of civilian spaceflight.',
  keywords: ['space tourism', 'commercial spaceflight', 'Blue Origin', 'Virgin Galactic', 'SpaceX', 'space travel costs'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/space-tourism',
  },
};

export default function SpaceTourismArticle() {
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
              <Link href="/articles">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Articles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <Link href="/articles" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 mb-4">
            <i className="fa-solid fa-arrow-left"></i>
            Back to Articles
          </Link>

          <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
            <span className="text-green-400 text-sm font-medium">Space Tourism</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Commercial Space Tourism: The New Era of Civilian Spaceflight
          </h1>

          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>14 min read</span>
            <span>•</span>
            <span>Updated March 2026</span>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 leading-relaxed m-0">
              For decades, space travel was the exclusive domain of government astronauts and highly trained professionals.
              Today, commercial space tourism is transforming this landscape, offering civilians the opportunity to experience
              spaceflight firsthand. This comprehensive guide explores the current state of space tourism, the companies making
              it possible, what to expect, costs, safety considerations, and what the future holds.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              The Dawn of Space Tourism
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Space tourism isn't entirely new. Between 2001 and 2009, seven wealthy individuals paid Russia's space agency
                to visit the International Space Station aboard Soyuz spacecraft, with tickets costing $20-40 million. However,
                these were isolated cases rather than a sustainable industry.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The modern era of space tourism began in earnest in 2021, when Virgin Galactic, Blue Origin, and SpaceX all
                successfully flew civilian passengers to space. This marked a turning point: space travel was no longer just
                for professional astronauts but was becoming accessible to private citizens willing to pay the price.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, multiple companies offer—or plan to offer—various types of space experiences, from brief suborbital hops
                to the edge of space, to multi-day orbital stays, and even future trips around the Moon.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              Current Space Tourism Providers
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Blue Origin (New Shepard)</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Blue Origin's New Shepard system offers suborbital flights that cross the Kármán line (100 km altitude),
                  providing approximately 10-11 minutes of total flight time with 3-4 minutes of weightlessness. The fully
                  automated capsule seats six passengers with large windows for viewing Earth's curvature.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Flight Duration:</span> ~11 minutes total</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Max Altitude:</span> ~107 km (66 miles)</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Passengers:</span> 6 per flight</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Est. Cost:</span> $200,000-300,000 per seat</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Status:</span> Operational since 2021</p>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Virgin Galactic (VSS Unity)</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Virgin Galactic uses a unique air-launch system: a carrier aircraft lifts the SpaceShipTwo vehicle to 50,000
                  feet, where it releases and fires its rocket motor to reach space. The spaceplane crosses 80 km (the U.S.
                  definition of space) and provides several minutes of weightlessness before gliding back to a runway landing.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Flight Duration:</span> ~90 minutes total</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Max Altitude:</span> ~86 km (53 miles)</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Passengers:</span> 4-6 per flight</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Cost:</span> $450,000 per seat</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Status:</span> Commercial operations ongoing</p>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">SpaceX (Crew Dragon)</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  SpaceX offers orbital tourism missions using its Crew Dragon spacecraft and Falcon 9 rocket. These multi-day
                  missions orbit Earth at altitudes of 350-575 km, far higher than suborbital flights. Passengers experience
                  continuous weightlessness and see Earth from perspectives similar to ISS astronauts.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Mission Duration:</span> 3-10 days</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Orbit Altitude:</span> 350-575 km</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Passengers:</span> Up to 4 per mission</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Est. Cost:</span> $50-60 million per seat</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Status:</span> Completed Inspiration4 (2021), future missions planned</p>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Axiom Space (ISS Missions)</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Axiom Space arranges commercial missions to the International Space Station using SpaceX Crew Dragon. Passengers
                  undergo extensive training and spend 8-10 days aboard the ISS, conducting research and experiencing life as
                  orbital astronauts alongside professional crews.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Mission Duration:</span> 8-14 days</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Location:</span> International Space Station</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Passengers:</span> Typically 3-4 per mission</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Cost:</span> $55-70 million per seat</p>
                  <p className="text-gray-400"><span className="text-blue-400 font-semibold">Status:</span> Multiple missions completed, more planned</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              Training and Preparation
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                The amount of training required depends on the type of mission. Suborbital passengers typically undergo 2-3 days
                of training covering safety procedures, what to expect during flight, and how to move in microgravity. This includes
                medical screenings to ensure fitness for spaceflight.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Orbital missions require significantly more extensive preparation—often several months of training. This includes
                spacecraft systems familiarization, emergency procedures, spacewalk preparation (if applicable), scientific
                experiment training, Russian language lessons (for ISS missions), and conditioning for the physical demands of
                launch and reentry.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Training typically includes parabolic flights (the "vomit comet") to experience brief periods of weightlessness,
                centrifuge training to prepare for launch g-forces, and extensive simulator time. Medical requirements are
                stringent but less restrictive than for professional astronauts—many people with well-managed health conditions
                can qualify.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              Safety Considerations
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Safety is the highest priority for all commercial space tourism providers. All vehicles undergo rigorous testing,
                and most have completed numerous uncrewed and crewed test flights before carrying paying passengers. However,
                spaceflight inherently carries risks that must be acknowledged.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Modern space tourism vehicles include multiple redundant safety systems. SpaceX's Crew Dragon features a launch
                abort system capable of separating the capsule from the rocket in an emergency. Blue Origin's New Shepard has
                an abort motor to pull the capsule away from a failing booster. Virgin Galactic's SpaceShipTwo can detach from
                the carrier aircraft if needed.
              </p>
              <p className="text-gray-300 leading-relaxed">
                All passengers sign comprehensive waivers acknowledging the risks. The industry is working with regulators to
                establish safety standards, though current regulations are still evolving. Despite the inherent dangers, the
                safety record of modern commercial spaceflight has been generally strong, with companies prioritizing passenger
                safety above schedule pressure.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              The Experience: What to Expect
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Suborbital Flights</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Suborbital passengers experience a rapid ascent, reaching maximum g-forces of around 3-4 times Earth gravity.
                The rocket shuts down at apogee, beginning the weightless phase. During these precious minutes, passengers float
                freely in the cabin, perform somersaults, and gaze at Earth's curvature against the blackness of space through
                large windows. The return begins with gradually increasing g-forces as the vehicle reenters the atmosphere.
              </p>

              <h3 className="text-xl font-semibold text-blue-400 mb-2">Orbital Missions</h3>
              <p className="text-gray-300 leading-relaxed">
                Orbital passengers experience the full intensity of a rocket launch, with forces reaching 3-4 g during ascent.
                Once in orbit, they have days to adapt to weightlessness, conduct experiments, photograph Earth, and communicate
                with people on the ground. Seeing 16 sunrises and sunsets per day, watching thunderstorms from above, and viewing
                entire continents in a single glance creates profound psychological impacts reported by most space travelers.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              The Future of Space Tourism
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                The space tourism industry is still in its infancy but growing rapidly. Several developments promise to expand
                access and reduce costs in the coming years:
              </p>

              <div className="bg-gray-900/50 rounded-lg p-4 space-y-3">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Orbital Hotels</h4>
                  <p className="text-gray-400 text-sm">
                    Companies like Orbital Assembly Corporation and Axiom Space are developing commercial space stations that
                    will serve as orbital hotels, offering week-long stays with artificial gravity, luxury accommodations, and
                    unprecedented Earth views.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Lunar Tourism</h4>
                  <p className="text-gray-400 text-sm">
                    SpaceX's Starship is being developed to carry civilians around the Moon. Japanese billionaire Yusaku Maezawa
                    has booked the dearMoon mission, planning to take artists on a week-long circumlunar journey.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Increased Competition</h4>
                  <p className="text-gray-400 text-sm">
                    More companies entering the market will drive innovation and cost reduction. Reusable rocket technology is
                    already lowering launch costs significantly, and this trend will continue.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Point-to-Point Travel</h4>
                  <p className="text-gray-400 text-sm">
                    Long-term visions include using rockets for ultra-fast point-to-point Earth transport—imagine traveling from
                    New York to Tokyo in under an hour via suborbital flight.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              Environmental Impact
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Space tourism's environmental impact is a growing concern. Rocket launches emit greenhouse gases and other
                pollutants, and at scale, could impact the upper atmosphere and ozone layer. However, current launch rates
                are relatively low compared to aviation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The industry is working on greener propellants and more efficient engines. SpaceX's Starship uses methane, which
                could eventually be produced using renewable energy and atmospheric CO2 capture. Some argue that the technological
                advances driven by space tourism—including satellite-based climate monitoring and renewable energy research in
                space—may offset the environmental costs.
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
                Commercial space tourism represents humanity's transition from space exploration as an exclusively governmental
                endeavor to one accessible to private citizens. While currently limited to the wealthy, history suggests that
                prices will decrease as technology matures and competition increases—just as happened with aviation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether driven by scientific curiosity, the desire for adventure, or the pursuit of the Overview Effect—the
                cognitive shift reported by astronauts viewing Earth from space—space tourism is transforming our relationship
                with the final frontier. As more people experience spaceflight firsthand, it may fundamentally change how humanity
                perceives our place in the cosmos.
              </p>
            </div>
          </section>
        </article>

        {/* Related Resources */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/faq" className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-colors">
              <i className="fa-solid fa-circle-question text-blue-400 text-2xl mb-2"></i>
              <h3 className="text-white font-semibold mb-1">FAQ</h3>
              <p className="text-gray-400 text-sm">Common space questions answered</p>
            </Link>

            <Link href="/glossary" className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-purple-500 transition-colors">
              <i className="fa-solid fa-book text-purple-400 text-2xl mb-2"></i>
              <h3 className="text-white font-semibold mb-1">Glossary</h3>
              <p className="text-gray-400 text-sm">Space terminology explained</p>
            </Link>

            <Link href="/launches" className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-orange-500 transition-colors">
              <i className="fa-solid fa-rocket text-orange-400 text-2xl mb-2"></i>
              <h3 className="text-white font-semibold mb-1">Launch Tracker</h3>
              <p className="text-gray-400 text-sm">Track upcoming launches</p>
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
