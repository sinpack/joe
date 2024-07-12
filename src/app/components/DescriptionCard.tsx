'use client';
import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';

interface DescriptionCardProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  vertical: boolean;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  as: Component = 'p',
  className,
  children,
  vertical,
}) => {
  const controls = useAnimation();
  const cardRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: vertical ? '-100%' : 0,
      x: vertical ? 0 : '-100%',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1.5, ease: [0.5, 0.84, 0.44, 1] },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={clsx(
        className,
        'text-sm text-start justify-center leading-tight w-full p-5 border-[1px] border-[#758694]',
        {
          'rounded-b-xl': vertical,
          'rounded-r-xl': !vertical,
        }
      )}
    >
      <Component>{children}</Component>
    </motion.div>
  );
};

export default DescriptionCard;
