"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Button: function() {
        return Button;
    },
    ButtonGroup: function() {
        return ButtonGroup;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactrouterdom = require("react-router-dom");
require("./index.scss");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const baseClass = 'popup-button-list';
const ButtonGroup = ({ buttonSize = 'default', children, className, textAlign = 'left' })=>{
    const classes = [
        baseClass,
        className,
        `${baseClass}__text-align--${textAlign}`,
        `${baseClass}__button-size--${buttonSize}`
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ _react.createElement("div", {
        className: classes
    }, children);
};
const Button = ({ id, active, children, className, disabled, onClick, to })=>{
    const classes = [
        `${baseClass}__button`,
        active && `${baseClass}__button--selected`,
        className
    ].filter(Boolean).join(' ');
    if (to) {
        return /*#__PURE__*/ _react.createElement(_reactrouterdom.Link, {
            className: classes,
            id: id,
            onClick: ()=>{
                if (onClick) {
                    onClick();
                }
            },
            to: to
        }, children);
    }
    if (onClick) {
        return /*#__PURE__*/ _react.createElement("button", {
            className: classes,
            disabled: disabled,
            id: id,
            onClick: ()=>{
                if (onClick) {
                    onClick();
                }
            },
            type: "button"
        }, children);
    }
    return /*#__PURE__*/ _react.createElement("div", {
        className: classes,
        id: id
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BvcHVwL1BvcHVwQnV0dG9uTGlzdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBMaW5rUHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3BvcHVwLWJ1dHRvbi1saXN0J1xuZXhwb3J0IGNvbnN0IEJ1dHRvbkdyb3VwOiBSZWFjdC5GQzx7XG4gIGJ1dHRvblNpemU/OiAnZGVmYXVsdCcgfCAnc21hbGwnXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHRleHRBbGlnbj86ICdjZW50ZXInIHwgJ2xlZnQnIHwgJ3JpZ2h0J1xufT4gPSAoeyBidXR0b25TaXplID0gJ2RlZmF1bHQnLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCB0ZXh0QWxpZ24gPSAnbGVmdCcgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7YmFzZUNsYXNzfV9fdGV4dC1hbGlnbi0tJHt0ZXh0QWxpZ259YCxcbiAgICBgJHtiYXNlQ2xhc3N9X19idXR0b24tc2l6ZS0tJHtidXR0b25TaXplfWAsXG4gIF1cbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJyAnKVxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PntjaGlsZHJlbn08L2Rpdj5cbn1cblxudHlwZSBNZW51QnV0dG9uUHJvcHMgPSB7XG4gIGFjdGl2ZT86IGJvb2xlYW5cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGlkPzogc3RyaW5nXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkXG4gIHRvPzogTGlua1Byb3BzWyd0byddXG59XG5leHBvcnQgY29uc3QgQnV0dG9uOiBSZWFjdC5GQzxNZW51QnV0dG9uUHJvcHM+ID0gKHtcbiAgaWQsXG4gIGFjdGl2ZSxcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgZGlzYWJsZWQsXG4gIG9uQ2xpY2ssXG4gIHRvLFxufSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gW2Ake2Jhc2VDbGFzc31fX2J1dHRvbmAsIGFjdGl2ZSAmJiBgJHtiYXNlQ2xhc3N9X19idXR0b24tLXNlbGVjdGVkYCwgY2xhc3NOYW1lXVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignICcpXG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICAgIG9uQ2xpY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgdG89e3RvfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0xpbms+XG4gICAgKVxuICB9XG5cbiAgaWYgKG9uQ2xpY2spIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICAgIG9uQ2xpY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IGlkPXtpZH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJCdXR0b25Hcm91cCIsImJhc2VDbGFzcyIsImJ1dHRvblNpemUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInRleHRBbGlnbiIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsImlkIiwiYWN0aXZlIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwidG8iLCJMaW5rIiwiYnV0dG9uIiwidHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWtDYUEsTUFBTTtlQUFOQTs7SUExQkFDLFdBQVc7ZUFBWEE7OzsrREFOVTtnQ0FDRjtRQUVkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBQ1gsTUFBTUQsY0FLUixDQUFDLEVBQUVFLGFBQWEsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxNQUFNLEVBQUU7SUFDdkUsTUFBTUMsVUFBVTtRQUNkTDtRQUNBRztRQUNBLENBQUMsRUFBRUgsVUFBVSxjQUFjLEVBQUVJLFVBQVUsQ0FBQztRQUN4QyxDQUFDLEVBQUVKLFVBQVUsZUFBZSxFQUFFQyxXQUFXLENBQUM7S0FDM0MsQ0FDRUssTUFBTSxDQUFDQyxTQUNQQyxJQUFJLENBQUM7SUFDUixxQkFBTyxxQkFBQ0M7UUFBSU4sV0FBV0U7T0FBVUg7QUFDbkM7QUFXTyxNQUFNSixTQUFvQyxDQUFDLEVBQ2hEWSxFQUFFLEVBQ0ZDLE1BQU0sRUFDTlQsUUFBUSxFQUNSQyxTQUFTLEVBQ1RTLFFBQVEsRUFDUkMsT0FBTyxFQUNQQyxFQUFFLEVBQ0g7SUFDQyxNQUFNVCxVQUFVO1FBQUMsQ0FBQyxFQUFFTCxVQUFVLFFBQVEsQ0FBQztRQUFFVyxVQUFVLENBQUMsRUFBRVgsVUFBVSxrQkFBa0IsQ0FBQztRQUFFRztLQUFVLENBQzVGRyxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztJQUVSLElBQUlNLElBQUk7UUFDTixxQkFDRSxxQkFBQ0Msb0JBQUk7WUFDSFosV0FBV0U7WUFDWEssSUFBSUE7WUFDSkcsU0FBUztnQkFDUCxJQUFJQSxTQUFTO29CQUNYQTtnQkFDRjtZQUNGO1lBQ0FDLElBQUlBO1dBRUhaO0lBR1A7SUFFQSxJQUFJVyxTQUFTO1FBQ1gscUJBQ0UscUJBQUNHO1lBQ0NiLFdBQVdFO1lBQ1hPLFVBQVVBO1lBQ1ZGLElBQUlBO1lBQ0pHLFNBQVM7Z0JBQ1AsSUFBSUEsU0FBUztvQkFDWEE7Z0JBQ0Y7WUFDRjtZQUNBSSxNQUFLO1dBRUpmO0lBR1A7SUFFQSxxQkFDRSxxQkFBQ087UUFBSU4sV0FBV0U7UUFBU0ssSUFBSUE7T0FDMUJSO0FBR1AifQ==