"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Routes", {
    enumerable: true,
    get: function() {
        return Routes;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _api = require("../../../api");
const _Loading = require("../../elements/Loading");
const _StayLoggedIn = /*#__PURE__*/ _interop_require_default(require("../../modals/StayLoggedIn"));
const _Default = /*#__PURE__*/ _interop_require_default(require("../../templates/Default"));
const _ActionsProvider = require("../../utilities/ActionsProvider");
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _Locale = require("../../utilities/Locale");
const _NotFound = /*#__PURE__*/ _interop_require_default(require("../NotFound"));
const _Unauthorized = /*#__PURE__*/ _interop_require_default(require("../Unauthorized"));
const _collections = require("./collections");
const _custom = require("./custom");
const _globals = require("./globals");
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
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const Dashboard = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../Dashboard"))));
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const ForgotPassword = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../ForgotPassword"))));
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const Login = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../Login"))));
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const Logout = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../Logout"))));
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const Verify = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../Verify"))));
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const CreateFirstUser = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../CreateFirstUser"))));
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const ResetPassword = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../ResetPassword"))));
// @ts-expect-error Just TypeScript being broken // TODO: Open TypeScript issue
const Account = /*#__PURE__*/ (0, _react.lazy)(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("../Account"))));
const Routes = ()=>{
    const [initialized, setInitialized] = (0, _react.useState)(null);
    const { permissions, refreshCookie, user } = (0, _Auth.useAuth)();
    const { i18n } = (0, _reacti18next.useTranslation)();
    const { code: locale } = (0, _Locale.useLocale)();
    const canAccessAdmin = permissions?.canAccessAdmin;
    const config = (0, _Config.useConfig)();
    const { admin: { inactivityRoute: logoutInactivityRoute, logoutRoute, user: userSlug }, collections, globals, routes } = config;
    const isLoadingUser = Boolean(typeof user === 'undefined' || user && typeof canAccessAdmin === 'undefined');
    const userCollection = collections.find(({ slug })=>slug === userSlug);
    (0, _react.useEffect)(()=>{
        if (userCollection && !userCollection?.auth?.disableLocalStrategy) {
            const { slug } = userCollection;
            _api.requests.get(`${routes.api}/${slug}/init`, {
                headers: {
                    'Accept-Language': i18n.language
                }
            }).then((res)=>res.json().then((data)=>{
                    if (data && 'initialized' in data) {
                        setInitialized(data.initialized);
                    }
                }));
        } else {
            setInitialized(true);
        }
    }, [
        i18n.language,
        routes,
        userCollection
    ]);
    const [_, redirectAfterLogin] = window.location.pathname.replace(/\/+$/, '').split(`${routes.admin}/`);
    return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
        fallback: /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlayToggle, {
            name: "route-suspense",
            show: true
        })
    }, /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlayToggle, {
        name: "route-loader",
        show: isLoadingUser
    }), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        path: routes.admin,
        render: ({ match })=>{
            if (initialized === false) {
                return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Switch, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: `${match.url}/create-first-user`
                }, /*#__PURE__*/ _react.default.createElement(CreateFirstUser, {
                    setInitialized: setInitialized
                })), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Redirect, {
                    to: `${match.url}/create-first-user`
                })));
            }
            if (initialized === true && !isLoadingUser) {
                return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Switch, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: `${match.url}/create-first-user`
                }, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Redirect, {
                    to: `${match.url}/`
                })), (0, _custom.customRoutes)({
                    canAccessAdmin,
                    config,
                    match,
                    user
                }), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: `${match.url}/login`
                }, /*#__PURE__*/ _react.default.createElement(Login, null)), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: `${match.url}${logoutRoute}`
                }, /*#__PURE__*/ _react.default.createElement(Logout, null)), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: `${match.url}${logoutInactivityRoute}`
                }, /*#__PURE__*/ _react.default.createElement(Logout, {
                    inactivity: true
                })), !userCollection?.auth?.disableLocalStrategy && /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: `${match.url}/forgot`
                }, /*#__PURE__*/ _react.default.createElement(ForgotPassword, null)), !userCollection?.auth?.disableLocalStrategy && /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: `${match.url}/reset/:token`
                }, /*#__PURE__*/ _react.default.createElement(ResetPassword, null)), collections.map((collection)=>{
                    if (collection?.auth?.verify && !collection.auth.disableLocalStrategy) {
                        return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                            exact: true,
                            key: `${collection.slug}-verify`,
                            path: `${match.url}/${collection.slug}/verify/:token`
                        }, /*#__PURE__*/ _react.default.createElement(Verify, {
                            collection: collection
                        }));
                    }
                    return null;
                }), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, null, user ? /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, canAccessAdmin && /*#__PURE__*/ _react.default.createElement(_ActionsProvider.ActionsProvider, null, /*#__PURE__*/ _react.default.createElement(_Default.default, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Switch, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    exact: true,
                    path: `${match.url}/`
                }, /*#__PURE__*/ _react.default.createElement(Dashboard, null)), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: `${match.url}/account`
                }, /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
                    collection: collections.find(({ slug })=>slug === userSlug),
                    id: user.id
                }, /*#__PURE__*/ _react.default.createElement(Account, null))), (0, _collections.collectionRoutes)({
                    collections,
                    match,
                    permissions,
                    user
                }), (0, _globals.globalRoutes)({
                    globals,
                    locale,
                    match,
                    permissions,
                    user
                }), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: `${match.url}*`
                }, /*#__PURE__*/ _react.default.createElement(_NotFound.default, null))))), canAccessAdmin === false && /*#__PURE__*/ _react.default.createElement(_Unauthorized.default, null)) : /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Redirect, {
                    to: `${match.url}/login${window.location.pathname.startsWith(routes.admin) && redirectAfterLogin ? `?redirect=${encodeURIComponent(`/${redirectAfterLogin}`)}` : ''}`
                })), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: `${match.url}*`
                }, /*#__PURE__*/ _react.default.createElement(_NotFound.default, null)));
            }
            return null;
        }
    }), /*#__PURE__*/ _react.default.createElement(_StayLoggedIn.default, {
        refreshCookie: refreshCookie
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1JvdXRlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBTdXNwZW5zZSwgbGF6eSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgUmVkaXJlY3QsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgeyByZXF1ZXN0cyB9IGZyb20gJy4uLy4uLy4uL2FwaSdcbmltcG9ydCB7IExvYWRpbmdPdmVybGF5VG9nZ2xlIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvTG9hZGluZydcbmltcG9ydCBTdGF5TG9nZ2VkSW4gZnJvbSAnLi4vLi4vbW9kYWxzL1N0YXlMb2dnZWRJbidcbmltcG9ydCBEZWZhdWx0VGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL0RlZmF1bHQnXG5pbXBvcnQgeyBBY3Rpb25zUHJvdmlkZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQWN0aW9uc1Byb3ZpZGVyJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCB7IERvY3VtZW50SW5mb1Byb3ZpZGVyIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbydcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vTm90Rm91bmQnXG5pbXBvcnQgVW5hdXRob3JpemVkIGZyb20gJy4uL1VuYXV0aG9yaXplZCdcbmltcG9ydCB7IGNvbGxlY3Rpb25Sb3V0ZXMgfSBmcm9tICcuL2NvbGxlY3Rpb25zJ1xuaW1wb3J0IHsgY3VzdG9tUm91dGVzIH0gZnJvbSAnLi9jdXN0b20nXG5pbXBvcnQgeyBnbG9iYWxSb3V0ZXMgfSBmcm9tICcuL2dsb2JhbHMnXG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgSnVzdCBUeXBlU2NyaXB0IGJlaW5nIGJyb2tlbiAvLyBUT0RPOiBPcGVuIFR5cGVTY3JpcHQgaXNzdWVcbmNvbnN0IERhc2hib2FyZCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuLi9EYXNoYm9hcmQnKSlcbi8vIEB0cy1leHBlY3QtZXJyb3IgSnVzdCBUeXBlU2NyaXB0IGJlaW5nIGJyb2tlbiAvLyBUT0RPOiBPcGVuIFR5cGVTY3JpcHQgaXNzdWVcbmNvbnN0IEZvcmdvdFBhc3N3b3JkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4uL0ZvcmdvdFBhc3N3b3JkJykpXG4vLyBAdHMtZXhwZWN0LWVycm9yIEp1c3QgVHlwZVNjcmlwdCBiZWluZyBicm9rZW4gLy8gVE9ETzogT3BlbiBUeXBlU2NyaXB0IGlzc3VlXG5jb25zdCBMb2dpbiA9IGxhenkoKCkgPT4gaW1wb3J0KCcuLi9Mb2dpbicpKVxuLy8gQHRzLWV4cGVjdC1lcnJvciBKdXN0IFR5cGVTY3JpcHQgYmVpbmcgYnJva2VuIC8vIFRPRE86IE9wZW4gVHlwZVNjcmlwdCBpc3N1ZVxuY29uc3QgTG9nb3V0ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4uL0xvZ291dCcpKVxuLy8gQHRzLWV4cGVjdC1lcnJvciBKdXN0IFR5cGVTY3JpcHQgYmVpbmcgYnJva2VuIC8vIFRPRE86IE9wZW4gVHlwZVNjcmlwdCBpc3N1ZVxuY29uc3QgVmVyaWZ5ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4uL1ZlcmlmeScpKVxuLy8gQHRzLWV4cGVjdC1lcnJvciBKdXN0IFR5cGVTY3JpcHQgYmVpbmcgYnJva2VuIC8vIFRPRE86IE9wZW4gVHlwZVNjcmlwdCBpc3N1ZVxuY29uc3QgQ3JlYXRlRmlyc3RVc2VyID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4uL0NyZWF0ZUZpcnN0VXNlcicpKVxuLy8gQHRzLWV4cGVjdC1lcnJvciBKdXN0IFR5cGVTY3JpcHQgYmVpbmcgYnJva2VuIC8vIFRPRE86IE9wZW4gVHlwZVNjcmlwdCBpc3N1ZVxuY29uc3QgUmVzZXRQYXNzd29yZCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuLi9SZXNldFBhc3N3b3JkJykpXG4vLyBAdHMtZXhwZWN0LWVycm9yIEp1c3QgVHlwZVNjcmlwdCBiZWluZyBicm9rZW4gLy8gVE9ETzogT3BlbiBUeXBlU2NyaXB0IGlzc3VlXG5jb25zdCBBY2NvdW50ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4uL0FjY291bnQnKSlcblxuZXhwb3J0IGNvbnN0IFJvdXRlczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbml0aWFsaXplZCwgc2V0SW5pdGlhbGl6ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpXG4gIGNvbnN0IHsgcGVybWlzc2lvbnMsIHJlZnJlc2hDb29raWUsIHVzZXIgfSA9IHVzZUF1dGgoKVxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgeyBjb2RlOiBsb2NhbGUgfSA9IHVzZUxvY2FsZSgpXG5cbiAgY29uc3QgY2FuQWNjZXNzQWRtaW4gPSBwZXJtaXNzaW9ucz8uY2FuQWNjZXNzQWRtaW5cblxuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IHtcbiAgICBhZG1pbjogeyBpbmFjdGl2aXR5Um91dGU6IGxvZ291dEluYWN0aXZpdHlSb3V0ZSwgbG9nb3V0Um91dGUsIHVzZXI6IHVzZXJTbHVnIH0sXG4gICAgY29sbGVjdGlvbnMsXG4gICAgZ2xvYmFscyxcbiAgICByb3V0ZXMsXG4gIH0gPSBjb25maWdcblxuICBjb25zdCBpc0xvYWRpbmdVc2VyID0gQm9vbGVhbihcbiAgICB0eXBlb2YgdXNlciA9PT0gJ3VuZGVmaW5lZCcgfHwgKHVzZXIgJiYgdHlwZW9mIGNhbkFjY2Vzc0FkbWluID09PSAndW5kZWZpbmVkJyksXG4gIClcblxuICBjb25zdCB1c2VyQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKHsgc2x1ZyB9KSA9PiBzbHVnID09PSB1c2VyU2x1ZylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyQ29sbGVjdGlvbiAmJiAhdXNlckNvbGxlY3Rpb24/LmF1dGg/LmRpc2FibGVMb2NhbFN0cmF0ZWd5KSB7XG4gICAgICBjb25zdCB7IHNsdWcgfSA9IHVzZXJDb2xsZWN0aW9uXG5cbiAgICAgIHJlcXVlc3RzXG4gICAgICAgIC5nZXQoYCR7cm91dGVzLmFwaX0vJHtzbHVnfS9pbml0YCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+XG4gICAgICAgICAgcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiAnaW5pdGlhbGl6ZWQnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgc2V0SW5pdGlhbGl6ZWQoZGF0YS5pbml0aWFsaXplZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJbml0aWFsaXplZCh0cnVlKVxuICAgIH1cbiAgfSwgW2kxOG4ubGFuZ3VhZ2UsIHJvdXRlcywgdXNlckNvbGxlY3Rpb25dKVxuXG4gIGNvbnN0IFtfLCByZWRpcmVjdEFmdGVyTG9naW5dID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgLnJlcGxhY2UoL1xcLyskLywgJycpXG4gICAgLnNwbGl0KGAke3JvdXRlcy5hZG1pbn0vYClcblxuICByZXR1cm4gKFxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRpbmdPdmVybGF5VG9nZ2xlIG5hbWU9XCJyb3V0ZS1zdXNwZW5zZVwiIHNob3cgLz59PlxuICAgICAgPExvYWRpbmdPdmVybGF5VG9nZ2xlIG5hbWU9XCJyb3V0ZS1sb2FkZXJcIiBzaG93PXtpc0xvYWRpbmdVc2VyfSAvPlxuICAgICAgPFJvdXRlXG4gICAgICAgIHBhdGg9e3JvdXRlcy5hZG1pbn1cbiAgICAgICAgcmVuZGVyPXsoeyBtYXRjaCB9KSA9PiB7XG4gICAgICAgICAgaWYgKGluaXRpYWxpemVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfS9jcmVhdGUtZmlyc3QtdXNlcmB9PlxuICAgICAgICAgICAgICAgICAgPENyZWF0ZUZpcnN0VXNlciBzZXRJbml0aWFsaXplZD17c2V0SW5pdGlhbGl6ZWR9IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICA8Um91dGU+XG4gICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89e2Ake21hdGNoLnVybH0vY3JlYXRlLWZpcnN0LXVzZXJgfSAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbml0aWFsaXplZCA9PT0gdHJ1ZSAmJiAhaXNMb2FkaW5nVXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfS9jcmVhdGUtZmlyc3QtdXNlcmB9PlxuICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPXtgJHttYXRjaC51cmx9L2B9IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICB7Y3VzdG9tUm91dGVzKHtcbiAgICAgICAgICAgICAgICAgIGNhbkFjY2Vzc0FkbWluLFxuICAgICAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9L2xvZ2luYH0+XG4gICAgICAgICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9JHtsb2dvdXRSb3V0ZX1gfT5cbiAgICAgICAgICAgICAgICAgIDxMb2dvdXQgLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9JHtsb2dvdXRJbmFjdGl2aXR5Um91dGV9YH0+XG4gICAgICAgICAgICAgICAgICA8TG9nb3V0IGluYWN0aXZpdHkgLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIHshdXNlckNvbGxlY3Rpb24/LmF1dGg/LmRpc2FibGVMb2NhbFN0cmF0ZWd5ICYmIChcbiAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9L2ZvcmdvdGB9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9yZ290UGFzc3dvcmQgLz5cbiAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7IXVzZXJDb2xsZWN0aW9uPy5hdXRoPy5kaXNhYmxlTG9jYWxTdHJhdGVneSAmJiAoXG4gICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfS9yZXNldC86dG9rZW5gfT5cbiAgICAgICAgICAgICAgICAgICAgPFJlc2V0UGFzc3dvcmQgLz5cbiAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7Y29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbj8uYXV0aD8udmVyaWZ5ICYmICFjb2xsZWN0aW9uLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2NvbGxlY3Rpb24uc2x1Z30tdmVyaWZ5YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9e2Ake21hdGNoLnVybH0vJHtjb2xsZWN0aW9uLnNsdWd9L3ZlcmlmeS86dG9rZW5gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWZXJpZnkgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDxSb3V0ZT5cbiAgICAgICAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAge2NhbkFjY2Vzc0FkbWluICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpb25zUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWZhdWx0VGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtgJHttYXRjaC51cmx9L2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Ake21hdGNoLnVybH0vYWNjb3VudGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jdW1lbnRJbmZvUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ucy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gdXNlclNsdWcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt1c2VyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Eb2N1bWVudEluZm9Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGVjdGlvblJvdXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnbG9iYWxSb3V0ZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Ake21hdGNoLnVybH0qYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb3RGb3VuZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZWZhdWx0VGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjdGlvbnNQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIHtjYW5BY2Nlc3NBZG1pbiA9PT0gZmFsc2UgJiYgPFVuYXV0aG9yaXplZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgIHRvPXtgJHttYXRjaC51cmx9L2xvZ2luJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKHJvdXRlcy5hZG1pbikgJiYgcmVkaXJlY3RBZnRlckxvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gYD9yZWRpcmVjdD0ke2VuY29kZVVSSUNvbXBvbmVudChgLyR7cmVkaXJlY3RBZnRlckxvZ2lufWApfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9KmB9PlxuICAgICAgICAgICAgICAgICAgPE5vdEZvdW5kIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8U3RheUxvZ2dlZEluIHJlZnJlc2hDb29raWU9e3JlZnJlc2hDb29raWV9IC8+XG4gICAgPC9TdXNwZW5zZT5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJvdXRlcyIsIkRhc2hib2FyZCIsImxhenkiLCJGb3Jnb3RQYXNzd29yZCIsIkxvZ2luIiwiTG9nb3V0IiwiVmVyaWZ5IiwiQ3JlYXRlRmlyc3RVc2VyIiwiUmVzZXRQYXNzd29yZCIsIkFjY291bnQiLCJpbml0aWFsaXplZCIsInNldEluaXRpYWxpemVkIiwidXNlU3RhdGUiLCJwZXJtaXNzaW9ucyIsInJlZnJlc2hDb29raWUiLCJ1c2VyIiwidXNlQXV0aCIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImNvZGUiLCJsb2NhbGUiLCJ1c2VMb2NhbGUiLCJjYW5BY2Nlc3NBZG1pbiIsImNvbmZpZyIsInVzZUNvbmZpZyIsImFkbWluIiwiaW5hY3Rpdml0eVJvdXRlIiwibG9nb3V0SW5hY3Rpdml0eVJvdXRlIiwibG9nb3V0Um91dGUiLCJ1c2VyU2x1ZyIsImNvbGxlY3Rpb25zIiwiZ2xvYmFscyIsInJvdXRlcyIsImlzTG9hZGluZ1VzZXIiLCJCb29sZWFuIiwidXNlckNvbGxlY3Rpb24iLCJmaW5kIiwic2x1ZyIsInVzZUVmZmVjdCIsImF1dGgiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsInJlcXVlc3RzIiwiZ2V0IiwiYXBpIiwiaGVhZGVycyIsImxhbmd1YWdlIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiXyIsInJlZGlyZWN0QWZ0ZXJMb2dpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwic3BsaXQiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwiTG9hZGluZ092ZXJsYXlUb2dnbGUiLCJuYW1lIiwic2hvdyIsIlJvdXRlIiwicGF0aCIsInJlbmRlciIsIm1hdGNoIiwiU3dpdGNoIiwidXJsIiwiUmVkaXJlY3QiLCJ0byIsImN1c3RvbVJvdXRlcyIsImluYWN0aXZpdHkiLCJtYXAiLCJjb2xsZWN0aW9uIiwidmVyaWZ5IiwiZXhhY3QiLCJrZXkiLCJGcmFnbWVudCIsIkFjdGlvbnNQcm92aWRlciIsIkRlZmF1bHRUZW1wbGF0ZSIsIkRvY3VtZW50SW5mb1Byb3ZpZGVyIiwiaWQiLCJjb2xsZWN0aW9uUm91dGVzIiwiZ2xvYmFsUm91dGVzIiwiTm90Rm91bmQiLCJVbmF1dGhvcml6ZWQiLCJzdGFydHNXaXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU3RheUxvZ2dlZEluIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBb0NhQTs7O2VBQUFBOzs7K0RBcEN3RDs4QkFDdEM7Z0NBQ1M7cUJBRWY7eUJBQ1k7cUVBQ1o7Z0VBQ0c7aUNBQ0k7c0JBQ1I7d0JBQ0U7OEJBQ1c7d0JBQ1g7aUVBQ0w7cUVBQ0k7NkJBQ1E7d0JBQ0o7eUJBQ0E7Ozs7Ozs7Ozs7Ozs7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