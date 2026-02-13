'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function EzoicRouteRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.ezstandalone) {
      window.ezstandalone.cmd.push(() => {
        window.ezstandalone!.showAds();
      });
    }
  }, [pathname]);

  return null;
}
