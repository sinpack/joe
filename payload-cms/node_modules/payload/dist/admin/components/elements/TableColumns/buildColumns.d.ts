import type { SanitizedCollectionConfig } from '../../../../collections/config/types';
import type { Props as CellProps } from '../../views/collections/List/Cell/types';
import type { Column } from '../Table/types';
declare const buildColumns: ({ cellProps, collection, columns, }: {
    cellProps: Partial<CellProps>[];
    collection: SanitizedCollectionConfig;
    columns: Pick<Column, 'accessor' | 'active'>[];
}) => Column[];
export default buildColumns;
//# sourceMappingURL=buildColumns.d.ts.map