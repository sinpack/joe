import React from 'react';
import BaseButton from './BaseButton';

interface PrimaryGhostButtonProps {
    disabled?: boolean;
    isLoading?: boolean;
    fixedWIdth?: boolean;
    size?: 'SM' | 'L';
    text?: string;
    icon?: React.ReactNode;
    onClick?: CallableFunction;
    loadingPlaceholder?: string;
    onView?: boolean;
}

export default function PrimaryGhostButton({
    disabled,
    isLoading,
    fixedWIdth,
    size,
    text,
    icon,
    onClick,
    loadingPlaceholder,
    onView
}: PrimaryGhostButtonProps) {
    return (
        <div>
            <BaseButton
                disabled={disabled}
                isLoading={isLoading}
                fixedWIdth={fixedWIdth}
                size={size}
                text={text}
                icon={icon}
                onClick={onClick}
                colorClass="btn-primary-ghost"
                iconColorClass={!disabled ? 'btn-primary-ghost-icon' : ''}
                disabledClass="btn-disabled-ghost-primary"
                disabledIconClass="btn-disabled-icon-ghost-primary"
                loadingPlaceholder={loadingPlaceholder}
                pressedClass="btn-primary-pressed"
                onView={onView}
            />
        </div>
    );
}
