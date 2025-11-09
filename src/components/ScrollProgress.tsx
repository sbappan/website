import { useEffect, useState } from 'react';

/**
 * ScrollProgress Component (Optimized - No Framer Motion)
 *
 * Displays a progress bar at the top of the page that fills as the user scrolls down.
 * Uses native browser scroll events with CSS transforms for better performance.
 * Optimized for LCP - reduces bundle size and improves TBT.
 */
export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    // Initial calculation
    updateScrollProgress();

    // Update on scroll with passive listener for better performance
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 origin-left z-[60] transition-transform duration-100 ease-out"
      style={{
        transform: `scaleX(${scrollProgress / 100})`,
        willChange: 'transform',
      }}
    />
  );
}
