import type { match } from 'react-router-dom';
import React from 'react';
import type { Permissions, User } from '../../../../auth';
import type { SanitizedCollectionConfig } from '../../../../collections/config/types';
export declare const collectionRoutes: (props: {
    collections: SanitizedCollectionConfig[];
    match: match<{
        [key: string]: string;
    }>;
    permissions: Permissions;
    user: User;
}) => React.ReactElement[];
//# sourceMappingURL=collections.d.ts.map