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
const _DocumentControls = require("../../elements/DocumentControls");
const _DocumentFields = require("../../elements/DocumentFields");
const _DocumentHeader = require("../../elements/DocumentHeader");
const _Loading = require("../../elements/Loading");
const _Form = /*#__PURE__*/ _interop_require_default(require("../../forms/Form"));
const _LeaveWithoutSaving = require("../../modals/LeaveWithoutSaving");
const _Auth = require("../../utilities/Auth");
const _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
const _OperationProvider = require("../../utilities/OperationProvider");
const _Auth1 = /*#__PURE__*/ _interop_require_default(require("../collections/Edit/Auth"));
const _Settings = require("./Settings");
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
const baseClass = 'account';
const DefaultAccount = (props)=>{
    const { action, apiURL, collection, data, fieldTypes, hasSavePermission, initialState, isLoading, onSave: onSaveFromProps, permissions } = props;
    const { auth, fields } = collection;
    const { refreshCookieAsync } = (0, _Auth.useAuth)();
    const { t } = (0, _reacti18next.useTranslation)('authentication');
    const onSave = (0, _react.useCallback)(async (json)=>{
        await refreshCookieAsync();
        if (typeof onSaveFromProps === 'function') {
            onSaveFromProps(json);
        }
    }, [
        onSaveFromProps,
        refreshCookieAsync
    ]);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        description: t('accountOfCurrentUser'),
        keywords: t('account'),
        title: t('account')
    }), /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlayToggle, {
        name: "account",
        show: isLoading,
        type: "withoutNav"
    }), !isLoading && /*#__PURE__*/ _react.default.createElement(_OperationProvider.OperationContext.Provider, {
        value: "update"
    }, /*#__PURE__*/ _react.default.createElement(_Form.default, {
        action: action,
        disabled: !hasSavePermission,
        initialState: initialState,
        method: "patch",
        onSuccess: onSave
    }, !(collection.versions?.drafts && collection.versions?.drafts?.autosave) && /*#__PURE__*/ _react.default.createElement(_LeaveWithoutSaving.LeaveWithoutSaving, null), /*#__PURE__*/ _react.default.createElement(_DocumentHeader.DocumentHeader, {
        apiURL: apiURL,
        collection: collection,
        data: data
    }), /*#__PURE__*/ _react.default.createElement(_DocumentControls.DocumentControls, {
        apiURL: apiURL,
        collection: collection,
        data: data,
        hasSavePermission: hasSavePermission,
        isAccountView: true,
        permissions: permissions
    }), /*#__PURE__*/ _react.default.createElement(_DocumentFields.DocumentFields, {
        AfterFields: /*#__PURE__*/ _react.default.createElement(_Settings.Settings, {
            className: `${baseClass}__settings`
        }),
        BeforeFields: /*#__PURE__*/ _react.default.createElement(_Auth1.default, {
            className: `${baseClass}__auth`,
            collection: collection,
            email: data?.email,
            operation: "update",
            readOnly: !hasSavePermission,
            useAPIKey: auth.useAPIKey
        }),
        fieldTypes: fieldTypes,
        fields: fields,
        hasSavePermission: hasSavePermission,
        permissions: permissions
    }))));
};
const _default = DefaultAccount;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0FjY291bnQvRGVmYXVsdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgRmllbGRUeXBlcyB9IGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzJ1xuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uRWRpdFZpZXdQcm9wcyB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBEb2N1bWVudENvbnRyb2xzIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvRG9jdW1lbnRDb250cm9scydcbmltcG9ydCB7IERvY3VtZW50RmllbGRzIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvRG9jdW1lbnRGaWVsZHMnXG5pbXBvcnQgeyBEb2N1bWVudEhlYWRlciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0RvY3VtZW50SGVhZGVyJ1xuaW1wb3J0IHsgTG9hZGluZ092ZXJsYXlUb2dnbGUgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybSdcbmltcG9ydCB7IExlYXZlV2l0aG91dFNhdmluZyB9IGZyb20gJy4uLy4uL21vZGFscy9MZWF2ZVdpdGhvdXRTYXZpbmcnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTWV0YSdcbmltcG9ydCB7IE9wZXJhdGlvbkNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvT3BlcmF0aW9uUHJvdmlkZXInXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9jb2xsZWN0aW9ucy9FZGl0L0F1dGgnXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vU2V0dGluZ3MnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2FjY291bnQnXG5cbmV4cG9ydCB0eXBlIERlZmF1bHRBY2NvdW50Vmlld1Byb3BzID0gQ29sbGVjdGlvbkVkaXRWaWV3UHJvcHMgJiB7XG4gIGZpZWxkVHlwZXM6IEZpZWxkVHlwZXNcbn1cblxuY29uc3QgRGVmYXVsdEFjY291bnQ6IFJlYWN0LkZDPERlZmF1bHRBY2NvdW50Vmlld1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYWN0aW9uLFxuICAgIGFwaVVSTCxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGRhdGEsXG4gICAgZmllbGRUeXBlcyxcbiAgICBoYXNTYXZlUGVybWlzc2lvbixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgaXNMb2FkaW5nLFxuICAgIG9uU2F2ZTogb25TYXZlRnJvbVByb3BzLFxuICAgIHBlcm1pc3Npb25zLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IGF1dGgsIGZpZWxkcyB9ID0gY29sbGVjdGlvblxuXG4gIGNvbnN0IHsgcmVmcmVzaENvb2tpZUFzeW5jIH0gPSB1c2VBdXRoKClcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignYXV0aGVudGljYXRpb24nKVxuXG4gIGNvbnN0IG9uU2F2ZSA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChqc29uKSA9PiB7XG4gICAgICBhd2FpdCByZWZyZXNoQ29va2llQXN5bmMoKVxuICAgICAgaWYgKHR5cGVvZiBvblNhdmVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25TYXZlRnJvbVByb3BzKGpzb24pXG4gICAgICB9XG4gICAgfSxcbiAgICBbb25TYXZlRnJvbVByb3BzLCByZWZyZXNoQ29va2llQXN5bmNdLFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TWV0YSBkZXNjcmlwdGlvbj17dCgnYWNjb3VudE9mQ3VycmVudFVzZXInKX0ga2V5d29yZHM9e3QoJ2FjY291bnQnKX0gdGl0bGU9e3QoJ2FjY291bnQnKX0gLz5cbiAgICAgIDxMb2FkaW5nT3ZlcmxheVRvZ2dsZSBuYW1lPVwiYWNjb3VudFwiIHNob3c9e2lzTG9hZGluZ30gdHlwZT1cIndpdGhvdXROYXZcIiAvPlxuICAgICAgeyFpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8T3BlcmF0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT1cInVwZGF0ZVwiPlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICAgIGRpc2FibGVkPXshaGFzU2F2ZVBlcm1pc3Npb259XG4gICAgICAgICAgICBpbml0aWFsU3RhdGU9e2luaXRpYWxTdGF0ZX1cbiAgICAgICAgICAgIG1ldGhvZD1cInBhdGNoXCJcbiAgICAgICAgICAgIG9uU3VjY2Vzcz17b25TYXZlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshKGNvbGxlY3Rpb24udmVyc2lvbnM/LmRyYWZ0cyAmJiBjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHM/LmF1dG9zYXZlKSAmJiAoXG4gICAgICAgICAgICAgIDxMZWF2ZVdpdGhvdXRTYXZpbmcgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8RG9jdW1lbnRIZWFkZXIgYXBpVVJMPXthcGlVUkx9IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICA8RG9jdW1lbnRDb250cm9sc1xuICAgICAgICAgICAgICBhcGlVUkw9e2FwaVVSTH1cbiAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgaGFzU2F2ZVBlcm1pc3Npb249e2hhc1NhdmVQZXJtaXNzaW9ufVxuICAgICAgICAgICAgICBpc0FjY291bnRWaWV3XG4gICAgICAgICAgICAgIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RG9jdW1lbnRGaWVsZHNcbiAgICAgICAgICAgICAgQWZ0ZXJGaWVsZHM9ezxTZXR0aW5ncyBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NldHRpbmdzYH0gLz59XG4gICAgICAgICAgICAgIEJlZm9yZUZpZWxkcz17XG4gICAgICAgICAgICAgICAgPEF1dGhcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYXV0aGB9XG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgZW1haWw9e2RhdGE/LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uPVwidXBkYXRlXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXshaGFzU2F2ZVBlcm1pc3Npb259XG4gICAgICAgICAgICAgICAgICB1c2VBUElLZXk9e2F1dGgudXNlQVBJS2V5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgIGhhc1NhdmVQZXJtaXNzaW9uPXtoYXNTYXZlUGVybWlzc2lvbn1cbiAgICAgICAgICAgICAgcGVybWlzc2lvbnM9e3Blcm1pc3Npb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvT3BlcmF0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0QWNjb3VudFxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkRlZmF1bHRBY2NvdW50IiwicHJvcHMiLCJhY3Rpb24iLCJhcGlVUkwiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImZpZWxkVHlwZXMiLCJoYXNTYXZlUGVybWlzc2lvbiIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZyIsIm9uU2F2ZSIsIm9uU2F2ZUZyb21Qcm9wcyIsInBlcm1pc3Npb25zIiwiYXV0aCIsImZpZWxkcyIsInJlZnJlc2hDb29raWVBc3luYyIsInVzZUF1dGgiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDYWxsYmFjayIsImpzb24iLCJSZWFjdCIsIkZyYWdtZW50IiwiTWV0YSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ0aXRsZSIsIkxvYWRpbmdPdmVybGF5VG9nZ2xlIiwibmFtZSIsInNob3ciLCJ0eXBlIiwiT3BlcmF0aW9uQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJGb3JtIiwiZGlzYWJsZWQiLCJtZXRob2QiLCJvblN1Y2Nlc3MiLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImF1dG9zYXZlIiwiTGVhdmVXaXRob3V0U2F2aW5nIiwiRG9jdW1lbnRIZWFkZXIiLCJEb2N1bWVudENvbnRyb2xzIiwiaXNBY2NvdW50VmlldyIsIkRvY3VtZW50RmllbGRzIiwiQWZ0ZXJGaWVsZHMiLCJTZXR0aW5ncyIsImNsYXNzTmFtZSIsIkJlZm9yZUZpZWxkcyIsIkF1dGgiLCJlbWFpbCIsIm9wZXJhdGlvbiIsInJlYWRPbmx5IiwidXNlQVBJS2V5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBdUdBOzs7ZUFBQTs7OytEQXZHbUM7OEJBQ0o7a0NBS0U7Z0NBQ0Y7Z0NBQ0E7eUJBQ007NkRBQ3BCO29DQUNrQjtzQkFDWDs2REFDUDttQ0FDZ0I7OERBQ2hCOzBCQUNRO1FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFNbEIsTUFBTUMsaUJBQW9ELENBQUNDO0lBQ3pELE1BQU0sRUFDSkMsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLFVBQVUsRUFDVkMsSUFBSSxFQUNKQyxVQUFVLEVBQ1ZDLGlCQUFpQixFQUNqQkMsWUFBWSxFQUNaQyxTQUFTLEVBQ1RDLFFBQVFDLGVBQWUsRUFDdkJDLFdBQVcsRUFDWixHQUFHWDtJQUVKLE1BQU0sRUFBRVksSUFBSSxFQUFFQyxNQUFNLEVBQUUsR0FBR1Y7SUFFekIsTUFBTSxFQUFFVyxrQkFBa0IsRUFBRSxHQUFHQyxJQUFBQSxhQUFPO0lBQ3RDLE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEdBQUdDLElBQUFBLDRCQUFjLEVBQUM7SUFFN0IsTUFBTVIsU0FBU1MsSUFBQUEsa0JBQVcsRUFDeEIsT0FBT0M7UUFDTCxNQUFNTDtRQUNOLElBQUksT0FBT0osb0JBQW9CLFlBQVk7WUFDekNBLGdCQUFnQlM7UUFDbEI7SUFDRixHQUNBO1FBQUNUO1FBQWlCSTtLQUFtQjtJQUd2QyxxQkFDRSw2QkFBQ00sY0FBSyxDQUFDQyxRQUFRLHNCQUNiLDZCQUFDQyxhQUFJO1FBQUNDLGFBQWFQLEVBQUU7UUFBeUJRLFVBQVVSLEVBQUU7UUFBWVMsT0FBT1QsRUFBRTtzQkFDL0UsNkJBQUNVLDZCQUFvQjtRQUFDQyxNQUFLO1FBQVVDLE1BQU1wQjtRQUFXcUIsTUFBSztRQUMxRCxDQUFDckIsMkJBQ0EsNkJBQUNzQixtQ0FBZ0IsQ0FBQ0MsUUFBUTtRQUFDQyxPQUFNO3FCQUMvQiw2QkFBQ0MsYUFBSTtRQUNIaEMsUUFBUUE7UUFDUmlDLFVBQVUsQ0FBQzVCO1FBQ1hDLGNBQWNBO1FBQ2Q0QixRQUFPO1FBQ1BDLFdBQVczQjtPQUVWLENBQUVOLENBQUFBLFdBQVdrQyxRQUFRLEVBQUVDLFVBQVVuQyxXQUFXa0MsUUFBUSxFQUFFQyxRQUFRQyxRQUFPLG1CQUNwRSw2QkFBQ0Msc0NBQWtCLHVCQUVyQiw2QkFBQ0MsOEJBQWM7UUFBQ3ZDLFFBQVFBO1FBQVFDLFlBQVlBO1FBQVlDLE1BQU1BO3NCQUM5RCw2QkFBQ3NDLGtDQUFnQjtRQUNmeEMsUUFBUUE7UUFDUkMsWUFBWUE7UUFDWkMsTUFBTUE7UUFDTkUsbUJBQW1CQTtRQUNuQnFDLGVBQUFBO1FBQ0FoQyxhQUFhQTtzQkFFZiw2QkFBQ2lDLDhCQUFjO1FBQ2JDLDJCQUFhLDZCQUFDQyxrQkFBUTtZQUFDQyxXQUFXLENBQUMsRUFBRWpELFVBQVUsVUFBVSxDQUFDOztRQUMxRGtELDRCQUNFLDZCQUFDQyxjQUFJO1lBQ0hGLFdBQVcsQ0FBQyxFQUFFakQsVUFBVSxNQUFNLENBQUM7WUFDL0JLLFlBQVlBO1lBQ1orQyxPQUFPOUMsTUFBTThDO1lBQ2JDLFdBQVU7WUFDVkMsVUFBVSxDQUFDOUM7WUFDWCtDLFdBQVd6QyxLQUFLeUMsU0FBUzs7UUFHN0JoRCxZQUFZQTtRQUNaUSxRQUFRQTtRQUNSUCxtQkFBbUJBO1FBQ25CSyxhQUFhQTs7QUFPM0I7TUFFQSxXQUFlWiJ9