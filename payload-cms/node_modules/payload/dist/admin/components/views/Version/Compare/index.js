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
const _formatDate = require("../../../../utilities/formatDate");
const _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../elements/ReactSelect"));
const _shared = require("../../../forms/field-types/shared");
const _Config = require("../../../utilities/Config");
const _AutosaveCell = require("../../Versions/cells/AutosaveCell");
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
const baseClass = 'compare-version';
const maxResultsPerRequest = 100;
const baseOptions = [];
const CompareVersion = (props)=>{
    const { baseURL, latestDraftVersion, latestPublishedVersion, onChange, parentID, value, versionID } = props;
    const { admin: { dateFormat } } = (0, _Config.useConfig)();
    const [options, setOptions] = (0, _react.useState)(baseOptions);
    const [lastLoadedPage, setLastLoadedPage] = (0, _react.useState)(1);
    const [errorLoading, setErrorLoading] = (0, _react.useState)('');
    const { i18n, t } = (0, _reacti18next.useTranslation)('version');
    const getResults = (0, _react.useCallback)(async ({ lastLoadedPage: lastLoadedPageArg })=>{
        const query = {
            depth: 0,
            limit: maxResultsPerRequest,
            page: lastLoadedPageArg,
            where: {
                and: [
                    {
                        id: {
                            not_equals: versionID
                        }
                    }
                ]
            }
        };
        if (parentID) {
            query.where.and.push({
                parent: {
                    equals: parentID
                }
            });
        }
        const search = _qs.default.stringify(query);
        const response = await fetch(`${baseURL}?${search}`, {
            credentials: 'include',
            headers: {
                'Accept-Language': i18n.language
            }
        });
        if (response.ok) {
            const data = await response.json();
            if (data.docs.length > 0) {
                const versionInfo = {
                    draft: {
                        currentLabel: t('version:currentDraft'),
                        latestVersion: latestDraftVersion,
                        pillStyle: undefined,
                        previousLabel: t('version:draft')
                    },
                    published: {
                        currentLabel: t('version:currentPublishedVersion'),
                        latestVersion: latestPublishedVersion,
                        pillStyle: 'success',
                        previousLabel: t('version:previouslyPublished')
                    }
                };
                const additionalOptions = data.docs.map((doc)=>{
                    const status = doc.version._status;
                    const { currentLabel, latestVersion, pillStyle, previousLabel } = versionInfo[status] || {};
                    return {
                        label: /*#__PURE__*/ _react.default.createElement("div", null, (0, _formatDate.formatDate)(doc.updatedAt, dateFormat, i18n?.language), "  ", (0, _AutosaveCell.renderPill)(doc, latestVersion, currentLabel, previousLabel, pillStyle)),
                        value: doc.id
                    };
                });
                setOptions(additionalOptions);
                setLastLoadedPage(data.page);
            }
        } else {
            setErrorLoading(t('error:unspecific'));
        }
    }, [
        dateFormat,
        baseURL,
        parentID,
        versionID,
        t,
        i18n,
        latestDraftVersion,
        latestPublishedVersion
    ]);
    (0, _react.useEffect)(()=>{
        void getResults({
            lastLoadedPage: 1
        });
    }, [
        getResults
    ]);
    const filteredOptions = options.filter((option, index, self)=>self.findIndex((t)=>t.value === option.value) === index);
    (0, _react.useEffect)(()=>{
        if (filteredOptions.length > 0 && !value) {
            onChange(filteredOptions[0]);
        }
    }, [
        filteredOptions,
        value,
        onChange
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            baseClass,
            errorLoading && 'error-loading'
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__label`
    }, t('compareVersion')), !errorLoading && /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        isClearable: false,
        isSearchable: false,
        onChange: onChange,
        onMenuScrollToBottom: ()=>{
            void getResults({
                lastLoadedPage: lastLoadedPage + 1
            });
        },
        options: filteredOptions,
        placeholder: t('selectVersionToCompare'),
        value: value
    }), errorLoading && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__error-loading`
    }, errorLoading));
};
const _default = CompareVersion;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vQ29tcGFyZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gJ3FzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgUGFnaW5hdGVkRG9jcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2RhdGFiYXNlL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBXaGVyZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZm9ybWF0RGF0ZSdcbmltcG9ydCBSZWFjdFNlbGVjdCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9SZWFjdFNlbGVjdCdcbmltcG9ydCB7IGZpZWxkQmFzZUNsYXNzIH0gZnJvbSAnLi4vLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvc2hhcmVkJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCB7IHJlbmRlclBpbGwgfSBmcm9tICcuLi8uLi9WZXJzaW9ucy9jZWxscy9BdXRvc2F2ZUNlbGwnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbXBhcmUtdmVyc2lvbidcblxuY29uc3QgbWF4UmVzdWx0c1BlclJlcXVlc3QgPSAxMDBcblxuY29uc3QgYmFzZU9wdGlvbnMgPSBbXVxuXG5jb25zdCBDb21wYXJlVmVyc2lvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBiYXNlVVJMLFxuICAgIGxhdGVzdERyYWZ0VmVyc2lvbixcbiAgICBsYXRlc3RQdWJsaXNoZWRWZXJzaW9uLFxuICAgIG9uQ2hhbmdlLFxuICAgIHBhcmVudElELFxuICAgIHZhbHVlLFxuICAgIHZlcnNpb25JRCxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3Qge1xuICAgIGFkbWluOiB7IGRhdGVGb3JtYXQgfSxcbiAgfSA9IHVzZUNvbmZpZygpXG5cbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoYmFzZU9wdGlvbnMpXG4gIGNvbnN0IFtsYXN0TG9hZGVkUGFnZSwgc2V0TGFzdExvYWRlZFBhZ2VdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW2Vycm9yTG9hZGluZywgc2V0RXJyb3JMb2FkaW5nXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKCd2ZXJzaW9uJylcblxuICBjb25zdCBnZXRSZXN1bHRzID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHsgbGFzdExvYWRlZFBhZ2U6IGxhc3RMb2FkZWRQYWdlQXJnIH0pID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5OiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHVua25vd25cbiAgICAgICAgd2hlcmU6IFdoZXJlXG4gICAgICB9ID0ge1xuICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgbGltaXQ6IG1heFJlc3VsdHNQZXJSZXF1ZXN0LFxuICAgICAgICBwYWdlOiBsYXN0TG9hZGVkUGFnZUFyZyxcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBhbmQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgICBub3RfZXF1YWxzOiB2ZXJzaW9uSUQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnRJRCkge1xuICAgICAgICBxdWVyeS53aGVyZS5hbmQucHVzaCh7XG4gICAgICAgICAgcGFyZW50OiB7XG4gICAgICAgICAgICBlcXVhbHM6IHBhcmVudElELFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlYXJjaCA9IHFzLnN0cmluZ2lmeShxdWVyeSlcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0/JHtzZWFyY2h9YCwge1xuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZGF0YTogUGFnaW5hdGVkRG9jcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBpZiAoZGF0YS5kb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB2ZXJzaW9uSW5mbyA9IHtcbiAgICAgICAgICAgIGRyYWZ0OiB7XG4gICAgICAgICAgICAgIGN1cnJlbnRMYWJlbDogdCgndmVyc2lvbjpjdXJyZW50RHJhZnQnKSxcbiAgICAgICAgICAgICAgbGF0ZXN0VmVyc2lvbjogbGF0ZXN0RHJhZnRWZXJzaW9uLFxuICAgICAgICAgICAgICBwaWxsU3R5bGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgcHJldmlvdXNMYWJlbDogdCgndmVyc2lvbjpkcmFmdCcpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1Ymxpc2hlZDoge1xuICAgICAgICAgICAgICBjdXJyZW50TGFiZWw6IHQoJ3ZlcnNpb246Y3VycmVudFB1Ymxpc2hlZFZlcnNpb24nKSxcbiAgICAgICAgICAgICAgbGF0ZXN0VmVyc2lvbjogbGF0ZXN0UHVibGlzaGVkVmVyc2lvbixcbiAgICAgICAgICAgICAgcGlsbFN0eWxlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIHByZXZpb3VzTGFiZWw6IHQoJ3ZlcnNpb246cHJldmlvdXNseVB1Ymxpc2hlZCcpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsT3B0aW9ucyA9IGRhdGEuZG9jcy5tYXAoKGRvYykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZG9jLnZlcnNpb24uX3N0YXR1c1xuICAgICAgICAgICAgY29uc3QgeyBjdXJyZW50TGFiZWwsIGxhdGVzdFZlcnNpb24sIHBpbGxTdHlsZSwgcHJldmlvdXNMYWJlbCB9ID1cbiAgICAgICAgICAgICAgdmVyc2lvbkluZm9bc3RhdHVzXSB8fCB7fVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShkb2MudXBkYXRlZEF0LCBkYXRlRm9ybWF0LCBpMThuPy5sYW5ndWFnZSl9XG4gICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJQaWxsKGRvYywgbGF0ZXN0VmVyc2lvbiwgY3VycmVudExhYmVsLCBwcmV2aW91c0xhYmVsLCBwaWxsU3R5bGUpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB2YWx1ZTogZG9jLmlkLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzZXRPcHRpb25zKGFkZGl0aW9uYWxPcHRpb25zKVxuICAgICAgICAgIHNldExhc3RMb2FkZWRQYWdlKGRhdGEucGFnZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3JMb2FkaW5nKHQoJ2Vycm9yOnVuc3BlY2lmaWMnKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkYXRlRm9ybWF0LCBiYXNlVVJMLCBwYXJlbnRJRCwgdmVyc2lvbklELCB0LCBpMThuLCBsYXRlc3REcmFmdFZlcnNpb24sIGxhdGVzdFB1Ymxpc2hlZFZlcnNpb25dLFxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2b2lkIGdldFJlc3VsdHMoeyBsYXN0TG9hZGVkUGFnZTogMSB9KVxuICB9LCBbZ2V0UmVzdWx0c10pXG5cbiAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gb3B0aW9ucy5maWx0ZXIoXG4gICAgKG9wdGlvbiwgaW5kZXgsIHNlbGYpID0+IHNlbGYuZmluZEluZGV4KCh0KSA9PiB0LnZhbHVlID09PSBvcHRpb24udmFsdWUpID09PSBpbmRleCxcbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwICYmICF2YWx1ZSkge1xuICAgICAgb25DaGFuZ2UoZmlsdGVyZWRPcHRpb25zWzBdKVxuICAgIH1cbiAgfSwgW2ZpbHRlcmVkT3B0aW9ucywgdmFsdWUsIG9uQ2hhbmdlXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17W2ZpZWxkQmFzZUNsYXNzLCBiYXNlQ2xhc3MsIGVycm9yTG9hZGluZyAmJiAnZXJyb3ItbG9hZGluZyddXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT57dCgnY29tcGFyZVZlcnNpb24nKX08L2Rpdj5cbiAgICAgIHshZXJyb3JMb2FkaW5nICYmIChcbiAgICAgICAgPFJlYWN0U2VsZWN0XG4gICAgICAgICAgaXNDbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgIGlzU2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIG9uTWVudVNjcm9sbFRvQm90dG9tPXsoKSA9PiB7XG4gICAgICAgICAgICB2b2lkIGdldFJlc3VsdHMoeyBsYXN0TG9hZGVkUGFnZTogbGFzdExvYWRlZFBhZ2UgKyAxIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJlZE9wdGlvbnN9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ3NlbGVjdFZlcnNpb25Ub0NvbXBhcmUnKX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2Vycm9yTG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZXJyb3ItbG9hZGluZ2B9PntlcnJvckxvYWRpbmd9PC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmVWZXJzaW9uXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwibWF4UmVzdWx0c1BlclJlcXVlc3QiLCJiYXNlT3B0aW9ucyIsIkNvbXBhcmVWZXJzaW9uIiwicHJvcHMiLCJiYXNlVVJMIiwibGF0ZXN0RHJhZnRWZXJzaW9uIiwibGF0ZXN0UHVibGlzaGVkVmVyc2lvbiIsIm9uQ2hhbmdlIiwicGFyZW50SUQiLCJ2YWx1ZSIsInZlcnNpb25JRCIsImFkbWluIiwiZGF0ZUZvcm1hdCIsInVzZUNvbmZpZyIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwidXNlU3RhdGUiLCJsYXN0TG9hZGVkUGFnZSIsInNldExhc3RMb2FkZWRQYWdlIiwiZXJyb3JMb2FkaW5nIiwic2V0RXJyb3JMb2FkaW5nIiwiaTE4biIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImdldFJlc3VsdHMiLCJ1c2VDYWxsYmFjayIsImxhc3RMb2FkZWRQYWdlQXJnIiwicXVlcnkiLCJkZXB0aCIsImxpbWl0IiwicGFnZSIsIndoZXJlIiwiYW5kIiwiaWQiLCJub3RfZXF1YWxzIiwicHVzaCIsInBhcmVudCIsImVxdWFscyIsInNlYXJjaCIsInFzIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImxhbmd1YWdlIiwib2siLCJkYXRhIiwianNvbiIsImRvY3MiLCJsZW5ndGgiLCJ2ZXJzaW9uSW5mbyIsImRyYWZ0IiwiY3VycmVudExhYmVsIiwibGF0ZXN0VmVyc2lvbiIsInBpbGxTdHlsZSIsInVuZGVmaW5lZCIsInByZXZpb3VzTGFiZWwiLCJwdWJsaXNoZWQiLCJhZGRpdGlvbmFsT3B0aW9ucyIsIm1hcCIsImRvYyIsInN0YXR1cyIsInZlcnNpb24iLCJfc3RhdHVzIiwibGFiZWwiLCJkaXYiLCJmb3JtYXREYXRlIiwidXBkYXRlZEF0IiwicmVuZGVyUGlsbCIsInVzZUVmZmVjdCIsImZpbHRlcmVkT3B0aW9ucyIsImZpbHRlciIsIm9wdGlvbiIsImluZGV4Iiwic2VsZiIsImZpbmRJbmRleCIsImNsYXNzTmFtZSIsImZpZWxkQmFzZUNsYXNzIiwiQm9vbGVhbiIsImpvaW4iLCJSZWFjdFNlbGVjdCIsImlzQ2xlYXJhYmxlIiwiaXNTZWFyY2hhYmxlIiwib25NZW51U2Nyb2xsVG9Cb3R0b20iLCJwbGFjZWhvbGRlciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBaUtBOzs7ZUFBQTs7OzJEQWpLZTsrREFDeUM7OEJBQ3pCOzRCQU1KO29FQUNIO3dCQUNPO3dCQUNMOzhCQUNDO1FBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsdUJBQXVCO0FBRTdCLE1BQU1DLGNBQWMsRUFBRTtBQUV0QixNQUFNQyxpQkFB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