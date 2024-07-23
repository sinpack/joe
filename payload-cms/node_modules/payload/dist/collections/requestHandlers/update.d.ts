import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
import type { Document } from '../../types';
export type UpdateResult = {
    doc: Document;
    message: string;
};
export default function updateHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<UpdateResult> | void>;
//# sourceMappingURL=update.d.ts.map