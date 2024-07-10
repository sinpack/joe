import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Backdrop from './SlideDrawer/Backdrop';

interface BackdropTransitionProps {
  duration: number;
  open: boolean;
}

export default function BackdropTransition({
  duration,
  open,
}: BackdropTransitionProps) {
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        duration,
      },
    },
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="modal-overlay"
        >
          <Backdrop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
