import type { Metadata } from 'next';

// Admin is a private utility area with no publisher content.
// Keep it out of search indexes and ad eligibility.
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

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
