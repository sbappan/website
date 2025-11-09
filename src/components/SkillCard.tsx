import { memo } from 'react';
import type { IconType } from 'react-icons';

interface SkillCardProps {
  name: string;
  icon: IconType;
  onClick?: (name: string) => void;
  isSelected?: boolean;
  hasProjects?: boolean;
}

/**
 * SkillCard Component
 *
 * Displays a single skill with its icon and name.
 * Features hover effects and click interaction to filter projects.
 * Skills without matching projects are visually dimmed and non-clickable.
 *
 * Memoized to prevent unnecessary re-renders (21 instances in the app).
 */
export const SkillCard = memo(function SkillCard({
  name,
  icon: Icon,
  onClick,
  isSelected = false,
  hasProjects = true
}: SkillCardProps) {
  const handleClick = () => {
    if (hasProjects && onClick) {
      onClick(name);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (hasProjects && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick?.(name);
    }
  };

  return (
    <div
      className={`flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 group ${
        !hasProjects
          ? 'opacity-70 cursor-default hover:bg-gray-100'
          : isSelected
          ? 'ring-2 ring-primary-600 bg-primary-50 scale-105'
          : 'hover:scale-110 hover:bg-white/50'
      } ${hasProjects && onClick ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={hasProjects && onClick ? 'button' : undefined}
      tabIndex={hasProjects && onClick ? 0 : undefined}
      aria-label={
        hasProjects && onClick
          ? `Filter projects by ${name}`
          : `${name} - No projects yet`
      }
      aria-pressed={hasProjects && onClick ? isSelected : undefined}
    >
      <Icon className={`text-4xl transition-colors duration-300 ${
        isSelected
          ? 'text-primary-600'
          : 'text-gray-700 group-hover:text-primary-600'
      }`} />
      <span className="text-sm font-medium text-gray-800 text-center">
        {name}
      </span>
    </div>
  );
});
