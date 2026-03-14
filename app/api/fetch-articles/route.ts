import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { fetchAllFeeds } from '@/lib/rss-feeds';

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    // Check for secret token to prevent unauthorized access
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (token !== process.env.ADMIN_SESSION_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('[fetch-articles] Starting RSS feed fetch...');

    // Fetch articles from all RSS feeds
    const { articles, errors } = await fetchAllFeeds();

    console.log(`[fetch-articles] Fetched ${articles.length} articles from RSS feeds`);

    if (errors.length > 0) {
      console.error('[fetch-articles] Errors:', errors);
    }

    // Insert articles into database (skip duplicates)
    const inserted: string[] = [];
    const skipped: string[] = [];

    for (const article of articles) {
      // Check if article already exists by source_url
      if (article.source_url) {
        const { data: existing } = await supabaseAdmin
          .from('articles')
          .select('id')
          .eq('source_url', article.source_url)
          .single();

        if (existing) {
          skipped.push(article.title);
          continue;
        }
      }

      // Insert new article
      const { data, error } = await supabaseAdmin
        .from('articles')
        .insert({
          ...article,
          is_published: false, // Will be processed by auto-publish
        })
        .select('id')
        .single();

      if (error) {
        console.error(`[fetch-articles] Error inserting "${article.title}":`, error);
      } else {
        inserted.push(article.title);
      }
    }

    console.log(`[fetch-articles] Inserted: ${inserted.length}, Skipped: ${skipped.length}`);

    return NextResponse.json({
      message: 'Articles fetched successfully',
      total: articles.length,
      inserted: inserted.length,
      skipped: skipped.length,
      errors: errors.length,
      feed_errors: errors,
    });
  } catch (error) {
    console.error('[fetch-articles] Error:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

// Also allow GET for manual testing
export async function GET(request: NextRequest) {
  return POST(request);
}
