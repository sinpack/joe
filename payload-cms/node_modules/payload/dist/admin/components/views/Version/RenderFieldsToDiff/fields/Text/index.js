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
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reactdiffviewercontinued = /*#__PURE__*/ _interop_require_wildcard(require("react-diff-viewer-continued"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../../../../utilities/getTranslation");
const _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
const _styles = require("../styles");
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
const baseClass = 'text-diff';
const Text = ({ comparison, diffMethod, field, isRichText = false, locale, version })=>{
    let placeholder = '';
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    if (version === comparison) placeholder = `[${t('noValue')}]`;
    let versionToRender = version;
    let comparisonToRender = comparison;
    if (isRichText) {
        if (typeof version === 'object') versionToRender = JSON.stringify(version, null, 2);
        if (typeof comparison === 'object') comparisonToRender = JSON.stringify(comparison, null, 2);
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Label.default, null, locale && /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__locale-label`
    }, locale), (0, _getTranslation.getTranslation)(field.label, i18n)), /*#__PURE__*/ _react.default.createElement(_reactdiffviewercontinued.default, {
        compareMethod: _reactdiffviewercontinued.DiffMethod[diffMethod],
        hideLineNumbers: true,
        newValue: typeof versionToRender !== 'undefined' ? String(versionToRender) : placeholder,
        oldValue: typeof comparisonToRender !== 'undefined' ? String(comparisonToRender) : placeholder,
        showDiffOnly: false,
        splitView: true,
        styles: _styles.diffStyles
    }));
};
const _default = Text;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9UZXh0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3REaWZmVmlld2VyLCB7IERpZmZNZXRob2QgfSBmcm9tICdyZWFjdC1kaWZmLXZpZXdlci1jb250aW51ZWQnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnXG5pbXBvcnQgeyBkaWZmU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICd0ZXh0LWRpZmYnXG5cbmNvbnN0IFRleHQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGNvbXBhcmlzb24sXG4gIGRpZmZNZXRob2QsXG4gIGZpZWxkLFxuICBpc1JpY2hUZXh0ID0gZmFsc2UsXG4gIGxvY2FsZSxcbiAgdmVyc2lvbixcbn0pID0+IHtcbiAgbGV0IHBsYWNlaG9sZGVyID0gJydcbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpXG5cbiAgaWYgKHZlcnNpb24gPT09IGNvbXBhcmlzb24pIHBsYWNlaG9sZGVyID0gYFske3QoJ25vVmFsdWUnKX1dYFxuXG4gIGxldCB2ZXJzaW9uVG9SZW5kZXIgPSB2ZXJzaW9uXG4gIGxldCBjb21wYXJpc29uVG9SZW5kZXIgPSBjb21wYXJpc29uXG5cbiAgaWYgKGlzUmljaFRleHQpIHtcbiAgICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdvYmplY3QnKSB2ZXJzaW9uVG9SZW5kZXIgPSBKU09OLnN0cmluZ2lmeSh2ZXJzaW9uLCBudWxsLCAyKVxuICAgIGlmICh0eXBlb2YgY29tcGFyaXNvbiA9PT0gJ29iamVjdCcpIGNvbXBhcmlzb25Ub1JlbmRlciA9IEpTT04uc3RyaW5naWZ5KGNvbXBhcmlzb24sIG51bGwsIDIpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPExhYmVsPlxuICAgICAgICB7bG9jYWxlICYmIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbG9jYWxlLWxhYmVsYH0+e2xvY2FsZX08L3NwYW4+fVxuICAgICAgICB7Z2V0VHJhbnNsYXRpb24oZmllbGQubGFiZWwsIGkxOG4pfVxuICAgICAgPC9MYWJlbD5cbiAgICAgIDxSZWFjdERpZmZWaWV3ZXJcbiAgICAgICAgY29tcGFyZU1ldGhvZD17RGlmZk1ldGhvZFtkaWZmTWV0aG9kXX1cbiAgICAgICAgaGlkZUxpbmVOdW1iZXJzXG4gICAgICAgIG5ld1ZhbHVlPXt0eXBlb2YgdmVyc2lvblRvUmVuZGVyICE9PSAndW5kZWZpbmVkJyA/IFN0cmluZyh2ZXJzaW9uVG9SZW5kZXIpIDogcGxhY2Vob2xkZXJ9XG4gICAgICAgIG9sZFZhbHVlPXtcbiAgICAgICAgICB0eXBlb2YgY29tcGFyaXNvblRvUmVuZGVyICE9PSAndW5kZWZpbmVkJyA/IFN0cmluZyhjb21wYXJpc29uVG9SZW5kZXIpIDogcGxhY2Vob2xkZXJcbiAgICAgICAgfVxuICAgICAgICBzaG93RGlmZk9ubHk9e2ZhbHNlfVxuICAgICAgICBzcGxpdFZpZXdcbiAgICAgICAgc3R5bGVzPXtkaWZmU3R5bGVzfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiVGV4dCIsImNvbXBhcmlzb24iLCJkaWZmTWV0aG9kIiwiZmllbGQiLCJpc1JpY2hUZXh0IiwibG9jYWxlIiwidmVyc2lvbiIsInBsYWNlaG9sZGVyIiwiaTE4biIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInZlcnNpb25Ub1JlbmRlciIsImNvbXBhcmlzb25Ub1JlbmRlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJMYWJlbCIsInNwYW4iLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVsIiwiUmVhY3REaWZmVmlld2VyIiwiY29tcGFyZU1ldGhvZCIsIkRpZmZNZXRob2QiLCJoaWRlTGluZU51bWJlcnMiLCJuZXdWYWx1ZSIsIlN0cmluZyIsIm9sZFZhbHVlIiwic2hvd0RpZmZPbmx5Iiwic3BsaXRWaWV3Iiwic3R5bGVzIiwiZGlmZlN0eWxlcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXVEQTs7O2VBQUE7Ozs4REF2RGtCO2tGQUMwQjs4QkFDYjtnQ0FJQTs4REFDYjt3QkFDUztRQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLE9BQXdCLENBQUMsRUFDN0JDLFVBQVUsRUFDVkMsVUFBVSxFQUNWQyxLQUFLLEVBQ0xDLGFBQWEsS0FBSyxFQUNsQkMsTUFBTSxFQUNOQyxPQUFPLEVBQ1I7SUFDQyxJQUFJQyxjQUFjO0lBQ2xCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUVuQyxJQUFJSixZQUFZTCxZQUFZTSxjQUFjLENBQUMsQ0FBQyxFQUFFRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRTdELElBQUlFLGtCQUFrQkw7SUFDdEIsSUFBSU0scUJBQXFCWDtJQUV6QixJQUFJRyxZQUFZO1FBQ2QsSUFBSSxPQUFPRSxZQUFZLFVBQVVLLGtCQUFrQkUsS0FBS0MsU0FBUyxDQUFDUixTQUFTLE1BQU07UUFDakYsSUFBSSxPQUFPTCxlQUFlLFVBQVVXLHFCQUFxQkMsS0FBS0MsU0FBUyxDQUFDYixZQUFZLE1BQU07SUFDNUY7SUFFQSxxQkFDRSw2QkFBQ2M7UUFBSUMsV0FBV2pCO3FCQUNkLDZCQUFDa0IsY0FBSyxRQUNIWix3QkFBVSw2QkFBQ2E7UUFBS0YsV0FBVyxDQUFDLEVBQUVqQixVQUFVLGNBQWMsQ0FBQztPQUFHTSxTQUMxRGMsSUFBQUEsOEJBQWMsRUFBQ2hCLE1BQU1pQixLQUFLLEVBQUVaLHNCQUUvQiw2QkFBQ2EsaUNBQWU7UUFDZEMsZUFBZUMsb0NBQVUsQ0FBQ3JCLFdBQVc7UUFDckNzQixpQkFBQUE7UUFDQUMsVUFBVSxPQUFPZCxvQkFBb0IsY0FBY2UsT0FBT2YsbUJBQW1CSjtRQUM3RW9CLFVBQ0UsT0FBT2YsdUJBQXVCLGNBQWNjLE9BQU9kLHNCQUFzQkw7UUFFM0VxQixjQUFjO1FBQ2RDLFdBQUFBO1FBQ0FDLFFBQVFDLGtCQUFVOztBQUkxQjtNQUVBLFdBQWUvQiJ9