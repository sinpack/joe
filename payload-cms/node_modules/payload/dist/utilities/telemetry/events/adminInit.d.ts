import type { PayloadRequest } from '../../../express/types';
export type AdminInitEvent = {
    domainID?: string;
    type: 'admin-init';
    userID?: string;
};
export declare const adminInit: (req: PayloadRequest) => void;
//# sourceMappingURL=adminInit.d.ts.map