import type { TypeWithID } from '../../../../../../collections/config/types';
import type { Documents } from './index';
type RequestDocuments = {
    docs: {
        relationTo: string;
        value: number | string;
    }[];
    type: 'REQUEST';
};
type AddLoadedDocuments = {
    docs: TypeWithID[];
    idsToLoad: (number | string)[];
    relationTo: string;
    type: 'ADD_LOADED';
};
type Action = AddLoadedDocuments | RequestDocuments;
export declare function reducer(state: Documents, action: Action): Documents;
export {};
//# sourceMappingURL=reducer.d.ts.map