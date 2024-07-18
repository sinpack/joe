import React from 'react';
import AttributesSection from './AttributesSection';
import therapyTools from '../../utils/TherapyToolsData';
import TreatmentCard from './TreatmentCard';
import Divider from '../components/Divider';
import clsx from 'clsx';

const getBorderClasses = (index: number) => {
  const baseBorderClasses = 'border-gray-500';
  const bottomBorderClass = 'border-b-2';
  const rightBorderClass = 'border-r-2';
  const leftRightBorderClass = 'border-l-2 border-r-2 -ml-0.5';

  switch (index) {
    case 0:
    case 1:
      return `${baseBorderClasses} ${bottomBorderClass} ${rightBorderClass}`;
    case 2:
      return `${baseBorderClasses} ${bottomBorderClass}`;
    case 3:
    case 4:
      return `${baseBorderClasses} ${bottomBorderClass} ${rightBorderClass}`;
    case 5:
      return `${baseBorderClasses} ${bottomBorderClass}`;
    case 6:
      return `${baseBorderClasses} ${leftRightBorderClass}`;
    default:
      return '';
  }
};
const Treatments = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-start bg-sky-50 py-20 px-20 lg:px-60 md:px-40 sm:px-30 w-full">
          <div className="flex flex-col items-center gap-5 h-auto max-w-xl w-full">
            <div className="flex flex-col justify-start w-full">
              <h1 className="text-center">ΥΠΗΡΕΣΙΕΣ</h1>
            </div>
            <div className="flex flex-col justify-start w-full">
              <p className="text-center whitespace-normal">
                Ως holistic - integrative coach, προσφέρω μια σειρά επιλογών
                θεραπείας προσαρμοσμένων στις μοναδικές σας ανάγκες και στόχους.
                Μαζί, μπορούμε να εργαστούμε για την ευημερία σας.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AttributesSection />

      <section className="py-10 bg-sky-50">
        <div className="flex flex-row items-center justify-center space-x-5 py-20">
          <Divider />
          <h1 className="text-center">ΘΕΡΑΠΕΙΕΣ</h1>
          <Divider />
        </div>
        <div className="container mx-auto px-5 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-gray-300">
            {therapyTools.map((treatment, index) => {
              return (
                <div
                  key={index}
                  className={clsx(getBorderClasses(index), {
                    'col-span-full lg:col-start-2 lg:col-end-3 flex justify-center':
                      index === 6,
                  })}
                >
                  <TreatmentCard
                    title={treatment.title}
                    imgUrl={treatment.image}
                    descriptions={treatment.descriptions}
                    link={`/treatments/${treatment.nameId}`}
                    borderClasses=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Treatments;
