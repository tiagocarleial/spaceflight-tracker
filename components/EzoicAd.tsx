'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    ezstandalone?: {
      cmd: Array<() => void>;
      showAds: (...ids: number[]) => void;
      destroyPlaceholders: (...ids: number[]) => void;
      destroyAll: () => void;
    };
  }
}

interface EzoicAdProps {
  id: number;
}

export default function EzoicAd({ id }: EzoicAdProps) {
  useEffect(() => {
    if (window.ezstandalone) {
      window.ezstandalone.cmd.push(() => {
        window.ezstandalone!.showAds(id);
      });
    }
  }, [id]);

  return <div id={`ezoic-pub-ad-placeholder-${id}`} />;
}
