import React from 'react';
type ActionsContextType = {
    actions: React.ComponentType<any>[];
    setViewActions: (actions: React.ComponentType<any>[]) => void;
};
export declare const useActions: () => ActionsContextType;
export declare const ActionsProvider: ({ children }: {
    children: any;
}) => React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map