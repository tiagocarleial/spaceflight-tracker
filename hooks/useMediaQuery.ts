'use client';

import { useState, useEffect } from 'react';

/**
 * Hook for responsive media query detection
 * @param query - CSS media query string (e.g., '(max-width: 767px)')
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);

    // Set initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Create listener for changes
    const listener = () => setMatches(media.matches);

    // Modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      // Fallback for older browsers
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  // Return false during SSR to avoid hydration mismatch
  return mounted ? matches : false;
}

/**
 * Convenience hook to detect mobile screens
 * Mobile is defined as screens < 768px (Tailwind's md breakpoint)
 * @returns boolean - true if screen is mobile size
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 767px)');
}

/**
 * Convenience hook to detect desktop screens
 * Desktop is defined as screens >= 768px (Tailwind's md breakpoint)
 * @returns boolean - true if screen is desktop size
 */
export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 768px)');
}
