import NavBar from '../components/NavBar';
import TiltedCard from '../components/TiltedCard'; 
import rosmeoImage from '../img/rosmeo.jpg';
import LogoWall from '../components/LogoWall';
import React, { useEffect } from 'react'

const logoImgs = [
  { altText: "React Logo" },
  { altText: "JavaScript Logo" },
  { altText: "HTML5 Logo" },
  { altText: "CSS3 Logo" },
  { altText: "Node.js Logo" },
  { altText: "Git Logo" },
  { altText: "VS Code Logo" }
];



const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="pt-20">
        <div className="flex items-center fixed left-0 h-screen z-50">
          <h1
            className="text-lg text-gray-300 ml-5 font-bold text-center mb-8"
            style={{ writingMode: 'vertical-rl', textOrientation: 'sideways-lr', transform: 'rotate(180deg)' }}
          >
            About
          </h1>
        </div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-20">
            <p className="text-black text-center md:text-left max-w-md font-bold text-2xl leading-relaxed">
              Passionate software engineer focused on building innovative systems and solving complex problems with impactful solutions.
            </p>

            <div className="flex flex-col items-center mr-[100px]">
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

      <div className="bg-white flex flex-col items-center justify-center min-h-screen pt-[250px] pb-20">
        <p className="text-center text-xl font-light max-w-3xl leading-loose mb-8">
          Hi there! I’m Rosmeo Mauricio Villalobos Parada, a passionate and driven software engineering student based in El Salvador. With a deep curiosity for technology and a love for problem-solving, I’m on a mission to create innovative solutions that make a positive impact on the world.
        </p>
        <p className="text-center text-xl font-light max-w-3xl leading-loose mb-8">
          Currently, I’m pursuing my degree in Software Engineering at <strong>Univo</strong>, where I’m honing my skills in programming, software development, and system design. I enjoy working with languages like <strong>Python</strong>, <strong>C#</strong>, <strong>JavaScript</strong>, and <strong>React</strong>, and I’m always eager to learn new tools and technologies to stay ahead in this ever-evolving field. My time at the university has fueled my passion for technology and problem-solving, and I’m always eager to apply what I learn to real-world challenges.
        </p>
        <p className="text-center text-xl font-light max-w-3xl leading-loose">
          Beyond my formal education, I am a passionate and <strong>self-taught learner</strong>, continuously exploring fields like <strong>front-end development</strong>, <strong>design</strong>, <strong>UX/UI</strong>, and <strong>backend systems</strong>. I thrive on crafting seamless, user-centric experiences while delving into the complexities of how systems function. Whether it’s coding, designing, or tackling challenging problems, I am driven by a constant desire to learn, grow, and push the boundaries of my capabilities.
        </p>
      </div>

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