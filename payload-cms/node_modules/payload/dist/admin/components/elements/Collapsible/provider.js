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
    CollapsibleProvider: function() {
        return CollapsibleProvider;
    },
    useCollapsible: function() {
        return useCollapsible;
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
const Context = /*#__PURE__*/ (0, _react.createContext)({
    collapsed: false,
    isVisible: true,
    toggle: ()=>{},
    withinCollapsible: false
});
const CollapsibleProvider = ({ children, collapsed, toggle, withinCollapsible = true })=>{
    const { collapsed: parentIsCollapsed, isVisible } = useCollapsible();
    const contextValue = _react.default.useMemo(()=>{
        return {
            collapsed: Boolean(collapsed),
            isVisible: isVisible && !parentIsCollapsed,
            toggle,
            withinCollapsible
        };
    }, [
        collapsed,
        withinCollapsible,
        toggle,
        parentIsCollapsed,
        isVisible
    ]);
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: contextValue
    }, children);
};
const useCollapsible = ()=>(0, _react.useContext)(Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvbGxhcHNpYmxlL3Byb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuXG50eXBlIENvbnRleHRUeXBlID0ge1xuICBjb2xsYXBzZWQ6IGJvb2xlYW5cbiAgaXNWaXNpYmxlOiBib29sZWFuXG4gIHRvZ2dsZTogKCkgPT4gdm9pZFxuICB3aXRoaW5Db2xsYXBzaWJsZTogYm9vbGVhblxufVxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICBjb2xsYXBzZWQ6IGZhbHNlLFxuICBpc1Zpc2libGU6IHRydWUsXG4gIHRvZ2dsZTogKCkgPT4ge30sXG4gIHdpdGhpbkNvbGxhcHNpYmxlOiBmYWxzZSxcbn0pXG5cbmV4cG9ydCBjb25zdCBDb2xsYXBzaWJsZVByb3ZpZGVyOiBSZWFjdC5GQzx7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIGNvbGxhcHNlZD86IGJvb2xlYW5cbiAgdG9nZ2xlOiAoKSA9PiB2b2lkXG4gIHdpdGhpbkNvbGxhcHNpYmxlPzogYm9vbGVhblxufT4gPSAoeyBjaGlsZHJlbiwgY29sbGFwc2VkLCB0b2dnbGUsIHdpdGhpbkNvbGxhcHNpYmxlID0gdHJ1ZSB9KSA9PiB7XG4gIGNvbnN0IHsgY29sbGFwc2VkOiBwYXJlbnRJc0NvbGxhcHNlZCwgaXNWaXNpYmxlIH0gPSB1c2VDb2xsYXBzaWJsZSgpXG5cbiAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKTogQ29udGV4dFR5cGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xsYXBzZWQ6IEJvb2xlYW4oY29sbGFwc2VkKSxcbiAgICAgIGlzVmlzaWJsZTogaXNWaXNpYmxlICYmICFwYXJlbnRJc0NvbGxhcHNlZCxcbiAgICAgIHRvZ2dsZSxcbiAgICAgIHdpdGhpbkNvbGxhcHNpYmxlLFxuICAgIH1cbiAgfSwgW2NvbGxhcHNlZCwgd2l0aGluQ29sbGFwc2libGUsIHRvZ2dsZSwgcGFyZW50SXNDb2xsYXBzZWQsIGlzVmlzaWJsZV0pXG4gIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxufVxuXG5leHBvcnQgY29uc3QgdXNlQ29sbGFwc2libGUgPSAoKTogQ29udGV4dFR5cGUgPT4gdXNlQ29udGV4dChDb250ZXh0KVxuIl0sIm5hbWVzIjpbIkNvbGxhcHNpYmxlUHJvdmlkZXIiLCJ1c2VDb2xsYXBzaWJsZSIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY29sbGFwc2VkIiwiaXNWaXNpYmxlIiwidG9nZ2xlIiwid2l0aGluQ29sbGFwc2libGUiLCJjaGlsZHJlbiIsInBhcmVudElzQ29sbGFwc2VkIiwiY29udGV4dFZhbHVlIiwiUmVhY3QiLCJ1c2VNZW1vIiwiQm9vbGVhbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDb250ZXh0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWVhQSxtQkFBbUI7ZUFBbkJBOztJQW1CQUMsY0FBYztlQUFkQTs7OytEQWxDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRCxNQUFNQyx3QkFBVUMsSUFBQUEsb0JBQWEsRUFBQztJQUM1QkMsV0FBVztJQUNYQyxXQUFXO0lBQ1hDLFFBQVEsS0FBTztJQUNmQyxtQkFBbUI7QUFDckI7QUFFTyxNQUFNUCxzQkFLUixDQUFDLEVBQUVRLFFBQVEsRUFBRUosU0FBUyxFQUFFRSxNQUFNLEVBQUVDLG9CQUFvQixJQUFJLEVBQUU7SUFDN0QsTUFBTSxFQUFFSCxXQUFXSyxpQkFBaUIsRUFBRUosU0FBUyxFQUFFLEdBQUdKO0lBRXBELE1BQU1TLGVBQWVDLGNBQUssQ0FBQ0MsT0FBTyxDQUFDO1FBQ2pDLE9BQU87WUFDTFIsV0FBV1MsUUFBUVQ7WUFDbkJDLFdBQVdBLGFBQWEsQ0FBQ0k7WUFDekJIO1lBQ0FDO1FBQ0Y7SUFDRixHQUFHO1FBQUNIO1FBQVdHO1FBQW1CRDtRQUFRRztRQUFtQko7S0FBVTtJQUN2RSxxQkFBTyw2QkFBQ0gsUUFBUVksUUFBUTtRQUFDQyxPQUFPTDtPQUFlRjtBQUNqRDtBQUVPLE1BQU1QLGlCQUFpQixJQUFtQmUsSUFBQUEsaUJBQVUsRUFBQ2QifQ==