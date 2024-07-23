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
const _docAccess = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/docAccess"));
const _findOne = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/findOne"));
const _findVersionByID = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/findVersionByID"));
const _findVersions = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/findVersions"));
const _restoreVersion = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/restoreVersion"));
const _update = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/update"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const buildEndpoints = (global)=>{
    if (!global.endpoints) return [];
    const endpoints = [
        ...global.endpoints
    ];
    if (global.versions) {
        endpoints.push({
            handler: (0, _findVersions.default)(global),
            method: 'get',
            path: '/versions'
        }, {
            handler: (0, _findVersionByID.default)(global),
            method: 'get',
            path: '/versions/:id'
        }, {
            handler: (0, _restoreVersion.default)(global),
            method: 'post',
            path: '/versions/:id'
        });
    }
    endpoints.push({
        handler: async (req, res, next)=>(0, _docAccess.default)(req, res, next, global),
        method: 'get',
        path: '/access'
    }, {
        handler: async (req, res, next)=>(0, _docAccess.default)(req, res, next, global),
        method: 'post',
        path: '/access'
    }, {
        handler: (0, _findOne.default)(global),
        method: 'get',
        path: '/'
    }, {
        handler: (0, _update.default)(global),
        method: 'post',
        path: '/'
    });
    return endpoints;
};
const _default = buildEndpoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzL2J1aWxkRW5kcG9pbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRW5kcG9pbnQgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgZG9jQWNjZXNzUmVxdWVzdEhhbmRsZXIgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZG9jQWNjZXNzJ1xuaW1wb3J0IGZpbmRPbmUgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZE9uZSdcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SUQgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25CeUlEJ1xuaW1wb3J0IGZpbmRWZXJzaW9ucyBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9maW5kVmVyc2lvbnMnXG5pbXBvcnQgcmVzdG9yZVZlcnNpb24gZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvcmVzdG9yZVZlcnNpb24nXG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL3VwZGF0ZSdcblxuY29uc3QgYnVpbGRFbmRwb2ludHMgPSAoZ2xvYmFsOiBTYW5pdGl6ZWRHbG9iYWxDb25maWcpOiBFbmRwb2ludFtdID0+IHtcbiAgaWYgKCFnbG9iYWwuZW5kcG9pbnRzKSByZXR1cm4gW11cbiAgY29uc3QgZW5kcG9pbnRzID0gWy4uLmdsb2JhbC5lbmRwb2ludHNdXG5cbiAgaWYgKGdsb2JhbC52ZXJzaW9ucykge1xuICAgIGVuZHBvaW50cy5wdXNoKFxuICAgICAge1xuICAgICAgICBoYW5kbGVyOiBmaW5kVmVyc2lvbnMoZ2xvYmFsKSxcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgcGF0aDogJy92ZXJzaW9ucycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoYW5kbGVyOiBmaW5kVmVyc2lvbkJ5SUQoZ2xvYmFsKSxcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgcGF0aDogJy92ZXJzaW9ucy86aWQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGFuZGxlcjogcmVzdG9yZVZlcnNpb24oZ2xvYmFsKSxcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHBhdGg6ICcvdmVyc2lvbnMvOmlkJyxcbiAgICAgIH0sXG4gICAgKVxuICB9XG5cbiAgZW5kcG9pbnRzLnB1c2goXG4gICAge1xuICAgICAgaGFuZGxlcjogYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiBkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlcihyZXEsIHJlcywgbmV4dCwgZ2xvYmFsKSxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBwYXRoOiAnL2FjY2VzcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBoYW5kbGVyOiBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IGRvY0FjY2Vzc1JlcXVlc3RIYW5kbGVyKHJlcSwgcmVzLCBuZXh0LCBnbG9iYWwpLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBwYXRoOiAnL2FjY2VzcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBoYW5kbGVyOiBmaW5kT25lKGdsb2JhbCksXG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgcGF0aDogJy8nLFxuICAgIH0sXG4gICAge1xuICAgICAgaGFuZGxlcjogdXBkYXRlKGdsb2JhbCksXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHBhdGg6ICcvJyxcbiAgICB9LFxuICApXG5cbiAgcmV0dXJuIGVuZHBvaW50c1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZEVuZHBvaW50c1xuIl0sIm5hbWVzIjpbImJ1aWxkRW5kcG9pbnRzIiwiZ2xvYmFsIiwiZW5kcG9pbnRzIiwidmVyc2lvbnMiLCJwdXNoIiwiaGFuZGxlciIsImZpbmRWZXJzaW9ucyIsIm1ldGhvZCIsInBhdGgiLCJmaW5kVmVyc2lvbkJ5SUQiLCJyZXN0b3JlVmVyc2lvbiIsInJlcSIsInJlcyIsIm5leHQiLCJkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlciIsImZpbmRPbmUiLCJ1cGRhdGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTREQTs7O2VBQUE7OztrRUF6RG9DO2dFQUNoQjt3RUFDUTtxRUFDSDt1RUFDRTsrREFDUjs7Ozs7O0FBRW5CLE1BQU1BLGlCQUFpQixDQUFDQztJQUN0QixJQUFJLENBQUNBLE9BQU9DLFNBQVMsRUFBRSxPQUFPLEVBQUU7SUFDaEMsTUFBTUEsWUFBWTtXQUFJRCxPQUFPQyxTQUFTO0tBQUM7SUFFdkMsSUFBSUQsT0FBT0UsUUFBUSxFQUFFO1FBQ25CRCxVQUFVRSxJQUFJLENBQ1o7WUFDRUMsU0FBU0MsSUFBQUEscUJBQVksRUFBQ0w7WUFDdEJNLFFBQVE7WUFDUkMsTUFBTTtRQUNSLEdBQ0E7WUFDRUgsU0FBU0ksSUFBQUEsd0JBQWUsRUFBQ1I7WUFDekJNLFFBQVE7WUFDUkMsTUFBTTtRQUNSLEdBQ0E7WUFDRUgsU0FBU0ssSUFBQUEsdUJBQWMsRUFBQ1Q7WUFDeEJNLFFBQVE7WUFDUkMsTUFBTTtRQUNSO0lBRUo7SUFFQU4sVUFBVUUsSUFBSSxDQUNaO1FBQ0VDLFNBQVMsT0FBT00sS0FBS0MsS0FBS0MsT0FBU0MsSUFBQUEsa0JBQXVCLEVBQUNILEtBQUtDLEtBQUtDLE1BQU1aO1FBQzNFTSxRQUFRO1FBQ1JDLE1BQU07SUFDUixHQUNBO1FBQ0VILFNBQVMsT0FBT00sS0FBS0MsS0FBS0MsT0FBU0MsSUFBQUEsa0JBQXVCLEVBQUNILEtBQUtDLEtBQUtDLE1BQU1aO1FBQzNFTSxRQUFRO1FBQ1JDLE1BQU07SUFDUixHQUNBO1FBQ0VILFNBQVNVLElBQUFBLGdCQUFPLEVBQUNkO1FBQ2pCTSxRQUFRO1FBQ1JDLE1BQU07SUFDUixHQUNBO1FBQ0VILFNBQVNXLElBQUFBLGVBQU0sRUFBQ2Y7UUFDaEJNLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBR0YsT0FBT047QUFDVDtNQUVBLFdBQWVGIn0=