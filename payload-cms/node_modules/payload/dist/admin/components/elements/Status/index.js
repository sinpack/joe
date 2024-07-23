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
const _reacttoastify = require("react-toastify");
const _ = require("../..");
const _api = require("../../../api");
const _context = require("../../forms/Form/context");
const _Config = require("../../utilities/Config");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _Locale = require("../../utilities/Locale");
const _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
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
const baseClass = 'status';
const Status = ()=>{
    const { id, collection, docPermissions, getVersions, global, publishedDoc, unpublishedVersions } = (0, _DocumentInfo.useDocumentInfo)();
    const { toggleModal } = (0, _modal.useModal)();
    const { routes: { api }, serverURL } = (0, _Config.useConfig)();
    const [processing, setProcessing] = (0, _react.useState)(false);
    const { reset: resetForm } = (0, _context.useForm)();
    const { code: locale } = (0, _Locale.useLocale)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('version');
    const unPublishModalSlug = `confirm-un-publish-${id}`;
    const revertModalSlug = `confirm-revert-${id}`;
    let statusToRender;
    if (unpublishedVersions?.docs?.length > 0 && publishedDoc) {
        statusToRender = 'changed';
    } else if (!publishedDoc) {
        statusToRender = 'draft';
    } else if (publishedDoc && unpublishedVersions?.docs?.length <= 1) {
        statusToRender = 'published';
    }
    const performAction = (0, _react.useCallback)(async (action)=>{
        let url;
        let method;
        let body;
        setProcessing(true);
        if (action === 'unpublish') {
            body = {
                _status: 'draft'
            };
        }
        if (action === 'revert') {
            body = publishedDoc;
        }
        if (collection) {
            url = `${serverURL}${api}/${collection.slug}/${id}?locale=${locale}&fallback-locale=null`;
            method = 'patch';
        }
        if (global) {
            url = `${serverURL}${api}/globals/${global.slug}?locale=${locale}&fallback-locale=null`;
            method = 'post';
        }
        const res = await _api.requests[method](url, {
            body: JSON.stringify(body),
            headers: {
                'Accept-Language': i18n.language,
                'Content-Type': 'application/json'
            }
        });
        if (res.status === 200) {
            let data;
            let fields;
            const json = await res.json();
            if (global) {
                data = json.result;
                fields = global.fields;
            }
            if (collection) {
                data = json.doc;
                fields = collection.fields;
            }
            resetForm(fields, data);
            _reacttoastify.toast.success(json.message);
            getVersions();
        } else {
            _reacttoastify.toast.error(t('error:unPublishingDocument'));
        }
        setProcessing(false);
        if (action === 'revert') {
            toggleModal(revertModalSlug);
        }
        if (action === 'unpublish') {
            toggleModal(unPublishModalSlug);
        }
    }, [
        collection,
        global,
        publishedDoc,
        serverURL,
        api,
        id,
        i18n,
        locale,
        resetForm,
        getVersions,
        t,
        toggleModal,
        revertModalSlug,
        unPublishModalSlug
    ]);
    const canUpdate = docPermissions?.update?.permission;
    if (statusToRender) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: baseClass,
            title: `${t('status')}: ${t(statusToRender)}`
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__value-wrap`
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: `${baseClass}__label`
        }, t('status'), ": "), /*#__PURE__*/ _react.default.createElement("span", {
            className: `${baseClass}__value`
        }, t(statusToRender)), canUpdate && statusToRender === 'published' && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, " — ", /*#__PURE__*/ _react.default.createElement(_Button.default, {
            buttonStyle: "none",
            className: `${baseClass}__action`,
            onClick: ()=>toggleModal(unPublishModalSlug)
        }, t('unpublish')), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
            className: `${baseClass}__modal`,
            slug: unPublishModalSlug
        }, /*#__PURE__*/ _react.default.createElement(_.MinimalTemplate, {
            className: `${baseClass}__modal-template`
        }, /*#__PURE__*/ _react.default.createElement("h1", null, t('confirmUnpublish')), /*#__PURE__*/ _react.default.createElement("p", null, t('aboutToUnpublish')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            buttonStyle: "secondary",
            onClick: processing ? undefined : ()=>toggleModal(unPublishModalSlug),
            type: "button"
        }, t('general:cancel')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            onClick: processing ? undefined : ()=>performAction('unpublish')
        }, t(processing ? 'unpublishing' : 'general:confirm'))))), canUpdate && statusToRender === 'changed' && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, " — ", /*#__PURE__*/ _react.default.createElement(_Button.default, {
            buttonStyle: "none",
            className: `${baseClass}__action`,
            id: "action-revert-to-published",
            onClick: ()=>toggleModal(revertModalSlug)
        }, t('revertToPublished')), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
            className: `${baseClass}__modal`,
            slug: revertModalSlug
        }, /*#__PURE__*/ _react.default.createElement(_.MinimalTemplate, {
            className: `${baseClass}__modal-template`
        }, /*#__PURE__*/ _react.default.createElement("h1", null, t('confirmRevertToSaved')), /*#__PURE__*/ _react.default.createElement("p", null, t('aboutToRevertToPublished')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            buttonStyle: "secondary",
            onClick: processing ? undefined : ()=>toggleModal(revertModalSlug),
            type: "button"
        }, t('general:cancel')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            id: "action-revert-to-published-confirm",
            onClick: processing ? undefined : ()=>performAction('revert')
        }, t(processing ? 'reverting' : 'general:confirm')))))));
    }
    return null;
};
const _default = Status;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1N0YXR1cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwsIHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IHR5cGUgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IE1pbmltYWxUZW1wbGF0ZSB9IGZyb20gJy4uLy4uJ1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi8uLi8uLi9hcGknXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9jb250ZXh0J1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9jYWxlJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3N0YXR1cydcblxuY29uc3QgU3RhdHVzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBpZCwgY29sbGVjdGlvbiwgZG9jUGVybWlzc2lvbnMsIGdldFZlcnNpb25zLCBnbG9iYWwsIHB1Ymxpc2hlZERvYywgdW5wdWJsaXNoZWRWZXJzaW9ucyB9ID1cbiAgICB1c2VEb2N1bWVudEluZm8oKVxuICBjb25zdCB7IHRvZ2dsZU1vZGFsIH0gPSB1c2VNb2RhbCgpXG4gIGNvbnN0IHtcbiAgICByb3V0ZXM6IHsgYXBpIH0sXG4gICAgc2VydmVyVVJMLFxuICB9ID0gdXNlQ29uZmlnKClcbiAgY29uc3QgW3Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgcmVzZXQ6IHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSgpXG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKVxuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKCd2ZXJzaW9uJylcblxuICBjb25zdCB1blB1Ymxpc2hNb2RhbFNsdWcgPSBgY29uZmlybS11bi1wdWJsaXNoLSR7aWR9YFxuICBjb25zdCByZXZlcnRNb2RhbFNsdWcgPSBgY29uZmlybS1yZXZlcnQtJHtpZH1gXG5cbiAgbGV0IHN0YXR1c1RvUmVuZGVyXG5cbiAgaWYgKHVucHVibGlzaGVkVmVyc2lvbnM/LmRvY3M/Lmxlbmd0aCA+IDAgJiYgcHVibGlzaGVkRG9jKSB7XG4gICAgc3RhdHVzVG9SZW5kZXIgPSAnY2hhbmdlZCdcbiAgfSBlbHNlIGlmICghcHVibGlzaGVkRG9jKSB7XG4gICAgc3RhdHVzVG9SZW5kZXIgPSAnZHJhZnQnXG4gIH0gZWxzZSBpZiAocHVibGlzaGVkRG9jICYmIHVucHVibGlzaGVkVmVyc2lvbnM/LmRvY3M/Lmxlbmd0aCA8PSAxKSB7XG4gICAgc3RhdHVzVG9SZW5kZXIgPSAncHVibGlzaGVkJ1xuICB9XG5cbiAgY29uc3QgcGVyZm9ybUFjdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChhY3Rpb246ICdyZXZlcnQnIHwgJ3VucHVibGlzaCcpID0+IHtcbiAgICAgIGxldCB1cmxcbiAgICAgIGxldCBtZXRob2RcbiAgICAgIGxldCBib2R5XG5cbiAgICAgIHNldFByb2Nlc3NpbmcodHJ1ZSlcblxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ3VucHVibGlzaCcpIHtcbiAgICAgICAgYm9keSA9IHtcbiAgICAgICAgICBfc3RhdHVzOiAnZHJhZnQnLFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb24gPT09ICdyZXZlcnQnKSB7XG4gICAgICAgIGJvZHkgPSBwdWJsaXNoZWREb2NcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgdXJsID0gYCR7c2VydmVyVVJMfSR7YXBpfS8ke2NvbGxlY3Rpb24uc2x1Z30vJHtpZH0/bG9jYWxlPSR7bG9jYWxlfSZmYWxsYmFjay1sb2NhbGU9bnVsbGBcbiAgICAgICAgbWV0aG9kID0gJ3BhdGNoJ1xuICAgICAgfVxuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICB1cmwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z30/bG9jYWxlPSR7bG9jYWxlfSZmYWxsYmFjay1sb2NhbGU9bnVsbGBcbiAgICAgICAgbWV0aG9kID0gJ3Bvc3QnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3RzW21ldGhvZF0odXJsLCB7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG5cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgbGV0IGRhdGFcbiAgICAgICAgbGV0IGZpZWxkczogRmllbGRbXVxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgICBkYXRhID0ganNvbi5yZXN1bHRcbiAgICAgICAgICBmaWVsZHMgPSBnbG9iYWwuZmllbGRzXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgICAgIGRhdGEgPSBqc29uLmRvY1xuICAgICAgICAgIGZpZWxkcyA9IGNvbGxlY3Rpb24uZmllbGRzXG4gICAgICAgIH1cblxuICAgICAgICByZXNldEZvcm0oZmllbGRzLCBkYXRhKVxuICAgICAgICB0b2FzdC5zdWNjZXNzKGpzb24ubWVzc2FnZSlcbiAgICAgICAgZ2V0VmVyc2lvbnMoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9hc3QuZXJyb3IodCgnZXJyb3I6dW5QdWJsaXNoaW5nRG9jdW1lbnQnKSlcbiAgICAgIH1cblxuICAgICAgc2V0UHJvY2Vzc2luZyhmYWxzZSlcbiAgICAgIGlmIChhY3Rpb24gPT09ICdyZXZlcnQnKSB7XG4gICAgICAgIHRvZ2dsZU1vZGFsKHJldmVydE1vZGFsU2x1ZylcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ3VucHVibGlzaCcpIHtcbiAgICAgICAgdG9nZ2xlTW9kYWwodW5QdWJsaXNoTW9kYWxTbHVnKVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGdsb2JhbCxcbiAgICAgIHB1Ymxpc2hlZERvYyxcbiAgICAgIHNlcnZlclVSTCxcbiAgICAgIGFwaSxcbiAgICAgIGlkLFxuICAgICAgaTE4bixcbiAgICAgIGxvY2FsZSxcbiAgICAgIHJlc2V0Rm9ybSxcbiAgICAgIGdldFZlcnNpb25zLFxuICAgICAgdCxcbiAgICAgIHRvZ2dsZU1vZGFsLFxuICAgICAgcmV2ZXJ0TW9kYWxTbHVnLFxuICAgICAgdW5QdWJsaXNoTW9kYWxTbHVnLFxuICAgIF0sXG4gIClcblxuICBjb25zdCBjYW5VcGRhdGUgPSBkb2NQZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uXG5cbiAgaWYgKHN0YXR1c1RvUmVuZGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9IHRpdGxlPXtgJHt0KCdzdGF0dXMnKX06ICR7dChzdGF0dXNUb1JlbmRlcil9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X192YWx1ZS13cmFwYH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9Pnt0KCdzdGF0dXMnKX06Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdmFsdWVgfT57dChzdGF0dXNUb1JlbmRlcil9PC9zcGFuPlxuICAgICAgICAgIHtjYW5VcGRhdGUgJiYgc3RhdHVzVG9SZW5kZXIgPT09ICdwdWJsaXNoZWQnICYmIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgJm5ic3A7Jm1kYXNoOyZuYnNwO1xuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbmB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlTW9kYWwodW5QdWJsaXNoTW9kYWxTbHVnKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KCd1bnB1Ymxpc2gnKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21vZGFsYH0gc2x1Zz17dW5QdWJsaXNoTW9kYWxTbHVnfT5cbiAgICAgICAgICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbW9kYWwtdGVtcGxhdGVgfT5cbiAgICAgICAgICAgICAgICAgIDxoMT57dCgnY29uZmlybVVucHVibGlzaCcpfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8cD57dCgnYWJvdXRUb1VucHVibGlzaCcpfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9jZXNzaW5nID8gdW5kZWZpbmVkIDogKCkgPT4gdG9nZ2xlTW9kYWwodW5QdWJsaXNoTW9kYWxTbHVnKX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0KCdnZW5lcmFsOmNhbmNlbCcpfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb2Nlc3NpbmcgPyB1bmRlZmluZWQgOiAoKSA9PiBwZXJmb3JtQWN0aW9uKCd1bnB1Ymxpc2gnKX0+XG4gICAgICAgICAgICAgICAgICAgIHt0KHByb2Nlc3NpbmcgPyAndW5wdWJsaXNoaW5nJyA6ICdnZW5lcmFsOmNvbmZpcm0nKX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjYW5VcGRhdGUgJiYgc3RhdHVzVG9SZW5kZXIgPT09ICdjaGFuZ2VkJyAmJiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICZuYnNwOyZtZGFzaDsmbmJzcDtcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25gfVxuICAgICAgICAgICAgICAgIGlkPVwiYWN0aW9uLXJldmVydC10by1wdWJsaXNoZWRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU1vZGFsKHJldmVydE1vZGFsU2x1Zyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgncmV2ZXJ0VG9QdWJsaXNoZWQnKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21vZGFsYH0gc2x1Zz17cmV2ZXJ0TW9kYWxTbHVnfT5cbiAgICAgICAgICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbW9kYWwtdGVtcGxhdGVgfT5cbiAgICAgICAgICAgICAgICAgIDxoMT57dCgnY29uZmlybVJldmVydFRvU2F2ZWQnKX08L2gxPlxuICAgICAgICAgICAgICAgICAgPHA+e3QoJ2Fib3V0VG9SZXZlcnRUb1B1Ymxpc2hlZCcpfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9jZXNzaW5nID8gdW5kZWZpbmVkIDogKCkgPT4gdG9nZ2xlTW9kYWwocmV2ZXJ0TW9kYWxTbHVnKX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0KCdnZW5lcmFsOmNhbmNlbCcpfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYWN0aW9uLXJldmVydC10by1wdWJsaXNoZWQtY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb2Nlc3NpbmcgPyB1bmRlZmluZWQgOiAoKSA9PiBwZXJmb3JtQWN0aW9uKCdyZXZlcnQnKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3QocHJvY2Vzc2luZyA/ICdyZXZlcnRpbmcnIDogJ2dlbmVyYWw6Y29uZmlybScpfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiU3RhdHVzIiwiaWQiLCJjb2xsZWN0aW9uIiwiZG9jUGVybWlzc2lvbnMiLCJnZXRWZXJzaW9ucyIsImdsb2JhbCIsInB1Ymxpc2hlZERvYyIsInVucHVibGlzaGVkVmVyc2lvbnMiLCJ1c2VEb2N1bWVudEluZm8iLCJ0b2dnbGVNb2RhbCIsInVzZU1vZGFsIiwicm91dGVzIiwiYXBpIiwic2VydmVyVVJMIiwidXNlQ29uZmlnIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VTdGF0ZSIsInJlc2V0IiwicmVzZXRGb3JtIiwidXNlRm9ybSIsImNvZGUiLCJsb2NhbGUiLCJ1c2VMb2NhbGUiLCJpMThuIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidW5QdWJsaXNoTW9kYWxTbHVnIiwicmV2ZXJ0TW9kYWxTbHVnIiwic3RhdHVzVG9SZW5kZXIiLCJkb2NzIiwibGVuZ3RoIiwicGVyZm9ybUFjdGlvbiIsInVzZUNhbGxiYWNrIiwiYWN0aW9uIiwidXJsIiwibWV0aG9kIiwiYm9keSIsIl9zdGF0dXMiLCJzbHVnIiwicmVzIiwicmVxdWVzdHMiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImxhbmd1YWdlIiwic3RhdHVzIiwiZGF0YSIsImZpZWxkcyIsImpzb24iLCJyZXN1bHQiLCJkb2MiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyb3IiLCJjYW5VcGRhdGUiLCJ1cGRhdGUiLCJwZXJtaXNzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzcGFuIiwiUmVhY3QiLCJGcmFnbWVudCIsIkJ1dHRvbiIsImJ1dHRvblN0eWxlIiwib25DbGljayIsIk1vZGFsIiwiTWluaW1hbFRlbXBsYXRlIiwiaDEiLCJwIiwidW5kZWZpbmVkIiwidHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE0TUE7OztlQUFBOzs7dUJBNU1nQzsrREFDYTs4QkFDZDsrQkFDVDtrQkFJVTtxQkFDUDt5QkFDRDt3QkFDRTs4QkFDTTt3QkFDTjsrREFDUDtRQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsU0FBbUI7SUFDdkIsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxtQkFBbUIsRUFBRSxHQUM5RkMsSUFBQUEsNkJBQWU7SUFDakIsTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBR0MsSUFBQUEsZUFBUTtJQUNoQyxNQUFNLEVBQ0pDLFFBQVEsRUFBRUMsR0FBRyxFQUFFLEVBQ2ZDLFNBQVMsRUFDVixHQUFHQyxJQUFBQSxpQkFBUztJQUNiLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHQyxJQUFBQSxlQUFRLEVBQUM7SUFDN0MsTUFBTSxFQUFFQyxPQUFP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