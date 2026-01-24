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
    rocketId: 'sls',
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
    rocketId: 'newglenn',
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
    rocketId: 'pslv',
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
    rocketId: 'starship',
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
    rocketId: 'falconheavy',
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
  },
  {
    id: '10',
    name: 'KAIROS | Flight 3',
    rocket: 'Kairos',
    rocketId: 'kairos',
    operator: 'Space One',
    location: 'Kii Space Port, Kushimoto, Japan',
    launchDate: new Date(Date.now() + 16 * 24 * 60 * 60 * 1000).toISOString(), // 16 days from now
    status: 'Go',
    description: 'Third launch attempt of the Kairos solid-fuel rocket carrying a small satellite payload. Space One aims to demonstrate reliable commercial launch services for small satellites.',
    recovery: 'N/A'
  },
  {
    id: '11',
    name: 'H3-30 | ALOS-4',
    rocket: 'H3-30',
    rocketId: 'h330',
    operator: 'JAXA',
    location: 'Tanegashima Space Center, Japan',
    launchDate: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000).toISOString(), // 18 days from now
    status: 'Go',
    description: 'JAXA will launch the Advanced Land Observing Satellite-4 aboard the H3-30 rocket for Earth observation and disaster monitoring missions.',
    recovery: 'N/A'
  },
  {
    id: '12',
    name: 'Shenzhou-20',
    rocket: 'Long March 2F/G',
    rocketId: 'longmarch2fg',
    operator: 'CNSA',
    location: 'Jiuquan Satellite Launch Center, China',
    launchDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days from now
    status: 'Go',
    description: 'China\'s crewed mission to the Tiangong space station carrying three taikonauts for a six-month expedition.',
    recovery: 'Crew Capsule: Parachute Landing'
  },
  {
    id: '13',
    name: 'Chandrayaan-4 Sample Return',
    rocket: 'PSLV-XL',
    rocketId: 'pslvxl',
    operator: 'ISRO',
    location: 'Satish Dhawan Space Centre, India',
    launchDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString(), // 25 days from now
    status: 'Go',
    description: 'India\'s ambitious lunar sample return mission launching aboard the powerful PSLV-XL variant. Will collect samples from the Moon\'s south pole region.',
    recovery: 'N/A'
  },
  {
    id: '14',
    name: 'Themis Flight Test 1',
    rocket: 'Themis',
    rocketId: 'themis',
    operator: 'ArianeGroup / ESA',
    location: 'Esrange Space Center, Sweden',
    launchDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(), // 28 days from now
    status: 'TBD',
    description: 'First flight test of Europe\'s Themis reusable rocket demonstrator. Will test vertical takeoff and landing capabilities for future European launch vehicles.',
    recovery: 'Vertical Landing'
  },
  {
    id: '15',
    name: 'HANBIT Nano Mission-2',
    rocket: 'HANBIT-TLV Nano',
    rocketId: 'hanbitnano',
    operator: 'Perigee Aerospace',
    location: 'Naro Space Center, South Korea',
    launchDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
    status: 'Go',
    description: 'South Korean commercial satellite launch using the HANBIT-TLV Nano rocket. Demonstrates South Korea\'s growing private space industry capabilities.',
    recovery: 'N/A'
  },
  {
    id: '16',
    name: 'Electron | Capella-6',
    rocket: 'Electron',
    rocketId: 'electron',
    operator: 'Rocket Lab',
    location: 'Rocket Lab LC-1, Mahia Peninsula, NZ',
    launchDate: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000).toISOString(), // 9 days from now
    status: 'Go',
    description: 'Rocket Lab will launch Capella Space\'s radar imaging satellite aboard the Electron rocket from New Zealand.',
    recovery: 'Ocean Splashdown',
    livestream: 'https://www.rocketlabusa.com/live-stream'
  },
  {
    id: '17',
    name: 'Vega-C | PRISMA Cluster',
    rocket: 'Vega-C',
    rocketId: 'vegac',
    operator: 'Arianespace',
    location: 'Guiana Space Centre, French Guiana',
    launchDate: new Date(Date.now() + 22 * 24 * 60 * 60 * 1000).toISOString(), // 22 days from now
    status: 'Go',
    description: 'European Earth observation satellite cluster launch aboard the improved Vega-C rocket.',
    recovery: 'N/A'
  },
  {
    id: '18',
    name: 'Tianlong-3 Inaugural Flight',
    rocket: 'Tianlong-3',
    rocketId: 'tianlong3',
    operator: 'Tianbing Technology',
    location: 'Jiuquan Satellite Launch Center, China',
    launchDate: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString(), // 35 days from now
    status: 'TBD',
    description: 'Maiden flight of China\'s Tianlong-3 reusable rocket, featuring first stage landing technology. A milestone for Chinese commercial spaceflight.',
    recovery: 'First Stage: Drone Ship Landing'
  }
];
