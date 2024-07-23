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
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'template-minimal';
const Minimal = (props)=>{
    const { children, className, style = {}, width = 'normal' } = props;
    const classes = [
        className,
        baseClass,
        `${baseClass}--width-${width}`
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ _react.default.createElement("section", {
        className: classes,
        style: style
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrap`
    }, children));
};
const _default = Minimal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3RlbXBsYXRlcy9NaW5pbWFsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3RlbXBsYXRlLW1pbmltYWwnXG5cbmNvbnN0IE1pbmltYWw6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHN0eWxlID0ge30sIHdpZHRoID0gJ25vcm1hbCcgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NlcyA9IFtjbGFzc05hbWUsIGJhc2VDbGFzcywgYCR7YmFzZUNsYXNzfS0td2lkdGgtJHt3aWR0aH1gXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXtzdHlsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWluaW1hbFxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIk1pbmltYWwiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInNlY3Rpb24iLCJkaXYiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBb0JBOzs7ZUFBQTs7OzhEQXBCa0I7UUFJWDs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxVQUEyQixDQUFDQztJQUNoQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLENBQUMsQ0FBQyxFQUFFQyxRQUFRLFFBQVEsRUFBRSxHQUFHSjtJQUU5RCxNQUFNSyxVQUFVO1FBQUNIO1FBQVdKO1FBQVcsQ0FBQyxFQUFFQSxVQUFVLFFBQVEsRUFBRU0sTUFBTSxDQUFDO0tBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFNUYscUJBQ0UsNkJBQUNDO1FBQVFQLFdBQVdHO1FBQVNGLE9BQU9BO3FCQUNsQyw2QkFBQ087UUFBSVIsV0FBVyxDQUFDLEVBQUVKLFVBQVUsTUFBTSxDQUFDO09BQUdHO0FBRzdDO01BRUEsV0FBZUYifQ==