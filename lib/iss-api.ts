import { ISSApiResponse, ISSPosition, AstronautsResponse, Astronaut } from '@/types/iss';

const ISS_API_BASE = 'https://api.wheretheiss.at/v1/satellites/25544';
const ASTRONAUTS_API = 'http://api.open-notify.org/astros.json';

export async function getISSPosition(): Promise<ISSPosition | null> {
  try {
    const response = await fetch(ISS_API_BASE, {
      cache: 'no-store', // Always get fresh data
    });

    if (!response.ok) {
      throw new Error('Failed to fetch ISS position');
    }

    const data: ISSApiResponse = await response.json();

    return {
      latitude: data.latitude,
      longitude: data.longitude,
      altitude: data.altitude,
      velocity: data.velocity,
      timestamp: data.timestamp,
      visibility: data.visibility,
      footprint: data.footprint,
      daynum: data.daynum,
      solar_lat: data.solar_lat,
      solar_lon: data.solar_lon,
      units: data.units,
    };
  } catch (error) {
    console.error('Error fetching ISS position:', error);
    return null;
  }
}

export async function getAstronauts(): Promise<Astronaut[]> {
  try {
    const response = await fetch(ASTRONAUTS_API, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch astronauts');
    }

    const data: AstronautsResponse = await response.json();

    // Filter only astronauts on ISS
    return data.people.filter(person => person.craft === 'ISS');
  } catch (error) {
    console.error('Error fetching astronauts:', error);
    return [];
  }
}

export async function getISSFuturePositions(hoursAhead: number = 2): Promise<[number, number][]> {
  try {
    const now = Math.floor(Date.now() / 1000);
    const interval = 300; // 5 minutes in seconds
    const numPoints = Math.floor((hoursAhead * 3600) / interval);

    // Generate timestamps for the next X hours
    const timestamps = Array.from({ length: numPoints }, (_, i) => now + (i * interval));
    const timestampsString = timestamps.join(',');

    const response = await fetch(
      `${ISS_API_BASE}/positions?timestamps=${timestampsString}&units=kilometers`,
      {
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch ISS future positions');
    }

    const data: ISSApiResponse[] = await response.json();

    // Return array of [lat, lng] tuples
    return data.map(pos => [pos.latitude, pos.longitude] as [number, number]);
  } catch (error) {
    console.error('Error fetching ISS future positions:', error);
    return [];
  }
}
