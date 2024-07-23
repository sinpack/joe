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
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _Default = require("./Default");
const _Gravatar = /*#__PURE__*/ _interop_require_default(require("./Gravatar"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Account = ()=>{
    const { admin: { avatar: Avatar }, routes: { admin: adminRoute } } = (0, _Config.useConfig)();
    const { user } = (0, _Auth.useAuth)();
    const location = (0, _reactrouterdom.useLocation)();
    const isOnAccountPage = location.pathname === `${adminRoute}/account`;
    if (!user.email || Avatar === 'default') return /*#__PURE__*/ _react.default.createElement(_Default.DefaultAccountIcon, {
        active: isOnAccountPage
    });
    if (Avatar === 'gravatar') return /*#__PURE__*/ _react.default.createElement(_Gravatar.default, null);
    if (Avatar) return /*#__PURE__*/ _react.default.createElement(Avatar, {
        active: isOnAccountPage
    });
    return /*#__PURE__*/ _react.default.createElement(_Default.DefaultAccountIcon, {
        active: isOnAccountPage
    });
};
const _default = Account;
function isClassComponent(component) {
    return typeof component === 'function' && !!component.prototype.isReactComponent;
}
function isFunctionComponent(component) {
    return typeof component === 'function' && String(component).includes('return React.createElement');
}
function isReactComponent(component) {
    return isClassComponent(component) || isFunctionComponent(component);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyYXBoaWNzL0FjY291bnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCB7IERlZmF1bHRBY2NvdW50SWNvbiB9IGZyb20gJy4vRGVmYXVsdCdcbmltcG9ydCBHcmF2YXRhciBmcm9tICcuL0dyYXZhdGFyJ1xuXG5jb25zdCBBY2NvdW50ID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgYWRtaW46IHsgYXZhdGFyOiBBdmF0YXIgfSxcbiAgICByb3V0ZXM6IHsgYWRtaW46IGFkbWluUm91dGUgfSxcbiAgfSA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gIGNvbnN0IGlzT25BY2NvdW50UGFnZSA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSBgJHthZG1pblJvdXRlfS9hY2NvdW50YFxuXG4gIGlmICghdXNlci5lbWFpbCB8fCBBdmF0YXIgPT09ICdkZWZhdWx0JykgcmV0dXJuIDxEZWZhdWx0QWNjb3VudEljb24gYWN0aXZlPXtpc09uQWNjb3VudFBhZ2V9IC8+XG4gIGlmIChBdmF0YXIgPT09ICdncmF2YXRhcicpIHJldHVybiA8R3JhdmF0YXIgLz5cbiAgaWYgKEF2YXRhcikgcmV0dXJuIDxBdmF0YXIgYWN0aXZlPXtpc09uQWNjb3VudFBhZ2V9IC8+XG4gIHJldHVybiA8RGVmYXVsdEFjY291bnRJY29uIGFjdGl2ZT17aXNPbkFjY291bnRQYWdlfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50XG5cbmZ1bmN0aW9uIGlzQ2xhc3NDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nICYmICEhY29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb25Db21wb25lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nICYmIFN0cmluZyhjb21wb25lbnQpLmluY2x1ZGVzKCdyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCcpXG59XG5cbmZ1bmN0aW9uIGlzUmVhY3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiBpc0NsYXNzQ29tcG9uZW50KGNvbXBvbmVudCkgfHwgaXNGdW5jdGlvbkNvbXBvbmVudChjb21wb25lbnQpXG59XG4iXSwibmFtZXMiOlsiQWNjb3VudCIsImFkbWluIiwiYXZhdGFyIiwiQXZhdGFyIiwicm91dGVzIiwiYWRtaW5Sb3V0ZSIsInVzZUNvbmZpZyIsInVzZXIiLCJ1c2VBdXRoIiwibG9jYXRpb24iLCJ1c2VMb2NhdGlvbiIsImlzT25BY2NvdW50UGFnZSIsInBhdGhuYW1lIiwiZW1haWwiLCJEZWZhdWx0QWNjb3VudEljb24iLCJhY3RpdmUiLCJHcmF2YXRhciIsImlzQ2xhc3NDb21wb25lbnQiLCJjb21wb25lbnQiLCJwcm90b3R5cGUiLCJpc1JlYWN0Q29tcG9uZW50IiwiaXNGdW5jdGlvbkNvbXBvbmVudCIsIlN0cmluZyIsImluY2x1ZGVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBd0JBOzs7ZUFBQTs7OzhEQXhCa0I7Z0NBQ1U7c0JBRUo7d0JBQ0U7eUJBQ1M7aUVBQ2Q7Ozs7OztBQUVyQixNQUFNQSxVQUFVO0lBQ2QsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLFFBQVFDLE1BQU0sRUFBRSxFQUN6QkMsUUFBUSxFQUFFSCxPQUFPSSxVQUFVLEVBQUUsRUFDOUIsR0FBR0MsSUFBQUEsaUJBQVM7SUFDYixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxJQUFBQSxhQUFPO0lBQ3hCLE1BQU1DLFdBQVdDLElBQUFBLDJCQUFXO0lBRTVCLE1BQU1DLGtCQUFrQkYsU0FBU0csUUFBUSxLQUFLLENBQUMsRUFBRVAsV0FBVyxRQUFRLENBQUM7SUFFckUsSUFBSSxDQUFDRSxLQUFLTSxLQUFLLElBQUlWLFdBQVcsV0FBVyxxQkFBTyw2QkFBQ1csMkJBQWtCO1FBQUNDLFFBQVFKOztJQUM1RSxJQUFJUixXQUFXLFlBQVkscUJBQU8sNkJBQUNhLGlCQUFRO0lBQzNDLElBQUliLFFBQVEscUJBQU8sNkJBQUNBO1FBQU9ZLFFBQVFKOztJQUNuQyxxQkFBTyw2QkFBQ0csMkJBQWtCO1FBQUNDLFFBQVFKOztBQUNyQztNQUVBLFdBQWVYO0FBRWYsU0FBU2lCLGlCQUFpQkMsU0FBUztJQUNqQyxPQUFPLE9BQU9BLGNBQWMsY0FBYyxDQUFDLENBQUNBLFVBQVVDLFNBQVMsQ0FBQ0MsZ0JBQWdCO0FBQ2xGO0FBRUEsU0FBU0Msb0JBQW9CSCxTQUFTO0lBQ3BDLE9BQU8sT0FBT0EsY0FBYyxjQUFjSSxPQUFPSixXQUFXSyxRQUFRLENBQUM7QUFDdkU7QUFFQSxTQUFTSCxpQkFBaUJGLFNBQVM7SUFDakMsT0FBT0QsaUJBQWlCQyxjQUFjRyxvQkFBb0JIO0FBQzVEIn0=