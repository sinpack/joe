'use client';
import React from 'react';
import Button from '../components/Buttons/Button';
import { useRouter } from 'next/navigation';
import { TertiaryButton } from '../components/Buttons';
import TitleCard from '../components/TitleCard';
import DescriptionCard from '../components/DescriptionCard';

interface TherapyToolCardProps {
  title: string;
  description?: string;
  link?: string;
  backgroundColor: string;
  button?: boolean;
  titleCardClassName?: string;
  descriptionCardClassName?: string;
  bulletPoints?: string[];
}

const TherapyToolCard: React.FC<TherapyToolCardProps> = ({
  title,
  description,
  link,
  backgroundColor,
  button = true,
  titleCardClassName,
  descriptionCardClassName,
  bulletPoints,
}) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(link || '/');
  };

  return (
    <div className="py-4 px-6 flex flex-col justify-between space-y-5">
      <TitleCard
        backgroundColor={backgroundColor}
        vertical
        as={'h1'}
        className={titleCardClassName}
      >
        {title}
      </TitleCard>
      <DescriptionCard
        vertical
        className={descriptionCardClassName}
        bulletPoints={bulletPoints}
        description={description}
      />
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
          iconPosition="end" // Specify the icon position
          className="mt-4"
        >
          Δείτε περισσότερα
        </TertiaryButton>
      )}
    </div>
  );
};

export default TherapyToolCard;
