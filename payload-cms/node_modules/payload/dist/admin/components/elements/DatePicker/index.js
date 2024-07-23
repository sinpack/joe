"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _ShimmerEffect = require("../ShimmerEffect");
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
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const DatePicker = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./DatePicker"))));
const DatePickerField = (props)=>/*#__PURE__*/ _react.default.createElement(_react.Suspense, {
        fallback: /*#__PURE__*/ _react.default.createElement(_ShimmerEffect.ShimmerEffect, {
            height: 50
        })
    }, /*#__PURE__*/ _react.default.createElement(DatePicker, props));
const _default = DatePickerField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RhdGVQaWNrZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgU2hpbW1lckVmZmVjdCB9IGZyb20gJy4uL1NoaW1tZXJFZmZlY3QnXG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgSnVzdCBUeXBlU2NyaXB0IGJlaW5nIGJyb2tlbiAvLyBUT0RPOiBPcGVuIFR5cGVTY3JpcHQgaXNzdWVcbmNvbnN0IERhdGVQaWNrZXIgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9EYXRlUGlja2VyJykpXG5cbmNvbnN0IERhdGVQaWNrZXJGaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiAoXG4gIDxTdXNwZW5zZSBmYWxsYmFjaz17PFNoaW1tZXJFZmZlY3QgaGVpZ2h0PXs1MH0gLz59PlxuICAgIDxEYXRlUGlja2VyIHsuLi5wcm9wc30gLz5cbiAgPC9TdXNwZW5zZT5cbilcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVBpY2tlckZpZWxkXG4iXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsImxhenkiLCJEYXRlUGlja2VyRmllbGQiLCJwcm9wcyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJTaGltbWVyRWZmZWN0IiwiaGVpZ2h0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFlQTs7O2VBQUE7OzsrREFmc0M7K0JBSVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QiwrRUFBK0U7QUFDL0UsTUFBTUEsMkJBQWFDLElBQUFBLFdBQUksRUFBQyxJQUFNLG1FQUFBLFFBQU87QUFFckMsTUFBTUMsa0JBQW1DLENBQUNDLHNCQUN4Qyw2QkFBQ0MsZUFBUTtRQUFDQyx3QkFBVSw2QkFBQ0MsNEJBQWE7WUFBQ0MsUUFBUTs7cUJBQ3pDLDZCQUFDUCxZQUFlRztNQUlwQixXQUFlRCJ9