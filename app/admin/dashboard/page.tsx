'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Article } from '@/types/article';

const CATEGORY_LABELS: Record<string, string> = {
  space: 'Space',
  technology: 'Tech',
  astronomy: 'Astronomia',
};

const CATEGORY_COLORS: Record<string, string> = {
  space: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  technology: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  astronomy: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
};

interface EditForm {
  title: string;
  description: string;
  image_url: string;
  content: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [fetchResult, setFetchResult] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'published' | 'pending'>('pending');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Edit modal state
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [editForm, setEditForm] = useState<EditForm>({ title: '', description: '', image_url: '', content: '' });
  const [rewritingContent, setRewritingContent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [rewriting, setRewriting] = useState(false);
  const [rewritingTitle, setRewritingTitle] = useState(false);
  const [generatingImage, setGeneratingImage] = useState(false);
  const [saveError, setSaveError] = useState('');

  const loadArticles = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit: '100' });
      if (categoryFilter !== 'all') params.set('category', categoryFilter);
      const res = await fetch(`/api/admin/articles?${params}`);
      if (res.status === 401) {
        router.push('/admin');
        return;
      }
      const data = await res.json();
      setArticles(data.articles || []);
    } catch {
      console.error('Failed to load articles');
    } finally {
      setLoading(false);
    }
  }, [categoryFilter, router]);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  const handleFetchFeeds = async () => {
    setFetching(true);
    setFetchResult(null);
    try {
      const res = await fetch('/api/blog/fetch-feeds', { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        setFetchResult(`✓ ${data.inserted} novos artigos importados (${data.total_fetched} encontrados nos feeds)`);
        loadArticles();
      } else {
        setFetchResult(`Erro: ${data.error}`);
      }
    } catch {
      setFetchResult('Erro ao buscar feeds.');
    } finally {
      setFetching(false);
    }
  };

  const handleTogglePublish = async (article: Article) => {
    const res = await fetch(`/api/admin/articles/${article.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_published: !article.is_published }),
    });
    if (res.ok) {
      setArticles(prev =>
        prev.map(a => a.id === article.id ? { ...a, is_published: !a.is_published } : a)
      );
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Deletar este artigo?')) return;
    const res = await fetch(`/api/admin/articles/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setArticles(prev => prev.filter(a => a.id !== id));
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  };

  // Open edit modal
  const handleOpenEdit = (article: Article) => {
    setEditingArticle(article);
    setEditForm({
      title: article.title,
      description: article.description || '',
      image_url: article.image_url || '',
      content: article.content || '',
    });
    setSaveError('');
  };

  // Save edited article
  const handleSaveEdit = async () => {
    if (!editingArticle) return;
    setSaving(true);
    setSaveError('');
    try {
      const res = await fetch(`/api/admin/articles/${editingArticle.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editForm.title,
          description: editForm.description,
          image_url: editForm.image_url || null,
          content: editForm.content || null,
        }),
      });
      if (res.ok) {
        setArticles(prev =>
          prev.map(a =>
            a.id === editingArticle.id
              ? { ...a, title: editForm.title, description: editForm.description, image_url: editForm.image_url || null, content: editForm.content || null }
              : a
          )
        );
        setEditingArticle(null);
      } else {
        setSaveError('Erro ao salvar. Tente novamente.');
      }
    } catch {
      setSaveError('Erro de conexão.');
    } finally {
      setSaving(false);
    }
  };

  // AI rewrite title
  const handleAIRewriteTitle = async () => {
    if (!editingArticle) return;
    setRewritingTitle(true);
    setSaveError('');
    try {
      const res = await fetch('/api/admin/ai-rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editForm.title,
          source_name: editingArticle.source_name,
          type: 'title',
        }),
      });
      const data = await res.json();
      if (res.ok && data.title) {
        setEditForm(prev => ({ ...prev, title: data.title }));
      } else {
        setSaveError(data.error || 'Erro ao reescrever título com IA.');
      }
    } catch {
      setSaveError('Erro ao chamar a IA.');
    } finally {
      setRewritingTitle(false);
    }
  };

  // AI rewrite description
  const handleAIRewrite = async () => {
    if (!editingArticle) return;
    setRewriting(true);
    setSaveError('');
    try {
      const res = await fetch('/api/admin/ai-rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editForm.title,
          description: editForm.description,
          source_name: editingArticle.source_name,
          source_url: editingArticle.source_url,
        }),
      });
      const data = await res.json();
      if (res.ok && data.description) {
        setEditForm(prev => ({ ...prev, description: data.description }));
      } else {
        setSaveError(data.error || 'Erro ao reescrever com IA.');
      }
    } catch {
      setSaveError('Erro ao chamar a IA.');
    } finally {
      setRewriting(false);
    }
  };

  // AI generate image
  const handleAIGenerateImage = async () => {
    if (!editingArticle) return;
    setGeneratingImage(true);
    setSaveError('');
    try {
      const res = await fetch('/api/admin/ai-generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editForm.title,
          description: editForm.description,
          content: editForm.content,
        }),
      });
      const data = await res.json();
      if (res.ok && data.image_url) {
        setEditForm(prev => ({ ...prev, image_url: data.image_url }));
      } else {
        setSaveError(data.error || 'Erro ao gerar imagem com IA.');
      }
    } catch {
      setSaveError('Erro ao chamar a IA.');
    } finally {
      setGeneratingImage(false);
    }
  };

  // Save and toggle publish
  const handleSaveAndPublish = async () => {
    if (!editingArticle) return;
    setSaving(true);
    setSaveError('');
    const newPublished = !editingArticle.is_published;
    try {
      const res = await fetch(`/api/admin/articles/${editingArticle.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editForm.title,
          description: editForm.description,
          image_url: editForm.image_url || null,
          content: editForm.content || null,
          is_published: newPublished,
        }),
      });
      if (res.ok) {
        setArticles(prev =>
          prev.map(a =>
            a.id === editingArticle.id
              ? { ...a, title: editForm.title, description: editForm.description, image_url: editForm.image_url || null, content: editForm.content || null, is_published: newPublished }
              : a
          )
        );
        setEditingArticle(null);
      } else {
        setSaveError('Erro ao salvar. Tente novamente.');
      }
    } catch {
      setSaveError('Erro de conexão.');
    } finally {
      setSaving(false);
    }
  };

  // AI generate full content (4+ paragraphs)
  const handleAIGenerateContent = async () => {
    if (!editingArticle) return;
    setRewritingContent(true);
    setSaveError('');
    try {
      const res = await fetch('/api/admin/ai-rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editForm.title,
          description: editForm.description,
          source_name: editingArticle.source_name,
          type: 'content',
        }),
      });
      const data = await res.json();
      if (res.ok && data.content) {
        setEditForm(prev => ({ ...prev, content: data.content }));
      } else {
        setSaveError(data.error || 'Erro ao gerar conteúdo com IA.');
      }
    } catch {
      setSaveError('Erro ao chamar a IA.');
    } finally {
      setRewritingContent(false);
    }
  };

  const filtered = articles.filter(a => {
    if (filter === 'published') return a.is_published;
    if (filter === 'pending') return !a.is_published;
    return true;
  });

  const publishedCount = articles.filter(a => a.is_published).length;
  const pendingCount = articles.filter(a => !a.is_published).length;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-rocket text-blue-400 text-xl"></i>
              <span className="text-white font-bold text-lg">Admin Dashboard</span>
              <span className="text-gray-500 text-sm">— Spaceflight Tracker</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/blog" target="_blank" className="text-gray-400 hover:text-white text-sm transition-colors">
                Ver Blog →
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-3xl font-bold text-white">{articles.length}</p>
            <p className="text-gray-400 text-sm mt-1">Total de artigos</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-3xl font-bold text-green-400">{publishedCount}</p>
            <p className="text-gray-400 text-sm mt-1">Publicados</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-3xl font-bold text-yellow-400">{pendingCount}</p>
            <p className="text-gray-400 text-sm mt-1">Pendentes</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-3xl font-bold text-blue-400">
              {articles.filter(a => a.is_manual).length}
            </p>
            <p className="text-gray-400 text-sm mt-1">Posts manuais</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={handleFetchFeeds}
            disabled={fetching}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            {fetching ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                Buscando feeds...
              </>
            ) : (
              <>
                <i className="fa-solid fa-rotate text-sm"></i>
                Buscar Notícias dos Feeds
              </>
            )}
          </button>
          <Link href="/admin/new">
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
              <i className="fa-solid fa-plus text-sm"></i>
              Novo Post Manual
            </button>
          </Link>
        </div>

        {fetchResult && (
          <div className={`rounded-lg p-3 mb-6 text-sm border ${fetchResult.startsWith('✓') ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
            {fetchResult}
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex bg-gray-800 rounded-lg p-1 gap-1">
            {(['all', 'published', 'pending'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  filter === f ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {f === 'all' ? 'Todos' : f === 'published' ? 'Publicados' : 'Pendentes'}
              </button>
            ))}
          </div>

          <div className="flex bg-gray-800 rounded-lg p-1 gap-1">
            {(['all', 'space', 'technology', 'astronomy'] as const).map(c => (
              <button
                key={c}
                onClick={() => setCategoryFilter(c)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  categoryFilter === c ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {c === 'all' ? 'Todas categorias' : CATEGORY_LABELS[c]}
              </button>
            ))}
          </div>
        </div>

        {/* Articles list */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Nenhum artigo encontrado.</p>
            <p className="text-gray-500 text-sm mt-2">Clique em "Buscar Notícias dos Feeds" para importar artigos.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map(article => (
              <div
                key={article.id}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-start gap-4"
              >
                {/* Image */}
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt=""
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0 hidden sm:block"
                  />
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[article.category] || 'bg-gray-700 text-gray-400 border-gray-600'}`}>
                      {CATEGORY_LABELS[article.category] || article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.source_name}</span>
                    {article.is_manual && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                        Manual
                      </span>
                    )}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      article.is_published
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      {article.is_published ? 'Publicado' : 'Pendente'}
                    </span>
                  </div>
                  <h3 className="text-white font-medium text-sm leading-snug line-clamp-2 mb-1">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="text-gray-500 text-xs line-clamp-1 mb-1">{article.description}</p>
                  )}
                  <p className="text-gray-600 text-xs">
                    {article.published_at
                      ? new Date(article.published_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
                      : 'Sem data'}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {article.source_url && (
                    <a
                      href={article.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                      title="Ver original"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                    </a>
                  )}
                  <button
                    onClick={() => handleOpenEdit(article)}
                    className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
                    title="Editar"
                  >
                    <i className="fa-solid fa-pen text-xs"></i>
                  </button>
                  <button
                    onClick={() => handleTogglePublish(article)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      article.is_published
                        ? 'bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400 border border-yellow-600/30'
                        : 'bg-green-600/20 hover:bg-green-600/30 text-green-400 border border-green-600/30'
                    }`}
                  >
                    {article.is_published ? 'Despublicar' : 'Publicar'}
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                    title="Deletar"
                  >
                    <i className="fa-solid fa-trash text-xs"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Edit Modal */}
      {editingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl w-full max-w-2xl shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-pen text-purple-400"></i>
                <span className="text-white font-semibold">Editar Artigo</span>
              </div>
              <button
                onClick={() => setEditingArticle(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-5 space-y-4 overflow-y-auto max-h-[70vh]">
              {/* Source info */}
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-700/40 rounded-lg px-3 py-2">
                <i className="fa-solid fa-link"></i>
                <span>{editingArticle.source_name}</span>
                {editingArticle.source_url && (
                  <>
                    <span>·</span>
                    <a href={editingArticle.source_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline truncate max-w-xs">
                      {editingArticle.source_url}
                    </a>
                  </>
                )}
              </div>

              {/* Title */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Título</label>
                  <button
                    onClick={handleAIRewriteTitle}
                    disabled={rewritingTitle}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/20 hover:bg-purple-600/30 disabled:opacity-50 disabled:cursor-not-allowed text-purple-400 border border-purple-600/30 rounded-lg text-xs font-medium transition-colors"
                  >
                    {rewritingTitle ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-t-2 border-b-2 border-purple-400"></div>
                        Reescrevendo...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-wand-magic-sparkles text-xs"></i>
                        Reescrever com IA
                      </>
                    )}
                  </button>
                </div>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={e => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>

              {/* Image URL */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">URL da Imagem</label>
                  <button
                    onClick={handleAIGenerateImage}
                    disabled={generatingImage}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-600/20 hover:bg-orange-600/30 disabled:opacity-50 disabled:cursor-not-allowed text-orange-400 border border-orange-600/30 rounded-lg text-xs font-medium transition-colors"
                  >
                    {generatingImage ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-t-2 border-b-2 border-orange-400"></div>
                        Gerando...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-image text-xs"></i>
                        Gerar com IA
                      </>
                    )}
                  </button>
                </div>
                <input
                  type="url"
                  value={editForm.image_url}
                  onChange={e => setEditForm(prev => ({ ...prev, image_url: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  placeholder="https://..."
                />
                {editForm.image_url && (
                  <div className="mt-2 rounded-lg overflow-hidden h-32 bg-gray-700">
                    <img
                      src={editForm.image_url}
                      alt="preview"
                      className="w-full h-full object-cover"
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Resumo / Descrição</label>
                  <button
                    onClick={handleAIRewrite}
                    disabled={rewriting}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/20 hover:bg-purple-600/30 disabled:opacity-50 disabled:cursor-not-allowed text-purple-400 border border-purple-600/30 rounded-lg text-xs font-medium transition-colors"
                  >
                    {rewriting ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-t-2 border-b-2 border-purple-400"></div>
                        Reescrevendo...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-wand-magic-sparkles text-xs"></i>
                        Reescrever com IA
                      </>
                    )}
                  </button>
                </div>
                <textarea
                  value={editForm.description}
                  onChange={e => setEditForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm"
                  placeholder="Resumo do artigo..."
                />
                <p className="text-gray-600 text-xs mt-1">{editForm.description.length} caracteres</p>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Descrição completa <span className="text-gray-500 font-normal">(mín. 4 parágrafos)</span></label>
                  <button
                    onClick={handleAIGenerateContent}
                    disabled={rewritingContent}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600/20 hover:bg-green-600/30 disabled:opacity-50 disabled:cursor-not-allowed text-green-400 border border-green-600/30 rounded-lg text-xs font-medium transition-colors"
                  >
                    {rewritingContent ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-t-2 border-b-2 border-green-400"></div>
                        Gerando...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-wand-magic-sparkles text-xs"></i>
                        Gerar com IA
                      </>
                    )}
                  </button>
                </div>
                <textarea
                  value={editForm.content}
                  onChange={e => setEditForm(prev => ({ ...prev, content: e.target.value }))}
                  rows={10}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-y text-sm"
                  placeholder="Conteúdo completo do artigo (mínimo 4 parágrafos)..."
                />
                <p className="text-gray-600 text-xs mt-1">{editForm.content.length} caracteres</p>
              </div>

              {saveError && (
                <p className="text-red-400 text-sm">{saveError}</p>
              )}
            </div>

            {/* Modal footer */}
            <div className="flex gap-3 p-5 border-t border-gray-700">
              <button
                onClick={handleSaveEdit}
                disabled={saving}
                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors text-sm"
              >
                {saving ? 'Salvando...' : 'Salvar alterações'}
              </button>
              <button
                onClick={handleSaveAndPublish}
                disabled={saving}
                className={`flex-1 py-2.5 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors text-sm ${
                  editingArticle?.is_published
                    ? 'bg-yellow-600 hover:bg-yellow-700'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {saving ? 'Salvando...' : editingArticle?.is_published ? 'Salvar e Despublicar' : 'Salvar e Publicar'}
              </button>
              <button
                onClick={() => setEditingArticle(null)}
                className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg font-medium transition-colors text-sm"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
