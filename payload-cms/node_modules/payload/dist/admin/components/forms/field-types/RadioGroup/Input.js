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
const _types = require("../../../../../fields/config/types");
const _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
const _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
const _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
const _shared = require("../shared");
const _RadioInput = /*#__PURE__*/ _interop_require_default(require("./RadioInput"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'radio-group';
const RadioGroupInput = (props)=>{
    const { name, Error, Label, className, description, errorMessage, label, layout = 'horizontal', onChange, options, path: pathFromProps, readOnly, required, showError, style, value, width } = props;
    const ErrorComp = Error || _Error.default;
    const LabelComp = Label || _Label.default;
    const path = pathFromProps || name;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            baseClass,
            className,
            `${baseClass}--layout-${layout}`,
            showError && 'error',
            readOnly && `${baseClass}--read-only`
        ].filter(Boolean).join(' '),
        style: {
            ...style,
            width
        }
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__error-wrap`
    }, /*#__PURE__*/ _react.default.createElement(ErrorComp, {
        message: errorMessage,
        showError: showError
    })), /*#__PURE__*/ _react.default.createElement(LabelComp, {
        htmlFor: `field-${path}`,
        label: label,
        required: required
    }), /*#__PURE__*/ _react.default.createElement("ul", {
        className: `${baseClass}--group`,
        id: `field-${path.replace(/\./g, '__')}`
    }, options.map((option)=>{
        let optionValue = '';
        if ((0, _types.optionIsObject)(option)) {
            optionValue = option.value;
        } else {
            optionValue = option;
        }
        const isSelected = String(optionValue) === String(value);
        return /*#__PURE__*/ _react.default.createElement("li", {
            key: `${path} - ${optionValue}`
        }, /*#__PURE__*/ _react.default.createElement(_RadioInput.default, {
            isSelected: isSelected,
            onChange: readOnly ? undefined : onChange,
            option: (0, _types.optionIsObject)(option) ? option : {
                label: option,
                value: option
            },
            path: path,
            readOnly: readOnly
        }));
    })), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description,
        path: path,
        value: value
    }));
};
const _default = RadioGroupInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JhZGlvR3JvdXAvSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBSYWRpb0ZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgRGVzY3JpcHRpb24gfSBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBPbkNoYW5nZSB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IG9wdGlvbklzT2JqZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCBEZWZhdWx0RXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InXG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJ1xuaW1wb3J0IERlZmF1bHRMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCdcbmltcG9ydCB7IGZpZWxkQmFzZUNsYXNzIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0IFJhZGlvSW5wdXQgZnJvbSAnLi9SYWRpb0lucHV0J1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyYWRpby1ncm91cCdcblxuZXhwb3J0IHR5cGUgUmFkaW9Hcm91cElucHV0UHJvcHMgPSBPbWl0PFJhZGlvRmllbGQsICd0eXBlJz4gJiB7XG4gIEVycm9yPzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIExhYmVsPzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IERlc2NyaXB0aW9uXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZ1xuICBsYXlvdXQ/OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnXG4gIG9uQ2hhbmdlPzogT25DaGFuZ2VcbiAgcGF0aD86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICByZWFkT25seT86IGJvb2xlYW5cbiAgcmVxdWlyZWQ/OiBib29sZWFuXG4gIHNob3dFcnJvcj86IGJvb2xlYW5cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIHZhbHVlPzogc3RyaW5nXG4gIHdpZHRoPzogc3RyaW5nXG59XG5cbmNvbnN0IFJhZGlvR3JvdXBJbnB1dDogUmVhY3QuRkM8UmFkaW9Hcm91cElucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIEVycm9yLFxuICAgIExhYmVsLFxuICAgIGNsYXNzTmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgbGFiZWwsXG4gICAgbGF5b3V0ID0gJ2hvcml6b250YWwnLFxuICAgIG9uQ2hhbmdlLFxuICAgIG9wdGlvbnMsXG4gICAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgICByZWFkT25seSxcbiAgICByZXF1aXJlZCxcbiAgICBzaG93RXJyb3IsXG4gICAgc3R5bGUsXG4gICAgdmFsdWUsXG4gICAgd2lkdGgsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IEVycm9yQ29tcCA9IEVycm9yIHx8IERlZmF1bHRFcnJvclxuICBjb25zdCBMYWJlbENvbXAgPSBMYWJlbCB8fCBEZWZhdWx0TGFiZWxcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgZmllbGRCYXNlQ2xhc3MsXG4gICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBgJHtiYXNlQ2xhc3N9LS1sYXlvdXQtJHtsYXlvdXR9YCxcbiAgICAgICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgICAgIHJlYWRPbmx5ICYmIGAke2Jhc2VDbGFzc30tLXJlYWQtb25seWAsXG4gICAgICBdXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Vycm9yLXdyYXBgfT5cbiAgICAgICAgPEVycm9yQ29tcCBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9IHNob3dFcnJvcj17c2hvd0Vycm9yfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TGFiZWxDb21wIGh0bWxGb3I9e2BmaWVsZC0ke3BhdGh9YH0gbGFiZWw9e2xhYmVsfSByZXF1aXJlZD17cmVxdWlyZWR9IC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9LS1ncm91cGB9IGlkPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfT5cbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSAnJ1xuXG4gICAgICAgICAgaWYgKG9wdGlvbklzT2JqZWN0KG9wdGlvbikpIHtcbiAgICAgICAgICAgIG9wdGlvblZhbHVlID0gb3B0aW9uLnZhbHVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvblZhbHVlID0gb3B0aW9uXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IFN0cmluZyhvcHRpb25WYWx1ZSkgPT09IFN0cmluZyh2YWx1ZSlcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtgJHtwYXRofSAtICR7b3B0aW9uVmFsdWV9YH0+XG4gICAgICAgICAgICAgIDxSYWRpb0lucHV0XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17cmVhZE9ubHkgPyB1bmRlZmluZWQgOiBvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBvcHRpb249e29wdGlvbklzT2JqZWN0KG9wdGlvbikgPyBvcHRpb24gOiB7IGxhYmVsOiBvcHRpb24sIHZhbHVlOiBvcHRpb24gfX1cbiAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8RmllbGREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IHBhdGg9e3BhdGh9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0dyb3VwSW5wdXRcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJSYWRpb0dyb3VwSW5wdXQiLCJwcm9wcyIsIm5hbWUiLCJFcnJvciIsIkxhYmVsIiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJlcnJvck1lc3NhZ2UiLCJsYWJlbCIsImxheW91dCIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwicmVhZE9ubHkiLCJyZXF1aXJlZCIsInNob3dFcnJvciIsInN0eWxlIiwidmFsdWUiLCJ3aWR0aCIsIkVycm9yQ29tcCIsIkRlZmF1bHRFcnJvciIsIkxhYmVsQ29tcCIsIkRlZmF1bHRMYWJlbCIsImRpdiIsImZpZWxkQmFzZUNsYXNzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJtZXNzYWdlIiwiaHRtbEZvciIsInVsIiwiaWQiLCJyZXBsYWNlIiwibWFwIiwib3B0aW9uIiwib3B0aW9uVmFsdWUiLCJvcHRpb25Jc09iamVjdCIsImlzU2VsZWN0ZWQiLCJTdHJpbmciLCJsaSIsImtleSIsIlJhZGlvSW5wdXQiLCJ1bmRlZmluZWQiLCJGaWVsZERlc2NyaXB0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQStHQTs7O2VBQUE7Ozs4REEvR2tCO3VCQU1hOzhEQUNOO3lFQUNJOzhEQUNKO3dCQUNNO21FQUNSO1FBQ2hCOzs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBb0JsQixNQUFNQyxrQkFBa0QsQ0FBQ0M7SUFDdkQsTUFBTSxFQUNKQyxJQUFJLEVBQ0pDLEtBQUssRUFDTEMsS0FBSyxFQUNMQyxTQUFTLEVBQ1RDLFdBQVcsRUFDWEMsWUFBWSxFQUNaQyxLQUFLLEVBQ0xDLFNBQVMsWUFBWSxFQUNyQkMsUUFBUSxFQUNSQyxPQUFPLEVBQ1BDLE1BQU1DLGFBQWEsRUFDbkJDLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxTQUFTLEVBQ1RDLEtBQUssRUFDTEMsS0FBSyxFQUNMQyxLQUFLLEVBQ04sR0FBR2xCO0lBRUosTUFBTW1CLFlBQVlqQixTQUFTa0IsY0FBWTtJQUN2QyxNQUFNQyxZQUFZbEIsU0FBU21CLGNBQVk7SUFFdkMsTUFBTVgsT0FBT0MsaUJBQWlCWDtJQUU5QixxQkFDRSw2QkFBQ3NCO1FBQ0NuQixXQUFXO1lBQ1RvQixzQkFBYztZQUNkMUI7WUFDQU07WUFDQSxDQUFDLEVBQUVOLFVBQVUsU0FBUyxFQUFFVSxPQUFPLENBQUM7WUFDaENPLGFBQWE7WUFDYkYsWUFBWSxDQUFDLEVBQUVmLFVBQVUsV0FBVyxDQUFDO1NBQ3RDLENBQ0UyQixNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztRQUNSWCxPQUFPO1lBQ0wsR0FBR0EsS0FBSztZQUNSRTtRQUNGO3FCQUVBLDZCQUFDSztRQUFJbkIsV0FBVyxDQUFDLEVBQUVOLFVBQVUsWUFBWSxDQUFDO3FCQUN4Qyw2QkFBQ3FCO1FBQVVTLFNBQVN0QjtRQUFjUyxXQUFXQTt1QkFFL0MsNkJBQUNNO1FBQVVRLFNBQVMsQ0FBQyxNQUFNLEVBQUVsQixLQUFLLENBQUM7UUFBRUosT0FBT0E7UUFBT08sVUFBVUE7c0JBQzdELDZCQUFDZ0I7UUFBRzFCLFdBQVcsQ0FBQyxFQUFFTixVQUFVLE9BQU8sQ0FBQztRQUFFaUMsSUFBSSxDQUFDLE1BQU0sRUFBRXBCLEtBQUtxQixPQUFPLENBQUMsT0FBTyxNQUFNLENBQUM7T0FDM0V0QixRQUFRdUIsR0FBRyxDQUFDLENBQUNDO1FBQ1osSUFBSUMsY0FBYztRQUVsQixJQUFJQyxJQUFBQSxxQkFBYyxFQUFDRixTQUFTO1lBQzFCQyxjQUFjRCxPQUFPakIsS0FBSztRQUM1QixPQUFPO1lBQ0xrQixjQUFjRDtRQUNoQjtRQUVBLE1BQU1HLGFBQWFDLE9BQU9ILGlCQUFpQkcsT0FBT3JCO1FBRWxELHFCQUNFLDZCQUFDc0I7WUFBR0MsS0FBSyxDQUFDLEVBQUU3QixLQUFLLEdBQUcsRUFBRXdCLFlBQVksQ0FBQzt5QkFDakMsNkJBQUNNLG1CQUFVO1lBQ1RKLFlBQVlBO1lBQ1o1QixVQUFVSSxXQUFXNkIsWUFBWWpDO1lBQ2pDeUIsUUFBUUUsSUFBQUEscUJBQWMsRUFBQ0YsVUFBVUEsU0FBUztnQkFBRTNCLE9BQU8yQjtnQkFBUWpCLE9BQU9pQjtZQUFPO1lBQ3pFdkIsTUFBTUE7WUFDTkUsVUFBVUE7O0lBSWxCLG1CQUVGLDZCQUFDOEIseUJBQWdCO1FBQUN0QyxhQUFhQTtRQUFhTSxNQUFNQTtRQUFNTSxPQUFPQTs7QUFHckU7TUFFQSxXQUFlbEIifQ==