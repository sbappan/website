import { useCallback, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Navbar, AnimatedSection, SkillCard, ProjectCard, ScrollProgress } from '@/components';
import { SectionWrapper } from '@/components/ui';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { projects } from '@/data/projects';
import { aboutData } from '@/data/about';
import type { Project } from '@/types';

// Utility function to get all skills that have matching projects
const getSkillsWithProjects = (projectsList: Project[]): Set<string> => {
  const skillsSet = new Set<string>();
  projectsList.forEach(project => {
    project.tags.forEach(tag => skillsSet.add(tag));
  });
  return skillsSet;
};

function App() {
  // State for skill filtering
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Calculate which skills have matching projects
  const skillsWithProjects = useMemo(() => getSkillsWithProjects(projects), []);

  // Memoize button handlers to prevent Button re-renders
  const scrollToProjects = useCallback(() => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Handle skill click: toggle if same, switch if different, and scroll to projects
  const handleSkillClick = useCallback((skillName: string) => {
    setSelectedSkill(prev => {
      const isDeselecting = prev === skillName;

      // Only scroll if we're selecting a skill (not deselecting)
      if (!isDeselecting) {
        const element = document.getElementById('projects');
        if (element) {
          const offset = 64; // Height of fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }

      // Toggle: null if same, skillName if different
      return isDeselecting ? null : skillName;
    });
  }, []);

  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:santhosh.appan@example.com';
  }, []);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-16"
      >
        <AnimatedSection variant="fade-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Santhosh Appan
              </span>
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {['Full-stack', 'developer', 'specializing', 'in', 'building', 'exceptional', 'digital', 'experiences'].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.04,
                    duration: 0.25,
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <div className="flex justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <SectionWrapper
        id="about"
        title="About Me"
        subtitle="Get to know more about my background and experience"
        background="gradient"
      >
        <AnimatedSection variant="fade-in">
          <div className="max-w-4xl mx-auto">
            {/* Bio Content */}
            <div className="max-w-3xl mx-auto mb-12 text-left">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {aboutData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper
        id="projects"
        title="Featured Projects"
        subtitle="A selection of my recent work and side projects"
        background="default"
      >
        <AnimatedSection variant="fade-up">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {projects.map((project) => {
              const isHighlighted = selectedSkill ? project.tags.includes(selectedSkill) : false;
              const isDimmed = selectedSkill ? !project.tags.includes(selectedSkill) : false;

              return (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard
                    {...project}
                    isHighlighted={isHighlighted}
                    isDimmed={isDimmed}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper
        id="skills"
        title="Skills & Technologies"
        subtitle="Tools and technologies I work with"
        background="gradient"
      >
        <AnimatedSection variant="fade-up" delay={0.1}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    {category.name}
                  </h3>
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                  >
                    {category.skills.map((skill) => (
                      <motion.div key={skill.name} variants={itemVariants}>
                        <SkillCard
                          name={skill.name}
                          icon={skill.icon}
                          onClick={handleSkillClick}
                          isSelected={selectedSkill === skill.name}
                          hasProjects={skillsWithProjects.has(skill.name)}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper
        id="contact"
        title="Get In Touch"
        subtitle="Let's work together on your next project"
        background="default"
      >
        <AnimatedSection variant="fade-in">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              I'm currently available for freelance work and open to discussing new opportunities.
              Feel free to reach out if you'd like to collaborate or just want to say hello!
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={handleEmailClick}
            >
              Send Me an Email
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Santhosh Appan. Built with React, TypeScript, and Tailwind.
            </p>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </div>
  );
}

export default App;
