import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
import type { Document } from '../../types';
export type DeleteResult = {
    doc: Document;
    message: string;
};
export default function deleteByIDHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<DeleteResult> | void>;
//# sourceMappingURL=deleteByID.d.ts.map