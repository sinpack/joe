interface BioDataItem {
  title: string;
  description?: string;
  color: string;
  bulletPoints?: string[];
}

const bioData: BioDataItem[] = [
  {
    title: 'ΒΙΟΓΡΑΦΙΚΟ',
    description:
      'Ονομάζομαι Γεώργιος Αντωνόπουλος. Γεννήθηκα στην Πάτρα, το 1987. Έκανα 10 δουλειές, έχω 3 πτυχία, μου αρέσει το πλέξιμο και ο Clive Barker.',
    color: '#A9D6E5',
  },
  {
    title: 'ΓΙΑΤΙ ΕΠΕΛΕΞΑ ΤΟ HOLISTIC-INTEGRATIVE COACHING',
    description:
      'Το holistic-integrative coaching είναι μια προσέγγιση στο coaching που εστιάζει στην ολιστική αντιμετώπιση του ανθρώπου, συνδυάζοντας διάφορες διαστάσεις της ζωής του όπως η σωματική, η ψυχολογική, η συναισθηματική και η πνευματική ευημερία. Στόχος του είναι η ανάπτυξη του ατόμου σε όλες αυτές τις πτυχές, προσφέροντας εργαλεία για την επίτευξη ισορροπίας, ευημερίας και επιτυχίας σε προσωπικό και επαγγελματικό επίπεδο.',
    color: '#D4A5A5',
  },
  {
    title: 'Η ΙΔΙΟΤΗΤΑ ΜΟΥ',
    description:
      'Ολιστικός Coach - Ψυχολογίας Dip HC (Diploma in Holistic – Integrative Coaching Psychology). Πιστοποιημένος από δύο παγκόσμιους οργανισμούς, την International Society for Coaching Psychology (ISCP) και την International Association of Coaches, Therapists & Mentors (IACTM). Είναι μια εκπαίδευση βασισμένη πρωτίστως στην προπονητική ψυχολογία (coaching psychology), ένας σχετικά νέος κλάδος της ακαδημαϊκής μεταπτυχιακής ψυχολογίας. Επιπλέον διαθέτω το δίπλωμα «Βασικές Δεξιότητες στην Υπνοθεραπεία». ',
    color: '#A8C3A7',
  },
  {
    title: 'Η ΕΚΠΑΙΔΕΥΣΗ ΜΟΥ',
    color: '#C4B7CB',
    bulletPoints: [
      'Behavioural Coaching – evidence based ',
      '	Cognitive Behavioural Coaching – evidence based ',
      '	Mindfulness – evidence based',
      '	Positive Psychology – evidence based ',
      '	Expressive Arts Therapy – evidence based ',
      '	Mental Imagery practices – evidence based',
      '	Transpersonal Psychology – evidence based',
      '	Υπνοανάλυση – evidence based clinical hypnosis',
    ],
  },
];
export default bioData;
