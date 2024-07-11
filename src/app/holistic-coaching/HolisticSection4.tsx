import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HolisticSection4 = () => {
  return (
    <section className="py-10 md:py-16 bg-gray-100">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Holistic Approach
          </h1>
          <p className="mt-4 text-md md:text-lg text-gray-700">
            Embracing a comprehensive and integrative approach to mental health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6">
            <div className="relative w-full h-64">
              <Image
                src="/images/mental7.png"
                alt="Abstract Mental Health 7"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src="/images/mental6.png"
                alt="Abstract Mental Health 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
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

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Benefits
              </h2>
              <p className="text-md md:text-lg text-gray-600">
                A holistic approach can lead to improved mental clarity,
                emotional balance, physical health, and overall well-being. It
                empowers individuals to take an active role in their mental
                health journey.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/" legacyBehavior>
            <a className="inline-block px-6 py-3 bg-blue-600 text-white text-md md:text-lg font-medium rounded-md shadow-md hover:bg-blue-700">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HolisticSection4;
