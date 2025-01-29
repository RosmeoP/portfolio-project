import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, } from 'lucide-react';
import NavBar from "../components/NavBar";

const ProjectItem = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative border-b border-gray-800/10 py-12 md:py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Project Info */}
          <motion.div 
            className="col-span-1 md:col-span-8 flex flex-col md:flex-row md:items-start relative z-10"
            animate={{
              x: window.innerWidth >= 768 && isHovered ? [-40, 0] : 0,
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
          >
            <span className="text-sm text-gray-400 mb-4 md:mb-0 md:w-12">{String(index + 1).padStart(2, '0')}</span>
            
            <div className="flex-1">
              <motion.div 
                className="flex items-center gap-3 mb-2"
                animate={{
                  opacity: window.innerWidth >= 768 && isHovered ? 0.7 : 1,
                  x: window.innerWidth >= 768 && isHovered ? [10, 0] : 0,
                  transition: { duration: 0.3 }
                }}
              >
                <span className="text-sm uppercase tracking-wider text-gray-500">
                  {project.category}
                </span>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <span className="text-sm text-gray-500">
                  {project.year}
                </span>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-7xl font-light mb-4 md:mb-6 text-gray-800"
                animate={{
                  opacity: window.innerWidth >= 768 && isHovered ? 1 : 0.8,
                  scale: window.innerWidth >= 768 && isHovered ? [1.05, 1] : 1,
                  transition: { duration: 0.5 }
                }}
              >
                {project.title}
              </motion.h2>

              <motion.p
                className="text-base md:text-lg text-gray-600 max-w-2xl mb-6 md:mb-8"
                animate={{
                  opacity: window.innerWidth >= 768 && isHovered ? 1 : 0.7,
                  x: window.innerWidth >= 768 && isHovered ? [10, 0] : 0,
                  transition: { duration: 0.4 }
                }}
              >
                {project.description}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8"
                animate={{
                  opacity: window.innerWidth >= 768 && isHovered ? 1 : 0.6,
                  transition: { duration: 0.3 }
                }}
              >
                {project.technologies?.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={window.innerWidth >= 768 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: window.innerWidth >= 768 ? i * 0.1 : 0 }}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <AnimatePresence>
                {isHovered && window.innerWidth >= 768 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex flex-col sm:flex-row gap-3 md:gap-4"
                  >
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <Github size={16} />
                      <span>Source</span>
                    </motion.a>
                  </motion.div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 md:hidden">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 rounded-full"
                    >
                      <Github size={16} />
                      <span>Source</span>
                    </a>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Project Image - Only shown on desktop */}
          <div className="hidden md:block col-span-1 md:col-span-4 relative h-[300px] md:h-[400px] mt-6 md:mt-0">
            <AnimatePresence>
              {isHovered && (
                <div className="absolute inset-0">
                  {/* Gray background div */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                      y: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="absolute inset-0 bg-gray-300 rounded-xl shadow-lg"
                    style={{
                      width: '105%',
                      height: '90%',
                      top: '15%',
                      left: '-20%'
                    }}
                  />

                  {/* Image */}
                  <motion.div
                    className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.4,
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "booz player",
      category: "UI / UX",
      year: "2024",
      description: "A sophisticated music streaming platform that redefines the listening experience with intuitive controls and seamless playback.",
      technologies: ["React", "Node.js", "Spotify API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "codebook",
      category: "WEB APP",
      year: "2023",
      description: "Full-stack web application",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "WebSocket"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      demoUrl: "#",
      githubUrl: "#"

    },
    {
      title: "task flow",
      category: "PRODUCTIVITY",
      year: "2024",
      description: "A minimalist task management system with drag-and-drop workflows, automated prioritization, and team collaboration features.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "weather hub",
      category: "WEB APP",
      year: "2024",
      description: "A beautiful weather visualization platform featuring real-time updates, interactive radar maps, and detailed forecast analytics.",
      technologies: ["React", "Node.js", "OpenWeather API", "Chart.js"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];
  

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 md:py-0">
        <NavBar />
        <h1
          className="hidden md:block text-lg text-gray-300 font-bold pl-5 text-center mb-8 fixed left-4 top-1/2 transform -translate-y-1/2 z-50"
          style={{ writingMode: 'vertical-rl', textOrientation: 'sideways-lr', transform: 'rotate(180deg)' }}>
          Contact
        </h1>
        <div className="max-w-4xl mx-auto text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-sm font-medium tracking-wider text-black/70 bg-white rounded-full shadow-sm">
              FEATURED WORK
            </span>
          </motion.div>

          {/* Animated line */}
          <div className="relative w-full flex justify-center mb-8">
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="absolute w-16 sm:w-24 h-px bg-black/20"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-2 h-2 rounded-full bg-black/40"
            />
            <motion.div
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="absolute w-16 sm:w-24 h-px bg-black/20"
            />
          </div>

          
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black"
          >
            Crafting Digital
            <br />
            Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-black/70 px-4"
          >
            A collection of carefully designed projects that push the boundaries
            of digital innovation and user experience.
          </motion.p>
          
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-12 md:py-20">
        {projects.map((project, index) => (
          <ProjectItem 
            key={index} 
            project={project} 
            index={index} 
          />
        ))}
      </section>
    </div>
  );
};

export default Portfolio;