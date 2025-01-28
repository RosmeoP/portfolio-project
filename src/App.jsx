import React from 'react';
import './index.css'
import SplitText from './components/SplitText'
import ProjectShowcase from './components/ShowCase.jsx'
import NavBar from './components/NavBar.jsx';
import BlurText from "./components/BlurText";
import { useNavigate } from 'react-router-dom';
function App() {
  
  const navigate = useNavigate();

  const openFile = () => {
    console.log('Opening file...');
    navigate('/projects'); 
  };
  const handleSplitComplete = () => {
    console.log('All letters have animated!')
  }
  const handleScroll = () => {
    const scrollTarget = window.innerHeight - 80; 
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
  }

 

  return (
    <>
   <NavBar/>
   <div className="min-h-screen bg-[#f8f8f8]">
   <BlurText
        text="Welcome to my Portfolio"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-6xl mt-5  font-bold text-center mb-8 absolute top-20 left-1/2 transform -translate-x-1/2"/>
<div 
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full"
  style={{
    background: 'radial-gradient(circle, rgba(229, 231, 235, 1) 0%, rgba(248,248,248,0) 70%)',
    boxShadow: '0 0 100px 50px rgba(229, 231, 235, 0.5)'
  }}
/>

<div className="absolute right-[300px] top-1/2 -translate-y-1/2">
  <div className="relative w-[400px] h-[400px]">
    <div className="absolute left-[10%] w-6 h-[400px] bg-black -rotate-[360deg] origin-top" />
    <div className="absolute left-[10%] w-6 h-[300px] bg-black -rotate-[30deg] origin-top" />
    <div className="absolute right-[10%] w-6 h-[400px] bg-black -rotate-[360deg] origin-top" />
    <div className="absolute right-[10%] w-6 h-[300px] bg-black rotate-[30deg] origin-top" />
  </div>
</div>

        <div className="mt-5 relative z-10 container mx-auto px-6 pt-32">
          <h1 className="text-6xl font-bold mt-10 mb-6">
            creative designer<br />&amp; developer.
          </h1>
          <p className="text-gray-600 max-w-md mb-12">
            Hi I'm Rosmeo Mauricio, a passionate Software engineer Developer<br />
            based in El Salvador.
          </p>
          <button 
            onClick={openFile} 
            className="bg-black text-white px-10 py-3 font-medium transition-colors duration-300 hover:bg-gray-800"
          >
            <span className="transition-all duration-500 ease-out">
              See my work
            </span>
          </button>
        </div>

        <button 
        onClick={handleScroll}
  id="scrollButton" 
  className="absolute right-4 text-black p-4 "
>
  <div className="flex flex-col items-center">
    <span 
      className="text-lg font-bold " 
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
      </div>
      <div className="min-h-screen bg-white relative flex flex-col items-center justify-items-start pt-10">
      <SplitText
          text="Where Creativity and Projects Converge."
          className="text-3xl font-bold text-center"
          delay={50}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleSplitComplete}
        />
        <ProjectShowcase/>        
      </div>
    </>
  )
}

export default App
