// components/CategoryList.tsx

import React from 'react';
import Divider from '../components/Divider';
import Image from 'next/image';
import bulletImage4 from '../../../public/bullet4.png';

const categories = [
  'Μείωση του αγχους',
  'Διακοπή καπνίσματος (1 συνεδρία)',
  'Απώλεια βάρους',
  'Επίτευξη προσωπικών / επαγγελματικών στόχων',
  'Θέματα σχέσεων (επαγγελματικές, διαπροσωπικές, κτλ.)',
  'Αύξηση αυτοπεποίθησης – αυτοεκτίμησης',
  'Αλλαγή καριέρας',
  'Αυτοβελτίωση – προσωπική εξέλιξη',
  'Περιοριστικές πεποιθήσεις',
  'Συναισθηματική διαχείριση',
  'Αντιμετώπιση προβλημάτων',
  'Εύρεση εσωτερικού σκοπού',
];

const CategoryList: React.FC = () => {
  return (
    <div className="flex flex-col w-full space-y-5">
      <div className="flex flex-row items-center justify-center space-x-5">
        {/* <Divider className="border-gray-400 border" /> */}
        <h1 className="text-center py-5 text-nowrap">ΚΑΤΗΓΟΡΙΕΣ</h1>
        {/* <Divider className="border-gray-400 border" /> */}
      </div>{' '}
      <ul className="flex flex-col self-center rounded-xl border border-gray-300 border-b-0 shadow-md shadow-zinc-700 drop-shadow-md">
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex px-2.5 py-4 min-w-fit bg-sky-100 first:rounded-t-xl border-b last:rounded-b-xl border-b-gray-300 items-center"
          >
            {}
            <div className="flex-shrink-0">
              <Image
                src={bulletImage4}
                alt="bullet point"
                width={18}
                height={18}
                className="w-4 h-4"
              />
            </div>
            <p className="ml-2 leading-tight tracking-tight font-medium">
              {category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
