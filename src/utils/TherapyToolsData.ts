import artTherapy from '../../public/images/art-therapy.jpg';
import sleepTherapy from '../../public/images/sleep-therapy.jpg';
import transpersonalCoaching from '../../public/images/transpersonal-coaching.jpg';
import positivePsychology from '../../public/images/positive-psychology.jpg';
import cbt from '../../public/images/cbt.jpg';
import mindfulness from '../../public/images/mindfulness.jpg';
import guidedImagery from '../../public/images/guided-imagery.jpg';
import focusing from '../../public/images/focusing.jpg';
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
    title: 'EXPRESSIVE ARTS THERAPY/ΘΕΡΑΠΕΙΑ ΜΕΣΩ ΤΕΧΝΗΣ',
    nameId: 'art-therapy',
    image: artTherapy,
    descriptions: [
      'Μέθοδος θεραπείας που χρησιμοποιεί την τέχνη ως μέσο για την επίτευξη εσωτερικής αλλαγής και αυτογνωσίας.',
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
      'Θεραπευτική μέθοδος coaching που επικεντρώνεται στην ανάπτυξη της αυτογνωσίας και της αντιμετώπισης προβλημάτων.',
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
  {
    id: 8,
    title: 'FOCUSING',
    nameId: 'focusing',
    image: focusing,
    descriptions: [
      'Mέθοδος εσωτερικής εστίασης που βοηθά τα άτομα να αναγνωρίζουν και να κατανοούν βαθύτερα τα συναισθήματά τους μέσω της σύνδεσης με τις σωματικές τους αισθήσεις.',
    ],
    color: '#B3A394',
  },
];

export default therapyTools;
