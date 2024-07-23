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
const _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
const _context = require("../Form/context");
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
const baseClass = 'form-submit';
const FormSubmit = /*#__PURE__*/ (0, _react.forwardRef)((props, ref)=>{
    const { buttonId: id, children, disabled: disabledFromProps, type = 'submit' } = props;
    const processing = (0, _context.useFormProcessing)();
    const { disabled } = (0, _context.useForm)();
    const canSave = !(disabledFromProps || processing || disabled);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        ref: ref,
        ...props,
        disabled: canSave ? undefined : true,
        id: id,
        type: type
    }, children));
});
const _default = FormSubmit;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL1N1Ym1pdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbi90eXBlcydcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nXG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtUHJvY2Vzc2luZyB9IGZyb20gJy4uL0Zvcm0vY29udGV4dCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZm9ybS1zdWJtaXQnXG5cbmNvbnN0IEZvcm1TdWJtaXQgPSBmb3J3YXJkUmVmPEhUTUxCdXR0b25FbGVtZW50LCBQcm9wcz4oKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3QgeyBidXR0b25JZDogaWQsIGNoaWxkcmVuLCBkaXNhYmxlZDogZGlzYWJsZWRGcm9tUHJvcHMsIHR5cGUgPSAnc3VibWl0JyB9ID0gcHJvcHNcbiAgY29uc3QgcHJvY2Vzc2luZyA9IHVzZUZvcm1Qcm9jZXNzaW5nKClcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdXNlRm9ybSgpXG4gIGNvbnN0IGNhblNhdmUgPSAhKGRpc2FibGVkRnJvbVByb3BzIHx8IHByb2Nlc3NpbmcgfHwgZGlzYWJsZWQpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxCdXR0b24gcmVmPXtyZWZ9IHsuLi5wcm9wc30gZGlzYWJsZWQ9e2NhblNhdmUgPyB1bmRlZmluZWQgOiB0cnVlfSBpZD17aWR9IHR5cGU9e3R5cGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRm9ybVN1Ym1pdFxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkZvcm1TdWJtaXQiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJidXR0b25JZCIsImlkIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImRpc2FibGVkRnJvbVByb3BzIiwidHlwZSIsInByb2Nlc3NpbmciLCJ1c2VGb3JtUHJvY2Vzc2luZyIsInVzZUZvcm0iLCJjYW5TYXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwidW5kZWZpbmVkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBeUJBOzs7ZUFBQTs7OytEQXpCa0M7K0RBSWY7eUJBQ3dCO1FBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsMkJBQWFDLElBQUFBLGlCQUFVLEVBQTJCLENBQUNDLE9BQU9DO0lBQzlELE1BQU0sRUFBRUMsVUFBVUMsRUFBRSxFQUFFQyxRQUFRLEVBQUVDLFVBQVVDLGlCQUFpQixFQUFFQyxPQUFPLFFBQVEsRUFBRSxHQUFHUDtJQUNqRixNQUFNUSxhQUFhQyxJQUFBQSwwQkFBaUI7SUFDcEMsTUFBTSxFQUFFSixRQUFRLEVBQUUsR0FBR0ssSUFBQUEsZ0JBQU87SUFDNUIsTUFBTUMsVUFBVSxDQUFFTCxDQUFBQSxxQkFBcUJFLGNBQWNILFFBQU87SUFFNUQscUJBQ0UsNkJBQUNPO1FBQUlDLFdBQVdoQjtxQkFDZCw2QkFBQ2lCLGVBQU07UUFBQ2IsS0FBS0E7UUFBTSxHQUFHRCxLQUFLO1FBQUVLLFVBQVVNLFVBQVVJLFlBQVk7UUFBTVosSUFBSUE7UUFBSUksTUFBTUE7T0FDOUVIO0FBSVQ7TUFFQSxXQUFlTiJ9