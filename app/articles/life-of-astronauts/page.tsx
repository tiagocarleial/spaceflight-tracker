import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Life of Astronauts: Training, Missions, and Living in Space | Spaceflight Tracker',
  description: 'Discover what it takes to become an astronaut, the rigorous training process, and what daily life is like living aboard the International Space Station.',
  keywords: ['astronaut training', 'life in space', 'ISS daily life', 'become an astronaut', 'space station'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/life-of-astronauts',
  },
};

export default function LifeOfAstronautsPage() {
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
            <span className="text-gray-500">Life of Astronauts</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
              Careers
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">14 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Life of Astronauts: Training, Missions, and Living in Space
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            An in-depth look at what it takes to become an astronaut, the demanding training process, and the realities of living and working aboard the International Space Station.
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Becoming an Astronaut: Selection Process</h2>
              <p>
                Astronaut selection is extraordinarily competitive. NASA's 2021 selection received over 12,000 applications for just
                10 positions—acceptance rates lower than most Ivy League universities. International space agencies have similar
                competition levels, with ESA's 2022 selection receiving over 22,500 applications for 4-6 positions.
              </p>
              <p>
                Basic requirements for NASA astronaut candidates include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>U.S. citizenship (for NASA; other agencies have different nationality requirements)</li>
                <li>Master's degree in STEM field (engineering, biological/physical science, computer science, mathematics)</li>
                <li>Minimum 2 years related professional experience OR 1,000 hours pilot-in-command time in jet aircraft</li>
                <li>Ability to pass NASA long-duration flight astronaut physical examination</li>
              </ul>
              <p>
                However, meeting minimum requirements doesn't guarantee selection. Most selected candidates have exceptional
                qualifications: advanced degrees (often PhDs or MD/PhDs), years of relevant experience, military test pilot
                backgrounds, or unique expertise in robotics, medicine, or engineering. Speaking multiple languages, particularly
                Russian, is highly valued for ISS operations.
              </p>
              <p>
                The selection process spans 18 months and includes medical examinations, psychological evaluations, interviews,
                team exercises, and assessments of technical knowledge and decision-making under pressure. Evaluators seek candidates
                who combine technical excellence with strong teamwork, communication, and adaptability.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Training: Preparation for the Extreme</h2>
              <p>
                After selection, astronaut candidates undergo approximately two years of basic training before becoming eligible
                for flight assignments. This training is intense, comprehensive, and continues throughout an astronaut's career.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Academic and Technical Training</h3>
              <p>
                Astronauts study spacecraft systems, orbital mechanics, astronomy, Earth science, and space medicine. They learn
                to operate and repair ISS systems, conduct scientific experiments, use robotic arms, and perform complex procedures
                in emergency situations. Much of this involves detailed study of thousands of procedures and technical manuals.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Neutral Buoyancy Laboratory</h3>
              <p>
                The Neutral Buoyancy Laboratory in Houston contains a massive pool (62m x 31m x 12m deep) with full-scale mockups
                of ISS modules. Astronauts practice spacewalks (EVAs) in weighted spacesuits that simulate weightlessness. A single
                6-hour spacewalk may require 50+ hours of underwater training.
              </p>
              <p>
                During these sessions, astronauts practice intricate tasks while wearing bulky pressurized gloves, learning to
                work efficiently while managing limited oxygen supplies, temperature regulation, and communication with ground
                control. Divers stand by for safety while instructors monitor every movement.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Survival Training</h3>
              <p>
                Since spacecraft can land anywhere on Earth in emergencies, astronauts train for survival in extreme environments:
                water survival (in case of ocean landing), winter survival in remote forests, and desert survival. They learn
                shelter building, water procurement, emergency medical care, and radio communication.
              </p>
              <p>
                NEEMO (NASA Extreme Environment Mission Operations) sends crews to live in the Aquarius underwater habitat for
                up to 3 weeks, simulating the isolation, close quarters, and communication delays of space missions while
                conducting scientific research.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">T-38 Jet Training</h3>
              <p>
                NASA astronauts maintain proficiency flying T-38 supersonic jets. This serves multiple purposes: practicing
                decision-making in dynamic, high-stakes environments; staying sharp on technical procedures; building team
                coordination; and experiencing physiological effects similar to spaceflight (rapid pressure changes, high-G forces).
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Russian Training</h3>
              <p>
                All ISS crew members train in Russia at Star City near Moscow, learning Soyuz spacecraft operations and Russian
                ISS systems. They must become fluent in Russian technical terminology to communicate with cosmonauts and Russian
                mission control. Similarly, Russian cosmonauts train at NASA facilities and learn English.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Launch Day: Journey to Orbit</h2>
              <p>
                Launch preparations begin weeks in advance with medical checks, final training sessions, and crew quarantine to
                prevent introducing illness to the ISS. The night before launch, astronauts review procedures, pack personal items
                within strict weight limits (typically just 1-2 kg), and try to sleep despite excitement and adrenaline.
              </p>
              <p>
                Launch morning starts early—usually 4-5 hours before liftoff. After breakfast with support crew, astronauts don
                their launch suits, which provide pressure protection and cooling. A traditional flag-waving ceremony sends them
                to the launchpad, where they board their spacecraft.
              </p>
              <p>
                Strapped into seats, astronauts perform final checks during the countdown. At ignition, they experience violent
                shaking and noise as engines fire. Within seconds, they're accelerating at 3-4 times Earth's gravity. Eight to
                nine minutes later, the spacecraft reaches orbit—engines cut off, and suddenly they're weightless.
              </p>
              <p>
                Many astronauts report the stark beauty of first seeing Earth from space as an overwhelming, emotional experience.
                The planet appears as a fragile blue sphere against the blackness of space, covered in swirling white clouds,
                without visible political boundaries—an image that permanently changes their perspective.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Daily Life Aboard the ISS</h2>
              <p>
                The International Space Station orbits at 28,000 km/h (17,500 mph), completing one orbit every 90 minutes. This
                means astronauts see 16 sunrises and sunsets every 24 hours. To maintain normal circadian rhythms, the station
                follows UTC (Coordinated Universal Time) with scheduled wake-up at 6:00 and sleep at 21:30.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Work Schedule</h3>
              <p>
                Astronauts work Monday through Friday on a carefully planned schedule. A typical day includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>6:00 - Wake up, personal hygiene, breakfast</li>
                <li>7:30 - Daily planning conference with mission control</li>
                <li>8:00-13:00 - Morning work period (experiments, maintenance, exercise)</li>
                <li>13:00-14:00 - Lunch break</li>
                <li>14:00-18:00 - Afternoon work period</li>
                <li>18:00-19:30 - Dinner, personal time</li>
                <li>19:30-21:30 - Evening activities, prepare for sleep</li>
                <li>21:30 - Sleep period (in sleeping bags attached to walls)</li>
              </ul>
              <p>
                Saturdays include cleaning, equipment maintenance, and time for personal projects. Sundays are typically off-duty,
                allowing crew to relax, communicate with family, take photos of Earth, read, or watch movies.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Exercise: Fighting Weightlessness</h3>
              <p>
                Without gravity, muscles and bones deteriorate rapidly. Astronauts must exercise 2-2.5 hours daily using:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">ARED (Advanced Resistive Exercise Device):</strong> Vacuum cylinders simulate weights up to 270 kg for strength training</li>
                <li><strong className="text-white">Treadmill:</strong> Harness system provides downward force while running</li>
                <li><strong className="text-white">Exercise bike:</strong> Cardiovascular conditioning without impact stress</li>
              </ul>
              <p>
                This rigorous routine significantly reduces (but doesn't eliminate) muscle atrophy and bone density loss. Even
                with exercise, astronauts can lose 1-2% of bone mass per month in space.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Eating and Drinking</h3>
              <p>
                Food aboard the ISS includes thermostabilized pouches (like military MREs), freeze-dried meals rehydrated with hot
                or cold water, irradiated foods, and some fresh fruits/vegetables delivered by resupply ships. Menus rotate on
                8-day cycles with international variety—Russian, American, European, and Japanese cuisine.
              </p>
              <p>
                Eating in weightlessness requires care—food floats away if not secured. Liquids form floating spheres that must be
                caught with straws. Salt and pepper are liquid to prevent granules from floating into eyes or equipment. Tortillas
                are preferred over bread because they produce no crumbs.
              </p>
              <p>
                The ISS recycles nearly all water from humidity, urine, and even crew exhalation—about 93% recovery rate. As the
                saying goes, "Today's coffee is tomorrow's coffee." This recycling is essential for long-duration missions and
                future deep space exploration.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Personal Hygiene</h3>
              <p>
                Without running water and gravity, hygiene requires creativity. Astronauts use no-rinse soap and shampoo with
                wet towels for "showers." Toothbrushing is standard, but toothpaste must be swallowed since there's no sink to
                rinse. The toilet uses airflow to direct waste, which is then compressed and stored or burned up during reentry.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Scientific Work and Spacewalks</h2>
              <p>
                The ISS is primarily a research laboratory. Crew members conduct hundreds of experiments studying:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Human physiology in microgravity (bone loss, muscle atrophy, vision changes, immune system effects)</li>
                <li>Materials science (protein crystal growth, metallurgy, combustion physics)</li>
                <li>Biology (plant growth, cell behavior, microorganism adaptation)</li>
                <li>Earth observation (climate, weather, agriculture, disaster monitoring)</li>
                <li>Technology demonstrations (3D printing, robotic systems, life support)</li>
              </ul>
              <p>
                Spacewalks (EVAs) are among the most challenging and dangerous activities. Lasting 6-8 hours, they require months
                of preparation. Astronauts work in bulky suits at 0.3 atmospheres pressure (vs 1.0 inside the station), with limited
                dexterity and constant awareness that a suit puncture or tether failure could be fatal.
              </p>
              <p>
                Common EVA tasks include installing new equipment, replacing failing components, and conducting experiments.
                The work is physically exhausting—astronauts can burn 1,000+ calories during a single spacewalk.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Psychological Challenges</h2>
              <p>
                Living in a space the size of a six-bedroom house with 3-7 other people for six months tests psychological resilience.
                Challenges include isolation from family and friends, confinement, lack of privacy, repetitive routines, and the
                inability to go outside or escape the environment.
              </p>
              <p>
                Crews maintain psychological health through:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Regular video calls with family (though 15-minute delays sometimes occur)</li>
                <li>Care packages and fresh food on resupply ships</li>
                <li>Viewing Earth through the Cupola window (described as therapeutic)</li>
                <li>Team bonding activities and celebrations of birthdays, holidays</li>
                <li>Access to books, movies, music, and email</li>
                <li>Psychological support from ground-based specialists</li>
              </ul>
              <p>
                Crew compatibility is crucial. Astronauts train together extensively before missions, building trust and learning
                to communicate effectively under stress. International cooperation—particularly U.S.-Russian partnership—demonstrates
                how shared goals transcend political differences.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Return to Earth</h2>
              <p>
                Coming home is almost as stressful as launch. After undocking from the ISS, the spacecraft performs a deorbit burn,
                slowing enough to reenter the atmosphere. Astronauts experience peak deceleration of 4-5 G's during the fiery descent—
                plasma glowing outside windows as friction heats the heat shield to 1,600°C.
              </p>
              <p>
                Parachutes deploy for final descent, with touchdown on land (Soyuz in Kazakhstan) or ocean (Crew Dragon in Atlantic).
                Recovery teams quickly reach the crew, but astronauts often cannot stand after months in weightlessness. Readaptation
                to gravity takes weeks—simple actions like walking, lifting objects, or even holding up their heads require relearning.
              </p>
              <p>
                Most astronauts recover fully within 2-3 months, though vision changes can be permanent for some. Despite challenges,
                nearly all astronauts describe spaceflight as the most rewarding experience of their lives and many fly multiple missions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Future: Mars and Beyond</h2>
              <p>
                Current astronaut training prepares for Moon and Mars missions. These will present new challenges: multi-year
                durations, communication delays up to 22 minutes, no quick abort options, enhanced radiation exposure, and complete
                self-sufficiency from Earth.
              </p>
              <p>
                Future astronauts may specialize more—some focusing on piloting, others on geology, biology, engineering, or medicine.
                Psychological screening will intensify for missions where crew cannot return home for years. Physical conditioning
                will emphasize maintaining health through long transits in confined spacecraft.
              </p>
              <p>
                Despite daunting challenges, thousands will continue applying to become astronauts, driven by the fundamental
                human desire to explore, discover, and push the boundaries of what's possible. The most difficult journeys often
                prove the most rewarding.
              </p>
            </section>

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Track the ISS Right Now</h3>
              <p className="mb-4">
                See where the International Space Station is orbiting Earth in real-time and learn when it will fly over your location.
              </p>
              <Link href="/iss">
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                  Track ISS Live
                </button>
              </Link>
            </div>

          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/understanding-iss" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-green-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Understanding the ISS</h4>
              <p className="text-gray-400 text-sm">Learn about the International Space Station</p>
            </Link>
            <Link href="/articles/history-space-exploration" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-green-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">History of Space Exploration</h4>
              <p className="text-gray-400 text-sm">From early space missions to today</p>
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
