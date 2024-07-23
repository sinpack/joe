"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _graphql = require("graphql");
const _formatName = /*#__PURE__*/ _interop_require_default(require("../utilities/formatName"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const buildFallbackLocaleInputType = (localization)=>{
    return new _graphql.GraphQLEnumType({
        name: 'FallbackLocaleInputType',
        values: [
            ...localization.localeCodes,
            'none'
        ].reduce((values, locale)=>({
                ...values,
                [(0, _formatName.default)(locale)]: {
                    value: locale
                }
            }), {})
    });
};
const _default = buildFallbackLocaleInputType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZEZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxFbnVtVHlwZSB9IGZyb20gJ2dyYXBocWwnXG5cbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkTG9jYWxpemF0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgZm9ybWF0TmFtZSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybWF0TmFtZSdcblxuY29uc3QgYnVpbGRGYWxsYmFja0xvY2FsZUlucHV0VHlwZSA9IChcbiAgbG9jYWxpemF0aW9uOiBTYW5pdGl6ZWRMb2NhbGl6YXRpb25Db25maWcsXG4pOiBHcmFwaFFMRW51bVR5cGUgPT4ge1xuICByZXR1cm4gbmV3IEdyYXBoUUxFbnVtVHlwZSh7XG4gICAgbmFtZTogJ0ZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlJyxcbiAgICB2YWx1ZXM6IFsuLi5sb2NhbGl6YXRpb24ubG9jYWxlQ29kZXMsICdub25lJ10ucmVkdWNlKFxuICAgICAgKHZhbHVlcywgbG9jYWxlKSA9PiAoe1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIFtmb3JtYXROYW1lKGxvY2FsZSldOiB7XG4gICAgICAgICAgdmFsdWU6IGxvY2FsZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAge30sXG4gICAgKSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRGYWxsYmFja0xvY2FsZUlucHV0VHlwZVxuIl0sIm5hbWVzIjpbImJ1aWxkRmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUiLCJsb2NhbGl6YXRpb24iLCJHcmFwaFFMRW51bVR5cGUiLCJuYW1lIiwidmFsdWVzIiwibG9jYWxlQ29kZXMiLCJyZWR1Y2UiLCJsb2NhbGUiLCJmb3JtYXROYW1lIiwidmFsdWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF1QkE7OztlQUFBOzs7eUJBdkJnQzttRUFJVDs7Ozs7O0FBRXZCLE1BQU1BLCtCQUErQixDQUNuQ0M7SUFFQSxPQUFPLElBQUlDLHdCQUFlLENBQUM7UUFDekJDLE1BQU07UUFDTkMsUUFBUTtlQUFJSCxhQUFhSSxXQUFXO1lBQUU7U0FBTyxDQUFDQyxNQUFNLENBQ2xELENBQUNGLFFBQVFHLFNBQVksQ0FBQTtnQkFDbkIsR0FBR0gsTUFBTTtnQkFDVCxDQUFDSSxJQUFBQSxtQkFBVSxFQUFDRCxRQUFRLEVBQUU7b0JBQ3BCRSxPQUFPRjtnQkFDVDtZQUNGLENBQUEsR0FDQSxDQUFDO0lBRUw7QUFDRjtNQUVBLFdBQWVQIn0=