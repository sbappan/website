import { Navbar } from '@/components';
import { SectionWrapper } from '@/components/ui';
import { Button } from '@/components/ui';
import { ArrowRight, Download } from 'lucide-react';

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
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Full-stack developer specializing in building exceptional digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            <Button
              variant="outline"
              size="lg"
              icon={Download}
              iconPosition="left"
              onClick={() => alert('Resume download functionality to be implemented')}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper
        id="about"
        title="About Me"
        subtitle="Get to know more about my background and experience"
        background="gradient"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            This is a placeholder for your about section. Here you can share your story,
            background, and what drives you as a developer.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Talk about your journey into software development, your passions, and what makes
            you unique. This section will be populated with your actual content in Phase 3.
          </p>
          <p className="text-lg text-gray-700">
            You can also mention your approach to problem-solving, favorite technologies,
            and what you're currently learning or excited about.
          </p>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper
        id="projects"
        title="Featured Projects"
        subtitle="A selection of my recent work and side projects"
        background="default"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder project cards */}
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Project {project}
              </h3>
              <p className="text-gray-600 mb-4">
                This is a placeholder for your project description. It will showcase your
                work and accomplishments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                  Tailwind
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper
        id="skills"
        title="Skills & Technologies"
        subtitle="Tools and technologies I work with"
        background="gradient"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Other</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'AWS', 'Figma', 'VS Code'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper
        id="contact"
        title="Get In Touch"
        subtitle="Let's work together on your next project"
        background="default"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            I'm currently available for freelance work and open to discussing new opportunities.
            Feel free to reach out if you'd like to collaborate or just want to say hello!
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.location.href = 'mailto:your.email@example.com'}
          >
            Send Me an Email
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Your Name. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default App;
