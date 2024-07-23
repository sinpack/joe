import React from 'react';
import type { OptionObject, SelectField } from '../../../../../fields/config/types';
import type { Option } from '../../../elements/ReactSelect/types';
import type { Description } from '../../FieldDescription/types';
import './index.scss';
export type SelectInputProps = Omit<SelectField, 'options' | 'type' | 'value'> & {
    Error?: React.ComponentType<any>;
    Label?: React.ComponentType<any>;
    className?: string;
    description?: Description;
    errorMessage?: string;
    hasMany?: boolean;
    isClearable?: boolean;
    isSortable?: boolean;
    onChange?: (value: Option) => void;
    options?: OptionObject[];
    path: string;
    readOnly?: boolean;
    required?: boolean;
    showError?: boolean;
    style?: React.CSSProperties;
    value?: string | string[];
    width?: string;
};
declare const SelectInput: React.FC<SelectInputProps>;
export default SelectInput;
//# sourceMappingURL=Input.d.ts.map