import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HolisticSection1 = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <Image
          src="/images/mental2.jpg"
          alt="Abstract Mental Health 2"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold">Holistic Approach</h1>
          <p className="mt-4 text-md md:text-lg">
            Embracing a comprehensive and integrative approach to mental health.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 md:p-16 bg-gray-100 w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          What is a Holistic Approach?
        </h2>
        <p className="text-md md:text-lg text-gray-600 mb-6">
          A holistic approach to mental health considers the whole person,
          including physical, emotional, mental, and social factors. It
          integrates various therapies and techniques to address all aspects of
          a person&apos;s well-being.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Key Elements
        </h2>
        <ul className="list-disc list-inside text-md md:text-lg text-gray-600 space-y-2 mb-6">
          <li>Mindfulness and Meditation</li>
          <li>Nutrition and Exercise</li>
          <li>Therapy and Counseling</li>
          <li>Community and Relationships</li>
          <li>Self-care and Stress Management</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Benefits
        </h2>
        <p className="text-md md:text-lg text-gray-600 mb-12">
          A holistic approach can lead to improved mental clarity, emotional
          balance, physical health, and overall well-being. It empowers
          individuals to take an active role in their mental health journey.
        </p>
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-md md:text-lg font-medium rounded-md shadow-md hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HolisticSection1;
