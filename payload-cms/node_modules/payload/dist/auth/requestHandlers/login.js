"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return loginHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _login = /*#__PURE__*/ _interop_require_default(require("../operations/login"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function loginHandler(req, res, next) {
    try {
        const result = await (0, _login.default)({
            collection: req.collection,
            data: req.body,
            depth: parseInt(String(req.query.depth), 10),
            req,
            res
        });
        res.status(_httpstatus.default.OK).json({
            exp: result.exp,
            message: 'Auth Passed',
            token: result.token,
            user: result.user
        });
    } catch (error) {
        next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9sb2dpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFJlc3VsdCB9IGZyb20gJy4uL29wZXJhdGlvbnMvbG9naW4nXG5cbmltcG9ydCBsb2dpbiBmcm9tICcuLi9vcGVyYXRpb25zL2xvZ2luJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dpbkhhbmRsZXIoXG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbik6IFByb21pc2U8UmVzcG9uc2U8UmVzdWx0ICYgeyBtZXNzYWdlOiBzdHJpbmcgfT4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbG9naW4oe1xuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICBkYXRhOiByZXEuYm9keSxcbiAgICAgIGRlcHRoOiBwYXJzZUludChTdHJpbmcocmVxLnF1ZXJ5LmRlcHRoKSwgMTApLFxuICAgICAgcmVxLFxuICAgICAgcmVzLFxuICAgIH0pXG5cbiAgICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24oe1xuICAgICAgZXhwOiByZXN1bHQuZXhwLFxuICAgICAgbWVzc2FnZTogJ0F1dGggUGFzc2VkJyxcbiAgICAgIHRva2VuOiByZXN1bHQudG9rZW4sXG4gICAgICB1c2VyOiByZXN1bHQudXNlcixcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG5leHQoZXJyb3IpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJsb2dpbkhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVzdWx0IiwibG9naW4iLCJjb2xsZWN0aW9uIiwiZGF0YSIsImJvZHkiLCJkZXB0aCIsInBhcnNlSW50IiwiU3RyaW5nIiwicXVlcnkiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwiZXhwIiwibWVzc2FnZSIsInRva2VuIiwidXNlciIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVNBOzs7ZUFBOEJBOzs7bUVBUFA7OERBS0w7Ozs7OztBQUVILGVBQWVBLGFBQzVCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtJQUVsQixJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNQyxJQUFBQSxjQUFLLEVBQUM7WUFDekJDLFlBQVlMLElBQUlLLFVBQVU7WUFDMUJDLE1BQU1OLElBQUlPLElBQUk7WUFDZEMsT0FBT0MsU0FBU0MsT0FBT1YsSUFBSVcsS0FBSyxDQUFDSCxLQUFLLEdBQUc7WUFDekNSO1lBQ0FDO1FBQ0Y7UUFFQUEsSUFBSVcsTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQUVDLElBQUksQ0FBQztZQUM3QkMsS0FBS2IsT0FBT2EsR0FBRztZQUNmQyxTQUFTO1lBQ1RDLE9BQU9mLE9BQU9lLEtBQUs7WUFDbkJDLE1BQU1oQixPQUFPZ0IsSUFBSTtRQUNuQjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkbEIsS0FBS2tCO0lBQ1A7QUFDRiJ9