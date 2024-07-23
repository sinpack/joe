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
const _passport = /*#__PURE__*/ _interop_require_default(require("passport"));
const _passportanonymous = /*#__PURE__*/ _interop_require_default(require("passport-anonymous"));
const _jwt = /*#__PURE__*/ _interop_require_default(require("./strategies/jwt"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initAuth(ctx) {
    _passport.default.use(new _passportanonymous.default.Strategy());
    _passport.default.use('jwt', (0, _jwt.default)(ctx));
}
const _default = initAuth;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL2luaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0IEFub255bW91c1N0cmF0ZWd5IGZyb20gJ3Bhc3Nwb3J0LWFub255bW91cydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vcGF5bG9hZCdcblxuaW1wb3J0IGp3dFN0cmF0ZWd5IGZyb20gJy4vc3RyYXRlZ2llcy9qd3QnXG5cbmZ1bmN0aW9uIGluaXRBdXRoKGN0eDogUGF5bG9hZCk6IHZvaWQge1xuICBwYXNzcG9ydC51c2UobmV3IEFub255bW91c1N0cmF0ZWd5LlN0cmF0ZWd5KCkpXG4gIHBhc3Nwb3J0LnVzZSgnand0Jywgand0U3RyYXRlZ3koY3R4KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGhcbiJdLCJuYW1lcyI6WyJpbml0QXV0aCIsImN0eCIsInBhc3Nwb3J0IiwidXNlIiwiQW5vbnltb3VzU3RyYXRlZ3kiLCJTdHJhdGVneSIsImp3dFN0cmF0ZWd5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBWUE7OztlQUFBOzs7aUVBWnFCOzBFQUNTOzREQUlOOzs7Ozs7QUFFeEIsU0FBU0EsU0FBU0MsR0FBWTtJQUM1QkMsaUJBQVEsQ0FBQ0MsR0FBRyxDQUFDLElBQUlDLDBCQUFpQixDQUFDQyxRQUFRO0lBQzNDSCxpQkFBUSxDQUFDQyxHQUFHLENBQUMsT0FBT0csSUFBQUEsWUFBVyxFQUFDTDtBQUNsQztNQUVBLFdBQWVEIn0=