import React from 'react';
type ContextType = {
    collapsed: boolean;
    isVisible: boolean;
    toggle: () => void;
    withinCollapsible: boolean;
};
export declare const CollapsibleProvider: React.FC<{
    children?: React.ReactNode;
    collapsed?: boolean;
    toggle: () => void;
    withinCollapsible?: boolean;
}>;
export declare const useCollapsible: () => ContextType;
export {};
//# sourceMappingURL=provider.d.ts.map