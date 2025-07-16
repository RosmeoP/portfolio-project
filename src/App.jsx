import React, { useState, useEffect } from 'react';
import './index.css';
import SplitText from './components/SplitText';
import ProjectShowcase from './components/ShowCase.jsx';
import NavBar from './components/NavBar.jsx';
import BlurText from './components/BlurText';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(true); 
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false); 

  const openFile = () => {
    console.log('Opening file...');
    navigate('/projects');
  };

  const handleSplitComplete = () => {
    console.log('All letters have animated!');
  };

  const handleScroll = () => {
    const scrollTarget = window.innerHeight - 80;
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsScrollToTopVisible(false); 
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    const handleScrollVisibility = () => {
     
      if (window.scrollY > window.innerHeight) {
        setIsScrollButtonVisible(false);
      } else {
        setIsScrollButtonVisible(true);
      }

      const halfPageHeight = document.documentElement.scrollHeight / 2;
      setIsScrollToTopVisible(window.scrollY > halfPageHeight);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScrollVisibility);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScrollVisibility);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-[#f8f8f8] relative overflow-hidden">
        {isSmallScreen ? (
          <h1 className="text-4xl font-bold text-center mb-8 absolute top-40 left-1/2 transform -translate-x-1/2">
            Welcome to my Portfolio
          </h1>
        ) : (
          <BlurText
            text="Welcome to my Portfolio"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl font-bold text-center mb-8 absolute top-48 left-1/2 transform -translate-x-1/2"
          />
        )}

        <div
          className=" absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(229, 231, 235, 1) 0%, rgba(248,248,248,0) 70%)',
            boxShadow: '0 0 100px 50px rgba(229, 231, 235, 0.5)',
          }}
        />

        <div className="mt-5 relative z-10 container mx-auto px-4 md:px-6 pt-80 md:pt-96">
          <h1 className="text-4xl md:text-6xl font-bold mt-20 mb-6">
            Full-Stack Developer
            <br />
            &amp; Problem Solver.
          </h1>
          <p className="text-gray-600 max-w-lg mb-8 text-lg leading-relaxed">
            Hi, I'm Rosmeo Mauricio, a passionate software engineer who transforms ideas into digital experiences. 
            I specialize in building scalable web applications and APIs that solve real-world problems.
            <br />
            <span className="text-gray-500 text-base">Based in El Salvador</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={openFile}
              className="bg-black text-white px-8 md:px-12 py-3 md:py-4 font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-105"
            >
              <span className="transition-all duration-500 ease-out">
                Explore My Work
              </span>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-black text-black px-8 md:px-12 py-3 md:py-4 font-semibold transition-all duration-300 hover:bg-black hover:text-white"
            >
              Let's Connect
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-md text-center">
            <div>
              <div className="text-2xl font-bold text-black mb-1">3+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-black mb-1">10+</div>
              <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-black mb-1">5+</div>
              <div className="text-sm text-gray-500">Technologies</div>
            </div>
          </div>
        </div>

        {!isSmallScreen && (
          <button
            onClick={handleScroll}
            id="scrollButton"
            className={`fixed right-4 bottom-4 text-black p-4 z-50 transition-opacity duration-300 ${
              isScrollButtonVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex flex-col items-center">
              <span
                className="text-lg font-bold"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                Scroll Down
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce mt-2 text-black transition-colors duration-300 group-hover:text-gray-300"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}
      </div>

   
      <div className="min-h-screen bg-white relative flex flex-col items-center justify-items-start pt-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {isSmallScreen ? (
            <h2 className="text-3xl md:text-4xl font-bold text-center px-4 mb-6">
              Featured Projects
            </h2>
          ) : (
            <SplitText
              text="Featured Projects"
              className="text-3xl md:text-4xl font-bold text-center px-4 mb-6"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleSplitComplete}
            />
          )}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
            A collection of projects that showcase my skills in full-stack development, 
            API design, and user experience. Each project represents a unique challenge and solution.
          </p>
        </div>
        <ProjectShowcase />
      </div>
    </>
  );
}

export default App;