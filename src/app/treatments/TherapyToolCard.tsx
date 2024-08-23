'use client';
import React from 'react';
import Button from '../components/Buttons/Button';
import { useRouter } from 'next/navigation';
import { TertiaryButton } from '../components/Buttons';
import TitleCard from '../components/TitleCard';
import DescriptionCard from '../components/DescriptionCard';

interface TherapyToolCardProps {
  title: string;
  descriptions?: string[];
  link?: string;
  backgroundColor: string;
  button?: boolean;
  titleCardClassName?: string;
  descriptionCardClassName?: string;
  bulletPoints?: string[];
  index?: number;
}

const TherapyToolCard: React.FC<TherapyToolCardProps> = ({
  title,
  descriptions,
  link,
  backgroundColor,
  button = true,
  titleCardClassName,
  descriptionCardClassName,
  bulletPoints,
  index,
}) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(link || '/');
  };

  return (
    <div className="py-4 px-6 flex flex-col justify-between space-y-5 h-fit">
      <TitleCard
        backgroundColor={backgroundColor}
        vertical
        as={'h1'}
        className={titleCardClassName}
      >
        {title}
      </TitleCard>
      {descriptions ? (
        descriptions.map((description, index) => (
          <DescriptionCard
            key={`description-${index}`}
            index={index}
            vertical={true}
            className={descriptionCardClassName}
            description={description}
            bulletPoints={bulletPoints}
          />
        ))
      ) : (
        <DescriptionCard
          key={`description-${index}`}
          index={index}
          vertical={true}
          className={descriptionCardClassName}
          description={descriptions}
          bulletPoints={bulletPoints}
        />
      )}
      {button && (
        <TertiaryButton
          onClick={handleNavigate}
          extraClass="text-blue-500 place-self-end"
          icon={
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          }
          iconPosition="end"
          className="mt-4"
        >
          Δείτε περισσότερα
        </TertiaryButton>
      )}
    </div>
  );
};

export default TherapyToolCard;
