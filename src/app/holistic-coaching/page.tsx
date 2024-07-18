import React from 'react';
import HolisticCard from './HolisticCard';
import BlueDivider from '../components/BlueDivider';
import holisticData from '../../utils/holisticData';

const HolisticPage = () => {
  return (
    <section className="bg-sky-50">
      <div className="flex flex-col items-center bg-sky-50 py-28 px-20 lg:px-60 md:px-40 sm:px-30">
        <main className="flex flex-col w-full max-w-3xl">
          <div className="flex flex-col items-center py-10 bg-sky-50 space-y-10">
            <h1 className="flex w-fit justify-center items-center tracking-normal whitespace-nowrap">
              Holistic - Integrative Coaching
            </h1>
          </div>
        </main>
      </div>
      <BlueDivider polygon />
      <div className="py-10 bg-sky-50 container mx-auto px-10 sm:px-28 header:px-60">
        <div className="flex flex-col space-y-5">
          {holisticData.map((item, index) => (
            <HolisticCard
              key={index}
              title={item.title}
              descriptions={item.descriptions}
              backgroundColor={item.color}
              className="bg-gray-300"
              shape="triangle"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolisticPage;
