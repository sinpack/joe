import dynamic from 'next/dynamic';
import contactDetails from './ContactDetails';
import BlueDivider from '../components/BlueDivider';
import ScrollToTopButton from '../components/Buttons/ScrollToTopButton';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Επικοινωνία Γιώργου Αντωνόπουλου',
};

export default function Contact() {
  const DynamicMap = dynamic(() => import('../components/Map'), {
    ssr: false,
  });

  return (
    <section className="bg-sky-50 py-20">
      <div className="flex flex-col items-center px-2.5 container mx-auto">
        <main className="flex flex-col w-full max-w-3xl">
          <div className="flex flex-col items-center py-10 bg-sky-50 space-y-10">
            <h1 className="flex w-fit justify-center items-center tracking-widest whitespace-normal underline decoration-2 underline-offset-2">
              ΕΠΙΚΟΙΝΩΝΙΑ
            </h1>
            <h4 className="text-center text-balance">
              Για να κλείσετε ραντεβού ή για περαιτέρω πληροφορίες, μπορείτε να
              επικοινωνήσετε μαζί μου μέσω τηλεφώνου στο 6976629913 ή μέσω
              e-mail στο georgios_antonopoulos@hotmail.com
            </h4>
          </div>
        </main>
      </div>
      <BlueDivider polygon={false} />
      <div className="items-center w-full py-20 px-2.5 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-center text-left text-wrap"
            >
              <div className="mb-4">{detail.icon}</div>
              <span className="font-semibold text-lg mb-2">{detail.title}</span>
              {detail.description && (
                <p className="text-gray-600 text-center w-full break-words whitespace-normal">
                  {detail.description}
                </p>
              )}
              {detail.icons && detail.icons}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full z-10 py-20 px-2.5 container mx-auto">
        <DynamicMap />
      </div>
      <ScrollToTopButton />
    </section>
  );
}
