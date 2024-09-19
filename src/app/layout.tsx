// src/app/layout.tsx
import './globals.css';
import Header from './components/Header';
import CustomFooter from './components/Footer';
import { Open_Sans, EB_Garamond } from 'next/font/google';
import SkeletonWrapper from './components/SkeletonWrapper';
import { ReactQueryProvider } from './react-query-provider';
import { Metadata } from 'next';
import faviconIcon from '../app/icon.ico';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    template: '%s | Γεώργιος Αντωνόπουλος - Holistic Coach',
    default: 'Γεώργιος Αντωνόπουλος - Holistic Coach',
  },
  description:
    'Η επίσημη ιστοσελίδα του Ηolistic - Ιntegrative Coach Ψυχολογίας Γεώργιου Αντωνόπουλου',
  metadataBase: new URL('https://www.georgiosantonopoulos.gr'),
  icons: {
    icon: faviconIcon.src,
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'FI8LwNzh5aRiAd-2qZbc39gmN7iStGTbN4i4ld5w8L0',
  },
  keywords: [
    // English keywords
    'holistic',
    'coaching',
    'holistic - integrative coaching',
    'georgios antonopoulos',
    'giorgos antonopoulos',
    'GEORGIOS ANTONOPOULOS',
    'Holistic Coach',
    'psychology',
    'life coaching',
    'mental health',
    'personal development',
    'wellness coach',
    'mindfulness',
    'stress management',
    'self-improvement',
    'holistic therapy',
    'psychological counseling',
    'holistic health',
    'emotional well-being',
    'meditation',
    'mental wellness',
    'counseling services',
    'greek psychologist',
    'psychological support',
    // Greek keywords
    'ολιστική καθοδήγηση',
    'γεώργιος αντωνόπουλος',
    'ΓΕΩΡΓΙΟΣ ΑΝΤΩΝΟΠΟΥΛΟΣ',
    'ΓΙΩΡΓΟΣ ΑΝΤΩΝΟΠΟΥΛΟΣ holistic',
    'ΓΙΩΡΓΟΣ ΑΝΤΩΝΟΠΟΥΛΟΣ',
    'ψυχολογία',
    'προσωπική ανάπτυξη',
    'καθοδήγηση ζωής',
    'ψυχική υγεία',
    'ψυχική ευεξία',
    'προσωπική βελτίωση',
    'διαχείριση άγχους',
    'ενσυνειδητότητα',
    'ολιστική θεραπεία',
    'ψυχολογική συμβουλευτική',
    'ολιστική υγεία',
    'συναισθηματική ευεξία',
    'διαλογισμός',
    'υπηρεσίες συμβουλευτικής',
    'έλληνας ψυχολόγος',
    'ψυχολογική υποστήριξη',
  ],
  openGraph: {
    title: 'Γεώργιος Αντωνόπουλος - Holistic Coach',
    description:
      'Η επίσημη ιστοσελίδα του Ηolistic - Ιntegrative Coach Ψυχολογίας Γεώργιου Αντωνόπουλου',
    url: 'https://www.georgiosantonopoulos.gr',
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
    title: 'Γεώργιος Αντωνόπουλος - Holistic Coach',
    description:
      'Η επίσημη ιστοσελίδα του Ηolistic - Ιntegrative Coach Ψυχολογίας Γεώργιου Αντωνόπουλου',
    images: [
      {
        url: 'https://github.com/sinpack/joe/blob/main/public/twitter-image.jpg',
        width: 1200,
        height: 675,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const font = Open_Sans({
  subsets: ['latin', 'greek'],
  variable: '--font-webfont',
  weight: '400',
});

export const handwritingFont = EB_Garamond({
  subsets: ['latin', 'greek'],
  variable: '--font-webfont2',
  weight: '400',
});

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* Add Google Analytics scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X7LJRQ6FXJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-X7LJRQ6FXJ');
          `}
        </Script>
        <link
          href="https://fonts.cdnfonts.com/css/handwriting"
          rel="stylesheet"
        />
      </head>
      <body className={`${font.variable} bg-sky-50`}>
        <Header />
        <SkeletonWrapper>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </SkeletonWrapper>
        <CustomFooter />
      </body>
    </html>
  );
};

export default MainLayout;
