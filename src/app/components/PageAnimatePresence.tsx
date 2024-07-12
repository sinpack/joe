// /src/app/components/HOC/PageAnimatePresence.tsx || /app/components/HOC/PageAnimatePresence.tsx

'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import FrozenRoute from './FrozenRouter';

interface PageAnimatePresenceProps {
  children: React.ReactNode;
}

const PageAnimatePresence: React.FC<PageAnimatePresenceProps> = ({
  children,
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageAnimatePresence;
