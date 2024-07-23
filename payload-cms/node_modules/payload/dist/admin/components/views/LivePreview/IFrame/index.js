"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IFrame", {
    enumerable: true,
    get: function() {
        return IFrame;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _context = require("../Context/context");
require("./index.scss");
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
const baseClass = 'live-preview-iframe';
const IFrame = /*#__PURE__*/ (0, _react.forwardRef)((props, ref)=>{
    const { setIframeHasLoaded, url } = props;
    const { zoom } = (0, _context.useLivePreviewContext)();
    return /*#__PURE__*/ _react.default.createElement("iframe", {
        className: baseClass,
        onLoad: ()=>{
            setIframeHasLoaded(true);
        },
        ref: ref,
        src: url,
        style: {
            transform: typeof zoom === 'number' ? `scale(${zoom}) ` : undefined
        },
        title: url
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xpdmVQcmV2aWV3L0lGcmFtZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlTGl2ZVByZXZpZXdDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dC9jb250ZXh0J1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdsaXZlLXByZXZpZXctaWZyYW1lJ1xuXG5leHBvcnQgY29uc3QgSUZyYW1lOiBSZWFjdC5GQzx7XG4gIHJlZjogUmVhY3QuUmVmPEhUTUxJRnJhbWVFbGVtZW50PlxuICBzZXRJZnJhbWVIYXNMb2FkZWQ6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZFxuICB1cmw6IHN0cmluZ1xufT4gPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHsgc2V0SWZyYW1lSGFzTG9hZGVkLCB1cmwgfSA9IHByb3BzXG5cbiAgY29uc3QgeyB6b29tIH0gPSB1c2VMaXZlUHJldmlld0NvbnRleHQoKVxuXG4gIHJldHVybiAoXG4gICAgPGlmcmFtZVxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICBvbkxvYWQ9eygpID0+IHtcbiAgICAgICAgc2V0SWZyYW1lSGFzTG9hZGVkKHRydWUpXG4gICAgICB9fVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBzcmM9e3VybH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHRyYW5zZm9ybTogdHlwZW9mIHpvb20gPT09ICdudW1iZXInID8gYHNjYWxlKCR7em9vbX0pIGAgOiB1bmRlZmluZWQsXG4gICAgICB9fVxuICAgICAgdGl0bGU9e3VybH1cbiAgICAvPlxuICApXG59KVxuIl0sIm5hbWVzIjpbIklGcmFtZSIsImJhc2VDbGFzcyIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsInNldElmcmFtZUhhc0xvYWRlZCIsInVybCIsInpvb20iLCJ1c2VMaXZlUHJldmlld0NvbnRleHQiLCJpZnJhbWUiLCJjbGFzc05hbWUiLCJvbkxvYWQiLCJzcmMiLCJzdHlsZSIsInRyYW5zZm9ybSIsInVuZGVmaW5lZCIsInRpdGxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBT2FBOzs7ZUFBQUE7OzsrREFQcUI7eUJBRUk7UUFDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFFWCxNQUFNRCx1QkFJUkUsSUFBQUEsaUJBQVUsRUFBQyxDQUFDQyxPQUFPQztJQUN0QixNQUFNLEVBQUVDLGtCQUFrQixFQUFFQyxHQUFHLEVBQUUsR0FBR0g7SUFFcEMsTUFBTSxFQUFFSSxJQUFJLEVBQUUsR0FBR0MsSUFBQUEsOEJBQXFCO0lBRXRDLHFCQUNFLDZCQUFDQztRQUNDQyxXQUFXVDtRQUNYVSxRQUFRO1lBQ05OLG1CQUFtQjtRQUNyQjtRQUNBRCxLQUFLQTtRQUNMUSxLQUFLTjtRQUNMTyxPQUFPO1lBQ0xDLFdBQVcsT0FBT1AsU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFQSxLQUFLLEVBQUUsQ0FBQyxHQUFHUTtRQUM1RDtRQUNBQyxPQUFPVjs7QUFHYiJ9