'use client';

import { ProcessedAsteroid } from '@/types/asteroid';

interface SolarSystemMapProps {
  asteroid: ProcessedAsteroid;
}

// Orbital data (distances in AU)
// Real diameters: Mercury ~4,880km, Venus ~12,104km, Earth ~12,742km, Mars ~6,779km
const PLANETS = [
  { name: 'Mercury', distance: 0.39, color: '#8C7853', size: 14, realSize: '4,880 km', image: '/images/mercurio.png' },
  { name: 'Venus', distance: 0.72, color: '#FFC649', size: 20, realSize: '12,104 km', image: '/images/venus.png' },
  { name: 'Earth', distance: 1.0, color: '#4A90E2', size: 20, realSize: '12,742 km', image: '/images/earth.png' },
  { name: 'Mars', distance: 1.52, color: '#E27B58', size: 16, realSize: '6,779 km', image: '/images/marte.png' },
];

// Calculate asteroid size based on diameter (in meters)
// Earth diameter = 12,742 km = 12,742,000 meters, represented as 20px
// Scale: 1px ≈ 637,100 meters (637 km)
function getAsteroidSize(diameter: number): number {
  // Most asteroids are < 1km, so they should be tiny dots
  if (diameter < 50) return 2.5;      // Very small: tiny dot
  if (diameter < 100) return 3;       // Small: small dot
  if (diameter < 200) return 4;       // Medium-small
  if (diameter < 400) return 5;       // Medium
  if (diameter < 600) return 6;       // Medium-large
  if (diameter < 1000) return 7;      // Large (1km)
  if (diameter < 2000) return 8;      // Very large (2km)
  if (diameter < 5000) return 9;      // Huge (5km)
  return 10;                          // Enormous (>5km)
}

