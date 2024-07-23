import type { GraphQLScalarType } from 'graphql';
import { GraphQLEnumType } from 'graphql';
import type { SanitizedLocalizationConfig } from '../../config/types';
declare const buildLocaleInputType: (localization: SanitizedLocalizationConfig) => GraphQLEnumType | GraphQLScalarType;
export default buildLocaleInputType;
//# sourceMappingURL=buildLocaleInputType.d.ts.map