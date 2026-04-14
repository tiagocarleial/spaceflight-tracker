import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exoplanets: Discovery and Characterization of Alien Worlds | Spaceflight Tracker',
  description: 'Explore how astronomers discover and study planets around other stars, detection methods, habitable zones, and missions like Kepler and TESS revealing thousands of exoplanets.',
  keywords: ['exoplanets', 'Kepler telescope', 'TESS mission', 'habitable zone', 'transit method', 'alien planets', 'extrasolar planets'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/articles/exoplanets-discovery',
  },
};

export default function ExoplanetsPage() {
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
            <span className="text-gray-500">Exoplanets: Discovery and Characterization</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
              Exoplanets
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">17 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exoplanets: Discovering and Characterizing Alien Worlds
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Journey beyond our solar system to explore thousands of worlds orbiting distant stars, from scorching hot Jupiters to potentially habitable Earth-like planets waiting to reveal their secrets.
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Dawn of Exoplanet Science</h2>
              <p>
                For millennia, humanity wondered if other worlds orbited distant stars. Ancient Greek philosophers debated the possibility. Giordano Bruno suggested infinite worlds in 1584—a heretical idea that contributed to his execution. But until the 1990s, planets beyond our solar system remained purely speculative. Detecting them pushed the limits of observational technology, requiring measurement precision that didn't exist.
              </p>
              <p>
                The breakthrough came October 6, 1995, when Michel Mayor and Didier Queloz announced the discovery of 51 Pegasi b—a Jupiter-mass planet orbiting a Sun-like star 50 light-years away. This discovery, earning the 2019 Nobel Prize in Physics, opened the floodgates. Within a year, several more exoplanets were confirmed. Within a decade, hundreds. Today, the confirmed count exceeds 5,600 exoplanets in over 4,000 planetary systems, with thousands more candidates awaiting confirmation.
              </p>
              <p>
                These discoveries fundamentally changed our understanding of planetary systems. Early detections revealed "hot Jupiters"—gas giants orbiting closer to their stars than Mercury orbits our Sun, completing orbits in days rather than years. Such planets couldn't form where we find them; they must have migrated inward, challenging theories of planetary formation developed from studying our solar system alone.
              </p>
              <p>
                As detection methods improved, astronomers found increasingly diverse worlds: super-Earths (rocky planets more massive than Earth), mini-Neptunes (ice giants smaller than Neptune), planets in extremely elliptical orbits, planets orbiting binary stars, rogue planets drifting through interstellar space, and systems with seven or eight planets like our own solar system. This diversity demonstrated that planetary systems are common but our solar system isn't necessarily typical.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Detection Methods: Finding Invisible Worlds</h2>
              <p>
                Exoplanets are extraordinarily difficult to detect. Even large planets are tiny compared to their stars—Jupiter is 1/1000th the Sun's diameter and emits essentially no light of its own. Detecting Earth-like planets around Sun-like stars requires measuring brightness changes of 0.01% or velocity changes of 10 cm/s—walking speed—in stars hundreds of light-years away. Multiple ingenious methods have been developed to overcome these challenges.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Radial Velocity (Doppler Wobble)</h3>
              <p>
                The first successful detection method, radial velocity measures stellar motion caused by orbiting planets. When a planet orbits a star, both actually orbit their common center of mass. For a Sun-Jupiter system, this center lies just outside the Sun's surface, causing the Sun to trace a small circle with velocity of about 13 m/s. For Sun-Earth, the velocity is just 9 cm/s.
              </p>
              <p>
                As the star moves toward and away from Earth, its light spectrum shifts slightly due to the Doppler effect—the same phenomenon that changes a siren's pitch as an ambulance passes. By precisely measuring these spectral shifts using high-resolution spectrographs, astronomers can detect the star's motion and infer the planet's presence, minimum mass, and orbital period.
              </p>
              <p>
                This method favors massive planets in close orbits (causing larger stellar velocities) and cannot determine if the orbit is tilted relative to our line of sight. Despite these limitations, radial velocity discovered hundreds of exoplanets and remains crucial for confirming planets found by other methods and measuring their masses.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Transit Method: Cosmic Eclipses</h3>
              <p>
                The transit method detects planets that pass in front of their stars from our perspective, causing tiny periodic dips in the star's brightness. When Jupiter transits the Sun (as seen from beyond our solar system), brightness decreases by 1%. For Earth, just 0.008%—requiring extraordinary photometric precision to detect.
              </p>
              <p>
                Transit observations reveal multiple planetary properties. The transit depth indicates the planet's size relative to its star. The transit duration reveals the orbital period and distance. Multiple transits confirm the periodicity. If combined with radial velocity measurements providing mass, astronomers can calculate the planet's density—revealing whether it's rocky like Earth, gaseous like Jupiter, or something exotic.
              </p>
              <p>
                The transit method requires geometric alignment—the planet's orbit must pass between us and its star, which occurs for only about 0.5% of planetary systems (for Earth-like orbits; higher for close-in planets). This means surveying thousands of stars is necessary to find transiting planets. But when successful, transits provide the most comprehensive planetary characterization.
              </p>
              <p>
                The transit method has discovered over 75% of all confirmed exoplanets, driven largely by NASA's Kepler Space Telescope. The method also enables atmospheric characterization: when starlight passes through a planet's atmosphere during transit, molecules absorb specific wavelengths, creating spectral signatures that reveal atmospheric composition.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Direct Imaging</h3>
              <p>
                Directly photographing exoplanets presents extreme challenges. A planet next to its star is like photographing a firefly next to a searchlight from thousands of kilometers away. The star is typically millions to billions of times brighter than the planet, and the tiny angular separation requires exceptional resolution.
              </p>
              <p>
                Success requires large telescopes with adaptive optics (correcting atmospheric distortion), coronagraphs (blocking starlight while allowing planet light through), or space-based observations avoiding atmospheric interference. These techniques have directly imaged several dozen exoplanets—mostly young, hot Jupiter-mass planets in wide orbits around their stars, where the planet-star contrast is most favorable.
              </p>
              <p>
                Direct imaging provides unique advantages: observing multiple planets simultaneously, measuring their light spectra directly (revealing atmospheric composition and temperature), and detecting planets in any orbital orientation. As technology improves, direct imaging will image smaller, cooler, more Earth-like planets.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Gravitational Microlensing</h3>
              <p>
                When a star passes in front of a more distant background star from our perspective, its gravity acts as a lens, temporarily magnifying the background star's light. If the foreground star has a planet, the planet creates an additional small spike in the magnification curve lasting hours to days.
              </p>
              <p>
                Microlensing can detect planets at larger orbital distances than other methods and is sensitive to low-mass planets, including Earth-mass planets. However, the events are unpredictable, non-repeating, and the planets are typically thousands of light-years away, making follow-up observations impossible. Microlensing has discovered over 100 exoplanets and provided statistical insights into planet occurrence rates.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Astrometry</h3>
              <p>
                Astrometry measures a star's position on the sky with extreme precision, detecting the tiny circular or elliptical motion caused by orbiting planets. This method works best for massive planets in relatively wide orbits around nearby stars. While historically limited by measurement precision, space-based observatories like Gaia are revolutionizing astrometric planet detection, potentially discovering thousands of planets through precise stellar position measurements.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Kepler Revolution</h2>
              <p>
                NASA's Kepler Space Telescope, launched in March 2009, revolutionized exoplanet science through sheer statistical power. Staring continuously at 150,000 stars in a single field of view near the constellation Cygnus, Kepler monitored their brightness with unprecedented precision, searching for transiting planets.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Unprecedented Discoveries</h3>
              <p>
                During its primary mission (2009-2013), Kepler discovered 2,662 confirmed exoplanets plus thousands of candidates. It revealed that planets are extremely common—virtually every star hosts at least one planet. It discovered the first Earth-sized planets in habitable zones, multiple-planet systems with up to eight planets, circumbinary planets orbiting binary star systems, and a complete statistical picture of planet populations.
              </p>
              <p>
                Key findings transformed planetary science. Super-Earths and mini-Neptunes—planets between Earth and Neptune in size, which don't exist in our solar system—are actually the most common planet type. Small rocky planets are abundant. Many stars host multiple planets in compact orbital configurations. Planet occurrence increases with stellar metallicity (stars with more heavy elements form more planets).
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">The K2 Mission</h3>
              <p>
                After reaction wheel failures ended Kepler's primary mission in 2013, engineers devised K2—using solar radiation pressure for stability while observing different fields for 80-day campaigns. K2 discovered 479 additional confirmed planets before Kepler's retirement in October 2018, bringing the mission's total to over 2,700 confirmed planets.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Statistical Insights</h3>
              <p>
                Kepler's statistical completeness enabled groundbreaking population studies. Extrapolating from Kepler's sample to the entire galaxy suggests billions of potentially habitable planets exist in the Milky Way. One estimate suggests 20-50% of Sun-like stars host potentially habitable rocky planets—implying the nearest such planet orbits a star within about 20 light-years.
              </p>
              <p>
                The "radius valley" discovery showed that planets with radii around 1.5-2 Earth radii are less common than slightly smaller or larger planets. This suggests two distinct populations: rocky super-Earths and mini-Neptunes with substantial hydrogen-helium atmospheres, with few intermediate cases.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">TESS: All-Sky Survey</h2>
              <p>
                The Transiting Exoplanet Survey Satellite (TESS), launched April 2018, continues Kepler's legacy with a different strategy. Instead of staring at one field, TESS surveys nearly the entire sky, monitoring 200,000+ stars for transiting planets—focusing on the brightest nearby stars rather than faint distant ones.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Mission Strategy</h3>
              <p>
                TESS divides the sky into 26 sectors, observing each for 27 days before moving on. This strategy prioritizes finding planets around nearby, bright stars where follow-up observations—atmospheric spectroscopy, radial velocity confirmation, direct imaging—are easier. While TESS detects fewer planets than Kepler, the planets it finds are more accessible for detailed characterization.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Notable Discoveries</h3>
              <p>
                As of 2024, TESS has discovered over 400 confirmed exoplanets with thousands more candidates. Notable finds include TOI-700 d, an Earth-sized planet in the habitable zone of a red dwarf star 100 light-years away; LTT 1445 A b, a rocky planet 22 light-years away ideal for atmospheric characterization; HD 21749 c, one of the smallest planets TESS has found; and several compact multi-planet systems with complex orbital dynamics.
              </p>
              <p>
                TESS has discovered multiple planets in systems previously known to host planets, revealing system architectures. It's found planets around very young stars (suggesting rapid planet formation), very old stars (showing planets survive billions of years), and unusual configurations challenging formation theories.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Habitable Zone: Searching for Life</h2>
              <p>
                The habitable zone (or "Goldilocks zone") represents orbital distances where liquid water could persist on a planet's surface—not too hot, not too cold, but just right. For Sun-like stars, this zone extends roughly from 0.95 to 1.4 AU (Venus's orbit to slightly beyond Mars). For smaller, cooler stars, the zone lies closer; for larger, hotter stars, farther out.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Factors Affecting Habitability</h3>
              <p>
                Habitability depends on multiple factors beyond orbital distance. Atmospheric composition dramatically affects surface temperature through greenhouse effects—Venus receives twice Earth's solar energy but its dense CO₂ atmosphere creates 462°C surface temperatures. Planetary mass affects gravitational retention of atmospheres. Magnetic fields protect atmospheres from stellar winds. Tidal locking (one hemisphere perpetually facing the star) occurs for close-in planets, creating extreme temperature differences unless atmospheric circulation redistributes heat.
              </p>
              <p>
                Red dwarf stars (M-dwarfs) constitute 75% of all stars and host numerous planets, but their habitable zones lie very close to the star. Planets at such distances are likely tidally locked and exposed to intense flares and radiation. Can life survive such conditions? Some models suggest thick atmospheres could distribute heat and protect life, while others are pessimistic.
              </p>
              <p>
                Ocean worlds—planets covered entirely by water—might support life even if surface conditions seem uninhabitable. Subsurface oceans like those on Europa and Enceladus demonstrate water can exist far from traditional habitable zones if internal heating provides energy.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Notable Potentially Habitable Exoplanets</h3>
              <p>
                Proxima Centauri b orbits the nearest star (4.2 light-years away) in its habitable zone—a rocky planet possibly hosting liquid water, though exposed to intense stellar flares. Kepler-442b, 1,200 light-years away, is 60% larger than Earth, receives 70% of Earth's sunlight, and orbits in the habitable zone of a K-type star—considered one of the most potentially habitable exoplanets.
              </p>
              <p>
                The TRAPPIST-1 system, 40 light-years away, hosts seven Earth-sized planets, three or four in the habitable zone—an extraordinary system ideal for comparative studies. TOI-700 e, discovered in 2023, is 95% Earth's size orbiting in the habitable zone of a red dwarf 100 light-years away. K2-18 b, a super-Earth in the habitable zone 120 light-years away, shows signs of water vapor in its atmosphere—though whether it's a habitable ocean world or a hostile mini-Neptune remains debated.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Atmospheric Characterization: Reading Planetary Spectra</h2>
              <p>
                Understanding exoplanet atmospheres reveals composition, temperature, weather, and potentially biosignatures—signs of life. Several techniques enable atmospheric studies:
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Transmission Spectroscopy</h3>
              <p>
                During transits, starlight passes through the planet's atmosphere (if present). Molecules absorb specific wavelengths, creating absorption features in the spectrum. Comparing the star's spectrum during and outside transit reveals atmospheric composition. This method has detected water vapor, methane, carbon dioxide, sodium, potassium, and more complex molecules in hot Jupiter atmospheres.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Emission Spectroscopy</h3>
              <p>
                For planets in circular orbits, secondary eclipses occur when planets pass behind their stars. Observing immediately before and during the eclipse allows subtracting starlight, leaving only planet emission. This reveals thermal emission spectra indicating temperature structure and molecular abundances in the planet's dayside atmosphere.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Phase Curves</h3>
              <p>
                Continuously monitoring a planet throughout its orbit reveals brightness variations as different hemispheres face us. Phase curves indicate heat distribution between day and night sides, rotation rates, cloud patterns, and atmospheric circulation. Hot Jupiters often show "hot spots" offset from the substellar point due to atmospheric winds.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">James Webb Space Telescope: Revolutionary Capabilities</h3>
              <p>
                JWST, operational since 2022, revolutionized exoplanet atmospheric studies with unprecedented sensitivity and wavelength coverage. Early JWST observations detected CO₂ in an exoplanet atmosphere for the first time (WASP-39 b), characterized the atmosphere of TRAPPIST-1 planets, detected clouds and weather patterns, and observed molecular complexity suggesting active atmospheric chemistry.
              </p>
              <p>
                JWST can potentially detect biosignatures in terrestrial planet atmospheres. Simultaneous detection of oxygen, methane, and water vapor would suggest biological processes (though geological false positives are possible). While current technology limits such studies to planets transiting very small, cool stars, JWST observations are testing and refining techniques for future missions specifically designed to find life.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Exotic Exoplanet Types</h2>
              <p>
                Exoplanet discoveries revealed planetary types with no solar system analogs:
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Hot Jupiters</h3>
              <p>
                Gas giants orbiting closer to their stars than Mercury orbits the Sun, with surface temperatures exceeding 1,000°C. Some are inflated by intense stellar heating to sizes larger than Jupiter despite similar masses. Atmospheres show exotic chemistry including titanium oxide, atomic iron vapor, and possibly molten silicate rain. Tidal forces lock these planets, creating permanent day and night sides with temperature differences of 1,000°C or more.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Super-Earths and Mini-Neptunes</h3>
              <p>
                Planets 1.5-4 times Earth's radius dominate exoplanet statistics, yet our solar system lacks them. Super-Earths are rocky planets scaled up from Earth. Mini-Neptunes have substantial hydrogen-helium atmospheres surrounding rocky cores. The dividing line is roughly 1.5-2 Earth radii. Understanding these planets' interiors, atmospheres, and formation remains an active research area.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Lava Worlds</h3>
              <p>
                Ultra-short-period planets orbiting so close their surfaces are molten rock. Kepler-10b, one of the first rocky exoplanets confirmed, orbits its star in just 20 hours at a distance of 2 million km, with dayside temperatures around 2,500°C—hot enough to vaporize rock. These worlds may have tenuous atmospheres of vaporized silicates and metals.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Water Worlds</h3>
              <p>
                Planets covered entirely by deep oceans, potentially hundreds of kilometers deep. Pressures at these ocean bottoms could create exotic high-pressure ice phases even at high temperatures. Whether such worlds support life remains speculative—too much water might prevent rock-water interactions that provide nutrients.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Free-Floating Planets</h3>
              <p>
                Planets ejected from their birth systems drifting through interstellar space without host stars. Difficult to detect (microlensing is the primary method), they may be numerous—some estimates suggest more free-floating planets than stars in the galaxy. These worlds experience eternal darkness and extreme cold, though large planets might retain enough internal heat to maintain subsurface oceans.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Future Missions: The Next Frontier</h2>

              <h3 className="text-2xl font-semibold text-white mb-3">Roman Space Telescope</h3>
              <p>
                Launching in the late 2020s, the Nancy Grace Roman Space Telescope will use microlensing and direct imaging to discover thousands of planets, including many beyond the "snow line" where ice forms—analogous to Jupiter and Saturn in our solar system. Roman will provide crucial data on outer planet populations, complementing TESS's focus on inner planets.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">PLATO</h3>
              <p>
                ESA's PLAnetary Transits and Oscillations of stars mission (planned launch 2026) will discover and characterize Earth-sized planets around Sun-like stars. Using 26 small telescopes monitoring up to one million stars, PLATO will find planets with accurately determined ages (through asteroseismology of host stars), enabling studies of planetary system evolution.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Habitable Worlds Observatory</h3>
              <p>
                NASA's planned flagship mission for the 2040s, explicitly designed to search for signs of life on exoplanets. Using a large telescope with advanced coronagraph or starshade, it would directly image dozens of potentially habitable planets and analyze their atmospheres for biosignatures. This mission represents humanity's first dedicated attempt to answer "Are we alone?"
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Ground-Based Extremely Large Telescopes</h3>
              <p>
                The Extremely Large Telescope (ELT, 39-meter primary mirror), Giant Magellan Telescope (GMT, 25-meter equivalent), and Thirty Meter Telescope (TMT) will revolutionize direct imaging and spectroscopy of exoplanet atmospheres. Their light-gathering power and resolution will enable detailed characterization of potentially habitable planets, measuring atmospheric composition, pressure-temperature profiles, and searching for biosignatures.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Search for Life: Biosignatures</h2>
              <p>
                Detecting life on exoplanets requires identifying biosignatures—atmospheric or surface features difficult to explain without biology.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Atmospheric Biosignatures</h3>
              <p>
                Oxygen constitutes 21% of Earth's atmosphere almost entirely due to photosynthesis. Without life constantly replenishing it, atmospheric oxygen would disappear in millions of years. Detecting significant oxygen in an exoplanet atmosphere would suggest (but not prove) biological origin. However, false positives exist—photodissociation of water vapor in planets around active stars can generate oxygen abiotically.
              </p>
              <p>
                Methane combined with oxygen provides stronger evidence. These gases react chemically; their coexistence requires active replenishment. On Earth, biology produces both. Phosphine, recently detected in Venus's atmosphere (though disputed), is produced by anaerobic bacteria on Earth and has few known abiotic sources.
              </p>
              <p>
                The most definitive biosignature might be detecting multiple gases in thermodynamic disequilibrium—combinations that shouldn't coexist unless constantly replenished. Earth's atmosphere is dramatically out of equilibrium due to life.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Surface Biosignatures</h3>
              <p>
                Vegetation reflects near-infrared light more strongly than visible light—the "red edge" feature visible in Earth's spectrum. Alien photosynthesis might create similar features at different wavelengths. Detecting such features would strongly suggest plant-like life covering substantial planetary surface area.
              </p>
              <p>
                Seasonal variations in atmospheric composition or surface colors might indicate biological activity responding to seasonal changes. On Earth, atmospheric CO₂ and surface greenness vary seasonally in response to plant growth cycles.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">Technosignatures</h3>
              <p>
                Advanced civilizations might be detectable through technological signatures: radio or optical transmissions, atmospheric pollution (CFCs or other industrial pollutants), large-scale engineering structures, or waste heat from energy consumption. While speculative, some scientists argue technosignature searches deserve serious consideration alongside biosignature searches.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Conclusion: A Universe of Worlds</h2>
              <p>
                Exoplanet science has transformed from speculative philosophy to precision observational science in just three decades. We've progressed from debating whether exoplanets exist to cataloging thousands and characterizing their atmospheres. We've learned that planets are common—most stars host them—and planetary diversity far exceeds what our solar system represented.
              </p>
              <p>
                Yet we're just beginning. Of 5,600+ confirmed exoplanets, only a handful have been characterized in detail. Atmospheric studies are in their infancy. The question of life beyond Earth remains unanswered, though increasingly within reach of our technology. Within the next 20-30 years, missions like the Habitable Worlds Observatory may detect biosignatures on distant planets, answering humanity's ancient question: Are we alone?
              </p>
              <p>
                Every star we observe potentially hosts a planetary system—meaning the night sky contains billions of worlds, many potentially habitable. Some may harbor simple microbial life. Some might host complex ecosystems. A few might develop intelligence and technology. As our instruments improve and our understanding deepens, we're beginning to explore not just our cosmic neighborhood but an entire galaxy filled with worlds waiting to reveal their secrets.
              </p>
              <p>
                The exoplanet revolution has shown that the universe is far stranger and more wonderful than we imagined. From tidally-locked lava worlds to ice giants raining diamonds, from planets orbiting binary stars to ocean worlds covered by kilometers-deep seas, the diversity of planets challenges our imagination and expands our understanding of what's possible. And somewhere among those thousands of known worlds—and billions yet undiscovered—may lie the answer to humanity's most profound question: What is our place in the universe?
              </p>
            </section>

            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Explore Space Telescopes</h3>
              <p className="mb-4">
                Learn about the space telescopes like TESS and James Webb that are revolutionizing our discovery and study of planets beyond our solar system.
              </p>
              <Link href="/articles/space-telescopes">
                <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors">
                  Read About Space Telescopes
                </button>
              </Link>
            </div>

          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/space-telescopes" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-cyan-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Space Telescopes</h4>
              <p className="text-gray-400 text-sm">Observatories revealing the universe</p>
            </Link>
            <Link href="/articles/jupiter-and-its-moons" className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-cyan-500 transition-colors">
              <h4 className="text-white font-semibold mb-2">Jupiter and Its Moons</h4>
              <p className="text-gray-400 text-sm">Exploring the giant planet system</p>
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
