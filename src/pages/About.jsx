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
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 transform transition-all duration-500 group-hover:w-12"></div>
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-tight transition-all duration-300 group-hover:text-gray-700">
                Crafting Digital Solutions
                <span className="block font-normal text-gray-600 transition-colors duration-300 group-hover:text-blue-600">
                  Through Clean Code
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed transition-all duration-300 group-hover:text-gray-700">
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
            <div className="text-center mb-16">
              <div className="inline-block relative">
                <h2 className="text-4xl font-light text-gray-900 mb-4 transition-all duration-300 hover:text-gray-700">
                  About Me
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 hover:w-16"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="group text-center">
                <div className="relative p-6 transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-white rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:scale-125"></div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Education</h3>
                    <p className="text-gray-600 text-sm">Software Engineering</p>
                    <p className="text-gray-500 text-sm">Univo • 2023 - Present</p>
                  </div>
                </div>
              </div>

              <div className="group text-center">
                <div className="relative p-6 transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-white rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:scale-125"></div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Experience</h3>
                    <p className="text-gray-600 text-sm">Self-taught Developer</p>
                    <p className="text-gray-500 text-sm">Full-Stack • 2+ Years</p>
                  </div>
                </div>
              </div>

              <div className="group text-center">
                <div className="relative p-6 transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-white rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:scale-125"></div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Focus</h3>
                    <p className="text-gray-600 text-sm">Web Applications</p>
                    <p className="text-gray-500 text-sm">Modern Stack • APIs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="group p-8 transition-all duration-300 hover:bg-white hover:shadow-lg hover:rounded-lg">
                <p className="text-xl font-light text-gray-700 leading-relaxed text-center transition-colors duration-300 group-hover:text-gray-900">
                  Hi, I'm <span className="font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600">Rosmeo Mauricio Villalobos Parada</span>, 
                  a software engineering student based in El Salvador. I'm passionate about creating innovative solutions and building systems that solve real-world problems.
                </p>
              </div>

              <div className="group p-8 transition-all duration-300 hover:bg-white hover:shadow-lg hover:rounded-lg">
                <p className="text-lg font-light text-gray-600 leading-relaxed text-center transition-colors duration-300 group-hover:text-gray-800">
                  Currently studying at <span className="font-medium text-gray-800">Univo</span> while continuously learning new technologies as a self-taught developer. 
                  I work with <span className="font-medium">Python</span>, <span className="font-medium">JavaScript</span>, <span className="font-medium">Swift</span>, and modern frameworks like 
                  <span className="font-medium"> React</span>, <span className="font-medium">Next.js</span>, <span className="font-medium">Express</span>, <span className="font-medium">Flask</span>, and <span className="font-medium">SwiftUI</span> to build full-stack applications.
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