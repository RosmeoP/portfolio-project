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
            showDetails ? 'max-h-[48rem]' : 'max-h-0'
          }`}>
            <div className="pt-4 md:pt-6 border-t space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 flex items-center gap-2">
                  <Code2 size={20} />
                  Project Details
                </h3>
                <p className="text-gray-600 text-base md:text-lg mb-6">{project.longDescription}</p>
              </div>

              {project.challenge && (
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Challenge</h4>
                    <p className="text-red-700 text-sm">{project.challenge}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Solution</h4>
                    <p className="text-blue-700 text-sm">{project.solution}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Impact</h4>
                    <p className="text-green-700 text-sm">{project.impact}</p>
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-medium mb-3">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.technologies?.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 md:px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-4 md:mt-6">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              {showDetails ? '↑ Show Less Details' : '↓ Learn More About This Project'}
            </button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 md:gap-4 mt-4 lg:mt-0">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-sm md:text-base font-semibold"
          >
            <span>View Live Project</span>
            <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 text-sm md:text-base font-semibold"
          >
            <Github size={16} className="md:w-[18px] md:h-[18px]" />
            <span>View Code</span>
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
      category: 'MOBILE / WEB APP',
      description: 'Real-time weather tracking with elegant UI/UX design',
      longDescription: 'A minimalist weather application that delivers accurate forecasts with stunning visual design. Features include real-time weather data, 5-day forecasting, location-based services, and adaptive day/night themes. Built with a focus on performance and user experience, this app demonstrates my ability to create intuitive interfaces that users love to interact with daily.',
      technologies: ['Swift', 'SwiftUI', 'Weather API', 'Core Location'],
      challenge: 'Creating an intuitive interface that displays complex weather data clearly',
      solution: 'Implemented adaptive theming and progressive data loading',
      impact: 'Improved user engagement with clean, accessible design',
      githubUrl: 'https://github.com/RosmeoP/WeatherApp.git',
      demoUrl: 'https://weather-vhub.vercel.app/'
    },
    {
      id: '02',
      title: 'Personal Blog Platform',
      category: 'FULL-STACK WEB APP',
      description: 'Modern blogging platform with content management system',
      longDescription: 'A comprehensive blogging platform built from the ground up, featuring a custom CMS, SEO optimization, and responsive design. This project showcases my full-stack development skills, from database design to user interface creation. The platform includes features like markdown support, tag management, comment system, and analytics dashboard.',
      technologies: ['Next.js', 'Node.js', 'React', 'Tailwind CSS', 'MongoDB', 'Prisma'],
      challenge: 'Building a scalable content management system with SEO optimization',
      solution: 'Implemented server-side rendering and automated sitemap generation',
      impact: 'Achieved 95+ PageSpeed scores and improved content discoverability',
      githubUrl: 'https://github.com/RosmeoP/myBlog.git',
      demoUrl: 'https://rosmeo-blog.vercel.app/'
    },
    {
      id: '03',
      title: 'JWT Authentication API',
      category: 'BACKEND / API',
      description: 'Enterprise-grade authentication service with comprehensive documentation',
      longDescription: 'A production-ready authentication API that provides secure user management for modern applications. Features include JWT token management, password encryption, email verification, role-based access control, and comprehensive API documentation. This project demonstrates my expertise in backend security, API design patterns, and DevOps practices including containerization and deployment automation.',
      technologies: ['Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'Swagger', 'Docker', 'Render'],
      challenge: 'Creating a secure, scalable authentication system for multiple applications',
      solution: 'Implemented JWT with refresh tokens, rate limiting, and comprehensive security headers',
      impact: 'Reduced authentication setup time for new projects by 80%',
      githubUrl: 'https://github.com/RosmeoP/jwt-auth-api',
      demoUrl: 'https://jwt-auth-api-650a.onrender.com/'
    },
    {
      id: '04',
      title: 'Task Management System',
      category: 'PRODUCTIVITY WEB APP',
      description: 'Collaborative project management tool with real-time updates',
      longDescription: 'A sophisticated task management application designed for teams and individuals who need to organize complex projects. Features include drag-and-drop task boards, real-time collaboration, deadline tracking, file attachments, and detailed analytics. Built with modern web technologies to ensure fast performance and seamless user experience across all devices.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      challenge: 'Building real-time collaboration features with offline support',
      solution: 'Implemented WebSocket connections with intelligent data synchronization',
      impact: 'Improved team productivity by 40% through better task organization',
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
      <div className="text-center mt-16">
        <button
          className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-semibold text-lg"
          aria-label="View all projects"
          onClick={openFile}
        >
          <span>Explore All Projects</span>
          <ArrowRight size={24} />
        </button>
        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          Discover more projects showcasing different technologies and problem-solving approaches
        </p>
      </div>
    </div>
  );
};

export default ProjectShowcase;