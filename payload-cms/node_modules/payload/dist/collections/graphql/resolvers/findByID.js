"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findByIDResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _findByID = /*#__PURE__*/ _interop_require_default(require("../../operations/findByID"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findByIDResolver(collection) {
    return async function resolver(_, args, context) {
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
            id: args.id,
            collection,
            depth: 0,
            draft: args.draft,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID')
        };
        const result = await (0, _findByID.default)(options);
        return result;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9maW5kQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCBmaW5kQnlJRCBmcm9tICcuLi8uLi9vcGVyYXRpb25zL2ZpbmRCeUlEJ1xuXG5leHBvcnQgdHlwZSBSZXNvbHZlcjxUPiA9IChcbiAgXzogdW5rbm93bixcbiAgYXJnczoge1xuICAgIGRyYWZ0OiBib29sZWFuXG4gICAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgICBpZDogc3RyaW5nXG4gICAgbG9jYWxlPzogc3RyaW5nXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gICAgcmVzOiBSZXNwb25zZVxuICB9LFxuKSA9PiBQcm9taXNlPFQ+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRCeUlEUmVzb2x2ZXI8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvbixcbik6IFJlc29sdmVyPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RdPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgbGV0IHsgcmVxIH0gPSBjb250ZXh0XG4gICAgY29uc3QgbG9jYWxlID0gcmVxLmxvY2FsZVxuICAgIGNvbnN0IGZhbGxiYWNrTG9jYWxlID0gcmVxLmZhbGxiYWNrTG9jYWxlXG4gICAgcmVxID0gaXNvbGF0ZU9iamVjdFByb3BlcnR5KHJlcSwgJ2xvY2FsZScpXG4gICAgcmVxID0gaXNvbGF0ZU9iamVjdFByb3BlcnR5KHJlcSwgJ2ZhbGxiYWNrTG9jYWxlJylcbiAgICByZXEubG9jYWxlID0gYXJncy5sb2NhbGUgfHwgbG9jYWxlXG4gICAgcmVxLmZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZSB8fCBmYWxsYmFja0xvY2FsZVxuICAgIGlmICghcmVxLnF1ZXJ5KSByZXEucXVlcnkgPSB7fVxuXG4gICAgY29uc3QgZHJhZnQ6IGJvb2xlYW4gPVxuICAgICAgYXJncy5kcmFmdCA/PyByZXEucXVlcnk/LmRyYWZ0ID09PSAnZmFsc2UnXG4gICAgICAgID8gZmFsc2VcbiAgICAgICAgOiByZXEucXVlcnk/LmRyYWZ0ID09PSAndHJ1ZSdcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgaWYgKHR5cGVvZiBkcmFmdCA9PT0gJ2Jvb2xlYW4nKSByZXEucXVlcnkuZHJhZnQgPSBTdHJpbmcoZHJhZnQpXG5cbiAgICBjb250ZXh0LnJlcSA9IHJlcVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGlkOiBhcmdzLmlkLFxuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGRlcHRoOiAwLFxuICAgICAgZHJhZnQ6IGFyZ3MuZHJhZnQsXG4gICAgICByZXE6IGlzb2xhdGVPYmplY3RQcm9wZXJ0eTxQYXlsb2FkUmVxdWVzdD4ocmVxLCAndHJhbnNhY3Rpb25JRCcpLFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbmRCeUlEKG9wdGlvbnMpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmaW5kQnlJRFJlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0IiwicmVxIiwibG9jYWxlIiwiZmFsbGJhY2tMb2NhbGUiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiLCJxdWVyeSIsImRyYWZ0IiwidW5kZWZpbmVkIiwiU3RyaW5nIiwib3B0aW9ucyIsImlkIiwiZGVwdGgiLCJyZXN1bHQiLCJmaW5kQnlJRCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXFCQTs7O2VBQXdCQTs7OzhFQWpCVTtpRUFDYjs7Ozs7O0FBZ0JOLFNBQVNBLGlCQUN0QkMsVUFBc0I7SUFFdEIsT0FBTyxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUM3QyxJQUFJLEVBQUVDLEdBQUcsRUFBRSxHQUFHRDtRQUNkLE1BQU1FLFNBQVNELElBQUlDLE1BQU07UUFDekIsTUFBTUMsaUJBQWlCRixJQUFJRSxjQUFjO1FBQ3pDRixNQUFNRyxJQUFBQSw4QkFBcUIsRUFBQ0gsS0FBSztRQUNqQ0EsTUFBTUcsSUFBQUEsOEJBQXFCLEVBQUNILEtBQUs7UUFDakNBLElBQUlDLE1BQU0sR0FBR0gsS0FBS0csTUFBTSxJQUFJQTtRQUM1QkQsSUFBSUUsY0FBYyxHQUFHSixLQUFLSSxjQUFjLElBQUlBO1FBQzVDLElBQUksQ0FBQ0YsSUFBSUksS0FBSyxFQUFFSixJQUFJSSxLQUFLLEdBQUcsQ0FBQztRQUU3QixNQUFNQyxRQUNKUCxLQUFLTyxLQUFLLElBQUlMLElBQUlJLEtBQUssRUFBRUMsVUFBVSxVQUMvQixRQUNBTCxJQUFJSSxLQUFLLEVBQUVDLFVBQVUsU0FDckIsT0FDQUM7UUFDTixJQUFJLE9BQU9ELFVBQVUsV0FBV0wsSUFBSUksS0FBSyxDQUFDQyxLQUFLLEdBQUdFLE9BQU9GO1FBRXpETixRQUFRQyxHQUFHLEdBQUdBO1FBRWQsTUFBTVEsVUFBVTtZQUNkQyxJQUFJWCxLQUFLVyxFQUFFO1lBQ1hkO1lBQ0FlLE9BQU87WUFDUEwsT0FBT1AsS0FBS08sS0FBSztZQUNqQkwsS0FBS0csSUFBQUEsOEJBQXFCLEVBQWlCSCxLQUFLO1FBQ2xEO1FBRUEsTUFBTVcsU0FBUyxNQUFNQyxJQUFBQSxpQkFBUSxFQUFDSjtRQUU5QixPQUFPRztJQUNUO0FBQ0YifQ==