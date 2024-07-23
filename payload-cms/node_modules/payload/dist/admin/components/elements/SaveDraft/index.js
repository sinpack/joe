"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SaveDraft", {
    enumerable: true,
    get: function() {
        return SaveDraft;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _useHotkey = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useHotkey"));
const _context = require("../../forms/Form/context");
const _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
const _Config = require("../../utilities/Config");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _EditDepth = require("../../utilities/EditDepth");
const _Locale = require("../../utilities/Locale");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
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
const baseClass = 'save-draft';
const DefaultSaveDraftButton = ({ disabled, label, saveDraft })=>{
    const ref = (0, _react.useRef)(null);
    const editDepth = (0, _EditDepth.useEditDepth)();
    (0, _useHotkey.default)({
        cmdCtrlKey: true,
        editDepth,
        keyCodes: [
            's'
        ]
    }, (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (disabled) {
            return;
        }
        if (ref?.current) {
            ref.current.click();
        }
    });
    return /*#__PURE__*/ _react.default.createElement(_Submit.default, {
        buttonId: "action-save-draft",
        buttonStyle: "secondary",
        className: baseClass,
        disabled: disabled,
        onClick: saveDraft,
        ref: ref,
        size: "small",
        type: "button"
    }, label);
};
const SaveDraft = ({ CustomComponent })=>{
    const { routes: { api }, serverURL } = (0, _Config.useConfig)();
    const { submit } = (0, _context.useForm)();
    const { id, collection, global } = (0, _DocumentInfo.useDocumentInfo)();
    const modified = (0, _context.useFormModified)();
    const { code: locale } = (0, _Locale.useLocale)();
    const { t } = (0, _reacti18next.useTranslation)('version');
    const canSaveDraft = modified;
    const validateDrafts = collection?.versions.drafts && collection.versions?.drafts?.validate || global?.versions.drafts && global.versions?.drafts?.validate;
    const saveDraft = (0, _react.useCallback)(async ()=>{
        const search = `?locale=${locale}&depth=0&fallback-locale=null&draft=true`;
        let action;
        let method = 'POST';
        if (collection) {
            action = `${serverURL}${api}/${collection.slug}${id ? `/${id}` : ''}${search}`;
            if (id) method = 'PATCH';
        }
        if (global) {
            action = `${serverURL}${api}/globals/${global.slug}${search}`;
        }
        await submit({
            action,
            method,
            overrides: {
                _status: 'draft'
            },
            skipValidation: !validateDrafts
        });
    }, [
        submit,
        collection,
        global,
        serverURL,
        api,
        locale,
        id,
        validateDrafts
    ]);
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomComponent,
        DefaultComponent: DefaultSaveDraftButton,
        componentProps: {
            DefaultButton: DefaultSaveDraftButton,
            disabled: !canSaveDraft,
            label: t('saveDraft'),
            saveDraft
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NhdmVEcmFmdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHVzZUhvdGtleSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VIb3RrZXknXG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtTW9kaWZpZWQgfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnXG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbydcbmltcG9ydCB7IHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9jYWxlJ1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50J1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnc2F2ZS1kcmFmdCdcblxuZXhwb3J0IHR5cGUgQ3VzdG9tU2F2ZURyYWZ0QnV0dG9uUHJvcHMgPSBSZWFjdC5Db21wb25lbnRUeXBlPFxuICBEZWZhdWx0U2F2ZURyYWZ0QnV0dG9uUHJvcHMgJiB7XG4gICAgRGVmYXVsdEJ1dHRvbjogUmVhY3QuQ29tcG9uZW50VHlwZTxEZWZhdWx0U2F2ZURyYWZ0QnV0dG9uUHJvcHM+XG4gIH1cbj5cbmV4cG9ydCB0eXBlIERlZmF1bHRTYXZlRHJhZnRCdXR0b25Qcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGJvb2xlYW5cbiAgbGFiZWw6IHN0cmluZ1xuICBzYXZlRHJhZnQ6ICgpID0+IHZvaWRcbn1cbmNvbnN0IERlZmF1bHRTYXZlRHJhZnRCdXR0b246IFJlYWN0LkZDPERlZmF1bHRTYXZlRHJhZnRCdXR0b25Qcm9wcz4gPSAoe1xuICBkaXNhYmxlZCxcbiAgbGFiZWwsXG4gIHNhdmVEcmFmdCxcbn0pID0+IHtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsKVxuICBjb25zdCBlZGl0RGVwdGggPSB1c2VFZGl0RGVwdGgoKVxuXG4gIHVzZUhvdGtleSh7IGNtZEN0cmxLZXk6IHRydWUsIGVkaXREZXB0aCwga2V5Q29kZXM6IFsncyddIH0sIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocmVmPy5jdXJyZW50KSB7XG4gICAgICByZWYuY3VycmVudC5jbGljaygpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1TdWJtaXRcbiAgICAgIGJ1dHRvbklkPVwiYWN0aW9uLXNhdmUtZHJhZnRcIlxuICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBvbkNsaWNrPXtzYXZlRHJhZnR9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9Gb3JtU3VibWl0PlxuICApXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIEN1c3RvbUNvbXBvbmVudD86IEN1c3RvbVNhdmVEcmFmdEJ1dHRvblByb3BzXG59XG5leHBvcnQgY29uc3QgU2F2ZURyYWZ0OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBDdXN0b21Db21wb25lbnQgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgcm91dGVzOiB7IGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IHsgc3VibWl0IH0gPSB1c2VGb3JtKClcbiAgY29uc3QgeyBpZCwgY29sbGVjdGlvbiwgZ2xvYmFsIH0gPSB1c2VEb2N1bWVudEluZm8oKVxuICBjb25zdCBtb2RpZmllZCA9IHVzZUZvcm1Nb2RpZmllZCgpXG5cbiAgY29uc3QgeyBjb2RlOiBsb2NhbGUgfSA9IHVzZUxvY2FsZSgpXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKVxuXG4gIGNvbnN0IGNhblNhdmVEcmFmdCA9IG1vZGlmaWVkXG5cbiAgY29uc3QgdmFsaWRhdGVEcmFmdHMgPVxuICAgIChjb2xsZWN0aW9uPy52ZXJzaW9ucy5kcmFmdHMgJiYgY29sbGVjdGlvbi52ZXJzaW9ucz8uZHJhZnRzPy52YWxpZGF0ZSkgfHxcbiAgICAoZ2xvYmFsPy52ZXJzaW9ucy5kcmFmdHMgJiYgZ2xvYmFsLnZlcnNpb25zPy5kcmFmdHM/LnZhbGlkYXRlKVxuXG4gIGNvbnN0IHNhdmVEcmFmdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2ggPSBgP2xvY2FsZT0ke2xvY2FsZX0mZGVwdGg9MCZmYWxsYmFjay1sb2NhbGU9bnVsbCZkcmFmdD10cnVlYFxuICAgIGxldCBhY3Rpb25cbiAgICBsZXQgbWV0aG9kID0gJ1BPU1QnXG5cbiAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgYWN0aW9uID0gYCR7c2VydmVyVVJMfSR7YXBpfS8ke2NvbGxlY3Rpb24uc2x1Z30ke2lkID8gYC8ke2lkfWAgOiAnJ30ke3NlYXJjaH1gXG4gICAgICBpZiAoaWQpIG1ldGhvZCA9ICdQQVRDSCdcbiAgICB9XG5cbiAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICBhY3Rpb24gPSBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z30ke3NlYXJjaH1gXG4gICAgfVxuXG4gICAgYXdhaXQgc3VibWl0KHtcbiAgICAgIGFjdGlvbixcbiAgICAgIG1ldGhvZCxcbiAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICBfc3RhdHVzOiAnZHJhZnQnLFxuICAgICAgfSxcbiAgICAgIHNraXBWYWxpZGF0aW9uOiAhdmFsaWRhdGVEcmFmdHMsXG4gICAgfSlcbiAgfSwgW3N1Ym1pdCwgY29sbGVjdGlvbiwgZ2xvYmFsLCBzZXJ2ZXJVUkwsIGFwaSwgbG9jYWxlLCBpZCwgdmFsaWRhdGVEcmFmdHNdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21Db21wb25lbnR9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0U2F2ZURyYWZ0QnV0dG9ufVxuICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgRGVmYXVsdEJ1dHRvbjogRGVmYXVsdFNhdmVEcmFmdEJ1dHRvbixcbiAgICAgICAgZGlzYWJsZWQ6ICFjYW5TYXZlRHJhZnQsXG4gICAgICAgIGxhYmVsOiB0KCdzYXZlRHJhZnQnKSxcbiAgICAgICAgc2F2ZURyYWZ0LFxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG4iXSwibmFtZXMiOlsiU2F2ZURyYWZ0IiwiYmFzZUNsYXNzIiwiRGVmYXVsdFNhdmVEcmFmdEJ1dHRvbiIsImRpc2FibGVkIiwibGFiZWwiLCJzYXZlRHJhZnQiLCJyZWYiLCJ1c2VSZWYiLCJlZGl0RGVwdGgiLCJ1c2VFZGl0RGVwdGgiLCJ1c2VIb3RrZXkiLCJjbWRDdHJsS2V5Iiwia2V5Q29kZXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwiY2xpY2siLCJGb3JtU3VibWl0IiwiYnV0dG9uSWQiLCJidXR0b25TdHlsZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzaXplIiwidHlwZSIsIkN1c3RvbUNvbXBvbmVudCIsInJvdXRlcyIsImFwaSIsInNlcnZlclVSTCIsInVzZUNvbmZpZyIsInN1Ym1pdCIsInVzZUZvcm0iLCJpZCIsImNvbGxlY3Rpb24iLCJnbG9iYWwiLCJ1c2VEb2N1bWVudEluZm8iLCJtb2RpZmllZCIsInVzZUZvcm1Nb2RpZmllZCIsImNvZGUiLCJsb2NhbGUiLCJ1c2VMb2NhbGUiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJjYW5TYXZlRHJhZnQiLCJ2YWxpZGF0ZURyYWZ0cyIsInZlcnNpb25zIiwiZHJhZnRzIiwidmFsaWRhdGUiLCJ1c2VDYWxsYmFjayIsInNlYXJjaCIsImFjdGlvbiIsIm1ldGhvZCIsInNsdWciLCJvdmVycmlkZXMiLCJfc3RhdHVzIiwic2tpcFZhbGlkYXRpb24iLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJEZWZhdWx0Q29tcG9uZW50IiwiY29tcG9uZW50UHJvcHMiLCJEZWZhdWx0QnV0dG9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZ0VhQTs7O2VBQUFBOzs7K0RBaEU4Qjs4QkFDWjtrRUFFVDt5QkFDbUI7K0RBQ2xCO3dCQUNHOzhCQUNNOzJCQUNIO3dCQUNIOzhFQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxNQUFNQyxZQUFZO0FBWWxCLE1BQU1DLHlCQUFnRSxDQUFDLEVBQ3JFQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsU0FBUyxFQUNWO0lBQ0MsTUFBTUMsTUFBTUMsSUFBQUEsYUFBTSxFQUFvQjtJQUN0QyxNQUFNQyxZQUFZQyxJ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