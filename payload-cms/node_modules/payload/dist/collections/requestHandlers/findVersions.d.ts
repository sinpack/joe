import type { NextFunction, Response } from 'express';
import type { PaginatedDocs } from '../../database/types';
import type { PayloadRequest } from '../../express/types';
import type { TypeWithID } from '../config/types';
export default function findVersionsHandler<T extends TypeWithID = any>(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<PaginatedDocs<T>> | void>;
//# sourceMappingURL=findVersions.d.ts.map