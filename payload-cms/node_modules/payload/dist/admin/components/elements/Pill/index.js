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
const _reactrouterdom = require("react-router-dom");
const _useDraggableSortable = require("../DraggableSortable/useDraggableSortable");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'pill';
const DraggablePill = (props)=>{
    const { id, className } = props;
    const { attributes, isDragging, listeners, setNodeRef, transform } = (0, _useDraggableSortable.useDraggableSortable)({
        id
    });
    return /*#__PURE__*/ _react.default.createElement(StaticPill, {
        ...props,
        className: [
            isDragging && `${baseClass}--is-dragging`,
            className
        ].filter(Boolean).join(' '),
        elementProps: {
            ...listeners,
            ...attributes,
            ref: setNodeRef,
            style: {
                transform
            }
        }
    });
};
const StaticPill = (props)=>{
    const { alignIcon = 'right', 'aria-checked': ariaChecked, 'aria-controls': ariaControls, 'aria-expanded': ariaExpanded, 'aria-label': ariaLabel, children, className, draggable, elementProps, icon, onClick, pillStyle = 'light', rounded, to } = props;
    const classes = [
        baseClass,
        `${baseClass}--style-${pillStyle}`,
        className && className,
        to && `${baseClass}--has-link`,
        (to || onClick) && `${baseClass}--has-action`,
        icon && `${baseClass}--has-icon`,
        icon && `${baseClass}--align-icon-${alignIcon}`,
        draggable && `${baseClass}--draggable`,
        rounded && `${baseClass}--rounded`
    ].filter(Boolean).join(' ');
    let Element = 'div';
    if (onClick && !to) Element = 'button';
    if (to) Element = _reactrouterdom.Link;
    return /*#__PURE__*/ _react.default.createElement(Element, {
        ...elementProps,
        "aria-checked": ariaChecked,
        "aria-controls": ariaControls,
        "aria-expanded": ariaExpanded,
        "aria-label": ariaLabel,
        className: classes,
        onClick: onClick,
        to: to || undefined,
        type: Element === 'button' ? 'button' : undefined
    }, icon && alignIcon === 'left' && /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__icon`
    }, icon), /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__label`
    }, children), icon && alignIcon === 'right' && /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__icon`
    }, icon));
};
const Pill = (props)=>{
    const { draggable } = props;
    if (draggable) return /*#__PURE__*/ _react.default.createElement(DraggablePill, props);
    return /*#__PURE__*/ _react.default.createElement(StaticPill, props);
};
const _default = Pill;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BpbGwvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRWxlbWVudFR5cGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMsIFJlbmRlcmVkVHlwZVByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgdXNlRHJhZ2dhYmxlU29ydGFibGUgfSBmcm9tICcuLi9EcmFnZ2FibGVTb3J0YWJsZS91c2VEcmFnZ2FibGVTb3J0YWJsZSdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncGlsbCdcblxuY29uc3QgRHJhZ2dhYmxlUGlsbDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWQsIGNsYXNzTmFtZSB9ID0gcHJvcHNcblxuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGlzRHJhZ2dpbmcsIGxpc3RlbmVycywgc2V0Tm9kZVJlZiwgdHJhbnNmb3JtIH0gPSB1c2VEcmFnZ2FibGVTb3J0YWJsZSh7XG4gICAgaWQsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8U3RhdGljUGlsbFxuICAgICAgey4uLnByb3BzfVxuICAgICAgY2xhc3NOYW1lPXtbaXNEcmFnZ2luZyAmJiBgJHtiYXNlQ2xhc3N9LS1pcy1kcmFnZ2luZ2AsIGNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgIGVsZW1lbnRQcm9wcz17e1xuICAgICAgICAuLi5saXN0ZW5lcnMsXG4gICAgICAgIC4uLmF0dHJpYnV0ZXMsXG4gICAgICAgIHJlZjogc2V0Tm9kZVJlZixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm0sXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgIC8+XG4gIClcbn1cblxuY29uc3QgU3RhdGljUGlsbDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhbGlnbkljb24gPSAncmlnaHQnLFxuICAgICdhcmlhLWNoZWNrZWQnOiBhcmlhQ2hlY2tlZCxcbiAgICAnYXJpYS1jb250cm9scyc6IGFyaWFDb250cm9scyxcbiAgICAnYXJpYS1leHBhbmRlZCc6IGFyaWFFeHBhbmRlZCxcbiAgICAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCxcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWUsXG4gICAgZHJhZ2dhYmxlLFxuICAgIGVsZW1lbnRQcm9wcyxcbiAgICBpY29uLFxuICAgIG9uQ2xpY2ssXG4gICAgcGlsbFN0eWxlID0gJ2xpZ2h0JyxcbiAgICByb3VuZGVkLFxuICAgIHRvLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBgJHtiYXNlQ2xhc3N9LS1zdHlsZS0ke3BpbGxTdHlsZX1gLFxuICAgIGNsYXNzTmFtZSAmJiBjbGFzc05hbWUsXG4gICAgdG8gJiYgYCR7YmFzZUNsYXNzfS0taGFzLWxpbmtgLFxuICAgICh0byB8fCBvbkNsaWNrKSAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtYWN0aW9uYCxcbiAgICBpY29uICYmIGAke2Jhc2VDbGFzc30tLWhhcy1pY29uYCxcbiAgICBpY29uICYmIGAke2Jhc2VDbGFzc30tLWFsaWduLWljb24tJHthbGlnbkljb259YCxcbiAgICBkcmFnZ2FibGUgJiYgYCR7YmFzZUNsYXNzfS0tZHJhZ2dhYmxlYCxcbiAgICByb3VuZGVkICYmIGAke2Jhc2VDbGFzc30tLXJvdW5kZWRgLFxuICBdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKCcgJylcblxuICBsZXQgRWxlbWVudDogRWxlbWVudFR5cGUgfCBSZWFjdC5GQzxSZW5kZXJlZFR5cGVQcm9wcz4gPSAnZGl2J1xuXG4gIGlmIChvbkNsaWNrICYmICF0bykgRWxlbWVudCA9ICdidXR0b24nXG4gIGlmICh0bykgRWxlbWVudCA9IExpbmtcblxuICByZXR1cm4gKFxuICAgIDxFbGVtZW50XG4gICAgICB7Li4uZWxlbWVudFByb3BzfVxuICAgICAgYXJpYS1jaGVja2VkPXthcmlhQ2hlY2tlZH1cbiAgICAgIGFyaWEtY29udHJvbHM9e2FyaWFDb250cm9sc31cbiAgICAgIGFyaWEtZXhwYW5kZWQ9e2FyaWFFeHBhbmRlZH1cbiAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICB0bz17dG8gfHwgdW5kZWZpbmVkfVxuICAgICAgdHlwZT17RWxlbWVudCA9PT0gJ2J1dHRvbicgPyAnYnV0dG9uJyA6IHVuZGVmaW5lZH1cbiAgICA+XG4gICAgICB7aWNvbiAmJiBhbGlnbkljb24gPT09ICdsZWZ0JyAmJiA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ljb25gfT57aWNvbn08L3NwYW4+fVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PntjaGlsZHJlbn08L3NwYW4+XG4gICAgICB7aWNvbiAmJiBhbGlnbkljb24gPT09ICdyaWdodCcgJiYgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pY29uYH0+e2ljb259PC9zcGFuPn1cbiAgICA8L0VsZW1lbnQ+XG4gIClcbn1cblxuY29uc3QgUGlsbDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZHJhZ2dhYmxlIH0gPSBwcm9wc1xuXG4gIGlmIChkcmFnZ2FibGUpIHJldHVybiA8RHJhZ2dhYmxlUGlsbCB7Li4ucHJvcHN9IC8+XG4gIHJldHVybiA8U3RhdGljUGlsbCB7Li4ucHJvcHN9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpbGxcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEcmFnZ2FibGVQaWxsIiwicHJvcHMiLCJpZCIsImNsYXNzTmFtZSIsImF0dHJpYnV0ZXMiLCJpc0RyYWdnaW5nIiwibGlzdGVuZXJzIiwic2V0Tm9kZVJlZiIsInRyYW5zZm9ybSIsInVzZURyYWdnYWJsZVNvcnRhYmxlIiwiU3RhdGljUGlsbCIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZWxlbWVudFByb3BzIiwicmVmIiwic3R5bGUiLCJhbGlnbkljb24iLCJhcmlhQ2hlY2tlZCIsImFyaWFDb250cm9scyIsImFyaWFFeHBhbmRlZCIsImFyaWFMYWJlbCIsImNoaWxkcmVuIiwiZHJhZ2dhYmxlIiwiaWNvbiIsIm9uQ2xpY2siLCJwaWxsU3R5bGUiLCJyb3VuZGVkIiwidG8iLCJjbGFzc2VzIiwiRWxlbWVudCIsIkxpbmsiLCJhcmlhLWNoZWNrZWQiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtbGFiZWwiLCJ1bmRlZmluZWQiLCJ0eXBlIiwic3BhbiIsIlBpbGwiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBa0dBOzs7ZUFBQTs7OzhEQWhHa0I7Z0NBQ0c7c0NBSWdCO1FBQzlCOzs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLGdCQUFpQyxDQUFDQztJQUN0QyxNQUFNLEVBQUVDLEVBQUUsRUFBRUMsU0FBUyxFQUFFLEdBQUdGO0lBRTFCLE1BQU0sRUFBRUcsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsSUFBQUEsMENBQW9CLEVBQUM7UUFDeEZQO0lBQ0Y7SUFFQSxxQkFDRSw2QkFBQ1E7UUFDRSxHQUFHVCxLQUFLO1FBQ1RFLFdBQVc7WUFBQ0UsY0FBYyxDQUFDLEVBQUVOLFVBQVUsYUFBYSxDQUFDO1lBQUVJO1NBQVUsQ0FBQ1EsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7UUFDdkZDLGNBQWM7WUFDWixHQUFHUixTQUFTO1lBQ1osR0FBR0YsVUFBVTtZQUNiVyxLQUFLUjtZQUNMUyxPQUFPO2dCQUNMUjtZQUNGO1FBQ0Y7O0FBR047QUFFQSxNQUFNRSxhQUE4QixDQUFDVDtJQUNuQyxNQUFNLEVBQ0pnQixZQUFZLE9BQU8sRUFDbkIsZ0JBQWdCQyxXQUFXLEVBQzNCLGlCQUFpQkMsWUFBWSxFQUM3QixpQkFBaUJDLFlBQVksRUFDN0IsY0FBY0MsU0FBUyxFQUN2QkMsUUFBUSxFQUNSbkIsU0FBUyxFQUNUb0IsU0FBUyxFQUNUVCxZQUFZLEVBQ1pVLElBQUksRUFDSkMsT0FBTyxFQUNQQyxZQUFZLE9BQU8sRUFDbkJDLE9BQU8sRUFDUEMsRUFBRSxFQUNILEdBQUczQjtJQUVKLE1BQU00QixVQUFVO1FBQ2Q5QjtRQUNBLENBQUMsRUFBRUEsVUFBVSxRQUFRLEVBQUUyQixVQUFVLENBQUM7UUFDbEN2QixhQUFhQTtRQUNieUIsTUFBTSxDQUFDLEVBQUU3QixVQUFVLFVBQVUsQ0FBQztRQUM3QjZCLENBQUFBLE1BQU1ILE9BQU0sS0FBTSxDQUFDLEVBQUUxQixVQUFVLFlBQVksQ0FBQztRQUM3Q3lCLFFBQVEsQ0FBQyxFQUFFekIsVUFBVSxVQUFVLENBQUM7UUFDaEN5QixRQUFRLENBQUMsRUFBRXpCLFVBQVUsYUFBYSxFQUFFa0IsVUFBVSxDQUFDO1FBQy9DTSxhQUFhLENBQUMsRUFBRXhCLFVBQVUsV0FBVyxDQUFDO1FBQ3RDNEIsV0FBVyxDQUFDLEVBQUU1QixVQUFVLFNBQVMsQ0FBQztLQUNuQyxDQUNFWSxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztJQUVSLElBQUlpQixVQUFxRDtJQUV6RCxJQUFJTCxXQUFXLENBQUNHLElBQUlFLFVBQVU7SUFDOUIsSUFBSUYsSUFBSUUsVUFBVUMsb0JBQUk7SUFFdEIscUJBQ0UsNkJBQUNEO1FBQ0UsR0FBR2hCLFlBQVk7UUFDaEJrQixnQkFBY2Q7UUFDZGUsaUJBQWVkO1FBQ2ZlLGlCQUFlZDtRQUNmZSxjQUFZZDtRQUNabEIsV0FBVzBCO1FBQ1hKLFNBQVNBO1FBQ1RHLElBQUlBLE1BQU1RO1FBQ1ZDLE1BQU1QLFlBQVksV0FBVyxXQUFXTTtPQUV2Q1osUUFBUVAsY0FBYyx3QkFBVSw2QkFBQ3FCO1FBQUtuQyxXQUFXLENBQUMsRUFBRUosVUFBVSxNQUFNLENBQUM7T0FBR3lCLHFCQUN6RSw2QkFBQ2M7UUFBS25DLFdBQVcsQ0FBQyxFQUFFSixVQUFVLE9BQU8sQ0FBQztPQUFHdUIsV0FDeENFLFFBQVFQLGNBQWMseUJBQVcsNkJBQUNxQjtRQUFLbkMsV0FBVyxDQUFDLEVBQUVKLFVBQVUsTUFBTSxDQUFDO09BQUd5QjtBQUdoRjtBQUVBLE1BQU1lLE9BQXdCLENBQUN0QztJQUM3QixNQUFNLEVBQUVzQixTQUFTLEVBQUUsR0FBR3RCO0lBRXRCLElBQUlzQixXQUFXLHFCQUFPLDZCQUFDdkIsZUFBa0JDO0lBQ3pDLHFCQUFPLDZCQUFDUyxZQUFlVDtBQUN6QjtNQUVBLFdBQWVzQyJ9