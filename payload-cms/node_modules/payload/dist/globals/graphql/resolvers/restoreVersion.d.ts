import type { PayloadRequest } from '../../../express/types';
import type { Document } from '../../../types';
import type { SanitizedGlobalConfig } from '../../config/types';
type Resolver = (_: unknown, args: {
    id: number | string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<Document>;
export default function restoreVersionResolver(globalConfig: SanitizedGlobalConfig): Resolver;
export {};
//# sourceMappingURL=restoreVersion.d.ts.map