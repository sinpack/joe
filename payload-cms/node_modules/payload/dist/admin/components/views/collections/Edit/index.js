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
const _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../../hooks/usePayloadAPI"));
const _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("../../../forms/Form/buildStateFromSchema"));
const _fieldtypes = require("../../../forms/field-types");
const _Auth = require("../../../utilities/Auth");
const _Config = require("../../../utilities/Config");
const _DocumentInfo = require("../../../utilities/DocumentInfo");
const _EditDepth = require("../../../utilities/EditDepth");
const _Locale = require("../../../utilities/Locale");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../../utilities/RenderCustomComponent"));
const _NotFound = /*#__PURE__*/ _interop_require_default(require("../../NotFound"));
const _Default = /*#__PURE__*/ _interop_require_default(require("./Default"));
const _formatFields = /*#__PURE__*/ _interop_require_default(require("./formatFields"));
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
const EditView = (props)=>{
    const { collection: incomingCollection, isEditing } = props;
    const { slug: collectionSlug, admin: { components: { views: { Edit } = {} } = {} } = {} } = incomingCollection;
    const [fields] = (0, _react.useState)(()=>(0, _formatFields.default)(incomingCollection, isEditing));
    const [collection] = (0, _react.useState)(()=>({
            ...incomingCollection,
            fields
        }));
    const [redirect, setRedirect] = (0, _react.useState)();
    const { code: locale } = (0, _Locale.useLocale)();
    const config = (0, _Config.useConfig)();
    const { routes: { admin, api }, serverURL } = config;
    const { params: { id } = {} } = (0, _reactrouterdom.useRouteMatch)();
    const history = (0, _reactrouterdom.useHistory)();
    const [internalState, setInternalState] = (0, _react.useState)();
    const [updatedAt, setUpdatedAt] = (0, _react.useState)();
    const { permissions, user } = (0, _Auth.useAuth)();
    const userRef = (0, _react.useRef)(user);
    const { action, docPermissions, getDocPermissions, getDocPreferences, getVersions } = (0, _DocumentInfo.useDocumentInfo)();
    const { t } = (0, _reacti18next.useTranslation)('general');
    const [{ data, isError, isLoading: isLoadingData }, { refetchData }] = (0, _usePayloadAPI.default)(isEditing ? `${serverURL}${api}/${collectionSlug}/${id}` : '', {
        initialData: null,
        initialParams: {
            depth: 0,
            draft: 'true',
            'fallback-locale': 'null'
        }
    });
    const buildState = (0, _react.useCallback)(async (doc, overrides)=>{
        const preferences = await getDocPreferences();
        const state = await (0, _buildStateFromSchema.default)({
            id,
            config,
            data: doc || {},
            fieldSchema: overrides?.fieldSchema,
            locale,
            operation: 'update',
            preferences,
            t,
            user: userRef.current,
            ...overrides
        });
        setInternalState(state);
    }, [
        getDocPreferences,
        id,
        locale,
        t,
        config
    ]);
    const onSave = (0, _react.useCallback)((json)=>{
        void getVersions();
        void getDocPermissions();
        setUpdatedAt(json?.doc?.updatedAt);
        if (!isEditing) {
            setRedirect(`${admin}/collections/${collection.slug}/${json?.doc?.id}`);
        } else {
            void buildState(json.doc, {
                fieldSchema: collection.fields
            });
        }
    }, [
        admin,
        getVersions,
        isEditing,
        buildState,
        getDocPermissions,
        collection
    ]);
    (0, _react.useEffect)(()=>{
        if (fields && (isEditing ? data : true)) {
            const awaitInternalState = ()=>{
                setUpdatedAt(data?.updatedAt);
                void buildState(data, {
                    fieldSchema: fields,
                    operation: isEditing ? 'update' : 'create'
                });
            };
            void awaitInternalState();
        }
    }, [
        isEditing,
        data,
        buildState,
        fields
    ]);
    (0, _react.useEffect)(()=>{
        if (redirect) {
            history.push(redirect);
        }
    }, [
        history,
        redirect
    ]);
    (0, _react.useEffect)(()=>{
        if (history.location.state?.refetchDocumentData) {
            void refetchData();
        }
    }, [
        history.location.state?.refetchDocumentData,
        refetchData
    ]);
    if (isError) {
        return /*#__PURE__*/ _react.default.createElement(_NotFound.default, {
            marginTop: "large"
        });
    }
    const apiURL = `${serverURL}${api}/${collectionSlug}/${id}?locale=${locale}${collection.versions.drafts ? '&draft=true' : ''}`;
    const hasSavePermission = isEditing && docPermissions?.update?.permission || !isEditing && docPermissions?.create?.permission;
    const isLoading = !internalState || !docPermissions || isLoadingData;
    const componentProps = {
        id,
        action,
        apiURL,
        canAccessAdmin: permissions?.canAccessAdmin,
        collection,
        data,
        fieldTypes: _fieldtypes.fieldTypes,
        hasSavePermission,
        internalState,
        isEditing,
        isLoading,
        onSave,
        permissions: docPermissions,
        updatedAt: updatedAt || data?.updatedAt,
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
const _default = EditView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyB1c2VIaXN0b3J5LCB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2F1dGgnXG5pbXBvcnQgdHlwZSB7IEZpZWxkcyB9IGZyb20gJy4uLy4uLy4uL2Zvcm1zL0Zvcm0vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERlZmF1bHRFZGl0Vmlld1Byb3BzIH0gZnJvbSAnLi9EZWZhdWx0J1xuaW1wb3J0IHR5cGUgeyBJbmRleFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHVzZVBheWxvYWRBUEkgZnJvbSAnLi4vLi4vLi4vLi4vaG9va3MvdXNlUGF5bG9hZEFQSSdcbmltcG9ydCBidWlsZFN0YXRlRnJvbVNjaGVtYSBmcm9tICcuLi8uLi8uLi9mb3Jtcy9Gb3JtL2J1aWxkU3RhdGVGcm9tU2NoZW1hJ1xuaW1wb3J0IHsgZmllbGRUeXBlcyB9IGZyb20gJy4uLy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9BdXRoJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nXG5pbXBvcnQgeyBFZGl0RGVwdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0VkaXREZXB0aCdcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnXG5pbXBvcnQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vLi4vTm90Rm91bmQnXG5pbXBvcnQgRGVmYXVsdEVkaXQgZnJvbSAnLi9EZWZhdWx0J1xuaW1wb3J0IGZvcm1hdEZpZWxkcyBmcm9tICcuL2Zvcm1hdEZpZWxkcydcblxuY29uc3QgRWRpdFZpZXc6IFJlYWN0LkZDPEluZGV4UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbjogaW5jb21pbmdDb2xsZWN0aW9uLCBpc0VkaXRpbmcgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBzbHVnOiBjb2xsZWN0aW9uU2x1ZywgYWRtaW46IHsgY29tcG9uZW50czogeyB2aWV3czogeyBFZGl0IH0gPSB7fSB9ID0ge30gfSA9IHt9IH0gPVxuICAgIGluY29taW5nQ29sbGVjdGlvblxuXG4gIGNvbnN0IFtmaWVsZHNdID0gdXNlU3RhdGUoKCkgPT4gZm9ybWF0RmllbGRzKGluY29taW5nQ29sbGVjdGlvbiwgaXNFZGl0aW5nKSlcbiAgY29uc3QgW2NvbGxlY3Rpb25dID0gdXNlU3RhdGUoKCkgPT4gKHsgLi4uaW5jb21pbmdDb2xsZWN0aW9uLCBmaWVsZHMgfSkpXG4gIGNvbnN0IFtyZWRpcmVjdCwgc2V0UmVkaXJlY3RdID0gdXNlU3RhdGU8c3RyaW5nPigpXG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKVxuXG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IHtcbiAgICByb3V0ZXM6IHsgYWRtaW4sIGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IGNvbmZpZ1xuXG4gIGNvbnN0IHsgcGFyYW1zOiB7IGlkIH0gPSB7fSB9ID0gdXNlUm91dGVNYXRjaDxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5PHsgcmVmZXRjaERvY3VtZW50RGF0YT86IGJvb2xlYW4gfT4oKVxuXG4gIGNvbnN0IFtpbnRlcm5hbFN0YXRlLCBzZXRJbnRlcm5hbFN0YXRlXSA9IHVzZVN0YXRlPEZpZWxkcz4oKVxuICBjb25zdCBbdXBkYXRlZEF0LCBzZXRVcGRhdGVkQXRdID0gdXNlU3RhdGU8c3RyaW5nPigpXG4gIGNvbnN0IHsgcGVybWlzc2lvbnMsIHVzZXIgfSA9IHVzZUF1dGgoKVxuICBjb25zdCB1c2VyUmVmID0gdXNlUmVmKHVzZXIpXG4gIGNvbnN0IHsgYWN0aW9uLCBkb2NQZXJtaXNzaW9ucywgZ2V0RG9jUGVybWlzc2lvbnMsIGdldERvY1ByZWZlcmVuY2VzLCBnZXRWZXJzaW9ucyB9ID1cbiAgICB1c2VEb2N1bWVudEluZm8oKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcblxuICBjb25zdCBbeyBkYXRhLCBpc0Vycm9yLCBpc0xvYWRpbmc6IGlzTG9hZGluZ0RhdGEgfSwgeyByZWZldGNoRGF0YSB9XSA9IHVzZVBheWxvYWRBUEkoXG4gICAgaXNFZGl0aW5nID8gYCR7c2VydmVyVVJMfSR7YXBpfS8ke2NvbGxlY3Rpb25TbHVnfS8ke2lkfWAgOiAnJyxcbiAgICB7IGluaXRpYWxEYXRhOiBudWxsLCBpbml0aWFsUGFyYW1zOiB7IGRlcHRoOiAwLCBkcmFmdDogJ3RydWUnLCAnZmFsbGJhY2stbG9jYWxlJzogJ251bGwnIH0gfSxcbiAgKVxuXG4gIGNvbnN0IGJ1aWxkU3RhdGUgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoZG9jLCBvdmVycmlkZXM/OiBQYXJ0aWFsPFBhcmFtZXRlcnM8dHlwZW9mIGJ1aWxkU3RhdGVGcm9tU2NoZW1hPlswXT4pID0+IHtcbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKVxuXG4gICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgZGF0YTogZG9jIHx8IHt9LFxuICAgICAgICBmaWVsZFNjaGVtYTogb3ZlcnJpZGVzPy5maWVsZFNjaGVtYSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgICBwcmVmZXJlbmNlcyxcbiAgICAgICAgdCxcbiAgICAgICAgdXNlcjogdXNlclJlZi5jdXJyZW50LFxuICAgICAgICAuLi5vdmVycmlkZXMsXG4gICAgICB9KVxuXG4gICAgICBzZXRJbnRlcm5hbFN0YXRlKHN0YXRlKVxuICAgIH0sXG4gICAgW2dldERvY1ByZWZlcmVuY2VzLCBpZCwgbG9jYWxlLCB0LCBjb25maWddLFxuICApXG5cbiAgY29uc3Qgb25TYXZlID0gdXNlQ2FsbGJhY2soXG4gICAgKGpzb246IHsgZG9jIH0pID0+IHtcbiAgICAgIHZvaWQgZ2V0VmVyc2lvbnMoKVxuICAgICAgdm9pZCBnZXREb2NQZXJtaXNzaW9ucygpXG4gICAgICBzZXRVcGRhdGVkQXQoanNvbj8uZG9jPy51cGRhdGVkQXQpXG4gICAgICBpZiAoIWlzRWRpdGluZykge1xuICAgICAgICBzZXRSZWRpcmVjdChgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9LyR7anNvbj8uZG9jPy5pZH1gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCBidWlsZFN0YXRlKGpzb24uZG9jLCB7XG4gICAgICAgICAgZmllbGRTY2hlbWE6IGNvbGxlY3Rpb24uZmllbGRzLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgW2FkbWluLCBnZXRWZXJzaW9ucywgaXNFZGl0aW5nLCBidWlsZFN0YXRlLCBnZXREb2NQZXJtaXNzaW9ucywgY29sbGVjdGlvbl0sXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmaWVsZHMgJiYgKGlzRWRpdGluZyA/IGRhdGEgOiB0cnVlKSkge1xuICAgICAgY29uc3QgYXdhaXRJbnRlcm5hbFN0YXRlID0gKCkgPT4ge1xuICAgICAgICBzZXRVcGRhdGVkQXQoZGF0YT8udXBkYXRlZEF0KVxuICAgICAgICB2b2lkIGJ1aWxkU3RhdGUoZGF0YSwge1xuICAgICAgICAgIGZpZWxkU2NoZW1hOiBmaWVsZHMsXG4gICAgICAgICAgb3BlcmF0aW9uOiBpc0VkaXRpbmcgPyAndXBkYXRlJyA6ICdjcmVhdGUnLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB2b2lkIGF3YWl0SW50ZXJuYWxTdGF0ZSgpXG4gICAgfVxuICB9LCBbaXNFZGl0aW5nLCBkYXRhLCBidWlsZFN0YXRlLCBmaWVsZHNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICBoaXN0b3J5LnB1c2gocmVkaXJlY3QpXG4gICAgfVxuICB9LCBbaGlzdG9yeSwgcmVkaXJlY3RdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpc3RvcnkubG9jYXRpb24uc3RhdGU/LnJlZmV0Y2hEb2N1bWVudERhdGEpIHtcbiAgICAgIHZvaWQgcmVmZXRjaERhdGEoKVxuICAgIH1cbiAgfSwgW2hpc3RvcnkubG9jYXRpb24uc3RhdGU/LnJlZmV0Y2hEb2N1bWVudERhdGEsIHJlZmV0Y2hEYXRhXSlcblxuICBpZiAoaXNFcnJvcikge1xuICAgIHJldHVybiA8Tm90Rm91bmQgbWFyZ2luVG9wPVwibGFyZ2VcIiAvPlxuICB9XG5cbiAgY29uc3QgYXBpVVJMID0gYCR7c2VydmVyVVJMfSR7YXBpfS8ke2NvbGxlY3Rpb25TbHVnfS8ke2lkfT9sb2NhbGU9JHtsb2NhbGV9JHtcbiAgICBjb2xsZWN0aW9uLnZlcnNpb25zLmRyYWZ0cyA/ICcmZHJhZnQ9dHJ1ZScgOiAnJ1xuICB9YFxuXG4gIGNvbnN0IGhhc1NhdmVQZXJtaXNzaW9uID1cbiAgICAoaXNFZGl0aW5nICYmIGRvY1Blcm1pc3Npb25zPy51cGRhdGU/LnBlcm1pc3Npb24pIHx8XG4gICAgKCFpc0VkaXRpbmcgJiYgKGRvY1Blcm1pc3Npb25zIGFzIENvbGxlY3Rpb25QZXJtaXNzaW9uKT8uY3JlYXRlPy5wZXJtaXNzaW9uKVxuXG4gIGNvbnN0IGlzTG9hZGluZyA9ICFpbnRlcm5hbFN0YXRlIHx8ICFkb2NQZXJtaXNzaW9ucyB8fCBpc0xvYWRpbmdEYXRhXG5cbiAgY29uc3QgY29tcG9uZW50UHJvcHM6IERlZmF1bHRFZGl0Vmlld1Byb3BzID0ge1xuICAgIGlkLFxuICAgIGFjdGlvbixcbiAgICBhcGlVUkwsXG4gICAgY2FuQWNjZXNzQWRtaW46IHBlcm1pc3Npb25zPy5jYW5BY2Nlc3NBZG1pbixcbiAgICBjb2xsZWN0aW9uLFxuICAgIGRhdGEsXG4gICAgZmllbGRUeXBlcyxcbiAgICBoYXNTYXZlUGVybWlzc2lvbixcbiAgICBpbnRlcm5hbFN0YXRlLFxuICAgIGlzRWRpdGluZyxcbiAgICBpc0xvYWRpbmcsXG4gICAgb25TYXZlLFxuICAgIHBlcm1pc3Npb25zOiBkb2NQZXJtaXNzaW9ucyBhcyBDb2xsZWN0aW9uUGVybWlzc2lvbixcbiAgICB1cGRhdGVkQXQ6IHVwZGF0ZWRBdCB8fCBkYXRhPy51cGRhdGVkQXQsXG4gICAgdXNlcixcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVkaXREZXB0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9ezF9PlxuICAgICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgICBDdXN0b21Db21wb25lbnQ9e3R5cGVvZiBFZGl0ID09PSAnZnVuY3Rpb24nID8gRWRpdCA6IHVuZGVmaW5lZH1cbiAgICAgICAgRGVmYXVsdENvbXBvbmVudD17RGVmYXVsdEVkaXR9XG4gICAgICAgIGNvbXBvbmVudFByb3BzPXtjb21wb25lbnRQcm9wc31cbiAgICAgIC8+XG4gICAgPC9FZGl0RGVwdGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBFZGl0Vmlld1xuIl0sIm5hbWVzIjpbIkVkaXRWaWV3IiwicHJvcHMiLCJjb2xsZWN0aW9uIiwiaW5jb21pbmdDb2xsZWN0aW9uIiwiaXNFZGl0aW5nIiwic2x1ZyIsImNvbGxlY3Rpb25TbHVnIiwiYWRtaW4iLCJjb21wb25lbnRzIiwidmlld3MiLCJFZGl0IiwiZmllbGRzIiwidXNlU3RhdGUiLCJmb3JtYXRGaWVsZHMiLCJyZWRpcmVjdCIsInNldFJlZGlyZWN0IiwiY29kZSIsImxvY2FsZSIsInVzZUxvY2FsZSIsImNvbmZpZyIsInVzZUNvbmZpZyIsInJvdXRlcyIsImFwaSIsInNlcnZlclVSTCIsInBhcmFtcyIsImlkIiwidXNlUm91dGVNYXRjaCIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiaW50ZXJuYWxTdGF0ZSIsInNldEludGVybmFsU3RhdGUiLCJ1cGRhdGVkQXQiLCJzZXRVcGRhdGVkQXQiLCJwZXJtaXNzaW9ucyIsInVzZXIiLCJ1c2VBdXRoIiwidXNlclJlZiIsInVzZVJlZiIsImFjdGlvbiIsImRvY1Blcm1pc3Npb25zIiwiZ2V0RG9jUGVybWlzc2lvbnMiLCJnZXREb2NQcmVmZXJlbmNlcyIsImdldFZlcnNpb25zIiwidXNlRG9jdW1lbnRJbmZvIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiZGF0YSIsImlzRXJyb3IiLCJpc0xvYWRpbmciLCJpc0xvYWRpbmdEYXRhIiwicmVmZXRjaERhdGEiLCJ1c2VQYXlsb2FkQVBJIiwiaW5pdGlhbERhdGEiLCJpbml0aWFsUGFyYW1zIiwiZGVwdGgiLCJkcmFmdCIsImJ1aWxkU3RhdGUiLCJ1c2VDYWxsYmFjayIsImRvYyIsIm92ZXJyaWRlcyIsInByZWZlcmVuY2VzIiwic3RhdGUiLCJidWlsZFN0YXRlRnJvbVNjaGVtYSIsImZpZWxkU2NoZW1hIiwib3BlcmF0aW9uIiwiY3VycmVudCIsIm9uU2F2ZSIsImpzb24iLCJ1c2VFZmZlY3QiLCJhd2FpdEludGVybmFsU3RhdGUiLCJwdXNoIiwibG9jYXRpb24iLCJyZWZldGNoRG9jdW1lbnREYXRhIiwiTm90Rm91bmQiLCJtYXJnaW5Ub3AiLCJhcGlVUkwiLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImhhc1NhdmVQZXJtaXNzaW9uIiwidXBkYXRlIiwicGVybWlzc2lvbiIsImNyZWF0ZSIsImNvbXBvbmVudFByb3BzIiwiY2FuQWNjZXNzQWRtaW4iLCJmaWVsZFR5cGVzIiwiRWRpdERlcHRoQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJDdXN0b21Db21wb25lbnQiLCJ1bmRlZmluZWQiLCJEZWZhdWx0Q29tcG9uZW50IiwiRGVmYXVsdEVkaXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBaUtBOzs7ZUFBQTs7OytEQWpLZ0U7OEJBQ2pDO2dDQUNXO3NFQU9oQjs2RUFDTzs0QkFDTjtzQkFDSDt3QkFDRTs4QkFDTTsyQkFDQzt3QkFDUDs4RUFDUTtpRUFDYjtnRUFDRztxRUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsTUFBTUEsV0FBaUMsQ0FBQ0M7SUFDdEMsTUFBTSxFQUFFQyxZQUFZQyxrQkFBa0IsRUFBRUMsU0FBUyxFQUFFLEdBQUdIO0lBRXRELE1BQU0sRUFBRUksTUFBTUMsY0FBYyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFF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