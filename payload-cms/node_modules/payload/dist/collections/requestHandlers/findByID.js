"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findByIDHandler;
    }
});
const _sanitizeCollectionID = require("../../utilities/sanitizeCollectionID");
const _findByID = /*#__PURE__*/ _interop_require_default(require("../operations/findByID"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function findByIDHandler(req, res, next) {
    const id = (0, _sanitizeCollectionID.sanitizeCollectionID)({
        id: req.params.id,
        collectionSlug: req.collection.config.slug,
        payload: req.payload
    });
    try {
        const doc = await (0, _findByID.default)({
            id,
            collection: req.collection,
            depth: Number(req.query.depth),
            draft: req.query.draft === 'true',
            req
        });
        return res.json(doc);
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZmluZEJ5SUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IHNhbml0aXplQ29sbGVjdGlvbklEIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3Nhbml0aXplQ29sbGVjdGlvbklEJ1xuaW1wb3J0IGZpbmRCeUlEIGZyb20gJy4uL29wZXJhdGlvbnMvZmluZEJ5SUQnXG5cbmV4cG9ydCB0eXBlIEZpbmRCeUlEUmVzdWx0ID0ge1xuICBkb2M6IERvY3VtZW50XG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmaW5kQnlJREhhbmRsZXIoXG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbik6IFByb21pc2U8UmVzcG9uc2U8RmluZEJ5SURSZXN1bHQ+IHwgdm9pZD4ge1xuICBjb25zdCBpZCA9IHNhbml0aXplQ29sbGVjdGlvbklEKHtcbiAgICBpZDogcmVxLnBhcmFtcy5pZCxcbiAgICBjb2xsZWN0aW9uU2x1ZzogcmVxLmNvbGxlY3Rpb24uY29uZmlnLnNsdWcsXG4gICAgcGF5bG9hZDogcmVxLnBheWxvYWQsXG4gIH0pXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkb2MgPSBhd2FpdCBmaW5kQnlJRCh7XG4gICAgICBpZCxcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgZGVwdGg6IE51bWJlcihyZXEucXVlcnkuZGVwdGgpLFxuICAgICAgZHJhZnQ6IHJlcS5xdWVyeS5kcmFmdCA9PT0gJ3RydWUnLFxuICAgICAgcmVxLFxuICAgIH0pXG4gICAgcmV0dXJuIHJlcy5qc29uKGRvYylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChlcnJvcilcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZpbmRCeUlESGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJpZCIsInNhbml0aXplQ29sbGVjdGlvbklEIiwicGFyYW1zIiwiY29sbGVjdGlvblNsdWciLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwic2x1ZyIsInBheWxvYWQiLCJkb2MiLCJmaW5kQnlJRCIsImRlcHRoIiwiTnVtYmVyIiwicXVlcnkiLCJkcmFmdCIsImpzb24iLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFhQTs7O2VBQThCQTs7O3NDQVJPO2lFQUNoQjs7Ozs7O0FBT04sZUFBZUEsZ0JBQzVCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtJQUVsQixNQUFNQyxLQUFLQyxJQUFBQSwwQ0FBb0IsRUFBQztRQUM5QkQsSUFBSUgsSUFBSUssTUFBTSxDQUFDRixFQUFFO1FBQ2pCRyxnQkFBZ0JOLElBQUlPLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJO1FBQzFDQyxTQUFTVixJQUFJVSxPQUFPO0lBQ3RCO0lBRUEsSUFBSTtRQUNGLE1BQU1DLE1BQU0sTUFBTUMsSUFBQUEsaUJBQVEsRUFBQztZQUN6QlQ7WUFDQUksWUFBWVAsSUFBSU8sVUFBVTtZQUMxQk0sT0FBT0MsT0FBT2QsSUFBSWUsS0FBSyxDQUFDRixLQUFLO1lBQzdCRyxPQUFPaEIsSUFBSWUsS0FBSyxDQUFDQyxLQUFLLEtBQUs7WUFDM0JoQjtRQUNGO1FBQ0EsT0FBT0MsSUFBSWdCLElBQUksQ0FBQ047SUFDbEIsRUFBRSxPQUFPTyxPQUFPO1FBQ2QsT0FBT2hCLEtBQUtnQjtJQUNkO0FBQ0YifQ==