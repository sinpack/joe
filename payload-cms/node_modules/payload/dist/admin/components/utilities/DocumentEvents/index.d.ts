import React from 'react';
import type { UpdatedDocument } from './types';
export declare const DocumentEventsProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useDocumentEvents: () => {
    mostRecentUpdate: any;
    reportUpdate: (doc: UpdatedDocument) => any;
};
//# sourceMappingURL=index.d.ts.map