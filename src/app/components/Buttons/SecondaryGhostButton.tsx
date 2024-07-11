import React from 'react';
import BaseButton from './BaseButton';

interface SecondaryGhostButtonProps {
    disabled?: boolean;
    isLoading?: boolean;
    onView?: boolean;
    icon?: React.ReactNode;
    text: string;
    onClick: CallableFunction;
    hasBadge?: boolean;
    fixedWIdth?: boolean;
}

export default function SecondaryGhostButton({
    disabled,
    icon,
    isLoading,
    text,
    onView,
    onClick,
    hasBadge,
    fixedWIdth
}: SecondaryGhostButtonProps) {
    return (
        <div>
            <BaseButton
                disabled={disabled}
                text={text}
                onClick={onClick}
                onView={onView}
                colorClass="btn-secondary-ghost"
                icon={icon}
                isLoading={isLoading}
                disabledClass="btn-disabled-ghost-secondary"
                pressedClass="btn-secondary-pressed"
                spinnerType="disabled"
                hasBadge={hasBadge}
                disabledIconClass="btn-disabled-icon-ghost-secondary"
                iconColorClass="btn-secondary-ghost-icon"
                fixedWIdth={fixedWIdth}
            />
        </div>
    );
}
