import React from 'react';
import type { UseDraggableSortableReturn } from '../../../elements/DraggableSortable/useDraggableSortable/types';
import type { Row } from '../../Form/types';
import type { RowLabel as RowLabelType } from '../../RowLabel/types';
import type { Props } from './types';
import './index.scss';
type ArrayRowProps = UseDraggableSortableReturn & Pick<Props, 'fieldTypes' | 'fields' | 'indexPath' | 'labels' | 'path' | 'permissions'> & {
    CustomRowLabel?: RowLabelType;
    addRow: (rowIndex: number) => void;
    duplicateRow: (rowIndex: number) => void;
    forceRender?: boolean;
    hasMaxRows?: boolean;
    isSortable: boolean;
    moveRow: (fromIndex: number, toIndex: number) => void;
    readOnly?: boolean;
    removeRow: (rowIndex: number) => void;
    row: Row;
    rowCount: number;
    rowIndex: number;
    setCollapse: (rowID: string, collapsed: boolean) => void;
};
export declare const ArrayRow: React.FC<ArrayRowProps>;
export {};
//# sourceMappingURL=ArrayRow.d.ts.map