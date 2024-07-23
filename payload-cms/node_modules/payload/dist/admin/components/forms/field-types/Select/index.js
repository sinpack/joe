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
const _validations = require("../../../../../fields/validations");
const _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
const _Input = /*#__PURE__*/ _interop_require_default(require("./Input"));
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
const formatOptions = (options)=>options.map((option)=>{
        if (typeof option === 'object' && (option.value || option.value === '')) {
            return option;
        }
        return {
            label: option,
            value: option
        };
    });
const Select = (props)=>{
    const { name, admin: { className, condition, description, isClearable, isSortable = true, readOnly, style, width, components: { Error, Label } = {} } = {}, hasMany, label, options: optionsFromProps, path: pathFromProps, required, validate = _validations.select } = props;
    const path = pathFromProps || name;
    const [options, setOptions] = (0, _react.useState)(formatOptions(optionsFromProps));
    (0, _react.useEffect)(()=>{
        setOptions(formatOptions(optionsFromProps));
    }, [
        optionsFromProps
    ]);
    const memoizedValidate = (0, _react.useCallback)((value, validationOptions)=>{
        return validate(value, {
            ...validationOptions,
            hasMany,
            options,
            required
        });
    }, [
        validate,
        required,
        hasMany,
        options
    ]);
    const { errorMessage, setValue, showError, value } = (0, _useField.default)({
        condition,
        path,
        validate: memoizedValidate
    });
    const onChange = (0, _react.useCallback)((selectedOption)=>{
        if (!readOnly) {
            let newValue;
            if (!selectedOption) {
                newValue = null;
            } else if (hasMany) {
                if (Array.isArray(selectedOption)) {
                    newValue = selectedOption.map((option)=>option.value);
                } else {
                    newValue = [];
                }
            } else {
                newValue = selectedOption.value;
            }
            setValue(newValue);
        }
    }, [
        readOnly,
        hasMany,
        setValue
    ]);
    return /*#__PURE__*/ _react.default.createElement(_Input.default, {
        className: className,
        description: description,
        errorMessage: errorMessage,
        hasMany: hasMany,
        isClearable: isClearable,
        isSortable: isSortable,
        label: label,
        name: name,
        onChange: onChange,
        options: options,
        path: path,
        readOnly: readOnly,
        required: required,
        showError: showError,
        style: style,
        value: value,
        width: width,
        Error: Error,
        Label: Label
    });
};
const _default = (0, _withCondition.default)(Select);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1NlbGVjdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgT3B0aW9uLCBPcHRpb25PYmplY3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucydcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCdcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nXG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSAnLi9JbnB1dCdcblxuY29uc3QgZm9ybWF0T3B0aW9ucyA9IChvcHRpb25zOiBPcHRpb25bXSk6IE9wdGlvbk9iamVjdFtdID0+XG4gIG9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgJiYgKG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udmFsdWUgPT09ICcnKSkge1xuICAgICAgcmV0dXJuIG9wdGlvblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogb3B0aW9uLFxuICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICB9IGFzIE9wdGlvbk9iamVjdFxuICB9KVxuXG5jb25zdCBTZWxlY3Q6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBhZG1pbjoge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29uZGl0aW9uLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBpc0NsZWFyYWJsZSxcbiAgICAgIGlzU29ydGFibGUgPSB0cnVlLFxuICAgICAgcmVhZE9ubHksXG4gICAgICBzdHlsZSxcbiAgICAgIHdpZHRoLFxuICAgICAgY29tcG9uZW50czogeyBFcnJvciwgTGFiZWwgfSA9IHt9LFxuICAgIH0gPSB7fSxcbiAgICBoYXNNYW55LFxuICAgIGxhYmVsLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNGcm9tUHJvcHMsXG4gICAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgICByZXF1aXJlZCxcbiAgICB2YWxpZGF0ZSA9IHNlbGVjdCxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZVxuXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKGZvcm1hdE9wdGlvbnMob3B0aW9uc0Zyb21Qcm9wcykpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcHRpb25zKGZvcm1hdE9wdGlvbnMob3B0aW9uc0Zyb21Qcm9wcykpXG4gIH0sIFtvcHRpb25zRnJvbVByb3BzXSlcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlLCB2YWxpZGF0aW9uT3B0aW9ucykgPT4ge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLnZhbGlkYXRpb25PcHRpb25zLCBoYXNNYW55LCBvcHRpb25zLCByZXF1aXJlZCB9KVxuICAgIH0sXG4gICAgW3ZhbGlkYXRlLCByZXF1aXJlZCwgaGFzTWFueSwgb3B0aW9uc10sXG4gIClcblxuICBjb25zdCB7IGVycm9yTWVzc2FnZSwgc2V0VmFsdWUsIHNob3dFcnJvciwgdmFsdWUgfSA9IHVzZUZpZWxkKHtcbiAgICBjb25kaXRpb24sXG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgfSlcblxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChzZWxlY3RlZE9wdGlvbikgPT4ge1xuICAgICAgaWYgKCFyZWFkT25seSkge1xuICAgICAgICBsZXQgbmV3VmFsdWVcbiAgICAgICAgaWYgKCFzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgIG5ld1ZhbHVlID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKGhhc01hbnkpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RlZE9wdGlvbikpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gc2VsZWN0ZWRPcHRpb24ubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBbXVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtyZWFkT25seSwgaGFzTWFueSwgc2V0VmFsdWVdLFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0SW5wdXRcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICBoYXNNYW55PXtoYXNNYW55fVxuICAgICAgaXNDbGVhcmFibGU9e2lzQ2xlYXJhYmxlfVxuICAgICAgaXNTb3J0YWJsZT17aXNTb3J0YWJsZX1cbiAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgcGF0aD17cGF0aH1cbiAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgdmFsdWU9e3ZhbHVlIGFzIHN0cmluZyB8IHN0cmluZ1tdfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgRXJyb3I9e0Vycm9yfVxuICAgICAgTGFiZWw9e0xhYmVsfVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihTZWxlY3QpXG4iXSwibmFtZXMiOlsiZm9ybWF0T3B0aW9ucyIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJ2YWx1ZSIsImxhYmVsIiwiU2VsZWN0IiwicHJvcHMiLCJuYW1lIiwiYWRtaW4iLCJjbGFzc05hbWUiLCJjb25kaXRpb24iLCJkZXNjcmlwdGlvbiIsImlzQ2xlYXJhYmxlIiwiaXNTb3J0YWJsZSIsInJlYWRPbmx5Iiwic3R5bGUiLCJ3aWR0aCIsImNvbXBvbmVudHMiLCJFcnJvciIsIkxhYmVsIiwiaGFzTWFueSIsIm9wdGlvbnNGcm9tUHJvcHMiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJzZWxlY3QiLCJzZXRPcHRpb25zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtZW1vaXplZFZhbGlkYXRlIiwidXNlQ2FsbGJhY2siLCJ2YWxpZGF0aW9uT3B0aW9ucyIsImVycm9yTWVzc2FnZSIsInNldFZhbHVlIiwic2hvd0Vycm9yIiwidXNlRmllbGQiLCJvbkNoYW5nZSIsInNlbGVjdGVkT3B0aW9uIiwibmV3VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJTZWxlY3RJbnB1dCIsIndpdGhDb25kaXRpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGlu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