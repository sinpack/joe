import type { Response } from 'express';
import type { Collection } from '../../collections/config/types';
import type { PayloadRequest } from '../../express/types';
export type Arguments = {
    collection: Collection;
    req: PayloadRequest;
    res: Response;
};
declare function logout(incomingArgs: Arguments): Promise<string>;
export default logout;
//# sourceMappingURL=logout.d.ts.map