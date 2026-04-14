import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions About Space | Spaceflight Tracker',
  description: 'Find answers to common questions about space launches, rockets, the ISS, asteroids, and space exploration. Educational guide for space enthusiasts.',
  keywords: ['space FAQ', 'rocket questions', 'space exploration guide', 'ISS questions', 'space launches explained'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/faq',
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: 'Space Launches',
      questions: [
        {
          q: 'What is a space launch window?',
          a: 'A launch window is a specific period during which a rocket must launch to reach its intended orbit or destination. The window is determined by orbital mechanics, the position of the target (like the ISS or a planetary body), weather conditions, and range safety considerations. Some windows last just seconds, while others can span hours or days.'
        },
        {
          q: 'Why do space launches get delayed?',
          a: 'Launches can be delayed for many reasons: adverse weather (high winds, lightning, thick clouds), technical issues with the rocket or payload, range conflicts (other launches or aircraft in the area), issues with ground support equipment, or problems during final countdown checks. Safety is always the top priority, so agencies will scrub a launch if any parameter is outside acceptable limits.'
        },
        {
          q: 'How much does a rocket launch cost?',
          a: 'Launch costs vary dramatically. SpaceX Falcon 9 launches start around $67 million, while NASA\'s Space Launch System (SLS) costs over $2 billion per launch. Smaller rockets like Rocket Lab\'s Electron cost around $7.5 million. Reusable rockets have significantly reduced costs compared to expendable vehicles.'
        },
        {
          q: 'Can I watch a rocket launch in person?',
          a: 'Yes! Many launch sites offer public viewing areas. Kennedy Space Center in Florida has viewing packages for SpaceX and NASA launches. Vandenberg Space Force Base in California also hosts launches. For international launches, check the specific spaceport\'s visitor information. Always book in advance and be prepared for possible delays or scrubs.'
        },
        {
          q: 'What happens during a launch abort?',
          a: 'Modern crewed rockets have launch abort systems (LAS) designed to quickly separate the crew capsule from the rocket if something goes wrong. The abort system fires powerful solid rocket motors that pull the capsule away from the failing rocket, then deploys parachutes for a safe landing. SpaceX Crew Dragon demonstrated this capability in 2020 with an in-flight abort test.'
        },
        {
          q: 'What is the difference between orbital and suborbital launches?',
          a: 'Orbital launches place spacecraft into orbit around Earth at speeds of approximately 17,500 mph, allowing them to continuously circle the planet. Suborbital launches reach space (above 62 miles) but don\'t achieve orbital velocity, so they arc up and come back down, similar to a very high ballistic trajectory. Space tourism flights by Blue Origin and Virgin Galactic are suborbital, providing a few minutes of weightlessness before returning to Earth.'
        },
        {
          q: 'What are the major spaceports around the world?',
          a: 'Major launch sites include Kennedy Space Center and Cape Canaveral Space Force Station in Florida (USA), Vandenberg Space Force Base in California (USA), Baikonur Cosmodrome in Kazakhstan (Russia\'s primary site), Guiana Space Centre in French Guiana (ESA), Jiuquan, Taiyuan, Xichang, and Wenchang in China, Tanegashima and Uchinoura in Japan, and Satish Dhawan Space Centre in India. Each site is chosen for geographic advantages—proximity to the equator provides extra velocity from Earth\'s rotation for eastward launches.'
        },
        {
          q: 'How do countdown holds work during a launch?',
          a: 'Launch countdowns include built-in holds at specific points (like T-10 minutes or T-4 minutes) where the clock stops while teams verify systems and complete final preparations. These planned holds are normal and expected. Unplanned holds occur when issues arise that need resolution. The countdown can resume once problems are fixed, or the launch may be scrubbed if issues can\'t be resolved within the launch window. Teams follow detailed checklists during holds to ensure no steps are missed.'
        }
      ]
    },
    {
      category: 'Rockets & Technology',
      questions: [
        {
          q: 'How do reusable rockets work?',
          a: 'Reusable rockets, like SpaceX\'s Falcon 9, use controlled descent and propulsive landing to return to Earth. After stage separation, the booster flips around, reignites some engines to slow down, deploys grid fins for steering, and performs a final landing burn. This allows the booster to land vertically on a drone ship at sea or on a landing pad. Reusability dramatically reduces launch costs.'
        },
        {
          q: 'What fuel do rockets use?',
          a: 'Most modern rockets use liquid propellants: liquid oxygen (LOX) combined with either kerosene (RP-1), liquid hydrogen, or methane. Solid rocket boosters use a pre-mixed solid propellant. SpaceX uses LOX and RP-1 for Falcon 9, while developing Starship uses LOX and methane. The choice affects performance, cost, storability, and reusability.'
        },
        {
          q: 'How fast does a rocket need to go to reach orbit?',
          a: 'To achieve low Earth orbit, a rocket must reach approximately 17,500 mph (28,000 km/h or about 7.8 km/s). This velocity allows the spacecraft to continuously fall toward Earth while moving forward fast enough that it keeps missing the planet—which is what an orbit is. Reaching this speed requires tremendous energy, which is why rockets are so large relative to their payload.'
        },
        {
          q: 'What is a rocket stage?',
          a: 'Staging is a technique where a rocket sheds weight by dropping empty fuel tanks and engines during ascent. A two-stage rocket has a first stage that provides initial thrust and a second stage that continues to orbit. Once the first stage runs out of fuel, it separates and falls away, making the remaining vehicle lighter. This improves efficiency since you don\'t carry the weight of empty tanks all the way to orbit.'
        },
        {
          q: 'Why are rockets so loud?',
          a: 'Rocket engines produce immense noise from the high-speed exhaust gases. The sound comes from shock waves, turbulence, and the interaction of the exhaust with the atmosphere. A Falcon 9 launch generates around 140-150 decibels at close range—enough to cause immediate hearing damage. The sound can be heard and felt from miles away. Launch pads use water deluge systems to absorb some of the acoustic energy.'
        },
        {
          q: 'How do ion drives work?',
          a: 'Ion drives (or ion thrusters) use electricity to ionize propellant atoms (typically xenon) and accelerate them to extremely high velocities using electric fields. While thrust is very small—about the weight of a piece of paper—ion drives are incredibly fuel-efficient and can operate continuously for years. They\'re ideal for deep space missions like NASA\'s Dawn spacecraft, which explored asteroids Vesta and Ceres. Ion drives work best in the vacuum of space and can\'t overcome Earth\'s gravity, so they\'re used only after conventional rockets reach orbit.'
        },
        {
          q: 'What is specific impulse and why does it matter?',
          a: 'Specific impulse (Isp) measures rocket engine efficiency—how much thrust you get per unit of propellant over time, expressed in seconds. Higher Isp means better fuel efficiency. Chemical rockets have Isp values of 300-450 seconds, while ion drives can exceed 3,000 seconds. However, ion drives produce minimal thrust. The ideal engine depends on the mission: chemical rockets for launch where high thrust is needed, electric propulsion for long-duration space missions where efficiency matters more than thrust. Specific impulse is to rockets what miles-per-gallon is to cars.'
        },
        {
          q: 'What is thrust-to-weight ratio?',
          a: 'Thrust-to-weight ratio (TWR) compares a rocket\'s thrust to its weight. A TWR greater than 1 means the rocket can overcome gravity and lift off. Saturn V had a liftoff TWR of about 1.5, while modern rockets like Falcon Heavy achieve ratios around 1.5-2.0. Fighter jets can have TWRs exceeding 1.0, allowing vertical acceleration. As rockets burn fuel and become lighter, their TWR increases dramatically. This is why rockets accelerate faster as they ascend—the same engines push against decreasing mass.'
        }
      ]
    },
    {
      category: 'International Space Station (ISS)',
      questions: [
        {
          q: 'How fast does the ISS travel?',
          a: 'The International Space Station orbits Earth at approximately 17,500 mph (28,000 km/h). At this speed, it completes one full orbit around Earth every 90 minutes, meaning astronauts aboard experience 16 sunrises and sunsets each day. You can track the ISS in real-time on our ISS tracking page.'
        },
        {
          q: 'How long have people been living on the ISS?',
          a: 'The ISS has been continuously inhabited since November 2, 2000—over 25 years of permanent human presence in space. Crews typically spend 6 months aboard, though some missions last up to a year. The station has hosted astronauts from over 20 countries and serves as a testbed for long-duration spaceflight technologies needed for future Mars missions.'
        },
        {
          q: 'Can you see the ISS from Earth?',
          a: 'Yes! The ISS is the third-brightest object in the sky (after the Sun and Moon) and can be seen with the naked eye. It appears as a bright, fast-moving dot that doesn\'t blink like aircraft lights. The best viewing times are just after sunset or before sunrise when the station is illuminated by the Sun but you\'re in darkness. Various websites and apps provide ISS flyover predictions for your location.'
        },
        {
          q: 'What do astronauts do on the ISS?',
          a: 'ISS crew members conduct scientific experiments (biology, physics, materials science, Earth observation), maintain station systems, perform spacewalks for repairs and upgrades, exercise for 2-3 hours daily to prevent muscle and bone loss, and communicate with mission control. Research aboard the ISS advances medicine, materials, and our understanding of long-term spaceflight effects on the human body.'
        },
        {
          q: 'How do astronauts get to the ISS?',
          a: 'Currently, crew travel to the ISS aboard SpaceX Crew Dragon (from USA), Russian Soyuz spacecraft (from Kazakhstan), or Boeing Starliner (when operational). The journey takes about 24 hours from launch to docking, though it can be done in as little as 3 hours with direct-ascent profiles. Cargo is delivered by SpaceX Dragon, Northrop Grumman Cygnus, Russian Progress, and occasionally other vehicles.'
        }
      ]
    },
    {
      category: 'Asteroids & Space Objects',
      questions: [
        {
          q: 'What is a near-Earth asteroid?',
          a: 'A near-Earth asteroid (NEA) is an asteroid whose orbit brings it close to Earth\'s orbital path. "Near" is defined as coming within 1.3 astronomical units (AU) of the Sun—about 120 million miles. Most NEAs are harmless and pass millions of miles from Earth. NASA tracks these objects to identify any potential threats decades in advance.'
        },
        {
          q: 'How dangerous are asteroids?',
          a: 'While asteroid impacts have occurred throughout Earth\'s history (including the one that contributed to dinosaur extinction 66 million years ago), the probability of a civilization-threatening impact in our lifetimes is extremely low. NASA and other agencies track asteroids larger than 140 meters, and no known asteroid poses a threat for at least the next 100 years. Small asteroids that might hit Earth typically burn up in the atmosphere.'
        },
        {
          q: 'Can we stop an asteroid from hitting Earth?',
          a: 'Yes! NASA\'s DART mission in 2022 successfully demonstrated planetary defense by deliberately crashing a spacecraft into the asteroid Dimorphos, changing its orbit. With enough advance warning (decades), we could deflect a dangerous asteroid using kinetic impactors, gravity tractors, or other methods. This is why tracking programs are so important—we need to find threats early.'
        },
        {
          q: 'What are Potentially Hazardous Asteroids (PHAs)?',
          a: 'PHAs are asteroids larger than about 140 meters that come within 0.05 AU (4.6 million miles) of Earth\'s orbit. The "potentially hazardous" designation doesn\'t mean they\'ll hit Earth—it just means they\'re large enough to cause regional damage if they did, and they pass close enough that their orbits deserve careful monitoring. About 2,300 PHAs are currently known.'
        },
        {
          q: 'How are asteroids discovered?',
          a: 'Asteroids are discovered using ground-based telescopes that repeatedly image the same patch of sky. Automated software compares images to detect moving objects. NASA\'s Near-Earth Object Observations Program coordinates global efforts. Once discovered, asteroids are tracked to precisely determine their orbits and predict their future positions for decades or centuries.'
        }
      ]
    },
    {
      category: 'Space Exploration',
      questions: [
        {
          q: 'Why do we explore space?',
          a: 'Space exploration drives scientific discovery, technological innovation, and inspires humanity. It helps us understand our universe, search for life beyond Earth, develop technologies that improve life on Earth (GPS, weather satellites, medical devices), protect Earth from asteroid impacts, study climate change, and ultimately ensure humanity\'s long-term survival by becoming a multi-planetary species. It represents our natural curiosity and drive to explore.'
        },
        {
          q: 'What is the difference between orbit and space?',
          a: 'Space technically begins at the Kármán line, about 62 miles (100 km) above Earth, where the atmosphere becomes too thin for aircraft to fly. However, reaching space and reaching orbit are very different. Suborbital flights (like Blue Origin\'s New Shepard) go to space but fall back down. Orbital flights achieve the speed needed (17,500 mph) to continuously circle Earth. Reaching orbit requires about 30 times more energy than just reaching the edge of space.'
        },
        {
          q: 'How long does it take to get to Mars?',
          a: 'A trip to Mars takes 6-9 months using current propulsion technology, depending on the alignment of Earth and Mars. Launch windows open every 26 months when the planets are favorably positioned. The journey length is limited by fuel efficiency and the need to minimize crew exposure to radiation and microgravity. Future advanced propulsion systems might reduce this to 3-4 months.'
        },
        {
          q: 'What is a light-year?',
          a: 'A light-year is the distance light travels in one year—approximately 5.88 trillion miles (9.46 trillion kilometers). It\'s a unit used to measure vast cosmic distances. For perspective, the nearest star system (Alpha Centauri) is 4.37 light-years away, meaning light from those stars takes 4.37 years to reach us. Our Milky Way galaxy is about 100,000 light-years in diameter.'
        },
        {
          q: 'Is there gravity in space?',
          a: 'Yes! Gravity exists everywhere in space. Astronauts in orbit appear weightless not because there\'s no gravity, but because they\'re in continuous free fall. The ISS and its crew are constantly falling toward Earth, but moving forward fast enough that they keep missing it—that\'s what an orbit is. Earth\'s gravity at the ISS altitude (250 miles up) is still about 90% as strong as on the surface.'
        },
        {
          q: 'What is the Great Filter theory?',
          a: 'The Great Filter is a proposed solution to the Fermi Paradox (why haven\'t we detected alien civilizations). It suggests there\'s a barrier that prevents life from reaching advanced, space-faring stages. This filter could be behind us (abiogenesis is extremely rare) or ahead of us (civilizations tend to destroy themselves). Space exploration helps us understand whether we\'ve passed the filter or if challenges await.'
        },
        {
          q: 'What is the Overview Effect?',
          a: 'The Overview Effect is a cognitive shift reported by astronauts when viewing Earth from space. Seeing the planet as a fragile, borderless whole suspended in the void often produces profound feelings of awe, interconnectedness, and a desire to protect Earth. Many astronauts describe it as a life-changing experience that transforms their perspective on humanity and our place in the universe. This psychological phenomenon is one reason some advocate for wider access to spaceflight.'
        },
        {
          q: 'How do we find exoplanets?',
          a: 'Astronomers use several methods to detect planets orbiting other stars. The transit method watches for tiny dips in a star\'s brightness when a planet passes in front of it—NASA\'s Kepler and TESS missions used this technique to discover thousands of exoplanets. The radial velocity method detects the wobble a planet causes in its star\'s motion. Direct imaging captures actual pictures of planets, though this is extremely difficult. Gravitational microlensing uses gravity\'s bending of light to reveal planets. Over 5,500 exoplanets have been confirmed, revolutionizing our understanding of planetary systems.'
        },
        {
          q: 'What is the habitable zone?',
          a: 'The habitable zone (or "Goldilocks zone") is the region around a star where conditions might be just right for liquid water to exist on a planet\'s surface—not too hot, not too cold. For our Sun, this zone extends roughly from Venus\'s orbit to Mars\'s orbit, with Earth perfectly positioned in the middle. However, being in the habitable zone doesn\'t guarantee life—Venus is too hot due to its runaway greenhouse effect, while Mars is too cold and has lost most of its atmosphere. Many factors beyond distance affect habitability, including atmospheric composition, magnetic field, and planetary mass.'
        },
        {
          q: 'What is dark matter?',
          a: 'Dark matter is mysterious invisible matter that makes up about 85% of all matter in the universe. We can\'t see it directly because it doesn\'t emit, absorb, or reflect light, but we know it exists because of its gravitational effects. Galaxies rotate faster than they should based on visible matter alone—dark matter provides the extra gravity holding them together. Despite decades of searching, we still don\'t know what dark matter is made of. Leading candidates include WIMPs (weakly interacting massive particles) and axions. Understanding dark matter is one of the biggest challenges in modern physics.'
        }
      ]
    },
    {
      category: 'Commercial Spaceflight & Technology',
      questions: [
        {
          q: 'What is Starlink and how does it work?',
          a: 'Starlink is SpaceX\'s satellite internet constellation with over 5,000 satellites in low Earth orbit (340-570 km altitude). Unlike traditional satellites in geostationary orbit (35,786 km), Starlink\'s low altitude reduces latency to 20-40ms—comparable to fiber internet. User terminals on the ground automatically track satellites as they pass overhead, switching between them for continuous connectivity. The system provides internet to remote and rural areas where traditional broadband is unavailable.'
        },
        {
          q: 'Can regular people go to space?',
          a: 'Yes! Commercial space tourism is now a reality. Blue Origin and Virgin Galactic offer suborbital flights that reach the edge of space for $200,000-450,000 per seat, providing a few minutes of weightlessness. SpaceX offers orbital missions starting around $50-60 million per seat for multi-day trips. Axiom Space arranges ISS visits for $55-70 million. While currently expensive, costs are expected to decrease over time as technology improves and competition increases.'
        },
        {
          q: 'What is SpaceX\'s Starship and why is it important?',
          a: 'Starship is SpaceX\'s fully reusable super heavy-lift launch system designed to carry 100+ tons to orbit or Mars. At 120 meters tall when stacked with its Super Heavy booster, it will be the most powerful rocket ever built. Unlike any previous rocket, both stages are designed to be fully and rapidly reusable, potentially reducing launch costs dramatically. Starship is central to SpaceX\'s Mars colonization plans and NASA has selected a lunar variant for Artemis moon landings. It represents a paradigm shift in space transportation.'
        },
        {
          q: 'How do companies make money from space?',
          a: 'Space is now a trillion-dollar economy. Launch providers (SpaceX, Rocket Lab, ULA) sell launch services to governments and commercial customers. Satellite communications companies provide internet, TV, and data services. Earth observation companies sell imagery to agriculture, government, insurance, and other industries. Space tourism is emerging. Manufacturing experiments test products in microgravity. GPS and navigation systems generate enormous economic value. Asteroid mining and space-based solar power are future possibilities still in development.'
        },
        {
          q: 'What are CubeSats?',
          a: 'CubeSats are miniature satellites built in standardized 10cm x 10cm x 10cm units (1U), with common sizes being 1U, 3U, 6U, or 12U. They\'ve revolutionized access to space by dramatically reducing costs—a CubeSat mission might cost $100,000-500,000 vs. tens of millions for traditional satellites. Universities, startups, and research organizations use CubeSats for Earth observation, technology demonstrations, scientific research, and communications. They often launch as secondary payloads on missions carrying larger satellites.'
        },
        {
          q: 'What is space debris and why is it dangerous?',
          a: 'Space debris consists of defunct satellites, spent rocket stages, and fragments from collisions and explosions—over 34,000 trackable objects larger than 10cm orbit Earth, with millions of smaller pieces. At orbital velocities (17,500+ mph), even small debris can catastrophically damage satellites or spacecraft. The Kessler Syndrome describes a theoretical cascade where collisions create more debris, triggering more collisions. This could render certain orbits unusable. Mitigation includes designing satellites to deorbit within 25 years (now often 5 years), avoiding debris-generating events, and developing active debris removal technologies.'
        }
      ]
    },
    {
      category: 'Planets & Solar System',
      questions: [
        {
          q: 'Why is Mars red?',
          a: 'Mars appears red because its surface is covered in iron oxide—essentially rust. Billions of years ago, Mars had liquid water and a thicker atmosphere. Iron in Martian rocks reacted with oxygen and water to form iron oxide, the same process that makes iron rust on Earth. This reddish dust covers most of the planet and gets kicked up by winds, giving Mars its distinctive rusty color visible even from Earth. The iron-rich minerals in Mars\' soil were likely oxidized when the planet still had a wetter, more active climate.'
        },
        {
          q: 'What are the phases of the Moon and why do they change?',
          a: 'The Moon\'s phases—new moon, crescent, quarter, gibbous, and full moon—result from changing angles between the Sun, Moon, and Earth. The Moon doesn\'t produce its own light; it reflects sunlight. As the Moon orbits Earth (taking about 29.5 days), we see different portions of its sunlit side. At new moon, the Moon is between Earth and Sun, so its dark side faces us. At full moon, Earth is between the Sun and Moon, and we see the entire sunlit side. The phases progress predictably, allowing ancient cultures to create lunar calendars. The same side of the Moon always faces Earth due to tidal locking.'
        },
        {
          q: 'Could there be life on Jupiter\'s moons?',
          a: 'Jupiter\'s moons, particularly Europa, Ganymede, and Callisto, are prime candidates for extraterrestrial life in our solar system. Europa has a global ocean beneath its icy crust containing twice as much water as all of Earth\'s oceans. Tidal heating from Jupiter\'s gravity keeps this ocean liquid and may create hydrothermal vents on the ocean floor—similar to those that support life in Earth\'s deep oceans. NASA\'s Europa Clipper mission (launching 2024) will study Europa\'s ice shell and ocean for signs of habitability. While we haven\'t found life there yet, these moons have the key ingredients: liquid water, chemical nutrients, and energy sources.'
        },
        {
          q: 'What would happen if you stood on Jupiter?',
          a: 'You can\'t stand on Jupiter because it\'s a gas giant with no solid surface. Jupiter consists mainly of hydrogen and helium gas that gradually transitions to liquid hydrogen under immense pressure deeper in the planet. If you fell into Jupiter, you\'d first pass through ammonia clouds in the upper atmosphere. As you descended, pressure and temperature would increase dramatically—eventually reaching 20,000°C and millions of times Earth\'s atmospheric pressure. The intense radiation, crushing pressure, and extreme heat would destroy any spacecraft long before reaching the theoretical rocky core deep in Jupiter\'s interior. Jupiter\'s "surface" is defined as the altitude where atmospheric pressure equals Earth\'s sea-level pressure.'
        }
      ]
    },
    {
      category: 'Astronomy & Observation',
      questions: [
        {
          q: 'Why can\'t we see stars during the day?',
          a: 'Stars are always in the sky, both day and night, but during the day, the Sun\'s light scattered by Earth\'s atmosphere makes the sky bright blue, overwhelming the faint light from distant stars. This scattering occurs because sunlight collides with molecules in our atmosphere, redirecting light in all directions. The effect is strongest for blue light (shorter wavelength), which is why the sky appears blue. Stars become visible after sunset when sunlight no longer dominates. Astronauts in space, where there\'s no atmosphere to scatter light, can see stars even when the Sun is in view. This same principle explains why the sky is darker at higher altitudes where the atmosphere is thinner.'
        },
        {
          q: 'What is a supernova?',
          a: 'A supernova is the catastrophic explosion of a star, one of the most energetic events in the universe. There are two main types: Type Ia supernovae occur when a white dwarf star accumulates matter from a companion star until it reaches a critical mass and explodes. Type II supernovae happen when massive stars (at least 8 times the Sun\'s mass) exhaust their nuclear fuel and collapse, then rebound in a violent explosion. For a few weeks, a single supernova can outshine an entire galaxy of billions of stars. These explosions create and distribute heavy elements like gold, iron, and uranium throughout the universe—elements essential for planets and life. The core collapse of massive stars can create neutron stars or black holes.'
        },
        {
          q: 'How do we know the universe is expanding?',
          a: 'In 1929, Edwin Hubble discovered that distant galaxies show redshift—their light is stretched to longer, redder wavelengths. This redshift occurs because galaxies are moving away from us; the farther away a galaxy is, the faster it recedes. This relationship (Hubble\'s Law) indicates the universe itself is expanding, carrying galaxies apart like dots on an inflating balloon. The expansion isn\'t galaxies moving through space, but space itself stretching. Detailed observations of distant supernovae in the 1990s revealed that this expansion is accelerating, driven by mysterious dark energy. The cosmic microwave background radiation—the afterglow of the Big Bang—provides additional evidence of the universe\'s expansion from a hot, dense state 13.8 billion years ago.'
        },
        {
          q: 'What are meteor showers and when do they occur?',
          a: 'Meteor showers occur when Earth passes through debris trails left by comets orbiting the Sun. As comets approach the Sun, they shed dust and ice particles. When Earth crosses these debris streams, particles enter our atmosphere at high speeds (up to 70 km/s), burning up and creating bright streaks we call meteors or "shooting stars." Major annual showers include the Perseids (August, from comet Swift-Tuttle), Leonids (November, from comet Tempel-Tuttle), and Geminids (December, from asteroid 3200 Phaethon). Each shower radiates from a specific constellation, which gives them their names. Peak viewing times are predictable years in advance, best seen from dark locations away from city lights in the hours before dawn.'
        }
      ]
    },
    {
      category: 'Future of Space Exploration',
      questions: [
        {
          q: 'What is the Artemis program?',
          a: 'Artemis is NASA\'s program to return humans to the Moon and establish sustainable lunar exploration by the late 2020s. Unlike Apollo\'s brief visits, Artemis aims to build a permanent presence with the Lunar Gateway space station in lunar orbit and surface habitats near the Moon\'s south pole. Artemis I (2022) successfully tested the SLS rocket and Orion spacecraft. Artemis II (planned 2026) will send astronauts around the Moon. Artemis III aims to land humans on the lunar surface, including the first woman and first person of color. The program serves as a proving ground for technologies needed for eventual Mars missions, including life support systems, radiation protection, and in-situ resource utilization (extracting water ice and producing fuel from lunar materials).'
        },
        {
          q: 'Can humans live on Mars permanently?',
          a: 'Mars presents enormous challenges for permanent settlement, but none appear insurmountable with sufficient technology and resources. Major challenges include: radiation exposure (Mars lacks Earth\'s protective magnetic field and thick atmosphere), toxic perchlorates in Martian soil, extreme cold (average -60°C), low atmospheric pressure (requiring pressurized habitats), and psychological isolation. However, potential solutions exist: habitats could use regolith (Martian soil) for radiation shielding, greenhouses could grow food, water ice at the poles could provide water and breathable oxygen, and in-situ resource utilization could manufacture fuel and building materials. Long-term health effects of Mars\' 38% Earth gravity remain unknown. Small research bases are likely before large permanent settlements, possibly arriving in the 2040s-2050s. Success requires international cooperation and enormous financial investment.'
        },
        {
          q: 'Will we ever reach another star system?',
          a: 'Reaching another star system presents challenges far beyond anything we\'ve attempted. The nearest star, Proxima Centauri, is 4.24 light-years away (40 trillion km). Current spacecraft would take 80,000+ years to reach it. However, several concepts could dramatically reduce travel time: nuclear fusion rockets might achieve 10% light speed, reaching Proxima in 40-50 years. Breakthrough Starshot proposes tiny light-sail probes pushed by powerful lasers, potentially reaching 20% light speed for 20-year journeys. Generation ships carrying multiple generations of crew could make centuries-long journeys. More speculative ideas include antimatter propulsion or even warp drives (currently purely theoretical). The first interstellar missions will likely be unmanned probes. Crewed interstellar travel probably won\'t happen this century but may become possible in the next few hundred years as technology advances.'
        },
        {
          q: 'What is space-based solar power?',
          a: 'Space-based solar power (SBSP) involves collecting solar energy in space using enormous satellite arrays and transmitting it wirelessly to Earth via microwaves or lasers. In space, solar panels would receive sunlight 24/7 without atmospheric interference, weather, or day/night cycles, making them 5-10 times more efficient than ground-based solar. The energy would be beamed to receiving stations (rectennas) on Earth\'s surface and converted to electricity. Advantages include clean, abundant energy and reduced land use. Challenges are enormous: launching thousands of tons of solar panels to space, assembling kilometer-scale structures in orbit, safely transmitting power, and achieving costs competitive with ground-based renewables. China and Japan have active SBSP research programs, with Japan planning demonstration satellites by 2025. Commercial viability likely requires significantly cheaper launch costs, possibly via Starship-class reusable rockets.'
        }
      ]
    }
  ];

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
              <Link href="/about">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  About
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-circle-question text-blue-400"></i>
            <span className="text-blue-400 text-sm font-medium">Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Space Exploration FAQ</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about space launches, rockets, the ISS, asteroids,
            and the science of space exploration
          </p>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              {category.category}
            </h2>

            <div className="space-y-4">
              {category.questions.map((faq, qIdx) => (
                <div key={qIdx} className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                    <i className="fa-solid fa-circle-question text-blue-400 mt-1 flex-shrink-0"></i>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Still Have Questions */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, check out our detailed guides on specific topics
            or visit our about page to learn more about Spaceflight Tracker.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Learn About Us
              </button>
            </Link>
            <Link href="/launches">
              <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg font-medium transition-colors">
                Explore Launches
              </button>
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
              <Link href="/faq" className="text-gray-400 hover:text-gray-300 transition-colors">FAQ</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
