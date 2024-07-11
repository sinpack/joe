// components/Button.tsx

import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  fixedWidth?: boolean;
  width?: number | string;
  hasBadge?: boolean;
  onView?: boolean;
  size?: 'SM' | 'L';
  text?: string;
  colorClass: string;
  iconColorClass?: string;
  icon?: React.ReactNode; // Accepts React Node which can be SVG
  disabledClass?: string;
  spinnerType?: 'default' | 'light' | 'disabled';
  loadingPlaceholder?: string;
  disabledIconClass?: string;
  pressedClass?: string;
  onClick?: () => void; // Function prop for onClick action
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  isLoading,
  fixedWidth,
  width,
  hasBadge,
  onView,
  size,
  text,
  colorClass,
  iconColorClass,
  icon,
  disabledClass,
  spinnerType,
  loadingPlaceholder,
  disabledIconClass,
  pressedClass,
  onClick, // Accept onClick function prop
}) => {
  const buttonClasses = clsx(
    'px-4 py-2 rounded-md shadow-md focus:outline-none',
    colorClass,
    { 'opacity-50 cursor-not-allowed': disabled },
    { relative: isLoading },
    { 'w-24': fixedWidth },
    width && `w-${width}`,
    { relative: hasBadge },
    { 'w-40': onView },
    { 'text-sm': size === 'SM' },
    { 'text-lg': size === 'L' },
    disabledClass,
    pressedClass
  );

  const handleButtonClick = () => {
    if (!isLoading && !disabled && onClick) {
      onClick(); // Call the provided onClick function
    }
  };

  return (
    <button
      className={buttonClasses}
      onClick={handleButtonClick} // Handle click inside the component
      disabled={disabled || isLoading}
    >
      {isLoading ? loadingPlaceholder || 'Loading...' : children || text}
      {isLoading && spinnerType !== 'disabled' && (
        <div className="absolute inset-0 flex items-center justify-center">
          {spinnerType === 'light' ? (
            <svg
              className={clsx(
                'animate-spin h-5 w-5',
                iconColorClass || 'text-white'
              )}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.005 8.005 0 0112 4.472v3.126c-2.61 0-4.773 2.09-4.994 4.703H6zM12 20a8 8 0 01-8-8h-4c0 6.627 5.373 12 12 12v-4zm7.103-9.624A8.002 8.002 0 0112 19.528v-3.124c2.607 0 4.768-2.09 4.989-4.697h-3.886z"
              ></path>
            </svg>
          ) : (
            <div
              className={clsx(
                'loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4',
                iconColorClass || 'text-white'
              )}
            ></div>
          )}
        </div>
      )}
      {icon && !isLoading && (
        <span
          className={clsx(
            'mr-2',
            disabled ? disabledIconClass : iconColorClass
          )}
        >
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
