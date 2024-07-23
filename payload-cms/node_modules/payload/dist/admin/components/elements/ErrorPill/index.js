"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorPill", {
    enumerable: true,
    get: function() {
        return ErrorPill;
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
const baseClass = 'error-pill';
const ErrorPill = (props)=>{
    const { className, count, withMessage } = props;
    const lessThan3Chars = !withMessage && count < 99;
    const { t } = (0, _reacti18next.useTranslation)();
    const classes = [
        baseClass,
        lessThan3Chars && `${baseClass}--fixed-width`,
        className && className
    ].filter(Boolean).join(' ');
    if (count === 0) return null;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__content`
    }, /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__count`
    }, count), withMessage && ` ${count > 1 ? t('general:errors') : t('general:error')}`));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0Vycm9yUGlsbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdlcnJvci1waWxsJ1xuXG5leHBvcnQgY29uc3QgRXJyb3JQaWxsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNvdW50LCB3aXRoTWVzc2FnZSB9ID0gcHJvcHNcbiAgY29uc3QgbGVzc1RoYW4zQ2hhcnMgPSAhd2l0aE1lc3NhZ2UgJiYgY291bnQgPCA5OVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBjb25zdCBjbGFzc2VzID0gW2Jhc2VDbGFzcywgbGVzc1RoYW4zQ2hhcnMgJiYgYCR7YmFzZUNsYXNzfS0tZml4ZWQtd2lkdGhgLCBjbGFzc05hbWUgJiYgY2xhc3NOYW1lXVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignICcpXG5cbiAgaWYgKGNvdW50ID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbnRlbnRgfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb3VudGB9Pntjb3VudH08L3NwYW4+XG4gICAgICAgIHt3aXRoTWVzc2FnZSAmJiBgICR7Y291bnQgPiAxID8gdCgnZ2VuZXJhbDplcnJvcnMnKSA6IHQoJ2dlbmVyYWw6ZXJyb3InKX1gfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJFcnJvclBpbGwiLCJiYXNlQ2xhc3MiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNvdW50Iiwid2l0aE1lc3NhZ2UiLCJsZXNzVGhhbjNDaGFycyIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsInNwYW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVNhQTs7O2VBQUFBOzs7OERBVEs7OEJBQ2E7UUFJeEI7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFFWCxNQUFNRCxZQUE2QixDQUFDRTtJQUN6QyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUUsR0FBR0g7SUFDMUMsTUFBTUksaUJBQWlCLENBQUNELGVBQWVELFFBQVE7SUFDL0MsTUFBTSxFQUFFRyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWM7SUFFNUIsTUFBTUMsVUFBVTtRQUFDUjtRQUFXSyxrQkFBa0IsQ0FBQyxFQUFFTCxVQUFVLGFBQWEsQ0FBQztRQUFFRSxhQUFhQTtLQUFVLENBQy9GTyxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztJQUVSLElBQUlSLFVBQVUsR0FBRyxPQUFPO0lBRXhCLHFCQUNFLDZCQUFDUztRQUFJVixXQUFXTTtxQkFDZCw2QkFBQ0k7UUFBSVYsV0FBVyxDQUFDLEVBQUVGLFVBQVUsU0FBUyxDQUFDO3FCQUNyQyw2QkFBQ2E7UUFBS1gsV0FBVyxDQUFDLEVBQUVGLFVBQVUsT0FBTyxDQUFDO09BQUdHLFFBQ3hDQyxlQUFlLENBQUMsQ0FBQyxFQUFFRCxRQUFRLElBQUlHLEVBQUUsb0JBQW9CQSxFQUFFLGlCQUFpQixDQUFDO0FBSWxGIn0=