'use client';
import React from 'react';
import Button from '../components/Buttons/Button';
import { useRouter } from 'next/navigation';
import { TertiaryButton } from '../components/Buttons';

interface TherapyToolCardProps {
  title: string;
  description: string;
  link?: string;
  backgroundColor?: string;
}

const TherapyToolCard: React.FC<TherapyToolCardProps> = ({
  title,
  description,
  link,
  backgroundColor,
}) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(link || '/');
  };

  return (
    <div className="py-4 px-6 flex flex-col justify-between space-y-5">
      <h3
        className="text-start justify-center text-xl font-bold leading-tight h-52 w-full p-5"
        style={{
          backgroundColor: backgroundColor || 'transparent',
          WebkitMask:
            'radial-gradient(circle at center bottom, transparent 10%, black 10%)',
          WebkitMaskComposite: 'xor',
          mask: 'radial-gradient(circle at center bottom, transparent 10%, black 10%)',
          maskComposite: 'xor',
        }}
      >
        {title}
      </h3>
      <p className="text-sm text-start justify-center leading-tight h-fit min-h-40 w-full p-5 border-[1px] border-[#758694] rounded-b-xl">
        {description}
      </p>
      <TertiaryButton
        onClick={handleNavigate}
        extraClass="text-blue-500 place-self-end"
        icon={
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        }
        iconPosition="end" // Specify the icon position
        className="mt-4"
      >
        Δείτε περισσότερα
      </TertiaryButton>
    </div>
  );
};

export default TherapyToolCard;
