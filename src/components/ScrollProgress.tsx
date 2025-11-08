import { motion, useScroll } from 'framer-motion';

/**
 * ScrollProgress Component
 *
 * Displays a progress bar at the top of the page that fills as the user scrolls down.
 * Uses Framer Motion's useScroll hook to track scroll position.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
