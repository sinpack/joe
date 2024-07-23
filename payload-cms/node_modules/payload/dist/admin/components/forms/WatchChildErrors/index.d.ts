import React from 'react';
import type { Field } from '../../../../fields/config/types';
type TrackSubSchemaErrorCountProps = {
    /**
     * Only for collapsibles, and unnamed-tabs
     */
    fieldSchema?: Field[];
    path: string;
    setErrorCount: (count: number) => void;
};
export declare const WatchChildErrors: React.FC<TrackSubSchemaErrorCountProps>;
export {};
//# sourceMappingURL=index.d.ts.map