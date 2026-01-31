import { AstronomyEvent, ProcessedAstronomyEvent } from '@/types/astronomy-event';

// Major astronomy events for 2026
const ASTRONOMY_EVENTS_2026: AstronomyEvent[] = [
  // Eclipses
  {
    id: 'solar-eclipse-feb-2026',
    title: 'Annular Solar Eclipse',
    type: 'eclipse-solar',
    date: '2026-02-17',
    dateFormatted: 'February 17, 2026',
    description: 'An annular solar eclipse, also known as a "ring of fire" eclipse, will occur over Antarctica.',
    visibility: 'Antarctica, Southern Ocean',
    peakTime: '12:13 UTC',
    details: [
      'Maximum duration: 2 minutes 20 seconds',
      'Path crosses Antarctica',
      'Partial phases visible from southern South America, Africa',
      'Eclipse magnitude: 0.963'
    ],
  },
  {
    id: 'lunar-eclipse-mar-2026',
    title: 'Total Lunar Eclipse',
    type: 'eclipse-lunar',
    date: '2026-03-03',
    dateFormatted: 'March 3, 2026',
    description: 'The last total lunar eclipse until the very end of 2028. Totality visible across parts of North and South America, Australia, and Asia.',
    visibility: 'North America, South America, Australia, Asia',
    peakTime: '11:33 UTC',
    details: [
      'Total phase duration: 58 minutes',
      'Last total lunar eclipse until 2028',
      'Moon will turn red/orange during totality',
      'Visible from entire North and South America'
    ],
  },
  {
    id: 'solar-eclipse-aug-2026',
    title: 'Total Solar Eclipse',
    type: 'eclipse-solar',
    date: '2026-08-12',
    dateFormatted: 'August 12, 2026',
    description: 'A total solar eclipse will begin in the Arctic Ocean off the Northern coast of Russia, move across Greenland, Iceland, and the Atlantic Ocean before ending in Spain.',
    visibility: 'Arctic, Greenland, Iceland, Spain, Portugal',
    peakTime: '17:47 UTC',
    details: [
      'Maximum duration: 2 minutes 18 seconds',
      'Path crosses Iceland and northern Spain',
      'Partial phases visible across Europe and North America',
      'One of the most accessible total solar eclipses'
    ],
  },
  {
    id: 'lunar-eclipse-aug-2026',
    title: 'Partial Lunar Eclipse',
    type: 'eclipse-lunar',
    date: '2026-08-28',
    dateFormatted: 'August 28, 2026',
    description: 'A partial lunar eclipse visible from parts of Europe, Asia, Africa, North America, and South America.',
    visibility: 'Europe, Asia, Africa, Americas',
    peakTime: '04:13 UTC',
    details: [
      'Only 7% of the Moon will be in Earth\'s umbral shadow',
      'Subtle eclipse, may be difficult to notice',
      'Best viewed from Eastern Europe and Asia',
      'Penumbral phases last about 4 hours'
    ],
  },

  // Meteor Showers
  {
    id: 'quadrantids-2026',
    title: 'Quadrantids Meteor Shower',
    type: 'meteor-shower',
    date: '2026-01-03',
    dateFormatted: 'January 3-4, 2026',
    description: 'The Quadrantids peak with up to 40 meteors per hour. One of the best meteor showers of the year.',
    visibility: 'Northern Hemisphere',
    peakTime: 'Night of January 3-4',
    details: [
      'Peak rate: Up to 40 meteors per hour',
      'Best viewing after midnight',
      'Radiant in constellation Boötes',
      'Waxing crescent moon provides dark skies'
    ],
  },
  {
    id: 'lyrids-2026',
    title: 'Lyrid Meteor Shower',
    type: 'meteor-shower',
    date: '2026-04-22',
    dateFormatted: 'April 22, 2026',
    description: 'The Lyrid meteor shower will reach its maximum activity with fast, bright meteors.',
    visibility: 'Global',
    peakTime: 'Night of April 22-23',
    details: [
      'Peak rate: 10-20 meteors per hour',
      'Known for occasional bright fireballs',
      'Radiant in constellation Lyra',
      'Ancient meteor shower observed for 2,700 years'
    ],
  },
  {
    id: 'perseids-2026',
    title: 'Perseids Meteor Shower',
    type: 'meteor-shower',
    date: '2026-08-12',
    dateFormatted: 'August 12-13, 2026',
    description: 'The Perseids peak coincides with a new moon. From a remote area with dark skies could deliver up to around 90 meteors per hour.',
    visibility: 'Northern Hemisphere',
    peakTime: 'Night of August 12-13',
    details: [
      'Peak rate: Up to 90 meteors per hour',
      'New moon provides perfect dark skies',
      'Best meteor shower of 2026',
      'Swift and bright meteors with persistent trains'
    ],
  },
  {
    id: 'geminids-2026',
    title: 'Geminids Meteor Shower',
    type: 'meteor-shower',
    date: '2026-12-14',
    dateFormatted: 'December 13-14, 2026',
    description: 'One of the year\'s best meteor showers with up to 120 multicolored meteors per hour.',
    visibility: 'Global',
    peakTime: 'Night of December 13-14',
    details: [
      'Peak rate: Up to 120 meteors per hour',
      'Reliable and prolific shower',
      'Radiant in constellation Gemini',
      'Meteors appear slower than most showers'
    ],
  },

  // Supermoons
  {
    id: 'supermoon-jan-2026',
    title: 'Wolf Supermoon',
    type: 'supermoon',
    date: '2026-01-13',
    dateFormatted: 'January 13, 2026',
    description: 'The first supermoon of 2026. The moon will appear up to 14% larger and 30% brighter than usual.',
    visibility: 'Global',
    peakTime: '23:53 UTC',
    details: [
      'Full moon at perigee (closest to Earth)',
      'Appears 14% larger than average',
      'Also known as Wolf Moon',
      'Great for photography'
    ],
  },
  {
    id: 'supermoon-nov-2026',
    title: 'Beaver Supermoon',
    type: 'supermoon',
    date: '2026-11-15',
    dateFormatted: 'November 15, 2026',
    description: 'A spectacular supermoon in November when the moon is near its closest approach to Earth.',
    visibility: 'Global',
    peakTime: '18:28 UTC',
    details: [
      'One of the closest supermoons of the year',
      'Appears exceptionally large and bright',
      'Also known as Beaver Moon',
      'Excellent viewing conditions'
    ],
  },
  {
    id: 'supermoon-dec-2026',
    title: 'Cold Supermoon',
    type: 'supermoon',
    date: '2026-12-15',
    dateFormatted: 'December 15, 2026',
    description: 'The last supermoon of 2026, appearing larger and brighter in the December night sky.',
    visibility: 'Global',
    peakTime: '09:02 UTC',
    details: [
      'Final supermoon of the year',
      'Close approach to Earth',
      'Also known as Cold Moon',
      'High in winter sky for Northern Hemisphere'
    ],
  },

  // Planetary Conjunctions
  {
    id: 'venus-saturn-jan-2026',
    title: 'Venus-Saturn Conjunction',
    type: 'conjunction',
    date: '2026-01-18',
    dateFormatted: 'January 18, 2026',
    description: 'Venus and Saturn will appear very close together in the evening sky.',
    visibility: 'Global',
    peakTime: 'Evening twilight',
    details: [
      'Separation: Less than 1 degree',
      'Visible in western sky after sunset',
      'Venus much brighter than Saturn',
      'Great photo opportunity'
    ],
  },
  {
    id: 'mars-jupiter-aug-2026',
    title: 'Mars-Jupiter Conjunction',
    type: 'conjunction',
    date: '2026-08-14',
    dateFormatted: 'August 14, 2026',
    description: 'Mars and Jupiter will have a close encounter in the night sky.',
    visibility: 'Global',
    peakTime: 'Pre-dawn',
    details: [
      'Two bright planets very close together',
      'Visible before sunrise',
      'Both planets in same binocular field',
      'Occurs in constellation Taurus'
    ],
  },
];

