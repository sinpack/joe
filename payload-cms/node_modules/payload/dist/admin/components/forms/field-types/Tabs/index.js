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
const _types = require("../../../../../fields/config/types");
const _getTranslation = require("../../../../../utilities/getTranslation");
const _toKebabCase = /*#__PURE__*/ _interop_require_default(require("../../../../../utilities/toKebabCase"));
const _provider = require("../../../elements/Collapsible/provider");
const _ErrorPill = require("../../../elements/ErrorPill");
const _DocumentInfo = require("../../../utilities/DocumentInfo");
const _Preferences = require("../../../utilities/Preferences");
const _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
const _context = require("../../Form/context");
const _createNestedFieldPath = require("../../Form/createNestedFieldPath");
const _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../RenderFields"));
const _WatchChildErrors = require("../../WatchChildErrors");
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
const _shared = require("../shared");
require("./index.scss");
const _provider1 = require("./provider");
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
const baseClass = 'tabs-field';
const TabComponent = ({ isActive, parentPath, setIsActive, tab })=>{
    const { i18n } = (0, _reacti18next.useTranslation)();
    const [errorCount, setErrorCount] = (0, _react.useState)(undefined);
    const hasName = (0, _types.tabHasName)(tab);
    const submitted = (0, _context.useFormSubmitted)();
    const pathSegments = [];
    if (parentPath) pathSegments.push(parentPath);
    if (hasName) pathSegments.push(tab.name);
    const path = pathSegments.join('.');
    const tabHasErrors = submitted && errorCount > 0;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_WatchChildErrors.WatchChildErrors, {
        fieldSchema: hasName ? undefined : tab.fields,
        path: path,
        setErrorCount: setErrorCount
    }), /*#__PURE__*/ _react.default.createElement("button", {
        className: [
            `${baseClass}__tab-button`,
            tabHasErrors && `${baseClass}__tab-button--has-error`,
            isActive && `${baseClass}__tab-button--active`
        ].filter(Boolean).join(' '),
        onClick: setIsActive,
        type: "button"
    }, tab.label ? (0, _getTranslation.getTranslation)(tab.label, i18n) : hasName && tab.name, tabHasErrors && /*#__PURE__*/ _react.default.createElement(_ErrorPill.ErrorPill, {
        count: errorCount
    })));
};
const TabsField = (props)=>{
    const { admin: { className, readOnly }, fieldTypes, forceRender = false, indexPath, path, permissions, tabs } = props;
    const { getPreference, setPreference } = (0, _Preferences.usePreferences)();
    const { preferencesKey } = (0, _DocumentInfo.useDocumentInfo)();
    const { i18n } = (0, _reacti18next.useTranslation)();
    const { withinCollapsible } = (0, _provider.useCollapsible)();
    const [activeTabIndex, setActiveTabIndex] = (0, _react.useState)(0);
    const tabsPrefKey = `tabs-${indexPath}`;
    (0, _react.useEffect)(()=>{
        if (preferencesKey) {
            const getInitialPref = async ()=>{
                const existingPreferences = await getPreference(preferencesKey);
                const initialIndex = path ? existingPreferences?.fields?.[path]?.tabIndex : existingPreferences?.fields?.[tabsPrefKey]?.tabIndex;
                setActiveTabIndex(initialIndex || 0);
            };
            void getInitialPref();
        }
    }, [
        path,
        indexPath,
        getPreference,
        preferencesKey,
        tabsPrefKey
    ]);
    const handleTabChange = (0, _react.useCallback)(async (incomingTabIndex)=>{
        setActiveTabIndex(incomingTabIndex);
        const existingPreferences = await getPreference(preferencesKey);
        if (preferencesKey) {
            await setPreference(preferencesKey, {
                ...existingPreferences,
                ...path ? {
                    fields: {
                        ...existingPreferences?.fields || {},
                        [path]: {
                            ...existingPreferences?.fields?.[path],
                            tabIndex: incomingTabIndex
                        }
                    }
                } : {
                    fields: {
                        ...existingPreferences?.fields,
                        [tabsPrefKey]: {
                            ...existingPreferences?.fields?.[tabsPrefKey],
                            tabIndex: incomingTabIndex
                        }
                    }
                }
            });
        }
    }, [
        preferencesKey,
        getPreference,
        setPreference,
        path,
        tabsPrefKey
    ]);
    const activeTabConfig = tabs[activeTabIndex];
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            className,
            baseClass,
            withinCollapsible && `${baseClass}--within-collapsible`
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_provider1.TabsProvider, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__tabs-wrap`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__tabs`
    }, tabs.map((tab, tabIndex)=>{
        return /*#__PURE__*/ _react.default.createElement(TabComponent, {
            isActive: activeTabIndex === tabIndex,
            key: tabIndex,
            parentPath: path,
            setIsActive: ()=>handleTabChange(tabIndex),
            tab: tab
        });
    }))), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__content-wrap`
    }, activeTabConfig && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            `${baseClass}__tab`,
            activeTabConfig.label && `${baseClass}__tabConfigLabel-${(0, _toKebabCase.default)((0, _getTranslation.getTranslation)(activeTabConfig.label, i18n))}`
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        className: `${baseClass}__description`,
        description: activeTabConfig.description,
        marginPlacement: "bottom",
        path: path
    }), /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        fieldSchema: activeTabConfig.fields.map((field)=>{
            const pathSegments = [];
            if (path) pathSegments.push(path);
            if ((0, _types.tabHasName)(activeTabConfig)) pathSegments.push(activeTabConfig.name);
            return {
                ...field,
                path: (0, _createNestedFieldPath.createNestedFieldPath)(pathSegments.join('.'), field)
            };
        }),
        fieldTypes: fieldTypes,
        forceRender: forceRender,
        indexPath: indexPath,
        key: activeTabConfig.label ? (0, _getTranslation.getTranslation)(activeTabConfig.label, i18n) : activeTabConfig['name'],
        margins: "small",
        permissions: (0, _types.tabHasName)(activeTabConfig) && permissions?.[activeTabConfig.name] ? permissions[activeTabConfig.name].fields : permissions,
        readOnly: readOnly
    }))))));
};
const _default = (0, _withCondition.default)(TabsField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RhYnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IFRhYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERvY3VtZW50UHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9wcmVmZXJlbmNlcy90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyB0YWJIYXNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IHRvS2ViYWJDYXNlIGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy90b0tlYmFiQ2FzZSdcbmltcG9ydCB7IHVzZUNvbGxhcHNpYmxlIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQ29sbGFwc2libGUvcHJvdmlkZXInXG5pbXBvcnQgeyBFcnJvclBpbGwgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9FcnJvclBpbGwnXG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJ1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvUHJlZmVyZW5jZXMnXG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJ1xuaW1wb3J0IHsgdXNlRm9ybVN1Ym1pdHRlZCB9IGZyb20gJy4uLy4uL0Zvcm0vY29udGV4dCdcbmltcG9ydCB7IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aCB9IGZyb20gJy4uLy4uL0Zvcm0vY3JlYXRlTmVzdGVkRmllbGRQYXRoJ1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuLi8uLi9SZW5kZXJGaWVsZHMnXG5pbXBvcnQgeyBXYXRjaENoaWxkRXJyb3JzIH0gZnJvbSAnLi4vLi4vV2F0Y2hDaGlsZEVycm9ycydcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nXG5pbXBvcnQgeyBmaWVsZEJhc2VDbGFzcyB9IGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuaW1wb3J0IHsgVGFic1Byb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcidcblxuY29uc3QgYmFzZUNsYXNzID0gJ3RhYnMtZmllbGQnXG5cbnR5cGUgVGFiUHJvcHMgPSB7XG4gIGlzQWN0aXZlPzogYm9vbGVhblxuICBwYXJlbnRQYXRoOiBzdHJpbmdcbiAgc2V0SXNBY3RpdmU6ICgpID0+IHZvaWRcbiAgdGFiOiBUYWJcbn1cblxuY29uc3QgVGFiQ29tcG9uZW50OiBSZWFjdC5GQzxUYWJQcm9wcz4gPSAoeyBpc0FjdGl2ZSwgcGFyZW50UGF0aCwgc2V0SXNBY3RpdmUsIHRhYiB9KSA9PiB7XG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBbZXJyb3JDb3VudCwgc2V0RXJyb3JDb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IGhhc05hbWUgPSB0YWJIYXNOYW1lKHRhYilcbiAgY29uc3Qgc3VibWl0dGVkID0gdXNlRm9ybVN1Ym1pdHRlZCgpXG5cbiAgY29uc3QgcGF0aFNlZ21lbnRzID0gW11cbiAgaWYgKHBhcmVudFBhdGgpIHBhdGhTZWdtZW50cy5wdXNoKHBhcmVudFBhdGgpXG4gIGlmIChoYXNOYW1lKSBwYXRoU2VnbWVudHMucHVzaCh0YWIubmFtZSlcbiAgY29uc3QgcGF0aCA9IHBhdGhTZWdtZW50cy5qb2luKCcuJylcbiAgY29uc3QgdGFiSGFzRXJyb3JzID0gc3VibWl0dGVkICYmIGVycm9yQ291bnQgPiAwXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8V2F0Y2hDaGlsZEVycm9yc1xuICAgICAgICBmaWVsZFNjaGVtYT17aGFzTmFtZSA/IHVuZGVmaW5lZCA6IHRhYi5maWVsZHN9XG4gICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgIHNldEVycm9yQ291bnQ9e3NldEVycm9yQ291bnR9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICBgJHtiYXNlQ2xhc3N9X190YWItYnV0dG9uYCxcbiAgICAgICAgICB0YWJIYXNFcnJvcnMgJiYgYCR7YmFzZUNsYXNzfV9fdGFiLWJ1dHRvbi0taGFzLWVycm9yYCxcbiAgICAgICAgICBpc0FjdGl2ZSAmJiBgJHtiYXNlQ2xhc3N9X190YWItYnV0dG9uLS1hY3RpdmVgLFxuICAgICAgICBdXG4gICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgIC5qb2luKCcgJyl9XG4gICAgICAgIG9uQ2xpY2s9e3NldElzQWN0aXZlfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAge3RhYi5sYWJlbCA/IGdldFRyYW5zbGF0aW9uKHRhYi5sYWJlbCwgaTE4bikgOiBoYXNOYW1lICYmIHRhYi5uYW1lfVxuICAgICAgICB7dGFiSGFzRXJyb3JzICYmIDxFcnJvclBpbGwgY291bnQ9e2Vycm9yQ291bnR9IC8+fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCBUYWJzRmllbGQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYWRtaW46IHsgY2xhc3NOYW1lLCByZWFkT25seSB9LFxuICAgIGZpZWxkVHlwZXMsXG4gICAgZm9yY2VSZW5kZXIgPSBmYWxzZSxcbiAgICBpbmRleFBhdGgsXG4gICAgcGF0aCxcbiAgICBwZXJtaXNzaW9ucyxcbiAgICB0YWJzLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IGdldFByZWZlcmVuY2UsIHNldFByZWZlcmVuY2UgfSA9IHVzZVByZWZlcmVuY2VzKClcbiAgY29uc3QgeyBwcmVmZXJlbmNlc0tleSB9ID0gdXNlRG9jdW1lbnRJbmZvKClcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgeyB3aXRoaW5Db2xsYXBzaWJsZSB9ID0gdXNlQ29sbGFwc2libGUoKVxuICBjb25zdCBbYWN0aXZlVGFiSW5kZXgsIHNldEFjdGl2ZVRhYkluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgY29uc3QgdGFic1ByZWZLZXkgPSBgdGFicy0ke2luZGV4UGF0aH1gXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJlZmVyZW5jZXNLZXkpIHtcbiAgICAgIGNvbnN0IGdldEluaXRpYWxQcmVmID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBleGlzdGluZ1ByZWZlcmVuY2VzOiBEb2N1bWVudFByZWZlcmVuY2VzID0gYXdhaXQgZ2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlc0tleSlcbiAgICAgICAgY29uc3QgaW5pdGlhbEluZGV4ID0gcGF0aFxuICAgICAgICAgID8gZXhpc3RpbmdQcmVmZXJlbmNlcz8uZmllbGRzPy5bcGF0aF0/LnRhYkluZGV4XG4gICAgICAgICAgOiBleGlzdGluZ1ByZWZlcmVuY2VzPy5maWVsZHM/Llt0YWJzUHJlZktleV0/LnRhYkluZGV4XG4gICAgICAgIHNldEFjdGl2ZVRhYkluZGV4KGluaXRpYWxJbmRleCB8fCAwKVxuICAgICAgfVxuICAgICAgdm9pZCBnZXRJbml0aWFsUHJlZigpXG4gICAgfVxuICB9LCBbcGF0aCwgaW5kZXhQYXRoLCBnZXRQcmVmZXJlbmNlLCBwcmVmZXJlbmNlc0tleSwgdGFic1ByZWZLZXldKVxuXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChpbmNvbWluZ1RhYkluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHNldEFjdGl2ZVRhYkluZGV4KGluY29taW5nVGFiSW5kZXgpXG5cbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJlZmVyZW5jZXM6IERvY3VtZW50UHJlZmVyZW5jZXMgPSBhd2FpdCBnZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VzS2V5KVxuXG4gICAgICBpZiAocHJlZmVyZW5jZXNLZXkpIHtcbiAgICAgICAgYXdhaXQgc2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlc0tleSwge1xuICAgICAgICAgIC4uLmV4aXN0aW5nUHJlZmVyZW5jZXMsXG4gICAgICAgICAgLi4uKHBhdGhcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgLi4uKGV4aXN0aW5nUHJlZmVyZW5jZXM/LmZpZWxkcyB8fCB7fSksXG4gICAgICAgICAgICAgICAgICBbcGF0aF06IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcz8uZmllbGRzPy5bcGF0aF0sXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiBpbmNvbWluZ1RhYkluZGV4LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgIC4uLmV4aXN0aW5nUHJlZmVyZW5jZXM/LmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIFt0YWJzUHJlZktleV06IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcz8uZmllbGRzPy5bdGFic1ByZWZLZXldLFxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDogaW5jb21pbmdUYWJJbmRleCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBbcHJlZmVyZW5jZXNLZXksIGdldFByZWZlcmVuY2UsIHNldFByZWZlcmVuY2UsIHBhdGgsIHRhYnNQcmVmS2V5XSxcbiAgKVxuXG4gIGNvbnN0IGFjdGl2ZVRhYkNvbmZpZyA9IHRhYnNbYWN0aXZlVGFiSW5kZXhdXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgZmllbGRCYXNlQ2xhc3MsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICB3aXRoaW5Db2xsYXBzaWJsZSAmJiBgJHtiYXNlQ2xhc3N9LS13aXRoaW4tY29sbGFwc2libGVgLFxuICAgICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgPlxuICAgICAgPFRhYnNQcm92aWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RhYnMtd3JhcGB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190YWJzYH0+XG4gICAgICAgICAgICB7dGFicy5tYXAoKHRhYiwgdGFiSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGFiQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlVGFiSW5kZXggPT09IHRhYkluZGV4fVxuICAgICAgICAgICAgICAgICAga2V5PXt0YWJJbmRleH1cbiAgICAgICAgICAgICAgICAgIHBhcmVudFBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgICAgICBzZXRJc0FjdGl2ZT17KCkgPT4gaGFuZGxlVGFiQ2hhbmdlKHRhYkluZGV4KX1cbiAgICAgICAgICAgICAgICAgIHRhYj17dGFifVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbnRlbnQtd3JhcGB9PlxuICAgICAgICAgIHthY3RpdmVUYWJDb25maWcgJiYgKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgICBgJHtiYXNlQ2xhc3N9X190YWJgLFxuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiQ29uZmlnLmxhYmVsICYmXG4gICAgICAgICAgICAgICAgICAgIGAke2Jhc2VDbGFzc31fX3RhYkNvbmZpZ0xhYmVsLSR7dG9LZWJhYkNhc2UoXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0VHJhbnNsYXRpb24oYWN0aXZlVGFiQ29uZmlnLmxhYmVsLCBpMThuKSxcbiAgICAgICAgICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcgJyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmllbGREZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kZXNjcmlwdGlvbmB9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17YWN0aXZlVGFiQ29uZmlnLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgbWFyZ2luUGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgICAgICAgICAgICBmaWVsZFNjaGVtYT17YWN0aXZlVGFiQ29uZmlnLmZpZWxkcy5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IFtdXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGgpIHBhdGhTZWdtZW50cy5wdXNoKHBhdGgpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJIYXNOYW1lKGFjdGl2ZVRhYkNvbmZpZykpIHBhdGhTZWdtZW50cy5wdXNoKGFjdGl2ZVRhYkNvbmZpZy5uYW1lKVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3JlYXRlTmVzdGVkRmllbGRQYXRoKHBhdGhTZWdtZW50cy5qb2luKCcuJyksIGZpZWxkKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBmaWVsZFR5cGVzPXtmaWVsZFR5cGVzfVxuICAgICAgICAgICAgICAgICAgZm9yY2VSZW5kZXI9e2ZvcmNlUmVuZGVyfVxuICAgICAgICAgICAgICAgICAgaW5kZXhQYXRoPXtpbmRleFBhdGh9XG4gICAgICAgICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWJDb25maWcubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICA/IGdldFRyYW5zbGF0aW9uKGFjdGl2ZVRhYkNvbmZpZy5sYWJlbCwgaTE4bilcbiAgICAgICAgICAgICAgICAgICAgICA6IGFjdGl2ZVRhYkNvbmZpZ1snbmFtZSddXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBtYXJnaW5zPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM9e1xuICAgICAgICAgICAgICAgICAgICB0YWJIYXNOYW1lKGFjdGl2ZVRhYkNvbmZpZykgJiYgcGVybWlzc2lvbnM/LlthY3RpdmVUYWJDb25maWcubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICA/IHBlcm1pc3Npb25zW2FjdGl2ZVRhYkNvbmZpZy5uYW1lXS5maWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICA6IHBlcm1pc3Npb25zXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9UYWJzUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihUYWJzRmllbGQpXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiVGFiQ29tcG9uZW50IiwiaXNBY3RpdmUiLCJwYXJlbnRQYXRoIiwic2V0SXNBY3RpdmUiLCJ0YWIiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJlcnJvckNvdW50Iiwic2V0RXJyb3JDb3VudCIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwiaGFzTmFtZSIsInRhYkhhc05hbWUiLCJzdWJtaXR0ZWQiLCJ1c2VGb3JtU3VibWl0dGVkIiwicGF0aFNlZ21lbnRzIiwicHVzaCIsIm5hbWUiLCJwYXRoIiwiam9pbiIsInRhYkhhc0Vycm9ycyIsIlJlYWN0IiwiRnJhZ21lbnQiLCJXYXRjaENoaWxkRXJyb3JzIiwiZmllbGRTY2hlbWEiLCJmaWVsZHMiLCJidXR0b24iLCJjbGFzc05hbWUiLCJmaWx0ZXIiLCJCb29sZWFuIiwib25DbGljayIsInR5cGUiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwiRXJyb3JQaWxsIiwiY291bnQiLCJUYWJzRmllbGQiLCJwcm9wcyIsImFkbWluIiwicmVhZE9ubHkiLCJmaWVsZFR5cGVzIiwiZm9yY2VSZW5kZXIiLCJpbmRleFBhdGgiLCJwZXJtaXNzaW9ucyIsInRhYnMiLCJnZXRQcmVmZXJlbmNlIiwic2V0UHJlZmVyZW5jZSIsInVzZVByZWZlcmVuY2VzIiwicHJlZmVyZW5jZXNLZXkiLCJ1c2VEb2N1bWVudEluZm8iLCJ3aXRoaW5Db2xsYXBzaWJsZSIsInVzZUNvbGxhcHNpYmxlIiwiYWN0aXZlVGFiSW5kZXgiLCJzZXRBY3RpdmVUYWJJbmRleCIsInRhYnNQcmVmS2V5IiwidXNlRWZmZWN0IiwiZ2V0SW5pdGlhbFByZWYiLCJleGlzdGluZ1ByZWZlcmVuY2VzIiwiaW5pdGlhbEluZGV4IiwidGFiSW5kZXgiLCJoYW5kbGVUYWJDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImluY29taW5nVGFiSW5kZXgiLCJhY3RpdmVUYWJDb25maWciLCJkaXYiLCJmaWVsZEJhc2VDbGFzcyIsIlRhYnNQcm92aWRlciIsIm1hcCIsImtleSIsInRvS2ViYWJDYXNlIiwiRmllbGREZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwibWFyZ2luUGxhY2VtZW50IiwiUmVuZGVyRmllbGRzIiwiZmllbGQiLCJjcmVhdGVOZXN0ZWRGaWVsZFBhdGgiLCJtYXJnaW5zIiwid2l0aENvbmRpdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQThOQTs7O2VBQUE7OzsrREE5TndEOzhCQUN6Qjt1QkFNSjtnQ0FD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