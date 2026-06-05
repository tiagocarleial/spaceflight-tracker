import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import TiangongMapClient from '@/components/TiangongMapClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tiangong Live - Chinese Space Station Real-Time Tracking',
  description: 'Track the Tiangong space station (天宮) in real-time. See current position, altitude, velocity, and taikonaut crew members. Live orbital tracking map updated every 5 seconds.',
  keywords: ['Tiangong tracking', 'Chinese space station', 'Tiangong live', 'space station tracker', 'Tiangong position', 'taikonauts', 'China space program'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/tiangong',
  },
  openGraph: {
    title: 'Tiangong Live - Chinese Space Station Real-Time Tracking',
    description: 'Track the Tiangong space station in real-time with live position updates, orbital path, and crew information.',
    url: 'https://www.spaceflight-tracker.com/tiangong',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiangong Live - Track the Chinese Space Station',
    description: 'Real-time Tiangong tracking with live position, velocity, and crew data.',
  },
};

export default function TiangongPage() {

  return (
    <div className="relative w-full">
      {/* Fixed Navigation Header */}
      <Navigation currentPage="tiangong" variant="compact" />

      {/* Intro lead — keeps editorial content above the fold */}
      <section className="bg-gray-900 pt-[76px] pb-5 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-red-500 rounded-full"></div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Tiangong Live Tracker</h1>
          </div>
          <p className="text-gray-400 max-w-3xl">
            Track China's Tiangong space station (天宮) in real time as it circles Earth at about
            27,600 km/h, orbiting the planet once every 90 minutes. The map below refreshes its position
            every few seconds. Scroll down for a complete guide to the station, its modules, and its
            taikonaut crew.
          </p>
        </div>
      </section>

      {/* Live Map */}
      <div className="h-[70vh] w-full">
        <TiangongMapClient />
      </div>

      {/* Educational Content Section - Below the Map */}
      <div className="bg-gray-900">

        <main className="container mx-auto px-4 py-12">
          <section className="mb-12 max-w-7xl mx-auto">
            {/* Tiangong Overview */}
            <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <i className="fa-solid fa-satellite text-red-400"></i>
                Tiangong (天宮): China's Permanent Space Station
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Tiangong (天宮, meaning "Heavenly Palace") is China's first permanent modular space station and represents
                  a monumental achievement in the nation's ambitious space program. Launched between 2021 and 2022, Tiangong
                  orbits Earth at an altitude of approximately 340-420 kilometers (210-260 miles), traveling at 27,600
                  kilometers per hour (17,150 mph), completing one orbit every 90 minutes. The station is designed to operate
                  for at least 10-15 years and serves as China's platform for long-duration crewed missions, scientific
                  research, and technological demonstrations in low Earth orbit.
                </p>

                <p>
                  With a total mass of approximately 66 tons when fully assembled and a pressurized volume of about 110 cubic
                  meters (3,884 cubic feet), Tiangong is significantly smaller than the International Space Station but represents
                  China's independent capability to establish and maintain a permanent human presence in space. The station typically
                  hosts three taikonauts (Chinese astronauts) for missions lasting six months, with crew rotations occurring twice
                  annually. Tiangong has been continuously crewed since June 2022, establishing China as only the third nation after
                  the USSR/Russia and USA to achieve sustained human spaceflight operations.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Modular Architecture and Assembly</h3>
                <p>
                  Tiangong consists of three main modules arranged in a T-shaped configuration, launched sequentially and
                  assembled in orbit through autonomous rendezvous and docking procedures. This modular design allows for
                  future expansion and demonstrates China's advanced spaceflight capabilities in orbital construction and
                  autonomous systems.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Tianhe Core Module (天和)</h4>
                    <p className="text-sm text-gray-400">
                      Launched April 29, 2021. The central living quarters and control module, measuring 16.6 meters long
                      with a diameter of 4.2 meters. Contains crew sleeping quarters, life support systems, exercise equipment,
                      and the station's main control center. Provides five docking ports for visiting spacecraft and additional modules.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Wentian Lab Module (問天)</h4>
                    <p className="text-sm text-gray-400">
                      Launched July 24, 2022. The first laboratory module, focused on life sciences and biotechnology research.
                      Includes backup life support systems, additional sleeping quarters, and the station's primary airlock for
                      spacewalks. Features a small robotic arm for external experiments and maintenance.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Mengtian Lab Module (夢天)</h4>
                    <p className="text-sm text-gray-400">
                      Launched October 31, 2022. The second laboratory module, dedicated to microgravity research in materials
                      science, fluid physics, and combustion. Features an external payload platform for space exposure experiments
                      and includes an airlock for deploying small satellites and external payloads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>


        <main className="container mx-auto px-4 py-12">
          <section className="mb-12 max-w-7xl mx-auto">
            <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-8 mb-6">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Life Aboard Tiangong</h3>
                <p>
                  Taikonauts living aboard Tiangong follow a structured daily schedule that balances scientific work, station
                  maintenance, physical exercise, and rest. The typical day begins at 6:00 AM Beijing Time and includes 6-8 hours
                  of work time, 2 hours of mandatory exercise (using specialized equipment designed to counteract muscle atrophy
                  and bone density loss in microgravity), meals, personal hygiene, and communication with mission control and family.
                  The station's life support systems recycle water and generate oxygen through electrolysis, though regular resupply
                  missions from Tianzhou cargo spacecraft remain essential for bringing fresh food, spare parts, and new experiments.
                </p>

                <p>
                  Unlike the ISS's international configuration, Tiangong operates entirely under Chinese control with all systems,
                  documentation, and communications in Mandarin Chinese. The crew enjoys modern amenities including private sleeping
                  quarters, WiFi connectivity for video calls home, a small galley with heating capabilities for meals, and even
                  a treadmill positioned with a view of Earth through one of the station's windows. Taikonauts have described the
                  unique experience of conducting traditional Chinese calligraphy, celebrating Chinese festivals like the Spring
                  Festival (Chinese New Year) in orbit, and maintaining cultural traditions while living in space.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Scientific Research Program</h3>
                <p>
                  Tiangong serves as China's premier microgravity research laboratory, conducting experiments across multiple
                  scientific disciplines that leverage the unique space environment. The station's research program focuses on
                  advancing knowledge in areas critical to China's economic development, technological leadership, and future
                  deep space exploration capabilities.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Life Sciences & Medicine</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Research examines how space affects human physiology, including cardiovascular changes, immune system
                      function, bone metabolism, and muscle adaptation. Studies also investigate plant growth in microgravity
                      for future life support systems, stem cell behavior in space, and the effects of space radiation on
                      biological organisms.
                    </p>
                    <p className="text-sm text-gray-400">
                      Notable experiments include growing rice and other crops in space, studying the development of zebrafish
                      embryos in microgravity, and testing new medical treatments and pharmaceuticals that benefit from the
                      space environment.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Materials Science & Physics</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Microgravity enables the production of advanced materials with unique properties impossible to create on
                      Earth. Researchers study metallic glass formation, semiconductor crystal growth, and alloy manufacturing
                      without gravity-induced defects. Fluid physics experiments examine combustion processes, heat transfer,
                      and phase transitions in the absence of buoyancy-driven convection.
                    </p>
                    <p className="text-sm text-gray-400">
                      The station's high-temperature materials furnace can reach 3000°C, allowing experiments that could lead
                      to stronger, lighter materials for aerospace applications.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Earth Observation & Climate</h4>
                    <p className="text-sm text-gray-400">
                      Tiangong carries advanced Earth observation instruments that monitor atmospheric composition, ocean
                      temperatures, land use changes, and environmental phenomena. High-resolution cameras capture detailed
                      imagery for disaster monitoring, urban planning, and agricultural assessment. Spectrometers analyze
                      atmospheric gases to track pollution and greenhouse gas concentrations over China and globally.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Space Technology Demonstrations</h4>
                    <p className="text-sm text-gray-400">
                      The station tests new technologies for future deep space missions, including advanced life support systems,
                      robotic maintenance capabilities, 3D printing in space, and high-bandwidth communication systems. External
                      platforms expose materials and components to the space environment to test long-term durability and radiation
                      resistance for future spacecraft designs.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">China's Space Program Milestones</h3>
                <p>
                  Tiangong represents the culmination of decades of Chinese space development, following a carefully planned
                  progression of achievements. China became the third nation to independently launch humans into orbit in 2003
                  with the Shenzhou 5 mission carrying Yang Liwei. The program then progressed through Tiangong-1 (2011-2018)
                  and Tiangong-2 (2016-2019), smaller prototype space laboratories that tested key technologies for rendezvous,
                  docking, and medium-duration spaceflight before constructing the permanent modular station.
                </p>

                <p>
                  Beyond Tiangong, China's space ambitions include establishing a lunar research station in partnership with
                  Russia by the 2030s, conducting crewed lunar missions, and eventually sending taikonauts to Mars. The space
                  station serves as a proving ground for the technologies and operational experience necessary for these future
                  endeavors. China has also expressed openness to international collaboration on Tiangong, with several countries
                  and institutions proposing experiments to fly aboard the station, though no international crew members have
                  yet visited.
                </p>
              </div>
            </div>
          </section>
        </main>


        <main className="container mx-auto px-4 py-12">
          <section className="mb-12 max-w-7xl mx-auto">
            <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-8 mb-6">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Comparison with ISS</h3>
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Tiangong (天宮)</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• <strong>Mass:</strong> ~66 tons</li>
                        <li>• <strong>Volume:</strong> ~110 m³</li>
                        <li>• <strong>Crew:</strong> 3 taikonauts</li>
                        <li>• <strong>Altitude:</strong> 340-420 km</li>
                        <li>• <strong>Modules:</strong> 3 (T-configuration)</li>
                        <li>• <strong>Operational:</strong> 2021-present</li>
                        <li>• <strong>Partners:</strong> China (独立运营)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">ISS</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• <strong>Mass:</strong> ~420 tons</li>
                        <li>• <strong>Volume:</strong> ~388 m³</li>
                        <li>• <strong>Crew:</strong> 6-7 astronauts</li>
                        <li>• <strong>Altitude:</strong> ~400 km</li>
                        <li>• <strong>Modules:</strong> 16+</li>
                        <li>• <strong>Operational:</strong> 1998-2030+</li>
                        <li>• <strong>Partners:</strong> 5 space agencies (international)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-4">
                  While smaller than the ISS, Tiangong's modern design incorporates lessons learned from decades of space
                  station operations, featuring more efficient systems, streamlined logistics, and state-of-the-art technology.
                  The station demonstrates China's capability to independently operate a sophisticated orbital facility and
                  positions the nation as a major spacefaring power in the 21st century.
                </p>
              </div>
            </div>
          </section>
        </main>


        {/* Footer */}
        <footer className="border-t border-gray-800 bg-gray-900">
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
    </div>
  );
}
