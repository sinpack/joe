/* eslint-disable no-param-reassign */ "use strict";
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
const _verifyEmail = /*#__PURE__*/ _interop_require_default(require("../../operations/verifyEmail"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyEmailResolver(collection) {
    async function resolver(_, args, context) {
        let { req } = context;
        req = (0, _isolateObjectProperty.default)(req, 'locale');
        req = (0, _isolateObjectProperty.default)(req, 'fallbackLocale');
        if (args.locale) req.locale = args.locale;
        if (args.fallbackLocale) req.fallbackLocale = args.fallbackLocale;
        const options = {
            api: 'GraphQL',
            collection,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID'),
            res: context.res,
            token: args.token
        };
        const success = await (0, _verifyEmail.default)(options);
        return success;
    }
    return resolver;
}
const _default = verifyEmailResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL3ZlcmlmeUVtYWlsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcydcblxuaW1wb3J0IGlzb2xhdGVPYmplY3RQcm9wZXJ0eSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvaXNvbGF0ZU9iamVjdFByb3BlcnR5J1xuaW1wb3J0IHZlcmlmeUVtYWlsIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvdmVyaWZ5RW1haWwnXG5cbmZ1bmN0aW9uIHZlcmlmeUVtYWlsUmVzb2x2ZXIoY29sbGVjdGlvbjogQ29sbGVjdGlvbikge1xuICBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgbGV0IHsgcmVxIH0gPSBjb250ZXh0XG4gICAgcmVxID0gaXNvbGF0ZU9iamVjdFByb3BlcnR5KHJlcSwgJ2xvY2FsZScpXG4gICAgcmVxID0gaXNvbGF0ZU9iamVjdFByb3BlcnR5KHJlcSwgJ2ZhbGxiYWNrTG9jYWxlJylcbiAgICBpZiAoYXJncy5sb2NhbGUpIHJlcS5sb2NhbGUgPSBhcmdzLmxvY2FsZVxuICAgIGlmIChhcmdzLmZhbGxiYWNrTG9jYWxlKSByZXEuZmFsbGJhY2tMb2NhbGUgPSBhcmdzLmZhbGxiYWNrTG9jYWxlXG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgYXBpOiAnR3JhcGhRTCcsXG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgcmVxOiBpc29sYXRlT2JqZWN0UHJvcGVydHk8UGF5bG9hZFJlcXVlc3Q+KHJlcSwgJ3RyYW5zYWN0aW9uSUQnKSxcbiAgICAgIHJlczogY29udGV4dC5yZXMsXG4gICAgICB0b2tlbjogYXJncy50b2tlbixcbiAgICB9XG5cbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgdmVyaWZ5RW1haWwob3B0aW9ucylcbiAgICByZXR1cm4gc3VjY2Vzc1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeUVtYWlsUmVzb2x2ZXJcbiJdLCJuYW1lcyI6WyJ2ZXJpZnlFbWFpbFJlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0IiwicmVxIiwiaXNvbGF0ZU9iamVjdFByb3BlcnR5IiwibG9jYWxlIiwiZmFsbGJhY2tMb2NhbGUiLCJvcHRpb25zIiwiYXBpIiwicmVzIiwidG9rZW4iLCJzdWNjZXNzIiwidmVyaWZ5RW1haWwiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBOEJwQzs7O2VBQUE7Ozs4RUExQmtDO29FQUNWOzs7Ozs7QUFFeEIsU0FBU0Esb0JBQW9CQyxVQUFzQjtJQUNqRCxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUN0QyxJQUFJLEVBQUVDLEdBQUcsRUFBRSxHQUFHRDtRQUNkQyxNQUFNQyxJQUFBQSw4QkFBcUIsRUFBQ0QsS0FBSztRQUNqQ0EsTUFBTUMsSUFBQUEsOEJBQXFCLEVBQUNELEtBQUs7UUFDakMsSUFBSUYsS0FBS0ksTUFBTSxFQUFFRixJQUFJRSxNQUFNLEdBQUdKLEtBQUtJLE1BQU07UUFDekMsSUFBSUosS0FBS0ssY0FBYyxFQUFFSCxJQUFJRyxjQUFjLEdBQUdMLEtBQUtLLGNBQWM7UUFFakUsTUFBTUMsVUFBVTtZQUNkQyxLQUFLO1lBQ0xWO1lBQ0FLLEtBQUtDLElBQUFBLDhCQUFxQixFQUFpQkQsS0FBSztZQUNoRE0sS0FBS1AsUUFBUU8sR0FBRztZQUNoQkMsT0FBT1QsS0FBS1MsS0FBSztRQUNuQjtRQUVBLE1BQU1DLFVBQVUsTUFBTUMsSUFBQUEsb0JBQVcsRUFBQ0w7UUFDbEMsT0FBT0k7SUFDVDtJQUVBLE9BQU9aO0FBQ1Q7TUFFQSxXQUFlRiJ9