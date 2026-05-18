import { ISSPosition, Astronaut } from '@/types/iss';

const ASTRONAUTS_API = 'https://api.open-notify.org/astros.json';

export async function getTiangongPosition(): Promise<ISSPosition | null> {
  try {
    // Call our internal API route which proxies to N2YO
    const response = await fetch('/api/tiangong/position', {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Tiangong position');
    }

    const data: ISSPosition = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Tiangong position:', error);
    return null;
  }
}

export async function getTaikonauts(): Promise<Astronaut[]> {
  try {
    const response = await fetch(ASTRONAUTS_API, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch taikonauts');
    }

    const data = await response.json();

    // Filter only taikonauts on Tiangong
    return data.people.filter((person: Astronaut) => person.craft === 'Tiangong');
  } catch (error) {
    console.error('Error fetching taikonauts:', error);
    return [];
  }
}

export async function getTiangongFuturePositions(hoursAhead: number = 2): Promise<[number, number][]> {
  try {
    // Call our internal API route which proxies to N2YO
    const response = await fetch(`/api/tiangong/future-positions?hours=${hoursAhead}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Tiangong future positions');
    }

    const data: [number, number][] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Tiangong future positions:', error);
    return [];
  }
}
