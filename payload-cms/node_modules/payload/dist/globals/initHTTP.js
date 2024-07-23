"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return initGlobals;
    }
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _mountEndpoints = /*#__PURE__*/ _interop_require_default(require("../express/mountEndpoints"));
const _buildEndpoints = /*#__PURE__*/ _interop_require_default(require("./buildEndpoints"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initGlobals(ctx) {
    if (ctx.config.globals) {
        ctx.config.globals.forEach((global)=>{
            const router = _express.default.Router();
            const { slug } = global;
            const endpoints = (0, _buildEndpoints.default)(global);
            (0, _mountEndpoints.default)(ctx.express, router, endpoints);
            ctx.router.use(`/globals/${slug}`, router);
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzL2luaXRIVFRQLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgbW91bnRFbmRwb2ludHMgZnJvbSAnLi4vZXhwcmVzcy9tb3VudEVuZHBvaW50cydcbmltcG9ydCBidWlsZEVuZHBvaW50cyBmcm9tICcuL2J1aWxkRW5kcG9pbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0R2xvYmFscyhjdHg6IFBheWxvYWQpOiB2b2lkIHtcbiAgaWYgKGN0eC5jb25maWcuZ2xvYmFscykge1xuICAgIGN0eC5jb25maWcuZ2xvYmFscy5mb3JFYWNoKChnbG9iYWw6IFNhbml0aXplZEdsb2JhbENvbmZpZykgPT4ge1xuICAgICAgY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuICAgICAgY29uc3QgeyBzbHVnIH0gPSBnbG9iYWxcblxuICAgICAgY29uc3QgZW5kcG9pbnRzID0gYnVpbGRFbmRwb2ludHMoZ2xvYmFsKVxuICAgICAgbW91bnRFbmRwb2ludHMoY3R4LmV4cHJlc3MsIHJvdXRlciwgZW5kcG9pbnRzKVxuXG4gICAgICBjdHgucm91dGVyLnVzZShgL2dsb2JhbHMvJHtzbHVnfWAsIHJvdXRlcilcbiAgICB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiaW5pdEdsb2JhbHMiLCJjdHgiLCJjb25maWciLCJnbG9iYWxzIiwiZm9yRWFjaCIsImdsb2JhbCIsInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJzbHVnIiwiZW5kcG9pbnRzIiwiYnVpbGRFbmRwb2ludHMiLCJtb3VudEVuZHBvaW50cyIsInVzZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVFBOzs7ZUFBd0JBOzs7Z0VBUko7dUVBS087dUVBQ0E7Ozs7OztBQUVaLFNBQVNBLFlBQVlDLEdBQVk7SUFDOUMsSUFBSUEsSUFBSUMsTUFBTSxDQUFDQyxPQUFPLEVBQUU7UUFDdEJGLElBQUlDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQ0M7WUFDMUIsTUFBTUMsU0FBU0MsZ0JBQU8sQ0FBQ0MsTUFBTTtZQUM3QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHSjtZQUVqQixNQUFNSyxZQUFZQyxJQUFBQSx1QkFBYyxFQUFDTjtZQUNqQ08sSUFBQUEsdUJBQWMsRUFBQ1gsSUFBSU0sT0FBTyxFQUFFRCxRQUFRSTtZQUVwQ1QsSUFBSUssTUFBTSxDQUFDTyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUVKLEtBQUssQ0FBQyxFQUFFSDtRQUNyQztJQUNGO0FBQ0YifQ==