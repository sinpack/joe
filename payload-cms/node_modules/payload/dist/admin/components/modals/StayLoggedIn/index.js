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
const _modal = require("@faceless-ui/modal");
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
const _Config = require("../../utilities/Config");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'stay-logged-in';
const modalSlug = 'stay-logged-in';
const StayLoggedInModal = (props)=>{
    const { refreshCookie } = props;
    const history = (0, _reactrouterdom.useHistory)();
    const config = (0, _Config.useConfig)();
    const { admin: { logoutRoute }, routes: { admin } } = config;
    const { toggleModal } = (0, _modal.useModal)();
    const { t } = (0, _reacti18next.useTranslation)('authentication');
    return /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        className: baseClass,
        slug: "stay-logged-in"
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrapper`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__content`
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t('stayLoggedIn')), /*#__PURE__*/ _react.default.createElement("p", null, t('youAreInactive'))), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__controls`
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        onClick: ()=>{
            toggleModal(modalSlug);
            history.push(`${admin}${logoutRoute}`);
        }
    }, t('logOut')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        onClick: ()=>{
            refreshCookie();
            toggleModal(modalSlug);
        }
    }, t('stayLoggedIn')))));
};
const _default = StayLoggedInModal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL21vZGFscy9TdGF5TG9nZ2VkSW4vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGFsLCB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdzdGF5LWxvZ2dlZC1pbidcblxuY29uc3QgbW9kYWxTbHVnID0gJ3N0YXktbG9nZ2VkLWluJ1xuXG5jb25zdCBTdGF5TG9nZ2VkSW5Nb2RhbDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVmcmVzaENvb2tpZSB9ID0gcHJvcHNcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKVxuICBjb25zdCB7XG4gICAgYWRtaW46IHsgbG9nb3V0Um91dGUgfSxcbiAgICByb3V0ZXM6IHsgYWRtaW4gfSxcbiAgfSA9IGNvbmZpZ1xuICBjb25zdCB7IHRvZ2dsZU1vZGFsIH0gPSB1c2VNb2RhbCgpXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2F1dGhlbnRpY2F0aW9uJylcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbCBjbGFzc05hbWU9e2Jhc2VDbGFzc30gc2x1Zz1cInN0YXktbG9nZ2VkLWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcHBlcmB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udGVudGB9PlxuICAgICAgICAgIDxoMT57dCgnc3RheUxvZ2dlZEluJyl9PC9oMT5cbiAgICAgICAgICA8cD57dCgneW91QXJlSW5hY3RpdmUnKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udHJvbHNgfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1ZylcbiAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGAke2FkbWlufSR7bG9nb3V0Um91dGV9YClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2xvZ091dCcpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcmVmcmVzaENvb2tpZSgpXG4gICAgICAgICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1ZylcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ3N0YXlMb2dnZWRJbicpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RheUxvZ2dlZEluTW9kYWxcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJtb2RhbFNsdWciLCJTdGF5TG9nZ2VkSW5Nb2RhbCIsInByb3BzIiwicmVmcmVzaENvb2tpZSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiY29uZmlnIiwidXNlQ29uZmlnIiwiYWRtaW4iLCJsb2dvdXRSb3V0ZSIsInJvdXRlcyIsInRvZ2dsZU1vZGFsIiwidXNlTW9kYWwiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJNb2RhbCIsImNsYXNzTmFtZSIsInNsdWciLCJkaXYiLCJoMSIsInAiLCJCdXR0b24iLCJidXR0b25TdHlsZSIsIm9uQ2xpY2siLCJwdXNoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXlEQTs7O2VBQUE7Ozt1QkF6RGdDOzhEQUNkOzhCQUNhO2dDQUNKOytEQUlSO3dCQUNPO1FBQ25COzs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLFlBQVk7QUFFbEIsTUFBTUMsb0JBQXFDLENBQUNDO0lBQzFDLE1BQU0sRUFBRUMsYUFBYSxFQUFFLEdBQUdEO0lBQzFCLE1BQU1FLFVBQVVDLElBQUFBLDBCQUFVO0lBQzFCLE1BQU1DLFNBQVNDLElBQUFBLGlCQUFTO0lBQ3hCLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxXQUFXLEVBQUUsRUFDdEJDLFFBQVEsRUFBRUYsS0FBSyxFQUFFLEVBQ2xCLEdBQUdGO0lBQ0osTUFBTSxFQUFFSyxXQUFXLEVBQUUsR0FBR0MsSUFBQUEsZUFBUTtJQUNoQyxNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRTdCLHFCQUNFLDZCQUFDQyxZQUFLO1FBQUNDLFdBQVdqQjtRQUFXa0IsTUFBSztxQkFDaEMsNkJBQUNDO1FBQUlGLFdBQVcsQ0FBQyxFQUFFakIsVUFBVSxTQUFTLENBQUM7cUJBQ3JDLDZCQUFDbUI7UUFBSUYsV0FBVyxDQUFDLEVBQUVqQixVQUFVLFNBQVMsQ0FBQztxQkFDckMsNkJBQUNvQixZQUFJTixFQUFFLGdDQUNQLDZCQUFDTyxXQUFHUCxFQUFFLG1DQUVSLDZCQUFDSztRQUFJRixXQUFXLENBQUMsRUFBRWpCLFVBQVUsVUFBVSxDQUFDO3FCQUN0Qyw2QkFBQ3NCLGVBQU07UUFDTEMsYUFBWTtRQUNaQyxTQUFTO1lBQ1BaLFlBQVlYO1lBQ1pJLFFBQVFvQixJQUFJLENBQUMsQ0FBQyxFQUFFaEIsTUFBTSxFQUFFQyxZQUFZLENBQUM7UUFDdkM7T0FFQ0ksRUFBRSwwQkFFTCw2QkFBQ1EsZUFBTTtRQUNMRSxTQUFTO1lBQ1BwQjtZQUNBUSxZQUFZWDtRQUNkO09BRUNhLEVBQUU7QUFNZjtNQUVBLFdBQWVaIn0=