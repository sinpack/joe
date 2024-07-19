import clsx from 'clsx';
import React from 'react';

const AttributesSection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-start bg-sky-50 py-10 container mx-auto px-5 lg:px-20">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full bg-sky-50 relative box-border"
          style={{ gridAutoFlow: 'dense' }}
        >
          <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 flex flex-col items-center justify-center bg-sky-50 p-5 z-10 box-border">
            <h2 className="font-normal uppercase whitespace-nowrap">
              Μοντελα Coaching
            </h2>
          </div>
          {[
            {
              title: 'GROW',
              content:
                'Δομημένο μοντέλο που βοηθάει στην επίτευξη στόχων μέσω ανάλυσης της τρέχουσας κατάστασης, διερεύνησης επιλογών και καθορισμού πλάνου δράσης.',
            },
            {
              title: 'PRACTICE',
              content:
                'Μοντέλο οκτώ βημάτων που ενισχύει την αποτελεσματικότητα μέσω καθορισμού σκοπού, ανάλυσης, ενέργειων, επιλογών, χρονοδιαγράμματος, ακεραιότητας, δέσμευσης και αριστείας.',
            },
            {
              title: 'SMART',
              content:
                'Μεθοδολογία για θέσπιση στόχων που είναι συγκεκριμένοι, μετρήσιμοι, εφικτοί, σχετικοί και χρονικά καθορισμένοι.',
            },
            {
              title: 'SWOT Analysis',
              content:
                'Στρατηγικό εργαλείο για την αναγνώριση δυνατοτήτων, αδυναμιών, ευκαιριών και απειλών, βοηθώντας στην ολιστική κατανόηση της κατάστασης του πελάτη.',
            },
          ].map((attribute, index) => (
            <div
              key={index}
              className={clsx({
                'sm:border-b-0 sm:border-r-0 md:border-r-2 lg:border-r-2':
                  index === 0,
                'lg:border-l-0 md:border-x-0 md:border-b-0 sm:-ml-[1px]':
                  index === 1,
                'lg:border-x-0': index === 2,
                'md:col-span-1 md:col-start-2 lg:col-start-4 md:-mx-[1px] md:-mt-[1px] sm:border-l-0 sm:border-t-0':
                  index === 3,
                'border-gray-300 md:border sm:border lg:border': true,
              })}
            >
              <article className="flex flex-col items-center justify-start bg-sky-50 p-10 gap-5">
                <h3 className="text-center">{attribute.title}</h3>
                <p className="text-center min-w-[200px]">{attribute.content}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AttributesSection;
