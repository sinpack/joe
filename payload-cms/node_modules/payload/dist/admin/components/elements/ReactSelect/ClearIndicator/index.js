"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClearIndicator", {
    enumerable: true,
    get: function() {
        return ClearIndicator;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _X = /*#__PURE__*/ _interop_require_default(require("../../../icons/X"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'clear-indicator';
const ClearIndicator = (props)=>{
    const { innerProps: { ref, ...restInnerProps } } = props;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass,
        ref: ref,
        ...restInnerProps
    }, /*#__PURE__*/ _react.default.createElement(_X.default, {
        className: `${baseClass}__icon`
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L0NsZWFySW5kaWNhdG9yL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENsZWFySW5kaWNhdG9yUHJvcHMgfSBmcm9tICdyZWFjdC1zZWxlY3QnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBPcHRpb24gYXMgT3B0aW9uVHlwZSB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgWCBmcm9tICcuLi8uLi8uLi9pY29ucy9YJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjbGVhci1pbmRpY2F0b3InXG5cbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvcjogUmVhY3QuRkM8Q2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb25UeXBlLCB0cnVlPj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlubmVyUHJvcHM6IHsgcmVmLCAuLi5yZXN0SW5uZXJQcm9wcyB9LFxuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9IHJlZj17cmVmfSB7Li4ucmVzdElubmVyUHJvcHN9PlxuICAgICAgPFggY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pY29uYH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNsZWFySW5kaWNhdG9yIiwiYmFzZUNsYXNzIiwicHJvcHMiLCJpbm5lclByb3BzIiwicmVmIiwicmVzdElubmVyUHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJYIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBV2FBOzs7ZUFBQUE7Ozs4REFUSzswREFJSjtRQUNQOzs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBRVgsTUFBTUQsaUJBQWtFLENBQUNFO0lBQzlFLE1BQU0sRUFDSkMsWUFBWSxFQUFFQyxHQUFHLEVBQUUsR0FBR0MsZ0JBQWdCLEVBQ3ZDLEdBQUdIO0lBRUoscUJBQ0UsNkJBQUNJO1FBQUlDLFdBQVdOO1FBQVdHLEtBQUtBO1FBQU0sR0FBR0MsY0FBYztxQkFDckQsNkJBQUNHLFVBQUM7UUFBQ0QsV0FBVyxDQUFDLEVBQUVOLFVBQVUsTUFBTSxDQUFDOztBQUd4QyJ9