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

  const isActive = pathName.startsWith(href);

  return (
    <Link href={href} passHref legacyBehavior>
      <div
        className={clsx({
          'hover:bg-blackWhite-200 default-transition': !isActive,
          'bg-cornflower': isActive,
        })}
      >
        <a
          className="flex px-2.5 default-transition w-full cursor-default"
          onClick={handleClick}
        >
          <div className="flex items-center space-x-2.5 h-[42px]">
            <p className="body1 text-blackWhite-400">{name}</p>
          </div>
        </a>
      </div>
    </Link>
  );
}
