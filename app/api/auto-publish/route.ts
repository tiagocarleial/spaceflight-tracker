import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import Groq from 'groq-sdk';
import { InferenceClient } from '@huggingface/inference';

export const maxDuration = 300; // 5 minutes timeout for processing multiple articles

interface ProcessLog {
  article_id: string;
  title: string;
  category: string;
  steps: Array<{ step: string; status: string; [key: string]: any }>;
  status: 'success' | 'failed';
  error?: string;
}

async function callAIRewrite(
  type: 'description' | 'title' | 'content',
  title: string,
  description?: string,
  sourceName?: string,
  sourceUrl?: string
): Promise<string> {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  let prompt: string;
  let max_tokens: number;

  if (type === 'title') {
    prompt = `You are an editor for a space and technology news website.

Rewrite the title below in a clear, concise and engaging way in English.
The title should be between 60 and 100 characters, direct and capture the essence of the news.
Reply with ONLY the title text, no quotes, no explanations.

Original title: ${title}
Source: ${sourceName || 'unknown'}`;
    max_tokens = 100;
  } else if (type === 'content') {
    prompt = `You are a journalist specializing in space and technology.

Write a complete article in English with at least 4 paragraphs about the news below.
Each paragraph should have 3 to 5 sentences, be informative, engaging and in-depth.
Separate paragraphs with a blank line.
Reply with ONLY the article text, no title, no subtitles, no quotes, no explanations.

Title: ${title}
Summary: ${description || '(no summary available)'}
Source: ${sourceName || 'unknown'}
${sourceUrl ? `Source URL: ${sourceUrl}` : ''}`;
    max_tokens = 1024;
  } else {
    prompt = `You are an editor for a space and technology news website.

Rewrite the summary below in a clear, engaging and informative way in English.
The summary must have between 200 and 300 characters, be direct and capture the essence of the news.
Reply with ONLY the summary text, no quotes, no explanations.

News title: ${title}
Source: ${sourceName || 'unknown'}
Original summary: ${description || '(no summary available)'}`;
    max_tokens = 200;
  }

  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [{ role: 'user', content: prompt }],
    max_tokens,
  });

  return completion.choices[0]?.message?.content?.trim() || '';
}

