import type { TypeWithID } from '../../../collections/config/types';
type Doc = TypeWithID & Record<string, unknown>;
type Args = {
    doc: Doc;
    password: string;
};
export declare const authenticateLocalStrategy: ({ doc, password }: Args) => Promise<Doc | null>;
export {};
//# sourceMappingURL=authenticate.d.ts.map