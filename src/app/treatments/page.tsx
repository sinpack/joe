import React from 'react';
import AttributesSection from './AttributesSection';
import therapyTools from '@/utils/TherapyToolsData';
import TherapyToolCard from './TherapyToolCard';

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
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-20 lg:px-60 md:px-35 sm:px-30 border-[#7AB1B7]">
            {therapyTools.map((tool, index) => (
              <TherapyToolCard
                key={index}
                title={tool.title}
                descriptions={tool.descriptions}
                backgroundColor={tool.color}
                link={`/treatments/${tool.nameId}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Treatments;
