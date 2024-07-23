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
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _LogOut = /*#__PURE__*/ _interop_require_default(require("../../icons/LogOut"));
const _Config = require("../../utilities/Config");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'nav';
const DefaultLogout = ({ tabIndex })=>{
    const { t } = (0, _reacti18next.useTranslation)('authentication');
    const config = (0, _Config.useConfig)();
    const { admin: { logoutRoute }, routes: { admin } } = config;
    return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        "aria-label": t('logOut'),
        className: `${baseClass}__log-out`,
        tabIndex: tabIndex,
        to: `${admin}${logoutRoute}`
    }, /*#__PURE__*/ _react.default.createElement(_LogOut.default, null));
};
const Logout = ({ tabIndex = 0 })=>{
    const { admin: { components: { logout: { Button: CustomLogout } = {
        Button: undefined
    } } = {} } = {} } = (0, _Config.useConfig)();
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomLogout,
        DefaultComponent: DefaultLogout,
        componentProps: {
            tabIndex
        }
    });
};
const _default = Logout;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xvZ291dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBMb2dPdXQgZnJvbSAnLi4vLi4vaWNvbnMvTG9nT3V0J1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCdcblxuY29uc3QgYmFzZUNsYXNzID0gJ25hdidcblxuY29uc3QgRGVmYXVsdExvZ291dDogUmVhY3QuRkM8e1xuICB0YWJJbmRleD86IG51bWJlclxufT4gPSAoeyB0YWJJbmRleCB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2F1dGhlbnRpY2F0aW9uJylcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKClcblxuICBjb25zdCB7XG4gICAgYWRtaW46IHsgbG9nb3V0Um91dGUgfSxcbiAgICByb3V0ZXM6IHsgYWRtaW4gfSxcbiAgfSA9IGNvbmZpZ1xuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGFyaWEtbGFiZWw9e3QoJ2xvZ091dCcpfVxuICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sb2ctb3V0YH1cbiAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgIHRvPXtgJHthZG1pbn0ke2xvZ291dFJvdXRlfWB9XG4gICAgPlxuICAgICAgPExvZ091dCAvPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBMb2dvdXQ6IFJlYWN0LkZDPHtcbiAgdGFiSW5kZXg/OiBudW1iZXJcbn0+ID0gKHsgdGFiSW5kZXggPSAwIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGxvZ291dDogeyBCdXR0b246IEN1c3RvbUxvZ291dCB9ID0ge1xuICAgICAgICAgIEJ1dHRvbjogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSA9IHt9LFxuICAgIH0gPSB7fSxcbiAgfSA9IHVzZUNvbmZpZygpXG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBDdXN0b21Db21wb25lbnQ9e0N1c3RvbUxvZ291dH1cbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRMb2dvdXR9XG4gICAgICBjb21wb25lbnRQcm9wcz17e1xuICAgICAgICB0YWJJbmRleCxcbiAgICAgIH19XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dvdXRcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEZWZhdWx0TG9nb3V0IiwidGFiSW5kZXgiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJjb25maWciLCJ1c2VDb25maWciLCJhZG1pbiIsImxvZ291dFJvdXRlIiwicm91dGVzIiwiTGluayIsImFyaWEtbGFiZWwiLCJjbGFzc05hbWUiLCJ0byIsIkxvZ091dCIsIkxvZ291dCIsImNvbXBvbmVudHMiLCJsb2dvdXQiLCJCdXR0b24iLCJDdXN0b21Mb2dvdXQiLCJ1bmRlZmluZWQiLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJDdXN0b21Db21wb25lbnQiLCJEZWZhdWx0Q29tcG9uZW50IiwiY29tcG9uZW50UHJvcHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXlEQTs7O2VBQUE7Ozs4REF6RGtCOzhCQUNhO2dDQUNWOytEQUVGO3dCQUNPOzhFQUNROzs7Ozs7QUFFbEMsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxnQkFFRCxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUNoQixNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBQzdCLE1BQU1DLFNBQVNDLElBQUFBLGlCQUFTO0lBRXhCLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxXQUFXLEVBQUUsRUFDdEJDLFFBQVEsRUFBRUYsS0FBSyxFQUFFLEVBQ2xCLEdBQUdGO0lBRUoscUJBQ0UsNkJBQUNLLG9CQUFJO1FBQ0hDLGNBQVlSLEVBQUU7UUFDZFMsV0FBVyxDQUFDLEVBQUVaLFVBQVUsU0FBUyxDQUFDO1FBQ2xDRSxVQUFVQTtRQUNWVyxJQUFJLENBQUMsRUFBRU4sTUFBTSxFQUFFQyxZQUFZLENBQUM7cUJBRTVCLDZCQUFDTSxlQUFNO0FBR2I7QUFFQSxNQUFNQyxTQUVELENBQUMsRUFBRWIsV0FBVyxDQUFDLEVBQUU7SUFDcEIsTUFBTSxFQUNKSyxPQUFPLEVBQ0xTLFlBQVksRUFDVkMsUUFBUSxFQUFFQyxRQUFRQyxZQUFZLEVBQUUsR0FBRztRQUNqQ0QsUUFBUUU7SUFDVixDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsRUFDUCxHQUFHLENBQUMsQ0FBQyxFQUNQLEdBQUdkLElBQUFBLGlCQUFTO0lBRWIscUJBQ0UsNkJBQUNlLDhCQUFxQjtRQUNwQkMsaUJBQWlCSDtRQUNqQkksa0JBQWtCdEI7UUFDbEJ1QixnQkFBZ0I7WUFDZHRCO1FBQ0Y7O0FBR047TUFFQSxXQUFlYSJ9