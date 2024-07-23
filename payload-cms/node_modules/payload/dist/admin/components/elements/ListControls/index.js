"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ListControls", {
    enumerable: true,
    get: function() {
        return ListControls;
    }
});
const _windowinfo = require("@faceless-ui/window-info");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactanimateheight = /*#__PURE__*/ _interop_require_default(require("react-animate-height"));
const _reacti18next = require("react-i18next");
const _types = require("../../../../fields/config/types");
const _getTranslation = require("../../../../utilities/getTranslation");
const _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
const _SearchParams = require("../../utilities/SearchParams");
const _ColumnSelector = /*#__PURE__*/ _interop_require_default(require("../ColumnSelector"));
const _DeleteMany = /*#__PURE__*/ _interop_require_default(require("../DeleteMany"));
const _EditMany = /*#__PURE__*/ _interop_require_default(require("../EditMany"));
const _Pill = /*#__PURE__*/ _interop_require_default(require("../Pill"));
const _PublishMany = /*#__PURE__*/ _interop_require_default(require("../PublishMany"));
const _SearchFilter = /*#__PURE__*/ _interop_require_default(require("../SearchFilter"));
const _SortComplex = /*#__PURE__*/ _interop_require_default(require("../SortComplex"));
const _UnpublishMany = /*#__PURE__*/ _interop_require_default(require("../UnpublishMany"));
const _WhereBuilder = /*#__PURE__*/ _interop_require_default(require("../WhereBuilder"));
const _validateWhereQuery = /*#__PURE__*/ _interop_require_default(require("../WhereBuilder/validateWhereQuery"));
const _getTextFieldsToBeSearched = require("./getTextFieldsToBeSearched");
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
const baseClass = 'list-controls';
const ListControls = (props)=>{
    const { collection: { admin: { listSearchableFields }, fields }, collection, enableColumns = true, enableSort = false, handleSearchChange, handleSortChange, handleWhereChange, modifySearchQuery = true, resetParams, titleField } = props;
    const params = (0, _SearchParams.useSearchParams)();
    const shouldInitializeWhereOpened = (0, _validateWhereQuery.default)(params?.where);
    const hasWhereParam = _react.default.useRef(Boolean(params?.where));
    const [textFieldsToBeSearched, setFieldsToBeSearched] = (0, _react.useState)((0, _getTextFieldsToBeSearched.getTextFieldsToBeSearched)(listSearchableFields, fields));
    const [visibleDrawer, setVisibleDrawer] = (0, _react.useState)(shouldInitializeWhereOpened ? 'where' : undefined);
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    const { breakpoints: { s: smallBreak } } = (0, _windowinfo.useWindowInfo)();
    _react.default.useEffect(()=>{
        setFieldsToBeSearched((0, _getTextFieldsToBeSearched.getTextFieldsToBeSearched)(listSearchableFields, fields));
    }, [
        listSearchableFields,
        fields
    ]);
    _react.default.useEffect(()=>{
        if (!params?.limit) {
            setVisibleDrawer(undefined);
        }
    }, [
        setVisibleDrawer,
        params?.limit
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrap`
    }, /*#__PURE__*/ _react.default.createElement(_SearchFilter.default, {
        fieldLabel: (titleField && (0, _getTranslation.getTranslation)(titleField.label || titleField.name, i18n)) ?? undefined,
        fieldName: titleField && (0, _types.fieldAffectsData)(titleField) ? titleField.name : undefined,
        handleChange: handleSearchChange,
        listSearchableFields: textFieldsToBeSearched,
        modifySearchQuery: modifySearchQuery
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__buttons`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__buttons-wrap`
    }, !smallBreak && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_EditMany.default, {
        collection: collection,
        resetParams: resetParams
    }), /*#__PURE__*/ _react.default.createElement(_PublishMany.default, {
        collection: collection,
        resetParams: resetParams
    }), /*#__PURE__*/ _react.default.createElement(_UnpublishMany.default, {
        collection: collection,
        resetParams: resetParams
    }), /*#__PURE__*/ _react.default.createElement(_DeleteMany.default, {
        collection: collection,
        resetParams: resetParams
    })), enableColumns && /*#__PURE__*/ _react.default.createElement(_Pill.default, {
        "aria-controls": `${baseClass}-columns`,
        "aria-expanded": visibleDrawer === 'columns',
        className: `${baseClass}__toggle-columns ${visibleDrawer === 'columns' ? `${baseClass}__buttons-active` : ''}`,
        icon: /*#__PURE__*/ _react.default.createElement(_Chevron.default, null),
        onClick: ()=>setVisibleDrawer(visibleDrawer !== 'columns' ? 'columns' : undefined),
        pillStyle: "light"
    }, t('columns')), /*#__PURE__*/ _react.default.createElement(_Pill.default, {
        "aria-controls": `${baseClass}-where`,
        "aria-expanded": visibleDrawer === 'where',
        className: `${baseClass}__toggle-where ${visibleDrawer === 'where' ? `${baseClass}__buttons-active` : ''}`,
        icon: /*#__PURE__*/ _react.default.createElement(_Chevron.default, null),
        onClick: ()=>setVisibleDrawer(visibleDrawer !== 'where' ? 'where' : undefined),
        pillStyle: "light"
    }, t('filters')), enableSort && /*#__PURE__*/ _react.default.createElement(_Pill.default, {
        "aria-controls": `${baseClass}-sort`,
        "aria-expanded": visibleDrawer === 'sort',
        className: `${baseClass}__toggle-sort`,
        icon: /*#__PURE__*/ _react.default.createElement(_Chevron.default, null),
        onClick: ()=>setVisibleDrawer(visibleDrawer !== 'sort' ? 'sort' : undefined),
        pillStyle: "light"
    }, t('sort'))))), enableColumns && /*#__PURE__*/ _react.default.createElement(_reactanimateheight.default, {
        className: `${baseClass}__columns`,
        height: visibleDrawer === 'columns' ? 'auto' : 0,
        id: `${baseClass}-columns`
    }, /*#__PURE__*/ _react.default.createElement(_ColumnSelector.default, {
        slug: collection.slug
    })), /*#__PURE__*/ _react.default.createElement(_reactanimateheight.default, {
        className: `${baseClass}__where`,
        height: visibleDrawer === 'where' ? 'auto' : 0,
        id: `${baseClass}-where`
    }, /*#__PURE__*/ _react.default.createElement(_WhereBuilder.default, {
        collection: collection,
        handleChange: handleWhereChange,
        key: String(hasWhereParam.current && !params?.where),
        modifySearchQuery: modifySearchQuery
    })), enableSort && /*#__PURE__*/ _react.default.createElement(_reactanimateheight.default, {
        className: `${baseClass}__sort`,
        height: visibleDrawer === 'sort' ? 'auto' : 0,
        id: `${baseClass}-sort`
    }, /*#__PURE__*/ _react.default.createElement(_SortComplex.default, {
        collection: collection,
        handleChange: handleSortChange,
        modifySearchQuery: modifySearchQuery
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3RDb250cm9scy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2luZG93SW5mbyB9IGZyb20gJ0BmYWNlbGVzcy11aS93aW5kb3ctaW5mbydcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFuaW1hdGVIZWlnaHQgZnJvbSAncmVhY3QtYW5pbWF0ZS1oZWlnaHQnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IENoZXZyb24gZnJvbSAnLi4vLi4vaWNvbnMvQ2hldnJvbidcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9TZWFyY2hQYXJhbXMnXG5pbXBvcnQgQ29sdW1uU2VsZWN0b3IgZnJvbSAnLi4vQ29sdW1uU2VsZWN0b3InXG5pbXBvcnQgRGVsZXRlTWFueSBmcm9tICcuLi9EZWxldGVNYW55J1xuaW1wb3J0IEVkaXRNYW55IGZyb20gJy4uL0VkaXRNYW55J1xuaW1wb3J0IFBpbGwgZnJvbSAnLi4vUGlsbCdcbmltcG9ydCBQdWJsaXNoTWFueSBmcm9tICcuLi9QdWJsaXNoTWFueSdcbmltcG9ydCBTZWFyY2hGaWx0ZXIgZnJvbSAnLi4vU2VhcmNoRmlsdGVyJ1xuaW1wb3J0IFNvcnRDb21wbGV4IGZyb20gJy4uL1NvcnRDb21wbGV4J1xuaW1wb3J0IFVucHVibGlzaE1hbnkgZnJvbSAnLi4vVW5wdWJsaXNoTWFueSdcbmltcG9ydCBXaGVyZUJ1aWxkZXIgZnJvbSAnLi4vV2hlcmVCdWlsZGVyJ1xuaW1wb3J0IHZhbGlkYXRlV2hlcmVRdWVyeSBmcm9tICcuLi9XaGVyZUJ1aWxkZXIvdmFsaWRhdGVXaGVyZVF1ZXJ5J1xuaW1wb3J0IHsgZ2V0VGV4dEZpZWxkc1RvQmVTZWFyY2hlZCB9IGZyb20gJy4vZ2V0VGV4dEZpZWxkc1RvQmVTZWFyY2hlZCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbGlzdC1jb250cm9scydcblxuLyoqXG4gKiBUaGUgTGlzdENvbnRyb2xzIGNvbXBvbmVudCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgY29udHJvbHMgKHNlYXJjaCwgZmlsdGVyLCB3aGVyZSlcbiAqIGZvciBhIGNvbGxlY3Rpb24ncyBsaXN0IHZpZXcuIFlvdSBjYW4gZmluZCB0aG9zZSBkaXJlY3RseSBhYm92ZSB0aGUgdGFibGUgd2hpY2ggbGlzdHNcbiAqIHRoZSBjb2xsZWN0aW9uJ3MgZG9jdW1lbnRzLlxuICovXG5leHBvcnQgY29uc3QgTGlzdENvbnRyb2xzOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGFkbWluOiB7IGxpc3RTZWFyY2hhYmxlRmllbGRzIH0sXG4gICAgICBmaWVsZHMsXG4gICAgfSxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGVuYWJsZUNvbHVtbnMgPSB0cnVlLFxuICAgIGVuYWJsZVNvcnQgPSBmYWxzZSxcbiAgICBoYW5kbGVTZWFyY2hDaGFuZ2UsXG4gICAgaGFuZGxlU29ydENoYW5nZSxcbiAgICBoYW5kbGVXaGVyZUNoYW5nZSxcbiAgICBtb2RpZnlTZWFyY2hRdWVyeSA9IHRydWUsXG4gICAgcmVzZXRQYXJhbXMsXG4gICAgdGl0bGVGaWVsZCxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgcGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgY29uc3Qgc2hvdWxkSW5pdGlhbGl6ZVdoZXJlT3BlbmVkID0gdmFsaWRhdGVXaGVyZVF1ZXJ5KHBhcmFtcz8ud2hlcmUpXG5cbiAgY29uc3QgaGFzV2hlcmVQYXJhbSA9IFJlYWN0LnVzZVJlZihCb29sZWFuKHBhcmFtcz8ud2hlcmUpKVxuXG4gIGNvbnN0IFt0ZXh0RmllbGRzVG9CZVNlYXJjaGVkLCBzZXRGaWVsZHNUb0JlU2VhcmNoZWRdID0gdXNlU3RhdGUoXG4gICAgZ2V0VGV4dEZpZWxkc1RvQmVTZWFyY2hlZChsaXN0U2VhcmNoYWJsZUZpZWxkcywgZmllbGRzKSxcbiAgKVxuICBjb25zdCBbdmlzaWJsZURyYXdlciwgc2V0VmlzaWJsZURyYXdlcl0gPSB1c2VTdGF0ZTwnY29sdW1ucycgfCAnc29ydCcgfCAnd2hlcmUnPihcbiAgICBzaG91bGRJbml0aWFsaXplV2hlcmVPcGVuZWQgPyAnd2hlcmUnIDogdW5kZWZpbmVkLFxuICApXG4gIGNvbnN0IHsgaTE4biwgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuICBjb25zdCB7XG4gICAgYnJlYWtwb2ludHM6IHsgczogc21hbGxCcmVhayB9LFxuICB9ID0gdXNlV2luZG93SW5mbygpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGaWVsZHNUb0JlU2VhcmNoZWQoZ2V0VGV4dEZpZWxkc1RvQmVTZWFyY2hlZChsaXN0U2VhcmNoYWJsZUZpZWxkcywgZmllbGRzKSlcbiAgfSwgW2xpc3RTZWFyY2hhYmxlRmllbGRzLCBmaWVsZHNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwYXJhbXM/LmxpbWl0KSB7XG4gICAgICBzZXRWaXNpYmxlRHJhd2VyKHVuZGVmaW5lZClcbiAgICB9XG4gIH0sIFtzZXRWaXNpYmxlRHJhd2VyLCBwYXJhbXM/LmxpbWl0XSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgPFNlYXJjaEZpbHRlclxuICAgICAgICAgIGZpZWxkTGFiZWw9e1xuICAgICAgICAgICAgKHRpdGxlRmllbGQgJiYgZ2V0VHJhbnNsYXRpb24odGl0bGVGaWVsZC5sYWJlbCB8fCB0aXRsZUZpZWxkLm5hbWUsIGkxOG4pKSA/PyB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGROYW1lPXt0aXRsZUZpZWxkICYmIGZpZWxkQWZmZWN0c0RhdGEodGl0bGVGaWVsZCkgPyB0aXRsZUZpZWxkLm5hbWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgbGlzdFNlYXJjaGFibGVGaWVsZHM9e3RleHRGaWVsZHNUb0JlU2VhcmNoZWR9XG4gICAgICAgICAgbW9kaWZ5U2VhcmNoUXVlcnk9e21vZGlmeVNlYXJjaFF1ZXJ5fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYnV0dG9uc2B9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19idXR0b25zLXdyYXBgfT5cbiAgICAgICAgICAgIHshc21hbGxCcmVhayAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RWRpdE1hbnkgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gcmVzZXRQYXJhbXM9e3Jlc2V0UGFyYW1zfSAvPlxuICAgICAgICAgICAgICAgIDxQdWJsaXNoTWFueSBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufSByZXNldFBhcmFtcz17cmVzZXRQYXJhbXN9IC8+XG4gICAgICAgICAgICAgICAgPFVucHVibGlzaE1hbnkgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gcmVzZXRQYXJhbXM9e3Jlc2V0UGFyYW1zfSAvPlxuICAgICAgICAgICAgICAgIDxEZWxldGVNYW55IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IHJlc2V0UGFyYW1zPXtyZXNldFBhcmFtc30gLz5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ZW5hYmxlQ29sdW1ucyAmJiAoXG4gICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YCR7YmFzZUNsYXNzfS1jb2x1bW5zYH1cbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXt2aXNpYmxlRHJhd2VyID09PSAnY29sdW1ucyd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGUtY29sdW1ucyAke1xuICAgICAgICAgICAgICAgICAgdmlzaWJsZURyYXdlciA9PT0gJ2NvbHVtbnMnID8gYCR7YmFzZUNsYXNzfV9fYnV0dG9ucy1hY3RpdmVgIDogJydcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBpY29uPXs8Q2hldnJvbiAvPn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZURyYXdlcih2aXNpYmxlRHJhd2VyICE9PSAnY29sdW1ucycgPyAnY29sdW1ucycgOiB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBpbGxTdHlsZT1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KCdjb2x1bW5zJyl9XG4gICAgICAgICAgICAgIDwvUGlsbD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtgJHtiYXNlQ2xhc3N9LXdoZXJlYH1cbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17dmlzaWJsZURyYXdlciA9PT0gJ3doZXJlJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGUtd2hlcmUgJHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlRHJhd2VyID09PSAnd2hlcmUnID8gYCR7YmFzZUNsYXNzfV9fYnV0dG9ucy1hY3RpdmVgIDogJydcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIGljb249ezxDaGV2cm9uIC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlRHJhd2VyKHZpc2libGVEcmF3ZXIgIT09ICd3aGVyZScgPyAnd2hlcmUnIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgcGlsbFN0eWxlPVwibGlnaHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnZmlsdGVycycpfVxuICAgICAgICAgICAgPC9QaWxsPlxuICAgICAgICAgICAge2VuYWJsZVNvcnQgJiYgKFxuICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e2Ake2Jhc2VDbGFzc30tc29ydGB9XG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17dmlzaWJsZURyYXdlciA9PT0gJ3NvcnQnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdG9nZ2xlLXNvcnRgfVxuICAgICAgICAgICAgICAgIGljb249ezxDaGV2cm9uIC8+fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGVEcmF3ZXIodmlzaWJsZURyYXdlciAhPT0gJ3NvcnQnID8gJ3NvcnQnIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgICBwaWxsU3R5bGU9XCJsaWdodFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnc29ydCcpfVxuICAgICAgICAgICAgICA8L1BpbGw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2VuYWJsZUNvbHVtbnMgJiYgKFxuICAgICAgICA8QW5pbWF0ZUhlaWdodFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29sdW1uc2B9XG4gICAgICAgICAgaGVpZ2h0PXt2aXNpYmxlRHJhd2VyID09PSAnY29sdW1ucycgPyAnYXV0bycgOiAwfVxuICAgICAgICAgIGlkPXtgJHtiYXNlQ2xhc3N9LWNvbHVtbnNgfVxuICAgICAgICA+XG4gICAgICAgICAgPENvbHVtblNlbGVjdG9yIHNsdWc9e2NvbGxlY3Rpb24uc2x1Z30gLz5cbiAgICAgICAgPC9BbmltYXRlSGVpZ2h0PlxuICAgICAgKX1cbiAgICAgIDxBbmltYXRlSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd2hlcmVgfVxuICAgICAgICBoZWlnaHQ9e3Zpc2libGVEcmF3ZXIgPT09ICd3aGVyZScgPyAnYXV0bycgOiAwfVxuICAgICAgICBpZD17YCR7YmFzZUNsYXNzfS13aGVyZWB9XG4gICAgICA+XG4gICAgICAgIDxXaGVyZUJ1aWxkZXJcbiAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlV2hlcmVDaGFuZ2V9XG4gICAgICAgICAga2V5PXtTdHJpbmcoaGFzV2hlcmVQYXJhbS5jdXJyZW50ICYmICFwYXJhbXM/LndoZXJlKX1cbiAgICAgICAgICBtb2RpZnlTZWFyY2hRdWVyeT17bW9kaWZ5U2VhcmNoUXVlcnl9XG4gICAgICAgIC8+XG4gICAgICA8L0FuaW1hdGVIZWlnaHQ+XG4gICAgICB7ZW5hYmxlU29ydCAmJiAoXG4gICAgICAgIDxBbmltYXRlSGVpZ2h0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zb3J0YH1cbiAgICAgICAgICBoZWlnaHQ9e3Zpc2libGVEcmF3ZXIgPT09ICdzb3J0JyA/ICdhdXRvJyA6IDB9XG4gICAgICAgICAgaWQ9e2Ake2Jhc2VDbGFzc30tc29ydGB9XG4gICAgICAgID5cbiAgICAgICAgICA8U29ydENvbXBsZXhcbiAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZVNvcnRDaGFuZ2V9XG4gICAgICAgICAgICBtb2RpZnlTZWFyY2hRdWVyeT17bW9kaWZ5U2VhcmNoUXVlcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BbmltYXRlSGVpZ2h0PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkxpc3RDb250cm9scyIsImJhc2VDbGFzcyIsInByb3BzIiwiY29sbGVjdGlvbiIsImFkbWluIiwibGlzdFNlYXJjaGFibGVGaWVsZHMiLCJmaWVsZHMiLCJlbmFibGVDb2x1bW5zIiwiZW5hYmxlU29ydCIsImhhbmRsZVNlYXJjaENoYW5nZSIsImhhbmRsZVNvcnRDaGFuZ2UiLCJoYW5kbGVXaGVyZUNoYW5nZSIsIm1vZGlmeVNlYXJjaFF1ZXJ5IiwicmVzZXRQYXJhbXMiLCJ0aXRsZUZpZWxkIiwicGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwic2hvdWxkSW5pdGlhbGl6ZVdoZXJlT3BlbmVkIiwidmFsaWRhdGVXaGVyZVF1ZXJ5Iiwid2hlcmUiLCJoYXNXaGVyZVBhcmFtIiwiUmVhY3QiLCJ1c2VSZWYiLCJCb29sZWFuIiwidGV4dEZpZWxkc1RvQmVTZWFyY2hlZCIsInNldEZpZWxkc1RvQmVTZWFyY2hlZCIsInVzZVN0YXRlIiwiZ2V0VGV4dEZpZWxkc1RvQmVTZWFyY2hlZCIsInZpc2libGVEcmF3ZXIiLCJzZXRWaXNpYmxlRHJhd2VyIiwidW5kZWZpbmVkIiwiaTE4biIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImJyZWFrcG9pbnRzIiwicyIsInNtYWxsQnJlYWsiLCJ1c2VXaW5kb3dJbmZvIiwidXNlRWZmZWN0IiwibGltaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJTZWFyY2hGaWx0ZXIiLCJmaWVsZExhYmVsIiwiZ2V0VHJhbnNsYXRpb24iLCJsYWJlbCIsIm5hbWUiLCJmaWVsZE5hbWUiLCJmaWVsZEFmZmVjdHNEYXRhIiwiaGFuZGxlQ2hhbmdlIiwiRnJhZ21lbnQiLCJFZGl0TWFueSIsIlB1Ymxpc2hNYW55IiwiVW5wdWJsaXNoTWFueSIsIkRlbGV0ZU1hbnkiLCJQaWxsIiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJpY29uIiwiQ2hldnJvbiIsIm9uQ2xpY2siLCJwaWxsU3R5bGUiLCJBbmltYXRlSGVpZ2h0IiwiaGVpZ2h0IiwiaWQiLCJDb2x1bW5TZWxlY3RvciIsInNsdWciLCJXaGVyZUJ1aWxkZXIiLCJrZXkiLCJTdHJpbmciLCJjdXJyZW50IiwiU29ydENvbXBsZXgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQStCYUE7OztlQUFBQTs7OzRCQS9CaUI7K0RBQ0U7MkVBQ047OEJBQ0s7dUJBSUU7Z0NBQ0Y7Z0VBQ1g7OEJBQ1k7dUVBQ0w7bUVBQ0o7aUVBQ0Y7NkRBQ0o7b0VBQ087cUVBQ0M7b0VBQ0Q7c0VBQ0U7cUVBQ0Q7MkVBQ007MkNBQ1c7UUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUMsWUFBWTtBQU9YLE1BQU1ELGVBQWdDLENBQUNFO0lBQzVDLE1BQU0sRUFDSkMsWUFBWSxFQUNWQyxPQUFPLEVBQUVDLG9CQUFvQixFQUFFLEVBQy9CQyxNQUFNLEVBQ1AsRUFDREgsVUFBVSxFQUNWSSxnQkFBZ0IsSUFBSSxFQUNwQkMsYUFBYSxLQUFLLEVBQ2xCQyxrQkFBa0IsRUFDbEJDLGdCQUFnQixFQUNoQkMsaUJBQWlCLEVBQ2pCQyxvQkFBb0IsSUFBSSxFQUN4QkMsV0FB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