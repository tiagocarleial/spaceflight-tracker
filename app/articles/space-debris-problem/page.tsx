import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Space Debris Problem: Kessler Syndrome, Tracking, and Cleanup | Spaceflight Tracker',
  description: 'Explore the growing threat of space debris, Kessler syndrome cascading collisions, how agencies track millions of objects, and innovative solutions for cleaning up Earth orbit.',
  keywords: ['space debris', 'Kessler syndrome', 'orbital debris', 'space junk', 'satellite collisions', 'space traffic management', 'debris removal'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/space-debris-problem',
  },
};

export default function SpaceDebrisPage() {
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
            <span className="text-gray-500">Space Debris Problem</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium">
              Space Safety
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">16 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Space Debris: The Growing Threat to Orbital Operations
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Discover the escalating danger of space debris, from paint flecks traveling at bullet speeds to defunct satellites threatening catastrophic collisions, and explore innovative solutions to clean up Earth's orbital environment.
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Invisible Threat Above Us</h2>
              <p>
                Earth orbit hosts a hidden danger that grows daily: millions of pieces of space debris traveling at velocities up to 28,000 km/h—ten times faster than a bullet. At these speeds, a paint fleck carries the energy of a bowling ball dropped from a building. A 10-cm piece of debris striking a satellite releases energy equivalent to 7 kg of TNT. Even millimeter-sized particles can penetrate spacecraft shielding, damaging critical systems or killing astronauts.
              </p>
              <p>
                This debris comes from decades of space activity. Defunct satellites, spent rocket stages, fragments from explosions and collisions, paint flecks, frozen coolant droplets, and even astronaut gloves lost during spacewalks—all contribute to an increasingly congested orbital environment. The problem accelerates: more objects mean more collisions, each creating thousands of new fragments, which cause more collisions in an exponential cascade.
              </p>
              <p>
                The threat isn't hypothetical. In 2009, active communications satellite Iridium 33 collided with defunct Russian satellite Cosmos 2251 at 11.7 km/s, destroying both spacecraft and creating over 2,300 trackable debris pieces plus tens of thousands too small to track. In 2021, a piece of debris struck the International Space Station's robotic arm, creating a 5-mm hole—fortunately not penetrating deeply enough to disable the arm. These incidents represent just the visible tip of an enormous problem.
              </p>
              <p>
                Unlike terrestrial pollution that falls to the ground or washes away, orbital debris doesn't naturally disappear quickly. Objects in low Earth orbit (LEO, below 600 km) gradually succumb to atmospheric drag over months to years, burning up during reentry. But debris above 800 km can persist for decades or centuries. At geostationary orbit (36,000 km), where communications satellites operate, debris remains essentially forever without active removal.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Kessler Syndrome: Cascading Collisions</h2>
              <p>
                In 1978, NASA scientist Donald Kessler proposed a nightmarish scenario: at some critical density, orbital debris would trigger cascading collisions—each collision creating fragments that cause more collisions in a runaway chain reaction. This "Kessler Syndrome" or "collisional cascading" would render certain orbital regions unusable for generations, potentially trapping humanity on Earth by making spaceflight prohibitively dangerous.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">The Physics of Catastrophe</h3>
              <p>
                Orbital velocity at typical satellite altitudes (400-800 km) ranges from 7.5-7.8 km/s. When two objects collide, their relative velocity can reach 10-15 km/s if orbiting in opposite directions. At these hypervelocity impacts, both objects completely shatter, converting their kinetic energy into heat and fragments.
              </p>
              <p>
                A collision between two 1,000 kg satellites at 10 km/s releases energy equivalent to 12 tons of TNT—comparable to a tactical nuclear weapon. This energy vaporizes some material but, crucially, creates thousands of fragments ranging from microscopic particles to chunks weighing kilograms. Each fragment becomes a new projectile capable of destroying other satellites.
              </p>
              <p>
                Computer models suggest we've already reached—or are approaching—critical density in heavily used orbital shells. Even without launching anything new, collision rates would increase exponentially over decades as existing debris collides and fragments. Some regions of space could become unusable within 50-100 years without active debris removal.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Warning Signs</h3>
              <p>
                Several incidents demonstrate Kessler Syndrome's plausibility. In 2007, China tested an anti-satellite weapon by destroying their own defunct weather satellite Fengyun-1C at 850 km altitude. The intentional destruction created over 3,500 trackable pieces plus hundreds of thousands too small to track—the single worst debris-creation event in history. Many fragments remain in orbit, regularly threatening other satellites and the ISS.
              </p>
              <p>
                In 2021, Russia conducted an anti-satellite test destroying Cosmos 1408, creating 1,500+ trackable fragments and forcing ISS astronauts to shelter in docked spacecraft as a precaution. These deliberate destructions, along with accidental collisions and satellite explosions from residual fuel and pressure, steadily increase debris populations.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Tracking the Invisible: Space Surveillance Networks</h2>
              <p>
                Protecting operational satellites requires knowing where debris is. Space surveillance networks operated by the U.S., Russia, Europe, China, and others track orbital objects using ground-based radars and optical telescopes, plus space-based sensors.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">U.S. Space Surveillance Network</h3>
              <p>
                The U.S. Space Surveillance Network (SSN), operated by the Space Force's 18th Space Defense Squadron, maintains the most comprehensive debris catalog. As of 2024, the SSN tracks approximately 27,000 objects larger than 10 cm—including 5,000+ active satellites, 2,500+ defunct satellites, 17,000+ pieces of fragmentation debris, and 2,500+ spent rocket bodies.
              </p>
              <p>
                However, these 27,000 tracked objects represent a tiny fraction of total debris. Estimates suggest 130 million objects 1mm or larger orbit Earth, including 1 million pieces 1-10 cm in size and 34,000 objects larger than 10 cm. Objects smaller than 10 cm in LEO or 1 meter in geostationary orbit (GEO) generally cannot be routinely tracked, yet remain extremely hazardous.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Detection Methods</h3>
              <p>
                Ground-based radars provide the primary tracking capability for LEO objects. Large radars like the Space Fence in the Marshall Islands detect objects as small as 10 cm at LEO altitudes. Radars work day or night regardless of weather, providing continuous monitoring. However, their coverage decreases with altitude—tracking small objects at GEO requires larger, more powerful radars.
              </p>
              <p>
                Optical telescopes track objects in GEO and high elliptical orbits by observing sunlight reflecting off spacecraft and debris. These systems achieve impressive resolution but require clear skies and darkness, limiting operational time. Networks of distributed telescopes provide continuous coverage as Earth rotates.
              </p>
              <p>
                Space-based sensors offer unique advantages: no atmospheric interference, continuous observation, and ability to detect objects in certain orbital regimes difficult to observe from ground. However, space-based systems are expensive and can themselves become debris if they fail.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Collision Prediction and Avoidance</h3>
              <p>
                The Combined Space Operations Center (CSpOC) analyzes tracking data to predict conjunctions—close approaches between objects. When two objects will pass within a few hundred meters to a kilometer, warnings are issued to satellite operators. Typical procedure involves calculating probability of collision; if it exceeds thresholds (often 1 in 10,000), operators may command collision avoidance maneuvers.
              </p>
              <p>
                The ISS performs debris avoidance maneuvers several times per year, firing thrusters or using visiting spacecraft engines to adjust its orbit. In 2020 alone, the ISS conducted three such maneuvers. Commercial satellites perform these maneuvers more frequently as the orbital environment becomes increasingly congested.
              </p>
              <p>
                Satellite operators face difficult decisions. False alarms occur—predictions showing high collision probability where objects ultimately pass safely. But conservative responses waste fuel, shortening satellite lifetimes. Operators must balance risk against operational costs, a calculus complicated by uncertainty in debris orbital predictions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Mega-Constellation Challenge</h2>
              <p>
                The past decade saw explosive growth in satellite deployments, particularly large constellations providing global internet coverage. SpaceX's Starlink alone has launched over 5,000 satellites, with plans for 12,000 to 42,000. OneWeb, Amazon's Project Kuiper, and Chinese constellations add thousands more. While these satellites offer tremendous benefits, they dramatically increase orbital congestion.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Density in Critical Orbits</h3>
              <p>
                Most mega-constellations operate in LEO between 300-600 km altitude. At these altitudes, atmospheric drag provides natural cleanup—dead satellites deorbit within 1-5 years. However, during operational lifetimes, thousands of satellites share relatively narrow altitude bands, dramatically increasing encounter rates between objects.
              </p>
              <p>
                Starlink satellites perform over 25,000 collision avoidance maneuvers annually—dozens per day—to avoid close approaches with other objects. This number will only increase as more satellites launch. Each maneuver consumes fuel and requires ground operator attention, both limited resources.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Design for Demise</h3>
              <p>
                Modern constellation operators implement "design for demise" principles: satellites must deorbit within 5-25 years after mission end (depending on national regulations), incorporate propulsion for active deorbiting, and minimize debris generation if they fragment. Starlink satellites use ion drives to lower their orbits for controlled atmospheric reentry at end of life.
              </p>
              <p>
                However, reliability concerns remain. If 1% of constellation satellites fail and cannot deorbit, that still leaves hundreds of defunct satellites in critical orbital shells. Early Starlink satellites experienced higher-than-expected failure rates, though later versions show improvements. Long-term sustainability requires extremely high reliability—99.5% or better—which remains challenging to achieve.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Astronomical Impacts</h3>
              <p>
                Beyond collision risks, mega-constellations affect astronomical observations. Satellites reflect sunlight, creating bright streaks in telescope images that can obscure faint objects or contaminate data. Radio emissions from satellites interfere with radio astronomy. While these impacts don't threaten satellites directly, they represent a form of orbital "pollution" affecting scientific research.
              </p>
              <p>
                Mitigation efforts include darkening satellite surfaces to reduce reflectivity and coordinating with astronomers to avoid critical observation targets. However, as constellations grow from thousands to tens of thousands of satellites, even partially effective mitigation may not prevent significant impacts on astronomy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Debris Mitigation: Prevention Over Cure</h2>
              <p>
                International guidelines aim to minimize debris creation, focusing on preventing problems rather than cleaning existing debris—a far more difficult challenge.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">The 25-Year Rule</h3>
              <p>
                International guidelines recommend that satellites and rocket stages in LEO deorbit within 25 years of mission completion. This can be achieved through natural atmospheric drag (for altitudes below ~600 km), propulsive deorbiting to accelerate reentry, or moving to "graveyard orbits" above GEO where they won't interfere with operational satellites.
              </p>
              <p>
                Compliance remains imperfect. Approximately 60% of objects launched since 2000 meet the 25-year rule, but that means 40% don't—thousands of objects will clutter orbits for decades or centuries. Strengthening regulations and enforcement remains an ongoing policy challenge.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Passivation</h3>
              <p>
                Many historical debris-creation events resulted from explosions of rocket stages or satellites long after their missions ended. Residual fuel, pressurized gases, and energized batteries can explode years later, creating thousands of fragments.
              </p>
              <p>
                Passivation—depleting fuel, venting pressurized systems, and discharging batteries—prevents such explosions. Modern launchers routinely passivate upper stages, dramatically reducing explosion rates. Older stages that weren't passivated remain ticking time bombs; dozens have exploded over the decades, and more will likely follow.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Collision Avoidance Technology</h3>
              <p>
                Automated collision avoidance systems allow satellites to maneuver autonomously when debris approaches, without waiting for ground controller intervention. SpaceX's Starlink satellites use such systems, automatically performing avoidance maneuvers based on DoD tracking data. As satellite numbers increase, autonomous systems become necessary—human operators cannot manage thousands of daily close approach warnings.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">International Coordination</h3>
              <p>
                The Inter-Agency Space Debris Coordination Committee (IADC), founded in 1993, develops international debris mitigation guidelines. The UN Committee on the Peaceful Uses of Outer Space (COPUOS) endorses these guidelines, though they remain non-binding. Strengthening international cooperation and establishing enforceable regulations represents a critical governance challenge.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Active Debris Removal: Cleaning Up the Mess</h2>
              <p>
                Mitigation alone won't solve the debris problem. Even perfect compliance with mitigation guidelines still leaves collision rates increasing in some orbital shells due to existing debris. Active Debris Removal (ADR)—physically removing large objects from orbit—is necessary to stabilize the environment.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Technical Challenges</h3>
              <p>
                Removing debris presents extraordinary difficulties. Target objects are often tumbling unpredictably, lack cooperative features like grapple points, may be damaged or structurally unstable, and operate in orbits requiring significant fuel to reach. Each removal mission must capture the object without creating more debris, then safely deorbit it—all while the removal spacecraft itself operates in a debris-filled environment.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Capture Technologies</h3>
              <p>
                Various capture methods are being developed and tested:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Robotic Arms:</strong> Spacecraft approaches debris and grasps it with a robotic arm, similar to ISS operations. Requires precise navigation and control. Successfully demonstrated in limited on-orbit servicing missions.</li>
                <li><strong className="text-white">Nets:</strong> Launch a net to entangle the debris, then reel it in or attach a deorbit device. ESA's RemoveDEBRIS mission successfully demonstrated net capture in 2018 on a deployed target.</li>
                <li><strong className="text-white">Harpoons:</strong> Fire a harpoon into the debris to attach a tether, then maneuver the captured object. RemoveDEBRIS also tested this concept successfully in 2019.</li>
                <li><strong className="text-white">Electrodynamic Tethers:</strong> Deploy a long conductive tether that interacts with Earth's magnetic field, generating drag that lowers the orbit. No physical contact needed, reducing collision risk.</li>
                <li><strong className="text-white">Space Tugs:</strong> Specialized spacecraft designed to rendezvous with defunct satellites, attach propulsion modules, and guide them to graveyard orbits or deorbit them.</li>
                <li><strong className="text-white">Lasers:</strong> Ground-based or space-based lasers ablate material from debris surfaces, creating thrust that alters orbits. Could nudge small debris into atmospheric reentry without physical contact, though technical and political challenges remain significant.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-3">Demonstration Missions</h3>
              <p>
                Several missions have demonstrated removal technologies. Japan's ELSA-d mission (launched 2021) demonstrated magnetic capture and release of a simulated debris object. ClearSpace-1, an ESA mission planned for 2026, will capture and deorbit a Vespa rocket upper stage—marking the first removal of actual orbital debris. Astroscale is developing commercial debris removal services, planning multiple missions in the late 2020s.
              </p>
              <p>
                These early missions target relatively benign objects: cooperative targets or known debris in accessible orbits. Future missions must tackle more challenging targets: tumbling defunct satellites, fragmented spacecraft, and objects in crowded orbital regions.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Economic and Policy Barriers</h3>
              <p>
                Debris removal faces a classic "tragedy of the commons" problem. The orbital environment is shared, debris threatens everyone, but removal costs fall on whoever performs it. Without international agreements or regulations requiring operators to pay for debris removal, market incentives favor continuing to pollute rather than cleaning up.
              </p>
              <p>
                Cost remains prohibitive. Early removal missions will cost $50-200 million per object removed—economically untenable at scale. Developing reusable removal spacecraft that can capture and deorbit multiple objects per mission could reduce costs, but substantial development remains necessary.
              </p>
              <p>
                Legal and liability issues complicate matters. Who owns defunct satellites? Who authorizes removal? What happens if a removal attempt damages the target or creates more debris? International frameworks addressing these questions are underdeveloped, creating legal uncertainty that delays operational removal systems.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Path Forward: Sustainable Space Operations</h2>
              <p>
                Solving the debris problem requires coordinated action across technical, economic, legal, and political dimensions.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Improved Tracking</h3>
              <p>
                Better tracking enables better collision avoidance. Next-generation sensors like the Space Fence and commercial tracking services are improving coverage and sensitivity. Eventual goals include tracking objects down to 1 cm at LEO, comprehensive GEO monitoring, and real-time conjunction assessment. Machine learning and AI improve prediction accuracy, reducing false alarms and enabling more efficient operations.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Space Traffic Management</h3>
              <p>
                As orbital operations scale, coordinated traffic management becomes essential—analogous to air traffic control for aviation. This requires shared tracking data, standardized communication protocols, internationally recognized "rules of the road," and potentially automatic collision avoidance systems with standardized behaviors so satellites predictably maneuver when threatened.
              </p>
              <p>
                Unlike aviation, space lacks a central authority. Developing governance frameworks that respect national sovereignty while enabling effective coordination represents a major political challenge. Organizations like the Space Data Association facilitate voluntary data sharing, but comprehensive international frameworks remain elusive.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Economic Incentives</h3>
              <p>
                Creating market incentives for sustainable operations could drive behavioral change. Proposals include orbital use fees funding debris removal, insurance requirements ensuring operators can pay for end-of-life disposal, deposit-return schemes where operators pay fees at launch refunded when satellites successfully deorbit, and liability frameworks making operators financially responsible for collisions and debris creation.
              </p>
              <p>
                Implementing such mechanisms faces political resistance—no nation wants to disadvantage its space industry. However, without economic drivers for sustainability, voluntary guidelines will likely prove insufficient as launch rates increase.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Technology Development</h3>
              <p>
                Continued investment in removal technologies, improved spacecraft design minimizing debris creation, better materials that completely burn up during reentry, and eventually, large-scale removal of the most threatening debris will all be necessary. This requires sustained funding and international cooperation to develop and deploy solutions at the scale needed.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Conclusion: A Race Against Time</h2>
              <p>
                The space debris problem represents humanity's first pollution crisis extending beyond Earth into the cosmic environment. Unlike terrestrial pollution, orbital debris doesn't naturally clean itself up quickly—objects persist for decades or centuries, threatening all space operations and potentially trapping humanity on Earth if cascading collisions render key orbital regions unusable.
              </p>
              <p>
                We face a critical choice. Current trajectories lead toward Kessler Syndrome in heavily-used orbital shells within decades—not centuries. The window for preventing catastrophic cascading collisions is closing. Without aggressive action—strengthened mitigation guidelines, active debris removal, space traffic management, and international cooperation—we risk losing access to the orbital resources that have become integral to modern civilization: communications, weather forecasting, navigation, Earth observation, and scientific research.
              </p>
              <p>
                Yet the challenge is solvable. We possess the technology to track debris, design satellites for demise, and remove the most threatening objects. What's required is collective will: international agreements with real enforcement, economic mechanisms creating market incentives for sustainability, sustained investment in removal technology and operations, and recognition that orbital space is a shared resource requiring responsible stewardship.
              </p>
              <p>
                The decisions we make in the next decade will determine whether space remains accessible for generations to come or becomes an increasingly hazardous realm where each launch, each satellite, and each astronaut faces exponentially growing risks. We've created this problem through decades of space activity. Now we must solve it before we lose the final frontier through our own negligence.
              </p>
            </section>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Track Satellite Launches</h3>
              <p className="mb-4">
                Follow upcoming satellite launches and space missions, including new technologies designed to address the space debris challenge.
              </p>
              <Link href="/launches">
                <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors">
                  View Launch Schedule
                </button>
              </Link>
            </div>

          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/satellite-constellations" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-orange-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Satellite Constellations</h4>
              <p className="text-gray-400 text-sm">Modern satellite networks transforming connectivity</p>
            </Link>
            <Link href="/articles/understanding-iss" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-orange-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Understanding the ISS</h4>
              <p className="text-gray-400 text-sm">The International Space Station in low Earth orbit</p>
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
