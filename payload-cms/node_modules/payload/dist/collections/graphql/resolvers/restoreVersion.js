/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return restoreVersionResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _restoreVersion = /*#__PURE__*/ _interop_require_default(require("../../operations/restoreVersion"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function restoreVersionResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            id: args.id,
            collection,
            depth: 0,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID')
        };
        const result = await (0, _restoreVersion.default)(options);
        return result;
    }
    return resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9yZXN0b3JlVmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHR5cGUgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgaXNvbGF0ZU9iamVjdFByb3BlcnR5IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9pc29sYXRlT2JqZWN0UHJvcGVydHknXG5pbXBvcnQgcmVzdG9yZVZlcnNpb24gZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9yZXN0b3JlVmVyc2lvbidcblxuZXhwb3J0IHR5cGUgUmVzb2x2ZXIgPSAoXG4gIF86IHVua25vd24sXG4gIGFyZ3M6IHtcbiAgICBpZDogbnVtYmVyIHwgc3RyaW5nXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gICAgcmVzOiBSZXNwb25zZVxuICB9LFxuKSA9PiBQcm9taXNlPERvY3VtZW50PlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXN0b3JlVmVyc2lvblJlc29sdmVyKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pOiBSZXNvbHZlciB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgaWQ6IGFyZ3MuaWQsXG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZGVwdGg6IDAsXG4gICAgICByZXE6IGlzb2xhdGVPYmplY3RQcm9wZXJ0eTxQYXlsb2FkUmVxdWVzdD4oY29udGV4dC5yZXEsICd0cmFuc2FjdGlvbklEJyksXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzdG9yZVZlcnNpb24ob3B0aW9ucylcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZXJcbn1cbiJdLCJuYW1lcyI6WyJyZXN0b3JlVmVyc2lvblJlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0Iiwib3B0aW9ucyIsImlkIiwiZGVwdGgiLCJyZXEiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiLCJyZXN1bHQiLCJyZXN0b3JlVmVyc2lvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQW9CcEM7OztlQUF3QkE7Ozs4RUFkVTt1RUFDUDs7Ozs7O0FBYVosU0FBU0EsdUJBQXVCQyxVQUFzQjtJQUNuRSxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUN0QyxNQUFNQyxVQUFVO1lBQ2RDLElBQUlILEtBQUtHLEVBQUU7WUFDWE47WUFDQU8sT0FBTztZQUNQQyxLQUFLQyxJQUFBQSw4QkFBcUIsRUFBaUJMLFFBQVFJLEdBQUcsRUFBRTtRQUMxRDtRQUVBLE1BQU1FLFNBQVMsTUFBTUMsSUFBQUEsdUJBQWMsRUFBQ047UUFDcEMsT0FBT0s7SUFDVDtJQUVBLE9BQU9UO0FBQ1QifQ==