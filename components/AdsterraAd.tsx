'use client';

import { useEffect } from 'react';

interface AdsterraAdProps {
  atOptions: {
    key: string;
    format?: string;
    height?: number;
    width?: number;
    params?: Record<string, any>;
  };
}

/**
 * Adsterra Ad Component
 *
 * Usage:
 * <AdsterraAd atOptions={{ key: 'YOUR_KEY_HERE' }} />
 */
export default function AdsterraAd({ atOptions }: AdsterraAdProps) {
  useEffect(() => {
    // Load Adsterra script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://pl29513991.effectivecpmnetwork.com/${atOptions.key}/invoke.js`;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    const container = document.getElementById(`container-${atOptions.key}`);
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, [atOptions.key]);

  return (
    <div className="flex justify-center items-center my-6">
      <div id={`container-${atOptions.key}`} className="max-w-full overflow-hidden"></div>
    </div>
  );
}
