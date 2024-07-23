"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ValueContainer", {
    enumerable: true,
    get: function() {
        return ValueContainer;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reactselect = require("react-select");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'value-container';
const ValueContainer = (props)=>{
    // @ts-expect-error // TODO Fix this - moduleResolution 16 breaks our declare module
    const { selectProps: { customProps } = {} } = props;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass,
        ref: customProps?.droppableRef
    }, /*#__PURE__*/ _react.default.createElement(_reactselect.components.ValueContainer, props));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L1ZhbHVlQ29udGFpbmVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFZhbHVlQ29udGFpbmVyUHJvcHMgfSBmcm9tICdyZWFjdC1zZWxlY3QnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbXBvbmVudHMgYXMgU2VsZWN0Q29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCdcblxuaW1wb3J0IHR5cGUgeyBPcHRpb24gfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICd2YWx1ZS1jb250YWluZXInXG5cbmV4cG9ydCBjb25zdCBWYWx1ZUNvbnRhaW5lcjogUmVhY3QuRkM8VmFsdWVDb250YWluZXJQcm9wczxPcHRpb24sIGFueT4+ID0gKHByb3BzKSA9PiB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLy8gVE9ETyBGaXggdGhpcyAtIG1vZHVsZVJlc29sdXRpb24gMTYgYnJlYWtzIG91ciBkZWNsYXJlIG1vZHVsZVxuICBjb25zdCB7IHNlbGVjdFByb3BzOiB7IGN1c3RvbVByb3BzIH0gPSB7fSB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9IHJlZj17Y3VzdG9tUHJvcHM/LmRyb3BwYWJsZVJlZn0+XG4gICAgICA8U2VsZWN0Q29tcG9uZW50cy5WYWx1ZUNvbnRhaW5lciB7Li4ucHJvcHN9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJWYWx1ZUNvbnRhaW5lciIsImJhc2VDbGFzcyIsInByb3BzIiwic2VsZWN0UHJvcHMiLCJjdXN0b21Qcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImRyb3BwYWJsZVJlZiIsIlNlbGVjdENvbXBvbmVudHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBV2FBOzs7ZUFBQUE7Ozs4REFUSzs2QkFDNkI7UUFJeEM7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFFWCxNQUFNRCxpQkFBNkQsQ0FBQ0U7SUFDekUsb0ZBQW9GO0lBQ3BGLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHRjtJQUU5QyxxQkFDRSw2QkFBQ0c7UUFBSUMsV0FBV0w7UUFBV00sS0FBS0gsYUFBYUk7cUJBQzNDLDZCQUFDQyx1QkFBZ0IsQ0FBQ1QsY0FBYyxFQUFLRTtBQUczQyJ9