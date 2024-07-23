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
const _Config = require("../../../utilities/Config");
const _Locale = require("../../../utilities/Locale");
const _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
const _shared = require("../shared");
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
const Text = (props)=>{
    const { name, admin: { className, components: { Error, Label, afterInput, beforeInput } = {}, condition, description, placeholder, readOnly, rtl, style, width } = {}, hasMany, inputRef, label, localized, maxLength, maxRows, minLength, minRows, path: pathFromProps, required, validate = _validations.text } = props;
    const path = pathFromProps || name;
    const locale = (0, _Locale.useLocale)();
    const { localization } = (0, _Config.useConfig)();
    const isRTL = (0, _shared.isFieldRTL)({
        fieldLocalized: localized,
        fieldRTL: rtl,
        locale,
        localizationConfig: localization || undefined
    });
    const memoizedValidate = (0, _react.useCallback)((value, options)=>{
        return validate(value, {
            ...options,
            maxLength,
            minLength,
            required
        });
    }, [
        validate,
        minLength,
        maxLength,
        required
    ]);
    const { errorMessage, setValue, showError, value } = (0, _useField.default)({
        condition,
        path,
        validate: memoizedValidate
    });
    const handleOnChange = (e)=>{
        setValue(e.target.value);
    };
    const handleHasManyChange = (0, _react.useCallback)((selectedOption)=>{
        if (!readOnly) {
            let newValue;
            if (!selectedOption) {
                newValue = [];
            } else if (Array.isArray(selectedOption)) {
                newValue = selectedOption.map((option)=>option.value?.value || option.value);
            } else {
                newValue = [
                    selectedOption.value?.value || selectedOption.value
                ];
            }
            setValue(newValue);
        }
    }, [
        readOnly,
        setValue
    ]);
    const [valueToRender, setValueToRender] = (0, _react.useState)([]) // Only for hasMany
    ;
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
    return /*#__PURE__*/ _react.default.createElement(_Input.default, {
        Error: Error,
        Label: Label,
        afterInput: afterInput,
        beforeInput: beforeInput,
        className: className,
        description: description,
        errorMessage: errorMessage,
        hasMany: hasMany,
        inputRef: inputRef,
        label: label,
        maxRows: maxRows,
        minRows: minRows,
        name: name,
        onChange: hasMany ? handleHasManyChange : handleOnChange,
        path: path,
        placeholder: placeholder,
        readOnly: readOnly,
        required: required,
        rtl: isRTL,
        showError: showError,
        style: style,
        value: value,
        valueToRender: valueToRender,
        width: width
    });
};
const _default = (0, _withCondition.default)(Text);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgdGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucydcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJ1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJ1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbidcbmltcG9ydCB7IGlzRmllbGRSVEwgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4vSW5wdXQnXG5cbmNvbnN0IFRleHQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBhZG1pbjoge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29tcG9uZW50czogeyBFcnJvciwgTGFiZWwsIGFmdGVySW5wdXQsIGJlZm9yZUlucHV0IH0gPSB7fSxcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByZWFkT25seSxcbiAgICAgIHJ0bCxcbiAgICAgIHN0eWxlLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHt9LFxuICAgIGhhc01hbnksXG4gICAgaW5wdXRSZWYsXG4gICAgbGFiZWwsXG4gICAgbG9jYWxpemVkLFxuICAgIG1heExlbmd0aCxcbiAgICBtYXhSb3dzLFxuICAgIG1pbkxlbmd0aCxcbiAgICBtaW5Sb3dzLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSB0ZXh0LFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lXG4gIGNvbnN0IGxvY2FsZSA9IHVzZUxvY2FsZSgpXG5cbiAgY29uc3QgeyBsb2NhbGl6YXRpb24gfSA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IGlzUlRMID0gaXNGaWVsZFJUTCh7XG4gICAgZmllbGRMb2NhbGl6ZWQ6IGxvY2FsaXplZCxcbiAgICBmaWVsZFJUTDogcnRsLFxuICAgIGxvY2FsZSxcbiAgICBsb2NhbGl6YXRpb25Db25maWc6IGxvY2FsaXphdGlvbiB8fCB1bmRlZmluZWQsXG4gIH0pXG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIG1heExlbmd0aCwgbWluTGVuZ3RoLCByZXF1aXJlZCB9KVxuICAgIH0sXG4gICAgW3ZhbGlkYXRlLCBtaW5MZW5ndGgsIG1heExlbmd0aCwgcmVxdWlyZWRdLFxuICApXG5cbiAgY29uc3QgeyBlcnJvck1lc3NhZ2UsIHNldFZhbHVlLCBzaG93RXJyb3IsIHZhbHVlIH0gPSB1c2VGaWVsZDxzdHJpbmc+KHtcbiAgICBjb25kaXRpb24sXG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgfSlcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVIYXNNYW55Q2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHNlbGVjdGVkT3B0aW9uKSA9PiB7XG4gICAgICBpZiAoIXJlYWRPbmx5KSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZVxuICAgICAgICBpZiAoIXNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBbXVxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0ZWRPcHRpb24pKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBzZWxlY3RlZE9wdGlvbi5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlPy52YWx1ZSB8fCBvcHRpb24udmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBbc2VsZWN0ZWRPcHRpb24udmFsdWU/LnZhbHVlIHx8IHNlbGVjdGVkT3B0aW9uLnZhbHVlXVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgICB9XG4gICAgfSxcbiAgICBbcmVhZE9ubHksIHNldFZhbHVlXSxcbiAgKVxuXG4gIGNvbnN0IFt2YWx1ZVRvUmVuZGVyLCBzZXRWYWx1ZVRvUmVuZGVyXSA9IHVzZVN0YXRlPFxuICAgIHsgaWQ6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHsgdmFsdWU6IHN0cmluZyB9IH1bXVxuICA+KFtdKSAvLyBPbmx5IGZvciBoYXNNYW55XG5cbiAgLy8gdXNlZWZmZWN0IHVwZGF0ZSB2YWx1ZVRvUmVuZGVyOlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoYXNNYW55ICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBzZXRWYWx1ZVRvUmVuZGVyKFxuICAgICAgICB2YWx1ZS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGAke3ZhbH0ke2luZGV4fWAsIC8vIGFwcGVuZCBpbmRleCB0byBhdm9pZCBkdXBsaWNhdGUga2V5cyBidXQgYWxsb3cgZHVwbGljYXRlIG51bWJlcnNcbiAgICAgICAgICAgIGxhYmVsOiBgJHt2YWx9YCxcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgIHRvU3RyaW5nOiAoKSA9PiBgJHt2YWx9JHtpbmRleH1gLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsPy52YWx1ZSB8fCB2YWwsXG4gICAgICAgICAgICB9LCAvLyBZb3UncmUgcHJvYmFibHkgd29uZGVyaW5nLCB3aHkgdGhlIGhlbGwgaXMgdGhpcyBkb25lIHRoYXQgd2F5PyBXZWxsLCBSZWFjdC1zZWxlY3QgYXV0b21hdGljYWxseSB1c2VzIFwibGFiZWwtdmFsdWVcIiBhcyBhIGtleSwgc28gd2Ugd2lsbCBnZXQgdGhhdCByZWFjdCBkdXBsaWNhdGUga2V5IHdhcm5pbmcgaWYgd2UganVzdCBwYXNzIGluIHRoZSB2YWx1ZSBhcyBtdWx0aXBsZSB2YWx1ZXMgY2FuIGJlIHRoZSBzYW1lLiBTbyB3ZSBuZWVkIHRvIGFwcGVuZCB0aGUgaW5kZXggdG8gdGhlIHRvU3RyaW5nKCkgb2YgdGhlIHZhbHVlIHRvIGF2b2lkIHRoYXQgd2FybmluZywgYXMgaXQgdXNlcyB0aGF0IGFzIHRoZSBrZXkuXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgIClcbiAgICB9XG4gIH0sIFt2YWx1ZSwgaGFzTWFueV0pXG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dElucHV0XG4gICAgICBFcnJvcj17RXJyb3J9XG4gICAgICBMYWJlbD17TGFiZWx9XG4gICAgICBhZnRlcklucHV0PXthZnRlcklucHV0fVxuICAgICAgYmVmb3JlSW5wdXQ9e2JlZm9yZUlucHV0fVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgIGhhc01hbnk9e2hhc01hbnl9XG4gICAgICBpbnB1dFJlZj17aW5wdXRSZWZ9XG4gICAgICBsYWJlbD17bGFiZWx9XG4gICAgICBtYXhSb3dzPXttYXhSb3dzfVxuICAgICAgbWluUm93cz17bWluUm93c31cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICBvbkNoYW5nZT17aGFzTWFueSA/IGhhbmRsZUhhc01hbnlDaGFuZ2UgOiBoYW5kbGVPbkNoYW5nZX1cbiAgICAgIHBhdGg9e3BhdGh9XG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICBydGw9e2lzUlRMfVxuICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICB2YWx1ZVRvUmVuZGVyPXt2YWx1ZVRvUmVuZGVyfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihUZXh0KVxuIl0sIm5hbWVzIjpbIlRleHQiLCJwcm9wcyIsIm5hbWUiLCJhZG1pbiIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJFcnJvciIsIkxhYmVsIiwiYWZ0ZXJJbnB1dCIsImJlZm9yZUlucHV0IiwiY29uZGl0aW9uIiwiZGVzY3JpcHRpb24iLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5IiwicnRsIiwic3R5bGUiLCJ3aWR0aCIsImhhc01hbnkiLCJpbnB1dFJlZiIsImxhYmVsIiwibG9jYWxpemVkIiwibWF4TGVuZ3RoIiwibWF4Um93cyIsIm1pbkxlbmd0aCIsIm1pblJvd3MiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJ0ZXh0IiwibG9jYWxlIiwidXNlTG9jYWxlIiwibG9jYWxpemF0aW9uIiwidXNlQ29uZmlnIiwiaXNSVEwiLCJpc0ZpZWxkUlRMIiwiZmllbGRMb2NhbGl6ZWQiLCJmaWVsZFJUTCIsImxvY2FsaXphdGlvbkNvbmZpZyIsInVuZGVmaW5lZCIsIm1lbW9pemVkVmFsaWRhdGUiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwib3B0aW9ucyIsImVycm9yTWVzc2FnZSIsInNldFZhbHVlIiwic2hvd0Vycm9yIiwidXNlRmllbGQiLCJoYW5kbGVPbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJoYW5kbGVIYXNNYW55Q2hhbmdlIiwic2VsZWN0ZWRPcHRpb24iLCJuZXdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIm9wdGlvbiIsInZhbHVlVG9SZW5kZXIiLCJzZXRWYWx1ZVRvUmVuZGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ2YWwiLCJpbmRleCIsImlkIiwidG9TdHJpbmciLCJUZXh0SW5wdXQiLCJvbkNoYW5nZSIsIndpdGhDb25kaXRpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBeUlBOzs7ZUFBQTs7OytEQXpJd0Q7NkJBSW5DO3dCQUNLO3dCQUNBO2lFQUNMO3NFQUNLO3dCQUNDOzhEQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixNQUFNQSxPQUF3QixDQUFDQztJQUM3QixNQUFNLEVBQ0pDLElBQUksRUFDSkMsT0FBTyxFQUNMQyxTQUFTLEVBQ1RDLFlBQVksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQzFEQyxTQUFTLEVBQ1RDLFdBQVcsRUFDWEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLEdBQUcsRUFDSEMsS0FBSyxFQUNMQyxLQUFLLEVBQ04sR0FBRyxDQUFDLENBQUMsRUFDTkMsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxTQUFTLEVB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