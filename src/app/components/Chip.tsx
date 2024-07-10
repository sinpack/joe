import Image from 'next/image';
import React, { ReactNode } from 'react';

interface ChipProps {
  label: ReactNode;
  onClick?: CallableFunction;
  chipBackgroundColor?: string;
  chipTextColor?: string;
  textTransform?: string;
}

export default function Chip({
  label,
  onClick,
  chipBackgroundColor = 'bg-primary-100',
  chipTextColor = 'text-primary-400',
  textTransform,
}: ChipProps) {
  return (
    <div
      className={`flex justify-center px-2.5 min-w-[50px] w-fit h-fit text-center rounded-[20px] ${chipBackgroundColor} subtle-shadow`}
      data-cy="chip"
    >
      <p className={`flex my-[6px] body1 ${chipTextColor} ${textTransform}`}>
        {label}
      </p>

      {onClick && (
        <div
          className="ml-2.5 mt-[9px] w-[18px] cursor-pointer"
          onClick={() => onClick()}
        >
          <Image
            src="./ClearInstrument.svg"
            alt="Clear"
            height={18}
            width={18}
            quality={100}
          />
        </div>
      )}
    </div>
  );
}
