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
const Chevron = ({ className, direction, size })=>/*#__PURE__*/ _react.default.createElement("svg", {
        className: [
            'icon icon--chevron',
            className,
            size && `icon--size-${size}`
        ].filter(Boolean).join(' '),
        viewBox: "0 0 9 7",
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        style: {
            transform: direction === 'left' ? 'rotate(90deg)' : direction === 'right' ? 'rotate(-90deg)' : direction === 'up' ? 'rotate(180deg)' : undefined
        }
    }, /*#__PURE__*/ _react.default.createElement("path", {
        className: "stroke",
        d: "M1.42871 1.5332L4.42707 4.96177L7.42543 1.5332"
    }));
const _default = Chevron;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2ljb25zL0NoZXZyb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IENoZXZyb246IFJlYWN0LkZDPHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGRpcmVjdGlvbj86ICdsZWZ0JyB8ICdyaWdodCcgfCAndXAnIHwgJ2Rvd24nXG4gIHNpemU/OiAnc21hbGwnIHwgJ2xhcmdlJ1xufT4gPSAoeyBjbGFzc05hbWUsIGRpcmVjdGlvbiwgc2l6ZSB9KSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9e1snaWNvbiBpY29uLS1jaGV2cm9uJywgY2xhc3NOYW1lLCBzaXplICYmIGBpY29uLS1zaXplLSR7c2l6ZX1gXVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLmpvaW4oJyAnKX1cbiAgICB2aWV3Qm94PVwiMCAwIDkgN1wiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgd2lkdGg9XCIxMDAlXCJcbiAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICBzdHlsZT17e1xuICAgICAgdHJhbnNmb3JtOlxuICAgICAgICBkaXJlY3Rpb24gPT09ICdsZWZ0J1xuICAgICAgICAgID8gJ3JvdGF0ZSg5MGRlZyknXG4gICAgICAgICAgOiBkaXJlY3Rpb24gPT09ICdyaWdodCdcbiAgICAgICAgICA/ICdyb3RhdGUoLTkwZGVnKSdcbiAgICAgICAgICA6IGRpcmVjdGlvbiA9PT0gJ3VwJ1xuICAgICAgICAgID8gJ3JvdGF0ZSgxODBkZWcpJ1xuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgIH19XG4gID5cbiAgICA8cGF0aCBjbGFzc05hbWU9XCJzdHJva2VcIiBkPVwiTTEuNDI4NzEgMS41MzMyTDQuNDI3MDcgNC45NjE3N0w3LjQyNTQzIDEuNTMzMlwiIC8+XG4gIDwvc3ZnPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDaGV2cm9uXG4iXSwibmFtZXMiOlsiQ2hldnJvbiIsImNsYXNzTmFtZSIsImRpcmVjdGlvbiIsInNpemUiLCJzdmciLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInZpZXdCb3giLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ1bmRlZmluZWQiLCJwYXRoIiwiZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWdDQTs7O2VBQUE7Ozs4REFoQ2tCO1FBRVg7Ozs7OztBQUVQLE1BQU1BLFVBSUQsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFLGlCQUNsQyw2QkFBQ0M7UUFDQ0gsV0FBVztZQUFDO1lBQXNCQTtZQUFXRSxRQUFRLENBQUMsV0FBVyxFQUFFQSxLQUFLLENBQUM7U0FBQyxDQUN2RUUsTUFBTSxDQUFDQyxTQUNQQyxJQUFJLENBQUM7UUFDUkMsU0FBUTtRQUNSQyxPQUFNO1FBQ05DLE9BQU07UUFDTkMsUUFBTztRQUNQQyxPQUFPO1lBQ0xDLFdBQ0VYLGNBQWMsU0FDVixrQkFDQUEsY0FBYyxVQUNkLG1CQUNBQSxjQUFjLE9BQ2QsbUJBQ0FZO1FBQ1I7cUJBRUEsNkJBQUNDO1FBQUtkLFdBQVU7UUFBU2UsR0FBRTs7TUFJL0IsV0FBZWhCIn0=