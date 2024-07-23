import React from 'react';
import type { TypeWithID } from '../../../../../../collections/config/types';
export type Documents = {
    [slug: string]: {
        [id: number | string]: TypeWithID | false | null;
    };
};
type ListRelationshipContext = {
    documents: Documents;
    getRelationships: (docs: {
        relationTo: string;
        value: number | string;
    }[]) => void;
};
export declare const RelationshipProvider: React.FC<{
    children?: React.ReactNode;
}>;
export declare const useListRelationships: () => ListRelationshipContext;
export {};
//# sourceMappingURL=index.d.ts.map