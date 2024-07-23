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
const baseClass = 'select-diff';
const getOptionsToRender = (value, options, hasMany)=>{
    if (hasMany && Array.isArray(value)) {
        return value.map((val)=>options.find((option)=>(typeof option === 'string' ? option : option.value) === val) || String(val));
    }
    return options.find((option)=>(typeof option === 'string' ? option : option.value) === value) || String(value);
};
const getTranslatedOptions = (options, i18n)=>{
    if (Array.isArray(options)) {
        return options.map((option)=>typeof option === 'string' ? option : (0, _getTranslation.getTranslation)(option.label, i18n)).join(', ');
    }
    return typeof options === 'string' ? options : (0, _getTranslation.getTranslation)(options.label, i18n);
};
const Select = ({ comparison, diffMethod, field, locale, version })=>{
    let placeholder = '';
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    if (version === comparison) placeholder = `[${t('noValue')}]`;
    const comparisonToRender = typeof comparison !== 'undefined' ? getTranslatedOptions(getOptionsToRender(comparison, field.options, field.hasMany), i18n) : placeholder;
    const versionToRender = typeof version !== 'undefined' ? getTranslatedOptions(getOptionsToRender(version, field.options, field.hasMany), i18n) : placeholder;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Label.default, null, locale && /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__locale-label`
    }, locale), (0, _getTranslation.getTranslation)(field.label, i18n)), /*#__PURE__*/ _react.default.createElement(_reactdiffviewercontinued.default, {
        compareMethod: _reactdiffviewercontinued.DiffMethod[diffMethod],
        hideLineNumbers: true,
        newValue: typeof versionToRender !== 'undefined' ? versionToRender : placeholder,
        oldValue: comparisonToRender,
        showDiffOnly: false,
        splitView: true,
        styles: _styles.diffStyles
    }));
};
const _default = Select;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9TZWxlY3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgaTE4biBhcyBJaTE4biB9IGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERpZmZWaWV3ZXIsIHsgRGlmZk1ldGhvZCB9IGZyb20gJ3JlYWN0LWRpZmYtdmlld2VyLWNvbnRpbnVlZCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBPcHRpb25PYmplY3QsIFNlbGVjdEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnXG5pbXBvcnQgeyBkaWZmU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdzZWxlY3QtZGlmZidcblxuY29uc3QgZ2V0T3B0aW9uc1RvUmVuZGVyID0gKFxuICB2YWx1ZTogc3RyaW5nLFxuICBvcHRpb25zOiBTZWxlY3RGaWVsZFsnb3B0aW9ucyddLFxuICBoYXNNYW55OiBib29sZWFuLFxuKTogKE9wdGlvbk9iamVjdCB8IHN0cmluZylbXSB8IE9wdGlvbk9iamVjdCB8IHN0cmluZyA9PiB7XG4gIGlmIChoYXNNYW55ICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcChcbiAgICAgICh2YWwpID0+XG4gICAgICAgIG9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgPyBvcHRpb24gOiBvcHRpb24udmFsdWUpID09PSB2YWwpIHx8XG4gICAgICAgIFN0cmluZyh2YWwpLFxuICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIG9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgPyBvcHRpb24gOiBvcHRpb24udmFsdWUpID09PSB2YWx1ZSkgfHxcbiAgICBTdHJpbmcodmFsdWUpXG4gIClcbn1cblxuY29uc3QgZ2V0VHJhbnNsYXRlZE9wdGlvbnMgPSAoXG4gIG9wdGlvbnM6IChPcHRpb25PYmplY3QgfCBzdHJpbmcpW10gfCBPcHRpb25PYmplY3QgfCBzdHJpbmcsXG4gIGkxOG46IElpMThuLFxuKTogc3RyaW5nID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICByZXR1cm4gb3B0aW9uc1xuICAgICAgLm1hcCgob3B0aW9uKSA9PiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgPyBvcHRpb24gOiBnZXRUcmFuc2xhdGlvbihvcHRpb24ubGFiZWwsIGkxOG4pKSlcbiAgICAgIC5qb2luKCcsICcpXG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyA/IG9wdGlvbnMgOiBnZXRUcmFuc2xhdGlvbihvcHRpb25zLmxhYmVsLCBpMThuKVxufVxuXG5jb25zdCBTZWxlY3Q6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbXBhcmlzb24sIGRpZmZNZXRob2QsIGZpZWxkLCBsb2NhbGUsIHZlcnNpb24gfSkgPT4ge1xuICBsZXQgcGxhY2Vob2xkZXIgPSAnJ1xuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcblxuICBpZiAodmVyc2lvbiA9PT0gY29tcGFyaXNvbikgcGxhY2Vob2xkZXIgPSBgWyR7dCgnbm9WYWx1ZScpfV1gXG5cbiAgY29uc3QgY29tcGFyaXNvblRvUmVuZGVyID1cbiAgICB0eXBlb2YgY29tcGFyaXNvbiAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gZ2V0VHJhbnNsYXRlZE9wdGlvbnMoZ2V0T3B0aW9uc1RvUmVuZGVyKGNvbXBhcmlzb24sIGZpZWxkLm9wdGlvbnMsIGZpZWxkLmhhc01hbnkpLCBpMThuKVxuICAgICAgOiBwbGFjZWhvbGRlclxuICBjb25zdCB2ZXJzaW9uVG9SZW5kZXIgPVxuICAgIHR5cGVvZiB2ZXJzaW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBnZXRUcmFuc2xhdGVkT3B0aW9ucyhnZXRPcHRpb25zVG9SZW5kZXIodmVyc2lvbiwgZmllbGQub3B0aW9ucywgZmllbGQuaGFzTWFueSksIGkxOG4pXG4gICAgICA6IHBsYWNlaG9sZGVyXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxMYWJlbD5cbiAgICAgICAge2xvY2FsZSAmJiA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xvY2FsZS1sYWJlbGB9Pntsb2NhbGV9PC9zcGFuPn1cbiAgICAgICAge2dldFRyYW5zbGF0aW9uKGZpZWxkLmxhYmVsLCBpMThuKX1cbiAgICAgIDwvTGFiZWw+XG4gICAgICA8UmVhY3REaWZmVmlld2VyXG4gICAgICAgIGNvbXBhcmVNZXRob2Q9e0RpZmZNZXRob2RbZGlmZk1ldGhvZF19XG4gICAgICAgIGhpZGVMaW5lTnVtYmVyc1xuICAgICAgICBuZXdWYWx1ZT17dHlwZW9mIHZlcnNpb25Ub1JlbmRlciAhPT0gJ3VuZGVmaW5lZCcgPyB2ZXJzaW9uVG9SZW5kZXIgOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgb2xkVmFsdWU9e2NvbXBhcmlzb25Ub1JlbmRlcn1cbiAgICAgICAgc2hvd0RpZmZPbmx5PXtmYWxzZX1cbiAgICAgICAgc3BsaXRWaWV3XG4gICAgICAgIHN0eWxlcz17ZGlmZlN0eWxlc31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiZ2V0T3B0aW9uc1RvUmVuZGVyIiwidmFsdWUiLCJvcHRpb25zIiwiaGFzTWFueSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInZhbCIsImZpbmQiLCJvcHRpb24iLCJTdHJpbmciLCJnZXRUcmFuc2xhdGVkT3B0aW9ucyIsImkxOG4iLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVsIiwiam9pbiIsIlNlbGVjdCIsImNvbXBhcmlzb24iLCJkaWZmTWV0aG9kIiwiZmllbGQiLCJsb2NhbGUiLCJ2ZXJzaW9uIiwicGxhY2Vob2xkZXIiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJjb21wYXJpc29uVG9SZW5kZXIiLCJ2ZXJzaW9uVG9SZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJMYWJlbCIsInNwYW4iLCJSZWFjdERpZmZWaWV3ZXIiLCJjb21wYXJlTWV0aG9kIiwiRGlmZk1ldGhvZCIsImhpZGVMaW5lTnVtYmVycyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJzaG93RGlmZk9ubHkiLCJzcGxpdFZpZXciLCJzdHlsZXMiLCJkaWZmU3R5bGVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFnRkE7OztlQUFBOzs7OERBOUVrQjtrRkFDMEI7OEJBQ2I7Z0NBS0E7OERBQ2I7d0JBQ1M7UUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxxQkFBcUIsQ0FDekJDLE9BQ0FDLFNBQ0FDO0lBRUEsSUFBSUEsV0FBV0MsTUFBTUMsT0FBTyxDQUFDSixRQUFRO1FBQ25DLE9BQU9BLE1BQU1LLEdBQUcsQ0FDZCxDQUFDQyxNQUNDTCxRQUFRTSxJQUFJLENBQUMsQ0FBQ0MsU0FBVyxBQUFDLENBQUEsT0FBT0EsV0FBVyxXQUFXQSxTQUFTQSxPQUFPUixLQUFLLEFBQUQsTUFBT00sUUFDbEZHLE9BQU9IO0lBRWI7SUFDQSxPQUNFTCxRQUFRTSxJQUFJLENBQUMsQ0FBQ0MsU0FBVyxBQUFDLENBQUEsT0FBT0EsV0FBVyxXQUFXQSxTQUFTQSxPQUFPUixLQUFLLEFBQUQsTUFBT0EsVUFDbEZTLE9BQU9UO0FBRVg7QUFFQSxNQUFNVSx1QkFBdUIsQ0FDM0JULFNBQ0FVO0lBRUEsSUFBSVIsTUFBTUMsT0FBTyxDQUFDSCxVQUFVO1FBQzFCLE9BQU9BLFFBQ0pJLEdBQUcsQ0FBQyxDQUFDRyxTQUFZLE9BQU9BLFdBQVcsV0FBV0EsU0FBU0ksSUFBQUEsOEJBQWMsRUFBQ0osT0FBT0ssS0FBSyxFQUFFRixPQUNwRkcsSUFBSSxDQUFDO0lBQ1Y7SUFDQSxPQUFPLE9BQU9iLFlBQVksV0FBV0EsVUFBVVcsSUFBQUEsOEJBQWMsRUFBQ1gsUUFBUVksS0FBSyxFQUFFRjtBQUMvRTtBQUVBLE1BQU1JLFNBQTBCLENBQUMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7SUFDakYsSUFBSUMsY0FBYztJQUNsQixNQUFNLEVBQUVWLElBQUksRUFBRVcsQ0FBQyxFQUFFLEdBQUdDLElBQUFBLDRCQUFjLEVBQUM7SUFFbkMsSUFBSUgsWUFBWUosWUFBWUssY0FBYyxDQUFDLENBQUMsRUFBRUMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUU3RCxNQUFNRSxxQkFDSixPQUFPUixlQUFlLGNBQ2xCTixxQkFBcUJYLG1CQUFtQmlCLFlBQVlFLE1BQU1qQixPQUFPLEVBQUVpQixNQUFNaEIsT0FBTyxHQUFHUyxRQUNuRlU7SUFDTixNQUFNSSxrQkFDSixPQUFPTCxZQUFZLGNBQ2ZWLHFCQUFxQlgsbUJBQW1CcUIsU0FBU0YsTUFBTWpCLE9BQU8sRUFBRWlCLE1BQU1oQixPQUFPLEdBQUdTLFFBQ2hGVTtJQUVOLHFCQUNFLDZCQUFDSztRQUFJQyxXQUFXN0I7cUJBQ2QsNkJBQUM4QixjQUFLLFFBQ0hULHdCQUFVLDZCQUFDVTtRQUFLRixXQUFXLENBQUMsRUFBRTdCLFVBQVUsY0FBYyxDQUFDO09BQUdxQixTQUMxRFAsSUFBQUEsOEJBQWMsRUFBQ00sTUFBTUwsS0FBSyxFQUFFRixzQkFFL0IsNkJBQUNtQixpQ0FBZTtRQUNkQyxlQUFlQyxvQ0FBVSxDQUFDZixXQUFXO1FBQ3JDZ0IsaUJBQUFBO1FBQ0FDLFVBQVUsT0FBT1Qsb0JBQW9CLGNBQWNBLGtCQUFrQko7UUFDckVjLFVBQVVYO1FBQ1ZZLGNBQWM7UUFDZEMsV0FBQUE7UUFDQUMsUUFBUUMsa0JBQVU7O0FBSTFCO01BRUEsV0FBZXhCIn0=