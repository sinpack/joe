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
const baseClass = 'field-description';
const FieldDescription = (props)=>{
    const { className, description, marginPlacement, path, value } = props;
    const { i18n } = (0, _reacti18next.useTranslation)();
    if ((0, _types.isComponent)(description)) {
        const Description = description;
        return /*#__PURE__*/ _react.default.createElement(Description, {
            path: path,
            value: value
        });
    }
    if (description) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: [
                baseClass,
                className,
                marginPlacement && `${baseClass}--margin-${marginPlacement}`
            ].filter(Boolean).join(' ')
        }, typeof description === 'function' ? description({
            path,
            value
        }) : (0, _getTranslation.getTranslation)(description, i18n));
    }
    return null;
};
const _default = FieldDescription;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0ZpZWxkRGVzY3JpcHRpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5pbXBvcnQgeyBpc0NvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdmaWVsZC1kZXNjcmlwdGlvbidcblxuY29uc3QgRmllbGREZXNjcmlwdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBkZXNjcmlwdGlvbiwgbWFyZ2luUGxhY2VtZW50LCBwYXRoLCB2YWx1ZSB9ID0gcHJvcHNcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBpZiAoaXNDb21wb25lbnQoZGVzY3JpcHRpb24pKSB7XG4gICAgY29uc3QgRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHJldHVybiA8RGVzY3JpcHRpb24gcGF0aD17cGF0aH0gdmFsdWU9e3ZhbHVlfSAvPlxuICB9XG5cbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBtYXJnaW5QbGFjZW1lbnQgJiYgYCR7YmFzZUNsYXNzfS0tbWFyZ2luLSR7bWFyZ2luUGxhY2VtZW50fWAsXG4gICAgICAgIF1cbiAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgID5cbiAgICAgICAge3R5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gZGVzY3JpcHRpb24oeyBwYXRoLCB2YWx1ZSB9KVxuICAgICAgICAgIDogZ2V0VHJhbnNsYXRpb24oZGVzY3JpcHRpb24sIGkxOG4pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGREZXNjcmlwdGlvblxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkZpZWxkRGVzY3JpcHRpb24iLCJwcm9wcyIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwibWFyZ2luUGxhY2VtZW50IiwicGF0aCIsInZhbHVlIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwiaXNDb21wb25lbnQiLCJEZXNjcmlwdGlvbiIsImRpdiIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZ2V0VHJhbnNsYXRpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTBDQTs7O2VBQUE7Ozs4REExQ2tCOzhCQUNhO2dDQUlBO1FBQ3hCO3VCQUNxQjs7Ozs7O0FBRTVCLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsbUJBQW9DLENBQUNDO0lBQ3pDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGVBQWUsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0w7SUFFakUsTUFBTSxFQUFFTSxJQUFJLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWM7SUFFL0IsSUFBSUMsSUFBQUEsa0JBQVcsRUFBQ04sY0FBYztRQUM1QixNQUFNTyxjQUFjUDtRQUNwQixxQkFBTyw2QkFBQ087WUFBWUwsTUFBTUE7WUFBTUMsT0FBT0E7O0lBQ3pDO0lBRUEsSUFBSUgsYUFBYTtRQUNmLHFCQUNFLDZCQUFDUTtZQUNDVCxXQUFXO2dCQUNUSDtnQkFDQUc7Z0JBQ0FFLG1CQUFtQixDQUFDLEVBQUVMLFVBQVUsU0FBUyxFQUFFSyxnQkFBZ0IsQ0FBQzthQUM3RCxDQUNFUSxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztXQUVQLE9BQU9YLGdCQUFnQixhQUNwQkEsWUFBWTtZQUFFRTtZQUFNQztRQUFNLEtBQzFCUyxJQUFBQSw4QkFBYyxFQUFDWixhQUFhSTtJQUd0QztJQUVBLE9BQU87QUFDVDtNQUVBLFdBQWVQIn0=