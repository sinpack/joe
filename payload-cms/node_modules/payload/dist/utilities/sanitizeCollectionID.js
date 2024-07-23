"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sanitizeCollectionID", {
    enumerable: true,
    get: function() {
        return sanitizeCollectionID;
    }
});
const _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("./flattenTopLevelFields"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const sanitizeCollectionID = ({ id, collectionSlug, payload })=>{
    let sanitizedID = id;
    const collection = payload.collections[collectionSlug];
    // If default db ID type is a number, we should sanitize
    let shouldSanitize = Boolean(payload.db.defaultIDType === 'number');
    // UNLESS the custom ID for this collection is text.... then we leave it
    const hasIdField = (0, _flattenTopLevelFields.default)(collection.config.fields).find((field)=>field.name === 'id');
    if (shouldSanitize && hasIdField) shouldSanitize = false;
    // If we still should sanitize, parse float
    if (shouldSanitize) sanitizedID = parseFloat(sanitizedID);
    return sanitizedID;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2FuaXRpemVDb2xsZWN0aW9uSUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4nXG5cbmltcG9ydCBmbGF0dGVuRmllbGRzIGZyb20gJy4vZmxhdHRlblRvcExldmVsRmllbGRzJ1xuXG50eXBlIEFyZ3MgPSB7XG4gIGNvbGxlY3Rpb25TbHVnOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBwYXlsb2FkOiBQYXlsb2FkXG59XG5cbmV4cG9ydCBjb25zdCBzYW5pdGl6ZUNvbGxlY3Rpb25JRCA9ICh7IGlkLCBjb2xsZWN0aW9uU2x1ZywgcGF5bG9hZCB9OiBBcmdzKTogbnVtYmVyIHwgc3RyaW5nID0+IHtcbiAgbGV0IHNhbml0aXplZElEOiBudW1iZXIgfCBzdHJpbmcgPSBpZFxuICBjb25zdCBjb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z11cblxuICAvLyBJZiBkZWZhdWx0IGRiIElEIHR5cGUgaXMgYSBudW1iZXIsIHdlIHNob3VsZCBzYW5pdGl6ZVxuICBsZXQgc2hvdWxkU2FuaXRpemUgPSBCb29sZWFuKHBheWxvYWQuZGIuZGVmYXVsdElEVHlwZSA9PT0gJ251bWJlcicpXG5cbiAgLy8gVU5MRVNTIHRoZSBjdXN0b20gSUQgZm9yIHRoaXMgY29sbGVjdGlvbiBpcyB0ZXh0Li4uLiB0aGVuIHdlIGxlYXZlIGl0XG4gIGNvbnN0IGhhc0lkRmllbGQgPSBmbGF0dGVuRmllbGRzKGNvbGxlY3Rpb24uY29uZmlnLmZpZWxkcykuZmluZCgoZmllbGQpID0+IGZpZWxkLm5hbWUgPT09ICdpZCcpXG5cbiAgaWYgKHNob3VsZFNhbml0aXplICYmIGhhc0lkRmllbGQpIHNob3VsZFNhbml0aXplID0gZmFsc2VcblxuICAvLyBJZiB3ZSBzdGlsbCBzaG91bGQgc2FuaXRpemUsIHBhcnNlIGZsb2F0XG4gIGlmIChzaG91bGRTYW5pdGl6ZSkgc2FuaXRpemVkSUQgPSBwYXJzZUZsb2F0KHNhbml0aXplZElEKVxuXG4gIHJldHVybiBzYW5pdGl6ZWRJRFxufVxuIl0sIm5hbWVzIjpbInNhbml0aXplQ29sbGVjdGlvbklEIiwiaWQiLCJjb2xsZWN0aW9uU2x1ZyIsInBheWxvYWQiLCJzYW5pdGl6ZWRJRCIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aW9ucyIsInNob3VsZFNhbml0aXplIiwiQm9vbGVhbiIsImRiIiwiZGVmYXVsdElEVHlwZSIsImhhc0lkRmllbGQiLCJmbGF0dGVuRmllbGRzIiwiY29uZmlnIiwiZmllbGRzIiwiZmluZCIsImZpZWxkIiwibmFtZSIsInBhcnNlRmxvYXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVVhQTs7O2VBQUFBOzs7OEVBUmE7Ozs7OztBQVFuQixNQUFNQSx1QkFBdUIsQ0FBQyxFQUFFQyxFQUFFLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFRO0lBQ3hFLElBQUlDLGNBQStCSDtJQUNuQyxNQUFNSSxhQUFhRixRQUFRRyxXQUFXLENBQUNKLGVBQWU7SUFFdEQsd0RBQXdEO0lBQ3hELElBQUlLLGlCQUFpQkMsUUFBUUwsUUFBUU0sRUFBRSxDQUFDQyxhQUFhLEtBQUs7SUFFMUQsd0VBQXdFO0lBQ3hFLE1BQU1DLGFBQWFDLElBQUFBLDhCQUFhLEVBQUNQLFdBQVdRLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxJQUFJLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTUMsSUFBSSxLQUFLO0lBRTFGLElBQUlWLGtCQUFrQkksWUFBWUosaUJBQWlCO0lBRW5ELDJDQUEyQztJQUMzQyxJQUFJQSxnQkFBZ0JILGNBQWNjLFdBQVdkO0lBRTdDLE9BQU9BO0FBQ1QifQ==