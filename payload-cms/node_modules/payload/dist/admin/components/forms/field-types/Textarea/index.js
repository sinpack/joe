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
const _Config = require("../../../utilities/Config");
const _Locale = require("../../../utilities/Locale");
const _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
const _shared = require("../shared");
const _Input = /*#__PURE__*/ _interop_require_default(require("./Input"));
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
const Textarea = (props)=>{
    const { name, admin: { className, components: { Error, Label, afterInput, beforeInput } = {}, condition, description, placeholder, readOnly, rows, rtl, style, width } = {}, label, localized, maxLength, minLength, path: pathFromProps, required, validate = _validations.textarea } = props;
    const { i18n } = (0, _reacti18next.useTranslation)();
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
        required,
        maxLength,
        minLength
    ]);
    const { errorMessage, setValue, showError, value } = (0, _useField.default)({
        condition,
        path,
        validate: memoizedValidate
    });
    return /*#__PURE__*/ _react.default.createElement(_Input.default, {
        Error: Error,
        Label: Label,
        afterInput: afterInput,
        beforeInput: beforeInput,
        className: className,
        description: description,
        errorMessage: errorMessage,
        label: label,
        name: name,
        onChange: (e)=>{
            setValue(e.target.value);
        },
        path: path,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        readOnly: readOnly,
        required: required,
        rows: rows,
        rtl: isRTL,
        showError: showError,
        style: style,
        value: value,
        width: width
    });
};
const _default = (0, _withCondition.default)(Textarea);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHRhcmVhL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IHRleHRhcmVhIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJ1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSdcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCdcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nXG5pbXBvcnQgeyBpc0ZpZWxkUlRMIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0IFRleHRhcmVhSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBUZXh0YXJlYTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIGFkbWluOiB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjb21wb25lbnRzOiB7IEVycm9yLCBMYWJlbCwgYWZ0ZXJJbnB1dCwgYmVmb3JlSW5wdXQgfSA9IHt9LFxuICAgICAgY29uZGl0aW9uLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgcm93cyxcbiAgICAgIHJ0bCxcbiAgICAgIHN0eWxlLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHt9LFxuICAgIGxhYmVsLFxuICAgIGxvY2FsaXplZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgbWluTGVuZ3RoLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSB0ZXh0YXJlYSxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZVxuXG4gIGNvbnN0IGxvY2FsZSA9IHVzZUxvY2FsZSgpXG5cbiAgY29uc3QgeyBsb2NhbGl6YXRpb24gfSA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IGlzUlRMID0gaXNGaWVsZFJUTCh7XG4gICAgZmllbGRMb2NhbGl6ZWQ6IGxvY2FsaXplZCxcbiAgICBmaWVsZFJUTDogcnRsLFxuICAgIGxvY2FsZSxcbiAgICBsb2NhbGl6YXRpb25Db25maWc6IGxvY2FsaXphdGlvbiB8fCB1bmRlZmluZWQsXG4gIH0pXG4gIGNvbnN0IG1lbW9pemVkVmFsaWRhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi5vcHRpb25zLCBtYXhMZW5ndGgsIG1pbkxlbmd0aCwgcmVxdWlyZWQgfSlcbiAgICB9LFxuICAgIFt2YWxpZGF0ZSwgcmVxdWlyZWQsIG1heExlbmd0aCwgbWluTGVuZ3RoXSxcbiAgKVxuXG4gIGNvbnN0IHsgZXJyb3JNZXNzYWdlLCBzZXRWYWx1ZSwgc2hvd0Vycm9yLCB2YWx1ZSB9ID0gdXNlRmllbGQoe1xuICAgIGNvbmRpdGlvbixcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPFRleHRhcmVhSW5wdXRcbiAgICAgIEVycm9yPXtFcnJvcn1cbiAgICAgIExhYmVsPXtMYWJlbH1cbiAgICAgIGFmdGVySW5wdXQ9e2FmdGVySW5wdXR9XG4gICAgICBiZWZvcmVJbnB1dD17YmVmb3JlSW5wdXR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcbiAgICAgIH19XG4gICAgICBwYXRoPXtwYXRofVxuICAgICAgcGxhY2Vob2xkZXI9e2dldFRyYW5zbGF0aW9uKHBsYWNlaG9sZGVyLCBpMThuKX1cbiAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIHJvd3M9e3Jvd3N9XG4gICAgICBydGw9e2lzUlRMfVxuICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICB2YWx1ZT17dmFsdWUgYXMgc3RyaW5nfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgIC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oVGV4dGFyZWEpXG4iXSwibmFtZXMiOlsiVGV4dGFyZWEiLCJwcm9wcyIsIm5hbWUiLCJhZG1pbiIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJFcnJvciIsIkxhYmVsIiwiYWZ0ZXJJbnB1dCIsImJlZm9yZUlucHV0IiwiY29uZGl0aW9uIiwiZGVzY3JpcHRpb24iLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5Iiwicm93cyIsInJ0bCIsInN0eWxlIiwid2lkdGgiLCJsYWJlbCIsImxvY2FsaXplZCIsIm1heExlbmd0aCIsIm1pbkxlbmd0aCIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsInRleHRhcmVhIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwibG9jYWxlIiwidXNlTG9jYWxlIiwibG9jYWxpemF0aW9uIiwidXNlQ29uZmlnIiwiaXNSVEwiLCJpc0ZpZWxkUlRMIiwiZmllbGRMb2NhbGl6ZWQiLCJmaWVsZFJUTCIsImxvY2FsaXphdGlvbkNvbmZpZyIsInVuZGVmaW5lZCIsIm1lbW9pemVkVmFsaWRhdGUiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwib3B0aW9ucyIsImVycm9yTWVzc2FnZSIsInNldFZhbHVlIiwic2hvd0Vycm9yIiwidXNlRmllbGQiLCJUZXh0YXJlYUlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZ2V0VHJhbnNsYXRpb24iLCJ3aXRoQ29uZGl0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTRGQTs7O2VBQUE7OzsrREE1Rm1DOzhCQUNKOzZCQUlOO2dDQUNNO3dCQUNMO3dCQUNBO2lFQUNMO3NFQUNLO3dCQUNDOzhEQUNEO1FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFdBQTRCLENBQUNDO0lBQ2pDLE1BQU0sRUFDSkMsSUFBSSxFQUNKQyxPQUFPLEVBQ0xDLFNBQVMsRUFDVEMsWUFBWSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDMURDLFNBQVMsRUFDVEMsV0FBVyxFQUNYQyxXQUFXLEVBQ1hDLFFBQVEsRUFDUkMsSUFBSSxFQUNKQyxHQUFHLEVBQ0hDLEtBQUssRUFDTEMsS0FBSyxFQUNOLEdBQUcsQ0FBQyxDQUFDLEVBQ05DLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxTQUFTLEVBQ1RDLFNBQVMsRUFDVEMsTUFBTUMsYUFBYSxFQUNuQkMsUUFBUSxFQUNSQyxXQUFXQyxxQkFBUSxFQUNwQixHQUFHekI7SUFFSixNQUFNLEVBQUUwQixJQUFJLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWM7SUFFL0IsTUFBTU4sT0FBT0MsaUJBQWlCckI7SUFFOUIsTUFBTTJCLFNBQVNDLElBQUFBLGlCQUFTO0lBRXhCLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUdDLElBQUFBLGlCQUFTO0lBQ2xDLE1BQU1DLFFBQVFDLElBQUFBLGtCQUFVLEVBQUM7UUFDdkJDLGdCQUFnQmhCO1FBQ2hCaUIsVUFBVXJCO1FBQ1ZjO1FBQ0FRLG9CQUFvQk4sZ0JBQWdCTztJQUN0QztJQUNBLE1BQU1DLG1CQUFtQkMsSUFBQUEsa0JBQVcsRUFDbEMsQ0FBQ0MsT0FBT0M7UUFDTixPQUFPakIsU0FBU2dCLE9BQU87WUFBRSxHQUFHQyxPQUFPO1lBQUV0QjtZQUFXQztZQUFXRztRQUFTO0lBQ3RFLEdBQ0E7UUFBQ0M7UUFBVUQ7UUFBVUo7UUFBV0M7S0FBVTtJQUc1QyxNQUFNLEVBQUVzQixZQUFZLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFSixLQUFLLEVBQUUsR0FBR0ssSUFBQUEsaUJBQVEsRUFBQztRQUM1RHBDO1FBQ0FZO1FBQ0FHLFVBQVVjO0lBQ1o7SUFFQSxxQkFDRSw2QkFBQ1EsY0FBYTtRQUNaekMsT0FBT0E7UUFDUEMsT0FBT0E7UUFDUEMsWUFBWUE7UUFDWkMsYUFBYUE7UUFDYkwsV0FBV0E7UUFDWE8sYUFBYUE7UUFDYmdDLGNBQWNBO1FBQ2R6QixPQUFPQTtRQUNQaEIsTUFBTUE7UUFDTjhDLFVBQVUsQ0FBQ0M7WUFDVEwsU0FBU0ssRUFBRUMsTUFBTSxDQUFDVCxLQUFLO1FBQ3pCO1FBQ0FuQixNQUFNQTtRQUNOVixhQUFhdUMsSUFBQUEsOEJBQWMsRUFBQ3ZDLGFBQWFlO1FBQ3pDZCxVQUFVQTtRQUNWVyxVQUFVQTtRQUNWVixNQUFNQTtRQUNOQyxLQUFLa0I7UUFDTFksV0FBV0E7UUFDWDdCLE9BQU9BO1FBQ1B5QixPQUFPQTtRQUNQeEIsT0FBT0E7O0FBR2I7TUFDQSxXQUFlbUMsSUFBQUEsc0JBQWEsRUFBQ3BEIn0=