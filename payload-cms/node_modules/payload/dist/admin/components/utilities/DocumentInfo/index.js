"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DocumentInfoProvider: function() {
        return DocumentInfoProvider;
    },
    useDocumentInfo: function() {
        return useDocumentInfo;
    }
});
const _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _Auth = require("../Auth");
const _Config = require("../Config");
const _Locale = require("../Locale");
const _Preferences = require("../Preferences");
const _UploadEdits = require("../UploadEdits");
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
const Context = /*#__PURE__*/ (0, _react.createContext)({});
const useDocumentInfo = ()=>(0, _react.useContext)(Context);
const DocumentInfo = ({ id: idFromProps, children, collection, global, idFromParams: getIDFromParams })=>{
    const { id: idFromParams } = (0, _reactrouterdom.useParams)();
    const id = idFromProps || (getIDFromParams ? idFromParams : null);
    const { routes: { api }, serverURL } = (0, _Config.useConfig)();
    const { getPreference, setPreference } = (0, _Preferences.usePreferences)();
    const { i18n } = (0, _reacti18next.useTranslation)();
    const { permissions } = (0, _Auth.useAuth)();
    const { code } = (0, _Locale.useLocale)();
    const { uploadEdits } = (0, _UploadEdits.useUploadEdits)();
    const [publishedDoc, setPublishedDoc] = (0, _react.useState)(null);
    const [versions, setVersions] = (0, _react.useState)(null);
    const [unpublishedVersions, setUnpublishedVersions] = (0, _react.useState)(null);
    const baseURL = `${serverURL}${api}`;
    let slug;
    let pluralType;
    let preferencesKey;
    if (global) {
        slug = global.slug;
        pluralType = 'globals';
        preferencesKey = `global-${slug}`;
    }
    if (collection) {
        slug = collection.slug;
        pluralType = 'collections';
        if (id) {
            preferencesKey = `collection-${slug}-${id}`;
        }
    }
    const [docPermissions, setDocPermissions] = (0, _react.useState)(permissions[pluralType][slug]);
    const getVersions = (0, _react.useCallback)(async ()=>{
        let versionFetchURL;
        let publishedFetchURL;
        let draftsEnabled = false;
        let shouldFetchVersions = false;
        let unpublishedVersionJSON = null;
        let versionJSON = null;
        let shouldFetch = true;
        const versionParams = {
            depth: 0,
            where: {
                and: []
            }
        };
        const publishedVersionParams = {
            depth: 0,
            locale: code || undefined,
            where: {
                and: [
                    {
                        or: [
                            {
                                _status: {
                                    equals: 'published'
                                }
                            },
                            {
                                _status: {
                                    exists: false
                                }
                            }
                        ]
                    }
                ]
            }
        };
        if (global) {
            draftsEnabled = Boolean(global?.versions?.drafts);
            shouldFetchVersions = Boolean(global?.versions);
            versionFetchURL = `${baseURL}/globals/${global.slug}/versions`;
            publishedFetchURL = `${baseURL}/globals/${global.slug}?${_qs.default.stringify(publishedVersionParams)}`;
        }
        if (collection) {
            draftsEnabled = Boolean(collection?.versions?.drafts);
            shouldFetchVersions = Boolean(collection?.versions);
            versionFetchURL = `${baseURL}/${collection.slug}/versions`;
            publishedVersionParams.where.and.push({
                id: {
                    equals: id
                }
            });
            publishedFetchURL = `${baseURL}/${collection.slug}?${_qs.default.stringify(publishedVersionParams)}`;
            if (!id) {
                shouldFetch = false;
            }
            versionParams.where.and.push({
                parent: {
                    equals: id
                }
            });
        }
        if (shouldFetch) {
            let publishedJSON;
            if (draftsEnabled) {
                publishedJSON = await fetch(publishedFetchURL, {
                    credentials: 'include',
                    headers: {
                        'Accept-Language': i18n.language
                    }
                }).then((res)=>res.json());
                if (collection) {
                    publishedJSON = publishedJSON?.docs?.[0];
                }
            }
            if (shouldFetchVersions) {
                versionJSON = await fetch(`${versionFetchURL}?${_qs.default.stringify(versionParams)}`, {
                    credentials: 'include',
                    headers: {
                        'Accept-Language': i18n.language
                    }
                }).then((res)=>res.json());
                if (publishedJSON?.updatedAt) {
                    const newerVersionParams = {
                        ...versionParams,
                        where: {
                            ...versionParams.where,
                            and: [
                                ...versionParams.where.and,
                                {
                                    updatedAt: {
                                        greater_than: publishedJSON?.updatedAt
                                    }
                                }
                            ]
                        }
                    };
                    // Get any newer versions available
                    const newerVersionRes = await fetch(`${versionFetchURL}?${_qs.default.stringify(newerVersionParams)}`, {
                        credentials: 'include',
                        headers: {
                            'Accept-Language': i18n.language
                        }
                    });
                    if (newerVersionRes.status === 200) {
                        unpublishedVersionJSON = await newerVersionRes.json();
                    }
                }
            }
            setPublishedDoc(publishedJSON);
            setVersions(versionJSON);
            setUnpublishedVersions(unpublishedVersionJSON);
        }
    }, [
        i18n,
        global,
        collection,
        id,
        baseURL,
        code
    ]);
    const getDocPermissions = _react.default.useCallback(async ()=>{
        let docAccessURL;
        const params = {
            locale: code || undefined
        };
        if (pluralType === 'globals') {
            docAccessURL = `/globals/${slug}/access`;
        } else if (pluralType === 'collections' && id) {
            docAccessURL = `/${slug}/access/${id}`;
        }
        if (docAccessURL) {
            const res = await fetch(`${serverURL}${api}${docAccessURL}?${_qs.default.stringify(params)}`, {
                credentials: 'include',
                headers: {
                    'Accept-Language': i18n.language
                }
            });
            try {
                const json = await res.json();
                setDocPermissions(json);
            } catch (e) {
                console.error('Unable to fetch document permissions', e);
            }
        }
    }, [
        serverURL,
        api,
        pluralType,
        slug,
        id,
        i18n.language,
        code
    ]);
    const getDocPreferences = (0, _react.useCallback)(async ()=>{
        return getPreference(preferencesKey);
    }, [
        getPreference,
        preferencesKey
    ]);
    const setDocFieldPreferences = (0, _react.useCallback)(async (path, fieldPreferences)=>{
        const allPreferences = await getDocPreferences();
        if (preferencesKey) {
            try {
                await setPreference(preferencesKey, {
                    ...allPreferences,
                    fields: {
                        ...allPreferences?.fields || {},
                        [path]: {
                            ...allPreferences?.fields?.[path],
                            ...fieldPreferences
                        }
                    }
                });
            } catch (e) {
                console.error(e);
            }
        }
    }, [
        setPreference,
        preferencesKey,
        getDocPreferences
    ]);
    (0, _react.useEffect)(()=>{
        void getVersions();
    }, [
        getVersions
    ]);
    (0, _react.useEffect)(()=>{
        void getDocPermissions();
    }, [
        getDocPermissions
    ]);
    const action = _react.default.useMemo(()=>{
        const docURL = `${baseURL}${pluralType === 'globals' ? `/globals` : ''}/${slug}${id ? `/${id}` : ''}`;
        const params = {
            depth: 0,
            'fallback-locale': 'null',
            locale: code,
            uploadEdits: uploadEdits || undefined
        };
        return `${docURL}${_qs.default.stringify(params, {
            addQueryPrefix: true
        })}`;
    }, [
        baseURL,
        code,
        pluralType,
        id,
        slug,
        uploadEdits
    ]);
    const value = {
        id,
        slug,
        action,
        collection,
        docPermissions,
        getDocPermissions,
        getDocPreferences,
        getVersions,
        global,
        preferencesKey,
        publishedDoc,
        setDocFieldPreferences,
        unpublishedVersions,
        versions
    };
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: value
    }, children);
};
const DocumentInfoProvider = (props)=>{
    return /*#__PURE__*/ _react.default.createElement(_UploadEdits.UploadEditsProvider, null, /*#__PURE__*/ _react.default.createElement(DocumentInfo, props));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Eb2N1bWVudEluZm8vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyBmcm9tICdxcydcbmltcG9ydCBRdWVyeVN0cmluZyBmcm9tICdxcydcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHR5cGUgeyBUeXBlV2l0aFRpbWVzdGFtcHMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBhZ2luYXRlZERvY3MgfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhYmFzZS90eXBlcydcbmltcG9ydCB0eXBlIHsgVHlwZVdpdGhJRCB9IGZyb20gJy4uLy4uLy4uLy4uL2dsb2JhbHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBEb2N1bWVudFByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlZmVyZW5jZXMvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENvbnRleHRUeXBlLCBEb2N1bWVudFBlcm1pc3Npb25zLCBQcm9wcywgVmVyc2lvbiB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9BdXRoJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vQ29uZmlnJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vTG9jYWxlJ1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi9QcmVmZXJlbmNlcydcbmltcG9ydCB7IFVwbG9hZEVkaXRzUHJvdmlkZXIsIHVzZVVwbG9hZEVkaXRzIH0gZnJvbSAnLi4vVXBsb2FkRWRpdHMnXG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvbnRleHRUeXBlKVxuXG5leHBvcnQgY29uc3QgdXNlRG9jdW1lbnRJbmZvID0gKCk6IENvbnRleHRUeXBlID0+IHVzZUNvbnRleHQoQ29udGV4dClcblxuY29uc3QgRG9jdW1lbnRJbmZvOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBpZDogaWRGcm9tUHJvcHMsXG4gIGNoaWxkcmVuLFxuICBjb2xsZWN0aW9uLFxuICBnbG9iYWwsXG4gIGlkRnJvbVBhcmFtczogZ2V0SURGcm9tUGFyYW1zLFxufSkgPT4ge1xuICBjb25zdCB7IGlkOiBpZEZyb21QYXJhbXMgfSA9IHVzZVBhcmFtczx7IGlkOiBzdHJpbmcgfT4oKVxuICBjb25zdCBpZCA9IGlkRnJvbVByb3BzIHx8IChnZXRJREZyb21QYXJhbXMgPyBpZEZyb21QYXJhbXMgOiBudWxsKVxuXG4gIGNvbnN0IHtcbiAgICByb3V0ZXM6IHsgYXBpIH0sXG4gICAgc2VydmVyVVJMLFxuICB9ID0gdXNlQ29uZmlnKClcbiAgY29uc3QgeyBnZXRQcmVmZXJlbmNlLCBzZXRQcmVmZXJlbmNlIH0gPSB1c2VQcmVmZXJlbmNlcygpXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSB1c2VBdXRoKClcbiAgY29uc3QgeyBjb2RlIH0gPSB1c2VMb2NhbGUoKVxuICBjb25zdCB7IHVwbG9hZEVkaXRzIH0gPSB1c2VVcGxvYWRFZGl0cygpXG4gIGNvbnN0IFtwdWJsaXNoZWREb2MsIHNldFB1Ymxpc2hlZERvY10gPSB1c2VTdGF0ZTxUeXBlV2l0aElEICYgVHlwZVdpdGhUaW1lc3RhbXBzPihudWxsKVxuICBjb25zdCBbdmVyc2lvbnMsIHNldFZlcnNpb25zXSA9IHVzZVN0YXRlPFBhZ2luYXRlZERvY3M8VmVyc2lvbj4+KG51bGwpXG4gIGNvbnN0IFt1bnB1Ymxpc2hlZFZlcnNpb25zLCBzZXRVbnB1Ymxpc2hlZFZlcnNpb25zXSA9IHVzZVN0YXRlPFBhZ2luYXRlZERvY3M8VmVyc2lvbj4+KG51bGwpXG5cbiAgY29uc3QgYmFzZVVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX1gXG4gIGxldCBzbHVnOiBzdHJpbmdcbiAgbGV0IHBsdXJhbFR5cGU6ICdjb2xsZWN0aW9ucycgfCAnZ2xvYmFscydcbiAgbGV0IHByZWZlcmVuY2VzS2V5OiBzdHJpbmdcblxuICBpZiAoZ2xvYmFsKSB7XG4gICAgc2x1ZyA9IGdsb2JhbC5zbHVnXG4gICAgcGx1cmFsVHlwZSA9ICdnbG9iYWxzJ1xuICAgIHByZWZlcmVuY2VzS2V5ID0gYGdsb2JhbC0ke3NsdWd9YFxuICB9XG5cbiAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICBzbHVnID0gY29sbGVjdGlvbi5zbHVnXG4gICAgcGx1cmFsVHlwZSA9ICdjb2xsZWN0aW9ucydcblxuICAgIGlmIChpZCkge1xuICAgICAgcHJlZmVyZW5jZXNLZXkgPSBgY29sbGVjdGlvbi0ke3NsdWd9LSR7aWR9YFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFtkb2NQZXJtaXNzaW9ucywgc2V0RG9jUGVybWlzc2lvbnNdID0gdXNlU3RhdGU8RG9jdW1lbnRQZXJtaXNzaW9ucz4oXG4gICAgcGVybWlzc2lvbnNbcGx1cmFsVHlwZV1bc2x1Z10sXG4gIClcblxuICBjb25zdCBnZXRWZXJzaW9ucyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBsZXQgdmVyc2lvbkZldGNoVVJMXG4gICAgbGV0IHB1Ymxpc2hlZEZldGNoVVJMXG4gICAgbGV0IGRyYWZ0c0VuYWJsZWQgPSBmYWxzZVxuICAgIGxldCBzaG91bGRGZXRjaFZlcnNpb25zID0gZmFsc2VcbiAgICBsZXQgdW5wdWJsaXNoZWRWZXJzaW9uSlNPTiA9IG51bGxcbiAgICBsZXQgdmVyc2lvbkpTT04gPSBudWxsXG4gICAgbGV0IHNob3VsZEZldGNoID0gdHJ1ZVxuXG4gICAgY29uc3QgdmVyc2lvblBhcmFtcyA9IHtcbiAgICAgIGRlcHRoOiAwLFxuICAgICAgd2hlcmU6IHtcbiAgICAgICAgYW5kOiBbXSxcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgY29uc3QgcHVibGlzaGVkVmVyc2lvblBhcmFtczogeyBkZXB0aDogbnVtYmVyOyBsb2NhbGU6IHN0cmluZzsgd2hlcmU6IFdoZXJlIH0gPSB7XG4gICAgICBkZXB0aDogMCxcbiAgICAgIGxvY2FsZTogY29kZSB8fCB1bmRlZmluZWQsXG4gICAgICB3aGVyZToge1xuICAgICAgICBhbmQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX3N0YXR1czoge1xuICAgICAgICAgICAgICAgICAgZXF1YWxzOiAncHVibGlzaGVkJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX3N0YXR1czoge1xuICAgICAgICAgICAgICAgICAgZXhpc3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9XG5cbiAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICBkcmFmdHNFbmFibGVkID0gQm9vbGVhbihnbG9iYWw/LnZlcnNpb25zPy5kcmFmdHMpXG4gICAgICBzaG91bGRGZXRjaFZlcnNpb25zID0gQm9vbGVhbihnbG9iYWw/LnZlcnNpb25zKVxuICAgICAgdmVyc2lvbkZldGNoVVJMID0gYCR7YmFzZVVSTH0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfS92ZXJzaW9uc2BcbiAgICAgIHB1Ymxpc2hlZEZldGNoVVJMID0gYCR7YmFzZVVSTH0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfT8ke3FzLnN0cmluZ2lmeShcbiAgICAgICAgcHVibGlzaGVkVmVyc2lvblBhcmFtcyxcbiAgICAgICl9YFxuICAgIH1cblxuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICBkcmFmdHNFbmFibGVkID0gQm9vbGVhbihjb2xsZWN0aW9uPy52ZXJzaW9ucz8uZHJhZnRzKVxuICAgICAgc2hvdWxkRmV0Y2hWZXJzaW9ucyA9IEJvb2xlYW4oY29sbGVjdGlvbj8udmVyc2lvbnMpXG4gICAgICB2ZXJzaW9uRmV0Y2hVUkwgPSBgJHtiYXNlVVJMfS8ke2NvbGxlY3Rpb24uc2x1Z30vdmVyc2lvbnNgXG5cbiAgICAgIHB1Ymxpc2hlZFZlcnNpb25QYXJhbXMud2hlcmUuYW5kLnB1c2goe1xuICAgICAgICBpZDoge1xuICAgICAgICAgIGVxdWFsczogaWQsXG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICBwdWJsaXNoZWRGZXRjaFVSTCA9IGAke2Jhc2VVUkx9LyR7Y29sbGVjdGlvbi5zbHVnfT8ke3FzLnN0cmluZ2lmeShwdWJsaXNoZWRWZXJzaW9uUGFyYW1zKX1gXG5cbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgc2hvdWxkRmV0Y2ggPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICB2ZXJzaW9uUGFyYW1zLndoZXJlLmFuZC5wdXNoKHtcbiAgICAgICAgcGFyZW50OiB7XG4gICAgICAgICAgZXF1YWxzOiBpZCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHNob3VsZEZldGNoKSB7XG4gICAgICBsZXQgcHVibGlzaGVkSlNPTlxuXG4gICAgICBpZiAoZHJhZnRzRW5hYmxlZCkge1xuICAgICAgICBwdWJsaXNoZWRKU09OID0gYXdhaXQgZmV0Y2gocHVibGlzaGVkRmV0Y2hVUkwsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcblxuICAgICAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgICAgIHB1Ymxpc2hlZEpTT04gPSBwdWJsaXNoZWRKU09OPy5kb2NzPy5bMF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkRmV0Y2hWZXJzaW9ucykge1xuICAgICAgICB2ZXJzaW9uSlNPTiA9IGF3YWl0IGZldGNoKGAke3ZlcnNpb25GZXRjaFVSTH0/JHtxcy5zdHJpbmdpZnkodmVyc2lvblBhcmFtcyl9YCwge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXG4gICAgICAgIGlmIChwdWJsaXNoZWRKU09OPy51cGRhdGVkQXQpIHtcbiAgICAgICAgICBjb25zdCBuZXdlclZlcnNpb25QYXJhbXMgPSB7XG4gICAgICAgICAgICAuLi52ZXJzaW9uUGFyYW1zLFxuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgLi4udmVyc2lvblBhcmFtcy53aGVyZSxcbiAgICAgICAgICAgICAgYW5kOiBbXG4gICAgICAgICAgICAgICAgLi4udmVyc2lvblBhcmFtcy53aGVyZS5hbmQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlZEF0OiB7XG4gICAgICAgICAgICAgICAgICAgIGdyZWF0ZXJfdGhhbjogcHVibGlzaGVkSlNPTj8udXBkYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBHZXQgYW55IG5ld2VyIHZlcnNpb25zIGF2YWlsYWJsZVxuICAgICAgICAgIGNvbnN0IG5ld2VyVmVyc2lvblJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYCR7dmVyc2lvbkZldGNoVVJMfT8ke3FzLnN0cmluZ2lmeShuZXdlclZlcnNpb25QYXJhbXMpfWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG5ld2VyVmVyc2lvblJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgdW5wdWJsaXNoZWRWZXJzaW9uSlNPTiA9IGF3YWl0IG5ld2VyVmVyc2lvblJlcy5qc29uKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0UHVibGlzaGVkRG9jKHB1Ymxpc2hlZEpTT04pXG4gICAgICBzZXRWZXJzaW9ucyh2ZXJzaW9uSlNPTilcbiAgICAgIHNldFVucHVibGlzaGVkVmVyc2lvbnModW5wdWJsaXNoZWRWZXJzaW9uSlNPTilcbiAgICB9XG4gIH0sIFtpMThuLCBnbG9iYWwsIGNvbGxlY3Rpb24sIGlkLCBiYXNlVVJMLCBjb2RlXSlcblxuICBjb25zdCBnZXREb2NQZXJtaXNzaW9ucyA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBsZXQgZG9jQWNjZXNzVVJMOiBzdHJpbmdcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBsb2NhbGU6IGNvZGUgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgICBpZiAocGx1cmFsVHlwZSA9PT0gJ2dsb2JhbHMnKSB7XG4gICAgICBkb2NBY2Nlc3NVUkwgPSBgL2dsb2JhbHMvJHtzbHVnfS9hY2Nlc3NgXG4gICAgfSBlbHNlIGlmIChwbHVyYWxUeXBlID09PSAnY29sbGVjdGlvbnMnICYmIGlkKSB7XG4gICAgICBkb2NBY2Nlc3NVUkwgPSBgLyR7c2x1Z30vYWNjZXNzLyR7aWR9YFxuICAgIH1cblxuICAgIGlmIChkb2NBY2Nlc3NVUkwpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3NlcnZlclVSTH0ke2FwaX0ke2RvY0FjY2Vzc1VSTH0/JHtxcy5zdHJpbmdpZnkocGFyYW1zKX1gLCB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICBzZXREb2NQZXJtaXNzaW9ucyhqc29uKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggZG9jdW1lbnQgcGVybWlzc2lvbnMnLCBlKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3NlcnZlclVSTCwgYXBpLCBwbHVyYWxUeXBlLCBzbHVnLCBpZCwgaTE4bi5sYW5ndWFnZSwgY29kZV0pXG5cbiAgY29uc3QgZ2V0RG9jUHJlZmVyZW5jZXMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGdldFByZWZlcmVuY2U8RG9jdW1lbnRQcmVmZXJlbmNlcz4ocHJlZmVyZW5jZXNLZXkpXG4gIH0sIFtnZXRQcmVmZXJlbmNlLCBwcmVmZXJlbmNlc0tleV0pXG5cbiAgY29uc3Qgc2V0RG9jRmllbGRQcmVmZXJlbmNlcyA9IHVzZUNhbGxiYWNrPENvbnRleHRUeXBlWydzZXREb2NGaWVsZFByZWZlcmVuY2VzJ10+KFxuICAgIGFzeW5jIChwYXRoLCBmaWVsZFByZWZlcmVuY2VzKSA9PiB7XG4gICAgICBjb25zdCBhbGxQcmVmZXJlbmNlcyA9IGF3YWl0IGdldERvY1ByZWZlcmVuY2VzKClcblxuICAgICAgaWYgKHByZWZlcmVuY2VzS2V5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgc2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlc0tleSwge1xuICAgICAgICAgICAgLi4uYWxsUHJlZmVyZW5jZXMsXG4gICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgLi4uKGFsbFByZWZlcmVuY2VzPy5maWVsZHMgfHwge30pLFxuICAgICAgICAgICAgICBbcGF0aF06IHtcbiAgICAgICAgICAgICAgICAuLi5hbGxQcmVmZXJlbmNlcz8uZmllbGRzPy5bcGF0aF0sXG4gICAgICAgICAgICAgICAgLi4uZmllbGRQcmVmZXJlbmNlcyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW3NldFByZWZlcmVuY2UsIHByZWZlcmVuY2VzS2V5LCBnZXREb2NQcmVmZXJlbmNlc10sXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZvaWQgZ2V0VmVyc2lvbnMoKVxuICB9LCBbZ2V0VmVyc2lvbnNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdm9pZCBnZXREb2NQZXJtaXNzaW9ucygpXG4gIH0sIFtnZXREb2NQZXJtaXNzaW9uc10pXG5cbiAgY29uc3QgYWN0aW9uOiBzdHJpbmcgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBkb2NVUkwgPSBgJHtiYXNlVVJMfSR7cGx1cmFsVHlwZSA9PT0gJ2dsb2JhbHMnID8gYC9nbG9iYWxzYCA6ICcnfS8ke3NsdWd9JHtpZCA/IGAvJHtpZH1gIDogJyd9YFxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGRlcHRoOiAwLFxuICAgICAgJ2ZhbGxiYWNrLWxvY2FsZSc6ICdudWxsJyxcbiAgICAgIGxvY2FsZTogY29kZSxcbiAgICAgIHVwbG9hZEVkaXRzOiB1cGxvYWRFZGl0cyB8fCB1bmRlZmluZWQsXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke2RvY1VSTH0ke1F1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMsIHtcbiAgICAgIGFkZFF1ZXJ5UHJlZml4OiB0cnVlLFxuICAgIH0pfWBcbiAgfSwgW2Jhc2VVUkwsIGNvZGUsIHBsdXJhbFR5cGUsIGlkLCBzbHVnLCB1cGxvYWRFZGl0c10pXG5cbiAgY29uc3QgdmFsdWU6IENvbnRleHRUeXBlID0ge1xuICAgIGlkLFxuICAgIHNsdWcsXG4gICAgYWN0aW9uLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgZG9jUGVybWlzc2lvbnMsXG4gICAgZ2V0RG9jUGVybWlzc2lvbnMsXG4gICAgZ2V0RG9jUHJlZmVyZW5jZXMsXG4gICAgZ2V0VmVyc2lvbnMsXG4gICAgZ2xvYmFsLFxuICAgIHByZWZlcmVuY2VzS2V5LFxuICAgIHB1Ymxpc2hlZERvYyxcbiAgICBzZXREb2NGaWVsZFByZWZlcmVuY2VzLFxuICAgIHVucHVibGlzaGVkVmVyc2lvbnMsXG4gICAgdmVyc2lvbnMsXG4gIH1cblxuICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxufVxuXG5leHBvcnQgY29uc3QgRG9jdW1lbnRJbmZvUHJvdmlkZXI6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxVcGxvYWRFZGl0c1Byb3ZpZGVyPlxuICAgICAgPERvY3VtZW50SW5mbyB7Li4ucHJvcHN9IC8+XG4gICAgPC9VcGxvYWRFZGl0c1Byb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiRG9jdW1lbnRJbmZvUHJvdmlkZXIiLCJ1c2VEb2N1bWVudEluZm8iLCJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEb2N1bWVudEluZm8iLCJpZCIsImlkRnJvbVByb3BzIiwiY2hpbGRyZW4iLCJjb2xsZWN0aW9uIiwiZ2xvYmFsIiwiaWRGcm9tUGFyYW1zIiwiZ2V0SURGcm9tUGFyYW1zIiwidXNlUGFyYW1zIiwicm91dGVzIiwiYXBpIiwic2VydmVyVVJMIiwidXNlQ29uZmlnIiwiZ2V0UHJlZmVyZW5jZSIsInNldFByZWZlcmVuY2UiLCJ1c2VQcmVmZXJlbmNlcyIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsInBlcm1pc3Npb25zIiwidXNlQXV0aCIsImNvZGUiLCJ1c2VMb2NhbGUiLCJ1cGxvYWRFZGl0cyIsInVzZVVwbG9hZEVkaXRzIiwicHVibGlzaGVkRG9jIiwic2V0UHVibGlzaGVkRG9jIiwidXNlU3RhdGUiLCJ2ZXJzaW9ucyIsInNldFZlcnNpb25zIiwidW5wdWJsaXNoZWRWZXJzaW9ucyIsInNldFVucHVibGlzaGVkVmVyc2lvbnMiLCJiYXNlVVJMIiwic2x1ZyIsInBsdXJhbFR5cGUiLCJwcmVmZXJlbmNlc0tleSIsImRvY1Blcm1pc3Npb25zIiwic2V0RG9jUGVybWlzc2lvbnMiLCJnZXRWZXJzaW9ucyIsInVzZUNhbGxiYWNrIiwidmVyc2lvbkZldGNoVVJMIiwicHVibGlzaGVkRmV0Y2hVUkwiLCJkcmFmdHNFbmFibGVkIiwic2hvdWxkRmV0Y2hWZXJzaW9ucyIsInVucHVibGlzaGVkVmVyc2lvbkpTT04iLCJ2ZXJzaW9uSlNPTiIsInNob3VsZEZldGNoIiwidmVyc2lvblBhcmFtcyIsImRlcHRoIiwid2hlcmUiLCJhbmQiLCJwdWJsaXNoZWRWZXJzaW9uUGFyYW1zIiwibG9jYWxlIiwidW5kZWZpbmVkIiwib3IiLCJfc3RhdHVzIiwiZXF1YWxzIiwiZXhpc3RzIiwiQm9vbGVhbiIsImRyYWZ0cyIsInFzIiwic3RyaW5naWZ5IiwicHVzaCIsInBhcmVudCIsInB1Ymxpc2hlZEpTT04iLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImxhbmd1YWdlIiwidGhlbiIsInJlcyIsImpzb24iLCJkb2NzIiwidXBkYXRlZEF0IiwibmV3ZXJWZXJzaW9uUGFyYW1zIiwiZ3JlYXRlcl90aGFuIiwibmV3ZXJWZXJzaW9uUmVzIiwic3RhdHVzIiwiZ2V0RG9jUGVybWlzc2lvbnMiLCJSZWFjdCIsImRvY0FjY2Vzc1VSTCIsInBhcmFtcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXREb2NQcmVmZXJlbmNlcyIsInNldERvY0ZpZWxkUHJlZmVyZW5jZXMiLCJwYXRoIiwiZmllbGRQcmVmZXJlbmNlcyIsImFsbFByZWZlcmVuY2VzIiwiZmllbGRzIiwidXNlRWZmZWN0IiwiYWN0aW9uIiwidXNlTWVtbyIsImRvY1VSTCIsIlF1ZXJ5U3RyaW5nIiwiYWRkUXVlcnlQcmVmaXgiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwicHJvcHMiLCJVcGxvYWRFZGl0c1Byb3ZpZGVyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBOFNhQSxvQkFBb0I7ZUFBcEJBOztJQXpSQUMsZUFBZTtlQUFmQTs7OzJEQXJCRTsrREFFb0U7OEJBQ3BEO2dDQUNMO3NCQVNGO3dCQUNFO3dCQUNBOzZCQUNLOzZCQUNxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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