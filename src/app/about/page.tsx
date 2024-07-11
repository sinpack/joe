import React from 'react';
import Link from 'next/link';
import { Advent_Pro } from 'next/font/google';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import Divider from '../components/Divider';

const adventPro = Advent_Pro({
  subsets: ['latin', 'greek'],
  weight: '400',
  variable: '--font-advent-pro',
});

const AboutPage = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="flex flex-col space-y-5 items-center container max-w-screen-xl mx-auto px-4">
        <Image
          src="./images/profile-joe.png"
          alt="profile"
          className="rounded-full shadow-xl dark:shadow-gray-800"
          priority
          width={200}
          height={100}
          objectFit="contain"
          quality={100}
        />
        <div className="text-center">
          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            ΓΙΩΡΓΟΣ ΑΝΤΩΝΟΠΟΥΛΟΣ{' '}
          </h6>

          <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            Mental Health Joe{' '}
          </h1>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
            &quot Neque porro quisquam est qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit...&quot &quotΔεν υπάρχει κανείς
            που να αγαπάει τον ίδιο τον πόνο, να τον αναζητά και να θέλει να τον
            νιώθει, επειδή απλά είναι πόνος... &quot
          </p>

          <section className="py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
              <div className="flex flex-col">
                <div className="bg-gray-50 px-8 py-10 rounded-md space-y-5">
                  <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                    <Image
                      src="/images/meditate.jpg"
                      alt="meditate"
                      className="shadow-xl dark:shadow-gray-800"
                      height={200}
                      width={200}
                      quality={100}
                    />{' '}
                  </div>

                  <div className="inline-flex items-center justify-center w-full space-x-5">
                    <h4 className="flex max-w-fit whitespace-nowrap font-medium text-gray-700 text-lg">
                      Ποιός είμαι
                    </h4>
                    <Divider />
                  </div>
                  <p className="text-justify mb-3 text-gray-500 dark:text-gray-400 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
                    Είμαι έμπειρος ψυχολόγος με πάνω από 10 χρόνια εμπειρίας
                    στον τομέα της ψυχικής υγείας. Αποφοίτησα από το
                    Πανεπιστήμιο Αθηνών με πτυχίο στην Ψυχολογία και συνέχισα
                    τις σπουδές μου με μεταπτυχιακό στην Κλινική Ψυχολογία από
                    το ίδιο πανεπιστήμιο.
                  </p>
                  <p className="text-justify text-gray-500 dark:text-gray-400">
                    Επιπλέον, συμμετέχω τακτικά σε επαγγελματικά σεμινάρια και
                    συνέδρια για να ενημερώνομαι για τις τελευταίες εξελίξεις
                    στον τομέα της ψυχολογίας και να βελτιώνω συνεχώς τις
                    δεξιότητές μου. Πιστεύω στη σημασία της συνεχούς εκπαίδευσης
                    και της επαγγελματικής ανάπτυξης για την παροχή των
                    καλύτερων δυνατών υπηρεσιών στους πελάτες μου.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-10 md:py-16 ">
            <div className="flex flex-col items-center lg:items-stretch space-x-0 h-fit lg:flex-row lg:space-x-5">
              <article className="basis-1/2">
                <div className="mb-8">
                  <div className="flex items-center justify-start h-full">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Η ΜΕΘΟΔΟΣ ΜΟΥ
                    </h2>
                  </div>
                  <div>
                    <p className="mb-3 text-justify text-gray-500 dark:text-gray-400">
                      Ας εξερευνήσουμε τη διαδικασία μου—μια καλά δομημένη
                      προσέγγιση για τη βελτίωση της ψυχικής σας υγείας.
                      Περιλαμβάνει τέσσερα βασικά βήματα:
                    </p>
                  </div>
                </div>
                <ol>
                  <li className="space-y-5">
                    <div className="flex items-center justify-start h-full mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        1. Αξιολόγηση και στόχοι
                      </h3>
                    </div>
                    <div className="flex items-center justify-start h-full ">
                      <p className="whitespace-normal text-justify text-gray-500 dark:text-gray-400 tracking-tight">
                        Ξεκινάμε με μια αξιολόγηση των προκλήσεων, των δυνάμεων
                        και των στόχων σας. Μαζί, ορίζουμε σαφείς στόχους για
                        την πορεία μας.
                      </p>
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="flex items-center justify-start h-full mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        2. Συνεδρίες θεραπείας
                      </h3>
                    </div>
                    <div>
                      <p className="whitespace-normal text-justify text-gray-500 dark:text-gray-400">
                        Σε ένα ασφαλές και υποστηρικτικό περιβάλλον, συζητάμε
                        τις σκέψεις και τα συναισθήματά σας. Χρησιμοποιώ
                        τεχνικές βασισμένες σε αποδείξεις για να βοηθήσω στην
                        ανάπτυξη στρατηγικών αντιμετώπισης και προσωπικής
                        ανάπτυξης.
                      </p>
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="flex items-center justify-start h-full mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        3. Παρακολούθηση προόδου
                      </h3>
                    </div>
                    <div>
                      <p className=" whitespace-normal text-justify text-gray-500 dark:text-gray-400">
                        Τακτικές αξιολογήσεις προόδου είναι βασικές.
                        Παρακολουθούμε την πρόοδό σας και προσαρμόζουμε την
                        προσέγγισή μας για να διασφαλίσουμε ότι κινούμαστε προς
                        τους στόχους σας.
                      </p>
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="flex items-center justify-start h-full mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        4. Ολοκλήρωση και μετέπειτα φροντίδα
                      </h3>
                    </div>
                    <div>
                      <p className="whitespace-normal text-justify text-gray-500 dark:text-gray-400">
                        Στο τέλος της πορείας μας, σχεδιάζουμε από κοινού τη
                        μετάβαση. Ανασκοπούμε την πρόοδό σας, τις δεξιότητες που
                        αποκτήσατε και δημιουργούμε ένα σχέδιο για τη διατήρηση
                        της ευεξίας σας.
                      </p>
                    </div>
                  </li>
                </ol>
              </article>
              <div className="relative w-1/2 lg:w-1/2 h-64 lg:h-auto lg:flex-1">
                <Image
                  src="/images/self-accept.jpg"
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
