import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

 
 
  const socialLinks = [
    { name: 'Email', url: 'mailto:rosmeo43@gmail.com', icon: Mail },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mauricio-parada-a67470267/', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/RosmeoP', icon: Github },
    { name: 'Twitter', url: 'https://x.com/rosmeo0', icon: Twitter },
    { name: 'Instagram', url: 'https://www.instagram.com/rosmeoo/', icon: Instagram },
  ];

  return (
    <div ref={ref} className="min-h-screen bg-black relative overflow-hidden px-4">
      <motion.div
        animate={isInView ? {
          rotate: 360,
          scale: [1, 1.2, 1],
        } : {}}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={isInView ? {
          rotate: -360,
          scale: [1, 1.3, 1],
        } : {}}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-[#f8f8f8]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={isInView ? {
          rotate: 180,
          scale: [1, 1.4, 1],
        } : {}}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 right-1/3 w-24 md:w-48 h-24 md:h-48 bg-white/10 rounded-full blur-3xl"
      />
      
      <footer className="relative flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto space-y-8 py-12">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-1/3 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center px-4"
        >
          <span className="text-white">Let's work</span>
          <br />
          <span className="text-white">together.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-base sm:text-lg md:text-xl text-center max-w-2xl px-4"
        >
          Ready to bring your vision to life? Let's create something extraordinary.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-8 w-full sm:w-auto px-4"
        >
         // In your Footer component, modify the button to:
         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Link 
    to="/contact"
    className="group relative flex items-center justify-center gap-2 text-black bg-white border border-white/20 px-8 py-4 rounded-full overflow-hidden hover:bg-[#f8f8f8] transition-all duration-300 w-full sm:w-auto"
  >
    <span className="relative z-10">Start a project</span>
  </Link>
</motion.div>
          
          <motion.a 
            whileHover={{ x: 5 }}
            href="/projects" 
            className="text-white hover:text-[#f8f8f8] transition-colors duration-300"
          >
            View my work →
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 px-4"
        >
          {socialLinks.map((platform) => (
            <motion.a
              key={platform.name}
              whileHover={{ y: -3 }}
              target='_blank'
              rel='noopener noreferrer'
              href={platform.url}
              className="flex items-center gap-2 text-white hover:text-[#f8f8f8] transition-colors duration-300 text-sm sm:text-base"
            >
              <platform.icon size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">{platform.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 text-white/60 text-xs sm:text-sm text-center px-4"
        >
          © {currentYear} Romeo Villalobos. All rights reserved.
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;