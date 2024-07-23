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
const Email = (props)=>{
    const { name, admin: { autoComplete, className, components: { Error, Label, afterInput, beforeInput } = {}, condition, description, placeholder, readOnly, style, width } = {}, label, path: pathFromProps, required, validate = _validations.email } = props;
    const { i18n } = (0, _reacti18next.useTranslation)();
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
    const fieldType = (0, _useField.default)({
        condition,
        path,
        validate: memoizedValidate
    });
    const { errorMessage, setValue, showError, value } = fieldType;
    const ErrorComp = Error || _Error.default;
    const LabelComp = Label || _Label.default;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            'email',
            className,
            showError && 'error',
            readOnly && 'read-only'
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
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "input-wrapper"
    }, Array.isArray(beforeInput) && beforeInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), /*#__PURE__*/ _react.default.createElement("input", {
        autoComplete: autoComplete,
        disabled: Boolean(readOnly),
        id: `field-${path.replace(/\./g, '__')}`,
        name: path,
        onChange: setValue,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        type: "email",
        value: value || ''
    }), Array.isArray(afterInput) && afterInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        }))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description,
        path: path,
        value: value
    }));
};
const _default = (0, _withCondition.default)(Email);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0VtYWlsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IGVtYWlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJ1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgRGVmYXVsdEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJ1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbidcbmltcG9ydCBEZWZhdWx0TGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnXG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnXG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJ1xuaW1wb3J0IHsgZmllbGRCYXNlQ2xhc3MgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgRW1haWw6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBhZG1pbjoge1xuICAgICAgYXV0b0NvbXBsZXRlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29tcG9uZW50czogeyBFcnJvciwgTGFiZWwsIGFmdGVySW5wdXQsIGJlZm9yZUlucHV0IH0gPSB7fSxcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHt9LFxuICAgIGxhYmVsLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSBlbWFpbCxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZVxuXG4gIGNvbnN0IG1lbW9pemVkVmFsaWRhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi5vcHRpb25zLCByZXF1aXJlZCB9KVxuICAgIH0sXG4gICAgW3ZhbGlkYXRlLCByZXF1aXJlZF0sXG4gIClcblxuICBjb25zdCBmaWVsZFR5cGUgPSB1c2VGaWVsZCh7XG4gICAgY29uZGl0aW9uLFxuICAgIHBhdGgsXG4gICAgdmFsaWRhdGU6IG1lbW9pemVkVmFsaWRhdGUsXG4gIH0pXG5cbiAgY29uc3QgeyBlcnJvck1lc3NhZ2UsIHNldFZhbHVlLCBzaG93RXJyb3IsIHZhbHVlIH0gPSBmaWVsZFR5cGVcblxuICBjb25zdCBFcnJvckNvbXAgPSBFcnJvciB8fCBEZWZhdWx0RXJyb3JcbiAgY29uc3QgTGFiZWxDb21wID0gTGFiZWwgfHwgRGVmYXVsdExhYmVsXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tmaWVsZEJhc2VDbGFzcywgJ2VtYWlsJywgY2xhc3NOYW1lLCBzaG93RXJyb3IgJiYgJ2Vycm9yJywgcmVhZE9ubHkgJiYgJ3JlYWQtb25seSddXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEVycm9yQ29tcCBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9IHNob3dFcnJvcj17c2hvd0Vycm9yfSAvPlxuICAgICAgPExhYmVsQ29tcCBodG1sRm9yPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfSBsYWJlbD17bGFiZWx9IHJlcXVpcmVkPXtyZXF1aXJlZH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICB7QXJyYXkuaXNBcnJheShiZWZvcmVJbnB1dCkgJiYgYmVmb3JlSW5wdXQubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICAgIGRpc2FibGVkPXtCb29sZWFuKHJlYWRPbmx5KX1cbiAgICAgICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH1cbiAgICAgICAgICBuYW1lPXtwYXRofVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17Z2V0VHJhbnNsYXRpb24ocGxhY2Vob2xkZXIsIGkxOG4pfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgdmFsdWU9eyh2YWx1ZSBhcyBzdHJpbmcpIHx8ICcnfVxuICAgICAgICAvPlxuICAgICAgICB7QXJyYXkuaXNBcnJheShhZnRlcklucHV0KSAmJiBhZnRlcklucHV0Lm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgPC9kaXY+XG4gICAgICA8RmllbGREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IHBhdGg9e3BhdGh9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKEVtYWlsKVxuIl0sIm5hbWVzIjpbIkVtYWlsIiwicHJvcHMiLCJuYW1lIiwiYWRtaW4iLCJhdXRvQ29tcGxldGUiLCJjbGFzc05hbWUiLCJjb21wb25lbnRzIiwiRXJyb3IiLCJMYWJlbCIsImFmdGVySW5wdXQiLCJiZWZvcmVJbnB1dCIsImNvbmRpdGlvbiIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJyZWFkT25seSIsInN0eWxlIiwid2lkdGgiLCJsYWJlbCIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsImVtYWlsIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcHRpb25zIiwiZmllbGRUeXBlIiwidXNlRmllbGQiLCJlcnJvck1lc3NhZ2UiLCJzZXRWYWx1ZSIsInNob3dFcnJvciIsIkVycm9yQ29tcCIsIkRlZmF1bHRFcnJvciIsIkxhYmVsQ29tcCIsIkRlZmF1bHRMYWJlbCIsImRpdiIsImZpZWxkQmFzZUNsYXNzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJtZXNzYWdlIiwiaHRtbEZvciIsInJlcGxhY2UiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJDb21wb25lbnQiLCJpIiwia2V5IiwiaW5wdXQiLCJkaXNhYmxlZCIsImlkIiwib25DaGFuZ2UiLCJnZXRUcmFuc2xhdGlvbiIsInR5cGUiLCJGaWVsZERlc2NyaXB0aW9uIiwid2l0aENvbmRpdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF3RkE7OztlQUFBOzs7K0RBeEZtQzs4QkFDSjs2QkFJVDtnQ0FDUzs4REFDTjt5RUFDSTs4REFDSjtp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