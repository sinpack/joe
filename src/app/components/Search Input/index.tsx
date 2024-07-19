// src/components/Search.tsx

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import BorderedInput from './BorderedInput';
import BorderlessInput from './BorderlessInput';
import IconSearch from './IconSearch';

interface SearchProps {
  placeholder: string;
  value: string;
  onChange: CallableFunction;
  onSubmit: CallableFunction;
  borderless?: boolean;
  disabled?: boolean;
}

export default function Search({
  placeholder,
  value = '',
  onChange,
  onSubmit,
  borderless = false,
  disabled = false,
}: SearchProps) {
  const [isHovered, setHovered] = React.useState(false);
  const [isFocused, setFocused] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  const onClear = () => {
    onChange('');
  };

  return (
    <div
      className={clsx({
        'flex w-full h-10 border border-solid rounded-[5px] bg-cornflower default-transition items-center':
          true,
        '!bg-primary-100': isFocused,
        'border-gray-800': isFocused && !borderless,
        'border-[#BDBEC2]':
          !isHovered && !isFocused && !borderless && !disabled,
        'border-[#787C84]': isHovered && !isFocused && !borderless && !disabled,
        'border-transparent': borderless,
        'opacity-40': disabled,
      })}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
      onFocus={() => {
        setFocused(true);
      }}
      onBlur={() => {
        setFocused(false);
      }}
    >
      <div
        className={clsx({
          'flex items-center ml-2.5': true,
          'cursor-pointer': !disabled,
        })}
        onClick={() =>
          handleSubmit({
            preventDefault: () => {},
          } as React.FormEvent<HTMLFormElement>)
        }
      >
        <IconSearch
          hasColor={
            !disabled &&
            borderless &&
            ((isHovered && !isFocused) || (value === '' && !isFocused))
          }
          boldColor={!disabled && (isHovered || isFocused || value !== '')}
        />
      </div>
      <form onSubmit={handleSubmit} className="flex w-full items-center">
        <BorderedInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          showPlaceholder={!isFocused}
          isFocused={isFocused}
          isHovered={isHovered}
          disabled={disabled}
        />
      </form>
      <div
        className="flex items-center mr-[10px] w-[22px] h-[22px] cursor-pointer"
        onClick={onClear}
      >
        {value !== '' && (
          <Image
            src="./Clear.svg"
            alt="Clear"
            height={22}
            width={22}
            quality={100}
          />
        )}
      </div>
    </div>
  );
}
