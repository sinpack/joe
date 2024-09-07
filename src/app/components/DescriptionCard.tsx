'use client';
import React, { ReactNode, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

const SkypeLink = () => (
  <Link
    href="https://join.skype.com/invite/FdWE9FzCm23Q"
    className="text-blue-500 cursor-pointer"
  >
    Skype
  </Link>
);

interface DescriptionCardProps {
  description?: string;
  className?: string;
  vertical: boolean;
  bulletPoints?: string[];
  index?: number;
  footer?: string | ReactNode;
  customBulletPoint?: ReactNode;
  hasDecoration?: boolean;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  description,
  className,
  vertical,
  bulletPoints,
  index,
  footer,
  customBulletPoint,
  hasDecoration,
}) => {
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);

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

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: vertical ? '-20%' : 0,
      x: vertical ? 0 : '-100%',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1.5, ease: [0.5, 0.84, 0.44, 1] },
    },
  };

  const renderDescription = (desc: string) => {
    const wordsArray = desc.split('{SKYPE_LINK}');
    const newString = wordsArray.map((stringPart, index) => {
      return (
        <React.Fragment key={index}>
          {stringPart}
          {index < wordsArray.length - 1 && <SkypeLink />}
        </React.Fragment>
      );
    });
    return newString;
  };
  // return desc.split('{SKYPE_LINK}').map((part, index) => (
  //   <React.Fragment key={index}>
  //     {part}
  //     {index < desc.split('{SKYPE_LINK}').length - 1 && <SkypeLink />}
  //   </React.Fragment>
  // ));

  return (
    <motion.div
      key={index}
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={clsx(
        className,
        'text-sm text-start justify-center leading-tight tracking-normal p-2.5 border-[1px] space-y-5 border-[#758694]',
        {
          'rounded-b-xl': vertical,
          'rounded-r-xl': !vertical,
        }
      )}
    >
      {description && <p>{renderDescription(description)}</p>}
      {bulletPoints && (
        <ul className="space-y-2.5 text-left text-gray-500">
          {bulletPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-center space-x-2.5 rtl:space-x-reverse"
            >
              {customBulletPoint ? (
                customBulletPoint
              ) : (
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
              )}

              <p
                className={clsx({
                  'underline decoration-stone-700 decoration-1 underline-offset-auto':
                    hasDecoration,
                })}
              >
                {point}
              </p>
            </li>
          ))}
        </ul>
      )}
      {footer && (
        <span className="flex mt-4 pt-4 border-t text-sm text-center sm:text-left text-pretty">
          {footer}
        </span>
      )}
    </motion.div>
  );
};

export default DescriptionCard;
