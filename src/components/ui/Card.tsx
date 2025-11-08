import { CardProps } from '../../types';

/**
 * Card Component
 *
 * A container component with shadow, rounded corners, and hover effects.
 *
 * @example
 * ```tsx
 * import { Card } from '@/components/ui';
 *
 * <Card hoverable padding="lg">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * <Card
 *   header={<h3>Header</h3>}
 *   footer={<button>Action</button>}
 * >
 *   Content
 * </Card>
 * ```
 */
export function Card({
  children,
  className = '',
  hoverable = false,
  padding = 'md',
  header,
  footer,
}: CardProps) {
  const baseStyles = 'bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300';

  const hoverStyles = hoverable
    ? 'hover:shadow-xl hover:-translate-y-1 hover:border-primary-200 cursor-pointer'
    : '';

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {header && (
        <div className={`${paddingStyles[padding]} border-b border-gray-100 pb-4`}>
          {header}
        </div>
      )}

      <div className={header || footer ? paddingStyles[padding] : paddingStyles[padding]}>
        {children}
      </div>

      {footer && (
        <div className={`${paddingStyles[padding]} border-t border-gray-100 pt-4`}>
          {footer}
        </div>
      )}
    </div>
  );
}
