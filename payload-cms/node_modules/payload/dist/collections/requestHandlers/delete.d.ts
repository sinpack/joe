import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
import type { Document } from '../../types';
export type DeleteResult = {
    doc: Document;
    message: string;
};
export default function deleteHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<DeleteResult> | void>;
//# sourceMappingURL=delete.d.ts.map