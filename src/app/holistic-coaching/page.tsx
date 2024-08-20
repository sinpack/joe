import React from 'react';
import HolisticCard from './HolisticCard';
import BlueDivider from '../components/BlueDivider';
import holisticData from '../../utils/holisticData';
import ScrollToTopButton from '../components/Buttons/ScrollToTopButton';
import { Metadata } from 'next';
import TherapyToolCard from '../treatments/TherapyToolCard';

export const metadata: Metadata = {
  title: 'Holistic Coaching Γιώργου Αντωνόπουλου',
};

const HolisticPage = () => {
  return (
    <section className="bg-sky-50 ">
      <div className="flex flex-col items-center justify-center tracking-normal lg:whitespace-nowrap py-20 mx-auto px-5 sm:px-28 header:px-60 container">
        <h1 className="flex w-fit justify-center items-center text-center">
          Holistic - Integrative Coaching
        </h1>
      </div>
      <BlueDivider polygon />
      <div className="flex justify-center py-10 bg-sky-50 container mx-auto px-5 sm:px-28 header:px-60">
        <div className="flex flex-col lg:hidden space-y-5">
          {holisticData.map((item, index) => (
            <TherapyToolCard
              key={index}
              title={item.title}
              descriptions={item.descriptions}
              backgroundColor={item.color}
              titleCardClassName="!text-center !min-w-[300px] max-w-[400px]"
              descriptionCardClassName="!min-w-[300px] max-w-[400px]"
              button={false}
            />
          ))}
        </div>
        <div className="hidden lg:flex flex-col space-y-5">
          {holisticData.map((item, index) => (
            <HolisticCard
              key={index}
              title={item.title}
              descriptions={item.descriptions}
              backgroundColor={item.color}
              className="bg-gray-300"
              shape="triangle"
              footer={item.footer}
            />
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </section>
  );
};

export default HolisticPage;
