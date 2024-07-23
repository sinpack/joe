import type { PreferenceUpdateRequest } from '../types';
declare function update(args: PreferenceUpdateRequest): Promise<{
    key: string;
    user: {
        relationTo: string;
        value: string;
    };
    value: undefined;
}>;
export default update;
//# sourceMappingURL=update.d.ts.map