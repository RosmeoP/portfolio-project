import NavBar from '../components/NavBar';
import TiltedCard from '../components/TiltedCard'; 
import rosmeoImage from '../img/rosmeo.jpg';
import LogoWall from '../components/LogoWall';
import React, { useEffect } from 'react'
import BlurText from '../components/BlurText';
import { Skills } from './Skills';

const logoImgs = [
  { altText: "React" },
  { altText: "JavaScript" },
  { altText: "Python" },
  { altText: "Swift" },
  { altText: "Next.js" },
  { altText: "HTML5" },
  { altText: "CSS3" },
  { altText: "Node" },
  { altText: "Git" },
  { altText: "Tailwind Css"},
  { altText: "MongoDB"},
  { altText: "Sql Server"},
];



const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="pt-20 bg-gradient-to-b from-slate-50 to-white min-h-screen relative overflow-hidden">
        <div className="absolute top-20 right-20 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-1 h-1 bg-purple-500 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-15 blur-xl animate-float-delayed"></div>
        
        <div className="flex items-center fixed left-0 h-screen z-50">
          <h1
            className="hidden lg:block text-lg text-gray-400 ml-5 font-medium text-center mb-8 transition-colors duration-300 hover:text-gray-600"
            style={{ writingMode: 'vertical-rl', textOrientation: 'sideways-lr', transform: 'rotate(180deg)' }}
          >
            About
          </h1>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-20">
            <div className="max-w-lg group">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 transform transition-all duration-700 group-hover:w-20 relative overflow-hidden animate-glow-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 animate-shimmer"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight transition-all duration-500 group-hover:text-gray-700 group-hover:transform group-hover:scale-105 cursor-default">
                <span className="inline-block transition-all duration-300 hover:text-blue-600 hover:scale-110 hover:-rotate-1 group-hover:translate-x-1">Crafting</span>{' '}
                <span className="inline-block transition-all duration-300 delay-75 hover:text-purple-600 hover:scale-110 hover:rotate-1 group-hover:translate-x-1">Digital</span>{' '}
                <span className="inline-block transition-all duration-300 delay-150 hover:text-indigo-600 hover:scale-110 hover:-rotate-1 group-hover:translate-x-1">Solutions</span>
                <span className="block font-medium text-gray-700 mt-2 transition-all duration-500 group-hover:text-blue-600 group-hover:transform group-hover:translate-x-2 hover:scale-105">
                  Through Clean Code
                </span>
              </h1>
              <p className="text-gray-600 text-xl leading-relaxed transition-all duration-500 group-hover:text-gray-800 group-hover:transform group-hover:translate-y-1 relative overflow-hidden">
                <span className="relative z-10">Building innovative systems that solve real-world problems with thoughtful design and scalable architecture.</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              </p>
            </div>

            <div className="flex flex-col items-center mr-0 md:mr-[100px] w-full md:w-auto">
  <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
    <img 
      src={rosmeoImage}
      alt="Rosmeo Villalobos"
      className="w-full h-full object-cover object-center"
    />
  </div>
  <p className="mt-4 text-gray-700 font-medium text-center">Rosmeo Villalobos</p>
