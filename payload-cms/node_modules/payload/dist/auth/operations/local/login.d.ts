import type { Response } from 'express';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { GeneratedTypes } from '../../../index';
import type { Payload } from '../../../payload';
import type { Result } from '../login';
export type Options<TSlug extends keyof GeneratedTypes['collections']> = {
    collection: TSlug;
    context?: RequestContext;
    data: {
        email: string;
        password: string;
    };
    depth?: number;
    fallbackLocale?: string;
    locale?: string;
    overrideAccess?: boolean;
    req?: PayloadRequest;
    res?: Response;
    showHiddenFields?: boolean;
};
declare function localLogin<TSlug extends keyof GeneratedTypes['collections']>(payload: Payload, options: Options<TSlug>): Promise<Result & {
    user: GeneratedTypes['collections'][TSlug];
}>;
export default localLogin;
//# sourceMappingURL=login.d.ts.map