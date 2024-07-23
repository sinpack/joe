import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
import type { Document } from '../../types';
export type CreateResult = {
    doc: Document;
    message: string;
};
export default function createHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<CreateResult> | void>;
//# sourceMappingURL=create.d.ts.map