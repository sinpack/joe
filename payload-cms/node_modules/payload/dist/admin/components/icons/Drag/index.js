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
const DragHandle = ({ className })=>/*#__PURE__*/ _react.default.createElement("svg", {
        className: [
            'icon icon--drag-handle',
            className
        ].filter(Boolean).join(' '),
        viewBox: "0 0 25 25",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ _react.default.createElement("circle", {
        className: "fill",
        cx: "10.468",
        cy: "14.5",
        r: "1"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        className: "fill",
        cx: "14.532",
        cy: "14.5",
        r: "1"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        className: "fill",
        cx: "10.468",
        cy: "11.35",
        r: "1"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        className: "fill",
        cx: "14.532",
        cy: "11.35",
        r: "1"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        className: "fill",
        cx: "10.468",
        cy: "8.3",
        r: "1"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        className: "fill",
        cx: "14.532",
        cy: "8.3",
        r: "1"
    }));
const _default = DragHandle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2ljb25zL0RyYWcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IERyYWdIYW5kbGU6IFJlYWN0LkZDPHsgY2xhc3NOYW1lPzogc3RyaW5nIH0+ID0gKHsgY2xhc3NOYW1lIH0pID0+IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT17WydpY29uIGljb24tLWRyYWctaGFuZGxlJywgY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgIHZpZXdCb3g9XCIwIDAgMjUgMjVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPGNpcmNsZSBjbGFzc05hbWU9XCJmaWxsXCIgY3g9XCIxMC40NjhcIiBjeT1cIjE0LjVcIiByPVwiMVwiIC8+XG4gICAgPGNpcmNsZSBjbGFzc05hbWU9XCJmaWxsXCIgY3g9XCIxNC41MzJcIiBjeT1cIjE0LjVcIiByPVwiMVwiIC8+XG4gICAgPGNpcmNsZSBjbGFzc05hbWU9XCJmaWxsXCIgY3g9XCIxMC40NjhcIiBjeT1cIjExLjM1XCIgcj1cIjFcIiAvPlxuICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwiZmlsbFwiIGN4PVwiMTQuNTMyXCIgY3k9XCIxMS4zNVwiIHI9XCIxXCIgLz5cbiAgICA8Y2lyY2xlIGNsYXNzTmFtZT1cImZpbGxcIiBjeD1cIjEwLjQ2OFwiIGN5PVwiOC4zXCIgcj1cIjFcIiAvPlxuICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwiZmlsbFwiIGN4PVwiMTQuNTMyXCIgY3k9XCI4LjNcIiByPVwiMVwiIC8+XG4gIDwvc3ZnPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnSGFuZGxlXG4iXSwibmFtZXMiOlsiRHJhZ0hhbmRsZSIsImNsYXNzTmFtZSIsInN2ZyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwidmlld0JveCIsInhtbG5zIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFtQkE7OztlQUFBOzs7OERBbkJrQjtRQUVYOzs7Ozs7QUFFUCxNQUFNQSxhQUErQyxDQUFDLEVBQUVDLFNBQVMsRUFBRSxpQkFDakUsNkJBQUNDO1FBQ0NELFdBQVc7WUFBQztZQUEwQkE7U0FBVSxDQUFDRSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztRQUN0RUMsU0FBUTtRQUNSQyxPQUFNO3FCQUVOLDZCQUFDQztRQUFPUCxXQUFVO1FBQU9RLElBQUc7UUFBU0MsSUFBRztRQUFPQyxHQUFFO3NCQUNqRCw2QkFBQ0g7UUFBT1AsV0FBVTtRQUFPUSxJQUFHO1FBQVNDLElBQUc7UUFBT0MsR0FBRTtzQkFDakQsNkJBQUNIO1FBQU9QLFdBQVU7UUFBT1EsSUFBRztRQUFTQyxJQUFHO1FBQVFDLEdBQUU7c0JBQ2xELDZCQUFDSDtRQUFPUCxXQUFVO1FBQU9RLElBQUc7UUFBU0MsSUFBRztRQUFRQyxHQUFFO3NCQUNsRCw2QkFBQ0g7UUFBT1AsV0FBVTtRQUFPUSxJQUFHO1FBQVNDLElBQUc7UUFBTUMsR0FBRTtzQkFDaEQsNkJBQUNIO1FBQU9QLFdBQVU7UUFBT1EsSUFBRztRQUFTQyxJQUFHO1FBQU1DLEdBQUU7O01BSXBELFdBQWVYIn0=