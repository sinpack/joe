"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    SearchParamsProvider: function() {
        return SearchParamsProvider;
    },
    useSearchParams: function() {
        return useSearchParams;
    }
});
const _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactrouterdom = require("react-router-dom");
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
const Context = /*#__PURE__*/ (0, _react.createContext)({});
const SearchParamsProvider = ({ children })=>{
    const location = (0, _reactrouterdom.useLocation)();
    const params = _qs.default.parse(location.search, {
        depth: 10,
        ignoreQueryPrefix: true
    });
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: params
    }, children);
};
const useSearchParams = ()=>(0, _react.useContext)(Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9TZWFyY2hQYXJhbXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyBmcm9tICdxcydcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxuXG5leHBvcnQgY29uc3QgU2VhcmNoUGFyYW1zUHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gIGNvbnN0IHBhcmFtcyA9IHFzLnBhcnNlKGxvY2F0aW9uLnNlYXJjaCwgeyBkZXB0aDogMTAsIGlnbm9yZVF1ZXJ5UHJlZml4OiB0cnVlIH0pXG5cbiAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwYXJhbXN9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTZWFyY2hQYXJhbXMgPSAoKTogcXMuUGFyc2VkUXMgPT4gdXNlQ29udGV4dChDb250ZXh0KVxuIl0sIm5hbWVzIjpbIlNlYXJjaFBhcmFtc1Byb3ZpZGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwidXNlTG9jYXRpb24iLCJwYXJhbXMiLCJxcyIsInBhcnNlIiwic2VhcmNoIiwiZGVwdGgiLCJpZ25vcmVRdWVyeVByZWZpeCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDb250ZXh0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFNYUEsb0JBQW9CO2VBQXBCQTs7SUFRQUMsZUFBZTtlQUFmQTs7OzJEQWRFOytEQUNrQztnQ0FDckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLE1BQU1DLHdCQUFVQyxJQUFBQSxvQkFBYSxFQUFDLENBQUM7QUFFeEIsTUFBTUgsdUJBQWlFLENBQUMsRUFBRUksUUFBUSxFQUFFO0lBQ3pGLE1BQU1DLFdBQVdDLElBQUFBLDJCQUFXO0lBRTVCLE1BQU1DLFNBQVNDLFdBQUUsQ0FBQ0MsS0FBSyxDQUFDSixTQUFTSyxNQUFNLEVBQUU7UUFBRUMsT0FBTztRQUFJQyxtQkFBbUI7SUFBSztJQUU5RSxxQkFBTyw2QkFBQ1YsUUFBUVcsUUFBUTtRQUFDQyxPQUFPUDtPQUFTSDtBQUMzQztBQUVPLE1BQU1ILGtCQUFrQixJQUFtQmMsSUFBQUEsaUJBQVUsRUFBQ2IifQ==