import type { DeepPartial } from 'ts-essentials';
import type { GeneratedTypes, RequestContext } from '../../../';
import type { PayloadRequest } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Document } from '../../../types';
export type Options<TSlug extends keyof GeneratedTypes['globals']> = {
    context?: RequestContext;
    data: DeepPartial<Omit<GeneratedTypes['globals'][TSlug], 'id'>>;
    depth?: number;
    draft?: boolean;
    fallbackLocale?: string;
    locale?: string;
    overrideAccess?: boolean;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    slug: TSlug;
    user?: Document;
};
export default function updateLocal<TSlug extends keyof GeneratedTypes['globals']>(payload: Payload, options: Options<TSlug>): Promise<GeneratedTypes['globals'][TSlug]>;
//# sourceMappingURL=update.d.ts.map