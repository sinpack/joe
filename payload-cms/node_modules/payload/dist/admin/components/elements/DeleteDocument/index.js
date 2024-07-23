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
const _getTranslation = require("../../../../utilities/getTranslation");
const _api = require("../../../api");
const _useTitle = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useTitle"));
const _context = require("../../forms/Form/context");
const _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
const _Config = require("../../utilities/Config");
const _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
const _PopupButtonList = /*#__PURE__*/ _interop_require_wildcard(require("../Popup/PopupButtonList"));
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
const baseClass = 'delete-document';
const DeleteDocument = (props)=>{
    const { id, buttonId, collection: { labels: { singular } = {}, slug } = {}, collection, title: titleFromProps } = props;
    const { routes: { admin, api }, serverURL } = (0, _Config.useConfig)();
    const { setModified } = (0, _context.useForm)();
    const [deleting, setDeleting] = (0, _react.useState)(false);
    const { toggleModal } = (0, _modal.useModal)();
    const history = (0, _reactrouterdom.useHistory)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    const title = (0, _useTitle.default)({
        collection
    });
    const titleToRender = titleFromProps || title || id;
    const modalSlug = `delete-${id}`;
    const addDefaultError = (0, _react.useCallback)(()=>{
        setDeleting(false);
        _reacttoastify.toast.error(t('error:deletingTitle', {
            title
        }));
    }, [
        t,
        title
    ]);
    const handleDelete = (0, _react.useCallback)(async ()=>{
        setDeleting(true);
        setModified(false);
        try {
            await _api.requests.delete(`${serverURL}${api}/${slug}/${id}`, {
                headers: {
                    'Accept-Language': i18n.language,
                    'Content-Type': 'application/json'
                }
            }).then(async (res)=>{
                try {
                    const json = await res.json();
                    if (res.status < 400) {
                        setDeleting(false);
                        toggleModal(modalSlug);
                        _reacttoastify.toast.success(json.message || t('titleDeleted', {
                            label: (0, _getTranslation.getTranslation)(singular, i18n),
                            title
                        }));
                        return history.push(`${admin}/collections/${slug}`);
                    }
                    toggleModal(modalSlug);
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
        } catch (e) {
            addDefaultError();
        }
    }, [
        setModified,
        serverURL,
        api,
        slug,
        id,
        toggleModal,
        modalSlug,
        t,
        singular,
        i18n,
        title,
        history,
        admin,
        addDefaultError
    ]);
    if (id) {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
            id: buttonId,
            onClick: ()=>{
                setDeleting(false);
                toggleModal(modalSlug);
            }
        }, t('delete')), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
            className: baseClass,
            slug: modalSlug
        }, /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
            className: `${baseClass}__template`
        }, /*#__PURE__*/ _react.default.createElement("h1", null, t('confirmDeletion')), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement(_reacti18next.Trans, {
            i18nKey: "aboutToDelete",
            t: t,
            values: {
                label: (0, _getTranslation.getTranslation)(singular, i18n),
                title: titleToRender
            }
        }, "aboutToDelete", /*#__PURE__*/ _react.default.createElement("strong", null, titleToRender))), /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__actions`
        }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
            buttonStyle: "secondary",
            id: "confirm-cancel",
            onClick: deleting ? undefined : ()=>toggleModal(modalSlug),
            type: "button"
        }, t('cancel')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            id: "confirm-delete",
            onClick: deleting ? undefined : handleDelete
        }, deleting ? t('deleting') : t('confirm'))))));
    }
    return null;
};
const _default = DeleteDocument;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RlbGV0ZURvY3VtZW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbCwgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFucywgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgeyByZXF1ZXN0cyB9IGZyb20gJy4uLy4uLy4uL2FwaSdcbmltcG9ydCB1c2VUaXRsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VUaXRsZSdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnXG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJ1xuaW1wb3J0ICogYXMgUG9wdXBMaXN0IGZyb20gJy4uL1BvcHVwL1BvcHVwQnV0dG9uTGlzdCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZGVsZXRlLWRvY3VtZW50J1xuXG5jb25zdCBEZWxldGVEb2N1bWVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBidXR0b25JZCxcbiAgICBjb2xsZWN0aW9uOiB7IGxhYmVsczogeyBzaW5ndWxhciB9ID0ge30sIHNsdWcgfSA9IHt9LFxuICAgIGNvbGxlY3Rpb24sXG4gICAgdGl0bGU6IHRpdGxlRnJvbVByb3BzLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7XG4gICAgcm91dGVzOiB7IGFkbWluLCBhcGkgfSxcbiAgICBzZXJ2ZXJVUkwsXG4gIH0gPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IHsgc2V0TW9kaWZpZWQgfSA9IHVzZUZvcm0oKVxuICBjb25zdCBbZGVsZXRpbmcsIHNldERlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IHRvZ2dsZU1vZGFsIH0gPSB1c2VNb2RhbCgpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpXG4gIGNvbnN0IHRpdGxlID0gdXNlVGl0bGUoeyBjb2xsZWN0aW9uIH0pXG4gIGNvbnN0IHRpdGxlVG9SZW5kZXIgPSB0aXRsZUZyb21Qcm9wcyB8fCB0aXRsZSB8fCBpZFxuXG4gIGNvbnN0IG1vZGFsU2x1ZyA9IGBkZWxldGUtJHtpZH1gXG5cbiAgY29uc3QgYWRkRGVmYXVsdEVycm9yID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldERlbGV0aW5nKGZhbHNlKVxuICAgIHRvYXN0LmVycm9yKHQoJ2Vycm9yOmRlbGV0aW5nVGl0bGUnLCB7IHRpdGxlIH0pKVxuICB9LCBbdCwgdGl0bGVdKVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBzZXREZWxldGluZyh0cnVlKVxuICAgIHNldE1vZGlmaWVkKGZhbHNlKVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCByZXF1ZXN0c1xuICAgICAgICAuZGVsZXRlKGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS8ke2lkfWAsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICAgICAgc2V0RGVsZXRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1ZylcbiAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcbiAgICAgICAgICAgICAgICBqc29uLm1lc3NhZ2UgfHwgdCgndGl0bGVEZWxldGVkJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oc2luZ3VsYXIsIGkxOG4pLCB0aXRsZSB9KSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gaGlzdG9yeS5wdXNoKGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke3NsdWd9YClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKVxuXG4gICAgICAgICAgICBpZiAoanNvbi5lcnJvcnMpIHtcbiAgICAgICAgICAgICAganNvbi5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWRkRGVmYXVsdEVycm9yKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBhZGREZWZhdWx0RXJyb3IoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhZGREZWZhdWx0RXJyb3IoKVxuICAgIH1cbiAgfSwgW1xuICAgIHNldE1vZGlmaWVkLFxuICAgIHNlcnZlclVSTCxcbiAgICBhcGksXG4gICAgc2x1ZyxcbiAgICBpZCxcbiAgICB0b2dnbGVNb2RhbCxcbiAgICBtb2RhbFNsdWcsXG4gICAgdCxcbiAgICBzaW5ndWxhcixcbiAgICBpMThuLFxuICAgIHRpdGxlLFxuICAgIGhpc3RvcnksXG4gICAgYWRtaW4sXG4gICAgYWRkRGVmYXVsdEVycm9yLFxuICBdKVxuXG4gIGlmIChpZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxQb3B1cExpc3QuQnV0dG9uXG4gICAgICAgICAgaWQ9e2J1dHRvbklkfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldERlbGV0aW5nKGZhbHNlKVxuICAgICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dCgnZGVsZXRlJyl9XG4gICAgICAgIDwvUG9wdXBMaXN0LkJ1dHRvbj5cbiAgICAgICAgPE1vZGFsIGNsYXNzTmFtZT17YmFzZUNsYXNzfSBzbHVnPXttb2RhbFNsdWd9PlxuICAgICAgICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190ZW1wbGF0ZWB9PlxuICAgICAgICAgICAgPGgxPnt0KCdjb25maXJtRGVsZXRpb24nKX08L2gxPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJhYm91dFRvRGVsZXRlXCJcbiAgICAgICAgICAgICAgICB0PXt0fVxuICAgICAgICAgICAgICAgIHZhbHVlcz17eyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oc2luZ3VsYXIsIGkxOG4pLCB0aXRsZTogdGl0bGVUb1JlbmRlciB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgYWJvdXRUb0RlbGV0ZVxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RpdGxlVG9SZW5kZXJ9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9uc2B9PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybS1jYW5jZWxcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0aW5nID8gdW5kZWZpbmVkIDogKCkgPT4gdG9nZ2xlTW9kYWwobW9kYWxTbHVnKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KCdjYW5jZWwnKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJjb25maXJtLWRlbGV0ZVwiIG9uQ2xpY2s9e2RlbGV0aW5nID8gdW5kZWZpbmVkIDogaGFuZGxlRGVsZXRlfT5cbiAgICAgICAgICAgICAgICB7ZGVsZXRpbmcgPyB0KCdkZWxldGluZycpIDogdCgnY29uZmlybScpfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVEb2N1bWVudFxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkRlbGV0ZURvY3VtZW50IiwicHJvcHMiLCJpZCIsImJ1dHRvbklkIiwiY29sbGVjdGlvbiIsImxhYmVscyIsInNpbmd1bGFyIiwic2x1ZyIsInRpdGxlIiwidGl0bGVGcm9tUHJvcHMiLCJyb3V0ZXMiLCJhZG1pbiIsImFwaSIsInNlcnZlclVSTCIsInVzZUNvbmZpZyIsInNldE1vZGlmaWVkIiwidXNlRm9ybSIsImRlbGV0aW5nIiwic2V0RGVsZXRpbmciLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwidXNlTW9kYWwiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VUaXRsZSIsInRpdGxlVG9SZW5kZXIiLCJtb2RhbFNsdWciLCJhZGREZWZhdWx0RXJyb3IiLCJ1c2VDYWxsYmFjayIsInRvYXN0IiwiZXJyb3IiLCJoYW5kbGVEZWxldGUiLCJyZXF1ZXN0cyIsImRlbGV0ZSIsImhlYWRlcnMiLCJsYW5ndWFnZSIsInRoZW4iLCJyZXMiLCJqc29uIiwic3RhdHVzIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwicHVzaCIsImVycm9ycyIsImZvckVhY2giLCJlIiwiUmVhY3QiLCJGcmFnbWVudCIsIlBvcHVwTGlzdCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJNb2RhbCIsImNsYXNzTmFtZSIsIk1pbmltYWxUZW1wbGF0ZSIsImgxIiwicCIsIlRyYW5zIiwiaTE4bktleSIsInZhbHVlcyIsInN0cm9uZyIsImRpdiIsImJ1dHRvblN0eWxlIiwidW5kZWZpbmVkIiwidHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBdUpBOzs7ZUFBQTs7O3VCQXZKZ0M7K0RBQ2E7OEJBQ1A7Z0NBQ1g7K0JBQ0w7Z0NBSVM7cUJBQ047aUVBQ0o7eUJBQ0c7Z0VBQ0k7d0JBQ0Y7K0RBQ1A7eUVBQ1E7UUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxpQkFBa0MsQ0FBQ0M7SUFDdkMsTUFBTSxFQUNKQyxFQUFFLEVBQ0ZDLFFBQVEsRUFDUkMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDcERILFVBQVUsRUFDVkksT0FBT0MsY0FBYyxFQUN0QixHQUFHUjtJQUVKLE1BQU0sRUFDSlMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsRUFBRSxFQUN0QkMsU0FBUyxFQUNWLEdBQUdDLElBQUFBLGlCQUFTO0lBRWIsTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBR0MsSUFBQUEsZ0JBQU87SUFDL0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdDLElBQUFBLGVBQVEsRUFBQztJQUN6QyxNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHQyxJQUFBQSxlQUFRO0lBQ2hDLE1BQU1DLFVBQVVDLElBQUFBLDBCQUFVO0lBQzFCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUNuQyxNQUFNbEIsUUFBUW1CLElBQUFBLGlCQUFRLEVBQUM7UUFBRXZCO0lBQVc7SUFDcEMsTUFBTXdCLGdCQUFnQm5CLGtCQUFrQkQsU0FBU047SUFFakQsTUFBTTJCLFlBQVksQ0FBQyxPQUFPLEVBQUUzQixHQUFHLENBQUM7SUFFaEMsTUFBTTRCLGtCQUFrQkMsSUFBQUEsa0JBQVcsRUFBQztRQUNsQ2IsWUFBWTtRQUNaYyxvQkFBSyxDQUFDQyxLQUFLLENBQUNSLEVBQUUsdUJBQXVCO1lBQUVqQjtRQUFNO0lBQy9DLEdBQUc7UUFBQ2lCO1FBQUdqQjtLQUFNO0lBRWIsTUFBTTBCLGVBQWVILElBQUFBLGtCQUFXLEVBQUM7UUFDL0JiLFlBQVk7UUFDWkgsWUFBWTtRQUNaLElBQUk7WUFDRixNQUFNb0IsYUFBUSxDQUNYQyxNQUFNLENBQUMsQ0FBQyxFQUFFdkIsVUFBVSxFQUFFRCxJQUFJLENBQUMsRUFBRUwsS0FBSyxDQUFDLEVBQUVMLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQ21DLFNBQVM7b0JBQ1AsbUJBQW1CYixLQUFLYyxRQUFRO29CQUNoQyxnQkFBZ0I7Z0JBQ2xCO1lBQ0YsR0FDQ0MsSUFBSSxDQUFDLE9BQU9DO2dCQUNYLElBQUk7b0JBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJQyxJQUFJO29CQUMzQixJQUFJRCxJQUFJRSxNQUFNLEdBQUcsS0FBSzt3QkFDcEJ4QixZQUFZO3dCQUNaRSxZQUFZUzt3QkFDWkcsb0JBQUssQ0FBQ1csT0FBTyxDQUNYRixLQUFLRyxPQUFPLElBQUluQixFQUFFLGdCQUFnQjs0QkFBRW9CLE9BQU9DLElBQUFBLDhCQUFjLEVBQUN4QyxVQUFVa0I7NEJBQU9oQjt3QkFBTTt3QkFFbkYsT0FBT2MsUUFBUXlCLElBQUksQ0FBQyxDQUFDLEVBQUVwQyxNQUFNLGFBQWEsRUFBRUosS0FBSyxDQUFDO29CQUNwRDtvQkFFQWEsWUFBWVM7b0JBRVosSUFBSVksS0FBS08sTUFBTSxFQUFFO3dCQUNmUCxLQUFLTyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxDQUFDaEIsUUFBVUQsb0JBQUssQ0FBQ0MsS0FBSyxDQUFDQSxNQUFNVyxPQUFPO29CQUMxRCxPQUFPO3dCQUNMZDtvQkFDRjtvQkFDQSxPQUFPO2dCQUNULEVBQUUsT0FBT29CLEdBQUc7b0JBQ1YsT0FBT3BCO2dCQUNUO1lBQ0Y7UUFDSixFQUFFLE9BQU9vQixHQUFHO1lBQ1ZwQjtRQUNGO0lBQ0YsR0FBRztRQUNEZjtRQUNBRjtRQUNBRDtRQUNBTDtRQUNBTDtRQUNBa0I7UUFDQVM7UUFDQUo7UUFDQW5CO1FBQ0FrQjtRQUNBaEI7UUFDQWM7UUFDQVg7UUFDQW1CO0tBQ0Q7SUFFRCxJQUFJNUIsSUFBSTtRQUNOLHFCQUNFLDZCQUFDaUQsY0FBSyxDQUFDQyxRQUFRLHNCQUNiLDZCQUFDQyxpQkFBVUMsTUFBTTtZQUNmcEQsSUFBSUM7WUFDSm9ELFNBQVM7Z0JBQ1ByQyxZQUFZO2dCQUNaRSxZQUFZUztZQUNkO1dBRUNKLEVBQUUsMEJBRUwsNkJBQUMrQixZQUFLO1lBQUNDLFdBQVcxRDtZQUFXUSxNQUFNc0I7eUJBQ2pDLDZCQUFDNkIsZ0JBQWU7WUFBQ0QsV0FBVyxDQUFDLEVBQUUxRCxVQUFVLFVBQVUsQ0FBQzt5QkFDbEQsNkJBQUM0RCxZQUFJbEMsRUFBRSxtQ0FDUCw2QkFBQ21DLHlCQUNDLDZCQUFDQyxtQkFBSztZQUNKQyxTQUFRO1lBQ1JyQyxHQUFHQTtZQUNIc0MsUUFBUTtnQkFBRWxCLE9BQU9DLElBQUFBLDhCQUFjLEVBQUN4QyxVQUFVa0I7Z0JBQU9oQixPQUFPb0I7WUFBYztXQUN2RSwrQkFFQyw2QkFBQ29DLGdCQUFRcEMsZ0NBR2IsNkJBQUNxQztZQUFJUixXQUFXLENBQUMsRUFBRTFELFVBQVUsU0FBUyxDQUFDO3lCQUNyQyw2QkFBQ3VELGVBQU07WUFDTFksYUFBWTtZQUNaaEUsSUFBRztZQUNIcUQsU0FBU3RDLFdBQVdrRCxZQUFZLElBQU0vQyxZQUFZUztZQUNsRHVDLE1BQUs7V0FFSjNDLEVBQUUsMEJBRUwsNkJBQUM2QixlQUFNO1lBQUNwRCxJQUFHO1lBQWlCcUQsU0FBU3RDLFdBQVdrRCxZQUFZakM7V0FDekRqQixXQUFXUSxFQUFFLGNBQWNBLEVBQUU7SUFPNUM7SUFFQSxPQUFPO0FBQ1Q7TUFFQSxXQUFlekIifQ==