import React from 'react';
import Image from 'next/image';
import introPhoto from '../../../public/intro5.jpg';
import { handwritingFont } from './../layout';

const Hero: React.FC = () => {
  const triangularClipPath =
    'polygon(50% 0%, 100% 0, 100% 100%, 52% 100%, 50% 95%, 48% 100%, 0 100%, 0% 43%, 0 0)';

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={introPhoto}
          alt="intro photo"
          fill
          className="object-cover object-center"
          quality={100}
          placeholder="blur"
          priority
        />
      </div>
      <div className="relative z-10 flex items-center h-full justify-center lg:justify-start ml-0 lg:ml-20 container mx-auto ">
        <h1
          className={`${handwritingFont.className} !italic text-gray-500 text-xl md:text-2xl lg:text-3xl text-center tracking-tight`}
        >
          Η αρμονία επέρχεται όταν εξισορροπήσουμε
          <br /> σώμα, νου, πνεύμα και συναίσθημα...
        </h1>
      </div>
    </section>
  );
};

export default Hero;
