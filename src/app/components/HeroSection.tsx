'use client';
import React from 'react';
import Image from 'next/image';
import LoadingComponent from './LoadingComponent';
import { heroVideoUrl } from './../../utils/BioData';
import introPhoto from '../../../public/intro6.jpg';

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
  const triangularClipPath =
    'polygon(50% 0%, 100% 0, 100% 100%, 52% 100%, 50% 95%, 48% 100%, 0 100%, 0% 43%, 0 0)';

  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
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
          className="object-cover object-center"
          quality={100}
          placeholder="blur"
          priority
          style={{ clipPath: triangularClipPath }}
        />
      </div>
      <div className="relative z-10 flex items-end h-full justify-center container mx-auto ">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-32 tracking-tight">
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
