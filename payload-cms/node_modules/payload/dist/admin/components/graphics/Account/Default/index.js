"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DefaultAccountIcon", {
    enumerable: true,
    get: function() {
        return DefaultAccountIcon;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'graphic-account';
const DefaultAccountIcon = (props)=>/*#__PURE__*/ _react.default.createElement("svg", {
        className: [
            baseClass,
            props?.active && `${baseClass}--active`
        ].filter(Boolean).join(' '),
        height: "25",
        viewBox: "0 0 25 25",
        width: "25",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ _react.default.createElement("circle", {
        className: `${baseClass}__bg`,
        cx: "12.5",
        cy: "12.5",
        r: "11.5"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        className: `${baseClass}__head`,
        cx: "12.5",
        cy: "10.73",
        r: "3.98"
    }), /*#__PURE__*/ _react.default.createElement("path", {
        className: `${baseClass}__body`,
        d: "M12.5,24a11.44,11.44,0,0,0,7.66-2.94c-.5-2.71-3.73-4.8-7.66-4.8s-7.16,2.09-7.66,4.8A11.44,11.44,0,0,0,12.5,24Z"
    }));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyYXBoaWNzL0FjY291bnQvRGVmYXVsdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2dyYXBoaWMtYWNjb3VudCdcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRBY2NvdW50SWNvbjogUmVhY3QuRkM8e1xuICBhY3RpdmU6IGJvb2xlYW5cbn0+ID0gKHByb3BzKSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9e1tiYXNlQ2xhc3MsIHByb3BzPy5hY3RpdmUgJiYgYCR7YmFzZUNsYXNzfS0tYWN0aXZlYF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICBoZWlnaHQ9XCIyNVwiXG4gICAgdmlld0JveD1cIjAgMCAyNSAyNVwiXG4gICAgd2lkdGg9XCIyNVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8Y2lyY2xlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYmdgfSBjeD1cIjEyLjVcIiBjeT1cIjEyLjVcIiByPVwiMTEuNVwiIC8+XG4gICAgPGNpcmNsZSBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRgfSBjeD1cIjEyLjVcIiBjeT1cIjEwLjczXCIgcj1cIjMuOThcIiAvPlxuICAgIDxwYXRoXG4gICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JvZHlgfVxuICAgICAgZD1cIk0xMi41LDI0YTExLjQ0LDExLjQ0LDAsMCwwLDcuNjYtMi45NGMtLjUtMi43MS0zLjczLTQuOC03LjY2LTQuOHMtNy4xNiwyLjA5LTcuNjYsNC44QTExLjQ0LDExLjQ0LDAsMCwwLDEyLjUsMjRaXCJcbiAgICAvPlxuICA8L3N2Zz5cbilcbiJdLCJuYW1lcyI6WyJEZWZhdWx0QWNjb3VudEljb24iLCJiYXNlQ2xhc3MiLCJwcm9wcyIsInN2ZyIsImNsYXNzTmFtZSIsImFjdGl2ZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiaGVpZ2h0Iiwidmlld0JveCIsIndpZHRoIiwieG1sbnMiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInBhdGgiLCJkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFNYUE7OztlQUFBQTs7OzhEQU5LO1FBRVg7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFFWCxNQUFNRCxxQkFFUixDQUFDRSxzQkFDSiw2QkFBQ0M7UUFDQ0MsV0FBVztZQUFDSDtZQUFXQyxPQUFPRyxVQUFVLENBQUMsRUFBRUosVUFBVSxRQUFRLENBQUM7U0FBQyxDQUFDSyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztRQUNyRkMsUUFBTztRQUNQQyxTQUFRO1FBQ1JDLE9BQU07UUFDTkMsT0FBTTtxQkFFTiw2QkFBQ0M7UUFBT1QsV0FBVyxDQUFDLEVBQUVILFVBQVUsSUFBSSxDQUFDO1FBQUVhLElBQUc7UUFBT0MsSUFBRztRQUFPQyxHQUFFO3NCQUM3RCw2QkFBQ0g7UUFBT1QsV0FBVyxDQUFDLEVBQUVILFVBQVUsTUFBTSxDQUFDO1FBQUVhLElBQUc7UUFBT0MsSUFBRztRQUFRQyxHQUFFO3NCQUNoRSw2QkFBQ0M7UUFDQ2IsV0FBVyxDQUFDLEVBQUVILFVBQVUsTUFBTSxDQUFDO1FBQy9CaUIsR0FBRSJ9