"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Select", {
    enumerable: true,
    get: function() {
        return Select;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../../../utilities/getTranslation");
const _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../ReactSelect"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const formatOptions = (options)=>options.map((option)=>{
        if (typeof option === 'object' && (option.value || option.value === '')) {
            return option;
        }
        return {
            label: option,
            value: option
        };
    });
const Select = ({ disabled, onChange, operator, options: optionsFromProps, value })=>{
    const { i18n } = (0, _reacti18next.useTranslation)();
    const [options, setOptions] = _react.default.useState(formatOptions(optionsFromProps));
    const isMulti = [
        'in',
        'not_in'
    ].includes(operator);
    let valueToRender;
    if (isMulti && Array.isArray(value)) {
        valueToRender = value.map((val)=>{
            const matchingOption = options.find((option)=>option.value === val);
            return {
                label: matchingOption ? (0, _getTranslation.getTranslation)(matchingOption.label, i18n) : val,
                value: matchingOption?.value ?? val
            };
        });
    } else if (value) {
        const matchingOption = options.find((option)=>option.value === value);
        valueToRender = {
            label: matchingOption ? (0, _getTranslation.getTranslation)(matchingOption.label, i18n) : value,
            value: matchingOption?.value ?? value
        };
    }
    const onSelect = _react.default.useCallback((selectedOption)=>{
        let newValue;
        if (!selectedOption) {
            newValue = null;
        } else if (isMulti) {
            if (Array.isArray(selectedOption)) {
                newValue = selectedOption.map((option)=>option.value);
            } else {
                newValue = [];
            }
        } else {
            newValue = selectedOption.value;
        }
        onChange(newValue);
    }, [
        isMulti,
        onChange
    ]);
    _react.default.useEffect(()=>{
        setOptions(formatOptions(optionsFromProps));
    }, [
        optionsFromProps
    ]);
    _react.default.useEffect(()=>{
        if (!isMulti && Array.isArray(value)) {
            onChange(value[0]);
        }
    }, [
        isMulti,
        onChange,
        value
    ]);
    return /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        disabled: disabled,
        isMulti: isMulti,
        onChange: onSelect,
        options: options.map((option)=>({
                ...option,
                label: (0, _getTranslation.getTranslation)(option.label, i18n)
            })),
        value: valueToRender
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vU2VsZWN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgT3B0aW9uLCBPcHRpb25PYmplY3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IFJlYWN0U2VsZWN0IGZyb20gJy4uLy4uLy4uL1JlYWN0U2VsZWN0J1xuXG5jb25zdCBmb3JtYXRPcHRpb25zID0gKG9wdGlvbnM6IE9wdGlvbltdKTogT3B0aW9uT2JqZWN0W10gPT5cbiAgb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiAob3B0aW9uLnZhbHVlIHx8IG9wdGlvbi52YWx1ZSA9PT0gJycpKSB7XG4gICAgICByZXR1cm4gb3B0aW9uXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiBvcHRpb24sXG4gICAgICB2YWx1ZTogb3B0aW9uLFxuICAgIH0gYXMgT3B0aW9uT2JqZWN0XG4gIH0pXG5cbmV4cG9ydCBjb25zdCBTZWxlY3Q6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGRpc2FibGVkLFxuICBvbkNoYW5nZSxcbiAgb3BlcmF0b3IsXG4gIG9wdGlvbnM6IG9wdGlvbnNGcm9tUHJvcHMsXG4gIHZhbHVlLFxufSkgPT4ge1xuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZm9ybWF0T3B0aW9ucyhvcHRpb25zRnJvbVByb3BzKSlcblxuICBjb25zdCBpc011bHRpID0gWydpbicsICdub3RfaW4nXS5pbmNsdWRlcyhvcGVyYXRvcilcbiAgbGV0IHZhbHVlVG9SZW5kZXJcblxuICBpZiAoaXNNdWx0aSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlVG9SZW5kZXIgPSB2YWx1ZS5tYXAoKHZhbCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hpbmdPcHRpb24gPSBvcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSB2YWwpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbDogbWF0Y2hpbmdPcHRpb24gPyBnZXRUcmFuc2xhdGlvbihtYXRjaGluZ09wdGlvbi5sYWJlbCwgaTE4bikgOiB2YWwsXG4gICAgICAgIHZhbHVlOiBtYXRjaGluZ09wdGlvbj8udmFsdWUgPz8gdmFsLFxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICBjb25zdCBtYXRjaGluZ09wdGlvbiA9IG9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IHZhbHVlKVxuICAgIHZhbHVlVG9SZW5kZXIgPSB7XG4gICAgICBsYWJlbDogbWF0Y2hpbmdPcHRpb24gPyBnZXRUcmFuc2xhdGlvbihtYXRjaGluZ09wdGlvbi5sYWJlbCwgaTE4bikgOiB2YWx1ZSxcbiAgICAgIHZhbHVlOiBtYXRjaGluZ09wdGlvbj8udmFsdWUgPz8gdmFsdWUsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25TZWxlY3QgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoc2VsZWN0ZWRPcHRpb24pID0+IHtcbiAgICAgIGxldCBuZXdWYWx1ZVxuICAgICAgaWYgKCFzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICBuZXdWYWx1ZSA9IG51bGxcbiAgICAgIH0gZWxzZSBpZiAoaXNNdWx0aSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RlZE9wdGlvbikpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBbXVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKVxuICAgIH0sXG4gICAgW2lzTXVsdGksIG9uQ2hhbmdlXSxcbiAgKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0T3B0aW9ucyhmb3JtYXRPcHRpb25zKG9wdGlvbnNGcm9tUHJvcHMpKVxuICB9LCBbb3B0aW9uc0Zyb21Qcm9wc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzTXVsdGkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIG9uQ2hhbmdlKHZhbHVlWzBdKVxuICAgIH1cbiAgfSwgW2lzTXVsdGksIG9uQ2hhbmdlLCB2YWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3RTZWxlY3RcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGlzTXVsdGk9e2lzTXVsdGl9XG4gICAgICBvbkNoYW5nZT17b25TZWxlY3R9XG4gICAgICBvcHRpb25zPXtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoeyAuLi5vcHRpb24sIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihvcHRpb24ubGFiZWwsIGkxOG4pIH0pKX1cbiAgICAgIHZhbHVlPXt2YWx1ZVRvUmVuZGVyfVxuICAgIC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3QiLCJmb3JtYXRPcHRpb25zIiwib3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsInZhbHVlIiwibGFiZWwiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwib3BlcmF0b3IiLCJvcHRpb25zRnJvbVByb3BzIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwic2V0T3B0aW9ucyIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc011bHRpIiwiaW5jbHVkZXMiLCJ2YWx1ZVRvUmVuZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwidmFsIiwibWF0Y2hpbmdPcHRpb24iLCJmaW5kIiwiZ2V0VHJhbnNsYXRpb24iLCJvblNlbGVjdCIsInVzZUNhbGxiYWNrIiwic2VsZWN0ZWRPcHRpb24iLCJuZXdWYWx1ZSIsInVzZUVmZmVjdCIsIlJlYWN0U2VsZWN0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQmFBOzs7ZUFBQUE7Ozs4REFyQks7OEJBQ2E7Z0NBS0E7b0VBQ1A7Ozs7OztBQUV4QixNQUFNQyxnQkFBZ0IsQ0FBQ0MsVUFDckJBLFFBQVFDLEdBQUcsQ0FBQyxDQUFDQztRQUNYLElBQUksT0FBT0EsV0FBVyxZQUFhQSxDQUFBQSxPQUFPQyxLQUFLLElBQUlELE9BQU9DLEtBQUssS0FBSyxFQUFDLEdBQUk7WUFDdkUsT0FBT0Q7UUFDVDtRQUVBLE9BQU87WUFDTEUsT0FBT0Y7WUFDUEMsT0FBT0Q7UUFDVDtJQUNGO0FBRUssTUFBTUosU0FBMEIsQ0FBQyxFQUN0Q08sUUFBUSxFQUNSQyxRQUFRLEVBQ1JDLFFBQVEsRUFDUlAsU0FBU1EsZ0JBQWdCLEVBQ3pCTCxLQUFLLEVBQ047SUFDQyxNQUFNLEVBQUVNLElBQUksRUFBRSxHQUFHQyxJQUFBQSw0QkFBYztJQUMvQixNQUFNLENBQUNWLFNBQVNXLFdBQVcsR0FBR0MsY0FBSyxDQUFDQyxRQUFRLENBQUNkLGNBQWNTO0lBRTNELE1BQU1NLFVBQVU7UUFBQztRQUFNO0tBQVMsQ0FBQ0MsUUFBUSxDQUFDUjtJQUMxQyxJQUFJUztJQUVKLElBQUlGLFdBQVdHLE1BQU1DLE9BQU8sQ0FBQ2YsUUFBUTtRQUNuQ2EsZ0JBQWdCYixNQUFNRixHQUFHLENBQUMsQ0FBQ2tCO1lBQ3pCLE1BQU1DLGlCQUFpQnBCLFFBQVFxQixJQUFJLENBQUMsQ0FBQ25CLFNBQVdBLE9BQU9DLEtBQUssS0FBS2dCO1lBQ2pFLE9BQU87Z0JBQ0xmLE9BQU9nQixpQkFBaUJFLElBQUFBLDhCQUFjLEVBQUNGLGVBQWVoQixLQUFLLEVBQUVLLFFBQVFVO2dCQUNyRWhCLE9BQU9pQixnQkFBZ0JqQixTQUFTZ0I7WUFDbEM7UUFDRjtJQUNGLE9BQU8sSUFBSWhCLE9BQU87UUFDaEIsTUFBTWlCLGlCQUFpQnBCLFFBQVFxQixJQUFJLENBQUMsQ0FBQ25CLFNBQVdBLE9BQU9DLEtBQUssS0FBS0E7UUFDakVhLGdCQUFnQjtZQUNkWixPQUFPZ0IsaUJBQWlCRSxJQUFBQSw4QkFBYyxFQUFDRixlQUFlaEIsS0FBSyxFQUFFSyxRQUFRTjtZQUNyRUEsT0FBT2lCLGdCQUFnQmpCLFNBQVNBO1FBQ2xDO0lBQ0Y7SUFFQSxNQUFNb0IsV0FBV1gsY0FBSyxDQUFDWSxXQUFXLENBQ2hDLENBQUNDO1FBQ0MsSUFBSUM7UUFDSixJQUFJLENBQUNELGdCQUFnQjtZQUNuQkMsV0FBVztRQUNiLE9BQU8sSUFBSVosU0FBUztZQUNsQixJQUFJRyxNQUFNQyxPQUFPLENBQUNPLGlCQUFpQjtnQkFDakNDLFdBQVdELGVBQWV4QixHQUFHLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsS0FBSztZQUN4RCxPQUFPO2dCQUNMdUIsV0FBVyxFQUFFO1lBQ2Y7UUFDRixPQUFPO1lBQ0xBLFdBQVdELGVBQWV0QixLQUFLO1FBQ2pDO1FBRUFHLFNBQVNvQjtJQUNYLEdBQ0E7UUFBQ1o7UUFBU1I7S0FBUztJQUdyQk0sY0FBSyxDQUFDZSxTQUFTLENBQUM7UUFDZGhCLFdBQVdaLGNBQWNTO0lBQzNCLEdBQUc7UUFBQ0E7S0FBaUI7SUFFckJJLGNBQUssQ0FBQ2UsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDYixXQUFXRyxNQUFNQyxPQUFPLENBQUNmLFFBQVE7WUFDcENHLFNBQVNILEtBQUssQ0FBQyxFQUFFO1FBQ25CO0lBQ0YsR0FBRztRQUFDVztRQUFTUjtRQUFVSDtLQUFNO0lBRTdCLHFCQUNFLDZCQUFDeUIsb0JBQVc7UUFDVnZCLFVBQVVBO1FBQ1ZTLFNBQVNBO1FBQ1RSLFVBQVVpQjtRQUNWdkIsU0FBU0EsUUFBUUMsR0FBRyxDQUFDLENBQUNDLFNBQVksQ0FBQTtnQkFBRSxHQUFHQSxNQUFNO2dCQUFFRSxPQUFPa0IsSUFBQUEsOEJBQWMsRUFBQ3BCLE9BQU9FLEtBQUssRUFBRUs7WUFBTSxDQUFBO1FBQ3pGTixPQUFPYTs7QUFHYiJ9