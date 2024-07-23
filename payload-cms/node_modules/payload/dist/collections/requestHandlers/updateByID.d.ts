import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
export type UpdateResult = {
    doc: Document;
    message: string;
};
export declare function deprecatedUpdate(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<UpdateResult> | void>;
export default function updateByIDHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<UpdateResult> | void>;
//# sourceMappingURL=updateByID.d.ts.map