import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jupiter and Its Moons: Exploration of the Giant Planet System | Spaceflight Tracker',
  description: 'Explore Jupiter and its fascinating Galilean moons—Io, Europa, Ganymede, and Callisto. Discover ongoing missions, the search for life, and what makes this system extraordinary.',
  keywords: ['Jupiter', 'Galilean moons', 'Europa', 'Ganymede', 'Io', 'Callisto', 'Juno mission', 'life in solar system'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/jupiter-and-its-moons',
  },
};

export default function JupiterMoonsPage() {
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
            <span className="text-gray-500">Jupiter and Its Moons</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
              Solar System
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">17 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Jupiter and Its Moons: Exploring the Giant Planet System
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Journey to the largest planet in our solar system and discover its extraordinary moon system, including ocean worlds that may harbor life and volcanic landscapes unlike anywhere on Earth.
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Jupiter: King of the Planets</h2>
              <p>
                Jupiter dominates the solar system with staggering proportions. With a mass of 1.898 × 10²⁷ kg—318 times Earth's mass and 2.5 times all other planets combined—Jupiter contains more matter than everything else orbiting the Sun except the Sun itself. Its diameter of 142,984 km means over 1,300 Earths could fit inside its volume.
              </p>
              <p>
                Unlike Earth's rocky surface, Jupiter is a gas giant composed primarily of hydrogen (90%) and helium (10%), with traces of methane, ammonia, and water vapor. Beneath the visible cloud layers lies liquid metallic hydrogen under such extreme pressure that hydrogen behaves like a metal, conducting electricity. Scientists believe a rocky core 10-20 times Earth's mass exists at the center, compressed to densities exceeding any terrestrial material, with temperatures reaching 36,000°C—hotter than the Sun's surface.
              </p>
              <p>
                The Great Red Spot, Jupiter's most famous feature, is a persistent anticyclonic storm larger than Earth, with wind speeds exceeding 400 km/h. First observed in 1665, this storm has raged for at least 350 years—possibly much longer. Recent Juno mission observations show the storm extends 300-500 km deep into Jupiter's atmosphere, far deeper than previously thought. Strangely, the Great Red Spot is shrinking; historical records show it was once three times its current 16,000 km diameter.
              </p>
              <p>
                Jupiter rotates faster than any other planet—one complete rotation every 9.9 hours. This rapid spin causes extreme equatorial bulging, making its equatorial diameter 9,000 km greater than its polar diameter. The rotation also generates the solar system's strongest planetary magnetic field—14 times Earth's strength—creating radiation belts so intense they damage spacecraft electronics and would deliver lethal doses to unshielded astronauts within hours.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Galilean Moons: A Miniature Solar System</h2>
              <p>
                On January 7, 1610, Galileo Galilei turned his primitive telescope toward Jupiter and observed three bright objects aligned with the planet. The next night, a fourth appeared. These observations—showing objects orbiting a body other than Earth—provided crucial evidence for the Copernican heliocentric model, fundamentally changing humanity's understanding of our place in the cosmos.
              </p>
              <p>
                Today we know Jupiter has 95 confirmed moons (with more discoveries likely), but the four Galilean moons—Io, Europa, Ganymede, and Callisto—remain the most significant. These worlds are substantial, with sizes comparable to or exceeding Mercury. Each possesses unique characteristics that make them among the most fascinating objects in the solar system.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Io: The Volcanic Inferno</h3>
              <p>
                Io stands as the most volcanically active body in the solar system, with over 400 active volcanoes continuously reshaping its surface. Some eruptions blast material 500 km into space before it falls back in low gravity. Volcanic plumes create temporary atmospheres of sulfur dioxide that condense and snow back to the surface when eruptions cease.
              </p>
              <p>
                The moon's dramatic appearance—yellow, orange, and red from sulfur compounds, with black spots marking active lava lakes—resembles a cosmic pizza (a comparison NASA scientists have frequently made). Surface temperatures range from frigid -143°C in shadows to scorching 1,600°C in lava flows—hotter than Earth's volcanoes.
              </p>
              <p>
                Io's intense volcanic activity derives from tidal heating. As Io orbits Jupiter, gravitational forces from Jupiter, Europa, and Ganymede constantly flex Io's interior, generating friction and heat. This process pumps approximately 100 trillion watts of thermal energy into Io—enough to melt rock and drive constant volcanic eruptions. The moon's surface is geologically young, completely resurfaced every million years by volcanic activity—making it essentially impossible to find impact craters.
              </p>
              <p>
                The Voyager missions discovered Io's volcanoes in 1979, stunning scientists who expected a geologically dead world. The Galileo spacecraft (1995-2003) revealed details of individual volcanoes, including Loki Patera, a lava lake larger than Lake Superior containing molten rock at 1,200°C. More recent Juno observations show Io's poles are significantly colder than equatorial regions, creating a temperature difference of over 1,700°C—the most extreme temperature variation on any moon.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Europa: The Ocean Moon</h3>
              <p>
                Europa may harbor the solar system's best chance of finding extraterrestrial life. Beneath its icy shell lies a global saltwater ocean containing more water than all Earth's oceans combined—perhaps 100 km deep compared to Earth's average ocean depth of 3.7 km.
              </p>
              <p>
                Europa's surface is remarkably smooth and young (20-180 million years), with few impact craters—evidence of ongoing geological activity resurfacing the ice. The terrain features extensive fractures, ridges, and chaotic regions where the ice has fractured and refrozen in jumbled patterns. Some areas show reddish-brown discoloration likely from salts and other materials upwelling from the subsurface ocean.
              </p>
              <p>
                Spectroscopic observations detected water vapor plumes erupting from Europa's surface, reaching heights of 200 km before falling back. These plumes provide tantalizing opportunities: spacecraft could potentially analyze ocean water without landing, flying through plumes to sample materials directly from the subsurface ocean.
              </p>
              <p>
                The ocean remains liquid despite Europa's -160°C surface temperature through tidal heating similar to Io (though less intense) combined with residual heat from radioactive decay. The ice shell thickness remains uncertain—estimates range from 10-30 km. Thinner ice would make accessing the ocean easier for future missions but would reduce protection for potential life from Jupiter's intense radiation.
              </p>
              <p>
                If life exists in Europa's ocean, it would likely survive on chemical energy rather than photosynthesis, similar to organisms near Earth's deep-sea hydrothermal vents. Interactions between water and rock on Europa's ocean floor could provide energy and nutrients. The ocean has existed for billions of years—plenty of time for life to develop if conditions are favorable.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Ganymede: The Magnetic Giant</h3>
              <p>
                Ganymede holds multiple distinctions. At 5,268 km diameter, it's the largest moon in the solar system—bigger than Mercury (4,879 km) and 3/4 the diameter of Mars. If it orbited the Sun directly, it would certainly be classified as a planet.
              </p>
              <p>
                Uniquely among moons, Ganymede generates its own magnetic field—created by a liquid iron core conducting electricity through convection currents. This internal dynamo produces a magnetosphere embedded within Jupiter's vastly larger magnetic field—a magnetic moon inside a magnetic planet, creating complex interactions between the two fields.
              </p>
              <p>
                Ganymede's surface divides into two distinct terrain types: dark, heavily cratered regions 4 billion years old, and brighter, younger grooved terrain featuring parallel ridges and valleys. The grooved terrain formed through tectonic processes similar to Earth's plate tectonics—surprising for an icy moon. These regions may have formed when water or slushy ice erupted onto the surface, froze, and then fractured due to subsequent geological stresses.
              </p>
              <p>
                Like Europa, Ganymede likely harbors a subsurface ocean—or rather multiple oceans stacked in layers. Models suggest liquid water exists between layers of ice at different pressures and temperatures. The ocean (or oceans) could contain more water than Earth's oceans, though they're sandwiched between ice layers 150-200 km beneath the surface, making access extremely challenging.
              </p>
              <p>
                Observations by the Hubble Space Telescope and Juno spacecraft detected auroras at Ganymede's poles—created when charged particles from Jupiter's magnetosphere interact with Ganymede's magnetic field. These glowing ribbons of light mark where Ganymede's magnetosphere funnels particles toward the surface, similar to Earth's Northern and Southern Lights but occurring on a moon.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Callisto: The Ancient Archive</h3>
              <p>
                Callisto stands apart from its siblings as a geologically inactive, heavily cratered ancient world. Its surface records 4 billion years of solar system history, covered with impact craters that have accumulated since shortly after the solar system formed. Callisto's surface is the most heavily cratered in the solar system—literally saturated with craters where new impacts obliterate old ones.
              </p>
              <p>
                The most prominent feature is Valhalla, a massive multi-ring impact basin 3,800 km across—nearly as wide as the United States. The impact that created Valhalla was so violent it created concentric rings spreading outward from the impact point like ripples frozen in ice. The impactor probably measured 100+ km in diameter, releasing energy equivalent to trillions of nuclear weapons.
              </p>
              <p>
                Callisto's lack of geological activity seems paradoxical given that it formed from the same materials as its siblings. The answer lies in orbital mechanics: Callisto orbits further from Jupiter, outside the strong orbital resonances affecting Io, Europa, and Ganymede. Without tidal heating to drive geological activity, Callisto froze early in solar system history and remained largely unchanged ever since.
              </p>
              <p>
                Despite its ancient surface, Callisto may harbor a subsurface ocean 100-200 km deep, detected through measurements of Callisto's magnetic field response to Jupiter's varying magnetic environment. This ocean would exist due to residual heat from radioactive decay and the insulating properties of Callisto's thick ice-rock shell. However, with less energy than Europa or Ganymede's oceans and minimal water-rock interaction, Callisto's ocean is considered less favorable for life.
              </p>
              <p>
                Callisto's combination of accessibility (lower radiation than inner moons) and scientific value makes it attractive for future human missions. Establishing a base on Callisto could provide a staging ground for exploring the Jupiter system while minimizing radiation exposure compared to Europa or Ganymede.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Historic Missions to Jupiter</h2>
              <p>
                Exploring Jupiter required developing spacecraft capable of surviving multi-year journeys through interplanetary space, intense radiation, and operation in extreme cold far from the Sun.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Pioneer 10 and 11: First Encounters</h3>
              <p>
                NASA's Pioneer 10, launched in 1972, made the first Jupiter flyby in December 1973, passing 130,000 km from the cloud tops. Pioneer 11 followed in 1974, passing just 43,000 km above the clouds. These missions revealed Jupiter's intense radiation belts (Pioneer 11 received radiation doses near its design limits), measured Jupiter's magnetic field, and captured the first close-up images of the Galilean moons, though resolution remained limited.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Voyager 1 and 2: Transformative Discoveries</h3>
              <p>
                The Voyager missions transformed Jupiter from a telescopic target into a complex world system. Voyager 1's March 1979 flyby and Voyager 2's July 1979 encounter returned over 33,000 images, revealing:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Io's active volcanoes—the first active volcanism discovered beyond Earth</li>
                <li>Europa's cracked ice surface suggesting a subsurface ocean</li>
                <li>Complex atmospheric dynamics with storms, eddies, and jet streams</li>
                <li>Jupiter's faint ring system</li>
                <li>Detailed measurements of the Galilean moons' sizes, masses, and densities</li>
              </ul>
              <p>
                These discoveries fundamentally changed how scientists viewed the outer solar system, demonstrating that icy moons could be geologically active and potentially habitable.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Galileo: Extended Investigation</h3>
              <p>
                Launched in 1989 and arriving in 1995, Galileo became the first spacecraft to orbit Jupiter, operating for 8 years until 2003. The mission included an atmospheric probe that plunged into Jupiter's clouds, measuring composition, temperature, and pressure during its 58-minute descent before being crushed and vaporized at pressures 23 times Earth's surface pressure.
              </p>
              <p>
                Galileo made multiple flybys of each Galilean moon, revealing surface details at unprecedented resolution. Key discoveries included: definitive evidence for Europa's subsurface ocean through magnetic field measurements, detailed observations of Io's volcanoes including active eruptions, discovery of Ganymede's magnetic field, and evidence for subsurface oceans in Ganymede and Callisto.
              </p>
              <p>
                The mission's final act was intentionally crashing into Jupiter in September 2003 to prevent potential contamination of Europa—a planetary protection measure ensuring Galileo couldn't accidentally crash into Europa and contaminate its potentially life-harboring ocean with Earth microbes.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Juno: Peering Beneath the Clouds</h3>
              <p>
                Juno arrived at Jupiter in July 2016 with a unique polar orbit designed to minimize radiation exposure while maximizing scientific observations. Rather than orbiting in Jupiter's equatorial plane, Juno swoops over the poles, diving to within 5,000 km of the cloud tops every 53 days before swinging back out to safer distances.
              </p>
              <p>
                The mission revealed Jupiter's powerful auroras (hundreds of times more energetic than Earth's), discovered that Jupiter's atmospheric bands extend at least 3,000 km deep, found that Jupiter's magnetic field is highly irregular (10 times stronger in some regions than others), and captured stunning images of Jupiter's poles showing geometric patterns of cyclones—eight around the north pole, five around the south pole, arranged in perfect symmetry.
              </p>
              <p>
                Extended multiple times, Juno now includes close flybys of the Galilean moons. A September 2022 Europa flyby at just 352 km altitude captured the highest-resolution images since Galileo, revealing intricate surface details. Subsequent Io flybys in 2023-2024 photographed volcanic activity with unprecedented clarity.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Future Missions: The Search for Life</h2>
              <p>
                Several missions in development or planning will explore Jupiter's moons in unprecedented detail, focusing on the ocean moons' astrobiological potential.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Europa Clipper</h3>
              <p>
                Scheduled for launch in October 2024 with arrival in 2030, NASA's Europa Clipper represents the most ambitious Europa mission yet. Rather than orbiting Europa (where intense radiation would quickly destroy electronics), Clipper will orbit Jupiter and make approximately 50 close flybys of Europa, some as low as 25 km altitude.
              </p>
              <p>
                Scientific instruments include ice-penetrating radar to measure ice shell thickness and detect subsurface water, mass spectrometers to analyze material erupting from plumes, cameras capable of resolving features as small as 0.5 meters, and magnetometers to characterize the subsurface ocean's depth and salinity. The mission will map Europa's entire surface at high resolution, identify potential landing sites for future missions, and search for ongoing geological activity.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">JUICE: Jupiter Icy Moons Explorer</h3>
              <p>
                The European Space Agency's JUICE mission launched in April 2023, targeting arrival in 2031. Unlike Clipper's Europa focus, JUICE will study all three icy moons but ultimately enter orbit around Ganymede—making it the first spacecraft to orbit a moon other than Earth's Moon.
              </p>
              <p>
                JUICE will spend years performing multiple flybys of Europa, Ganymede, and Callisto before settling into Ganymede orbit in 2034. The mission will characterize Ganymede's subsurface ocean, study its unique magnetic field, map surface composition, and search for potential habitats. By comparing all three ocean moons, JUICE will help scientists understand what makes a moon potentially habitable.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Possible Future Missions</h3>
              <p>
                NASA has studied various Europa lander concepts that would touch down on the surface, drill through meters of ice to access less radiation-damaged material, and analyze samples for biosignatures. Such a mission faces enormous challenges: surviving the radiation environment, sterilizing the spacecraft to prevent contamination, drilling through unknown ice conditions, and operating autonomously given 35-50 minute communication delays to Earth.
              </p>
              <p>
                Even more ambitious concepts include submarines or cryobots—robots that melt through kilometers of ice to reach the subsurface ocean. Such technology would revolutionize astrobiology by directly accessing potentially habitable environments. However, significant technological development is required before such missions become feasible.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Question of Life</h2>
              <p>
                Europa, Ganymede, and Callisto's subsurface oceans raise profound questions: Could life exist in these hidden seas? What would such life look like? How could we detect it?
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Requirements for Life</h3>
              <p>
                Life as we know it requires three key ingredients: liquid water, energy sources, and organic molecules. The Galilean ocean moons have all three. Water exists in vast quantities. Energy comes from tidal heating and radioactive decay. Organic molecules likely exist—spectroscopic observations detected organic compounds on the moons' surfaces, and carbonaceous meteorites have delivered organic materials throughout solar system history.
              </p>
              <p>
                Additionally, sufficient time has elapsed. These oceans have existed for billions of years—potentially since shortly after the solar system formed. Earth life emerged relatively quickly once conditions allowed, suggesting that if the basic requirements are met, life may be common rather than exceptional.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Challenges and Uncertainties</h3>
              <p>
                Critical uncertainties remain. What is the pH of these oceans? How much water-rock interaction occurs to provide nutrients? How thick are the ice shells—could photosynthesis occur in thin ice, or must all life rely on chemical energy? Do the oceans circulate, mixing nutrients from the sea floor with the ice-water interface?
              </p>
              <p>
                Europa's intense radiation environment complicates matters. Radiation bombarding the surface breaks water molecules into hydrogen and oxygen, creating oxidants that could sink through the ice to the ocean. This creates an interesting possibility: radiation-generated oxygen could support more complex life forms similar to Earth's oxygen-breathing organisms, even deep beneath the ice with no access to sunlight.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">What Might Life Look Like?</h3>
              <p>
                If Europa harbors life, it probably resembles Earth's extremophiles—microorganisms that thrive in extreme environments. On Earth, hydrothermal vent ecosystems support bacteria, archaea, and even complex organisms like tube worms and shrimp, all living without sunlight. Europa's life might be similar: microbial communities clustered around hydrothermal vents or dispersed throughout the ocean.
              </p>
              <p>
                More speculatively, given billions of years, could complex multicellular life have evolved? Earth's Cambrian Explosion—when complex multicellular life rapidly diversified—occurred approximately 540 million years ago, long after life first appeared. If Europa's oceans provided stable conditions for billions of years, evolution might have produced sophisticated organisms adapted to perpetual darkness and low energy availability.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Jupiter's Influence on the Solar System</h2>
              <p>
                Beyond its intrinsic fascination, Jupiter profoundly influences the entire solar system through its enormous gravitational field.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Cosmic Vacuum Cleaner</h3>
              <p>
                Jupiter acts as a gravitational shield, deflecting or capturing comets and asteroids that might otherwise impact Earth. The famous 1994 impact of Comet Shoemaker-Levy 9 demonstrated this dramatically—the comet fragmented into over 20 pieces that struck Jupiter over several days, releasing energy equivalent to 6 million megatons of TNT. Without Jupiter, Earth would experience significantly more impacts from such objects, potentially preventing the long-term stability needed for complex life to evolve.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Sculpting Orbits</h3>
              <p>
                Jupiter's gravity shapes the asteroid belt, creating Kirkwood gaps—regions where asteroids are absent due to orbital resonances with Jupiter. These resonances either eject asteroids from the belt or push them into stable orbits. Jupiter also influences comets from the outer solar system, determining whether they swing close to the Sun or are ejected from the solar system entirely.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">A Window into Planet Formation</h3>
              <p>
                As the first planet to form in our solar system, Jupiter preserves information about the solar nebula's composition. Studying Jupiter's atmosphere and internal structure reveals what materials were available when planets formed. The Galilean moon system resembles a miniature solar system—with varying compositions based on distance from Jupiter, just as inner solar system planets differ from outer planets. Understanding how the Galilean moons formed helps scientists understand planet formation generally.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Conclusion: A System of Wonders</h2>
              <p>
                Jupiter and its moons constitute one of the solar system's most extraordinary regions—a diverse collection of worlds ranging from the volcanic hellscape of Io to the potentially life-harboring oceans of Europa, from the magnetic anomaly of Ganymede to the ancient cratered surface of Callisto, all orbiting a giant planet with centuries-old storms and the strongest magnetic field of any planet.
              </p>
              <p>
                The upcoming decade promises revolutionary discoveries. Europa Clipper and JUICE will answer fundamental questions about the ocean moons while raising new ones. These missions will identify the best locations for future lander missions that could directly search for signs of life. Within 20-30 years, we may know whether life exists elsewhere in our solar system—a discovery that would rank among humanity's greatest achievements.
              </p>
              <p>
                Whether or not we find life, the Jupiter system demonstrates the incredible diversity of worlds in our cosmic neighborhood. Each moon tells a unique story of formation, evolution, and the complex interactions between gravity, heat, ice, rock, and possibly biology. As our robotic explorers venture to these distant worlds, they expand humanity's understanding of what's possible in the universe and our place within it.
              </p>
            </section>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Track Future Jupiter Missions</h3>
              <p className="mb-4">
                Stay updated on upcoming launches of missions to Jupiter and its moons, including Europa Clipper's historic journey to search for signs of life.
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
            <Link href="/articles/mars-rovers-exploration" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-purple-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Mars Rovers and Exploration</h4>
              <p className="text-gray-400 text-sm">Robotic explorers uncovering Mars mysteries</p>
            </Link>
            <Link href="/articles/exoplanets-discovery" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-purple-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Exoplanets: Discovery and Characterization</h4>
              <p className="text-gray-400 text-sm">Finding and studying planets around other stars</p>
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
