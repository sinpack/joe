import clsx from 'clsx';
import React from 'react';

const AttributesSection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-start bg-sky-50 py-10 px-20 relative w-full box-border">
        <div
          className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 w-full border border-gray-300 bg-sky-50 relative box-border"
          style={{ gridAutoFlow: 'dense' }}
        >
          <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 flex flex-col items-center justify-center bg-sky-50 p-5 z-10 box-border">
            <h2 className="font-medium uppercase whitespace-nowrap">
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
                'Οκτάβημα μοντέλο που ενισχύει την αποτελεσματικότητα μέσω καθορισμού σκοπού, ανάλυσης, ενέργειων, επιλογών, χρονοδιαγράμματος, ακεραιότητας, δέσμευσης και αριστείας.',
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
                'border-r': index === 0,
                'border-x': index === 2,
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
