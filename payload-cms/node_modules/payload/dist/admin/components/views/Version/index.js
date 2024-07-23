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
const _Loading = require("../../elements/Loading");
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
const VersionView = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./Version"))));
const Version = (props)=>/*#__PURE__*/ _react.default.createElement(_react.Suspense, {
        fallback: /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlayToggle, {
            name: "version-suspense",
            show: true
        })
    }, /*#__PURE__*/ _react.default.createElement(VersionView, props));
const _default = Version;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgTG9hZGluZ092ZXJsYXlUb2dnbGUgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9Mb2FkaW5nJ1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yIEp1c3QgVHlwZVNjcmlwdCBiZWluZyBicm9rZW4gLy8gVE9ETzogT3BlbiBUeXBlU2NyaXB0IGlzc3VlXG5jb25zdCBWZXJzaW9uVmlldyA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL1ZlcnNpb24nKSlcblxuY29uc3QgVmVyc2lvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiAoXG4gIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRpbmdPdmVybGF5VG9nZ2xlIG5hbWU9XCJ2ZXJzaW9uLXN1c3BlbnNlXCIgc2hvdyAvPn0+XG4gICAgPFZlcnNpb25WaWV3IHsuLi5wcm9wc30gLz5cbiAgPC9TdXNwZW5zZT5cbilcblxuZXhwb3J0IGRlZmF1bHQgVmVyc2lvblxuIl0sIm5hbWVzIjpbIlZlcnNpb25WaWV3IiwibGF6eSIsIlZlcnNpb24iLCJwcm9wcyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJMb2FkaW5nT3ZlcmxheVRvZ2dsZSIsIm5hbWUiLCJzaG93Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZUE7OztlQUFBOzs7K0RBZnNDO3lCQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsK0VBQStFO0FBQy9FLE1BQU1BLDRCQUFjQyxJQUFBQSxXQUFJLEVBQUMsSUFBTSxtRUFBQSxRQUFPO0FBRXRDLE1BQU1DLFVBQTJCLENBQUNDLHNCQUNoQyw2QkFBQ0MsZUFBUTtRQUFDQyx3QkFBVSw2QkFBQ0MsNkJBQW9CO1lBQUNDLE1BQUs7WUFBbUJDLE1BQUFBOztxQkFDaEUsNkJBQUNSLGFBQWdCRztNQUlyQixXQUFlRCJ9