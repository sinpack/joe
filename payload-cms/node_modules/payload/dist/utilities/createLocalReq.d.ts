import type { Payload, RequestContext } from '..';
import type { PayloadRequest } from '../exports/types';
type CreateLocalReq = (options: {
    collection?: number | string | symbol;
    context?: RequestContext;
    fallbackLocale?: string;
    locale?: string;
    req?: PayloadRequest;
    user?: Document;
}, payload: Payload) => PayloadRequest;
export declare const createLocalReq: CreateLocalReq;
export {};
//# sourceMappingURL=createLocalReq.d.ts.map