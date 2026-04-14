import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import EarthquakeMapClient from '@/components/EarthquakeMapClient';
import EarthquakeFooter from '@/components/EarthquakeFooter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Earthquake Monitor - Real-Time Global Earthquake Tracking',
  description: 'Track earthquakes worldwide in real-time. Live data from USGS showing magnitude, depth, location, and impact for all seismic events in the last 24 hours.',
  keywords: ['earthquake tracker', 'seismic activity', 'USGS earthquakes', 'real-time earthquakes', 'earthquake map', 'global earthquakes', 'earthquake monitoring', 'seismology'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/earthquakes',
  },
  openGraph: {
    title: 'Earthquake Monitor - Real-Time Global Earthquake Tracking',
    description: 'Track earthquakes worldwide with live USGS data showing magnitude, depth, and location for all seismic events.',
    url: 'https://www.spaceflight-tracker.com/earthquakes',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earthquake Monitor - Real-Time Earthquake Tracking',
    description: 'Track global earthquakes with live USGS data showing magnitude, depth, and location.',
  },
};

export default function EarthquakesPage() {
  return (
    <div className="relative w-full">
      <div className="relative h-screen w-full overflow-hidden flex flex-col">
        {/* Fixed Navigation Header */}
        <Navigation currentPage="earthquakes" variant="compact" />

        {/* Map - takes available space on desktop, limited on mobile */}
        <div className="flex-1 md:flex-1 w-full pt-[60px] min-h-0">
          <EarthquakeMapClient />
        </div>

        {/* Mobile Footer - Recent Earthquakes - Only on mobile */}
        <EarthquakeFooter />
      </div>

      {/* Educational Content Section - Below the Map */}
      <div className="bg-gray-900">
        <main className="container mx-auto px-4 py-12">
          <section className="mb-12 max-w-7xl mx-auto">
            {/* Plate Tectonics and Earthquake Science */}
            <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <i className="fa-solid fa-globe text-blue-400"></i>
                Understanding Earthquakes: Plate Tectonics and Seismic Activity
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Earthquakes are one of Earth's most powerful and destructive natural phenomena, releasing energy accumulated over
                  decades or centuries in mere seconds. Our planet experiences approximately 500,000 detectable earthquakes annually,
                  though only about 100,000 are strong enough to be felt by humans, and only 100 or so cause damage. Understanding
                  earthquakes requires grasping the dynamic nature of our planet—Earth is not a static sphere but a geologically
                  active body with a surface constantly in motion, driven by immense heat from its interior.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Plate Tectonics: The Engine of Earthquakes</h3>
                <p>
                  Earth's lithosphere—the rigid outer shell including the crust and uppermost mantle—is fractured into approximately
                  15 major tectonic plates and dozens of smaller ones. These plates "float" on the asthenosphere, a semi-molten layer
                  of rock beneath them that flows slowly over geological time scales. Heat from Earth's core and radioactive decay
                  in the mantle creates convection currents that drive plate movement at rates of 1-10 centimeters per year—about
                  as fast as fingernails grow. Despite this seemingly glacial pace, the forces involved are immense, and over millions
                  of years these movements have reshaped continents, built mountain ranges, and created ocean basins.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Convergent Boundaries</h4>
                    <p className="text-sm text-gray-400">
                      Plates collide and one subducts (dives beneath) the other, creating deep ocean trenches and volcanic arcs.
                      The Pacific Ring of Fire, where 90% of Earth's earthquakes occur, is formed by convergent boundaries where
                      oceanic plates subduct beneath continental plates. These produce the planet's most powerful earthquakes,
                      including megathrust events exceeding magnitude 9.0, and generate devastating tsunamis when the seafloor
                      suddenly rises or falls.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Divergent Boundaries</h4>
                    <p className="text-sm text-gray-400">
                      Plates move apart, allowing magma to rise and create new crust, primarily along mid-ocean ridges like the
                      Mid-Atlantic Ridge. These boundaries experience frequent but generally smaller earthquakes as magma pushes
                      upward and new crust fractures. Iceland sits atop the Mid-Atlantic Ridge, making it one of the few places
                      where a divergent boundary is visible above sea level, with active volcanism and seismic activity constantly
                      reshaping the island.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Transform Boundaries</h4>
                    <p className="text-sm text-gray-400">
                      Plates slide horizontally past each other, creating strike-slip faults. California's San Andreas Fault is
                      the most famous transform boundary, where the Pacific Plate moves northwest relative to the North American
                      Plate at about 5 cm/year. Rather than moving smoothly, plates lock together due to friction, building stress
                      over decades until sudden rupture releases accumulated energy in earthquakes like the 1906 San Francisco quake.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Fault Mechanics and Earthquake Generation</h3>
                <p>
                  Earthquakes occur when stress accumulated along faults exceeds the strength of rocks, causing sudden rupture and
                  displacement. This process, called elastic rebound, is analogous to bending a stick until it snaps—the bent portions
                  spring back to their original shape, releasing stored energy. The point where rupture initiates is the hypocenter
                  or focus, while the point directly above it on Earth's surface is the epicenter. Rupture propagates along the fault
                  plane at speeds of 2-3 kilometers per second, but large earthquakes can involve fault segments hundreds of kilometers
                  long, taking over a minute to complete.
                </p>

                <p>
                  Not all faults are created equal. Reverse or thrust faults occur where plates compress, pushing one block upward
                  relative to another—these generate the most powerful earthquakes. Normal faults result from extensional forces pulling
                  crust apart. Strike-slip faults involve horizontal motion with minimal vertical displacement. The 2011 Tohoku
                  earthquake in Japan, which measured magnitude 9.1, ruptured a megathrust fault where the Pacific Plate subducts
                  beneath Japan, displacing the seafloor vertically by up to 50 meters and triggering a tsunami that devastated
                  coastal communities and caused the Fukushima nuclear disaster.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Seismic Waves: The Earthquake's Signature</h3>
                <p>
                  When an earthquake occurs, it releases energy in the form of seismic waves that propagate through Earth's interior
                  and along its surface. Understanding these waves is crucial for earthquake detection, location, and magnitude
                  determination. There are four main types of seismic waves, each with distinct properties and behaviors.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Primary Waves (P-waves)</h4>
                    <p className="text-sm text-gray-400">
                      P-waves are compressional waves that push and pull rock in the direction of wave propagation, like sound waves.
                      They travel fastest (5-8 km/s through crust, up to 13 km/s through the mantle) and arrive first at seismographs,
                      hence "primary." P-waves can travel through solids, liquids, and gases, allowing them to pass through Earth's
                      liquid outer core. The time delay between P-wave and S-wave arrivals at seismograph stations allows scientists
                      to triangulate earthquake epicenters.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Secondary Waves (S-waves)</h4>
                    <p className="text-sm text-gray-400">
                      S-waves are shear waves that move rock perpendicular to the direction of wave propagation, like shaking a rope.
                      They travel more slowly than P-waves (3-4.5 km/s) and arrive second, hence "secondary." S-waves cannot propagate
                      through liquids or gases—their inability to pass through Earth's outer core provided early evidence that it is
                      molten. S-waves typically cause more damage than P-waves because their perpendicular motion is more destructive
                      to structures.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Love Waves</h4>
                    <p className="text-sm text-gray-400">
                      Love waves are surface waves that move the ground horizontally in a side-to-side motion perpendicular to the
                      direction of propagation. Named after British mathematician A.E.H. Love who described them mathematically, these
                      waves travel only along Earth's surface and are confined to shallow depths. Love waves are particularly damaging
                      to foundations of structures because they cause horizontal shearing with no vertical movement.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Rayleigh Waves</h4>
                    <p className="text-sm text-gray-400">
                      Rayleigh waves roll along the ground surface like ocean waves, causing both vertical and horizontal ground motion
                      in an elliptical pattern. These are the slowest seismic waves but often the most destructive because of their
                      large amplitude and complex motion. Rayleigh waves can circle the entire Earth multiple times after large
                      earthquakes, with the 2004 Sumatra earthquake generating waves detectable for weeks afterward.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Measurement and Prediction */}
            <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <i className="fa-solid fa-chart-line text-blue-400"></i>
                Measuring Earthquakes and the Challenge of Prediction
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">The Moment Magnitude Scale</h3>
                <p>
                  Modern seismology uses the moment magnitude scale (Mw) to measure earthquake size, which has largely replaced the
                  older Richter scale. Developed in 1979 by seismologists Thomas Hanks and Hiroo Kanamori, moment magnitude provides
                  a more accurate measure of large earthquakes by calculating the total energy released based on the area of fault
                  rupture, the amount of slip, and the rigidity of the rocks involved. The scale is logarithmic—each whole number
                  increase represents 10 times more ground motion amplitude and approximately 32 times more energy release.
                </p>

                <p>
                  A magnitude 5.0 earthquake releases energy equivalent to approximately 32 kilotons of TNT (roughly twice the
                  Nagasaki atomic bomb). A magnitude 6.0 releases about 1 megaton. The strongest earthquake ever recorded was the
                  1960 Valdivia earthquake in Chile, measuring magnitude 9.5, which released energy equivalent to approximately
                  178,000 megatons of TNT—millions of times more powerful than a magnitude 5.0 event. The moment magnitude scale
                  has no theoretical upper limit, though Earth's fault systems impose practical constraints.
                </p>

                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-5 my-4">
                  <h4 className="font-semibold text-white mb-3">Understanding Magnitude Categories</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p><strong className="text-red-400">9.0+:</strong> Great earthquakes. Cause catastrophic damage over vast areas. Occur approximately once per decade globally.</p>
                    <p><strong className="text-orange-400">7.0-8.9:</strong> Major earthquakes. Serious damage over large areas. About 15 occur globally per year.</p>
                    <p><strong className="text-yellow-400">6.0-6.9:</strong> Strong earthquakes. Considerable damage in populated areas. About 134 occur annually.</p>
                    <p><strong className="text-green-400">5.0-5.9:</strong> Moderate earthquakes. Slight damage to buildings. About 1,319 occur annually.</p>
                    <p><strong className="text-blue-400">4.0-4.9:</strong> Light earthquakes. Noticeable shaking, rarely cause damage. About 13,000 occur annually.</p>
                    <p><strong className="text-gray-400">&lt;4.0:</strong> Minor or micro earthquakes. Often not felt. Hundreds of thousands occur annually.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Early Warning Systems</h3>
                <p>
                  While predicting earthquakes days or weeks in advance remains beyond current capabilities, earthquake early warning
                  systems can provide seconds to minutes of warning before strong shaking arrives. These systems work by detecting
                  the fast-moving but less damaging P-waves and sending electronic alerts that arrive before the slower, more
                  destructive S-waves and surface waves. Japan's sophisticated early warning system, developed after decades of
                  seismic research, can issue warnings within seconds of detection, automatically stopping bullet trains, shutting
                  down industrial processes, and alerting millions of people via smartphone.
                </p>

                <p>
                  The United States has deployed ShakeAlert along the West Coast, providing warnings to California, Oregon, and
                  Washington. During a magnitude 7.1 earthquake near Ridgecrest, California in 2019, Los Angeles residents received
                  warnings up to 50 seconds before shaking arrived—enough time to take cover, stop surgeries, and secure equipment.
                  Mexico City's SASMEX system has been operational since 1991, providing warnings for earthquakes occurring along
                  the distant subduction zone, giving residents up to 2 minutes of warning time because of the city's distance from
                  typical epicenters.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">The Challenge of Earthquake Prediction</h3>
                <p>
                  Despite centuries of effort, reliably predicting earthquakes—specifying location, time, and magnitude in advance—remains
                  one of seismology's greatest challenges. Unlike weather forecasting, which has improved dramatically through better
                  understanding of atmospheric physics and improved computer models, earthquake prediction faces fundamental obstacles.
                  Earthquake nucleation occurs kilometers underground where direct observation is impossible. Faults are heterogeneous,
                  with varying strength, stress states, and frictional properties that change over time. Small variations in initial
                  conditions can determine whether stress release occurs gradually through small earthquakes or suddenly in a major event.
                </p>

                <p>
                  Seismologists can identify areas of high seismic hazard and estimate long-term probability—for example, the U.S.
                  Geological Survey estimates a 72% probability of a magnitude 6.7 or larger earthquake striking the San Francisco
                  Bay Area before 2043. However, these probabilistic forecasts differ fundamentally from deterministic predictions
                  of specific events. The scientific community remains skeptical of claimed prediction methods based on animal
                  behavior, weather patterns, or celestial alignments, as rigorous statistical analysis has not validated these approaches.
                </p>

                <p>
                  Current research focuses on understanding earthquake physics through detailed monitoring of fault zones, laboratory
                  experiments on rock mechanics, and sophisticated computer simulations. Projects like the San Andreas Fault Observatory
                  at Depth (SAFOD) drill directly into active fault zones to measure stress, temperature, and rock properties. The
                  densification of seismograph networks and advances in geodetic measurements using GPS satellites provide unprecedented
                  data about crustal deformation. While short-term prediction remains elusive, these efforts improve our understanding
                  of earthquake processes and enhance hazard assessment for building codes, emergency planning, and public preparedness.
                </p>

                <p>
                  The pragmatic approach to earthquake hazard focuses not on prediction but on preparedness: constructing earthquake-resistant
                  buildings through improved engineering and building codes, developing early warning systems, educating populations
                  about proper response during shaking, and planning emergency response and recovery operations. Countries like Japan
                  and Chile, which experience frequent large earthquakes, have demonstrated that with proper preparation and infrastructure,
                  even major seismic events need not result in catastrophic loss of life. The 2010 magnitude 8.8 Maule earthquake in
                  Chile and the 2011 magnitude 9.1 Tohoku earthquake in Japan, while devastating, resulted in far fewer casualties
                  than would have occurred decades earlier due to improved preparedness and construction standards.
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
