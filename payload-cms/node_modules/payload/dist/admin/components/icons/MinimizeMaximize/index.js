"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MinimizeMaximize", {
    enumerable: true,
    get: function() {
        return MinimizeMaximize;
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
const baseClass = 'minimize-maximize';
const MinimizeMaximize = ({ className, isMinimized })=>{
    const classes = [
        baseClass,
        isMinimized ? `${baseClass}--minimized` : `${baseClass}--maximized`,
        className
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ _react.createElement("svg", {
        className: classes,
        height: "24",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg"
    }, isMinimized ? /*#__PURE__*/ _react.createElement(_react.Fragment, null, /*#__PURE__*/ _react.createElement("path", {
        d: "M8 3H5a2 2 0 0 0-2 2v3"
    }), /*#__PURE__*/ _react.createElement("path", {
        d: "M21 8V5a2 2 0 0 0-2-2h-3"
    }), /*#__PURE__*/ _react.createElement("path", {
        d: "M3 16v3a2 2 0 0 0 2 2h3"
    }), /*#__PURE__*/ _react.createElement("path", {
        d: "M16 21h3a2 2 0 0 0 2-2v-3"
    })) : /*#__PURE__*/ _react.createElement(_react.Fragment, null, /*#__PURE__*/ _react.createElement("path", {
        d: "M8 3v3a2 2 0 0 1-2 2H3"
    }), /*#__PURE__*/ _react.createElement("path", {
        d: "M21 8h-3a2 2 0 0 1-2-2V3"
    }), /*#__PURE__*/ _react.createElement("path", {
        d: "M3 16h3a2 2 0 0 1 2 2v3"
    }), /*#__PURE__*/ _react.createElement("path", {
        d: "M16 21v-3a2 2 0 0 1 2-2h3"
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2ljb25zL01pbmltaXplTWF4aW1pemUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbWluaW1pemUtbWF4aW1pemUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBpc01pbmltaXplZD86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBNaW5pbWl6ZU1heGltaXplOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjbGFzc05hbWUsIGlzTWluaW1pemVkIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgaXNNaW5pbWl6ZWQgPyBgJHtiYXNlQ2xhc3N9LS1taW5pbWl6ZWRgIDogYCR7YmFzZUNsYXNzfS0tbWF4aW1pemVkYCxcbiAgICBjbGFzc05hbWUsXG4gIF1cbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJyAnKVxuXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAge2lzTWluaW1pemVkID8gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPHBhdGggZD1cIk04IDNINWEyIDIgMCAwIDAtMiAydjNcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjEgOFY1YTIgMiAwIDAgMC0yLTJoLTNcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMyAxNnYzYTIgMiAwIDAgMCAyIDJoM1wiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xNiAyMWgzYTIgMiAwIDAgMCAyLTJ2LTNcIiAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKSA6IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxwYXRoIGQ9XCJNOCAzdjNhMiAyIDAgMCAxLTIgMkgzXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTIxIDhoLTNhMiAyIDAgMCAxLTItMlYzXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTMgMTZoM2EyIDIgMCAwIDEgMiAydjNcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTYgMjF2LTNhMiAyIDAgMCAxIDItMmgzXCIgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9zdmc+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJNaW5pbWl6ZU1heGltaXplIiwiYmFzZUNsYXNzIiwiY2xhc3NOYW1lIiwiaXNNaW5pbWl6ZWQiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJzdmciLCJoZWlnaHQiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInZpZXdCb3giLCJ3aWR0aCIsInhtbG5zIiwiUmVhY3QiLCJGcmFnbWVudCIsInBhdGgiLCJkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFRYUE7OztlQUFBQTs7OytEQVJVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsTUFBTUMsWUFBWTtBQU1YLE1BQU1ELG1CQUFvQyxDQUFDLEVBQUVFLFNBQVMsRUFBRUMsV0FBVyxFQUFFO0lBQzFFLE1BQU1DLFVBQVU7UUFDZEg7UUFDQUUsY0FBYyxDQUFDLEVBQUVGLFVBQVUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxVQUFVLFdBQVcsQ0FBQztRQUNuRUM7S0FDRCxDQUNFRyxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztJQUVSLHFCQUNFLHFCQUFDQztRQUNDTixXQUFXRTtRQUNYSyxRQUFPO1FBQ1BDLFFBQU87UUFDUEMsYUFBWTtRQUNaQyxTQUFRO1FBQ1JDLE9BQU07UUFDTkMsT0FBTTtPQUVMWCw0QkFDQyxxQkFBQ1ksT0FBTUMsUUFBUSxzQkFDYixxQkFBQ0M7UUFBS0MsR0FBRTtzQkFDUixxQkFBQ0Q7UUFBS0MsR0FBRTtzQkFDUixxQkFBQ0Q7UUFBS0MsR0FBRTtzQkFDUixxQkFBQ0Q7UUFBS0MsR0FBRTt3QkFHVixxQkFBQ0gsT0FBTUMsUUFBUSxzQkFDYixxQkFBQ0M7UUFBS0MsR0FBRTtzQkFDUixxQkFBQ0Q7UUFBS0MsR0FBRTtzQkFDUixxQkFBQ0Q7UUFBS0MsR0FBRTtzQkFDUixxQkFBQ0Q7UUFBS0MsR0FBRTs7QUFLbEIifQ==