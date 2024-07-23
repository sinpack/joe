import type { FilterOptions, FilterOptionsProps } from '../../../../fields/config/types';
import type { Where } from '../../../../types';
export declare const getFilterOptionsQuery: (filterOptions: FilterOptions, options: Omit<FilterOptionsProps, 'relationTo'> & {
    relationTo: string | string[];
}) => Promise<{
    [collection: string]: Where;
}>;
//# sourceMappingURL=getFilterOptionsQuery.d.ts.map