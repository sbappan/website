import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import type { NavLink } from '@/types';

/**
 * Navigation Configuration
 *
 * Centralized configuration for site navigation, social links, and contact info.
 */

// Main navigation links
export const navLinks: NavLink[] = [
  {
    label: 'About',
    href: '#about',
    section: 'about',
  },
  {
    label: 'Projects',
    href: '#projects',
    section: 'projects',
  },
  {
    label: 'Skills',
    href: '#skills',
    section: 'skills',
  },
  {
    label: 'Contact',
    href: '#contact',
    section: 'contact',
  },
];

// Social media links
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: Github,
    ariaLabel: 'Visit my GitHub profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: Linkedin,
    ariaLabel: 'Visit my LinkedIn profile',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: Twitter,
    ariaLabel: 'Visit my Twitter profile',
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: Mail,
    ariaLabel: 'Send me an email',
  },
];

// Contact information
export const contactInfo = {
  email: 'your.email@example.com',
  location: 'Your City, Country',
  availability: 'Available for freelance work',
};

// Site metadata
export const siteConfig = {
  name: 'Your Name',
  title: 'Portfolio - Your Name',
  description: 'Full-stack developer specializing in modern web technologies',
  url: 'https://yourwebsite.com',
};
