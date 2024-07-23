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
    GroupProvider: function() {
        return GroupProvider;
    },
    default: function() {
        return _default;
    },
    useGroup: function() {
        return useGroup;
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
const GroupProvider = ({ children, withinGroup = true })=>{
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: withinGroup
    }, children);
};
const useGroup = ()=>(0, _react.useContext)(Context);
const _default = Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0dyb3VwL3Byb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChmYWxzZSlcblxuZXhwb3J0IGNvbnN0IEdyb3VwUHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7IHdpdGhpbkdyb3VwPzogYm9vbGVhbiB9PiA9ICh7XG4gIGNoaWxkcmVuLFxuICB3aXRoaW5Hcm91cCA9IHRydWUsXG59KSA9PiB7XG4gIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17d2l0aGluR3JvdXB9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+XG59XG5cbmV4cG9ydCBjb25zdCB1c2VHcm91cCA9ICgpOiBib29sZWFuID0+IHVzZUNvbnRleHQoQ29udGV4dClcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFxuIl0sIm5hbWVzIjpbIkdyb3VwUHJvdmlkZXIiLCJ1c2VHcm91cCIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJ3aXRoaW5Hcm91cCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDb250ZXh0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBSWFBLGFBQWE7ZUFBYkE7O0lBU2IsT0FBc0I7ZUFBdEI7O0lBRmFDLFFBQVE7ZUFBUkE7OzsrREFYb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxNQUFNQyx3QkFBVUMsSUFBQUEsb0JBQWEsRUFBQztBQUV2QixNQUFNSCxnQkFBaUYsQ0FBQyxFQUM3RkksUUFBUSxFQUNSQyxjQUFjLElBQUksRUFDbkI7SUFDQyxxQkFBTyw2QkFBQ0gsUUFBUUksUUFBUTtRQUFDQyxPQUFPRjtPQUFjRDtBQUNoRDtBQUVPLE1BQU1ILFdBQVcsSUFBZU8sSUFBQUEsaUJBQVUsRUFBQ047TUFFbEQsV0FBZUEifQ==