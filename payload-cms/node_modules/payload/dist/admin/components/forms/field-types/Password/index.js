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
const _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
const _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
const _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
require("./index.scss");
const _shared = require("../shared");
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
const Password = (props)=>{
    const { name, autoComplete, className, disabled, label, path: pathFromProps, required, style, validate = _validations.password, width } = props;
    const path = pathFromProps || name;
    const memoizedValidate = (0, _react.useCallback)((value, options)=>{
        const validationResult = validate(value, {
            ...options,
            required
        });
        return validationResult;
    }, [
        validate,
        required
    ]);
    const { errorMessage, formProcessing, setValue, showError, value } = (0, _useField.default)({
        path,
        validate: memoizedValidate
    });
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            'password',
            className,
            showError && 'error'
        ].filter(Boolean).join(' '),
        style: {
            ...style,
            width
        }
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        message: errorMessage,
        showError: showError
    }), /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: `field-${path.replace(/\./g, '__')}`,
        label: label,
        required: required
    }), /*#__PURE__*/ _react.default.createElement("input", {
        autoComplete: autoComplete,
        disabled: formProcessing || disabled,
        id: `field-${path.replace(/\./g, '__')}`,
        name: path,
        onChange: setValue,
        type: "password",
        value: value || ''
    }));
};
const _default = (0, _withCondition.default)(Password);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1Bhc3N3b3JkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IHBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJ1xuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJ1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJ1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJ1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbidcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuaW1wb3J0IHsgZmllbGRCYXNlQ2xhc3MgfSBmcm9tICcuLi9zaGFyZWQnXG5cbmNvbnN0IFBhc3N3b3JkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYXV0b0NvbXBsZXRlLFxuICAgIGNsYXNzTmFtZSxcbiAgICBkaXNhYmxlZCxcbiAgICBsYWJlbCxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIHJlcXVpcmVkLFxuICAgIHN0eWxlLFxuICAgIHZhbGlkYXRlID0gcGFzc3dvcmQsXG4gICAgd2lkdGgsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWVcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdmFsaWRhdGUodmFsdWUsIHsgLi4ub3B0aW9ucywgcmVxdWlyZWQgfSlcbiAgICAgIHJldHVybiB2YWxpZGF0aW9uUmVzdWx0XG4gICAgfSxcbiAgICBbdmFsaWRhdGUsIHJlcXVpcmVkXSxcbiAgKVxuXG4gIGNvbnN0IHsgZXJyb3JNZXNzYWdlLCBmb3JtUHJvY2Vzc2luZywgc2V0VmFsdWUsIHNob3dFcnJvciwgdmFsdWUgfSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtbZmllbGRCYXNlQ2xhc3MsICdwYXNzd29yZCcsIGNsYXNzTmFtZSwgc2hvd0Vycm9yICYmICdlcnJvciddXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEVycm9yIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX0gc2hvd0Vycm9yPXtzaG93RXJyb3J9IC8+XG4gICAgICA8TGFiZWwgaHRtbEZvcj17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH0gbGFiZWw9e2xhYmVsfSByZXF1aXJlZD17cmVxdWlyZWR9IC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAgIGRpc2FibGVkPXtmb3JtUHJvY2Vzc2luZyB8fCBkaXNhYmxlZH1cbiAgICAgICAgaWQ9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2csICdfXycpfWB9XG4gICAgICAgIG5hbWU9e3BhdGh9XG4gICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgdmFsdWU9eyh2YWx1ZSBhcyBzdHJpbmcpIHx8ICcnfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKFBhc3N3b3JkKVxuIl0sIm5hbWVzIjpbIlBhc3N3b3JkIiwicHJvcHMiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJsYWJlbCIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwicmVxdWlyZWQiLCJzdHlsZSIsInZhbGlkYXRlIiwicGFzc3dvcmQiLCJ3aWR0aCIsIm1lbW9pemVkVmFsaWRhdGUiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwib3B0aW9ucyIsInZhbGlkYXRpb25SZXN1bHQiLCJlcnJvck1lc3NhZ2UiLCJmb3JtUHJvY2Vzc2luZyIsInNldFZhbHVlIiwic2hvd0Vycm9yIiwidXNlRmllbGQiLCJkaXYiLCJmaWVsZEJhc2VDbGFzcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiRXJyb3IiLCJtZXNzYWdlIiwiTGFiZWwiLCJodG1sRm9yIiwicmVwbGFjZSIsImlucHV0IiwiaWQiLCJvbkNoYW5nZSIsInR5cGUiLCJ3aXRoQ29uZGl0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBa0VBOzs7ZUFBQTs7OytEQWxFbUM7NkJBSVY7OERBQ1A7OERBQ0E7aUVBQ0c7c0VBQ0s7UUFDbkI7d0JBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixNQUFNQSxXQUE0QixDQUFDQztJQUNqQyxNQUFNLEVBQ0pDLElBQUksRUFDSkMsWUFBWSxFQUNaQyxTQUFTLEVBQ1RDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxNQUFNQyxhQUFhLEVBQ25CQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsV0FBV0MscUJBQVEsRUFDbkJDLEtBQUssRUFDTixHQUFHWjtJQUVKLE1BQU1NLE9BQU9DLGlCQUFpQk47SUFFOUIsTUFBTVksbUJBQW1CQyxJQUFBQSxrQkFBVyxFQUNsQyxDQUFDQyxPQUFPQztRQUNOLE1BQU1DLG1CQUFtQlAsU0FBU0ssT0FBTztZQUFFLEdBQUdDLE9BQU87WUFBRVI7UUFBUztRQUNoRSxPQUFPUztJQUNULEdBQ0E7UUFBQ1A7UUFBVUY7S0FBUztJQUd0QixNQUFNLEVBQUVVLFlBQVksRUFBRUMsY0FBYyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRU4sS0FBSyxFQUFFLEdBQUdPLElBQUFBLGlCQUFRLEVBQUM7UUFDNUVoQjtRQUNBSSxVQUFVRztJQUNaO0lBRUEscUJBQ0UsNkJBQUNVO1FBQ0NwQixXQUFXO1lBQUNxQixzQkFBYztZQUFFO1lBQVlyQjtZQUFXa0IsYUFBYTtTQUFRLENBQ3JFSSxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztRQUNSbEIsT0FBTztZQUNMLEdBQUdBLEtBQUs7WUFDUkc7UUFDRjtxQkFFQSw2QkFBQ2dCLGNBQUs7UUFBQ0MsU0FBU1g7UUFBY0csV0FBV0E7c0JBQ3pDLDZCQUFDUyxjQUFLO1FBQUNDLFNBQVMsQ0FBQyxNQUFNLEVBQUV6QixLQUFLMEIsT0FBTyxDQUFDLE9BQU8sTUFBTSxDQUFDO1FBQUUzQixPQUFPQTtRQUFPRyxVQUFVQTtzQkFDOUUsNkJBQUN5QjtRQUNDL0IsY0FBY0E7UUFDZEUsVUFBVWUsa0JBQWtCZjtRQUM1QjhCLElBQUksQ0FBQyxNQUFNLEVBQUU1QixLQUFLMEIsT0FBTyxDQUFDLE9BQU8sTUFBTSxDQUFDO1FBQ3hDL0IsTUFBTUs7UUFDTjZCLFVBQVVmO1FBQ1ZnQixNQUFLO1FBQ0xyQixPQUFPLEFBQUNBLFNBQW9COztBQUlwQztNQUVBLFdBQWVzQixJQUFBQSxzQkFBYSxFQUFDdEMifQ==