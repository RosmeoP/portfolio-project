import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate half of the page height
      const halfPageHeight = document.documentElement.scrollHeight / 2;
      // Set visibility based on whether the user has scrolled past half the page
      setIsVisible(window.scrollY > halfPageHeight);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 bottom-4 z-50 p-2 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce text-gray-300"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
        <span
          className="text-lg font-bold text-gray-300"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Top
        </span>
      </div>
    </button>
  );
};

export default ScrollToTopButton;