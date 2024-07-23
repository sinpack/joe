"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
async function init(args) {
    const { collection: slug, req } = args;
    const doc = await req.payload.db.findOne({
        collection: slug,
        req
    });
    return !!doc;
}
const _default = init;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvaW5pdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcblxuYXN5bmMgZnVuY3Rpb24gaW5pdChhcmdzOiB7IGNvbGxlY3Rpb246IHN0cmluZzsgcmVxOiBQYXlsb2FkUmVxdWVzdCB9KTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbjogc2x1ZywgcmVxIH0gPSBhcmdzXG5cbiAgY29uc3QgZG9jID0gYXdhaXQgcmVxLnBheWxvYWQuZGIuZmluZE9uZSh7XG4gICAgY29sbGVjdGlvbjogc2x1ZyxcbiAgICByZXEsXG4gIH0pXG5cbiAgcmV0dXJuICEhZG9jXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRcbiJdLCJuYW1lcyI6WyJpbml0IiwiYXJncyIsImNvbGxlY3Rpb24iLCJzbHVnIiwicmVxIiwiZG9jIiwicGF5bG9hZCIsImRiIiwiZmluZE9uZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBYUE7OztlQUFBOzs7QUFYQSxlQUFlQSxLQUFLQyxJQUFpRDtJQUNuRSxNQUFNLEVBQUVDLFlBQVlDLElBQUksRUFBRUMsR0FBRyxFQUFFLEdBQUdIO0lBRWxDLE1BQU1JLE1BQU0sTUFBTUQsSUFBSUUsT0FBTyxDQUFDQyxFQUFFLENBQUNDLE9BQU8sQ0FBQztRQUN2Q04sWUFBWUM7UUFDWkM7SUFDRjtJQUVBLE9BQU8sQ0FBQyxDQUFDQztBQUNYO01BRUEsV0FBZUwifQ==