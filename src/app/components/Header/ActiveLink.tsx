import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
  name: string;
  href: string; // make href non-optional
  icon?: React.ReactNode;
}

export default function ActiveLink({ name, href, icon }: ActiveLinkProps) {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push(href);
  };

  const isActive = href === '/' ? pathName === href : pathName.startsWith(href);

  return (
    <Link href={href} passHref legacyBehavior>
      <div>
        <a
          className="flex default-transition w-full cursor-pointer"
          onClick={handleClick}
        >
          <div
            className={clsx({
              'flex items-center space-x-2.5 h-10 ': true,
              'hover:text-green-400 default-transition': !isActive,
              'text-blue-500': isActive,
            })}
          >
            <p
              className={clsx({
                'hover:text-green-400 default-transition relative default-transition before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-green-300 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-green-300 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]':
                  !isActive,
                'text-blue-500': isActive,
              })}
            >
              {name}
            </p>
          </div>
        </a>
      </div>
    </Link>
  );
}
