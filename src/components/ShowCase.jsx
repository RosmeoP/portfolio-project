import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ project, isVisible, index }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full mb-16 p-8 transition-all duration-300 z-10 ${index % 2 === 0 ? 'bg-gray-400/10' : 'bg-white'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-9">
          <span className="text-sm text-gray-400">{project.id}</span>
          <h2 className="text-4xl font-light mb-4">{project.title}</h2>
          <p className="text-sm text-gray-600 uppercase mb-2">{project.category}</p>
          <p className="text-gray-500 mb-6 text-lg">{project.description}</p>
          
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showDetails ? 'max-h-96' : 'max-h-0'}`}>
            <div className="pt-6 border-t">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Code2 size={20} />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies?.map(tech => (
                  <span key={tech} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-lg">{project.longDescription}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="text-base text-gray-600 hover:text-gray-900 transition-colors"
            >
              {showDetails ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <div className="flex flex-col gap-4">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              <span>Live Demo</span>
              <ExternalLink size={18} />
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <Github size={18} />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>

      {isVisible && (
        <div 
          className={`absolute right-5 top-0 w-40 h-40 bg-gray-200/50 rounded-full transition-all duration-500 ease-in-out ${isHovered ? 'scale-125' : 'scale-100'}`}
          style={{ zIndex: -1 }}
        />
      )}
      


    </div>
    
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      id: '01',
      title: 'Project One',
      category: 'UI / UX',
      description: 'Design system and user experience',
      longDescription: 'A comprehensive design system built for scale, featuring customizable components and detailed documentation.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: '02',
      title: 'Project Two',
      category: 'WEB APP',
      description: 'Full-stack web application',
      longDescription: 'Real-time collaboration platform with features like live editing, commenting, and version control.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: '03',
      title: 'Project Three',
      category: 'MOBILE APP',
      description: 'Cross-platform mobile application',
      longDescription: 'A mobile app that helps users track their habits and achieve their goals through gamification.',
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: '04',
      title: 'Project Four',
      category: 'WEB APP',
      description: 'E-commerce platform',
      longDescription: 'An e-commerce platform with features like product search, reviews, and payment processing.',
      technologies: ['Vue.js', 'Django', 'Stripe', 'Elasticsearch'],
      githubUrl: '#',
      demoUrl: '#'
    }

  ];

  return (
    <div className="w-full px-4 mt-16">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          isVisible={true}
          index={index}
        />
      ))}
      <button 
      className="absolute left-40 bottom-4 z-50 p-2 pt-8 pb-5"
      aria-label="View all projects"
    >
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold">View all projects</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="34" 
          height="34" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          // className="animate-bounce"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </button>
    </div>
    
  );
};

export default ProjectShowcase;