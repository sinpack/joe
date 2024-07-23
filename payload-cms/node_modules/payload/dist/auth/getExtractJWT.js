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
const _parseCookies = /*#__PURE__*/ _interop_require_default(require("../utilities/parseCookies"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getExtractJWT = (config)=>(req)=>{
        if (!req?.get) {
            return null;
        }
        const jwtFromHeader = req.get('Authorization');
        const origin = req.get('Origin');
        if (jwtFromHeader?.indexOf('JWT ') === 0) {
            return jwtFromHeader.replace('JWT ', '');
        }
        // allow RFC6750 OAuth 2.0 compliant Bearer tokens
        // in addition to the payload default JWT format
        if (jwtFromHeader?.indexOf('Bearer ') === 0) {
            return jwtFromHeader.replace('Bearer ', '');
        }
        const cookies = (0, _parseCookies.default)(req);
        const tokenCookieName = `${config.cookiePrefix}-token`;
        if (!cookies?.[tokenCookieName]) {
            return null;
        }
        if (!origin || config.csrf.length === 0 || config.csrf.indexOf(origin) > -1) {
            return cookies[tokenCookieName];
        }
        return null;
    };
const _default = getExtractJWT;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL2dldEV4dHJhY3RKV1QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBwYXJzZUNvb2tpZXMgZnJvbSAnLi4vdXRpbGl0aWVzL3BhcnNlQ29va2llcydcblxuY29uc3QgZ2V0RXh0cmFjdEpXVCA9XG4gIChjb25maWc6IFNhbml0aXplZENvbmZpZykgPT5cbiAgKHJlcTogUmVxdWVzdCk6IG51bGwgfCBzdHJpbmcgPT4ge1xuICAgIGlmICghcmVxPy5nZXQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3Qgand0RnJvbUhlYWRlciA9IHJlcS5nZXQoJ0F1dGhvcml6YXRpb24nKVxuICAgIGNvbnN0IG9yaWdpbiA9IHJlcS5nZXQoJ09yaWdpbicpXG5cbiAgICBpZiAoand0RnJvbUhlYWRlcj8uaW5kZXhPZignSldUICcpID09PSAwKSB7XG4gICAgICByZXR1cm4gand0RnJvbUhlYWRlci5yZXBsYWNlKCdKV1QgJywgJycpXG4gICAgfVxuICAgIC8vIGFsbG93IFJGQzY3NTAgT0F1dGggMi4wIGNvbXBsaWFudCBCZWFyZXIgdG9rZW5zXG4gICAgLy8gaW4gYWRkaXRpb24gdG8gdGhlIHBheWxvYWQgZGVmYXVsdCBKV1QgZm9ybWF0XG4gICAgaWYgKGp3dEZyb21IZWFkZXI/LmluZGV4T2YoJ0JlYXJlciAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGp3dEZyb21IZWFkZXIucmVwbGFjZSgnQmVhcmVyICcsICcnKVxuICAgIH1cblxuICAgIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMocmVxKVxuICAgIGNvbnN0IHRva2VuQ29va2llTmFtZSA9IGAke2NvbmZpZy5jb29raWVQcmVmaXh9LXRva2VuYFxuXG4gICAgaWYgKCFjb29raWVzPy5bdG9rZW5Db29raWVOYW1lXSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAoIW9yaWdpbiB8fCBjb25maWcuY3NyZi5sZW5ndGggPT09IDAgfHwgY29uZmlnLmNzcmYuaW5kZXhPZihvcmlnaW4pID4gLTEpIHtcbiAgICAgIHJldHVybiBjb29raWVzW3Rva2VuQ29va2llTmFtZV1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGdldEV4dHJhY3RKV1RcbiJdLCJuYW1lcyI6WyJnZXRFeHRyYWN0SldUIiwiY29uZmlnIiwicmVxIiwiZ2V0Iiwiand0RnJvbUhlYWRlciIsIm9yaWdpbiIsImluZGV4T2YiLCJyZXBsYWNlIiwiY29va2llcyIsInBhcnNlQ29va2llcyIsInRva2VuQ29va2llTmFtZSIsImNvb2tpZVByZWZpeCIsImNzcmYiLCJsZW5ndGgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF1Q0E7OztlQUFBOzs7cUVBbkN5Qjs7Ozs7O0FBRXpCLE1BQU1BLGdCQUNKLENBQUNDLFNBQ0QsQ0FBQ0M7UUFDQyxJQUFJLENBQUNBLEtBQUtDLEtBQUs7WUFDYixPQUFPO1FBQ1Q7UUFFQSxNQUFNQyxnQkFBZ0JGLElBQUlDLEdBQUcsQ0FBQztRQUM5QixNQUFNRSxTQUFTSCxJQUFJQyxHQUFHLENBQUM7UUFFdkIsSUFBSUMsZUFBZUUsUUFBUSxZQUFZLEdBQUc7WUFDeEMsT0FBT0YsY0FBY0csT0FBTyxDQUFDLFFBQVE7UUFDdkM7UUFDQSxrREFBa0Q7UUFDbEQsZ0RBQWdEO1FBQ2hELElBQUlILGVBQWVFLFFBQVEsZUFBZSxHQUFHO1lBQzNDLE9BQU9GLGNBQWNHLE9BQU8sQ0FBQyxXQUFXO1FBQzFDO1FBRUEsTUFBTUMsVUFBVUMsSUFBQUEscUJBQVksRUFBQ1A7UUFDN0IsTUFBTVEsa0JBQWtCLENBQUMsRUFBRVQsT0FBT1UsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUV0RCxJQUFJLENBQUNILFNBQVMsQ0FBQ0UsZ0JBQWdCLEVBQUU7WUFDL0IsT0FBTztRQUNUO1FBRUEsSUFBSSxDQUFDTCxVQUFVSixPQUFPVyxJQUFJLENBQUNDLE1BQU0sS0FBSyxLQUFLWixPQUFPVyxJQUFJLENBQUNOLE9BQU8sQ0FBQ0QsVUFBVSxDQUFDLEdBQUc7WUFDM0UsT0FBT0csT0FBTyxDQUFDRSxnQkFBZ0I7UUFDakM7UUFFQSxPQUFPO0lBQ1Q7TUFFRixXQUFlViJ9