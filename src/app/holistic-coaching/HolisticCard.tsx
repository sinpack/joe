import React from 'react';
import TitleCard from '../components/TitleCard';
import DescriptionCard from '../components/DescriptionCard';

interface HolisticCardProps {
  title: string;
  descriptions?: string[];
  link?: string;
  backgroundColor: string;
  bulletPoints?: string[];
  className?: string;
}

const HolisticCard: React.FC<HolisticCardProps> = ({
  title,
  descriptions,
  backgroundColor,
  bulletPoints,
  className,
}) => {
  return (
    <div className="flex flex-row py-4 px-6 space-x-5">
      <div className="w-1/3 flex-shrink-0">
        <TitleCard
          backgroundColor={backgroundColor}
          vertical={false}
          className="content-center"
        >
          {title}
        </TitleCard>
      </div>
      <div className="w-2/3 flex-grow flex flex-col space-y-10">
        {descriptions ? (
          descriptions.map((description, index) => (
            <DescriptionCard
              key={index}
              index={index}
              vertical={false}
              className={className}
              description={description}
              bulletPoints={bulletPoints}
            />
          ))
        ) : (
          <DescriptionCard
            vertical={false}
            className={className}
            bulletPoints={bulletPoints}
          />
        )}
      </div>
    </div>
  );
};

export default HolisticCard;
