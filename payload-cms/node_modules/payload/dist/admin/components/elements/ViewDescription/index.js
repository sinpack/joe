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
const _types = require("./types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ViewDescription = (props)=>{
    const { i18n } = (0, _reacti18next.useTranslation)();
    const { description } = props;
    if ((0, _types.isComponent)(description)) {
        const Description = description;
        return /*#__PURE__*/ _react.default.createElement(Description, null);
    }
    if (description) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "view-description"
        }, typeof description === 'function' ? description() : (0, _getTranslation.getTranslation)(description, i18n));
    }
    return null;
};
const _default = ViewDescription;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1ZpZXdEZXNjcmlwdGlvbi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcbmltcG9ydCB7IGlzQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcydcblxuY29uc3QgVmlld0Rlc2NyaXB0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IHByb3BzXG5cbiAgaWYgKGlzQ29tcG9uZW50KGRlc2NyaXB0aW9uKSkge1xuICAgIGNvbnN0IERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICByZXR1cm4gPERlc2NyaXB0aW9uIC8+XG4gIH1cblxuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIHt0eXBlb2YgZGVzY3JpcHRpb24gPT09ICdmdW5jdGlvbicgPyBkZXNjcmlwdGlvbigpIDogZ2V0VHJhbnNsYXRpb24oZGVzY3JpcHRpb24sIGkxOG4pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld0Rlc2NyaXB0aW9uXG4iXSwibmFtZXMiOlsiVmlld0Rlc2NyaXB0aW9uIiwicHJvcHMiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJkZXNjcmlwdGlvbiIsImlzQ29tcG9uZW50IiwiRGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJnZXRUcmFuc2xhdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTZCQTs7O2VBQUE7Ozs4REE3QmtCOzhCQUNhO2dDQUlBO1FBQ3hCO3VCQUNxQjs7Ozs7O0FBRTVCLE1BQU1BLGtCQUFtQyxDQUFDQztJQUN4QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxJQUFBQSw0QkFBYztJQUMvQixNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHSDtJQUV4QixJQUFJSSxJQUFBQSxrQkFBVyxFQUFDRCxjQUFjO1FBQzVCLE1BQU1FLGNBQWNGO1FBQ3BCLHFCQUFPLDZCQUFDRTtJQUNWO0lBRUEsSUFBSUYsYUFBYTtRQUNmLHFCQUNFLDZCQUFDRztZQUFJQyxXQUFVO1dBQ1osT0FBT0osZ0JBQWdCLGFBQWFBLGdCQUFnQkssSUFBQUEsOEJBQWMsRUFBQ0wsYUFBYUY7SUFHdkY7SUFFQSxPQUFPO0FBQ1Q7TUFFQSxXQUFlRiJ9