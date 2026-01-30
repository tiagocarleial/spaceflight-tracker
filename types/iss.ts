export interface ISSPosition {
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  timestamp: number;
  visibility: string;
  footprint: number;
  daynum: number;
  solar_lat: number;
  solar_lon: number;
  units: string;
}

export interface ISSApiResponse {
  name: string;
  id: number;
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  visibility: string;
  footprint: number;
  timestamp: number;
  daynum: number;
  solar_lat: number;
  solar_lon: number;
  units: string;
}

export interface Astronaut {
  name: string;
  craft: string;
}

export interface AstronautsResponse {
  message: string;
  number: number;
  people: Astronaut[];
}
