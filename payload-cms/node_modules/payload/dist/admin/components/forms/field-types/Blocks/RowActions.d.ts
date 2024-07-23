import React from 'react';
import type { Block, Labels } from '../../../../../fields/config/types';
export declare const RowActions: React.FC<{
    addRow: (rowIndex: number, blockType: string) => void;
    blockType: string;
    blocks: Block[];
    duplicateRow: (rowIndex: number, blockType: string) => void;
    hasMaxRows?: boolean;
    isSortable?: boolean;
    labels: Labels;
    moveRow: (fromIndex: number, toIndex: number) => void;
    removeRow: (rowIndex: number) => void;
    rowCount: number;
    rowIndex: number;
}>;
//# sourceMappingURL=RowActions.d.ts.map