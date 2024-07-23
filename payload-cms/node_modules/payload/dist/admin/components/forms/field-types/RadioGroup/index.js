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
const RadioGroup = (props)=>{
    const { name, admin: { className, components: { Error, Label } = {}, condition, description, layout = 'horizontal', readOnly, style, width } = {}, label, options, path: pathFromProps, required, validate = _validations.radio } = props;
    const path = pathFromProps || name;
    const memoizedValidate = (0, _react.useCallback)((value, validationOptions)=>{
        return validate(value, {
            ...validationOptions,
            options,
            required
        });
    }, [
        validate,
        options,
        required
    ]);
    const { errorMessage, setValue, showError, value } = (0, _useField.default)({
        condition,
        path,
        validate: memoizedValidate
    });
    return /*#__PURE__*/ _react.default.createElement(_Input.default, {
        Error: Error,
        Label: Label,
        className: className,
        description: description,
        errorMessage: errorMessage,
        label: label,
        layout: layout,
        name: name,
        onChange: readOnly ? undefined : setValue,
        options: options,
        path: path,
        readOnly: readOnly,
        required: required,
        showError: showError,
        style: style,
        value: value,
        width: width
    });
};
const _default = (0, _withCondition.default)(RadioGroup);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JhZGlvR3JvdXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgcmFkaW8gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnXG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnXG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJ1xuaW1wb3J0IFJhZGlvR3JvdXBJbnB1dCBmcm9tICcuL0lucHV0J1xuXG5jb25zdCBSYWRpb0dyb3VwOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYWRtaW46IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbXBvbmVudHM6IHsgRXJyb3IsIExhYmVsIH0gPSB7fSxcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgbGF5b3V0ID0gJ2hvcml6b250YWwnLFxuICAgICAgcmVhZE9ubHksXG4gICAgICBzdHlsZSxcbiAgICAgIHdpZHRoLFxuICAgIH0gPSB7fSxcbiAgICBsYWJlbCxcbiAgICBvcHRpb25zLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSByYWRpbyxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZVxuXG4gIGNvbnN0IG1lbW9pemVkVmFsaWRhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWUsIHZhbGlkYXRpb25PcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4udmFsaWRhdGlvbk9wdGlvbnMsIG9wdGlvbnMsIHJlcXVpcmVkIH0pXG4gICAgfSxcbiAgICBbdmFsaWRhdGUsIG9wdGlvbnMsIHJlcXVpcmVkXSxcbiAgKVxuXG4gIGNvbnN0IHsgZXJyb3JNZXNzYWdlLCBzZXRWYWx1ZSwgc2hvd0Vycm9yLCB2YWx1ZSB9ID0gdXNlRmllbGQ8c3RyaW5nPih7XG4gICAgY29uZGl0aW9uLFxuICAgIHBhdGgsXG4gICAgdmFsaWRhdGU6IG1lbW9pemVkVmFsaWRhdGUsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8UmFkaW9Hcm91cElucHV0XG4gICAgICBFcnJvcj17RXJyb3J9XG4gICAgICBMYWJlbD17TGFiZWx9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgb25DaGFuZ2U9e3JlYWRPbmx5ID8gdW5kZWZpbmVkIDogc2V0VmFsdWV9XG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgcGF0aD17cGF0aH1cbiAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihSYWRpb0dyb3VwKVxuIl0sIm5hbWVzIjpbIlJhZGlvR3JvdXAiLCJwcm9wcyIsIm5hbWUiLCJhZG1pbiIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJFcnJvciIsIkxhYmVsIiwiY29uZGl0aW9uIiwiZGVzY3JpcHRpb24iLCJsYXlvdXQiLCJyZWFkT25seSIsInN0eWxlIiwid2lkdGgiLCJsYWJlbCIsIm9wdGlvbnMiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJyYWRpbyIsIm1lbW9pemVkVmFsaWRhdGUiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwidmFsaWRhdGlvbk9wdGlvbnMiLCJlcnJvck1lc3NhZ2UiLCJzZXRWYWx1ZSIsInNob3dFcnJvciIsInVzZUZpZWxkIiwiUmFkaW9Hcm91cElucHV0Iiwib25DaGFuZ2UiLCJ1bmRlZmluZWQiLCJ3aXRoQ29uZGl0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBbUVBOzs7ZUFBQTs7OytEQW5FbUM7NkJBSWI7aUVBQ0Q7c0VBQ0s7OERBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLE1BQU1BLGFBQThCLENBQUNDO0lBQ25DLE1BQU0sRUFDSkMsSUFBSSxFQUNKQyxPQUFPLEVBQ0xDLFNBQVMsRUFDVEMsWUFBWSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUNqQ0MsU0FBUyxFQUNUQyxXQUFXLEVBQ1hDLFNBQVMsWUFBWSxFQUNyQkMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLEtBQUssRUFDTixHQUFHLENBQUMsQ0FBQyxFQUNOQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsTUFBTUMsYUFBYSxFQUNuQkMsUUFBUSxFQUNSQyxXQUFXQyxrQkFBSyxFQUNqQixHQUFHbkI7SUFFSixNQUFNZSxPQUFPQyxpQkFBaUJmO0lBRTlCLE1BQU1tQixtQkFBbUJDLElBQUFBLGtCQUFXLEVBQ2xDLENBQUNDLE9BQU9DO1FBQ04sT0FBT0wsU0FBU0ksT0FBTztZQUFFLEdBQUdDLGlCQUFpQjtZQUFFVDtZQUFTRztRQUFTO0lBQ25FLEdBQ0E7UUFBQ0M7UUFBVUo7UUFBU0c7S0FBUztJQUcvQixNQUFNLEVBQUVPLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVKLEtBQUssRUFBRSxHQUFHSyxJQUFBQSxpQkFBUSxFQUFTO1FBQ3BFcEI7UUFDQVE7UUFDQUcsVUFBVUU7SUFDWjtJQUVBLHFCQUNFLDZCQUFDUSxjQUFlO1FBQ2R2QixPQUFPQTtRQUNQQyxPQUFPQTtRQUNQSCxXQUFXQTtRQUNYSyxhQUFhQTtRQUNiZ0IsY0FBY0E7UUFDZFgsT0FBT0E7UUFDUEosUUFBUUE7UUFDUlIsTUFBTUE7UUFDTjRCLFVBQVVuQixXQUFXb0IsWUFBWUw7UUFDakNYLFNBQVNBO1FBQ1RDLE1BQU1BO1FBQ05MLFVBQVVBO1FBQ1ZPLFVBQVVBO1FBQ1ZTLFdBQVdBO1FBQ1hmLE9BQU9BO1FBQ1BXLE9BQU9BO1FBQ1BWLE9BQU9BOztBQUdiO01BRUEsV0FBZW1CLElBQUFBLHNCQUFhLEVBQUNoQyJ9