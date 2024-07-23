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
const TextareaInput = (props)=>{
    const { Error, Label, afterInput, beforeInput, className, description, errorMessage, label, onChange, path, placeholder, readOnly, required, rows, rtl, showError, style, value, width } = props;
    const { i18n } = (0, _reacti18next.useTranslation)();
    const ErrorComp = Error || _Error.default;
    const LabelComp = Label || _Label.default;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            'textarea',
            className,
            showError && 'error',
            readOnly && 'read-only'
        ].filter(Boolean).join(' '),
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
    }), /*#__PURE__*/ _react.default.createElement("label", {
        className: "textarea-outer",
        htmlFor: `field-${path.replace(/\./g, '__')}`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "textarea-inner"
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "textarea-clone",
        "data-value": value || placeholder || ''
    }), Array.isArray(beforeInput) && beforeInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), /*#__PURE__*/ _react.default.createElement("textarea", {
        className: "textarea-element",
        "data-rtl": rtl,
        disabled: readOnly,
        id: `field-${path.replace(/\./g, '__')}`,
        name: path,
        onChange: onChange,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        rows: rows,
        value: value || ''
    }), Array.isArray(afterInput) && afterInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description,
        path: path,
        value: value
    }));
};
const _default = TextareaInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHRhcmVhL0lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBUZXh0YXJlYUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgRGVzY3JpcHRpb24gfSBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCBEZWZhdWx0RXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InXG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJ1xuaW1wb3J0IERlZmF1bHRMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCdcbmltcG9ydCB7IGZpZWxkQmFzZUNsYXNzIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmV4cG9ydCB0eXBlIFRleHRBcmVhSW5wdXRQcm9wcyA9IE9taXQ8VGV4dGFyZWFGaWVsZCwgJ3R5cGUnPiAmIHtcbiAgRXJyb3I/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgTGFiZWw/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgYWZ0ZXJJbnB1dD86IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PltdXG4gIGJlZm9yZUlucHV0PzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+W11cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogRGVzY3JpcHRpb25cbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nXG4gIG9uQ2hhbmdlPzogKGU6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkXG4gIHBhdGg6IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCBzdHJpbmdcbiAgcmVhZE9ubHk/OiBib29sZWFuXG4gIHJlcXVpcmVkPzogYm9vbGVhblxuICByb3dzPzogbnVtYmVyXG4gIHJ0bD86IGJvb2xlYW5cbiAgc2hvd0Vycm9yPzogYm9vbGVhblxuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgdmFsdWU/OiBzdHJpbmdcbiAgd2lkdGg/OiBzdHJpbmdcbn1cblxuY29uc3QgVGV4dGFyZWFJbnB1dDogUmVhY3QuRkM8VGV4dEFyZWFJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgRXJyb3IsXG4gICAgTGFiZWwsXG4gICAgYWZ0ZXJJbnB1dCxcbiAgICBiZWZvcmVJbnB1dCxcbiAgICBjbGFzc05hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIGxhYmVsLFxuICAgIG9uQ2hhbmdlLFxuICAgIHBhdGgsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgcmVhZE9ubHksXG4gICAgcmVxdWlyZWQsXG4gICAgcm93cyxcbiAgICBydGwsXG4gICAgc2hvd0Vycm9yLFxuICAgIHN0eWxlLFxuICAgIHZhbHVlLFxuICAgIHdpZHRoLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBjb25zdCBFcnJvckNvbXAgPSBFcnJvciB8fCBEZWZhdWx0RXJyb3JcbiAgY29uc3QgTGFiZWxDb21wID0gTGFiZWwgfHwgRGVmYXVsdExhYmVsXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgZmllbGRCYXNlQ2xhc3MsXG4gICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgICAgIHJlYWRPbmx5ICYmICdyZWFkLW9ubHknLFxuICAgICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFcnJvckNvbXAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfSBzaG93RXJyb3I9e3Nob3dFcnJvcn0gLz5cbiAgICAgIDxMYWJlbENvbXAgaHRtbEZvcj17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH0gbGFiZWw9e2xhYmVsfSByZXF1aXJlZD17cmVxdWlyZWR9IC8+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dGFyZWEtb3V0ZXJcIiBodG1sRm9yPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0YXJlYS1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dGFyZWEtY2xvbmVcIiBkYXRhLXZhbHVlPXt2YWx1ZSB8fCBwbGFjZWhvbGRlciB8fCAnJ30gLz5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShiZWZvcmVJbnB1dCkgJiYgYmVmb3JlSW5wdXQubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0YXJlYS1lbGVtZW50XCJcbiAgICAgICAgICAgIGRhdGEtcnRsPXtydGx9XG4gICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH1cbiAgICAgICAgICAgIG5hbWU9e3BhdGh9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17Z2V0VHJhbnNsYXRpb24ocGxhY2Vob2xkZXIsIGkxOG4pfVxuICAgICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KGFmdGVySW5wdXQpICYmIGFmdGVySW5wdXQubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxGaWVsZERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gcGF0aD17cGF0aH0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhSW5wdXRcbiJdLCJuYW1lcyI6WyJUZXh0YXJlYUlucHV0IiwicHJvcHMiLCJFcnJvciIsIkxhYmVsIiwiYWZ0ZXJJbnB1dCIsImJlZm9yZUlucHV0IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJlcnJvck1lc3NhZ2UiLCJsYWJlbCIsIm9uQ2hhbmdlIiwicGF0aCIsInBsYWNlaG9sZGVyIiwicmVhZE9ubHkiLCJyZXF1aXJlZCIsInJvd3MiLCJydGwiLCJzaG93RXJyb3IiLCJzdHlsZSIsInZhbHVlIiwid2lkdGgiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJFcnJvckNvbXAiLCJEZWZhdWx0RXJyb3IiLCJMYWJlbENvbXAiLCJEZWZhdWx0TGFiZWwiLCJkaXYiLCJmaWVsZEJhc2VDbGFzcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwibWVzc2FnZSIsImh0bWxGb3IiLCJyZXBsYWNlIiwiZGF0YS12YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIkNvbXBvbmVudCIsImkiLCJrZXkiLCJ0ZXh0YXJlYSIsImRhdGEtcnRsIiwiZGlzYWJsZWQiLCJpZCIsIm5hbWUiLCJnZXRUcmFuc2xhdGlvbiIsIkZpZWxkRGVzY3JpcHRpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXlHQTs7O2VBQUE7Ozs4REF2R2tCOzhCQUNhO2dDQUtBOzhEQUNOO3lFQUNJOzhEQUNKO3dCQUNNO1FBQ3hCOzs7Ozs7QUF1QlAsTUFBTUEsZ0JBQThDLENBQUNDO0lBQ25ELE1BQU0sRUFDSkMsS0FBSyxFQUNMQyxLQUFLLEVBQ0xDLFVBQVUsRUFDVkMsV0FBVyxFQUNYQyxTQUFTLEVBQ1RDLFdBQVcsRUFDWEMsWUFBWSxFQUNaQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsSUFBSSxFQUNKQyxXQUFXLEVBQ1hDLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxJQUFJLEVBQ0pDLEdBQUcsRUFDSEMsU0FBUyxFQUNUQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsS0FBSyxFQUNOLEdBQUduQjtJQUVKLE1BQU0sRUFBRW9CLElBQUksRUFBRSxHQUFHQyxJQUFBQSw0QkFBYztJQUUvQixNQUFNQyxZQUFZckIsU0FBU3NCLGNBQVk7SUFDdkMsTUFBTUMsWUFBWXRCLFNBQVN1QixjQUFZO0lBRXZDLHFCQUNFLDZCQUFDQztRQUNDckIsV0FBVztZQUNUc0Isc0JBQWM7WUFDZDtZQUNBdEI7WUFDQVcsYUFBYTtZQUNiSixZQUFZO1NBQ2IsQ0FDRWdCLE1BQU0sQ0FBQ0MsU0FDUEMsSUFBSSxDQUFDO1FBQ1JiLE9BQU87WUFDTCxHQUFHQSxLQUFLO1lBQ1JFO1FBQ0Y7cUJBRUEsNkJBQUNHO1FBQVVTLFNBQVN4QjtRQUFjUyxXQUFXQTtzQkFDN0MsNkJBQUNRO1FBQVVRLFNBQVMsQ0FBQyxNQUFNLEVBQUV0QixLQUFLdUIsT0FBTyxDQUFDLE9BQU8sTUFBTSxDQUFDO1FBQUV6QixPQUFPQTtRQUFPSyxVQUFVQTtzQkFDbEYsNkJBQUNMO1FBQU1ILFdBQVU7UUFBaUIyQixTQUFTLENBQUMsTUFBTSxFQUFFdEIsS0FBS3VCLE9BQU8sQ0FBQyxPQUFPLE1BQU0sQ0FBQztxQkFDN0UsNkJBQUNQO1FBQUlyQixXQUFVO3FCQUNiLDZCQUFDcUI7UUFBSXJCLFdBQVU7UUFBaUI2QixjQUFZaEIsU0FBU1AsZUFBZTtRQUNuRXdCLE1BQU1DLE9BQU8sQ0FBQ2hDLGdCQUFnQkEsWUFBWWlDLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQyxrQkFBTSw2QkFBQ0Q7WUFBVUUsS0FBS0Q7MkJBQ2pGLDZCQUFDRTtRQUNDcEMsV0FBVTtRQUNWcUMsWUFBVTNCO1FBQ1Y0QixVQUFVL0I7UUFDVmdDLElBQUksQ0FBQyxNQUFNLEVBQUVsQyxLQUFLdUIsT0FBTyxDQUFDLE9BQU8sTUFBTSxDQUFDO1FBQ3hDWSxNQUFNbkM7UUFDTkQsVUFBVUE7UUFDVkUsYUFBYW1DLElBQUFBLDhCQUFjLEVBQUNuQyxhQUFhUztRQUN6Q04sTUFBTUE7UUFDTkksT0FBT0EsU0FBUztRQUVqQmlCLE1BQU1DLE9BQU8sQ0FBQ2pDLGVBQWVBLFdBQVdrQyxHQUFHLENBQUMsQ0FBQ0MsV0FBV0Msa0JBQU0sNkJBQUNEO1lBQVVFLEtBQUtEOzZCQUduRiw2QkFBQ1EseUJBQWdCO1FBQUN6QyxhQUFhQTtRQUFhSSxNQUFNQTtRQUFNUSxPQUFPQTs7QUFHckU7TUFFQSxXQUFlbkIifQ==