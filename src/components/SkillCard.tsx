import { memo } from 'react';
import type { IconType } from 'react-icons';

interface SkillCardProps {
  name: string;
  icon: IconType;
}

/**
 * SkillCard Component
 *
 * Displays a single skill with its icon and name.
 * Features hover effects for interactive feel.
 *
 * Memoized to prevent unnecessary re-renders (21 instances in the app).
 */
export const SkillCard = memo(function SkillCard({ name, icon: Icon }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-white/50 group">
      <Icon className="text-4xl text-gray-700 transition-colors duration-300 group-hover:text-primary-600" />
      <span className="text-sm font-medium text-gray-800 text-center">
        {name}
      </span>
    </div>
  );
});
