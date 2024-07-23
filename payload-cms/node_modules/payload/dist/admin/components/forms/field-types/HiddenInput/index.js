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
const _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
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
/**
 * This is mainly used to save a value on the form that is not visible to the user.
 * For example, this sets the `ìd` property of a block in the Blocks field.
 */ const HiddenInput = (props)=>{
    const { name, disableModifyingForm = true, path: pathFromProps, value: valueFromProps } = props;
    const path = pathFromProps || name;
    const { setValue, value } = (0, _useField.default)({
        path
    });
    (0, _react.useEffect)(()=>{
        if (valueFromProps !== undefined) {
            setValue(valueFromProps, disableModifyingForm);
        }
    }, [
        valueFromProps,
        setValue,
        disableModifyingForm
    ]);
    return /*#__PURE__*/ _react.default.createElement("input", {
        id: `field-${path.replace(/\./g, '__')}`,
        name: path,
        onChange: setValue,
        type: "hidden",
        value: value || ''
    });
};
const _default = (0, _withCondition.default)(HiddenInput);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0hpZGRlbklucHV0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnXG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJ1xuXG4vKipcbiAqIFRoaXMgaXMgbWFpbmx5IHVzZWQgdG8gc2F2ZSBhIHZhbHVlIG9uIHRoZSBmb3JtIHRoYXQgaXMgbm90IHZpc2libGUgdG8gdGhlIHVzZXIuXG4gKiBGb3IgZXhhbXBsZSwgdGhpcyBzZXRzIHRoZSBgw6xkYCBwcm9wZXJ0eSBvZiBhIGJsb2NrIGluIHRoZSBCbG9ja3MgZmllbGQuXG4gKi9cbmNvbnN0IEhpZGRlbklucHV0OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBkaXNhYmxlTW9kaWZ5aW5nRm9ybSA9IHRydWUsIHBhdGg6IHBhdGhGcm9tUHJvcHMsIHZhbHVlOiB2YWx1ZUZyb21Qcm9wcyB9ID0gcHJvcHNcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lXG5cbiAgY29uc3QgeyBzZXRWYWx1ZSwgdmFsdWUgfSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlRnJvbVByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFZhbHVlKHZhbHVlRnJvbVByb3BzLCBkaXNhYmxlTW9kaWZ5aW5nRm9ybSlcbiAgICB9XG4gIH0sIFt2YWx1ZUZyb21Qcm9wcywgc2V0VmFsdWUsIGRpc2FibGVNb2RpZnlpbmdGb3JtXSlcblxuICByZXR1cm4gKFxuICAgIDxpbnB1dFxuICAgICAgaWQ9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2csICdfXycpfWB9XG4gICAgICBuYW1lPXtwYXRofVxuICAgICAgb25DaGFuZ2U9e3NldFZhbHVlfVxuICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICB2YWx1ZT17KHZhbHVlIGFzIHN0cmluZykgfHwgJyd9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKEhpZGRlbklucHV0KVxuIl0sIm5hbWVzIjpbIkhpZGRlbklucHV0IiwicHJvcHMiLCJuYW1lIiwiZGlzYWJsZU1vZGlmeWluZ0Zvcm0iLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInZhbHVlIiwidmFsdWVGcm9tUHJvcHMiLCJzZXRWYWx1ZSIsInVzZUZpZWxkIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwiaW5wdXQiLCJpZCIsInJlcGxhY2UiLCJvbkNoYW5nZSIsInR5cGUiLCJ3aXRoQ29uZGl0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBcUNBOzs7ZUFBQTs7OytEQXJDaUM7aUVBSVo7c0VBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCOzs7Q0FHQyxHQUNELE1BQU1BLGNBQStCLENBQUNDO0lBQ3BDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyx1QkFBdUIsSUFBSSxFQUFFQyxNQUFNQyxhQUFhLEVBQUVDLE9BQU9DLGNBQWMsRUFBRSxHQUFHTjtJQUUxRixNQUFNRyxPQUFPQyxpQkFBaUJIO0lBRTlCLE1BQU0sRUFBRU0sUUFBUSxFQUFFRixLQUFLLEVBQUUsR0FBR0csSUFBQUEsaUJBQVEsRUFBQztRQUNuQ0w7SUFDRjtJQUVBTSxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsSUFBSUgsbUJBQW1CSSxXQUFXO1lBQ2hDSCxTQUFTRCxnQkFBZ0JKO1FBQzNCO0lBQ0YsR0FBRztRQUFDSTtRQUFnQkM7UUFBVUw7S0FBcUI7SUFFbkQscUJBQ0UsNkJBQUNTO1FBQ0NDLElBQUksQ0FBQyxNQUFNLEVBQUVULEtBQUtVLE9BQU8sQ0FBQyxPQUFPLE1BQU0sQ0FBQztRQUN4Q1osTUFBTUU7UUFDTlcsVUFBVVA7UUFDVlEsTUFBSztRQUNMVixPQUFPLEFBQUNBLFNBQW9COztBQUdsQztNQUVBLFdBQWVXLElBQUFBLHNCQUFhLEVBQUNqQiJ9