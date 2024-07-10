import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HolisticSection3 = () => {
  return (
    <section className="bg-gray-100">
      <div className="relative w-full h-96">
        <Image
          src="./images/mental8.png"
          alt="Abstract Mental Health 8"
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

      <div className="container max-w-screen-xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full h-64">
            <Image
              src="./images/mental9.png"
              alt="Abstract Mental Health 9"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                What is a Holistic Approach?
              </h2>
              <p className="text-md md:text-lg text-gray-600">
                A holistic approach to mental health considers the whole person,
                including physical, emotional, mental, and social factors. It
                integrates various therapies and techniques to address all
                aspects of a person&apos;s well-being.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Key Elements
              </h2>
              <ul className="list-disc list-inside text-md md:text-lg text-gray-600 space-y-2">
                <li>Mindfulness and Meditation</li>
                <li>Nutrition and Exercise</li>
                <li>Therapy and Counseling</li>
                <li>Community and Relationships</li>
                <li>Self-care and Stress Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative w-full h-96 my-10">
          <Image
            src="./images/mental10.png"
            alt="Abstract Mental Health"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <div className="text-center mt-12">
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

export default HolisticSection3;
