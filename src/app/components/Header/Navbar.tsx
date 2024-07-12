'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ActiveLink from './ActiveLink';

type LinkItem = {
  name: string;
  href: string;
};

interface NavBarProps {
  linkItems: LinkItem[];
  toggleSideBar: () => void;
}

const Navbar = ({ linkItems, toggleSideBar }: NavBarProps) => {
  return (
    <header className="items-center h-full bg-sky-50 sticky top-0 z-50">
      <div className="w-full py-12 lg:px-60 md:px-30 sm:px-20 px-14 justify-between flex items-center gap-10 min-w-fit">
        <div className="flex flex-row gap-5 w-full whitespace-nowrap items-center justify-end md:justify-between min-w-fit">
          <div className="flex flex-row w-full items-center justify-end md:justify-start">
            <Image
              src="/logo.svg"
              alt="logo"
              height={40}
              width={40}
              priority
              quality={100}
            />
            <h1 className="flex items-center text-xl font-bold text-gray-600 ml-2 whitespace-nowrap tracking-tight">
              Mental Health Joe
            </h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center w-full justify-end default-transition min-w-fit">
          <ul className="flex items-center text-nowrap gap-x-5  font-bold tracking-normal text-sm">
            {linkItems.map((item) => (
              <li key={item.name} className="">
                <ActiveLink name={item.name} href={item.href}></ActiveLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`flex items-center md:hidden`}>
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
