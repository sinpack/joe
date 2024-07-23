import type { ChangeEvent } from 'react';
import React from 'react';
import type { TextareaField } from '../../../../../fields/config/types';
import type { Description } from '../../FieldDescription/types';
import './index.scss';
export type TextAreaInputProps = Omit<TextareaField, 'type'> & {
    Error?: React.ComponentType<any>;
    Label?: React.ComponentType<any>;
    afterInput?: React.ComponentType<any>[];
    beforeInput?: React.ComponentType<any>[];
    className?: string;
    description?: Description;
    errorMessage?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    path: string;
    placeholder?: Record<string, string> | string;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    rtl?: boolean;
    showError?: boolean;
    style?: React.CSSProperties;
    value?: string;
    width?: string;
};
declare const TextareaInput: React.FC<TextAreaInputProps>;
export default TextareaInput;
//# sourceMappingURL=Input.d.ts.map