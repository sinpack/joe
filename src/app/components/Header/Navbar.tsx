'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navlink from './Navlink';

type LinkItem = {
  name: string;
  href: string;
};

interface NavBarProps {
  linkItems: LinkItem[];
  toggleSideBar: () => void;
}

const Navbar = ({ linkItems, toggleSideBar }: NavBarProps) => {
  const [isMd, setIsMd] = useState(false);
  const [prevIsMd, setPrevIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const md = window.innerWidth >= 768;
      setIsMd(md);
      setPrevIsMd(md); // Update prevIsMd immediately when isMd changes
    };

    handleResize(); // Call once to set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Only update prevIsMd if isMd has changed
    if (isMd !== prevIsMd) {
      setPrevIsMd(isMd);
    }
    // Reset prevIsMd to initial state when navigating to a new page
    setPrevIsMd(isMd);
  }, [isMd]);

  return (
    <header className="items-center h-full bg-[#A0937D] shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto py-4 px-2.5 flex justify-between items-center gap-2.5">
        <div className="flex items-center gap-5 w-full text-nowrap min-w-fit">
          <div
            className={`flex w-fit items-center transform transition-transform duration-500 ${
              prevIsMd ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Image
              src="/logo.svg"
              alt="logo"
              height={40}
              width={40}
              priority
              quality={100}
            />
            <h1 className="flex text-xl font-semibold text-[#973131] ml-2">
              Mental Health Joe
            </h1>
          </div>
        </div>
        <nav className="flex items-center w-full justify-end default-transition min-w-fit">
          <ul
            className={`items-center text-nowrap hidden md:flex gap-x-5 text-white opacity-0 transition-opacity duration-500 ${
              prevIsMd ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {linkItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-lg">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`flex items-center md:hidden opacity-0 transition-opacity duration-500 ${
            prevIsMd ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <button
            type="button"
            className="inline-flex items-center"
            onClick={toggleSideBar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 24 24"
            >
              <path
                fill="#AF8F6F"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
