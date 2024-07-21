'use client';
import React from 'react';

import LoadingComponent from './LoadingComponent';
import { heroVideoUrl } from './../../utils/BioData';

// Define the type for the video data
// type VideoData = {
//   url: string;
// };

const Hero: React.FC = () => {
  // const { data, isLoading, error } = useVideo<VideoData>();

  // if (isLoading) {
  //   return (
  //     <LoadingComponent isLoading={true} width={200} height={200} isCentered />
  //   );
  // }

  // if (error) {
  //   return <div>Error loading video</div>;
  // }

  return (
    <div className="relative w-full h-[40vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideoUrl}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex items-end h-full justify-center">
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10">
          Η ισορροπία έρχεται όταν
          <br />
          συνδυάζουμε σώμα,
          <br /> νου και ψυχή.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
