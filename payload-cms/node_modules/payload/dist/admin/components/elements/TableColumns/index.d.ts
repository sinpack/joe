import React from 'react';
import type { SanitizedCollectionConfig } from '../../../../collections/config/types';
import type { Props as CellProps } from '../../views/collections/List/Cell/types';
import type { Column } from '../Table/types';
import type { Action } from './columnReducer';
export interface ITableColumns {
    columns: Column[];
    dispatchTableColumns: React.Dispatch<Action>;
    moveColumn: (args: {
        fromIndex: number;
        toIndex: number;
    }) => void;
    setActiveColumns: (columns: string[]) => void;
    toggleColumn: (column: string) => void;
}
export declare const TableColumnContext: React.Context<ITableColumns>;
export declare const useTableColumns: () => ITableColumns;
export declare const TableColumnsProvider: React.FC<{
    cellProps?: Partial<CellProps>[];
    children: React.ReactNode;
    collection: SanitizedCollectionConfig;
}>;
//# sourceMappingURL=index.d.ts.map