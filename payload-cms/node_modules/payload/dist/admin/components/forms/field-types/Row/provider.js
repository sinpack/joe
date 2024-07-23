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
    RowProvider: function() {
        return RowProvider;
    },
    default: function() {
        return _default;
    },
    useRow: function() {
        return useRow;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
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
const Context = /*#__PURE__*/ (0, _react.createContext)(false);
const RowProvider = ({ children, withinRow = true })=>{
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: withinRow
    }, children);
};
const useRow = ()=>(0, _react.useContext)(Context);
const _default = Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1Jvdy9wcm92aWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoZmFsc2UpXG5cbmV4cG9ydCBjb25zdCBSb3dQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTsgd2l0aGluUm93PzogYm9vbGVhbiB9PiA9ICh7XG4gIGNoaWxkcmVuLFxuICB3aXRoaW5Sb3cgPSB0cnVlLFxufSkgPT4ge1xuICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dpdGhpblJvd30+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVJvdyA9ICgpOiBib29sZWFuID0+IHVzZUNvbnRleHQoQ29udGV4dClcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFxuIl0sIm5hbWVzIjpbIlJvd1Byb3ZpZGVyIiwidXNlUm93IiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsIndpdGhpblJvdyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDb250ZXh0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBSWFBLFdBQVc7ZUFBWEE7O0lBU2IsT0FBc0I7ZUFBdEI7O0lBRmFDLE1BQU07ZUFBTkE7OzsrREFYb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxNQUFNQyx3QkFBVUMsSUFBQUEsb0JBQWEsRUFBQztBQUV2QixNQUFNSCxjQUE2RSxDQUFDLEVBQ3pGSSxRQUFRLEVBQ1JDLFlBQVksSUFBSSxFQUNqQjtJQUNDLHFCQUFPLDZCQUFDSCxRQUFRSSxRQUFRO1FBQUNDLE9BQU9GO09BQVlEO0FBQzlDO0FBRU8sTUFBTUgsU0FBUyxJQUFlTyxJQUFBQSxpQkFBVSxFQUFDTjtNQUVoRCxXQUFlQSJ9