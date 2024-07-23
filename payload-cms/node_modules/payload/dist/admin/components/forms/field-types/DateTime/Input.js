"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DateTimeInput", {
    enumerable: true,
    get: function() {
        return DateTimeInput;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../../utilities/getTranslation");
const _DatePicker = /*#__PURE__*/ _interop_require_default(require("../../../elements/DatePicker"));
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
const baseClass = 'date-time-field';
const DateTimeInput = (props)=>{
    const { className, components: { Error, Label, afterInput, beforeInput } = {}, datePickerProps, description, errorMessage, label, onChange, path, placeholder, readOnly, required, showError, style, value, width } = props;
    const ErrorComp = Error || _Error.default;
    const LabelComp = Label || _Label.default;
    const { i18n } = (0, _reacti18next.useTranslation)();
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            baseClass,
            className,
            showError && `${baseClass}--has-error`,
            readOnly && 'read-only'
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
        htmlFor: path,
        label: label,
        required: required
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__input-wrapper`,
        id: `field-${path.replace(/\./g, '__')}`
    }, Array.isArray(beforeInput) && beforeInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), /*#__PURE__*/ _react.default.createElement(_DatePicker.default, {
        ...datePickerProps,
        onChange: onChange,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        readOnly: readOnly,
        value: value
    }), Array.isArray(afterInput) && afterInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        }))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description,
        path: path,
        value: value
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0RhdGVUaW1lL0lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZXhwb3J0cy90eXBlcydcbmltcG9ydCB0eXBlIHsgRGVzY3JpcHRpb24gfSBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0RhdGVQaWNrZXInXG5pbXBvcnQgRGVmYXVsdEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJ1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbidcbmltcG9ydCBEZWZhdWx0TGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnXG5pbXBvcnQgeyBmaWVsZEJhc2VDbGFzcyB9IGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZGF0ZS10aW1lLWZpZWxkJ1xuXG5leHBvcnQgdHlwZSBEYXRlVGltZUlucHV0UHJvcHMgPSBPbWl0PERhdGVGaWVsZCwgJ2FkbWluJyB8ICduYW1lJyB8ICd0eXBlJz4gJiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBjb21wb25lbnRzOiB7XG4gICAgRXJyb3I/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgICBMYWJlbD86IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICAgIGFmdGVySW5wdXQ/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5bXVxuICAgIGJlZm9yZUlucHV0PzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+W11cbiAgfVxuICBkYXRlUGlja2VyUHJvcHM/OiBEYXRlRmllbGRbJ2FkbWluJ11bJ2RhdGUnXVxuICBkZXNjcmlwdGlvbj86IERlc2NyaXB0aW9uXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZ1xuICBvbkNoYW5nZT86IChlOiBEYXRlKSA9PiB2b2lkXG4gIHBhdGg6IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCBzdHJpbmdcbiAgcmVhZE9ubHk/OiBib29sZWFuXG4gIHJlcXVpcmVkPzogYm9vbGVhblxuICBzaG93RXJyb3I/OiBib29sZWFuXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICB2YWx1ZT86IERhdGVcbiAgd2lkdGg/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IERhdGVUaW1lSW5wdXQ6IFJlYWN0LkZDPERhdGVUaW1lSW5wdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBjb21wb25lbnRzOiB7IEVycm9yLCBMYWJlbCwgYWZ0ZXJJbnB1dCwgYmVmb3JlSW5wdXQgfSA9IHt9LFxuICAgIGRhdGVQaWNrZXJQcm9wcyxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgbGFiZWwsXG4gICAgb25DaGFuZ2UsXG4gICAgcGF0aCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICByZWFkT25seSxcbiAgICByZXF1aXJlZCxcbiAgICBzaG93RXJyb3IsXG4gICAgc3R5bGUsXG4gICAgdmFsdWUsXG4gICAgd2lkdGgsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IEVycm9yQ29tcCA9IEVycm9yIHx8IERlZmF1bHRFcnJvclxuICBjb25zdCBMYWJlbENvbXAgPSBMYWJlbCB8fCBEZWZhdWx0TGFiZWxcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBmaWVsZEJhc2VDbGFzcyxcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHNob3dFcnJvciAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtZXJyb3JgLFxuICAgICAgICByZWFkT25seSAmJiAncmVhZC1vbmx5JyxcbiAgICAgIF1cbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAuam9pbignICcpfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZXJyb3Itd3JhcGB9PlxuICAgICAgICA8RXJyb3JDb21wIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX0gc2hvd0Vycm9yPXtzaG93RXJyb3J9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMYWJlbENvbXAgaHRtbEZvcj17cGF0aH0gbGFiZWw9e2xhYmVsfSByZXF1aXJlZD17cmVxdWlyZWR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faW5wdXQtd3JhcHBlcmB9IGlkPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfT5cbiAgICAgICAge0FycmF5LmlzQXJyYXkoYmVmb3JlSW5wdXQpICYmIGJlZm9yZUlucHV0Lm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgIHsuLi5kYXRlUGlja2VyUHJvcHN9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgLz5cbiAgICAgICAge0FycmF5LmlzQXJyYXkoYWZ0ZXJJbnB1dCkgJiYgYWZ0ZXJJbnB1dC5tYXAoKENvbXBvbmVudCwgaSkgPT4gPENvbXBvbmVudCBrZXk9e2l9IC8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEZpZWxkRGVzY3JpcHRpb24gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBwYXRoPXtwYXRofSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJEYXRlVGltZUlucHV0IiwiYmFzZUNsYXNzIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjb21wb25lbnRzIiwiRXJyb3IiLCJMYWJlbCIsImFmdGVySW5wdXQiLCJiZWZvcmVJbnB1dCIsImRhdGVQaWNrZXJQcm9wcyIsImRlc2NyaXB0aW9uIiwiZXJyb3JNZXNzYWdlIiwibGFiZWwiLCJvbkNoYW5nZSIsInBhdGgiLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJzaG93RXJyb3IiLCJzdHlsZSIsInZhbHVlIiwid2lkdGgiLCJFcnJvckNvbXAiLCJEZWZhdWx0RXJyb3IiLCJMYWJlbENvbXAiLCJEZWZhdWx0TGFiZWwiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJkaXYiLCJmaWVsZEJhc2VDbGFzcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwibWVzc2FnZSIsImh0bWxGb3IiLCJpZCIsInJlcGxhY2UiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJDb21wb25lbnQiLCJpIiwia2V5IiwiRGF0ZVBpY2tlciIsImdldFRyYW5zbGF0aW9uIiwiRmllbGREZXNjcmlwdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBc0NhQTs7O2VBQUFBOzs7OERBdENLOzhCQUNhO2dDQUtBO21FQUNSOzhEQUNFO3lFQUNJOzhEQUNKO3dCQUNNO1FBQ3hCOzs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBd0JYLE1BQU1ELGdCQUE4QyxDQUFDRTtJQUMxRCxNQUFNLEVBQ0pDLFNBQVMsRUFDVEMsWUFBWSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDMURDLGVBQWUsRUFDZkMsV0FBVyxFQUNYQyxZQUFZLEVBQ1pDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxJQUFJLEVBQ0pDLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxRQUFRLEVBQ1JDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxLQUFLLEVBQ0xDLEtBQUssRUFDTixHQUFHbkI7SUFFSixNQUFNb0IsWUFBWWpCLFNBQVNrQixjQUFZO0lBQ3ZDLE1BQU1DLFlBQVlsQixTQUFTbUIsY0FBWTtJQUV2QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxJQUFBQSw0QkFBYztJQUUvQixxQkFDRSw2QkFBQ0M7UUFDQ3pCLFdBQVc7WUFDVDBCLHNCQUFjO1lBQ2Q1QjtZQUNBRTtZQUNBZSxhQUFhLENBQUMsRUFBRWpCLFVBQVUsV0FBVyxDQUFDO1lBQ3RDZSxZQUFZO1NBQ2IsQ0FDRWMsTUFBTSxDQUFDQyxTQUNQQyxJQUFJLENBQUM7UUFDUmIsT0FBTztZQUNMLEdBQUdBLEtBQUs7WUFDUkU7UUFDRjtxQkFFQSw2QkFBQ087UUFBSXpCLFdBQVcsQ0FBQyxFQUFFRixVQUFVLFlBQVksQ0FBQztxQkFDeEMsNkJBQUNxQjtRQUFVVyxTQUFTdEI7UUFBY08sV0FBV0E7dUJBRS9DLDZCQUFDTTtRQUFVVSxTQUFTcEI7UUFBTUYsT0FBT0E7UUFBT0ssVUFBVUE7c0JBQ2xELDZCQUFDVztRQUFJekIsV0FBVyxDQUFDLEVBQUVGLFVBQVUsZUFBZSxDQUFDO1FBQUVrQyxJQUFJLENBQUMsTUFBTSxFQUFFckIsS0FBS3NCLE9BQU8sQ0FBQyxPQUFPLE1BQU0sQ0FBQztPQUNwRkMsTUFBTUMsT0FBTyxDQUFDOUIsZ0JBQWdCQSxZQUFZK0IsR0FBRyxDQUFDLENBQUNDLFdBQVdDLGtCQUFNLDZCQUFDRDtZQUFVRSxLQUFLRDsyQkFDakYsNkJBQUNFLG1CQUFVO1FBQ1IsR0FBR2xDLGVBQWU7UUFDbkJJLFVBQVVBO1FBQ1ZFLGFBQWE2QixJQUFBQSw4QkFBYyxFQUFDN0IsYUFBYVc7UUFDekNWLFVBQVVBO1FBQ1ZJLE9BQU9BO1FBRVJpQixNQUFNQyxPQUFPLENBQUMvQixlQUFlQSxXQUFXZ0MsR0FBRyxDQUFDLENBQUNDLFdBQVdDLGtCQUFNLDZCQUFDRDtZQUFVRSxLQUFLRDs0QkFFakYsNkJBQUNJLHlCQUFnQjtRQUFDbkMsYUFBYUE7UUFBYUksTUFBTUE7UUFBTU0sT0FBT0E7O0FBR3JFIn0=