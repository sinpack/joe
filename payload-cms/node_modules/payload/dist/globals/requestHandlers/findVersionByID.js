"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionByIDHandler;
    }
});
const _isNumber = require("../../utilities/isNumber");
const _findVersionByID = /*#__PURE__*/ _interop_require_default(require("../operations/findVersionByID"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findVersionByIDHandler(globalConfig) {
    return async function handler(req, res, next) {
        const options = {
            id: req.params.id,
            depth: (0, _isNumber.isNumber)(req.query?.depth) ? Number(req.query.depth) : undefined,
            globalConfig,
            req
        };
        try {
            const doc = await (0, _findVersionByID.default)(options);
            return res.json(doc);
        } catch (error) {
            return next(error);
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy9maW5kVmVyc2lvbkJ5SUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaXNOdW1iZXInXG5pbXBvcnQgZmluZFZlcnNpb25CeUlEIGZyb20gJy4uL29wZXJhdGlvbnMvZmluZFZlcnNpb25CeUlEJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kVmVyc2lvbkJ5SURIYW5kbGVyKGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogRG9jdW1lbnQge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlPERvY3VtZW50PiB8IHZvaWQ+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgaWQ6IHJlcS5wYXJhbXMuaWQsXG4gICAgICBkZXB0aDogaXNOdW1iZXIocmVxLnF1ZXJ5Py5kZXB0aCkgPyBOdW1iZXIocmVxLnF1ZXJ5LmRlcHRoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGdsb2JhbENvbmZpZyxcbiAgICAgIHJlcSxcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZG9jID0gYXdhaXQgZmluZFZlcnNpb25CeUlEKG9wdGlvbnMpXG4gICAgICByZXR1cm4gcmVzLmpzb24oZG9jKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvcilcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmaW5kVmVyc2lvbkJ5SURIYW5kbGVyIiwiZ2xvYmFsQ29uZmlnIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJvcHRpb25zIiwiaWQiLCJwYXJhbXMiLCJkZXB0aCIsImlzTnVtYmVyIiwicXVlcnkiLCJOdW1iZXIiLCJ1bmRlZmluZWQiLCJkb2MiLCJmaW5kVmVyc2lvbkJ5SUQiLCJqc29uIiwiZXJyb3IiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBU0E7OztlQUF3QkE7OzswQkFIQzt3RUFDRzs7Ozs7O0FBRWIsU0FBU0EsdUJBQXVCQyxZQUFtQztJQUNoRixPQUFPLGVBQWVDLFFBQ3BCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtRQUVsQixNQUFNQyxVQUFVO1lBQ2RDLElBQUlKLElBQUlLLE1BQU0sQ0FBQ0QsRUFBRTtZQUNqQkUsT0FBT0MsSUFBQUEsa0JBQVEsRUFBQ1AsSUFBSVEsS0FBSyxFQUFFRixTQUFTRyxPQUFPVCxJQUFJUSxLQUFLLENBQUNGLEtBQUssSUFBSUk7WUFDOURaO1lBQ0FFO1FBQ0Y7UUFFQSxJQUFJO1lBQ0YsTUFBTVcsTUFBTSxNQUFNQyxJQUFBQSx3QkFBZSxFQUFDVDtZQUNsQyxPQUFPRixJQUFJWSxJQUFJLENBQUNGO1FBQ2xCLEVBQUUsT0FBT0csT0FBTztZQUNkLE9BQU9aLEtBQUtZO1FBQ2Q7SUFDRjtBQUNGIn0=