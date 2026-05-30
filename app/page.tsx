import Link from 'next/link';
import { fetchUpcomingLaunches } from '@/lib/api';
import { mockLaunches } from '@/data/mockLaunches';
import Navigation from '@/components/Navigation';
import LaunchCard from '@/components/LaunchCard';
import AdUnit from '@/components/AdUnit';
import AmazonAffiliateBanner from '@/components/AmazonAffiliateBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spaceflight Tracker - Real-Time Space Launch Schedule & Space News',
  description: 'Track upcoming space launches, monitor the ISS in real-time, discover near-Earth asteroids, and explore astronomical events. Your comprehensive guide to space exploration from SpaceX, NASA, Blue Origin, ISRO, and more.',
  keywords: ['space launches', 'rocket launches', 'ISS tracker', 'space news', 'NASA', 'SpaceX', 'astronomy', 'space exploration'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com',
  },
  openGraph: {
    title: 'Spaceflight Tracker - Your Gateway to Space Exploration',
    description: 'Real-time tracking of space launches, ISS position, asteroids, and astronomical events. Stay updated with the latest in space exploration.',
    url: 'https://www.spaceflight-tracker.com',
    type: 'website',
  },
};

export default async function HomePage() {
  // Filter for future launches only
  const now = new Date();
  const futureLaunches = mockLaunches.filter(l => new Date(l.launchDate) > now);

  // Fetch next 3 upcoming launches for highlights
  let nextLaunches = futureLaunches.slice(0, 3);
  let totalLaunches = futureLaunches.length;

  // Get featured Falcon 9 Starlink 17-37 launch
  // Show it even if it already launched, but only for 5 hours after (T+5h)
  const fiveHoursAgo = new Date(now.getTime() - 5 * 60 * 60 * 1000);
  const featuredCandidates = mockLaunches.filter(l =>
    l.name.includes('Starlink Group 17-37') && new Date(l.launchDate) > fiveHoursAgo
  );
  let featuredLaunch = featuredCandidates[0];

  // Get featured Long March 7A launch
  const featuredLongMarchCandidates = mockLaunches.filter(l =>
    l.name.includes('Long March 7A') && new Date(l.launchDate) > fiveHoursAgo
  );
  let featuredLongMarch = featuredLongMarchCandidates[0];

  // Get featured Starlink 10-53 launch
  const featuredStarlink1053Candidates = mockLaunches.filter(l =>
    l.name.includes('Starlink Group 10-53') && new Date(l.launchDate) > fiveHoursAgo
  );
  let featuredStarlink1053 = featuredStarlink1053Candidates[0];

  try {
    // Fetch upcoming launches
    const data = await fetchUpcomingLaunches({ limit: 10 });

    // Filter for future launches only from API data and take the next 3 chronologically
    const apiFutureLaunches = data.launches.filter(l => new Date(l.launchDate) > now);
    nextLaunches = apiFutureLaunches.slice(0, 3);
    totalLaunches = data.count;

    // Try to get featured launch from API data
    // Allow launches up to 5 hours in the past (T+5h)
    const apiFeaturedCandidates = data.launches.filter(l =>
      l.name.includes('Starlink Group 17-37') && new Date(l.launchDate) > fiveHoursAgo
    );
    if (apiFeaturedCandidates.length > 0) {
      featuredLaunch = apiFeaturedCandidates[0];
    }

    // Try to get featured Long March 7A launch from API data
    const apiFeaturedLongMarchCandidates = data.launches.filter(l =>
      l.name.includes('Long March 7A') && new Date(l.launchDate) > fiveHoursAgo
    );
    if (apiFeaturedLongMarchCandidates.length > 0) {
      featuredLongMarch = apiFeaturedLongMarchCandidates[0];
    }

    // Try to get featured Starlink 10-53 launch from API data
    const apiFeaturedStarlink1053Candidates = data.launches.filter(l =>
      l.name.includes('Starlink Group 10-53') && new Date(l.launchDate) > fiveHoursAgo
    );
    if (apiFeaturedStarlink1053Candidates.length > 0) {
      featuredStarlink1053 = apiFeaturedStarlink1053Candidates[0];
    }
  } catch (error) {
    console.error('Failed to fetch launches for homepage:', error);
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage="home" variant="standard" />

      {/* Hero Section - Compact */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 mb-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-[10px] md:text-xs font-medium">Live Tracking • Real-Time Updates</span>
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
              Your Gateway to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Space Exploration
              </span>
            </h1>

            <p className="text-xs md:text-sm text-gray-400 mb-3 max-w-2xl mx-auto">
              Track space launches, monitor the ISS, discover asteroids, and explore astronomical events in real-time.
            </p>

            {/* Compact Stats */}
            <div className="flex flex-wrap gap-1.5 justify-center text-[10px] md:text-xs">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-2 py-1 md:px-2.5 md:py-1 flex items-center gap-1.5">
                <span className="font-bold text-blue-400">{totalLaunches}+</span>
                <span className="text-gray-400">Launches</span>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-2 py-1 md:px-2.5 md:py-1 flex items-center gap-1.5">
                <i className="fa-solid fa-satellite text-purple-400 text-[8px] md:text-xs"></i>
                <span className="text-gray-400">ISS Live</span>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-2 py-1 md:px-2.5 md:py-1 flex items-center gap-1.5">
                <i className="fa-solid fa-meteor text-orange-400 text-[8px] md:text-xs"></i>
                <span className="text-gray-400">Asteroids</span>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-2 py-1 md:px-2.5 md:py-1 flex items-center gap-1.5">
                <i className="fa-solid fa-earth-americas text-green-400 text-[8px] md:text-xs"></i>
                <span className="text-gray-400">Earthquakes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Launch + Product Section */}
      {(featuredLongMarch || featuredStarlink1053) && (
        <section className="container mx-auto px-4 py-8">
          <div className="mb-5">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-yellow-500 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                <i className="fa-solid fa-star text-yellow-400"></i>
                Featured Launches
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Featured Launch 1 - Long March 7A */}
            {featuredLongMarch && (
              <div className="w-full">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  Long March 7A
                  {new Date(featuredLongMarch.launchDate) < now && (
                    <span className="text-xs bg-red-600 px-2 py-1 rounded text-white font-normal">
                      🔴 LIVE
                    </span>
                  )}
                </h3>
                <LaunchCard launch={featuredLongMarch} />
              </div>
            )}

            {/* Featured Launch 2 - Falcon 9 Starlink 10-53 */}
            {featuredStarlink1053 && (
              <div className="w-full">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  Falcon 9 Starlink 10-53
                  {new Date(featuredStarlink1053.launchDate) < now && (
                    <span className="text-xs bg-red-600 px-2 py-1 rounded text-white font-normal">
                      🔴 LIVE
                    </span>
                  )}
                </h3>
                <LaunchCard launch={featuredStarlink1053} />
              </div>
            )}

            {/* Featured Product - Falcon 9 Model */}
            <div className="w-full md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <i className="fa-solid fa-cart-shopping text-blue-400"></i>
                Get Your Falcon 9 Model
              </h3>
              <AmazonAffiliateBanner
                product={{
                  name: 'SpaceX Falcon 9 Diecast Rocket Model',
                  asin: 'B0D2N2RQZ7',
                  affiliateLink: 'https://www.amazon.com/yuanpulalala-Starship-Diecast-Simulation-Desktop/dp/B0D2N2RQZ7?crid=2XFFYM9296MYJ&dib=eyJ2IjoiMSJ9.cDEMWp7yu1pPCbnhD2EOccilM1_bbp3JEJ90e2BrZWzALVett4dFF_WsA6-oJ-M8hDsMS0lBOBlfl5twD7hzDAcLn9Vyp-mJOsI6_TtkHoL6BS1aHkuzuFAstvTCSet8-18AEEGH4fTwfJr3U45QpxuqyyF9VI-VR8MxvQmidtwu5IBxCscQaqsF2e1ZvmoUQeOwsEP_WU2CZGxP9RWD-SohsDLfpc2MYedpBhH937a1RW00vVHkkm2B1C0W75RLd7PgcZ_uoVyeQ4oShSEc8o8bHc_sRooNWRAde6lbMUE.ME21gtbhayv9Ox_UOJwAfx7A_F0PXdpF8bxTTHrJTO0&dib_tag=se&keywords=yuanpulalala%2BSpaceX%2BFalcon%2B9&qid=1779557887&sprefix=yuanpulalala%2Bspacex%2Bfalcon%2B9%2Caps%2C286&sr=8-1&th=1&linkCode=ll2&tag=tiagoolivei07-20&linkId=f5644eaacf90f7a4106124f4b1ded4d8&language=en_US&ref_=as_li_ss_tl',
                  imageUrl: 'https://m.media-amazon.com/images/I/61HUoB-jz4L._AC_SL1200_.jpg',
                  description: 'Authentic 1:400 scale diecast metal replica with detailed boosters, simulation launch pad and display stand',
                  badge: 'Diecast Replica',
                  pieces: 'Metal Model',
                  age: 'Collectible',
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Next Launches Highlight */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Next Launches</h2>
            </div>
            <Link href="/launches">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2 text-sm">
                View All {totalLaunches}+
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
          <p className="text-gray-400">
            Don't miss these upcoming space missions with live countdowns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nextLaunches.map((launch) => (
            <LaunchCard key={launch.id} launch={launch} />
          ))}
        </div>
      </section>

      {/* Amazon Affiliate Banner 2 - Apollo Saturn V */}
      <AmazonAffiliateBanner
        product={{
          name: 'LEGO Ideas NASA Apollo Saturn V',
          asin: 'B08GNXNPR6',
          affiliateLink: 'https://www.amazon.com/dp/B08GNXNPR6?tag=tiagoolivei07-20&linkCode=ll2&linkId=b46d910cf09c6f9330bbf2820360ef29',
          imageUrl: 'https://m.media-amazon.com/images/I/81jtA27x30L._AC_SL1500_.jpg',
          description: 'Iconic 1 meter tall rocket with 3 removable stages, lunar lander, and display stand',
          badge: 'Historic Moon Mission',
          pieces: '1,969 Pieces',
          age: 'Ages 14+',
        }}
      />

      {/* What We Track Section */}
      <section className="bg-gray-800/30 border-y border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What We Track</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Comprehensive coverage of space activities, astronomical phenomena, and Earth science data from trusted sources like NASA, The Space Devs, and USGS.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Space Launches */}
              <Link href="/launches">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <i className="fa-solid fa-rocket text-blue-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Space Launches</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Real-time tracking of upcoming launches from SpaceX, NASA, Blue Origin, ISRO, CNSA, Roscosmos, and more.
                    Features live countdowns, mission details, launch locations, and direct links to livestreams.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                    <span>Explore Launches</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>

              {/* ISS Tracking */}
              <Link href="/iss">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <i className="fa-solid fa-satellite text-purple-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">ISS Live Tracking</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Follow the International Space Station in real-time on an interactive map. Updated every 5 seconds with current position,
                    altitude, velocity, and orbital path. See where the ISS is right now.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                    <span>Track ISS</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>

              {/* Asteroids */}
              <Link href="/asteroids">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <i className="fa-solid fa-meteor text-orange-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Near-Earth Asteroids</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    NASA-powered data on asteroids passing close to Earth. Includes size estimates, velocity, closest approach distance,
                    and potential hazard classification. Updated hourly from JPL NeoWs.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
                    <span>View Asteroids</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>

              {/* Astronomical Events */}
              <Link href="/events">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                      <i className="fa-solid fa-star text-yellow-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Astronomical Events</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Curated calendar of 2026 sky events including solar and lunar eclipses, meteor showers, supermoons,
                    and planetary conjunctions with detailed visibility information.
                  </p>
                  <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                    <span>Browse Events</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>

              {/* Earthquakes */}
              <Link href="/earthquakes">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <i className="fa-solid fa-earth-americas text-green-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Earthquake Monitor</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Live global earthquake data from USGS visualized on an interactive map. Magnitude-based indicators,
                    depth information, and real-time seismic activity updates from around the world.
                  </p>
                  <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                    <span>Monitor Earthquakes</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>

              {/* Rockets */}
              <Link href="/rockets">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <i className="fa-solid fa-database text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Rocket Database</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Comprehensive technical specifications for active and historic rockets. Dimensions, payload capacity,
                    reusability features, and complete launch history for vehicles from Falcon 9 to Starship.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    <span>Browse Rockets</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Space Matters Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Why Space Exploration Matters</h2>
            </div>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Space exploration represents humanity's drive to understand our universe and our place within it.
              Every rocket launch, every satellite deployed, and every mission to distant worlds expands our knowledge
              and capabilities in ways that benefit life on Earth.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-flask text-blue-400"></i>
                  Scientific Discovery
                </h3>
                <p className="text-gray-400">
                  Space missions have led to breakthroughs in physics, chemistry, biology, and medicine.
                  From understanding the origins of the universe to developing new materials, space research drives innovation.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-lightbulb text-yellow-400"></i>
                  Technology Development
                </h3>
                <p className="text-gray-400">
                  GPS navigation, weather forecasting, satellite communications, medical imaging, and countless other
                  technologies we use daily originated from space research and development.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-leaf text-green-400"></i>
                  Earth Observation
                </h3>
                <p className="text-gray-400">
                  Satellites monitor climate change, track deforestation, predict natural disasters, and help manage
                  resources. Space-based observation is crucial for understanding and protecting our planet.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-users text-purple-400"></i>
                  Global Cooperation
                </h3>
                <p className="text-gray-400">
                  The International Space Station demonstrates how nations can work together toward common goals.
                  Space exploration unites humanity in pursuit of knowledge and advancement.
                </p>
              </div>
            </div>

            <p className="text-lg">
              By tracking launches, monitoring space activities, and staying informed about discoveries, you're part of
              this incredible journey. Spaceflight Tracker makes it easy to follow the missions that are shaping our future.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="bg-gray-800/30 border-y border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Trusted Data Sources</h2>
              <p className="text-gray-400 text-lg">
                All information on Spaceflight Tracker comes from reputable scientific and institutional sources
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-rocket text-blue-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">The Space Devs API</h3>
                    <p className="text-gray-400 text-sm">
                      Launch Library 2 — the most comprehensive open-source space launch database maintained by a dedicated
                      community of space enthusiasts and professionals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-meteor text-orange-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">NASA JPL NeoWs</h3>
                    <p className="text-gray-400 text-sm">
                      Near Earth Object Web Service from NASA's Jet Propulsion Laboratory provides authoritative data on
                      asteroids and their trajectories near Earth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-earth-americas text-green-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">USGS Earthquake Hazards</h3>
                    <p className="text-gray-400 text-sm">
                      Real-time global seismic data from the United States Geological Survey, the world's leading authority
                      on earthquake monitoring and research.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-satellite text-purple-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Open Notify ISS API</h3>
                    <p className="text-gray-400 text-sm">
                      Real-time International Space Station position tracking with precise orbital data updated every few seconds
                      for accurate location monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Exploring Space Today</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of space enthusiasts tracking launches, monitoring the ISS, and staying informed about cosmic events
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/launches">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
                View Upcoming Launches
              </button>
            </Link>
            <Link href="/blog">
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg font-semibold transition-all transform hover:scale-105">
                Read Space News
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Amazon Affiliate Banner 3 - Space Shuttle Building Set */}
      <AmazonAffiliateBanner
        product={{
          name: 'Space Shuttle Building Kit with Rocket Booster',
          asin: 'B0F32W3T1M',
          affiliateLink: 'https://www.amazon.com/dp/B0F32W3T1M?tag=tiagoolivei07-20&linkCode=ll2&linkId=5e6bb356be52e604f0f030f577c65b56',
          imageUrl: 'https://m.media-amazon.com/images/I/61klXS3jD2L._AC_SL1280_.jpg',
          description: 'Detailed space shuttle with external fuel tank, solid rocket boosters, and display stand',
          badge: 'Space Shuttle Launch',
          pieces: '1,230 Pieces',
          age: 'Ages 8+',
        }}
      />

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2026 - Spaceflight Tracker</p>
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
