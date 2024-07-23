import type { NextFunction, Response } from 'express';
import type { TypeWithID } from '../../collections/config/types';
import type { PaginatedDocs } from '../../database/types';
import type { PayloadRequest } from '../../express/types';
import type { SanitizedGlobalConfig } from '../config/types';
export default function findVersionsHandler(global: SanitizedGlobalConfig): <T extends TypeWithID = any>(req: PayloadRequest, res: Response, next: NextFunction) => Promise<void | Response<PaginatedDocs<T>, Record<string, any>>>;
//# sourceMappingURL=findVersions.d.ts.map