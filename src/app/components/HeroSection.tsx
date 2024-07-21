'use client';
import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const triangularClipPath =
    'polygon(50% 0%, 100% 0, 100% 100%, 52% 100%, 50% 95%, 48% 100%, 0 100%, 0% 43%, 0 0)';

  const clipPathStyle = {
    WebkitClipPath: triangularClipPath,
    clipPath: triangularClipPath,
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 10; // Start the video at 10 seconds
    }
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime > 20) {
      video.currentTime = 10; // Loop between 10 and 20 seconds
    }
  };

  return (
    <div
      className="relative w-full h-[40vh] overflow-hidden"
      style={clipPathStyle}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        onTimeUpdate={handleTimeUpdate}
        // style={{ filter: 'brightness(1)' }} // Adjust the brightness here
      ></video>
      <div className="relative z-10 flex items-end h-full justify-center">
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10">
          Η ισορροπία έρχεται όταν
          <br />
          συνδυάζουμε σώμα,
          <br /> νου και ψυχή.{' '}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
