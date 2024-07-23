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
const _login = /*#__PURE__*/ _interop_require_default(require("../../operations/login"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function loginResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            data: {
                email: args.email,
                password: args.password
            },
            depth: 0,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID'),
            res: context.res
        };
        const result = (0, _login.default)(options);
        return result;
    }
    return resolver;
}
const _default = loginResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2xvZ2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgaXNvbGF0ZU9iamVjdFByb3BlcnR5IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9pc29sYXRlT2JqZWN0UHJvcGVydHknXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9sb2dpbidcblxuZnVuY3Rpb24gbG9naW5SZXNvbHZlcihjb2xsZWN0aW9uOiBDb2xsZWN0aW9uKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1haWw6IGFyZ3MuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBhcmdzLnBhc3N3b3JkLFxuICAgICAgfSxcbiAgICAgIGRlcHRoOiAwLFxuICAgICAgcmVxOiBpc29sYXRlT2JqZWN0UHJvcGVydHk8UGF5bG9hZFJlcXVlc3Q+KGNvbnRleHQucmVxLCAndHJhbnNhY3Rpb25JRCcpLFxuICAgICAgcmVzOiBjb250ZXh0LnJlcyxcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBsb2dpbihvcHRpb25zKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlclxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpblJlc29sdmVyXG4iXSwibmFtZXMiOlsibG9naW5SZXNvbHZlciIsImNvbGxlY3Rpb24iLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsIm9wdGlvbnMiLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsImRlcHRoIiwicmVxIiwiaXNvbGF0ZU9iamVjdFByb3BlcnR5IiwicmVzIiwicmVzdWx0IiwibG9naW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkEwQkE7OztlQUFBOzs7OEVBdkJrQzs4REFDaEI7Ozs7OztBQUVsQixTQUFTQSxjQUFjQyxVQUFzQjtJQUMzQyxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUN0QyxNQUFNQyxVQUFVO1lBQ2RMO1lBQ0FNLE1BQU07Z0JBQ0pDLE9BQU9KLEtBQUtJLEtBQUs7Z0JBQ2pCQyxVQUFVTCxLQUFLSyxRQUFRO1lBQ3pCO1lBQ0FDLE9BQU87WUFDUEMsS0FBS0MsSUFBQUEsOEJBQXFCLEVBQWlCUCxRQUFRTSxHQUFHLEVBQUU7WUFDeERFLEtBQUtSLFFBQVFRLEdBQUc7UUFDbEI7UUFFQSxNQUFNQyxTQUFTQyxJQUFBQSxjQUFLLEVBQUNUO1FBQ3JCLE9BQU9RO0lBQ1Q7SUFFQSxPQUFPWjtBQUNUO01BRUEsV0FBZUYifQ==