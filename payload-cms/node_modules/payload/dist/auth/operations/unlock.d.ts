import type { Collection } from '../../collections/config/types';
import type { PayloadRequest } from '../../express/types';
export type Args = {
    collection: Collection;
    data: {
        email: string;
    };
    overrideAccess?: boolean;
    req: PayloadRequest;
};
declare function unlock(args: Args): Promise<boolean>;
export default unlock;
//# sourceMappingURL=unlock.d.ts.map