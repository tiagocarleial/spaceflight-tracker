import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import Groq from 'groq-sdk';
import { InferenceClient } from '@huggingface/inference';
import Replicate from 'replicate';
import { GoogleGenerativeAI } from '@google/generative-ai';

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

async function convertImageUrlToBase64(imageUrl: string): Promise<string | null> {
  try {
    console.log(`[convert-image] Downloading image from: ${imageUrl.substring(0, 100)}...`);

    const response = await fetch(imageUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      redirect: 'follow',
    });

    if (!response.ok) {
      console.warn(`[convert-image] Failed to fetch image: ${response.status}`);
      return null;
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (buffer.length < 1000) {
      console.warn(`[convert-image] Image too small: ${buffer.length} bytes`);
      return null;
    }

    const base64 = buffer.toString('base64');
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    console.log(`[convert-image] Successfully converted image (${buffer.length} bytes)`);
    return `data:${contentType};base64,${base64}`;
  } catch (error) {
    console.warn(`[convert-image] Error converting image:`, (error as Error).message);
    return null;
  }
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

  console.log(`[generate-image] Generated prompt: "${imagePrompt}"`);

  // Try Google Gemini first (500 images/day free, no credit card needed)
  if (process.env.GOOGLE_AI_API_KEY) {
    try {
      console.log('[generate-image] Trying Google Gemini API (500 free images/day)...');

      const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-3.1-flash-image-preview' });

      const result = await model.generateContent({
        contents: [{
          role: 'user',
          parts: [{
            text: imagePrompt
          }]
        }]
      });

      const response = await result.response;

      // Get the image from the response
      if (response.candidates && response.candidates[0]?.content?.parts?.[0]) {
        const part = response.candidates[0].content.parts[0];

        // Check if the part has inline data (base64)
        if (part.inlineData) {
          const { mimeType, data } = part.inlineData;
          console.log(`[generate-image] Success with Google Gemini (base64 image)`);
          return `data:${mimeType};base64,${data}`;
        }
      }

      console.warn('[generate-image] Google Gemini returned unexpected format');
    } catch (error) {
      console.warn('[generate-image] Google Gemini failed:', (error as Error).message);
    }
  }

  // Try Replicate second (offers $5 free credits = ~900 images)
  if (process.env.REPLICATE_API_TOKEN) {
    try {
      console.log('[generate-image] Trying Replicate API (free credits available)...');

      const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN,
      });

      const output = await replicate.run(
        "black-forest-labs/flux-schnell",
        {
          input: {
            prompt: imagePrompt,
            aspect_ratio: "16:9",
            output_format: "jpg",
            output_quality: 80,
          }
        }
      ) as string[];

      if (output && output[0]) {
        // Download the image and convert to base64
        const response = await fetch(output[0]);
        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          const base64 = buffer.toString('base64');

          console.log(`[generate-image] Success with Replicate (${buffer.length} bytes)`);
          return `data:image/jpeg;base64,${base64}`;
        }
      }

      console.warn('[generate-image] Replicate returned empty output');
    } catch (error) {
      console.warn('[generate-image] Replicate failed:', (error as Error).message);
    }
  }

  // Fallback to HuggingFace (requires credits)
  if (process.env.HF_TOKEN) {
    const hf = new InferenceClient(process.env.HF_TOKEN);

    const models = [
      { name: 'black-forest-labs/FLUX.1-schnell', width: 1024, height: 576 },
      { name: 'stabilityai/stable-diffusion-xl-base-1.0', width: 1024, height: 576 },
      { name: 'runwayml/stable-diffusion-v1-5', width: 1024, height: 576 },
      { name: 'CompVis/stable-diffusion-v1-4', width: 1024, height: 576 },
    ];

    for (const model of models) {
      try {
        console.log(`[generate-image] Trying HuggingFace model: ${model.name}`);

        const imageBlob = await hf.textToImage({
          model: model.name,
          inputs: imagePrompt,
          parameters: { width: model.width, height: model.height },
        }) as unknown as Blob;

        const buffer = Buffer.from(await imageBlob.arrayBuffer());
        const base64 = buffer.toString('base64');

        console.log(`[generate-image] Success with HuggingFace: ${model.name}`);
        return `data:image/jpeg;base64,${base64}`;
      } catch (error) {
        console.warn(`[generate-image] HuggingFace ${model.name} failed:`, (error as Error).message);
      }
    }
  }

  throw new Error('All image generation APIs failed');
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

    // Step 4: Handle image (use original if available, otherwise generate)
    log.steps.push({ step: 'handle_image', status: 'started' });
    let imageUrl: string | null = article.image_url || null;

    // If we have an original image URL (from RSS feed), try to convert it to base64
    if (imageUrl && imageUrl.startsWith('http')) {
      console.log('[auto-publish] Converting external image to base64...');
      const convertedImage = await convertImageUrlToBase64(imageUrl);
      if (convertedImage) {
        imageUrl = convertedImage;
        log.steps.push({ step: 'handle_image', status: 'completed', source: 'converted_from_feed' });
      } else {
        // Keep original URL if conversion fails
        log.steps.push({ step: 'handle_image', status: 'completed', source: 'original_url' });
      }
    } else if (!imageUrl) {
      // If no original image, try to generate one
      try {
        imageUrl = await generateImage(title, description, content);
        log.steps.push({ step: 'handle_image', status: 'completed', source: 'generated' });
      } catch (imageError) {
        console.warn('[auto-publish] Image generation failed, publishing without image:', (imageError as Error).message);
        log.steps.push({ step: 'handle_image', status: 'failed', error: (imageError as Error).message });
        // Continue anyway - we'll publish without image
      }
    } else {
      // Already a base64 image
      log.steps.push({ step: 'handle_image', status: 'completed', source: 'base64' });
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

async function fetchNewFeeds(baseUrl: string, token: string): Promise<void> {
  try {
    console.log('[auto-publish] Fetching new RSS feeds before publishing...');

    const fetchUrl = `${baseUrl}/api/fetch-articles?token=${token}`;
    const response = await fetch(fetchUrl, { method: 'POST' });

    if (!response.ok) {
      console.warn('[auto-publish] Failed to fetch new feeds:', response.status);
      return;
    }

    const data = await response.json();
    console.log(`[auto-publish] RSS feeds fetched: ${data.inserted} new articles, ${data.skipped} skipped`);
  } catch (error) {
    console.warn('[auto-publish] Error fetching new feeds:', (error as Error).message);
  }
}

function selectArticlesByPriority(
  articlesByCategory: Record<string, any[]>,
  maxArticles: number
): any[] {
  // Priority order: space > astronomy > archaeology > natural-disasters
  // Distribution for 8 articles: 4 space, 2 astronomy, 1 archaeology, 1 natural-disasters

  const priorities = [
    { category: 'space', percentage: 0.5 },         // 50%
    { category: 'astronomy', percentage: 0.25 },    // 25%
    { category: 'archaeology', percentage: 0.125 },  // 12.5%
    { category: 'natural-disasters', percentage: 0.125 }, // 12.5%
  ];

  const selected: any[] = [];
  const remaining: any[] = [];

  // First pass: select based on percentage allocation
  for (const { category, percentage } of priorities) {
    const articles = articlesByCategory[category] || [];
    const targetCount = Math.round(maxArticles * percentage);
    const toSelect = Math.min(targetCount, articles.length);

    selected.push(...articles.slice(0, toSelect));

    // Keep track of remaining articles from this category
    if (articles.length > toSelect) {
      remaining.push(...articles.slice(toSelect));
    }

    console.log(`[auto-publish] Selected ${toSelect}/${targetCount} articles from ${category}`);
  }

  // Second pass: fill remaining slots with priority order
  if (selected.length < maxArticles && remaining.length > 0) {
    const slotsAvailable = maxArticles - selected.length;

    // Sort remaining by priority (already in priority order from priorities array)
    const priorityOrder = priorities.map(p => p.category);
    remaining.sort((a, b) => {
      return priorityOrder.indexOf(a.category) - priorityOrder.indexOf(b.category);
    });

    selected.push(...remaining.slice(0, slotsAvailable));
    console.log(`[auto-publish] Filled ${Math.min(slotsAvailable, remaining.length)} remaining slots`);
  }

  return selected.slice(0, maxArticles);
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

    // Step 1: Fetch new RSS feeds first
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const authToken = token || process.env.ADMIN_SESSION_SECRET || '';
    await fetchNewFeeds(baseUrl, authToken);

    // Step 2: Fetch unpublished articles grouped by category
    const { data: allArticles, error: fetchError } = await supabaseAdmin
      .from('articles')
      .select('*')
      .eq('is_published', false)
      .order('created_at', { ascending: false });

    if (fetchError) {
      throw fetchError;
    }

    if (!allArticles || allArticles.length === 0) {
      return NextResponse.json({
        message: 'No unpublished articles to process',
        processed: 0,
        successful: 0,
        failed: 0,
      });
    }

    console.log(`[auto-publish] Found ${allArticles.length} unpublished articles`);

    // Step 3: Group articles by category
    const articlesByCategory: Record<string, any[]> = {
      'space': [],
      'astronomy': [],
      'archaeology': [],
      'natural-disasters': [],
    };

    for (const article of allArticles) {
      if (articlesByCategory[article.category]) {
        articlesByCategory[article.category].push(article);
      }
    }

    console.log('[auto-publish] Articles by category:', {
      space: articlesByCategory.space.length,
      astronomy: articlesByCategory.astronomy.length,
      archaeology: articlesByCategory.archaeology.length,
      'natural-disasters': articlesByCategory['natural-disasters'].length,
    });

    // Step 4: Select articles based on priority
    const articles = selectArticlesByPriority(articlesByCategory, maxArticles);

    if (articles.length === 0) {
      return NextResponse.json({
        message: 'No articles selected for publishing',
        processed: 0,
        successful: 0,
        failed: 0,
      });
    }

    console.log(`[auto-publish] Selected ${articles.length} articles for processing`);

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
