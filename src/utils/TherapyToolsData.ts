import artTherapy from '../../public/images/art-therapy.jpg';
import sleepTherapy from '../../public/images/sleep-therapy.jpg';
import transpersonalCoaching from '../../public/images/transpersonal-coaching.jpg';
import positivePsychology from '../../public/images/positive-psychology.jpg';
import cbt from '../../public/images/cbt.jpg';
import mindfulness from '../../public/images/mindfulness.jpg';
import guidedImagery from '../../public/images/guided-imagery.jpg';
import { StaticImageData } from 'next/image';

export interface therapyTool {
  id: number;
  title: string;
  nameId: string;
  descriptions?: string[];
  color: string;
  image: string | StaticImageData;
}
const therapyTools: therapyTool[] = [
  {
    id: 1,
    title: 'ART THERAPY/ΘΕΡΑΠΕΙΑ ΜΕΣΩ ΤΕΧΝΗΣ',
    nameId: 'art-therapy',
    image: artTherapy,
    descriptions: [
      'Η θεραπεία μέσω τέχνης είναι μια μορφή θεραπείας που αξιοποιεί τη δημιουργική διαδικασία της καλλιτεχνικής έκφρασης για τη βελτίωση της ψυχικής, συναισθηματικής και σωματικής ευεξίας ενός ατόμου. Συνδυάζει παραδοσιακές ψυχοθεραπευτικές τεχνικές με τη δημιουργική διαδικασία για να βοηθήσει τους πελάτες να εξερευνήσουν τα συναισθήματά τους, σε υποσυνείδητο επίπεδο, και να ενισχύσουν την αυτογνωσία τους.',
    ],
    color: '#A9D6E5',
  },
  {
    id: 2,
    title: 'ΥΠΝΟΘΕΡΑΠΕΙΑ',
    nameId: 'hypnotherapy',
    image: sleepTherapy,
    descriptions: [
      'Θεραπευτική τεχνική που χρησιμοποιεί την ύπνωση για την αντιμετώπιση προβλημάτων ή την επίτευξη ενός στόχου.',
    ],
    color: '#D4A5A5',
  },
  {
    id: 3,
    title: 'TRANSPERSONAL COACHING/ΥΠΕΡΠΡΟΣΩΠΙΚΟ COACHING',
    nameId: 'transpersonal-coaching',
    image: transpersonalCoaching,
    descriptions: [
      'Θεραπευτική μέθοδος coaching που επικεντρώνεται στην ανάπτυξη της προσωπικής αυτογνωσίας και της αντιμετώπισης προβλημάτων.',
    ],
    color: '#A8C3A7',
  },
  {
    id: 4,
    title: 'ΘΕΤΙΚΗ ΨΥΧΟΛΟΓΙΑ',
    nameId: 'positive-psychology',
    image: positivePsychology,
    descriptions: [
      'Ψυχολογική προσέγγιση που επικεντρώνεται στην ανάπτυξη των θετικών ψυχικών διαδικασιών και της ευεξίας.',
    ],
    color: '#C4B7CB',
  },
  {
    id: 5,
    title: 'ΤΕΧΝΙΚΕΣ ΧΑΛΑΡΩΣΗΣ + CBT',
    nameId: 'relaxation-techniques-cbt',
    image: cbt,
    descriptions: [
      'Συνδυασμός τεχνικών χαλάρωσης και Συμπεριφορικής Θεραπείας για την αντιμετώπιση του άγχους και του στρες.',
    ],
    color: '#FFFACD',
  },
  {
    id: 6,
    title: 'MINDFULNESS ΔΙΑΛΟΓΙΣΜΟΣ',
    nameId: 'mindfulness',
    image: mindfulness,
    descriptions: [
      'Τεχνική που επικεντρώνεται στην ανάπτυξη της παρατήρησης και της ενσυνειδητότητας στην καθημερινότητα.',
    ],
    color: '#F7B2A3',
  },
  {
    id: 7,
    title: 'ΚΑΘΟΔΗΓΟΥΜΕΝΕΣ ΕΙΚΟΝΕΣ & ΟΡΑΜΑΤΙΣΜΟΙ',
    nameId: 'guided-imagery',
    image: guidedImagery,
    descriptions: [
      'Μέθοδος που χρησιμοποιεί την οπτική φαντασία για την αυτογνωσία και την ενίσχυση της θεραπευτικής διαδικασίας.',
    ],
    color: '#B3A394',
  },
];

export default therapyTools;
