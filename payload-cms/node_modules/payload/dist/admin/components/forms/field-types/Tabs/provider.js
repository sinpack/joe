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
    TabsProvider: function() {
        return TabsProvider;
    },
    default: function() {
        return _default;
    },
    useTabs: function() {
        return useTabs;
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
const TabsProvider = ({ children, withinTab = true })=>{
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: withinTab
    }, children);
};
const useTabs = ()=>(0, _react.useContext)(Context);
const _default = Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RhYnMvcHJvdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGZhbHNlKVxuXG5leHBvcnQgY29uc3QgVGFic1Byb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlOyB3aXRoaW5UYWI/OiBib29sZWFuIH0+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHdpdGhpblRhYiA9IHRydWUsXG59KSA9PiB7XG4gIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17d2l0aGluVGFifT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFicyA9ICgpOiBib29sZWFuID0+IHVzZUNvbnRleHQoQ29udGV4dClcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFxuIl0sIm5hbWVzIjpbIlRhYnNQcm92aWRlciIsInVzZVRhYnMiLCJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNoaWxkcmVuIiwid2l0aGluVGFiIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNvbnRleHQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJYUEsWUFBWTtlQUFaQTs7SUFTYixPQUFzQjtlQUF0Qjs7SUFGYUMsT0FBTztlQUFQQTs7OytEQVhvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELE1BQU1DLHdCQUFVQyxJQUFBQSxvQkFBYSxFQUFDO0FBRXZCLE1BQU1ILGVBQThFLENBQUMsRUFDMUZJLFFBQVEsRUFDUkMsWUFBWSxJQUFJLEVBQ2pCO0lBQ0MscUJBQU8sNkJBQUNILFFBQVFJLFFBQVE7UUFBQ0MsT0FBT0Y7T0FBWUQ7QUFDOUM7QUFFTyxNQUFNSCxVQUFVLElBQWVPLElBQUFBLGlCQUFVLEVBQUNOO01BRWpELFdBQWVBIn0=