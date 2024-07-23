import type { TypeWithTimestamps } from '../collections/config/types';
import type { validOperators } from './constants';
export type { PayloadRequest } from '../express/types';
export type Operator = (typeof validOperators)[number];
export type WhereField = {
    [key in Operator]?: unknown;
};
export type Where = {
    [key: string]: Where[] | WhereField;
    and?: Where[];
    or?: Where[];
};
export type Document = any;
export type Operation = 'create' | 'delete' | 'read' | 'update';
export type VersionOperations = 'readVersions';
export type AuthOperations = 'unlock';
export type AllOperations = AuthOperations | Operation | VersionOperations;
export declare function docHasTimestamps(doc: any): doc is TypeWithTimestamps;
//# sourceMappingURL=index.d.ts.map