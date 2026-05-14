# N2YO API Setup Guide for Tiangong Tracking

The Tiangong space station tracker uses the N2YO.com API to fetch real-time position data for China's space station (NORAD ID: 48274).

## Why N2YO API?

The `wheretheiss.at` API only supports the International Space Station (ISS). To track Tiangong, we need to use N2YO which supports tracking any satellite with a NORAD catalog number.

## Setup Instructions

### 1. Register for N2YO API Account

1. Go to [https://www.n2yo.com/api/](https://www.n2yo.com/api/)
2. Click on "Register" or go to [https://www.n2yo.com/login/register/](https://www.n2yo.com/login/register/)
3. Create a free account with your email and password

### 2. Get Your API Key

1. After registration, log in to your N2YO account
2. Go to your profile page
3. Scroll down to find the API section
4. Click the button to generate your API key
5. Copy the API key (it will look something like: `XXXXX-XXXXX-XXXXX-XXXXX`)

### 3. Add API Key to Environment Variables

1. Open the `.env.local` file in the root of your project
2. Find the line that says:
   ```
   NEXT_PUBLIC_N2YO_API_KEY=YOUR_API_KEY_HERE
   ```
3. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```
   NEXT_PUBLIC_N2YO_API_KEY=XXXXX-XXXXX-XXXXX-XXXXX
   ```
4. Save the file

### 4. Restart Development Server

After adding the API key, restart your Next.js development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

## API Rate Limits

N2YO has the following rate limits for free accounts:

| Endpoint | Hourly Limit |
|----------|-------------|
| Positions | 1,000 requests/hour |
| TLE Data | 1,000 requests/hour |
| Visual Passes | 100 requests/hour |
| Radio Passes | 100 requests/hour |

The Tiangong tracker updates position every 5 seconds, which equals 720 requests per hour - well within the free tier limit of 1,000.

## Troubleshooting

### Error: "N2YO API key not configured"
- Make sure you added the API key to `.env.local`
- Verify there are no extra spaces before or after the API key
- Restart the development server after adding the key

### Error: "N2YO API error: 401 Unauthorized"
- Your API key may be invalid
- Check that you copied the complete key from N2YO
- Try regenerating a new API key from your N2YO profile

### Error: "N2YO API error: 429 Too Many Requests"
- You've exceeded the hourly rate limit
- Wait for the next hour to reset
- Consider reducing the update frequency if needed

## API Documentation

Full N2YO API documentation: [https://www.n2yo.com/api/](https://www.n2yo.com/api/)

## NORAD Catalog Numbers

- **Tiangong (CSS - Tianhe-1)**: 48274
- **International Space Station (ISS)**: 25544

The Tiangong space station consists of three modules:
1. **Tianhe** (天和) - Core module - NORAD 48274 - Launched April 29, 2021
2. **Wentian** (問天) - Lab module - Launched July 24, 2022
3. **Mengtian** (夢天) - Lab module - Launched October 31, 2022

We track the Tianhe core module (48274) as it represents the main position of the station.
