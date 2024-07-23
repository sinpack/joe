"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Control", {
    enumerable: true,
    get: function() {
        return Control;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reactselect = require("react-select");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Control = (props)=>{
    const { children, innerProps, // @ts-expect-error // TODO Fix this - moduleResolution 16 breaks our declare module
    selectProps: { customProps: { disableKeyDown, disableMouseDown } = {} } = {} } = props;
    return /*#__PURE__*/ _react.default.createElement(_reactselect.components.Control, {
        ...props,
        innerProps: {
            ...innerProps,
            // @ts-ignore
            onKeyDown: (e)=>{
                if (disableKeyDown) {
                    e.stopPropagation();
                    // Create event for keydown listeners which specifically want to bypass this stopPropagation
                    const bypassEvent = new CustomEvent('bypassKeyDown', {
                        detail: e
                    });
                    document.dispatchEvent(bypassEvent);
                }
            },
            // react-select has this typed incorrectly so we disable the linting rule
            // we need to prevent react-select from hijacking the 'onKeyDown' event while modals are open (i.e. the 'Relationship' field component)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            onMouseDown: (e)=>{
                // we need to prevent react-select from hijacking the 'onMouseDown' event while modals are open (i.e. the 'Relationship' field component)
                if (!disableMouseDown) {
                    innerProps.onMouseDown(e);
                }
            }
        }
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L0NvbnRyb2wvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29udHJvbFByb3BzIH0gZnJvbSAncmVhY3Qtc2VsZWN0J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb21wb25lbnRzIGFzIFNlbGVjdENvbXBvbmVudHMgfSBmcm9tICdyZWFjdC1zZWxlY3QnXG5cbmltcG9ydCB0eXBlIHsgT3B0aW9uIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBDb250cm9sOiBSZWFjdC5GQzxDb250cm9sUHJvcHM8T3B0aW9uLCBhbnk+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC8vIFRPRE8gRml4IHRoaXMgLSBtb2R1bGVSZXNvbHV0aW9uIDE2IGJyZWFrcyBvdXIgZGVjbGFyZSBtb2R1bGVcbiAgICBzZWxlY3RQcm9wczogeyBjdXN0b21Qcm9wczogeyBkaXNhYmxlS2V5RG93biwgZGlzYWJsZU1vdXNlRG93biB9ID0ge30gfSA9IHt9LFxuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxTZWxlY3RDb21wb25lbnRzLkNvbnRyb2xcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGlubmVyUHJvcHM9e3tcbiAgICAgICAgLi4uaW5uZXJQcm9wcyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBvbktleURvd246IChlKSA9PiB7XG4gICAgICAgICAgaWYgKGRpc2FibGVLZXlEb3duKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAvLyBDcmVhdGUgZXZlbnQgZm9yIGtleWRvd24gbGlzdGVuZXJzIHdoaWNoIHNwZWNpZmljYWxseSB3YW50IHRvIGJ5cGFzcyB0aGlzIHN0b3BQcm9wYWdhdGlvblxuICAgICAgICAgICAgY29uc3QgYnlwYXNzRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2J5cGFzc0tleURvd24nLCB7IGRldGFpbDogZSB9KVxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChieXBhc3NFdmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHJlYWN0LXNlbGVjdCBoYXMgdGhpcyB0eXBlZCBpbmNvcnJlY3RseSBzbyB3ZSBkaXNhYmxlIHRoZSBsaW50aW5nIHJ1bGVcbiAgICAgICAgLy8gd2UgbmVlZCB0byBwcmV2ZW50IHJlYWN0LXNlbGVjdCBmcm9tIGhpamFja2luZyB0aGUgJ29uS2V5RG93bicgZXZlbnQgd2hpbGUgbW9kYWxzIGFyZSBvcGVuIChpLmUuIHRoZSAnUmVsYXRpb25zaGlwJyBmaWVsZCBjb21wb25lbnQpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgb25Nb3VzZURvd246IChlKSA9PiB7XG4gICAgICAgICAgLy8gd2UgbmVlZCB0byBwcmV2ZW50IHJlYWN0LXNlbGVjdCBmcm9tIGhpamFja2luZyB0aGUgJ29uTW91c2VEb3duJyBldmVudCB3aGlsZSBtb2RhbHMgYXJlIG9wZW4gKGkuZS4gdGhlICdSZWxhdGlvbnNoaXAnIGZpZWxkIGNvbXBvbmVudClcbiAgICAgICAgICBpZiAoIWRpc2FibGVNb3VzZURvd24pIHtcbiAgICAgICAgICAgIGlubmVyUHJvcHMub25Nb3VzZURvd24oZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NlbGVjdENvbXBvbmVudHMuQ29udHJvbD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNvbnRyb2wiLCJwcm9wcyIsImNoaWxkcmVuIiwiaW5uZXJQcm9wcyIsInNlbGVjdFByb3BzIiwiY3VzdG9tUHJvcHMiLCJkaXNhYmxlS2V5RG93biIsImRpc2FibGVNb3VzZURvd24iLCJTZWxlY3RDb21wb25lbnRzIiwib25LZXlEb3duIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImJ5cGFzc0V2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJvbk1vdXNlRG93biJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQU9hQTs7O2VBQUFBOzs7OERBTEs7NkJBQzZCOzs7Ozs7QUFJeEMsTUFBTUEsVUFBK0MsQ0FBQ0M7SUFDM0QsTUFBTSxFQUNKQyxRQUFRLEVBQ1JDLFVBQVUsRUFDVixvRkFBb0Y7SUFDcEZDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDN0UsR0FBR047SUFFSixxQkFDRSw2QkFBQ08sdUJBQWdCLENBQUNSLE9BQU87UUFDdEIsR0FBR0MsS0FBSztRQUNURSxZQUFZO1lBQ1YsR0FBR0EsVUFBVTtZQUNiLGFBQWE7WUFDYk0sV0FBVyxDQUFDQztnQkFDVixJQUFJSixnQkFBZ0I7b0JBQ2xCSSxFQUFFQyxlQUFlO29CQUNqQiw0RkFBNEY7b0JBQzVGLE1BQU1DLGNBQWMsSUFBSUMsWUFBWSxpQkFBaUI7d0JBQUVDLFFBQVFKO29CQUFFO29CQUNqRUssU0FBU0MsYUFBYSxDQUFDSjtnQkFDekI7WUFDRjtZQUNBLHlFQUF5RTtZQUN6RSx1SUFBdUk7WUFDdkksNkRBQTZEO1lBQzdESyxhQUFhLENBQUNQO2dCQUNaLHlJQUF5STtnQkFDekksSUFBSSxDQUFDSCxrQkFBa0I7b0JBQ3JCSixXQUFXYyxXQUFXLENBQUNQO2dCQUN6QjtZQUNGO1FBQ0Y7T0FFQ1I7QUFHUCJ9