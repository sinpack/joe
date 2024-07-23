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
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _reacttoastify = require("react-toastify");
const _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
const _Form = /*#__PURE__*/ _interop_require_default(require("../../forms/Form"));
const _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
const _Email = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/Email"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const baseClass = 'forgot-password';
const ForgotPassword = ()=>{
    const [hasSubmitted, setHasSubmitted] = (0, _react.useState)(false);
    const { user } = (0, _Auth.useAuth)();
    const { t } = (0, _reacti18next.useTranslation)('authentication');
    const { admin: { user: userSlug }, routes: { admin, api }, serverURL } = (0, _Config.useConfig)();
    const handleResponse = (res)=>{
        res.json().then(()=>{
            setHasSubmitted(true);
        }, ()=>{
            _reacttoastify.toast.error(t('emailNotValid'));
        });
    };
    if (user) {
        return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
            className: baseClass
        }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
            description: t('forgotPassword'),
            keywords: t('forgotPassword'),
            title: t('forgotPassword')
        }), /*#__PURE__*/ _react.default.createElement("h1", null, t('alreadyLoggedIn')), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement(_reacti18next.Trans, {
            i18nKey: "loggedInChangePassword",
            t: t
        }, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
            to: `${admin}/account`
        }, "account"))), /*#__PURE__*/ _react.default.createElement("br", null), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            buttonStyle: "secondary",
            el: "link",
            to: admin
        }, t('general:backToDashboard')));
    }
    if (hasSubmitted) {
        return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
            className: baseClass
        }, /*#__PURE__*/ _react.default.createElement("h1", null, t('emailSent')), /*#__PURE__*/ _react.default.createElement("p", null, t('checkYourEmailForPasswordReset')));
    }
    return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Form.default, {
        action: `${serverURL}${api}/${userSlug}/forgot-password`,
        handleResponse: handleResponse,
        method: "post"
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t('forgotPassword')), /*#__PURE__*/ _react.default.createElement("p", null, t('forgotPasswordEmailInstructions')), /*#__PURE__*/ _react.default.createElement(_Email.default, {
        admin: {
            autoComplete: 'email'
        },
        label: t('general:emailAddress'),
        name: "email",
        required: true
    }), /*#__PURE__*/ _react.default.createElement(_Submit.default, null, t('general:submit'))), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: `${admin}/login`
    }, t('backToLogin')));
};
const _default = ForgotPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0ZvcmdvdFBhc3N3b3JkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vZWxlbWVudHMvQnV0dG9uJ1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybSdcbmltcG9ydCBGb3JtU3VibWl0IGZyb20gJy4uLy4uL2Zvcm1zL1N1Ym1pdCdcbmltcG9ydCBFbWFpbCBmcm9tICcuLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9FbWFpbCdcbmltcG9ydCBNaW5pbWFsVGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2ZvcmdvdC1wYXNzd29yZCdcblxuY29uc3QgRm9yZ290UGFzc3dvcmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaGFzU3VibWl0dGVkLCBzZXRIYXNTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2F1dGhlbnRpY2F0aW9uJylcbiAgY29uc3Qge1xuICAgIGFkbWluOiB7IHVzZXI6IHVzZXJTbHVnIH0sXG4gICAgcm91dGVzOiB7IGFkbWluLCBhcGkgfSxcbiAgICBzZXJ2ZXJVUkwsXG4gIH0gPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHJlcykgPT4ge1xuICAgIHJlcy5qc29uKCkudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgc2V0SGFzU3VibWl0dGVkKHRydWUpXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0b2FzdC5lcnJvcih0KCdlbWFpbE5vdFZhbGlkJykpXG4gICAgICB9LFxuICAgIClcbiAgfVxuXG4gIGlmICh1c2VyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgICA8TWV0YVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdmb3Jnb3RQYXNzd29yZCcpfVxuICAgICAgICAgIGtleXdvcmRzPXt0KCdmb3Jnb3RQYXNzd29yZCcpfVxuICAgICAgICAgIHRpdGxlPXt0KCdmb3Jnb3RQYXNzd29yZCcpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxoMT57dCgnYWxyZWFkeUxvZ2dlZEluJyl9PC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPFRyYW5zIGkxOG5LZXk9XCJsb2dnZWRJbkNoYW5nZVBhc3N3b3JkXCIgdD17dH0+XG4gICAgICAgICAgICA8TGluayB0bz17YCR7YWRtaW59L2FjY291bnRgfT5hY2NvdW50PC9MaW5rPlxuICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIiBlbD1cImxpbmtcIiB0bz17YWRtaW59PlxuICAgICAgICAgIHt0KCdnZW5lcmFsOmJhY2tUb0Rhc2hib2FyZCcpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgIClcbiAgfVxuXG4gIGlmIChoYXNTdWJtaXR0ZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICAgIDxoMT57dCgnZW1haWxTZW50Jyl9PC9oMT5cbiAgICAgICAgPHA+e3QoJ2NoZWNrWW91ckVtYWlsRm9yUGFzc3dvcmRSZXNldCcpfTwvcD5cbiAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8Rm9ybVxuICAgICAgICBhY3Rpb249e2Ake3NlcnZlclVSTH0ke2FwaX0vJHt1c2VyU2x1Z30vZm9yZ290LXBhc3N3b3JkYH1cbiAgICAgICAgaGFuZGxlUmVzcG9uc2U9e2hhbmRsZVJlc3BvbnNlfVxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgID5cbiAgICAgICAgPGgxPnt0KCdmb3Jnb3RQYXNzd29yZCcpfTwvaDE+XG4gICAgICAgIDxwPnt0KCdmb3Jnb3RQYXNzd29yZEVtYWlsSW5zdHJ1Y3Rpb25zJyl9PC9wPlxuICAgICAgICA8RW1haWxcbiAgICAgICAgICBhZG1pbj17eyBhdXRvQ29tcGxldGU6ICdlbWFpbCcgfX1cbiAgICAgICAgICBsYWJlbD17dCgnZ2VuZXJhbDplbWFpbEFkZHJlc3MnKX1cbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtU3VibWl0Pnt0KCdnZW5lcmFsOnN1Ym1pdCcpfTwvRm9ybVN1Ym1pdD5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxMaW5rIHRvPXtgJHthZG1pbn0vbG9naW5gfT57dCgnYmFja1RvTG9naW4nKX08L0xpbms+XG4gICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJGb3Jnb3RQYXNzd29yZCIsImhhc1N1Ym1pdHRlZCIsInNldEhhc1N1Ym1pdHRlZCIsInVzZVN0YXRlIiwidXNlciIsInVzZUF1dGgiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJhZG1pbiIsInVzZXJTbHVnIiwicm91dGVzIiwiYXBpIiwic2VydmVyVVJMIiwidXNlQ29uZmlnIiwiaGFuZGxlUmVzcG9uc2UiLCJyZXMiLCJqc29uIiwidGhlbiIsInRvYXN0IiwiZXJyb3IiLCJNaW5pbWFsVGVtcGxhdGUiLCJjbGFzc05hbWUiLCJNZXRhIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInRpdGxlIiwiaDEiLCJwIiwiVHJhbnMiLCJpMThuS2V5IiwiTGluayIsInRvIiwiYnIiLCJCdXR0b24iLCJidXR0b25TdHlsZSIsImVsIiwiRm9ybSIsImFjdGlvbiIsIm1ldGhvZCIsIkVtYWlsIiwiYXV0b0NvbXBsZXRlIiwibGFiZWwiLCJuYW1lIiwicmVxdWlyZWQiLCJGb3JtU3VibWl0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTRGQTs7O2VBQUE7OzsrREE1RmdDOzhCQUNNO2dDQUNqQjsrQkFDQzsrREFFSDs2REFDRjsrREFDTTs4REFDTDtnRUFDVTtzQkFDSjt3QkFDRTs2REFDVDtRQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsaUJBQTJCO0lBQy9CLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdDLElBQUFBLGVBQVEsRUFBQztJQUNqRCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxJQUFBQSxhQUFPO0lBQ3hCLE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEdBQUdDLElBQUFBLDRCQUFjLEVBQUM7SUFDN0IsTUFBTSxFQUNKQyxPQUFPLEVBQUVKLE1BQU1LLFFBQVEsRUFBRSxFQUN6QkMsUUFBUSxFQUFFRixLQUFLLEVBQUVHLEdBQUcsRUFBRSxFQUN0QkMsU0FBUyxFQUNWLEdBQUdDLElBQUFBLGlCQUFTO0lBRWIsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCQSxJQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FDYjtZQUNFZixnQkFBZ0I7UUFDbEIsR0FDQTtZQUNFZ0Isb0JBQUssQ0FBQ0MsS0FBSyxDQUFDYixFQUFFO1FBQ2hCO0lBRUo7SUFFQSxJQUFJRixNQUFNO1FBQ1IscUJBQ0UsNkJBQUNnQixnQkFBZTtZQUFDQyxXQUFXdEI7eUJBQzFCLDZCQUFDdUIsYUFBSTtZQUNIQyxhQUFhakIsRUFBRTtZQUNma0IsVUFBVWxCLEVBQUU7WUFDWm1CLE9BQU9uQixFQUFFOzBCQUdYLDZCQUFDb0IsWUFBSXBCLEVBQUUsbUNBQ1AsNkJBQUNxQix5QkFDQyw2QkFBQ0MsbUJBQUs7WUFBQ0MsU0FBUTtZQUF5QnZCLEdBQUdBO3lCQUN6Qyw2QkFBQ3dCLG9CQUFJO1lBQUNDLElBQUksQ0FBQyxFQUFFdkIsTUFBTSxRQUFRLENBQUM7V0FBRSw0QkFHbEMsNkJBQUN3QiwyQkFDRCw2QkFBQ0MsZUFBTTtZQUFDQyxhQUFZO1lBQVlDLElBQUc7WUFBT0osSUFBSXZCO1dBQzNDRixFQUFFO0lBSVg7SUFFQSxJQUFJTCxjQUFjO1FBQ2hCLHFCQUNFLDZCQUFDbUIsZ0JBQWU7WUFBQ0MsV0FBV3RCO3lCQUMxQiw2QkFBQzJCLFlBQUlwQixFQUFFLDZCQUNQLDZCQUFDcUIsV0FBR3JCLEVBQUU7SUFHWjtJQUVBLHFCQUNFLDZCQUFDYyxnQkFBZTtRQUFDQyxXQUFXdEI7cUJBQzFCLDZCQUFDcUMsYUFBSTtRQUNIQyxRQUFRLENBQUMsRUFBRXpCLFVBQVUsRUFBRUQsSUFBSSxDQUFDLEVBQUVGLFNBQVMsZ0JBQWdCLENBQUM7UUFDeERLLGdCQUFnQkE7UUFDaEJ3QixRQUFPO3FCQUVQLDZCQUFDWixZQUFJcEIsRUFBRSxrQ0FDUCw2QkFBQ3FCLFdBQUdyQixFQUFFLG1EQUNOLDZCQUFDaUMsY0FBSztRQUNKL0IsT0FBTztZQUFFZ0MsY0FBYztRQUFRO1FBQy9CQyxPQUFPbkMsRUFBRTtRQUNUb0MsTUFBSztRQUNMQyxVQUFBQTtzQkFFRiw2QkFBQ0MsZUFBVSxRQUFFdEMsRUFBRSxtQ0FFakIsNkJBQUN3QixvQkFBSTtRQUFDQyxJQUFJLENBQUMsRUFBRXZCLE1BQU0sTUFBTSxDQUFDO09BQUdGLEVBQUU7QUFHckM7TUFFQSxXQUFlTiJ9