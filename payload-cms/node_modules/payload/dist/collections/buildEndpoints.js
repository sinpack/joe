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
const _forgotPassword = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/forgotPassword"));
const _init = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/init"));
const _login = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/login"));
const _logout = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/logout"));
const _me = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/me"));
const _refresh = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/refresh"));
const _registerFirstUser = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/registerFirstUser"));
const _resetPassword = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/resetPassword"));
const _unlock = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/unlock"));
const _verifyEmail = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/verifyEmail"));
const _count = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/count"));
const _create = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/create"));
const _delete = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/delete"));
const _deleteByID = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/deleteByID"));
const _docAccess = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/docAccess"));
const _find = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/find"));
const _findByID = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/findByID"));
const _findVersionByID = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/findVersionByID"));
const _findVersions = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/findVersions"));
const _restoreVersion = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/restoreVersion"));
const _update = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/update"));
const _updateByID = /*#__PURE__*/ _interop_require_wildcard(require("./requestHandlers/updateByID"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const buildEndpoints = (collection)=>{
    if (!collection.endpoints) return [];
    const endpoints = [
        ...collection.endpoints
    ];
    if (collection.auth) {
        if (!collection.auth.disableLocalStrategy) {
            if (collection.auth.verify) {
                endpoints.push({
                    handler: _verifyEmail.default,
                    method: 'post',
                    path: '/verify/:token'
                });
            }
            if (collection.auth.maxLoginAttempts > 0) {
                endpoints.push({
                    handler: _unlock.default,
                    method: 'post',
                    path: '/unlock'
                });
            }
            endpoints.push({
                handler: _login.default,
                method: 'post',
                path: '/login'
            }, {
                handler: _registerFirstUser.default,
                method: 'post',
                path: '/first-register'
            }, {
                handler: _forgotPassword.default,
                method: 'post',
                path: '/forgot-password'
            }, {
                handler: _resetPassword.default,
                method: 'post',
                path: '/reset-password'
            });
        }
        endpoints.push({
            handler: _init.default,
            method: 'get',
            path: '/init'
        }, {
            handler: _me.default,
            method: 'get',
            path: '/me'
        }, {
            handler: _logout.default,
            method: 'post',
            path: '/logout'
        }, {
            handler: _refresh.default,
            method: 'post',
            path: '/refresh-token'
        });
    }
    if (collection.versions) {
        endpoints.push({
            handler: _findVersions.default,
            method: 'get',
            path: '/versions'
        }, {
            handler: _findVersionByID.default,
            method: 'get',
            path: '/versions/:id'
        }, {
            handler: _restoreVersion.default,
            method: 'post',
            path: '/versions/:id'
        });
    }
    endpoints.push({
        handler: _find.default,
        method: 'get',
        path: '/'
    }, {
        handler: _create.default,
        method: 'post',
        path: '/'
    }, {
        handler: _count.default,
        method: 'get',
        path: '/count'
    }, {
        handler: _docAccess.default,
        method: 'get',
        path: '/access/:id'
    }, {
        handler: _docAccess.default,
        method: 'post',
        path: '/access/:id'
    }, {
        handler: _docAccess.default,
        method: 'post',
        path: '/access'
    }, {
        handler: _updateByID.deprecatedUpdate,
        method: 'put',
        path: '/:id'
    }, {
        handler: _update.default,
        method: 'patch',
        path: '/'
    }, {
        handler: _updateByID.default,
        method: 'patch',
        path: '/:id'
    }, {
        handler: _findByID.default,
        method: 'get',
        path: '/:id'
    }, {
        handler: _deleteByID.default,
        method: 'delete',
        path: '/:id'
    }, {
        handler: _delete.default,
        method: 'delete',
        path: '/'
    });
    return endpoints;
};
const _default = buildEndpoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xsZWN0aW9ucy9idWlsZEVuZHBvaW50cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEVuZHBvaW50IH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBmb3Jnb3RQYXNzd29yZEhhbmRsZXIgZnJvbSAnLi4vYXV0aC9yZXF1ZXN0SGFuZGxlcnMvZm9yZ290UGFzc3dvcmQnXG5pbXBvcnQgaW5pdEhhbmRsZXIgZnJvbSAnLi4vYXV0aC9yZXF1ZXN0SGFuZGxlcnMvaW5pdCdcbmltcG9ydCBsb2dpbkhhbmRsZXIgZnJvbSAnLi4vYXV0aC9yZXF1ZXN0SGFuZGxlcnMvbG9naW4nXG5pbXBvcnQgbG9nb3V0SGFuZGxlciBmcm9tICcuLi9hdXRoL3JlcXVlc3RIYW5kbGVycy9sb2dvdXQnXG5pbXBvcnQgbWVIYW5kbGVyIGZyb20gJy4uL2F1dGgvcmVxdWVzdEhhbmRsZXJzL21lJ1xuaW1wb3J0IHJlZnJlc2hIYW5kbGVyIGZyb20gJy4uL2F1dGgvcmVxdWVzdEhhbmRsZXJzL3JlZnJlc2gnXG5pbXBvcnQgcmVnaXN0ZXJGaXJzdFVzZXJIYW5kbGVyIGZyb20gJy4uL2F1dGgvcmVxdWVzdEhhbmRsZXJzL3JlZ2lzdGVyRmlyc3RVc2VyJ1xuaW1wb3J0IHJlc2V0UGFzc3dvcmQgZnJvbSAnLi4vYXV0aC9yZXF1ZXN0SGFuZGxlcnMvcmVzZXRQYXNzd29yZCdcbmltcG9ydCB1bmxvY2sgZnJvbSAnLi4vYXV0aC9yZXF1ZXN0SGFuZGxlcnMvdW5sb2NrJ1xuaW1wb3J0IHZlcmlmeUVtYWlsIGZyb20gJy4uL2F1dGgvcmVxdWVzdEhhbmRsZXJzL3ZlcmlmeUVtYWlsJ1xuaW1wb3J0IGNvdW50IGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL2NvdW50J1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9jcmVhdGUnXG5pbXBvcnQgZGVsZXRlSGFuZGxlciBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9kZWxldGUnXG5pbXBvcnQgZGVsZXRlQnlJRCBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9kZWxldGVCeUlEJ1xuaW1wb3J0IGRvY0FjY2Vzc1JlcXVlc3RIYW5kbGVyIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL2RvY0FjY2VzcydcbmltcG9ydCBmaW5kIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL2ZpbmQnXG5pbXBvcnQgZmluZEJ5SUQgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZEJ5SUQnXG5pbXBvcnQgZmluZFZlcnNpb25CeUlEIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL2ZpbmRWZXJzaW9uQnlJRCdcbmltcG9ydCBmaW5kVmVyc2lvbnMgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25zJ1xuaW1wb3J0IHJlc3RvcmVWZXJzaW9uIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL3Jlc3RvcmVWZXJzaW9uJ1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy91cGRhdGUnXG5pbXBvcnQgdXBkYXRlQnlJRCwgeyBkZXByZWNhdGVkVXBkYXRlIH0gZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlQnlJRCdcblxuY29uc3QgYnVpbGRFbmRwb2ludHMgPSAoY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyk6IEVuZHBvaW50W10gPT4ge1xuICBpZiAoIWNvbGxlY3Rpb24uZW5kcG9pbnRzKSByZXR1cm4gW11cbiAgY29uc3QgZW5kcG9pbnRzID0gWy4uLmNvbGxlY3Rpb24uZW5kcG9pbnRzXVxuXG4gIGlmIChjb2xsZWN0aW9uLmF1dGgpIHtcbiAgICBpZiAoIWNvbGxlY3Rpb24uYXV0aC5kaXNhYmxlTG9jYWxTdHJhdGVneSkge1xuICAgICAgaWYgKGNvbGxlY3Rpb24uYXV0aC52ZXJpZnkpIHtcbiAgICAgICAgZW5kcG9pbnRzLnB1c2goe1xuICAgICAgICAgIGhhbmRsZXI6IHZlcmlmeUVtYWlsLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIHBhdGg6ICcvdmVyaWZ5Lzp0b2tlbicsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsZWN0aW9uLmF1dGgubWF4TG9naW5BdHRlbXB0cyA+IDApIHtcbiAgICAgICAgZW5kcG9pbnRzLnB1c2goe1xuICAgICAgICAgIGhhbmRsZXI6IHVubG9jayxcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICBwYXRoOiAnL3VubG9jaycsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGVuZHBvaW50cy5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgaGFuZGxlcjogbG9naW5IYW5kbGVyLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIHBhdGg6ICcvbG9naW4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGFuZGxlcjogcmVnaXN0ZXJGaXJzdFVzZXJIYW5kbGVyLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIHBhdGg6ICcvZmlyc3QtcmVnaXN0ZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGFuZGxlcjogZm9yZ290UGFzc3dvcmRIYW5kbGVyLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIHBhdGg6ICcvZm9yZ290LXBhc3N3b3JkJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhhbmRsZXI6IHJlc2V0UGFzc3dvcmQsXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgcGF0aDogJy9yZXNldC1wYXNzd29yZCcsXG4gICAgICAgIH0sXG4gICAgICApXG4gICAgfVxuXG4gICAgZW5kcG9pbnRzLnB1c2goXG4gICAgICB7XG4gICAgICAgIGhhbmRsZXI6IGluaXRIYW5kbGVyLFxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBwYXRoOiAnL2luaXQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGFuZGxlcjogbWVIYW5kbGVyLFxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBwYXRoOiAnL21lJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhhbmRsZXI6IGxvZ291dEhhbmRsZXIsXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBwYXRoOiAnL2xvZ291dCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoYW5kbGVyOiByZWZyZXNoSGFuZGxlcixcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHBhdGg6ICcvcmVmcmVzaC10b2tlbicsXG4gICAgICB9LFxuICAgIClcbiAgfVxuXG4gIGlmIChjb2xsZWN0aW9uLnZlcnNpb25zKSB7XG4gICAgZW5kcG9pbnRzLnB1c2goXG4gICAgICB7XG4gICAgICAgIGhhbmRsZXI6IGZpbmRWZXJzaW9ucyxcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgcGF0aDogJy92ZXJzaW9ucycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoYW5kbGVyOiBmaW5kVmVyc2lvbkJ5SUQsXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIHBhdGg6ICcvdmVyc2lvbnMvOmlkJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhhbmRsZXI6IHJlc3RvcmVWZXJzaW9uLFxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgcGF0aDogJy92ZXJzaW9ucy86aWQnLFxuICAgICAgfSxcbiAgICApXG4gIH1cblxuICBlbmRwb2ludHMucHVzaChcbiAgICB7XG4gICAgICBoYW5kbGVyOiBmaW5kLFxuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIHBhdGg6ICcvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhhbmRsZXI6IGNyZWF0ZSxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgcGF0aDogJy8nLFxuICAgIH0sXG4gICAge1xuICAgICAgaGFuZGxlcjogY291bnQsXG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgcGF0aDogJy9jb3VudCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBoYW5kbGVyOiBkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlcixcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBwYXRoOiAnL2FjY2Vzcy86aWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgaGFuZGxlcjogZG9jQWNjZXNzUmVxdWVzdEhhbmRsZXIsXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHBhdGg6ICcvYWNjZXNzLzppZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBoYW5kbGVyOiBkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlcixcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgcGF0aDogJy9hY2Nlc3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgaGFuZGxlcjogZGVwcmVjYXRlZFVwZGF0ZSxcbiAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICBwYXRoOiAnLzppZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBoYW5kbGVyOiB1cGRhdGUsXG4gICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICBwYXRoOiAnLycsXG4gICAgfSxcbiAgICB7XG4gICAgICBoYW5kbGVyOiB1cGRhdGVCeUlELFxuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgcGF0aDogJy86aWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgaGFuZGxlcjogZmluZEJ5SUQsXG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgcGF0aDogJy86aWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgaGFuZGxlcjogZGVsZXRlQnlJRCxcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICBwYXRoOiAnLzppZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBoYW5kbGVyOiBkZWxldGVIYW5kbGVyLFxuICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgIHBhdGg6ICcvJyxcbiAgICB9LFxuICApXG5cbiAgcmV0dXJuIGVuZHBvaW50c1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZEVuZHBvaW50c1xuIl0sIm5hbWVzIjpbImJ1aWxkRW5kcG9pbnRzIiwiY29sbGVjdGlvbiIsImVuZHBvaW50cyIsImF1dGgiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsInZlcmlmeSIsInB1c2giLCJoYW5kbGVyIiwidmVyaWZ5RW1haWwiLCJtZXRob2QiLCJwYXRoIiwibWF4TG9naW5BdHRlbXB0cyIsInVubG9jayIsImxvZ2luSGFuZGxlciIsInJlZ2lzdGVyRmlyc3RVc2VySGFuZGxlciIsImZvcmdvdFBhc3N3b3JkSGFuZGxlciIsInJlc2V0UGFzc3dvcmQiLCJpbml0SGFuZGxlciIsIm1lSGFuZGxlciIsImxvZ291dEhhbmRsZXIiLCJyZWZyZXNoSGFuZGxlciIsInZlcnNpb25zIiwiZmluZFZlcnNpb25zIiwiZmluZFZlcnNpb25CeUlEIiwicmVzdG9yZVZlcnNpb24iLCJmaW5kIiwiY3JlYXRlIiwiY291bnQiLCJkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlciIsImRlcHJlY2F0ZWRVcGRhdGUiLCJ1cGRhdGUiLCJ1cGRhdGVCeUlEIiwiZmluZEJ5SUQiLCJkZWxldGVCeUlEIiwiZGVsZXRlSGFuZGxlciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBc0xBOzs7ZUFBQTs7O3VFQW5Ma0M7NkRBQ1Y7OERBQ0M7K0RBQ0M7MkRBQ0o7Z0VBQ0s7MEVBQ1U7c0VBQ1g7K0RBQ1A7b0VBQ0s7OERBQ047K0RBQ0M7K0RBQ087bUVBQ0g7a0VBQ2E7NkRBQ25CO2lFQUNJO3dFQUNPO3FFQUNIO3VFQUNFOytEQUNSO29FQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsTUFBTUEsaUJBQWlCLENBQUNDO0lBQ3RCLElBQUksQ0FBQ0EsV0FBV0MsU0FBUyxFQUFFLE9BQU8sRUFBRTtJQUNwQyxNQUFNQSxZQUFZO1dBQUlELFdBQVdDLFNBQVM7S0FBQztJQUUzQyxJQUFJRCxXQUFXRSxJQUFJLEVBQUU7UUFDbkIsSUFBSSxDQUFDRixXQUFXRSxJQUFJLENBQUNDLG9CQUFvQixFQUFFO1lBQ3pDLElBQUlILFdBQVdFLElBQUksQ0FBQ0UsTUFBTSxFQUFFO2dCQUMxQkgsVUFBVUksSUFBSSxDQUFDO29CQUNiQyxTQUFTQyxvQkFBVztvQkFDcEJDLFFBQVE7b0JBQ1JDLE1BQU07Z0JBQ1I7WUFDRjtZQUVBLElBQUlULFdBQVdFLElBQUksQ0FBQ1EsZ0JBQWdCLEdBQUcsR0FBRztnQkFDeENULFVBQVVJLElBQUksQ0FBQztvQkFDYkMsU0FBU0ssZUFBTTtvQkFDZkgsUUFBUTtvQkFDUkMsTUFBTTtnQkFDUjtZQUNGO1lBRUFSLFVBQVVJLElBQUksQ0FDWjtnQkFDRUMsU0FBU00sY0FBWTtnQkFDckJKLFFBQVE7Z0JBQ1JDLE1BQU07WUFDUixHQUNBO2dCQUNFSCxTQUFTTywwQkFBd0I7Z0JBQ2pDTCxRQUFRO2dCQUNSQyxNQUFNO1lBQ1IsR0FDQTtnQkFDRUgsU0FBU1EsdUJBQXFCO2dCQUM5Qk4sUUFBUTtnQkFDUkMsTUFBTTtZQUNSLEdBQ0E7Z0JBQ0VILFNBQVNTLHNCQUFhO2dCQUN0QlAsUUFBUTtnQkFDUkMsTUFBTTtZQUNSO1FBRUo7UUFFQVIsVUFBVUksSUFBSSxDQUNaO1lBQ0VDLFNBQVNVLGFBQVc7WUFDcEJSLFFBQVE7WUFDUkMsTUFBTTtRQUNSLEdBQ0E7WUFDRUgsU0FBU1csV0FBUztZQUNsQlQsUUFBUTtZQUNSQyxNQUFNO1FBQ1IsR0FDQTtZQUNFSCxTQUFTWSxlQUFhO1lBQ3RCVixRQUFRO1lBQ1JDLE1BQU07UUFDUixHQUNBO1lBQ0VILFNBQVNhLGdCQUFjO1lBQ3ZCWCxRQUFRO1lBQ1JDLE1BQU07UUFDUjtJQUVKO0lBRUEsSUFBSVQsV0FBV29CLFFBQVEsRUFBRTtRQUN2Qm5CLFVBQVVJLElBQUksQ0FDWjtZQUNFQyxTQUFTZSxxQkFBWTtZQUNyQmIsUUFBUTtZQUNSQyxNQUFNO1FBQ1IsR0FDQTtZQUNFSCxTQUFTZ0Isd0JBQWU7WUFDeEJkLFFBQVE7WUFDUkMsTUFBTTtRQUNSLEdBQ0E7WUFDRUgsU0FBU2lCLHVCQUFjO1lBQ3ZCZixRQUFRO1lBQ1JDLE1BQU07UUFDUjtJQUVKO0lBRUFSLFVBQVVJLElBQUksQ0FDWjtRQUNFQyxTQUFTa0IsYUFBSTtRQUNiaEIsUUFBUTtRQUNSQyxNQUFNO0lBQ1IsR0FDQTtRQUNFSCxTQUFTbUIsZUFBTTtRQUNmakIsUUFBUTtRQUNSQyxNQUFNO0lBQ1IsR0FDQTtRQUNFSCxTQUFTb0IsY0FBSztRQUNkbEIsUUFBUTtRQUNSQyxNQUFNO0lBQ1IsR0FDQTtRQUNFSCxTQUFTcUIsa0JBQXVCO1FBQ2hDbkIsUUFBUTtRQUNSQyxNQUFNO0lBQ1IsR0FDQTtRQUNFSCxTQUFTcUIsa0JBQXVCO1FBQ2hDbkIsUUFBUTtRQUNSQyxNQUFNO0lBQ1IsR0FDQTtRQUNFSCxTQUFTcUIsa0JBQXVCO1FBQ2hDbkIsUUFBUTtRQUNSQyxNQUFNO0lBQ1IsR0FDQTtRQUNFSCxTQUFTc0IsNEJBQWdCO1FBQ3pCcEIsUUFBUTtRQUNSQyxNQUFNO0lBQ1IsR0FDQTtRQUNFSCxTQUFTdUIsZUFBTTtRQUNmckIsUUFBUTtRQUNSQyxNQUFNO0lBQ1IsR0FDQTtRQUNFSCxTQUFTd0IsbUJBQVU7UUFDbkJ0QixRQUFRO1FBQ1JDLE1BQU07SUFDUixHQUNBO1FBQ0VILFNBQVN5QixpQkFBUTtRQUNqQnZCLFFBQVE7UUFDUkMsTUFBTTtJQUNSLEdBQ0E7UUFDRUgsU0FBUzBCLG1CQUFVO1FBQ25CeEIsUUFBUTtRQUNSQyxNQUFNO0lBQ1IsR0FDQTtRQUNFSCxTQUFTMkIsZUFBYTtRQUN0QnpCLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBR0YsT0FBT1I7QUFDVDtNQUVBLFdBQWVGIn0=