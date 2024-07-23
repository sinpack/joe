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
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../../utilities/getTranslation");
const _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../elements/ReactSelect"));
const _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
const _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
const _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
const _shared = require("../shared");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SelectInput = (props)=>{
    const { Error, Label, className, defaultValue, description, errorMessage, hasMany, isClearable, isSortable, label, onChange, options, path, readOnly, required, showError, style, value, width } = props;
    const { i18n } = (0, _reacti18next.useTranslation)();
    const ErrorComp = Error || _Error.default;
    const LabelComp = Label || _Label.default;
    let valueToRender = defaultValue;
    if (hasMany && Array.isArray(value)) {
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
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            'select',
            className,
            showError && 'error',
            readOnly && 'read-only'
        ].filter(Boolean).join(' '),
        id: `field-${path.replace(/\./g, '__')}`,
        style: {
            ...style,
            width
        }
    }, /*#__PURE__*/ _react.default.createElement(ErrorComp, {
        message: errorMessage,
        showError: showError
    }), /*#__PURE__*/ _react.default.createElement(LabelComp, {
        htmlFor: `field-${path.replace(/\./g, '__')}`,
        label: label,
        required: required
    }), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        disabled: readOnly,
        isClearable: isClearable,
        isMulti: hasMany,
        isSortable: isSortable,
        onChange: onChange,
        options: options.map((option)=>({
                ...option,
                label: (0, _getTranslation.getTranslation)(option.label, i18n)
            })),
        showError: showError,
        value: valueToRender
    }), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description,
        path: path,
        value: value
    }));
};
const _default = SelectInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1NlbGVjdC9JbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IE9wdGlvbk9iamVjdCwgU2VsZWN0RmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9SZWFjdFNlbGVjdC90eXBlcydcbmltcG9ydCB0eXBlIHsgRGVzY3JpcHRpb24gfSBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCBSZWFjdFNlbGVjdCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9SZWFjdFNlbGVjdCdcbmltcG9ydCBEZWZhdWx0RXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InXG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJ1xuaW1wb3J0IERlZmF1bHRMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCdcbmltcG9ydCB7IGZpZWxkQmFzZUNsYXNzIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmV4cG9ydCB0eXBlIFNlbGVjdElucHV0UHJvcHMgPSBPbWl0PFNlbGVjdEZpZWxkLCAnb3B0aW9ucycgfCAndHlwZScgfCAndmFsdWUnPiAmIHtcbiAgRXJyb3I/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgTGFiZWw/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogRGVzY3JpcHRpb25cbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nXG4gIGhhc01hbnk/OiBib29sZWFuXG4gIGlzQ2xlYXJhYmxlPzogYm9vbGVhblxuICBpc1NvcnRhYmxlPzogYm9vbGVhblxuICBvbkNoYW5nZT86ICh2YWx1ZTogT3B0aW9uKSA9PiB2b2lkXG4gIG9wdGlvbnM/OiBPcHRpb25PYmplY3RbXVxuICBwYXRoOiBzdHJpbmdcbiAgcmVhZE9ubHk/OiBib29sZWFuXG4gIHJlcXVpcmVkPzogYm9vbGVhblxuICBzaG93RXJyb3I/OiBib29sZWFuXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICB2YWx1ZT86IHN0cmluZyB8IHN0cmluZ1tdXG4gIHdpZHRoPzogc3RyaW5nXG59XG5cbmNvbnN0IFNlbGVjdElucHV0OiBSZWFjdC5GQzxTZWxlY3RJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgRXJyb3IsXG4gICAgTGFiZWwsXG4gICAgY2xhc3NOYW1lLFxuICAgIGRlZmF1bHRWYWx1ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgaGFzTWFueSxcbiAgICBpc0NsZWFyYWJsZSxcbiAgICBpc1NvcnRhYmxlLFxuICAgIGxhYmVsLFxuICAgIG9uQ2hhbmdlLFxuICAgIG9wdGlvbnMsXG4gICAgcGF0aCxcbiAgICByZWFkT25seSxcbiAgICByZXF1aXJlZCxcbiAgICBzaG93RXJyb3IsXG4gICAgc3R5bGUsXG4gICAgdmFsdWUsXG4gICAgd2lkdGgsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IEVycm9yQ29tcCA9IEVycm9yIHx8IERlZmF1bHRFcnJvclxuICBjb25zdCBMYWJlbENvbXAgPSBMYWJlbCB8fCBEZWZhdWx0TGFiZWxcblxuICBsZXQgdmFsdWVUb1JlbmRlciA9IGRlZmF1bHRWYWx1ZVxuXG4gIGlmIChoYXNNYW55ICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdmFsdWVUb1JlbmRlciA9IHZhbHVlLm1hcCgodmFsKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGluZ09wdGlvbiA9IG9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IHZhbClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsOiBtYXRjaGluZ09wdGlvbiA/IGdldFRyYW5zbGF0aW9uKG1hdGNoaW5nT3B0aW9uLmxhYmVsLCBpMThuKSA6IHZhbCxcbiAgICAgICAgdmFsdWU6IG1hdGNoaW5nT3B0aW9uPy52YWx1ZSA/PyB2YWwsXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgIGNvbnN0IG1hdGNoaW5nT3B0aW9uID0gb3B0aW9ucy5maW5kKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUpXG4gICAgdmFsdWVUb1JlbmRlciA9IHtcbiAgICAgIGxhYmVsOiBtYXRjaGluZ09wdGlvbiA/IGdldFRyYW5zbGF0aW9uKG1hdGNoaW5nT3B0aW9uLmxhYmVsLCBpMThuKSA6IHZhbHVlLFxuICAgICAgdmFsdWU6IG1hdGNoaW5nT3B0aW9uPy52YWx1ZSA/PyB2YWx1ZSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBmaWVsZEJhc2VDbGFzcyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgICAgIHJlYWRPbmx5ICYmICdyZWFkLW9ubHknLFxuICAgICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEVycm9yQ29tcCBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9IHNob3dFcnJvcj17c2hvd0Vycm9yfSAvPlxuICAgICAgPExhYmVsQ29tcCBodG1sRm9yPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfSBsYWJlbD17bGFiZWx9IHJlcXVpcmVkPXtyZXF1aXJlZH0gLz5cbiAgICAgIDxSZWFjdFNlbGVjdFxuICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgIGlzQ2xlYXJhYmxlPXtpc0NsZWFyYWJsZX1cbiAgICAgICAgaXNNdWx0aT17aGFzTWFueX1cbiAgICAgICAgaXNTb3J0YWJsZT17aXNTb3J0YWJsZX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoe1xuICAgICAgICAgIC4uLm9wdGlvbixcbiAgICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24ob3B0aW9uLmxhYmVsLCBpMThuKSxcbiAgICAgICAgfSkpfVxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgdmFsdWU9e3ZhbHVlVG9SZW5kZXIgYXMgT3B0aW9ufVxuICAgICAgLz5cbiAgICAgIDxGaWVsZERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gcGF0aD17cGF0aH0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdElucHV0XG4iXSwibmFtZXMiOlsiU2VsZWN0SW5wdXQiLCJwcm9wcyIsIkVycm9yIiwiTGFiZWwiLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJkZXNjcmlwdGlvbiIsImVycm9yTWVzc2FnZSIsImhhc01hbnkiLCJpc0NsZWFyYWJsZSIsImlzU29ydGFibGUiLCJsYWJlbCIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInBhdGgiLCJyZWFkT25seSIsInJlcXVpcmVkIiwic2hvd0Vycm9yIiwic3R5bGUiLCJ2YWx1ZSIsIndpZHRoIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwiRXJyb3JDb21wIiwiRGVmYXVsdEVycm9yIiwiTGFiZWxDb21wIiwiRGVmYXVsdExhYmVsIiwidmFsdWVUb1JlbmRlciIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInZhbCIsIm1hdGNoaW5nT3B0aW9uIiwiZmluZCIsIm9wdGlvbiIsImdldFRyYW5zbGF0aW9uIiwiZGl2IiwiZmllbGRCYXNlQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImlkIiwicmVwbGFjZSIsIm1lc3NhZ2UiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJkaXNhYmxlZCIsImlzTXVsdGkiLCJGaWVsZERlc2NyaXB0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXNIQTs7O2VBQUE7Ozs4REF0SGtCOzhCQUNhO2dDQU1BO29FQUNQOzhEQUNDO3lFQUNJOzhEQUNKO3dCQUNNO1FBQ3hCOzs7Ozs7QUFzQlAsTUFBTUEsY0FBMEMsQ0FBQ0M7SUFDL0MsTUFBTSxFQUNKQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxZQUFZLEVBQ1pDLFdBQVcsRUFDWEMsWUFBWSxFQUNaQyxPQUFPLEVBQ1BDLFdBQVcsRUFDWEMsVUFBVSxFQUNWQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsT0FBTyxFQUNQQyxJQUFJLEVBQ0pDLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxTQUFTLEVBQ1RDLEtBQUssRUFDTEMsS0FBSyxFQUNMQyxLQUFLLEVBQ04sR0FBR25CO0lBRUosTUFBTSxFQUFFb0IsSUFBSSxFQUFFLEdBQUdDLElBQUFBLDRCQUFjO0lBRS9CLE1BQU1DLFlBQVlyQixTQUFTc0IsY0FBWTtJQUN2QyxNQUFNQyxZQUFZdEIsU0FBU3VCLGNBQVk7SUFFdkMsSUFBSUMsZ0JBQWdCdEI7SUFFcEIsSUFBSUcsV0FBV29CLE1BQU1DLE9BQU8sQ0FBQ1YsUUFBUTtRQUNuQ1EsZ0JBQWdCUixNQUFNVyxHQUFHLENBQUMsQ0FBQ0M7WUFDekIsTUFBTUMsaUJBQWlCbkIsUUFBUW9CLElBQUksQ0FBQyxDQUFDQyxTQUFXQSxPQUFPZixLQUFLLEtBQUtZO1lBQ2pFLE9BQU87Z0JBQ0xwQixPQUFPcUIsaUJBQWlCRyxJQUFBQSw4QkFBYyxFQUFDSCxlQUFlckIsS0FBSyxFQUFFVSxRQUFRVTtnQkFDckVaLE9BQU9hLGdCQUFnQmIsU0FBU1k7WUFDbEM7UUFDRjtJQUNGLE9BQU8sSUFBSVosT0FBTztRQUNoQixNQUFNYSxpQkFBaUJuQixRQUFRb0IsSUFBSSxDQUFDLENBQUNDLFNBQVdBLE9BQU9mLEtBQUssS0FBS0E7UUFDakVRLGdCQUFnQjtZQUNkaEIsT0FBT3FCLGlCQUFpQkcsSUFBQUEsOEJBQWMsRUFBQ0gsZUFBZXJCLEtBQUssRUFBRVUsUUFBUUY7WUFDckVBLE9BQU9hLGdCQUFnQmIsU0FBU0E7UUFDbEM7SUFDRjtJQUVBLHFCQUNFLDZCQUFDaUI7UUFDQ2hDLFdBQVc7WUFDVGlDLHNCQUFjO1lBQ2Q7WUFDQWpDO1lBQ0FhLGFBQWE7WUFDYkYsWUFBWTtTQUNiLENBQ0V1QixNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztRQUNSQyxJQUFJLENBQUMsTUFBTSxFQUFFM0IsS0FBSzRCLE9BQU8sQ0FBQyxPQUFPLE1BQU0sQ0FBQztRQUN4Q3hCLE9BQU87WUFDTCxHQUFHQSxLQUFLO1lBQ1JFO1FBQ0Y7cUJBRUEsNkJBQUNHO1FBQVVvQixTQUFTcEM7UUFBY1UsV0FBV0E7c0JBQzdDLDZCQUFDUTtRQUFVbUIsU0FBUyxDQUFDLE1BQU0sRUFBRTlCLEtBQUs0QixPQUFPLENBQUMsT0FBTyxNQUFNLENBQUM7UUFBRS9CLE9BQU9BO1FBQU9LLFVBQVVBO3NCQUNsRiw2QkFBQzZCLG9CQUFXO1FBQ1ZDLFVBQVUvQjtRQUNWTixhQUFhQTtRQUNic0MsU0FBU3ZDO1FBQ1RFLFlBQVlBO1FBQ1pFLFVBQVVBO1FBQ1ZDLFNBQVNBLFFBQVFpQixHQUFHLENBQUMsQ0FBQ0ksU0FBWSxDQUFBO2dCQUNoQyxHQUFHQSxNQUFNO2dCQUNUdkIsT0FBT3dCLElBQUFBLDhCQUFjLEVBQUNELE9BQU92QixLQUFLLEVBQUVVO1lBQ3RDLENBQUE7UUFDQUosV0FBV0E7UUFDWEUsT0FBT1E7c0JBRVQsNkJBQUNxQix5QkFBZ0I7UUFBQzFDLGFBQWFBO1FBQWFRLE1BQU1BO1FBQU1LLE9BQU9BOztBQUdyRTtNQUVBLFdBQWVuQiJ9