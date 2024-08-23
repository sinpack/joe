// Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import ActiveLink from './ActiveLink';
import { BurgerButton } from './BurgerButton';
import logo from '../../../../public/logo.jpg';
import Image from 'next/image';
import Link from 'next/link';

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
      <div className="w-full py-5 container mx-auto px-10 justify-center flex flex-row sm:px-28 header:flex-row header:px-60 items-center gap-10 min-w-fit">
        <div className="flex flex-row gap-5 w-full items-center justify-end md:justify-between">
          <div className="flex flex-row w-full items-center justify-center sm:justify-end lg:justify-start">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className="rounded-xl"
                width={40}
                height={40}
              />
            </Link>
            <div className="flex flex-col ml-2">
              <h4 className="flex items-center font-bold text-gray-600 tracking-tight whitespace-break-spaces">
                ΓΕΩΡΓΙΟΣ ΑΝΤΩΝΟΠΟΥΛΟΣ
              </h4>
              <p className="flex items-center tracking-tight text-xs">
                Holistic - Integrative Coaching Psychology
              </p>
            </div>
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
