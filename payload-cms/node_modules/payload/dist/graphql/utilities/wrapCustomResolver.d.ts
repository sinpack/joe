import type { ObjMap } from 'graphql/jsutils/ObjMap';
import type { GraphQLFieldConfig } from 'graphql/type/definition';
import type { PayloadRequest } from '../../express/types';
type PayloadContext = {
    req: PayloadRequest;
};
export declare function wrapCustomFields<TSource>(fields: ObjMap<GraphQLFieldConfig<TSource, PayloadContext>>): ObjMap<GraphQLFieldConfig<TSource, PayloadContext>>;
export {};
//# sourceMappingURL=wrapCustomResolver.d.ts.map