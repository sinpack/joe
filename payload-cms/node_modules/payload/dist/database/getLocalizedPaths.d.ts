import type { Payload } from '..';
import type { Field } from '../fields/config/types';
import type { PathToQuery } from './queryValidation/types';
export declare function getLocalizedPaths({ collectionSlug, fields, globalSlug, incomingPath, locale, overrideAccess, payload, }: {
    collectionSlug?: string;
    fields: Field[];
    globalSlug?: string;
    incomingPath: string;
    locale?: string;
    overrideAccess?: boolean;
    payload: Payload;
}): Promise<PathToQuery[]>;
//# sourceMappingURL=getLocalizedPaths.d.ts.map