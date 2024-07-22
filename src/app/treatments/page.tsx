import React from 'react';
import AttributesSection from './AttributesSection';
import therapyTools from '../../utils/TherapyToolsData';
import TreatmentCard from './TreatmentCard';
import Divider from '../components/Divider';
import clsx from 'clsx';
import ScrollToTopButton from '../components/Buttons/ScrollToTopButton';
import { Metadata } from 'next';
import NavigationButton from '../components/Buttons/NavigateButton';

export const metadata: Metadata = {
  title:
    'Υπηρεσίες-Θεραπείες Γιώργου Αντωνόπουλου | Γιώργος Αντωνόπουλος - Holistic Coach',
};

const Treatments = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-start bg-sky-50 py-20 px-20 lg:px-60 md:px-40 sm:px-30 w-full">
          <div className="flex flex-col items-center gap-5 h-auto max-w-xl w-full">
            {/* <div className="flex flex-col justify-start w-full">
              <h1 className="text-center">ΥΠΗΡΕΣΙΕΣ - ΘΕΡΑΠΕΙΕΣ</h1>
            </div> */}
            <div className="flex flex-col justify-start w-full">
              <p className="text-center whitespace-normal">
                Ως holistic - integrative coach, προσφέρω μια σειρά υπηρεσιών
                προσαρμοσμένων στις μοναδικές σας ανάγκες και στόχους. Μαζί,
                μπορούμε να εργαστούμε για την ευημερία σας.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AttributesSection />

      <section className="flex flex-col container mx-auto px-5 lg:px-20 py-10 bg-sky-50">
        <div className="flex flex-row items-center justify-center space-x-5">
          <Divider className="border-gray-400 border" />
          <h1 className="text-center py-10 text-nowrap">ΥΠΗΡΕΣΙΕΣ-ΘΕΡΑΠΕΙΕΣ</h1>
          <Divider className="border-gray-400 border" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {therapyTools.map((treatment, index) => {
            return (
              <div
                key={index}
                className={clsx({
                  'col-span-full lg:col-span-1 lg:px-0 lg:mx-0 lg:col-start-2 lg:-ml-0.5 sm:col-[1_/_span_2] sm:px-40 sm:mx-40 flex justify-center':
                    index === 6,
                  ' lg:first:border-gray-400 lg:first:border-r-2 lg:first:border-b-2 lg:[&:nth-child(2)]:border-gray-400 lg:[&:nth-child(2)]:border-b-2 lg:[&:nth-child(2)]:border-r-2 lg:[&:nth-child(3)]:border-gray-400 lg:[&:nth-child(3)]:border-b-2 lg:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(4)]:border-gray-400 lg:[&:nth-child(4)]:border-b-2 lg:[&:nth-child(4)]:border-r-2 lg:[&:nth-child(5)]:border-gray-400 lg:[&:nth-child(5)]:border-b-2 lg:[&:nth-child(5)]:border-r-2 lg:[&:nth-child(6)]:border-gray-400 lg:[&:nth-child(6)]:border-b-2 lg:[&:nth-child(7)]:border-gray-400 lg:[&:nth-child(7)]:border-l-2 lg:[&:nth-child(7)]:border-r-2':
                    true,
                  'sm:first:border-gray-400 sm:first:border-r-2 sm:first:border-b-2 sm:[&:nth-child(2)]:border-gray-400 sm:[&:nth-child(2)]:border-b-2 sm:[&:nth-child(3)]:border-gray-400 sm:[&:nth-child(3)]:border-b-2 sm:[&:nth-child(3)]:border-r-2 sm:[&:nth-child(4)]:border-gray-400 sm:[&:nth-child(4)]:border-b-2 sm:[&:nth-child(5)]:border-gray-400 sm:[&:nth-child(5)]:border-b-2 sm:[&:nth-child(5)]:border-r-2 sm:[&:nth-child(6)]:border-gray-400 sm:[&:nth-child(6)]:border-b-2 sm:[&:nth-child(7)]:border-gray-400 sm:[&:nth-child(7)]:border-l-2 sm:[&:nth-child(7)]:border-r-2':
                    true,
                })}
              >
                <TreatmentCard
                  title={treatment.title}
                  imgUrl={treatment.image}
                  descriptions={treatment.descriptions}
                  link={`/treatments/${treatment.nameId}`}
                />
              </div>
            );
          })}
        </div>
        <div className="flex place-self-center mt-20">
          <NavigationButton text="ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ" link="/contact" />
        </div>
        <ScrollToTopButton />
      </section>
    </>
  );
};

export default Treatments;
