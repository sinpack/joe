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
const _getTranslation = require("../../../../utilities/getTranslation");
const _useDebounce = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useDebounce"));
const _Search = /*#__PURE__*/ _interop_require_default(require("../../icons/Search"));
const _SearchParams = require("../../utilities/SearchParams");
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
const baseClass = 'search-filter';
const SearchFilter = (props)=>{
    const { fieldLabel = 'ID', fieldName = 'id', handleChange, listSearchableFields, modifySearchQuery = true } = props;
    const params = (0, _SearchParams.useSearchParams)();
    const history = (0, _reactrouterdom.useHistory)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    const [search, setSearch] = (0, _react.useState)(typeof params?.search === 'string' ? params?.search : '');
    const [previousSearch, setPreviousSearch] = (0, _react.useState)('');
    const placeholder = (0, _react.useRef)(t('searchBy', {
        label: (0, _getTranslation.getTranslation)(fieldLabel, i18n)
    }));
    const debouncedSearch = (0, _useDebounce.default)(search, 300);
    (0, _react.useEffect)(()=>{
        if (debouncedSearch !== previousSearch) {
            if (handleChange) handleChange(debouncedSearch);
            if (modifySearchQuery) {
                history.replace({
                    search: _qs.default.stringify({
                        ...params,
                        page: 1,
                        search: debouncedSearch || undefined
                    })
                });
            }
            setPreviousSearch(debouncedSearch);
        }
    }, [
        debouncedSearch,
        previousSearch,
        history,
        fieldName,
        params,
        handleChange,
        modifySearchQuery,
        listSearchableFields
    ]);
    (0, _react.useEffect)(()=>{
        if (listSearchableFields?.length > 0) {
            placeholder.current = listSearchableFields.reduce((prev, curr, i)=>{
                if (i === 0) {
                    return `${t('searchBy', {
                        label: (0, _getTranslation.getTranslation)(curr.label || curr.name, i18n)
                    })}`;
                }
                if (i === listSearchableFields.length - 1) {
                    return `${prev} ${t('or')} ${(0, _getTranslation.getTranslation)(curr.label || curr.name, i18n)}`;
                }
                return `${prev}, ${(0, _getTranslation.getTranslation)(curr.label || curr.name, i18n)}`;
            }, '');
        } else {
            placeholder.current = t('searchBy', {
                label: (0, _getTranslation.getTranslation)(fieldLabel, i18n)
            });
        }
    }, [
        t,
        listSearchableFields,
        i18n,
        fieldLabel
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("input", {
        className: `${baseClass}__input`,
        onChange: (e)=>setSearch(e.target.value),
        placeholder: placeholder.current,
        type: "text",
        value: search || ''
    }), /*#__PURE__*/ _react.default.createElement(_Search.default, null));
};
const _default = SearchFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NlYXJjaEZpbHRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3FzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VEZWJvdW5jZSdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vLi4vaWNvbnMvU2VhcmNoJ1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1NlYXJjaFBhcmFtcydcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnc2VhcmNoLWZpbHRlcidcblxuY29uc3QgU2VhcmNoRmlsdGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGZpZWxkTGFiZWwgPSAnSUQnLFxuICAgIGZpZWxkTmFtZSA9ICdpZCcsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICAgIGxpc3RTZWFyY2hhYmxlRmllbGRzLFxuICAgIG1vZGlmeVNlYXJjaFF1ZXJ5ID0gdHJ1ZSxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgcGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcblxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUodHlwZW9mIHBhcmFtcz8uc2VhcmNoID09PSAnc3RyaW5nJyA/IHBhcmFtcz8uc2VhcmNoIDogJycpXG4gIGNvbnN0IFtwcmV2aW91c1NlYXJjaCwgc2V0UHJldmlvdXNTZWFyY2hdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgcGxhY2Vob2xkZXIgPSB1c2VSZWYodCgnc2VhcmNoQnknLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihmaWVsZExhYmVsLCBpMThuKSB9KSlcblxuICBjb25zdCBkZWJvdW5jZWRTZWFyY2ggPSB1c2VEZWJvdW5jZShzZWFyY2gsIDMwMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWJvdW5jZWRTZWFyY2ggIT09IHByZXZpb3VzU2VhcmNoKSB7XG4gICAgICBpZiAoaGFuZGxlQ2hhbmdlKSBoYW5kbGVDaGFuZ2UoZGVib3VuY2VkU2VhcmNoKVxuXG4gICAgICBpZiAobW9kaWZ5U2VhcmNoUXVlcnkpIHtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHtcbiAgICAgICAgICBzZWFyY2g6IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgc2VhcmNoOiBkZWJvdW5jZWRTZWFyY2ggfHwgdW5kZWZpbmVkLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBzZXRQcmV2aW91c1NlYXJjaChkZWJvdW5jZWRTZWFyY2gpXG4gICAgfVxuICB9LCBbXG4gICAgZGVib3VuY2VkU2VhcmNoLFxuICAgIHByZXZpb3VzU2VhcmNoLFxuICAgIGhpc3RvcnksXG4gICAgZmllbGROYW1lLFxuICAgIHBhcmFtcyxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgbW9kaWZ5U2VhcmNoUXVlcnksXG4gICAgbGlzdFNlYXJjaGFibGVGaWVsZHMsXG4gIF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGlzdFNlYXJjaGFibGVGaWVsZHM/Lmxlbmd0aCA+IDApIHtcbiAgICAgIHBsYWNlaG9sZGVyLmN1cnJlbnQgPSBsaXN0U2VhcmNoYWJsZUZpZWxkcy5yZWR1Y2U8c3RyaW5nPigocHJldiwgY3VyciwgaSkgPT4ge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBgJHt0KCdzZWFyY2hCeScsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGN1cnIubGFiZWwgfHwgY3Vyci5uYW1lLCBpMThuKSB9KX1gXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IGxpc3RTZWFyY2hhYmxlRmllbGRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXR1cm4gYCR7cHJldn0gJHt0KCdvcicpfSAke2dldFRyYW5zbGF0aW9uKGN1cnIubGFiZWwgfHwgY3Vyci5uYW1lLCBpMThuKX1gXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3ByZXZ9LCAke2dldFRyYW5zbGF0aW9uKGN1cnIubGFiZWwgfHwgY3Vyci5uYW1lLCBpMThuKX1gXG4gICAgICB9LCAnJylcbiAgICB9IGVsc2Uge1xuICAgICAgcGxhY2Vob2xkZXIuY3VycmVudCA9IHQoJ3NlYXJjaEJ5JywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oZmllbGRMYWJlbCwgaTE4bikgfSlcbiAgICB9XG4gIH0sIFt0LCBsaXN0U2VhcmNoYWJsZUZpZWxkcywgaTE4biwgZmllbGRMYWJlbF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2lucHV0YH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIuY3VycmVudH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17c2VhcmNoIHx8ICcnfVxuICAgICAgLz5cbiAgICAgIDxTZWFyY2ggLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGaWx0ZXJcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJTZWFyY2hGaWx0ZXIiLCJwcm9wcyIsImZpZWxkTGFiZWwiLCJmaWVsZE5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJsaXN0U2VhcmNoYWJsZUZpZWxkcyIsIm1vZGlmeVNlYXJjaFF1ZXJ5IiwicGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJpMThuIiwidCIsInVzZVRyYW5zbGF0aW9uIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJwcmV2aW91c1NlYXJjaCIsInNldFByZXZpb3VzU2VhcmNoIiwicGxhY2Vob2xkZXIiLCJ1c2VSZWYiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwiZGVib3VuY2VkU2VhcmNoIiwidXNlRGVib3VuY2UiLCJ1c2VFZmZlY3QiLCJyZXBsYWNlIiwicXVlcnlTdHJpbmciLCJzdHJpbmdpZnkiLCJwYWdlIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiY3VycmVudCIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiaSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsIlNlYXJjaCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBNEZBOzs7ZUFBQTs7OzJE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