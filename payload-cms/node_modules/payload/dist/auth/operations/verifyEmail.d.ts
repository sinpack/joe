import type { Collection } from '../../collections/config/types';
import type { PayloadRequest } from '../../express/types';
export type Args = {
    collection: Collection;
    req: PayloadRequest;
    token: string;
};
declare function verifyEmail(args: Args): Promise<boolean>;
export default verifyEmail;
//# sourceMappingURL=verifyEmail.d.ts.map