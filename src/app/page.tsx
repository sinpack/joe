'use client';
import PrimarySolidButton from './components/Buttons/PrimarySolidButton';
import HeroSection from './components/HeroSection';
import { useRouter } from 'next/navigation';
import EmblaCarousel from './components/EmblaCarousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import sliderData from '@/utils/sliderData';
import Image from 'next/image';
import holistic from '../../public/holistic2.jpg';

export default function Home() {
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    align: 'center',
    watchResize: true,
  };

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full bg-sky-50">
      <HeroSection />
      <section className="container mx-auto py-40 px-4 bg-sky-50">
        <div className="flex flex-col justify-center text-center px-20 lg:px-60">
          <h2 className="mt-4">
            Είμαι ο Γεώργιος Αντωνόπουλος, πιστοποιημένος Ολιστικός Coach με
            πλούσιο υπόβαθρο στις Τέχνες και τις Επιστήμες. Εξειδικεύομαι στην
            Ολιστική Προπονητική Ψυχολογία με διεθνείς πιστοποιήσεις.{' '}
            <a href="/bio" className="text-blue-600 text-base ml-2.5">
              Διαβάστε περισσότερα
            </a>
          </h2>
          <div className="flex place-self-center mt-20">
            <PrimarySolidButton
              text="ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ"
              onClick={() => router.push('/contact')}
              width={300}
            />
          </div>
        </div>
      </section>
      <section className="relative w-full h-[40vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={holistic}
            alt="holistic"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="flex flex-col items-center justify-between text-center container mx-auto px-20 lg:px-64 space-y-5 relative z-10 h-full">
          <div className="flex flex-col space-y-5">
            <h2 className="text-3xl font-bold text-center text-grey-600 mt-5">
              Holistic Coaching{' '}
            </h2>
            <p className="mb-10 text-grey-600 font-bold">
              Το holistic coaching προσεγγίζει την προσωπική ανάπτυξη με έναν
              ολοκληρωμένο τρόπο, εστιάζοντας στην ισορροπία μεταξύ νου, σώματος
              και πνεύματος για συνολική ευημερία και ανάπτυξη.
              <a
                href="/holistic-coaching"
                className="text-blue-600 text-base ml-2.5"
              >
                Διαβάστε περισσότερα
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-40 px-4">
        <div className="flex flex-col justify-center text-center px-20 lg:px-60 space-y-5">
          <h2 className="text-3xl font-bold text-center">
            Θεραπείες και Μέθοδοι
          </h2>
          <p className="mb-10">
            As a licensed psychologist, I offer a range of therapy options
            tailored to your unique needs and goals. Together, we can work
            towards your well-being through online counseling services.
          </p>
          <EmblaCarousel slides={sliderData} options={OPTIONS} />
          <div className="flex place-self-center pt-10">
            <PrimarySolidButton
              text="ΜΑΘΕ ΠΕΡΙΣΣΟΤΕΡΑ ΓΙΑ ΤΙΣ ΘΕΡΑΠΕΙΕΣ"
              onClick={() => router.push('/treatments')}
              width={400}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
