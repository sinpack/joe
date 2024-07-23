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
const _EditDepth = require("../../../utilities/EditDepth");
const _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
const _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
const _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
const _shared = require("../shared");
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
const baseClass = 'checkbox';
const Checkbox = (props)=>{
    const { name, admin: { className, components: { Error, Label, afterInput, beforeInput } = {}, condition, description, readOnly, style, width } = {}, disableFormData, label, onChange, path: pathFromProps, required, validate = _validations.checkbox } = props;
    const ErrorComp = Error || _Error.default;
    const { i18n } = (0, _reacti18next.useTranslation)();
    const path = pathFromProps || name;
    const editDepth = (0, _EditDepth.useEditDepth)();
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
        disableFormData,
        path,
        validate: memoizedValidate
    });
    const onToggle = (0, _react.useCallback)(()=>{
        if (!readOnly) {
            setValue(!value);
            if (typeof onChange === 'function') onChange(!value);
        }
    }, [
        onChange,
        readOnly,
        setValue,
        value
    ]);
    const fieldID = `field-${path.replace(/\./g, '__')}${editDepth > 1 ? `-${editDepth}` : ''}`;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            baseClass,
            showError && 'error',
            className,
            value && `${baseClass}--checked`,
            readOnly && `${baseClass}--read-only`
        ].filter(Boolean).join(' '),
        style: {
            ...style,
            width
        }
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__error-wrap`
    }, /*#__PURE__*/ _react.default.createElement(ErrorComp, {
        alignCaret: "left",
        message: errorMessage,
        showError: showError
    })), /*#__PURE__*/ _react.default.createElement(_Input.CheckboxInput, {
        Label: Label,
        afterInput: afterInput,
        beforeInput: beforeInput,
        checked: Boolean(value),
        id: fieldID,
        label: (0, _getTranslation.getTranslation)(label || name, i18n),
        name: path,
        onToggle: onToggle,
        readOnly: readOnly,
        required: required
    }), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description,
        path: path,
        value: value
    }));
};
const _default = (0, _withCondition.default)(Checkbox);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NoZWNrYm94L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IGNoZWNrYm94IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJ1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgeyB1c2VFZGl0RGVwdGggfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvRWRpdERlcHRoJ1xuaW1wb3J0IERlZmF1bHRFcnJvciBmcm9tICcuLi8uLi9FcnJvcidcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nXG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnXG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJ1xuaW1wb3J0IHsgZmllbGRCYXNlQ2xhc3MgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgeyBDaGVja2JveElucHV0IH0gZnJvbSAnLi9JbnB1dCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnY2hlY2tib3gnXG5cbmNvbnN0IENoZWNrYm94OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYWRtaW46IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbXBvbmVudHM6IHsgRXJyb3IsIExhYmVsLCBhZnRlcklucHV0LCBiZWZvcmVJbnB1dCB9ID0ge30sXG4gICAgICBjb25kaXRpb24sXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICB3aWR0aCxcbiAgICB9ID0ge30sXG4gICAgZGlzYWJsZUZvcm1EYXRhLFxuICAgIGxhYmVsLFxuICAgIG9uQ2hhbmdlLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSBjaGVja2JveCxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgRXJyb3JDb21wID0gRXJyb3IgfHwgRGVmYXVsdEVycm9yXG5cbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZVxuXG4gIGNvbnN0IGVkaXREZXB0aCA9IHVzZUVkaXREZXB0aCgpXG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkIH0pXG4gICAgfSxcbiAgICBbdmFsaWRhdGUsIHJlcXVpcmVkXSxcbiAgKVxuXG4gIGNvbnN0IHsgZXJyb3JNZXNzYWdlLCBzZXRWYWx1ZSwgc2hvd0Vycm9yLCB2YWx1ZSB9ID0gdXNlRmllbGQoe1xuICAgIGNvbmRpdGlvbixcbiAgICBkaXNhYmxlRm9ybURhdGEsXG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgfSlcblxuICBjb25zdCBvblRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIXJlYWRPbmx5KSB7XG4gICAgICBzZXRWYWx1ZSghdmFsdWUpXG4gICAgICBpZiAodHlwZW9mIG9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSBvbkNoYW5nZSghdmFsdWUpXG4gICAgfVxuICB9LCBbb25DaGFuZ2UsIHJlYWRPbmx5LCBzZXRWYWx1ZSwgdmFsdWVdKVxuXG4gIGNvbnN0IGZpZWxkSUQgPSBgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX0ke2VkaXREZXB0aCA+IDEgPyBgLSR7ZWRpdERlcHRofWAgOiAnJ31gXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgZmllbGRCYXNlQ2xhc3MsXG4gICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgdmFsdWUgJiYgYCR7YmFzZUNsYXNzfS0tY2hlY2tlZGAsXG4gICAgICAgIHJlYWRPbmx5ICYmIGAke2Jhc2VDbGFzc30tLXJlYWQtb25seWAsXG4gICAgICBdXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Vycm9yLXdyYXBgfT5cbiAgICAgICAgPEVycm9yQ29tcCBhbGlnbkNhcmV0PVwibGVmdFwiIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX0gc2hvd0Vycm9yPXtzaG93RXJyb3J9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDaGVja2JveElucHV0XG4gICAgICAgIExhYmVsPXtMYWJlbH1cbiAgICAgICAgYWZ0ZXJJbnB1dD17YWZ0ZXJJbnB1dH1cbiAgICAgICAgYmVmb3JlSW5wdXQ9e2JlZm9yZUlucHV0fVxuICAgICAgICBjaGVja2VkPXtCb29sZWFuKHZhbHVlKX1cbiAgICAgICAgaWQ9e2ZpZWxkSUR9XG4gICAgICAgIGxhYmVsPXtnZXRUcmFuc2xhdGlvbihsYWJlbCB8fCBuYW1lLCBpMThuKX1cbiAgICAgICAgbmFtZT17cGF0aH1cbiAgICAgICAgb25Ub2dnbGU9e29uVG9nZ2xlfVxuICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIC8+XG4gICAgICA8RmllbGREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IHBhdGg9e3BhdGh9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKENoZWNrYm94KVxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkNoZWNrYm94IiwicHJvcHMiLCJuYW1lIiwiYWRtaW4iLCJjbGFzc05hbWUiLCJjb21wb25lbnRzIiwiRXJyb3IiLCJMYWJlbCIsImFmdGVySW5wdXQiLCJiZWZvcmVJbnB1dCIsImNvbmRpdGlvbiIsImRlc2NyaXB0aW9uIiwicmVhZE9ubHkiLCJzdHlsZSIsIndpZHRoIiwiZGlzYWJsZUZvcm1EYXRhIiwibGFiZWwiLCJvbkNoYW5nZSIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsImNoZWNrYm94IiwiRXJyb3JDb21wIiwiRGVmYXVsdEVycm9yIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwiZWRpdERlcHRoIiwidXNlRWRpdERlcHRoIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcHRpb25zIiwiZXJyb3JNZXNzYWdlIiwic2V0VmFsdWUiLCJzaG93RXJyb3IiLCJ1c2VGaWVsZCIsIm9uVG9nZ2xlIiwiZmllbGRJRCIsInJlcGxhY2UiLCJkaXYiLCJmaWVsZEJhc2VDbGFzcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiYWxpZ25DYXJldCIsIm1lc3NhZ2UiLCJDaGVja2JveElucHV0IiwiY2hlY2tlZCIsImlkIiwiZ2V0VHJhbnNsYXRpb24iLCJGaWVsZERlc2NyaXB0aW9uIiwid2l0aENvbmRpdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoi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