'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { TertiaryButton } from '../components/Buttons';
import DescriptionCard from '../components/DescriptionCard';
import PhotoCard from '../components/PhotoCard';
import { StaticImageData } from 'next/image';

interface TreatmentCardProps {
  title: string;
  descriptions?: string[];
  link?: string;
  button?: boolean;
  descriptionCardClassName?: string;
  bulletPoints?: string[];
  index?: number;
  imgUrl: string | StaticImageData;
  borderClasses?: string;
  roundClassName?: string;
  isTransformed?: boolean;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  title,
  descriptions,
  link,
  button = true,
  descriptionCardClassName,
  bulletPoints,
  index,
  imgUrl,
  borderClasses,
  roundClassName,
  isTransformed = true,
}) => {
  const router = useRouter();
  const handleNavigate = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div className="py-4 px-6 flex flex-col justify-between space-y-5 h-full min-h-[30rem]">
      <PhotoCard
        title={title}
        imageUrl={imgUrl}
        borderClasses={borderClasses}
        onClick={handleNavigate}
        index={index}
        roundClassName={roundClassName}
        isTransformed={isTransformed}
      />
      <div className="flex flex-col justify-between grow">
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
      </div>
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

export default TreatmentCard;
