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
    RelationshipProvider: function() {
        return RelationshipProvider;
    },
    useListRelationships: function() {
        return useListRelationships;
    }
});
const _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _useDebounce = /*#__PURE__*/ _interop_require_default(require("../../../../../hooks/useDebounce"));
const _Config = require("../../../../utilities/Config");
const _Locale = require("../../../../utilities/Locale");
const _reducer = require("./reducer");
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
const RelationshipProvider = ({ children })=>{
    const [documents, dispatchDocuments] = (0, _react.useReducer)(_reducer.reducer, {});
    const debouncedDocuments = (0, _useDebounce.default)(documents, 100);
    const config = (0, _Config.useConfig)();
    const { i18n } = (0, _reacti18next.useTranslation)();
    const { code: locale } = (0, _Locale.useLocale)();
    const prevLocale = (0, _react.useRef)(locale);
    const { routes: { api }, serverURL } = config;
    const loadRelationshipDocs = (0, _react.useCallback)(async (reloadAll = false)=>{
        Object.entries(debouncedDocuments).forEach(async ([slug, docs])=>{
            const idsToLoad = [];
            Object.entries(docs).forEach(([id, value])=>{
                if (value === null || reloadAll) {
                    idsToLoad.push(id);
                }
            });
            if (idsToLoad.length > 0) {
                const url = `${serverURL}${api}/${slug}`;
                const params = {
                    depth: 0,
                    limit: 250,
                    locale,
                    'where[id][in]': idsToLoad
                };
                const query = _qs.default.stringify(params, {
                    addQueryPrefix: true
                });
                const result = await fetch(`${url}${query}`, {
                    credentials: 'include',
                    headers: {
                        'Accept-Language': i18n.language
                    }
                });
                if (result.ok) {
                    const json = await result.json();
                    if (json.docs) {
                        dispatchDocuments({
                            docs: json.docs,
                            idsToLoad,
                            relationTo: slug,
                            type: 'ADD_LOADED'
                        });
                    }
                } else {
                    dispatchDocuments({
                        docs: [],
                        idsToLoad,
                        relationTo: slug,
                        type: 'ADD_LOADED'
                    });
                }
            }
        });
    }, [
        debouncedDocuments,
        serverURL,
        api,
        i18n,
        locale
    ]);
    (0, _react.useEffect)(()=>{
        loadRelationshipDocs(locale && prevLocale.current !== locale);
        prevLocale.current = locale;
    }, [
        locale,
        loadRelationshipDocs
    ]);
    const getRelationships = (0, _react.useCallback)(async (relationships)=>{
        dispatchDocuments({
            docs: relationships,
            type: 'REQUEST'
        });
    }, []);
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: {
            documents,
            getRelationships
        }
    }, children);
};
const useListRelationships = ()=>(0, _react.useContext)(Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvUmVsYXRpb25zaGlwUHJvdmlkZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVyeXN0cmluZyBmcm9tICdxcydcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBUeXBlV2l0aElEIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlRGVib3VuY2UnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSdcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXInXG5cbi8vIGRvY3VtZW50cyBhcmUgZmlyc3Qgc2V0IHRvIG51bGwgd2hlbiByZXF1ZXN0ZWRcbi8vIHNldCB0byBmYWxzZSB3aGVuIG5vIGRvYyBpcyByZXR1cm5lZFxuLy8gb3Igc2V0IHRvIHRoZSBkb2N1bWVudCByZXR1cm5lZFxuZXhwb3J0IHR5cGUgRG9jdW1lbnRzID0ge1xuICBbc2x1Zzogc3RyaW5nXToge1xuICAgIFtpZDogbnVtYmVyIHwgc3RyaW5nXTogVHlwZVdpdGhJRCB8IGZhbHNlIHwgbnVsbFxuICB9XG59XG5cbnR5cGUgTGlzdFJlbGF0aW9uc2hpcENvbnRleHQgPSB7XG4gIGRvY3VtZW50czogRG9jdW1lbnRzXG4gIGdldFJlbGF0aW9uc2hpcHM6IChcbiAgICBkb2NzOiB7XG4gICAgICByZWxhdGlvblRvOiBzdHJpbmdcbiAgICAgIHZhbHVlOiBudW1iZXIgfCBzdHJpbmdcbiAgICB9W10sXG4gICkgPT4gdm9pZFxufVxuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBMaXN0UmVsYXRpb25zaGlwQ29udGV4dClcblxuZXhwb3J0IGNvbnN0IFJlbGF0aW9uc2hpcFByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZG9jdW1lbnRzLCBkaXNwYXRjaERvY3VtZW50c10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHt9KVxuICBjb25zdCBkZWJvdW5jZWREb2N1bWVudHMgPSB1c2VEZWJvdW5jZShkb2N1bWVudHMsIDEwMClcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKClcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKVxuICBjb25zdCBwcmV2TG9jYWxlID0gdXNlUmVmKGxvY2FsZSlcblxuICBjb25zdCB7XG4gICAgcm91dGVzOiB7IGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IGNvbmZpZ1xuXG4gIGNvbnN0IGxvYWRSZWxhdGlvbnNoaXBEb2NzID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHJlbG9hZEFsbCA9IGZhbHNlKSA9PiB7XG4gICAgICBPYmplY3QuZW50cmllcyhkZWJvdW5jZWREb2N1bWVudHMpLmZvckVhY2goYXN5bmMgKFtzbHVnLCBkb2NzXSkgPT4ge1xuICAgICAgICBjb25zdCBpZHNUb0xvYWQ6IChudW1iZXIgfCBzdHJpbmcpW10gPSBbXVxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGRvY3MpLmZvckVhY2goKFtpZCwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHJlbG9hZEFsbCkge1xuICAgICAgICAgICAgaWRzVG9Mb2FkLnB1c2goaWQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChpZHNUb0xvYWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHVybCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfWBcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgICAgIGxpbWl0OiAyNTAsXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICAnd2hlcmVbaWRdW2luXSc6IGlkc1RvTG9hZCxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBxdWVyeSA9IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeShwYXJhbXMsIHsgYWRkUXVlcnlQcmVmaXg6IHRydWUgfSlcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHtxdWVyeX1gLCB7XG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmIChyZXN1bHQub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXN1bHQuanNvbigpXG4gICAgICAgICAgICBpZiAoanNvbi5kb2NzKSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoRG9jdW1lbnRzKHtcbiAgICAgICAgICAgICAgICBkb2NzOiBqc29uLmRvY3MsXG4gICAgICAgICAgICAgICAgaWRzVG9Mb2FkLFxuICAgICAgICAgICAgICAgIHJlbGF0aW9uVG86IHNsdWcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ0FERF9MT0FERUQnLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwYXRjaERvY3VtZW50cyh7IGRvY3M6IFtdLCBpZHNUb0xvYWQsIHJlbGF0aW9uVG86IHNsdWcsIHR5cGU6ICdBRERfTE9BREVEJyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIFtkZWJvdW5jZWREb2N1bWVudHMsIHNlcnZlclVSTCwgYXBpLCBpMThuLCBsb2NhbGVdLFxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkUmVsYXRpb25zaGlwRG9jcyhsb2NhbGUgJiYgcHJldkxvY2FsZS5jdXJyZW50ICE9PSBsb2NhbGUpXG4gICAgcHJldkxvY2FsZS5jdXJyZW50ID0gbG9jYWxlXG4gIH0sIFtsb2NhbGUsIGxvYWRSZWxhdGlvbnNoaXBEb2NzXSlcblxuICBjb25zdCBnZXRSZWxhdGlvbnNoaXBzID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHJlbGF0aW9uc2hpcHM6IHsgcmVsYXRpb25Ubzogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIH1bXSkgPT4ge1xuICAgICAgZGlzcGF0Y2hEb2N1bWVudHMoeyBkb2NzOiByZWxhdGlvbnNoaXBzLCB0eXBlOiAnUkVRVUVTVCcgfSlcbiAgICB9LFxuICAgIFtdLFxuICApXG5cbiAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGRvY3VtZW50cywgZ2V0UmVsYXRpb25zaGlwcyB9fT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxufVxuXG5leHBvcnQgY29uc3QgdXNlTGlzdFJlbGF0aW9uc2hpcHMgPSAoKTogTGlzdFJlbGF0aW9uc2hpcENvbnRleHQgPT4gdXNlQ29udGV4dChDb250ZXh0KVxuIl0sIm5hbWVzIjpbIlJlbGF0aW9uc2hpcFByb3ZpZGVyIiwidXNlTGlzdFJlbGF0aW9uc2hpcHMiLCJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNoaWxkcmVuIiwiZG9jdW1lbnRzIiwiZGlzcGF0Y2hEb2N1bWVudHMiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsImRlYm91bmNlZERvY3VtZW50cyIsInVzZURlYm91bmNlIiwiY29uZmlnIiwidXNlQ29uZmlnIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwiY29kZSIsImxvY2FsZSIsInVzZUxvY2FsZSIsInByZXZMb2NhbGUiLCJ1c2VSZWYiLCJyb3V0ZXMiLCJhcGkiLCJzZXJ2ZXJVUkwiLCJsb2FkUmVsYXRpb25zaGlwRG9jcyIsInVzZUNhbGxiYWNrIiwicmVsb2FkQWxsIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJzbHVnIiwiZG9jcyIsImlkc1RvTG9hZCIsImlkIiwidmFsdWUiLCJwdXNoIiwibGVuZ3RoIiwidXJsIiwicGFyYW1zIiwiZGVwdGgiLCJsaW1pdCIsInF1ZXJ5IiwicXVlcnlzdHJpbmciLCJzdHJpbmdpZnkiLCJhZGRRdWVyeVByZWZpeCIsInJlc3VsdCIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJvayIsImpzb24iLCJyZWxhdGlvblRvIiwidHlwZSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJnZXRSZWxhdGlvbnNoaXBzIiwicmVsYXRpb25zaGlwcyIsIlByb3ZpZGVyIiwidXNlQ29udGV4dCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFnQ2FBLG9CQUFvQjtlQUFwQkE7O0lBMkVBQyxvQkFBb0I7ZUFBcEJBOzs7MkRBM0dXOytEQUNxRTs4QkFDOUQ7b0VBSVA7d0JBQ0U7d0JBQ0E7eUJBQ0Y7Ozs7Ozs7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