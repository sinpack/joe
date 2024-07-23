import type { User } from '../auth';
type Args = {
    defaultValue: unknown;
    locale: string | undefined;
    user: User;
    value?: unknown;
};
declare const getValueWithDefault: ({ defaultValue, locale, user, value, }: Args) => Promise<unknown>;
export default getValueWithDefault;
//# sourceMappingURL=getDefaultValue.d.ts.map