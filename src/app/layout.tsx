// src/app/layout.tsx

import './globals.css';
import Header from './components/Header';
import CustomFooter from './components/Footer';
import { Open_Sans } from 'next/font/google';
import PageAnimatePresence from './components/PageAnimatePresence';
import PageAnimation from './components/PageAnimation';
import SkeletonWrapper from './components/SkeletonWrapper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const font = Open_Sans({
  subsets: ['latin', 'greek'],
  variable: '--font-webfont',
  weight: '400',
});

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
