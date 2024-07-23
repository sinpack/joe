import React from 'react';
export type Theme = 'dark' | 'light';
export type ThemeContext = {
    autoMode: boolean;
    setTheme: (theme: Theme) => void;
    theme: Theme;
};
declare const Context: React.Context<ThemeContext>;
export declare const ThemeProvider: React.FC<{
    children?: React.ReactNode;
}>;
export declare const useTheme: () => ThemeContext;
export default Context;
//# sourceMappingURL=index.d.ts.map