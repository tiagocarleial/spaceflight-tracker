import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import EarthquakeMapClient from '@/components/EarthquakeMapClient';
import EarthquakeFooter from '@/components/EarthquakeFooter';

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
  );
}
