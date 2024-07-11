import React from 'react';
import BaseButton from './BaseButton';

interface PrimarySolidButtonProps {
    disabled?: boolean;
    text: string;
    isLoading?: boolean;
    onClick?: CallableFunction;
}

export default function SecondarySolidButton({
    disabled,
    isLoading,
    text,
    onClick
}: PrimarySolidButtonProps) {
    return (
        <div>
            <BaseButton
                disabled={disabled}
                text={text}
                onClick={onClick}
                colorClass="btn-secondary-solid"
                disabledClass="btn-disabled-solid-secondary"
                isLoading={isLoading}
            />
        </div>
    );
}
