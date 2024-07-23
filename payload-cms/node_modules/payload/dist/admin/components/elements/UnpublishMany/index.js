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
const baseClass = 'unpublish-many';
const UnpublishMany = (props)=>{
    const { collection: { labels: { plural }, slug, versions } = {}, resetParams } = props;
    const { routes: { api }, serverURL } = (0, _Config.useConfig)();
    const { permissions } = (0, _Auth.useAuth)();
    const { toggleModal } = (0, _modal.useModal)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('version');
    const { count, getQueryParams, selectAll } = (0, _SelectionProvider.useSelection)();
    const [submitted, setSubmitted] = (0, _react.useState)(false);
    const collectionPermissions = permissions?.collections?.[slug];
    const hasPermission = collectionPermissions?.update?.permission;
    const modalSlug = `unpublish-${slug}`;
    const addDefaultError = (0, _react.useCallback)(()=>{
        _reacttoastify.toast.error(t('error:unknown'));
    }, [
        t
    ]);
    const handleUnpublish = (0, _react.useCallback)(()=>{
        setSubmitted(true);
        _api.requests.patch(`${serverURL}${api}/${slug}${getQueryParams({
            _status: {
                not_equals: 'draft'
            }
        })}`, {
            body: JSON.stringify({
                _status: 'draft'
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
    }, t('unpublish')), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        className: baseClass,
        slug: modalSlug
    }, /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: `${baseClass}__template`
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t('confirmUnpublish')), /*#__PURE__*/ _react.default.createElement("p", null, t('aboutToUnpublishSelection', {
        label: (0, _getTranslation.getTranslation)(plural, i18n)
    })), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        id: "confirm-cancel",
        onClick: submitted ? undefined : ()=>toggleModal(modalSlug),
        type: "button"
    }, t('general:cancel')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        id: "confirm-unpublish",
        onClick: submitted ? undefined : handleUnpublish
    }, submitted ? t('unpublishing') : t('general:confirm')))));
};
const _default = UnpublishMany;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1VucHVibGlzaE1hbnkvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGFsLCB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCdcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB7IHJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vLi4vYXBpJ1xuaW1wb3J0IE1pbmltYWxUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvTWluaW1hbCdcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgeyBTZWxlY3RBbGxTdGF0dXMsIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0aW9uUHJvdmlkZXInXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbidcbmltcG9ydCBQaWxsIGZyb20gJy4uL1BpbGwnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3VucHVibGlzaC1tYW55J1xuXG5jb25zdCBVbnB1Ymxpc2hNYW55OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uOiB7IGxhYmVsczogeyBwbHVyYWwgfSwgc2x1ZywgdmVyc2lvbnMgfSA9IHt9LCByZXNldFBhcmFtcyB9ID0gcHJvcHNcblxuICBjb25zdCB7XG4gICAgcm91dGVzOiB7IGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IHsgcGVybWlzc2lvbnMgfSA9IHVzZUF1dGgoKVxuICBjb25zdCB7IHRvZ2dsZU1vZGFsIH0gPSB1c2VNb2RhbCgpXG4gIGNvbnN0IHsgaTE4biwgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKVxuICBjb25zdCB7IGNvdW50LCBnZXRRdWVyeVBhcmFtcywgc2VsZWN0QWxsIH0gPSB1c2VTZWxlY3Rpb24oKVxuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgY29sbGVjdGlvblBlcm1pc3Npb25zID0gcGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bc2x1Z11cbiAgY29uc3QgaGFzUGVybWlzc2lvbiA9IGNvbGxlY3Rpb25QZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uXG5cbiAgY29uc3QgbW9kYWxTbHVnID0gYHVucHVibGlzaC0ke3NsdWd9YFxuXG4gIGNvbnN0IGFkZERlZmF1bHRFcnJvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB0b2FzdC5lcnJvcih0KCdlcnJvcjp1bmtub3duJykpXG4gIH0sIFt0XSlcblxuICBjb25zdCBoYW5kbGVVbnB1Ymxpc2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3VibWl0dGVkKHRydWUpXG4gICAgcmVxdWVzdHNcbiAgICAgIC5wYXRjaChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30ke2dldFF1ZXJ5UGFyYW1zKHsgX3N0YXR1czogeyBub3RfZXF1YWxzOiAnZHJhZnQnIH0gfSl9YCwge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgX3N0YXR1czogJ2RyYWZ0JyxcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1ZylcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgdG9hc3Quc3VjY2Vzcyh0KCdnZW5lcmFsOnVwZGF0ZWRTdWNjZXNzZnVsbHknKSlcbiAgICAgICAgICAgIHJlc2V0UGFyYW1zKHsgcGFnZTogc2VsZWN0QWxsID8gMSA6IHVuZGVmaW5lZCB9KVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoanNvbi5lcnJvcnMpIHtcbiAgICAgICAgICAgIGpzb24uZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkRGVmYXVsdEVycm9yKClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gYWRkRGVmYXVsdEVycm9yKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfSwgW1xuICAgIGFkZERlZmF1bHRFcnJvcixcbiAgICBhcGksXG4gICAgZ2V0UXVlcnlQYXJhbXMsXG4gICAgaTE4bi5sYW5ndWFnZSxcbiAgICBtb2RhbFNsdWcsXG4gICAgcmVzZXRQYXJhbXMsXG4gICAgc2VsZWN0QWxsLFxuICAgIHNlcnZlclVSTCxcbiAgICBzbHVnLFxuICAgIHQsXG4gICAgdG9nZ2xlTW9kYWwsXG4gIF0pXG5cbiAgaWYgKCF2ZXJzaW9ucz8uZHJhZnRzIHx8IHNlbGVjdEFsbCA9PT0gU2VsZWN0QWxsU3RhdHVzLk5vbmUgfHwgIWhhc1Blcm1pc3Npb24pIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGlsbFxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZWB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpXG4gICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dCgndW5wdWJsaXNoJyl9XG4gICAgICA8L1BpbGw+XG4gICAgICA8TW9kYWwgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9IHNsdWc9e21vZGFsU2x1Z30+XG4gICAgICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190ZW1wbGF0ZWB9PlxuICAgICAgICAgIDxoMT57dCgnY29uZmlybVVucHVibGlzaCcpfTwvaDE+XG4gICAgICAgICAgPHA+e3QoJ2Fib3V0VG9VbnB1Ymxpc2hTZWxlY3Rpb24nLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihwbHVyYWwsIGkxOG4pIH0pfTwvcD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBpZD1cImNvbmZpcm0tY2FuY2VsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdHRlZCA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dCgnZ2VuZXJhbDpjYW5jZWwnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGlkPVwiY29uZmlybS11bnB1Ymxpc2hcIiBvbkNsaWNrPXtzdWJtaXR0ZWQgPyB1bmRlZmluZWQgOiBoYW5kbGVVbnB1Ymxpc2h9PlxuICAgICAgICAgICAge3N1Ym1pdHRlZCA/IHQoJ3VucHVibGlzaGluZycpIDogdCgnZ2VuZXJhbDpjb25maXJtJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVucHVibGlzaE1hbnlcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJVbnB1Ymxpc2hNYW55IiwicHJvcHMiLCJjb2xsZWN0aW9uIiwibGFiZWxzIiwicGx1cmFsIiwic2x1ZyIsInZlcnNpb25zIiwicmVzZXRQYXJhbXMiLCJyb3V0ZXMiLCJhcGkiLCJzZXJ2ZXJVUkwiLCJ1c2VDb25maWciLCJwZXJtaXNzaW9ucyIsInVzZUF1dGgiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZGFsIiwiaTE4biIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImNvdW50IiwiZ2V0UXVlcnlQYXJhbXMiLCJzZWxlY3RBbGwiLCJ1c2VTZWxlY3Rpb24iLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJ1c2VTdGF0ZSIsImNvbGxlY3Rpb25QZXJtaXNzaW9ucyIsImNvbGxlY3Rpb25zIiwiaGFzUGVybWlzc2lvbiIsInVwZGF0ZSIsInBlcm1pc3Npb24iLCJtb2RhbFNsdWciLCJhZGREZWZhdWx0RXJyb3IiLCJ1c2VDYWxsYmFjayIsInRvYXN0IiwiZXJyb3IiLCJoYW5kbGVVbnB1Ymxpc2giLCJyZXF1ZXN0cyIsInBhdGNoIiwiX3N0YXR1cyIsIm5vdF9lcXVhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJsYW5ndWFnZSIsInRoZW4iLCJyZXMiLCJqc29uIiwic3RhdHVzIiwic3VjY2VzcyIsInBhZ2UiLCJ1bmRlZmluZWQiLCJlcnJvcnMiLCJmb3JFYWNoIiwibWVzc2FnZSIsImUiLCJkcmFmdHMiLCJTZWxlY3RBbGxTdGF0dXMiLCJOb25lIiwiUmVhY3QiLCJGcmFnbWVudCIsIlBpbGwiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiTW9kYWwiLCJNaW5pbWFsVGVtcGxhdGUiLCJoMSIsInAiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwiQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJpZCIsInR5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkEySEE7OztlQUFBOzs7dUJBM0hnQzsrREFDYTs4QkFDZDsrQkFDVDtnQ0FJUztxQkFDTjtnRUFDRztzQkFDSjt3QkFDRTttQ0FDb0I7K0RBQzNCOzZEQUNGO1FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxnQkFBaUMsQ0FBQ0M7SUFDdEMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLFdBQVcsRUFBRSxHQUFHTjtJQUVqRixNQUFNLEVBQ0pPLFFBQVEsRUFBRUMsR0FBRyxFQUFFLEVBQ2ZDLFNBQVMsRUFDVixHQUFHQyxJQUFBQSxpQkFBUztJQUNiLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdDLElBQUFBLGFBQU87SUFDL0IsTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBR0MsSUFBQUEsZUFBUTtJQUNoQyxNQUFNLEVB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