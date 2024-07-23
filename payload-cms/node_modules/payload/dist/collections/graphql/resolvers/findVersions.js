/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionsResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _findVersions = /*#__PURE__*/ _interop_require_default(require("../../operations/findVersions"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findVersionsResolver(collection) {
    async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, _isolateObjectProperty.default)(req, 'locale');
        req = (0, _isolateObjectProperty.default)(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        if (!req.query) req.query = {};
        const draft = args.draft ?? req.query?.draft === 'false' ? false : req.query?.draft === 'true' ? true : undefined;
        if (typeof draft === 'boolean') req.query.draft = String(draft);
        context.req = req;
        const options = {
            collection,
            depth: 0,
            limit: args.limit,
            page: args.page,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID'),
            sort: args.sort,
            where: args.where
        };
        const result = await (0, _findVersions.default)(options);
        return result;
    }
    return resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9maW5kVmVyc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuaW1wb3J0IHR5cGUgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB0eXBlIHsgUGFnaW5hdGVkRG9jcyB9IGZyb20gJy4uLy4uLy4uL2RhdGFiYXNlL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCBmaW5kVmVyc2lvbnMgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9maW5kVmVyc2lvbnMnXG5cbmV4cG9ydCB0eXBlIFJlc29sdmVyID0gKFxuICBfOiB1bmtub3duLFxuICBhcmdzOiB7XG4gICAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgICBsaW1pdD86IG51bWJlclxuICAgIGxvY2FsZT86IHN0cmluZ1xuICAgIHBhZ2U/OiBudW1iZXJcbiAgICBzb3J0Pzogc3RyaW5nXG4gICAgd2hlcmU6IFdoZXJlXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gICAgcmVzOiBSZXNwb25zZVxuICB9LFxuKSA9PiBQcm9taXNlPFBhZ2luYXRlZERvY3M8YW55Pj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZFZlcnNpb25zUmVzb2x2ZXIoY29sbGVjdGlvbjogQ29sbGVjdGlvbik6IFJlc29sdmVyIHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGxldCB7IHJlcSB9ID0gY29udGV4dFxuICAgIGNvbnN0IGxvY2FsZSA9IHJlcS5sb2NhbGVcbiAgICBjb25zdCBmYWxsYmFja0xvY2FsZSA9IHJlcS5mYWxsYmFja0xvY2FsZVxuICAgIHJlcSA9IGlzb2xhdGVPYmplY3RQcm9wZXJ0eShyZXEsICdsb2NhbGUnKVxuICAgIHJlcSA9IGlzb2xhdGVPYmplY3RQcm9wZXJ0eShyZXEsICdmYWxsYmFja0xvY2FsZScpXG4gICAgcmVxLmxvY2FsZSA9IGFyZ3MubG9jYWxlIHx8IGxvY2FsZVxuICAgIHJlcS5mYWxsYmFja0xvY2FsZSA9IGFyZ3MuZmFsbGJhY2tMb2NhbGUgfHwgZmFsbGJhY2tMb2NhbGVcbiAgICBpZiAoIXJlcS5xdWVyeSkgcmVxLnF1ZXJ5ID0ge31cblxuICAgIGNvbnN0IGRyYWZ0OiBib29sZWFuID1cbiAgICAgIGFyZ3MuZHJhZnQgPz8gcmVxLnF1ZXJ5Py5kcmFmdCA9PT0gJ2ZhbHNlJ1xuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDogcmVxLnF1ZXJ5Py5kcmFmdCA9PT0gJ3RydWUnXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIGlmICh0eXBlb2YgZHJhZnQgPT09ICdib29sZWFuJykgcmVxLnF1ZXJ5LmRyYWZ0ID0gU3RyaW5nKGRyYWZ0KVxuXG4gICAgY29udGV4dC5yZXEgPSByZXFcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZGVwdGg6IDAsXG4gICAgICBsaW1pdDogYXJncy5saW1pdCxcbiAgICAgIHBhZ2U6IGFyZ3MucGFnZSxcbiAgICAgIHJlcTogaXNvbGF0ZU9iamVjdFByb3BlcnR5PFBheWxvYWRSZXF1ZXN0PihyZXEsICd0cmFuc2FjdGlvbklEJyksXG4gICAgICBzb3J0OiBhcmdzLnNvcnQsXG4gICAgICB3aGVyZTogYXJncy53aGVyZSxcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmaW5kVmVyc2lvbnMob3B0aW9ucylcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlclxufVxuIl0sIm5hbWVzIjpbImZpbmRWZXJzaW9uc1Jlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0IiwicmVxIiwibG9jYWxlIiwiZmFsbGJhY2tMb2NhbGUiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiLCJxdWVyeSIsImRyYWZ0IiwidW5kZWZpbmVkIiwiU3RyaW5nIiwib3B0aW9ucyIsImRlcHRoIiwibGltaXQiLCJwYWdlIiwic29ydCIsIndoZXJlIiwicmVzdWx0IiwiZmluZFZlcnNpb25zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7OzsrQkE0QnBDOzs7ZUFBd0JBOzs7OEVBbkJVO3FFQUNUOzs7Ozs7QUFrQlYsU0FBU0EscUJBQXFCQyxVQUFzQjtJQUNqRSxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUN0QyxJQUFJLEVBQUVDLEdBQUcsRUFBRSxHQUFHRDtRQUNkLE1BQU1FLFNBQVNELElBQUlDLE1BQU07UUFDekIsTUFBTUMsaUJBQWlCRixJQUFJRSxjQUFjO1FBQ3pDRixNQUFNRyxJQUFBQSw4QkFBcUIsRUFBQ0gsS0FBSztRQUNqQ0EsTUFBTUcsSUFBQUEsOEJBQXFCLEVBQUNILEtBQUs7UUFDakNBLElBQUlDLE1BQU0sR0FBR0gsS0FBS0csTUFBTSxJQUFJQTtRQUM1QkQsSUFBSUUsY0FBYyxHQUFHSixLQUFLSSxjQUFjLElBQUlBO1FBQzVDLElBQUksQ0FBQ0YsSUFBSUksS0FBSyxFQUFFSixJQUFJSSxLQUFLLEdBQUcsQ0FBQztRQUU3QixNQUFNQyxRQUNKUCxLQUFLTyxLQUFLLElBQUlMLElBQUlJLEtBQUssRUFBRUMsVUFBVSxVQUMvQixRQUNBTCxJQUFJSSxLQUFLLEVBQUVDLFVBQVUsU0FDckIsT0FDQUM7UUFDTixJQUFJLE9BQU9ELFVBQVUsV0FBV0wsSUFBSUksS0FBSyxDQUFDQyxLQUFLLEdBQUdFLE9BQU9GO1FBRXpETixRQUFRQyxHQUFHLEdBQUdBO1FBRWQsTUFBTVEsVUFBVTtZQUNkYjtZQUNBYyxPQUFPO1lBQ1BDLE9BQU9aLEtBQUtZLEtBQUs7WUFDakJDLE1BQU1iLEtBQUthLElBQUk7WUFDZlgsS0FBS0csSUFBQUEsOEJBQXFCLEVBQWlCSCxLQUFLO1lBQ2hEWSxNQUFNZCxLQUFLYyxJQUFJO1lBQ2ZDLE9BQU9mLEtBQUtlLEtBQUs7UUFDbkI7UUFFQSxNQUFNQyxTQUFTLE1BQU1DLElBQUFBLHFCQUFZLEVBQUNQO1FBRWxDLE9BQU9NO0lBQ1Q7SUFFQSxPQUFPbEI7QUFDVCJ9