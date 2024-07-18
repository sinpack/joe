import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

export default function ActiveLink({ name, href, icon }: ActiveLinkProps) {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!isActive) {
      router.push(href);
    }
  };

  const isActive = href === '/' ? pathName === href : pathName.startsWith(href);

  return (
    <Link href={href}>
      <div
        className="flex default-transition w-full cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={clsx({
            'flex items-center space-x-2.5 p-2.5 group': true,
            'transition-500 hover:bg-gray-200 hover:rounded-md': !isActive,
            'text-blue-500 cursor-default': isActive,
          })}
        >
          {icon && <div className="icon-container">{icon}</div>}
          <p
            className={clsx({
              'relative before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 group-hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 group-hover:after:w-[50%] after:bottom-0 after:right-[50%]':
                !isActive,
              'text-blue-500 cursor-default': isActive,
            })}
          >
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
}
