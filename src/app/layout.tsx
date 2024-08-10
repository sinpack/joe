// src/app/layout.tsx
import './globals.css';
import Header from './components/Header';
import CustomFooter from './components/Footer';
import { Open_Sans, EB_Garamond } from 'next/font/google';
import PageAnimatePresence from './components/PageAnimatePresence';
import PageAnimation from './components/PageAnimation';
import SkeletonWrapper from './components/SkeletonWrapper';
import { ReactQueryProvider } from './react-query-provider';
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
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
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
        <link
          href="https://fonts.cdnfonts.com/css/handwriting"
          rel="stylesheet"
        />
      </head>
      <body className={`${font.variable} bg-sky-50`}>
        <Header />
        {/* <PageAnimatePresence> */}
        {/* <PageAnimation transitionClass="easeInOut" duration={0.3}> */}
        <SkeletonWrapper>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </SkeletonWrapper>
        {/* </PageAnimation> */}
        {/* </PageAnimatePresence> */}
        <CustomFooter />
      </body>
    </html>
  );
};

export default MainLayout;
