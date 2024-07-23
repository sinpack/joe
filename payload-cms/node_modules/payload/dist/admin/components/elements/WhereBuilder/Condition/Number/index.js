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
const _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../ReactSelect"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'condition-value-number';
const NumberField = ({ disabled, onChange, operator, value })=>{
    const { t } = (0, _reacti18next.useTranslation)();
    const isMulti = [
        'in',
        'not_in'
    ].includes(operator);
    const [valueToRender, setValueToRender] = _react.default.useState([]);
    const onSelect = _react.default.useCallback((selectedOption)=>{
        let newValue;
        if (!selectedOption) {
            newValue = [];
        } else if (isMulti) {
            if (Array.isArray(selectedOption)) {
                newValue = selectedOption.map((option)=>Number(option.value?.value || option.value));
            } else {
                newValue = [
                    Number(selectedOption.value?.value || selectedOption.value)
                ];
            }
        }
        onChange(newValue);
    }, [
        isMulti,
        onChange
    ]);
    _react.default.useEffect(()=>{
        if (Array.isArray(value)) {
            setValueToRender(value.map((val, index)=>{
                return {
                    id: `${val}${index}`,
                    label: `${val}`,
                    value: {
                        toString: ()=>`${val}${index}`,
                        value: val?.value || val
                    }
                };
            }));
        } else {
            setValueToRender([]);
        }
    }, [
        value
    ]);
    return isMulti ? /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        disabled: disabled,
        isClearable: true,
        isCreatable: true,
        isMulti: isMulti,
        isSortable: true,
        numberOnly: true,
        onChange: onSelect,
        options: [],
        placeholder: t('general:enterAValue'),
        value: valueToRender || []
    }) : /*#__PURE__*/ _react.default.createElement("input", {
        className: baseClass,
        disabled: disabled,
        onChange: (e)=>onChange(e.target.value),
        placeholder: t('general:enterAValue'),
        type: "number",
        value: value
    });
};
const _default = NumberField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vTnVtYmVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAnLi4vLi4vLi4vUmVhY3RTZWxlY3QnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbmRpdGlvbi12YWx1ZS1udW1iZXInXG5cbmNvbnN0IE51bWJlckZpZWxkOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBkaXNhYmxlZCwgb25DaGFuZ2UsIG9wZXJhdG9yLCB2YWx1ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IGlzTXVsdGkgPSBbJ2luJywgJ25vdF9pbiddLmluY2x1ZGVzKG9wZXJhdG9yKVxuXG4gIGNvbnN0IFt2YWx1ZVRvUmVuZGVyLCBzZXRWYWx1ZVRvUmVuZGVyXSA9IFJlYWN0LnVzZVN0YXRlPFxuICAgIHsgaWQ6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHsgdmFsdWU6IG51bWJlciB9IH1bXVxuICA+KFtdKVxuXG4gIGNvbnN0IG9uU2VsZWN0ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHNlbGVjdGVkT3B0aW9uKSA9PiB7XG4gICAgICBsZXQgbmV3VmFsdWVcbiAgICAgIGlmICghc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgbmV3VmFsdWUgPSBbXVxuICAgICAgfSBlbHNlIGlmIChpc011bHRpKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdGVkT3B0aW9uKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gc2VsZWN0ZWRPcHRpb24ubWFwKChvcHRpb24pID0+IE51bWJlcihvcHRpb24udmFsdWU/LnZhbHVlIHx8IG9wdGlvbi52YWx1ZSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBbTnVtYmVyKHNlbGVjdGVkT3B0aW9uLnZhbHVlPy52YWx1ZSB8fCBzZWxlY3RlZE9wdGlvbi52YWx1ZSldXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25DaGFuZ2UobmV3VmFsdWUpXG4gICAgfSxcbiAgICBbaXNNdWx0aSwgb25DaGFuZ2VdLFxuICApXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHNldFZhbHVlVG9SZW5kZXIoXG4gICAgICAgIHZhbHVlLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogYCR7dmFsfSR7aW5kZXh9YCwgLy8gYXBwZW5kIGluZGV4IHRvIGF2b2lkIGR1cGxpY2F0ZSBrZXlzIGJ1dCBhbGxvdyBkdXBsaWNhdGUgbnVtYmVyc1xuICAgICAgICAgICAgbGFiZWw6IGAke3ZhbH1gLFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdG9TdHJpbmc6ICgpID0+IGAke3ZhbH0ke2luZGV4fWAsXG4gICAgICAgICAgICAgIHZhbHVlOiAodmFsIGFzIGFueSk/LnZhbHVlIHx8IHZhbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VmFsdWVUb1JlbmRlcihbXSlcbiAgICB9XG4gIH0sIFt2YWx1ZV0pXG5cbiAgcmV0dXJuIGlzTXVsdGkgPyAoXG4gICAgPFJlYWN0U2VsZWN0XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBpc0NsZWFyYWJsZVxuICAgICAgaXNDcmVhdGFibGVcbiAgICAgIGlzTXVsdGk9e2lzTXVsdGl9XG4gICAgICBpc1NvcnRhYmxlXG4gICAgICBudW1iZXJPbmx5XG4gICAgICBvbkNoYW5nZT17b25TZWxlY3R9XG4gICAgICBvcHRpb25zPXtbXX1cbiAgICAgIHBsYWNlaG9sZGVyPXt0KCdnZW5lcmFsOmVudGVyQVZhbHVlJyl9XG4gICAgICB2YWx1ZT17dmFsdWVUb1JlbmRlciB8fCBbXX1cbiAgICAvPlxuICApIDogKFxuICAgIDxpbnB1dFxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIHBsYWNlaG9sZGVyPXt0KCdnZW5lcmFsOmVudGVyQVZhbHVlJyl9XG4gICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgIHZhbHVlPXt2YWx1ZSBhcyBudW1iZXJ9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJGaWVsZFxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIk51bWJlckZpZWxkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsIm9wZXJhdG9yIiwidmFsdWUiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJpc011bHRpIiwiaW5jbHVkZXMiLCJ2YWx1ZVRvUmVuZGVyIiwic2V0VmFsdWVUb1JlbmRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJvblNlbGVjdCIsInVzZUNhbGxiYWNrIiwic2VsZWN0ZWRPcHRpb24iLCJuZXdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIm9wdGlvbiIsIk51bWJlciIsInVzZUVmZmVjdCIsInZhbCIsImluZGV4IiwiaWQiLCJsYWJlbCIsInRvU3RyaW5nIiwiUmVhY3RTZWxlY3QiLCJpc0NsZWFyYWJsZSIsImlzQ3JlYXRhYmxlIiwiaXNTb3J0YWJsZSIsIm51bWJlck9ubHkiLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJpbnB1dCIsImNs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