# Spaceflight Tracker

A modern web application to track upcoming space launches around the world, built with Next.js 16 and powered by The Space Devs API.

## Features

- **Real-time Launch Data**: Fetches upcoming space launches from The Space Devs API
- **Live Countdown**: Real-time countdown timers for each launch
- **Advanced Filters**: Filter launches by:
  - Space agency (SpaceX, NASA, Blue Origin, ISRO, etc.)
  - Launch status (Go, TBD, Hold)
  - Search by mission name
- **Dark Theme**: Modern dark UI inspired by Next Spaceflight
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Launch Statistics**: Dashboard showing upcoming launches, confirmed missions, and more
- **Fallback Support**: Gracefully falls back to mock data if API is unavailable

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: The Space Devs API (v2.3.0)
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd spaceflight
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
spaceflight/
├── app/
│   ├── page.tsx              # Main homepage (server component)
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles
├── components/
│   ├── LaunchCard.tsx        # Individual launch card component
│   ├── LaunchesContainer.tsx # Client component for launches and filters
│   └── LaunchFilters.tsx     # Filter controls component
├── lib/
│   └── api.ts                # API service for The Space Devs
├── types/
│   ├── launch.ts             # Launch type definitions
│   └── api.ts                # API response type definitions
├── hooks/
│   └── useCountdown.ts       # Custom countdown hook
└── data/
    └── mockLaunches.ts       # Mock data for fallback
```

## API Integration

This project uses [The Space Devs API](https://thespacedevs.com/), a free and open API for spaceflight data.

### Key Features:
- No API key required for basic usage
- 60-second cache for launch data
- 1-hour cache for agency data
- Automatic fallback to mock data on failure

### Endpoints Used:
- `/launches/upcoming/` - Get upcoming launches
- `/agencies/` - Get list of space agencies

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

### Other Platforms

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Future Enhancements

- [ ] Individual launch detail pages
- [ ] User favorites and notifications
- [ ] Historical launch data
- [ ] Launch site map integration
- [ ] Social sharing features
- [ ] PWA support for mobile
- [ ] Astronaut information
- [ ] Rocket specifications

## License

MIT

## Credits

- Data provided by [The Space Devs](https://thespacedevs.com/)
- Inspired by [Next Spaceflight](https://nextspaceflight.com/)
- Built with [Next.js](https://nextjs.org/)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
