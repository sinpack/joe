"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return restoreVersionHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
const _sanitizeCollectionID = require("../../utilities/sanitizeCollectionID");
const _restoreVersion = /*#__PURE__*/ _interop_require_default(require("../operations/restoreVersion"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function restoreVersionHandler(req, res, next) {
    const id = (0, _sanitizeCollectionID.sanitizeCollectionID)({
        id: req.params.id,
        collectionSlug: req.collection.config.slug,
        payload: req.payload
    });
    const options = {
        id,
        collection: req.collection,
        depth: Number(req.query.depth),
        payload: req.payload,
        req
    };
    try {
        const doc = await (0, _restoreVersion.default)(options);
        res.status(_httpstatus.default.OK).json({
            ...(0, _formatSuccess.default)(req.t('version:restoredSuccessfully'), 'message'),
            doc
        });
    } catch (error) {
        next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvcmVzdG9yZVZlcnNpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5pbXBvcnQgZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIGZyb20gJy4uLy4uL2V4cHJlc3MvcmVzcG9uc2VzL2Zvcm1hdFN1Y2Nlc3MnXG5pbXBvcnQgeyBzYW5pdGl6ZUNvbGxlY3Rpb25JRCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9zYW5pdGl6ZUNvbGxlY3Rpb25JRCdcbmltcG9ydCByZXN0b3JlVmVyc2lvbiBmcm9tICcuLi9vcGVyYXRpb25zL3Jlc3RvcmVWZXJzaW9uJ1xuXG5leHBvcnQgdHlwZSBSZXN0b3JlUmVzdWx0ID0ge1xuICBkb2M6IERvY3VtZW50XG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZXN0b3JlVmVyc2lvbkhhbmRsZXIoXG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbik6IFByb21pc2U8UmVzcG9uc2U8UmVzdG9yZVJlc3VsdD4gfCB2b2lkPiB7XG4gIGNvbnN0IGlkID0gc2FuaXRpemVDb2xsZWN0aW9uSUQoe1xuICAgIGlkOiByZXEucGFyYW1zLmlkLFxuICAgIGNvbGxlY3Rpb25TbHVnOiByZXEuY29sbGVjdGlvbi5jb25maWcuc2x1ZyxcbiAgICBwYXlsb2FkOiByZXEucGF5bG9hZCxcbiAgfSlcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGlkLFxuICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgIGRlcHRoOiBOdW1iZXIocmVxLnF1ZXJ5LmRlcHRoKSxcbiAgICBwYXlsb2FkOiByZXEucGF5bG9hZCxcbiAgICByZXEsXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRvYyA9IGF3YWl0IHJlc3RvcmVWZXJzaW9uKG9wdGlvbnMpXG4gICAgcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHtcbiAgICAgIC4uLmZvcm1hdFN1Y2Nlc3NSZXNwb25zZShyZXEudCgndmVyc2lvbjpyZXN0b3JlZFN1Y2Nlc3NmdWxseScpLCAnbWVzc2FnZScpLFxuICAgICAgZG9jLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbmV4dChlcnJvcilcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlc3RvcmVWZXJzaW9uSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJpZCIsInNhbml0aXplQ29sbGVjdGlvbklEIiwicGFyYW1zIiwiY29sbGVjdGlvblNsdWciLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwic2x1ZyIsInBheWxvYWQiLCJvcHRpb25zIiwiZGVwdGgiLCJOdW1iZXIiLCJxdWVyeSIsImRvYyIsInJlc3RvcmVWZXJzaW9uIiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsImZvcm1hdFN1Y2Nlc3NSZXNwb25zZSIsInQiLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFnQkE7OztlQUE4QkE7OzttRUFkUDtzRUFLVztzQ0FDRzt1RUFDVjs7Ozs7O0FBT1osZUFBZUEsc0JBQzVCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtJQUVsQixNQUFNQyxLQUFLQyxJQUFBQSwwQ0FBb0IsRUFBQztRQUM5QkQsSUFBSUgsSUFBSUssTUFBTSxDQUFDRixFQUFFO1FBQ2pCRyxnQkFBZ0JOLElBQUlPLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJO1FBQzFDQyxTQUFTVixJQUFJVSxPQUFPO0lBQ3RCO0lBRUEsTUFBTUMsVUFBVTtRQUNkUjtRQUNBSSxZQUFZUCxJQUFJTyxVQUFVO1FBQzFCSyxPQUFPQyxPQUFPYixJQUFJYyxLQUFLLENBQUNGLEtBQUs7UUFDN0JGLFNBQVNWLElBQUlVLE9BQU87UUFDcEJWO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YsTUFBTWUsTUFBTSxNQUFNQyxJQUFBQSx1QkFBYyxFQUFDTDtRQUNqQ1YsSUFBSWdCLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUM7WUFDN0IsR0FBR0MsSUFBQUEsc0JBQXFCLEVBQUNyQixJQUFJc0IsQ0FBQyxDQUFDLGlDQUFpQyxVQUFVO1lBQzFFUDtRQUNGO0lBQ0YsRUFBRSxPQUFPUSxPQUFPO1FBQ2RyQixLQUFLcUI7SUFDUDtBQUNGIn0=