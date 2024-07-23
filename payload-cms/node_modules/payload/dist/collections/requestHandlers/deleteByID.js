"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return deleteByIDHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _errors = require("../../errors");
const _sanitizeCollectionID = require("../../utilities/sanitizeCollectionID");
const _deleteByID = /*#__PURE__*/ _interop_require_default(require("../operations/deleteByID"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function deleteByIDHandler(req, res, next) {
    const id = (0, _sanitizeCollectionID.sanitizeCollectionID)({
        id: req.params.id,
        collectionSlug: req.collection.config.slug,
        payload: req.payload
    });
    try {
        const doc = await (0, _deleteByID.default)({
            id,
            collection: req.collection,
            depth: parseInt(String(req.query.depth), 10),
            req
        });
        if (!doc) {
            res.status(_httpstatus.default.NOT_FOUND).json(new _errors.NotFound(req.t));
        }
        res.status(_httpstatus.default.OK).send(doc);
    } catch (error) {
        next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZGVsZXRlQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IE5vdEZvdW5kIH0gZnJvbSAnLi4vLi4vZXJyb3JzJ1xuaW1wb3J0IHsgc2FuaXRpemVDb2xsZWN0aW9uSUQgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvc2FuaXRpemVDb2xsZWN0aW9uSUQnXG5pbXBvcnQgZGVsZXRlQnlJRCBmcm9tICcuLi9vcGVyYXRpb25zL2RlbGV0ZUJ5SUQnXG5cbmV4cG9ydCB0eXBlIERlbGV0ZVJlc3VsdCA9IHtcbiAgZG9jOiBEb2N1bWVudFxuICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQnlJREhhbmRsZXIoXG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbik6IFByb21pc2U8UmVzcG9uc2U8RGVsZXRlUmVzdWx0PiB8IHZvaWQ+IHtcbiAgY29uc3QgaWQgPSBzYW5pdGl6ZUNvbGxlY3Rpb25JRCh7XG4gICAgaWQ6IHJlcS5wYXJhbXMuaWQsXG4gICAgY29sbGVjdGlvblNsdWc6IHJlcS5jb2xsZWN0aW9uLmNvbmZpZy5zbHVnLFxuICAgIHBheWxvYWQ6IHJlcS5wYXlsb2FkLFxuICB9KVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZG9jID0gYXdhaXQgZGVsZXRlQnlJRCh7XG4gICAgICBpZCxcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgZGVwdGg6IHBhcnNlSW50KFN0cmluZyhyZXEucXVlcnkuZGVwdGgpLCAxMCksXG4gICAgICByZXEsXG4gICAgfSlcblxuICAgIGlmICghZG9jKSB7XG4gICAgICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKG5ldyBOb3RGb3VuZChyZXEudCkpXG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5zZW5kKGRvYylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yKVxuICB9XG59XG4iXSwibmFtZXMiOlsiZGVsZXRlQnlJREhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaWQiLCJzYW5pdGl6ZUNvbGxlY3Rpb25JRCIsInBhcmFtcyIsImNvbGxlY3Rpb25TbHVnIiwiY29sbGVjdGlvbiIsImNvbmZpZyIsInNsdWciLCJwYXlsb2FkIiwiZG9jIiwiZGVsZXRlQnlJRCIsImRlcHRoIiwicGFyc2VJbnQiLCJTdHJpbmciLCJxdWVyeSIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJOT1RfRk9VTkQiLCJqc29uIiwiTm90Rm91bmQiLCJ0IiwiT0siLCJzZW5kIiwiZXJyb3IiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWdCQTs7O2VBQThCQTs7O21FQWRQO3dCQUtFO3NDQUNZO21FQUNkOzs7Ozs7QUFPUixlQUFlQSxrQkFDNUJDLEdBQW1CLEVBQ25CQyxHQUFhLEVBQ2JDLElBQWtCO0lBRWxCLE1BQU1DLEtBQUtDLElBQUFBLDBDQUFvQixFQUFDO1FBQzlCRCxJQUFJSCxJQUFJSyxNQUFNLENBQUNGLEVBQUU7UUFDakJHLGdCQUFnQk4sSUFBSU8sVUFBVSxDQUFDQyxNQUFNLENBQUNDLElBQUk7UUFDMUNDLFNBQVNWLElBQUlVLE9BQU87SUFDdEI7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxNQUFNQyxJQUFBQSxtQkFBVSxFQUFDO1lBQzNCVDtZQUNBSSxZQUFZUCxJQUFJTyxVQUFVO1lBQzFCTSxPQUFPQyxTQUFTQyxPQUFPZixJQUFJZ0IsS0FBSyxDQUFDSCxLQUFLLEdBQUc7WUFDekNiO1FBQ0Y7UUFFQSxJQUFJLENBQUNXLEtBQUs7WUFDUlYsSUFBSWdCLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsU0FBUyxFQUFFQyxJQUFJLENBQUMsSUFBSUMsZ0JBQVEsQ0FBQ3JCLElBQUlzQixDQUFDO1FBQzFEO1FBRUFyQixJQUFJZ0IsTUFBTSxDQUFDQyxtQkFBVSxDQUFDSyxFQUFFLEVBQUVDLElBQUksQ0FBQ2I7SUFDakMsRUFBRSxPQUFPYyxPQUFPO1FBQ2R2QixLQUFLdUI7SUFDUDtBQUNGIn0=