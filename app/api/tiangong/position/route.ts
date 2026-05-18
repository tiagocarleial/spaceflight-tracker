import { NextResponse } from 'next/server';

const TIANGONG_NORAD_ID = 48274;
const N2YO_API_BASE = 'https://api.n2yo.com/rest/v1/satellite';

// Default observer location (Beijing, China)
const DEFAULT_OBSERVER = {
  lat: 39.9042,
  lng: 116.4074,
  alt: 0,
};

interface N2YOPosition {
  satlatitude: number;
  satlongitude: number;
  sataltitude: number;
  azimuth: number;
  elevation: number;
  ra: number;
  dec: number;
  timestamp: number;
}

interface N2YOPositionsResponse {
  info: {
    satname: string;
    satid: number;
    transactionscount: number;
  };
  positions: N2YOPosition[];
}

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_N2YO_API_KEY;

    console.log('N2YO API Key available:', !!apiKey);

    if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
      console.error('N2YO API key not configured');
      return NextResponse.json(
        { error: 'N2YO API key not configured. Please add NEXT_PUBLIC_N2YO_API_KEY to your environment variables.' },
        { status: 500 }
      );
    }

    const seconds = 1;
    const url = `${N2YO_API_BASE}/positions/${TIANGONG_NORAD_ID}/${DEFAULT_OBSERVER.lat}/${DEFAULT_OBSERVER.lng}/${DEFAULT_OBSERVER.alt}/${seconds}?apiKey=${apiKey}`;

    console.log('Fetching Tiangong position from N2YO...');

    const response = await fetch(url, {
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`N2YO API error: ${response.status} - ${errorText}`);
      throw new Error(`N2YO API error: ${response.status}`);
    }

    const data: N2YOPositionsResponse = await response.json();

    if (!data.positions || data.positions.length === 0) {
      console.error('No position data returned from N2YO');
      throw new Error('No position data returned');
    }

    const pos = data.positions[0];
    const orbitalVelocity = 27600; // km/h

    console.log('Successfully fetched Tiangong position');

    return NextResponse.json({
      latitude: pos.satlatitude,
      longitude: pos.satlongitude,
      altitude: pos.sataltitude,
      velocity: orbitalVelocity,
      timestamp: pos.timestamp,
      visibility: 'daylight',
      footprint: 4500,
      daynum: 0,
      solar_lat: 0,
      solar_lon: 0,
      units: 'kilometers',
    });
  } catch (error) {
    console.error('Error fetching Tiangong position:', error);
    return NextResponse.json(
      { error: `Failed to fetch Tiangong position: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
