"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PopupTrigger", {
    enumerable: true,
    get: function() {
        return PopupTrigger;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'popup-button';
const PopupTrigger = (props)=>{
    const { active, button, buttonType, className, setActive } = props;
    const classes = [
        baseClass,
        className,
        `${baseClass}--${buttonType}`
    ].filter(Boolean).join(' ');
    const handleClick = ()=>{
        setActive(!active);
    };
    if (buttonType === 'none') {
        return null;
    }
    if (buttonType === 'custom') {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: classes,
            onClick: handleClick,
            onKeyDown: (e)=>{
                if (e.key === 'Enter') handleClick();
            },
            role: "button",
            tabIndex: 0
        }, button);
    }
    return /*#__PURE__*/ _react.default.createElement("button", {
        className: classes,
        onClick: ()=>setActive(!active),
        tabIndex: 0,
        type: "button"
    }, button);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BvcHVwL1BvcHVwVHJpZ2dlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdwb3B1cC1idXR0b24nXG5cbmV4cG9ydCBjb25zdCBQb3B1cFRyaWdnZXI6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFjdGl2ZSwgYnV0dG9uLCBidXR0b25UeXBlLCBjbGFzc05hbWUsIHNldEFjdGl2ZSB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gW2Jhc2VDbGFzcywgY2xhc3NOYW1lLCBgJHtiYXNlQ2xhc3N9LS0ke2J1dHRvblR5cGV9YF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZSghYWN0aXZlKVxuICB9XG5cbiAgaWYgKGJ1dHRvblR5cGUgPT09ICdub25lJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAoYnV0dG9uVHlwZSA9PT0gJ2N1c3RvbScpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSBoYW5kbGVDbGljaygpXG4gICAgICAgIH19XG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgID5cbiAgICAgICAge2J1dHRvbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXN9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX0gdGFiSW5kZXg9ezB9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgIHtidXR0b259XG4gICAgPC9idXR0b24+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJQb3B1cFRyaWdnZXIiLCJiYXNlQ2xhc3MiLCJwcm9wcyIsImFjdGl2ZSIsImJ1dHRvbiIsImJ1dHRvblR5cGUiLCJjbGFzc05hbWUiLCJzZXRBY3RpdmUiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJoYW5kbGVDbGljayIsImRpdiIsIm9uQ2xpY2siLCJvbktleURvd24iLCJlIiwia2V5Iiwicm9sZSIsInRhYkluZGV4IiwidHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBUWFBOzs7ZUFBQUE7Ozs4REFSSztRQUlYOzs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBRVgsTUFBTUQsZUFBZ0MsQ0FBQ0U7SUFDNUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHTDtJQUU3RCxNQUFNTSxVQUFVO1FBQUNQO1FBQVdLO1FBQVcsQ0FBQyxFQUFFTCxVQUFVLEVBQUUsRUFBRUksV0FBVyxDQUFDO0tBQUMsQ0FBQ0ksTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFM0YsTUFBTUMsY0FBYztRQUNsQkwsVUFBVSxDQUFDSjtJQUNiO0lBRUEsSUFBSUUsZUFBZSxRQUFRO1FBQ3pCLE9BQU87SUFDVDtJQUVBLElBQUlBLGVBQWUsVUFBVTtRQUMzQixxQkFDRSw2QkFBQ1E7WUFDQ1AsV0FBV0U7WUFDWE0sU0FBU0Y7WUFDVEcsV0FBVyxDQUFDQztnQkFDVixJQUFJQSxFQUFFQyxHQUFHLEtBQUssU0FBU0w7WUFDekI7WUFDQU0sTUFBSztZQUNMQyxVQUFVO1dBRVRmO0lBR1A7SUFFQSxxQkFDRSw2QkFBQ0E7UUFBT0UsV0FBV0U7UUFBU00sU0FBUyxJQUFNUCxVQUFVLENBQUNKO1FBQVNnQixVQUFVO1FBQUdDLE1BQUs7T0FDOUVoQjtBQUdQIn0=