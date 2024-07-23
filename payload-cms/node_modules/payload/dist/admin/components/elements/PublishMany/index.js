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
const _getTranslation = require("../../../../utilities/getTranslation");
const _api = require("../../../api");
const _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _SelectionProvider = require("../../views/collections/List/SelectionProvider");
const _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
const _Pill = /*#__PURE__*/ _interop_require_default(require("../Pill"));
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
const baseClass = 'publish-many';
const PublishMany = (props)=>{
    const { collection: { slug, labels: { plural }, versions } = {}, resetParams } = props;
    const { routes: { api }, serverURL } = (0, _Config.useConfig)();
    const { permissions } = (0, _Auth.useAuth)();
    const { toggleModal } = (0, _modal.useModal)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('version');
    const { getQueryParams, selectAll } = (0, _SelectionProvider.useSelection)();
    const [submitted, setSubmitted] = (0, _react.useState)(false);
    const collectionPermissions = permissions?.collections?.[slug];
    const hasPermission = collectionPermissions?.update?.permission;
    const modalSlug = `publish-${slug}`;
    const addDefaultError = (0, _react.useCallback)(()=>{
        _reacttoastify.toast.error(t('error:unknown'));
    }, [
        t
    ]);
    const handlePublish = (0, _react.useCallback)(()=>{
        setSubmitted(true);
        void _api.requests.patch(`${serverURL}${api}/${slug}${getQueryParams({
            _status: {
                not_equals: 'published'
            }
        })}&draft=true`, {
            body: JSON.stringify({
                _status: 'published'
            }),
            headers: {
                'Accept-Language': i18n.language,
                'Content-Type': 'application/json'
            }
        }).then(async (res)=>{
            try {
                const json = await res.json();
                toggleModal(modalSlug);
                if (res.status < 400) {
                    _reacttoastify.toast.success(t('general:updatedSuccessfully'));
                    resetParams({
                        page: selectAll ? 1 : undefined
                    });
                    return null;
                }
                if (json.errors) {
                    json.errors.forEach((error)=>_reacttoastify.toast.error(error.message));
                } else {
                    addDefaultError();
                }
                return false;
            } catch (e) {
                return addDefaultError();
            }
        });
    }, [
        addDefaultError,
        api,
        getQueryParams,
        i18n.language,
        modalSlug,
        resetParams,
        selectAll,
        serverURL,
        slug,
        t,
        toggleModal
    ]);
    if (!versions?.drafts || selectAll === _SelectionProvider.SelectAllStatus.None || !hasPermission) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Pill.default, {
        className: `${baseClass}__toggle`,
        onClick: ()=>{
            setSubmitted(false);
            toggleModal(modalSlug);
        }
    }, t('publish')), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        className: baseClass,
        slug: modalSlug
    }, /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: `${baseClass}__template`
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t('confirmPublish')), /*#__PURE__*/ _react.default.createElement("p", null, t('aboutToPublishSelection', {
        label: (0, _getTranslation.getTranslation)(plural, i18n)
    })), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        id: "confirm-cancel",
        onClick: submitted ? undefined : ()=>toggleModal(modalSlug),
        type: "button"
    }, t('general:cancel')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        id: "confirm-publish",
        onClick: submitted ? undefined : handlePublish
    }, submitted ? t('publishing') : t('general:confirm')))));
};
const _default = PublishMany;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1B1Ymxpc2hNYW55L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbCwgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgeyByZXF1ZXN0cyB9IGZyb20gJy4uLy4uLy4uL2FwaSdcbmltcG9ydCBNaW5pbWFsVGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IHsgU2VsZWN0QWxsU3RhdHVzLCB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9MaXN0L1NlbGVjdGlvblByb3ZpZGVyJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nXG5pbXBvcnQgUGlsbCBmcm9tICcuLi9QaWxsJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdwdWJsaXNoLW1hbnknXG5cbmNvbnN0IFB1Ymxpc2hNYW55OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uOiB7IHNsdWcsIGxhYmVsczogeyBwbHVyYWwgfSwgdmVyc2lvbnMgfSA9IHt9LCByZXNldFBhcmFtcyB9ID0gcHJvcHNcblxuICBjb25zdCB7XG4gICAgcm91dGVzOiB7IGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IHsgcGVybWlzc2lvbnMgfSA9IHVzZUF1dGgoKVxuICBjb25zdCB7IHRvZ2dsZU1vZGFsIH0gPSB1c2VNb2RhbCgpXG4gIGNvbnN0IHsgaTE4biwgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKVxuICBjb25zdCB7IGdldFF1ZXJ5UGFyYW1zLCBzZWxlY3RBbGwgfSA9IHVzZVNlbGVjdGlvbigpXG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBjb2xsZWN0aW9uUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltzbHVnXVxuICBjb25zdCBoYXNQZXJtaXNzaW9uID0gY29sbGVjdGlvblBlcm1pc3Npb25zPy51cGRhdGU/LnBlcm1pc3Npb25cblxuICBjb25zdCBtb2RhbFNsdWcgPSBgcHVibGlzaC0ke3NsdWd9YFxuXG4gIGNvbnN0IGFkZERlZmF1bHRFcnJvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB0b2FzdC5lcnJvcih0KCdlcnJvcjp1bmtub3duJykpXG4gIH0sIFt0XSlcblxuICBjb25zdCBoYW5kbGVQdWJsaXNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN1Ym1pdHRlZCh0cnVlKVxuICAgIHZvaWQgcmVxdWVzdHNcbiAgICAgIC5wYXRjaChcbiAgICAgICAgYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NsdWd9JHtnZXRRdWVyeVBhcmFtcyh7XG4gICAgICAgICAgX3N0YXR1czogeyBub3RfZXF1YWxzOiAncHVibGlzaGVkJyB9LFxuICAgICAgICB9KX0mZHJhZnQ9dHJ1ZWAsXG4gICAgICAgIHtcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBfc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIClcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1ZylcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgdG9hc3Quc3VjY2Vzcyh0KCdnZW5lcmFsOnVwZGF0ZWRTdWNjZXNzZnVsbHknKSlcbiAgICAgICAgICAgIHJlc2V0UGFyYW1zKHsgcGFnZTogc2VsZWN0QWxsID8gMSA6IHVuZGVmaW5lZCB9KVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoanNvbi5lcnJvcnMpIHtcbiAgICAgICAgICAgIGpzb24uZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkRGVmYXVsdEVycm9yKClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gYWRkRGVmYXVsdEVycm9yKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfSwgW1xuICAgIGFkZERlZmF1bHRFcnJvcixcbiAgICBhcGksXG4gICAgZ2V0UXVlcnlQYXJhbXMsXG4gICAgaTE4bi5sYW5ndWFnZSxcbiAgICBtb2RhbFNsdWcsXG4gICAgcmVzZXRQYXJhbXMsXG4gICAgc2VsZWN0QWxsLFxuICAgIHNlcnZlclVSTCxcbiAgICBzbHVnLFxuICAgIHQsXG4gICAgdG9nZ2xlTW9kYWwsXG4gIF0pXG5cbiAgaWYgKCF2ZXJzaW9ucz8uZHJhZnRzIHx8IHNlbGVjdEFsbCA9PT0gU2VsZWN0QWxsU3RhdHVzLk5vbmUgfHwgIWhhc1Blcm1pc3Npb24pIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGlsbFxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZWB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpXG4gICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dCgncHVibGlzaCcpfVxuICAgICAgPC9QaWxsPlxuICAgICAgPE1vZGFsIGNsYXNzTmFtZT17YmFzZUNsYXNzfSBzbHVnPXttb2RhbFNsdWd9PlxuICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGVtcGxhdGVgfT5cbiAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1QdWJsaXNoJyl9PC9oMT5cbiAgICAgICAgICA8cD57dCgnYWJvdXRUb1B1Ymxpc2hTZWxlY3Rpb24nLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihwbHVyYWwsIGkxOG4pIH0pfTwvcD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBpZD1cImNvbmZpcm0tY2FuY2VsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdHRlZCA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dCgnZ2VuZXJhbDpjYW5jZWwnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGlkPVwiY29uZmlybS1wdWJsaXNoXCIgb25DbGljaz17c3VibWl0dGVkID8gdW5kZWZpbmVkIDogaGFuZGxlUHVibGlzaH0+XG4gICAgICAgICAgICB7c3VibWl0dGVkID8gdCgncHVibGlzaGluZycpIDogdCgnZ2VuZXJhbDpjb25maXJtJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1Ymxpc2hNYW55XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiUHVibGlzaE1hbnkiLCJwcm9wcyIsImNvbGxlY3Rpb24iLCJzbHVnIiwibGFiZWxzIiwicGx1cmFsIiwidmVyc2lvbnMiLCJyZXNldFBhcmFtcyIsInJvdXRlcyIsImFwaSIsInNlcnZlclVSTCIsInVzZUNvbmZpZyIsInBlcm1pc3Npb25zIiwidXNlQXV0aCIsInRvZ2dsZU1vZGFsIiwidXNlTW9kYWwiLCJpMThuIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiZ2V0UXVlcnlQYXJhbXMiLCJzZWxlY3RBbGwiLCJ1c2VTZWxlY3Rpb24iLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJ1c2VTdGF0ZSIsImNvbGxlY3Rpb25QZXJtaXNzaW9ucyIsImNvbGxlY3Rpb25zIiwiaGFzUGVybWlzc2lvbiIsInVwZGF0ZSIsInBlcm1pc3Npb24iLCJtb2RhbFNsdWciLCJhZGREZWZhdWx0RXJyb3IiLCJ1c2VDYWxsYmFjayIsInRvYXN0IiwiZXJyb3IiLCJoYW5kbGVQdWJsaXNoIiwicmVxdWVzdHMiLCJwYXRjaCIsIl9zdGF0dXMiLCJub3RfZXF1YWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJ0aGVuIiwicmVzIiwianNvbiIsInN0YXR1cyIsInN1Y2Nlc3MiLCJwYWdlIiwidW5kZWZpbmVkIiwiZXJyb3JzIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJlIiwiZHJhZnRzIiwiU2VsZWN0QWxsU3RhdHVzIiwiTm9uZSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJQaWxsIiwiY2xhc3NOYW1lIiwib25DbGljayIsIk1vZGFsIiwiTWluaW1hbFRlbXBsYXRlIiwiaDEiLCJwIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsIkJ1dHRvbiIsImJ1dHRvblN0eWxlIiwiaWQiLCJ0eXBlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZ0lBOzs7ZUFBQTs7O3VCQWhJZ0M7K0RBQ2E7OEJBQ2Q7K0JBQ1Q7Z0NBSVM7cUJBQ047Z0VBQ0c7c0JBQ0o7d0JBQ0U7bUNBQ29COytEQUMzQjs2REFDRjtRQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsY0FBK0IsQ0FBQ0M7SUFDcEMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUUsRUFBRUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLFdBQVcsRUFBRSxHQUFHTjtJQUVqRixNQUFNLEVBQ0pPLFFBQVEsRUFBRUMsR0FBRyxFQUFFLEVBQ2ZDLFNBQVMsRUFDVixHQUFHQyxJQUFBQSxpQkFBUztJQUNiLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdDLElBQUFBLGFBQU87SUFDL0IsTUFBTSxF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