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
