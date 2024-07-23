"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SingleValue", {
    enumerable: true,
    get: function() {
        return SingleValue;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reactselect = require("react-select");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'react-select--single-value';
const SingleValue = (props)=>{
    const { children, className } = props;
    return /*#__PURE__*/ _react.default.createElement(_reactselect.components.SingleValue, {
        ...props,
        className: [
            baseClass,
            className
        ].filter(Boolean).join(' ')
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L1NpbmdsZVZhbHVlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFNpbmdsZVZhbHVlUHJvcHMgfSBmcm9tICdyZWFjdC1zZWxlY3QnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbXBvbmVudHMgYXMgU2VsZWN0Q29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCdcblxuaW1wb3J0IHR5cGUgeyBPcHRpb24gfSBmcm9tICcuLi90eXBlcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3JlYWN0LXNlbGVjdC0tc2luZ2xlLXZhbHVlJ1xuXG5leHBvcnQgY29uc3QgU2luZ2xlVmFsdWU6IFJlYWN0LkZDPFNpbmdsZVZhbHVlUHJvcHM8T3B0aW9uPj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdENvbXBvbmVudHMuU2luZ2xlVmFsdWVcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17W2Jhc2VDbGFzcywgY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NlbGVjdENvbXBvbmVudHMuU2luZ2xlVmFsdWU+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJTaW5nbGVWYWx1ZSIsImJhc2VDbGFzcyIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJTZWxlY3RDb21wb25lbnRzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVNhQTs7O2VBQUFBOzs7OERBUEs7NkJBQzZCOzs7Ozs7QUFJL0MsTUFBTUMsWUFBWTtBQUVYLE1BQU1ELGNBQWtELENBQUNFO0lBQzlELE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBR0Y7SUFFaEMscUJBQ0UsNkJBQUNHLHVCQUFnQixDQUFDTCxXQUFXO1FBQzFCLEdBQUdFLEtBQUs7UUFDVEUsV0FBVztZQUFDSDtZQUFXRztTQUFVLENBQUNFLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO09BRXRETDtBQUdQIn0=