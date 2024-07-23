/// <reference types="node" />
import type { match } from 'react-router-dom';
import React from 'react';
import type { GlobalPermission, User } from '../../../../../auth';
import type { SanitizedGlobalConfig } from '../../../../../exports/types';
export declare const globalCustomRoutes: (props: {
    global?: SanitizedGlobalConfig;
    match: match<{
        [key: string]: string;
    }>;
    permissions: GlobalPermission | null;
    user: User | null | undefined;
}) => React.ReactElement[];
//# sourceMappingURL=custom.d.ts.map