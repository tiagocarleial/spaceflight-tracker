import type {
  EarthquakeGeoJSON,
  EarthquakeFeature,
  ProcessedEarthquake,
  MagnitudeCategory,
  DepthCategory,
  Continent,
} from '@/types/earthquake';

// USGS Earthquake API endpoint for all earthquakes in the past 24 hours
const USGS_API_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

/**
 * Fetch earthquakes from USGS API and process them
 */
export async function getEarthquakes(): Promise<ProcessedEarthquake[]> {
  try {
    const response = await fetch(USGS_API_URL, {
      cache: 'no-store', // Real-time data, no caching
    });

    if (!response.ok) {
      throw new Error(`USGS API error: ${response.status}`);
    }

    const data: EarthquakeGeoJSON = await response.json();

    // Process each earthquake feature
    const processedEarthquakes = data.features
      .map(processEarthquakeFeature)
      .filter((eq): eq is ProcessedEarthquake => eq !== null);

    return processedEarthquakes;
  } catch (error) {
    console.error('Error fetching earthquake data:', error);
    return [];
  }
}

/**
 * Process a single earthquake feature from USGS API
 */
function processEarthquakeFeature(feature: EarthquakeFeature): ProcessedEarthquake | null {
  const { properties, geometry, id } = feature;

  // Skip if magnitude is null or invalid
  if (properties.mag === null || properties.mag === undefined) {
    return null;
  }

  // Extract coordinates and depth (USGS format: [lng, lat, depth])
  const [longitude, latitude, depthValue] = geometry.coordinates;

  // Validate coordinates
  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    return null;
  }

  const depth = depthValue || 0;

  return {
    id,
    magnitude: properties.mag,
    place: properties.place || 'Unknown Location',
    time: properties.time,
    timeFormatted: formatTimestamp(properties.time),
    coordinates: [latitude, longitude], // Swapped for Leaflet!
    depth,
    depthKm: `${depth.toFixed(1)} km`,
    url: properties.url,
    status: properties.status,
    tsunami: properties.tsunami === 1,
    magType: properties.magType,
    felt: properties.felt,
    alert: properties.alert,
    significanceScore: properties.sig,
    continent: getContinentFromCoordinates(latitude, longitude),
    magnitudeCategory: getMagnitudeCategory(properties.mag),
    depthCategory: getDepthCategory(depth),
  };
}

/**
 * Get magnitude category based on Richter scale
 */
export function getMagnitudeCategory(magnitude: number): MagnitudeCategory {
  if (magnitude < 3.0) return 'minor';
  if (magnitude < 5.0) return 'light';
  if (magnitude < 7.0) return 'moderate';
  if (magnitude < 8.0) return 'strong';
  if (magnitude < 9.0) return 'major';
  return 'great';
}

/**
 * Get depth category for earthquake classification
 */
export function getDepthCategory(depth: number): DepthCategory {
  if (depth < 70) return 'shallow';
  if (depth < 300) return 'intermediate';
  return 'deep';
}

/**
 * Determine continent from latitude and longitude
 * Uses approximate geographic bounds for each continent
 */
export function getContinentFromCoordinates(lat: number, lng: number): Continent {
  // North America (including Central America and Caribbean)
  if (lat >= 5 && lat <= 84 && lng >= -170 && lng <= -25) {
    return 'North America';
  }

  // South America
  if (lat >= -56 && lat <= 15 && lng >= -82 && lng <= -34) {
    return 'South America';
  }

  // Europe
  if (lat >= 35 && lat <= 71 && lng >= -25 && lng <= 40) {
    return 'Europe';
  }

  // Asia (including Middle East and most of Russia)
  if (
    (lat >= -10 && lat <= 80 && lng >= 26 && lng <= 180) ||
    (lat >= -10 && lat <= 80 && lng >= -180 && lng <= -168)
  ) {
    return 'Asia';
  }

  // Africa
  if (lat >= -35 && lat <= 37 && lng >= -18 && lng <= 52) {
    return 'Africa';
  }

  // Oceania (Australia, New Zealand, Pacific Islands)
  if (
    (lat >= -50 && lat <= 0 && lng >= 110 && lng <= 180) ||
    (lat >= -50 && lat <= -10 && lng >= -180 && lng <= -130)
  ) {
    return 'Oceania';
  }

  // Antarctica
  if (lat < -60) {
    return 'Antarctica';
  }

  // Default to Unknown for ambiguous locations
  return 'Unknown';
}

/**
 * Format Unix timestamp to readable date string
 */
export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  // Show relative time for recent earthquakes
  if (diffMins < 1) {
    return 'Just now';
  } else if (diffMins < 60) {
    return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  }

  // Full date for older earthquakes
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  return date.toLocaleDateString('en-US', options);
}

/**
 * Get color for magnitude marker
 */
export function getMagnitudeColor(magnitude: number): string {
  if (magnitude < 3) return '#22c55e'; // green-500
  if (magnitude < 5) return '#eab308'; // yellow-500
  if (magnitude < 7) return '#f97316'; // orange-500
  return '#ef4444'; // red-500
}

/**
 * Get marker size based on magnitude
 */
export function getMarkerSize(magnitude: number): number {
  return Math.max(4, Math.min(magnitude * 3, 30)); // 4-30px radius
}
