import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-[#f8f8f8] text-gray-500 p-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-20 w-20 bg-transparent" />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-6 lg:ml-auto lg:p-2 lg:m-2`}
        >
          <li>
            <Link
              to="/about"
              className="nav-link relative inline-block hover:text-black transition-all duration-300 ease-in-out"
            >
              About
              <span className="underline-animation absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-black to-black transition-all duration-500 ease-out"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="nav-link relative inline-block hover:text-black transition-all duration-300 ease-in-out"
            >
              Works
              <span className="underline-animation absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-black to-black transition-all duration-500 ease-out"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link relative inline-block hover:text-black transition-all duration-300 ease-in-out"
            >
              Contact
              <span className="underline-animation absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-black to-black transition-all duration-500 ease-out"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/home"
              className="nav-link relative inline-block hover:text-black transition-all duration-300 ease-in-out"
            >
              Home
              <span className="underline-animation absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-black to-black transition-all duration-500 ease-out"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;