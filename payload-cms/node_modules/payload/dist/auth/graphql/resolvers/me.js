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
const _me = /*#__PURE__*/ _interop_require_default(require("../../operations/me"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function meResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            depth: 0,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID')
        };
        return (0, _me.default)(options);
    }
    return resolver;
}
const _default = meResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL21lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgaXNvbGF0ZU9iamVjdFByb3BlcnR5IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9pc29sYXRlT2JqZWN0UHJvcGVydHknXG5pbXBvcnQgbWUgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9tZSdcblxuZnVuY3Rpb24gbWVSZXNvbHZlcihjb2xsZWN0aW9uOiBDb2xsZWN0aW9uKTogYW55IHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZGVwdGg6IDAsXG4gICAgICByZXE6IGlzb2xhdGVPYmplY3RQcm9wZXJ0eTxQYXlsb2FkUmVxdWVzdD4oY29udGV4dC5yZXEsICd0cmFuc2FjdGlvbklEJyksXG4gICAgfVxuICAgIHJldHVybiBtZShvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lUmVzb2x2ZXJcbiJdLCJuYW1lcyI6WyJtZVJlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0Iiwib3B0aW9ucyIsImRlcHRoIiwicmVxIiwiaXNvbGF0ZU9iamVjdFByb3BlcnR5IiwibWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFtQkE7OztlQUFBOzs7OEVBaEJrQzsyREFDbkI7Ozs7OztBQUVmLFNBQVNBLFdBQVdDLFVBQXNCO0lBQ3hDLGVBQWVDLFNBQVNDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO1FBQ3RDLE1BQU1DLFVBQVU7WUFDZEw7WUFDQU0sT0FBTztZQUNQQyxLQUFLQyxJQUFBQSw4QkFBcUIsRUFBaUJKLFFBQVFHLEdBQUcsRUFBRTtRQUMxRDtRQUNBLE9BQU9FLElBQUFBLFdBQUUsRUFBQ0o7SUFDWjtJQUVBLE9BQU9KO0FBQ1Q7TUFFQSxXQUFlRiJ9