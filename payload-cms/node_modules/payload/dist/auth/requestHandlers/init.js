"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return initHandler;
    }
});
const _init = /*#__PURE__*/ _interop_require_default(require("../operations/init"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function initHandler(req, res, next) {
    try {
        const initialized = await (0, _init.default)({
            collection: req.collection.config.slug,
            req
        });
        return res.status(200).json({
            initialized
        });
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9pbml0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgaW5pdCBmcm9tICcuLi9vcGVyYXRpb25zL2luaXQnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluaXRIYW5kbGVyKFxuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4pOiBQcm9taXNlPGFueT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGluaXRpYWxpemVkID0gYXdhaXQgaW5pdCh7XG4gICAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbi5jb25maWcuc2x1ZyxcbiAgICAgIHJlcSxcbiAgICB9KVxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGluaXRpYWxpemVkIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpbml0SGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJpbml0aWFsaXplZCIsImluaXQiLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwic2x1ZyIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQU1BOzs7ZUFBOEJBOzs7NkRBRmI7Ozs7OztBQUVGLGVBQWVBLFlBQzVCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtJQUVsQixJQUFJO1FBQ0YsTUFBTUMsY0FBYyxNQUFNQyxJQUFBQSxhQUFJLEVBQUM7WUFDN0JDLFlBQVlMLElBQUlLLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJO1lBQ3RDUDtRQUNGO1FBQ0EsT0FBT0MsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFTjtRQUFZO0lBQzVDLEVBQUUsT0FBT08sT0FBTztRQUNkLE9BQU9SLEtBQUtRO0lBQ2Q7QUFDRiJ9