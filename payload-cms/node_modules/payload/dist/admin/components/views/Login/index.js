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
const _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
const _Loading = require("../../elements/Loading");
const _Form = /*#__PURE__*/ _interop_require_default(require("../../forms/Form"));
const _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
const _Email = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/Email"));
const _Password = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/Password"));
const _Logo = /*#__PURE__*/ _interop_require_default(require("../../graphics/Logo"));
const _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'login';
const Login = ()=>{
    const history = (0, _reactrouterdom.useHistory)();
    const { t } = (0, _reacti18next.useTranslation)('authentication');
    const { fetchFullUser, user } = (0, _Auth.useAuth)();
    const config = (0, _Config.useConfig)();
    const { admin: { autoLogin, components: { afterLogin, beforeLogin } = {}, logoutRoute, user: userSlug }, collections, routes: { admin, api }, serverURL } = config;
    const collection = collections.find(({ slug })=>slug === userSlug);
    // Fetch 'redirect' from the query string which denotes the URL the user originally tried to visit. This is set in the Routes.tsx file when a user tries to access a protected route and is redirected to the login screen.
    const query = new URLSearchParams((0, _reactrouterdom.useLocation)().search);
    const redirect = query.get('redirect');
    const onSuccess = async (data)=>{
        if (data.token) {
            await fetchFullUser();
            // Ensure the redirect always starts with the admin route, and concatenate the redirect path
            history.push(admin + (redirect || ''));
        }
    };
    const prefillForm = autoLogin && autoLogin.prefillOnly;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, user ? // Logout
    /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        description: t('loginUser'),
        keywords: t('login'),
        title: t('login')
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrap`
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t('alreadyLoggedIn')), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement(_reacti18next.Trans, {
        i18nKey: "loggedIn",
        t: t
    }, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: `${admin}${logoutRoute}`
    }, t('logOut')))), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        el: "link",
        to: admin
    }, t('general:backToDashboard')))) : // Login
    /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        description: t('loginUser'),
        keywords: t('login'),
        title: t('login')
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__brand`
    }, /*#__PURE__*/ _react.default.createElement(_Logo.default, null)), Array.isArray(beforeLogin) && beforeLogin.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), !collection?.auth?.disableLocalStrategy && /*#__PURE__*/ _react.default.createElement(_Form.default, {
        action: `${serverURL}${api}/${userSlug}/login`,
        className: `${baseClass}__form`,
        disableSuccessStatus: true,
        initialData: prefillForm ? {
            email: autoLogin.email,
            password: autoLogin.password
        } : undefined,
        method: "post",
        onSuccess: onSuccess,
        waitForAutocomplete: true
    }, /*#__PURE__*/ _react.default.createElement(_Loading.FormLoadingOverlayToggle, {
        action: "loading",
        name: "login-form"
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__inputWrap`
    }, /*#__PURE__*/ _react.default.createElement(_Email.default, {
        admin: {
            autoComplete: 'email'
        },
        label: t('general:email'),
        name: "email",
        required: true
    }), /*#__PURE__*/ _react.default.createElement(_Password.default, {
        autoComplete: "off",
        label: t('general:password'),
        name: "password",
        required: true
    })), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: `${admin}/forgot`
    }, t('forgotPasswordQuestion')), /*#__PURE__*/ _react.default.createElement(_Submit.default, null, t('login'))), Array.isArray(afterLogin) && afterLogin.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        }))));
};
const _default = Login;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xvZ2luL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFucywgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgTGluaywgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbidcbmltcG9ydCB7IEZvcm1Mb2FkaW5nT3ZlcmxheVRvZ2dsZSB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0xvYWRpbmcnXG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJ1xuaW1wb3J0IEZvcm1TdWJtaXQgZnJvbSAnLi4vLi4vZm9ybXMvU3VibWl0J1xuaW1wb3J0IEVtYWlsIGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL0VtYWlsJ1xuaW1wb3J0IFBhc3N3b3JkIGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1Bhc3N3b3JkJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vZ3JhcGhpY3MvTG9nbydcbmltcG9ydCBNaW5pbWFsVGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2xvZ2luJ1xuXG5jb25zdCBMb2dpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignYXV0aGVudGljYXRpb24nKVxuICBjb25zdCB7IGZldGNoRnVsbFVzZXIsIHVzZXIgfSA9IHVzZUF1dGgoKVxuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKVxuICBjb25zdCB7XG4gICAgYWRtaW46IHsgYXV0b0xvZ2luLCBjb21wb25lbnRzOiB7IGFmdGVyTG9naW4sIGJlZm9yZUxvZ2luIH0gPSB7fSwgbG9nb3V0Um91dGUsIHVzZXI6IHVzZXJTbHVnIH0sXG4gICAgY29sbGVjdGlvbnMsXG4gICAgcm91dGVzOiB7IGFkbWluLCBhcGkgfSxcbiAgICBzZXJ2ZXJVUkwsXG4gIH0gPSBjb25maWdcblxuICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnMuZmluZCgoeyBzbHVnIH0pID0+IHNsdWcgPT09IHVzZXJTbHVnKVxuXG4gIC8vIEZldGNoICdyZWRpcmVjdCcgZnJvbSB0aGUgcXVlcnkgc3RyaW5nIHdoaWNoIGRlbm90ZXMgdGhlIFVSTCB0aGUgdXNlciBvcmlnaW5hbGx5IHRyaWVkIHRvIHZpc2l0LiBUaGlzIGlzIHNldCBpbiB0aGUgUm91dGVzLnRzeCBmaWxlIHdoZW4gYSB1c2VyIHRyaWVzIHRvIGFjY2VzcyBhIHByb3RlY3RlZCByb3V0ZSBhbmQgaXMgcmVkaXJlY3RlZCB0byB0aGUgbG9naW4gc2NyZWVuLlxuICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXNlTG9jYXRpb24oKS5zZWFyY2gpXG4gIGNvbnN0IHJlZGlyZWN0ID0gcXVlcnkuZ2V0KCdyZWRpcmVjdCcpXG5cbiAgY29uc3Qgb25TdWNjZXNzID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS50b2tlbikge1xuICAgICAgYXdhaXQgZmV0Y2hGdWxsVXNlcigpXG5cbiAgICAgIC8vIEVuc3VyZSB0aGUgcmVkaXJlY3QgYWx3YXlzIHN0YXJ0cyB3aXRoIHRoZSBhZG1pbiByb3V0ZSwgYW5kIGNvbmNhdGVuYXRlIHRoZSByZWRpcmVjdCBwYXRoXG4gICAgICBoaXN0b3J5LnB1c2goYWRtaW4gKyAocmVkaXJlY3QgfHwgJycpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByZWZpbGxGb3JtID0gYXV0b0xvZ2luICYmIGF1dG9Mb2dpbi5wcmVmaWxsT25seVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge3VzZXIgPyAoXG4gICAgICAgIC8vIExvZ291dFxuICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgICAgICA8TWV0YSBkZXNjcmlwdGlvbj17dCgnbG9naW5Vc2VyJyl9IGtleXdvcmRzPXt0KCdsb2dpbicpfSB0aXRsZT17dCgnbG9naW4nKX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PlxuICAgICAgICAgICAgPGgxPnt0KCdhbHJlYWR5TG9nZ2VkSW4nKX08L2gxPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxUcmFucyBpMThuS2V5PVwibG9nZ2VkSW5cIiB0PXt0fT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17YCR7YWRtaW59JHtsb2dvdXRSb3V0ZX1gfT57dCgnbG9nT3V0Jyl9PC9MaW5rPlxuICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiIGVsPVwibGlua1wiIHRvPXthZG1pbn0+XG4gICAgICAgICAgICAgIHt0KCdnZW5lcmFsOmJhY2tUb0Rhc2hib2FyZCcpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgKSA6IChcbiAgICAgICAgLy8gTG9naW5cbiAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICAgICAgPE1ldGEgZGVzY3JpcHRpb249e3QoJ2xvZ2luVXNlcicpfSBrZXl3b3Jkcz17dCgnbG9naW4nKX0gdGl0bGU9e3QoJ2xvZ2luJyl9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JyYW5kYH0+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KGJlZm9yZUxvZ2luKSAmJiBiZWZvcmVMb2dpbi5tYXAoKENvbXBvbmVudCwgaSkgPT4gPENvbXBvbmVudCBrZXk9e2l9IC8+KX1cbiAgICAgICAgICB7IWNvbGxlY3Rpb24/LmF1dGg/LmRpc2FibGVMb2NhbFN0cmF0ZWd5ICYmIChcbiAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgIGFjdGlvbj17YCR7c2VydmVyVVJMfSR7YXBpfS8ke3VzZXJTbHVnfS9sb2dpbmB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZm9ybWB9XG4gICAgICAgICAgICAgIGRpc2FibGVTdWNjZXNzU3RhdHVzXG4gICAgICAgICAgICAgIGluaXRpYWxEYXRhPXtcbiAgICAgICAgICAgICAgICBwcmVmaWxsRm9ybVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGF1dG9Mb2dpbi5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogYXV0b0xvZ2luLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgICBvblN1Y2Nlc3M9e29uU3VjY2Vzc31cbiAgICAgICAgICAgICAgd2FpdEZvckF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlIGFjdGlvbj1cImxvYWRpbmdcIiBuYW1lPVwibG9naW4tZm9ybVwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pbnB1dFdyYXBgfT5cbiAgICAgICAgICAgICAgICA8RW1haWxcbiAgICAgICAgICAgICAgICAgIGFkbWluPXt7IGF1dG9Db21wbGV0ZTogJ2VtYWlsJyB9fVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2dlbmVyYWw6ZW1haWwnKX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2dlbmVyYWw6cGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TGluayB0bz17YCR7YWRtaW59L2ZvcmdvdGB9Pnt0KCdmb3Jnb3RQYXNzd29yZFF1ZXN0aW9uJyl9PC9MaW5rPlxuICAgICAgICAgICAgICA8Rm9ybVN1Ym1pdD57dCgnbG9naW4nKX08L0Zvcm1TdWJtaXQ+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShhZnRlckxvZ2luKSAmJiBhZnRlckxvZ2luLm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICA8L01pbmltYWxUZW1wbGF0ZT5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkxvZ2luIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJmZXRjaEZ1bGxVc2VyIiwidXNlciIsInVzZUF1dGgiLCJjb25maWciLCJ1c2VDb25maWciLCJhZG1pbiIsImF1dG9Mb2dpbiIsImNvbXBvbmVudHMiLCJhZnRlckxvZ2luIiwiYmVmb3JlTG9naW4iLCJsb2dvdXRSb3V0ZSIsInVzZXJTbHVnIiwiY29sbGVjdGlvbnMiLCJyb3V0ZXMiLCJhcGkiLCJzZXJ2ZXJVUkwiLCJjb2xsZWN0aW9uIiwiZmluZCIsInNsdWciLCJxdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsInVzZUxvY2F0aW9uIiwic2VhcmNoIiwicmVkaXJlY3QiLCJnZXQiLCJvblN1Y2Nlc3MiLCJkYXRhIiwidG9rZW4iLCJwdXNoIiwicHJlZmlsbEZvcm0iLCJwcmVmaWxsT25seSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJNaW5pbWFsVGVtcGxhdGUiLCJjbGFzc05hbWUiLCJNZXRhIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInRpdGxlIiwiZGl2IiwiaDEiLCJwIiwiVHJhbnMiLCJpMThuS2V5IiwiTGluayIsInRvIiwiQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJlbCIsIkxvZ28iLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJDb21wb25lbnQiLCJpIiwia2V5IiwiYXV0aCIsImRpc2FibGVMb2NhbFN0cmF0ZWd5IiwiRm9ybSIsImFjdGlvbiIsImRpc2FibGVTdWNjZXNzU3RhdHVzIiwiaW5pdGlhbERhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwidW5kZWZpbmVkIiwibWV0aG9kIiwid2FpdEZvckF1dG9jb21wbGV0ZSIsIkZvcm1Mb2FkaW5nT3ZlcmxheVRvZ2dsZSIsIm5hbWUiLCJFbWFpbCIsImF1dG9Db21wbGV0ZSIsImxhYmVsIiwicmVxdWlyZWQiLCJQYXNzd29yZCIsIkZvcm1TdWJtaXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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