import Image from 'next/image';
import clsx from 'clsx';
import Divider from '../Divider';
import SideActiveLink from './SideActiveLink';
import clear from '../../../../public/clear.svg';

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
    <div className="mt-2.5" onClick={toggleSidebar} key={item.name}>
      <SideActiveLink name={item.name} href={item.href} />
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
        <div className="flex-start top-0 left-0 px-2.5 w-[320px] bg-sky-100 shadow-xl drop-shadow-xl z-60">
          <div className="flex items-center px-2.5 w-full h-[50px] justify-between">
            <h3 className="tracking-tight leading-tight">
              ΓΙΩΡΓΟΣ ΑΝΤΩΝΟΠΟΥΛΟΣ
            </h3>
            <div
              className="flex items-center h-full cursor-pointer"
              onClick={toggleSidebar}
            >
              <Image
                src={clear}
                alt="close"
                height={24}
                width={24}
                priority
                quality={100}
                className="filter-grey-bold"
              />
            </div>
          </div>
          <Divider />
          <div className="flex items-center mt-5 w-full">
            <div
              className="flex flex-col w-full space-y-2.5 overflow-y-auto"
              style={{ height: 'calc(100vh - 50px)' }}
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
