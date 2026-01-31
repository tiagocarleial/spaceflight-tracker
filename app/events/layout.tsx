import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astronomical Events 2026 - Eclipses, Meteor Showers & Supermoons',
  description: 'Track major astronomical events in 2026 including solar and lunar eclipses, meteor showers, supermoons, and planetary conjunctions. Complete astronomy calendar with dates, times, and visibility information.',
  keywords: [
    'astronomy events 2026',
    'solar eclipse 2026',
    'lunar eclipse 2026',
    'meteor showers 2026',
    'supermoon 2026',
    'Perseids meteor shower',
    'Quadrantids meteor shower',
    'Geminids meteor shower',
    'total solar eclipse',
    'astronomy calendar',
    'celestial events',
    'planetary conjunctions',
    'night sky events',
    'stargazing 2026',
  ],
  openGraph: {
    title: 'Astronomical Events 2026 - Eclipses, Meteor Showers & Supermoons',
    description: 'Complete astronomy calendar for 2026 with solar eclipses, lunar eclipses, meteor showers, supermoons, and planetary conjunctions.',
    url: 'https://www.spaceflight-tracker.com/events',
    siteName: 'Spaceflight Tracker',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spaceflight Tracker - Astronomical Events 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astronomical Events 2026 - Eclipses, Meteor Showers & Supermoons',
    description: 'Complete astronomy calendar for 2026 with solar eclipses, lunar eclipses, meteor showers, supermoons, and planetary conjunctions.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/events',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
