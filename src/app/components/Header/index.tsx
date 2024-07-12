// src/app/components/Header.tsx
'use client';
import { useState, useRef } from 'react';
import useClickOutside from '@/utils/useClickOutside'; // Custom hook to handle click outside
import BackdropTransition from '../BackdropTransition';
import Sidebar from './Sidebar';
import linkItems from '../../../utils/LinkItems';
import Navbar from './Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = useRef<HTMLDivElement>(null);

  useClickOutside(clickRef, () => setIsOpen(false));

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar linkItems={linkItems} toggleSideBar={toggleSidebar} isOpen={isOpen} />
      <Sidebar
        isOpen={isOpen}
        sidebarRef={clickRef}
        toggleSidebar={toggleSidebar}
        linkItems={linkItems}
      />
    </>
  );
};

export default Header;
