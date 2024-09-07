'use client';
import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="to-top-button"
      onClick={goToTop}
      title="Go To Top"
      className={`fixed z-[2001] bottom-10 right-10 border-0 rounded-full shadow-md bg-gray-500 hover:bg-gray-600 text-white font-semibold transition-opacity duration-300
        flex justify-center items-center
        ${showButton ? 'opacity-100' : 'opacity-0'}
        w-12 h-12 sm:w-14 sm:h-14
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
      </svg>
      <span className="sr-only">Go to top</span>
    </button>
  );
};

export default ScrollToTopButton;
