import clsx from 'clsx';
import React from 'react';

interface BorderedInputProps {
  value: string;
  onChange: CallableFunction;
  placeholder: string;
  showPlaceholder: boolean;
  isFocused: boolean;
  isHovered: boolean;
  disabled?: boolean;
}

export default function BorderedInput({
  value,
  onChange,
  placeholder,
  showPlaceholder,
  isFocused,
  isHovered,
  disabled = false,
}: BorderedInputProps) {
  return (
    <input
      data-cy="search-input"
      className={clsx({
        'mt-0 h-5 focus:border-gray-900 grow': true,
        ' !bg-primary-100': isFocused,
        'placeholder:text-dark': isHovered && !isFocused && !disabled,
      })}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={showPlaceholder ? placeholder : ''}
      disabled={disabled}
      type="text"
    />
  );
}
