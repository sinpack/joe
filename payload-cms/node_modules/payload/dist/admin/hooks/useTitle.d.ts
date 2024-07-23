/// <reference types="node" />
import type i18next from 'i18next';
import type { SanitizedCollectionConfig } from '../../collections/config/types';
import type { SanitizedConfig } from '../../config/types';
import type { SanitizedGlobalConfig } from '../../globals/config/types';
import type { FormField } from '../components/forms/Form/types';
export declare const formatUseAsTitle: (args: {
    collection: SanitizedCollectionConfig;
    config: SanitizedConfig;
    doc?: Record<string, any>;
    field?: FormField;
    i18n: typeof i18next;
}) => string;
declare const useTitle: (args: {
    collection?: SanitizedCollectionConfig;
    global?: SanitizedGlobalConfig;
}) => string;
export default useTitle;
//# sourceMappingURL=useTitle.d.ts.map