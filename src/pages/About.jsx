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
        <div className="absolute bottom-40 left-10 w-1 h-1 bg-purple-500 rounded-full opacity-40"></div>
        
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
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 transform transition-all duration-700 group-hover:w-16"></div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight transition-all duration-300 group-hover:text-gray-700">
                Crafting Digital Solutions
                <span className="block font-medium text-gray-700 mt-2 transition-colors duration-300 group-hover:text-blue-600">
                  Through Clean Code
                </span>
              </h1>
              <p className="text-gray-600 text-xl leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                Building innovative systems that solve real-world problems with thoughtful design and scalable architecture.
              </p>
            </div>

            <div className="flex flex-col items-center mr-0 md:mr-[100px]">
  <TiltedCard
    imageSrc={rosmeoImage}
    altText="Rosmeo Villalobos"
    captionText="Rosmeo Villalobos"
    containerHeight="250px"
    containerWidth="250px"
    imageHeight="400px"
    imageWidth="220px"
    rotateAmplitude={12}
    scaleOnHover={1.1}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text text-center">
        Rosmeo Villalobos
      </p>
    }
  />
</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-slate-50 to-gray-100 py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block relative">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 transition-all duration-300 hover:text-gray-700">
                  About Me
                </h2>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 hover:w-20"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-16 mb-20">
              <div className="group text-center">
                <div className="relative p-8 transition-all duration-400 hover:transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-6 transition-all duration-400 group-hover:scale-150 group-hover:shadow-lg"></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
                    <p className="text-gray-700 font-medium">Software Engineering</p>
                    <p className="text-gray-500 text-sm mt-1">Univo • 2023 - Present</p>
                  </div>
                </div>
              </div>

              <div className="group text-center">
                <div className="relative p-8 transition-all duration-400 hover:transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-6 transition-all duration-400 group-hover:scale-150 group-hover:shadow-lg"></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Experience</h3>
                    <p className="text-gray-700 font-medium">Self-taught Developer</p>
                    <p className="text-gray-500 text-sm mt-1">Full-Stack • 2+ Years</p>
                  </div>
                </div>
              </div>

              <div className="group text-center">
                <div className="relative p-8 transition-all duration-400 hover:transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-6 transition-all duration-400 group-hover:scale-150 group-hover:shadow-lg"></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Focus</h3>
                    <p className="text-gray-700 font-medium">Web Applications</p>
                    <p className="text-gray-500 text-sm mt-1">Modern Stack • APIs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div className="group p-10 transition-all duration-400 hover:bg-white hover:shadow-xl hover:rounded-2xl">
                <p className="text-2xl font-light text-gray-800 leading-relaxed text-center transition-colors duration-300 group-hover:text-gray-900">
                  Hi, I'm <span className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">Rosmeo Mauricio Villalobos Parada</span>, 
                  a software engineering student based in El Salvador. I'm passionate about creating innovative solutions and building systems that solve real-world problems.
                </p>
              </div>

              <div className="group p-10 transition-all duration-400 hover:bg-white hover:shadow-xl hover:rounded-2xl">
                <p className="text-xl font-light text-gray-700 leading-relaxed text-center transition-colors duration-300 group-hover:text-gray-900">
                  Currently studying at <span className="font-semibold text-gray-900">Univo</span> while continuously learning new technologies as a self-taught developer. 
                  I work with <span className="font-medium text-blue-600">Python</span>, <span className="font-medium text-blue-600">JavaScript</span>, <span className="font-medium text-blue-600">Swift</span>, and modern frameworks like 
                  <span className="font-medium text-blue-600"> React</span>, <span className="font-medium text-blue-600">Next.js</span>, <span className="font-medium text-blue-600">Express</span>, <span className="font-medium text-blue-600">Flask</span>, and <span className="font-medium text-blue-600">SwiftUI</span> to build full-stack applications.
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