async function generateImage(title: string, description?: string, content?: string): Promise<string> {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const contentSnippet = content ? content.slice(0, 2000) : '';

  // Generate image prompt
  const promptCompletion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [{
      role: 'user',
      content: `Read the space and technology article below and create a short image generation prompt in English (max 100 characters, no quotes) for its cover photo.
Focus on the main subject and themes of the article content, not just the title.
Photorealistic, modern, high quality, suitable as a blog header. No text or logos in the image.

Article title: ${title}
${description ? `Summary: ${description}` : ''}
${contentSnippet ? `Article content:\n${contentSnippet}` : ''}

Reply with ONLY the image prompt, no quotes, no explanations.`,
    }],
    max_tokens: 80,
  });

  const imagePrompt = (promptCompletion.choices[0]?.message?.content?.trim() || title)
    .replace(/^["']+|["']+$/g, '')
    .replace(/["']/g, '')
    .trim();

  const hf = new InferenceClient(process.env.HF_TOKEN);

  // List of models to try in order (fallback system)
  const models = [
    { name: 'black-forest-labs/FLUX.1-schnell', width: 1024, height: 576 },
    { name: 'stabilityai/stable-diffusion-xl-base-1.0', width: 1024, height: 576 },
    { name: 'runwayml/stable-diffusion-v1-5', width: 1024, height: 576 },
    { name: 'CompVis/stable-diffusion-v1-4', width: 1024, height: 576 },
  ];

  let lastError: Error | null = null;

  // Try each model until one succeeds
  for (const model of models) {
    try {
      console.log(`[generate-image] Trying model: ${model.name}`);

      const imageBlob = await hf.textToImage({
        model: model.name,
        inputs: imagePrompt,
        parameters: { width: model.width, height: model.height },
      }) as unknown as Blob;

      const buffer = Buffer.from(await imageBlob.arrayBuffer());
      const base64 = buffer.toString('base64');

      console.log(`[generate-image] Success with model: ${model.name}`);
      return `data:image/jpeg;base64,${base64}`;
    } catch (error) {
      console.warn(`[generate-image] Failed with ${model.name}:`, (error as Error).message);
      lastError = error as Error;
      // Continue to next model
    }
  }

  // If all models failed, throw the last error
  throw new Error(`All image generation models failed. Last error: ${lastError?.message || 'Unknown error'}`);
}

async function processOneArticle(article: any): Promise<ProcessLog> {
  const log: ProcessLog = {
    article_id: article.id,
    title: article.title,
    category: article.category,
    steps: [],
    status: 'success',
  };

  try {
    // Step 1: Rewrite description
    log.steps.push({ step: 'rewrite_description', status: 'started' });
    const description = await callAIRewrite(
      'description',
      article.title,
      article.description,
      article.source_name
    );
    log.steps.push({ step: 'rewrite_description', status: 'completed', length: description.length });

    // Step 2: Rewrite title
    log.steps.push({ step: 'rewrite_title', status: 'started' });
    const title = await callAIRewrite(
      'title',
      article.title,
      description,
      article.source_name
    );
    log.steps.push({ step: 'rewrite_title', status: 'completed', title });

    // Step 3: Generate full content
    log.steps.push({ step: 'generate_content', status: 'started' });
    const content = await callAIRewrite(
      'content',
      title,
      description,
      article.source_name,
      article.source_url
    );
    log.steps.push({ step: 'generate_content', status: 'completed', length: content.length });

    // Step 4: Generate image (optional - won't block publication if it fails)
    log.steps.push({ step: 'generate_image', status: 'started' });
    let imageUrl: string | null = null;
    try {
      imageUrl = await generateImage(title, description, content);
      log.steps.push({ step: 'generate_image', status: 'completed' });
    } catch (imageError) {
      console.warn('[auto-publish] Image generation failed, publishing without image:', (imageError as Error).message);
      log.steps.push({ step: 'generate_image', status: 'failed', error: (imageError as Error).message });
      // Continue anyway - we'll publish without image
    }

    // Step 5: Update article
    log.steps.push({ step: 'update_article', status: 'started' });
    const updateData: any = {
      title,
      description,
      content,
      is_published: true,
      published_at: new Date().toISOString(),
    };

    // Only add image_url if we successfully generated one
    if (imageUrl) {
      updateData.image_url = imageUrl;
    }

    const { error: updateError } = await supabaseAdmin
      .from('articles')
      .update(updateData)
      .eq('id', article.id);

    if (updateError) {
      throw updateError;
    }

    log.steps.push({ step: 'update_article', status: 'completed' });
    log.status = 'success';

    return log;
  } catch (error) {
    log.status = 'failed';
    log.error = (error as Error).message;
    return log;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check for secret token (both query param and CRON_SECRET header)
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    const authHeader = request.headers.get('authorization');

    // Debug logging
    console.log('[auto-publish] Auth debug:', {
      hasToken: !!token,
      hasAuthHeader: !!authHeader,
      hasCronSecret: !!process.env.CRON_SECRET,
      hasAdminSecret: !!process.env.ADMIN_SESSION_SECRET,
    });

    // Accept either query param token or CRON_SECRET from Vercel cron jobs
    const isValidToken = token === process.env.ADMIN_SESSION_SECRET;
    const isValidCronSecret = authHeader === `Bearer ${process.env.CRON_SECRET}`;

    if (!isValidToken && !isValidCronSecret) {
      console.error('[auto-publish] Authentication failed');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('[auto-publish] Authentication successful');

    // Check API keys
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: 'GROQ_API_KEY not configured' }, { status: 500 });
    }
    if (!process.env.HF_TOKEN) {
      return NextResponse.json({ error: 'HF_TOKEN not configured' }, { status: 500 });
    }

    const body = await request.json().catch(() => ({}));
    const maxArticles = parseInt(searchParams.get('maxArticles') || '') || body.maxArticles || 8;

    console.log(`[auto-publish] Starting auto-publish process (max: ${maxArticles} articles)`);

    // Fetch unpublished articles
    const { data: articles, error: fetchError } = await supabaseAdmin
      .from('articles')
      .select('*')
      .eq('is_published', false)
      .order('created_at', { ascending: false })
      .limit(maxArticles);

    if (fetchError) {
      throw fetchError;
    }

    if (!articles || articles.length === 0) {
      return NextResponse.json({
        message: 'No unpublished articles to process',
        processed: 0,
        successful: 0,
        failed: 0,
      });
    }

    console.log(`[auto-publish] Found ${articles.length} unpublished articles`);

    // Process each article sequentially (to avoid rate limits)
    const results: ProcessLog[] = [];
    for (const article of articles) {
      console.log(`[auto-publish] Processing article ${article.id}: ${article.title}`);
      const result = await processOneArticle(article);
      results.push(result);

      // Add delay between articles to avoid rate limits
      if (results.length < articles.length) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    const successful = results.filter(r => r.status === 'success').length;
    const failed = results.filter(r => r.status === 'failed').length;

    console.log(`[auto-publish] Completed: ${successful} successful, ${failed} failed`);

    return NextResponse.json({
      message: 'Auto-publish process completed',
      processed: results.length,
      successful,
      failed,
      results,
    });
  } catch (error) {
    console.error('[auto-publish] Error:', error);
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
