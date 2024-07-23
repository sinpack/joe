"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultiValue", {
    enumerable: true,
    get: function() {
        return MultiValue;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reactselect = require("react-select");
const _useDraggableSortable = require("../../DraggableSortable/useDraggableSortable");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'multi-value';
const MultiValue = (props)=>{
    const { className, data: { value }, innerProps, isDisabled, // @ts-expect-error // TODO Fix this - moduleResolution 16 breaks our declare module
    selectProps: { customProps: { disableMouseDown } = {}, isSortable } = {} } = props;
    const { attributes, isDragging, listeners, setNodeRef, transform } = (0, _useDraggableSortable.useDraggableSortable)({
        id: value.toString(),
        disabled: !isSortable
    });
    const classes = [
        baseClass,
        className,
        !isDisabled && 'draggable',
        isDragging && `${baseClass}--is-dragging`
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ _react.default.createElement(_reactselect.components.MultiValue, {
        ...props,
        className: classes,
        innerProps: {
            ...innerProps,
            ...attributes,
            ...listeners,
            onMouseDown: (e)=>{
                if (!disableMouseDown) {
                    // we need to prevent the dropdown from opening when clicking on the drag handle, but not when a modal is open (i.e. the 'Relationship' field component)
                    e.stopPropagation();
                }
            },
            ref: setNodeRef,
            style: {
                transform
            }
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L011bHRpVmFsdWUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTXVsdGlWYWx1ZVByb3BzIH0gZnJvbSAncmVhY3Qtc2VsZWN0J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb21wb25lbnRzIGFzIFNlbGVjdENvbXBvbmVudHMgfSBmcm9tICdyZWFjdC1zZWxlY3QnXG5cbmltcG9ydCB0eXBlIHsgT3B0aW9uIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCB7IHVzZURyYWdnYWJsZVNvcnRhYmxlIH0gZnJvbSAnLi4vLi4vRHJhZ2dhYmxlU29ydGFibGUvdXNlRHJhZ2dhYmxlU29ydGFibGUnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ211bHRpLXZhbHVlJ1xuZXhwb3J0IGNvbnN0IE11bHRpVmFsdWU6IFJlYWN0LkZDPE11bHRpVmFsdWVQcm9wczxPcHRpb24+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGRhdGE6IHsgdmFsdWUgfSxcbiAgICBpbm5lclByb3BzLFxuICAgIGlzRGlzYWJsZWQsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAvLyBUT0RPIEZpeCB0aGlzIC0gbW9kdWxlUmVzb2x1dGlvbiAxNiBicmVha3Mgb3VyIGRlY2xhcmUgbW9kdWxlXG4gICAgc2VsZWN0UHJvcHM6IHsgY3VzdG9tUHJvcHM6IHsgZGlzYWJsZU1vdXNlRG93biB9ID0ge30sIGlzU29ydGFibGUgfSA9IHt9LFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGlzRHJhZ2dpbmcsIGxpc3RlbmVycywgc2V0Tm9kZVJlZiwgdHJhbnNmb3JtIH0gPSB1c2VEcmFnZ2FibGVTb3J0YWJsZSh7XG4gICAgaWQ6IHZhbHVlLnRvU3RyaW5nKCksXG4gICAgZGlzYWJsZWQ6ICFpc1NvcnRhYmxlLFxuICB9KVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGNsYXNzTmFtZSxcbiAgICAhaXNEaXNhYmxlZCAmJiAnZHJhZ2dhYmxlJyxcbiAgICBpc0RyYWdnaW5nICYmIGAke2Jhc2VDbGFzc30tLWlzLWRyYWdnaW5nYCxcbiAgXVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignICcpXG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0Q29tcG9uZW50cy5NdWx0aVZhbHVlXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBpbm5lclByb3BzPXt7XG4gICAgICAgIC4uLmlubmVyUHJvcHMsXG4gICAgICAgIC4uLmF0dHJpYnV0ZXMsXG4gICAgICAgIC4uLmxpc3RlbmVycyxcbiAgICAgICAgb25Nb3VzZURvd246IChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFkaXNhYmxlTW91c2VEb3duKSB7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHByZXZlbnQgdGhlIGRyb3Bkb3duIGZyb20gb3BlbmluZyB3aGVuIGNsaWNraW5nIG9uIHRoZSBkcmFnIGhhbmRsZSwgYnV0IG5vdCB3aGVuIGEgbW9kYWwgaXMgb3BlbiAoaS5lLiB0aGUgJ1JlbGF0aW9uc2hpcCcgZmllbGQgY29tcG9uZW50KVxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVmOiBzZXROb2RlUmVmLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRyYW5zZm9ybSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgLz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIk11bHRpVmFsdWUiLCJiYXNlQ2xhc3MiLCJwcm9wcyIsImNsYXNzTmFtZSIsImRhdGEiLCJ2YWx1ZSIsImlubmVyUHJvcHMiLCJpc0Rpc2FibGVkIiwic2VsZWN0UHJvcHMiLCJjdXN0b21Qcm9wcyIsImRpc2FibGVNb3VzZURvd24iLCJpc1NvcnRhYmxlIiwiYXR0cmlidXRlcyIsImlzRHJhZ2dpbmciLCJsaXN0ZW5lcnMiLCJzZXROb2RlUmVmIiwidHJhbnNmb3JtIiwidXNlRHJhZ2dhYmxlU29ydGFibGUiLCJpZCIsInRvU3RyaW5nIiwiZGlzYWJsZWQiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJTZWxlY3RDb21wb25lbnRzIiwib25Nb3VzZURvd24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicmVmIiwic3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFXYUE7OztlQUFBQTs7OzhEQVRLOzZCQUM2QjtzQ0FJVjtRQUM5Qjs7Ozs7O0FBRVAsTUFBTUMsWUFBWTtBQUNYLE1BQU1ELGFBQWdELENBQUNFO0lBQzVELE1BQU0sRUFDSkMsU0FBUyxFQUNUQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxFQUNmQyxVQUFVLEVBQ1ZDLFVBQVUsRUFDVixvRkFBb0Y7SUFDcEZDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDekUsR0FBR1Q7SUFFSixNQUFNLEVBQUVVLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLElBQUFBLDBDQUFvQixFQUFDO1FBQ3hGQyxJQUFJYixNQUFNYyxRQUFRO1FBQ2xCQyxVQUFVLENBQUNUO0lBQ2I7SUFFQSxNQUFNVSxVQUFVO1FBQ2RwQjtRQUNBRTtRQUNBLENBQUNJLGNBQWM7UUFDZk0sY0FBYyxDQUFDLEVBQUVaLFVBQVUsYUFBYSxDQUFDO0tBQzFDLENBQ0VxQixNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztJQUVSLHFCQUNFLDZCQUFDQyx1QkFBZ0IsQ0FBQ3pCLFVBQVU7UUFDekIsR0FBR0UsS0FBSztRQUNUQyxXQUFXa0I7UUFDWGYsWUFBWTtZQUNWLEdBQUdBLFVBQVU7WUFDYixHQUFHTSxVQUFVO1lBQ2IsR0FBR0UsU0FBUztZQUNaWSxhQUFhLENBQUNDO2dCQUNaLElBQUksQ0FBQ2pCLGtCQUFrQjtvQkFDckIsd0pBQXdKO29CQUN4SmlCLEVBQUVDLGVBQWU7Z0JBQ25CO1lBQ0Y7WUFDQUMsS0FBS2Q7WUFDTGUsT0FBTztnQkFDTGQ7WUFDRjtRQUNGOztBQUdOIn0=