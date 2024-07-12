import React from 'react';
import TitleCard from '../components/TitleCard';
import DescriptionCard from '../components/DescriptionCard';

interface HolisticCardProps {
  title: string;
  description: string;
  link?: string;
  backgroundColor: string;
}

const HolisticCard: React.FC<HolisticCardProps> = ({
  title,
  description,
  backgroundColor,
}) => {
  return (
    <div className="py-4 px-6 flex flex-row justify-between items-start space-x-5">
      <TitleCard
        backgroundColor={backgroundColor}
        vertical={false}
        className="content-center"
      >
        {title}
      </TitleCard>
      <DescriptionCard
        vertical={false}
        className="bg-gray-300 min-h-52 flex"
        description={description}
      />
    </div>
  );
};

export default HolisticCard;
