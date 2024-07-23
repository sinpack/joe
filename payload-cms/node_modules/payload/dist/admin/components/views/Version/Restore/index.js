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
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _reacttoastify = require("react-toastify");
const _ = require("../../..");
const _getTranslation = require("../../../../../utilities/getTranslation");
const _api = require("../../../../api");
const _Config = require("../../../utilities/Config");
require("./index.scss");
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
const baseClass = 'restore-version';
const modalSlug = 'restore-version';
const Restore = ({ className, collection, global, originalDocID, versionDate, versionID })=>{
    const { routes: { admin, api }, serverURL } = (0, _Config.useConfig)();
    const history = (0, _reactrouterdom.useHistory)();
    const { toggleModal } = (0, _modal.useModal)();
    const [processing, setProcessing] = (0, _react.useState)(false);
    const { i18n, t } = (0, _reacti18next.useTranslation)('version');
    let fetchURL = `${serverURL}${api}`;
    let redirectURL;
    let restoreMessage;
    if (collection) {
        fetchURL = `${fetchURL}/${collection.slug}/versions/${versionID}`;
        redirectURL = `${admin}/collections/${collection.slug}/${originalDocID}`;
        restoreMessage = t('aboutToRestore', {
            label: (0, _getTranslation.getTranslation)(collection.labels.singular, i18n),
            versionDate
        });
    }
    if (global) {
        fetchURL = `${fetchURL}/globals/${global.slug}/versions/${versionID}`;
        redirectURL = `${admin}/globals/${global.slug}`;
        restoreMessage = t('aboutToRestoreGlobal', {
            label: (0, _getTranslation.getTranslation)(global.label, i18n),
            versionDate
        });
    }
    const handleRestore = (0, _react.useCallback)(async ()=>{
        setProcessing(true);
        const res = await _api.requests.post(fetchURL, {
            headers: {
                'Accept-Language': i18n.language
            }
        });
        if (res.status === 200) {
            const json = await res.json();
            _reacttoastify.toast.success(json.message);
            history.push(redirectURL, {
                refetchDocumentData: true
            });
        } else {
            _reacttoastify.toast.error(t('problemRestoringVersion'));
        }
    }, [
        fetchURL,
        history,
        redirectURL,
        t,
        i18n
    ]);
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(_.Pill, {
        className: [
            baseClass,
            className
        ].filter(Boolean).join(' '),
        onClick: ()=>toggleModal(modalSlug)
    }, t('restoreThisVersion')), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        className: `${baseClass}__modal`,
        slug: modalSlug
    }, /*#__PURE__*/ _react.default.createElement(_.MinimalTemplate, {
        className: `${baseClass}__modal-template`
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t('confirmVersionRestoration')), /*#__PURE__*/ _react.default.createElement("p", null, restoreMessage), /*#__PURE__*/ _react.default.createElement(_.Button, {
        buttonStyle: "secondary",
        onClick: processing ? undefined : ()=>toggleModal(modalSlug),
        type: "button"
    }, t('general:cancel')), /*#__PURE__*/ _react.default.createElement(_.Button, {
        onClick: processing ? undefined : handleRestore
    }, processing ? t('restoring') : t('general:confirm')))));
};
const _default = Restore;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVzdG9yZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwsIHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJ1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IEJ1dHRvbiwgTWluaW1hbFRlbXBsYXRlLCBQaWxsIH0gZnJvbSAnLi4vLi4vLi4nXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB7IHJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncmVzdG9yZS12ZXJzaW9uJ1xuY29uc3QgbW9kYWxTbHVnID0gJ3Jlc3RvcmUtdmVyc2lvbidcblxuY29uc3QgUmVzdG9yZTogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjb2xsZWN0aW9uLFxuICBnbG9iYWwsXG4gIG9yaWdpbmFsRG9jSUQsXG4gIHZlcnNpb25EYXRlLFxuICB2ZXJzaW9uSUQsXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICByb3V0ZXM6IHsgYWRtaW4sIGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgeyB0b2dnbGVNb2RhbCB9ID0gdXNlTW9kYWwoKVxuICBjb25zdCBbcHJvY2Vzc2luZywgc2V0UHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpXG5cbiAgbGV0IGZldGNoVVJMID0gYCR7c2VydmVyVVJMfSR7YXBpfWBcbiAgbGV0IHJlZGlyZWN0VVJMOiBzdHJpbmdcbiAgbGV0IHJlc3RvcmVNZXNzYWdlOiBzdHJpbmdcblxuICBpZiAoY29sbGVjdGlvbikge1xuICAgIGZldGNoVVJMID0gYCR7ZmV0Y2hVUkx9LyR7Y29sbGVjdGlvbi5zbHVnfS92ZXJzaW9ucy8ke3ZlcnNpb25JRH1gXG4gICAgcmVkaXJlY3RVUkwgPSBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9LyR7b3JpZ2luYWxEb2NJRH1gXG4gICAgcmVzdG9yZU1lc3NhZ2UgPSB0KCdhYm91dFRvUmVzdG9yZScsIHtcbiAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhciwgaTE4biksXG4gICAgICB2ZXJzaW9uRGF0ZSxcbiAgICB9KVxuICB9XG5cbiAgaWYgKGdsb2JhbCkge1xuICAgIGZldGNoVVJMID0gYCR7ZmV0Y2hVUkx9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z30vdmVyc2lvbnMvJHt2ZXJzaW9uSUR9YFxuICAgIHJlZGlyZWN0VVJMID0gYCR7YWRtaW59L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z31gXG4gICAgcmVzdG9yZU1lc3NhZ2UgPSB0KCdhYm91dFRvUmVzdG9yZUdsb2JhbCcsIHtcbiAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihnbG9iYWwubGFiZWwsIGkxOG4pLFxuICAgICAgdmVyc2lvbkRhdGUsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc3RvcmUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgc2V0UHJvY2Vzc2luZyh0cnVlKVxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdHMucG9zdChmZXRjaFVSTCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICB0b2FzdC5zdWNjZXNzKGpzb24ubWVzc2FnZSlcbiAgICAgIGhpc3RvcnkucHVzaChyZWRpcmVjdFVSTCwge1xuICAgICAgICByZWZldGNoRG9jdW1lbnREYXRhOiB0cnVlLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QuZXJyb3IodCgncHJvYmxlbVJlc3RvcmluZ1ZlcnNpb24nKSlcbiAgICB9XG4gIH0sIFtmZXRjaFVSTCwgaGlzdG9yeSwgcmVkaXJlY3RVUkwsIHQsIGkxOG5dKVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFBpbGxcbiAgICAgICAgY2xhc3NOYW1lPXtbYmFzZUNsYXNzLCBjbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICA+XG4gICAgICAgIHt0KCdyZXN0b3JlVGhpc1ZlcnNpb24nKX1cbiAgICAgIDwvUGlsbD5cbiAgICAgIDxNb2RhbCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21vZGFsYH0gc2x1Zz17bW9kYWxTbHVnfT5cbiAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21vZGFsLXRlbXBsYXRlYH0+XG4gICAgICAgICAgPGgxPnt0KCdjb25maXJtVmVyc2lvblJlc3RvcmF0aW9uJyl9PC9oMT5cbiAgICAgICAgICA8cD57cmVzdG9yZU1lc3NhZ2V9PC9wPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb2Nlc3NpbmcgPyB1bmRlZmluZWQgOiAoKSA9PiB0b2dnbGVNb2RhbChtb2RhbFNsdWcpfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2dlbmVyYWw6Y2FuY2VsJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtwcm9jZXNzaW5nID8gdW5kZWZpbmVkIDogaGFuZGxlUmVzdG9yZX0+XG4gICAgICAgICAgICB7cHJvY2Vzc2luZyA/IHQoJ3Jlc3RvcmluZycpIDogdCgnZ2VuZXJhbDpjb25maXJtJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RvcmVcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJtb2RhbFNsdWciLCJSZXN0b3JlIiwiY2xhc3NOYW1lIiwiY29sbGVjdGlvbiIsImdsb2JhbCIsIm9yaWdpbmFsRG9jSUQiLCJ2ZXJzaW9uRGF0ZSIsInZlcnNpb25JRCIsInJvdXRlcyIsImFkbWluIiwiYXBpIiwic2VydmVyVVJMIiwidXNlQ29uZmlnIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZGFsIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VTdGF0ZSIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJmZXRjaFVSTCIsInJlZGlyZWN0VVJMIiwicmVzdG9yZU1lc3NhZ2UiLCJzbHVnIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVscyIsInNpbmd1bGFyIiwiaGFuZGxlUmVzdG9yZSIsInVzZUNhbGxiYWNrIiwicmVzIiwicmVxdWVzdHMiLCJwb3N0IiwiaGVhZGVycyIsImxhbmd1YWdlIiwic3RhdHVzIiwianNvbiIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJwdXNoIiwicmVmZXRjaERvY3VtZW50RGF0YSIsImVycm9yIiwiRnJhZ21lbnQiLCJQaWxsIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJvbkNsaWNrIiwiTW9kYWwiLCJNaW5pbWFsVGVtcGxhdGUiLCJoMSIsInAiLCJCdXR0b24iLCJidXR0b25TdHlsZSIsInVuZGVmaW5lZCIsInR5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF3R0E7OztlQUFBOzs7dUJBeEdnQzsrREFDdUI7OEJBQ3hCO2dDQUNKOytCQUNMO2tCQUl3QjtnQ0FDZjtxQkFDTjt3QkFDQztRQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUNsQixNQUFNQyxZQUFZO0FBRWxCLE1BQU1DLFVBQTJCLENBQUMsRUFDaENDLFNBQVMsRUFDVEMsVUFBVSxFQUNWQyxNQUFNLEVBQ05DLGFBQWEsRUFDYkMsV0FBVyxFQUNYQyxTQUFTLEVBQ1Y7SUFDQyxNQUFNLEVBQ0pDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQUUsRUFDdEJDLFNBQVMsRUFDVixHQUFHQyxJQUFBQSxpQkFBUztJQUNiLE1BQU1DLFVBQVVDLElBQUFBLDBCQUFVO0lBQzFCLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdDLElBQUFBLGVBQVE7SUFD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