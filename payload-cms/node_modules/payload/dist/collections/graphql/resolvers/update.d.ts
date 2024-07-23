import type { Response } from 'express';
import type { GeneratedTypes } from '../../../';
import type { PayloadRequest } from '../../../express/types';
import type { Collection } from '../../config/types';
export type Resolver<TSlug extends keyof GeneratedTypes['collections']> = (_: unknown, args: {
    autosave: boolean;
    data: GeneratedTypes['collections'][TSlug];
    draft: boolean;
    id: number | string;
    locale?: string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<GeneratedTypes['collections'][TSlug]>;
export default function updateResolver<TSlug extends keyof GeneratedTypes['collections']>(collection: Collection): Resolver<TSlug>;
//# sourceMappingURL=update.d.ts.map