import React from 'react';
import type { Props as LabelProps } from '../../Label/types';
import './index.scss';
type CheckboxInputProps = {
    Label?: React.ComponentType<LabelProps>;
    afterInput?: React.ComponentType<any>[];
    'aria-label'?: string;
    beforeInput?: React.ComponentType<any>[];
    checked?: boolean;
    className?: string;
    id?: string;
    inputRef?: React.MutableRefObject<HTMLInputElement>;
    label?: string;
    name?: string;
    onToggle: React.FormEventHandler<HTMLInputElement>;
    partialChecked?: boolean;
    readOnly?: boolean;
    required?: boolean;
};
export declare const CheckboxInput: React.FC<CheckboxInputProps>;
export {};
//# sourceMappingURL=Input.d.ts.map