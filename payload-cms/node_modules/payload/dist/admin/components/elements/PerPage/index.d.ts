import React from 'react';
import './index.scss';
export type Props = {
    handleChange?: (limit: number) => void;
    limit: number;
    limits: number[];
    modifySearchParams?: boolean;
    resetPage?: boolean;
};
declare const PerPage: React.FC<Props>;
export default PerPage;
//# sourceMappingURL=index.d.ts.map