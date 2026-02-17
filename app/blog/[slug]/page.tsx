import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { data: article } = await supabaseAdmin
    .from('articles')
    .select('title, description, image_url')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!article) return { title: 'Artigo não encontrado' };

  return {
    title: article.title,
    description: article.description || undefined,
    openGraph: {
      title: article.title,
      description: article.description || undefined,
      images: article.image_url ? [article.image_url] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const { data: article } = await supabaseAdmin
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!article) notFound();

  const formattedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const CATEGORY_LABELS: Record<string, string> = {
    space: 'Space',
    technology: 'Tecnologia',
    astronomy: 'Astronomia',
  };

  const CATEGORY_STYLES: Record<string, string> = {
    space: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    technology: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    astronomy: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <div className="cursor-pointer">
                <div className="text-xl md:text-3xl font-bold text-white flex items-center gap-2 md:gap-3">
                  <i className="fa-solid fa-rocket text-white"></i>
                  <span className="hidden sm:inline">Spaceflight Tracker</span>
                  <span className="sm:hidden">SpaceFlight</span>
                </div>
              </div>
            </Link>
            <Link href="/blog">
              <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                <i className="fa-solid fa-arrow-left text-xs"></i>
                Voltar ao Blog
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Hero image */}
        {article.image_url && (
          <div className="rounded-xl overflow-hidden mb-8 h-64 md:h-80">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs font-medium px-2 py-1 rounded-full border ${CATEGORY_STYLES[article.category] || 'bg-gray-700 text-gray-300 border-gray-600'}`}>
            {CATEGORY_LABELS[article.category] || article.category}
          </span>
          {formattedDate && (
            <span className="text-sm text-gray-500">{formattedDate}</span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          {article.title}
        </h1>

        {/* Description */}
        {article.description && (
          <p className="text-xl text-gray-300 leading-relaxed mb-8 border-l-4 border-blue-500 pl-4">
            {article.description}
          </p>
        )}

        {/* Content */}
        {article.content && (
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
            {article.content.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i} className="text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}

      </main>

      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2026 - Spaceflight Tracker</p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-gray-500 hover:text-gray-300 transition-colors">About</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
