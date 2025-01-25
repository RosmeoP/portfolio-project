import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
     <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-[#f8f8f8] text-gray-500 p-4 flex justify-between items-center">
  <div className="flex-shrink-0">
    <h1 className="text-2xl font-bold">Rosmeo</h1>
  </div>
  <ul className="flex items-center space-x-6 ml-auto p-2 m-2">
    <li>
      <Link to="/about" className="nav-link relative inline-block hover:text-black transition-all duration-300 ease-in-out">
        About
        <span className="underline-animation absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-black to-black transition-all duration-500 ease-out"></span>
      </Link>
    </li>
    <li>
      <Link to="/projects" className="nav-link relative inline-block hover:text-black transition-all duration-300 ease-in-out">
        Projects
        <span className="underline-animation absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-black to-black transition-all duration-500 ease-out"></span>
      </Link>
    </li>
    <li>
      <Link to="/contact" className="nav-link relative inline-block hover:text-black transition-all duration-300 ease-in-out">
        Contact
        <span className="underline-animation absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-black to-black transition-all duration-500 ease-out"></span>
      </Link>
    </li>
    <li>
      <Link to="/home" className="nav-link relative inline-block hover:text-black transition-all duration-300 ease-in-out">
        Home
        <span className="underline-animation absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-black to-black transition-all duration-500 ease-out"></span>
      </Link>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default NavBar
