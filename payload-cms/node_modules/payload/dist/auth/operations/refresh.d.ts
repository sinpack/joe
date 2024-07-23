import type { Response } from 'express';
import type { Collection } from '../../collections/config/types';
import type { PayloadRequest } from '../../express/types';
import type { Document } from '../../types';
export type Result = {
    exp: number;
    refreshedToken: string;
    strategy?: string;
    user: Document;
};
export type Arguments = {
    collection: Collection;
    req: PayloadRequest;
    res?: Response;
};
declare function refresh(incomingArgs: Arguments): Promise<Result>;
export default refresh;
//# sourceMappingURL=refresh.d.ts.map