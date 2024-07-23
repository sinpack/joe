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
const _resetPassword = /*#__PURE__*/ _interop_require_default(require("../../operations/resetPassword"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function resetPasswordResolver(collection) {
    async function resolver(_, args, context) {
        let { req } = context;
        req = (0, _isolateObjectProperty.default)(req, 'locale');
        req = (0, _isolateObjectProperty.default)(req, 'fallbackLocale');
        if (args.locale) req.locale = args.locale;
        if (args.fallbackLocale) req.fallbackLocale = args.fallbackLocale;
        const options = {
            api: 'GraphQL',
            collection,
            data: args,
            depth: 0,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID'),
            res: context.res
        };
        const result = await (0, _resetPassword.default)(options);
        return result;
    }
    return resolver;
}
const _default = resetPasswordResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL3Jlc2V0UGFzc3dvcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgaXNvbGF0ZU9iamVjdFByb3BlcnR5IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9pc29sYXRlT2JqZWN0UHJvcGVydHknXG5pbXBvcnQgcmVzZXRQYXNzd29yZCBmcm9tICcuLi8uLi9vcGVyYXRpb25zL3Jlc2V0UGFzc3dvcmQnXG5cbmZ1bmN0aW9uIHJlc2V0UGFzc3dvcmRSZXNvbHZlcihjb2xsZWN0aW9uOiBDb2xsZWN0aW9uKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBsZXQgeyByZXEgfSA9IGNvbnRleHRcbiAgICByZXEgPSBpc29sYXRlT2JqZWN0UHJvcGVydHkocmVxLCAnbG9jYWxlJylcbiAgICByZXEgPSBpc29sYXRlT2JqZWN0UHJvcGVydHkocmVxLCAnZmFsbGJhY2tMb2NhbGUnKVxuICAgIGlmIChhcmdzLmxvY2FsZSkgcmVxLmxvY2FsZSA9IGFyZ3MubG9jYWxlXG4gICAgaWYgKGFyZ3MuZmFsbGJhY2tMb2NhbGUpIHJlcS5mYWxsYmFja0xvY2FsZSA9IGFyZ3MuZmFsbGJhY2tMb2NhbGVcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBhcGk6ICdHcmFwaFFMJyxcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBkYXRhOiBhcmdzLFxuICAgICAgZGVwdGg6IDAsXG4gICAgICByZXE6IGlzb2xhdGVPYmplY3RQcm9wZXJ0eTxQYXlsb2FkUmVxdWVzdD4ocmVxLCAndHJhbnNhY3Rpb25JRCcpLFxuICAgICAgcmVzOiBjb250ZXh0LnJlcyxcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNldFBhc3N3b3JkKG9wdGlvbnMpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzZXRQYXNzd29yZFJlc29sdmVyXG4iXSwibmFtZXMiOlsicmVzZXRQYXNzd29yZFJlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0IiwicmVxIiwiaXNvbGF0ZU9iamVjdFByb3BlcnR5IiwibG9jYWxlIiwiZmFsbGJhY2tMb2NhbGUiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsImRlcHRoIiwicmVzIiwicmVzdWx0IiwicmVzZXRQYXNzd29yZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBZ0NwQzs7O2VBQUE7Ozs4RUE1QmtDO3NFQUNSOzs7Ozs7QUFFMUIsU0FBU0Esc0JBQXNCQyxVQUFzQjtJQUNuRCxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUN0QyxJQUFJLEVBQUVDLEdBQUcsRUFBRSxHQUFHRDtRQUNkQyxNQUFNQyxJQUFBQSw4QkFBcUIsRUFBQ0QsS0FBSztRQUNqQ0EsTUFBTUMsSUFBQUEsOEJBQXFCLEVBQUNELEtBQUs7UUFDakMsSUFBSUYsS0FBS0ksTUFBTSxFQUFFRixJQUFJRSxNQUFNLEdBQUdKLEtBQUtJLE1BQU07UUFDekMsSUFBSUosS0FBS0ssY0FBYyxFQUFFSCxJQUFJRyxjQUFjLEdBQUdMLEtBQUtLLGNBQWM7UUFFakUsTUFBTUMsVUFBVTtZQUNkQyxLQUFLO1lBQ0xWO1lBQ0FXLE1BQU1SO1lBQ05TLE9BQU87WUFDUFAsS0FBS0MsSUFBQUEsOEJBQXFCLEVBQWlCRCxLQUFLO1lBQ2hEUSxLQUFLVCxRQUFRUyxHQUFHO1FBQ2xCO1FBRUEsTUFBTUMsU0FBUyxNQUFNQyxJQUFBQSxzQkFBYSxFQUFDTjtRQUVuQyxPQUFPSztJQUNUO0lBRUEsT0FBT2I7QUFDVDtNQUVBLFdBQWVGIn0=