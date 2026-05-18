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

export async function GET(request: Request) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_N2YO_API_KEY;

    console.log('Future positions - N2YO API Key available:', !!apiKey);

    if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
      console.error('N2YO API key not configured');
      return NextResponse.json(
        { error: 'N2YO API key not configured. Please add NEXT_PUBLIC_N2YO_API_KEY to your environment variables.' },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const hoursAhead = parseInt(searchParams.get('hours') || '2');

    const maxSeconds = 300;
    const totalSeconds = Math.min(hoursAhead * 3600, 7200);
    const numCalls = Math.ceil(totalSeconds / maxSeconds);

    const allPositions: [number, number][] = [];

    for (let i = 0; i < numCalls; i++) {
      const seconds = Math.min(maxSeconds, totalSeconds - (i * maxSeconds));
      if (seconds <= 0) break;

      const url = `${N2YO_API_BASE}/positions/${TIANGONG_NORAD_ID}/${DEFAULT_OBSERVER.lat}/${DEFAULT_OBSERVER.lng}/${DEFAULT_OBSERVER.alt}/${seconds}?apiKey=${apiKey}`;

      const response = await fetch(url, {
        cache: 'no-store',
      });

      if (!response.ok) {
        console.warn(`N2YO API warning: ${response.status}`);
        continue;
      }

      const data: N2YOPositionsResponse = await response.json();

      if (data.positions && data.positions.length > 0) {
        const sampledPositions = data.positions
          .filter((_, index) => index % 5 === 0)
          .map(pos => [pos.satlatitude, pos.satlongitude] as [number, number]);

        allPositions.push(...sampledPositions);
      }

      if (i < numCalls - 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    return NextResponse.json(allPositions);
  } catch (error) {
    console.error('Error fetching Tiangong future positions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch future positions' },
      { status: 500 }
    );
  }
}
