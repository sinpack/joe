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
const _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _uuid = require("uuid");
const _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../../hooks/usePayloadAPI"));
const _useUseAsTitle = require("../../../../hooks/useUseAsTitle");
const _StepNav = require("../../../elements/StepNav");
const _TableColumns = require("../../../elements/TableColumns");
const _ActionsProvider = require("../../../utilities/ActionsProvider");
const _Auth = require("../../../utilities/Auth");
const _Config = require("../../../utilities/Config");
const _Preferences = require("../../../utilities/Preferences");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../../utilities/RenderCustomComponent"));
const _SearchParams = require("../../../utilities/SearchParams");
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
/**
 * The ListView component is table which lists the collection's documents.
 * The default list view can be found at the {@link DefaultList} component.
 * Users can also create pass their own custom list view component instead
 * of using the default one.
 */ const ListView = (props)=>{
    const { collection, collection: { slug, admin: { components: { views: { List: CustomList } = {} } = {}, listSearchableFields, pagination: { defaultLimit } }, labels: { plural } } } = props;
    const { routes: { admin, api }, serverURL } = (0, _Config.useConfig)();
    const { setViewActions } = (0, _ActionsProvider.useActions)();
    const preferenceKey = `${collection.slug}-list`;
    const { permissions } = (0, _Auth.useAuth)();
    const { setStepNav } = (0, _StepNav.useStepNav)();
    const { getPreference, setPreference } = (0, _Preferences.usePreferences)();
    const { limit, page, search, sort, where } = (0, _SearchParams.useSearchParams)();
    const history = (0, _reactrouterdom.useHistory)();
    const { t } = (0, _reacti18next.useTranslation)('general');
    const [fetchURL, setFetchURL] = (0, _react.useState)('');
    const [fields] = (0, _react.useState)(()=>(0, _formatFields.default)(collection));
    const collectionPermissions = permissions?.collections?.[slug];
    const hasCreatePermission = collectionPermissions?.create?.permission;
    const newDocumentURL = `${admin}/collections/${slug}/create`;
    const [{ data }, { setParams }] = (0, _usePayloadAPI.default)(fetchURL, {
        initialParams: {
            page: 1
        }
    });
    const titleField = (0, _useUseAsTitle.useUseTitleField)(collection);
    (0, _react.useEffect)(()=>{
        if (CustomList && typeof CustomList === 'object' && 'actions' in CustomList) {
            setViewActions(CustomList.actions || []);
        }
        return ()=>{
            setViewActions([]);
        };
    }, [
        CustomList,
        setViewActions
    ]);
    (0, _react.useEffect)(()=>{
        setStepNav([
            {
                label: plural
            }
        ]);
    }, [
        setStepNav,
        plural
    ]);
    // /////////////////////////////////////
    // Set up Payload REST API query params
    // /////////////////////////////////////
    const resetParams = (0, _react.useCallback)((overrides = {})=>{
        const params = {
            depth: 0,
            draft: 'true',
            limit,
            page: overrides?.page,
            search: overrides?.search,
            sort: overrides?.sort,
            where: overrides?.where || {}
        };
        if (page) params.page = page;
        if (sort) params.sort = sort;
        if (where) params.where = where;
        params.invoke = (0, _uuid.v4)();
        if (search) {
            let copyOfWhere = {
                ...where || {}
            };
            const searchAsConditions = (listSearchableFields || [
                titleField?.name || 'id'
            ]).map((fieldName)=>{
                return {
                    [fieldName]: {
                        like: search
                    }
                };
            }, []);
            if (searchAsConditions.length > 0) {
                const conditionalSearchFields = {
                    or: [
                        ...searchAsConditions
                    ]
                };
                copyOfWhere = hoistQueryParamsToAnd(copyOfWhere, conditionalSearchFields);
            }
            params.where = copyOfWhere;
        }
        setParams(params);
    }, [
        limit,
        page,
        setParams,
        sort,
        where,
        search,
        listSearchableFields,
        titleField?.name
    ]);
    (0, _react.useEffect)(()=>{
        // Performance enhancement
        // Setting the Fetch URL this way
        // prevents a double-fetch
        setFetchURL(`${serverURL}${api}/${slug}`);
        resetParams();
    }, [
        api,
        resetParams,
        serverURL,
        slug
    ]);
    // /////////////////////////////////////
    // Fetch preferences on first load
    // /////////////////////////////////////
    (0, _react.useEffect)(()=>{
        (async ()=>{
            const currentPreferences = await getPreference(preferenceKey);
            const params = _qs.default.parse(history.location.search, {
                depth: 0,
                ignoreQueryPrefix: true
            });
            const search = {
                ...params,
                limit: params?.limit || currentPreferences?.limit || defaultLimit,
                sort: params?.sort || currentPreferences?.sort
            };
            const newSearchQuery = _qs.default.stringify(search, {
                addQueryPrefix: true
            });
            if (newSearchQuery.length > 1) {
                history.replace({
                    search: newSearchQuery
                });
            }
        })();
    }, [
        collection,
        getPreference,
        preferenceKey,
        history,
        t,
        defaultLimit
    ]);
    // /////////////////////////////////////
    // Set preferences on change
    // /////////////////////////////////////
    (0, _react.useEffect)(()=>{
        void setPreference(preferenceKey, {
            sort
        }, true);
    }, [
        sort,
        preferenceKey,
        setPreference
    ]);
    (0, _react.useEffect)(()=>{
        void setPreference(preferenceKey, {
            limit
        }, true);
    }, [
        limit,
        preferenceKey,
        setPreference
    ]);
    // /////////////////////////////////////
    // Prevent going beyond page limit
    // /////////////////////////////////////
    (0, _react.useEffect)(()=>{
        if (data?.totalDocs && data.pagingCounter > data.totalDocs) {
            const params = _qs.default.parse(history.location.search, {
                depth: 0,
                ignoreQueryPrefix: true
            });
            const newSearchQuery = _qs.default.stringify({
                ...params,
                page: data.totalPages
            }, {
                addQueryPrefix: true
            });
            history.replace({
                search: newSearchQuery
            });
        }
    }, [
        data,
        history,
        resetParams
    ]);
    let ListToRender = null;
    if (CustomList && typeof CustomList === 'function') {
        ListToRender = CustomList;
    } else if (typeof CustomList === 'object' && typeof CustomList.Component === 'function') {
        ListToRender = CustomList.Component;
    }
    return /*#__PURE__*/ _react.default.createElement(_TableColumns.TableColumnsProvider, {
        collection: collection
    }, /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: ListToRender,
        DefaultComponent: _Default.default,
        componentProps: {
            collection: {
                ...collection,
                fields
            },
            data,
            hasCreatePermission,
            limit: limit || defaultLimit,
            newDocumentURL,
            resetParams,
            titleField
        }
    }));
};
const _default = ListView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcydcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCdcblxuaW1wb3J0IHR5cGUgeyBXaGVyZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2V4cG9ydHMvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IExpc3RJbmRleFByb3BzLCBMaXN0UHJlZmVyZW5jZXMsIFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgdHlwZSBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdXNlUGF5bG9hZEFQSSBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VQYXlsb2FkQVBJJ1xuaW1wb3J0IHsgdXNlVXNlVGl0bGVGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZVVzZUFzVGl0bGUnXG5pbXBvcnQgeyB1c2VTdGVwTmF2IH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU3RlcE5hdidcbmltcG9ydCB7IFRhYmxlQ29sdW1uc1Byb3ZpZGVyIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvVGFibGVDb2x1bW5zJ1xuaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9BY3Rpb25zUHJvdmlkZXInXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvUHJlZmVyZW5jZXMnXG5pbXBvcnQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQnXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJ1xuaW1wb3J0IERlZmF1bHRMaXN0IGZyb20gJy4vRGVmYXVsdCdcbmltcG9ydCBmb3JtYXRGaWVsZHMgZnJvbSAnLi9mb3JtYXRGaWVsZHMnXG5cbmNvbnN0IGhvaXN0UXVlcnlQYXJhbXNUb0FuZCA9ICh3aGVyZTogV2hlcmUsIHF1ZXJ5UGFyYW1zOiBXaGVyZSkgPT4ge1xuICBpZiAoJ2FuZCcgaW4gd2hlcmUpIHtcbiAgICB3aGVyZS5hbmQucHVzaChxdWVyeVBhcmFtcylcbiAgfSBlbHNlIGlmICgnb3InIGluIHdoZXJlKSB7XG4gICAgd2hlcmUgPSB7XG4gICAgICBhbmQ6IFt3aGVyZSwgcXVlcnlQYXJhbXNdLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB3aGVyZSA9IHtcbiAgICAgIGFuZDogW3doZXJlLCBxdWVyeVBhcmFtc10sXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdoZXJlXG59XG5cbi8qKlxuICogVGhlIExpc3RWaWV3IGNvbXBvbmVudCBpcyB0YWJsZSB3aGljaCBsaXN0cyB0aGUgY29sbGVjdGlvbidzIGRvY3VtZW50cy5cbiAqIFRoZSBkZWZhdWx0IGxpc3QgdmlldyBjYW4gYmUgZm91bmQgYXQgdGhlIHtAbGluayBEZWZhdWx0TGlzdH0gY29tcG9uZW50LlxuICogVXNlcnMgY2FuIGFsc28gY3JlYXRlIHBhc3MgdGhlaXIgb3duIGN1c3RvbSBsaXN0IHZpZXcgY29tcG9uZW50IGluc3RlYWRcbiAqIG9mIHVzaW5nIHRoZSBkZWZhdWx0IG9uZS5cbiAqL1xuY29uc3QgTGlzdFZpZXc6IFJlYWN0LkZDPExpc3RJbmRleFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbixcbiAgICBjb2xsZWN0aW9uOiB7XG4gICAgICBzbHVnLFxuICAgICAgYWRtaW46IHtcbiAgICAgICAgY29tcG9uZW50czogeyB2aWV3czogeyBMaXN0OiBDdXN0b21MaXN0IH0gPSB7fSB9ID0ge30sXG4gICAgICAgIGxpc3RTZWFyY2hhYmxlRmllbGRzLFxuICAgICAgICBwYWdpbmF0aW9uOiB7IGRlZmF1bHRMaW1pdCB9LFxuICAgICAgfSxcbiAgICAgIGxhYmVsczogeyBwbHVyYWwgfSxcbiAgICB9LFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7XG4gICAgcm91dGVzOiB7IGFkbWluLCBhcGkgfSxcbiAgICBzZXJ2ZXJVUkwsXG4gIH0gPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IHsgc2V0Vmlld0FjdGlvbnMgfSA9IHVzZUFjdGlvbnMoKVxuXG4gIGNvbnN0IHByZWZlcmVuY2VLZXkgPSBgJHtjb2xsZWN0aW9uLnNsdWd9LWxpc3RgXG4gIGNvbnN0IHsgcGVybWlzc2lvbnMgfSA9IHVzZUF1dGgoKVxuICBjb25zdCB7IHNldFN0ZXBOYXYgfSA9IHVzZVN0ZXBOYXYoKVxuICBjb25zdCB7IGdldFByZWZlcmVuY2UsIHNldFByZWZlcmVuY2UgfSA9IHVzZVByZWZlcmVuY2VzKClcbiAgY29uc3QgeyBsaW1pdCwgcGFnZSwgc2VhcmNoLCBzb3J0LCB3aGVyZSB9ID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcbiAgY29uc3QgW2ZldGNoVVJMLCBzZXRGZXRjaFVSTF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuICBjb25zdCBbZmllbGRzXSA9IHVzZVN0YXRlPEZpZWxkW10+KCgpID0+IGZvcm1hdEZpZWxkcyhjb2xsZWN0aW9uKSlcbiAgY29uc3QgY29sbGVjdGlvblBlcm1pc3Npb25zID0gcGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bc2x1Z11cbiAgY29uc3QgaGFzQ3JlYXRlUGVybWlzc2lvbiA9IGNvbGxlY3Rpb25QZXJtaXNzaW9ucz8uY3JlYXRlPy5wZXJtaXNzaW9uXG4gIGNvbnN0IG5ld0RvY3VtZW50VVJMID0gYCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7c2x1Z30vY3JlYXRlYFxuICBjb25zdCBbeyBkYXRhIH0sIHsgc2V0UGFyYW1zIH1dID0gdXNlUGF5bG9hZEFQSShmZXRjaFVSTCwgeyBpbml0aWFsUGFyYW1zOiB7IHBhZ2U6IDEgfSB9KVxuICBjb25zdCB0aXRsZUZpZWxkID0gdXNlVXNlVGl0bGVGaWVsZChjb2xsZWN0aW9uKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKEN1c3RvbUxpc3QgJiYgdHlwZW9mIEN1c3RvbUxpc3QgPT09ICdvYmplY3QnICYmICdhY3Rpb25zJyBpbiBDdXN0b21MaXN0KSB7XG4gICAgICBzZXRWaWV3QWN0aW9ucyhDdXN0b21MaXN0LmFjdGlvbnMgfHwgW10pXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNldFZpZXdBY3Rpb25zKFtdKVxuICAgIH1cbiAgfSwgW0N1c3RvbUxpc3QsIHNldFZpZXdBY3Rpb25zXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0ZXBOYXYoW1xuICAgICAge1xuICAgICAgICBsYWJlbDogcGx1cmFsLFxuICAgICAgfSxcbiAgICBdKVxuICB9LCBbc2V0U3RlcE5hdiwgcGx1cmFsXSlcblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFNldCB1cCBQYXlsb2FkIFJFU1QgQVBJIHF1ZXJ5IHBhcmFtc1xuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgY29uc3QgcmVzZXRQYXJhbXMgPSB1c2VDYWxsYmFjazxQcm9wc1sncmVzZXRQYXJhbXMnXT4oXG4gICAgKG92ZXJyaWRlcyA9IHt9KSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ICYgeyB3aGVyZT86IFdoZXJlIH0gPSB7XG4gICAgICAgIGRlcHRoOiAwLFxuICAgICAgICBkcmFmdDogJ3RydWUnLFxuICAgICAgICBsaW1pdCxcbiAgICAgICAgcGFnZTogb3ZlcnJpZGVzPy5wYWdlLFxuICAgICAgICBzZWFyY2g6IG92ZXJyaWRlcz8uc2VhcmNoLFxuICAgICAgICBzb3J0OiBvdmVycmlkZXM/LnNvcnQsXG4gICAgICAgIHdoZXJlOiBvdmVycmlkZXM/LndoZXJlIHx8IHt9LFxuICAgICAgfVxuXG4gICAgICBpZiAocGFnZSkgcGFyYW1zLnBhZ2UgPSBwYWdlXG4gICAgICBpZiAoc29ydCkgcGFyYW1zLnNvcnQgPSBzb3J0XG4gICAgICBpZiAod2hlcmUpIHBhcmFtcy53aGVyZSA9IHdoZXJlIGFzIFdoZXJlXG4gICAgICBwYXJhbXMuaW52b2tlID0gdXVpZCgpXG5cbiAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgbGV0IGNvcHlPZldoZXJlID0geyAuLi4oKHdoZXJlIGFzIFdoZXJlKSB8fCB7fSkgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaEFzQ29uZGl0aW9ucyA9IChsaXN0U2VhcmNoYWJsZUZpZWxkcyB8fCBbdGl0bGVGaWVsZD8ubmFtZSB8fCAnaWQnXSkubWFwKFxuICAgICAgICAgIChmaWVsZE5hbWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiB7XG4gICAgICAgICAgICAgICAgbGlrZTogc2VhcmNoLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW10sXG4gICAgICAgIClcblxuICAgICAgICBpZiAoc2VhcmNoQXNDb25kaXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBjb25kaXRpb25hbFNlYXJjaEZpZWxkcyA9IHtcbiAgICAgICAgICAgIG9yOiBbLi4uc2VhcmNoQXNDb25kaXRpb25zXSxcbiAgICAgICAgICB9XG4gICAgICAgICAgY29weU9mV2hlcmUgPSBob2lzdFF1ZXJ5UGFyYW1zVG9BbmQoY29weU9mV2hlcmUsIGNvbmRpdGlvbmFsU2VhcmNoRmllbGRzKVxuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zLndoZXJlID0gY29weU9mV2hlcmVcbiAgICAgIH1cblxuICAgICAgc2V0UGFyYW1zKHBhcmFtcylcbiAgICB9LFxuICAgIFtsaW1pdCwgcGFnZSwgc2V0UGFyYW1zLCBzb3J0LCB3aGVyZSwgc2VhcmNoLCBsaXN0U2VhcmNoYWJsZUZpZWxkcywgdGl0bGVGaWVsZD8ubmFtZV0sXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBlcmZvcm1hbmNlIGVuaGFuY2VtZW50XG4gICAgLy8gU2V0dGluZyB0aGUgRmV0Y2ggVVJMIHRoaXMgd2F5XG4gICAgLy8gcHJldmVudHMgYSBkb3VibGUtZmV0Y2hcbiAgICBzZXRGZXRjaFVSTChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z31gKVxuICAgIHJlc2V0UGFyYW1zKClcbiAgfSwgW2FwaSwgcmVzZXRQYXJhbXMsIHNlcnZlclVSTCwgc2x1Z10pXG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBGZXRjaCBwcmVmZXJlbmNlcyBvbiBmaXJzdCBsb2FkXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIDsoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFByZWZlcmVuY2VzID0gYXdhaXQgZ2V0UHJlZmVyZW5jZTxMaXN0UHJlZmVyZW5jZXM+KHByZWZlcmVuY2VLZXkpXG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGhpc3RvcnkubG9jYXRpb24uc2VhcmNoLCB7XG4gICAgICAgIGRlcHRoOiAwLFxuICAgICAgICBpZ25vcmVRdWVyeVByZWZpeDogdHJ1ZSxcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHNlYXJjaCA9IHtcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICBsaW1pdDogcGFyYW1zPy5saW1pdCB8fCBjdXJyZW50UHJlZmVyZW5jZXM/LmxpbWl0IHx8IGRlZmF1bHRMaW1pdCxcbiAgICAgICAgc29ydDogcGFyYW1zPy5zb3J0IHx8IGN1cnJlbnRQcmVmZXJlbmNlcz8uc29ydCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3U2VhcmNoUXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkoc2VhcmNoLCB7IGFkZFF1ZXJ5UHJlZml4OiB0cnVlIH0pXG5cbiAgICAgIGlmIChuZXdTZWFyY2hRdWVyeS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGhpc3RvcnkucmVwbGFjZSh7XG4gICAgICAgICAgc2VhcmNoOiBuZXdTZWFyY2hRdWVyeSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KSgpXG4gIH0sIFtjb2xsZWN0aW9uLCBnZXRQcmVmZXJlbmNlLCBwcmVmZXJlbmNlS2V5LCBoaXN0b3J5LCB0LCBkZWZhdWx0TGltaXRdKVxuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gU2V0IHByZWZlcmVuY2VzIG9uIGNoYW5nZVxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2b2lkIHNldFByZWZlcmVuY2UocHJlZmVyZW5jZUtleSwgeyBzb3J0IH0sIHRydWUpXG4gIH0sIFtzb3J0LCBwcmVmZXJlbmNlS2V5LCBzZXRQcmVmZXJlbmNlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZvaWQgc2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlS2V5LCB7IGxpbWl0IH0sIHRydWUpXG4gIH0sIFtsaW1pdCwgcHJlZmVyZW5jZUtleSwgc2V0UHJlZmVyZW5jZV0pXG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBQcmV2ZW50IGdvaW5nIGJleW9uZCBwYWdlIGxpbWl0XG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhPy50b3RhbERvY3MgJiYgZGF0YS5wYWdpbmdDb3VudGVyID4gZGF0YS50b3RhbERvY3MpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGhpc3RvcnkubG9jYXRpb24uc2VhcmNoLCB7XG4gICAgICAgIGRlcHRoOiAwLFxuICAgICAgICBpZ25vcmVRdWVyeVByZWZpeDogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICBjb25zdCBuZXdTZWFyY2hRdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShcbiAgICAgICAge1xuICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICBwYWdlOiBkYXRhLnRvdGFsUGFnZXMsXG4gICAgICAgIH0sXG4gICAgICAgIHsgYWRkUXVlcnlQcmVmaXg6IHRydWUgfSxcbiAgICAgIClcbiAgICAgIGhpc3RvcnkucmVwbGFjZSh7XG4gICAgICAgIHNlYXJjaDogbmV3U2VhcmNoUXVlcnksXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2RhdGEsIGhpc3RvcnksIHJlc2V0UGFyYW1zXSlcblxuICBsZXQgTGlzdFRvUmVuZGVyID0gbnVsbFxuXG4gIGlmIChDdXN0b21MaXN0ICYmIHR5cGVvZiBDdXN0b21MaXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgTGlzdFRvUmVuZGVyID0gQ3VzdG9tTGlzdFxuICB9IGVsc2UgaWYgKHR5cGVvZiBDdXN0b21MaXN0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgQ3VzdG9tTGlzdC5Db21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBMaXN0VG9SZW5kZXIgPSBDdXN0b21MaXN0LkNvbXBvbmVudFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVDb2x1bW5zUHJvdmlkZXIgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0+XG4gICAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICAgIEN1c3RvbUNvbXBvbmVudD17TGlzdFRvUmVuZGVyfVxuICAgICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0TGlzdH1cbiAgICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgICBjb2xsZWN0aW9uOiB7IC4uLmNvbGxlY3Rpb24sIGZpZWxkcyB9LFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgaGFzQ3JlYXRlUGVybWlzc2lvbixcbiAgICAgICAgICBsaW1pdDogbGltaXQgfHwgZGVmYXVsdExpbWl0LFxuICAgICAgICAgIG5ld0RvY3VtZW50VVJMLFxuICAgICAgICAgIHJlc2V0UGFyYW1zLFxuICAgICAgICAgIHRpdGxlRmllbGQsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvVGFibGVDb2x1bW5zUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdFZpZXdcbiJdLCJuYW1lcyI6WyJob2lzdFF1ZXJ5UGFyYW1zVG9BbmQiLCJ3aGVyZSIsInF1ZXJ5UGFyYW1zIiwiYW5kIiwicHVzaCIsIkxpc3RWaWV3IiwicHJvcHMiLCJjb2xsZWN0aW9uIiwic2x1ZyIsImFkbWluIiwiY29tcG9uZW50cyIsInZpZXdzIiwiTGlzdCIsIkN1c3RvbUxpc3QiLCJsaXN0U2VhcmNoYWJsZUZpZWxkcyIsInBhZ2luYXRpb24iLCJkZWZhdWx0TGltaXQiLCJsYWJlbHMiLCJwbHVyYWwiLCJyb3V0ZXMiLCJhcGkiLCJzZXJ2ZXJVUkwiLCJ1c2VDb25maWciLCJzZXRWaWV3QWN0aW9ucyIsInVzZUFjdGlvbnMiLCJwcmVmZXJlbmNlS2V5IiwicGVybWlzc2lvbnMiLCJ1c2VBdXRoIiwic2V0U3RlcE5hdiIsInVzZVN0ZXBOYXYiLCJnZXRQcmVmZXJlbmNlIiwic2V0UHJlZmVyZW5jZSIsInVzZVByZWZlcmVuY2VzIiwibGltaXQiLCJwYWdlIiwic2VhcmNoIiwic29ydCIsInVzZVNlYXJjaFBhcmFtcyIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwidCIsInVzZVRyYW5zbGF0aW9uIiwiZmV0Y2hVUkwiLCJzZXRGZXRjaFVSTCIsInVzZVN0YXRlIiwiZmllbGRzIiwiZm9ybWF0RmllbGRzIiwiY29sbGVjdGlvblBlcm1pc3Npb25zIiwiY29sbGVjdGlvbnMiLCJoYXNDcmVhdGVQZXJtaXNzaW9uIiwiY3JlYXRlIiwicGVybWlzc2lvbiIsIm5ld0RvY3VtZW50VVJMIiwiZGF0YSIsInNldFBhcmFtcyIsInVzZVBheWxvYWRBUEkiLCJpbml0aWFsUGFyYW1zIiwidGl0bGVGaWVsZCIsInVzZVVzZVRpdGxlRmllbGQiLCJ1c2VFZmZlY3QiLCJhY3Rpb25zIiwibGFiZWwiLCJyZXNldFBhcmFtcyIsInVzZUNhbGxiYWNrIiwib3ZlcnJpZGVzIiwicGFyYW1zIiwiZGVwdGgiLCJkcmFmdCIsImludm9rZSIsInV1aWQiLCJjb3B5T2ZXaGVyZSIsInNlYXJjaEFzQ29uZGl0aW9ucyIsIm5hbWUiLCJtYXAiLCJmaWVsZE5hbWUiLCJsaWtlIiwibGVuZ3RoIiwiY29uZGl0aW9uYWxTZWFyY2hGaWVsZHMiLCJvciIsImN1cnJlbnRQcmVmZXJlbmNlcyIsInF1ZXJ5U3RyaW5nIiwicGFyc2UiLCJsb2NhdGlvbiIsImlnbm9yZVF1ZXJ5UHJlZml4IiwibmV3U2VhcmNoUXVlcnkiLCJzdHJpbmdpZnkiLCJhZGRRdWVyeVByZWZpeCIsInJlcGxhY2UiLCJ0b3RhbERvY3MiLCJwYWdpbmdDb3VudGVyIiwidG90YWxQYWdlcyIsIkxpc3RUb1JlbmRlciIsIkNvbXBvbmVudCIsIlRhYmxlQ29sdW1uc1Byb3ZpZGVyIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCIsIkRlZmF1bHRMaXN0IiwiY29tcG9uZW50UHJvcHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXdQQTs7O2VBQUE7OzsyREF4UHdCOytEQUNnQzs4QkFDekI7Z0NBQ0o7c0JBQ0E7c0VBTUQ7K0JBQ087eUJBQ047OEJBQ1U7aUNBQ1Y7c0JBQ0g7d0JBQ0U7NkJBQ0s7OEVBQ0c7OEJBQ0Y7Z0VBQ1I7cUVBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLE1BQU1BLHdCQUF3QixDQUFDQyxPQUFjQztJQUMzQyxJQUFJLFNBQVNELE9BQU87UUFDbEJBLE1BQU1FLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDRjtJQUNqQixPQUFPLElBQUksUUFBUUQsT0FBTztRQUN4QkEsUUFBUTtZQUNORSxLQUFLO2dCQUFDRjtnQkFBT0M7YUFBWTtRQUMzQjtJQUNGLE9BQU87UUFDTEQsUUFBUTtZQUNORSxLQUFLO2dCQUFDRjtnQkFBT0M7YUFBWTtRQUMzQjtJQUNGO0lBRUEsT0FBT0Q7QUFDVDtBQUVBOzs7OztDQUtDLEdBQ0QsTUFBTUksV0FBcUMsQ0FBQ0M7SUFDMUMsTUFBTSxFQUNKQyxVQUFVLEVBQ1ZBLFlBQVksRUFDVkMsSUFBSSxFQUNKQyxPQUFPLEVB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