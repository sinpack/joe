"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "wrapCustomFields", {
    enumerable: true,
    get: function() {
        return wrapCustomFields;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../utilities/isolateObjectProperty"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function wrapCustomResolver(resolver) {
    return (source, args, context, info)=>{
        return resolver(source, args, {
            ...context,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID')
        }, info);
    };
}
function wrapCustomFields(fields) {
    for(const key in fields){
        if (fields[key].resolve) {
            fields[key].resolve = wrapCustomResolver(fields[key].resolve);
        }
    }
    return fields;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy93cmFwQ3VzdG9tUmVzb2x2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBPYmpNYXAgfSBmcm9tICdncmFwaHFsL2pzdXRpbHMvT2JqTWFwJ1xuaW1wb3J0IHR5cGUgeyBHcmFwaFFMRmllbGRDb25maWcsIEdyYXBoUUxGaWVsZFJlc29sdmVyIH0gZnJvbSAnZ3JhcGhxbC90eXBlL2RlZmluaXRpb24nXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgaXNvbGF0ZU9iamVjdFByb3BlcnR5IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pc29sYXRlT2JqZWN0UHJvcGVydHknXG5cbnR5cGUgUGF5bG9hZENvbnRleHQgPSB7IHJlcTogUGF5bG9hZFJlcXVlc3QgfVxuXG5mdW5jdGlvbiB3cmFwQ3VzdG9tUmVzb2x2ZXI8VFNvdXJjZSwgVEFyZ3MsIFRSZXN1bHQ+KFxuICByZXNvbHZlcjogR3JhcGhRTEZpZWxkUmVzb2x2ZXI8VFNvdXJjZSwgUGF5bG9hZENvbnRleHQsIFRBcmdzLCBUUmVzdWx0Pixcbik6IEdyYXBoUUxGaWVsZFJlc29sdmVyPFRTb3VyY2UsIFBheWxvYWRDb250ZXh0LCBUQXJncywgVFJlc3VsdD4ge1xuICByZXR1cm4gKHNvdXJjZSwgYXJncywgY29udGV4dCwgaW5mbykgPT4ge1xuICAgIHJldHVybiByZXNvbHZlcihcbiAgICAgIHNvdXJjZSxcbiAgICAgIGFyZ3MsXG4gICAgICB7IC4uLmNvbnRleHQsIHJlcTogaXNvbGF0ZU9iamVjdFByb3BlcnR5KGNvbnRleHQucmVxLCAndHJhbnNhY3Rpb25JRCcpIH0sXG4gICAgICBpbmZvLFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcEN1c3RvbUZpZWxkczxUU291cmNlPihcbiAgZmllbGRzOiBPYmpNYXA8R3JhcGhRTEZpZWxkQ29uZmlnPFRTb3VyY2UsIFBheWxvYWRDb250ZXh0Pj4sXG4pOiBPYmpNYXA8R3JhcGhRTEZpZWxkQ29uZmlnPFRTb3VyY2UsIFBheWxvYWRDb250ZXh0Pj4ge1xuICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHMpIHtcbiAgICBpZiAoZmllbGRzW2tleV0ucmVzb2x2ZSkge1xuICAgICAgZmllbGRzW2tleV0ucmVzb2x2ZSA9IHdyYXBDdXN0b21SZXNvbHZlcihmaWVsZHNba2V5XS5yZXNvbHZlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmllbGRzXG59XG4iXSwibmFtZXMiOlsid3JhcEN1c3RvbUZpZWxkcyIsIndyYXBDdXN0b21SZXNvbHZlciIsInJlc29sdmVyIiwic291cmNlIiwiYXJncyIsImNvbnRleHQiLCJpbmZvIiwicmVxIiwiaXNvbGF0ZU9iamVjdFByb3BlcnR5IiwiZmllbGRzIiwia2V5IiwicmVzb2x2ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXNCZ0JBOzs7ZUFBQUE7Ozs4RUFqQmtCOzs7Ozs7QUFJbEMsU0FBU0MsbUJBQ1BDLFFBQXVFO0lBRXZFLE9BQU8sQ0FBQ0MsUUFBUUMsTUFBTUMsU0FBU0M7UUFDN0IsT0FBT0osU0FDTEMsUUFDQUMsTUFDQTtZQUFFLEdBQUdDLE9BQU87WUFBRUUsS0FBS0MsSUFBQUEsOEJBQXFCLEVBQUNILFFBQVFFLEdBQUcsRUFBRTtRQUFpQixHQUN2RUQ7SUFFSjtBQUNGO0FBRU8sU0FBU04saUJBQ2RTLE1BQTJEO0lBRTNELElBQUssTUFBTUMsT0FBT0QsT0FBUTtRQUN4QixJQUFJQSxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1lBQ3ZCRixNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxHQUFHVixtQkFBbUJRLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPO1FBQzlEO0lBQ0Y7SUFDQSxPQUFPRjtBQUNUIn0=