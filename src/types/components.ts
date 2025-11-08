import { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

// Button Component Types
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

// Card Component Types
export interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  header?: ReactNode;
  footer?: ReactNode;
}

// Badge Component Types
export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'neutral';

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

// Container Component Types
export interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

// Section Wrapper Component Types
export type SectionBackground = 'default' | 'gradient' | 'pattern';

export interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  background?: SectionBackground;
  className?: string;
}

// Animated Section Component Types
export type AnimationVariant = 'fade-up' | 'fade-in' | 'slide-in';

export interface AnimatedSectionProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
  section: string;
}

export interface NavSection {
  id: string;
  label: string;
}
