"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DocumentDrawerContent", {
    enumerable: true,
    get: function() {
        return DocumentDrawerContent;
    }
});
const _modal = require("@faceless-ui/modal");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reacttoastify = require("react-toastify");
const _ = require(".");
const _getTranslation = require("../../../../utilities/getTranslation");
const _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../hooks/usePayloadAPI"));
const _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("../../forms/Form/buildStateFromSchema"));
const _fieldtypes = require("../../forms/field-types");
const _useRelatedCollections = require("../../forms/field-types/Relationship/AddNew/useRelatedCollections");
const _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _Locale = require("../../utilities/Locale");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
const _Default = /*#__PURE__*/ _interop_require_default(require("../../views/collections/Edit/Default"));
const _formatFields = /*#__PURE__*/ _interop_require_default(require("../../views/collections/Edit/formatFields"));
const _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
const _IDLabel = /*#__PURE__*/ _interop_require_default(require("../IDLabel"));
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
const Content = ({ collectionSlug, customHeader, drawerSlug, onSave })=>{
    const { routes: { api }, serverURL } = (0, _Config.useConfig)();
    const { closeModal, modalState, toggleModal } = (0, _modal.useModal)();
    const { code: locale } = (0, _Locale.useLocale)();
    const { user } = (0, _Auth.useAuth)();
    const [internalState, setInternalState] = (0, _react.useState)();
    const { i18n, t } = (0, _reacti18next.useTranslation)([
        'fields',
        'general'
    ]);
    const hasInitializedState = (0, _react.useRef)(false);
    const [isOpen, setIsOpen] = (0, _react.useState)(false);
    const [collectionConfig] = (0, _useRelatedCollections.useRelatedCollections)(collectionSlug);
    const config = (0, _Config.useConfig)();
    const { admin: { components: { views: { Edit } = {} } = {} } = {} } = collectionConfig;
    const { id, action, docPermissions, getDocPreferences } = (0, _DocumentInfo.useDocumentInfo)();
    // If they are replacing the entire edit view, use that.
    // Else let the DefaultEdit determine what to render.
    const CustomEditView = typeof Edit === 'function' ? Edit : undefined;
    const [fields, setFields] = (0, _react.useState)(()=>(0, _formatFields.default)(collectionConfig, true));
    // no need to an additional requests when creating new documents
    const initialID = (0, _react.useRef)(id);
    const [{ data, isError, isLoading: isLoadingDocument }] = (0, _usePayloadAPI.default)(initialID.current ? `${serverURL}${api}/${collectionSlug}/${initialID.current}` : null, {
        initialParams: {
            depth: 0,
            draft: 'true',
            'fallback-locale': 'null'
        }
    });
    (0, _react.useEffect)(()=>{
        setFields((0, _formatFields.default)(collectionConfig, true));
    }, [
        collectionSlug,
        collectionConfig
    ]);
    (0, _react.useEffect)(()=>{
        if (isLoadingDocument || hasInitializedState.current) {
            return;
        }
        const awaitInitialState = async ()=>{
            const preferences = await getDocPreferences();
            const state = await (0, _buildStateFromSchema.default)({
                id,
                config,
                data,
                fieldSchema: fields,
                locale,
                operation: id ? 'update' : 'create',
                preferences,
                t,
                user
            });
            setInternalState(state);
        };
        void awaitInitialState();
        hasInitializedState.current = true;
    }, [
        data,
        fields,
        id,
        user,
        locale,
        isLoadingDocument,
        t,
        getDocPreferences,
        config
    ]);
    (0, _react.useEffect)(()=>{
        setIsOpen(Boolean(modalState[drawerSlug]?.isOpen));
    }, [
        modalState,
        drawerSlug
    ]);
    (0, _react.useEffect)(()=>{
        if (isOpen && !isLoadingDocument && isError) {
            closeModal(drawerSlug);
            _reacttoastify.toast.error(data.errors?.[0].message || t('error:unspecific'));
        }
    }, [
        isError,
        t,
        isOpen,
        data,
        drawerSlug,
        closeModal,
        isLoadingDocument
    ]);
    if (isError) return null;
    const isEditing = Boolean(id);
    const apiURL = id ? `${serverURL}${api}/${collectionSlug}/${id}?locale=${locale}` : null;
    const hasSavePermission = isEditing && docPermissions?.update?.permission || !isEditing && docPermissions?.create?.permission;
    const isLoading = !internalState || !docPermissions || isLoadingDocument;
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomEditView,
        DefaultComponent: _Default.default,
        componentProps: {
            id,
            action,
            apiURL,
            collection: collectionConfig,
            customHeader: /*#__PURE__*/ _react.default.createElement("div", {
                className: `${_.baseClass}__header`
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: `${_.baseClass}__header-content`
            }, /*#__PURE__*/ _react.default.createElement("h2", {
                className: `${_.baseClass}__header-text`
            }, !customHeader ? t(!id ? 'fields:addNewLabel' : 'general:editLabel', {
                label: (0, _getTranslation.getTranslation)(collectionConfig.labels.singular, i18n)
            }) : customHeader), /*#__PURE__*/ _react.default.createElement(_Button.default, {
                "aria-label": t('general:close'),
                buttonStyle: "none",
                className: `${_.baseClass}__header-close`,
                onClick: ()=>toggleModal(drawerSlug)
            }, /*#__PURE__*/ _react.default.createElement(_X.default, null))), id && /*#__PURE__*/ _react.default.createElement(_IDLabel.default, {
                id: id.toString()
            })),
            data,
            disableActions: true,
            disableLeaveWithoutSaving: true,
            disableRoutes: true,
            fieldTypes: _fieldtypes.fieldTypes,
            hasSavePermission,
            internalState,
            isEditing,
            isLoading,
            me: true,
            onSave,
            permissions: docPermissions
        }
    });
};
const DocumentDrawerContent = (props)=>{
    const { id: idFromProps, collectionSlug, onSave: onSaveFromProps } = props;
    const [collectionConfig] = (0, _useRelatedCollections.useRelatedCollections)(collectionSlug);
    const [id, setId] = (0, _react.useState)(idFromProps);
    const onSave = (0, _react.useCallback)((args)=>{
        setId(args.doc.id);
        if (typeof onSaveFromProps === 'function') {
            onSaveFromProps({
                ...args,
                collectionConfig
            });
        }
    }, [
        onSaveFromProps,
        collectionConfig
    ]);
    return /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
        collection: collectionConfig,
        id: id
    }, /*#__PURE__*/ _react.default.createElement(Content, {
        ...props,
        onSave: onSave
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RvY3VtZW50RHJhd2VyL0RyYXdlckNvbnRlbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvblBlcm1pc3Npb24gfSBmcm9tICcuLi8uLi8uLi8uLi9hdXRoJ1xuaW1wb3J0IHR5cGUgeyBGaWVsZHMgfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBEb2N1bWVudERyYXdlclByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgYmFzZUNsYXNzIH0gZnJvbSAnLidcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IHVzZVBheWxvYWRBUEkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlUGF5bG9hZEFQSSdcbmltcG9ydCBidWlsZFN0YXRlRnJvbVNjaGVtYSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2J1aWxkU3RhdGVGcm9tU2NoZW1hJ1xuaW1wb3J0IHsgZmllbGRUeXBlcyB9IGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzJ1xuaW1wb3J0IHsgdXNlUmVsYXRlZENvbGxlY3Rpb25zIH0gZnJvbSAnLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvUmVsYXRpb25zaGlwL0FkZE5ldy91c2VSZWxhdGVkQ29sbGVjdGlvbnMnXG5pbXBvcnQgWCBmcm9tICcuLi8uLi9pY29ucy9YJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCB7IERvY3VtZW50SW5mb1Byb3ZpZGVyLCB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSdcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCdcbmltcG9ydCBEZWZhdWx0RWRpdCBmcm9tICcuLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9FZGl0L0RlZmF1bHQnXG5pbXBvcnQgZm9ybWF0RmllbGRzIGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvZm9ybWF0RmllbGRzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nXG5pbXBvcnQgSURMYWJlbCBmcm9tICcuLi9JRExhYmVsJ1xuXG5jb25zdCBDb250ZW50OiBSZWFjdC5GQzxEb2N1bWVudERyYXdlclByb3BzPiA9ICh7XG4gIGNvbGxlY3Rpb25TbHVnLFxuICBjdXN0b21IZWFkZXIsXG4gIGRyYXdlclNsdWcsXG4gIG9uU2F2ZSxcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIHJvdXRlczogeyBhcGkgfSxcbiAgICBzZXJ2ZXJVUkwsXG4gIH0gPSB1c2VDb25maWcoKVxuICBjb25zdCB7IGNsb3NlTW9kYWwsIG1vZGFsU3RhdGUsIHRvZ2dsZU1vZGFsIH0gPSB1c2VNb2RhbCgpXG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKVxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKVxuICBjb25zdCBbaW50ZXJuYWxTdGF0ZSwgc2V0SW50ZXJuYWxTdGF0ZV0gPSB1c2VTdGF0ZTxGaWVsZHM+KClcbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbihbJ2ZpZWxkcycsICdnZW5lcmFsJ10pXG4gIGNvbnN0IGhhc0luaXRpYWxpemVkU3RhdGUgPSB1c2VSZWYoZmFsc2UpXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NvbGxlY3Rpb25Db25maWddID0gdXNlUmVsYXRlZENvbGxlY3Rpb25zKGNvbGxlY3Rpb25TbHVnKVxuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IHsgYWRtaW46IHsgY29tcG9uZW50czogeyB2aWV3czogeyBFZGl0IH0gPSB7fSB9ID0ge30gfSA9IHt9IH0gPSBjb2xsZWN0aW9uQ29uZmlnXG5cbiAgY29uc3QgeyBpZCwgYWN0aW9uLCBkb2NQZXJtaXNzaW9ucywgZ2V0RG9jUHJlZmVyZW5jZXMgfSA9IHVzZURvY3VtZW50SW5mbygpXG5cbiAgLy8gSWYgdGhleSBhcmUgcmVwbGFjaW5nIHRoZSBlbnRpcmUgZWRpdCB2aWV3LCB1c2UgdGhhdC5cbiAgLy8gRWxzZSBsZXQgdGhlIERlZmF1bHRFZGl0IGRldGVybWluZSB3aGF0IHRvIHJlbmRlci5cbiAgY29uc3QgQ3VzdG9tRWRpdFZpZXcgPSB0eXBlb2YgRWRpdCA9PT0gJ2Z1bmN0aW9uJyA/IEVkaXQgOiB1bmRlZmluZWRcblxuICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUoKCkgPT4gZm9ybWF0RmllbGRzKGNvbGxlY3Rpb25Db25maWcsIHRydWUpKVxuXG4gIC8vIG5vIG5lZWQgdG8gYW4gYWRkaXRpb25hbCByZXF1ZXN0cyB3aGVuIGNyZWF0aW5nIG5ldyBkb2N1bWVudHNcbiAgY29uc3QgaW5pdGlhbElEID0gdXNlUmVmKGlkKVxuICBjb25zdCBbeyBkYXRhLCBpc0Vycm9yLCBpc0xvYWRpbmc6IGlzTG9hZGluZ0RvY3VtZW50IH1dID0gdXNlUGF5bG9hZEFQSShcbiAgICBpbml0aWFsSUQuY3VycmVudCA/IGAke3NlcnZlclVSTH0ke2FwaX0vJHtjb2xsZWN0aW9uU2x1Z30vJHtpbml0aWFsSUQuY3VycmVudH1gIDogbnVsbCxcbiAgICB7IGluaXRpYWxQYXJhbXM6IHsgZGVwdGg6IDAsIGRyYWZ0OiAndHJ1ZScsICdmYWxsYmFjay1sb2NhbGUnOiAnbnVsbCcgfSB9LFxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGaWVsZHMoZm9ybWF0RmllbGRzKGNvbGxlY3Rpb25Db25maWcsIHRydWUpKVxuICB9LCBbY29sbGVjdGlvblNsdWcsIGNvbGxlY3Rpb25Db25maWddKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzTG9hZGluZ0RvY3VtZW50IHx8IGhhc0luaXRpYWxpemVkU3RhdGUuY3VycmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYXdhaXRJbml0aWFsU3RhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlcyA9IGF3YWl0IGdldERvY1ByZWZlcmVuY2VzKClcbiAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgYnVpbGRTdGF0ZUZyb21TY2hlbWEoe1xuICAgICAgICBpZCxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBkYXRhLFxuICAgICAgICBmaWVsZFNjaGVtYTogZmllbGRzLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIG9wZXJhdGlvbjogaWQgPyAndXBkYXRlJyA6ICdjcmVhdGUnLFxuICAgICAgICBwcmVmZXJlbmNlcyxcbiAgICAgICAgdCxcbiAgICAgICAgdXNlcixcbiAgICAgIH0pXG4gICAgICBzZXRJbnRlcm5hbFN0YXRlKHN0YXRlKVxuICAgIH1cblxuICAgIHZvaWQgYXdhaXRJbml0aWFsU3RhdGUoKVxuICAgIGhhc0luaXRpYWxpemVkU3RhdGUuY3VycmVudCA9IHRydWVcbiAgfSwgW2RhdGEsIGZpZWxkcywgaWQsIHVzZXIsIGxvY2FsZSwgaXNMb2FkaW5nRG9jdW1lbnQsIHQsIGdldERvY1ByZWZlcmVuY2VzLCBjb25maWddKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNPcGVuKEJvb2xlYW4obW9kYWxTdGF0ZVtkcmF3ZXJTbHVnXT8uaXNPcGVuKSlcbiAgfSwgW21vZGFsU3RhdGUsIGRyYXdlclNsdWddKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzT3BlbiAmJiAhaXNMb2FkaW5nRG9jdW1lbnQgJiYgaXNFcnJvcikge1xuICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKVxuICAgICAgdG9hc3QuZXJyb3IoZGF0YS5lcnJvcnM/LlswXS5tZXNzYWdlIHx8IHQoJ2Vycm9yOnVuc3BlY2lmaWMnKSlcbiAgICB9XG4gIH0sIFtpc0Vycm9yLCB0LCBpc09wZW4sIGRhdGEsIGRyYXdlclNsdWcsIGNsb3NlTW9kYWwsIGlzTG9hZGluZ0RvY3VtZW50XSlcblxuICBpZiAoaXNFcnJvcikgcmV0dXJuIG51bGxcblxuICBjb25zdCBpc0VkaXRpbmcgPSBCb29sZWFuKGlkKVxuXG4gIGNvbnN0IGFwaVVSTCA9IGlkID8gYCR7c2VydmVyVVJMfSR7YXBpfS8ke2NvbGxlY3Rpb25TbHVnfS8ke2lkfT9sb2NhbGU9JHtsb2NhbGV9YCA6IG51bGxcblxuICBjb25zdCBoYXNTYXZlUGVybWlzc2lvbiA9XG4gICAgKGlzRWRpdGluZyAmJiBkb2NQZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uKSB8fFxuICAgICghaXNFZGl0aW5nICYmIChkb2NQZXJtaXNzaW9ucyBhcyBDb2xsZWN0aW9uUGVybWlzc2lvbik/LmNyZWF0ZT8ucGVybWlzc2lvbilcblxuICBjb25zdCBpc0xvYWRpbmcgPSAhaW50ZXJuYWxTdGF0ZSB8fCAhZG9jUGVybWlzc2lvbnMgfHwgaXNMb2FkaW5nRG9jdW1lbnRcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgIEN1c3RvbUNvbXBvbmVudD17Q3VzdG9tRWRpdFZpZXd9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0RWRpdH1cbiAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgIGlkLFxuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGFwaVVSTCxcbiAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgICAgY3VzdG9tSGVhZGVyOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcmB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci1jb250ZW50YH0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci10ZXh0YH0+XG4gICAgICAgICAgICAgICAgeyFjdXN0b21IZWFkZXJcbiAgICAgICAgICAgICAgICAgID8gdCghaWQgPyAnZmllbGRzOmFkZE5ld0xhYmVsJyA6ICdnZW5lcmFsOmVkaXRMYWJlbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY29sbGVjdGlvbkNvbmZpZy5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBjdXN0b21IZWFkZXJ9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdnZW5lcmFsOmNsb3NlJyl9XG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci1jbG9zZWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlTW9kYWwoZHJhd2VyU2x1Zyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8WCAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lkICYmIDxJRExhYmVsIGlkPXtpZC50b1N0cmluZygpfSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZGlzYWJsZUFjdGlvbnM6IHRydWUsXG4gICAgICAgIGRpc2FibGVMZWF2ZVdpdGhvdXRTYXZpbmc6IHRydWUsXG4gICAgICAgIGRpc2FibGVSb3V0ZXM6IHRydWUsXG4gICAgICAgIGZpZWxkVHlwZXMsXG4gICAgICAgIGhhc1NhdmVQZXJtaXNzaW9uLFxuICAgICAgICBpbnRlcm5hbFN0YXRlLFxuICAgICAgICBpc0VkaXRpbmcsXG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgbWU6IHRydWUsXG4gICAgICAgIG9uU2F2ZSxcbiAgICAgICAgcGVybWlzc2lvbnM6IGRvY1Blcm1pc3Npb25zLFxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG5cbi8vIEZpcnN0IHByb3ZpZGUgdGhlIGRvY3VtZW50IGNvbnRleHQgdXNpbmcgYERvY3VtZW50SW5mb1Byb3ZpZGVyYFxuLy8gdGhpcyBpcyBzbyB3ZSBjYW4gdXRpbGl6ZSB0aGUgYHVzZURvY3VtZW50SW5mb2AgaG9vayBpbiB0aGUgYENvbnRlbnRgIGNvbXBvbmVudFxuLy8gdGhpcyBkcmF3ZXIgaXMgdXNlZCBmb3IgYm90aCBjcmVhdGluZyBhbmQgZWRpdGluZyBkb2N1bWVudHNcbi8vIHRoaXMgbWVhbnMgdGhhdCB0aGUgYGlkYCBtYXkgYmUgdW5rbm93biB1bnRpbCB0aGUgZG9jdW1lbnQgaXMgY3JlYXRlZFxuZXhwb3J0IGNvbnN0IERvY3VtZW50RHJhd2VyQ29udGVudDogUmVhY3QuRkM8RG9jdW1lbnREcmF3ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpZDogaWRGcm9tUHJvcHMsIGNvbGxlY3Rpb25TbHVnLCBvblNhdmU6IG9uU2F2ZUZyb21Qcm9wcyB9ID0gcHJvcHNcbiAgY29uc3QgW2NvbGxlY3Rpb25Db25maWddID0gdXNlUmVsYXRlZENvbGxlY3Rpb25zKGNvbGxlY3Rpb25TbHVnKVxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlPG51bGwgfCBzdHJpbmc+KGlkRnJvbVByb3BzKVxuXG4gIGNvbnN0IG9uU2F2ZSA9IHVzZUNhbGxiYWNrPERvY3VtZW50RHJhd2VyUHJvcHNbJ29uU2F2ZSddPihcbiAgICAoYXJncykgPT4ge1xuICAgICAgc2V0SWQoYXJncy5kb2MuaWQpXG5cbiAgICAgIGlmICh0eXBlb2Ygb25TYXZlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uU2F2ZUZyb21Qcm9wcyh7XG4gICAgICAgICAgLi4uYXJncyxcbiAgICAgICAgICBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgW29uU2F2ZUZyb21Qcm9wcywgY29sbGVjdGlvbkNvbmZpZ10sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudEluZm9Qcm92aWRlciBjb2xsZWN0aW9uPXtjb2xsZWN0aW9uQ29uZmlnfSBpZD17aWR9PlxuICAgICAgPENvbnRlbnQgey4uLnByb3BzfSBvblNhdmU9e29uU2F2ZX0gLz5cbiAgICA8L0RvY3VtZW50SW5mb1Byb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiRG9jdW1lbnREcmF3ZXJDb250ZW50IiwiQ29udGVudCIsImNvbGxlY3Rpb25TbHVnIiwiY3VzdG9tSGVhZGVyIiwiZHJhd2VyU2x1ZyIsIm9uU2F2ZSIsInJvdXRlcyIsImFwaSIsInNlcnZlclVSTCIsInVzZUNvbmZpZyIsImNsb3NlTW9kYWwiLCJtb2RhbFN0YXRlIiwidG9nZ2xlTW9kYWwiLCJ1c2VNb2RhbCIsImNvZGUiLCJsb2NhbGUiLCJ1c2VMb2NhbGUiLCJ1c2VyIiwidXNlQXV0aCIsImludGVybmFsU3RhdGUiLCJzZXRJbnRlcm5hbFN0YXRlIiwidXNlU3RhdGUiLCJpMThuIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiaGFzSW5pdGlhbGl6ZWRTdGF0ZSIsInVzZVJlZiIsImlzT3BlbiIsInNldElzT3BlbiIsImNvbGxlY3Rpb25Db25maWciLCJ1c2VSZWxhdGVkQ29sbGVjdGlvbnMiLCJjb25maWciLCJhZG1pbiIsImNvbXBvbmVudHMiLCJ2aWV3cyIsIkVkaXQiLCJpZCIsImFjdGlvbiIsImRvY1Blcm1pc3Npb25zIiwiZ2V0RG9jUHJlZmVyZW5jZXMiLCJ1c2VEb2N1bWVudEluZm8iLCJDdXN0b21FZGl0VmlldyIsInVuZGVmaW5lZCIsImZpZWxkcyIsInNldEZpZWxkcyIsImZvcm1hdEZpZWxkcyIsImluaXRpYWxJRCIsImRhdGEiLCJpc0Vycm9yIiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nRG9jdW1lbnQiLCJ1c2VQYXlsb2FkQVBJIiwiY3VycmVudCIsImluaXRpYWxQYXJhbXMiLCJkZXB0aCIsImRyYWZ0IiwidXNlRWZmZWN0IiwiYXdhaXRJbml0aWFsU3RhdGUiLCJwcmVmZXJlbmNlcyIsInN0YXRlIiwiYnVpbGRTdGF0ZUZyb21TY2hlbWEiLCJmaWVsZFNjaGVtYSIsIm9wZXJhdGlvbiIsIkJvb2xlYW4iLCJ0b2FzdCIsImVycm9yIiwiZXJyb3JzIiwibWVzc2FnZSIsImlzRWRpdGluZyIsImFwaVVSTCIsImhhc1NhdmVQZXJtaXNzaW9uIiwidXBkYXRlIiwicGVybWlzc2lvbiIsImNyZWF0ZSIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiLCJEZWZhdWx0RWRpdCIsImNvbXBvbmVudFByb3BzIiwiY29sbGVjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImJhc2VDbGFzcyIsImgyIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVscyIsInNpbmd1bGFyIiwiQnV0dG9uIiwiYXJpYS1sYWJlbCIsImJ1dHRvblN0eWxlIiwib25DbGljayIsIlgiLCJJRExhYmVsIiwidG9TdHJpbmciLCJkaXNhYmxlQWN0aW9ucyIsImRpc2FibGVMZWF2ZVdpdGhvdXRTYXZpbmciLCJkaXNhYmxlUm91dGVzIiwiZmllbGRUeXBlcyIsIm1lIiwicGVybWlzc2lvbnMiLCJwcm9wcyIsImlkRnJvbVByb3BzIiwib25TYXZlRnJvbVByb3BzIiwic2V0SWQiLCJ1c2VDYWxsYmFjayIsImFyZ3MiLCJkb2MiLCJEb2N1bWVudEluZm9Qcm92aWRlciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF1S2FBOzs7ZUFBQUE7Ozt1QkF2S1k7K0RBQ3VDOzhCQUNqQzsrQkFDVDtrQkFNSTtnQ0FDSztzRUFDTDs2RUFDTzs0QkFDTjt1Q0FDVzswREFDeEI7c0JBQ1U7d0JBQ0U7OEJBQzRCO3dCQUM1Qjs4RUFDUTtnRUFDVjtxRUFDQzsrREFDTjtnRUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsTUFBTUMsVUFBeUMsQ0FBQyxFQUM5Q0MsY0FBYyxFQUNkQyxZQUFZLEVBQ1pDLFVBQVUsRUFDVkMsTUFBTSxFQUNQO0lBQ0MsTUFBTSxFQUNKQyxRQUFRLEVBQUVDLEdBQUcsRUFBRSxFQUNmQyxTQUFTLEVBQ1YsR0FBR0MsSUFBQUEsaUJBQVM7SUFDYixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUUsR0FBR0MsSUFBQUEsZUFBUTtJQUN4RCxNQUFNLEVBQUVDLE1BQU1DLE1BQU0sRUFBRSxHQUFHQyxJQUFBQSxpQkFB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