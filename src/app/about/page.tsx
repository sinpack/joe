import React from 'react';
import Image from 'next/image';
import bioData from '../../utils/BioData';
import TherapyToolCard from '../treatments/TherapyToolCard';
import HolisticCard from '../holistic-coaching/HolisticCard';
import profilePic from '../../../public/images/profile-joe.png';
import ScrollToTopButton from '../components/Buttons/ScrollToTopButton';

const AboutPage = () => {
  return (
    <div className="bg-sky-50 container mx-auto px-10 sm:px-28 header:px-60">
      <section className="py-20">
        <div className="flex flex-col items-center ">
          <h1 className="text-center font-bold mb-10 tracking-widest">
            ΠΡΟΦΙΛ
          </h1>
          <div className="flex justify-center mb-8">
            <Image
              src={profilePic}
              alt="profile"
              className="rounded-3xl shadow-xl"
              width={300}
              height={300}
              quality={100}
            />
          </div>
          <div className="flex flex-col lg:hidden space-y-5">
            {bioData.map((tool, index) => (
              <TherapyToolCard
                key={index}
                title={tool.title}
                descriptions={tool.descriptions}
                backgroundColor={tool.color}
                bulletPoints={tool.bulletPoints}
                titleCardClassName="!text-center !min-w-[300px] max-w-[400px]"
                descriptionCardClassName="!min-w-[300px] max-w-[400px]"
                button={false}
              />
            ))}
          </div>
          <div className="hidden space-y-5 lg:flex lg:flex-col">
            {bioData.map((item, index) => (
              <HolisticCard
                key={index}
                title={item.title}
                descriptions={item.descriptions}
                backgroundColor={item.color}
                bulletPoints={item.bulletPoints}
                className="bg-sky-50"
              />
            ))}
          </div>
        </div>
      </section>{' '}
      <ScrollToTopButton />
    </div>
  );
};

export default AboutPage;
