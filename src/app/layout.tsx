// src/app/layout.tsx

import './globals.css';
import Header from './components/Header';
import CustomFooter from './components/Footer';
import { Open_Sans } from 'next/font/google';
import PageAnimatePresence from './components/PageAnimatePresence';
import PageAnimation from './components/PageAnimation';
import SkeletonWrapper from './components/SkeletonWrapper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Metadata } from 'next';

const queryClient = new QueryClient();

const font = Open_Sans({
  subsets: ['latin', 'greek'],
  variable: '--font-webfont',
  weight: '400',
});

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
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${font.variable} bg-sky-50`}>
        <Header />
        {/* <PageAnimatePresence> */}{' '}
        {/* <PageAnimation transitionClass="easeInOut" duration={0.3}> */}
        <SkeletonWrapper> {children}</SkeletonWrapper>
        {/* </PageAnimation> */}
        {/* </PageAnimatePresence> */}
        <CustomFooter />
      </body>
    </html>
  );
};

export default MainLayout;
