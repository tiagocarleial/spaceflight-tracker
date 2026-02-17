import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { InferenceClient } from '@huggingface/inference';
import { cookies } from 'next/headers';

export const maxDuration = 60;

async function isAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  return !!session && session.value === process.env.ADMIN_SESSION_SECRET;
}

export async function POST(request: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json({ error: 'GROQ_API_KEY não configurada' }, { status: 500 });
  }
  if (!process.env.HF_TOKEN) {
    return NextResponse.json({ error: 'HF_TOKEN não configurado' }, { status: 500 });
  }

  const { title, description, content } = await request.json();

  if (!title) {
    return NextResponse.json({ error: 'title é obrigatório' }, { status: 400 });
  }

  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const contentSnippet = content ? content.slice(0, 2000) : '';

    // Generate a clean image prompt in English
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

    // Generate image via Hugging Face Inference SDK
    const hf = new InferenceClient(process.env.HF_TOKEN);

    const imageBlob = await hf.textToImage({
      model: 'black-forest-labs/FLUX.1-schnell',
      inputs: imagePrompt,
      parameters: { width: 1024, height: 576 },
    }) as unknown as Blob;

    const buffer = Buffer.from(await imageBlob.arrayBuffer());
    const base64 = buffer.toString('base64');
    const dataUrl = `data:image/jpeg;base64,${base64}`;

    return NextResponse.json({ image_url: dataUrl, prompt: imagePrompt });
  } catch (error) {
    console.error('[AI generate-image]', error);
    return NextResponse.json(
      { error: (error as Error).message || 'Erro ao gerar imagem' },
      { status: 500 }
    );
  }
}
