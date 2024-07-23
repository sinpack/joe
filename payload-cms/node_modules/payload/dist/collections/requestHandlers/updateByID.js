"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return updateByIDHandler;
    },
    deprecatedUpdate: function() {
        return deprecatedUpdate;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
const _sanitizeCollectionID = require("../../utilities/sanitizeCollectionID");
const _updateByID = /*#__PURE__*/ _interop_require_default(require("../operations/updateByID"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function deprecatedUpdate(req, res, next) {
    req.payload.logger.warn('The PUT method is deprecated and will no longer be supported in a future release. Please use the PATCH method for update requests.');
    return updateByIDHandler(req, res, next);
}
async function updateByIDHandler(req, res, next) {
    const id = (0, _sanitizeCollectionID.sanitizeCollectionID)({
        id: req.params.id,
        collectionSlug: req.collection.config.slug,
        payload: req.payload
    });
    try {
        const draft = req.query.draft === 'true';
        const autosave = req.query.autosave === 'true';
        const doc = await (0, _updateByID.default)({
            id,
            autosave,
            collection: req.collection,
            data: req.body,
            depth: parseInt(String(req.query.depth), 10),
            draft,
            req
        });
        let message = req.t('general:updatedSuccessfully');
        if (draft) message = req.t('version:draftSavedSuccessfully');
        if (autosave) message = req.t('version:autosavedSuccessfully');
        res.status(_httpstatus.default.OK).json({
            ...(0, _formatSuccess.default)(message, 'message'),
            doc
        });
    } catch (error) {
        next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5cbmltcG9ydCBmb3JtYXRTdWNjZXNzUmVzcG9uc2UgZnJvbSAnLi4vLi4vZXhwcmVzcy9yZXNwb25zZXMvZm9ybWF0U3VjY2VzcydcbmltcG9ydCB7IHNhbml0aXplQ29sbGVjdGlvbklEIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3Nhbml0aXplQ29sbGVjdGlvbklEJ1xuaW1wb3J0IHVwZGF0ZUJ5SUQgZnJvbSAnLi4vb3BlcmF0aW9ucy91cGRhdGVCeUlEJ1xuXG5leHBvcnQgdHlwZSBVcGRhdGVSZXN1bHQgPSB7XG4gIGRvYzogRG9jdW1lbnRcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZXByZWNhdGVkVXBkYXRlKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pOiBQcm9taXNlPFJlc3BvbnNlPFVwZGF0ZVJlc3VsdD4gfCB2b2lkPiB7XG4gIHJlcS5wYXlsb2FkLmxvZ2dlci53YXJuKFxuICAgICdUaGUgUFVUIG1ldGhvZCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIG5vIGxvbmdlciBiZSBzdXBwb3J0ZWQgaW4gYSBmdXR1cmUgcmVsZWFzZS4gUGxlYXNlIHVzZSB0aGUgUEFUQ0ggbWV0aG9kIGZvciB1cGRhdGUgcmVxdWVzdHMuJyxcbiAgKVxuXG4gIHJldHVybiB1cGRhdGVCeUlESGFuZGxlcihyZXEsIHJlcywgbmV4dClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQnlJREhhbmRsZXIoXG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbik6IFByb21pc2U8UmVzcG9uc2U8VXBkYXRlUmVzdWx0PiB8IHZvaWQ+IHtcbiAgY29uc3QgaWQgPSBzYW5pdGl6ZUNvbGxlY3Rpb25JRCh7XG4gICAgaWQ6IHJlcS5wYXJhbXMuaWQsXG4gICAgY29sbGVjdGlvblNsdWc6IHJlcS5jb2xsZWN0aW9uLmNvbmZpZy5zbHVnLFxuICAgIHBheWxvYWQ6IHJlcS5wYXlsb2FkLFxuICB9KVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZHJhZnQgPSByZXEucXVlcnkuZHJhZnQgPT09ICd0cnVlJ1xuICAgIGNvbnN0IGF1dG9zYXZlID0gcmVxLnF1ZXJ5LmF1dG9zYXZlID09PSAndHJ1ZSdcblxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IHVwZGF0ZUJ5SUQoe1xuICAgICAgaWQsXG4gICAgICBhdXRvc2F2ZSxcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgZGF0YTogcmVxLmJvZHksXG4gICAgICBkZXB0aDogcGFyc2VJbnQoU3RyaW5nKHJlcS5xdWVyeS5kZXB0aCksIDEwKSxcbiAgICAgIGRyYWZ0LFxuICAgICAgcmVxLFxuICAgIH0pXG5cbiAgICBsZXQgbWVzc2FnZSA9IHJlcS50KCdnZW5lcmFsOnVwZGF0ZWRTdWNjZXNzZnVsbHknKVxuXG4gICAgaWYgKGRyYWZ0KSBtZXNzYWdlID0gcmVxLnQoJ3ZlcnNpb246ZHJhZnRTYXZlZFN1Y2Nlc3NmdWxseScpXG4gICAgaWYgKGF1dG9zYXZlKSBtZXNzYWdlID0gcmVxLnQoJ3ZlcnNpb246YXV0b3NhdmVkU3VjY2Vzc2Z1bGx5JylcblxuICAgIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbih7XG4gICAgICAuLi5mb3JtYXRTdWNjZXNzUmVzcG9uc2UobWVzc2FnZSwgJ21lc3NhZ2UnKSxcbiAgICAgIGRvYyxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG5leHQoZXJyb3IpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1cGRhdGVCeUlESGFuZGxlciIsImRlcHJlY2F0ZWRVcGRhdGUiLCJyZXEiLCJyZXMiLCJuZXh0IiwicGF5bG9hZCIsImxvZ2dlciIsIndhcm4iLCJpZCIsInNhbml0aXplQ29sbGVjdGlvbklEIiwicGFyYW1zIiwiY29sbGVjdGlvblNsdWciLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwic2x1ZyIsImRyYWZ0IiwicXVlcnkiLCJhdXRvc2F2ZSIsImRvYyIsInVwZGF0ZUJ5SUQiLCJkYXRhIiwiYm9keSIsImRlcHRoIiwicGFyc2VJbnQiLCJTdHJpbmciLCJtZXNzYWdlIiwidCIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJPSyIsImpzb24iLCJmb3JtYXRTdWNjZXNzUmVzcG9uc2UiLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUEyQkEsT0FxQ0M7ZUFyQzZCQTs7SUFaUkMsZ0JBQWdCO2VBQWhCQTs7O21FQWJDO3NFQUlXO3NDQUNHO21FQUNkOzs7Ozs7QUFPaEIsZUFBZUEsaUJBQ3BCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtJQUVsQkYsSUFBSUcsT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FDckI7SUFHRixPQUFPUCxrQkFBa0JFLEtBQUtDLEtBQUtDO0FBQ3JDO0FBRWUsZUFBZUosa0JBQzVCRSxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtJQUVsQixNQUFNSSxLQUFLQyxJQUFBQSwwQ0FBb0IsRUFBQztRQUM5QkQsSUFBSU4sSUFBSVEsTUFBTSxDQUFDRixFQUFFO1FBQ2pCRyxnQkFBZ0JULElBQUlVLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJO1FBQzFDVCxTQUFTSCxJQUFJRyxPQUFPO0lBQ3RCO0lBRUEsSUFBSTtRQUNGLE1BQU1VLFFBQVFiLElBQUljLEtBQUssQ0FBQ0QsS0FBSyxLQUFLO1FBQ2xDLE1BQU1FLFdBQVdmLElBQUljLEtBQUssQ0FBQ0MsUUFBUSxLQUFLO1FBRXhDLE1BQU1DLE1BQU0sTUFBTUMsSUFBQUEsbUJBQVUsRUFBQztZQUMzQlg7WUFDQVM7WUFDQUwsWUFBWVYsSUFBSVUsVUFBVTtZQUMxQlEsTUFBTWxCLElBQUltQixJQUFJO1lBQ2RDLE9BQU9DLFNBQVNDLE9BQU90QixJQUFJYyxLQUFLLENBQUNNLEtBQUssR0FBRztZQUN6Q1A7WUFDQWI7UUFDRjtRQUVBLElBQUl1QixVQUFVdkIsSUFBSXdCLENBQUMsQ0FBQztRQUVwQixJQUFJWCxPQUFPVSxVQUFVdkIsSUFBSXdCLENBQUMsQ0FBQztRQUMzQixJQUFJVCxVQUFVUSxVQUFVdkIsSUFBSXdCLENBQUMsQ0FBQztRQUU5QnZCLElBQUl3QixNQUFNLENBQUNDLG1CQUFVLENBQUNDLEVBQUUsRUFBRUMsSUFBSSxDQUFDO1lBQzdCLEdBQUdDLElBQUFBLHNCQUFxQixFQUFDTixTQUFTLFVBQVU7WUFDNUNQO1FBQ0Y7SUFDRixFQUFFLE9BQU9jLE9BQU87UUFDZDVCLEtBQUs0QjtJQUNQO0FBQ0YifQ==