import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/config/navigation';

/**
 * Navbar Component
 *
 * Responsive navigation bar with:
 * - Sticky header with blur backdrop
 * - Desktop navigation with active section highlighting
 * - Mobile hamburger menu with Framer Motion animations
 * - Smooth scroll to sections
 * - Keyboard accessibility
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.getElementById(link.section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Memoize nav click handler to prevent navigation link re-renders (used by 5+ links)
  const handleNavClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  }, []);

  const navbarClasses = `
    fixed top-0 left-0 right-0 flex justify-center z-50 transition-all duration-300
    ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}
  `;

  const linkBaseClasses = 'text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium';
  const activeLinkClasses = 'text-primary-600';

  return (
    <nav className={navbarClasses} role="navigation" aria-label="Main navigation">
      <div className="flex justify-between items-center h-14 md:h-16 max-w-4xl w-full">
        {/* Logo / Name */}
        <div className="flex-shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/SBA_logo.svg"
              alt="SBA Logo"
              className="h-8 md:h-10 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.section);
              }}
              className={`
                ${linkBaseClasses}
                ${activeSection === link.section ? activeLinkClasses : ''}
                relative
                after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5
                after:bg-primary-600 after:transform after:scale-x-0 after:transition-transform
                after:duration-200 hover:after:scale-x-100
                ${activeSection === link.section ? 'after:scale-x-100' : ''}
              `}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
              style={{ top: '56px' }}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Menu */}
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-14 bottom-0 w-64 bg-white shadow-xl md:hidden overflow-y-auto"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.section}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.section);
                    }}
                    className={`
                      text-lg font-medium transition-colors duration-200
                      ${activeSection === link.section ? 'text-primary-600' : 'text-gray-700'}
                      hover:text-primary-600
                      pl-4 border-l-2
                      ${activeSection === link.section ? 'border-primary-600' : 'border-transparent'}
                      hover:border-primary-600
                    `}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
