import type { Response } from 'express';
import type { GeneratedTypes } from '../../../';
import type { PayloadRequest } from '../../../express/types';
import type { Collection } from '../../config/types';
export type Resolver<TSlug extends keyof GeneratedTypes['collections']> = (_: unknown, args: {
    fallbackLocale?: string;
    locale?: string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<GeneratedTypes['collections'][TSlug]>;
export default function getDeleteResolver<TSlug extends keyof GeneratedTypes['collections']>(collection: Collection): Resolver<TSlug>;
//# sourceMappingURL=delete.d.ts.map