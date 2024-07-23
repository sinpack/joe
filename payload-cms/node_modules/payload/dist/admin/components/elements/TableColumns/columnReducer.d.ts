import type { SanitizedCollectionConfig } from '../../../../collections/config/types';
import type { Props as CellProps } from '../../views/collections/List/Cell/types';
import type { Column } from '../Table/types';
type TOGGLE = {
    payload: {
        cellProps: Partial<CellProps>[];
        collection: SanitizedCollectionConfig;
        column: string;
    };
    type: 'toggle';
};
type SET = {
    payload: {
        cellProps: Partial<CellProps>[];
        collection: SanitizedCollectionConfig;
        columns: Pick<Column, 'accessor' | 'active'>[];
    };
    type: 'set';
};
type MOVE = {
    payload: {
        cellProps: Partial<CellProps>[];
        collection: SanitizedCollectionConfig;
        fromIndex: number;
        toIndex: number;
    };
    type: 'move';
};
export type Action = MOVE | SET | TOGGLE;
export declare const columnReducer: (state: Column[], action: Action) => Column[];
export {};
//# sourceMappingURL=columnReducer.d.ts.map