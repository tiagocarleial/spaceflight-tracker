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
  domain?: 'banner' | 'iframe'; // 'banner' for effectivecpmnetwork, 'iframe' for highperformanceformat
}

/**
 * Adsterra Ad Component
 *
 * Usage:
 * Banner Ad: <AdsterraAd atOptions={{ key: 'YOUR_KEY_HERE' }} />
 * iFrame Ad: <AdsterraAd atOptions={{ key: 'KEY', format: 'iframe', height: 300, width: 160, params: {} }} domain="iframe" />
 */
export default function AdsterraAd({ atOptions, domain = 'banner' }: AdsterraAdProps) {
  useEffect(() => {
    const container = document.getElementById(`container-${atOptions.key}`);
    if (!container) return;

    // For iframe format ads (highperformanceformat.com)
    if (domain === 'iframe' && atOptions.format) {
      // Set atOptions as a global variable
      (window as any).atOptions = {
        key: atOptions.key,
        format: atOptions.format,
        height: atOptions.height,
        width: atOptions.width,
        params: atOptions.params || {},
      };

      // Load the invoke script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.highperformanceformat.com/${atOptions.key}/invoke.js`;
      container.appendChild(script);

      return () => {
        if (script.parentNode === container) {
          container.removeChild(script);
        }
        delete (window as any).atOptions;
      };
    }

    // For banner/native ads (effectivecpmnetwork.com)
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://pl29513991.effectivecpmnetwork.com/${atOptions.key}/invoke.js`;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    container.appendChild(script);

    return () => {
      if (script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, [atOptions, domain]);

  return (
    <div className="flex justify-center items-center my-6">
      <div id={`container-${atOptions.key}`} className="max-w-full overflow-hidden"></div>
    </div>
  );
}
