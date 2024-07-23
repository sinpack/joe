// src/app/metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Γιώργος Αντωνόπουλος - Holistic Coach',
    default: 'Γιώργος Αντωνόπουλος - Holistic Coach',
  },
  description: 'Η επίσημη ιστοσελίδα του ψυχολόγου Γιώργου Αντωνόπουλου',
  metadataBase: new URL('https://sinpack.github.io/joe/'),
  icons: {
    icon: '/favicon.ico', // Ensure favicon.ico is placed in the public directory
    apple: '/apple-touch-icon.png', // Optional: for Apple touch icon
  },
  verification: {
    google: 'NRLCkQAyXdUltIT0IL44-nl3xi9BQVaz1l_IiVUmCas',
  },
  keywords: [
    'holistic coaching',
    'giorgos antonopoulos',
    'γιώργος αντωνόπουλος',
    'psychology',
  ],
};
