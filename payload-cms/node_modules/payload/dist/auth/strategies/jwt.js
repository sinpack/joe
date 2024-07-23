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
const _passportjwt = /*#__PURE__*/ _interop_require_default(require("passport-jwt"));
const _url = /*#__PURE__*/ _interop_require_default(require("url"));
const _getExtractJWT = /*#__PURE__*/ _interop_require_default(require("../getExtractJWT"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const JwtStrategy = _passportjwt.default.Strategy;
const _default = ({ collections, config, secret })=>{
    const opts = {
        jwtFromRequest: (0, _getExtractJWT.default)(config),
        passReqToCallback: true,
        secretOrKey: secret
    };
    return new JwtStrategy(opts, async (req, token, done)=>{
        if (req.user) {
            done(null, req.user);
        }
        try {
            const collection = collections[token.collection];
            const parsedURL = _url.default.parse(req.originalUrl);
            const isGraphQL = parsedURL.pathname === `/api${req.payload.config.routes.graphQL}`;
            const user = await req.payload.findByID({
                id: token.id,
                collection: token.collection,
                depth: isGraphQL ? 0 : collection.config.auth.depth,
                req
            });
            if (user && (!collection.config.auth.verify || user._verified)) {
                user.collection = collection.config.slug;
                user._strategy = 'local-jwt';
                done(null, user);
            } else {
                done(null, false);
            }
        } catch (err) {
            done(null, false);
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvand0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU3RyYXRlZ3lPcHRpb25zIH0gZnJvbSAncGFzc3BvcnQtand0J1xuaW1wb3J0IHR5cGUgeyBTdHJhdGVneSBhcyBQYXNzcG9ydFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtc3RyYXRlZ3knXG5cbmltcG9ydCBwYXNzcG9ydEp3dCBmcm9tICdwYXNzcG9ydC1qd3QnXG5pbXBvcnQgdXJsIGZyb20gJ3VybCdcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vcGF5bG9hZCdcblxuaW1wb3J0IGdldEV4dHJhY3RKV1QgZnJvbSAnLi4vZ2V0RXh0cmFjdEpXVCdcblxuY29uc3QgSnd0U3RyYXRlZ3kgPSBwYXNzcG9ydEp3dC5TdHJhdGVneVxuXG5leHBvcnQgZGVmYXVsdCAoeyBjb2xsZWN0aW9ucywgY29uZmlnLCBzZWNyZXQgfTogUGF5bG9hZCk6IFBhc3Nwb3J0U3RyYXRlZ3kgPT4ge1xuICBjb25zdCBvcHRzOiBTdHJhdGVneU9wdGlvbnMgPSB7XG4gICAgand0RnJvbVJlcXVlc3Q6IGdldEV4dHJhY3RKV1QoY29uZmlnKSxcbiAgICBwYXNzUmVxVG9DYWxsYmFjazogdHJ1ZSxcbiAgICBzZWNyZXRPcktleTogc2VjcmV0LFxuICB9XG5cbiAgcmV0dXJuIG5ldyBKd3RTdHJhdGVneShvcHRzLCBhc3luYyAocmVxLCB0b2tlbiwgZG9uZSkgPT4ge1xuICAgIGlmIChyZXEudXNlcikge1xuICAgICAgZG9uZShudWxsLCByZXEudXNlcilcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zW3Rva2VuLmNvbGxlY3Rpb25dXG5cbiAgICAgIGNvbnN0IHBhcnNlZFVSTCA9IHVybC5wYXJzZShyZXEub3JpZ2luYWxVcmwpXG4gICAgICBjb25zdCBpc0dyYXBoUUwgPSBwYXJzZWRVUkwucGF0aG5hbWUgPT09IGAvYXBpJHtyZXEucGF5bG9hZC5jb25maWcucm91dGVzLmdyYXBoUUx9YFxuXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVxLnBheWxvYWQuZmluZEJ5SUQoe1xuICAgICAgICBpZDogdG9rZW4uaWQsXG4gICAgICAgIGNvbGxlY3Rpb246IHRva2VuLmNvbGxlY3Rpb24sXG4gICAgICAgIGRlcHRoOiBpc0dyYXBoUUwgPyAwIDogY29sbGVjdGlvbi5jb25maWcuYXV0aC5kZXB0aCxcbiAgICAgICAgcmVxLFxuICAgICAgfSlcblxuICAgICAgaWYgKHVzZXIgJiYgKCFjb2xsZWN0aW9uLmNvbmZpZy5hdXRoLnZlcmlmeSB8fCB1c2VyLl92ZXJpZmllZCkpIHtcbiAgICAgICAgdXNlci5jb2xsZWN0aW9uID0gY29sbGVjdGlvbi5jb25maWcuc2x1Z1xuICAgICAgICB1c2VyLl9zdHJhdGVneSA9ICdsb2NhbC1qd3QnXG4gICAgICAgIGRvbmUobnVsbCwgdXNlcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUobnVsbCwgZmFsc2UpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkb25lKG51bGwsIGZhbHNlKVxuICAgIH1cbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJKd3RTdHJhdGVneSIsInBhc3Nwb3J0Snd0IiwiU3RyYXRlZ3kiLCJjb2xsZWN0aW9ucyIsImNvbmZpZyIsInNlY3JldCIsIm9wdHMiLCJqd3RGcm9tUmVxdWVzdCIsImdldEV4dHJhY3RKV1QiLCJwYXNzUmVxVG9DYWxsYmFjayIsInNlY3JldE9yS2V5IiwicmVxIiwidG9rZW4iLCJkb25lIiwidXNlciIsImNvbGxlY3Rpb24iLCJwYXJzZWRVUkwiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbmFsVXJsIiwiaXNHcmFwaFFMIiwicGF0aG5hbWUiLCJwYXlsb2FkIiwicm91dGVzIiwiZ3JhcGhRTCIsImZpbmRCeUlEIiwiaWQiLCJkZXB0aCIsImF1dGgiLCJ2ZXJpZnkiLCJfdmVyaWZpZWQiLCJzbHVnIiwiX3N0cmF0ZWd5IiwiZXJyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVlBOzs7ZUFBQTs7O29FQVR3Qjs0REFDUjtzRUFJVTs7Ozs7O0FBRTFCLE1BQU1BLGNBQWNDLG9CQUFXLENBQUNDLFFBQVE7TUFFeEMsV0FBZSxDQUFDLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQVc7SUFDdEQsTUFBTUMsT0FBd0I7UUFDNUJDLGdCQUFnQkMsSUFBQUEsc0JBQWEsRUFBQ0o7UUFDOUJLLG1CQUFtQjtRQUNuQkMsYUFBYUw7SUFDZjtJQUVBLE9BQU8sSUFBSUwsWUFBWU0sTUFBTSxPQUFPSyxLQUFLQyxPQUFPQztRQUM5QyxJQUFJRixJQUFJRyxJQUFJLEVBQUU7WUFDWkQsS0FBSyxNQUFNRixJQUFJRyxJQUFJO1FBQ3JCO1FBRUEsSUFBSTtZQUNGLE1BQU1DLGFBQWFaLFdBQVcsQ0FBQ1MsTUFBTUcsVUFBVSxDQUFDO1lBRWhELE1BQU1DLFlBQVlDLFlBQUcsQ0FBQ0MsS0FBSyxDQUFDUCxJQUFJUSxXQUFXO1lBQzNDLE1BQU1DLFlBQVlKLFVBQVVLLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRVYsSUFBSVcsT0FBTyxDQUFDbEIsTUFBTSxDQUFDbUIsTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQztZQUVuRixNQUFNVixPQUFPLE1BQU1ILElBQUlXLE9BQU8sQ0FBQ0csUUFBUSxDQUFDO2dCQUN0Q0MsSUFBSWQsTUFBTWMsRUFBRTtnQkFDWlgsWUFBWUgsTUFBTUcsVUFBVTtnQkFDNUJZLE9BQU9QLFlBQVksSUFBSUwsV0FBV1gsTUFBTSxDQUFDd0IsSUFBSSxDQUFDRCxLQUFLO2dCQUNuRGhCO1lBQ0Y7WUFFQSxJQUFJRyxRQUFTLENBQUEsQ0FBQ0MsV0FBV1gsTUFBTSxDQUFDd0IsSUFBSSxDQUFDQyxNQUFNLElBQUlmLEtBQUtnQixTQUFTLEFBQUQsR0FBSTtnQkFDOURoQixLQUFLQyxVQUFVLEdBQUdBLFdBQVdYLE1BQU0sQ0FBQzJCLElBQUk7Z0JBQ3hDakIsS0FBS2tCLFNBQVMsR0FBRztnQkFDakJuQixLQUFLLE1BQU1DO1lBQ2IsT0FBTztnQkFDTEQsS0FBSyxNQUFNO1lBQ2I7UUFDRixFQUFFLE9BQU9vQixLQUFLO1lBQ1pwQixLQUFLLE1BQU07UUFDYjtJQUNGO0FBQ0YifQ==