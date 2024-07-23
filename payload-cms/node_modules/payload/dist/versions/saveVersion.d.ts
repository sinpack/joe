import type { SanitizedCollectionConfig, TypeWithID } from '../collections/config/types';
import type { PayloadRequest } from '../express/types';
import type { SanitizedGlobalConfig } from '../globals/config/types';
import type { Payload } from '../payload';
type Args = {
    autosave?: boolean;
    collection?: SanitizedCollectionConfig;
    docWithLocales: any;
    draft?: boolean;
    global?: SanitizedGlobalConfig;
    id?: number | string;
    payload: Payload;
    req?: PayloadRequest;
};
export declare const saveVersion: ({ id, autosave, collection, docWithLocales: doc, draft, global, payload, req, }: Args) => Promise<TypeWithID>;
export {};
//# sourceMappingURL=saveVersion.d.ts.map