import { Launch } from '@/types/launch';

export const mockLaunches: Launch[] = [
  {
    id: '1',
    name: 'Starlink Group 6-98',
    rocket: 'Falcon 9 Block 5',
    rocketId: 'falcon9',
    operator: 'SpaceX',
    location: 'Cape Canaveral SFS, Florida, USA',
    launchDate: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // 30 minutes from now
    status: 'Go',
    description: 'SpaceX will launch another batch of Starlink satellites to expand their global broadband network.',
    recovery: 'ASDS - Just Read the Instructions',
    livestream: 'https://www.youtube.com/spacex'
  },
  {
    id: '2',
    name: 'Artemis II',
    rocket: 'Space Launch System Block 1',
    operator: 'NASA',
    location: 'Kennedy Space Center LC-39B, FL, USA',
    launchDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 1 day from now
    status: 'Go',
    description: 'First crewed mission of NASA\'s Artemis program, carrying astronauts around the Moon.',
    recovery: 'N/A'
  },
  {
    id: '3',
    name: 'New Glenn Maiden Flight',
    rocket: 'New Glenn',
    operator: 'Blue Origin',
    location: 'Cape Canaveral LC-36, FL, USA',
    launchDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
    status: 'TBD',
    description: 'The inaugural flight of Blue Origin\'s heavy-lift orbital rocket New Glenn.',
    recovery: 'Landing Ship'
  },
  {
    id: '4',
    name: 'PSLV-C60 | EOS-08',
    rocket: 'PSLV-DL',
    operator: 'ISRO',
    location: 'Satish Dhawan Space Centre, India',
    launchDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
    status: 'Go',
    description: 'Indian Earth observation satellite launch aboard the reliable Polar Satellite Launch Vehicle.',
    recovery: 'N/A'
  },
  {
    id: '5',
    name: 'Transporter-12',
    rocket: 'Falcon 9 Block 5',
    rocketId: 'falcon9',
    operator: 'SpaceX',
    location: 'Vandenberg SFB SLC-4E, CA, USA',
    launchDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    status: 'Go',
    description: 'SpaceX\'s rideshare mission carrying multiple small satellites to sun-synchronous orbit.',
    recovery: 'RTLS - LZ-4',
    livestream: 'https://www.spacex.com/launches'
  },
  {
    id: '6',
    name: 'Crew Dragon Demo-3',
    rocket: 'Falcon 9 Block 5',
    rocketId: 'falcon9',
    operator: 'SpaceX',
    location: 'Kennedy Space Center LC-39A, FL, USA',
    launchDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days from now
    status: 'TBD',
    description: 'Commercial crew mission to the International Space Station carrying four astronauts.',
    recovery: 'ASDS - A Shortfall of Gravitas'
  },
  {
    id: '7',
    name: 'Starship IFT-6',
    rocket: 'Starship',
    operator: 'SpaceX',
    location: 'Starbase Orbital Launch Pad, TX, USA',
    launchDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
    status: 'TBD',
    description: 'Sixth integrated flight test of SpaceX\'s fully reusable super heavy-lift launch system.',
    recovery: 'Booster: Tower Catch, Ship: Ocean Splashdown'
  },
  {
    id: '8',
    name: 'Europa Clipper',
    rocket: 'Falcon Heavy',
    operator: 'NASA / SpaceX',
    location: 'Kennedy Space Center LC-39A, FL, USA',
    launchDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(), // 21 days from now
    status: 'Go',
    description: 'NASA mission to explore Jupiter\'s icy moon Europa and investigate its potential habitability.',
    recovery: 'Side Boosters: LZ-1/LZ-2, Center Core: Expendable'
  },
  {
    id: '9',
    name: 'Yaogan-41 Satellite',
    rocket: 'Long March 2C',
    rocketId: 'longmarch2c',
    operator: 'CNSA',
    location: 'Jiuquan Satellite Launch Center, China',
    launchDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 days from now
    status: 'Go',
    description: 'Chinese remote sensing satellite launch aboard the Long March 2C rocket for Earth observation missions.',
    recovery: 'N/A'
  }
];
