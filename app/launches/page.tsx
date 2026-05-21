import LaunchesContainer from '@/components/LaunchesContainer';
import { fetchUpcomingLaunches, fetchLaunchProviders } from '@/lib/api';
import { mockLaunches } from '@/data/mockLaunches';
import Navigation from '@/components/Navigation';
import AmazonAffiliateBanner from '@/components/AmazonAffiliateBanner';
import { getShuffledProducts } from '@/data/amazonProducts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upcoming Space Launches - Real-Time Launch Schedule',
  description: 'View all upcoming space launches from SpaceX, NASA, Blue Origin, ISRO, CNSA and more. Track launch dates, times, and mission details in real-time with live countdowns.',
  keywords: ['space launches', 'upcoming launches', 'SpaceX launch', 'NASA launch', 'rocket launch schedule', 'space mission tracker'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/launches',
  },
  openGraph: {
    title: 'Upcoming Space Launches - Real-Time Launch Schedule',
    description: 'Track all upcoming space launches from major space agencies worldwide. Live countdowns and mission details.',
    url: 'https://www.spaceflight-tracker.com/launches',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upcoming Space Launches - Real-Time Launch Schedule',
    description: 'Track all upcoming space launches from major space agencies worldwide.',
  },
};

export default async function LaunchesPage() {
  // Shuffle Amazon products for random banner order
  const shuffledProducts = getShuffledProducts();

  // Try to fetch real data, fallback to mock data if API fails
  let launches = mockLaunches;
  let count = mockLaunches.length;
  let agencies: Array<{ id: number; name: string }> = [];
  let useRealData = false;

  try {
    const [launchData, agencyData] = await Promise.all([
      fetchUpcomingLaunches({ limit: 20 }),
      fetchLaunchProviders(),
    ]);
    launches = launchData.launches;
    count = launchData.count;
    agencies = agencyData;
    useRealData = true;
  } catch (error) {
    console.error('Failed to fetch from API, using mock data:', error);
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <Navigation currentPage="launches" variant="standard" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Intro Section */}
        <section className="mb-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Left Column */}
            <div>
              <h1 className="text-3xl font-bold text-white mb-3">Space Launch Schedule</h1>
              <p className="text-base text-gray-300 leading-relaxed">
                Track upcoming rocket launches from space agencies around the world in real-time. Every launch represents a mission
                to deploy satellites, resupply the International Space Station, send probes to explore other planets, or advance
                humanity's presence in space. Stay updated with live countdowns, mission details, and direct links to livestreams.
              </p>
            </div>

            {/* Right Column - How to Use Guide */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <i className="fa-solid fa-circle-info text-blue-400 text-sm"></i>
                How to Use This Page
              </h2>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <strong className="text-white">Filter by Agency:</strong> Use the agency dropdown to view launches from specific space programs like SpaceX, NASA, or ISRO.
                </p>
                <p>
                  <strong className="text-white">Filter by Status:</strong> Select "Go" for confirmed launches, "TBD" for tentative dates, or "Hold" for delayed missions.
                </p>
                <p>
                  <strong className="text-white">Search Missions:</strong> Enter keywords to find specific missions or payloads.
                </p>
                <p>
                  <strong className="text-white">Live Countdowns:</strong> Each launch card shows a real-time countdown to liftoff. Countdowns update every second.
                </p>
                <p>
                  <strong className="text-white">Watch Live:</strong> Click the "Watch Live" button when available to view the official launch livestream.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Content - Understanding Space Launches */}
        <section className="mb-8 max-w-7xl mx-auto">
          <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <i className="fa-solid fa-rocket text-blue-400"></i>
              Understanding Space Launches
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                A space launch is one of the most complex and precisely orchestrated engineering achievements in human history.
                Each launch represents the culmination of years of design, testing, and preparation, where thousands of components
                must work flawlessly in sequence to propel a payload from Earth's surface to the vacuum of space at speeds exceeding
                17,500 miles per hour (28,000 km/h) required to achieve orbital velocity.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">What Happens During a Launch</h3>
              <p>
                The launch sequence begins at T-minus several hours with final vehicle checks, propellant loading, and range clearance.
                Modern rockets use a multi-stage design where sections of the vehicle are jettisoned after their fuel is exhausted,
                reducing mass and allowing the remaining stages to accelerate more efficiently. The first stage, which does the heavy
                lifting of breaking free from Earth's gravitational pull, burns for approximately 2-3 minutes before separation.
                Second stages then ignite to continue the climb toward orbital altitude, often performing multiple burns to circularize
                the orbit or inject the payload onto its intended trajectory.
              </p>

              <p>
                For missions beyond low Earth orbit—such as lunar missions, Mars rovers, or deep space probes—upper stages may perform
                additional burns hours or even days after launch. Companies like SpaceX have revolutionized the industry with reusable
                first stages that autonomously return to Earth, landing vertically on drone ships or landing pads to be refurbished
                and flown again, dramatically reducing launch costs.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Why Launches Matter</h3>
              <p>
                Every space launch serves a critical purpose that impacts life on Earth. Communication satellites enable global internet,
                television, and phone services, connecting billions of people across continents. Earth observation satellites monitor
                climate change, track deforestation, predict weather patterns, and provide early warning for natural disasters. GPS
                satellites enable navigation systems used by everyone from commercial airlines to emergency services to smartphone users.
              </p>

              <p>
                Scientific missions expand our understanding of the universe: telescopes like James Webb peer into the early universe,
                planetary probes study the geology and atmospheres of other worlds, and space-based observatories monitor the Sun's
                activity to predict solar storms. Cargo resupply missions keep the International Space Station operational, enabling
                continuous scientific research in microgravity that has led to breakthroughs in medicine, materials science, and biology.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Types of Missions</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Commercial Satellites</h4>
                  <p className="text-sm text-gray-400">
                    Deploy communication, imaging, and internet constellation satellites. SpaceX's Starlink missions regularly
                    launch 50+ satellites per flight to build global broadband coverage.
                  </p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Crewed Missions</h4>
                  <p className="text-sm text-gray-400">
                    Transport astronauts to and from the International Space Station or other destinations. Require extensive
                    safety systems and human-rated vehicles like Crew Dragon or Soyuz.
                  </p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Cargo & Resupply</h4>
                  <p className="text-sm text-gray-400">
                    Deliver supplies, experiments, and equipment to space stations. Dragon, Cygnus, and Progress vehicles
                    regularly resupply the ISS with food, water, scientific equipment, and spare parts.
                  </p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Planetary Exploration</h4>
                  <p className="text-sm text-gray-400">
                    Send robotic probes, rovers, and orbiters to study other planets, moons, and asteroids. Missions like
                    Perseverance, Europa Clipper, and JUICE expand our knowledge of the solar system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Launch Windows and Timing Section */}
          <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <i className="fa-solid fa-clock text-blue-400"></i>
              Launch Windows and Timing
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Unlike commercial aviation where flights can depart with some flexibility, space launches must occur within precise
                "launch windows"—specific time periods when the orbital mechanics align to allow the mission to reach its intended
                destination. These windows can range from instantaneous (a single second) for missions to the International Space Station,
                to several hours for satellite deployments into geostationary orbit, to weeks for interplanetary missions.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Why Orbital Mechanics Dictate Timing</h3>
              <p>
                Earth rotates at approximately 1,000 miles per hour at the equator while simultaneously orbiting the Sun at 67,000 miles
                per hour. The launch site, target orbit, and destination all move in complex paths through three-dimensional space.
                To rendezvous with the ISS, for example, a spacecraft must launch at the exact moment when the station's orbital plane
                intersects with the launch site's position on Earth's surface. Miss this window by even a few minutes, and the spacecraft
                will end up in the wrong orbital plane, requiring prohibitively expensive fuel to correct.
              </p>

              <p>
                For interplanetary missions, launch windows are determined by the relative positions of Earth and the target planet.
                Mars launch windows occur approximately every 26 months when Earth and Mars are properly aligned for the most fuel-efficient
                trajectory called a Hohmann transfer orbit. Venus missions have more frequent windows every 19 months. Missions to the
                outer planets may have windows only once every several years when planetary positions create gravitational assist opportunities.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Weather and Technical Considerations</h3>
              <p>
                Even within an ideal orbital window, launches must satisfy strict weather criteria. Upper-level wind shear, lightning,
                ground winds, and precipitation can all scrub a launch. Range safety rules prohibit launching through clouds that could
                contain charged particles that might trigger lightning. Temperature affects propellant density and performance—too cold
                and seals become brittle (as tragically demonstrated by the Challenger disaster), too hot and cryogenic fuels boil off
                faster than planned.
              </p>

              <p>
                Technical issues discovered during final countdown procedures often require delays. Modern rockets contain millions of
                components, and any anomaly in telemetry data, propellant flow rates, or computer systems can halt the launch sequence.
                This is why you'll often see launches postponed by 24-48 hours—teams need time to troubleshoot issues, implement fixes,
                and reset complex ground systems. For crewed missions, safety margins are even more conservative, resulting in a higher
                scrub rate but ensuring astronaut safety remains the top priority.
              </p>
            </div>
          </div>
        </section>

        {/* Data Source Indicator */}
        {!useRealData && (
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-circle-exclamation text-yellow-400 text-xl mt-0.5"></i>
              <div>
                <p className="text-yellow-400 font-semibold mb-1">Using Mock Data</p>
                <p className="text-yellow-300 text-sm">
                  Unable to load real-time data from The Space Devs API. Displaying sample launch data instead.
                  This may occur due to API rate limits, network issues, or temporary service unavailability.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Launches Section with Filters */}
        <section className="mb-12">
          <LaunchesContainer
            initialLaunches={launches}
            initialCount={count}
            agencies={agencies}
            stats={{
              total: count,
              confirmed: launches.filter(l => l.status === 'Go').length,
              tbd: launches.filter(l => l.status === 'TBD').length,
              operators: new Set(launches.map(l => l.operator)).size,
            }}
          />
        </section>

        {/* Educational Content Below Launches */}
        <section className="mb-12 max-w-6xl mx-auto">
          {/* Understanding Launch Status */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              Understanding Launch Status
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-check text-green-400 text-lg"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Go / Confirmed</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  The launch has been confirmed by the space agency with a specific date and time. Weather and technical checks
                  still apply, but the mission is officially scheduled and likely to proceed as planned.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-clock text-yellow-400 text-lg"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white">TBD / TBC</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  To Be Determined or To Be Confirmed. The launch is planned but the exact date/time hasn't been finalized.
                  This is common for missions early in their planning phase or awaiting regulatory approval.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-pause text-red-400 text-lg"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Hold / Delayed</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  The launch has been delayed from its original schedule. This can occur due to weather, technical issues,
                  range conflicts, or payload preparation delays. A new launch date will be announced.
                </p>
              </div>
            </div>
          </div>

          {/* Major Space Agencies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              Major Space Agencies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">SpaceX (USA)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Private company revolutionizing spaceflight with reusable rockets. Operates Falcon 9, Falcon Heavy, and is
                  developing Starship. Regularly launches Starlink satellites and cargo to the ISS.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">NASA (USA)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  United States space agency conducting scientific missions, crewed spaceflight, and planetary exploration.
                  Developing the Space Launch System (SLS) for Artemis moon missions.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">CNSA (China)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  China National Space Administration operates the Long March family of rockets and the Tiangong space station.
                  Active in lunar exploration and Mars missions.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Roscosmos (Russia)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Russian space agency with decades of experience. Operates Soyuz rockets for crewed missions and Progress
                  cargo vehicles. Partner in the International Space Station.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">ISRO (India)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Indian Space Research Organisation known for cost-effective missions. Operates PSLV and GSLV rockets.
                  Successfully sent missions to Mars and the Moon.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Blue Origin (USA)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Private aerospace company developing New Shepard for suborbital tourism and New Glenn for orbital missions.
                  Focused on reusability and expanding access to space.
                </p>
              </div>
            </div>
          </div>

          {/* Why Watch Launches */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why Watch Space Launches?</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Every space launch is a remarkable achievement of human engineering and ambition. Watching a rocket launch—whether
                live in person or via livestream—is witnessing the moment when years of planning, design, and preparation culminate
                in a controlled explosion that propels tons of metal and fuel into the sky at thousands of miles per hour.
              </p>
              <p>
                Modern space launches serve diverse purposes: deploying communication satellites that enable global internet,
                sending scientific instruments to study Earth's climate, delivering supplies to astronauts aboard the ISS,
                launching telescopes to observe distant galaxies, and sending rovers to explore other planets.
              </p>
              <p>
                By tracking launches on Spaceflight Tracker, you're staying connected to humanity's ongoing journey of exploration
                and discovery. Each mission brings us closer to understanding our universe and expanding our presence beyond Earth.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Amazon Affiliate Banners - All 4 products in random order */}
      {shuffledProducts.map((product, index) => (
        <AmazonAffiliateBanner key={product.asin} product={product} />
      ))}

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 - Spaceflight Tracker
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-gray-500 hover:text-gray-300 transition-colors">About</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
