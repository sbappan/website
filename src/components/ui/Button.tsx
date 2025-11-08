import type { ButtonProps } from '@/types';

/**
 * Button Component
 *
 * A versatile button component with multiple variants and sizes.
 *
 * @example
 * ```tsx
 * import { Button } from '@/components/ui';
 * import { ArrowRight } from 'lucide-react';
 *
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click Me
 * </Button>
 *
 * <Button variant="outline" icon={ArrowRight} iconPosition="right">
 *   Learn More
 * </Button>
 * ```
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-md hover:shadow-lg',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded-md gap-1.5',
    md: 'px-5 py-2.5 text-base rounded-lg gap-2',
    lg: 'px-6 py-3 text-lg rounded-lg gap-2.5',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const iconSize = size === 'sm' ? 16 : size === 'md' ? 20 : 24;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon size={iconSize} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={iconSize} />}
    </button>
  );
}
