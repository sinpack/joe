import React from 'react';
import type { User } from '../../../../auth/types';
import type { AuthContext } from './types';
export declare const AuthProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useAuth: <T = User>() => AuthContext<T>;
//# sourceMappingURL=index.d.ts.map