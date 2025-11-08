import type { Project } from '@/types';

/**
 * Projects Data
 * Sample portfolio projects showcasing various technologies and skills
 */
export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with cart management, payment integration, and admin dashboard for inventory management.',
    image: 'gradient-blue-purple',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
    image: 'gradient-green-blue',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://tasks-demo.vercel.app',
    featured: true,
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description:
      'Beautiful weather dashboard with location search, 7-day forecast, and interactive charts powered by weather APIs.',
    image: 'gradient-orange-pink',
    tags: ['React', 'TypeScript', 'Chart.js', 'REST APIs'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-demo.vercel.app',
    featured: false,
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description:
      'Modern blogging platform with markdown support, syntax highlighting, and SEO optimization for technical writers.',
    image: 'gradient-purple-pink',
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/yourusername/blog-platform',
    liveUrl: 'https://blog-demo.vercel.app',
    featured: false,
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    description:
      'Track workouts, set goals, and visualize progress with interactive charts and personalized workout recommendations.',
    image: 'gradient-red-orange',
    tags: ['React', 'Express', 'MongoDB', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/fitness-tracker',
    featured: false,
  },
  {
    id: 'portfolio-generator',
    title: 'Portfolio Generator',
    description:
      'CLI tool to generate beautiful portfolio websites from JSON configuration with multiple themes and customization options.',
    image: 'gradient-cyan-blue',
    tags: ['Node.js', 'TypeScript', 'Vite', 'CLI'],
    githubUrl: 'https://github.com/yourusername/portfolio-generator',
    featured: false,
  },
];
