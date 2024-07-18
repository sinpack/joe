import Image from 'next/image';
import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  content: string;
  authorName: string;
  authorAvatarUrl: string;
  date: string;
}

const CardWithImage: React.FC<CardProps> = ({
  imageUrl,
  title,
  content,
  authorName,
  authorAvatarUrl,
  date,
}) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url('${imageUrl}')` }}
        title="Image title"
      />
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{content}</p>
        </div>
        <div className="flex items-center">
          <Image
            className="w-10 h-10 rounded-full mr-4"
            src={authorAvatarUrl}
            alt={`Avatar of ${authorName}`}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{authorName}</p>
            <p className="text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
