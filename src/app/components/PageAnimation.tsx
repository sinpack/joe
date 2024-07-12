'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageAnimationProps {
  transitionClass: string;
  duration: number;
  children: React.ReactNode;
}

const PageAnimation: React.FC<PageAnimationProps> = ({
  transitionClass,
  duration,
  children,
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Ensure key changes on route change for smooth transitions
        exit={{
          opacity: 0,
          transition: {
            duration: duration, // Adjust duration as needed
            ease: transitionClass,
          },
        }}
        initial={{ opacity: 0, height: '100%' }}
        animate={{
          opacity: 1,
          height: '100%',
          transition: {
            duration,
            ease: transitionClass,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageAnimation;
