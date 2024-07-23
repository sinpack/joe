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
      'Θεραπευτική τεχνική που χρησιμοποιεί τον ύπνο για την αντιμετώπιση και την ανάλυση ψυχολογικών προβλημάτων.',
    ],
    color: '#D4A5A5',
  },
  {
    id: 3,
    title: 'TRANSPERSONAL COACHING/ΥΠΕΡΠΡΟΣΩΠΙΚΟ COACHING',
    nameId: 'transpersonal-coaching',
    image: transpersonalCoaching,
    descriptions: [
      'Σύγχρονη μέθοδος coaching που επικεντρώνεται στην ανάπτυξη της προσωπικής αυτογνωσίας και της διανόησης.',
    ],
    color: '#A8C3A7',
  },
  {
    id: 4,
    title: 'ΘΕΤΙΚΗ ΨΥΧΟΛΟΓΙΑ',
    nameId: 'positive-psychology',
    image: positivePsychology,
    descriptions: [
      'Ψυχολογική προσέγγιση που επικεντρώνεται στην ανάπτυξη των θετικών ψυχικών διαδικασιών και της ευημερίας.',
    ],
    color: '#C4B7CB',
  },
  {
    id: 5,
    title: 'ΤΕΧΝΙΚΕΣ ΧΑΛΑΡΩΣΗΣ + CBT',
    nameId: 'relaxation-techniques-cbt',
    image: cbt,
    descriptions: [
      'Συνδυασμός τεχνικών αποκατάστασης και Συμπεριφορικής Θεραπείας για την αντιμετώπιση της άγχους και των καταστάσεων άγχους.',
    ],
    color: '#FFFACD',
  },
  {
    id: 6,
    title: 'MINDFULNESS ΔΙΑΛΟΓΙΣΜΟΣ',
    nameId: 'mindfulness',
    image: mindfulness,
    descriptions: [
      'Ψυχολογική τεχνική που επικεντρώνεται στην ανάπτυξη της προσεκτικότητας και της επίγνωσης στην καθημερινότητα.',
    ],
    color: '#F7B2A3',
  },
  {
    id: 7,
    title: 'ΚΑΘΟΔΗΓΟΥΜΕΝΕΣ ΕΙΚΟΝΕΣ & ΟΡΑΜΑΤΙΣΜΟΙ',
    nameId: 'guided-imagery',
    image: guidedImagery,
    descriptions: [
      'Ψυχολογική μέθοδος που χρησιμοποιεί την οπτική φαντασία για την αυτογνωσία και την ενίσχυση της θεραπευτικής διαδικασίας.',
    ],
    color: '#B3A394',
  },
];

export default therapyTools;
