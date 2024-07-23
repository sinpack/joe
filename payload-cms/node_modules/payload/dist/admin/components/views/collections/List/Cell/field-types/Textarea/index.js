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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TextareaCell = ({ data })=>{
    const textToShow = data?.length > 100 ? `${data.substr(0, 100)}\u2026` : data;
    return /*#__PURE__*/ _react.default.createElement("span", null, textToShow);
};
const _default = TextareaCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9UZXh0YXJlYS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFRleHRhcmVhRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9leHBvcnRzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBDZWxsQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcydcblxuY29uc3QgVGV4dGFyZWFDZWxsOiBSZWFjdC5GQzxDZWxsQ29tcG9uZW50UHJvcHM8VGV4dGFyZWFGaWVsZCwgc3RyaW5nPj4gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgdGV4dFRvU2hvdyA9IGRhdGE/Lmxlbmd0aCA+IDEwMCA/IGAke2RhdGEuc3Vic3RyKDAsIDEwMCl9XFx1MjAyNmAgOiBkYXRhXG4gIHJldHVybiA8c3Bhbj57dGV4dFRvU2hvd308L3NwYW4+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhQ2VsbFxuIl0sIm5hbWVzIjpbIlRleHRhcmVhQ2VsbCIsImRhdGEiLCJ0ZXh0VG9TaG93IiwibGVuZ3RoIiwic3Vic3RyIiwic3BhbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFVQTs7O2VBQUE7Ozs4REFWa0I7Ozs7OztBQUtsQixNQUFNQSxlQUFvRSxDQUFDLEVBQUVDLElBQUksRUFBRTtJQUNqRixNQUFNQyxhQUFhRCxNQUFNRSxTQUFTLE1BQU0sQ0FBQyxFQUFFRixLQUFLRyxNQUFNLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxHQUFHSDtJQUN6RSxxQkFBTyw2QkFBQ0ksY0FBTUg7QUFDaEI7TUFFQSxXQUFlRiJ9