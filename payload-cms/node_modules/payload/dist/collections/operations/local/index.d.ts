import count from './count';
import create from './create';
import deleteLocal from './delete';
import find from './find';
import findByID from './findByID';
import findVersionByID from './findVersionByID';
import findVersions from './findVersions';
import restoreVersion from './restoreVersion';
import update from './update';
declare const _default: {
    auth: {
        forgotPassword: typeof import("../../../auth/operations/local/forgotPassword").default;
        login: typeof import("../../../auth/operations/local/login").default;
        resetPassword: typeof import("../../../auth/operations/local/resetPassword").default;
        unlock: typeof import("../../../auth/operations/local/unlock").default;
        verifyEmail: typeof import("../../../auth/operations/local/verifyEmail").default;
    };
    count: typeof count;
    create: typeof create;
    deleteLocal: typeof deleteLocal;
    find: typeof find;
    findByID: typeof findByID;
    findVersionByID: typeof findVersionByID;
    findVersions: typeof findVersions;
    restoreVersion: typeof restoreVersion;
    update: typeof update;
};
export default _default;
//# sourceMappingURL=index.d.ts.map