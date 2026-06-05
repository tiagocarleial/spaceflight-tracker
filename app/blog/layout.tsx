import type { Metadata } from 'next';

// The /blog section serves auto-aggregated news and is excluded from search
// indexing while it is not maintained as original, high-value content.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
