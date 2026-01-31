import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.spaceflight-tracker.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'hourly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/launches`,
      lastModified: new Date(),
      changeFrequency: 'hourly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/rockets`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iss`,
      lastModified: new Date(),
      changeFrequency: 'hourly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/asteroids`,
      lastModified: new Date(),
      changeFrequency: 'hourly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/earthquakes`,
      lastModified: new Date(),
      changeFrequency: 'always' as const,
      priority: 0.8,
    },
  ];

  // Rocket detail pages
  const rocketIds = [
    'falcon9',
    'falconheavy',
    'starship',
    'sls',
    'pslv',
    'newglenn',
    'longmarch2c',
    'longmarch3be',
    'longmarch7',
    'longmarch12',
    'ceres1s',
    'ceres2',
    'newshepard',
    'spectrum',
    'gslvmk2',
    'gslvmk3',
    'electron',
    'smartdragon3',
    'vulcanvc4s',
    'ariane6',
    'fireflyalpha',
    'kairos',
    'kinetica2',
    'protonm',
    'soyuz21',
    'soyuz5',
    'vikram1',
    'neutron',
    'gaganyaan',
    'atlasvn22',
    'minotauriv',
    'pegasusxl',
    'tianlong3',
    'vegac',
  ];

  const rocketPages = rocketIds.map((id) => ({
    url: `${baseUrl}/rockets/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...rocketPages];
}
