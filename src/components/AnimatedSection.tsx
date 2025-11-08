import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { AnimatedSectionProps } from '@/types/components';

/**
 * AnimatedSection Component
 *
 * Wraps content with scroll-triggered animations using Framer Motion.
 * Animations trigger when the section comes into view.
 *
 * @example
 * ```tsx
 * <AnimatedSection variant="fade-up" delay={0.2}>
 *   <h2>Content to animate</h2>
 * </AnimatedSection>
 * ```
 */
const AnimatedSection = ({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
}: AnimatedSectionProps) => {
  const ref = useRef(null);

  // Trigger animation when element comes into view
  // once: true = only animate once (don't re-animate on scroll back)
  // margin: "-100px" = trigger animation 100px before element enters viewport
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  // Animation variant definitions
  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'slide-in': {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1], // Custom cubic-bezier for smooth easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
