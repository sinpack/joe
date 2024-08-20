import React from 'react';
import clsx from 'clsx';

interface TitleCardProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  backgroundColor: string;
  vertical: boolean;
  shape?: 'circle' | 'triangle';
}

const TitleCard: React.FC<TitleCardProps> = ({
  as: Component = 'h1',
  className,
  children,
  backgroundColor,
  vertical,
  shape = 'circle',
}) => {
  const circularClipPath = `radial-gradient(circle at ${
    vertical ? 'center bottom' : 'center right'
  }, transparent 10%, black 10%)`;

  const triangularClipPath = vertical
    ? 'polygon(50% 0%, 100% 0, 100% 100%, 70% 100%, 50% 95%, 30% 100%, 0 100%, 0% 43%, 0 0)'
    : 'polygon(50% 0%, 100% 0, 100% 30%, 95% 50%, 100% 70%, 100% 100%, 0 100%, 0% 43%, 0 0)';

  const clipPathStyle =
    shape === 'circle'
      ? {
          WebkitMask: circularClipPath,
          WebkitMaskComposite: 'xor' as const,
          mask: circularClipPath,
          maskComposite: 'xor' as const,
        }
      : {
          WebkitClipPath: triangularClipPath,
          clipPath: triangularClipPath,
        };

  const style = {
    backgroundColor: backgroundColor || 'transparent',
    ...clipPathStyle,
  };

  return (
    <Component
      className={clsx(
        className,
        'text-start content-center text-xl font-bold leading-tight h-52 w-full p-5 z-10 grow'
      )}
      style={style}
    >
      {children}
    </Component>
  );
};

export default TitleCard;
