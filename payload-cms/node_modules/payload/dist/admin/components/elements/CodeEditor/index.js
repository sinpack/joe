"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeEditor", {
    enumerable: true,
    get: function() {
        return CodeEditor;
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
const LazyEditor = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./CodeEditor"))));
const CodeEditor = (props)=>{
    const { height = '35vh' } = props;
    return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
        fallback: /*#__PURE__*/ _react.default.createElement(_ShimmerEffect.ShimmerEffect, {
            height: height
        })
    }, /*#__PURE__*/ _react.default.createElement(LazyEditor, {
        ...props,
        height: height
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVFZGl0b3IvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgU2hpbW1lckVmZmVjdCB9IGZyb20gJy4uL1NoaW1tZXJFZmZlY3QnXG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgSnVzdCBUeXBlU2NyaXB0IGJlaW5nIGJyb2tlbiAvLyBUT0RPOiBPcGVuIFR5cGVTY3JpcHQgaXNzdWVcbmNvbnN0IExhenlFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9Db2RlRWRpdG9yJykpXG5cbmV4cG9ydCBjb25zdCBDb2RlRWRpdG9yOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBoZWlnaHQgPSAnMzV2aCcgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxTaGltbWVyRWZmZWN0IGhlaWdodD17aGVpZ2h0fSAvPn0+XG4gICAgICA8TGF6eUVkaXRvciB7Li4ucHJvcHN9IGhlaWdodD17aGVpZ2h0fSAvPlxuICAgIDwvU3VzcGVuc2U+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDb2RlRWRpdG9yIiwiTGF6eUVkaXRvciIsImxhenkiLCJwcm9wcyIsImhlaWdodCIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJTaGltbWVyRWZmZWN0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVNhQTs7O2VBQUFBOzs7K0RBVHlCOytCQUlSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsK0VBQStFO0FBQy9FLE1BQU1DLDJCQUFhQyxJQUFBQSxXQUFJLEVBQUMsSUFBTSxtRUFBQSxRQUFPO0FBRTlCLE1BQU1GLGFBQThCLENBQUNHO0lBQzFDLE1BQU0sRUFBRUMsU0FBUyxNQUFNLEVBQUUsR0FBR0Q7SUFFNUIscUJBQ0UsNkJBQUNFLGVBQVE7UUFBQ0Msd0JBQVUsNkJBQUNDLDRCQUFhO1lBQUNILFFBQVFBOztxQkFDekMsNkJBQUNIO1FBQVksR0FBR0UsS0FBSztRQUFFQyxRQUFRQTs7QUFHckMifQ==