</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-slate-50 to-gray-100 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full opacity-30 blur-sm animate-float"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-25 blur-md animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full opacity-20 blur-lg animate-float"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block relative group cursor-pointer">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 transition-all duration-500 group-hover:text-gray-700 group-hover:scale-105 relative overflow-hidden">
                  <span className="relative z-10">About Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                </h2>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-24 animate-glow-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-16 mb-20">
              <div className="group text-center cursor-pointer">
                <div className="relative p-8 transition-all duration-500 hover:transform hover:-translate-y-4 hover:rotate-2 hover:scale-105">
                  <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-400 transform group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl opacity-0 group-hover:opacity-60 transition-all duration-400"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-6 transition-all duration-400 group-hover:scale-150 group-hover:shadow-xl relative animate-glow-pulse">
                      <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping group-hover:animate-none"></div>
                      <div className="absolute inset-0 bg-blue-300 rounded-full animate-pulse group-hover:animate-bounce"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300 group-hover:text-blue-700 group-hover:scale-110">Education</h3>
                    <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-gray-900 group-hover:font-semibold">Software Engineering</p>
                    <p className="text-gray-500 text-sm mt-1 transition-all duration-300 group-hover:text-gray-700 group-hover:font-medium">Univo • 2023 - Present</p>
                  </div>
                </div>
              </div>

              <div className="group text-center cursor-pointer">
                <div className="relative p-8 transition-all duration-500 hover:transform hover:-translate-y-4 hover:-rotate-2 hover:scale-105">
                  <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-400 transform group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl opacity-0 group-hover:opacity-60 transition-all duration-400"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-6 transition-all duration-400 group-hover:scale-150 group-hover:shadow-xl relative animate-glow-pulse">
                      <div className="absolute inset-0 bg-purple-400 rounded-full animate-pulse group-hover:animate-none"></div>
                      <div className="absolute inset-0 bg-purple-300 rounded-full animate-ping group-hover:animate-bounce"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300 group-hover:text-purple-700 group-hover:scale-110">Experience</h3>
                    <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-gray-900 group-hover:font-semibold">Self-taught Developer</p>
                    <p className="text-gray-500 text-sm mt-1 transition-all duration-300 group-hover:text-gray-700 group-hover:font-medium">Full-Stack • 2+ Years</p>
                  </div>
                </div>
              </div>

              <div className="group text-center cursor-pointer">
                <div className="relative p-8 transition-all duration-500 hover:transform hover:-translate-y-4 hover:rotate-2 hover:scale-105">
                  <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-400 transform group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-xl opacity-0 group-hover:opacity-60 transition-all duration-400"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-6 transition-all duration-400 group-hover:scale-150 group-hover:shadow-xl relative animate-glow-pulse">
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-bounce group-hover:animate-none"></div>
                      <div className="absolute inset-0 bg-green-300 rounded-full animate-pulse group-hover:animate-ping"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300 group-hover:text-green-700 group-hover:scale-110">Focus</h3>
                    <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-gray-900 group-hover:font-semibold">Web Applications</p>
                    <p className="text-gray-500 text-sm mt-1 transition-all duration-300 group-hover:text-gray-700 group-hover:font-medium">Modern Stack • APIs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div className="group p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:rounded-2xl hover:scale-[1.02] cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <p className="text-2xl font-light text-gray-800 leading-relaxed text-center transition-all duration-300 group-hover:text-gray-900 relative z-10">
                  Hi, I'm <span className="font-semibold text-gray-900 transition-all duration-300 group-hover:text-blue-600 hover:scale-105 inline-block hover:rotate-1">Rosmeo Mauricio Villalobos Parada</span>, 
                  a software engineering student based in El Salvador. I'm passionate about creating innovative solutions and building systems that solve real-world problems.
                </p>
              </div>

              <div className="group p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:rounded-2xl hover:scale-[1.02] cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <p className="text-xl font-light text-gray-700 leading-relaxed text-center transition-all duration-300 group-hover:text-gray-900 relative z-10">
                  Currently studying at <span className="font-semibold text-gray-900 hover:text-purple-600 transition-colors duration-200">Univo</span> while continuously learning new technologies as a self-taught developer. 
                  I work with <span className="font-medium text-blue-600 hover:scale-110 hover:text-blue-700 transition-all duration-200 inline-block">Python</span>, <span className="font-medium text-blue-600 hover:scale-110 hover:text-blue-700 transition-all duration-200 inline-block">JavaScript</span>, <span className="font-medium text-blue-600 hover:scale-110 hover:text-blue-700 transition-all duration-200 inline-block">Swift</span>, and modern frameworks like 
                  <span className="font-medium text-blue-600 hover:scale-110 hover:text-blue-700 transition-all duration-200 inline-block"> React</span>, <span className="font-medium text-blue-600 hover:scale-110 hover:text-blue-700 transition-all duration-200 inline-block">Next.js</span>, <span className="font-medium text-blue-600 hover:scale-110 hover:text-blue-700 transition-all duration-200 inline-block">Express</span>, <span className="font-medium text-blue-600 hover:scale-110 hover:text-blue-700 transition-all duration-200 inline-block">Flask</span>, and <span className="font-medium text-blue-600 hover:scale-110 hover:text-blue-700 transition-all duration-200 inline-block">SwiftUI</span> to build full-stack applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Skills/>

      <LogoWall
        items={logoImgs}
        direction="horizontal"
        pauseOnHover={true}
        size="clamp(8rem, 1rem + 20vmin, 25rem)"
        duration="60s"
        bgColor="#060606"
        bgAccentColor="#111111"
      />
    </div>
  );
};

export default About;