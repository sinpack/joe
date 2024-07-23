import React from 'react';
import type { CodeField } from '../../../../../../../../exports/types';
import type { CellComponentProps } from '../../types';
import './index.scss';
export interface CodeCellProps extends CellComponentProps<CodeField, string> {
    nowrap?: boolean;
}
declare const CodeCell: React.FC<CodeCellProps>;
export default CodeCell;
//# sourceMappingURL=index.d.ts.map