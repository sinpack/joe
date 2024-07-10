import clsx from 'clsx';
import React from 'react';

interface BorderlessInputProps {
  value: string;
  onChange: CallableFunction;
  placeholder: string;
  showPlaceholder: boolean;
  isFocused: boolean;
  isHovered: boolean;
  disabled?: boolean;
}

export default function BorderlessInput({
  value,
  onChange,
  placeholder,
  showPlaceholder,
  isFocused,
  isHovered,
  disabled = false,
}: BorderlessInputProps) {
  return (
    <input
      className={clsx({
        'mt-0 h-5 body1': true,
        'placeholder:text-primary-400': !disabled,
        'border-gray-900  !bg-primary-100': isFocused,
        'text-primary-500 placeholder:text-primary-500':
          isHovered && !isFocused && !disabled,
      })}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={showPlaceholder ? placeholder : ''}
      disabled={disabled}
      type="text"
    />
  );
}
