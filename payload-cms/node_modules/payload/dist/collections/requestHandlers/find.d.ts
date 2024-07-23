import type { NextFunction, Response } from 'express';
import type { PaginatedDocs } from '../../database/types';
import type { PayloadRequest } from '../../express/types';
import type { TypeWithID } from '../config/types';
export default function findHandler<T extends TypeWithID = any>(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<PaginatedDocs<T>> | void>;
//# sourceMappingURL=find.d.ts.map