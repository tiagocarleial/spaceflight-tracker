// USGS GeoJSON API Response Types
// API: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson

export interface EarthquakeGeoJSON {
  type: "FeatureCollection";
  metadata: {
    generated: number;
    url: string;
    title: string;
    status: number;
    api: string;
    count: number;
  };
  features: EarthquakeFeature[];
  bbox: [number, number, number, number, number, number];
}

export interface EarthquakeFeature {
  type: "Feature";
  id: string;
  properties: {
    mag: number | null;
    place: string;
    time: number;
    updated: number;
    tz: number | null;
    url: string;
    detail: string;
    felt: number | null;
    cdi: number | null;
    mmi: number | null;
    alert: string | null;
    status: string;
    tsunami: number;
    sig: number;
    net: string;
    code: string;
    ids: string;
    sources: string;
    types: string;
    nst: number | null;
    dmin: number | null;
    rms: number;
    gap: number | null;
    magType: string;
    type: string;
    title: string;
  };
  geometry: {
    type: "Point";
    coordinates: [number, number, number]; // [longitude, latitude, depth]
  };
}

// Processed earthquake for application use
export interface ProcessedEarthquake {
  id: string;
  magnitude: number;
  place: string;
  time: number;
  timeFormatted: string;
  coordinates: [number, number]; // [latitude, longitude] - swapped for Leaflet!
  depth: number;
  depthKm: string;
  url: string;
  status: string;
  tsunami: boolean;
  magType: string;
  felt: number | null;
  alert: string | null;
  significanceScore: number;
  continent: string;
  magnitudeCategory: 'minor' | 'light' | 'moderate' | 'strong' | 'major' | 'great';
  depthCategory: 'shallow' | 'intermediate' | 'deep';
}

// Magnitude categories based on Richter scale
export type MagnitudeCategory = 'minor' | 'light' | 'moderate' | 'strong' | 'major' | 'great';

// Depth categories for earthquake classification
export type DepthCategory = 'shallow' | 'intermediate' | 'deep';

// Continent names for filtering
export type Continent =
  | 'North America'
  | 'South America'
  | 'Europe'
  | 'Asia'
  | 'Africa'
  | 'Oceania'
  | 'Antarctica'
  | 'Unknown';
