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
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _logout = /*#__PURE__*/ _interop_require_default(require("../../operations/logout"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function logoutResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID'),
            res: context.res
        };
        const result = await (0, _logout.default)(options);
        return result;
    }
    return resolver;
}
const _default = logoutResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2xvZ291dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcydcblxuaW1wb3J0IGlzb2xhdGVPYmplY3RQcm9wZXJ0eSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvaXNvbGF0ZU9iamVjdFByb3BlcnR5J1xuaW1wb3J0IGxvZ291dCBmcm9tICcuLi8uLi9vcGVyYXRpb25zL2xvZ291dCdcblxuZnVuY3Rpb24gbG9nb3V0UmVzb2x2ZXIoY29sbGVjdGlvbjogQ29sbGVjdGlvbik6IGFueSB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIHJlcTogaXNvbGF0ZU9iamVjdFByb3BlcnR5PFBheWxvYWRSZXF1ZXN0Pihjb250ZXh0LnJlcSwgJ3RyYW5zYWN0aW9uSUQnKSxcbiAgICAgIHJlczogY29udGV4dC5yZXMsXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbG9nb3V0KG9wdGlvbnMpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9nb3V0UmVzb2x2ZXJcbiJdLCJuYW1lcyI6WyJsb2dvdXRSZXNvbHZlciIsImNvbGxlY3Rpb24iLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsIm9wdGlvbnMiLCJyZXEiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiLCJyZXMiLCJyZXN1bHQiLCJsb2dvdXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBc0JBOzs7ZUFBQTs7OzhFQW5Ca0M7K0RBQ2Y7Ozs7OztBQUVuQixTQUFTQSxlQUFlQyxVQUFzQjtJQUM1QyxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUN0QyxNQUFNQyxVQUFVO1lBQ2RMO1lBQ0FNLEtBQUtDLElBQUFBLDhCQUFxQixFQUFpQkgsUUFBUUUsR0FBRyxFQUFFO1lBQ3hERSxLQUFLSixRQUFRSSxHQUFHO1FBQ2xCO1FBRUEsTUFBTUMsU0FBUyxNQUFNQyxJQUFBQSxlQUFNLEVBQUNMO1FBRTVCLE9BQU9JO0lBQ1Q7SUFFQSxPQUFPUjtBQUNUO01BRUEsV0FBZUYifQ==