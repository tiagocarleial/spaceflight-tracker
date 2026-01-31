import { NASANeoFeedResponse, Asteroid, ProcessedAsteroid } from '@/types/asteroid';

// NASA API Key - Get your own at https://api.nasa.gov/
// DEMO_KEY has rate limits (30 requests per hour, 50 per day)
const NASA_API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY || 'DEMO_KEY';
const NASA_NEO_API = 'https://api.nasa.gov/neo/rest/v1/feed';

export async function getNearEarthAsteroids(days: number = 7): Promise<ProcessedAsteroid[]> {
  try {
    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + days);

    const startDateStr = formatDate(today);
    const endDateStr = formatDate(endDate);

    const url = `${NASA_NEO_API}?start_date=${startDateStr}&end_date=${endDateStr}&api_key=${NASA_API_KEY}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`NASA API error: ${response.status}`);
    }

    const data: NASANeoFeedResponse = await response.json();

    // Process and flatten the data
    const asteroids: ProcessedAsteroid[] = [];

    Object.entries(data.near_earth_objects).forEach(([date, dayAsteroids]) => {
      dayAsteroids.forEach((asteroid: Asteroid) => {
        const approach = asteroid.close_approach_data[0];

        asteroids.push({
          id: asteroid.id,
          name: asteroid.name,
          cleanName: cleanAsteroidName(asteroid.name),
          date: approach.close_approach_date,
          dateFormatted: formatDateString(approach.close_approach_date_full),
          diameterMin: asteroid.estimated_diameter.meters.estimated_diameter_min,
          diameterMax: asteroid.estimated_diameter.meters.estimated_diameter_max,
          diameterAvg: (asteroid.estimated_diameter.meters.estimated_diameter_min +
                       asteroid.estimated_diameter.meters.estimated_diameter_max) / 2,
          velocity: parseFloat(approach.relative_velocity.kilometers_per_hour),
          missDistance: parseFloat(approach.miss_distance.kilometers),
          missDistanceLunar: parseFloat(approach.miss_distance.lunar),
          missDistanceAU: parseFloat(approach.miss_distance.astronomical),
          isPotentiallyHazardous: asteroid.is_potentially_hazardous_asteroid,
          isSentryObject: asteroid.is_sentry_object,
          absoluteMagnitude: asteroid.absolute_magnitude_h,
          url: asteroid.nasa_jpl_url,
          orbitingBody: approach.orbiting_body,
        });
      });
    });

    // Sort by hazardous first, then by date, then by miss distance
    asteroids.sort((a, b) => {
      // Hazardous asteroids come first
      if (a.isPotentiallyHazardous !== b.isPotentiallyHazardous) {
        return a.isPotentiallyHazardous ? -1 : 1;
      }

      // Then sort by date
      if (a.date !== b.date) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }

      // Finally by miss distance
      return a.missDistance - b.missDistance;
    });

    return asteroids;
  } catch (error) {
    console.error('Error fetching asteroids:', error);
    return [];
  }
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function cleanAsteroidName(name: string): string {
  // Remove parentheses and content inside them
  return name.replace(/\(.*?\)/g, '').trim();
}

function formatDateString(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getAsteroidSizeCategory(diameter: number): string {
  if (diameter < 25) return 'Small';
  if (diameter < 100) return 'Medium';
  if (diameter < 300) return 'Large';
  if (diameter < 1000) return 'Very Large';
  return 'Massive';
}

export function getAsteroidSizeComparison(diameter: number): string {
  if (diameter < 5) return 'Size of a car';
  if (diameter < 15) return 'Size of a bus';
  if (diameter < 40) return 'Size of a house';
  if (diameter < 100) return 'Size of a football field';
  if (diameter < 300) return 'Size of a stadium';
  if (diameter < 1000) return 'Size of a mountain';
  return 'Size of a large mountain';
}

export function getMissDistanceCategory(lunarDistance: number): string {
  if (lunarDistance < 1) return 'Very Close';
  if (lunarDistance < 5) return 'Close';
  if (lunarDistance < 10) return 'Moderate';
  if (lunarDistance < 20) return 'Distant';
  return 'Very Distant';
}
