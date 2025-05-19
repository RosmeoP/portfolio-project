import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, isVisible, index }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full mb-8 md:mb-16 p-4 md:p-8 transition-all duration-300 z-10 ${
        index % 2 === 0 ? 'bg-gray-400/10' : 'bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 lg:col-span-9">
          <span className="text-sm text-gray-400">{project.id}</span>
          <h2 className="text-2xl md:text-4xl font-light mb-2 md:mb-4">{project.title}</h2>
          <p className="text-sm text-gray-600 uppercase mb-2">{project.category}</p>
          <p className="text-gray-500 mb-4 md:mb-6 text-base md:text-lg">{project.description}</p>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showDetails ? 'max-h-[32rem]' : 'max-h-0'
          }`}>
            <div className="pt-4 md:pt-6 border-t">
              <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 flex items-center gap-2">
                <Code2 size={20} />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                {project.technologies?.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 md:px-4 py-1 md:py-2 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-base md:text-lg">{project.longDescription}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-4 md:mt-6">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors"
            >
              {showDetails ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 md:gap-4 mt-4 lg:mt-0">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm md:text-base"
          >
            <span>Live Demo</span>
            <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-sm md:text-base"
          >
            <Github size={16} className="md:w-[18px] md:h-[18px]" />
            <span>Source Code</span>
          </a>
        </div>
      </div>

      {isVisible && (
        <div
          className={`absolute right-2 md:right-5 top-0 w-24 md:w-40 h-24 md:h-40 bg-gray-200/50 rounded-full transition-all duration-500 ease-in-out ${
            isHovered ? 'scale-125' : 'scale-100'
          }`}
          style={{ zIndex: -1 }}
        />
      )}
    </div>
  );
};

const ProjectShowcase = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: '01',
      title: 'Weather App',
      category: 'APP / UI / UX',
      description: 'Design system and user experience',
      longDescription: 'A minimalist iOS weather application with day and night modes, showing real-time temperature and 5-day forecast for your location.',
      technologies: ['Swift', 'SwiftUI', 'Weather API'],
      githubUrl: 'https://github.com/RosmeoP/WeatherApp.git',
      demoUrl: 'https://weather-vhub.vercel.app/'
    },
    {
      id: '02',
      title: 'Personal Blog',
      category: 'WEB APP',
      description: 'Blog platform',
      longDescription: 'A personal minimalist blog platform with a focus on writing and sharing ideas. Built with Next.js and Node.js.',
      technologies: ['Next.js', 'Node.js', 'React', 'Tailwind CSS', 'Git'],
      githubUrl: 'https://github.com/RosmeoP/myBlog.git',
      demoUrl: 'https://rosmeo-blog.vercel.app/'
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

  const openFile = () => {
    navigate('/projects');
  };

  return (
    <div className="w-full px-2 md:px-4 mt-8 md:mt-16">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          isVisible={true}
          index={index}
        />
      ))}
      <button
        className=" md:absolute left-4 md:left-40 bottom-4 p-2 md:pt-8 md:pb-5 bg-white md:bg-transparent"
        aria-label="View all projects"
        onClick={openFile}
      >
        <div className="flex items-center gap-2">
          <span className=" text-xl md:text-3xl font-bold">View all projects</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 md:w-8 md:h-8"
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