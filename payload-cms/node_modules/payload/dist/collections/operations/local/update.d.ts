import type { DeepPartial } from 'ts-essentials';
import type { GeneratedTypes } from '../../../';
import type { PayloadRequest, RequestContext } from '../../../express/types';
import type { Payload } from '../../../payload';
import type { Document, Where } from '../../../types';
import type { File } from '../../../uploads/types';
import type { BulkOperationResult } from '../../config/types';
export type BaseOptions<TSlug extends keyof GeneratedTypes['collections']> = {
    autosave?: boolean;
    collection: TSlug;
    /**
     * context, which will then be passed to req.context, which can be read by hooks
     */
    context?: RequestContext;
    data: DeepPartial<GeneratedTypes['collections'][TSlug]>;
    depth?: number;
    draft?: boolean;
    fallbackLocale?: string;
    file?: File;
    filePath?: string;
    locale?: string;
    overrideAccess?: boolean;
    overwriteExistingFiles?: boolean;
    req?: PayloadRequest;
    showHiddenFields?: boolean;
    user?: Document;
};
export type ByIDOptions<TSlug extends keyof GeneratedTypes['collections']> = BaseOptions<TSlug> & {
    id: number | string;
    where?: never;
};
export type ManyOptions<TSlug extends keyof GeneratedTypes['collections']> = BaseOptions<TSlug> & {
    id?: never;
    where: Where;
};
export type Options<TSlug extends keyof GeneratedTypes['collections']> = ByIDOptions<TSlug> | ManyOptions<TSlug>;
declare function updateLocal<TSlug extends keyof GeneratedTypes['collections']>(payload: Payload, options: ByIDOptions<TSlug>): Promise<GeneratedTypes['collections'][TSlug]>;
declare function updateLocal<TSlug extends keyof GeneratedTypes['collections']>(payload: Payload, options: ManyOptions<TSlug>): Promise<BulkOperationResult<TSlug>>;
declare function updateLocal<TSlug extends keyof GeneratedTypes['collections']>(payload: Payload, options: Options<TSlug>): Promise<BulkOperationResult<TSlug> | GeneratedTypes['collections'][TSlug]>;
export default updateLocal;
//# sourceMappingURL=update.d.ts.map