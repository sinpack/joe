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
    formatDate: function() {
        return formatDate;
    },
    formatTimeToNow: function() {
        return formatTimeToNow;
    }
});
const _datefns = require("date-fns");
const _locale = /*#__PURE__*/ _interop_require_wildcard(require("date-fns/locale"));
const _getSupportedDateLocale = require("./getSupportedDateLocale");
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
const formatDate = (date, pattern, locale)=>{
    const theDate = new Date(date);
    const currentLocale = _locale[(0, _getSupportedDateLocale.getSupportedDateLocale)(locale)];
    return (0, _datefns.format)(theDate, pattern, {
        locale: currentLocale
    });
};
const formatTimeToNow = (date, locale)=>{
    const theDate = new Date(date);
    const currentLocale = _locale[(0, _getSupportedDateLocale.getSupportedDateLocale)(locale)];
    return (0, _datefns.formatDistanceToNow)(theDate, {
        locale: currentLocale
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvZm9ybWF0RGF0ZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQsIGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCAqIGFzIExvY2FsZSBmcm9tICdkYXRlLWZucy9sb2NhbGUnXG5cbmltcG9ydCB7IGdldFN1cHBvcnRlZERhdGVMb2NhbGUgfSBmcm9tICcuL2dldFN1cHBvcnRlZERhdGVMb2NhbGUnXG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKFxuICBkYXRlOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBwYXR0ZXJuOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHRoZURhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICBjb25zdCBjdXJyZW50TG9jYWxlID0gTG9jYWxlW2dldFN1cHBvcnRlZERhdGVMb2NhbGUobG9jYWxlKV1cbiAgcmV0dXJuIGZvcm1hdCh0aGVEYXRlLCBwYXR0ZXJuLCB7IGxvY2FsZTogY3VycmVudExvY2FsZSB9KVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZVRvTm93ID0gKFxuICBkYXRlOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCB0aGVEYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgY29uc3QgY3VycmVudExvY2FsZSA9IExvY2FsZVtnZXRTdXBwb3J0ZWREYXRlTG9jYWxlKGxvY2FsZSldXG4gIHJldHVybiBmb3JtYXREaXN0YW5jZVRvTm93KHRoZURhdGUsIHsgbG9jYWxlOiBjdXJyZW50TG9jYWxlIH0pXG59XG4iXSwibmFtZXMiOlsiZm9ybWF0RGF0ZSIsImZvcm1hdFRpbWVUb05vdyIsImRhdGUiLCJwYXR0ZXJuIiwibG9jYWxlIiwidGhlRGF0ZSIsIkRhdGUiLCJjdXJyZW50TG9jYWxlIiwiTG9jYWxlIiwiZ2V0U3VwcG9ydGVkRGF0ZUxvY2FsZSIsImZvcm1hdCIsImZvcm1hdERpc3RhbmNlVG9Ob3ciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUthQSxVQUFVO2VBQVZBOztJQVVBQyxlQUFlO2VBQWZBOzs7eUJBZitCO2dFQUNwQjt3Q0FFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLE1BQU1ELGFBQWEsQ0FDeEJFLE1BQ0FDLFNBQ0FDO0lBRUEsTUFBTUMsVUFBVSxJQUFJQyxLQUFLSjtJQUN6QixNQUFNSyxnQkFBZ0JDLE9BQU0sQ0FBQ0MsSUFBQUEsOENBQXNCLEVBQUNMLFFBQVE7SUFDNUQsT0FBT00sSUFBQUEsZUFBTSxFQUFDTCxTQUFTRixTQUFTO1FBQUVDLFFBQVFHO0lBQWM7QUFDMUQ7QUFFTyxNQUFNTixrQkFBa0IsQ0FDN0JDLE1BQ0FFO0lBRUEsTUFBTUMsVUFBVSxJQUFJQyxLQUFLSjtJQUN6QixNQUFNSyxnQkFBZ0JDLE9BQU0sQ0FBQ0MsSUFBQUEsOENBQXNCLEVBQUNMLFFBQVE7SUFDNUQsT0FBT08sSUFBQUEsNEJBQW1CLEVBQUNOLFNBQVM7UUFBRUQsUUFBUUc7SUFBYztBQUM5RCJ9