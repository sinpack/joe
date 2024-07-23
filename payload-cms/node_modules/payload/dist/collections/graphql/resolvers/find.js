/* eslint-disable no-param-reassign */ "use strict";
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
const _find = /*#__PURE__*/ _interop_require_default(require("../../operations/find"));
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
        req = (0, _isolateObjectProperty.default)(req, [
            'locale',
            'fallbackLocale',
            'transactionID'
        ]);
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        if (!req.query) req.query = {};
        const draft = args.draft ?? req.query?.draft === 'false' ? false : req.query?.draft === 'true' ? true : undefined;
        if (typeof draft === 'boolean') req.query.draft = String(draft);
        context.req = req;
        const options = {
            collection,
            depth: 0,
            draft: args.draft,
            limit: args.limit,
            page: args.page,
            req,
            sort: args.sort,
            where: args.where
        };
        const results = await (0, _find.default)(options);
        return results;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9maW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgdHlwZSB7IFBhZ2luYXRlZERvY3MgfSBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBXaGVyZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgaXNvbGF0ZU9iamVjdFByb3BlcnR5IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9pc29sYXRlT2JqZWN0UHJvcGVydHknXG5pbXBvcnQgZmluZCBmcm9tICcuLi8uLi9vcGVyYXRpb25zL2ZpbmQnXG5cbmV4cG9ydCB0eXBlIFJlc29sdmVyID0gKFxuICBfOiB1bmtub3duLFxuICBhcmdzOiB7XG4gICAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICBkcmFmdDogYm9vbGVhblxuICAgIGZhbGxiYWNrTG9jYWxlPzogc3RyaW5nXG4gICAgbGltaXQ/OiBudW1iZXJcbiAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICBwYWdlPzogbnVtYmVyXG4gICAgc29ydD86IHN0cmluZ1xuICAgIHdoZXJlPzogV2hlcmVcbiAgfSxcbiAgY29udGV4dDoge1xuICAgIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgICByZXM6IFJlc3BvbnNlXG4gIH0sXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4pID0+IFByb21pc2U8UGFnaW5hdGVkRG9jczxhbnk+PlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kUmVzb2x2ZXIoY29sbGVjdGlvbjogQ29sbGVjdGlvbik6IFJlc29sdmVyIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBsZXQgeyByZXEgfSA9IGNvbnRleHRcbiAgICBjb25zdCBsb2NhbGUgPSByZXEubG9jYWxlXG4gICAgY29uc3QgZmFsbGJhY2tMb2NhbGUgPSByZXEuZmFsbGJhY2tMb2NhbGVcblxuICAgIHJlcSA9IGlzb2xhdGVPYmplY3RQcm9wZXJ0eShyZXEsIFsnbG9jYWxlJywgJ2ZhbGxiYWNrTG9jYWxlJywgJ3RyYW5zYWN0aW9uSUQnXSlcbiAgICByZXEubG9jYWxlID0gYXJncy5sb2NhbGUgfHwgbG9jYWxlXG4gICAgcmVxLmZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZSB8fCBmYWxsYmFja0xvY2FsZVxuICAgIGlmICghcmVxLnF1ZXJ5KSByZXEucXVlcnkgPSB7fVxuXG4gICAgY29uc3QgZHJhZnQ6IGJvb2xlYW4gPVxuICAgICAgYXJncy5kcmFmdCA/PyByZXEucXVlcnk/LmRyYWZ0ID09PSAnZmFsc2UnXG4gICAgICAgID8gZmFsc2VcbiAgICAgICAgOiByZXEucXVlcnk/LmRyYWZ0ID09PSAndHJ1ZSdcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgIGlmICh0eXBlb2YgZHJhZnQgPT09ICdib29sZWFuJykgcmVxLnF1ZXJ5LmRyYWZ0ID0gU3RyaW5nKGRyYWZ0KVxuXG4gICAgY29udGV4dC5yZXEgPSByZXFcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZGVwdGg6IDAsXG4gICAgICBkcmFmdDogYXJncy5kcmFmdCxcbiAgICAgIGxpbWl0OiBhcmdzLmxpbWl0LFxuICAgICAgcGFnZTogYXJncy5wYWdlLFxuICAgICAgcmVxLFxuICAgICAgc29ydDogYXJncy5zb3J0LFxuICAgICAgd2hlcmU6IGFyZ3Mud2hlcmUsXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGZpbmQob3B0aW9ucylcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmluZFJlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0IiwicmVxIiwibG9jYWxlIiwiZmFsbGJhY2tMb2NhbGUiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiLCJxdWVyeSIsImRyYWZ0IiwidW5kZWZpbmVkIiwiU3RyaW5nIiwib3B0aW9ucyIsImRlcHRoIiwibGltaXQiLCJwYWdlIiwic29ydCIsIndoZXJlIiwicmVzdWx0cyIsImZpbmQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQTRCcEM7OztlQUF3QkE7Ozs4RUF0QlU7NkRBQ2pCOzs7Ozs7QUFxQkYsU0FBU0EsYUFBYUMsVUFBc0I7SUFDekQsT0FBTyxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUM3QyxJQUFJLEVBQUVDLEdBQUcsRUFBRSxHQUFHRDtRQUNkLE1BQU1FLFNBQVNELElBQUlDLE1BQU07UUFDekIsTUFBTUMsaUJBQWlCRixJQUFJRSxjQUFjO1FBRXpDRixNQUFNRyxJQUFBQSw4QkFBcUIsRUFBQ0gsS0FBSztZQUFDO1lBQVU7WUFBa0I7U0FBZ0I7UUFDOUVBLElBQUlDLE1BQU0sR0FBR0gsS0FBS0csTUFBTSxJQUFJQTtRQUM1QkQsSUFBSUUsY0FBYyxHQUFHSixLQUFLSSxjQUFjLElBQUlBO1FBQzVDLElBQUksQ0FBQ0YsSUFBSUksS0FBSyxFQUFFSixJQUFJSSxLQUFLLEdBQUcsQ0FBQztRQUU3QixNQUFNQyxRQUNKUCxLQUFLTyxLQUFLLElBQUlMLElBQUlJLEtBQUssRUFBRUMsVUFBVSxVQUMvQixRQUNBTCxJQUFJSSxLQUFLLEVBQUVDLFVBQVUsU0FDbkIsT0FDQUM7UUFDUixJQUFJLE9BQU9ELFVBQVUsV0FBV0wsSUFBSUksS0FBSyxDQUFDQyxLQUFLLEdBQUdFLE9BQU9GO1FBRXpETixRQUFRQyxHQUFHLEdBQUdBO1FBRWQsTUFBTVEsVUFBVTtZQUNkYjtZQUNBYyxPQUFPO1lBQ1BKLE9BQU9QLEtBQUtPLEtBQUs7WUFDakJLLE9BQU9aLEtBQUtZLEtBQUs7WUFDakJDLE1BQU1iLEtBQUthLElBQUk7WUFDZlg7WUFDQVksTUFBTWQsS0FBS2MsSUFBSTtZQUNmQyxPQUFPZixLQUFLZSxLQUFLO1FBQ25CO1FBRUEsTUFBTUMsVUFBVSxNQUFNQyxJQUFBQSxhQUFJLEVBQUNQO1FBQzNCLE9BQU9NO0lBQ1Q7QUFDRiJ9