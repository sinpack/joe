import clsx from 'clsx';
import React from 'react';

interface SpinnerProps {
    size?: 'sm' | 'md';
    color?: 'default' | 'light' | 'disabled';
}
export default function Spinner({
    size = 'sm',
    color = 'default'
}: SpinnerProps) {
    return (
        <div
            className={clsx({
                'border-[3px] border-solid rounded-full animate-spin border-t-transparent':
                    true,
                'w-8 h-8': size !== 'sm',
                'w-[22px] h-[22px]': size === 'sm',
                'border-blue-600': color === 'default',
                'border-primary-300': color === 'light',
                'border-blackWhite-350': color === 'disabled'
            })}
        />
    );
}
