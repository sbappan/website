import { BadgeProps } from '../../types';

/**
 * Badge Component
 *
 * A small, rounded pill component for tags and labels.
 * Perfect for displaying tech stack, skills, or categories.
 *
 * @example
 * ```tsx
 * import { Badge } from '@/components/ui';
 *
 * <Badge variant="primary">React</Badge>
 * <Badge variant="accent">TypeScript</Badge>
 * <Badge variant="neutral">Tailwind CSS</Badge>
 * ```
 */
export function Badge({
  children,
  variant = 'neutral',
  className = '',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200';

  const variantStyles = {
    primary: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
    secondary: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200',
    accent: 'bg-accent-100 text-accent-700 hover:bg-accent-200',
    neutral: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
