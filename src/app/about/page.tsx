import React from 'react';
import Image from 'next/image';
import bioData from '@/utils/BioData';
import TherapyToolCard from '../treatments/TherapyToolCard';

const AboutPage = () => {
  return (
    <div className="bg-sky-50">
      <section className="py-10">
        <div className="flex flex-col items-center container max-w-screen-xl mx-auto px-4">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-8 tracking-widest">
            ΠΡΟΦΙΛ
          </h1>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/profile-joe.png"
              alt="profile"
              className="rounded-full shadow-xl"
              width={200}
              height={200}
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="grid grid-cols-1 gap-6">
            {bioData.map((tool, index) => (
              <TherapyToolCard
                key={index}
                title={tool.title}
                description={tool.description}
                backgroundColor={tool.color}
                bulletPoints={tool.bulletPoints} // Pass bulletPoints if they exist
                titleCardClassName="!text-center !min-w-[300px] max-w-[400px]"
                descriptionCardClassName="!min-w-[300px] max-w-[400px]"
                button={false}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
