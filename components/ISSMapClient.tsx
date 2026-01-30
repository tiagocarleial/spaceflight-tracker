'use client';

import dynamic from 'next/dynamic';

// Import ISSMap with no SSR to avoid Leaflet window issues
const ISSMap = dynamic(() => import('@/components/ISSMap'), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-white text-xl">Loading ISS Live...</p>
      </div>
    </div>
  ),
});

export default function ISSMapClient() {
  return <ISSMap />;
}
