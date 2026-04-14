import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Black Holes: Detection, Science, and Recent Discoveries | Spaceflight Tracker',
  description: 'Explore the mysterious physics of black holes, how astronomers detect these invisible objects, and groundbreaking recent discoveries including the first black hole image.',
  keywords: ['black holes', 'event horizon', 'gravitational waves', 'Event Horizon Telescope', 'LIGO', 'supermassive black holes', 'astronomy'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/black-holes-detection-science',
  },
};

export default function BlackHolesPage() {
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
            <span className="text-gray-500">Black Holes: Detection and Science</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium">
              Astrophysics
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">18 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Black Holes: Detection, Science, and Recent Discoveries
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Journey into the most extreme objects in the universe—where gravity becomes so intense that not even light can escape, time itself warps, and the laws of physics reach their breaking point.
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">What Are Black Holes?</h2>
              <p>
                Black holes represent the ultimate victory of gravity over all other forces. When massive stars exhaust their nuclear fuel, the outward pressure from fusion reactions that prevented gravitational collapse suddenly disappears. The star's core implodes catastrophically in a supernova explosion, and if enough mass remains—typically more than three times the Sun's mass—nothing can stop the collapse. Matter compresses into an infinitely small point called a singularity, surrounded by the event horizon: the boundary beyond which escape becomes impossible.
              </p>
              <p>
                The physics of black holes emerges directly from Einstein's General Theory of Relativity. Einstein showed that massive objects curve the fabric of spacetime—imagine placing a bowling ball on a stretched rubber sheet. Black holes represent the extreme case: spacetime curves so severely it essentially tears, creating a one-way passage to the singularity. This isn't a metaphor—spacetime genuinely warps, affecting the passage of time itself.
              </p>
              <p>
                At the event horizon, time dilation becomes infinite. An observer watching someone fall into a black hole would see them slow down asymptotically, never quite reaching the event horizon even after infinite time. However, from the infalling person's perspective, they would cross the event horizon in finite time, experiencing increasingly extreme tidal forces (spaghettification) as different parts of their body experience different gravitational accelerations. For stellar-mass black holes, these tidal forces would tear apart any object long before reaching the event horizon.
              </p>
              <p>
                Contrary to popular misconception, black holes don't "suck in" everything around them any more than the Sun does. If the Sun instantly became a black hole of equal mass, Earth's orbit wouldn't change—we'd continue orbiting exactly as before (though we'd freeze without sunlight). Black holes only significantly affect objects that venture very close, within a few times the event horizon radius.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Types of Black Holes</h2>
              <p>
                Black holes span an enormous range of masses and formation mechanisms, traditionally divided into several categories:
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Stellar-Mass Black Holes</h3>
              <p>
                These form from collapsed massive stars, typically ranging from 5 to 100 solar masses. The Milky Way likely contains 100 million stellar-mass black holes, though detecting them remains challenging when they're not actively accreting matter. The nearest known stellar-mass black hole, Gaia BH1, lies just 1,560 light-years away—remarkably close in galactic terms.
              </p>
              <p>
                Formation requires stars at least 20-25 solar masses initially (though they lose mass during their lifetimes through stellar winds and supernova ejection). The core collapse occurs in less than a second, releasing more energy than the Sun will produce in its entire 10-billion-year lifetime. Most of this energy escapes as neutrinos, but what remains visible constitutes one of the universe's most energetic phenomena: a core-collapse supernova.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Intermediate-Mass Black Holes</h3>
              <p>
                Occupying the gap between stellar and supermassive black holes, intermediate-mass black holes (100 to 100,000 solar masses) remain somewhat mysterious. Formation mechanisms remain debated: possibly from collisions of many stars in dense stellar clusters, direct collapse of massive gas clouds in the early universe, or merger of many stellar-mass black holes.
              </p>
              <p>
                Evidence for intermediate-mass black holes comes from gravitational wave detections of unusually massive mergers and observations of unexplained X-ray sources in galaxies. Some globular clusters—dense spherical collections of ancient stars—show stellar motions suggesting a central black hole of 1,000-10,000 solar masses, though alternative explanations exist.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Supermassive Black Holes</h3>
              <p>
                Nearly every large galaxy harbors a supermassive black hole at its center, with masses ranging from millions to billions of solar masses. The supermassive black hole at the Milky Way's center, Sagittarius A* (Sgr A*), weighs approximately 4.3 million solar masses—packed into a region smaller than Mercury's orbit. The most massive known black holes exceed 40 billion solar masses, weighing as much as entire small galaxies.
              </p>
              <p>
                How supermassive black holes formed remains one of astronomy's major unsolved problems. They existed when the universe was less than 1 billion years old—seemingly insufficient time to grow from stellar-mass seeds through normal accretion. Proposed solutions include: direct collapse of massive gas clouds without forming stars first, extremely rapid accretion in the dense early universe, or merger of many intermediate-mass black holes.
              </p>
              <p>
                Supermassive black holes profoundly influence their host galaxies. Active galactic nuclei (AGN) occur when material spiraling into the black hole heats to millions of degrees, emitting tremendous radiation—sometimes outshining the entire galaxy. Jets of matter launched near the event horizon can extend for millions of light-years, affecting galaxy evolution across vast regions. There appears to be a relationship between black hole mass and the properties of the surrounding galactic bulge, suggesting co-evolution between black holes and galaxies.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Primordial Black Holes (Hypothetical)</h3>
              <p>
                These hypothetical objects might have formed in the first fraction of a second after the Big Bang from density fluctuations in the early universe. Primordial black holes could range from microscopic masses to thousands of solar masses. Some scientists propose that primordial black holes could constitute some or all of dark matter, though this remains highly speculative and faces observational constraints.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Detecting the Invisible</h2>
              <p>
                Black holes emit no light, making direct detection impossible. However, their gravitational effects on surrounding matter and spacetime itself provide multiple detection methods, each revealing different aspects of black hole physics.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Accretion Disks and X-ray Emissions</h3>
              <p>
                When a black hole exists in a binary system with a normal star, it can pull gas from its companion. This gas forms an accretion disk—a swirling disk of matter gradually spiraling inward. Friction within the disk heats material to millions of degrees, causing it to emit X-rays detectable from Earth. This process makes accreting black holes among the brightest X-ray sources in the sky.
              </p>
              <p>
                The orbital dynamics of material in the inner accretion disk reveal the black hole's mass. Matter orbiting close to a black hole must travel at relativistic speeds—significant fractions of light speed. By measuring X-ray variability and spectral features, astronomers can determine the black hole's mass, spin rate, and even test General Relativity in extreme gravitational fields.
              </p>
              <p>
                Cygnus X-1, discovered in 1964, became the first widely accepted stellar-mass black hole candidate. It consists of a 21 solar mass black hole and a 40 solar mass blue supergiant star orbiting every 5.6 days. The black hole steadily consumes material from the stellar wind of its companion, producing variable X-ray emission that has been studied for decades.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Stellar Orbital Motion</h3>
              <p>
                Observing stars orbiting an invisible massive object provides powerful evidence for black holes. The most famous example comes from the Galactic Center, where astronomers have tracked stars orbiting Sgr A* for over 25 years. Star S2 has a 16-year elliptical orbit bringing it within 17 light-hours of Sgr A*—closer than Uranus orbits the Sun—reaching speeds over 5,000 km/s (nearly 2% of light speed) at closest approach.
              </p>
              <p>
                These observations won the 2020 Nobel Prize in Physics for Reinhard Genzel and Andrea Ghez (alongside Roger Penrose for theoretical work on black holes). The orbital precision is extraordinary: measurements accurate to within 100 microseconds of arc—equivalent to resolving a tennis ball on the Moon. The motions definitively prove Sgr A* contains 4.3 million solar masses in a region no larger than 44 million kilometers—only a supermassive black hole fits this description.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Gravitational Waves: Spacetime Ripples</h3>
              <p>
                When black holes orbit each other, they gradually lose energy by emitting gravitational waves—ripples in spacetime itself propagating at light speed. As they spiral closer together, the orbital period shortens and gravitational wave amplitude increases until the final merger releases tremendous energy in a fraction of a second.
              </p>
              <p>
                LIGO (Laser Interferometer Gravitational-Wave Observatory) made history on September 14, 2015, detecting gravitational waves for the first time—two black holes of 36 and 29 solar masses that merged 1.3 billion years ago. The signal lasted just 0.2 seconds, during which the black holes completed several orbits before merging into a single 62 solar mass black hole. The missing 3 solar masses converted to gravitational wave energy—equivalent to three times the Sun's entire mass-energy released in a fraction of a second.
              </p>
              <p>
                This discovery confirmed Einstein's century-old prediction and opened an entirely new way to observe the universe. As of 2024, LIGO and its partner detectors (Virgo in Italy, KAGRA in Japan) have detected over 90 gravitational wave events, most from black hole mergers, revealing a population of black holes that was unknown before. The detection rate continues increasing as detector sensitivity improves.
              </p>
              <p>
                Gravitational wave observations reveal information impossible to obtain through electromagnetic observations: the masses and spins of both black holes, the merger dynamics, the final black hole properties, and tests of General Relativity in its most extreme regime. Some mergers produce black holes in the "upper mass gap" where stellar evolution theory predicted no black holes should exist, challenging our understanding of star death.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Relativistic Jets</h3>
              <p>
                Some accreting black holes launch powerful jets of matter at nearly light speed, extending for thousands or even millions of light-years. These jets form through processes not fully understood, likely involving the black hole's spin and magnetic fields threading the accretion disk. The jets emit across the electromagnetic spectrum, from radio waves to gamma rays.
              </p>
              <p>
                Blazars—a type of active galactic nucleus with jets pointed directly at Earth—rank among the universe's most luminous objects. The jet emission from these sources can be brighter than the entire galaxy. Variability occurs on timescales from years down to minutes, implying emission regions remarkably compact given their tremendous luminosity.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Event Horizon Telescope: Imaging the Shadow</h2>
              <p>
                For decades, directly imaging a black hole seemed impossible—they're too small and distant. But in 2019, the Event Horizon Telescope (EHT) collaboration released the first image of a black hole's shadow, achieving one of the 21st century's greatest scientific milestones.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">How It Works</h3>
              <p>
                The EHT isn't a single telescope but a global network of radio telescopes spanning from Hawaii to Antarctica, coordinated to observe the same target simultaneously. Using a technique called Very Long Baseline Interferometry (VLBI), the array acts like a single telescope the size of Earth, achieving resolution of approximately 20 microarcseconds—equivalent to seeing an orange on the Moon.
              </p>
              <p>
                Each telescope records incoming radio waves with precise timing using atomic clocks accurate to a fraction of a nanosecond. Later, supercomputers combine the data, correlating signals to reconstruct an image. The process requires petabytes of data—so much that physically shipping hard drives is faster than internet transmission. Data processing takes months of intensive computation.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">M87*: The First Image</h3>
              <p>
                The EHT's first target was M87*, the supermassive black hole at the center of galaxy M87, located 55 million light-years away. Despite this distance, M87*'s enormous size (6.5 billion solar masses) makes it appear large enough to image—the event horizon spans about 40 billion kilometers, roughly three times Neptune's orbit.
              </p>
              <p>
                The resulting image, released April 10, 2019, showed exactly what theory predicted: a bright ring of emission surrounding a dark central shadow. The shadow represents the photon sphere—the region where light orbits the black hole before either escaping or falling in. The asymmetric brightness (one side brighter than the other) results from Doppler boosting: material orbiting at nearly light speed appears brighter when moving toward Earth.
              </p>
              <p>
                The image confirmed multiple predictions: the shadow size matched the expected event horizon size for a 6.5 billion solar mass black hole, validating Einstein's equations; the bright ring showed the expected asymmetry from relativistic motion; and the overall structure agreed with sophisticated computer simulations of black hole accretion.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Sagittarius A*: Imaging Our Own Black Hole</h3>
              <p>
                In May 2022, the EHT released the second black hole image: Sgr A* at our galaxy's center, just 27,000 light-years away. Despite being 1,500 times closer than M87*, imaging Sgr A* proved more challenging. While M87* changes slowly over days or weeks, Sgr A*'s smaller size (4.3 million solar masses) means gas orbits in just minutes, causing the black hole's appearance to change during observations.
              </p>
              <p>
                The team addressed this by developing new analysis techniques to account for rapid variability, essentially creating thousands of images and averaging them. The result showed a similar ring structure to M87*, confirming that despite their mass difference of over 1,000 times, both black holes behave as General Relativity predicts.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Future Observations</h3>
              <p>
                The EHT continues improving. Adding more telescopes increases resolution and image fidelity. Observing at shorter wavelengths (from 1.3mm to 0.87mm) further sharpens images. The ultimate goal includes measuring black hole spins (which affects the shadow size and shape), detecting orbital motion of hot spots in the accretion disk, and potentially imaging other supermassive black holes.
              </p>
              <p>
                A space-based extension called the Black Hole Explorer (BHEX) is proposed—satellites working with ground telescopes to achieve even higher resolution. This could reveal structure near the event horizon at unprecedented detail, testing General Relativity more stringently and potentially detecting deviations that might point toward quantum gravity.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Extreme Physics Near Black Holes</h2>
              <p>
                The environment near a black hole represents nature's most extreme laboratory, where General Relativity's predictions become dramatic and measurable.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Time Dilation</h3>
              <p>
                Time passes more slowly in strong gravitational fields—a prediction of General Relativity confirmed by many experiments. Near a black hole, this effect becomes extreme. At the event horizon of a non-rotating black hole, time dilation becomes infinite relative to a distant observer. An astronaut orbiting close to the event horizon might experience one hour while years pass for observers far away.
              </p>
              <p>
                The movie "Interstellar" famously depicted this: characters landing on a planet orbiting close to a supermassive black hole experienced severe time dilation—one hour on the planet equaled seven years elsewhere. While dramatized, the physics is genuine: orbiting sufficiently close to a massive enough black hole produces such effects (though the specific scenario presented has physical limitations).
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Frame Dragging and the Ergosphere</h3>
              <p>
                Rotating black holes (which most real black holes likely are) drag spacetime around with them—an effect called frame dragging. Near the black hole, this becomes so extreme that nothing can remain stationary relative to distant stars; everything must co-rotate with the black hole.
              </p>
              <p>
                The ergosphere is a region outside the event horizon where frame dragging dominates. Theoretically, energy can be extracted from the ergosphere through the Penrose process: a particle entering the ergosphere splits into two, with one falling into the black hole with negative energy (from the black hole's perspective) while the other escapes with more energy than the original particle. This extracts rotational energy from the black hole. Some astrophysicists theorize that relativistic jets might be powered by variations of this process.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Hawking Radiation (Theoretical)</h3>
              <p>
                Stephen Hawking's most famous discovery: black holes aren't completely black. Quantum effects near the event horizon cause black holes to emit radiation with a characteristic temperature inversely proportional to mass. For stellar-mass black holes, this Hawking temperature is incredibly tiny—about 0.00000006 Kelvin, far colder than the cosmic microwave background—making detection impossible with current technology.
              </p>
              <p>
                However, Hawking radiation has profound theoretical implications. Black holes gradually lose mass by emitting this radiation, eventually evaporating entirely. For stellar-mass black holes, the evaporation time exceeds 10⁶⁷ years—far longer than the current age of the universe (1.4 × 10¹⁰ years). But hypothetical microscopic black holes would evaporate rapidly, possibly producing detectable signatures.
              </p>
              <p>
                Hawking radiation also leads to the black hole information paradox: quantum mechanics says information cannot be destroyed, but what happens to information that falls into a black hole? Does it disappear when the black hole evaporates, violating quantum mechanics? Or does it somehow encode in the Hawking radiation? This paradox has occupied theoretical physicists for decades and remains unresolved.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Recent Discoveries and Ongoing Mysteries</h2>

              <h3 className="text-2xl font-semibold text-white mb-3">The Most Distant Black Holes</h3>
              <p>
                Astronomers have discovered supermassive black holes in galaxies when the universe was less than 700 million years old—just 5% its current age. These black holes already weighed hundreds of millions of solar masses, presenting a significant challenge: how did they grow so large so quickly? This discovery has prompted revisions to black hole formation theories and continues driving observations with the James Webb Space Telescope, which can detect even earlier black holes.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Tidal Disruption Events</h3>
              <p>
                Occasionally, a star ventures too close to a supermassive black hole and gets torn apart by tidal forces—a tidal disruption event (TDE). Half the star's material falls into the black hole while the rest is flung away, creating a bright flare lasting months to years. Observing TDEs reveals black holes that were previously undetected and provides information about stellar structure, black hole masses, and accretion physics. Surveys now detect roughly one TDE per year.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Wandering Black Holes</h3>
              <p>
                Most supermassive black holes sit at galaxy centers, but some wander. When galaxies merge, their central black holes eventually merge, but the process takes millions of years. During this time, gravitational interactions can eject black holes from galaxies entirely—recoiling from the final merger with speeds up to thousands of kilometers per second. Finding these wandering black holes remains challenging, but several candidates have been identified through peculiar gravitational lensing effects and offset active galactic nuclei.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">The Mass Gap Mystery</h3>
              <p>
                Gravitational wave observations revealed unexpected gaps in the black hole mass distribution. Few black holes exist between 2-5 solar masses (the "lower mass gap" where the dividing line between neutron stars and black holes remains unclear) or between 50-120 solar masses (the "upper mass gap" where pair-instability supernovae should prevent black hole formation). Yet LIGO has detected mergers producing black holes in these supposedly forbidden ranges, suggesting our understanding of stellar evolution and supernovae remains incomplete.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Testing General Relativity</h3>
              <p>
                Black holes provide the ultimate test of Einstein's General Relativity. All observations so far confirm its predictions with remarkable precision. The EHT images match theoretical predictions. Gravitational wave signals from mergers agree with numerical relativity simulations. Stellar orbits around Sgr A* follow precisely the expected paths, even exhibiting relativistic precession (the orbit itself rotates, an effect not present in Newtonian gravity).
              </p>
              <p>
                However, physicists anticipate General Relativity must eventually break down, likely at the singularity where quantum effects become important. Detecting deviations from General Relativity—signatures of quantum gravity—remains a holy grail of theoretical physics. Future observations may become sensitive enough to detect such deviations, if they exist.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Conclusion: Windows into Fundamental Physics</h2>
              <p>
                Black holes have evolved from mathematical curiosities to observational reality to precision laboratories for fundamental physics. We've progressed from debating their existence to imaging their shadows, detecting their mergers, and tracking stars whipping around them at relativistic speeds.
              </p>
              <p>
                Yet profound mysteries remain. What lies beyond the event horizon? Do singularities actually exist, or does quantum gravity prevent infinite density? How do supermassive black holes form so early in the universe? What is the complete explanation for relativistic jets? Can we extract energy from rotating black holes?
              </p>
              <p>
                The coming decades promise extraordinary discoveries. Next-generation gravitational wave detectors will observe black hole mergers throughout the universe. Improved EHT observations will image black hole surroundings in unprecedented detail. The James Webb Space Telescope continues finding the earliest black holes. New theoretical work may resolve the information paradox and unify General Relativity with quantum mechanics.
              </p>
              <p>
                Black holes represent the universe at its most extreme—where spacetime warps dramatically, where quantum mechanics and gravity collide, where the laws of physics reach their limits. Studying them reveals the fundamental nature of reality itself, pushing human understanding to the very boundaries of the possible. As our observations improve and theories develop, these cosmic enigmas will continue yielding secrets about the universe's past, present, and ultimate fate.
              </p>
            </section>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Explore Space Telescopes</h3>
              <p className="mb-4">
                Learn about the space telescopes like James Webb and Hubble that help us study black holes and other cosmic phenomena across the universe.
              </p>
              <Link href="/articles/space-telescopes">
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                  Read About Space Telescopes
                </button>
              </Link>
            </div>

          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/space-telescopes" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-indigo-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Space Telescopes</h4>
              <p className="text-gray-400 text-sm">Observatories studying the cosmos</p>
            </Link>
            <Link href="/articles/history-space-exploration" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-indigo-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">History of Space Exploration</h4>
              <p className="text-gray-400 text-sm">From Sputnik to the modern era</p>
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
