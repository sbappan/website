import type { SkillCategory } from '@/types';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiFigma,
  SiAmazon,
  SiGithubactions,
} from 'react-icons/si';
import { TbApi, TbCode } from 'react-icons/tb';

/**
 * Skills Data
 * Organized by category with associated icons from react-icons
 */
export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'Vite', icon: SiVite },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Python', icon: SiPython },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'REST APIs', icon: TbApi },
      { name: 'GraphQL', icon: SiGraphql },
    ],
  },
  {
    name: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'VS Code', icon: TbCode },
      { name: 'Figma', icon: SiFigma },
      { name: 'AWS', icon: SiAmazon },
      { name: 'GitHub Actions', icon: SiGithubactions },
    ],
  },
];
