'use client'; // Ensure this component is client-side only

import React from 'react';
import { useRouter } from 'next/navigation';
import PrimarySolidButton from './PrimarySolidButton';
import useIsMobile from '@/utils/isMobile';

interface NavigationButtonProps {
  text: string;
  link: string;
  width?: number; // Optional prop to customize button width
  className?: string; // Optional prop to add additional classes
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  text,
  link,
  width = 300,
}) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <PrimarySolidButton
      text={text}
      onClick={() => router.push(`${link}`)}
      width={isMobile ? 200 : width}
    />
  );
};

export default NavigationButton;
