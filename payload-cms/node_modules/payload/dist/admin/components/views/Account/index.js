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
const _reactrouterdom = require("react-router-dom");
const _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../hooks/usePayloadAPI"));
const _StepNav = require("../../elements/StepNav");
const _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("../../forms/Form/buildStateFromSchema"));
const _fieldtypes = require("../../forms/field-types");
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _Locale = require("../../utilities/Locale");
const _Preferences = require("../../utilities/Preferences");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
const _Default = /*#__PURE__*/ _interop_require_default(require("./Default"));
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
const AccountView = ()=>{
    const { state: locationState } = (0, _reactrouterdom.useLocation)();
    const { code: locale } = (0, _Locale.useLocale)();
    const { setStepNav } = (0, _StepNav.useStepNav)();
    const { user } = (0, _Auth.useAuth)();
    const userRef = (0, _react.useRef)(user);
    const [internalState, setInternalState] = (0, _react.useState)();
    const { id, slug, collection, docPermissions, getDocPermissions, getDocPreferences, preferencesKey } = (0, _DocumentInfo.useDocumentInfo)();
    const { getPreference } = (0, _Preferences.usePreferences)();
    const config = (0, _Config.useConfig)();
    const { admin: { components: { views: { Account: CustomAccountComponent } = {} } = {} }, routes: { api }, serverURL } = (0, _Config.useConfig)();
    const { t } = (0, _reacti18next.useTranslation)('authentication');
    const { fields } = collection || {};
    const [{ data, isLoading: isLoadingData }] = (0, _usePayloadAPI.default)(`${serverURL}${api}/${slug}/${id}`, {
        initialData: null,
        initialParams: {
            depth: 0,
            'fallback-locale': 'null'
        }
    });
    const hasSavePermission = docPermissions?.update?.permission;
    const dataToRender = locationState?.data || data;
    const apiURL = `${serverURL}${api}/${slug}/${data?.id}?locale=${locale}`;
    const action = `${serverURL}${api}/${slug}/${data?.id}?locale=${locale}`;
    const onSave = _react.default.useCallback(async (json)=>{
        await getDocPermissions();
        const preferences = await getDocPreferences();
        const state = await (0, _buildStateFromSchema.default)({
            id,
            config,
            data: json.doc,
            fieldSchema: collection?.fields,
            locale,
            operation: 'update',
            preferences,
            t,
            user
        });
        setInternalState(state);
    }, [
        collection,
        user,
        id,
        t,
        locale,
        getDocPermissions,
        getDocPreferences,
        config
    ]);
    (0, _react.useEffect)(()=>{
        const nav = [
            {
                label: t('account')
            }
        ];
        setStepNav(nav);
    }, [
        setStepNav,
        t
    ]);
    (0, _react.useEffect)(()=>{
        const awaitInternalState = async ()=>{
            const preferences = await getDocPreferences();
            const state = await (0, _buildStateFromSchema.default)({
                id,
                config,
                data: dataToRender,
                fieldSchema: fields,
                locale,
                operation: 'update',
                preferences,
                t,
                user: userRef.current
            });
            if (preferencesKey) {
                await getPreference(preferencesKey);
            }
            setInternalState(state);
        };
        if (dataToRender) awaitInternalState();
    }, [
        dataToRender,
        fields,
        id,
        locale,
        preferencesKey,
        getPreference,
        t,
        getDocPreferences,
        config
    ]);
    const isLoading = !internalState || !docPermissions || isLoadingData;
    const componentProps = {
        id: id.toString(),
        action,
        apiURL,
        collection,
        data,
        fieldTypes: _fieldtypes.fieldTypes,
        hasSavePermission,
        initialState: internalState,
        isLoading,
        onSave,
        permissions: docPermissions,
        updatedAt: data?.updatedAt,
        user
    };
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: typeof CustomAccountComponent === 'function' ? CustomAccountComponent : undefined,
        DefaultComponent: _Default.default,
        componentProps: componentProps
    });
};
const _default = AccountView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0FjY291bnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2F1dGgnXG5pbXBvcnQgdHlwZSB7IEZpZWxkcyB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERlZmF1bHRBY2NvdW50Vmlld1Byb3BzIH0gZnJvbSAnLi9EZWZhdWx0J1xuXG5pbXBvcnQgdXNlUGF5bG9hZEFQSSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VQYXlsb2FkQVBJJ1xuaW1wb3J0IHsgdXNlU3RlcE5hdiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL1N0ZXBOYXYnXG5pbXBvcnQgYnVpbGRTdGF0ZUZyb21TY2hlbWEgZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9idWlsZFN0YXRlRnJvbVNjaGVtYSdcbmltcG9ydCB7IGZpZWxkVHlwZXMgfSBmcm9tICcuLi8uLi9mb3Jtcy9maWVsZC10eXBlcydcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSdcbmltcG9ydCB7IHVzZVByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1ByZWZlcmVuY2VzJ1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50J1xuaW1wb3J0IERlZmF1bHRBY2NvdW50IGZyb20gJy4vRGVmYXVsdCdcblxuY29uc3QgQWNjb3VudFZpZXc6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlOiBsb2NhdGlvblN0YXRlIH0gPSB1c2VMb2NhdGlvbjx7IGRhdGE6IHVua25vd24gfT4oKVxuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKClcbiAgY29uc3QgeyBzZXRTdGVwTmF2IH0gPSB1c2VTdGVwTmF2KClcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKClcbiAgY29uc3QgdXNlclJlZiA9IHVzZVJlZih1c2VyKVxuICBjb25zdCBbaW50ZXJuYWxTdGF0ZSwgc2V0SW50ZXJuYWxTdGF0ZV0gPSB1c2VTdGF0ZTxGaWVsZHM+KClcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHNsdWcsXG4gICAgY29sbGVjdGlvbixcbiAgICBkb2NQZXJtaXNzaW9ucyxcbiAgICBnZXREb2NQZXJtaXNzaW9ucyxcbiAgICBnZXREb2NQcmVmZXJlbmNlcyxcbiAgICBwcmVmZXJlbmNlc0tleSxcbiAgfSA9IHVzZURvY3VtZW50SW5mbygpXG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKVxuXG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpXG5cbiAgY29uc3Qge1xuICAgIGFkbWluOiB7IGNvbXBvbmVudHM6IHsgdmlld3M6IHsgQWNjb3VudDogQ3VzdG9tQWNjb3VudENvbXBvbmVudCB9ID0ge30gfSA9IHt9IH0sXG4gICAgcm91dGVzOiB7IGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IHVzZUNvbmZpZygpXG5cbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignYXV0aGVudGljYXRpb24nKVxuXG4gIGNvbnN0IHsgZmllbGRzIH0gPSBjb2xsZWN0aW9uIHx8IHt9XG5cbiAgY29uc3QgW3sgZGF0YSwgaXNMb2FkaW5nOiBpc0xvYWRpbmdEYXRhIH1dID0gdXNlUGF5bG9hZEFQSShgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vJHtpZH1gLCB7XG4gICAgaW5pdGlhbERhdGE6IG51bGwsXG4gICAgaW5pdGlhbFBhcmFtczoge1xuICAgICAgZGVwdGg6IDAsXG4gICAgICAnZmFsbGJhY2stbG9jYWxlJzogJ251bGwnLFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgaGFzU2F2ZVBlcm1pc3Npb24gPSBkb2NQZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uXG4gIGNvbnN0IGRhdGFUb1JlbmRlciA9IGxvY2F0aW9uU3RhdGU/LmRhdGEgfHwgZGF0YVxuICBjb25zdCBhcGlVUkwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vJHtkYXRhPy5pZH0/bG9jYWxlPSR7bG9jYWxlfWBcblxuICBjb25zdCBhY3Rpb24gPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vJHtkYXRhPy5pZH0/bG9jYWxlPSR7bG9jYWxlfWBcblxuICBjb25zdCBvblNhdmUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICBhc3luYyAoanNvbjogYW55KSA9PiB7XG4gICAgICBhd2FpdCBnZXREb2NQZXJtaXNzaW9ucygpXG5cbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKVxuXG4gICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgZGF0YToganNvbi5kb2MsXG4gICAgICAgIGZpZWxkU2NoZW1hOiBjb2xsZWN0aW9uPy5maWVsZHMsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgIHQsXG4gICAgICAgIHVzZXIsXG4gICAgICB9KVxuICAgICAgc2V0SW50ZXJuYWxTdGF0ZShzdGF0ZSlcbiAgICB9LFxuICAgIFtjb2xsZWN0aW9uLCB1c2VyLCBpZCwgdCwgbG9jYWxlLCBnZXREb2NQZXJtaXNzaW9ucywgZ2V0RG9jUHJlZmVyZW5jZXMsIGNvbmZpZ10sXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHQoJ2FjY291bnQnKSxcbiAgICAgIH0sXG4gICAgXVxuXG4gICAgc2V0U3RlcE5hdihuYXYpXG4gIH0sIFtzZXRTdGVwTmF2LCB0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF3YWl0SW50ZXJuYWxTdGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKVxuXG4gICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgZGF0YTogZGF0YVRvUmVuZGVyLFxuICAgICAgICBmaWVsZFNjaGVtYTogZmllbGRzLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICB0LFxuICAgICAgICB1c2VyOiB1c2VyUmVmLmN1cnJlbnQsXG4gICAgICB9KVxuXG4gICAgICBpZiAocHJlZmVyZW5jZXNLZXkpIHtcbiAgICAgICAgYXdhaXQgZ2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlc0tleSlcbiAgICAgIH1cblxuICAgICAgc2V0SW50ZXJuYWxTdGF0ZShzdGF0ZSlcbiAgICB9XG5cbiAgICBpZiAoZGF0YVRvUmVuZGVyKSBhd2FpdEludGVybmFsU3RhdGUoKVxuICB9LCBbXG4gICAgZGF0YVRvUmVuZGVyLFxuICAgIGZpZWxkcyxcbiAgICBpZCxcbiAgICBsb2NhbGUsXG4gICAgcHJlZmVyZW5jZXNLZXksXG4gICAgZ2V0UHJlZmVyZW5jZSxcbiAgICB0LFxuICAgIGdldERvY1ByZWZlcmVuY2VzLFxuICAgIGNvbmZpZyxcbiAgXSlcblxuICBjb25zdCBpc0xvYWRpbmcgPSAhaW50ZXJuYWxTdGF0ZSB8fCAhZG9jUGVybWlzc2lvbnMgfHwgaXNMb2FkaW5nRGF0YVxuXG4gIGNvbnN0IGNvbXBvbmVudFByb3BzOiBEZWZhdWx0QWNjb3VudFZpZXdQcm9wcyA9IHtcbiAgICBpZDogaWQudG9TdHJpbmcoKSxcbiAgICBhY3Rpb24sXG4gICAgYXBpVVJMLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgZGF0YSxcbiAgICBmaWVsZFR5cGVzLFxuICAgIGhhc1NhdmVQZXJtaXNzaW9uLFxuICAgIGluaXRpYWxTdGF0ZTogaW50ZXJuYWxTdGF0ZSxcbiAgICBpc0xvYWRpbmcsXG4gICAgb25TYXZlLFxuICAgIHBlcm1pc3Npb25zOiBkb2NQZXJtaXNzaW9ucyBhcyBDb2xsZWN0aW9uUGVybWlzc2lvbixcbiAgICB1cGRhdGVkQXQ6IGRhdGE/LnVwZGF0ZWRBdCxcbiAgICB1c2VyLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBDdXN0b21Db21wb25lbnQ9e1xuICAgICAgICB0eXBlb2YgQ3VzdG9tQWNjb3VudENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyA/IEN1c3RvbUFjY291bnRDb21wb25lbnQgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRBY2NvdW50fVxuICAgICAgY29tcG9uZW50UHJvcHM9e2NvbXBvbmVudFByb3BzfVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudFZpZXdcbiJdLCJuYW1lcyI6WyJBY2NvdW50VmlldyIsInN0YXRlIiwibG9jYXRpb25TdGF0ZSIsInVzZUxvY2F0aW9uIiwiY29kZSIsImxvY2FsZSIsInVzZUxvY2FsZSIsInNldFN0ZXBOYXYiLCJ1c2VTdGVwTmF2IiwidXNlciIsInVzZUF1dGgiLCJ1c2VyUmVmIiwidXNlUmVmIiwiaW50ZXJuYWxTdGF0ZSIsInNldEludGVybmFsU3RhdGUiLCJ1c2VTdGF0ZSIsImlkIiwic2x1ZyIsImNvbGxlY3Rpb24iLCJkb2NQZXJtaXNzaW9ucyIsImdldERvY1Blcm1pc3Npb25zIiwiZ2V0RG9jUHJlZmVyZW5jZXMiLCJwcmVmZXJlbmNlc0tleSIsInVzZURvY3VtZW50SW5mbyIsImdldFByZWZlcmVuY2UiLCJ1c2VQcmVmZXJlbmNlcyIsImNvbmZpZyIsInVzZUNvbmZpZyIsImFkbWluIiwiY29tcG9uZW50cyIsInZpZXdzIiwiQWNjb3VudCIsIkN1c3RvbUFjY291bnRDb21wb25lbnQiLCJyb3V0ZXMiLCJhcGkiLCJzZXJ2ZXJVUkwiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJmaWVsZHMiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nRGF0YSIsInVzZVBheWxvYWRBUEkiLCJpbml0aWFsRGF0YSIsImluaXRpYWxQYXJhbXMiLCJkZXB0aCIsImhhc1NhdmVQZXJtaXNzaW9uIiwidXBkYXRlIiwicGVybWlzc2lvbiIsImRhdGFUb1JlbmRlciIsImFwaVVSTCIsImFjdGlvbiIsIm9uU2F2ZSIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJqc29uIiwicHJlZmVyZW5jZXMiLCJidWlsZFN0YXRlRnJvbVNjaGVtYSIsImRvYyIsImZpZWxkU2NoZW1hIiwib3BlcmF0aW9uIiwidXNlRWZmZWN0IiwibmF2IiwibGFiZWwiLCJhd2FpdEludGVybmFsU3RhdGUiLCJjdXJyZW50IiwiY29tcG9uZW50UHJvcHMiLCJ0b1N0cmluZyIsImZpZWxkVHlwZXMiLCJpbml0aWFsU3RhdGUiLCJwZXJtaXNzaW9ucyIsInVwZGF0ZWRBdCIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkN1c3RvbUNvbXBvbmVudCIsInVuZGVmaW5lZCIsIkRlZmF1bHRDb21wb25lbnQiLCJEZWZhdWx0QWNjb3VudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBaUtBOzs7ZUFBQTs7OytEQWpLbUQ7OEJBQ3BCO2dDQUNIO3NFQU1GO3lCQUNDOzZFQUNNOzRCQUNOO3NCQUNIO3dCQUNFOzhCQUNNO3dCQUNOOzZCQUNLOzhFQUNHO2dFQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixNQUFNQSxjQUF3QjtJQUM1QixNQUFNLEVBQUVDLE9BQU9DLGFBQWEsRUFBRSxHQUFHQyxJQUFBQSwyQkFBVztJQUM1QyxNQUFNLEVBQUVDLE1BQU1DLE1BQU0sRUFBRSxHQUFHQyxJQUFBQSxpQkFBUztJQUNsQyxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxJQUFBQSxtQkFBVTtJQUNqQyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxJQUFBQSxhQUFPO0lBQ3hCLE1BQU1DLFVBQVVDLElBQUFBLGFBQU0sRUFBQ0g7SUFDdkIsTUFBTSxDQUFDSSxlQUFlQyxpQkFBaUIsR0FBR0MsSUFBQUEsZUFBUTtJQUNsRCxNQUFNLEVBQ0pDLEVBQUUsRUFDRkMsSUFBSSxFQUNKQyxVQUFVLEVBQ1ZDLGNBQWMsRUFDZEMsaUJBQWlCLEVBQ2pCQyxpQkFBaUIsRUFDakJDLGNBQWMsRUFDZixHQUFHQyxJQUFBQSw2QkFBZTtJQUNuQixNQUFNLEVBQUVDLGFBQWEsRUFBRSxHQUFHQyxJQUFBQSwyQkFBYztJQUV4QyxNQUFNQyxTQUFTQyxJ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