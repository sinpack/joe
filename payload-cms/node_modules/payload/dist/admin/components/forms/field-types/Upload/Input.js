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
const _getTranslation = require("../../../../../utilities/getTranslation");
const _Button = /*#__PURE__*/ _interop_require_default(require("../../../elements/Button"));
const _DocumentDrawer = require("../../../elements/DocumentDrawer");
const _FileDetails = /*#__PURE__*/ _interop_require_default(require("../../../elements/FileDetails"));
const _ListDrawer = require("../../../elements/ListDrawer");
const _GetFilterOptions = require("../../../utilities/GetFilterOptions");
const _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
const _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
const _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
const _shared = require("../shared");
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
const baseClass = 'upload';
const UploadInput = (props)=>{
    const { Error, Label, api = '/api', className, collection, description, errorMessage, filterOptions, label, onChange, path, readOnly, relationTo, required, serverURL = 'http://localhost:3000', showError, style, value, width } = props;
    const { i18n, t } = (0, _reacti18next.useTranslation)('fields');
    const ErrorComp = Error || _Error.default;
    const LabelComp = Label || _Label.default;
    const [file, setFile] = (0, _react.useState)(undefined);
    const [missingFile, setMissingFile] = (0, _react.useState)(false);
    const [collectionSlugs] = (0, _react.useState)([
        collection?.slug
    ]);
    const [filterOptionsResult, setFilterOptionsResult] = (0, _react.useState)();
    const [DocumentDrawer, DocumentDrawerToggler, { closeDrawer }] = (0, _DocumentDrawer.useDocumentDrawer)({
        collectionSlug: collectionSlugs[0]
    });
    const [ListDrawer, ListDrawerToggler, { closeDrawer: closeListDrawer }] = (0, _ListDrawer.useListDrawer)({
        collectionSlugs,
        filterOptions: filterOptionsResult
    });
    (0, _react.useEffect)(()=>{
        if (value !== null && typeof value !== 'undefined' && value !== '') {
            const fetchFile = async ()=>{
                const response = await fetch(`${serverURL}${api}/${relationTo}/${value}`, {
                    credentials: 'include',
                    headers: {
                        'Accept-Language': i18n.language
                    }
                });
                if (response.ok) {
                    const json = await response.json();
                    setFile(json);
                } else {
                    setMissingFile(true);
                    setFile(undefined);
                }
            };
            fetchFile();
        } else {
            setFile(undefined);
        }
    }, [
        value,
        relationTo,
        api,
        serverURL,
        i18n
    ]);
    const onSave = (0, _react.useCallback)((args)=>{
        setMissingFile(false);
        onChange(args.doc);
        closeDrawer();
    }, [
        onChange,
        closeDrawer
    ]);
    const onSelect = (0, _react.useCallback)((args)=>{
        setMissingFile(false);
        onChange({
            id: args.docID
        });
        closeListDrawer();
    }, [
        onChange,
        closeListDrawer
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            baseClass,
            className,
            `field-${path.replace(/\./g, '__')}`,
            showError && 'error',
            readOnly && 'read-only'
        ].filter(Boolean).join(' '),
        style: {
            ...style,
            width
        }
    }, /*#__PURE__*/ _react.default.createElement(_GetFilterOptions.GetFilterOptions, {
        filterOptions,
        filterOptionsResult,
        path,
        relationTo,
        setFilterOptionsResult
    }), /*#__PURE__*/ _react.default.createElement(ErrorComp, {
        message: errorMessage,
        showError: showError
    }), /*#__PURE__*/ _react.default.createElement(LabelComp, {
        htmlFor: `field-${path.replace(/\./g, '__')}`,
        label: label,
        required: required
    }), collection?.upload && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, file && !missingFile && /*#__PURE__*/ _react.default.createElement(_FileDetails.default, {
        collection: collection,
        doc: file,
        handleRemove: readOnly ? undefined : ()=>{
            onChange(null);
        }
    }), (!file || missingFile) && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrap`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__buttons`
    }, /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
        className: `${baseClass}__toggler`,
        disabled: readOnly
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        disabled: readOnly,
        el: "div"
    }, t('uploadNewLabel', {
        label: (0, _getTranslation.getTranslation)(collection.labels.singular, i18n)
    }))), /*#__PURE__*/ _react.default.createElement(ListDrawerToggler, {
        className: `${baseClass}__toggler`,
        disabled: readOnly
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        disabled: readOnly,
        el: "div"
    }, t('chooseFromExisting'))))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description,
        path: path,
        value: file
    })), !readOnly && /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
        onSave: onSave
    }), !readOnly && /*#__PURE__*/ _react.default.createElement(ListDrawer, {
        onSelect: onSelect
    }));
};
const _default = UploadInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1VwbG9hZC9JbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgRmllbGRUeXBlcyB9IGZyb20gJy4uJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBGaWx0ZXJPcHRpb25zLCBVcGxvYWRGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERvY3VtZW50RHJhd2VyUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Eb2N1bWVudERyYXdlci90eXBlcydcbmltcG9ydCB0eXBlIHsgTGlzdERyYXdlclByb3BzIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvTGlzdERyYXdlci90eXBlcydcbmltcG9ydCB0eXBlIHsgRGVzY3JpcHRpb24gfSBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBGaWx0ZXJPcHRpb25zUmVzdWx0IH0gZnJvbSAnLi4vUmVsYXRpb25zaGlwL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJ1xuaW1wb3J0IHsgdXNlRG9jdW1lbnREcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Eb2N1bWVudERyYXdlcidcbmltcG9ydCBGaWxlRGV0YWlscyBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9GaWxlRGV0YWlscydcbmltcG9ydCB7IHVzZUxpc3REcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9MaXN0RHJhd2VyJ1xuaW1wb3J0IHsgR2V0RmlsdGVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9HZXRGaWx0ZXJPcHRpb25zJ1xuaW1wb3J0IERlZmF1bHRFcnJvciBmcm9tICcuLi8uLi9FcnJvcidcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nXG5pbXBvcnQgRGVmYXVsdExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJ1xuaW1wb3J0IHsgZmllbGRCYXNlQ2xhc3MgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3VwbG9hZCdcblxuZXhwb3J0IHR5cGUgVXBsb2FkSW5wdXRQcm9wcyA9IE9taXQ8VXBsb2FkRmllbGQsICd0eXBlJz4gJiB7XG4gIEVycm9yPzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIExhYmVsPzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIGFwaT86IHN0cmluZ1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgY29sbGVjdGlvbj86IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgZGVzY3JpcHRpb24/OiBEZXNjcmlwdGlvblxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmdcbiAgZmllbGRUeXBlcz86IEZpZWxkVHlwZXNcbiAgZmlsdGVyT3B0aW9uczogRmlsdGVyT3B0aW9uc1xuICBvbkNoYW5nZT86IChlKSA9PiB2b2lkXG4gIHBhdGg6IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICByZWFkT25seT86IGJvb2xlYW5cbiAgcmVxdWlyZWQ/OiBib29sZWFuXG4gIHNlcnZlclVSTD86IHN0cmluZ1xuICBzaG93RXJyb3I/OiBib29sZWFuXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICB2YWx1ZT86IHN0cmluZ1xuICB3aWR0aD86IHN0cmluZ1xufVxuXG5jb25zdCBVcGxvYWRJbnB1dDogUmVhY3QuRkM8VXBsb2FkSW5wdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIEVycm9yLFxuICAgIExhYmVsLFxuICAgIGFwaSA9ICcvYXBpJyxcbiAgICBjbGFzc05hbWUsXG4gICAgY29sbGVjdGlvbixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgZmlsdGVyT3B0aW9ucyxcbiAgICBsYWJlbCxcbiAgICBvbkNoYW5nZSxcbiAgICBwYXRoLFxuICAgIHJlYWRPbmx5LFxuICAgIHJlbGF0aW9uVG8sXG4gICAgcmVxdWlyZWQsXG4gICAgc2VydmVyVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICAgc2hvd0Vycm9yLFxuICAgIHN0eWxlLFxuICAgIHZhbHVlLFxuICAgIHdpZHRoLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKVxuXG4gIGNvbnN0IEVycm9yQ29tcCA9IEVycm9yIHx8IERlZmF1bHRFcnJvclxuICBjb25zdCBMYWJlbENvbXAgPSBMYWJlbCB8fCBEZWZhdWx0TGFiZWxcblxuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IFttaXNzaW5nRmlsZSwgc2V0TWlzc2luZ0ZpbGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb2xsZWN0aW9uU2x1Z3NdID0gdXNlU3RhdGUoW2NvbGxlY3Rpb24/LnNsdWddKVxuICBjb25zdCBbZmlsdGVyT3B0aW9uc1Jlc3VsdCwgc2V0RmlsdGVyT3B0aW9uc1Jlc3VsdF0gPSB1c2VTdGF0ZTxGaWx0ZXJPcHRpb25zUmVzdWx0PigpXG5cbiAgY29uc3QgW0RvY3VtZW50RHJhd2VyLCBEb2N1bWVudERyYXdlclRvZ2dsZXIsIHsgY2xvc2VEcmF3ZXIgfV0gPSB1c2VEb2N1bWVudERyYXdlcih7XG4gICAgY29sbGVjdGlvblNsdWc6IGNvbGxlY3Rpb25TbHVnc1swXSxcbiAgfSlcblxuICBjb25zdCBbTGlzdERyYXdlciwgTGlzdERyYXdlclRvZ2dsZXIsIHsgY2xvc2VEcmF3ZXI6IGNsb3NlTGlzdERyYXdlciB9XSA9IHVzZUxpc3REcmF3ZXIoe1xuICAgIGNvbGxlY3Rpb25TbHVncyxcbiAgICBmaWx0ZXJPcHRpb25zOiBmaWx0ZXJPcHRpb25zUmVzdWx0LFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09ICcnKSB7XG4gICAgICBjb25zdCBmZXRjaEZpbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyVVJMfSR7YXBpfS8ke3JlbGF0aW9uVG99LyR7dmFsdWV9YCwge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgIHNldEZpbGUoanNvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRNaXNzaW5nRmlsZSh0cnVlKVxuICAgICAgICAgIHNldEZpbGUodW5kZWZpbmVkKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZldGNoRmlsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbGUodW5kZWZpbmVkKVxuICAgIH1cbiAgfSwgW3ZhbHVlLCByZWxhdGlvblRvLCBhcGksIHNlcnZlclVSTCwgaTE4bl0pXG5cbiAgY29uc3Qgb25TYXZlID0gdXNlQ2FsbGJhY2s8RG9jdW1lbnREcmF3ZXJQcm9wc1snb25TYXZlJ10+KFxuICAgIChhcmdzKSA9PiB7XG4gICAgICBzZXRNaXNzaW5nRmlsZShmYWxzZSlcbiAgICAgIG9uQ2hhbmdlKGFyZ3MuZG9jKVxuICAgICAgY2xvc2VEcmF3ZXIoKVxuICAgIH0sXG4gICAgW29uQ2hhbmdlLCBjbG9zZURyYXdlcl0sXG4gIClcblxuICBjb25zdCBvblNlbGVjdCA9IHVzZUNhbGxiYWNrPExpc3REcmF3ZXJQcm9wc1snb25TZWxlY3QnXT4oXG4gICAgKGFyZ3MpID0+IHtcbiAgICAgIHNldE1pc3NpbmdGaWxlKGZhbHNlKVxuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICBpZDogYXJncy5kb2NJRCxcbiAgICAgIH0pXG4gICAgICBjbG9zZUxpc3REcmF3ZXIoKVxuICAgIH0sXG4gICAgW29uQ2hhbmdlLCBjbG9zZUxpc3REcmF3ZXJdLFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgZmllbGRCYXNlQ2xhc3MsXG4gICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gLFxuICAgICAgICBzaG93RXJyb3IgJiYgJ2Vycm9yJyxcbiAgICAgICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gICAgICBdXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEdldEZpbHRlck9wdGlvbnNcbiAgICAgICAgey4uLntcbiAgICAgICAgICBmaWx0ZXJPcHRpb25zLFxuICAgICAgICAgIGZpbHRlck9wdGlvbnNSZXN1bHQsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICByZWxhdGlvblRvLFxuICAgICAgICAgIHNldEZpbHRlck9wdGlvbnNSZXN1bHQsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPEVycm9yQ29tcCBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9IHNob3dFcnJvcj17c2hvd0Vycm9yfSAvPlxuICAgICAgPExhYmVsQ29tcCBodG1sRm9yPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfSBsYWJlbD17bGFiZWx9IHJlcXVpcmVkPXtyZXF1aXJlZH0gLz5cbiAgICAgIHtjb2xsZWN0aW9uPy51cGxvYWQgJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAge2ZpbGUgJiYgIW1pc3NpbmdGaWxlICYmIChcbiAgICAgICAgICAgIDxGaWxlRGV0YWlsc1xuICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICBkb2M9e2ZpbGV9XG4gICAgICAgICAgICAgIGhhbmRsZVJlbW92ZT17XG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShudWxsKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7KCFmaWxlIHx8IG1pc3NpbmdGaWxlKSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYnV0dG9uc2B9PlxuICAgICAgICAgICAgICAgIDxEb2N1bWVudERyYXdlclRvZ2dsZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGVyYH0gZGlzYWJsZWQ9e3JlYWRPbmx5fT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIiBkaXNhYmxlZD17cmVhZE9ubHl9IGVsPVwiZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0KCd1cGxvYWROZXdMYWJlbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY29sbGVjdGlvbi5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRG9jdW1lbnREcmF3ZXJUb2dnbGVyPlxuICAgICAgICAgICAgICAgIDxMaXN0RHJhd2VyVG9nZ2xlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZXJgfSBkaXNhYmxlZD17cmVhZE9ubHl9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiIGRpc2FibGVkPXtyZWFkT25seX0gZWw9XCJkaXZcIj5cbiAgICAgICAgICAgICAgICAgICAge3QoJ2Nob29zZUZyb21FeGlzdGluZycpfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaXN0RHJhd2VyVG9nZ2xlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxGaWVsZERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gcGF0aD17cGF0aH0gdmFsdWU9e2ZpbGV9IC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgICAgeyFyZWFkT25seSAmJiA8RG9jdW1lbnREcmF3ZXIgb25TYXZlPXtvblNhdmV9IC8+fVxuICAgICAgeyFyZWFkT25seSAmJiA8TGlzdERyYXdlciBvblNlbGVjdD17b25TZWxlY3R9IC8+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZElucHV0XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiVXBsb2FkSW5wdXQiLCJwcm9wcyIsIkVycm9yIiwiTGFiZWwiLCJhcGkiLCJjbGFzc05hbWUiLCJjb2xsZWN0aW9uIiwiZGVzY3JpcHRpb24iLCJlcnJvck1lc3NhZ2UiLCJmaWx0ZXJPcHRpb25zIiwibGFiZWwiLCJvbkNoYW5nZSIsInBhdGgiLCJyZWFkT25seSIsInJlbGF0aW9uVG8iLCJyZXF1aXJlZCIsInNlcnZlclVSTCIsInNob3dFcnJvciIsInN0eWxlIiwidmFsdWUiLCJ3aWR0aCIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJFcnJvckNvbXAiLCJEZWZhdWx0RXJyb3IiLCJMYWJlbENvbXAiLCJEZWZhdWx0TGFiZWwiLCJmaWxlIiwic2V0RmlsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwibWlzc2luZ0ZpbGUiLCJzZXRNaXNzaW5nRmlsZSIsImNvbGxlY3Rpb25TbHVncyIsInNsdWciLCJmaWx0ZXJPcHRpb25zUmVzdWx0Iiwic2V0RmlsdGVyT3B0aW9uc1Jlc3VsdCIsIkRvY3VtZW50RHJhd2VyIiwiRG9jdW1lbnREcmF3ZXJUb2dnbGVyIiwiY2xvc2VEcmF3ZXIiLCJ1c2VEb2N1bWVudERyYXdlciIsImNvbGxlY3Rpb25TbHVnIiwiTGlzdERyYXdlciIsIkxpc3REcmF3ZXJUb2dnbGVyIiwiY2xvc2VMaXN0RHJhd2VyIiwidXNlTGlzdERyYXdlciIsInVzZUVmZmVjdCIsImZldGNoRmlsZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJsYW5ndWFnZSIsIm9rIiwianNvbiIsIm9uU2F2ZSIsInVzZUNhbGxiYWNrIiwiYXJncyIsImRvYyIsIm9uU2VsZWN0IiwiaWQiLCJkb2NJRCIsImRpdiIsImZpZWxkQmFzZUNsYXNzIiwicmVwbGFjZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiR2V0RmlsdGVyT3B0aW9ucyIsIm1lc3NhZ2UiLCJodG1sRm9yIiwidXBsb2FkIiwiUmVhY3QiLCJGcmFnbWVudCIsIkZpbGVEZXRhaWxzIiwiaGFuZGxlUmVtb3ZlIiwiZGlzYWJsZWQiLCJCdXR0b24iLCJidXR0b25TdHlsZSIsImVsIiwiZ2V0VHJhbnNsYXRpb24iLCJsYWJlbHMiLCJzaW5ndWxhciIsIkZpZWxkRGVzY3JpcHRpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkEyTUE7OztlQUFBOzs7K0RBM013RDs4QkFDekI7Z0NBVUE7K0RBQ1o7Z0NBQ2U7b0VBQ1Y7NEJBQ007a0NBQ0c7OERBQ1I7eUVBQ0k7OERBQ0o7d0JBQ007UUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQXdCbEIsTUFBTUMsY0FBMEMsQ0FBQ0M7SUFDL0MsTUFBTSxFQUNKQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsTUFBTSxNQUFNLEVBQ1pDLFNBQVMsRUFDVEMsVUFBVSxFQUNWQyxXQUFXLEVBQ1hDLFlBQVksRUFDWkMsYUFBYSxFQUNiQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsSUFBSSxFQUNKQyxRQUFRLEVBQ1JDLFVBQVUsRUFDVkMsUUFBUSxFQUNSQyxZQUFZLHVCQUF1QixFQUNuQ0MsU0FBUyxFQUNUQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsS0FBSyxFQUNOLEdBQUduQjtJ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