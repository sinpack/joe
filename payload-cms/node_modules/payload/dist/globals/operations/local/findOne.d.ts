import type { GeneratedTypes, RequestContext } from '../../..';
import type { PayloadRequest } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Document } from '../../../types';
export type Options<T extends keyof GeneratedTypes['globals']> = {
    context?: RequestContext;
    depth?: number;
    draft?: boolean;
    fallbackLocale?: string;
    locale?: string;
    overrideAccess?: boolean;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    slug: T;
    user?: Document;
};
export default function findOneLocal<T extends keyof GeneratedTypes['globals']>(payload: Payload, options: Options<T>): Promise<GeneratedTypes['globals'][T]>;
//# sourceMappingURL=findOne.d.ts.map