import type { PayloadRequest } from '../express/types';
type Args = {
    collectionSlug: string;
    desiredFilename: string;
    req: PayloadRequest;
    staticPath: string;
};
declare function getSafeFileName({ collectionSlug, desiredFilename, req, staticPath, }: Args): Promise<string>;
export default getSafeFileName;
//# sourceMappingURL=getSafeFilename.d.ts.map