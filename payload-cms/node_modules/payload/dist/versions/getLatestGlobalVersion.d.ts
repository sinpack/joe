import type { SanitizedGlobalConfig } from '../globals/config/types';
import type { Payload } from '../payload';
import type { Document, PayloadRequest, Where } from '../types';
type Args = {
    config: SanitizedGlobalConfig;
    locale?: string;
    payload: Payload;
    req?: PayloadRequest;
    slug: string;
    where: Where;
};
export declare const getLatestGlobalVersion: ({ config, locale, payload, req, slug, where, }: Args) => Promise<{
    global: Document;
    globalExists: boolean;
}>;
export {};
//# sourceMappingURL=getLatestGlobalVersion.d.ts.map