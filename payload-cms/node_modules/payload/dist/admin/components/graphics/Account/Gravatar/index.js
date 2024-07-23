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
const _md5 = /*#__PURE__*/ _interop_require_default(require("md5"));
const _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _Auth = require("../../../utilities/Auth");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Gravatar = ()=>{
    const { user } = (0, _Auth.useAuth)();
    const hash = (0, _md5.default)(user.email.trim().toLowerCase());
    const query = _qs.default.stringify({
        default: 'mp',
        r: 'g',
        s: 50
    });
    return /*#__PURE__*/ _react.default.createElement("img", {
        alt: "yas",
        className: "gravatar-account",
        height: 25,
        src: `https://www.gravatar.com/avatar/${hash}?${query}`,
        style: {
            borderRadius: '50%'
        },
        width: 25
    });
};
const _default = Gravatar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyYXBoaWNzL0FjY291bnQvR3JhdmF0YXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZDUgZnJvbSAnbWQ1J1xuaW1wb3J0IHFzIGZyb20gJ3FzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5cbmNvbnN0IEdyYXZhdGFyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKClcblxuICBjb25zdCBoYXNoID0gbWQ1KHVzZXIuZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpXG5cbiAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xuICAgIGRlZmF1bHQ6ICdtcCcsXG4gICAgcjogJ2cnLFxuICAgIHM6IDUwLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgYWx0PVwieWFzXCJcbiAgICAgIGNsYXNzTmFtZT1cImdyYXZhdGFyLWFjY291bnRcIlxuICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvJHtoYXNofT8ke3F1ZXJ5fWB9XG4gICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc1MCUnIH19XG4gICAgICB3aWR0aD17MjV9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmF2YXRhclxuIl0sIm5hbWVzIjpbIkdyYXZhdGFyIiwidXNlciIsInVzZUF1dGgiLCJoYXNoIiwibWQ1IiwiZW1haWwiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJxdWVyeSIsInFzIiwic3RyaW5naWZ5IiwiZGVmYXVsdCIsInIiLCJzIiwiaW1nIiwiYWx0IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwic3JjIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE2QkE7OztlQUFBOzs7NERBN0JnQjsyREFDRDs4REFDRztzQkFFTTs7Ozs7O0FBRXhCLE1BQU1BLFdBQXFCO0lBQ3pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLElBQUFBLGFBQU87SUFFeEIsTUFBTUMsT0FBT0MsSUFBQUEsWUFBRyxFQUFDSCxLQUFLSSxLQUFLLENBQUNDLElBQUksR0FBR0MsV0FBVztJQUU5QyxNQUFNQyxRQUFRQyxXQUFFLENBQUNDLFNBQVMsQ0FBQztRQUN6QkMsU0FBUztRQUNUQyxHQUFHO1FBQ0hDLEdBQUc7SUFDTDtJQUVBLHFCQUNFLDZCQUFDQztRQUNDQyxLQUFJO1FBQ0pDLFdBQVU7UUFDVkMsUUFBUTtRQUNSQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUVmLEtBQUssQ0FBQyxFQUFFSyxNQUFNLENBQUM7UUFDdkRXLE9BQU87WUFBRUMsY0FBYztRQUFNO1FBQzdCQyxPQUFPOztBQUdiO01BRUEsV0FBZXJCIn0=