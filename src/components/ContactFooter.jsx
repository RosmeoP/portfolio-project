import React from 'react';
import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const ContactFooter = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Email', url: 'mailto:rosmeo43@gmail.com', icon: Mail },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mauricio-parada-a67470267/', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/RosmeoP', icon: Github },
    { name: 'Twitter', url: 'https://x.com/rosmeo0', icon: Twitter },
    { name: 'Instagram', url: 'https://www.instagram.com/rosmeoo/', icon: Instagram },
  ];

  return (
    <footer className="bg-black text-white py-8 md:py-4 min-h-[12rem] md:h-64 relative overflow-hidden">
      {/* Background elements - adjusted size for mobile */}
      <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-gray-200/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <span className="text-base md:text-xl font-light text-center md:text-left whitespace-nowrap">
            © {currentYear} Rosmeo Vilalobos
          </span>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity p-2 md:p-0"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;