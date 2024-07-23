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
const _sanitizeCollectionID = require("../../utilities/sanitizeCollectionID");
const _findVersionByID = /*#__PURE__*/ _interop_require_default(require("../operations/findVersionByID"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function findVersionByIDHandler(req, res, next) {
    const id = (0, _sanitizeCollectionID.sanitizeCollectionID)({
        id: req.params.id,
        collectionSlug: req.collection.config.slug,
        payload: req.payload
    });
    const options = {
        id,
        collection: req.collection,
        depth: parseInt(String(req.query.depth), 10),
        payload: req.payload,
        req
    };
    try {
        const doc = await (0, _findVersionByID.default)(options);
        return res.json(doc);
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25CeUlELnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBzYW5pdGl6ZUNvbGxlY3Rpb25JRCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9zYW5pdGl6ZUNvbGxlY3Rpb25JRCdcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SUQgZnJvbSAnLi4vb3BlcmF0aW9ucy9maW5kVmVyc2lvbkJ5SUQnXG5cbmV4cG9ydCB0eXBlIEZpbmRCeUlEUmVzdWx0ID0ge1xuICBkb2M6IERvY3VtZW50XG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmaW5kVmVyc2lvbkJ5SURIYW5kbGVyKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pOiBQcm9taXNlPFJlc3BvbnNlPEZpbmRCeUlEUmVzdWx0PiB8IHZvaWQ+IHtcbiAgY29uc3QgaWQgPSBzYW5pdGl6ZUNvbGxlY3Rpb25JRCh7XG4gICAgaWQ6IHJlcS5wYXJhbXMuaWQsXG4gICAgY29sbGVjdGlvblNsdWc6IHJlcS5jb2xsZWN0aW9uLmNvbmZpZy5zbHVnLFxuICAgIHBheWxvYWQ6IHJlcS5wYXlsb2FkLFxuICB9KVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgaWQsXG4gICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgZGVwdGg6IHBhcnNlSW50KFN0cmluZyhyZXEucXVlcnkuZGVwdGgpLCAxMCksXG4gICAgcGF5bG9hZDogcmVxLnBheWxvYWQsXG4gICAgcmVxLFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkb2MgPSBhd2FpdCBmaW5kVmVyc2lvbkJ5SUQob3B0aW9ucylcbiAgICByZXR1cm4gcmVzLmpzb24oZG9jKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKVxuICB9XG59XG4iXSwibmFtZXMiOlsiZmluZFZlcnNpb25CeUlESGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJpZCIsInNhbml0aXplQ29sbGVjdGlvbklEIiwicGFyYW1zIiwiY29sbGVjdGlvblNsdWciLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwic2x1ZyIsInBheWxvYWQiLCJvcHRpb25zIiwiZGVwdGgiLCJwYXJzZUludCIsIlN0cmluZyIsInF1ZXJ5IiwiZG9jIiwiZmluZFZlcnNpb25CeUlEIiwianNvbiIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFhQTs7O2VBQThCQTs7O3NDQVJPO3dFQUNUOzs7Ozs7QUFPYixlQUFlQSx1QkFDNUJDLEdBQW1CLEVBQ25CQyxHQUFhLEVBQ2JDLElBQWtCO0lBRWxCLE1BQU1DLEtBQUtDLElBQUFBLDBDQUFvQixFQUFDO1FBQzlCRCxJQUFJSCxJQUFJSyxNQUFNLENBQUNGLEVBQUU7UUFDakJHLGdCQUFnQk4sSUFBSU8sVUFBVSxDQUFDQyxNQUFNLENBQUNDLElBQUk7UUFDMUNDLFNBQVNWLElBQUlVLE9BQU87SUFDdEI7SUFFQSxNQUFNQyxVQUFVO1FBQ2RSO1FBQ0FJLFlBQVlQLElBQUlPLFVBQVU7UUFDMUJLLE9BQU9DLFNBQVNDLE9BQU9kLElBQUllLEtBQUssQ0FBQ0gsS0FBSyxHQUFHO1FBQ3pDRixTQUFTVixJQUFJVSxPQUFPO1FBQ3BCVjtJQUNGO0lBRUEsSUFBSTtRQUNGLE1BQU1nQixNQUFNLE1BQU1DLElBQUFBLHdCQUFlLEVBQUNOO1FBQ2xDLE9BQU9WLElBQUlpQixJQUFJLENBQUNGO0lBQ2xCLEVBQUUsT0FBT0csT0FBTztRQUNkLE9BQU9qQixLQUFLaUI7SUFDZDtBQUNGIn0=