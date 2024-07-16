// Navbar.tsx
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ActiveLink from './ActiveLink';
import { BurgerButton } from './BurgerButton';

type LinkItem = {
  name: string;
  href: string;
};

interface NavBarProps {
  linkItems: LinkItem[];
  toggleSideBar: () => void;
  isOpen: boolean;
}

const Navbar = ({ linkItems, toggleSideBar, isOpen }: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`items-center h-full bg-sky-100 sticky top-0 z-[1990] transition-shadow duration-200 ${
        isScrolled ? 'shadow-xl' : 'shadow-none'
      }`}
    >
      <div className="w-full py-12 container mx-auto px-10 justify-center flex flex-row sm:px-28 header:flex-row header:px-60 items-center gap-10 min-w-fit">
        <div className="flex flex-row gap-5 w-full items-center justify-end md:justify-between">
          <div className="flex flex-row w-full items-center justify-center sm:justify-end lg:justify-start">
            <Image
              src="./logo.svg"
              alt="logo"
              height={40}
              width={40}
              priority
              quality={100}
            />
            <h4 className="flex items-center font-bold text-gray-600 ml-2 tracking-tight whitespace-break-spaces">
              ΓΙΩΡΓΟΣ ΑΝΤΩΝΟΠΟΥΛΟΣ
            </h4>
          </div>
        </div>
        <nav className="hidden lg:flex items-center w-full justify-center header:justify-end default-transition min-w-fit">
          <ul className="flex items-center text-nowrap space-x-1 tracking-tight">
            {linkItems.map((item) => (
              <li key={item.name} className="">
                <ActiveLink name={item.name} href={item.href}></ActiveLink>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`flex items-center lg:hidden default-transition ${
            isOpen ? 'hidden' : 'visible'
          }`}
        >
          <BurgerButton
            isOpen={isOpen}
            onClick={toggleSideBar}
            style={{}}
            strokeWidth="2"
            color="#4b5563"
            lineProps={{ strokeLinecap: 'round' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            width={24}
            height={24}
            className="text-gray-600 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
