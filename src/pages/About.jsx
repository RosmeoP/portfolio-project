import React from 'react'
import NavBar from '../components/NavBar'
const About = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <NavBar />
      <div className="pt-20">
      <div className="flex items-center fixed left-0 h-screen z-50">
        <h1 
          className="text-lg text-gray-300 ml-5  font-bold text-center mb-8"
          style={{ writingMode: 'vertical-rl', textOrientation: 'sideways-lr', transform: 'rotate(180deg)' }}
        >
          About 
        </h1>
      </div>
        <div className="container mx-auto px-6">
          <p className="text-black text-center mt-20 max-w-md font-bold text-2xl ">
          Passionate software engineer focused on building innovative systems and solving complex problems with impactful solutions.          </p>
         
      </div>
      </div>
    </div>
  )
}

export default About