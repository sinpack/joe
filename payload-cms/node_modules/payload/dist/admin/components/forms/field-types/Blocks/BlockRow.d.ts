import React from 'react';
import type { Block } from '../../../../../fields/config/types';
import type { UseDraggableSortableReturn } from '../../../elements/DraggableSortable/useDraggableSortable/types';
import type { Row } from '../../Form/types';
import type { Props } from './types';
type BlockFieldProps = UseDraggableSortableReturn & Pick<Props, 'blocks' | 'fieldTypes' | 'indexPath' | 'labels' | 'path' | 'permissions'> & {
    addRow: (rowIndex: number, blockType: string) => void;
    blockToRender: Block;
    duplicateRow: (rowIndex: number) => void;
    forceRender?: boolean;
    hasMaxRows?: boolean;
    isSortable?: boolean;
    moveRow: (fromIndex: number, toIndex: number) => void;
    readOnly: boolean;
    removeRow: (rowIndex: number) => void;
    row: Row;
    rowCount: number;
    rowIndex: number;
    setCollapse: (id: string, collapsed: boolean) => void;
};
export declare const BlockRow: React.FC<BlockFieldProps>;
export {};
//# sourceMappingURL=BlockRow.d.ts.map