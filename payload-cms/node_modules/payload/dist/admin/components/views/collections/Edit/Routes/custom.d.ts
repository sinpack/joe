import type { match } from 'react-router-dom';
import React from 'react';
import type { CollectionPermission, User } from '../../../../../../auth';
import type { SanitizedCollectionConfig } from '../../../../../../exports/types';
export declare const collectionCustomRoutes: (props: {
    collection?: SanitizedCollectionConfig;
    match: match<{
        [key: string]: string;
    }>;
    permissions: CollectionPermission;
    user: User;
}) => React.ReactElement[];
//# sourceMappingURL=custom.d.ts.map