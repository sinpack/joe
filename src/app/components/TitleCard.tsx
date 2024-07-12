import React from 'react';
import clsx from 'clsx';

interface TitleCardProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  backgroundColor: string;
  vertical: boolean;
}

const TitleCard: React.FC<TitleCardProps> = ({
  as: Component = 'h1',
  className,
  children,
  backgroundColor,
  vertical,
}) => {
  const style = {
    backgroundColor: backgroundColor || 'transparent',
    WebkitMask: vertical
      ? 'radial-gradient(circle at center bottom, transparent 10%, black 10%)'
      : 'radial-gradient(circle at center right, transparent 10%, black 10%)',
    WebkitMaskComposite: 'xor' as const,
    mask: vertical
      ? 'radial-gradient(circle at center bottom, transparent 10%, black 10%)'
      : 'radial-gradient(circle at center right, transparent 10%, black 10%)',
    maskComposite: 'xor' as const,
  };

  return (
    <Component
      className={clsx(
        className,
        'text-start text-xl font-bold leading-tight h-52 w-full p-5 z-10'
      )}
      style={style}
    >
      {children}
    </Component>
  );
};

export default TitleCard;
