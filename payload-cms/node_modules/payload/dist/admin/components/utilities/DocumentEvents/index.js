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
    DocumentEventsProvider: function() {
        return DocumentEventsProvider;
    },
    useDocumentEvents: function() {
        return useDocumentEvents;
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
    mostRecentUpdate: null,
    reportUpdate: (doc)=>null
});
const DocumentEventsProvider = ({ children })=>{
    const [mostRecentUpdate, reportUpdate] = (0, _react.useState)(null);
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: {
            mostRecentUpdate,
            reportUpdate
        }
    }, children);
};
const useDocumentEvents = ()=>(0, _react.useContext)(Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Eb2N1bWVudEV2ZW50cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgVXBkYXRlZERvY3VtZW50IH0gZnJvbSAnLi90eXBlcydcblxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICBtb3N0UmVjZW50VXBkYXRlOiBudWxsLFxuICByZXBvcnRVcGRhdGU6IChkb2M6IFVwZGF0ZWREb2N1bWVudCkgPT4gbnVsbCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbn0pXG5cbmV4cG9ydCBjb25zdCBEb2N1bWVudEV2ZW50c1Byb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFttb3N0UmVjZW50VXBkYXRlLCByZXBvcnRVcGRhdGVdID0gdXNlU3RhdGU8VXBkYXRlZERvY3VtZW50PihudWxsKVxuXG4gIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtb3N0UmVjZW50VXBkYXRlLCByZXBvcnRVcGRhdGUgfX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZURvY3VtZW50RXZlbnRzID0gKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50RXZlbnRzUHJvdmlkZXIiLCJ1c2VEb2N1bWVudEV2ZW50cyIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwibW9zdFJlY2VudFVwZGF0ZSIsInJlcG9ydFVwZGF0ZSIsImRvYyIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ29udGV4dCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVNhQSxzQkFBc0I7ZUFBdEJBOztJQU1BQyxpQkFBaUI7ZUFBakJBOzs7K0RBZjhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0QsTUFBTUMsd0JBQVVDLElBQUFBLG9CQUFhLEVBQUM7SUFDNUJDLGtCQUFrQjtJQUNsQkMsY0FBYyxDQUFDQyxNQUF5QjtBQUMxQztBQUVPLE1BQU1OLHlCQUFrRSxDQUFDLEVBQUVPLFFBQVEsRUFBRTtJQUMxRixNQUFNLENBQUNILGtCQUFrQkMsYUFBYSxHQUFHRyxJQUFBQSxlQUFRLEVBQWtCO0lBRW5FLHFCQUFPLDZCQUFDTixRQUFRTyxRQUFRO1FBQUNDLE9BQU87WUFBRU47WUFBa0JDO1FBQWE7T0FBSUU7QUFDdkU7QUFFTyxNQUFNTixvQkFBb0IsSUFBTVUsSUFBQUEsaUJBQVUsRUFBQ1QifQ==