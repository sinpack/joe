import React from 'react';
import type { DateField } from '../../../../../exports/types';
import type { Description } from '../../FieldDescription/types';
import './index.scss';
export type DateTimeInputProps = Omit<DateField, 'admin' | 'name' | 'type'> & {
    className?: string;
    components: {
        Error?: React.ComponentType<any>;
        Label?: React.ComponentType<any>;
        afterInput?: React.ComponentType<any>[];
        beforeInput?: React.ComponentType<any>[];
    };
    datePickerProps?: DateField['admin']['date'];
    description?: Description;
    errorMessage?: string;
    onChange?: (e: Date) => void;
    path: string;
    placeholder?: Record<string, string> | string;
    readOnly?: boolean;
    required?: boolean;
    showError?: boolean;
    style?: React.CSSProperties;
    value?: Date;
    width?: string;
};
export declare const DateTimeInput: React.FC<DateTimeInputProps>;
//# sourceMappingURL=Input.d.ts.map