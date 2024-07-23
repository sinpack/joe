import type { LinkProps } from 'react-router-dom';
import * as React from 'react';
import './index.scss';
export declare const ButtonGroup: React.FC<{
    buttonSize?: 'default' | 'small';
    children: React.ReactNode;
    className?: string;
    textAlign?: 'center' | 'left' | 'right';
}>;
type MenuButtonProps = {
    active?: boolean;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    id?: string;
    onClick?: () => void;
    to?: LinkProps['to'];
};
export declare const Button: React.FC<MenuButtonProps>;
export {};
//# sourceMappingURL=index.d.ts.map