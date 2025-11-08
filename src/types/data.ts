import type { IconType } from 'react-icons';

/**
 * Project Type
 * Represents a portfolio project with all necessary information
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

/**
 * Skill Type
 * Represents a single technology or skill with its associated icon
 */
export interface Skill {
  name: string;
  icon: IconType;
  proficiency?: number; // Optional: 1-100 scale
}

/**
 * Skill Category Type
 * Groups related skills together (e.g., Frontend, Backend, Tools)
 */
export interface SkillCategory {
  name: string;
  skills: Skill[];
}

/**
 * About Stat Type
 * Represents a highlight statistic (e.g., "5+ Years Experience")
 */
export interface AboutStat {
  label: string;
  value: string;
}

/**
 * About Data Type
 * Contains all information for the About section
 */
export interface AboutData {
  bio: string[];
  stats: AboutStat[];
}
