// Media.net Configuration
// After getting approved, replace these values with your actual Media.net credentials

export const MEDIANET_CONFIG = {
  // Your Media.net Customer ID (you'll get this after approval)
  // Example: '8CU12V3W4'
  customerId: 'YOUR_CUSTOMER_ID_HERE',

  // Ad Unit IDs for different positions
  adUnits: {
    // Header ad (728x90 or responsive)
    header: 'YOUR_HEADER_AD_UNIT_ID',

    // Sidebar ad (300x250 or 300x600)
    sidebar: 'YOUR_SIDEBAR_AD_UNIT_ID',

    // Content ad (within articles/pages)
    content: 'YOUR_CONTENT_AD_UNIT_ID',

    // Footer ad (728x90 or responsive)
    footer: 'YOUR_FOOTER_AD_UNIT_ID',
  },

  // Common ad sizes
  adSizes: {
    leaderboard: { width: 728, height: 90 },
    mediumRectangle: { width: 300, height: 250 },
    largeRectangle: { width: 336, height: 280 },
    skyscraper: { width: 160, height: 600 },
    wideSkyscraper: { width: 300, height: 600 },
  }
};

// Instructions:
// 1. Sign up at https://www.media.net/
// 2. After approval, go to your Media.net dashboard
// 3. Create ad units and copy the IDs
// 4. Replace the placeholder values above with your actual IDs
