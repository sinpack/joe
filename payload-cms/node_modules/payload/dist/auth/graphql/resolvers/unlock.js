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
const _unlock = /*#__PURE__*/ _interop_require_default(require("../../operations/unlock"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unlockResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            data: {
                email: args.email
            },
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID')
        };
        const result = await (0, _unlock.default)(options);
        return result;
    }
    return resolver;
}
const _default = unlockResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL3VubG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcydcblxuaW1wb3J0IGlzb2xhdGVPYmplY3RQcm9wZXJ0eSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvaXNvbGF0ZU9iamVjdFByb3BlcnR5J1xuaW1wb3J0IHVubG9jayBmcm9tICcuLi8uLi9vcGVyYXRpb25zL3VubG9jaydcblxuZnVuY3Rpb24gdW5sb2NrUmVzb2x2ZXIoY29sbGVjdGlvbjogQ29sbGVjdGlvbikge1xuICBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBkYXRhOiB7IGVtYWlsOiBhcmdzLmVtYWlsIH0sXG4gICAgICByZXE6IGlzb2xhdGVPYmplY3RQcm9wZXJ0eTxQYXlsb2FkUmVxdWVzdD4oY29udGV4dC5yZXEsICd0cmFuc2FjdGlvbklEJyksXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdW5sb2NrKG9wdGlvbnMpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVubG9ja1Jlc29sdmVyXG4iXSwibmFtZXMiOlsidW5sb2NrUmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwiZGF0YSIsImVtYWlsIiwicmVxIiwiaXNvbGF0ZU9iamVjdFByb3BlcnR5IiwicmVzdWx0IiwidW5sb2NrIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBcUJBOzs7ZUFBQTs7OzhFQWxCa0M7K0RBQ2Y7Ozs7OztBQUVuQixTQUFTQSxlQUFlQyxVQUFzQjtJQUM1QyxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUN0QyxNQUFNQyxVQUFVO1lBQ2RMO1lBQ0FNLE1BQU07Z0JBQUVDLE9BQU9KLEtBQUtJLEtBQUs7WUFBQztZQUMxQkMsS0FBS0MsSUFBQUEsOEJBQXFCLEVBQWlCTCxRQUFRSSxHQUFHLEVBQUU7UUFDMUQ7UUFFQSxNQUFNRSxTQUFTLE1BQU1DLElBQUFBLGVBQU0sRUFBQ047UUFDNUIsT0FBT0s7SUFDVDtJQUVBLE9BQU9UO0FBQ1Q7TUFFQSxXQUFlRiJ9