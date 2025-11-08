import { SectionWrapperProps } from '../../types';
import { Container } from '../Container';

/**
 * SectionWrapper Component
 *
 * Wraps page sections with consistent padding, optional titles, and background variants.
 * Automatically includes Container for proper content width.
 *
 * @example
 * ```tsx
 * import { SectionWrapper } from '@/components/ui';
 *
 * <SectionWrapper
 *   id="about"
 *   title="About Me"
 *   subtitle="Learn more about my background"
 *   background="gradient"
 * >
 *   <p>Section content goes here</p>
 * </SectionWrapper>
 * ```
 */
export function SectionWrapper({
  children,
  id,
  title,
  subtitle,
  background = 'default',
  className = '',
}: SectionWrapperProps) {
  const baseStyles = 'py-16 md:py-24';

  const backgroundStyles = {
    default: 'bg-white',
    gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50',
    pattern: 'bg-gray-50',
  };

  return (
    <section
      id={id}
      className={`${baseStyles} ${backgroundStyles[background]} ${className}`}
    >
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {title}
                <div className="mt-3 mx-auto w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
