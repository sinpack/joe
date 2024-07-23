import React from 'react';
import type { Locale } from '../../../../config/types';
declare const LocaleContext: React.Context<Locale>;
export declare const LocaleProvider: React.FC<{
    children?: React.ReactNode;
}>;
/**
 * A hook that returns the current locale object.
 */
export declare const useLocale: () => Locale;
export default LocaleContext;
//# sourceMappingURL=index.d.ts.map