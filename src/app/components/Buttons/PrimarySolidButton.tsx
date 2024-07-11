import React from 'react';
import BaseButton from './BaseButton';

interface PrimarySolidButtonProps {
  disabled?: boolean;
  width?: number;
  text: string;
  isLoading?: boolean;
  onClick?: CallableFunction;
  loadingPlaceholder?: string;
}

export default function PrimarySolidButton({
  disabled,
  width,
  isLoading,
  text,
  onClick,
  loadingPlaceholder,
}: PrimarySolidButtonProps) {
  return (
    <div>
      <BaseButton
        loadingPlaceholder={loadingPlaceholder}
        disabled={disabled}
        width={width}
        text={text}
        onClick={onClick}
        colorClass="btn-gray"
        isLoading={isLoading}
      />
    </div>
  );
}
