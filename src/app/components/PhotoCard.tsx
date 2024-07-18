import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface PhotoCardProps {
  title: string;
  className?: string;
  imageUrl: string;
  borderClasses?: string; // New prop for border styles
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  title,
  className,
  imageUrl,
  borderClasses,
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center space-y-10 cursor-pointer',
        borderClasses
      )}
    >
      <div className="w-64 h-64 relative hover:scale-105 transition-transform duration-300">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover rounded-full shadow-xl"
          priority
          fill
          sizes="(max-width: 640px) 100vw, 50vw" // Example with responsive sizes
          quality={100}
        />
      </div>
      <div
        className="flex items-center justify-center"
        style={{ height: '4rem' }}
      >
        <h3
          className={`text-center font-medium leading-tight tracking-tight p-2.5 grow ${className}`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PhotoCard;
