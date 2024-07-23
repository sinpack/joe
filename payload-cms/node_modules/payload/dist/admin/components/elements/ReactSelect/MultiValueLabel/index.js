"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultiValueLabel", {
    enumerable: true,
    get: function() {
        return MultiValueLabel;
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
const baseClass = 'multi-value-label';
const MultiValueLabel = (props)=>{
    // @ts-expect-error // TODO Fix this - moduleResolution 16 breaks our declare module
    const { selectProps: { customProps: { draggableProps } = {} } = {} } = props;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_reactselect.components.MultiValueLabel, {
        ...props,
        innerProps: {
            className: `${baseClass}__text`,
            ...draggableProps || {}
        }
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L011bHRpVmFsdWVMYWJlbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBNdWx0aVZhbHVlUHJvcHMgfSBmcm9tICdyZWFjdC1zZWxlY3QnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbXBvbmVudHMgYXMgU2VsZWN0Q29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCdcblxuaW1wb3J0IHR5cGUgeyBPcHRpb24gfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdtdWx0aS12YWx1ZS1sYWJlbCdcblxuZXhwb3J0IGNvbnN0IE11bHRpVmFsdWVMYWJlbDogUmVhY3QuRkM8TXVsdGlWYWx1ZVByb3BzPE9wdGlvbj4+ID0gKHByb3BzKSA9PiB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLy8gVE9ETyBGaXggdGhpcyAtIG1vZHVsZVJlc29sdXRpb24gMTYgYnJlYWtzIG91ciBkZWNsYXJlIG1vZHVsZVxuICBjb25zdCB7IHNlbGVjdFByb3BzOiB7IGN1c3RvbVByb3BzOiB7IGRyYWdnYWJsZVByb3BzIH0gPSB7fSB9ID0ge30gfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxTZWxlY3RDb21wb25lbnRzLk11bHRpVmFsdWVMYWJlbFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGlubmVyUHJvcHM9e3tcbiAgICAgICAgICBjbGFzc05hbWU6IGAke2Jhc2VDbGFzc31fX3RleHRgLFxuICAgICAgICAgIC4uLihkcmFnZ2FibGVQcm9wcyB8fCB7fSksXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiTXVsdGlWYWx1ZUxhYmVsIiwiYmFzZUNsYXNzIiwicHJvcHMiLCJzZWxlY3RQcm9wcyIsImN1c3RvbVByb3BzIiwiZHJhZ2dhYmxlUHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJTZWxlY3RDb21wb25lbnRzIiwiaW5uZXJQcm9wcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVdhQTs7O2VBQUFBOzs7OERBVEs7NkJBQzZCO1FBSXhDOzs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBRVgsTUFBTUQsa0JBQXFELENBQUNFO0lBQ2pFLG9GQUFvRjtJQUNwRixNQUFNLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUdIO0lBRXZFLHFCQUNFLDZCQUFDSTtRQUFJQyxXQUFXTjtxQkFDZCw2QkFBQ08sdUJBQWdCLENBQUNSLGVBQWU7UUFDOUIsR0FBR0UsS0FBSztRQUNUTyxZQUFZO1lBQ1ZGLFdBQVcsQ0FBQyxFQUFFTixVQUFVLE1BQU0sQ0FBQztZQUMvQixHQUFJSSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFCOztBQUlSIn0=