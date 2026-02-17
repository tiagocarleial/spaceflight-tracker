import Parser from 'rss-parser';
import { CreateArticlePayload, ArticleCategory } from '@/types/article';

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'Spaceflight-Tracker-Bot/1.0',
  },
});

interface FeedConfig {
  url: string;
  sourceName: string;
  category: ArticleCategory;
}

export const RSS_FEEDS: FeedConfig[] = [
  // Space / Astronomia
  {
    url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss',
    sourceName: 'NASA',
    category: 'space',
  },
  {
    url: 'https://spaceflightnow.com/feed/',
    sourceName: 'SpaceflightNow',
    category: 'space',
  },
  {
    url: 'https://www.esa.int/rssfeed/Our_Activities/Space_Science',
    sourceName: 'ESA',
    category: 'astronomy',
  },
  {
    url: 'https://www.space.com/feeds/all',
    sourceName: 'Space.com',
    category: 'space',
  },
  // Tecnologia
  {
    url: 'https://www.theverge.com/rss/index.xml',
    sourceName: 'The Verge',
    category: 'technology',
  },
  {
    url: 'https://techcrunch.com/feed/',
    sourceName: 'TechCrunch',
    category: 'technology',
  },
  {
    url: 'https://feeds.arstechnica.com/arstechnica/index',
    sourceName: 'Ars Technica',
    category: 'technology',
  },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 100);
}

function extractImageFromContent(content: string | undefined): string | null {
  if (!content) return null;
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

export async function fetchFeed(feed: FeedConfig): Promise<CreateArticlePayload[]> {
  try {
    const parsed = await parser.parseURL(feed.url);
    const articles: CreateArticlePayload[] = [];

    for (const item of parsed.items.slice(0, 15)) {
      if (!item.title) continue;

      const title = item.title.trim();
      const slug = `${slugify(title)}-${Date.now().toString(36)}`;
      const description = item.contentSnippet?.slice(0, 300) || item.summary?.slice(0, 300) || null;
      const image_url =
        item.enclosure?.url ||
        extractImageFromContent(item.content || item['content:encoded']) ||
        null;

      articles.push({
        title,
        description,
        source_url: item.link || null,
        source_name: feed.sourceName,
        category: feed.category,
        slug,
        image_url,
        published_at: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
        is_published: false,
        is_manual: false,
      });
    }

    return articles;
  } catch (error) {
    console.error(`Error fetching feed ${feed.sourceName}:`, error);
    return [];
  }
}

export async function fetchAllFeeds(): Promise<{ articles: CreateArticlePayload[]; errors: string[] }> {
  const results = await Promise.allSettled(RSS_FEEDS.map(fetchFeed));

  const articles: CreateArticlePayload[] = [];
  const errors: string[] = [];

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      articles.push(...result.value);
    } else {
      errors.push(`${RSS_FEEDS[index].sourceName}: ${result.reason}`);
    }
  });

  return { articles, errors };
}
