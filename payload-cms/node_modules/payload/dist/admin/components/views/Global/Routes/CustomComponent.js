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
    CustomGlobalComponent: function() {
        return CustomGlobalComponent;
    },
    defaultGlobalViews: function() {
        return defaultGlobalViews;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _API = require("../../API");
const _LivePreview = require("../../LivePreview");
const _Version = /*#__PURE__*/ _interop_require_default(require("../../Version/Version"));
const _Versions = /*#__PURE__*/ _interop_require_default(require("../../Versions"));
const _index = require("../Default/index");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const defaultGlobalViews = ()=>({
        API: _API.API,
        Default: _index.DefaultGlobalEdit,
        LivePreview: _LivePreview.LivePreviewView,
        References: null,
        Relationships: null,
        Version: _Version.default,
        Versions: _Versions.default
    });
const CustomGlobalComponent = (args)=>{
    const { global, view } = args;
    const { admin: { components: { views: { Edit } = {} } = {} } = {} } = global;
    // Overriding components may come from multiple places in the config
    // Need to cascade through the hierarchy to find the correct component to render
    // For example, the Edit view:
    // 1. Edit?.Default
    // 2. Edit?.Default?.Component
    const Component = typeof Edit === 'object' && typeof Edit[view] === 'function' ? Edit[view] : typeof Edit === 'object' && typeof Edit?.[view] === 'object' && typeof Edit[view].Component === 'function' ? Edit[view].Component : defaultGlobalViews()[view];
    if (Component) {
        return /*#__PURE__*/ _react.default.createElement(Component, args);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0dsb2JhbC9Sb3V0ZXMvQ3VzdG9tQ29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgR2xvYmFsRWRpdFZpZXdQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi9BUEknXG5pbXBvcnQgeyBMaXZlUHJldmlld1ZpZXcgfSBmcm9tICcuLi8uLi9MaXZlUHJldmlldydcbmltcG9ydCBWZXJzaW9uVmlldyBmcm9tICcuLi8uLi9WZXJzaW9uL1ZlcnNpb24nXG5pbXBvcnQgVmVyc2lvbnNWaWV3IGZyb20gJy4uLy4uL1ZlcnNpb25zJ1xuaW1wb3J0IHsgRGVmYXVsdEdsb2JhbEVkaXQgfSBmcm9tICcuLi9EZWZhdWx0L2luZGV4J1xuXG5leHBvcnQgdHlwZSBnbG9iYWxWaWV3VHlwZSA9XG4gIHwgJ0FQSSdcbiAgfCAnRGVmYXVsdCdcbiAgfCAnTGl2ZVByZXZpZXcnXG4gIHwgJ1JlZmVyZW5jZXMnXG4gIHwgJ1JlbGF0aW9uc2hpcHMnXG4gIHwgJ1ZlcnNpb24nXG4gIHwgJ1ZlcnNpb25zJ1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEdsb2JhbFZpZXdzID0gKCk6IHtcbiAgW2tleSBpbiBnbG9iYWxWaWV3VHlwZV06IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxufSA9PiAoe1xuICBBUEksXG4gIERlZmF1bHQ6IERlZmF1bHRHbG9iYWxFZGl0LFxuICBMaXZlUHJldmlldzogTGl2ZVByZXZpZXdWaWV3LFxuICBSZWZlcmVuY2VzOiBudWxsLFxuICBSZWxhdGlvbnNoaXBzOiBudWxsLFxuICBWZXJzaW9uOiBWZXJzaW9uVmlldyxcbiAgVmVyc2lvbnM6IFZlcnNpb25zVmlldyxcbn0pXG5cbmV4cG9ydCBjb25zdCBDdXN0b21HbG9iYWxDb21wb25lbnQgPSAoXG4gIGFyZ3M6IEdsb2JhbEVkaXRWaWV3UHJvcHMgJiB7XG4gICAgdmlldzogZ2xvYmFsVmlld1R5cGVcbiAgfSxcbikgPT4ge1xuICBjb25zdCB7IGdsb2JhbCwgdmlldyB9ID0gYXJnc1xuXG4gIGNvbnN0IHsgYWRtaW46IHsgY29tcG9uZW50czogeyB2aWV3czogeyBFZGl0IH0gPSB7fSB9ID0ge30gfSA9IHt9IH0gPSBnbG9iYWxcblxuICAvLyBPdmVycmlkaW5nIGNvbXBvbmVudHMgbWF5IGNvbWUgZnJvbSBtdWx0aXBsZSBwbGFjZXMgaW4gdGhlIGNvbmZpZ1xuICAvLyBOZWVkIHRvIGNhc2NhZGUgdGhyb3VnaCB0aGUgaGllcmFyY2h5IHRvIGZpbmQgdGhlIGNvcnJlY3QgY29tcG9uZW50IHRvIHJlbmRlclxuICAvLyBGb3IgZXhhbXBsZSwgdGhlIEVkaXQgdmlldzpcbiAgLy8gMS4gRWRpdD8uRGVmYXVsdFxuICAvLyAyLiBFZGl0Py5EZWZhdWx0Py5Db21wb25lbnRcbiAgY29uc3QgQ29tcG9uZW50ID1cbiAgICB0eXBlb2YgRWRpdCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIEVkaXRbdmlld10gPT09ICdmdW5jdGlvbidcbiAgICAgID8gRWRpdFt2aWV3XVxuICAgICAgOiB0eXBlb2YgRWRpdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwZW9mIEVkaXQ/Llt2aWV3XSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwZW9mIEVkaXRbdmlld10uQ29tcG9uZW50ID09PSAnZnVuY3Rpb24nXG4gICAgICA/IEVkaXRbdmlld10uQ29tcG9uZW50XG4gICAgICA6IGRlZmF1bHRHbG9iYWxWaWV3cygpW3ZpZXddXG5cbiAgaWYgKENvbXBvbmVudCkge1xuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5hcmdzfSAvPlxuICB9XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR2xvYmFsQ29tcG9uZW50IiwiZGVmYXVsdEdsb2JhbFZpZXdzIiwiQVBJIiwiRGVmYXVsdCIsIkRlZmF1bHRHbG9iYWxFZGl0IiwiTGl2ZVByZXZpZXciLCJMaXZlUHJldmlld1ZpZXciLCJSZWZlcmVuY2VzIiwiUmVsYXRpb25zaGlwcyIsIlZlcnNpb24iLCJWZXJzaW9uVmlldyIsIlZlcnNpb25zIiwiVmVyc2lvbnNWaWV3IiwiYXJncyIsImdsb2JhbCIsInZpZXciLCJhZG1pbiIsImNvbXBvbmVudHMiLCJ2aWV3cyIsIkVkaXQiLCJDb21wb25lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBK0JhQSxxQkFBcUI7ZUFBckJBOztJQVpBQyxrQkFBa0I7ZUFBbEJBOzs7OERBbkJLO3FCQUlFOzZCQUNZO2dFQUNSO2lFQUNDO3VCQUNTOzs7Ozs7QUFXM0IsTUFBTUEscUJBQXFCLElBRTVCLENBQUE7UUFDSkMsS0FBQUEsUUFBRztRQUNIQyxTQUFTQyx3QkFBaUI7UUFDMUJDLGFBQWFDLDRCQUFlO1FBQzVCQyxZQUFZO1FBQ1pDLGVBQWU7UUFDZkMsU0FBU0MsZ0JBQVc7UUFDcEJDLFVBQVVDLGlCQUFZO0lBQ3hCLENBQUE7QUFFTyxNQUFNWix3QkFBd0IsQ0FDbkNhO0lBSUEsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHRjtJQUV6QixNQUFNLEVBQUVHLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHTDtJQUV0RSxvRUFBb0U7SUFDcEUsZ0ZBQWdGO0lBQ2hGLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLE1BQU1NLFlBQ0osT0FBT0QsU0FBUyxZQUFZLE9BQU9BLElBQUksQ0FBQ0osS0FBSyxLQUFLLGFBQzlDSSxJQUFJLENBQUNKLEtBQUssR0FDVixPQUFPSSxTQUFTLFlBQ2hCLE9BQU9BLE1BQU0sQ0FBQ0osS0FBSyxLQUFLLFlBQ3hCLE9BQU9JLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxTQUFTLEtBQUssYUFDaENELElBQUksQ0FBQ0osS0FBSyxDQUFDSyxTQUFTLEdBQ3BCbkIsb0JBQW9CLENBQUNjLEtBQUs7SUFFaEMsSUFBSUssV0FBVztRQUNiLHFCQUFPLDZCQUFDQSxXQUFjUDtJQUN4QjtBQUNGIn0=