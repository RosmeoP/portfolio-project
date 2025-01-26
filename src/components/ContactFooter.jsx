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
    <footer className="bg-black text-white py-4 h-64 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-200/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div className="flex items-center gap-8">
          <span className="text-xl font-light">© {currentYear} Rosmeo Vilalobos</span>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
              aria-label={link.name}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;