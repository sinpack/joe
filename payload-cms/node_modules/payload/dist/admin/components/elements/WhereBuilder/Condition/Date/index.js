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
const _DatePicker = /*#__PURE__*/ _interop_require_default(require("../../../DatePicker"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'condition-value-date';
const DateField = ({ admin, disabled, onChange, value })=>{
    const { date } = admin || {};
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_DatePicker.default, {
        ...date,
        onChange: onChange,
        readOnly: disabled,
        value: value
    }));
};
const _default = DateField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vRGF0ZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi4vLi4vLi4vRGF0ZVBpY2tlcidcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbmRpdGlvbi12YWx1ZS1kYXRlJ1xuXG5jb25zdCBEYXRlRmllbGQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFkbWluLCBkaXNhYmxlZCwgb25DaGFuZ2UsIHZhbHVlIH0pID0+IHtcbiAgY29uc3QgeyBkYXRlIH0gPSBhZG1pbiB8fCB7fVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8RGF0ZVBpY2tlciB7Li4uZGF0ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSByZWFkT25seT17ZGlzYWJsZWR9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlRmllbGRcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEYXRlRmllbGQiLCJhZG1pbiIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImRhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJEYXRlUGlja2VyIiwicmVhZE9ubHkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBa0JBOzs7ZUFBQTs7OzhEQWxCa0I7bUVBSUs7Ozs7OztBQUV2QixNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLFlBQTZCLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO0lBQ3RFLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdKLFNBQVMsQ0FBQztJQUUzQixxQkFDRSw2QkFBQ0s7UUFBSUMsV0FBV1I7cUJBQ2QsNkJBQUNTLG1CQUFVO1FBQUUsR0FBR0gsSUFBSTtRQUFFRixVQUFVQTtRQUFVTSxVQUFVUDtRQUFVRSxPQUFPQTs7QUFHM0U7TUFFQSxXQUFlSiJ9