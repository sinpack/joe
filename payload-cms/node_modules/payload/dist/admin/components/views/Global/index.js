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
const _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("../../forms/Form/buildStateFromSchema"));
const _fieldtypes = require("../../forms/field-types");
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _DocumentEvents = require("../../utilities/DocumentEvents");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _EditDepth = require("../../utilities/EditDepth");
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
const GlobalView = (props)=>{
    const { global } = props;
    const { state: locationState } = (0, _reactrouterdom.useLocation)();
    const { code: locale } = (0, _Locale.useLocale)();
    const { permissions, user } = (0, _Auth.useAuth)();
    const [initialState, setInitialState] = (0, _react.useState)();
    const [updatedAt, setUpdatedAt] = (0, _react.useState)();
    const { action, docPermissions, getDocPermissions, getDocPreferences, getVersions, preferencesKey } = (0, _DocumentInfo.useDocumentInfo)();
    const { getPreference } = (0, _Preferences.usePreferences)();
    const { t } = (0, _reacti18next.useTranslation)();
    const config = (0, _Config.useConfig)();
    const { routes: { api }, serverURL } = (0, _Config.useConfig)();
    const { reportUpdate } = (0, _DocumentEvents.useDocumentEvents)();
    const { slug, admin: { components: { views: { Edit: Edit } = {} } = {} } = {}, fields } = global;
    const onSave = (0, _react.useCallback)(async (json)=>{
        reportUpdate({
            entitySlug: global.slug,
            updatedAt: json?.result?.updatedAt || new Date().toISOString()
        });
        void getVersions();
        void getDocPermissions();
        setUpdatedAt(json?.result?.updatedAt);
        const preferences = await getDocPreferences();
        const state = await (0, _buildStateFromSchema.default)({
            config,
            data: json.result,
            fieldSchema: fields,
            locale,
            operation: 'update',
            preferences,
            t,
            user
        });
        setInitialState(state);
    }, [
        getVersions,
        fields,
        user,
        locale,
        t,
        getDocPermissions,
        getDocPreferences,
        config,
        global,
        reportUpdate
    ]);
    const [{ data, isLoading: isLoadingData }] = (0, _usePayloadAPI.default)(`${serverURL}${api}/globals/${slug}`, {
        initialData: null,
        initialParams: {
            depth: 0,
            draft: 'true',
            'fallback-locale': 'null'
        }
    });
    const dataToRender = locationState?.data || data;
    (0, _react.useEffect)(()=>{
        const awaitInitialState = async ()=>{
            const preferences = await getDocPreferences();
            const state = await (0, _buildStateFromSchema.default)({
                config,
                data: dataToRender,
                fieldSchema: fields,
                locale,
                operation: 'update',
                preferences,
                t,
                user
            });
            if (preferencesKey) {
                await getPreference(preferencesKey);
            }
            setInitialState(state);
        };
        if (dataToRender) void awaitInitialState();
    }, [
        dataToRender,
        fields,
        user,
        locale,
        getPreference,
        preferencesKey,
        t,
        getDocPreferences,
        config
    ]);
    const isLoading = !initialState || !docPermissions || isLoadingData;
    const componentProps = {
        action,
        apiURL: `${serverURL}${api}/globals/${slug}?locale=${locale}${global.versions?.drafts ? '&draft=true' : ''}`,
        canAccessAdmin: permissions?.canAccessAdmin,
        data: dataToRender,
        fieldTypes: _fieldtypes.fieldTypes,
        global,
        initialState,
        isLoading,
        onSave,
        permissions: docPermissions,
        updatedAt: updatedAt || dataToRender?.updatedAt,
        user
    };
    return /*#__PURE__*/ _react.default.createElement(_EditDepth.EditDepthContext.Provider, {
        value: 1
    }, /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: typeof Edit === 'function' ? Edit : undefined,
        DefaultComponent: _Default.default,
        componentProps: componentProps
    }));
};
const _default = GlobalView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0dsb2JhbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB0eXBlIHsgRmllbGRzIH0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS90eXBlcydcbmltcG9ydCB0eXBlIHsgRGVmYXVsdEdsb2JhbFZpZXdQcm9wcyB9IGZyb20gJy4vRGVmYXVsdCdcbmltcG9ydCB0eXBlIHsgSW5kZXhQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB1c2VQYXlsb2FkQVBJIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVBheWxvYWRBUEknXG5pbXBvcnQgYnVpbGRTdGF0ZUZyb21TY2hlbWEgZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9idWlsZFN0YXRlRnJvbVNjaGVtYSdcbmltcG9ydCB7IGZpZWxkVHlwZXMgfSBmcm9tICcuLi8uLi9mb3Jtcy9maWVsZC10eXBlcydcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgeyB1c2VEb2N1bWVudEV2ZW50cyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEV2ZW50cydcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nXG5pbXBvcnQgeyBFZGl0RGVwdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0VkaXREZXB0aCdcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnXG5pbXBvcnQgeyB1c2VQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9QcmVmZXJlbmNlcydcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCdcbmltcG9ydCBEZWZhdWx0R2xvYmFsVmlldyBmcm9tICcuL0RlZmF1bHQnXG5cbmNvbnN0IEdsb2JhbFZpZXc6IFJlYWN0LkZDPEluZGV4UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZ2xvYmFsIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgc3RhdGU6IGxvY2F0aW9uU3RhdGUgfSA9IHVzZUxvY2F0aW9uPHsgZGF0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0+KClcbiAgY29uc3QgeyBjb2RlOiBsb2NhbGUgfSA9IHVzZUxvY2FsZSgpXG4gIGNvbnN0IHsgcGVybWlzc2lvbnMsIHVzZXIgfSA9IHVzZUF1dGgoKVxuICBjb25zdCBbaW5pdGlhbFN0YXRlLCBzZXRJbml0aWFsU3RhdGVdID0gdXNlU3RhdGU8RmllbGRzPigpXG4gIGNvbnN0IFt1cGRhdGVkQXQsIHNldFVwZGF0ZWRBdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KClcbiAgY29uc3Qge1xuICAgIGFjdGlvbixcbiAgICBkb2NQZXJtaXNzaW9ucyxcbiAgICBnZXREb2NQZXJtaXNzaW9ucyxcbiAgICBnZXREb2NQcmVmZXJlbmNlcyxcbiAgICBnZXRWZXJzaW9ucyxcbiAgICBwcmVmZXJlbmNlc0tleSxcbiAgfSA9IHVzZURvY3VtZW50SW5mbygpXG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKClcblxuICBjb25zdCB7XG4gICAgcm91dGVzOiB7IGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IHVzZUNvbmZpZygpXG5cbiAgY29uc3QgeyByZXBvcnRVcGRhdGUgfSA9IHVzZURvY3VtZW50RXZlbnRzKClcblxuICBjb25zdCB7IHNsdWcsIGFkbWluOiB7IGNvbXBvbmVudHM6IHsgdmlld3M6IHsgRWRpdDogRWRpdCB9ID0ge30gfSA9IHt9IH0gPSB7fSwgZmllbGRzIH0gPSBnbG9iYWxcblxuICBjb25zdCBvblNhdmUgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoanNvbikgPT4ge1xuICAgICAgcmVwb3J0VXBkYXRlKHtcbiAgICAgICAgZW50aXR5U2x1ZzogZ2xvYmFsLnNsdWcsXG4gICAgICAgIHVwZGF0ZWRBdDoganNvbj8ucmVzdWx0Py51cGRhdGVkQXQgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfSlcblxuICAgICAgdm9pZCBnZXRWZXJzaW9ucygpXG4gICAgICB2b2lkIGdldERvY1Blcm1pc3Npb25zKClcbiAgICAgIHNldFVwZGF0ZWRBdChqc29uPy5yZXN1bHQ/LnVwZGF0ZWRBdClcblxuICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXREb2NQcmVmZXJlbmNlcygpXG5cbiAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgYnVpbGRTdGF0ZUZyb21TY2hlbWEoe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIGRhdGE6IGpzb24ucmVzdWx0LFxuICAgICAgICBmaWVsZFNjaGVtYTogZmllbGRzLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICB0LFxuICAgICAgICB1c2VyLFxuICAgICAgfSlcbiAgICAgIHNldEluaXRpYWxTdGF0ZShzdGF0ZSlcbiAgICB9LFxuICAgIFtcbiAgICAgIGdldFZlcnNpb25zLFxuICAgICAgZmllbGRzLFxuICAgICAgdXNlcixcbiAgICAgIGxvY2FsZSxcbiAgICAgIHQsXG4gICAgICBnZXREb2NQZXJtaXNzaW9ucyxcbiAgICAgIGdldERvY1ByZWZlcmVuY2VzLFxuICAgICAgY29uZmlnLFxuICAgICAgZ2xvYmFsLFxuICAgICAgcmVwb3J0VXBkYXRlLFxuICAgIF0sXG4gIClcblxuICBjb25zdCBbeyBkYXRhLCBpc0xvYWRpbmc6IGlzTG9hZGluZ0RhdGEgfV0gPSB1c2VQYXlsb2FkQVBJKGAke3NlcnZlclVSTH0ke2FwaX0vZ2xvYmFscy8ke3NsdWd9YCwge1xuICAgIGluaXRpYWxEYXRhOiBudWxsLFxuICAgIGluaXRpYWxQYXJhbXM6IHsgZGVwdGg6IDAsIGRyYWZ0OiAndHJ1ZScsICdmYWxsYmFjay1sb2NhbGUnOiAnbnVsbCcgfSxcbiAgfSlcblxuICBjb25zdCBkYXRhVG9SZW5kZXIgPSBsb2NhdGlvblN0YXRlPy5kYXRhIHx8IGRhdGFcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF3YWl0SW5pdGlhbFN0YXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXREb2NQcmVmZXJlbmNlcygpXG4gICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBkYXRhOiBkYXRhVG9SZW5kZXIsXG4gICAgICAgIGZpZWxkU2NoZW1hOiBmaWVsZHMsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgIHQsXG4gICAgICAgIHVzZXIsXG4gICAgICB9KVxuXG4gICAgICBpZiAocHJlZmVyZW5jZXNLZXkpIHtcbiAgICAgICAgYXdhaXQgZ2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlc0tleSlcbiAgICAgIH1cblxuICAgICAgc2V0SW5pdGlhbFN0YXRlKHN0YXRlKVxuICAgIH1cblxuICAgIGlmIChkYXRhVG9SZW5kZXIpIHZvaWQgYXdhaXRJbml0aWFsU3RhdGUoKVxuICB9LCBbXG4gICAgZGF0YVRvUmVuZGVyLFxuICAgIGZpZWxkcyxcbiAgICB1c2VyLFxuICAgIGxvY2FsZSxcbiAgICBnZXRQcmVmZXJlbmNlLFxuICAgIHByZWZlcmVuY2VzS2V5LFxuICAgIHQsXG4gICAgZ2V0RG9jUHJlZmVyZW5jZXMsXG4gICAgY29uZmlnLFxuICBdKVxuXG4gIGNvbnN0IGlzTG9hZGluZyA9ICFpbml0aWFsU3RhdGUgfHwgIWRvY1Blcm1pc3Npb25zIHx8IGlzTG9hZGluZ0RhdGFcblxuICBjb25zdCBjb21wb25lbnRQcm9wczogRGVmYXVsdEdsb2JhbFZpZXdQcm9wcyA9IHtcbiAgICBhY3Rpb24sXG4gICAgYXBpVVJMOiBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtzbHVnfT9sb2NhbGU9JHtsb2NhbGV9JHtcbiAgICAgIGdsb2JhbC52ZXJzaW9ucz8uZHJhZnRzID8gJyZkcmFmdD10cnVlJyA6ICcnXG4gICAgfWAsXG4gICAgY2FuQWNjZXNzQWRtaW46IHBlcm1pc3Npb25zPy5jYW5BY2Nlc3NBZG1pbixcbiAgICBkYXRhOiBkYXRhVG9SZW5kZXIsXG4gICAgZmllbGRUeXBlcyxcbiAgICBnbG9iYWwsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGlzTG9hZGluZyxcbiAgICBvblNhdmUsXG4gICAgcGVybWlzc2lvbnM6IGRvY1Blcm1pc3Npb25zLFxuICAgIHVwZGF0ZWRBdDogdXBkYXRlZEF0IHx8IGRhdGFUb1JlbmRlcj8udXBkYXRlZEF0LFxuICAgIHVzZXIsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFZGl0RGVwdGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsxfT5cbiAgICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgICAgQ3VzdG9tQ29tcG9uZW50PXt0eXBlb2YgRWRpdCA9PT0gJ2Z1bmN0aW9uJyA/IEVkaXQgOiB1bmRlZmluZWR9XG4gICAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRHbG9iYWxWaWV3fVxuICAgICAgICBjb21wb25lbnRQcm9wcz17Y29tcG9uZW50UHJvcHN9XG4gICAgICAvPlxuICAgIDwvRWRpdERlcHRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsVmlld1xuIl0sIm5hbWVzIjpbIkdsb2JhbFZpZXciLCJwcm9wcyIsImdsb2JhbCIsInN0YXRlIiwibG9jYXRpb25TdGF0ZSIsInVzZUxvY2F0aW9uIiwiY29kZSIsImxvY2FsZSIsInVzZUxvY2FsZSIsInBlcm1pc3Npb25zIiwidXNlciIsInVzZUF1dGgiLCJpbml0aWFsU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJ1c2VTdGF0ZSIsInVwZGF0ZWRBdCIsInNldFVwZGF0ZWRBdCIsImFjdGlvbiIsImRvY1Blcm1pc3Npb25zIiwiZ2V0RG9jUGVybWlzc2lvbnMiLCJnZXREb2NQcmVmZXJlbmNlcyIsImdldFZlcnNpb25zIiwicHJlZmVyZW5jZXNLZXkiLCJ1c2VEb2N1bWVudEluZm8iLCJnZXRQcmVmZXJlbmNlIiwidXNlUHJlZmVyZW5jZXMiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJjb25maWciLCJ1c2VDb25maWciLCJyb3V0ZXMiLCJhcGkiLCJzZXJ2ZXJVUkwiLCJyZXBvcnRVcGRhdGUiLCJ1c2VEb2N1bWVudEV2ZW50cyIsInNsdWciLCJhZG1pbiIsImNvbXBvbmVudHMiLCJ2aWV3cyIsIkVkaXQiLCJmaWVsZHMiLCJvblNhdmUiLCJ1c2VDYWxsYmFjayIsImpzb24iLCJlbnRpdHlTbHVnIiwicmVzdWx0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicHJlZmVyZW5jZXMiLCJidWlsZFN0YXRlRnJvbVNjaGVtYSIsImRhdGEiLCJmaWVsZFNjaGVtYSIsIm9wZXJhdGlvbiIsImlzTG9hZGluZyIsImlzTG9hZGluZ0RhdGEiLCJ1c2VQYXlsb2FkQVBJIiwiaW5pdGlhbERhdGEiLCJpbml0aWFsUGFyYW1zIiwiZGVwdGgiLCJkcmFmdCIsImRhdGFUb1JlbmRlciIsInVzZUVmZmVjdCIsImF3YWl0SW5pdGlhbFN0YXRlIiwiY29tcG9uZW50UHJvcHMiLCJhcGlVUkwiLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImNhbkFjY2Vzc0FkbWluIiwiZmllbGRUeXBlcyIsIkVkaXREZXB0aENvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiQ3VzdG9tQ29tcG9uZW50IiwidW5kZWZpbmVkIiwiRGVmYXVsdENvbXBvbmVudCIsIkRlZmF1bHRHbG9iYWxWaWV3Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQStKQTs7O2VBQUE7OzsrREEvSndEOzhCQUN6QjtnQ0FDSDtzRUFNRjs2RUFDTzs0QkFDTjtzQkFDSDt3QkFDRTtnQ0FDUTs4QkFDRjsyQkFDQzt3QkFDUDs2QkFDSzs4RUFDRztnRUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsTUFBTUEsYUFBbUMsQ0FBQ0M7SUFDeEMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0Q7SUFFbkIsTUFBTSxFQUFFRSxPQUFPQyxhQUFhLEVBQUUsR0FBR0MsSUFBQUEsMkJBQVc7SUFDNUMsTUFBTSxFQUFFQyxNQUFNQyxNQUFNLEVBQUUsR0FBR0MsSUFBQUEsaUJBQVM7SUFDbEMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRSxHQUFHQyxJQUFBQSxhQUFPO0lBQ3JDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdDLElBQUFBLGVBQVE7SUFDaEQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdGLElBQUFBLGVBQVE7SUFD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