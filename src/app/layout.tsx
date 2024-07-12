// src/app/layout.tsx

import './globals.css';
import Header from './components/Header';
import CustomFooter from './components/Footer/Footer';
import {
  Inter,
  Advent_Pro,
  Gentium_Plus,
  Piazzolla,
  Roboto_Mono,
  Roboto_Condensed,
  Open_Sans,
} from 'next/font/google';
import PageAnimatePresence from './components/PageAnimatePresence';
import PageAnimation from './components/PageAnimation';

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
        <PageAnimatePresence>
          {' '}
          <PageAnimation transitionClass="easeInOut" duration={0.3}>
            {children}
          </PageAnimation>
        </PageAnimatePresence>
        <CustomFooter />
      </body>
    </html>
  );
};

export default MainLayout;
