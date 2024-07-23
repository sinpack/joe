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
const _forgotPassword = /*#__PURE__*/ _interop_require_default(require("../../operations/forgotPassword"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function forgotPasswordResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            data: {
                email: args.email
            },
            disableEmail: args.disableEmail,
            expiration: args.expiration,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID')
        };
        await (0, _forgotPassword.default)(options);
        return true;
    }
    return resolver;
}
const _default = forgotPasswordResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2ZvcmdvdFBhc3N3b3JkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgaXNvbGF0ZU9iamVjdFByb3BlcnR5IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9pc29sYXRlT2JqZWN0UHJvcGVydHknXG5pbXBvcnQgZm9yZ290UGFzc3dvcmQgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9mb3Jnb3RQYXNzd29yZCdcblxuZnVuY3Rpb24gZm9yZ290UGFzc3dvcmRSZXNvbHZlcihjb2xsZWN0aW9uOiBDb2xsZWN0aW9uKTogYW55IHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZGF0YToge1xuICAgICAgICBlbWFpbDogYXJncy5lbWFpbCxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlRW1haWw6IGFyZ3MuZGlzYWJsZUVtYWlsLFxuICAgICAgZXhwaXJhdGlvbjogYXJncy5leHBpcmF0aW9uLFxuICAgICAgcmVxOiBpc29sYXRlT2JqZWN0UHJvcGVydHk8UGF5bG9hZFJlcXVlc3Q+KGNvbnRleHQucmVxLCAndHJhbnNhY3Rpb25JRCcpLFxuICAgIH1cblxuICAgIGF3YWl0IGZvcmdvdFBhc3N3b3JkKG9wdGlvbnMpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmb3Jnb3RQYXNzd29yZFJlc29sdmVyXG4iXSwibmFtZXMiOlsiZm9yZ290UGFzc3dvcmRSZXNvbHZlciIsImNvbGxlY3Rpb24iLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsIm9wdGlvbnMiLCJkYXRhIiwiZW1haWwiLCJkaXNhYmxlRW1haWwiLCJleHBpcmF0aW9uIiwicmVxIiwiaXNvbGF0ZU9iamVjdFByb3BlcnR5IiwiZm9yZ290UGFzc3dvcmQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXlCQTs7O2VBQUE7Ozs4RUF0QmtDO3VFQUNQOzs7Ozs7QUFFM0IsU0FBU0EsdUJBQXVCQyxVQUFzQjtJQUNwRCxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUN0QyxNQUFNQyxVQUFVO1lBQ2RMO1lBQ0FNLE1BQU07Z0JBQ0pDLE9BQU9KLEtBQUtJLEtBQUs7WUFDbkI7WUFDQUMsY0FBY0wsS0FBS0ssWUFBWTtZQUMvQkMsWUFBWU4sS0FBS00sVUFBVTtZQUMzQkMsS0FBS0MsSUFBQUEsOEJBQXFCLEVBQWlCUCxRQUFRTSxHQUFHLEVBQUU7UUFDMUQ7UUFFQSxNQUFNRSxJQUFBQSx1QkFBYyxFQUFDUDtRQUNyQixPQUFPO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO01BRUEsV0FBZUYifQ==