'use client';

import dynamic from 'next/dynamic';

// Import TiangongMap with no SSR to avoid Leaflet window issues
const TiangongMap = dynamic(() => import('@/components/TiangongMap'), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-4"></div>
        <p className="text-white text-xl">Loading Tiangong Live...</p>
      </div>
    </div>
  ),
});

export default function TiangongMapClient() {
  return <TiangongMap />;
}
