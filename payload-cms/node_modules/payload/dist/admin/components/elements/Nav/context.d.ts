import React from 'react';
type NavContextType = {
    navOpen: boolean;
    navRef: React.RefObject<HTMLDivElement>;
    setNavOpen: (value: boolean) => void;
};
export declare const NavContext: React.Context<NavContextType>;
export declare const useNav: () => NavContextType;
export declare const NavProvider: React.FC<{
    children: React.ReactNode;
}>;
export {};
//# sourceMappingURL=context.d.ts.map