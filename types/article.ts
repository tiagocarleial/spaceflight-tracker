export interface Article {
  id: string;
  title: string;
  description: string | null;
  content: string | null;
  image_url: string | null;
  source_url: string | null;
  source_name: string;
  category: 'space' | 'natural-disasters' | 'astronomy' | 'archaeology';
  slug: string | null;
  is_published: boolean;
  is_manual: boolean;
  published_at: string | null;
  created_at: string;
}

export type ArticleCategory = 'space' | 'natural-disasters' | 'astronomy' | 'archaeology';

export interface CreateArticlePayload {
  title: string;
  description?: string | null;
  content?: string | null;
  image_url?: string | null;
  source_url?: string | null;
  source_name: string;
  category: ArticleCategory;
  slug?: string | null;
  is_published?: boolean;
  is_manual?: boolean;
  published_at?: string | null;
}
