export interface therapyTool {
  title: string;
  nameId: string;
  descriptions?: string[];
  color: string;
}
const therapyTools: therapyTool[] = [
  {
    title: 'ART THERAPY/ΘΕΡΑΠΕΙΑ ΜΕΣΩ ΤΕΧΝΗΣ',
    nameId: 'art-therapy',
    descriptions: [
      'Μέθοδος θεραπείας που χρησιμοποιεί την τέχνη ως μέσο για την επίτευξη εσωτερικής αλλαγής και αυτογνωσίας.',
    ],
    color: '#A9D6E5',
  },
  {
    title: 'ΥΠΝΟΘΕΡΑΠΕΙΑ',
    nameId: 'hypnotherapy',

    descriptions: [
      'Θεραπευτική τεχνική που χρησιμοποιεί τον ύπνο για την αντιμετώπιση και την ανάλυση ψυχολογικών προβλημάτων.',
    ],
    color: '#D4A5A5',
  },
  {
    title: 'TRANSPERSONAL COACHING/ΥΠΕΡΠΡΟΣΩΠΙΚΟ COACHING',
    nameId: 'transpersonal-coaching',

    descriptions: [
      'Σύγχρονη μέθοδος coaching που επικεντρώνεται στην ανάπτυξη της προσωπικής αυτογνωσίας και της διανόησης.',
    ],
    color: '#A8C3A7',
  },
  {
    title: 'ΘΕΤΙΚΗ ΨΥΧΟΛΟΓΙΑ',
    nameId: 'positive-psychology',

    descriptions: [
      'Ψυχολογική προσέγγιση που επικεντρώνεται στην ανάπτυξη των θετικών ψυχικών διαδικασιών και της ευημερίας.',
    ],
    color: '#C4B7CB',
  },
  {
    title: 'ΤΕΧΝΙΚΕΣ ΧΑΛΑΡΩΣΗΣ + CBT',
    nameId: 'relaxation-techniques-cbt',

    descriptions: [
      'Συνδυασμός τεχνικών αποκατάστασης και Συμπεριφορικής Θεραπείας για την αντιμετώπιση της άγχους και των καταστάσεων άγχους.',
    ],
    color: '#FFFACD',
  },
  {
    title: 'MINDFULNESS ΔΙΑΛΟΓΙΣΜΟΣ',
    nameId: 'mindfulness',

    descriptions: [
      'Ψυχολογική τεχνική που επικεντρώνεται στην ανάπτυξη της προσεκτικότητας και της επίγνωσης στην καθημερινότητα.',
    ],
    color: '#F7B2A3',
  },
  {
    title: 'ΚΑΘΟΔΗΓΟΥΜΕΝΕΣ ΕΙΚΟΝΕΣ ΚΑΙ ΟΡΑΜΑΤΙΣΜΟΙ',
    nameId: 'guided-imagery',
    descriptions: [
      'Ψυχολογική μέθοδος που χρησιμοποιεί την οπτική φαντασία για την αυτογνωσία και την ενίσχυση της θεραπευτικής διαδικασίας.',
    ],
    color: '#B3A394',
  },
];

export default therapyTools;
