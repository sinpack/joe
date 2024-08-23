import React from 'react';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

interface PhotoCardProps {
  title: string;
  className?: string;
  imageUrl: string | StaticImageData;
  borderClasses?: string;
  onClick?: () => void;
  index?: number;
  roundClassName?: string;
  cursor?: string;
  isTransformed?: boolean;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  title,
  className,
  imageUrl,
  borderClasses,
  onClick,
  index,
  roundClassName = 'rounded-full',
  cursor = 'cursor-default',
  isTransformed = true,
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center space-y-5',
        borderClasses,
        cursor
      )}
    >
      <div className="w-64 h-64 relative mt-10">
        <Image
          src={imageUrl}
          alt={title}
          className={clsx(roundClassName, {
            'object-cover shadow-xl': true,
            'object-left': index === 1 || index === 4,
            'object-scale-down bg-white': index === 7,
            'hover:scale-110 transition-transform duration-300': isTransformed,
          })}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={100}
          priority
        />
      </div>
      <div
        className="flex items-center justify-center"
        style={{ height: '4rem' }}
      >
        <h3
          className={clsx(className, {
            'text-center font-medium leading-tight tracking-tight p-2.5 grow cursor-pointer':
              true,
            'hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-110':
              isTransformed,
          })}
          onClick={onClick}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PhotoCard;
