import React from 'react';
import AttributesSection from './AttributesSection';
import therapyTools from '@/utils/TherapyToolsData';
import TherapyToolCard from './TherapyToolCard';

const Treatments = () => {
  return (
    <>
      <AttributesSection />
      <section>
        <div className="flex flex-col items-center justify-start bg-sky-50 py-10 px-20 lg:px-60 md:px-40 sm:px-30 w-full">
          <div className="flex flex-col items-center gap-4 h-auto max-w-xl w-full">
            <div className="flex flex-col justify-start w-full">
              <h2 className="text-center font-medium">ΥΠΗΡΕΣΙΕΣ</h2>
            </div>
            <div className="flex flex-col justify-start w-full">
              <p className="text-center text-lg whitespace-normal">
                Ως αδειούχος ψυχολόγος, προσφέρω μια σειρά επιλογών θεραπείας
                προσαρμοσμένων στις μοναδικές σας ανάγκες και στόχους. Μαζί,
                μπορούμε να εργαστούμε για την ευημερία σας μέσω υπηρεσιών
                διαδικτυακής συμβουλευτικής.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-sky-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-20 lg:px-60 md:px-35 sm:px-30 border-[#7AB1B7]">
            {therapyTools.map((tool, index) => (
              <TherapyToolCard
                key={index}
                title={tool.title}
                description={tool.description}
                backgroundColor={tool.color}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Treatments;
