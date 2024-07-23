'use client';
import React from 'react';
import Image from 'next/image';
import LoadingComponent from './LoadingComponent';
// import { heroVideoUrl } from './../../utils/BioData';
// import introVideoLoop from "../../../public/intro7.mp4"
import introPhoto from '../../../public/intro5.jpg';
import { handwritingFont } from './../layout';

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
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ clipPath: triangularClipPath }}
        src="/intro7.mp4"
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
          // style={{ clipPath: triangularClipPath }}
        />
      </div>
      <div className="relative z-10 flex items-center h-full justify-center lg:justify-start ml-0 lg:ml-20 container mx-auto ">
        <h1
          className={`${handwritingFont.className} !italic text-gray-500 text-xl md:text-2xl lg:text-3xl text-center tracking-tight`}
        >
          Η αρμονία επέρχεται όταν εξισορροπήσουμε
          <br /> νου, σώμα, πνεύμα και το συναίσθημα
        </h1>
      </div>
    </section>
  );
};

export default Hero;
