// data.ts

export interface TherapyToolAnalysis {
  id: number;
  nameId: string;
  imageUrl: string;
  generalTitle: string;
  mainTitle: string;
  startingParagraph: string;
  linkTitle: string;
  sections: {
    title: string;
    paragraph: string;
  }[];
}

const therapyToolsAnalysis: TherapyToolAnalysis[] = [
  {
    id: 1,
    imageUrl: '/treatments/art-therapy2.jpg',
    generalTitle: 'Γενικές Πληροφορίες για την Τέχνη',
    nameId: 'art-therapy',
    mainTitle: 'ART THERAPY / ΘΕΡΑΠΕΙΑ ΜΕΣΩ ΤΕΧΝΗΣ',
    startingParagraph:
      'Η Θεραπεία Μέσω Τέχνης είναι μια μέθοδος που χρησιμοποιεί τη δημιουργική διαδικασία της τέχνης για την επίτευξη εσωτερικής αλλαγής και αυτογνωσίας.',
    linkTitle: 'Art-therapy',
    sections: [
      {
        title: 'Τι είναι η Θεραπεία Μέσω Τέχνης;',
        paragraph:
          'Η Θεραπεία Μέσω Τέχνης αξιοποιεί την τέχνη για να βοηθήσει τα άτομα να εκφράσουν συναισθήματα και σκέψεις που μπορεί να είναι δύσκολο να εκφραστούν με λέξεις.',
      },
      {
        title: 'Οφέλη της Θεραπείας Μέσω Τέχνης',
        paragraph:
          'Μπορεί να βοηθήσει στην ανακούφιση από το άγχος, τη βελτίωση της ψυχικής υγείας και την ενίσχυση της αυτογνωσίας και της αυτοεκτίμησης.',
      },
    ],
  },
  {
    id: 2,
    nameId: 'hypnotherapy',
    imageUrl: '/treatments/hypnotherapy.jpg',
    generalTitle: 'Γενικές Πληροφορίες για την Υπνοθεραπεία',
    mainTitle: 'ΥΠΝΟΘΕΡΑΠΕΙΑ',
    linkTitle: 'Υπνοθεραπεία',
    startingParagraph:
      'Η Υπνοθεραπεία είναι μια θεραπευτική τεχνική που χρησιμοποιεί τον ύπνο για την ανάλυση και την αντιμετώπιση ψυχολογικών προβλημάτων.',
    sections: [
      {
        title: 'Τι είναι η Υπνοθεραπεία;',
        paragraph:
          'Η Υπνοθεραπεία συνδυάζει τη χαλάρωση με καθοδηγούμενες προτάσεις για να βοηθήσει τα άτομα να επιτύχουν βαθιά αλλαγή στη σκέψη και τη συμπεριφορά.',
      },
      {
        title: 'Οφέλη της Υπνοθεραπείας',
        paragraph:
          'Μπορεί να βοηθήσει στη διαχείριση του άγχους, την επίλυση προβλημάτων ύπνου, και την ανακούφιση από χρόνιο πόνο.',
      },
    ],
  },
  {
    id: 3,
    nameId: 'transpersonal-coaching',
    imageUrl: '/treatments/transpersonal-coaching.jpg',
    generalTitle: 'Γενικές Πληροφορίες για το Υπερπροσωπικό Coaching',
    mainTitle: 'TRANSPERSONAL COACHING/ΥΠΕΡΠΡΟΣΩΠΙΚΟ COACHING',
    linkTitle: 'Transpersonal coaching',
    startingParagraph:
      'Το Υπερπροσωπικό Coaching επικεντρώνεται στην ανάπτυξη της προσωπικής αυτογνωσίας και της διανόησης.',
    sections: [
      {
        title: 'Τι είναι το Υπερπροσωπικό Coaching;',
        paragraph:
          'Συνδυάζει παραδοσιακές τεχνικές coaching με πνευματικές πρακτικές για να βοηθήσει τα άτομα να επιτύχουν πλήρη αυτογνωσία και προσωπική ανάπτυξη.',
      },
      {
        title: 'Οφέλη του Υπερπροσωπικού Coaching',
        paragraph:
          'Ενισχύει την αυτογνωσία, την πνευματική ανάπτυξη, και την επίτευξη προσωπικών και επαγγελματικών στόχων.',
      },
    ],
  },
  {
    id: 4,
    nameId: 'positive-psychology',
    imageUrl: '/treatments/positive-psychology.jpg',
    generalTitle: 'Γενικές Πληροφορίες για τη Θετική Ψυχολογία',
    mainTitle: 'ΘΕΤΙΚΗ ΨΥΧΟΛΟΓΙΑ',
    linkTitle: 'Θετική ψυχολογία',
    startingParagraph:
      'Η Θετική Ψυχολογία επικεντρώνεται στην ανάπτυξη των θετικών ψυχικών διαδικασιών και της ευημερίας.',
    sections: [
      {
        title: 'Τι είναι η Θετική Ψυχολογία;',
        paragraph:
          'Είναι μια προσέγγιση που επικεντρώνεται στην ενίσχυση των θετικών συναισθημάτων, των σχέσεων, και των επιτευγμάτων για τη βελτίωση της συνολικής ευημερίας.',
      },
      {
        title: 'Οφέλη της Θετικής Ψυχολογίας',
        paragraph:
          'Βοηθά τα άτομα να αναπτύξουν ανθεκτικότητα, θετική σκέψη, και να βελτιώσουν τις σχέσεις τους με άλλους.',
      },
    ],
  },
  {
    id: 5,
    nameId: 'relaxation-techniques-cbt',
    imageUrl: '/treatments/cbt.jpg',
    generalTitle: 'Γενικές Πληροφορίες για τις Τεχνικές Χαλάρωσης και CBT',
    mainTitle: 'ΤΕΧΝΙΚΕΣ ΧΑΛΑΡΩΣΗΣ + CBT',
    linkTitle: 'Τεχνικές χαλάρωσης',
    startingParagraph:
      'Συνδυασμός τεχνικών χαλάρωσης και Συμπεριφορικής Θεραπείας για την αντιμετώπιση του άγχους και των καταστάσεων άγχους.',
    sections: [
      {
        title: 'Τι είναι οι Τεχνικές Χαλάρωσης και CBT;',
        paragraph:
          'Συνδυάζουν ασκήσεις χαλάρωσης με τεχνικές Γνωσιακής Συμπεριφορικής Θεραπείας για να βοηθήσουν τα άτομα να διαχειριστούν το άγχος και να αλλάξουν αρνητικά πρότυπα σκέψης.',
      },
      {
        title: 'Οφέλη των Τεχνικών Χαλάρωσης και CBT',
        paragraph:
          'Μειώνουν το άγχος, βελτιώνουν την ψυχική υγεία, και προάγουν την ευημερία.',
      },
    ],
  },
  {
    id: 6,
    nameId: 'mindfulness',
    imageUrl: '/treatments/mindfulness.jpg',
    generalTitle: 'Γενικές Πληροφορίες για τον Διαλογισμό Mindfulness',
    mainTitle: 'MINDFULNESS ΔΙΑΛΟΓΙΣΜΟΣ',
    linkTitle: 'Mindfulness διαλογισμός',
    startingParagraph:
      'Ο Διαλογισμός Mindfulness επικεντρώνεται στην ανάπτυξη της προσεκτικότητας και της επίγνωσης στην καθημερινότητα.',
    sections: [
      {
        title: 'Τι είναι ο Διαλογισμός Mindfulness;',
        paragraph:
          'Είναι μια πρακτική που βοηθά τα άτομα να εστιάζουν στην παρούσα στιγμή με αποδοχή και χωρίς κριτική, για να βελτιώσουν την ψυχική τους υγεία και ευημερία.',
      },
      {
        title: 'Οφέλη του Διαλογισμού Mindfulness',
        paragraph:
          'Βοηθά στη μείωση του άγχους, βελτιώνει την αυτοσυγκέντρωση, και προάγει την ψυχική ηρεμία.',
      },
    ],
  },
  {
    id: 7,
    nameId: 'guided-imagery',
    imageUrl: '/treatments/guided-imagery.jpg',
    generalTitle:
      'Γενικές Πληροφορίες για τις Καθοδηγούμενες Εικόνες και Οραματισμούς',
    mainTitle: 'ΚΑΘΟΔΗΓΟΥΜΕΝΕΣ ΕΙΚΟΝΕΣ ΚΑΙ ΟΡΑΜΑΤΙΣΜΟΙ',
    linkTitle: 'Καθοδηγούμενες εικόνες',
    startingParagraph:
      'Οι Καθοδηγούμενες Εικόνες και Οραματισμοί χρησιμοποιούν την οπτική φαντασία για την αυτογνωσία και την ενίσχυση της θεραπευτικής διαδικασίας.',
    sections: [
      {
        title: 'Τι είναι οι Καθοδηγούμενες Εικόνες και Οραματισμοί;',
        paragraph:
          'Είναι μια τεχνική που βοηθά τα άτομα να χρησιμοποιήσουν τη φαντασία τους για να επιτύχουν χαλάρωση, αυτογνωσία, και θεραπευτική πρόοδο.',
      },
      {
        title: 'Οφέλη των Καθοδηγούμενων Εικόνων και Οραματισμών',
        paragraph:
          'Ενισχύουν τη χαλάρωση, προάγουν την ψυχική υγεία, και βοηθούν στην επεξεργασία συναισθημάτων και εμπειριών.',
      },
    ],
  },
];

export default therapyToolsAnalysis;