import dynamic from 'next/dynamic';
import contactDetails from './ContactDetails';
import BlueDivider from '../components/BlueDivider';
import ScrollToTopButton from '../components/Buttons/ScrollToTopButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Επικοινωνία Γιώργου Αντωνόπουλου | Γιώργος Αντωνόπουλος - Holistic Coach',
};

export default function Contact() {
  const DynamicMap = dynamic(() => import('../components/Map'), {
    ssr: false,
  });

  return (
    <div className="bg-sky-50">
      <section className="flex flex-col items-center py-20 px-20 lg:px-60 md:px-40 sm:px-30">
        <main className="flex flex-col w-full max-w-3xl">
          <div className="flex flex-col items-center py-10 bg-sky-50 space-y-20">
            <h1 className="flex w-fit justify-center items-center text-4xl tracking-widest font-bold whitespace-normal">
              Επικοινωνία
            </h1>
            <p className="text-center text-lg whitespace-normal">
              Για να κλείσετε ραντεβού ή για περαιτέρω πληροφορίες, μπορείτε να
              επικοινωνήστε μαζί μου μέσω τηλεφώνου στο 6976629913 ή μέσω e-mail
              στο georgios_antonopoulos@hotmail.com
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
                className="flex flex-col items-center lg:items-center text-left text-wrap"
              >
                <div className="mb-4">{detail.icon}</div>
                <span className="font-semibold text-lg mb-2">
                  {detail.title}
                </span>
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
      </section>
      <div className="flex flex-col w-full z-10 container mx-auto py-20 px-20">
        <DynamicMap />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
