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
const _reacttoastify = require("react-toastify");
const _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
const _Form = /*#__PURE__*/ _interop_require_default(require("../../forms/Form"));
const _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
const _ConfirmPassword = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/ConfirmPassword"));
const _HiddenInput = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/HiddenInput"));
const _Password = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/Password"));
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
const baseClass = 'reset-password';
const ResetPassword = ()=>{
    const config = (0, _Config.useConfig)();
    const { admin: { logoutRoute, user: userSlug }, routes: { admin, api }, serverURL } = config;
    const { token } = (0, _reactrouterdom.useParams)();
    const history = (0, _reactrouterdom.useHistory)();
    const { fetchFullUser, user } = (0, _Auth.useAuth)();
    const { t } = (0, _reacti18next.useTranslation)('authentication');
    const onSuccess = async (data)=>{
        if (data.token) {
            await fetchFullUser();
            history.push(`${admin}`);
        } else {
            history.push(`${admin}/login`);
            _reacttoastify.toast.success(t('general:updatedSuccessfully'), {
                autoClose: 3000
            });
        }
    };
    if (user) {
        return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
            className: baseClass
        }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
            description: t('resetPassword'),
            keywords: t('resetPassword'),
            title: t('resetPassword')
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__wrap`
        }, /*#__PURE__*/ _react.default.createElement("h1", null, t('alreadyLoggedIn')), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement(_reacti18next.Trans, {
            i18nKey: "loginWithAnotherUser",
            t: t
        }, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
            to: `${admin}${logoutRoute}`
        }, "log out"))), /*#__PURE__*/ _react.default.createElement("br", null), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            buttonStyle: "secondary",
            el: "link",
            to: admin
        }, t('general:backToDashboard'))));
    }
    return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrap`
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t('resetPassword')), /*#__PURE__*/ _react.default.createElement(_Form.default, {
        action: `${serverURL}${api}/${userSlug}/reset-password`,
        method: "post",
        onSuccess: onSuccess,
        redirect: admin
    }, /*#__PURE__*/ _react.default.createElement(_Password.default, {
        autoComplete: "off",
        label: t('newPassword'),
        name: "password",
        required: true
    }), /*#__PURE__*/ _react.default.createElement(_ConfirmPassword.default, null), /*#__PURE__*/ _react.default.createElement(_HiddenInput.default, {
        name: "token",
        value: token
    }), /*#__PURE__*/ _react.default.createElement(_Submit.default, null, t('resetPassword')))));
};
const _default = ResetPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1Jlc2V0UGFzc3dvcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyBMaW5rLCB1c2VIaXN0b3J5LCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nXG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJ1xuaW1wb3J0IEZvcm1TdWJtaXQgZnJvbSAnLi4vLi4vZm9ybXMvU3VibWl0J1xuaW1wb3J0IENvbmZpcm1QYXNzd29yZCBmcm9tICcuLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9Db25maXJtUGFzc3dvcmQnXG5pbXBvcnQgSGlkZGVuSW5wdXQgZnJvbSAnLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvSGlkZGVuSW5wdXQnXG5pbXBvcnQgUGFzc3dvcmQgZnJvbSAnLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvUGFzc3dvcmQnXG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCBNZXRhIGZyb20gJy4uLy4uL3V0aWxpdGllcy9NZXRhJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyZXNldC1wYXNzd29yZCdcblxuY29uc3QgUmVzZXRQYXNzd29yZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IHtcbiAgICBhZG1pbjogeyBsb2dvdXRSb3V0ZSwgdXNlcjogdXNlclNsdWcgfSxcbiAgICByb3V0ZXM6IHsgYWRtaW4sIGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IGNvbmZpZ1xuICBjb25zdCB7IHRva2VuIH0gPSB1c2VQYXJhbXM8eyB0b2tlbj86IHN0cmluZyB9PigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgeyBmZXRjaEZ1bGxVc2VyLCB1c2VyIH0gPSB1c2VBdXRoKClcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignYXV0aGVudGljYXRpb24nKVxuXG4gIGNvbnN0IG9uU3VjY2VzcyA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGEudG9rZW4pIHtcbiAgICAgIGF3YWl0IGZldGNoRnVsbFVzZXIoKVxuICAgICAgaGlzdG9yeS5wdXNoKGAke2FkbWlufWApXG4gICAgfSBlbHNlIHtcbiAgICAgIGhpc3RvcnkucHVzaChgJHthZG1pbn0vbG9naW5gKVxuICAgICAgdG9hc3Quc3VjY2Vzcyh0KCdnZW5lcmFsOnVwZGF0ZWRTdWNjZXNzZnVsbHknKSwgeyBhdXRvQ2xvc2U6IDMwMDAgfSlcbiAgICB9XG4gIH1cblxuICBpZiAodXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgICAgPE1ldGFcbiAgICAgICAgICBkZXNjcmlwdGlvbj17dCgncmVzZXRQYXNzd29yZCcpfVxuICAgICAgICAgIGtleXdvcmRzPXt0KCdyZXNldFBhc3N3b3JkJyl9XG4gICAgICAgICAgdGl0bGU9e3QoJ3Jlc2V0UGFzc3dvcmQnKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PlxuICAgICAgICAgIDxoMT57dCgnYWxyZWFkeUxvZ2dlZEluJyl9PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxUcmFucyBpMThuS2V5PVwibG9naW5XaXRoQW5vdGhlclVzZXJcIiB0PXt0fT5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2Ake2FkbWlufSR7bG9nb3V0Um91dGV9YH0+bG9nIG91dDwvTGluaz5cbiAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIiBlbD1cImxpbmtcIiB0bz17YWRtaW59PlxuICAgICAgICAgICAge3QoJ2dlbmVyYWw6YmFja1RvRGFzaGJvYXJkJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIDxoMT57dCgncmVzZXRQYXNzd29yZCcpfTwvaDE+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgYWN0aW9uPXtgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7dXNlclNsdWd9L3Jlc2V0LXBhc3N3b3JkYH1cbiAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICBvblN1Y2Nlc3M9e29uU3VjY2Vzc31cbiAgICAgICAgICByZWRpcmVjdD17YWRtaW59XG4gICAgICAgID5cbiAgICAgICAgICA8UGFzc3dvcmQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbGFiZWw9e3QoJ25ld1Bhc3N3b3JkJyl9IG5hbWU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPENvbmZpcm1QYXNzd29yZCAvPlxuICAgICAgICAgIDxIaWRkZW5JbnB1dCBuYW1lPVwidG9rZW5cIiB2YWx1ZT17dG9rZW59IC8+XG4gICAgICAgICAgPEZvcm1TdWJtaXQ+e3QoJ3Jlc2V0UGFzc3dvcmQnKX08L0Zvcm1TdWJtaXQ+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0UGFzc3dvcmRcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJSZXNldFBhc3N3b3JkIiwiY29uZmlnIiwidXNlQ29uZmlnIiwiYWRtaW4iLCJsb2dvdXRSb3V0ZSIsInVzZXIiLCJ1c2VyU2x1ZyIsInJvdXRlcyIsImFwaSIsInNlcnZlclVSTCIsInRva2VuIiwidXNlUGFyYW1zIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJmZXRjaEZ1bGxVc2VyIiwidXNlQXV0aCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsIm9uU3VjY2VzcyIsImRhdGEiLCJwdXNoIiwidG9hc3QiLCJzdWNjZXNzIiwiYXV0b0Nsb3NlIiwiTWluaW1hbFRlbXBsYXRlIiwiY2xhc3NOYW1lIiwiTWV0YSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ0aXRsZSIsImRpdiIsImgxIiwicCIsIlRyYW5zIiwiaTE4bktleSIsIkxpbmsiLCJ0byIsImJyIiwiQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJlbCIsIkZvcm0iLCJhY3Rpb24iLCJtZXRob2QiLCJyZWRpcmVjdCIsIlBhc3N3b3JkIiwiYXV0b0NvbXBsZXRlIiwibGFiZWwiLCJuYW1lIiwicmVxdWlyZWQiLCJDb25maXJtUGFzc3dvcmQiLCJIaWRkZW5JbnB1dCIsInZhbHVlIiwiRm9ybVN1Ym1pdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXNGQTs7O2VBQUE7Ozs4REF0RmtCOzhCQUNvQjtnQ0FDTTsrQkFDdEI7K0RBRUg7NkRBQ0Y7K0RBQ007d0VBQ0s7b0VBQ0o7aUVBQ0g7Z0VBQ087c0JBQ0o7d0JBQ0U7NkRBQ1Q7UUFDVjs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxnQkFBMEI7SUFDOUIsTUFBTUMsU0FBU0MsSUFBQUEsaUJBQVM7SUFDeEIsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsTUFBTUMsUUFBUSxFQUFFLEVBQ3RDQyxRQUFRLEVBQUVKLEtBQUssRUFBRUssR0FBRyxFQUFFLEVBQ3RCQyxTQUFTLEVBQ1YsR0FBR1I7SUFDSixNQUFNLEVBQUVTLEtBQUssRUFBRSxHQUFHQyxJQUFBQSx5QkFBUztJQUMzQixNQUFNQyxVQUFVQyxJQUFBQSwwQkFBVTtJQUMxQixNQUFNLEVBQUVDLGFBQWEsRUFBRVQsSUFBSSxFQUFFLEdBQUdVLElBQUFBLGFBQU87SUFDdkMsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUU3QixNQUFNQyxZQUFZLE9BQU9DO1FBQ3ZCLElBQUlBLEtBQUtULEtBQUssRUFBRTtZQUNkLE1BQU1JO1lBQ05GLFFBQVFRLElBQUksQ0FBQyxDQUFDLEVBQUVqQixNQUFNLENBQUM7UUFDekIsT0FBTztZQUNMUyxRQUFRUSxJQUFJLENBQUMsQ0FBQyxFQUFFakIsTUFBTSxNQUFNLENBQUM7WUFDN0JrQixvQkFBSyxDQUFDQyxPQUFPLENBQUNOLEVBQUUsZ0NBQWdDO2dCQUFFTyxXQUFXO1lBQUs7UUFDcEU7SUFDRjtJQUVBLElBQUlsQixNQUFNO1FBQ1IscUJBQ0UsNkJBQUNtQixnQkFBZTtZQUFDQyxXQUFXMUI7eUJBQzFCLDZCQUFDMkIsYUFBSTtZQUNIQyxhQUFhWCxFQUFFO1lBQ2ZZLFVBQVVaLEVBQUU7WUFDWmEsT0FBT2IsRUFBRTswQkFHWCw2QkFBQ2M7WUFBSUwsV0FBVyxDQUFDLEVBQUUxQixVQUFVLE1BQU0sQ0FBQzt5QkFDbEMsNkJBQUNnQyxZQUFJZixFQUFFLG1DQUNQLDZCQUFDZ0IseUJBQ0MsNkJBQUNDLG1CQUFLO1lBQUNDLFNBQVE7WUFBdUJsQixHQUFHQTt5QkFDdkMsNkJBQUNtQixvQkFBSTtZQUFDQyxJQUFJLENBQUMsRUFBRWpDLE1BQU0sRUFBRUMsWUFBWSxDQUFDO1dBQUUsNEJBR3hDLDZCQUFDaUMsMkJBQ0QsNkJBQUNDLGVBQU07WUFBQ0MsYUFBWTtZQUFZQyxJQUFHO1lBQU9KLElBQUlqQztXQUMzQ2EsRUFBRTtJQUtiO0lBRUEscUJBQ0UsNkJBQUNRLGdCQUFlO1FBQUNDLFdBQVcxQjtxQkFDMUIsNkJBQUMrQjtRQUFJTCxXQUFXLENBQUMsRUFBRTFCLFVBQVUsTUFBTSxDQUFDO3FCQUNsQyw2QkFBQ2dDLFlBQUlmLEVBQUUsaUNBQ1AsNkJBQUN5QixhQUFJO1FBQ0hDLFFBQVEsQ0FBQyxFQUFFakMsVUFBVSxFQUFFRCxJQUFJLENBQUMsRUFBRUYsU0FBUyxlQUFlLENBQUM7UUFDdkRxQyxRQUFPO1FBQ1B6QixXQUFXQTtRQUNYMEIsVUFBVXpDO3FCQUVWLDZCQUFDMEMsaUJBQVE7UUFBQ0MsY0FBYTtRQUFNQyxPQUFPL0IsRUFBRTtRQUFnQmdDLE1BQUs7UUFBV0MsVUFBQUE7c0JBQ3RFLDZCQUFDQyx3QkFBZSx1QkFDaEIsNkJBQUNDLG9CQUFXO1FBQUNILE1BQUs7UUFBUUksT0FBTzFDO3NCQUNqQyw2QkFBQzJDLGVBQVUsUUFBRXJDLEVBQUU7QUFLekI7TUFFQSxXQUFlaEIifQ==