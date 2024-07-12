import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';

interface DescriptionCardProps {
  description?: string;
  className?: string;
  vertical: boolean;
  bulletPoints?: string[];
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  description,
  className,
  vertical,
  bulletPoints,
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
        'text-sm text-start justify-center leading-tight w-full p-5 border-[1px] space-y-5 border-[#758694]',
        {
          'rounded-b-xl': vertical,
          'rounded-r-xl': !vertical,
        }
      )}
    >
      {description && <p>{description}</p>}
      {bulletPoints && (
        <ul className="space-y-4 text-left text-gray-500">
          {bulletPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default DescriptionCard;
