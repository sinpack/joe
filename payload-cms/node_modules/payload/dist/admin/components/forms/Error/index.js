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
const _Tooltip = /*#__PURE__*/ _interop_require_default(require("../../elements/Tooltip"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'field-error';
const Error = (props)=>{
    const { alignCaret = 'right', message, showError = false } = props;
    if (showError) {
        return /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
            alignCaret: alignCaret,
            className: baseClass,
            delay: 0
        }, message);
    }
    return null;
};
const _default = Error;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Vycm9yL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi8uLi9lbGVtZW50cy9Ub29sdGlwJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdmaWVsZC1lcnJvcidcblxuY29uc3QgRXJyb3I6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFsaWduQ2FyZXQgPSAncmlnaHQnLCBtZXNzYWdlLCBzaG93RXJyb3IgPSBmYWxzZSB9ID0gcHJvcHNcblxuICBpZiAoc2hvd0Vycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwIGFsaWduQ2FyZXQ9e2FsaWduQ2FyZXR9IGNsYXNzTmFtZT17YmFzZUNsYXNzfSBkZWxheT17MH0+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9Ub29sdGlwPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiRXJyb3IiLCJwcm9wcyIsImFsaWduQ2FyZXQiLCJtZXNzYWdlIiwic2hvd0Vycm9yIiwiVG9vbHRpcCIsImNsYXNzTmFtZSIsImRlbGF5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF1QkE7OztlQUFBOzs7OERBdkJrQjtnRUFJRTtRQUNiOzs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLFFBQXlCLENBQUNDO0lBQzlCLE1BQU0sRUFBRUMsYUFBYSxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxLQUFLLEVBQUUsR0FBR0g7SUFFN0QsSUFBSUcsV0FBVztRQUNiLHFCQUNFLDZCQUFDQyxnQkFBTztZQUFDSCxZQUFZQTtZQUFZSSxXQUFXUDtZQUFXUSxPQUFPO1dBQzNESjtJQUdQO0lBRUEsT0FBTztBQUNUO01BRUEsV0FBZUgifQ==