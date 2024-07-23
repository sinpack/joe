"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CheckboxInput", {
    enumerable: true,
    get: function() {
        return CheckboxInput;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _Check = /*#__PURE__*/ _interop_require_default(require("../../../icons/Check"));
const _Line = /*#__PURE__*/ _interop_require_default(require("../../../icons/Line"));
const _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'checkbox-input';
const CheckboxInput = (props)=>{
    const { id, name, Label, afterInput, 'aria-label': ariaLabel, beforeInput, checked, className, inputRef, label, onToggle, partialChecked, readOnly, required } = props;
    const LabelComp = Label || _Label.default;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            className,
            (checked || partialChecked) && `${baseClass}--checked`,
            readOnly && `${baseClass}--read-only`
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__input`
    }, Array.isArray(beforeInput) && beforeInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), /*#__PURE__*/ _react.default.createElement("input", {
        "aria-label": ariaLabel,
        defaultChecked: Boolean(checked),
        disabled: readOnly,
        id: id,
        name: name,
        onInput: onToggle,
        ref: inputRef,
        type: "checkbox"
    }), Array.isArray(afterInput) && afterInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__icon ${!partialChecked ? 'check' : 'partial'}`
    }, !partialChecked && /*#__PURE__*/ _react.default.createElement(_Check.default, null), partialChecked && /*#__PURE__*/ _react.default.createElement(_Line.default, null))), label && /*#__PURE__*/ _react.default.createElement(LabelComp, {
        htmlFor: id,
        label: label,
        required: required
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NoZWNrYm94L0lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgYXMgTGFiZWxQcm9wcyB9IGZyb20gJy4uLy4uL0xhYmVsL3R5cGVzJ1xuXG5pbXBvcnQgQ2hlY2sgZnJvbSAnLi4vLi4vLi4vaWNvbnMvQ2hlY2snXG5pbXBvcnQgTGluZSBmcm9tICcuLi8uLi8uLi9pY29ucy9MaW5lJ1xuaW1wb3J0IERlZmF1bHRMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnY2hlY2tib3gtaW5wdXQnXG5cbnR5cGUgQ2hlY2tib3hJbnB1dFByb3BzID0ge1xuICBMYWJlbD86IFJlYWN0LkNvbXBvbmVudFR5cGU8TGFiZWxQcm9wcz5cbiAgYWZ0ZXJJbnB1dD86IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PltdXG4gICdhcmlhLWxhYmVsJz86IHN0cmluZ1xuICBiZWZvcmVJbnB1dD86IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PltdXG4gIGNoZWNrZWQ/OiBib29sZWFuXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBpZD86IHN0cmluZ1xuICBpbnB1dFJlZj86IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD5cbiAgbGFiZWw/OiBzdHJpbmdcbiAgbmFtZT86IHN0cmluZ1xuICBvblRvZ2dsZTogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PlxuICBwYXJ0aWFsQ2hlY2tlZD86IGJvb2xlYW5cbiAgcmVhZE9ubHk/OiBib29sZWFuXG4gIHJlcXVpcmVkPzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgQ2hlY2tib3hJbnB1dDogUmVhY3QuRkM8Q2hlY2tib3hJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICBMYWJlbCxcbiAgICBhZnRlcklucHV0LFxuICAgICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLFxuICAgIGJlZm9yZUlucHV0LFxuICAgIGNoZWNrZWQsXG4gICAgY2xhc3NOYW1lLFxuICAgIGlucHV0UmVmLFxuICAgIGxhYmVsLFxuICAgIG9uVG9nZ2xlLFxuICAgIHBhcnRpYWxDaGVja2VkLFxuICAgIHJlYWRPbmx5LFxuICAgIHJlcXVpcmVkLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBMYWJlbENvbXAgPSBMYWJlbCB8fCBEZWZhdWx0TGFiZWxcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKGNoZWNrZWQgfHwgcGFydGlhbENoZWNrZWQpICYmIGAke2Jhc2VDbGFzc30tLWNoZWNrZWRgLFxuICAgICAgICByZWFkT25seSAmJiBgJHtiYXNlQ2xhc3N9LS1yZWFkLW9ubHlgLFxuICAgICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2lucHV0YH0+XG4gICAgICAgIHtBcnJheS5pc0FycmF5KGJlZm9yZUlucHV0KSAmJiBiZWZvcmVJbnB1dC5tYXAoKENvbXBvbmVudCwgaSkgPT4gPENvbXBvbmVudCBrZXk9e2l9IC8+KX1cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtCb29sZWFuKGNoZWNrZWQpfVxuICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbklucHV0PXtvblRvZ2dsZX1cbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIC8+XG4gICAgICAgIHtBcnJheS5pc0FycmF5KGFmdGVySW5wdXQpICYmIGFmdGVySW5wdXQubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faWNvbiAkeyFwYXJ0aWFsQ2hlY2tlZCA/ICdjaGVjaycgOiAncGFydGlhbCd9YH0+XG4gICAgICAgICAgeyFwYXJ0aWFsQ2hlY2tlZCAmJiA8Q2hlY2sgLz59XG4gICAgICAgICAge3BhcnRpYWxDaGVja2VkICYmIDxMaW5lIC8+fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsYWJlbCAmJiA8TGFiZWxDb21wIGh0bWxGb3I9e2lkfSBsYWJlbD17bGFiZWx9IHJlcXVpcmVkPXtyZXF1aXJlZH0gLz59XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDaGVja2JveElucHV0IiwiYmFzZUNsYXNzIiwicHJvcHMiLCJpZCIsIm5hbWUiLCJMYWJlbCIsImFmdGVySW5wdXQiLCJhcmlhTGFiZWwiLCJiZWZvcmVJbnB1dCIsImNoZWNrZWQiLCJjbGFzc05hbWUiLCJpbnB1dFJlZiIsImxhYmVsIiwib25Ub2dnbGUiLCJwYXJ0aWFsQ2hlY2tlZCIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJMYWJlbENvbXAiLCJEZWZhdWx0TGFiZWwiLCJkaXYiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIkNvbXBvbmVudCIsImkiLCJrZXkiLCJpbnB1dCIsImFyaWEtbGFiZWwiLCJkZWZhdWx0Q2hlY2tlZCIsImRpc2FibGVkIiwib25JbnB1dCIsInJlZiIsInR5cGUiLCJzcGFuIiwiQ2hlY2siLCJMaW5lIiwiaHRtbEZvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE0QmFBOzs7ZUFBQUE7Ozs4REE1Qks7OERBSUE7NkRBQ0Q7OERBQ1E7UUFDbEI7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFtQlgsTUFBTUQsZ0JBQThDLENBQUNFO0lBQzFELE1BQU0sRUFDSkMsRUFBRSxFQUNGQyxJQUFJLEVBQ0pDLEtBQUssRUFDTEMsVUFBVSxFQUNWLGNBQWNDLFNBQVMsRUFDdkJDLFdBQVcsRUFDWEMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLGNBQWMsRUFDZEMsUUFBUSxFQUNSQyxRQUFRLEVBQ1QsR0FBR2Q7SUFFSixNQUFNZSxZQUFZWixTQUFTYSxjQUFZO0lBRXZDLHFCQUNFLDZCQUFDQztRQUNDVCxXQUFXO1lBQ1RUO1lBQ0FTO1lBQ0NELENBQUFBLFdBQVdLLGNBQWEsS0FBTSxDQUFDLEVBQUViLFVBQVUsU0FBUyxDQUFDO1lBQ3REYyxZQUFZLENBQUMsRUFBRWQsVUFBVSxXQUFXLENBQUM7U0FDdEMsQ0FDRW1CLE1BQU0sQ0FBQ0MsU0FDUEMsSUFBSSxDQUFDO3FCQUVSLDZCQUFDSDtRQUFJVCxXQUFXLENBQUMsRUFBRVQsVUFBVSxPQUFPLENBQUM7T0FDbENzQixNQUFNQyxPQUFPLENBQUNoQixnQkFBZ0JBLFlBQVlpQixHQUFHLENBQUMsQ0FBQ0MsV0FBV0Msa0JBQU0sNkJBQUNEO1lBQVVFLEtBQUtEOzJCQUNqRiw2QkFBQ0U7UUFDQ0MsY0FBWXZCO1FBQ1p3QixnQkFBZ0JWLFFBQVFaO1FBQ3hCdUIsVUFBVWpCO1FBQ1ZaLElBQUlBO1FBQ0pDLE1BQU1BO1FBQ042QixTQUFTcEI7UUFDVHFCLEtBQUt2QjtRQUNMd0IsTUFBSztRQUVOWixNQUFNQyxPQUFPLENBQUNsQixlQUFlQSxXQUFXbUIsR0FBRyxDQUFDLENBQUNDLFdBQVdDLGtCQUFNLDZCQUFDRDtZQUFVRSxLQUFLRDsyQkFDL0UsNkJBQUNTO1FBQUsxQixXQUFXLENBQUMsRUFBRVQsVUFBVSxPQUFPLEVBQUUsQ0FBQ2EsaUJBQWlCLFVBQVUsVUFBVSxDQUFDO09BQzNFLENBQUNBLGdDQUFrQiw2QkFBQ3VCLGNBQUssU0FDekJ2QixnQ0FBa0IsNkJBQUN3QixhQUFJLFdBRzNCMUIsdUJBQVMsNkJBQUNLO1FBQVVzQixTQUFTcEM7UUFBSVMsT0FBT0E7UUFBT0ksVUFBVUE7O0FBR2hFIn0=