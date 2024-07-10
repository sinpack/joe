import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import Divider from '../Divider';
import ActiveLink from './ActiveLink';

type LinkItem = {
  name: string;
  href: string;
};

interface SideBarProps {
  linkItems: LinkItem[];
  isOpen: boolean;
  toggleSidebar: () => void;
  sidebarRef: React.RefObject<HTMLDivElement>;
}

const Sidebar = ({
  linkItems,
  isOpen,
  toggleSidebar,
  sidebarRef,
}: SideBarProps): JSX.Element => {
  const renderSideBarItem = (item: LinkItem) => (
    <div className="mt-[10px]" onClick={toggleSidebar} key={item.name}>
      <ActiveLink name={item.name} href={item.href} />
    </div>
  );

  return (
    <>
      <div
        ref={sidebarRef}
        className={clsx({
          sideNav: true,
          sideNavOpen: isOpen,
        })}
      >
        <div className="flex-start top-0 left-0 px-2.5 w-[320px] h-screen bg-white shadow-[1px_4px_11px_3px_rgba(1, 9, 24, 0.12)]">
          <div className="flex items-center px-2.5 w-full h-[50px] justify-between">
            <p className="text-2xl font-bold text-black">Mental Health Joe</p>
            <div
              className="flex items-center h-full cursor-pointer"
              onClick={toggleSidebar}
            >
              <Image
                src="./clear.svg"
                alt="close"
                height={24}
                width={24}
                priority
                quality={100}
              />
            </div>
          </div>
          <Divider />
          <div className="flex items-center mt-5 w-full">
            <div
              className="flex flex-col w-full space-y-2.5 overflow-y-auto"
              style={{ height: 'calc(100vh - 100px)' }}
            >
              {linkItems.map(renderSideBarItem)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
