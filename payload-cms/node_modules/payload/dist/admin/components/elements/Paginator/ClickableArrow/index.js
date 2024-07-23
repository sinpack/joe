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
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _Chevron = /*#__PURE__*/ _interop_require_default(require("../../../icons/Chevron"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'clickable-arrow';
const ClickableArrow = (props)=>{
    const { direction = 'right', isDisabled = false, updatePage } = props;
    const classes = [
        baseClass,
        isDisabled && `${baseClass}--is-disabled`,
        direction && `${baseClass}--${direction}`
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ _react.default.createElement("button", {
        className: classes,
        disabled: isDisabled,
        onClick: !isDisabled ? updatePage : undefined,
        type: "button"
    }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, null));
};
const _default = ClickableArrow;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BhZ2luYXRvci9DbGlja2FibGVBcnJvdy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IENoZXZyb24gZnJvbSAnLi4vLi4vLi4vaWNvbnMvQ2hldnJvbidcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnY2xpY2thYmxlLWFycm93J1xuXG5jb25zdCBDbGlja2FibGVBcnJvdzogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGlyZWN0aW9uID0gJ3JpZ2h0JywgaXNEaXNhYmxlZCA9IGZhbHNlLCB1cGRhdGVQYWdlIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGlzRGlzYWJsZWQgJiYgYCR7YmFzZUNsYXNzfS0taXMtZGlzYWJsZWRgLFxuICAgIGRpcmVjdGlvbiAmJiBgJHtiYXNlQ2xhc3N9LS0ke2RpcmVjdGlvbn1gLFxuICBdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKCcgJylcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgb25DbGljaz17IWlzRGlzYWJsZWQgPyB1cGRhdGVQYWdlIDogdW5kZWZpbmVkfVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgPlxuICAgICAgPENoZXZyb24gLz5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGlja2FibGVBcnJvd1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkNsaWNrYWJsZUFycm93IiwicHJvcHMiLCJkaXJlY3Rpb24iLCJpc0Rpc2FibGVkIiwidXBkYXRlUGFnZSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwib25DbGljayIsInVuZGVmaW5lZCIsInR5cGUiLCJDaGV2cm9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFnQ0E7OztlQUFBOzs7OERBaENrQjtnRUFJRTtRQUNiOzs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLGlCQUFrQyxDQUFDQztJQUN2QyxNQUFNLEVBQUVDLFlBQVksT0FBTyxFQUFFQyxhQUFhLEtBQUssRUFBRUMsVUFBVSxFQUFFLEdBQUdIO0lBRWhFLE1BQU1JLFVBQVU7UUFDZE47UUFDQUksY0FBYyxDQUFDLEVBQUVKLFVBQVUsYUFBYSxDQUFDO1FBQ3pDRyxhQUFhLENBQUMsRUFBRUgsVUFBVSxFQUFFLEVBQUVHLFVBQVUsQ0FBQztLQUMxQyxDQUNFSSxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztJQUVSLHFCQUNFLDZCQUFDQztRQUNDQyxXQUFXTDtRQUNYTSxVQUFVUjtRQUNWUyxTQUFTLENBQUNULGFBQWFDLGFBQWFTO1FBQ3BDQyxNQUFLO3FCQUVMLDZCQUFDQyxnQkFBTztBQUdkO01BRUEsV0FBZWYifQ==