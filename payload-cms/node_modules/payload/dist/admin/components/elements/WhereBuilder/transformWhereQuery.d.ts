import type { Where } from '../../../../types';
/**
 * Something like [or][0][and][0][text][equals]=example%20post will work and pass through the validateWhereQuery check.
 * However, something like [text][equals]=example%20post will not work and will fail the validateWhereQuery check,
 * even though it is a valid Where query. This needs to be transformed here.
 */
export declare const transformWhereQuery: (whereQuery: any) => Where;
//# sourceMappingURL=transformWhereQuery.d.ts.map