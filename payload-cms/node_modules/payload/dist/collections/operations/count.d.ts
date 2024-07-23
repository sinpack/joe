import type { PayloadRequest, Where } from '../../types/index';
import type { Collection, TypeWithID } from '../config/types';
export type Arguments = {
    collection: Collection;
    disableErrors?: boolean;
    overrideAccess?: boolean;
    req?: PayloadRequest;
    where?: Where;
};
declare function count<T extends TypeWithID & Record<string, unknown>>(incomingArgs: Arguments): Promise<{
    totalDocs: number;
}>;
export default count;
//# sourceMappingURL=count.d.ts.map