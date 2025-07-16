import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, } from 'lucide-react';
import NavBar from "../components/NavBar";
import blogImg from "../img/blogImg.png";
import ApiSite from "../img/ApiSite.png";
import pomoDoro from "../img/pomoDoro.png";
import expenseTracker from "../img/expense-tracker.png";

const ProjectItem = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-10%" }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, delay: index * 0.2 }}
        viewport={{ once: true }}
      />

      {/* Content Container */}
      <div className="relative pl-8 md:pl-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Project Header */}
          <motion.div 
            className="flex items-center gap-6 mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl md:text-8xl font-light text-gray-200 group-hover:text-gray-300 transition-all duration-500">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="h-16 w-px bg-gray-200 group-hover:bg-gray-300 transition-colors duration-500" />
            <div>
              <motion.div 
                className="flex items-center gap-3 mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {project.category}
                </span>
                <div className="w-4 h-px bg-gray-300" />
                <span className="text-xs text-gray-400 font-medium">
                  {project.year}
                </span>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              <motion.h2 
                className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight group-hover:text-gray-700 transition-colors duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 + 0.1 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              {/* Technologies */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies?.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.4 + i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                viewport={{ once: true }}
              >
                {project.comingSoon ? (
                  <motion.div
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-medium shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Coming Soon</span>
                  </motion.div>
                ) : (
                  <>
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Live</span>
                      <motion.div
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink size={18} />
                      </motion.div>
                    </motion.a>
                    
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 border-2 border-gray-200 rounded-2xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={18} />
                      <span>Source</span>
                    </motion.a>
                  </>
                )}
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div 
              className="relative group/image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
              viewport={{ once: true }}
            >
              {/* Background decoration */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-gray-100 via-gray-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ rotate: isHovered ? [0, 1, 0] : 0 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Image container */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl group-hover/image:shadow-2xl transition-all duration-500 bg-white"
                whileHover={{ y: -8, rotateY: 5 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Floating preview button or Coming Soon overlay */}
                {project.comingSoon ? (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className="text-center text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-3"
                      />
                      <p className="text-lg font-medium">In Development</p>
                      <p className="text-sm text-white/80 mt-1">2025</p>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={24} className="text-gray-900" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Expense Tracker",
      category: "FULL-STACK APP",
      year: "2025",
      description: "A comprehensive expense tracking application with real-time analytics, budget management, and insightful financial reporting. Built with modern full-stack technologies for optimal performance.",
      technologies: ["TypeScript", "React", "Next.js", "Express", "MongoDB", "Tailwind CSS", "Docker", "pnpm"],
      image: expenseTracker,
      demoUrl: "#",
      githubUrl: "#",
      comingSoon: true
    },
    {
      title: "Weather Hub",
      category: "APP / UI / UX",
      year: "2025",
      description: "A minimalist iOS weather application with day and night modes, showing real-time temperature and 5-day forecast for your location.",
      technologies: ["Swift", "SwiftUI", "Weather API"],
      image: "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024",
      demoUrl: "https://weather-vhub.vercel.app/",
      githubUrl: "https://github.com/RosmeoP/WeatherApp.git"
    },
    {
      title: "Personal Blog",
      category: "Web Development",
      year: "2025",
      description: "Simple and elegant personal blog platform with a focus on writing and sharing ideas, featuring a clean design and easy navigation.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Markdown", "Git"],
      image: blogImg,
      demoUrl: "https://rosmeo-blog.vercel.app/",
      githubUrl: "https://github.com/RosmeoP/myBlog.git"
    },
    {
      title: "JWT Auth API",
      category: "API / BACKEND",
      year: "2025",
      description: "A secure JWT-based authentication API with user registration, login, token validation, and Google OAuth integration. Features email verification, MongoDB storage, and comprehensive documentation.",
      technologies: ["Node.js", "Express", "MongoDB Atlas", "JWT", "Swagger", "Docker", "pnpm"],
      image: ApiSite,
      demoUrl: "https://jwt-auth-api-650a.onrender.com/",
      githubUrl: "https://github.com/RosmeoP/jwt-auth-api"
    },
    {
      title: "Pomodoro Timer",
      category: "WEB APP",
      year: "2025",
      description: "A simple and effective Pomodoro timer web application to boost productivity, featuring customizable work and break intervals.",
      technologies: ["React", "Tailwind CSS", "Local Storage"],
      image: pomoDoro,
      demoUrl: "https://pomodoro-pi-weld.vercel.app/",
      githubUrl: "https://github.com/RosmeoP/my-pomodoro"
    }
  ];
  

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #f3f4f6 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-0">
        <NavBar />
        
        {/* Sidebar Text */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block text-lg text-gray-300 font-light tracking-[0.3em] pl-5 text-center mb-8 fixed left-4 top-1/2 transform -translate-y-1/2 z-50"
          style={{ writingMode: 'vertical-rl', textOrientation: 'sideways-lr', transform: 'rotate(180deg)' }}
        >
          WORKS
        </motion.h1>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-gray-600 bg-gray-100 rounded-full">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
              FEATURED PROJECTS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 leading-[0.85]">
              Selected
              <br />
              <span className="text-gray-400">Works</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-light"
          >
            A curated collection of projects that showcase innovation, 
            clean design, and thoughtful user experiences.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-400 tracking-wider font-medium">SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
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