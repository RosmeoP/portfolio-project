import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);

    const redirectTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => navigate("/"), 1000);
    }, 50000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, [navigate]);

  

  return (
    <>
      <div
        className={`fixed inset-0 bg-white z-50 transition-opacity duration-1000 ${
          fadeOut ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Main content */}
      <div
        className={`relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden transition-opacity duration-1000 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Starry background */}
        <div className="absolute inset-0">
          {[...Array(600)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
                animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* Red planet */}
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-red-600 to-red-900 opacity-75 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0.4)_100%)]"></div>
          <div className="absolute w-full h-16 bg-orange-500 opacity-30 blur-md transform -rotate-45 translate-y-32"></div>
          <div className="absolute w-full h-16 bg-yellow-500 opacity-20 blur-md transform rotate-45 translate-y-16"></div>
        </div>

        {/* Gray planet */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-gray-300 shadow-inner overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.3)_100%)]"></div>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gray-400"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Floating spaceship */}
        <div className={`relative mb-16 ${mounted ? "animate-float" : ""}`}>
          <div className="relative w-40 h-40">
            <div className="absolute inset-4 bg-white rounded-full shadow-lg">
              <div className="absolute inset-3 bg-gray-900 rounded-full overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-75"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-800"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 w-12 h-6 bg-gray-300 rounded-full transform -translate-x-1/2 translate-y-4"></div>
              <div className="absolute bottom-4 left-1/2 w-8 h-3 bg-gray-400 rounded-full transform -translate-x-1/2"></div>
            </div>
            <div className="absolute right-2 top-1/2 w-8 h-10 bg-gray-300 rounded-lg transform -translate-y-1/2 shadow-md">
              <div className="absolute top-2 left-2 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute left-0 top-1/2 w-12 h-4 bg-white rounded-full transform -translate-y-1/2 rotate-45"></div>
            <div className="absolute right-0 top-1/2 w-12 h-4 bg-white rounded-full transform -translate-y-1/2 -rotate-45"></div>
            <div className="absolute left-1/2 bottom-0 w-1 h-16 bg-gray-400 transform -translate-x-1/2 origin-bottom animate-sway"></div>
          </div>
        </div>

        {/* 404 message */}
        <h1 className="text-white text-9xl font-bold mb-4 animate-pulse">404</h1>
        <h2 className="text-white text-2xl mb-2 font-semibold">
          Houston, we have a problem.
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md text-center">
          The page you're looking for seems to be lost in the vast expanse of
          interstellar space.
        </p>

        {/* Countdown */}
        {countdown > 0 && (
          <p className="text-gray-400 text-md mb-4 animate-pulse">
            Returning to Mission Control in {countdown} seconds...
          </p>
        )}

        {/* Return button */}
        {/* <button
          onClick={handleReturn}
          className="px-6 py-3 text-lg font-medium text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Return to Mission Control
        </button> */}

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gray-700 rounded animate-spin-slow opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-gray-600 rounded animate-reverse-spin opacity-40"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-gray-500 rounded animate-spin-slow opacity-30"></div>
        <div className="absolute top-1/4 right-0 w-1 h-1 bg-blue-300 rounded-full animate-comet"></div>
        <div className="absolute top-1/3 left-10 w-6 h-2 bg-gray-400 rounded-sm animate-orbit">
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </>
  );
}