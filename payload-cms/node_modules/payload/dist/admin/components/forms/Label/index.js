'use client';
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
const _getTranslation = require("../../../../utilities/getTranslation");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Label = (props)=>{
    const { htmlFor, label, required = false } = props;
    const { i18n } = (0, _reacti18next.useTranslation)();
    if (label) {
        return /*#__PURE__*/ _react.default.createElement("label", {
            className: "field-label",
            htmlFor: htmlFor
        }, (0, _getTranslation.getTranslation)(label, i18n), required && /*#__PURE__*/ _react.default.createElement("span", {
            className: "required"
        }, "*"));
    }
    return null;
};
const _default = Label;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0xhYmVsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgTGFiZWw6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGh0bWxGb3IsIGxhYmVsLCByZXF1aXJlZCA9IGZhbHNlIH0gPSBwcm9wc1xuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBpZiAobGFiZWwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsXCIgaHRtbEZvcj17aHRtbEZvcn0+XG4gICAgICAgIHtnZXRUcmFuc2xhdGlvbihsYWJlbCwgaTE4bil9XG4gICAgICAgIHtyZXF1aXJlZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+fVxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBMYWJlbFxuIl0sIm5hbWVzIjpbIkxhYmVsIiwicHJvcHMiLCJodG1sRm9yIiwibGFiZWwiLCJyZXF1aXJlZCIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImNsYXNzTmFtZSIsImdldFRyYW5zbGF0aW9uIiwic3BhbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OzsrQkEwQkE7OztlQUFBOzs7OERBeEJrQjs4QkFDYTtnQ0FJQTtRQUN4Qjs7Ozs7O0FBRVAsTUFBTUEsUUFBeUIsQ0FBQ0M7SUFDOUIsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxLQUFLLEVBQUUsR0FBR0g7SUFDN0MsTUFBTSxFQUFFSSxJQUFJLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWM7SUFFL0IsSUFBSUgsT0FBTztRQUNULHFCQUNFLDZCQUFDQTtZQUFNSSxXQUFVO1lBQWNMLFNBQVNBO1dBQ3JDTSxJQUFBQSw4QkFBYyxFQUFDTCxPQUFPRSxPQUN0QkQsMEJBQVksNkJBQUNLO1lBQUtGLFdBQVU7V0FBVztJQUc5QztJQUVBLE9BQU87QUFDVDtNQUVBLFdBQWVQIn0=