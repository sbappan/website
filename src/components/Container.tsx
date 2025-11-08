import type { ContainerProps } from '@/types';

/**
 * Container Component
 *
 * A responsive max-width wrapper for content with horizontal padding.
 * Centers content and provides consistent spacing across breakpoints.
 *
 * @example
 * ```tsx
 * import { Container } from '@/components';
 *
 * <Container maxWidth="lg">
 *   <h1>Your content here</h1>
 * </Container>
 * ```
 */
export function Container({
  children,
  className = '',
  maxWidth = 'xl',
}: ContainerProps) {
  const baseStyles = 'mx-auto px-4 sm:px-6 lg:px-8';

  const maxWidthStyles = {
    sm: 'max-w-screen-sm',   // 640px
    md: 'max-w-screen-md',   // 768px
    lg: 'max-w-screen-lg',   // 1024px
    xl: 'max-w-screen-xl',   // 1280px
    '2xl': 'max-w-screen-2xl', // 1536px
    full: 'max-w-full',
  };

  return (
    <div className={`${baseStyles} ${maxWidthStyles[maxWidth]} ${className}`}>
      {children}
    </div>
  );
}
