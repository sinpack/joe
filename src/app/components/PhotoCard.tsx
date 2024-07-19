import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface PhotoCardProps {
  title: string;
  className?: string;
  imageUrl: string;
  borderClasses?: string;
  onClick?: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  title,
  className,
  imageUrl,
  borderClasses,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center space-y-5 cursor-default',
        borderClasses
      )}
    >
      <div className="w-64 h-64 relative mt-10">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover shadow-xl rounded-full hover:scale-110 transition-transform duration-300"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={100}
        />
      </div>
      <div
        className="flex items-center justify-center"
        style={{ height: '4rem' }}
      >
        <h3
          className={`text-center font-medium leading-tight tracking-tight p-2.5 grow ${className} hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer`}
          onClick={onClick}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PhotoCard;