export function getAstronomyEvents(): ProcessedAstronomyEvent[] {
  const today = new Date();

  return ASTRONOMY_EVENTS_2026.map(event => {
    const eventDate = new Date(event.date);
    const isPast = eventDate < today;
    const daysUntil = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    let category = 'Other';
    switch (event.type) {
      case 'eclipse-solar':
        category = 'Solar Eclipse';
        break;
      case 'eclipse-lunar':
        category = 'Lunar Eclipse';
        break;
      case 'meteor-shower':
        category = 'Meteor Shower';
        break;
      case 'supermoon':
        category = 'Supermoon';
        break;
      case 'conjunction':
        category = 'Planetary Conjunction';
        break;
      case 'planet-visibility':
        category = 'Planet Visibility';
        break;
      case 'comet':
        category = 'Comet';
        break;
      case 'moon-phase':
        category = 'Moon Phase';
        break;
    }

    return {
      ...event,
      isPast,
      daysUntil,
      category,
    };
  }).sort((a, b) => {
    // Sort upcoming events first, then by date
    if (a.isPast !== b.isPast) {
      return a.isPast ? 1 : -1;
    }
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}

export function getEventsByType(type?: string): ProcessedAstronomyEvent[] {
  const events = getAstronomyEvents();

  if (!type || type === 'all') {
    return events;
  }

  return events.filter(event => event.type === type);
}

export function getUpcomingEvents(limit: number = 5): ProcessedAstronomyEvent[] {
  return getAstronomyEvents()
    .filter(event => !event.isPast)
    .slice(0, limit);
}
