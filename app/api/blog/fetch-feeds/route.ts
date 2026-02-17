import { NextRequest, NextResponse } from 'next/server';
import { fetchAllFeeds } from '@/lib/rss-feeds';
import { supabaseAdmin } from '@/lib/supabase';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  // Verify admin session
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');

  if (!session || session.value !== process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { articles, errors } = await fetchAllFeeds();

  if (articles.length === 0) {
    return NextResponse.json({ inserted: 0, errors }, { status: 200 });
  }

  // Insert using upsert on slug to avoid duplicates
  const { data, error } = await supabaseAdmin
    .from('articles')
    .upsert(articles, { onConflict: 'slug', ignoreDuplicates: true })
    .select();

  if (error) {
    return NextResponse.json({ error: error.message, errors }, { status: 500 });
  }

  return NextResponse.json({
    inserted: data?.length ?? 0,
    total_fetched: articles.length,
    errors,
  });
}
