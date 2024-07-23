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
const _Input = require("./Input");
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
const DateTime = (props)=>{
    const { name, admin: { className, components, condition, date, description, placeholder, readOnly, style, width } = {}, label, path: pathFromProps, required, validate = _validations.date } = props;
    const path = pathFromProps || name;
    const memoizedValidate = (0, _react.useCallback)((value, options)=>{
        return validate(value, {
            ...options,
            required
        });
    }, [
        validate,
        required
    ]);
    const { errorMessage, setValue, showError, value } = (0, _useField.default)({
        condition,
        path,
        validate: memoizedValidate
    });
    return /*#__PURE__*/ _react.default.createElement(_Input.DateTimeInput, {
        className: className,
        components: components,
        datePickerProps: date,
        description: description,
        errorMessage: errorMessage,
        label: label,
        onChange: (incomingDate)=>{
            if (!readOnly) setValue(incomingDate?.toISOString() || null);
        },
        path: path,
        placeholder: placeholder,
        readOnly: readOnly,
        required: required,
        showError: showError,
        style: style,
        value: value,
        width: width
    });
};
const _default = (0, _withCondition.default)(DateTime);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0RhdGVUaW1lL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IGRhdGUgYXMgZGF0ZVZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnXG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnXG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJ1xuaW1wb3J0IHsgRGF0ZVRpbWVJbnB1dCB9IGZyb20gJy4vSW5wdXQnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgRGF0ZVRpbWU6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBhZG1pbjoge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29tcG9uZW50cyxcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGRhdGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmVhZE9ubHksXG4gICAgICBzdHlsZSxcbiAgICAgIHdpZHRoLFxuICAgIH0gPSB7fSxcbiAgICBsYWJlbCxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gZGF0ZVZhbGlkYXRpb24sXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWVcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4ub3B0aW9ucywgcmVxdWlyZWQgfSlcbiAgICB9LFxuICAgIFt2YWxpZGF0ZSwgcmVxdWlyZWRdLFxuICApXG5cbiAgY29uc3QgeyBlcnJvck1lc3NhZ2UsIHNldFZhbHVlLCBzaG93RXJyb3IsIHZhbHVlIH0gPSB1c2VGaWVsZDxEYXRlPih7XG4gICAgY29uZGl0aW9uLFxuICAgIHBhdGgsXG4gICAgdmFsaWRhdGU6IG1lbW9pemVkVmFsaWRhdGUsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8RGF0ZVRpbWVJbnB1dFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBjb21wb25lbnRzPXtjb21wb25lbnRzfVxuICAgICAgZGF0ZVBpY2tlclByb3BzPXtkYXRlfVxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICBsYWJlbD17bGFiZWx9XG4gICAgICBvbkNoYW5nZT17KGluY29taW5nRGF0ZSkgPT4ge1xuICAgICAgICBpZiAoIXJlYWRPbmx5KSBzZXRWYWx1ZShpbmNvbWluZ0RhdGU/LnRvSVNPU3RyaW5nKCkgfHwgbnVsbClcbiAgICAgIH19XG4gICAgICBwYXRoPXtwYXRofVxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKERhdGVUaW1lKVxuIl0sIm5hbWVzIjpbIkRhdGVUaW1lIiwicHJvcHMiLCJuYW1lIiwiYWRtaW4iLCJjbGFzc05hbWUiLCJjb21wb25lbnRzIiwiY29uZGl0aW9uIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJyZWFkT25seSIsInN0eWxlIiwid2lkdGgiLCJsYWJlbCIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsImRhdGVWYWxpZGF0aW9uIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcHRpb25zIiwiZXJyb3JNZXNzYWdlIiwic2V0VmFsdWUiLCJzaG93RXJyb3IiLCJ1c2VGaWVsZCIsIkRhdGVUaW1lSW5wdXQiLCJkYXRlUGlja2VyUHJvcHMiLCJvbkNoYW5nZSIsImluY29taW5nRGF0ZSIsInRvSVNPU3RyaW5nIiwid2l0aENvbmRpdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBb0VBOzs7ZUFBQTs7OytEQXBFbUM7NkJBSUk7aUVBQ2xCO3NFQUNLO3VCQUNJO1FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFdBQTRCLENBQUNDO0lBQ2pDLE1BQU0sRUFDSkMsSUFBSSxFQUNKQyxPQUFPLEVBQ0xDLFNBQVMsRUFDVEMsVUFBVSxFQUNWQyxTQUFTLEVBQ1RDLElBQUksRUFDSkMsV0FBVyxFQUNYQyxXQUFXLEVBQ1hDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxLQUFLLEVBQ04sR0FBRyxDQUFDLENBQUMsRUFDTkMsS0FBSyxFQUNMQyxNQUFNQyxhQUFhLEVBQ25CQyxRQUFRLEVBQ1JDLFdBQVdDLGlCQUFjLEVBQzFCLEdBQUdqQjtJQUVKLE1BQU1hLE9BQU9DLGlCQUFpQmI7SUFFOUIsTUFBTWlCLG1CQUFtQkMsSUFBQUEsa0JBQVcsRUFDbEMsQ0FBQ0MsT0FBT0M7UUFDTixPQUFPTCxTQUFTSSxPQUFPO1lBQUUsR0FBR0MsT0FBTztZQUFFTjtRQUFTO0lBQ2hELEdBQ0E7UUFBQ0M7UUFBVUQ7S0FBUztJQUd0QixNQUFNLEVBQUVPLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVKLEtBQUssRUFBRSxHQUFHSyxJQUFBQSxpQkFBUSxFQUFPO1FBQ2xFcEI7UUFDQVE7UUFDQUcsVUFBVUU7SUFDWjtJQUVBLHFCQUNFLDZCQUFDUSxvQkFBYTtRQUNadkIsV0FBV0E7UUFDWEMsWUFBWUE7UUFDWnVCLGlCQUFpQnJCO1FBQ2pCQyxhQUFhQTtRQUNiZSxjQUFjQTtRQUNkVixPQUFPQTtRQUNQZ0IsVUFBVSxDQUFDQztZQUNULElBQUksQ0FBQ3BCLFVBQVVjLFNBQVNNLGNBQWNDLGlCQUFpQjtRQUN6RDtRQUNBakIsTUFBTUE7UUFDTkwsYUFBYUE7UUFDYkMsVUFBVUE7UUFDVk0sVUFBVUE7UUFDVlMsV0FBV0E7UUFDWGQsT0FBT0E7UUFDUFUsT0FBT0E7UUFDUFQsT0FBT0E7O0FBR2I7TUFFQSxXQUFlb0IsSUFBQUEsc0JBQWEsRUFBQ2hDIn0=