import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Space Glossary - Terms & Definitions | Spaceflight Tracker',
  description: 'Comprehensive glossary of space exploration terms, rocket terminology, and astronomical definitions. Learn the language of spaceflight.',
  keywords: ['space glossary', 'rocket terms', 'space terminology', 'astronomy definitions', 'spaceflight dictionary'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/glossary',
  },
};

export default function GlossaryPage() {
  const terms = [
    {
      letter: 'A',
      entries: [
        { term: 'Abort', def: 'An emergency procedure to terminate a launch and separate the crew capsule from a failing rocket.' },
        { term: 'Apogee', def: 'The point in an elliptical orbit farthest from Earth. Opposite of perigee.' },
        { term: 'Asteroid', def: 'A rocky object smaller than a planet that orbits the Sun, mostly found in the asteroid belt between Mars and Jupiter.' },
        { term: 'Astronaut', def: 'A person trained to travel and work in space. Russian space travelers are called cosmonauts; Chinese are called taikonauts.' },
        { term: 'Astronomical Unit (AU)', def: 'The average distance from Earth to the Sun, approximately 93 million miles (150 million km). Used to measure distances within solar systems.' },
        { term: 'Attitude', def: 'The orientation of a spacecraft in space, typically described in terms of pitch, yaw, and roll.' },
      ]
    },
    {
      letter: 'B',
      entries: [
        { term: 'Booster', def: 'The first stage of a rocket that provides initial thrust during launch. Can also refer to auxiliary solid rocket motors.' },
        { term: 'Burn', def: 'A period during which a rocket engine fires. "Insertion burn" places a spacecraft into orbit; "deorbit burn" brings it back to Earth.' },
      ]
    },
    {
      letter: 'C',
      entries: [
        { term: 'Cislunar', def: 'The region of space between Earth and the Moon.' },
        { term: 'Constellation', def: 'A group of satellites working together, or a pattern of stars in the night sky.' },
        { term: 'Cosmonaut', def: 'A Russian astronaut. The term comes from "cosmos" (universe) and "nautes" (sailor).' },
        { term: 'Crewed/Crew', def: 'Refers to spacecraft or missions carrying human occupants. Preferred modern term instead of "manned."' },
        { term: 'Cryogenic', def: 'Extremely cold. Cryogenic propellants like liquid hydrogen and liquid oxygen must be kept at very low temperatures (below -150°C).' },
      ]
    },
    {
      letter: 'D',
      entries: [
        { term: 'Delta-V', def: 'Change in velocity. A measure of the propulsion capability needed to perform a maneuver or reach a destination.' },
        { term: 'Deorbit', def: 'The process of leaving orbit and returning to Earth\'s atmosphere.' },
        { term: 'Docking', def: 'The joining of two spacecraft in orbit. Different from "berthing," where a robotic arm captures one spacecraft and connects it.' },
        { term: 'Downrange', def: 'In the direction of a rocket\'s flight path away from the launch site.' },
      ]
    },
    {
      letter: 'E',
      entries: [
        { term: 'Elliptical Orbit', def: 'An oval-shaped orbit with varying distance from the central body, contrasted with a circular orbit.' },
        { term: 'Escape Velocity', def: 'The minimum speed needed to break free from a celestial body\'s gravitational pull. For Earth, approximately 25,000 mph (40,000 km/h).' },
        { term: 'EVA (Extravehicular Activity)', def: 'A spacewalk. Any activity performed by an astronaut outside a spacecraft in the vacuum of space.' },
        { term: 'Expendable', def: 'A rocket or component designed for single use, discarded after launch. Opposite of reusable.' },
      ]
    },
    {
      letter: 'G',
      entries: [
        { term: 'Geostationary Orbit (GEO)', def: 'An orbit 22,236 miles (35,786 km) above Earth\'s equator where a satellite\'s orbital period matches Earth\'s rotation, making it appear stationary above a fixed point.' },
        { term: 'Geosynchronous Orbit', def: 'An orbit with a period equal to Earth\'s rotation (24 hours) but not necessarily above the equator.' },
        { term: 'Gravity Assist', def: 'Using a planet\'s gravity to alter a spacecraft\'s speed and trajectory without using fuel. Also called a gravitational slingshot.' },
        { term: 'Grid Fins', def: 'Lattice-like control surfaces used by some rockets (like Falcon 9) to steer during atmospheric descent.' },
      ]
    },
    {
      letter: 'I',
      entries: [
        { term: 'Inclination', def: 'The tilt of an orbit relative to Earth\'s equator, measured in degrees. A 0° orbit is equatorial; 90° is polar.' },
        { term: 'Insertion Burn', def: 'A rocket burn that places a spacecraft into a specific orbit.' },
        { term: 'Interplanetary', def: 'Between planets; refers to space travel or trajectories beyond Earth orbit but within our solar system.' },
        { term: 'Interstellar', def: 'Between stars; the vast space between stellar systems.' },
      ]
    },
    {
      letter: 'K',
      entries: [
        { term: 'Kármán Line', def: 'The boundary between Earth\'s atmosphere and outer space, conventionally set at 100 km (62 miles) altitude.' },
        { term: 'Kepler\'s Laws', def: 'Three fundamental laws describing planetary motion and orbital mechanics discovered by Johannes Kepler.' },
        { term: 'Kick Stage', def: 'A small upper stage used to move a payload from a transfer orbit to its final orbit.' },
      ]
    },
    {
      letter: 'L',
      entries: [
        { term: 'Lagrange Points', def: 'Five positions in space where gravitational forces and orbital motion balance, allowing objects to maintain a stable position. The James Webb Space Telescope orbits the L2 point.' },
        { term: 'Launch Escape System (LES)', def: 'A system designed to quickly separate a crew capsule from a failing rocket during launch.' },
        { term: 'Launch Vehicle', def: 'A rocket used to carry payloads from Earth\'s surface to space.' },
        { term: 'Launch Window', def: 'A specific time period during which a launch must occur to reach the intended orbit or destination.' },
        { term: 'LEO (Low Earth Orbit)', def: 'Orbits between 160-2,000 km (100-1,200 miles) altitude. The ISS orbits at approximately 400 km.' },
        { term: 'LOX', def: 'Liquid oxygen, a cryogenic oxidizer used in many rocket engines.' },
      ]
    },
    {
      letter: 'M',
      entries: [
        { term: 'Microgravity', def: 'The condition of apparent weightlessness experienced in orbit. Technically there is still gravity, but objects are in free fall.' },
        { term: 'Meteoroid', def: 'A small rocky or metallic body in space. When it enters Earth\'s atmosphere and burns up, it\'s called a meteor. If it reaches the ground, it\'s a meteorite.' },
        { term: 'Mission Elapsed Time (MET)', def: 'Time measured from the moment of launch, used to track events during a space mission.' },
      ]
    },
    {
      letter: 'N',
      entries: [
        { term: 'Near-Earth Object (NEO)', def: 'An asteroid or comet whose orbit brings it close to Earth\'s orbital path.' },
        { term: 'NET (No Earlier Than)', def: 'Indicates the earliest possible date/time for a launch, though delays are possible.' },
        { term: 'Node', def: 'The point where an orbit crosses a reference plane, such as Earth\'s equator.' },
      ]
    },
    {
      letter: 'O',
      entries: [
        { term: 'Orbit', def: 'The path a celestial object takes around another due to gravitational attraction. Spacecraft orbit Earth; planets orbit the Sun.' },
        { term: 'Orbital Mechanics', def: 'The study of the motions of artificial and natural bodies in space under the influence of gravity.' },
        { term: 'Oxidizer', def: 'A chemical that provides oxygen for rocket fuel combustion. Common oxidizers include liquid oxygen (LOX) and nitrogen tetroxide.' },
      ]
    },
    {
      letter: 'P',
      entries: [
        { term: 'Payload', def: 'The cargo carried by a rocket—satellites, scientific instruments, supplies, or crew.' },
        { term: 'Payload Fairing', def: 'The protective nose cone that shields the payload during atmospheric ascent. Typically jettisoned once outside the atmosphere.' },
        { term: 'Perigee', def: 'The point in an elliptical orbit closest to Earth. Opposite of apogee.' },
        { term: 'Perihelion', def: 'The point in an orbit closest to the Sun.' },
        { term: 'Polar Orbit', def: 'An orbit passing over or near Earth\'s poles, with an inclination of approximately 90°.' },
        { term: 'Propellant', def: 'The fuel and oxidizer combination used to propel a rocket. Can be liquid (LOX/RP-1) or solid.' },
      ]
    },
    {
      letter: 'R',
      entries: [
        { term: 'Reentry', def: 'The return of a spacecraft from orbit through Earth\'s atmosphere.' },
        { term: 'Retrograde', def: 'Motion in the opposite direction to normal orbital motion. Retrograde burns slow a spacecraft down.' },
        { term: 'Reusable', def: 'Designed to be recovered and flown again, reducing launch costs. SpaceX Falcon 9 boosters are reusable.' },
        { term: 'Rocket Equation', def: 'Tsiolkovsky\'s equation describing the relationship between rocket velocity, exhaust velocity, and propellant mass.' },
        { term: 'RP-1', def: 'Refined kerosene used as rocket fuel, commonly paired with liquid oxygen.' },
      ]
    },
    {
      letter: 'S',
      entries: [
        { term: 'Scrub', def: 'Cancellation of a launch attempt, usually due to weather or technical issues. The mission will be rescheduled.' },
        { term: 'Solar Wind', def: 'A stream of charged particles (plasma) ejected from the Sun\'s upper atmosphere.' },
        { term: 'Spacecraft', def: 'A vehicle designed for travel or operation in outer space.' },
        { term: 'Specific Impulse (Isp)', def: 'A measure of rocket engine efficiency. Higher Isp means better fuel efficiency.' },
        { term: 'Stage', def: 'A section of a rocket containing its own engine(s) and propellant, designed to be jettisoned when empty.' },
        { term: 'Static Fire', def: 'A test where rocket engines are fired while the vehicle is held down, conducted before launch to verify systems.' },
        { term: 'Suborbital', def: 'A flight that reaches space but doesn\'t achieve orbital velocity, following a parabolic trajectory back to Earth.' },
      ]
    },
    {
      letter: 'T',
      entries: [
        { term: 'T-Minus', def: 'Countdown notation. "T-10 minutes" means 10 minutes before launch. After launch, it becomes "T-Plus."' },
        { term: 'TBD / TBC', def: 'To Be Determined or To Be Confirmed. Used when exact launch dates/times haven\'t been finalized.' },
        { term: 'Telemetry', def: 'Data transmitted from a spacecraft to ground stations, including position, velocity, and system status.' },
        { term: 'Thrust', def: 'The force produced by a rocket engine, typically measured in newtons or pounds-force.' },
        { term: 'Trajectory', def: 'The path followed by a spacecraft or projectile through space.' },
        { term: 'Trans-Lunar Injection (TLI)', def: 'A propulsion maneuver that sets a spacecraft on a trajectory toward the Moon.' },
      ]
    },
    {
      letter: 'V',
      entries: [
        { term: 'Velocity', def: 'Speed in a given direction. Orbital velocity is the speed needed to maintain an orbit.' },
        { term: 'Vernier Engines', def: 'Small thrusters used for fine adjustments to a spacecraft\'s trajectory or attitude.' },
      ]
    },
    {
      letter: 'W',
      entries: [
        { term: 'Webcast', def: 'Live video broadcast of a rocket launch, typically streamed on YouTube or the agency\'s website.' },
      ]
    },
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
              <Link href="/faq">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  FAQ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-book text-purple-400"></i>
            <span className="text-purple-400 text-sm font-medium">Space Glossary</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Space Terms & Definitions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive glossary of space exploration terminology, rocket science jargon,
            and astronomical definitions to help you understand the language of spaceflight
          </p>
        </div>

        {/* Alphabet Navigation */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {terms.map((section) => (
              <a
                key={section.letter}
                href={`#${section.letter}`}
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center font-semibold transition-colors"
              >
                {section.letter}
              </a>
            ))}
          </div>
        </div>

        {/* Terms */}
        {terms.map((section, idx) => (
          <section key={idx} id={section.letter} className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                {section.letter}
              </div>
            </h2>

            <div className="space-y-4">
              {section.entries.map((entry, entryIdx) => (
                <div key={entryIdx} className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{entry.term}</h3>
                  <p className="text-gray-300 leading-relaxed">{entry.def}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Continue Learning</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Now that you know the terminology, explore our launch schedule, track the ISS,
            or read our FAQ to deepen your understanding of space exploration
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/launches">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                View Launch Schedule
              </button>
            </Link>
            <Link href="/faq">
              <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg font-medium transition-colors">
                Read FAQ
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
              <Link href="/faq" className="text-gray-500 hover:text-gray-300 transition-colors">FAQ</Link>
              <Link href="/glossary" className="text-gray-400 hover:text-gray-300 transition-colors">Glossary</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
