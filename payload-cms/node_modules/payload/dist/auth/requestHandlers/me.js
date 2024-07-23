"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return meHandler;
    }
});
const _me = /*#__PURE__*/ _interop_require_default(require("../operations/me"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function meHandler(req, res, next) {
    try {
        const response = await (0, _me.default)({
            collection: req.collection,
            req
        });
        return res.status(200).json(response);
    } catch (err) {
        return next(err);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9tZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcblxuaW1wb3J0IG1lIGZyb20gJy4uL29wZXJhdGlvbnMvbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1lSGFuZGxlcihcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG1lKHtcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgcmVxLFxuICAgIH0pXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmV4dChlcnIpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtZUhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVzcG9uc2UiLCJtZSIsImNvbGxlY3Rpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQU1BOzs7ZUFBOEJBOzs7MkRBRmY7Ozs7OztBQUVBLGVBQWVBLFVBQzVCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtJQUVsQixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxJQUFBQSxXQUFFLEVBQUM7WUFDeEJDLFlBQVlMLElBQUlLLFVBQVU7WUFDMUJMO1FBQ0Y7UUFDQSxPQUFPQyxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSjtJQUM5QixFQUFFLE9BQU9LLEtBQUs7UUFDWixPQUFPTixLQUFLTTtJQUNkO0FBQ0YifQ==