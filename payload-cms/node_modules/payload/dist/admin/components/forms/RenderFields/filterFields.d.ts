import type React from 'react';
import type { FieldPermissions } from '../../../../auth';
import type { Field, FieldWithPath } from '../../../../exports/types';
import type { FieldTypes } from '../field-types';
export type ReducedField = {
    FieldComponent: React.ComponentType<any>;
    field: FieldWithPath;
    fieldIsPresentational: boolean;
    fieldPermissions: FieldPermissions;
    isFieldAffectingData: boolean;
    name: string;
    readOnly: boolean;
};
export declare const filterFields: (args: {
    fieldSchema: FieldWithPath[];
    fieldTypes: FieldTypes;
    filter: (field: Field) => boolean;
    operation?: 'create' | 'update';
    permissions?: FieldPermissions | {
        [field: string]: FieldPermissions;
    };
    readOnly?: boolean;
}) => ReducedField[];
//# sourceMappingURL=filterFields.d.ts.map