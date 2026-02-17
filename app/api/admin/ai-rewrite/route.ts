import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { cookies } from 'next/headers';

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
    return NextResponse.json(
      { error: 'GROQ_API_KEY não configurada no .env.local' },
      { status: 500 }
    );
  }

  const { title, description, source_name, source_url, type = 'description' } = await request.json();

  if (!title) {
    return NextResponse.json({ error: 'title é obrigatório' }, { status: 400 });
  }

  try {
    const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

    let prompt: string;
    let max_tokens: number;

    if (type === 'title') {
      prompt = `You are an editor for a space and technology news website.

Rewrite the title below in a clear, concise and engaging way in English.
The title should be between 60 and 100 characters, direct and capture the essence of the news.
Reply with ONLY the title text, no quotes, no explanations.

Original title: ${title}
Source: ${source_name || 'unknown'}`;
      max_tokens = 100;
    } else if (type === 'content') {
      prompt = `You are a journalist specializing in space and technology.

Write a complete article in English with at least 4 paragraphs about the news below.
Each paragraph should have 3 to 5 sentences, be informative, engaging and in-depth.
Separate paragraphs with a blank line.
Reply with ONLY the article text, no title, no subtitles, no quotes, no explanations.

Title: ${title}
Summary: ${description || '(no summary available)'}
Source: ${source_name || 'unknown'}
${source_url ? `Source URL: ${source_url}` : ''}`;
      max_tokens = 1024;
    } else {
      prompt = `You are an editor for a space and technology news website.

Rewrite the summary below in a clear, engaging and informative way in English.
The summary must have between 200 and 300 characters, be direct and capture the essence of the news.
Reply with ONLY the summary text, no quotes, no explanations.

News title: ${title}
Source: ${source_name || 'unknown'}
Original summary: ${description || '(no summary available)'}`;
      max_tokens = 200;
    }

    const completion = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      max_tokens,
    });

    const rewritten = completion.choices[0]?.message?.content?.trim() || '';

    if (type === 'title') {
      return NextResponse.json({ title: rewritten });
    }
    if (type === 'content') {
      return NextResponse.json({ content: rewritten });
    }
    return NextResponse.json({ description: rewritten });
  } catch (error) {
    console.error('Groq API error:', error);
    return NextResponse.json(
      { error: 'Erro ao chamar a API do Groq. Verifique sua chave.' },
      { status: 500 }
    );
  }
}
