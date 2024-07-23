import type { FilterOptions } from '../../../../fields/config/types';
import type { FilterOptionsResult } from '../../forms/field-types/Relationship/types';
type Args = {
    filterOptions: FilterOptions;
    filterOptionsResult: FilterOptionsResult;
    path: string;
    relationTo: string | string[];
    setFilterOptionsResult: (optionFilters: FilterOptionsResult) => void;
};
export declare const GetFilterOptions: ({ filterOptions, filterOptionsResult, path, relationTo, setFilterOptionsResult, }: Args) => null;
export {};
//# sourceMappingURL=index.d.ts.map