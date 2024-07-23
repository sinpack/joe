import type { GeneratedTypes } from '../../../';
import type { PayloadRequest } from '../../../express/types';
import type { Collection } from '../../config/types';
export type Resolver<T> = (_: unknown, args: {
    draft: boolean;
    fallbackLocale?: string;
    id: string;
    locale?: string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<T>;
export default function findByIDResolver<T extends keyof GeneratedTypes['collections']>(collection: Collection): Resolver<GeneratedTypes['collections'][T]>;
//# sourceMappingURL=findByID.d.ts.map