import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mars Rovers and Exploration: From Spirit to Perseverance | Spaceflight Tracker',
  description: 'Explore the history of Mars rover missions including Spirit, Opportunity, Curiosity, and Perseverance. Discover their groundbreaking findings and what they reveal about the Red Planet.',
  keywords: ['Mars rovers', 'Perseverance', 'Curiosity', 'Spirit', 'Opportunity', 'Mars exploration', 'Ingenuity helicopter', 'Mars water'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/mars-rovers-exploration',
  },
};

export default function MarsRoversPage() {
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
            <span className="text-gray-500">Mars Rovers and Exploration</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium">
              Mars
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">19 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mars Rovers: Robotic Explorers of the Red Planet
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Follow the extraordinary journey of NASA's Mars rovers from the groundbreaking Spirit and Opportunity missions to today's Curiosity and Perseverance—robotic geologists searching for signs of ancient life and paving the way for human exploration.
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Why Mars? The Red Planet's Allure</h2>
              <p>
                Mars has captivated humanity for centuries. Ancient astronomers noticed its blood-red color—caused by iron oxide (rust) covering the surface—and named it after the Roman god of war. Early telescopic observations revealed polar ice caps, seasonal color changes, and apparent channels, leading astronomers like Percival Lowell to speculate about Martian civilizations building canals to transport water.
              </p>
              <p>
                While Mariner missions in the 1960s dispelled notions of canal-building Martians, they revealed something perhaps more intriguing: evidence that Mars was once dramatically different from the cold, dry desert it is today. Ancient river valleys, outflow channels, and lake beds suggested that billions of years ago, liquid water flowed across Mars's surface—a requirement for life as we know it.
              </p>
              <p>
                Mars offers unique advantages for exploration. It's relatively close—typical missions require 6-9 months transit time. The planet has a 24.6-hour day (called a "sol"), nearly identical to Earth's, simplifying mission operations. Surface gravity is 38% of Earth's—strong enough to simplify rover mobility compared to low-gravity asteroids, but weak enough that launch from Mars requires less energy than Earth. The thin carbon dioxide atmosphere (1% of Earth's density) provides some protection from radiation and enables aerobraking for landing spacecraft.
              </p>
              <p>
                Most compellingly, Mars is the most Earth-like planet in the solar system. If life ever evolved beyond Earth, Mars represents our best chance to find it within reach of current technology. Understanding Mars's transformation from a potentially habitable world to today's harsh environment also informs our understanding of planetary climate evolution—including Earth's future.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Sojourner: The First Wheels on Mars</h2>
              <p>
                Before Spirit and Opportunity, NASA tested Mars rover technology with Sojourner, delivered by the Mars Pathfinder lander in July 1997. This microwave-oven-sized rover—weighing just 10.6 kg—demonstrated that wheeled vehicles could successfully explore Mars.
              </p>
              <p>
                Sojourner operated for nearly three months, far exceeding its 7-day design lifetime. It traveled 100 meters from the lander, analyzing rocks with an Alpha Proton X-ray Spectrometer that revealed their chemical composition. Rocks like "Barnacle Bill" and "Yogi" showed unexpected diversity, suggesting complex geological history. The mission proved that rovers could navigate Martian terrain autonomously, communicate reliably with Earth, and conduct meaningful science.
              </p>
              <p>
                Sojourner's success paved the way for more ambitious rover missions. Engineers learned critical lessons about Mars's terrain, atmospheric conditions, temperature extremes (-100°C at night), and operational challenges. Most importantly, Sojourner captured public imagination—its daily updates and images made millions feel personally connected to Mars exploration.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Spirit and Opportunity: The Twin Rovers</h2>
              <p>
                In January 2004, two golf-cart-sized rovers bounced onto Mars enclosed in airbags, rolled to a stop, opened their petals, and stood up to begin missions that would rewrite Martian history.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Spirit: Gusev Crater Explorer</h3>
              <p>
                Spirit landed in Gusev Crater, a 160-km-wide basin that appeared to have once been a lake fed by an ancient river channel. Scientists hoped to find sedimentary rocks and minerals formed in water—direct evidence of Mars's wet past.
              </p>
              <p>
                Initial findings puzzled scientists. Instead of sedimentary lake deposits, Spirit encountered volcanic basalt covering the crater floor. Apparently, lava flows had buried any lake sediments beneath meters of volcanic rock. However, Spirit's journey wasn't futile—it simply needed to travel further.
              </p>
              <p>
                En route to the Columbia Hills 2.5 km away, Spirit accidentally scraped through surface dust, exposing bright subsurface material. Analysis revealed hydrated minerals—rocks that had been chemically altered by liquid water. This marked the first definitive evidence that water had interacted with rocks on Mars.
              </p>
              <p>
                The Columbia Hills held even greater treasures. Spirit discovered outcrops of rocks rich in sulfates and other minerals that form only in the presence of water. Some rocks showed evidence of explosive volcanic eruptions in wet conditions—essentially Martian mud volcanoes. Others contained hematite spherules (nicknamed "blueberries") formed in water-rich environments.
              </p>
              <p>
                Spirit's most significant discovery came in 2007: nearly pure silica deposits at a site called "Home Plate." On Earth, such deposits form in hot springs or hydrothermal systems—environments that could potentially support microbial life. This suggested that not only was ancient Mars wet, but it harbored diverse aqueous environments, some potentially habitable.
              </p>
              <p>
                Spirit operated until 2010—over 25 times its planned 90-day mission. It drove 7.73 km, climbed hills, survived Martian winters by parking on sun-facing slopes, and captured over 124,000 images. The rover's end came when it became stuck in soft soil, unable to position its solar panels for sufficient sunlight. After months of recovery attempts, NASA declared Spirit's mission complete in May 2011.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Opportunity: Marathon Runner of Mars</h3>
              <p>
                Opportunity's journey rivals the greatest exploration stories in human history. Landing in Meridiani Planum on the opposite side of Mars from Spirit, Opportunity immediately made discoveries. The crater where it landed—later named Eagle Crater—exposed bedrock in its walls: fine-layered sedimentary rocks containing abundant hematite spherules.
              </p>
              <p>
                Analysis revealed these rocks formed in standing water—an ancient lake or shallow sea. The hematite spherules, about 4mm in diameter, formed through gradual mineral precipitation in water. The rock layers showed crossbedding patterns characteristic of water-deposited sediments. Sulfate minerals indicated the water was acidic—not ideal for life, but potentially habitable for extremophile organisms.
              </p>
              <p>
                This discovery, made within weeks of landing, achieved the mission's primary goal: finding definitive evidence that liquid water persisted on Mars's surface for extended periods. But Opportunity was just getting started.
              </p>
              <p>
                The rover spent years exploring crater after crater, each exposing deeper and older rock layers—like reading chapters in Mars's geological history book. Endurance Crater revealed 7 meters of layered deposits recording environmental changes over time. Victoria Crater, 750 meters across and 70 meters deep, exposed even older rocks showing variations in water chemistry and availability across millions of years.
              </p>
              <p>
                Opportunity then embarked on an epic journey to Endeavour Crater, 21 km away—taking three years to traverse the distance. Endeavour, 22 km in diameter, exposed some of Mars's oldest rocks. At a site called "Matijevic Hill," Opportunity discovered clay minerals (smectites) that form only in water with neutral pH—much more favorable for life than the acidic conditions recorded in younger rocks. This suggested Mars's early history included environments genuinely hospitable to life.
              </p>
              <p>
                Other discoveries included meteorites lying on the surface (five different meteorites, providing clues about the asteroid belt), dust devils captured on camera, atmospheric studies tracking seasonal changes, and evidence for ancient flowing water from multiple epochs.
              </p>
              <p>
                Opportunity operated for 14.5 years—55 times its planned mission duration. It drove 45.16 km—farther than any vehicle has driven on another world—earning it the nickname "Mars marathon runner." The mission finally ended in June 2018 when a planet-wide dust storm blocked sunlight for months. After hundreds of communication attempts, NASA declared Opportunity's mission complete in February 2019. The rover's final message, paraphrased by mission staff, was poetically interpreted as "My battery is low and it's getting dark"—a touching epitaph for one of humanity's greatest explorers.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Legacy and Impact</h3>
              <p>
                Together, Spirit and Opportunity fundamentally transformed our understanding of Mars. They proved that Mars once had abundant liquid water in diverse environments—lakes, streams, hot springs, acidic pools, neutral groundwater. They revealed that these conditions persisted for millions or billions of years, providing ample time for life to potentially develop. They demonstrated that rovers could operate for years in Mars's harsh conditions, enabling ambitious future missions.
              </p>
              <p>
                The missions also advanced rover technology. Engineers learned how to preserve rovers through winter, navigate treacherous terrain, autonomously select science targets, and maximize solar panel efficiency despite dust accumulation. These lessons directly enabled subsequent missions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Curiosity: The Nuclear-Powered Laboratory</h2>
              <p>
                Curiosity, landing in August 2012, represented a quantum leap in rover capability. At 899 kg, it weighs nearly five times more than Spirit or Opportunity. Powered by a radioisotope thermoelectric generator (RTG) rather than solar panels, Curiosity operates independent of sunlight, enabling year-round science and nighttime observations.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Sky Crane Landing</h3>
              <p>
                Curiosity's landing employed a unprecedented "sky crane" system. After atmospheric entry and parachute descent, a rocket-powered descent stage hovered above the surface while lowering Curiosity on cables. Once the rover touched down, the cables cut and the descent stage flew away to crash at a safe distance. This system—initially considered crazy—worked perfectly and became the template for Perseverance.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Gale Crater: A 3.5 Billion Year Archive</h3>
              <p>
                Curiosity landed in Gale Crater at the base of Mount Sharp (officially Aeolis Mons), a 5.5-km-high mountain of layered sediments in the crater's center. The mission plan: drive up the mountain, with each layer recording a different period in Mars's history—like climbing through a geological timeline.
              </p>
              <p>
                Within months, Curiosity made groundbreaking discoveries. Rounded pebbles embedded in ancient streambed deposits indicated flowing water—not standing water like Spirit and Opportunity found, but actual rivers with velocities of 0.2-0.75 m/s and depths of 0.3-0.9 meters. The size and rounding of pebbles revealed the water's flow characteristics.
              </p>
              <p>
                At a site called Yellowknife Bay, Curiosity drilled into mudstone—ancient lakebed deposits—and analyzed the powder. Results were remarkable: the rocks contained clay minerals, sulfates, nitrogen, phosphorus, and organic carbon compounds. The water's pH was neutral, and the environment had all chemical ingredients necessary for life: an energy source (chemical gradients), organic molecules, water, and essential elements.
              </p>
              <p>
                This was Curiosity's mission objective: determine if Mars ever had conditions suitable for microbial life. The answer was definitively yes. Ancient Gale Crater contained a lake with fresh water, moderate temperatures, neutral pH, and all necessary chemistry—an environment where, on Earth, life would thrive.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Organic Molecules and Methane</h3>
              <p>
                In 2018, Curiosity announced two major findings. First, it detected complex organic molecules in 3.5-billion-year-old rocks. These included thiophenes, benzene, toluene, and small carbon chains. While organic molecules can form through non-biological processes, their presence in multiple rock types suggested they were originally more abundant before being broken down by radiation over billions of years.
              </p>
              <p>
                Second, Curiosity detected methane in Mars's atmosphere with concentrations varying seasonally. Background levels measure ~0.4 parts per billion, but occasionally spike to 7+ ppb. On Earth, 95% of atmospheric methane is produced by life (though geological sources exist). Mars's methane could be biological, geological, or from cometary impacts. Intriguingly, the methane appears and disappears rapidly—suggesting active sources and sinks rather than ancient trapped methane slowly leaking out.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Climbing Mount Sharp</h3>
              <p>
                Since 2014, Curiosity has ascended Mount Sharp's lower slopes, analyzing rock layers recording Mars's climate history. Patterns reveal long-term environmental changes: transitions from wet lake environments to drier conditions, variations in water chemistry, and evidence for both standing water and groundwater at different times.
              </p>
              <p>
                A particularly intriguing finding: some rock layers show patterns suggesting they formed in ancient Martian soil exposed to atmospheric weathering—indicating periods when the lake dried up, soil formed, then flooded again. These wet-dry cycles are especially interesting for the origin of life; on Earth, such cycles help concentrate organic molecules and form complex chemistry.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Ongoing Mission</h3>
              <p>
                As of 2024, Curiosity continues operating after 12 years on Mars—quadruple its planned two-year mission. It has driven over 31 km and drilled 39 samples from Martian rocks. The RTG power source will enable decades more operation if mechanical systems remain functional. Each layer of Mount Sharp reveals new chapters of Mars's history, and many mysteries remain to solve.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Perseverance: Seeking Signs of Ancient Life</h2>
              <p>
                Perseverance landed in Jezero Crater in February 2021, carrying the most sophisticated instrument suite ever sent to another planet and an explicit mission to search for biosignatures—evidence of ancient microbial life.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Jezero Crater: Ancient River Delta</h3>
              <p>
                Jezero Crater, 45 km wide, once contained a lake fed by rivers that deposited a prominent delta—visible from orbit with sediment layers like the Mississippi River Delta. Deltas preserve organic material and biosignatures exceptionally well, making Jezero ideal for life detection. The lake existed 3.5-3.8 billion years ago, during Mars's Noachian period when the planet was warmer and wetter.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Advanced Science Instruments</h3>
              <p>
                Perseverance carries seven primary instruments, several representing major advances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">SHERLOC and PIXL:</strong> Spectrometers that can detect organic molecules and analyze elemental composition at microscopic scales</li>
                <li><strong className="text-white">MOXIE:</strong> Experiment producing oxygen from CO₂ atmosphere—technology demonstration for future human missions</li>
                <li><strong className="text-white">MEDA:</strong> Weather station monitoring atmospheric conditions</li>
                <li><strong className="text-white">SuperCam:</strong> Laser that vaporizes rock surfaces for analysis from up to 7 meters away</li>
                <li><strong className="text-white">Mastcam-Z:</strong> High-resolution stereo cameras with zoom capability</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-3">Sample Caching: Mars Sample Return</h3>
              <p>
                Perseverance's most ambitious objective is collecting samples for eventual return to Earth. The rover drills cores from rocks, seals them in sterile tubes, and caches them for potential retrieval by a future mission. This Mars Sample Return campaign—a collaboration between NASA and ESA—would be the first time materials from another planet are returned to Earth.
              </p>
              <p>
                As of 2024, Perseverance has collected over 25 samples representing diverse rock types and environments. Some samples come from igneous rocks (ancient lava), others from sedimentary deposits in the delta, and some from regolith. These samples will enable laboratory analysis impossible on Mars: isotopic dating, detection of trace biosignatures, organic analysis with mass spectrometry, and microscopic investigation.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Key Discoveries</h3>
              <p>
                Perseverance confirmed that Jezero once contained a lake with inflowing rivers. The delta deposits contain organic molecules—not definitive evidence of life, but intriguing findings warranting further study. Some rocks show unexpected composition, suggesting volcanic activity interspersed with aqueous environments.
              </p>
              <p>
                One surprising finding: much of Jezero's floor consists of igneous rock rather than sediments. Apparently, lava flows occurred after the lake disappeared, partially filling the crater. This presents both challenges (the best samples may be buried) and opportunities (igneous rocks can be radiometrically dated, potentially providing precise chronology for Mars's history).
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Ingenuity: First Flight on Another Planet</h3>
              <p>
                Perseverance carried a helicopter named Ingenuity—a technology demonstration to prove powered flight is possible in Mars's thin atmosphere. The 1.8-kg helicopter needed to spin its rotors at 2,400 rpm (five times faster than Earth helicopters) to generate sufficient lift in air 1% as dense as Earth's.
              </p>
              <p>
                Ingenuity's first flight on April 19, 2021, was historic—the first powered controlled flight on another planet, comparable to the Wright Brothers' first flight at Kitty Hawk. Initially planned for five flights over 30 days, Ingenuity exceeded all expectations, completing 72 flights over nearly three years, traveling over 17 km, and reaching altitudes up to 24 meters.
              </p>
              <p>
                Ingenuity transitioned from technology demonstration to operational scouting, surveying terrain ahead of Perseverance, imaging scientifically interesting features, and testing flight operations for future missions. The helicopter finally ended operations in January 2024 after rotor damage during landing—but its legacy is assured. Future Mars missions will undoubtedly include aerial vehicles for exploration.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">What We've Learned: Mars's Story</h2>
              <p>
                Decades of Mars exploration, especially rovers, have revealed a planet with a complex, dynamic history:
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Ancient Mars: A Habitable World</h3>
              <p>
                3.5-4 billion years ago, Mars had abundant liquid water. Lakes, rivers, and possibly oceans covered parts of the surface. The atmosphere was thicker, greenhouse gases warmed the surface to temperatures allowing liquid water, and the planet possessed a stronger magnetic field protecting it from solar radiation. Diverse aqueous environments existed: acidic pools, neutral lakes, hot springs, groundwater systems, and flowing streams.
              </p>
              <p>
                This ancient Mars had all ingredients for life: liquid water, organic molecules, energy sources, and stable environments persisting for millions of years. Whether life actually arose remains unknown, but conditions were favorable.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">The Great Transition</h3>
              <p>
                Approximately 3.5 billion years ago, Mars underwent dramatic changes. The planet's magnetic field weakened or disappeared (possibly due to core cooling), allowing solar wind to strip away the atmosphere. As atmospheric pressure dropped, liquid water became unstable—evaporating or freezing. The climate cooled dramatically. Surface water disappeared, though some may have retreated underground.
              </p>
              <p>
                This transition didn't happen overnight but over hundreds of millions of years. Evidence shows episodic wet periods even after the main transition—catastrophic floods, temporary lakes, glacial activity. But overall, Mars transformed from a potentially habitable world to the frozen desert we observe today.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Modern Mars: Not Completely Dead</h3>
              <p>
                While Mars's surface is harsh, the planet shows ongoing activity. Seasonal methane variations suggest active release mechanisms. Recurring slope lineae (dark streaks appearing seasonally) may indicate briny water flows, though alternative explanations exist. Subsurface ice deposits have been discovered in many locations. Active erosion continues through wind, frost, and occasional avalanches of CO₂ ice at the poles.
              </p>
              <p>
                Most intriguingly, subsurface liquid water might exist. Models suggest that several kilometers underground, temperature and pressure could allow briny water—too salty to freeze despite cold temperatures. If such reservoirs exist, they could potentially harbor microbial life, protected from surface radiation and temperature extremes.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Future Exploration: What's Next?</h2>

              <h3 className="text-2xl font-semibold text-white mb-3">Mars Sample Return</h3>
              <p>
                The most ambitious near-term goal is returning Perseverance's samples to Earth, potentially in the early 2030s. The mission architecture involves multiple spacecraft: a lander with a sample-retrieval rover and Mars Ascent Vehicle (MAV), an orbiter to capture the samples in Mars orbit, and an Earth Return Vehicle to bring them home.
              </p>
              <p>
                Analyzing these samples in terrestrial laboratories will enable investigations impossible on Mars. Scientists could search for definitive biosignatures, perform precise radiometric dating, analyze isotopic ratios revealing climate history, and detect trace organic compounds. If any samples show potential biosignatures, intensive study would determine if they're genuinely biological.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Future Rover Missions</h3>
              <p>
                China's Tianwen-3 mission plans to land rovers and return samples in the late 2020s. ESA's Rosalind Franklin rover, delayed multiple times, aims to drill up to 2 meters depth—far deeper than current rovers—to access material protected from surface radiation that could have better-preserved biosignatures.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Human Missions</h3>
              <p>
                NASA's Artemis program includes Mars as a long-term goal, possibly in the 2030s or 2040s. Human missions would dramatically accelerate exploration—astronauts could explore more in weeks than rovers do in years. However, challenges are immense: life support for multi-year missions, radiation protection, landing systems for massive payloads, Mars takeoff for return, and psychological challenges of isolation.
              </p>
              <p>
                Rovers are paving the way, identifying resources (water ice for life support and fuel), testing technologies (MOXIE oxygen production), and finding landing sites. The knowledge gained from decades of robotic exploration will prove essential when humans finally set foot on Mars.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Conclusion: Robotic Pioneers</h2>
              <p>
                Mars rovers represent humanity's greatest robotic explorers—mechanical geologists, chemists, and photographers venturing across alien landscapes, making discoveries that rewrite our understanding of the solar system. From Sojourner's first tentative movements to Perseverance's sophisticated search for life, each mission has pushed technological boundaries and revealed Mars's secrets.
              </p>
              <p>
                The rovers have shown that Mars was once a world where life could have thrived—perhaps even a world where life did exist, with evidence waiting to be discovered in preserved rocks. They've demonstrated that sustained surface exploration is possible, paving the way for human missions. They've inspired millions worldwide, making Mars exploration personal and immediate through daily image releases and mission updates.
              </p>
              <p>
                As Curiosity continues climbing Mount Sharp and Perseverance caches samples for return to Earth, the next chapters of Mars exploration are being written. New rovers will launch, new technologies will be tested, and eventually, human explorers will follow the paths blazed by these robotic pioneers. The story of Mars—and potentially the story of life beyond Earth—is being revealed one wheel rotation at a time.
              </p>
            </section>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Follow Mars Missions</h3>
              <p className="mb-4">
                Stay updated on future Mars missions and launches, including plans for Mars Sample Return and new rover missions exploring the Red Planet.
              </p>
              <Link href="/launches">
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
                  View Launch Schedule
                </button>
              </Link>
            </div>

          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/future-moon-bases" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-red-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Future Moon Bases</h4>
              <p className="text-gray-400 text-sm">Planning humanity's return to the Moon</p>
            </Link>
            <Link href="/articles/history-space-exploration" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-red-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">History of Space Exploration</h4>
              <p className="text-gray-400 text-sm">From early missions to modern exploration</p>
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
