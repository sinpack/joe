import React from 'react';
import type { Where } from '../../../../../../types';
export declare enum SelectAllStatus {
    AllAvailable = "allAvailable",
    AllInPage = "allInPage",
    None = "none",
    Some = "some"
}
type SelectionContext = {
    count: number;
    getQueryParams: (additionalParams?: Where) => string;
    selectAll: SelectAllStatus;
    selected: Record<number | string, boolean>;
    setSelection: (id: number | string) => void;
    toggleAll: (allAvailable?: boolean) => void;
    totalDocs: number;
};
type Props = {
    children: React.ReactNode;
    docs: any[];
    totalDocs: number;
};
export declare const SelectionProvider: React.FC<Props>;
export declare const useSelection: () => SelectionContext;
export {};
//# sourceMappingURL=index.d.ts.map