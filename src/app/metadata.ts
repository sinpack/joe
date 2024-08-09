import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Γιώργος Αντωνόπουλος - Holistic Coach',
    default: 'Γιώργος Αντωνόπουλος - Holistic Coach',
  },
  description: 'Η επίσημη ιστοσελίδα του ψυχολόγου Γιώργου Αντωνόπουλου',
  metadataBase: new URL('https://joe-frontend.vercel.app/'),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
  openGraph: {
    title: 'Γιώργος Αντωνόπουλος - Holistic Coach',
    description: 'Η επίσημη ιστοσελίδα του ψυχολόγου Γιώργου Αντωνόπουλου',
    url: 'https://joe-frontend.vercel.app/',
    images: [
      {
        url: 'https://github.com/sinpack/joe/blob/main/public/opengraph-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Γιώργος Αντωνόπουλος - Holistic Coach',
    description: 'Η επίσημη ιστοσελίδα του ψυχολόγου Γιώργου Αντωνόπουλου',
    images: [
      {
        url: 'https://github.com/sinpack/joe/blob/main/public/twitter-image.jpg',
        width: 1200,
        height: 675,
      },
    ],
  },
};
