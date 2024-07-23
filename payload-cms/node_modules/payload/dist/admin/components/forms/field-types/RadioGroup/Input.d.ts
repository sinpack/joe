import React from 'react';
import type { RadioField } from '../../../../../fields/config/types';
import type { Description } from '../../FieldDescription/types';
import type { OnChange } from './types';
import './index.scss';
export type RadioGroupInputProps = Omit<RadioField, 'type'> & {
    Error?: React.ComponentType<any>;
    Label?: React.ComponentType<any>;
    className?: string;
    description?: Description;
    errorMessage?: string;
    layout?: 'horizontal' | 'vertical';
    onChange?: OnChange;
    path?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    showError?: boolean;
    style?: React.CSSProperties;
    value?: string;
    width?: string;
};
declare const RadioGroupInput: React.FC<RadioGroupInputProps>;
export default RadioGroupInput;
//# sourceMappingURL=Input.d.ts.map