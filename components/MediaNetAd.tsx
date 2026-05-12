'use client';

import { useEffect } from 'react';

interface MediaNetAdProps {
  adUnitId: string;
  width?: number;
  height?: number;
  className?: string;
}

declare global {
  interface Window {
    _mNHandle?: {
      queue: any[];
    };
  }
}

export default function MediaNetAd({
  adUnitId,
  width = 728,
  height = 90,
  className = ''
}: MediaNetAdProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window._mNHandle = window._mNHandle || { queue: [] };
        window._mNHandle.queue = window._mNHandle.queue || [];
        window._mNHandle.queue.push(function() {
          // Media.net ad initialization will happen here
          // This will be populated after you get your Customer ID
        });
      }
    } catch (err) {
      console.error('Media.net error:', err);
    }
  }, [adUnitId]);

  return (
    <div className={`medianet-ad-container my-8 ${className}`}>
      <div
        id={`${adUnitId}`}
        style={{
          minWidth: `${width}px`,
          minHeight: `${height}px`,
          textAlign: 'center'
        }}
      >
        {/* Media.net ad will render here */}
      </div>
    </div>
  );
}
