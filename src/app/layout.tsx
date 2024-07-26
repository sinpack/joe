// src/app/layout.tsx
'use client';
import './globals.css';
import Header from './components/Header';
import CustomFooter from './components/Footer';
import { Open_Sans, Alegreya, EB_Garamond } from 'next/font/google';
import PageAnimatePresence from './components/PageAnimatePresence';
import PageAnimation from './components/PageAnimation';
import SkeletonWrapper from './components/SkeletonWrapper';
import { ReactQueryProvider } from './react-query-provider';
import { metadata } from './metadata';


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
