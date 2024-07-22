'use client';
import React from 'react';
import Image from 'next/image';
import LoadingComponent from './LoadingComponent';
import { heroVideoUrl } from './../../utils/BioData';
import introPhoto from '../../../public/intro5.jpg';

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
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideoUrl}
        autoPlay
        loop
        muted
      /> */}
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={introPhoto}
          alt="intro photo"
          fill
          className="object-cover object-left"
          quality={100}
          placeholder="blur"
          priority
        />
      </div>
      <div className="relative z-10 flex items-center h-full justify-center container mx-auto ">
        <h1 className="text-gray-500 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 tracking-tight">
          Η ισορροπία έρχεται όταν
          <br />
          συνδυάζουμε σώμα,
          <br /> νου και ψυχή.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
