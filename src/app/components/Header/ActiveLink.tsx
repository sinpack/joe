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
              'flex items-center space-x-2.5 h-10': true,
              'hover:text-orange-500 default-transition': !isActive,
              'text-[#b8a2c6]': isActive,
            })}
          >
            <p
              className={clsx({
                'hover:text-orange-500 default-transition': !isActive,
                'text-[#b8a2c6]': isActive,
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
