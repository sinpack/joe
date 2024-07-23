import type { PayloadRequest } from '../express/types';
import type { Payload } from '../payload';
type Args = {
    id?: number | string;
    payload: Payload;
    req?: PayloadRequest;
    slug: string;
};
export declare const deleteCollectionVersions: ({ id, payload, req, slug }: Args) => Promise<void>;
export {};
//# sourceMappingURL=deleteCollectionVersions.d.ts.map