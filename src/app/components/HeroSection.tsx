import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-sky-50">
      <div className="grid space-y-5 max-w-screen-xl px-4 py-8 mx-auto lg:space-y-0 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="flex flex-col w-full items-center mr-auto lg:col-span-8">
          <h1
            className={`inline-flex items-center justify-center w-full text-gray-600 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white`}
          >
            Φροντίστε την Ψυχική Υγεία σας
          </h1>
          <p
            className={`inline-flex items-center justify-center text-gray-600 max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400`}
          >
            Ανακαλύψτε τη δύναμη της ψυχικής υγείας με την [Όνομα της Εταιρείας
            σας]. Προσφέρουμε εξατομικευμένη υποστήριξη για τη διαχείριση του
            άγχους, της κατάθλιψης και του στρες. Γίνετε μέλος μας και ξεκινήστε
            σήμερα το ταξίδι προς μια υγιή ψυχή.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>{' '}
          </Link>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Μάθε περισσότερα{' '}
          </a>
        </div>
        <div className="w-full h-full relative lg:mt-0 lg:flex lg:col-span-4 lg:px-10 py-5 ">
          <Image
            src="./images/mental1.jpg"
            alt="mental-photo-1"
            className="flex items-center justify-center relative rounded-full sm:rounded-3xl md:rounded-lg lg:rounded-full shadow-xl"
            priority
            layout="fixed"
            width={400}
            height={400}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
