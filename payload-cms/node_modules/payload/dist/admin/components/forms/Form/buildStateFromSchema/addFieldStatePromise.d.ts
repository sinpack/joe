import type { TFunction } from 'i18next';
import type { User } from '../../../../../auth';
import type { SanitizedConfig } from '../../../../../config/types';
import type { NonPresentationalField } from '../../../../../fields/config/types';
import type { Data, Fields } from '../types';
export type AddFieldStatePromiseArgs = {
    /**
     * if all parents are localized, then the field is localized
     */
    anyParentLocalized?: boolean;
    config: SanitizedConfig;
    data: Data;
    field: NonPresentationalField;
    /**
     * You can use this to filter down to only `localized` fields that require transalation (type: text, textarea, etc.). Another plugin might want to look for only `point` type fields to do some GIS function. With the filter function you can go in like a surgeon.
     */
    filter?: (args: AddFieldStatePromiseArgs) => boolean;
    /**
     * Force the value of fields like arrays or blocks to be the full value instead of the length @default false
     */
    forceFullValue?: boolean;
    fullData: Data;
    id: number | string;
    /**
     * Whether the field schema should be included in the state
     */
    includeSchema?: boolean;
    locale: string;
    /**
     * Whether to omit parent fields in the state. @default false
     */
    omitParents?: boolean;
    operation: 'create' | 'update';
    passesCondition: boolean;
    path: string;
    preferences: {
        [key: string]: unknown;
    };
    /**
     * Whether to skip checking the field's condition. @default false
     */
    skipConditionChecks?: boolean;
    /**
     * Whether to skip validating the field. @default false
     */
    skipValidation?: boolean;
    state: Fields;
    t: TFunction;
    user: User;
};
/**
 * Flattens the fields schema and fields data.
 * The output is the field path (e.g. array.0.name) mapped to a FormField object.
 */
export declare const addFieldStatePromise: (args: AddFieldStatePromiseArgs) => Promise<void>;
//# sourceMappingURL=addFieldStatePromise.d.ts.map