import type { TFunction } from 'i18next';
import type { User } from '../../../../../auth';
import type { SanitizedConfig } from '../../../../../config/types';
import type { Field as FieldSchema } from '../../../../../fields/config/types';
import type { Data, Fields } from '../types';
type Args = {
    config: SanitizedConfig;
    data?: Data;
    fieldSchema: FieldSchema[] | undefined;
    id?: number | string;
    locale: string;
    operation?: 'create' | 'update';
    preferences: {
        [key: string]: unknown;
    };
    siblingData?: Data;
    t: TFunction;
    user?: User | null;
};
declare const buildStateFromSchema: (args: Args) => Promise<Fields>;
export default buildStateFromSchema;
//# sourceMappingURL=index.d.ts.map