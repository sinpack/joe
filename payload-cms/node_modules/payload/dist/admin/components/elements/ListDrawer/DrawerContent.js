"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ListDrawerContent", {
    enumerable: true,
    get: function() {
        return ListDrawerContent;
    }
});
const _modal = require("@faceless-ui/modal");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _ = require(".");
const _getTranslation = require("../../../../utilities/getTranslation");
const _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../hooks/usePayloadAPI"));
const _useUseAsTitle = require("../../../hooks/useUseAsTitle");
const _Label = /*#__PURE__*/ _interop_require_default(require("../../forms/Label"));
const _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _Preferences = require("../../utilities/Preferences");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
const _Default = /*#__PURE__*/ _interop_require_default(require("../../views/collections/List/Default"));
const _formatFields = /*#__PURE__*/ _interop_require_default(require("../../views/collections/List/formatFields"));
const _DocumentDrawer = require("../DocumentDrawer");
const _Pill = /*#__PURE__*/ _interop_require_default(require("../Pill"));
const _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../ReactSelect"));
const _TableColumns = require("../TableColumns");
const _ViewDescription = /*#__PURE__*/ _interop_require_default(require("../ViewDescription"));
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
const hoistQueryParamsToAnd = (where, queryParams)=>{
    if ('and' in where) {
        where.and.push(queryParams);
    } else if ('or' in where) {
        where = {
            and: [
                where,
                queryParams
            ]
        };
    } else {
        where = {
            and: [
                where,
                queryParams
            ]
        };
    }
    return where;
};
const ListDrawerContent = ({ collectionSlugs, customHeader, drawerSlug, filterOptions, onSelect, selectedCollection })=>{
    const { i18n, t } = (0, _reacti18next.useTranslation)([
        'upload',
        'general'
    ]);
    const { permissions } = (0, _Auth.useAuth)();
    const { setPreference } = (0, _Preferences.usePreferences)();
    const { closeModal, isModalOpen } = (0, _modal.useModal)();
    const [limit, setLimit] = (0, _react.useState)();
    const [sort, setSort] = (0, _react.useState)(null);
    const [page, setPage] = (0, _react.useState)(1);
    const [where, setWhere] = (0, _react.useState)(null);
    const [search, setSearch] = (0, _react.useState)('');
    const { collections, routes: { api }, serverURL } = (0, _Config.useConfig)();
    const enabledCollectionConfigs = collections.filter(({ slug })=>{
        return collectionSlugs.includes(slug);
    });
    const [selectedCollectionConfig, setSelectedCollectionConfig] = (0, _react.useState)(()=>{
        return enabledCollectionConfigs.find(({ slug })=>slug === selectedCollection) || enabledCollectionConfigs?.[0];
    });
    const [selectedOption, setSelectedOption] = (0, _react.useState)(()=>selectedCollectionConfig ? {
            label: (0, _getTranslation.getTranslation)(selectedCollectionConfig.labels.singular, i18n),
            value: selectedCollectionConfig.slug
        } : undefined);
    const [fields, setFields] = (0, _react.useState)(()=>(0, _formatFields.default)(selectedCollectionConfig));
    const titleField = (0, _useUseAsTitle.useUseTitleField)(selectedCollectionConfig);
    (0, _react.useEffect)(()=>{
        setFields((0, _formatFields.default)(selectedCollectionConfig));
    }, [
        selectedCollectionConfig
    ]);
    // allow external control of selected collection, same as the initial state logic above
    (0, _react.useEffect)(()=>{
        if (selectedCollection) {
            // if passed a selection, find it and check if it's enabled
            const selectedConfig = enabledCollectionConfigs.find(({ slug })=>slug === selectedCollection) || enabledCollectionConfigs?.[0];
            setSelectedCollectionConfig(selectedConfig);
        }
    }, [
        selectedCollection,
        enabledCollectionConfigs,
        onSelect,
        t
    ]);
    const preferenceKey = `${selectedCollectionConfig.slug}-list`;
    // this is the 'create new' drawer
    const [DocumentDrawer, DocumentDrawerToggler, { drawerSlug: documentDrawerSlug }] = (0, _DocumentDrawer.useDocumentDrawer)({
        collectionSlug: selectedCollectionConfig.slug
    });
    (0, _react.useEffect)(()=>{
        if (selectedOption) {
            setSelectedCollectionConfig(enabledCollectionConfigs.find(({ slug })=>selectedOption.value === slug));
        }
    }, [
        selectedOption,
        enabledCollectionConfigs
    ]);
    const collectionPermissions = permissions?.collections?.[selectedCollectionConfig?.slug];
    const hasCreatePermission = collectionPermissions?.create?.permission;
    // If modal is open, get active page of upload gallery
    const isOpen = isModalOpen(drawerSlug);
    const apiURL = isOpen ? `${serverURL}${api}/${selectedCollectionConfig.slug}` : null;
    const [cacheBust, dispatchCacheBust] = (0, _react.useReducer)((state)=>state + 1, 0) // used to force a re-fetch even when apiURL is unchanged
    ;
    const [{ data, isError }, { setParams }] = (0, _usePayloadAPI.default)(apiURL, {});
    const moreThanOneAvailableCollection = enabledCollectionConfigs.length > 1;
    (0, _react.useEffect)(()=>{
        const { slug, admin: { listSearchableFields } = {}, versions } = selectedCollectionConfig;
        const params = {};
        let copyOfWhere = {
            ...where || {}
        };
        const filterOption = filterOptions?.[slug];
        if (filterOptions && typeof filterOption !== 'boolean') {
            copyOfWhere = hoistQueryParamsToAnd(copyOfWhere, filterOption);
        }
        if (search) {
            const searchAsConditions = (listSearchableFields || [
                titleField?.name
            ]).map((fieldName)=>{
                return {
                    [fieldName]: {
                        like: search
                    }
                };
            }, []);
            if (searchAsConditions.length > 0) {
                const searchFilter = {
                    or: [
                        ...searchAsConditions
                    ]
                };
                copyOfWhere = hoistQueryParamsToAnd(copyOfWhere, searchFilter);
            }
        }
        if (page) params.page = page;
        if (sort) params.sort = sort;
        if (cacheBust) params.cacheBust = cacheBust;
        if (copyOfWhere) params.where = copyOfWhere;
        if (versions?.drafts) params.draft = 'true';
        setParams(params);
    }, [
        page,
        sort,
        where,
        search,
        cacheBust,
        filterOptions,
        selectedCollectionConfig,
        t,
        setParams,
        titleField?.name
    ]);
    (0, _react.useEffect)(()=>{
        const newPreferences = {
            limit,
            sort
        };
        setPreference(preferenceKey, newPreferences, true);
    }, [
        sort,
        limit,
        setPreference,
        preferenceKey
    ]);
    const onCreateNew = (0, _react.useCallback)(({ doc })=>{
        if (typeof onSelect === 'function') {
            onSelect({
                collectionConfig: selectedCollectionConfig,
                docID: doc.id
            });
        }
        dispatchCacheBust();
        closeModal(documentDrawerSlug);
        closeModal(drawerSlug);
    }, [
        closeModal,
        documentDrawerSlug,
        drawerSlug,
        onSelect,
        selectedCollectionConfig
    ]);
    if (!selectedCollectionConfig || isError) {
        return null;
    }
    const listComponent = selectedCollectionConfig?.admin?.components?.views?.List;
    let ListToRender = null;
    if (listComponent && typeof listComponent === 'function') {
        ListToRender = listComponent;
    } else if (typeof listComponent === 'object' && typeof listComponent.Component === 'function') {
        ListToRender = listComponent.Component;
    }
    return /*#__PURE__*/ _react.default.createElement(_TableColumns.TableColumnsProvider, {
        cellProps: [
            {
                className: `${_.baseClass}__first-cell`,
                link: false,
                onClick: ({ collection: rowColl, rowData })=>{
                    if (typeof onSelect === 'function') {
                        onSelect({
                            collectionConfig: rowColl,
                            docID: rowData.id
                        });
                    }
                }
            }
        ],
        collection: selectedCollectionConfig
    }, /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
        collection: selectedCollectionConfig
    }, /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: ListToRender,
        DefaultComponent: _Default.default,
        componentProps: {
            collection: {
                ...selectedCollectionConfig,
                fields
            },
            customHeader: /*#__PURE__*/ _react.default.createElement("header", {
                className: `${_.baseClass}__header`
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: `${_.baseClass}__header-wrap`
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: `${_.baseClass}__header-content`
            }, /*#__PURE__*/ _react.default.createElement("h2", {
                className: `${_.baseClass}__header-text`
            }, !customHeader ? (0, _getTranslation.getTranslation)(selectedCollectionConfig?.labels?.plural, i18n) : customHeader), hasCreatePermission && /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
                className: `${_.baseClass}__create-new-button`
            }, /*#__PURE__*/ _react.default.createElement(_Pill.default, null, t('general:createNew')))), /*#__PURE__*/ _react.default.createElement("button", {
                className: `${_.baseClass}__header-close`,
                onClick: ()=>{
                    closeModal(drawerSlug);
                },
                type: "button"
            }, /*#__PURE__*/ _react.default.createElement(_X.default, null))), selectedCollectionConfig?.admin?.description && /*#__PURE__*/ _react.default.createElement("div", {
                className: `${_.baseClass}__sub-header`
            }, /*#__PURE__*/ _react.default.createElement(_ViewDescription.default, {
                description: selectedCollectionConfig.admin.description
            })), moreThanOneAvailableCollection && /*#__PURE__*/ _react.default.createElement("div", {
                className: `${_.baseClass}__select-collection-wrap`
            }, /*#__PURE__*/ _react.default.createElement(_Label.default, {
                label: t('selectCollectionToBrowse')
            }), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
                className: `${_.baseClass}__select-collection`,
                onChange: setSelectedOption,
                options: enabledCollectionConfigs.map((coll)=>({
                        label: (0, _getTranslation.getTranslation)(coll.labels.singular, i18n),
                        value: coll.slug
                    })),
                value: selectedOption
            }))),
            data,
            handlePageChange: setPage,
            handlePerPageChange: setLimit,
            handleSearchChange: setSearch,
            handleSortChange: setSort,
            handleWhereChange: setWhere,
            hasCreatePermission,
            limit: limit || selectedCollectionConfig?.admin?.pagination?.defaultLimit,
            modifySearchParams: false,
            newDocumentURL: null,
            setLimit,
            setSort,
            titleField
        }
    })), /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
        onSave: onCreateNew
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3REcmF3ZXIvRHJhd2VyQ29udGVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBXaGVyZSB9IGZyb20gJy4uLy4uLy4uLy4uL2V4cG9ydHMvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgTGlzdERyYXdlclByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgYmFzZUNsYXNzIH0gZnJvbSAnLidcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IHVzZVBheWxvYWRBUEkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlUGF5bG9hZEFQSSdcbmltcG9ydCB7IHVzZVVzZVRpdGxlRmllbGQgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VVc2VBc1RpdGxlJ1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL2Zvcm1zL0xhYmVsJ1xuaW1wb3J0IFggZnJvbSAnLi4vLi4vaWNvbnMvWCdcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgeyBEb2N1bWVudEluZm9Qcm92aWRlciB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nXG5pbXBvcnQgeyB1c2VQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9QcmVmZXJlbmNlcydcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCdcbmltcG9ydCBEZWZhdWx0TGlzdCBmcm9tICcuLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9MaXN0L0RlZmF1bHQnXG5pbXBvcnQgZm9ybWF0RmllbGRzIGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvZm9ybWF0RmllbGRzJ1xuaW1wb3J0IHsgdXNlRG9jdW1lbnREcmF3ZXIgfSBmcm9tICcuLi9Eb2N1bWVudERyYXdlcidcbmltcG9ydCBQaWxsIGZyb20gJy4uL1BpbGwnXG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAnLi4vUmVhY3RTZWxlY3QnXG5pbXBvcnQgeyBUYWJsZUNvbHVtbnNQcm92aWRlciB9IGZyb20gJy4uL1RhYmxlQ29sdW1ucydcbmltcG9ydCBWaWV3RGVzY3JpcHRpb24gZnJvbSAnLi4vVmlld0Rlc2NyaXB0aW9uJ1xuXG5jb25zdCBob2lzdFF1ZXJ5UGFyYW1zVG9BbmQgPSAod2hlcmU6IFdoZXJlLCBxdWVyeVBhcmFtczogV2hlcmUpID0+IHtcbiAgaWYgKCdhbmQnIGluIHdoZXJlKSB7XG4gICAgd2hlcmUuYW5kLnB1c2gocXVlcnlQYXJhbXMpXG4gIH0gZWxzZSBpZiAoJ29yJyBpbiB3aGVyZSkge1xuICAgIHdoZXJlID0ge1xuICAgICAgYW5kOiBbd2hlcmUsIHF1ZXJ5UGFyYW1zXSxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd2hlcmUgPSB7XG4gICAgICBhbmQ6IFt3aGVyZSwgcXVlcnlQYXJhbXNdLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aGVyZVxufVxuXG5leHBvcnQgY29uc3QgTGlzdERyYXdlckNvbnRlbnQ6IFJlYWN0LkZDPExpc3REcmF3ZXJQcm9wcz4gPSAoe1xuICBjb2xsZWN0aW9uU2x1Z3MsXG4gIGN1c3RvbUhlYWRlcixcbiAgZHJhd2VyU2x1ZyxcbiAgZmlsdGVyT3B0aW9ucyxcbiAgb25TZWxlY3QsXG4gIHNlbGVjdGVkQ29sbGVjdGlvbixcbn0pID0+IHtcbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbihbJ3VwbG9hZCcsICdnZW5lcmFsJ10pXG4gIGNvbnN0IHsgcGVybWlzc2lvbnMgfSA9IHVzZUF1dGgoKVxuICBjb25zdCB7IHNldFByZWZlcmVuY2UgfSA9IHVzZVByZWZlcmVuY2VzKClcbiAgY29uc3QgeyBjbG9zZU1vZGFsLCBpc01vZGFsT3BlbiB9ID0gdXNlTW9kYWwoKVxuICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlPG51bWJlcj4oKVxuICBjb25zdCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbd2hlcmUsIHNldFdoZXJlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbnMsXG4gICAgcm91dGVzOiB7IGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IHVzZUNvbmZpZygpXG5cbiAgY29uc3QgZW5hYmxlZENvbGxlY3Rpb25Db25maWdzID0gY29sbGVjdGlvbnMuZmlsdGVyKCh7IHNsdWcgfSkgPT4ge1xuICAgIHJldHVybiBjb2xsZWN0aW9uU2x1Z3MuaW5jbHVkZXMoc2x1ZylcbiAgfSlcblxuICBjb25zdCBbc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnLCBzZXRTZWxlY3RlZENvbGxlY3Rpb25Db25maWddID1cbiAgICB1c2VTdGF0ZTxTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnPigoKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3MuZmluZCgoeyBzbHVnIH0pID0+IHNsdWcgPT09IHNlbGVjdGVkQ29sbGVjdGlvbikgfHxcbiAgICAgICAgZW5hYmxlZENvbGxlY3Rpb25Db25maWdzPy5bMF1cbiAgICAgIClcbiAgICB9KVxuXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGU8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+KCgpID0+XG4gICAgc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnXG4gICAgICA/IHtcbiAgICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24oc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnLmxhYmVscy5zaW5ndWxhciwgaTE4biksXG4gICAgICAgICAgdmFsdWU6IHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCxcbiAgKVxuXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZTxGaWVsZFtdPigoKSA9PiBmb3JtYXRGaWVsZHMoc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnKSlcblxuICBjb25zdCB0aXRsZUZpZWxkID0gdXNlVXNlVGl0bGVGaWVsZChzZWxlY3RlZENvbGxlY3Rpb25Db25maWcpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGaWVsZHMoZm9ybWF0RmllbGRzKHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZykpXG4gIH0sIFtzZWxlY3RlZENvbGxlY3Rpb25Db25maWddKVxuXG4gIC8vIGFsbG93IGV4dGVybmFsIGNvbnRyb2wgb2Ygc2VsZWN0ZWQgY29sbGVjdGlvbiwgc2FtZSBhcyB0aGUgaW5pdGlhbCBzdGF0ZSBsb2dpYyBhYm92ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZENvbGxlY3Rpb24pIHtcbiAgICAgIC8vIGlmIHBhc3NlZCBhIHNlbGVjdGlvbiwgZmluZCBpdCBhbmQgY2hlY2sgaWYgaXQncyBlbmFibGVkXG4gICAgICBjb25zdCBzZWxlY3RlZENvbmZpZyA9XG4gICAgICAgIGVuYWJsZWRDb2xsZWN0aW9uQ29uZmlncy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSB8fFxuICAgICAgICBlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3M/LlswXVxuICAgICAgc2V0U2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnKHNlbGVjdGVkQ29uZmlnKVxuICAgIH1cbiAgfSwgW3NlbGVjdGVkQ29sbGVjdGlvbiwgZW5hYmxlZENvbGxlY3Rpb25Db25maWdzLCBvblNlbGVjdCwgdF0pXG5cbiAgY29uc3QgcHJlZmVyZW5jZUtleSA9IGAke3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnfS1saXN0YFxuXG4gIC8vIHRoaXMgaXMgdGhlICdjcmVhdGUgbmV3JyBkcmF3ZXJcbiAgY29uc3QgW0RvY3VtZW50RHJhd2VyLCBEb2N1bWVudERyYXdlclRvZ2dsZXIsIHsgZHJhd2VyU2x1ZzogZG9jdW1lbnREcmF3ZXJTbHVnIH1dID1cbiAgICB1c2VEb2N1bWVudERyYXdlcih7XG4gICAgICBjb2xsZWN0aW9uU2x1Zzogc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgc2V0U2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnKFxuICAgICAgICBlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3MuZmluZCgoeyBzbHVnIH0pID0+IHNlbGVjdGVkT3B0aW9uLnZhbHVlID09PSBzbHVnKSxcbiAgICAgIClcbiAgICB9XG4gIH0sIFtzZWxlY3RlZE9wdGlvbiwgZW5hYmxlZENvbGxlY3Rpb25Db25maWdzXSlcblxuICBjb25zdCBjb2xsZWN0aW9uUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltzZWxlY3RlZENvbGxlY3Rpb25Db25maWc/LnNsdWddXG4gIGNvbnN0IGhhc0NyZWF0ZVBlcm1pc3Npb24gPSBjb2xsZWN0aW9uUGVybWlzc2lvbnM/LmNyZWF0ZT8ucGVybWlzc2lvblxuXG4gIC8vIElmIG1vZGFsIGlzIG9wZW4sIGdldCBhY3RpdmUgcGFnZSBvZiB1cGxvYWQgZ2FsbGVyeVxuICBjb25zdCBpc09wZW4gPSBpc01vZGFsT3BlbihkcmF3ZXJTbHVnKVxuICBjb25zdCBhcGlVUkwgPSBpc09wZW4gPyBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnLnNsdWd9YCA6IG51bGxcbiAgY29uc3QgW2NhY2hlQnVzdCwgZGlzcGF0Y2hDYWNoZUJ1c3RdID0gdXNlUmVkdWNlcigoc3RhdGUpID0+IHN0YXRlICsgMSwgMCkgLy8gdXNlZCB0byBmb3JjZSBhIHJlLWZldGNoIGV2ZW4gd2hlbiBhcGlVUkwgaXMgdW5jaGFuZ2VkXG4gIGNvbnN0IFt7IGRhdGEsIGlzRXJyb3IgfSwgeyBzZXRQYXJhbXMgfV0gPSB1c2VQYXlsb2FkQVBJKGFwaVVSTCwge30pXG4gIGNvbnN0IG1vcmVUaGFuT25lQXZhaWxhYmxlQ29sbGVjdGlvbiA9IGVuYWJsZWRDb2xsZWN0aW9uQ29uZmlncy5sZW5ndGggPiAxXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IHNsdWcsIGFkbWluOiB7IGxpc3RTZWFyY2hhYmxlRmllbGRzIH0gPSB7fSwgdmVyc2lvbnMgfSA9IHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZ1xuICAgIGNvbnN0IHBhcmFtczoge1xuICAgICAgY2FjaGVCdXN0PzogbnVtYmVyXG4gICAgICBkcmFmdD86IHN0cmluZ1xuICAgICAgbGltaXQ/OiBudW1iZXJcbiAgICAgIHBhZ2U/OiBudW1iZXJcbiAgICAgIHNlYXJjaD86IHN0cmluZ1xuICAgICAgc29ydD86IHN0cmluZ1xuICAgICAgd2hlcmU/OiB1bmtub3duXG4gICAgfSA9IHt9XG5cbiAgICBsZXQgY29weU9mV2hlcmUgPSB7IC4uLih3aGVyZSB8fCB7fSkgfVxuICAgIGNvbnN0IGZpbHRlck9wdGlvbiA9IGZpbHRlck9wdGlvbnM/LltzbHVnXVxuXG4gICAgaWYgKGZpbHRlck9wdGlvbnMgJiYgdHlwZW9mIGZpbHRlck9wdGlvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBjb3B5T2ZXaGVyZSA9IGhvaXN0UXVlcnlQYXJhbXNUb0FuZChjb3B5T2ZXaGVyZSwgZmlsdGVyT3B0aW9uKVxuICAgIH1cblxuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGNvbnN0IHNlYXJjaEFzQ29uZGl0aW9ucyA9IChsaXN0U2VhcmNoYWJsZUZpZWxkcyB8fCBbdGl0bGVGaWVsZD8ubmFtZV0pLm1hcCgoZmllbGROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2ZpZWxkTmFtZV06IHtcbiAgICAgICAgICAgIGxpa2U6IHNlYXJjaCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9LCBbXSlcblxuICAgICAgaWYgKHNlYXJjaEFzQ29uZGl0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaEZpbHRlcjogV2hlcmUgPSB7XG4gICAgICAgICAgb3I6IFsuLi5zZWFyY2hBc0NvbmRpdGlvbnNdLFxuICAgICAgICB9XG5cbiAgICAgICAgY29weU9mV2hlcmUgPSBob2lzdFF1ZXJ5UGFyYW1zVG9BbmQoY29weU9mV2hlcmUsIHNlYXJjaEZpbHRlcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFnZSkgcGFyYW1zLnBhZ2UgPSBwYWdlXG4gICAgaWYgKHNvcnQpIHBhcmFtcy5zb3J0ID0gc29ydFxuICAgIGlmIChjYWNoZUJ1c3QpIHBhcmFtcy5jYWNoZUJ1c3QgPSBjYWNoZUJ1c3RcbiAgICBpZiAoY29weU9mV2hlcmUpIHBhcmFtcy53aGVyZSA9IGNvcHlPZldoZXJlXG4gICAgaWYgKHZlcnNpb25zPy5kcmFmdHMpIHBhcmFtcy5kcmFmdCA9ICd0cnVlJ1xuXG4gICAgc2V0UGFyYW1zKHBhcmFtcylcbiAgfSwgW1xuICAgIHBhZ2UsXG4gICAgc29ydCxcbiAgICB3aGVyZSxcbiAgICBzZWFyY2gsXG4gICAgY2FjaGVCdXN0LFxuICAgIGZpbHRlck9wdGlvbnMsXG4gICAgc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnLFxuICAgIHQsXG4gICAgc2V0UGFyYW1zLFxuICAgIHRpdGxlRmllbGQ/Lm5hbWUsXG4gIF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXdQcmVmZXJlbmNlcyA9IHtcbiAgICAgIGxpbWl0LFxuICAgICAgc29ydCxcbiAgICB9XG5cbiAgICBzZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VLZXksIG5ld1ByZWZlcmVuY2VzLCB0cnVlKVxuICB9LCBbc29ydCwgbGltaXQsIHNldFByZWZlcmVuY2UsIHByZWZlcmVuY2VLZXldKVxuXG4gIGNvbnN0IG9uQ3JlYXRlTmV3ID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgZG9jIH0pID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygb25TZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25TZWxlY3Qoe1xuICAgICAgICAgIGNvbGxlY3Rpb25Db25maWc6IHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZyxcbiAgICAgICAgICBkb2NJRDogZG9jLmlkLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZGlzcGF0Y2hDYWNoZUJ1c3QoKVxuICAgICAgY2xvc2VNb2RhbChkb2N1bWVudERyYXdlclNsdWcpXG4gICAgICBjbG9zZU1vZGFsKGRyYXdlclNsdWcpXG4gICAgfSxcbiAgICBbY2xvc2VNb2RhbCwgZG9jdW1lbnREcmF3ZXJTbHVnLCBkcmF3ZXJTbHVnLCBvblNlbGVjdCwgc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnXSxcbiAgKVxuXG4gIGlmICghc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnIHx8IGlzRXJyb3IpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgbGlzdENvbXBvbmVudCA9IHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZz8uYWRtaW4/LmNvbXBvbmVudHM/LnZpZXdzPy5MaXN0XG4gIGxldCBMaXN0VG9SZW5kZXIgPSBudWxsXG5cbiAgaWYgKGxpc3RDb21wb25lbnQgJiYgdHlwZW9mIGxpc3RDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBMaXN0VG9SZW5kZXIgPSBsaXN0Q29tcG9uZW50XG4gIH0gZWxzZSBpZiAodHlwZW9mIGxpc3RDb21wb25lbnQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBsaXN0Q29tcG9uZW50LkNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIExpc3RUb1JlbmRlciA9IGxpc3RDb21wb25lbnQuQ29tcG9uZW50XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUNvbHVtbnNQcm92aWRlclxuICAgICAgY2VsbFByb3BzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGAke2Jhc2VDbGFzc31fX2ZpcnN0LWNlbGxgLFxuICAgICAgICAgIGxpbms6IGZhbHNlLFxuICAgICAgICAgIG9uQ2xpY2s6ICh7IGNvbGxlY3Rpb246IHJvd0NvbGwsIHJvd0RhdGEgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvblNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBvblNlbGVjdCh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbkNvbmZpZzogcm93Q29sbCxcbiAgICAgICAgICAgICAgICBkb2NJRDogcm93RGF0YS5pZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXX1cbiAgICAgIGNvbGxlY3Rpb249e3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZ31cbiAgICA+XG4gICAgICA8RG9jdW1lbnRJbmZvUHJvdmlkZXIgY29sbGVjdGlvbj17c2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnfT5cbiAgICAgICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgICAgIEN1c3RvbUNvbXBvbmVudD17TGlzdFRvUmVuZGVyfVxuICAgICAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRMaXN0fVxuICAgICAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgICAgICAgIC4uLnNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZyxcbiAgICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1c3RvbUhlYWRlcjogKFxuICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci13cmFwYH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLXRleHRgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7IWN1c3RvbUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBnZXRUcmFuc2xhdGlvbihzZWxlY3RlZENvbGxlY3Rpb25Db25maWc/LmxhYmVscz8ucGx1cmFsLCBpMThuKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjdXN0b21IZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIHtoYXNDcmVhdGVQZXJtaXNzaW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8RG9jdW1lbnREcmF3ZXJUb2dnbGVyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY3JlYXRlLW5ldy1idXR0b25gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsPnt0KCdnZW5lcmFsOmNyZWF0ZU5ldycpfTwvUGlsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0RvY3VtZW50RHJhd2VyVG9nZ2xlcj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci1jbG9zZWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKGRyYXdlclNsdWcpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8WCAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZz8uYWRtaW4/LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zdWItaGVhZGVyYH0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5hZG1pbi5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge21vcmVUaGFuT25lQXZhaWxhYmxlQ29sbGVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc2VsZWN0LWNvbGxlY3Rpb24td3JhcGB9PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgbGFiZWw9e3QoJ3NlbGVjdENvbGxlY3Rpb25Ub0Jyb3dzZScpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NlbGVjdC1jb2xsZWN0aW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U2VsZWN0ZWRPcHRpb259IC8vIHRoaXMgaXMgb25seSBjaGFuZ2luZyB0aGUgb3B0aW9ucyB3aGljaCBpcyBub3QgcmVydW5uaW5nIG15IGVmZmVjdFxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2VuYWJsZWRDb2xsZWN0aW9uQ29uZmlncy5tYXAoKGNvbGwpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY29sbC5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbGwuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2U6IHNldFBhZ2UsXG4gICAgICAgICAgICBoYW5kbGVQZXJQYWdlQ2hhbmdlOiBzZXRMaW1pdCxcbiAgICAgICAgICAgIGhhbmRsZVNlYXJjaENoYW5nZTogc2V0U2VhcmNoLFxuICAgICAgICAgICAgaGFuZGxlU29ydENoYW5nZTogc2V0U29ydCxcbiAgICAgICAgICAgIGhhbmRsZVdoZXJlQ2hhbmdlOiBzZXRXaGVyZSxcbiAgICAgICAgICAgIGhhc0NyZWF0ZVBlcm1pc3Npb24sXG4gICAgICAgICAgICBsaW1pdDogbGltaXQgfHwgc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnPy5hZG1pbj8ucGFnaW5hdGlvbj8uZGVmYXVsdExpbWl0LFxuICAgICAgICAgICAgbW9kaWZ5U2VhcmNoUGFyYW1zOiBmYWxzZSxcbiAgICAgICAgICAgIG5ld0RvY3VtZW50VVJMOiBudWxsLFxuICAgICAgICAgICAgc2V0TGltaXQsXG4gICAgICAgICAgICBzZXRTb3J0LFxuICAgICAgICAgICAgdGl0bGVGaWVsZCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9Eb2N1bWVudEluZm9Qcm92aWRlcj5cbiAgICAgIDxEb2N1bWVudERyYXdlciBvblNhdmU9e29uQ3JlYXRlTmV3fSAvPlxuICAgIDwvVGFibGVDb2x1bW5zUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJMaXN0RHJhd2VyQ29udGVudCIsImhvaXN0UXVlcnlQYXJhbXNUb0FuZCIsIndoZXJlIiwicXVlcnlQYXJhbXMiLCJhbmQiLCJwdXNoIiwiY29sbGVjdGlvblNsdWdzIiwiY3VzdG9tSGVhZGVyIiwiZHJhd2VyU2x1ZyIsImZpbHRlck9wdGlvbnMiLCJvblNlbGVjdCIsInNlbGVjdGVkQ29sbGVjdGlvbiIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJwZXJtaXNzaW9ucyIsInVzZUF1dGgiLCJzZXRQcmVmZXJlbmNlIiwidXNlUHJlZmVyZW5jZXMiLCJjbG9zZU1vZGFsIiwiaXNNb2RhbE9wZW4iLCJ1c2VNb2RhbCIsImxpbWl0Iiwic2V0TGltaXQiLCJ1c2VTdGF0ZSIsInNvcnQiLCJzZXRTb3J0IiwicGFnZSIsInNldFBhZ2UiLCJzZXRXaGVyZSIsInNlYXJjaCIsInNldFNlYXJjaCIsImNvbGxlY3Rpb25zIiwicm91dGVzIiwiYXBpIiwic2VydmVyVVJMIiwidXNlQ29uZmlnIiwiZW5hYmxlZENvbGxlY3Rpb25Db25maWdzIiwiZmlsdGVyIiwic2x1ZyIsImluY2x1ZGVzIiwic2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnIiwic2V0U2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnIiwiZmluZCIsInNlbGVjdGVkT3B0aW9uIiwic2V0U2VsZWN0ZWRPcHRpb24iLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwibGFiZWxzIiwic2luZ3VsYXIiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImZpZWxkcyIsInNldEZpZWxkcyIsImZvcm1hdEZpZWxkcyIsInRpdGxlRmllbGQiLCJ1c2VVc2VUaXRsZUZpZWxkIiwidXNlRWZmZWN0Iiwic2VsZWN0ZWRDb25maWciLCJwcmVmZXJlbmNlS2V5IiwiRG9jdW1lbnREcmF3ZXIiLCJEb2N1bWVudERyYXdlclRvZ2dsZXIiLCJkb2N1bWVudERyYXdlclNsdWciLCJ1c2VEb2N1bWVudERyYXdlciIsImNvbGxlY3Rpb25TbHVnIiwiY29sbGVjdGlvblBlcm1pc3Npb25zIiwiaGFzQ3JlYXRlUGVybWlzc2lvbiIsImNyZWF0ZSIsInBlcm1pc3Npb24iLCJpc09wZW4iLCJhcGlVUkwiLCJjYWNoZUJ1c3QiLCJkaXNwYXRjaENhY2hlQnVzdCIsInVzZVJlZHVjZXIiLCJzdGF0ZSIsImRhdGEiLCJpc0Vycm9yIiwic2V0UGFyYW1zIiwidXNlUGF5bG9hZEFQSSIsIm1vcmVUaGFuT25lQXZhaWxhYmxlQ29sbGVjdGlvbiIsImxlbmd0aCIsImFkbWluIiwibGlzdFNlYXJjaGFibGVGaWVsZHMiLCJ2ZXJzaW9ucyIsInBhcmFtcyIsImNvcHlPZldoZXJlIiwiZmlsdGVyT3B0aW9uIiwic2VhcmNoQXNDb25kaXRpb25zIiwibmFtZSIsIm1hcCIsImZpZWxkTmFtZSIsImxpa2UiLCJzZWFyY2hGaWx0ZXIiLCJvciIsImRyYWZ0cyIsImRyYWZ0IiwibmV3UHJlZmVyZW5jZXMiLCJvbkNyZWF0ZU5ldyIsInVzZUNhbGxiYWNrIiwiZG9jIiwiY29sbGVjdGlvbkNvbmZpZyIsImRvY0lEIiwiaWQiLCJsaXN0Q29tcG9uZW50IiwiY29tcG9uZW50cyIsInZpZXdzIiwiTGlzdCIsIkxpc3RUb1JlbmRlciIsIkNvbXBvbmVudCIsIlRhYmxlQ29sdW1uc1Byb3ZpZGVyIiwiY2VsbFByb3BzIiwiY2xhc3NOYW1lIiwiYmFzZUNsYXNzIiwibGluayIsIm9uQ2xpY2siLCJjb2xsZWN0aW9uIiwicm93Q29sbCIsInJvd0RhdGEiLCJEb2N1bWVudEluZm9Qcm92aWRlciIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiLCJEZWZhdWx0TGlzdCIsImNvbXBvbmVudFByb3BzIiwiaGVhZGVyIiwiZGl2IiwiaDIiLCJwbHVyYWwiLCJQaWxsIiwiYnV0dG9uIiwidHlwZSIsIlgiLCJkZXNjcmlwdGlvbiIsIlZpZXdEZXNjcmlwdGlvbiIsIkxhYmVsIiwiUmVhY3RTZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbnMiLCJjb2xsIiwiaGFuZGxlUGFnZUNoYW5nZSIsImhhbmRsZVBlclBhZ2VDaGFuZ2UiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJoYW5kbGVTb3J0Q2hhbmdlIiwiaGFuZGxlV2hlcmVDaGFuZ2UiLCJwYWdpbmF0aW9uIiwiZGVmYXVsdExpbWl0IiwibW9kaWZ5U2VhcmNoUGFyYW1zIiwibmV3RG9jdW1lbnRVUkwiLCJvblNhdmUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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