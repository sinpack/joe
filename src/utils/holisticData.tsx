import { ReactNode } from 'react';
import { CustomLink } from '../app/components/CustomLink';
interface HolisticDataProps {
  title: string;
  descriptions?: string[];
  color: string;
  footer?: string | ReactNode;
  bulletPoints?: string[];
}

const holisticData: HolisticDataProps[] = [
  {
    title: 'ΤΙ ΕΙΝΑΙ ΤΟ HOLISTIC - INTEGRATIVE COACHING',
    descriptions: [
      'Το Holistic – Integrative Coaching συνδυάζει παραδοσιακές και εναλλακτικές τεχνικές με στόχο την ολιστική ανάπτυξη και βελτίωση του ατόμου. Εστιάζει στην ισορροπία μεταξύ σώματος, νου, συναισθήματος και πνεύματος, προσφέροντας μια σφαιρική προσέγγιση για την αντιμετώπιση των προκλήσεων και την επίτευξη προσωπικών/επαγγελματικών στόχων.',
    ],
    color: '#D4A5A5',
  },
  {
    title: 'ΣΕ ΠΟΙΟΥΣ ΑΠΕΥΘΥΝΕΤΑΙ',
    descriptions: [
      'Το Holistic - Integrative Coaching απευθύνεται σε υγιή/μη κλινικό πληθυσμό που επιθυμεί να βελτιώσει τη συνολική ποιότητα της ζωής του μέσω μιας ολιστικής και ολοκληρωμένης προσέγγισης. Συγκεκριμένα, είναι κατάλληλο για όσους αναζητούν ισορροπία μεταξύ του νου, του σώματος και της ψυχής, καθώς και για όσους θέλουν να ενισχύσουν την προσωπική τους ανάπτυξη, να βρουν νόημα και σκοπό στη ζωή τους και να αποκτήσουν μεγαλύτερη ευεξία. Επίσης, απευθύνεται σε ανθρώπους που αντιμετωπίζουν προσωπικές/επαγγελματικές προκλήσεις ή αλλαγές στη ζωή τους και χρειάζονται την κατάλληλη υποστήριξη για να επιτύχουν τους στόχους τους.',
    ],
    color: '#A9D6E5',
  },
  {
    title: 'ΜΕ ΤΙ ΜΠΟΡΟΥΜΕ ΝΑ ΑΣΧΟΛΗΘΟΥΜΕ',
    color: '#F1DEC6',
    bulletPoints: [
      'Μείωση του άγχους',
      'Διακοπή καπνίσματος (1 συνεδρία)',
      'Απώλεια βάρους',
      'Επίτευξη προσωπικών / επαγγελματικών στόχων',
      'Αντιμετώπιση προβλημάτων',
      'Θέματα σχέσεων (επαγγελματικές, διαπροσωπικές, ερωτικές κτλ.)',
      'Αύξηση αυτοπεποίθησης – αυτοεκτίμησης',
      'Αλλαγή καριέρας',
      'Αυτοβελτίωση – προσωπική εξέλιξη',
      'Περιοριστικές πεποιθήσεις',
      'Συναισθηματική διαχείριση',
      'Εύρεση εσωτερικού σκοπού',
    ],
    footer: (
      <div className="flex items-center w-full justify-center">
        <CustomLink text="Δείτε περισσότερα" url="/treatments" />
      </div>
    ),
  },
  {
    title: 'Η ΠΡΟΣΕΓΓΙΣΗ ΜΟΥ ',
    descriptions: [
      'Είναι βασισμένη στην προσωποκεντρική προσέγγιση του ανθρωπιστικού ψυχολόγου Carl Rogers. Αυτή η προσέγγιση εδράζεται στην πεποίθηση ότι τα άτομα έχουν την ικανότητα να πραγματοποιήσουν το δυναμικό τους για ανάπτυξη και αλλαγή. Ο Ρότζερς έδινε έμφαση στην ενσυναίσθηση, την άνευ όρων θετική αποδοχή και την αυθεντικότητα στη θεραπευτική σχέση. Πίστευε ότι η παροχή ενός υποστηρικτικού και μη επικριτικού περιβάλλοντος μπορεί να βοηθήσει τους πελάτες να εξερευνήσουν τα συναισθήματά τους και τις εμπειρίες τους, οδηγώντας στην προσωπική ανάπτυξη και την αποδοχή του εαυτού. Συνολικά, η προσέγγιση του Ρότζερς επικεντρωνόταν στο να ενδυναμώσει τα άτομα να ανακαλύψουν τις δικές τους λύσεις και να επιφέρουν θετικές αλλαγές στη ζωή τους. Ο κύριος σκοπός μου είναι να σου παρέχω τα κατάλληλα εργαλεία, τα οποία θα σε βοηθήσουν να ανακαλύψεις καλύτερα τον εαυτό σου και να αξιοποιήσεις τις πραγματικές σου δυνατότητες.',
    ],
    color: '#A8C3A7',
  },
  {
    title: 'ΣΥΝΕΔΡΙΕΣ',
    descriptions: [
      'Οι συνεδρίες έχουν διάρκεια περίπου 50 λεπτά και πραγματοποιούνται είτε δια ζώσης** ή online μέσω {SKYPE_LINK}. Η συχνότητά τους μπορεί να είναι εβδομαδιαία ή κάθε 2 εβδομάδες. Στις συνεδρίες μπορούμε να χρησιμοποιήσουμε διάφορες υπηρεσίες/θεραπείες, προσαρμοσμένες στις ανάγκες του πελάτη. Το coaching είναι μια βραχυπρόθεσμη διαδικασία συναντήσεων. Μόλις επιτευχθεί ο στόχος μας οι συναντήσεις μας σταματάνε, εκτός εάν θέλουμε να επιτύχουμε έναν καινούργιο στόχο.',
    ],
    color: '#C4B7CB',
    footer:
      '**Στο χώρο εργασίας μου ή κατόπιν συνεννόησης σε κάποιο ήσυχο εξωτερικό χώρo',
  },
];

export default holisticData;
