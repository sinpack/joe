import React from 'react';
type PreferencesContext = {
    getPreference: <T = any>(key: string) => Promise<T> | T;
    /**
     * @param key - a string identifier for the property being set
     * @param value - preference data to store
     * @param merge - when true will combine the existing preference object batch the change into one request for objects, default = false
     */
    setPreference: <T = any>(key: string, value: T, merge?: boolean) => Promise<void>;
};
export declare const PreferencesProvider: React.FC<{
    children?: React.ReactNode;
}>;
export declare const usePreferences: () => PreferencesContext;
export {};
//# sourceMappingURL=index.d.ts.map