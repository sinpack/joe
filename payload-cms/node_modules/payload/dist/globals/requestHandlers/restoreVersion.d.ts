import type { NextFunction, Response } from 'express';
import type { PayloadRequest } from '../../express/types';
import type { Document } from '../../types';
import type { SanitizedGlobalConfig } from '../config/types';
export default function restoreVersionHandler(globalConfig: SanitizedGlobalConfig): (req: PayloadRequest, res: Response, next: NextFunction) => Promise<Response<Document> | void>;
//# sourceMappingURL=restoreVersion.d.ts.map