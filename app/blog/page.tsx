'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { Article } from '@/types/article';

const CATEGORY_FILTERS = [
  { value: 'all', label: 'Todos' },
  { value: 'space', label: 'Space' },
  { value: 'astronomy', label: 'Astronomia' },
  { value: 'natural-disasters', label: 'Desastres Naturais' },
  { value: 'archaeology', label: 'Arqueologia' },
] as const;

export default function BlogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [hasMore, setHasMore] = useState(false);
  const LIMIT = 18;

  const currentPage = parseInt(searchParams.get('page') || '1');

  // Sync category from URL
  useEffect(() => {
    const urlCategory = searchParams.get('category') || 'all';
    if (urlCategory !== category) {
      setCategory(urlCategory);
    }
  }, [searchParams]);

  const loadArticles = async (cat: string, page: number) => {
    setLoading(true);

    try {
      const offset = (page - 1) * LIMIT;
      const params = new URLSearchParams({
        limit: String(LIMIT + 1), // fetch one extra to know if there's more
        offset: String(offset),
      });
      if (cat !== 'all') params.set('category', cat);

      const res = await fetch(`/api/blog/articles?${params}`);
      const data = await res.json();
      const fetched: Article[] = data.articles || [];

      setHasMore(fetched.length > LIMIT);
      const toShow = fetched.slice(0, LIMIT);

      setArticles(toShow);
    } catch {
      console.error('Failed to load articles');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles(category, currentPage);
  }, [category, currentPage]);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    router.push(`/blog?page=1${newCategory !== 'all' ? `&category=${newCategory}` : ''}`);
  };

  const goToPage = (page: number) => {
    const params = new URLSearchParams();
    params.set('page', String(page));
    if (category !== 'all') params.set('category', category);
    router.push(`/blog?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers to display
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    // If we're on early pages, show 1-5
    if (currentPage <= 3) {
      for (let i = 1; i <= Math.min(maxVisiblePages, currentPage + 2); i++) {
        pages.push(i);
      }
      if (hasMore && pages[pages.length - 1] < currentPage + 2) {
        pages.push(currentPage + 2);
      }
    }
    // If we're on later pages, show current page and neighbors
    else {
      pages.push(1);
      if (currentPage > 4) pages.push('...');

      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }

      if (hasMore) {
        pages.push('...');
      }
    }

    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <Navigation currentPage="blog" variant="standard" />

      <main className="container mx-auto px-4 py-8">
        {/* Page title */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
            <h1 className="text-2xl font-bold text-white">Space & Nature News</h1>
          </div>
          <p className="text-gray-400 text-sm">
            Notícias de espaço, astronomia, arqueologia e desastres naturais
          </p>
        </div>

        {/* Category filter */}
        <div className="flex bg-gray-800 rounded-lg p-1 gap-1 mb-8 w-fit">
          {CATEGORY_FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => handleCategoryChange(f.value)}
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

            {/* Pagination */}
            {(currentPage > 1 || hasMore) && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Anterior
                </button>

                <div className="flex items-center gap-2">
                  {generatePageNumbers().map((page, index) => (
                    page === '...' ? (
                      <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                        ...
                      </span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => goToPage(page as number)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-800 hover:bg-gray-700 text-white'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  ))}
                </div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={!hasMore}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  Próxima
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
