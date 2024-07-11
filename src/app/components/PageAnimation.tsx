import React from 'react';
import { motion } from 'framer-motion';

interface PageAnimationProps {
    transitionClass: string;
    duration: number;
    children: React.ReactNode;
}

export default function PageAnimation({
    transitionClass,
    duration,
    children
}: PageAnimationProps) {
    return (
        <motion.div
            exit={{
                opacity: 0,
                transition: {
                    duration,
                    ease: transitionClass
                }
            }}
            initial={{ opacity: 0, height: '100%' }}
            animate={{
                opacity: 1,
                height: '100%',
                transition: {
                    duration,
                    ease: transitionClass
                }
            }}
        >
            {children}
        </motion.div>
    );
}
