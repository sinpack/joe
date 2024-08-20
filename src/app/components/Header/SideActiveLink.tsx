import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { usePathname } from 'next/navigation';

interface SideActiveLinkProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

export default function ActiveLink({ name, href, icon }: SideActiveLinkProps) {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    router.push(href);
  };

  const isActive = href === '/' ? pathName === href : pathName.startsWith(href);

  return (
    <Link href={href} passHref legacyBehavior>
      <div
        className={clsx('group flex default-transition w-full cursor-pointer', {
          'cursor-default bg-gray-300 rounded': isActive,
          'transition-500 hover:bg-gray-200 hover:rounded': !isActive,
        })}
      >
        <div
          className={clsx(
            'flex items-center space-x-2.5 h-10 default-transition w-full px-2.5',
            {
              'hover:bg-gray-200 hover:shadow-sm hover:rounded': !isActive,
            }
          )}
          onClick={handleClick}
        >
          {icon && <div className="flex items-center">{icon}</div>}
          <p
            className={clsx('default-transition', {
              'transition-500 group-hover:text-dark': !isActive,
              'text-orange-700': isActive,
            })}
          >
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
}
