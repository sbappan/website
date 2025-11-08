import { Navbar, AnimatedSection, SkillCard, ProjectCard } from '@/components';
import { SectionWrapper } from '@/components/ui';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { projects } from '@/data/projects';
import { aboutData } from '@/data/about';

function App() {
  return (
    <div className="min-h-screen bg-white">
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
            <p className="text-xl md:text-2xl text-gray-600 mb-8 mx-auto">
              Full-stack developer specializing in building exceptional digital experiences
            </p>
            <div className="flex justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
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
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                  </div>
                </div>
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
              onClick={() => window.location.href = 'mailto:santhosh.appan@example.com'}
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
