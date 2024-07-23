import type { PayloadRequest } from '../../../express/types';
import type { RelationshipField, UploadField } from '../../config/types';
type PromiseArgs = {
    currentDepth: number;
    depth: number;
    draft: boolean;
    fallbackLocale: null | string;
    field: RelationshipField | UploadField;
    locale: null | string;
    overrideAccess: boolean;
    req: PayloadRequest;
    showHiddenFields: boolean;
    siblingDoc: Record<string, any>;
};
declare const relationshipPopulationPromise: ({ currentDepth, depth, draft, fallbackLocale, field, locale, overrideAccess, req, showHiddenFields, siblingDoc, }: PromiseArgs) => Promise<void>;
export default relationshipPopulationPromise;
//# sourceMappingURL=relationshipPopulationPromise.d.ts.map