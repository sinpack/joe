"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "docAccessResolver", {
    enumerable: true,
    get: function() {
        return docAccessResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _docAccess = require("../../operations/docAccess");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function docAccessResolver() {
    async function resolver(_, args, context) {
        return (0, _docAccess.docAccess)({
            id: args.id,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID')
        });
    }
    return resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9kb2NBY2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uUGVybWlzc2lvbiwgR2xvYmFsUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uLy4uL2F1dGgnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcydcblxuaW1wb3J0IGlzb2xhdGVPYmplY3RQcm9wZXJ0eSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvaXNvbGF0ZU9iamVjdFByb3BlcnR5J1xuaW1wb3J0IHsgZG9jQWNjZXNzIH0gZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9kb2NBY2Nlc3MnXG5cbmV4cG9ydCB0eXBlIFJlc29sdmVyID0gKFxuICBfOiB1bmtub3duLFxuICBhcmdzOiB7XG4gICAgaWQ6IG51bWJlciB8IHN0cmluZ1xuICB9LFxuICBjb250ZXh0OiB7XG4gICAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICAgIHJlczogUmVzcG9uc2VcbiAgfSxcbikgPT4gUHJvbWlzZTxDb2xsZWN0aW9uUGVybWlzc2lvbiB8IEdsb2JhbFBlcm1pc3Npb24+XG5cbmV4cG9ydCBmdW5jdGlvbiBkb2NBY2Nlc3NSZXNvbHZlcigpOiBSZXNvbHZlciB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZG9jQWNjZXNzKHtcbiAgICAgIGlkOiBhcmdzLmlkLFxuICAgICAgcmVxOiBpc29sYXRlT2JqZWN0UHJvcGVydHk8UGF5bG9hZFJlcXVlc3Q+KGNvbnRleHQucmVxLCAndHJhbnNhY3Rpb25JRCcpLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZXJcbn1cbiJdLCJuYW1lcyI6WyJkb2NBY2Nlc3NSZXNvbHZlciIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0IiwiZG9jQWNjZXNzIiwiaWQiLCJyZXEiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFpQmdCQTs7O2VBQUFBOzs7OEVBZGtCOzJCQUNSOzs7Ozs7QUFhbkIsU0FBU0E7SUFDZCxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUN0QyxPQUFPQyxJQUFBQSxvQkFBUyxFQUFDO1lBQ2ZDLElBQUlILEtBQUtHLEVBQUU7WUFDWEMsS0FBS0MsSUFBQUEsOEJBQXFCLEVBQWlCSixRQUFRRyxHQUFHLEVBQUU7UUFDMUQ7SUFDRjtJQUVBLE9BQU9OO0FBQ1QifQ==