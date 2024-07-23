"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
const _getTranslation = require("../../utilities/getTranslation");
const _create = /*#__PURE__*/ _interop_require_default(require("../operations/create"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function createHandler(req, res, next) {
    try {
        const autosave = req.query.autosave === 'true';
        const draft = req.query.draft === 'true';
        const doc = await (0, _create.default)({
            autosave,
            collection: req.collection,
            data: req.body,
            depth: Number(req.query.depth),
            draft,
            req
        });
        res.status(_httpstatus.default.CREATED).json({
            ...(0, _formatSuccess.default)(req.t('general:successfullyCreated', {
                label: (0, _getTranslation.getTranslation)(req.collection.config.labels.singular, req.i18n)
            }), 'message'),
            doc
        });
    } catch (error) {
        next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvY3JlYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi90eXBlcydcblxuaW1wb3J0IGZvcm1hdFN1Y2Nlc3NSZXNwb25zZSBmcm9tICcuLi8uLi9leHByZXNzL3Jlc3BvbnNlcy9mb3JtYXRTdWNjZXNzJ1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgY3JlYXRlIGZyb20gJy4uL29wZXJhdGlvbnMvY3JlYXRlJ1xuXG5leHBvcnQgdHlwZSBDcmVhdGVSZXN1bHQgPSB7XG4gIGRvYzogRG9jdW1lbnRcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUhhbmRsZXIoXG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbik6IFByb21pc2U8UmVzcG9uc2U8Q3JlYXRlUmVzdWx0PiB8IHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhdXRvc2F2ZSA9IHJlcS5xdWVyeS5hdXRvc2F2ZSA9PT0gJ3RydWUnXG4gICAgY29uc3QgZHJhZnQgPSByZXEucXVlcnkuZHJhZnQgPT09ICd0cnVlJ1xuXG4gICAgY29uc3QgZG9jID0gYXdhaXQgY3JlYXRlKHtcbiAgICAgIGF1dG9zYXZlLFxuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICBkYXRhOiByZXEuYm9keSxcbiAgICAgIGRlcHRoOiBOdW1iZXIocmVxLnF1ZXJ5LmRlcHRoKSxcbiAgICAgIGRyYWZ0LFxuICAgICAgcmVxLFxuICAgIH0pXG5cbiAgICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQ1JFQVRFRCkuanNvbih7XG4gICAgICAuLi5mb3JtYXRTdWNjZXNzUmVzcG9uc2UoXG4gICAgICAgIHJlcS50KCdnZW5lcmFsOnN1Y2Nlc3NmdWxseUNyZWF0ZWQnLCB7XG4gICAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKHJlcS5jb2xsZWN0aW9uLmNvbmZpZy5sYWJlbHMuc2luZ3VsYXIsIHJlcS5pMThuKSxcbiAgICAgICAgfSksXG4gICAgICAgICdtZXNzYWdlJyxcbiAgICAgICksXG4gICAgICBkb2MsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yKVxuICB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJhdXRvc2F2ZSIsInF1ZXJ5IiwiZHJhZnQiLCJkb2MiLCJjcmVhdGUiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImJvZHkiLCJkZXB0aCIsIk51bWJlciIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJDUkVBVEVEIiwianNvbiIsImZvcm1hdFN1Y2Nlc3NSZXNwb25zZSIsInQiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwiY29uZmlnIiwibGFiZWxzIiwic2luZ3VsYXIiLCJpMThuIiwiZXJyb3IiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFnQkE7OztlQUE4QkE7OzttRUFkUDtzRUFLVztnQ0FDSDsrREFDWjs7Ozs7O0FBT0osZUFBZUEsY0FDNUJDLEdBQW1CLEVBQ25CQyxHQUFhLEVBQ2JDLElBQWtCO0lBRWxCLElBQUk7UUFDRixNQUFNQyxXQUFXSCxJQUFJSSxLQUFLLENBQUNELFFBQVEsS0FBSztRQUN4QyxNQUFNRSxRQUFRTCxJQUFJSSxLQUFLLENBQUNDLEtBQUssS0FBSztRQUVsQyxNQUFNQyxNQUFNLE1BQU1DLElBQUFBLGVBQU0sRUFBQztZQUN2Qko7WUFDQUssWUFBWVIsSUFBSVEsVUFBVTtZQUMxQkMsTUFBTVQsSUFBSVUsSUFBSTtZQUNkQyxPQUFPQyxPQUFPWixJQUFJSSxLQUFLLENBQUNPLEtBQUs7WUFDN0JOO1lBQ0FMO1FBQ0Y7UUFFQUMsSUFBSVksTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxPQUFPLEVBQUVDLElBQUksQ0FBQztZQUNsQyxHQUFHQyxJQUFBQSxzQkFBcUIsRUFDdEJqQixJQUFJa0IsQ0FBQyxDQUFDLCtCQUErQjtnQkFDbkNDLE9BQU9DLElBQUFBLDhCQUFjLEVBQUNwQixJQUFJUSxVQUFVLENBQUNhLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLEVBQUV2QixJQUFJd0IsSUFBSTtZQUN2RSxJQUNBLFVBQ0Q7WUFDRGxCO1FBQ0Y7SUFDRixFQUFFLE9BQU9tQixPQUFPO1FBQ2R2QixLQUFLdUI7SUFDUDtBQUNGIn0=