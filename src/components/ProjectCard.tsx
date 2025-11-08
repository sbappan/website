import { memo, useCallback } from 'react';
import type { Project } from '@/types';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui';

interface ProjectCardProps extends Project {}

// Map gradient names to Tailwind gradient classes (moved outside to prevent recreation on every render)
const GRADIENT_MAP: Record<string, string> = {
  'gradient-blue-purple': 'from-blue-400 to-purple-500',
  'gradient-green-blue': 'from-green-400 to-blue-500',
  'gradient-orange-pink': 'from-orange-400 to-pink-500',
  'gradient-purple-pink': 'from-purple-400 to-pink-500',
  'gradient-red-orange': 'from-red-400 to-orange-500',
  'gradient-cyan-blue': 'from-cyan-400 to-blue-500',
};

/**
 * ProjectCard Component
 *
 * Displays a project with image, title, description, tags, and action buttons.
 * Features hover effects and responsive design.
 *
 * Memoized to prevent unnecessary re-renders (6 instances in the app).
 */
export const ProjectCard = memo(function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const gradientClass = GRADIENT_MAP[image] || 'from-primary-400 to-secondary-500';

  // Memoize button handlers to prevent Button re-renders
  const handleGithubClick = useCallback(() => {
    if (githubUrl) window.open(githubUrl, '_blank');
  }, [githubUrl]);

  const handleLiveClick = useCallback(() => {
    if (liveUrl) window.open(liveUrl, '_blank');
  }, [liveUrl]);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      {/* Project Image */}
      <div
        className={`aspect-video bg-gradient-to-br ${gradientClass} relative overflow-hidden`}
        role="img"
        aria-label={`${title} project preview`}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              icon={Github}
              iconPosition="left"
              onClick={handleGithubClick}
            >
              Code
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="primary"
              size="sm"
              icon={ExternalLink}
              iconPosition="left"
              onClick={handleLiveClick}
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
});
