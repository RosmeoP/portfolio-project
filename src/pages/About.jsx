import React from 'react'
import NavBar from '../components/NavBar'
const About = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <NavBar />
      <div className="pt-20">
        <h1 className='bg-black text-white flex justify-center text-center font-bold text-2xl p-4'>
          Hello About
        </h1>
      </div>
    </div>
  )
}

export default About