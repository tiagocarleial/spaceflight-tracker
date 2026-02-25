import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ISSMapClient from '@/components/ISSMapClient';

export const metadata: Metadata = {
  title: 'ISS Live - International Space Station Real-Time Tracking',
  description: 'Track the International Space Station (ISS) in real-time. See current position, altitude, velocity, and crew members. Live orbital tracking map updated every 5 seconds.',
  keywords: ['ISS tracking', 'International Space Station', 'ISS live', 'space station tracker', 'ISS position', 'ISS location', 'satellite tracking'],
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/iss',
  },
  openGraph: {
    title: 'ISS Live - International Space Station Real-Time Tracking',
    description: 'Track the International Space Station in real-time with live position updates, orbital path, and crew information.',
    url: 'https://www.spaceflight-tracker.com/iss',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISS Live - Track the International Space Station',
    description: 'Real-time ISS tracking with live position, velocity, and crew data.',
  },
};

export default function ISSPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fixed Navigation Header */}
      <Navigation currentPage="iss" variant="compact" />

      {/* Fullscreen Map */}
      <div className="h-screen w-full pt-[60px]">
        <ISSMapClient />
      </div>
    </div>
  );
}
