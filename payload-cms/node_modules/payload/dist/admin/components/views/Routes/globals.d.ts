import type { match } from 'react-router-dom';
import React from 'react';
import type { Permissions, User } from '../../../../auth';
import type { SanitizedGlobalConfig } from '../../../../exports/types';
export declare const globalRoutes: (props: {
    globals: SanitizedGlobalConfig[];
    locale: string;
    match: match<{
        [key: string]: string;
    }>;
    permissions: Permissions;
    user: User;
}) => React.ReactElement[];
//# sourceMappingURL=globals.d.ts.map