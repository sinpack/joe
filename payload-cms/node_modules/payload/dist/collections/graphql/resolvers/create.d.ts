import type { Response } from 'express';
import type { MarkOptional } from 'ts-essentials';
import type { GeneratedTypes } from '../../../';
import type { PayloadRequest } from '../../../express/types';
import type { Collection } from '../../config/types';
export type Resolver<TSlug extends keyof GeneratedTypes['collections']> = (_: unknown, args: {
    data: MarkOptional<GeneratedTypes['collections'][TSlug], 'createdAt' | 'id' | 'sizes' | 'updatedAt'>;
    draft: boolean;
    locale?: string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<GeneratedTypes['collections'][TSlug]>;
export default function createResolver<TSlug extends keyof GeneratedTypes['collections']>(collection: Collection): Resolver<TSlug>;
//# sourceMappingURL=create.d.ts.map