import type { Request } from 'express';
import type { File, FileData, IncomingUploadType } from './types';
type Args = {
    data: FileData;
    req: Request;
    uploadConfig: IncomingUploadType;
};
export declare const getExternalFile: ({ data, req, uploadConfig }: Args) => Promise<File>;
export {};
//# sourceMappingURL=getExternalFile.d.ts.map