interface BioDataItem {
  title: string;
  descriptions?: string[];
  color: string;
  bulletPoints?: string[];
}

export const heroVideoUrl =
  'https://www.dropbox.com/scl/fi/cpb06wf0tqhzaksxcatny/hero.mp4?rlkey=x4ihxj4jmyjf0p2if64pja1lb&dl=1';

const bioData: BioDataItem[] = [
  {
    title: 'ΒΙΟΓΡΑΦΙΚΟ',
    descriptions: [
      'Ονομάζομαι Γεώργιος Αντωνόπουλος και γεννήθηκα το 1987, στην Πάτρα, όπου και κατοικώ. Από την παιδική μου ηλικία άρχισα να αναπτύσσω έντονο ενδιαφέρον για διάφορους τομείς των Τεχνών και των Επιστημών. Καθώς μεγάλωνα, η ανάγκη μου να επεκτείνω το μορφωτικό μου επίπεδο καθώς και να εξερευνήσω καινούργια γνωσιακά πεδία, με ώθησε στο να ασχοληθώ με τη Μουσική, την Ψυχολογία, τις Ξένες Γλώσσες, την Πληροφορική και τις Ανθρωπιστικές Επιστήμες.',
      'Είμαι απόφοιτος Τριτοβάθμιας Εκπαίδευσης, του προγράμματος «Σπουδές στον Ευρωπαϊκό Πολιτισμό», μέσω του οποίου ήρθα σε επαφή με επιστημονικά πεδία όπως: Οικονομική και Κοινωνική Ιστορία, Φιλοσοφία, Επιστήμες και Τέχνες, Ανθρωπογεωγραφία, Μεσαιωνικός και Δυτικός Κόσμος, Εξέλιξη Και Διακυβέρνηση Της Ευρωπαϊκής Ένωσης κ.ά. . Διαθέτω άδεια διδασκαλίας της αγγλικής γλώσσας και έχω ολοκληρώσει επιτυχώς σεμινάριο σχετικά με τις μαθησιακές δυσκολίες. Ανά τα χρόνια, έχω εργαστεί σε πολλούς και διάφορους τομείς της αγοράς εργασίας, από τους οποίους έχω αποκομίσει πολύτιμη γνώση και εμπειρία.',
      'Στον ελεύθερο χρόνο μου, μεταξύ άλλων, απολαμβάνω να παίζω και να ακούω μουσική, να αθλούμαι, να έρχομαι σε επαφή με τη φύση και τα ζώα και να συγγράφω. Η προσωπική και η επαγγελματική μου ανάπτυξη αποτελούν για εμένα ενθουσιώδη κίνητρα και αναζητώ συνεχώς καινούργιες ευκαιρίες για μάθηση και αυτοεξέλιξη.',
    ],
    color: '#A9D6E5',
  },
  {
    title: 'ΓΙΑΤΙ ΕΠΕΛΕΞΑ ΤΟ HOLISTIC-INTEGRATIVE COACHING',
    descriptions: [
      'Διότι είναι μια προσέγγιση που εστιάζει στην ολιστική αντιμετώπιση του ανθρώπου, συνδυάζοντας διάφορες διαστάσεις της ζωής του, όπως η σωματική, η ψυχολογική, η συναισθηματική και η πνευματική. Στόχος του είναι η ανάπτυξη του ατόμου σε όλες αυτές τις πτυχές, προσφέροντας εργαλεία για την επίτευξη ισορροπίας, ευημερίας και επιτυχίας σε προσωπικό και επαγγελματικό επίπεδο.',
    ],
    color: '#D4A5A5',
  },
  {
    title: 'Η ΙΔΙΟΤΗΤΑ ΜΟΥ',
    descriptions: [
      'Ολιστικός Coach - Ψυχολογίας Dip HC (Diploma in Holistic – Integrative Coaching Psychology). Πιστοποιημένος από δύο παγκόσμιους οργανισμούς, την International Society for Coaching Psychology (ISCP) και την International Association of Coaches, Therapists & Mentors (IACTM). Είναι μια εκπαίδευση βασισμένη πρωτίστως στην προπονητική ψυχολογία (coaching psychology), ένας σχετικά νέος κλάδος της ακαδημαϊκής μεταπτυχιακής ψυχολογίας. Επιπλέον, διαθέτω τις πιστοποιήσεις «Holistic Counseling & Coaching Skills with Mindfulness & Expressive Arts Therapy» και «Foundation Level Hypnotherapy».',
    ],
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
      '	Transpersonal Coaching – evidence based',
      '	Υπνοθεραπεία – evidence based clinical hypnosis',
    ],
  },
];
export default bioData;
