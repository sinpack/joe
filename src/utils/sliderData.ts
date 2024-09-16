import artTherapy from '../../public/images/art-therapy.jpg';
import sleepTherapy from '../../public/images/sleep-therapy.jpg';
import transpersonalCoaching from '../../public/images/transpersonal-coaching.jpg';
import positivePsychology from '../../public/images/positive-psychology.jpg';
import cbt from '../../public/images/cbt.jpg';
import mindfulness from '../../public/images/mindfulness.jpg';
import guidedImagery from '../../public/images/guided-imagery.jpg';
import focusing from '../../public/images/focusing.jpg';
import { StaticImageData } from 'next/image';

export type SliderDataType = {
  id: number;
  title: string;
  url: string | StaticImageData;
};

const sliderData: SliderDataType[] = [
  {
    id: 1,
    title: 'EXPRESSIVE ARTS THERAPY/ΘΕΡΑΠΕΙΑ ΜΕΣΩ ΤΕΧΝΗΣ',
    url: artTherapy,
  },

  {
    id: 2,
    title: 'ΥΠΝΟΘΕΡΑΠΕΙΑ',
    url: sleepTherapy,
  },
  {
    id: 3,
    title: 'TRANSPERSONAL COACHING/ΥΠΕΡΠΡΟΣΩΠΙΚΟ COACHING',
    url: transpersonalCoaching,
  },
  {
    id: 4,
    title: 'ΘΕΤΙΚΗ ΨΥΧΟΛΟΓΙΑ',
    url: positivePsychology,
  },
  {
    id: 5,
    title: 'ΤΕΧΝΙΚΕΣ ΧΑΛΑΡΩΣΗΣ + CBT',
    url: cbt,
  },
  {
    id: 6,
    title: 'MINDFULNESS ΔΙΑΛΟΓΙΣΜΟΣ',
    url: mindfulness,
  },
  {
    id: 7,
    title: 'ΚΑΘΟΔΗΓΟΥΜΕΝΕΣ ΕΙΚΟΝΕΣ ΚΑΙ ΟΡΑΜΑΤΙΣΜΟΙ',
    url: guidedImagery,
  },
  {
    id: 8,
    title: 'FOCUSING',
    url: focusing,
  },
];

export default sliderData;
