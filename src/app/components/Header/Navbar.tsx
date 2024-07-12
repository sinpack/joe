'use client';
import Image from 'next/image';
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
  const canvasStyle = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const menuButtonStyle = {};
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
        <div
          className={`flex items-center md:hidden default-transition ${
            isOpen ? 'hidden' : 'visible'
          }`}
        >
          <BurgerButton
            isOpen={isOpen}
            onClick={toggleSideBar}
            style={menuButtonStyle}
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
