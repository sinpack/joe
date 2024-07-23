import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
import type { Document } from '../../types';
export type RestoreResult = {
    doc: Document;
    message: string;
};
export default function restoreVersionHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<RestoreResult> | void>;
//# sourceMappingURL=restoreVersion.d.ts.map