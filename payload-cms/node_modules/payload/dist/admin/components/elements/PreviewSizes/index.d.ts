import React from 'react';
import type { SanitizedCollectionConfig } from '../../../../exports/types';
import type { FileSizes } from '../../../../uploads/types';
import type { Data } from '../../forms/Form/types';
import './index.scss';
declare const PreviewSizes: React.FC<{
    collection: SanitizedCollectionConfig;
    doc: Data & {
        sizes?: FileSizes;
    };
    imageCacheTag?: string;
}>;
export default PreviewSizes;
//# sourceMappingURL=index.d.ts.map