'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { Article } from '@/types/article';

const CATEGORY_FILTERS = [
  { value: 'all', label: 'Todos' },
  { value: 'space', label: 'Space' },
  { value: 'technology', label: 'Tecnologia' },
  { value: 'astronomy', label: 'Astronomia' },
] as const;

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const LIMIT = 18;

  const loadArticles = async (cat: string, off: number, append: boolean = false) => {
    if (!append) setLoading(true);
    else setLoadingMore(true);

    try {
      const params = new URLSearchParams({
        limit: String(LIMIT + 1), // fetch one extra to know if there's more
        offset: String(off),
      });
      if (cat !== 'all') params.set('category', cat);

      const res = await fetch(`/api/blog/articles?${params}`);
      const data = await res.json();
      const fetched: Article[] = data.articles || [];

      setHasMore(fetched.length > LIMIT);
      const toShow = fetched.slice(0, LIMIT);

      setArticles(prev => append ? [...prev, ...toShow] : toShow);
    } catch {
      console.error('Failed to load articles');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    setOffset(0);
    loadArticles(category, 0);
  }, [category]);

  const handleLoadMore = () => {
    const newOffset = offset + LIMIT;
    setOffset(newOffset);
    loadArticles(category, newOffset, true);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <div className="cursor-pointer">
                <div className="text-xl md:text-3xl font-bold text-white mb-1 flex items-center gap-2 md:gap-3">
                  <i className="fa-solid fa-rocket text-white"></i>
                  <span className="hidden sm:inline">Spaceflight Tracker</span>
                  <span className="sm:hidden">SpaceFlight</span>
                </div>
                <p className="text-gray-400 text-xs md:text-sm hidden sm:block">
                  Keep up to date with upcoming space launches
                </p>
              </div>
            </Link>
            <div className="flex gap-2 md:gap-4 flex-wrap">
              <Link href="/launches">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Launches
                </button>
              </Link>
              <Link href="/rockets">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Rockets
                </button>
              </Link>
              <Link href="/iss">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  ISS Live
                </button>
              </Link>
              <Link href="/asteroids">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Asteroids
                </button>
              </Link>
              <Link href="/blog">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm md:text-base font-medium transition-colors">
                  Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page title */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
            <h1 className="text-2xl font-bold text-white">Space & Tech News</h1>
          </div>
          <p className="text-gray-400 text-sm">
            Notícias de espaço, astronomia e tecnologia
          </p>
        </div>

        {/* Category filter */}
        <div className="flex bg-gray-800 rounded-lg p-1 gap-1 mb-8 w-fit">
          {CATEGORY_FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setCategory(f.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                category === f.value
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
            <p className="text-gray-400 mt-4">Carregando notícias...</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && articles.length === 0 && (
          <div className="text-center py-16">
            <i className="fa-solid fa-newspaper text-gray-600 text-5xl mb-4 block"></i>
            <p className="text-gray-400 text-lg">Nenhum artigo publicado ainda.</p>
            <p className="text-gray-500 text-sm mt-2">
              Use o painel admin para importar notícias dos feeds.
            </p>
          </div>
        )}

        {/* Articles grid */}
        {!loading && articles.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map(article => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>

            {/* Load more */}
            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  {loadingMore ? (
                    <>
                      <div className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                      Carregando...
                    </>
                  ) : (
                    <>
                      Ver mais notícias
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </>
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
