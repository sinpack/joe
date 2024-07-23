import type { SanitizedCollectionConfig, TypeWithID } from '../collections/config/types';
import type { FindOneArgs } from '../database/types';
import type { Payload } from '../payload';
import type { PayloadRequest } from '../types';
type Args = {
    config: SanitizedCollectionConfig;
    id: number | string;
    payload: Payload;
    query: FindOneArgs;
    req?: PayloadRequest;
};
export declare const getLatestCollectionVersion: <T extends TypeWithID = any>({ id, config, payload, query, req, }: Args) => Promise<T>;
export {};
//# sourceMappingURL=getLatestCollectionVersion.d.ts.map