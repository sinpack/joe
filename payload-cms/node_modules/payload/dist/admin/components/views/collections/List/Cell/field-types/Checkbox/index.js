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
const _reacti18next = require("react-i18next");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Handles boolean values
const Checkbox = ({ data })=>{
    const { t } = (0, _reacti18next.useTranslation)('general');
    if (typeof data !== 'boolean') return null;
    return /*#__PURE__*/ _react.default.createElement("code", {
        className: "bool-cell"
    }, /*#__PURE__*/ _react.default.createElement("span", null, t(`${data}`).toLowerCase()));
};
const _default = Checkbox;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9DaGVja2JveC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IENoZWNrYm94RmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9leHBvcnRzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBDZWxsQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcydcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbi8vIEhhbmRsZXMgYm9vbGVhbiB2YWx1ZXNcbmNvbnN0IENoZWNrYm94OiBSZWFjdC5GQzxDZWxsQ29tcG9uZW50UHJvcHM8Q2hlY2tib3hGaWVsZD4+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuICBpZiAodHlwZW9mIGRhdGEgIT09ICdib29sZWFuJykgcmV0dXJuIG51bGxcbiAgcmV0dXJuIChcbiAgICA8Y29kZSBjbGFzc05hbWU9XCJib29sLWNlbGxcIj5cbiAgICAgIDxzcGFuPnt0KGAke2RhdGF9YCkudG9Mb3dlckNhc2UoKX08L3NwYW4+XG4gICAgPC9jb2RlPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuIl0sIm5hbWVzIjpbIkNoZWNrYm94IiwiZGF0YSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImNvZGUiLCJjbGFzc05hbWUiLCJzcGFuIiwidG9Mb3dlckNhc2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBa0JBOzs7ZUFBQTs7OzhEQWxCa0I7OEJBQ2E7UUFLeEI7Ozs7OztBQUVQLHlCQUF5QjtBQUN6QixNQUFNQSxXQUF3RCxDQUFDLEVBQUVDLElBQUksRUFBRTtJQUNyRSxNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBQzdCLElBQUksT0FBT0YsU0FBUyxXQUFXLE9BQU87SUFDdEMscUJBQ0UsNkJBQUNHO1FBQUtDLFdBQVU7cUJBQ2QsNkJBQUNDLGNBQU1KLEVBQUUsQ0FBQyxFQUFFRCxLQUFLLENBQUMsRUFBRU0sV0FBVztBQUdyQztNQUNBLFdBQWVQIn0=