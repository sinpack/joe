"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Gutter", {
    enumerable: true,
    get: function() {
        return Gutter;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
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
const baseClass = 'gutter';
const Gutter = /*#__PURE__*/ (0, _react.forwardRef)((props, ref)=>{
    const { children, className, left = true, negativeLeft = false, negativeRight = false, right = true } = props;
    const shouldPadLeft = left && !negativeLeft;
    const shouldPadRight = right && !negativeRight;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            shouldPadLeft && `${baseClass}--left`,
            shouldPadRight && `${baseClass}--right`,
            negativeLeft && `${baseClass}--negative-left`,
            negativeRight && `${baseClass}--negative-right`,
            className
        ].filter(Boolean).join(' '),
        ref: ref
    }, children);
});
Gutter.displayName = 'Gutter';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0d1dHRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZWYgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGxlZnQ/OiBib29sZWFuXG4gIG5lZ2F0aXZlTGVmdD86IGJvb2xlYW5cbiAgbmVnYXRpdmVSaWdodD86IGJvb2xlYW5cbiAgcmVmPzogUmVmPEhUTUxEaXZFbGVtZW50PlxuICByaWdodD86IGJvb2xlYW5cbn1cblxuY29uc3QgYmFzZUNsYXNzID0gJ2d1dHRlcidcblxuZXhwb3J0IGNvbnN0IEd1dHRlcjogUmVhY3QuRkM8UHJvcHM+ID0gZm9yd2FyZFJlZjxIVE1MRGl2RWxlbWVudCwgUHJvcHM+KChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWUsXG4gICAgbGVmdCA9IHRydWUsXG4gICAgbmVnYXRpdmVMZWZ0ID0gZmFsc2UsXG4gICAgbmVnYXRpdmVSaWdodCA9IGZhbHNlLFxuICAgIHJpZ2h0ID0gdHJ1ZSxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3Qgc2hvdWxkUGFkTGVmdCA9IGxlZnQgJiYgIW5lZ2F0aXZlTGVmdFxuICBjb25zdCBzaG91bGRQYWRSaWdodCA9IHJpZ2h0ICYmICFuZWdhdGl2ZVJpZ2h0XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgc2hvdWxkUGFkTGVmdCAmJiBgJHtiYXNlQ2xhc3N9LS1sZWZ0YCxcbiAgICAgICAgc2hvdWxkUGFkUmlnaHQgJiYgYCR7YmFzZUNsYXNzfS0tcmlnaHRgLFxuICAgICAgICBuZWdhdGl2ZUxlZnQgJiYgYCR7YmFzZUNsYXNzfS0tbmVnYXRpdmUtbGVmdGAsXG4gICAgICAgIG5lZ2F0aXZlUmlnaHQgJiYgYCR7YmFzZUNsYXNzfS0tbmVnYXRpdmUtcmlnaHRgLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICBdXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgIHJlZj17cmVmfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuR3V0dGVyLmRpc3BsYXlOYW1lID0gJ0d1dHRlcidcbiJdLCJuYW1lcyI6WyJHdXR0ZXIiLCJiYXNlQ2xhc3MiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImxlZnQiLCJuZWdhdGl2ZUxlZnQiLCJuZWdhdGl2ZVJpZ2h0IiwicmlnaHQiLCJzaG91bGRQYWRMZWZ0Iiwic2hvdWxkUGFkUmlnaHQiLCJkaXYiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpc3BsYXlOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFrQmFBOzs7ZUFBQUE7OzsrREFoQnFCO1FBRTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZUCxNQUFNQyxZQUFZO0FBRVgsTUFBTUQsdUJBQTBCRSxJQUFBQSxpQkFBVSxFQUF3QixDQUFDQyxPQUFPQztJQUMvRSxNQUFNLEVBQ0pDLFFBQVEsRUFDUkMsU0FBUyxFQUNUQyxPQUFPLElBQUksRUFDWEMsZUFBZSxLQUFLLEVBQ3BCQyxnQkFBZ0IsS0FBSyxFQUNyQkMsUUFBUSxJQUFJLEVBQ2IsR0FBR1A7SUFFSixNQUFNUSxnQkFBZ0JKLFFBQVEsQ0FBQ0M7SUFDL0IsTUFBTUksaUJBQWlCRixTQUFTLENBQUNEO0lBRWpDLHFCQUNFLDZCQUFDSTtRQUNDUCxXQUFXO1lBQ1RLLGlCQUFpQixDQUFDLEVBQUVWLFVBQVUsTUFBTSxDQUFDO1lBQ3JDVyxrQkFBa0IsQ0FBQyxFQUFFWCxVQUFVLE9BQU8sQ0FBQztZQUN2Q08sZ0JBQWdCLENBQUMsRUFBRVAsVUFBVSxlQUFlLENBQUM7WUFDN0NRLGlCQUFpQixDQUFDLEVBQUVSLFVBQVUsZ0JBQWdCLENBQUM7WUFDL0NLO1NBQ0QsQ0FDRVEsTUFBTSxDQUFDQyxTQUNQQyxJQUFJLENBQUM7UUFDUlosS0FBS0E7T0FFSkM7QUFHUDtBQUVBTCxPQUFPaUIsV0FBVyxHQUFHIn0=