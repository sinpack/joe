import HeroSection from './components/HeroSection';
import EmblaCarousel from './components/EmblaCarousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import sliderData from '../utils/sliderData';
import Image from 'next/image';
import holistic from '../../public/holistic2.jpg';
import NavigationButton from './components/Buttons/NavigationButton';
import {
  FiHeart,
  FiHelpCircle,
  FiUsers,
  FiTrendingUp,
  FiUnlock,
  FiCompass,
} from "react-icons/fi";
import {
  FaSmileBeam,
  FaBriefcase,
  FaRegGrinBeamSweat,
} from "react-icons/fa";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { FcApproval } from "react-icons/fc";
import { FaWeightScale } from "react-icons/fa6";
import { GiSmokingFinger } from "react-icons/gi";


export default function Home() {
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    align: 'center',
    watchResize: true,
  };

  const items = [
    { title: "Μείωση του άγχους", icon: <FiHeart /> },
    { title: "Διακοπή καπνίσματος", icon: <GiSmokingFinger size="30" color='gray' /> },
    { title: "Απώλεια βάρους", icon: <FaWeightScale size="30" color='gray' /> },
    { title: "Επίτευξη προσωπικών / επαγγελματικών στόχων", icon: <HiOutlineCheckCircle /> },
    { title: "Αντιμετώπιση προβλημάτων", icon: <FiHelpCircle /> },
    { title: "Θέματα σχέσεων", icon: <FiUsers /> },
    { title: "Αύξηση αυτοπεποίθησης – αυτοεκτίμησης", icon: <FaSmileBeam /> },
    { title: "Αλλαγή καριέρας", icon: <FaBriefcase /> },
    { title: "Αυτοβελτίωση – προσωπική εξέλιξη", icon: <FiTrendingUp /> },
    { title: "Περιοριστικές πεποιθήσεις", icon: <FiUnlock /> },
    { title: "Συναισθηματική διαχείριση", icon: <FaRegGrinBeamSweat /> },
  ];

  const FeaturesSection = () => {
    return (
      <section className="w-full py-20 bg-[#FEEBE7] ">
        <div className='flex flex-col'>
          <div className="text-center mb-24">
            <h1 className="font-bold text-grey-600 tracking-wide underline">
              ΜΕ ΤΙ ΜΠΟΡΟΥΜΕ ΝΑ ΑΣΧΟΛΗΘΟΥΜΕ            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 md:px-20 lg:px-20 xl:px-60">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className='flex w-fit items-center justify-center'>
                  <FcApproval size="30" />
                </div>
                <h4 className='text-gray-600 font-semibold'>{item.title}</h4>
              </div>
            ))}
          </div></div>
      </section>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full bg-sky-50">
      <HeroSection />
      <section className="container mx-auto pb-40 pt-20 bg-sky-50 ">
        <div className="flex flex-col justify-center text-center px-2.5 md:px-40 lg:px-60">
          <div className="flex place-self-center pb-20">
            <NavigationButton text="ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ" link="/contact" />
          </div>
          <h2 className="mt-5 text-balance">
            Ονομάζομαι Γεώργιος Αντωνόπουλος και είμαι πιστοποιημένος Ολιστικός
            - Συνθετικός Coach, διαθέτοντας πλούσιο υπόβαθρο στις Τέχνες και τις
            Επιστήμες.
            <br className="lg:hidden" />
            <a href="/about" className="text-blue-600 text-base ml-2.5">
              Διαβάστε περισσότερα
            </a>
          </h2>
          <div className="flex place-self-center mt-20"></div>
        </div>
      </section>
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={holistic}
            alt="holistic"
            fill
            style={{
              objectFit: 'cover',
            }}
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center justify-between text-center container mx-auto  space-y-5 relative z-10 h-full">
          <div className="flex flex-col space-y-5 px-2.5 md:px-40 lg:px-60 lg:mt-10">
            <h1 className="font-bold text-grey-600 mt-5 tracking-normal">
              Holistic - Integrative Coaching Psychology{' '}
            </h1>
            <h3 className="mb-10 text-grey-600 font-semibold text-balance">
              Το holistic - integrative coaching psychology εστιάζει στην ισορροπία μεταξύ
              σώματος, νου, συναισθήματος και πνεύματος, προσφέροντας μια
              σφαιρική προσέγγιση για την αντιμετώπιση των προκλήσεων και την
              επίτευξη προσωπικών/επαγγελματικών στόχων.
              <br className="lg:hidden" />
              <a
                href="/holistic-integrative-coaching"
                className="text-blue-600 text-base ml-2.5"
              >
                Διαβάστε περισσότερα
              </a>
            </h3>
          </div>
        </div>
      </section>
      <FeaturesSection />
      <section className="w-full py-40 px-4 bg-gradient-to-b from-[#FEEBE7] to-sky-50">
        <div className="flex flex-col justify-center text-center px-2.5 md:px-40 lg:px-60 space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold underline">
            Υπηρεσίες - Θεραπείες{' '}
          </h2>
          <h3 className="mb-10 text-pretty">
            Ως holistic - integrative psychology coach, προσφέρω μια σειρά υπηρεσιών
            προσαρμοσμένων στις μοναδικές σας ανάγκες και στόχους. Μαζί,
            μπορούμε να εργαστούμε για την ευημερία σας.
            <br className="lg:hidden" />
            <a href="/treatments" className="text-blue-600 text-base ml-2.5">
              Διαβάστε περισσότερα
            </a>
          </h3>
          <EmblaCarousel slides={sliderData} options={OPTIONS} />
          <div className="flex place-self-center pt-10">
            <NavigationButton text="ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ" link="/contact" />
          </div>
        </div>
      </section>
    </main>
  );
}
