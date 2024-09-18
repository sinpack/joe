import React from 'react';
import Image from 'next/image';
import bioData from '../../utils/BioData';
import TherapyToolCard from '../treatments/TherapyToolCard';
import profilePic from '../../../public/images/profile-ai.png';
import ScrollToTopButton from '../components/Buttons/ScrollToTopButton';
import { Metadata } from 'next';
import HolisticCard from '../holistic-integrative-coaching/HolisticCard';

export const metadata: Metadata = {
  title: 'Βιογραφικό Γιώργου Αντωνόπουλου',
};
const AboutPage = () => {
  return (
    <div className="bg-sky-50">
      <section className="py-20 container mx-auto px-10 sm:px-28 header:px-60">
        <div className="flex flex-col items-center ">
          <h1 className="text-center font-bold mb-10 tracking-wider">ΠΡΟΦΙΛ</h1>
          <div className="flex justify-center mb-8">
            <Image
              src={profilePic}
              alt="profile"
              className="rounded-3xl shadow-xl"
              width={300}
              quality={100}
              priority
            />
          </div>
          <div className="flex flex-col lg:hidden space-y-5">
            {bioData.map((tool, index) => (
              <TherapyToolCard
                key={index}
                title={tool.title}
                descriptions={tool.descriptions}
                backgroundColor={tool.color}
                bulletPoints={tool.bulletPoints}
                titleCardClassName="!text-center !min-w-[300px] max-w-[400px]"
                descriptionCardClassName="!min-w-[300px] max-w-[400px] !text-justify !tracking-tighter !leading-normal"
                button={false}
              />
            ))}
          </div>
          <div className="hidden space-y-5 lg:flex lg:flex-col">
            {bioData.map((item, index) => (
              <HolisticCard
                key={index}
                title={item.title}
                descriptions={item.descriptions}
                backgroundColor={item.color}
                bulletPoints={item.bulletPoints}
                className="bg-sky-50 h-full !text-justify !tracking-tighter !leading-normal"
              />
            ))}
          </div>
        </div>
      </section>{' '}
      {/* <BlueDivider polygon={false} />
      <section className="flex flex-col w-full mt-10">
        <div className="flex flex-col items-center justify-center text-center space-y-10">
          <div className="container mx-auto px-10 sm:px-28 header:px-60 space-y-10">
            <h1 className="text-center font-bold tracking-widest">
              Ο ΧΩΡΟΣ ΜΟΥ
            </h1>
            <p className="text-balance">
              Στο θεραπευτικό γραφείο, έχω δημιουργήσει έναν ζεστό και φιλόξενο
              χώρο όπου ο καθένας μπορεί να βρει ηρεμία και ασφάλεια. Εδώ,
              μπορείτε να χαλαρώσετε και να αφεθείτε, γνωρίζοντας ότι βρίσκεστε
              σε ένα περιβάλλον γεμάτο κατανόηση και υποστήριξη, με στόχο την
              προώθηση της ολιστικής σας ευεξίας και ισορροπίας.
            </p>
          </div>

          <Image
            src={officeImage}
            alt="Background"
            layout="cover"
            objectFit="responsive"
            quality={100}
          />
        </div>
      </section> */}
      <ScrollToTopButton />
    </div>
  );
};

export default AboutPage;
