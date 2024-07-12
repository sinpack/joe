// pages/contact.js

import dynamic from 'next/dynamic';
import contactDetails from './ContactDetails';
import BlueDivider from '../components/BlueDivider';

export default function Contact() {
  const DynamicMap = dynamic(() => import('../components/Map'), {
    ssr: false,
  });

  return (
    <div className="bg-sky-50">
      <section className="flex flex-col items-center py-12 px-20 lg:px-60 md:px-40 sm:px-30">
        <main className="flex flex-col w-full max-w-3xl">
          <div className="flex flex-col items-center py-10 bg-sky-50 space-y-10">
            <h1 className="flex w-fit justify-center items-center text-4xl tracking-widest font-bold whitespace-normal">
              Επικοινωνία
            </h1>
            <p className="text-center text-lg whitespace-normal">
              Για να κλείσετε ραντεβού ή για περαιτέρω πληροφορίες, σαν πρώτο
              βήμα μπορείτε να παρακαλώ επικοινωνήστε μαζί μου μέσω τηλεφώνου
              στο +3069000000 ή μέσω email στο info@psychologyantonopoulos.gr
            </p>

            <p className="text-center text-lg whitespace-normal">
              Ο χρόνος είναι ένας πολύτιμος πόρος και είμαι διαθέσιμος να σας
              συναντήσω για μια προσωπική συνεδρία. Παρακαλώ επικοινωνήστε μαζί
              μου για να συνεννοηθούμε σχετικά με τον κατάλληλο χρόνο και τον
              τρόπο συνάντησης.
            </p>
            <p className="text-center text-lg whitespace-normal ">
              Οι συνεδρίες διαρκούν 50 λεπτά (στην υπνοθεραπεία, 1 ώρα) και
              πραγματοποιούνται είτε δια ζώσης είτε online.{' '}
            </p>
          </div>
        </main>
      </section>
      <BlueDivider polygon={false} />
      <section className=" px-40">
        <div className="items-center w-full py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:items-center text-left"
              >
                <div className="mb-4">{detail.icon}</div>
                <span className="font-semibold text-lg mb-2">
                  {detail.title}
                </span>
                {detail.description && (
                  <p className="text-gray-600">{detail.description}</p>
                )}
                {detail.icons && detail.icons}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="md:col-span-1">
        <DynamicMap />
      </div>
    </div>
  );
}
