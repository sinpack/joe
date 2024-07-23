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
const baseClass = 'id-label';
const IDLabel = ({ id, className, prefix = 'ID:' })=>/*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            className
        ].filter(Boolean).join(' '),
        title: id
    }, prefix, "  ", id);
const _default = IDLabel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0lETGFiZWwvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdpZC1sYWJlbCdcblxuY29uc3QgSURMYWJlbDogUmVhY3QuRkM8eyBjbGFzc05hbWU/OiBzdHJpbmc7IGlkOiBzdHJpbmc7IHByZWZpeD86IHN0cmluZyB9PiA9ICh7XG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIHByZWZpeCA9ICdJRDonLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17W2Jhc2VDbGFzcywgY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSB0aXRsZT17aWR9PlxuICAgIHtwcmVmaXh9XG4gICAgJm5ic3A7Jm5ic3A7XG4gICAge2lkfVxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSURMYWJlbFxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIklETGFiZWwiLCJpZCIsImNsYXNzTmFtZSIsInByZWZpeCIsImRpdiIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwidGl0bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFrQkE7OztlQUFBOzs7OERBbEJrQjtRQUVYOzs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLFVBQXlFLENBQUMsRUFDOUVDLEVBQUUsRUFDRkMsU0FBUyxFQUNUQyxTQUFTLEtBQUssRUFDZixpQkFDQyw2QkFBQ0M7UUFBSUYsV0FBVztZQUFDSDtZQUFXRztTQUFVLENBQUNHLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO1FBQU1DLE9BQU9QO09BQ3RFRSxRQUFPLE1BRVBGO01BSUwsV0FBZUQifQ==