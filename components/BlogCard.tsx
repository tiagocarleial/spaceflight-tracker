import { Article } from '@/types/article';

interface BlogCardProps {
  article: Article;
}

const CATEGORY_STYLES: Record<string, string> = {
  space: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  technology: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  astronomy: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
};

const CATEGORY_LABELS: Record<string, string> = {
  space: 'Space',
  technology: 'Tecnologia',
  astronomy: 'Astronomia',
};

const DEFAULT_IMAGES: Record<string, string> = {
  space: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&q=80',
  astronomy: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=600&q=80',
  technology: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
};

export default function BlogCard({ article }: BlogCardProps) {
  const href = `/blog/${article.slug}`;
  const imageUrl = article.image_url || DEFAULT_IMAGES[article.category] || DEFAULT_IMAGES.space;

  const formattedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : '';

  return (
    <a
      href={href}
      className="group block bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all hover:-translate-y-0.5"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-gray-700">
        <img
          src={imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = DEFAULT_IMAGES[article.category] || DEFAULT_IMAGES.space;
          }}
        />
        {/* Category badge over image */}
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full border backdrop-blur-sm ${CATEGORY_STYLES[article.category] || 'bg-gray-700/80 text-gray-300 border-gray-600'}`}>
            {CATEGORY_LABELS[article.category] || article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {formattedDate && (
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">{formattedDate}</span>
          </div>
        )}
        <h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
          {article.title}
        </h3>
        {article.description && (
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
            {article.description}
          </p>
        )}
        <div className="mt-3 flex items-center gap-1 text-blue-400 text-xs font-medium">
          <span>Ler artigo</span>
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </div>
      </div>
    </a>
  );
}
