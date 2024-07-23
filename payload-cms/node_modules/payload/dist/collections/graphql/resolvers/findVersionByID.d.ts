import type { Response } from 'express';
import type { PayloadRequest } from '../../../express/types';
import type { TypeWithVersion } from '../../../versions/types';
import type { Collection, TypeWithID } from '../../config/types';
export type Resolver<T extends TypeWithID = any> = (_: unknown, args: {
    fallbackLocale?: string;
    id: number | string;
    locale?: string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<TypeWithVersion<T>>;
export default function findVersionByIDResolver(collection: Collection): Resolver;
//# sourceMappingURL=findVersionByID.d.ts.map