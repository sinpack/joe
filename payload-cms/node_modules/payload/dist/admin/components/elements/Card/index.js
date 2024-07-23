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
const _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'card';
const Card = (props)=>{
    const { id, actions, buttonAriaLabel, onClick, title, titleAs } = props;
    const classes = [
        baseClass,
        id,
        onClick && `${baseClass}--has-onclick`
    ].filter(Boolean).join(' ');
    const Tag = titleAs ?? 'div';
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes,
        id: id
    }, /*#__PURE__*/ _react.default.createElement(Tag, {
        className: `${baseClass}__title`
    }, title), actions && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__actions`
    }, actions), onClick && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        "aria-label": buttonAriaLabel,
        buttonStyle: "none",
        className: `${baseClass}__click`,
        onClick: onClick
    }));
};
const _default = Card;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NhcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjYXJkJ1xuXG5jb25zdCBDYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpZCwgYWN0aW9ucywgYnV0dG9uQXJpYUxhYmVsLCBvbkNsaWNrLCB0aXRsZSwgdGl0bGVBcyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gW2Jhc2VDbGFzcywgaWQsIG9uQ2xpY2sgJiYgYCR7YmFzZUNsYXNzfS0taGFzLW9uY2xpY2tgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG5cbiAgY29uc3QgVGFnID0gdGl0bGVBcyA/PyAnZGl2J1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IGlkPXtpZH0+XG4gICAgICA8VGFnIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGl0bGVgfT57dGl0bGV9PC9UYWc+XG4gICAgICB7YWN0aW9ucyAmJiA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9uc2B9PnthY3Rpb25zfTwvZGl2Pn1cbiAgICAgIHtvbkNsaWNrICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9e2J1dHRvbkFyaWFMYWJlbH1cbiAgICAgICAgICBidXR0b25TdHlsZT1cIm5vbmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY2xpY2tgfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJDYXJkIiwicHJvcHMiLCJpZCIsImFjdGlvbnMiLCJidXR0b25BcmlhTGFiZWwiLCJvbkNsaWNrIiwidGl0bGUiLCJ0aXRsZUFzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiVGFnIiwiZGl2IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYXJpYS1sYWJlbCIsImJ1dHRvblN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWdDQTs7O2VBQUE7Ozs4REFoQ2tCOytEQUlDO1FBQ1o7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsT0FBd0IsQ0FBQ0M7SUFDN0IsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLE9BQU8sRUFBRUMsZUFBZSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQUdOO0lBRWxFLE1BQU1PLFVBQVU7UUFBQ1Q7UUFBV0c7UUFBSUcsV0FBVyxDQUFDLEVBQUVOLFVBQVUsYUFBYSxDQUFDO0tBQUMsQ0FBQ1UsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFN0YsTUFBTUMsTUFBTUwsV0FBVztJQUV2QixxQkFDRSw2QkFBQ007UUFBSUMsV0FBV047UUFBU04sSUFBSUE7cUJBQzNCLDZCQUFDVTtRQUFJRSxXQUFXLENBQUMsRUFBRWYsVUFBVSxPQUFPLENBQUM7T0FBR08sUUFDdkNILHlCQUFXLDZCQUFDVTtRQUFJQyxXQUFXLENBQUMsRUFBRWYsVUFBVSxTQUFTLENBQUM7T0FBR0ksVUFDckRFLHlCQUNDLDZCQUFDVSxlQUFNO1FBQ0xDLGNBQVlaO1FBQ1phLGFBQVk7UUFDWkgsV0FBVyxDQUFDLEVBQUVmLFVBQVUsT0FBTyxDQUFDO1FBQ2hDTSxTQUFTQTs7QUFLbkI7TUFFQSxXQUFlTCJ9