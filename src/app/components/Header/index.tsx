// src/app/components/Header.tsx
'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import useClickOutside from '@/utils/useClickOutside'; // Custom hook to handle click outside
import BackdropTransition from '../BackdropTransition';
import Sidebar from './Sidebar';
import linkItems from './LinkItems';
import Navbar from './Navbar';
import { FlowbiteNavBar } from './FlowbiteNavBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = useRef<HTMLDivElement>(null);

  useClickOutside(clickRef, () => setIsOpen(false));

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BackdropTransition duration={0.3} open={isOpen} />
      <Navbar linkItems={linkItems} toggleSideBar={toggleSidebar} />
      <Sidebar
        isOpen={isOpen}
        sidebarRef={clickRef}
        toggleSidebar={toggleSidebar}
        linkItems={linkItems}
      />
      {/* <FlowbiteNavBar /> */}
    </>
  );
};

export default Header;
