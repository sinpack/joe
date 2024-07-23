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
const _setRequestContext = require("../setRequestContext");
function defaultPayload(req, res, next) {
    (0, _setRequestContext.setRequestContext)(req);
    next();
}
const _default = defaultPayload;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvZGVmYXVsdFBheWxvYWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBzZXRSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uL3NldFJlcXVlc3RDb250ZXh0J1xuXG5mdW5jdGlvbiBkZWZhdWx0UGF5bG9hZChyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgc2V0UmVxdWVzdENvbnRleHQocmVxKVxuICBuZXh0KClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFBheWxvYWRcbiJdLCJuYW1lcyI6WyJkZWZhdWx0UGF5bG9hZCIsInJlcSIsInJlcyIsIm5leHQiLCJzZXRSZXF1ZXN0Q29udGV4dCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBV0E7OztlQUFBOzs7bUNBUGtDO0FBRWxDLFNBQVNBLGVBQWVDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7SUFDNUVDLElBQUFBLG9DQUFpQixFQUFDSDtJQUNsQkU7QUFDRjtNQUVBLFdBQWVIIn0=