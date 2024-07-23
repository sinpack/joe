"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _count = /*#__PURE__*/ _interop_require_default(require("../../operations/count"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, _isolateObjectProperty.default)(req, 'locale');
        req = (0, _isolateObjectProperty.default)(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = fallbackLocale;
        context.req = req;
        const options = {
            collection,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID'),
            where: args.where
        };
        const results = await (0, _count.default)(options);
        return results;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9jb3VudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi90eXBlcydcbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IGlzb2xhdGVPYmplY3RQcm9wZXJ0eSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvaXNvbGF0ZU9iamVjdFByb3BlcnR5J1xuaW1wb3J0IGNvdW50IGZyb20gJy4uLy4uL29wZXJhdGlvbnMvY291bnQnXG5cbmV4cG9ydCB0eXBlIFJlc29sdmVyID0gKFxuICBfOiB1bmtub3duLFxuICBhcmdzOiB7XG4gICAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICB3aGVyZT86IFdoZXJlXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gICAgcmVzOiBSZXNwb25zZVxuICB9LFxuKSA9PiBQcm9taXNlPHsgdG90YWxEb2NzOiBudW1iZXIgfT5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZFJlc29sdmVyKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pOiBSZXNvbHZlciB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgbGV0IHsgcmVxIH0gPSBjb250ZXh0XG4gICAgY29uc3QgbG9jYWxlID0gcmVxLmxvY2FsZVxuICAgIGNvbnN0IGZhbGxiYWNrTG9jYWxlID0gcmVxLmZhbGxiYWNrTG9jYWxlXG4gICAgcmVxID0gaXNvbGF0ZU9iamVjdFByb3BlcnR5KHJlcSwgJ2xvY2FsZScpXG4gICAgcmVxID0gaXNvbGF0ZU9iamVjdFByb3BlcnR5KHJlcSwgJ2ZhbGxiYWNrTG9jYWxlJylcbiAgICByZXEubG9jYWxlID0gYXJncy5sb2NhbGUgfHwgbG9jYWxlXG4gICAgcmVxLmZhbGxiYWNrTG9jYWxlID0gZmFsbGJhY2tMb2NhbGVcblxuICAgIGNvbnRleHQucmVxID0gcmVxXG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIHJlcTogaXNvbGF0ZU9iamVjdFByb3BlcnR5PFBheWxvYWRSZXF1ZXN0PihyZXEsICd0cmFuc2FjdGlvbklEJyksXG4gICAgICB3aGVyZTogYXJncy53aGVyZSxcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY291bnQob3B0aW9ucylcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmluZFJlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0IiwicmVxIiwibG9jYWxlIiwiZmFsbGJhY2tMb2NhbGUiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiLCJvcHRpb25zIiwid2hlcmUiLCJyZXN1bHRzIiwiY291bnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBb0JBOzs7ZUFBd0JBOzs7OEVBaEJVOzhEQUNoQjs7Ozs7O0FBZUgsU0FBU0EsYUFBYUMsVUFBc0I7SUFDekQsT0FBTyxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUM3QyxJQUFJLEVBQUVDLEdBQUcsRUFBRSxHQUFHRDtRQUNkLE1BQU1FLFNBQVNELElBQUlDLE1BQU07UUFDekIsTUFBTUMsaUJBQWlCRixJQUFJRSxjQUFjO1FBQ3pDRixNQUFNRyxJQUFBQSw4QkFBcUIsRUFBQ0gsS0FBSztRQUNqQ0EsTUFBTUcsSUFBQUEsOEJBQXFCLEVBQUNILEtBQUs7UUFDakNBLElBQUlDLE1BQU0sR0FBR0gsS0FBS0csTUFBTSxJQUFJQTtRQUM1QkQsSUFBSUUsY0FBYyxHQUFHQTtRQUVyQkgsUUFBUUMsR0FBRyxHQUFHQTtRQUVkLE1BQU1JLFVBQVU7WUFDZFQ7WUFDQUssS0FBS0csSUFBQUEsOEJBQXFCLEVBQWlCSCxLQUFLO1lBQ2hESyxPQUFPUCxLQUFLTyxLQUFLO1FBQ25CO1FBRUEsTUFBTUMsVUFBVSxNQUFNQyxJQUFBQSxjQUFLLEVBQUNIO1FBQzVCLE9BQU9FO0lBQ1Q7QUFDRiJ9