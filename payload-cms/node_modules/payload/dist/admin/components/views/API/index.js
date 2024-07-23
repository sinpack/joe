"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "API", {
    enumerable: true,
    get: function() {
        return API;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _ = require("../..");
const _api = require("../../../api");
const _CopyToClipboard = /*#__PURE__*/ _interop_require_default(require("../../elements/CopyToClipboard"));
const _Gutter = require("../../elements/Gutter");
const _Input = require("../../forms/field-types/Checkbox/Input");
const _Input1 = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/Select/Input"));
const _MinimizeMaximize = require("../../icons/MinimizeMaximize");
const _ActionsProvider = require("../../utilities/ActionsProvider");
const _Config = require("../../utilities/Config");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _Locale = require("../../utilities/Locale");
const _SetStepNav = require("../collections/Edit/SetStepNav");
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
const chars = {
    leftCurlyBracket: '\u007B',
    leftSquareBracket: '\u005B',
    rightCurlyBracket: '\u007D',
    rightSquareBracket: '\u005D'
};
const baseClass = 'query-inspector';
const Bracket = ({ type, comma = false, position })=>{
    const rightBracket = type === 'object' ? chars.rightCurlyBracket : chars.rightSquareBracket;
    const leftBracket = type === 'object' ? chars.leftCurlyBracket : chars.leftSquareBracket;
    const bracketToRender = position === 'end' ? rightBracket : leftBracket;
    return /*#__PURE__*/ _react.createElement("span", {
        className: `${baseClass}__bracket ${baseClass}__bracket--position-${position}`
    }, bracketToRender, position === 'end' && comma ? ',' : null);
};
const RecursivelyRenderObjectData = ({ isEmpty = false, object, objectKey, parentType = 'object', trailingComma = false })=>{
    const objectKeys = Object.keys(object);
    const objectLength = objectKeys.length;
    const [isOpen, setIsOpen] = _react.useState(true);
    const isNestedAndEmpty = isEmpty && (parentType === 'object' || parentType === 'array');
    return /*#__PURE__*/ _react.createElement("li", {
        className: isNestedAndEmpty ? `${baseClass}__row-line--nested` : ''
    }, /*#__PURE__*/ _react.createElement("button", {
        "aria-label": "toggle",
        className: `${baseClass}__list-toggle ${isEmpty ? `${baseClass}__list-toggle--empty` : ''}`,
        onClick: ()=>setIsOpen(!isOpen),
        type: "button"
    }, isEmpty ? null : /*#__PURE__*/ _react.createElement(_.Chevron, {
        className: `${baseClass}__toggle-row-icon ${baseClass}__toggle-row-icon--${isOpen ? 'open' : 'closed'}`
    }), /*#__PURE__*/ _react.createElement("span", null, objectKey && `"${objectKey}": `, /*#__PURE__*/ _react.createElement(Bracket, {
        position: "start",
        type: parentType
    }), isEmpty ? /*#__PURE__*/ _react.createElement(Bracket, {
        comma: trailingComma,
        position: "end",
        type: parentType
    }) : null)), /*#__PURE__*/ _react.createElement("ul", {
        className: `${baseClass}__json-children`
    }, isOpen && objectKeys.map((key, keyIndex)=>{
        let value = object[key];
        let type = 'string';
        const isLastKey = keyIndex === objectLength - 1;
        if (value === null) {
            type = 'null';
        } else if (value instanceof Date) {
            type = 'date';
            value = value.toISOString();
        } else if (Array.isArray(value)) {
            type = 'array';
        } else if (typeof value === 'object') {
            type = 'object';
        } else if (typeof value === 'number') {
            type = 'number';
        } else if (typeof value === 'boolean') {
            type = 'boolean';
        } else {
            type = 'string';
        }
        if (type === 'object' || type === 'array') {
            return /*#__PURE__*/ _react.createElement(RecursivelyRenderObjectData, {
                isEmpty: value.length === 0 || Object.keys(value).length === 0,
                key: `${key}-${keyIndex}`,
                object: value,
                objectKey: parentType === 'object' ? key : undefined,
                parentType: type,
                trailingComma: !isLastKey
            });
        }
        if (type === 'date' || type === 'string' || type === 'null' || type === 'number' || type === 'boolean') {
            const parentHasKey = Boolean(parentType === 'object' && key);
            const rowClasses = [
                `${baseClass}__row-line`,
                `${baseClass}__value-type--${type}`,
                `${baseClass}__row-line--${objectKey ? 'nested' : 'top'}`
            ].filter(Boolean).join(' ');
            return /*#__PURE__*/ _react.createElement("li", {
                className: rowClasses,
                key: `${key}-${keyIndex}`
            }, parentHasKey ? /*#__PURE__*/ _react.createElement("span", null, `"${key}": `) : null, /*#__PURE__*/ _react.createElement("span", {
                className: `${baseClass}__value`
            }, JSON.stringify(value)), isLastKey ? '' : ',');
        }
    })), !isEmpty && /*#__PURE__*/ _react.createElement("span", null, /*#__PURE__*/ _react.createElement(Bracket, {
        comma: trailingComma,
        position: "end",
        type: parentType
    })));
};
function createURL(url) {
    if (url.startsWith('/')) {
        const domain = window.location.origin;
        return new URL(url, domain);
    } else {
        return new URL(url);
    }
}
const API = (props)=>{
    const { apiURL } = props;
    const { i18n, t } = (0, _reacti18next.useTranslation)();
    const { localization, routes: { api }, serverURL } = (0, _Config.useConfig)();
    const { id, collection, global } = (0, _DocumentInfo.useDocumentInfo)();
    const { code } = (0, _Locale.useLocale)();
    const url = createURL(apiURL);
    const { setViewActions } = (0, _ActionsProvider.useActions)();
    const draftsEnabled = collection?.versions?.drafts || global?.versions?.drafts;
    const docEndpoint = global ? `/globals/${global.slug}` : `/${collection.slug}/${id}`;
    const [data, setData] = _react.useState({});
    const [draft, setDraft] = _react.useState(url.searchParams.get('draft') === 'true');
    const [locale, setLocale] = _react.useState(url.searchParams.get('locale') || code);
    const [depth, setDepth] = _react.useState(url.searchParams.get('depth') || '1');
    const [authenticated, setAuthenticated] = _react.useState(true);
    const [fullscreen, setFullscreen] = _react.useState(false);
    const fetchURL = `${serverURL}${api}${docEndpoint}?locale=${locale}&draft=${draft}&depth=${depth}`;
    _react.useEffect(()=>{
        const fetchData = async ()=>{
            const request = await _api.requests.get(fetchURL, {
                credentials: authenticated ? 'include' : 'omit',
                headers: {
                    'Accept-Language': i18n.language
                }
            });
            const json = await request.json();
            setData(json);
        };
        fetchData();
    }, [
        i18n.language,
        fetchURL,
        authenticated
    ]);
    _react.useEffect(()=>{
        const editConfig = (collection || global)?.admin?.components?.views?.Edit;
        const apiActions = editConfig && 'API' in editConfig && 'actions' in editConfig.API ? editConfig.API.actions : [];
        setViewActions(apiActions);
        return ()=>{
            setViewActions([]);
        };
    }, [
        collection,
        global,
        setViewActions
    ]);
    const localeOptions = localization && localization.locales.map((locale)=>({
            label: locale.label,
            value: locale.code
        }));
    const classes = [
        baseClass,
        fullscreen && `${baseClass}--fullscreen`
    ].filter(Boolean).join(' ');
    let isEditing;
    if ('collection' in props) {
        isEditing = props?.isEditing;
    }
    return /*#__PURE__*/ _react.createElement(_Gutter.Gutter, {
        className: classes,
        right: false
    }, /*#__PURE__*/ _react.createElement(_SetStepNav.SetStepNav, {
        collection: collection,
        global: global,
        id: id,
        isEditing: isEditing,
        view: "API"
    }), /*#__PURE__*/ _react.createElement("div", {
        className: `${baseClass}__configuration`
    }, /*#__PURE__*/ _react.createElement("div", {
        className: `${baseClass}__api-url`
    }, /*#__PURE__*/ _react.createElement("span", {
        className: `${baseClass}__label`
    }, "API URL ", /*#__PURE__*/ _react.createElement(_CopyToClipboard.default, {
        value: fetchURL
    })), /*#__PURE__*/ _react.createElement("a", {
        href: fetchURL,
        rel: "noopener noreferrer",
        target: "_blank"
    }, fetchURL)), /*#__PURE__*/ _react.createElement("div", {
        className: `${baseClass}__form-fields`
    }, /*#__PURE__*/ _react.createElement("div", {
        className: `${baseClass}__filter-query-checkboxes`
    }, draftsEnabled && /*#__PURE__*/ _react.createElement(_Input.CheckboxInput, {
        checked: draft,
        id: "draft-checkbox",
        label: t('version:draft'),
        onToggle: ()=>setDraft(!draft)
    }), /*#__PURE__*/ _react.createElement(_Input.CheckboxInput, {
        checked: authenticated,
        id: "auth-checkbox",
        label: t('authentication:authenticated'),
        onToggle: ()=>setAuthenticated(!authenticated)
    })), localeOptions && /*#__PURE__*/ _react.createElement(_Input1.default, {
        defaultValue: {
            label: locale,
            value: locale
        },
        label: t('general:locale'),
        name: "locale",
        onChange: (e)=>setLocale(e.value),
        options: localeOptions,
        path: "locale"
    }), /*#__PURE__*/ _react.createElement(_Input1.default, {
        defaultValue: {
            label: depth,
            value: depth
        },
        label: t('general:depth'),
        name: "depth",
        onChange: (e)=>setDepth(e.value),
        options: [
            {
                label: '0',
                value: '0'
            },
            {
                label: '1',
                value: '1'
            },
            {
                label: '2',
                value: '2'
            },
            {
                label: '3',
                value: '3'
            },
            {
                label: '4',
                value: '4'
            }
        ],
        path: "depth"
    }))), /*#__PURE__*/ _react.createElement("div", {
        className: `${baseClass}__results-wrapper`
    }, /*#__PURE__*/ _react.createElement("div", {
        className: `${baseClass}__toggle-fullscreen-button-container`
    }, /*#__PURE__*/ _react.createElement("button", {
        "aria-label": "toggle fullscreen",
        className: `${baseClass}__toggle-fullscreen-button`,
        onClick: ()=>setFullscreen(!fullscreen),
        type: "button"
    }, /*#__PURE__*/ _react.createElement(_MinimizeMaximize.MinimizeMaximize, {
        isMinimized: !fullscreen
    }))), /*#__PURE__*/ _react.createElement("div", {
        className: `${baseClass}__results`
    }, /*#__PURE__*/ _react.createElement(RecursivelyRenderObjectData, {
        object: data
    }))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0FQSS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgRWRpdFZpZXdQcm9wcyB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBDaGV2cm9uIH0gZnJvbSAnLi4vLi4nXG5pbXBvcnQgeyByZXF1ZXN0cyB9IGZyb20gJy4uLy4uLy4uL2FwaSdcbmltcG9ydCBDb3B5VG9DbGlwYm9hcmQgZnJvbSAnLi4vLi4vZWxlbWVudHMvQ29weVRvQ2xpcGJvYXJkJ1xuaW1wb3J0IHsgR3V0dGVyIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvR3V0dGVyJ1xuaW1wb3J0IHsgQ2hlY2tib3hJbnB1dCB9IGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL0NoZWNrYm94L0lucHV0J1xuaW1wb3J0IFNlbGVjdElucHV0IGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1NlbGVjdC9JbnB1dCdcbmltcG9ydCB7IE1pbmltaXplTWF4aW1pemUgfSBmcm9tICcuLi8uLi9pY29ucy9NaW5pbWl6ZU1heGltaXplJ1xuaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BY3Rpb25zUHJvdmlkZXInXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbydcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnXG5pbXBvcnQgeyBTZXRTdGVwTmF2IH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvRWRpdC9TZXRTdGVwTmF2J1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGNoYXJzID0ge1xuICBsZWZ0Q3VybHlCcmFja2V0OiAnXFx1MDA3QicsXG4gIGxlZnRTcXVhcmVCcmFja2V0OiAnXFx1MDA1QicsXG4gIHJpZ2h0Q3VybHlCcmFja2V0OiAnXFx1MDA3RCcsXG4gIHJpZ2h0U3F1YXJlQnJhY2tldDogJ1xcdTAwNUQnLFxufVxuXG5jb25zdCBiYXNlQ2xhc3MgPSAncXVlcnktaW5zcGVjdG9yJ1xuXG5jb25zdCBCcmFja2V0ID0gKHtcbiAgdHlwZSxcbiAgY29tbWEgPSBmYWxzZSxcbiAgcG9zaXRpb24sXG59OiB7XG4gIGNvbW1hPzogYm9vbGVhblxuICBwb3NpdGlvbjogJ2VuZCcgfCAnc3RhcnQnXG4gIHR5cGU6ICdhcnJheScgfCAnb2JqZWN0J1xufSkgPT4ge1xuICBjb25zdCByaWdodEJyYWNrZXQgPSB0eXBlID09PSAnb2JqZWN0JyA/IGNoYXJzLnJpZ2h0Q3VybHlCcmFja2V0IDogY2hhcnMucmlnaHRTcXVhcmVCcmFja2V0XG4gIGNvbnN0IGxlZnRCcmFja2V0ID0gdHlwZSA9PT0gJ29iamVjdCcgPyBjaGFycy5sZWZ0Q3VybHlCcmFja2V0IDogY2hhcnMubGVmdFNxdWFyZUJyYWNrZXRcbiAgY29uc3QgYnJhY2tldFRvUmVuZGVyID0gcG9zaXRpb24gPT09ICdlbmQnID8gcmlnaHRCcmFja2V0IDogbGVmdEJyYWNrZXRcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JyYWNrZXQgJHtiYXNlQ2xhc3N9X19icmFja2V0LS1wb3NpdGlvbi0ke3Bvc2l0aW9ufWB9PlxuICAgICAge2JyYWNrZXRUb1JlbmRlcn1cbiAgICAgIHtwb3NpdGlvbiA9PT0gJ2VuZCcgJiYgY29tbWEgPyAnLCcgOiBudWxsfVxuICAgIDwvc3Bhbj5cbiAgKVxufVxuXG50eXBlIEFyZ3MgPSB7XG4gIGlzRW1wdHk/OiBib29sZWFuXG4gIG9iamVjdDogUmVjb3JkPHN0cmluZywgYW55PiB8IGFueVtdXG4gIG9iamVjdEtleT86IHN0cmluZ1xuICBwYXJlbnRUeXBlPzogJ2FycmF5JyB8ICdvYmplY3QnXG4gIHRyYWlsaW5nQ29tbWE/OiBib29sZWFuXG59XG5cbmNvbnN0IFJlY3Vyc2l2ZWx5UmVuZGVyT2JqZWN0RGF0YSA9ICh7XG4gIGlzRW1wdHkgPSBmYWxzZSxcbiAgb2JqZWN0LFxuICBvYmplY3RLZXksXG4gIHBhcmVudFR5cGUgPSAnb2JqZWN0JyxcbiAgdHJhaWxpbmdDb21tYSA9IGZhbHNlLFxufTogQXJncykgPT4ge1xuICBjb25zdCBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KVxuICBjb25zdCBvYmplY3RMZW5ndGggPSBvYmplY3RLZXlzLmxlbmd0aFxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcbiAgY29uc3QgaXNOZXN0ZWRBbmRFbXB0eSA9IGlzRW1wdHkgJiYgKHBhcmVudFR5cGUgPT09ICdvYmplY3QnIHx8IHBhcmVudFR5cGUgPT09ICdhcnJheScpXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17aXNOZXN0ZWRBbmRFbXB0eSA/IGAke2Jhc2VDbGFzc31fX3Jvdy1saW5lLS1uZXN0ZWRgIDogJyd9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwidG9nZ2xlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19saXN0LXRvZ2dsZSAke2lzRW1wdHkgPyBgJHtiYXNlQ2xhc3N9X19saXN0LXRvZ2dsZS0tZW1wdHlgIDogJyd9YH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAge2lzRW1wdHkgPyBudWxsIDogKFxuICAgICAgICAgIDxDaGV2cm9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZS1yb3ctaWNvbiAke2Jhc2VDbGFzc31fX3RvZ2dsZS1yb3ctaWNvbi0tJHtcbiAgICAgICAgICAgICAgaXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtvYmplY3RLZXkgJiYgYFwiJHtvYmplY3RLZXl9XCI6IGB9XG4gICAgICAgICAgPEJyYWNrZXQgcG9zaXRpb249XCJzdGFydFwiIHR5cGU9e3BhcmVudFR5cGV9IC8+XG4gICAgICAgICAge2lzRW1wdHkgPyA8QnJhY2tldCBjb21tYT17dHJhaWxpbmdDb21tYX0gcG9zaXRpb249XCJlbmRcIiB0eXBlPXtwYXJlbnRUeXBlfSAvPiA6IG51bGx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19qc29uLWNoaWxkcmVuYH0+XG4gICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICBvYmplY3RLZXlzLm1hcCgoa2V5LCBrZXlJbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gb2JqZWN0W2tleV1cbiAgICAgICAgICAgIGxldCB0eXBlID0gJ3N0cmluZydcbiAgICAgICAgICAgIGNvbnN0IGlzTGFzdEtleSA9IGtleUluZGV4ID09PSBvYmplY3RMZW5ndGggLSAxXG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICB0eXBlID0gJ251bGwnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICB0eXBlID0gJ2RhdGUnXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICB0eXBlID0gJ2FycmF5J1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIHR5cGUgPSAnb2JqZWN0J1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIHR5cGUgPSAnbnVtYmVyJ1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0eXBlID0gJ3N0cmluZydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVjdXJzaXZlbHlSZW5kZXJPYmplY3REYXRhXG4gICAgICAgICAgICAgICAgICBpc0VtcHR5PXt2YWx1ZS5sZW5ndGggPT09IDAgfHwgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgIGtleT17YCR7a2V5fS0ke2tleUluZGV4fWB9XG4gICAgICAgICAgICAgICAgICBvYmplY3Q9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgb2JqZWN0S2V5PXtwYXJlbnRUeXBlID09PSAnb2JqZWN0JyA/IGtleSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgIHBhcmVudFR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICB0cmFpbGluZ0NvbW1hPXshaXNMYXN0S2V5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0eXBlID09PSAnZGF0ZScgfHxcbiAgICAgICAgICAgICAgdHlwZSA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgdHlwZSA9PT0gJ251bGwnIHx8XG4gICAgICAgICAgICAgIHR5cGUgPT09ICdudW1iZXInIHx8XG4gICAgICAgICAgICAgIHR5cGUgPT09ICdib29sZWFuJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcmVudEhhc0tleSA9IEJvb2xlYW4ocGFyZW50VHlwZSA9PT0gJ29iamVjdCcgJiYga2V5KVxuXG4gICAgICAgICAgICAgIGNvbnN0IHJvd0NsYXNzZXMgPSBbXG4gICAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fcm93LWxpbmVgLFxuICAgICAgICAgICAgICAgIGAke2Jhc2VDbGFzc31fX3ZhbHVlLXR5cGUtLSR7dHlwZX1gLFxuICAgICAgICAgICAgICAgIGAke2Jhc2VDbGFzc31fX3Jvdy1saW5lLS0ke29iamVjdEtleSA/ICduZXN0ZWQnIDogJ3RvcCd9YCxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgICAuam9pbignICcpXG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtyb3dDbGFzc2VzfSBrZXk9e2Ake2tleX0tJHtrZXlJbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgIHtwYXJlbnRIYXNLZXkgPyA8c3Bhbj57YFwiJHtrZXl9XCI6IGB9PC9zcGFuPiA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdmFsdWVgfT57SlNPTi5zdHJpbmdpZnkodmFsdWUpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtpc0xhc3RLZXkgPyAnJyA6ICcsJ31cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuXG4gICAgICB7IWlzRW1wdHkgJiYgKFxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8QnJhY2tldCBjb21tYT17dHJhaWxpbmdDb21tYX0gcG9zaXRpb249XCJlbmRcIiB0eXBlPXtwYXJlbnRUeXBlfSAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuICAgIDwvbGk+XG4gIClcbn1cblxuZnVuY3Rpb24gY3JlYXRlVVJMKHVybDogc3RyaW5nKSB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgY29uc3QgZG9tYWluID0gd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgIHJldHVybiBuZXcgVVJMKHVybCwgZG9tYWluKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgVVJMKHVybClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQVBJOiBSZWFjdC5GQzxFZGl0Vmlld1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFwaVVSTCB9ID0gcHJvcHNcbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IHtcbiAgICBsb2NhbGl6YXRpb24sXG4gICAgcm91dGVzOiB7IGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IHsgaWQsIGNvbGxlY3Rpb24sIGdsb2JhbCB9ID0gdXNlRG9jdW1lbnRJbmZvKClcbiAgY29uc3QgeyBjb2RlIH0gPSB1c2VMb2NhbGUoKVxuICBjb25zdCB1cmwgPSBjcmVhdGVVUkwoYXBpVVJMKVxuXG4gIGNvbnN0IHsgc2V0Vmlld0FjdGlvbnMgfSA9IHVzZUFjdGlvbnMoKVxuXG4gIGNvbnN0IGRyYWZ0c0VuYWJsZWQgPSBjb2xsZWN0aW9uPy52ZXJzaW9ucz8uZHJhZnRzIHx8IGdsb2JhbD8udmVyc2lvbnM/LmRyYWZ0c1xuICBjb25zdCBkb2NFbmRwb2ludCA9IGdsb2JhbCA/IGAvZ2xvYmFscy8ke2dsb2JhbC5zbHVnfWAgOiBgLyR7Y29sbGVjdGlvbi5zbHVnfS8ke2lkfWBcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KHt9KVxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdkcmFmdCcpID09PSAndHJ1ZScpXG4gIGNvbnN0IFtsb2NhbGUsIHNldExvY2FsZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdsb2NhbGUnKSB8fCBjb2RlKVxuICBjb25zdCBbZGVwdGgsIHNldERlcHRoXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4odXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2RlcHRoJykgfHwgJzEnKVxuICBjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuICBjb25zdCBbZnVsbHNjcmVlbiwgc2V0RnVsbHNjcmVlbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcblxuICBjb25zdCBmZXRjaFVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX0ke2RvY0VuZHBvaW50fT9sb2NhbGU9JHtsb2NhbGV9JmRyYWZ0PSR7ZHJhZnR9JmRlcHRoPSR7ZGVwdGh9YFxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHJlcXVlc3RzLmdldChmZXRjaFVSTCwge1xuICAgICAgICBjcmVkZW50aWFsczogYXV0aGVudGljYXRlZCA/ICdpbmNsdWRlJyA6ICdvbWl0JyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICB9LFxuICAgICAgfSlcblxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG4gICAgICBzZXREYXRhKGpzb24pXG4gICAgfVxuXG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW2kxOG4ubGFuZ3VhZ2UsIGZldGNoVVJMLCBhdXRoZW50aWNhdGVkXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRDb25maWcgPSAoY29sbGVjdGlvbiB8fCBnbG9iYWwpPy5hZG1pbj8uY29tcG9uZW50cz8udmlld3M/LkVkaXRcbiAgICBjb25zdCBhcGlBY3Rpb25zID1cbiAgICAgIGVkaXRDb25maWcgJiYgJ0FQSScgaW4gZWRpdENvbmZpZyAmJiAnYWN0aW9ucycgaW4gZWRpdENvbmZpZy5BUEkgPyBlZGl0Q29uZmlnLkFQSS5hY3Rpb25zIDogW11cblxuICAgIHNldFZpZXdBY3Rpb25zKGFwaUFjdGlvbnMpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2V0Vmlld0FjdGlvbnMoW10pXG4gICAgfVxuICB9LCBbY29sbGVjdGlvbiwgZ2xvYmFsLCBzZXRWaWV3QWN0aW9uc10pXG5cbiAgY29uc3QgbG9jYWxlT3B0aW9ucyA9XG4gICAgbG9jYWxpemF0aW9uICYmXG4gICAgbG9jYWxpemF0aW9uLmxvY2FsZXMubWFwKChsb2NhbGUpID0+ICh7IGxhYmVsOiBsb2NhbGUubGFiZWwsIHZhbHVlOiBsb2NhbGUuY29kZSB9KSlcblxuICBjb25zdCBjbGFzc2VzID0gW2Jhc2VDbGFzcywgZnVsbHNjcmVlbiAmJiBgJHtiYXNlQ2xhc3N9LS1mdWxsc2NyZWVuYF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxuXG4gIGxldCBpc0VkaXRpbmc6IGJvb2xlYW5cblxuICBpZiAoJ2NvbGxlY3Rpb24nIGluIHByb3BzKSB7XG4gICAgaXNFZGl0aW5nID0gcHJvcHM/LmlzRWRpdGluZ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3V0dGVyIGNsYXNzTmFtZT17Y2xhc3Nlc30gcmlnaHQ9e2ZhbHNlfT5cbiAgICAgIDxTZXRTdGVwTmF2XG4gICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgIGdsb2JhbD17Z2xvYmFsfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxuICAgICAgICB2aWV3PVwiQVBJXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29uZmlndXJhdGlvbmB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYXBpLXVybGB9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT5cbiAgICAgICAgICAgIEFQSSBVUkwgPENvcHlUb0NsaXBib2FyZCB2YWx1ZT17ZmV0Y2hVUkx9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxhIGhyZWY9e2ZldGNoVVJMfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICB7ZmV0Y2hVUkx9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZm9ybS1maWVsZHNgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZmlsdGVyLXF1ZXJ5LWNoZWNrYm94ZXNgfT5cbiAgICAgICAgICAgIHtkcmFmdHNFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgPENoZWNrYm94SW5wdXRcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtkcmFmdH1cbiAgICAgICAgICAgICAgICBpZD1cImRyYWZ0LWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBsYWJlbD17dCgndmVyc2lvbjpkcmFmdCcpfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PiBzZXREcmFmdCghZHJhZnQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDaGVja2JveElucHV0XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGlkPVwiYXV0aC1jaGVja2JveFwiXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdhdXRoZW50aWNhdGlvbjphdXRoZW50aWNhdGVkJyl9XG4gICAgICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PiBzZXRBdXRoZW50aWNhdGVkKCFhdXRoZW50aWNhdGVkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7bG9jYWxlT3B0aW9ucyAmJiAoXG4gICAgICAgICAgICA8U2VsZWN0SW5wdXRcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGxvY2FsZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbG9jYWxlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBsYWJlbD17dCgnZ2VuZXJhbDpsb2NhbGUnKX1cbiAgICAgICAgICAgICAgbmFtZT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYWxlKGUudmFsdWUgYXMgc3RyaW5nKX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17bG9jYWxlT3B0aW9uc31cbiAgICAgICAgICAgICAgcGF0aD1cImxvY2FsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFNlbGVjdElucHV0XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3tcbiAgICAgICAgICAgICAgbGFiZWw6IGRlcHRoLFxuICAgICAgICAgICAgICB2YWx1ZTogZGVwdGgsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbGFiZWw9e3QoJ2dlbmVyYWw6ZGVwdGgnKX1cbiAgICAgICAgICAgIG5hbWU9XCJkZXB0aFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlcHRoKGUudmFsdWUgYXMgc3RyaW5nKX1cbiAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnMCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcwJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnMScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnMicsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnMycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICczJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnNCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICc0JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBwYXRoPVwiZGVwdGhcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19yZXN1bHRzLXdyYXBwZXJgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZS1mdWxsc2NyZWVuLWJ1dHRvbi1jb250YWluZXJgfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwidG9nZ2xlIGZ1bGxzY3JlZW5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGUtZnVsbHNjcmVlbi1idXR0b25gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RnVsbHNjcmVlbighZnVsbHNjcmVlbil9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWluaW1pemVNYXhpbWl6ZSBpc01pbmltaXplZD17IWZ1bGxzY3JlZW59IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fcmVzdWx0c2B9PlxuICAgICAgICAgIDxSZWN1cnNpdmVseVJlbmRlck9iamVjdERhdGEgb2JqZWN0PXtkYXRhfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvR3V0dGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiQVBJIiwiY2hhcnMiLCJsZWZ0Q3VybHlCcmFja2V0IiwibGVmdFNxdWFyZUJyYWNrZXQiLCJyaWdodEN1cmx5QnJhY2tldCIsInJpZ2h0U3F1YXJlQnJhY2tldCIsImJhc2VDbGFzcyIsIkJyYWNrZXQiLCJ0eXBlIiwiY29tbWEiLCJwb3NpdGlvbiIsInJpZ2h0QnJhY2tldCIsImxlZnRCcmFja2V0IiwiYnJhY2tldFRvUmVuZGVyIiwic3BhbiIsImNsYXNzTmFtZSIsIlJlY3Vyc2l2ZWx5UmVuZGVyT2JqZWN0RGF0YSIsImlzRW1wdHkiLCJvYmplY3QiLCJvYmplY3RLZXkiLCJwYXJlbnRUeXBlIiwidHJhaWxpbmdDb21tYSIsIm9iamVjdEtleXMiLCJPYmplY3QiLCJrZXlzIiwib2JqZWN0TGVuZ3RoIiwibGVuZ3RoIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzTmVzdGVkQW5kRW1wdHkiLCJsaSIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIiwiQ2hldnJvbiIsInVsIiwibWFwIiwia2V5Iiwia2V5SW5kZXgiLCJ2YWx1ZSIsImlzTGFzdEtleSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkFycmF5IiwiaXNBcnJheSIsInVuZGVmaW5lZCIsInBhcmVudEhhc0tleSIsIkJvb2xlYW4iLCJyb3dDbGFzc2VzIiwiZmlsdGVyIiwiam9pbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVhdGVVUkwiLCJ1cmwiLCJzdGFydHNXaXRoIiwiZG9tYWluIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJVUkwiLCJwcm9wcyIsImFwaVVSTCIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJsb2NhbGl6YXRpb24iLCJyb3V0ZXMiLCJhcGkiLCJzZXJ2ZXJVUkwiLCJ1c2VDb25maWciLCJpZCIsImNvbGxlY3Rpb24iLCJnbG9iYWwiLCJ1c2VEb2N1bWVudEluZm8iLCJjb2RlIiwidXNlTG9jYWxlIiwic2V0Vmlld0FjdGlvbnMiLCJ1c2VBY3Rpb25zIiwiZHJhZnRzRW5hYmxlZCIsInZlcnNpb25zIiwiZHJhZnRzIiwiZG9jRW5kcG9pbnQiLCJzbHVnIiwiZGF0YSIsInNldERhdGEiLCJkcmFmdCIsInNldERyYWZ0Iiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwibG9jYWxlIiwic2V0TG9jYWxlIiwiZGVwdGgiLCJzZXREZXB0aCIsImF1dGhlbnRpY2F0ZWQiLCJzZXRBdXRoZW50aWNhdGVkIiwiZnVsbHNjcmVlbiIsInNldEZ1bGxzY3JlZW4iLCJmZXRjaFVSTCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlcXVlc3QiLCJyZXF1ZXN0cyIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImxhbmd1YWdlIiwianNvbiIsImVkaXRDb25maWciLCJhZG1pbiIsImNvbXBvbmVudHMiLCJ2aWV3cyIsIkVkaXQiLCJhcGlBY3Rpb25zIiwiYWN0aW9ucyIsImxvY2FsZU9wdGlvbnMiLCJsb2NhbGVzIiwibGFiZWwiLCJjbGFzc2VzIiwiaXNFZGl0aW5nIiwiR3V0dGVyIiwicmlnaHQiLCJTZXRTdGVwTmF2IiwidmlldyIsImRpdiIsIkNvcHlUb0NsaXBib2FyZCIsImEiLCJocmVmIiwicmVsIiwidGFyZ2V0IiwiQ2hlY2tib3hJbnB1dCIsImNoZWNrZWQiLCJvblRvZ2dsZSIsIlNlbGVjdElucHV0IiwiZGVmYXVsdFZhbHVlIiwibmFtZSIsIm9uQ2hhbmdlIiwiZSIsIm9wdGlvbnMiLCJwYXRoIiwiTWluaW1pemVNYXhpbWl6ZSIsImlzTWluaW1pemVkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTZLYUE7OztlQUFBQTs7OytEQTdLVTs4QkFDUTtrQkFJUDtxQkFDQzt3RUFDRzt3QkFDTDt1QkFDTzsrREFDTjtrQ0FDUztpQ0FDTjt3QkFDRDs4QkFDTTt3QkFDTjs0QkFDQztRQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQyxRQUFRO0lBQ1pDLGtCQUFrQjtJQUNsQkMsbUJBQW1CO0lBQ25CQyxtQkFBbUI7SUFDbkJDLG9CQUFvQjtBQUN0QjtBQUVBLE1BQU1DLFlBQVk7QUFFbEIsTUFBTUMsVUFBVSxDQUFDLEVBQ2ZDLElBQUksRUFDSkMsUUFBUSxLQUFLLEVBQ2JDLFFBQVEsRUFLVDtJQUNDLE1BQU1DLGVBQWVILFNBQVMsV0FBV1AsTUFBTUcsaUJBQWlCLEdBQUdILE1BQU1JLGtCQUFrQjtJQUMzRixNQUFNTyxjQUFjSixTQUFTLFdBQVdQLE1BQU1DLGdCQUFnQixHQUFHRCxNQUFNRSxpQkFBaUI7SUFDeEYsTUFBTVUsa0JBQWtCSCxhQUFhLFFBQVFDLGVBQWVDO0lBQzVE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