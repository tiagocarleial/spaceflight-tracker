import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'History of Space Exploration: From Sputnik to Starship | Spaceflight Tracker',
  description: 'Explore the complete history of human space exploration from the first satellites to modern reusable rockets and plans for Mars colonization.',
  keywords: ['space exploration history', 'space race', 'Apollo program', 'Sputnik', 'space history timeline'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/history-space-exploration',
  },
};

export default function HistorySpaceExplorationPage() {
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
            <span className="text-gray-500">History of Space Exploration</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
              History
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">15 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            History of Space Exploration: From Sputnik to Starship
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            A comprehensive journey through humanity's quest to explore the cosmos, from the first artificial satellites to modern reusable rockets and future Mars missions.
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Dawn of the Space Age (1957-1961)</h2>
              <p>
                On October 4, 1957, the Soviet Union launched Sputnik 1, humanity's first artificial satellite. This
                basketball-sized sphere, weighing just 83.6 kg, orbited Earth every 96 minutes, transmitting radio signals
                that could be detected worldwide. The launch shocked the world and marked the beginning of the Space Age.
              </p>
              <p>
                Sputnik 1's success triggered the "Space Race" between the United States and Soviet Union. Within months,
                the Soviets launched Sputnik 2 carrying Laika, the first animal in orbit. The United States responded with
                Explorer 1 in January 1958, which discovered the Van Allen radiation belts surrounding Earth.
              </p>
              <p>
                These early achievements led to the creation of NASA (National Aeronautics and Space Administration) in July
                1958 and accelerated development of rocket technology, satellite systems, and mission planning that would
                define space exploration for decades to come.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Humans in Space: Vostok and Mercury (1961-1963)</h2>
              <p>
                On April 12, 1961, Soviet cosmonaut Yuri Gagarin became the first human in space aboard Vostok 1. His 108-minute
                orbital flight demonstrated that humans could survive spaceflight and return safely. Gagarin's famous words
                "Poyekhali!" ("Let's go!") marked a pivotal moment in human history.
              </p>
              <p>
                The United States quickly followed with Project Mercury. On May 5, 1961, Alan Shepard completed a 15-minute
                suborbital flight. John Glenn became the first American to orbit Earth on February 20, 1962, completing three
                orbits in the Friendship 7 spacecraft. These missions proved American capability in human spaceflight and set
                the stage for more ambitious programs.
              </p>
              <p>
                The early crewed missions revealed critical challenges: weightlessness effects on the human body, spacecraft
                navigation, reentry heat management, and life support systems. Each mission built knowledge essential for
                future exploration.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Race to the Moon: Gemini and Apollo (1964-1972)</h2>
              <p>
                President John F. Kennedy's 1961 challenge to "land a man on the Moon and return him safely to Earth" before
                the decade's end drove unprecedented technological advancement. Project Gemini (1965-1966) served as a crucial
                stepping stone, demonstrating spacewalks, orbital rendezvous, and long-duration flights.
              </p>
              <p>
                The Apollo program culminated in one of humanity's greatest achievements. Apollo 11, launched on July 16, 1969,
                carried Neil Armstrong, Buzz Aldrin, and Michael Collins to the Moon. On July 20, Armstrong became the first
                human to walk on another world, declaring "That's one small step for man, one giant leap for mankind."
              </p>
              <p>
                Six Apollo missions successfully landed on the Moon between 1969-1972, returning 382 kg of lunar samples and
                conducting extensive scientific experiments. The program demonstrated advanced capabilities in navigation,
                computing, materials science, and mission operations that influenced all subsequent space exploration.
              </p>
              <p>
                The Soviet Union pursued its own lunar program but never achieved a crewed landing. They did, however,
                successfully operate robotic Luna missions that returned lunar samples and deployed rovers.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Space Stations: Salyut, Skylab, and Mir (1971-2001)</h2>
              <p>
                While Apollo focused on lunar exploration, the Soviet Union pioneered long-duration spaceflight with space
                stations. Salyut 1, launched in 1971, was the first space station. Despite early challenges, the Salyut program
                proved humans could live and work in space for extended periods.
              </p>
              <p>
                The United States launched Skylab in 1973, hosting three crews for missions up to 84 days. Skylab conducted
                groundbreaking research in solar astronomy, Earth observation, and human adaptation to weightlessness before
                its controlled deorbit in 1979.
              </p>
              <p>
                The Soviet Mir space station (1986-2001) represented the pinnacle of pre-ISS station design. Over 15 years,
                Mir hosted 104 cosmonauts and astronauts from 12 countries. Cosmonaut Valeri Polyakov set the record for
                longest single spaceflight at 437 days, demonstrating human capability for potential Mars missions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Space Shuttle Era (1981-2011)</h2>
              <p>
                NASA's Space Shuttle program introduced the first reusable spacecraft. From 1981 to 2011, the shuttle fleet
                (Columbia, Challenger, Discovery, Atlantis, and Endeavour) flew 135 missions, deploying satellites, conducting
                scientific research, and constructing the International Space Station.
              </p>
              <p>
                The shuttle demonstrated capabilities never before achieved: satellite deployment and retrieval, on-orbit
                repairs (including the famous Hubble servicing missions), and transportation of large crews and cargo. Each
                orbiter could carry up to eight astronauts and 24,000 kg of payload.
              </p>
              <p>
                The program suffered two tragic losses: Challenger in 1986 and Columbia in 2003, claiming 14 lives total.
                These disasters led to significant safety improvements and ultimately contributed to the shuttle's retirement
                in favor of newer, safer designs.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">International Cooperation: ISS (1998-present)</h2>
              <p>
                The International Space Station represents unprecedented global cooperation in space exploration. Starting
                construction in 1998, the ISS involves NASA, Roscosmos, ESA, JAXA, and CSA. At 109 meters long and 73 meters
                wide, it's the largest human-made structure in space.
              </p>
              <p>
                Continuously inhabited since November 2000, the ISS has hosted over 270 astronauts from 23 countries. It serves
                as a microgravity laboratory conducting research in biology, physics, materials science, and human physiology
                that's impossible on Earth.
              </p>
              <p>
                The station orbits at approximately 400 km altitude, completing 16 orbits daily. Research conducted aboard has
                led to advances in medicine, water purification, food production, and our understanding of long-term spaceflight
                effects on humans—crucial knowledge for future Mars missions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Commercial Spaceflight Revolution (2010s-present)</h2>
              <p>
                The 2010s saw the rise of commercial spaceflight companies transforming access to space. SpaceX, founded by
                Elon Musk in 2002, achieved the first successful landing and reuse of an orbital rocket booster in 2015—a
                breakthrough that dramatically reduced launch costs.
              </p>
              <p>
                SpaceX's Falcon 9 has become the world's most-flown rocket, with boosters being reused up to 20 times. The
                Crew Dragon spacecraft restored American capability to launch astronauts to the ISS in 2020, ending nearly
                a decade of dependence on Russian Soyuz spacecraft.
              </p>
              <p>
                Blue Origin (Jeff Bezos), Rocket Lab (Peter Beck), and others have entered the market, creating competition
                that drives innovation. China has rapidly advanced its space program with the Tiangong space station and
                ambitious lunar exploration plans. India (ISRO) achieved Mars orbit on its first attempt and demonstrated
                low-cost lunar and interplanetary capabilities.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Robotic Exploration: Our Eyes Across the Solar System</h2>
              <p>
                While humans have only traveled to the Moon, robotic spacecraft have explored every planet in our solar system.
                Voyager 1 and 2, launched in 1977, have now entered interstellar space after visiting Jupiter, Saturn, Uranus,
                and Neptune, sending back transformative data about these distant worlds.
              </p>
              <p>
                Mars has received special attention with over 50 attempted missions. NASA's Curiosity and Perseverance rovers
                currently explore the surface, searching for signs of ancient life and preparing samples for future return to
                Earth. The Ingenuity helicopter proved powered flight is possible in Mars' thin atmosphere.
              </p>
              <p>
                The James Webb Space Telescope, launched in 2021, represents humanity's most powerful space observatory,
                revealing the earliest galaxies formed after the Big Bang and studying exoplanet atmospheres in unprecedented
                detail. Other missions like Juno (Jupiter), Cassini (Saturn), and New Horizons (Pluto) have revolutionized
                our understanding of the solar system.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Future: Moon, Mars, and Beyond</h2>
              <p>
                Current space exploration focuses on sustainable presence beyond Earth orbit. NASA's Artemis program aims to
                return humans to the Moon by 2026, establishing a permanent lunar base that will serve as a proving ground
                for Mars missions. The Lunar Gateway station will orbit the Moon, supporting surface operations.
              </p>
              <p>
                SpaceX is developing Starship, a fully reusable super heavy-lift vehicle designed to carry up to 100 people
                to Mars. NASA has selected Starship as the lunar lander for Artemis missions. The vehicle completed its first
                successful orbital test flights in 2024.
              </p>
              <p>
                Multiple nations and companies are pursuing ambitious goals: China plans a crewed lunar landing by 2030, ESA
                is developing reusable rocket technology, and commercial space stations are in development to supplement or
                replace the ISS.
              </p>
              <p>
                The next decades promise permanent human presence on the Moon, the first crewed Mars missions, asteroid mining
                operations, and perhaps the beginning of true space settlement. What started with Sputnik has become humanity's
                expansion into a spacefaring civilization.
              </p>
            </section>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Track Today's Space Missions</h3>
              <p className="mb-4">
                Continue the journey by tracking current space missions in real-time. See upcoming launches from SpaceX,
                NASA, and space agencies worldwide.
              </p>
              <Link href="/launches">
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                  View Launch Schedule
                </button>
              </Link>
            </div>

          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/how-rockets-work" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-purple-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">How Do Rockets Work?</h4>
              <p className="text-gray-400 text-sm">Understand the physics behind space launch vehicles</p>
            </Link>
            <Link href="/articles/understanding-iss" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-purple-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Understanding the ISS</h4>
              <p className="text-gray-400 text-sm">Life and science aboard the International Space Station</p>
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
