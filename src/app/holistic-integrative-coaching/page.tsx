import React from 'react';
import HolisticCard from './HolisticCard';
import BlueDivider from '../components/BlueDivider';
import holisticData from '../../utils/holisticData';
import ScrollToTopButton from '../components/Buttons/ScrollToTopButton';
import { Metadata } from 'next';
import TherapyToolCard from '../treatments/TherapyToolCard';
import bulletPoint4 from '../../../public/bullet4.png';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Holistic Coaching Γιώργου Αντωνόπουλου',
};

const HolisticPage = () => {
  return (
    <section className="bg-sky-50 ">
      <div className="flex flex-col items-center justify-center lg:whitespace-nowrap py-20 mx-auto px-5 sm:px-28 header:px-60 container">
        <h1 className="flex w-fit justify-center items-center text-center tracking-wider">
          HOLISTIC - INTEGRATIVE COACHING
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
              descriptionCardClassName="!min-w-[300px] max-w-[400px] !tracking-tighter !leading-normal !text-justify"
              bulletPoints={item.bulletPoints}
              button={false}
              footer={item.footer}
              hasDecoration
              customBulletPoint={
                <Image
                  src={bulletPoint4}
                  alt="custom bullet point"
                  width={18}
                  height={18}
                  className="w-4 h-4"
                />
              }
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
              className="bg-gray-300 h-full !tracking-tighter !leading-normal !text-justify"
              shape="triangle"
              footer={item.footer}
              bulletPoints={item.bulletPoints}
              hasDecoration
              customBulletPoint={
                <Image
                  src={bulletPoint4}
                  alt="custom bullet point"
                  width={18}
                  height={18}
                  className="w-4 h-4"
                />
              }
            />
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </section>
  );
};

export default HolisticPage;
