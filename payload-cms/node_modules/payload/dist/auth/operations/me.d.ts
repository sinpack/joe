import type { Collection } from '../../collections/config/types';
import type { PayloadRequest } from '../../express/types';
import type { User } from '../types';
export type Result = {
    collection?: string;
    exp?: number;
    strategy?: string;
    token?: string;
    user?: User;
};
export type Arguments = {
    collection: Collection;
    req: PayloadRequest;
};
declare function me(args: Arguments): Promise<Result>;
export default me;
//# sourceMappingURL=me.d.ts.map