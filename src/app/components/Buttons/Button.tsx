import React from 'react';
import clsx from 'clsx';
import Link from 'next/link'; // Import Link from next/link for client-side navigation
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  href?: string; // New prop for href (link destination)
  backButton?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  isLoading,
  href,
  backButton,
}) => {
  const buttonClasses = clsx(
    'px-4 py-2 rounded-md shadow-md focus:outline-none',
    className,
    { 'opacity-50 cursor-not-allowed': disabled },
    { relative: isLoading }
  );

  return (
    <Link href={href || '/'} passHref>
      <a className={buttonClasses}>
        {isLoading ? 'Loading...' : children}
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          </div>
        ) : backButton ? (
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        ) : null}
      </a>
    </Link>
  );
};

export default Button;
