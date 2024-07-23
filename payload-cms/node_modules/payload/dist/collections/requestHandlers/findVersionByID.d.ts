import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
import type { Document } from '../../types';
export type FindByIDResult = {
    doc: Document;
    message: string;
};
export default function findVersionByIDHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<FindByIDResult> | void>;
//# sourceMappingURL=findVersionByID.d.ts.map