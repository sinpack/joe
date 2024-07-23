/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionByIDResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _findVersionByID = /*#__PURE__*/ _interop_require_default(require("../../operations/findVersionByID"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findVersionByIDResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, _isolateObjectProperty.default)(req, 'locale');
        req = (0, _isolateObjectProperty.default)(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        context.req = req;
        const options = {
            id: args.id,
            collection,
            depth: 0,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID')
        };
        const result = await (0, _findVersionByID.default)(options);
        return result;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9maW5kVmVyc2lvbkJ5SUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB0eXBlIHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgVHlwZVdpdGhWZXJzaW9uIH0gZnJvbSAnLi4vLi4vLi4vdmVyc2lvbnMvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24sIFR5cGVXaXRoSUQgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SUQgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9maW5kVmVyc2lvbkJ5SUQnXG5cbmV4cG9ydCB0eXBlIFJlc29sdmVyPFQgZXh0ZW5kcyBUeXBlV2l0aElEID0gYW55PiA9IChcbiAgXzogdW5rbm93bixcbiAgYXJnczoge1xuICAgIGZhbGxiYWNrTG9jYWxlPzogc3RyaW5nXG4gICAgaWQ6IG51bWJlciB8IHN0cmluZ1xuICAgIGxvY2FsZT86IHN0cmluZ1xuICB9LFxuICBjb250ZXh0OiB7XG4gICAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICAgIHJlczogUmVzcG9uc2VcbiAgfSxcbikgPT4gUHJvbWlzZTxUeXBlV2l0aFZlcnNpb248VD4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRWZXJzaW9uQnlJRFJlc29sdmVyKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pOiBSZXNvbHZlciB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgbGV0IHsgcmVxIH0gPSBjb250ZXh0XG4gICAgY29uc3QgbG9jYWxlID0gcmVxLmxvY2FsZVxuICAgIGNvbnN0IGZhbGxiYWNrTG9jYWxlID0gcmVxLmZhbGxiYWNrTG9jYWxlXG4gICAgcmVxID0gaXNvbGF0ZU9iamVjdFByb3BlcnR5KHJlcSwgJ2xvY2FsZScpXG4gICAgcmVxID0gaXNvbGF0ZU9iamVjdFByb3BlcnR5KHJlcSwgJ2ZhbGxiYWNrTG9jYWxlJylcbiAgICByZXEubG9jYWxlID0gYXJncy5sb2NhbGUgfHwgbG9jYWxlXG4gICAgcmVxLmZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZSB8fCBmYWxsYmFja0xvY2FsZVxuXG4gICAgY29udGV4dC5yZXEgPSByZXFcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBpZDogYXJncy5pZCxcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBkZXB0aDogMCxcbiAgICAgIHJlcTogaXNvbGF0ZU9iamVjdFByb3BlcnR5PFBheWxvYWRSZXF1ZXN0PihyZXEsICd0cmFuc2FjdGlvbklEJyksXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmluZFZlcnNpb25CeUlEKG9wdGlvbnMpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmaW5kVmVyc2lvbkJ5SURSZXNvbHZlciIsImNvbGxlY3Rpb24iLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsInJlcSIsImxvY2FsZSIsImZhbGxiYWNrTG9jYWxlIiwiaXNvbGF0ZU9iamVjdFByb3BlcnR5Iiwib3B0aW9ucyIsImlkIiwiZGVwdGgiLCJyZXN1bHQiLCJmaW5kVmVyc2lvbkJ5SUQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBdUJwQzs7O2VBQXdCQTs7OzhFQWhCVTt3RUFDTjs7Ozs7O0FBZWIsU0FBU0Esd0JBQXdCQyxVQUFzQjtJQUNwRSxPQUFPLGVBQWVDLFNBQVNDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO1FBQzdDLElBQUksRUFBRUMsR0FBRyxFQUFFLEdBQUdEO1FBQ2QsTUFBTUUsU0FBU0QsSUFBSUMsTUFBTTtRQUN6QixNQUFNQyxpQkFBaUJGLElBQUlFLGNBQWM7UUFDekNGLE1BQU1HLElBQUFBLDhCQUFxQixFQUFDSCxLQUFLO1FBQ2pDQSxNQUFNRyxJQUFBQSw4QkFBcUIsRUFBQ0gsS0FBSztRQUNqQ0EsSUFBSUMsTUFBTSxHQUFHSCxLQUFLRyxNQUFNLElBQUlBO1FBQzVCRCxJQUFJRSxjQUFjLEdBQUdKLEtBQUtJLGNBQWMsSUFBSUE7UUFFNUNILFFBQVFDLEdBQUcsR0FBR0E7UUFFZCxNQUFNSSxVQUFVO1lBQ2RDLElBQUlQLEtBQUtPLEVBQUU7WUFDWFY7WUFDQVcsT0FBTztZQUNQTixLQUFLRyxJQUFBQSw4QkFBcUIsRUFBaUJILEtBQUs7UUFDbEQ7UUFFQSxNQUFNTyxTQUFTLE1BQU1DLElBQUFBLHdCQUFlLEVBQUNKO1FBRXJDLE9BQU9HO0lBQ1Q7QUFDRiJ9