// components/Buttons/Button.tsx

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  extraClass?: string;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

const TertiaryButton: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  className,
  extraClass,
  icon,
  iconPosition = 'end',
  children,
  ...rest // Use rest operator to capture remaining props
}) => {
  const buttonClasses = `relative flex flex-row hover:text-orange-500 default-transition whitespace-nowrap space-x-2 border border-transparent rounded-md font-semibold text-sm focus:outline-none ${extraClass}`;

  return (
    <>
      <button
        onClick={onClick}
        className={`${buttonClasses} before:transition-[width] before:default-transition before:absolute before:bg-orange-500 before:origin-left before:h-[1px] before:w-0 hover:before:w-[95%] before:bottom-0  after:transition-[width] after:default-transition after:absolute after:bg-orange-500 after:origin-right after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-0 after:right-[100%]`}
        disabled={disabled}
        {...rest}
      >
        {iconPosition === 'start' && icon && (
          <span className="mr-1">{icon}</span>
        )}
        {children}
        {iconPosition === 'end' && icon && <span className="ml-1">{icon}</span>}
      </button>
    </>
  );
};

export default TertiaryButton;
