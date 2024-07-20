import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface IconProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={32}
      height={32}
      className={`h-8 w-8 ${className} filter-grey`}
    />
  );
};

export default Icon;