export default function SolarSystemMap({ asteroid }: SolarSystemMapProps) {
  const svgSize = 900;
  const center = svgSize / 2;
  const scale = 220; // pixels per AU

  // Calculate asteroid position (simplified - using miss distance as approximate orbital distance)
  const asteroidDistance = asteroid.missDistanceAU + 1.0; // AU from Earth + Earth's orbit
  const asteroidX = center + (asteroidDistance * scale * Math.cos(Math.PI / 4));
  const asteroidY = center - (asteroidDistance * scale * Math.sin(Math.PI / 4));

  // Get asteroid size based on diameter
  const asteroidSize = getAsteroidSize(asteroid.diameterAvg);

  // Earth position
  const earthX = center + (1.0 * scale);
  const earthY = center;

  return (
    <div className="w-full bg-black rounded-lg p-4">
      <svg
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className="w-full h-auto"
        style={{ maxHeight: '900px' }}
      >
        {/* Background stars */}
        <defs>
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDB813" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* Stars background */}
        {Array.from({ length: 100 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * svgSize}
            cy={Math.random() * svgSize}
            r={Math.random() * 1.5}
            fill="white"
            opacity={Math.random() * 0.8 + 0.2}
          />
        ))}

        {/* Planetary orbits */}
        {PLANETS.map((planet) => (
          <circle
            key={planet.name}
            cx={center}
            cy={center}
            r={planet.distance * scale}
            fill="none"
            stroke="#444"
            strokeWidth="1"
            strokeDasharray="5,5"
            opacity="0.5"
          />
        ))}

        {/* Asteroid orbit/path (approximate) */}
        <circle
          cx={center}
          cy={center}
          r={asteroidDistance * scale}
          fill="none"
          stroke="#ff4444"
          strokeWidth="2"
          strokeDasharray="10,5"
          opacity="0.6"
        />

        {/* Line from Sun to Asteroid */}
        <line
          x1={center}
          y1={center}
          x2={asteroidX}
          y2={asteroidY}
          stroke="#ff4444"
          strokeWidth="1"
          strokeDasharray="3,3"
          opacity="0.5"
        />

        {/* Line from Earth to Asteroid (miss distance) */}
        <line
          x1={earthX}
          y1={earthY}
          x2={asteroidX}
          y2={asteroidY}
          stroke="#4A90E2"
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Sun */}
        <defs>
          <clipPath id="sunClip">
            <circle cx={center} cy={center} r="35" />
          </clipPath>
        </defs>
        <image
          href="/images/sol.png"
          x={center - 35}
          y={center - 35}
          width={70}
          height={70}
          clipPath="url(#sunClip)"
          preserveAspectRatio="xMidYMid slice"
        />
        {/* Sun glow */}
        <circle
          cx={center}
          cy={center}
          r="40"
          fill="url(#sunGradient)"
          opacity="0.3"
        />

        {/* Planets */}
        {PLANETS.map((planet) => {
          const px = center + (planet.distance * scale);
          const py = center;

          return (
            <g key={planet.name}>
              {/* Planet with real image */}
              <defs>
                <clipPath id={`${planet.name}Clip-${px}-${py}`}>
                  <circle cx={px} cy={py} r={planet.size} />
                </clipPath>
              </defs>
              <image
                href={planet.image}
                x={px - planet.size}
                y={py - planet.size}
                width={planet.size * 2}
                height={planet.size * 2}
                clipPath={`url(#${planet.name}Clip-${px}-${py})`}
                preserveAspectRatio="xMidYMid slice"
              />
              {/* Subtle glow effect */}
              <circle
                cx={px}
                cy={py}
                r={planet.size + 2}
                fill="none"
                stroke={planet.color}
                strokeWidth="0.5"
                opacity="0.4"
              />
              <text
                x={px}
                y={py - planet.size - 8}
                fill="white"
                fontSize="14"
                textAnchor="middle"
                className="font-semibold"
              >
                {planet.name}
              </text>
              <text
                x={px}
                y={py + planet.size + 18}
                fill="#999"
                fontSize="11"
                textAnchor="middle"
              >
                {planet.realSize}
              </text>
            </g>
          );
        })}

        {/* Asteroid */}
        <g>
          {/* Glow effect for visibility */}
          <circle
            cx={asteroidX}
            cy={asteroidY}
            r={asteroidSize + 3}
            fill="none"
            stroke="#ff4444"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              values={`${asteroidSize + 3};${asteroidSize + 5};${asteroidSize + 3}`}
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={asteroidX}
            cy={asteroidY}
            r={asteroidSize}
            fill="#ff4444"
            stroke="#ff8888"
            strokeWidth="1.5"
          >
            <animate
              attributeName="r"
              values={`${asteroidSize};${asteroidSize + 1};${asteroidSize}`}
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <text
            x={asteroidX}
            y={asteroidY - asteroidSize - 12}
            fill="#ff4444"
            fontSize="15"
            textAnchor="middle"
            className="font-bold"
          >
            {asteroid.cleanName}
          </text>
          {/* Size label */}
          <text
            x={asteroidX}
            y={asteroidY + asteroidSize + 20}
            fill="#ff8888"
            fontSize="12"
            textAnchor="middle"
            className="font-semibold"
          >
            ~{Math.round(asteroid.diameterAvg)}m
          </text>
        </g>

        {/* Legend */}
        <g transform={`translate(30, ${svgSize - 200})`}>
          <rect
            x="0"
            y="0"
            width="340"
            height="190"
            fill="rgba(0,0,0,0.7)"
            rx="5"
          />
          <text x="15" y="28" fill="white" fontSize="16" className="font-semibold">
            Information:
          </text>
          <text x="15" y="55" fill="white" fontSize="13">
            Miss Distance: {asteroid.missDistanceAU.toFixed(4)} AU
          </text>
          <text x="15" y="75" fill="white" fontSize="13">
            ({(asteroid.missDistanceAU * 149597871).toFixed(0)} km)
          </text>
          <text x="15" y="105" fill="white" fontSize="13" className="font-semibold">
            Size Comparison:
          </text>
          <text x="15" y="125" fill="white" fontSize="12">
            Asteroid: ~{Math.round(asteroid.diameterAvg)}m ({(asteroid.diameterAvg / 1000).toFixed(2)}km)
          </text>
          <text x="15" y="143" fill="white" fontSize="12">
            Earth: 12,742 km (diameter)
          </text>
          <text x="15" y="163" fill="#888" fontSize="11">
            1 AU = 149,597,871 km
          </text>
          <text x="15" y="180" fill="#888" fontSize="11">
            *Sizes scaled for visibility
          </text>
        </g>
      </svg>
    </div>
  );
}
