import React from 'react';
import type { User } from '../../../../auth';
import type { SanitizedConfig } from '../../../../config/types';
export type adminViewType = 'Account' | 'Dashboard';
export declare const customRoutes: (props: {
    canAccessAdmin?: boolean;
    config: SanitizedConfig;
    match: {
        url: string;
    };
    user: User | null | undefined;
}) => React.JSX.Element[];
//# sourceMappingURL=custom.d.ts.map