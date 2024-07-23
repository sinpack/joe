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
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _validations = require("../../../../../fields/validations");
const _getTranslation = require("../../../../../utilities/getTranslation");
const _isNumber = require("../../../../../utilities/isNumber");
const _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../elements/ReactSelect"));
const _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
const _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
const _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
const _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
const _shared = require("../shared");
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
const NumberField = (props)=>{
    const { name, admin: { className, components: { Error, Label, afterInput, beforeInput } = {}, condition, description, placeholder, readOnly, step, style, width } = {}, hasMany, label, max, maxRows, min, minRows, path: pathFromProps, required, validate = _validations.number } = props;
    const ErrorComp = Error || _Error.default;
    const LabelComp = Label || _Label.default;
    const { i18n, t } = (0, _reacti18next.useTranslation)();
    const path = pathFromProps || name;
    const memoizedValidate = (0, _react.useCallback)((value, options)=>{
        return validate(value, {
            ...options,
            max,
            min,
            required
        });
    }, [
        validate,
        min,
        max,
        required
    ]);
    const { errorMessage, setValue, showError, value } = (0, _useField.default)({
        condition,
        path,
        validate: memoizedValidate
    });
    const handleChange = (0, _react.useCallback)((e)=>{
        const val = parseFloat(e.target.value);
        if (Number.isNaN(val)) {
            setValue('');
        } else {
            setValue(val);
        }
    }, [
        setValue
    ]);
    const [valueToRender, setValueToRender] = (0, _react.useState)([]) // Only for hasMany
    ;
    const handleHasManyChange = (0, _react.useCallback)((selectedOption)=>{
        if (!readOnly) {
            let newValue;
            if (!selectedOption) {
                newValue = [];
            } else if (Array.isArray(selectedOption)) {
                newValue = selectedOption.map((option)=>Number(option.value?.value || option.value));
            } else {
                newValue = [
                    Number(selectedOption.value?.value || selectedOption.value)
                ];
            }
            setValue(newValue);
        }
    }, [
        readOnly,
        setValue
    ]);
    // useeffect update valueToRender:
    (0, _react.useEffect)(()=>{
        if (hasMany && Array.isArray(value)) {
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
        }
    }, [
        value,
        hasMany
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            'number',
            className,
            showError && 'error',
            readOnly && 'read-only',
            hasMany && 'has-many'
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
    }), hasMany ? /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        className: `field-${path.replace(/\./g, '__')}`,
        disabled: readOnly,
        filterOption: (option, rawInput)=>{
            // eslint-disable-next-line no-restricted-globals
            const isOverHasMany = Array.isArray(value) && value.length >= maxRows;
            return (0, _isNumber.isNumber)(rawInput) && !isOverHasMany;
        },
        isClearable: true,
        isCreatable: true,
        isMulti: true,
        isSortable: true,
        noOptionsMessage: ({ inputValue })=>{
            const isOverHasMany = Array.isArray(value) && value.length >= maxRows;
            if (isOverHasMany) {
                return t('validation:limitReached', {
                    max: maxRows,
                    value: value.length + 1
                });
            }
            return null;
        },
        numberOnly: true,
        onChange: handleHasManyChange,
        options: [],
        placeholder: t('general:enterAValue'),
        showError: showError,
        value: valueToRender
    }) : /*#__PURE__*/ _react.default.createElement("div", {
        className: "input-wrapper"
    }, Array.isArray(beforeInput) && beforeInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), /*#__PURE__*/ _react.default.createElement("input", {
        disabled: readOnly,
        id: `field-${path.replace(/\./g, '__')}`,
        max: max,
        min: min,
        name: path,
        onChange: handleChange,
        onWheel: (e)=>{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            e.target.blur();
        },
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        step: step,
        type: "number",
        value: typeof value === 'number' ? value : ''
    }), Array.isArray(afterInput) && afterInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        }))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description,
        value: value
    }));
};
const _default = (0, _withCondition.default)(NumberField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL051bWJlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvUmVhY3RTZWxlY3QvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJ1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9pc051bWJlcidcbmltcG9ydCBSZWFjdFNlbGVjdCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9SZWFjdFNlbGVjdCdcbmltcG9ydCBEZWZhdWx0RXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InXG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJ1xuaW1wb3J0IERlZmF1bHRMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCdcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCdcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nXG5pbXBvcnQgeyBmaWVsZEJhc2VDbGFzcyB9IGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBOdW1iZXJGaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIGFkbWluOiB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjb21wb25lbnRzOiB7IEVycm9yLCBMYWJlbCwgYWZ0ZXJJbnB1dCwgYmVmb3JlSW5wdXQgfSA9IHt9LFxuICAgICAgY29uZGl0aW9uLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3RlcCxcbiAgICAgIHN0eWxlLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHt9LFxuICAgIGhhc01hbnksXG4gICAgbGFiZWwsXG4gICAgbWF4LFxuICAgIG1heFJvd3MsXG4gICAgbWluLFxuICAgIG1pblJvd3MsXG4gICAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgICByZXF1aXJlZCxcbiAgICB2YWxpZGF0ZSA9IG51bWJlcixcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgRXJyb3JDb21wID0gRXJyb3IgfHwgRGVmYXVsdEVycm9yXG4gIGNvbnN0IExhYmVsQ29tcCA9IExhYmVsIHx8IERlZmF1bHRMYWJlbFxuXG4gIGNvbnN0IHsgaTE4biwgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWVcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4ub3B0aW9ucywgbWF4LCBtaW4sIHJlcXVpcmVkIH0pXG4gICAgfSxcbiAgICBbdmFsaWRhdGUsIG1pbiwgbWF4LCByZXF1aXJlZF0sXG4gIClcblxuICBjb25zdCB7IGVycm9yTWVzc2FnZSwgc2V0VmFsdWUsIHNob3dFcnJvciwgdmFsdWUgfSA9IHVzZUZpZWxkPG51bWJlciB8IG51bWJlcltdPih7XG4gICAgY29uZGl0aW9uLFxuICAgIHBhdGgsXG4gICAgdmFsaWRhdGU6IG1lbW9pemVkVmFsaWRhdGUsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpXG5cbiAgICAgIGlmIChOdW1iZXIuaXNOYU4odmFsKSkge1xuICAgICAgICBzZXRWYWx1ZSgnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFZhbHVlKHZhbClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtzZXRWYWx1ZV0sXG4gIClcblxuICBjb25zdCBbdmFsdWVUb1JlbmRlciwgc2V0VmFsdWVUb1JlbmRlcl0gPSB1c2VTdGF0ZTxcbiAgICB7IGlkOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiB7IHZhbHVlOiBudW1iZXIgfSB9W11cbiAgPihbXSkgLy8gT25seSBmb3IgaGFzTWFueVxuXG4gIGNvbnN0IGhhbmRsZUhhc01hbnlDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoc2VsZWN0ZWRPcHRpb24pID0+IHtcbiAgICAgIGlmICghcmVhZE9ubHkpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlXG4gICAgICAgIGlmICghc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IFtdXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RlZE9wdGlvbikpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLm1hcCgob3B0aW9uKSA9PiBOdW1iZXIob3B0aW9uLnZhbHVlPy52YWx1ZSB8fCBvcHRpb24udmFsdWUpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gW051bWJlcihzZWxlY3RlZE9wdGlvbi52YWx1ZT8udmFsdWUgfHwgc2VsZWN0ZWRPcHRpb24udmFsdWUpXVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgICB9XG4gICAgfSxcbiAgICBbcmVhZE9ubHksIHNldFZhbHVlXSxcbiAgKVxuXG4gIC8vIHVzZWVmZmVjdCB1cGRhdGUgdmFsdWVUb1JlbmRlcjpcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGFzTWFueSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgc2V0VmFsdWVUb1JlbmRlcihcbiAgICAgICAgdmFsdWUubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBgJHt2YWx9JHtpbmRleH1gLCAvLyBhcHBlbmQgaW5kZXggdG8gYXZvaWQgZHVwbGljYXRlIGtleXMgYnV0IGFsbG93IGR1cGxpY2F0ZSBudW1iZXJzXG4gICAgICAgICAgICBsYWJlbDogYCR7dmFsfWAsXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICB0b1N0cmluZzogKCkgPT4gYCR7dmFsfSR7aW5kZXh9YCxcbiAgICAgICAgICAgICAgdmFsdWU6ICh2YWwgYXMgYW55KT8udmFsdWUgfHwgdmFsLFxuICAgICAgICAgICAgfSwgLy8gWW91J3JlIHByb2JhYmx5IHdvbmRlcmluZywgd2h5IHRoZSBoZWxsIGlzIHRoaXMgZG9uZSB0aGF0IHdheT8gV2VsbCwgUmVhY3Qtc2VsZWN0IGF1dG9tYXRpY2FsbHkgdXNlcyBcImxhYmVsLXZhbHVlXCIgYXMgYSBrZXksIHNvIHdlIHdpbGwgZ2V0IHRoYXQgcmVhY3QgZHVwbGljYXRlIGtleSB3YXJuaW5nIGlmIHdlIGp1c3QgcGFzcyBpbiB0aGUgdmFsdWUgYXMgbXVsdGlwbGUgdmFsdWVzIGNhbiBiZSB0aGUgc2FtZS4gU28gd2UgbmVlZCB0byBhcHBlbmQgdGhlIGluZGV4IHRvIHRoZSB0b1N0cmluZygpIG9mIHRoZSB2YWx1ZSB0byBhdm9pZCB0aGF0IHdhcm5pbmcsIGFzIGl0IHVzZXMgdGhhdCBhcyB0aGUga2V5LlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICApXG4gICAgfVxuICB9LCBbdmFsdWUsIGhhc01hbnldKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgIGZpZWxkQmFzZUNsYXNzLFxuICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBzaG93RXJyb3IgJiYgJ2Vycm9yJyxcbiAgICAgICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gICAgICAgIGhhc01hbnkgJiYgJ2hhcy1tYW55JyxcbiAgICAgIF1cbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAuam9pbignICcpfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RXJyb3JDb21wIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX0gc2hvd0Vycm9yPXtzaG93RXJyb3J9IC8+XG4gICAgICA8TGFiZWxDb21wIGh0bWxGb3I9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2csICdfXycpfWB9IGxhYmVsPXtsYWJlbH0gcmVxdWlyZWQ9e3JlcXVpcmVkfSAvPlxuICAgICAge2hhc01hbnkgPyAoXG4gICAgICAgIDxSZWFjdFNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH1cbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgZmlsdGVyT3B0aW9uPXsob3B0aW9uLCByYXdJbnB1dCkgPT4ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgICAgICAgICAgY29uc3QgaXNPdmVySGFzTWFueSA9IEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+PSBtYXhSb3dzXG4gICAgICAgICAgICByZXR1cm4gaXNOdW1iZXIocmF3SW5wdXQpICYmICFpc092ZXJIYXNNYW55XG4gICAgICAgICAgfX1cbiAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgIGlzQ3JlYXRhYmxlXG4gICAgICAgICAgaXNNdWx0aVxuICAgICAgICAgIGlzU29ydGFibGVcbiAgICAgICAgICBub09wdGlvbnNNZXNzYWdlPXsoeyBpbnB1dFZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzT3Zlckhhc01hbnkgPSBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPj0gbWF4Um93c1xuICAgICAgICAgICAgaWYgKGlzT3Zlckhhc01hbnkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246bGltaXRSZWFjaGVkJywgeyBtYXg6IG1heFJvd3MsIHZhbHVlOiB2YWx1ZS5sZW5ndGggKyAxIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH19XG4gICAgICAgICAgbnVtYmVyT25seVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVIYXNNYW55Q2hhbmdlfVxuICAgICAgICAgIG9wdGlvbnM9e1tdfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdnZW5lcmFsOmVudGVyQVZhbHVlJyl9XG4gICAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlVG9SZW5kZXIgYXMgT3B0aW9uW119XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShiZWZvcmVJbnB1dCkgJiYgYmVmb3JlSW5wdXQubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH1cbiAgICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgICAgbWluPXttaW59XG4gICAgICAgICAgICBuYW1lPXtwYXRofVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG9uV2hlZWw9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgICBlLnRhcmdldC5ibHVyKClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17Z2V0VHJhbnNsYXRpb24ocGxhY2Vob2xkZXIsIGkxOG4pfVxuICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3R5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6ICcnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge0FycmF5LmlzQXJyYXkoYWZ0ZXJJbnB1dCkgJiYgYWZ0ZXJJbnB1dC5tYXAoKENvbXBvbmVudCwgaSkgPT4gPENvbXBvbmVudCBrZXk9e2l9IC8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8RmllbGREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKE51bWJlckZpZWxkKVxuIl0sIm5hbWVzIjpbIk51bWJlckZpZWxkIiwicHJvcHMiLCJuYW1lIiwiYWRtaW4iLCJjbGFzc05hbWUiLCJjb21wb25lbnRzIiwiRXJyb3IiLCJMYWJlbCIsImFmdGVySW5wdXQiLCJiZWZvcmVJbnB1dCIsImNvbmRpdGlvbiIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJyZWFkT25seSIsInN0ZXAiLCJzdHlsZSIsIndpZHRoIiwiaGFzTWFueSIsImxhYmVsIiwibWF4IiwibWF4Um93cyIsIm1pbiIsIm1pblJvd3MiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJudW1iZXIiLCJFcnJvckNvbXAiLCJEZWZhdWx0RXJyb3IiLCJMYWJlbENvbXAiLCJEZWZhdWx0TGFiZWwiLCJpMThuIiwidCIsInVzZVRyYW5zbGF0aW9uIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcHRpb25zIiwiZXJyb3JNZXNzYWdlIiwic2V0VmFsdWUiLCJzaG93RXJyb3IiLCJ1c2VGaWVsZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWwiLCJwYXJzZUZsb2F0IiwidGFyZ2V0IiwiTnVtYmVyIiwiaXNOYU4iLCJ2YWx1ZVRvUmVuZGVyIiwic2V0VmFsdWVUb1JlbmRlciIsInVzZVN0YXRlIiwiaGFuZGxlSGFzTWFueUNoYW5nZSIsInNlbGVjdGVkT3B0aW9uIiwibmV3VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJvcHRpb24iLCJ1c2VFZmZlY3QiLCJpbmRleCIsImlkIiwidG9TdHJpbmciLCJkaXYiLCJmaWVsZEJhc2VDbGFzcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwibWVzc2FnZSIsImh0bWxGb3IiLCJyZXBsYWNlIiwiUmVhY3RTZWxlY3QiLCJkaXNhYmxlZCIsImZpbHRlck9wdGlvbiIsInJhd0lucHV0IiwiaXNPdmVySGFzTWFueSIsImxlbmd0aCIsImlzTnVtYmVyIiwiaXNDbGVhcmFibGUiLCJpc0NyZWF0YWJsZSIsImlzTXVsdGkiLCJpc1NvcnRhYmxlIiwibm9PcHRpb25zTWVzc2FnZSIsImlucHV0VmFsdWUiLCJudW1iZXJPbmx5Iiwib25DaGFuZ2UiLCJDb21wb25lbnQiLCJpIiwia2V5IiwiaW5wdXQiLCJvbldoZWVsIiwiYmx1ciIsImdldFRyYW5zbGF0aW9uIiwidHlwZSIsIkZpZWxkRGVzY3JpcHRpb24iLCJ3aXRoQ29uZGl0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkErTEE7OztlQUFBOzs7K0RBL0x3RDs4QkFDekI7NkJBS1I7Z0NBQ1E7MEJBQ047b0VBQ0Q7OERBQ0M7eUVBQ0k7OERBQ0o7aUVBQ0o7c0VBQ0s7d0JBQ0s7UUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsY0FBK0IsQ0FBQ0M7SUFDcEMsTUFBTSxFQUNKQyxJQUFJLEVBQ0pDLE9BQU8sRUFDTEMsU0FBUyxFQUNUQyxZQUFZLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUMxREMsU0FBUyxFQUNUQyxXQUFXLEVBQ1hDLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxJQUFJLEVBQ0pDLEtBQUssRUFDTEMsS0FBSyxFQUNOLEdBQUcsQ0FBQyxDQUFDLEVBQ05DLE9BQU8sRUFDUEMsS0FBSyxFQUNMQyxHQUFHLEVBQ0hDLE9BQU8sRUFDUEMsR0FBRyxFQUNIQyxPQUFPLEVBQ1BDLE1BQU1DLGFBQWEsRUFDbkJDLFFBQVEsRUFDUkMsV0FBV0MsbUJBQU0sRUFDbEIsR0FBRzFCO0lBRUosTUFBTTJCLFlBQVl0QixTQUFTdUIsY0FBWTtJQUN2QyxNQUFNQyxZQUFZdkIsU0FBU3dCLGNBQVk7SUFFdkMsTUFBTSxFQUFFQyxJQUFJLEVB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