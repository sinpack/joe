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
const _reacttoastify = require("react-toastify");
const _Button = /*#__PURE__*/ _interop_require_default(require("../../../../elements/Button"));
const _context = require("../../../../forms/Form/context");
const _Checkbox = /*#__PURE__*/ _interop_require_default(require("../../../../forms/field-types/Checkbox"));
const _ConfirmPassword = /*#__PURE__*/ _interop_require_default(require("../../../../forms/field-types/ConfirmPassword"));
const _Email = /*#__PURE__*/ _interop_require_default(require("../../../../forms/field-types/Email"));
const _Password = /*#__PURE__*/ _interop_require_default(require("../../../../forms/field-types/Password"));
const _Config = require("../../../../utilities/Config");
const _APIKey = /*#__PURE__*/ _interop_require_default(require("./APIKey"));
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
const baseClass = 'auth-fields';
const Auth = (props)=>{
    const { className, collection, collection: { slug }, email, operation, readOnly, requirePassword, useAPIKey, verify } = props;
    const [changingPassword, setChangingPassword] = (0, _react.useState)(requirePassword);
    const enableAPIKey = (0, _context.useFormFields)(([fields])=>fields.enableAPIKey);
    const dispatchFields = (0, _context.useFormFields)((reducer)=>reducer[1]);
    const modified = (0, _context.useFormModified)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('authentication');
    const { routes: { api }, serverURL } = (0, _Config.useConfig)();
    const handleChangePassword = (0, _react.useCallback)(async (state)=>{
        if (!state) {
            dispatchFields({
                path: 'password',
                type: 'REMOVE'
            });
            dispatchFields({
                path: 'confirm-password',
                type: 'REMOVE'
            });
        }
        setChangingPassword(state);
    }, [
        dispatchFields
    ]);
    const unlock = (0, _react.useCallback)(async ()=>{
        const url = `${serverURL}${api}/${slug}/unlock`;
        const response = await fetch(url, {
            body: JSON.stringify({
                email
            }),
            credentials: 'include',
            headers: {
                'Accept-Language': i18n.language,
                'Content-Type': 'application/json'
            },
            method: 'post'
        });
        if (response.status === 200) {
            _reacttoastify.toast.success(t('successfullyUnlocked'), {
                autoClose: 3000
            });
        } else {
            _reacttoastify.toast.error(t('failedToUnlock'));
        }
    }, [
        i18n,
        serverURL,
        api,
        slug,
        email,
        t
    ]);
    (0, _react.useEffect)(()=>{
        if (!modified) {
            setChangingPassword(false);
        }
    }, [
        modified
    ]);
    if (collection.auth.disableLocalStrategy && !collection.auth.useAPIKey) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            className
        ].filter(Boolean).join(' ')
    }, !collection.auth.disableLocalStrategy && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Email.default, {
        admin: {
            autoComplete: 'email',
            readOnly
        },
        label: t('general:email'),
        name: "email",
        required: true
    }), (changingPassword || requirePassword) && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__changing-password`
    }, /*#__PURE__*/ _react.default.createElement(_Password.default, {
        autoComplete: "off",
        disabled: readOnly,
        label: t('newPassword'),
        name: "password",
        required: true
    }), /*#__PURE__*/ _react.default.createElement(_ConfirmPassword.default, {
        disabled: readOnly
    }), !requirePassword && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        disabled: readOnly,
        onClick: ()=>handleChangePassword(false),
        size: "small"
    }, t('general:cancel'))), (!changingPassword && !requirePassword || operation === 'update') && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__controls`
    }, !changingPassword && !requirePassword && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        disabled: readOnly,
        id: "change-password",
        onClick: ()=>handleChangePassword(true),
        size: "small"
    }, t('changePassword')), operation === 'update' && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        disabled: readOnly,
        onClick: ()=>unlock(),
        size: "small"
    }, t('forceUnlock')))), useAPIKey && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__api-key`
    }, /*#__PURE__*/ _react.default.createElement(_Checkbox.default, {
        admin: {
            readOnly
        },
        label: t('enableAPIKey'),
        name: "enableAPIKey"
    }), /*#__PURE__*/ _react.default.createElement(_APIKey.default, {
        enabled: !!enableAPIKey?.value,
        readOnly: readOnly
    })), verify && /*#__PURE__*/ _react.default.createElement(_Checkbox.default, {
        admin: {
            readOnly
        },
        label: t('verified'),
        name: "_verified"
    }));
};
const _default = Auth;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvQXV0aC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi8uLi9lbGVtZW50cy9CdXR0b24nXG5pbXBvcnQgeyB1c2VGb3JtRmllbGRzLCB1c2VGb3JtTW9kaWZpZWQgfSBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vLi4vLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvQ2hlY2tib3gnXG5pbXBvcnQgQ29uZmlybVBhc3N3b3JkIGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL0NvbmZpcm1QYXNzd29yZCdcbmltcG9ydCBFbWFpbCBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9FbWFpbCdcbmltcG9ydCBQYXNzd29yZCBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9QYXNzd29yZCdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgQVBJS2V5IGZyb20gJy4vQVBJS2V5J1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdhdXRoLWZpZWxkcydcblxuY29uc3QgQXV0aDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgY29sbGVjdGlvbixcbiAgICBjb2xsZWN0aW9uOiB7IHNsdWcgfSxcbiAgICBlbWFpbCxcbiAgICBvcGVyYXRpb24sXG4gICAgcmVhZE9ubHksXG4gICAgcmVxdWlyZVBhc3N3b3JkLFxuICAgIHVzZUFQSUtleSxcbiAgICB2ZXJpZnksXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtjaGFuZ2luZ1Bhc3N3b3JkLCBzZXRDaGFuZ2luZ1Bhc3N3b3JkXSA9IHVzZVN0YXRlKHJlcXVpcmVQYXNzd29yZClcbiAgY29uc3QgZW5hYmxlQVBJS2V5ID0gdXNlRm9ybUZpZWxkcygoW2ZpZWxkc10pID0+IGZpZWxkcy5lbmFibGVBUElLZXkpXG4gIGNvbnN0IGRpc3BhdGNoRmllbGRzID0gdXNlRm9ybUZpZWxkcygocmVkdWNlcikgPT4gcmVkdWNlclsxXSlcbiAgY29uc3QgbW9kaWZpZWQgPSB1c2VGb3JtTW9kaWZpZWQoKVxuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpXG5cbiAgY29uc3Qge1xuICAgIHJvdXRlczogeyBhcGkgfSxcbiAgICBzZXJ2ZXJVUkwsXG4gIH0gPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgIGRpc3BhdGNoRmllbGRzKHsgcGF0aDogJ3Bhc3N3b3JkJywgdHlwZTogJ1JFTU9WRScgfSlcbiAgICAgICAgZGlzcGF0Y2hGaWVsZHMoeyBwYXRoOiAnY29uZmlybS1wYXNzd29yZCcsIHR5cGU6ICdSRU1PVkUnIH0pXG4gICAgICB9XG5cbiAgICAgIHNldENoYW5naW5nUGFzc3dvcmQoc3RhdGUpXG4gICAgfSxcbiAgICBbZGlzcGF0Y2hGaWVsZHNdLFxuICApXG5cbiAgY29uc3QgdW5sb2NrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS91bmxvY2tgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWwsXG4gICAgICB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIH0pXG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHRvYXN0LnN1Y2Nlc3ModCgnc3VjY2Vzc2Z1bGx5VW5sb2NrZWQnKSwgeyBhdXRvQ2xvc2U6IDMwMDAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QuZXJyb3IodCgnZmFpbGVkVG9VbmxvY2snKSlcbiAgICB9XG4gIH0sIFtpMThuLCBzZXJ2ZXJVUkwsIGFwaSwgc2x1ZywgZW1haWwsIHRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFtb2RpZmllZCkge1xuICAgICAgc2V0Q2hhbmdpbmdQYXNzd29yZChmYWxzZSlcbiAgICB9XG4gIH0sIFttb2RpZmllZF0pXG5cbiAgaWYgKGNvbGxlY3Rpb24uYXV0aC5kaXNhYmxlTG9jYWxTdHJhdGVneSAmJiAhY29sbGVjdGlvbi5hdXRoLnVzZUFQSUtleSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtbYmFzZUNsYXNzLCBjbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9PlxuICAgICAgeyFjb2xsZWN0aW9uLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kgJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEVtYWlsXG4gICAgICAgICAgICBhZG1pbj17eyBhdXRvQ29tcGxldGU6ICdlbWFpbCcsIHJlYWRPbmx5IH19XG4gICAgICAgICAgICBsYWJlbD17dCgnZ2VuZXJhbDplbWFpbCcpfVxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7KGNoYW5naW5nUGFzc3dvcmQgfHwgcmVxdWlyZVBhc3N3b3JkKSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY2hhbmdpbmctcGFzc3dvcmRgfT5cbiAgICAgICAgICAgICAgPFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoJ25ld1Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29uZmlybVBhc3N3b3JkIGRpc2FibGVkPXtyZWFkT25seX0gLz5cbiAgICAgICAgICAgICAgeyFyZXF1aXJlUGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZVBhc3N3b3JkKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QoJ2dlbmVyYWw6Y2FuY2VsJyl9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsoKCFjaGFuZ2luZ1Bhc3N3b3JkICYmICFyZXF1aXJlUGFzc3dvcmQpIHx8IG9wZXJhdGlvbiA9PT0gJ3VwZGF0ZScpICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250cm9sc2B9PlxuICAgICAgICAgICAgICB7IWNoYW5naW5nUGFzc3dvcmQgJiYgIXJlcXVpcmVQYXNzd29yZCAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgICAgICAgICAgaWQ9XCJjaGFuZ2UtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlUGFzc3dvcmQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0KCdjaGFuZ2VQYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7b3BlcmF0aW9uID09PSAndXBkYXRlJyAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdW5sb2NrKCl9XG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0KCdmb3JjZVVubG9jaycpfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgICB7dXNlQVBJS2V5ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FwaS1rZXlgfT5cbiAgICAgICAgICA8Q2hlY2tib3ggYWRtaW49e3sgcmVhZE9ubHkgfX0gbGFiZWw9e3QoJ2VuYWJsZUFQSUtleScpfSBuYW1lPVwiZW5hYmxlQVBJS2V5XCIgLz5cbiAgICAgICAgICA8QVBJS2V5IGVuYWJsZWQ9eyEhZW5hYmxlQVBJS2V5Py52YWx1ZX0gcmVhZE9ubHk9e3JlYWRPbmx5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7dmVyaWZ5ICYmIDxDaGVja2JveCBhZG1pbj17eyByZWFkT25seSB9fSBsYWJlbD17dCgndmVyaWZpZWQnKX0gbmFtZT1cIl92ZXJpZmllZFwiIC8+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJBdXRoIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjb2xsZWN0aW9uIiwic2x1ZyIsImVtYWlsIiwib3BlcmF0aW9uIiwicmVhZE9ubHkiLCJyZXF1aXJlUGFzc3dvcmQiLCJ1c2VBUElLZXkiLCJ2ZXJpZnkiLCJjaGFuZ2luZ1Bhc3N3b3JkIiwic2V0Q2hhbmdpbmdQYXNzd29yZCIsInVzZVN0YXRlIiwiZW5hYmxlQVBJS2V5IiwidXNlRm9ybUZpZWxkcyIsImZpZWxkcyIsImRpc3BhdGNoRmllbGRzIiwicmVkdWNlciIsIm1vZGlmaWVkIiwidXNlRm9ybU1vZGlmaWVkIiwiaTE4biIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInJvdXRlcyIsImFwaSIsInNlcnZlclVSTCIsInVzZUNvbmZpZyIsImhhbmRsZUNoYW5nZVBhc3N3b3JkIiwidXNlQ2FsbGJhY2siLCJzdGF0ZSIsInBhdGgiLCJ0eXBlIiwidW5sb2NrIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJtZXRob2QiLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJhdXRvQ2xvc2UiLCJlcnJvciIsInVzZUVmZmVjdCIsImF1dGgiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsImRpdiIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiUmVhY3QiLCJGcmFnbWVudCIsIkVtYWlsIiwiYWRtaW4iLCJhdXRvQ29tcGxldGUiLCJsYWJlbCIsIm5hbWUiLCJyZXF1aXJlZCIsIlBhc3N3b3JkIiwiZGlzYWJsZWQiLCJDb25maXJtUGFzc3dvcmQiLCJCdXR0b24iLCJidXR0b25TdHlsZSIsIm9uQ2xpY2siLCJzaXplIiwiaWQiLCJDaGVja2JveCIsIkFQSUtleSIsImVuYWJsZWQiLCJ2YWx1ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTJKQTs7O2VBQUE7OzsrREEzSndEOzhCQUN6QjsrQkFDVDsrREFJSDt5QkFDNEI7aUVBQzFCO3dFQUNPOzhEQUNWO2lFQUNHO3dCQUNLOytEQUNQO1FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxPQUF3QixDQUFDQztJQUM3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