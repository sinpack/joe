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
const baseClass = 'point';
const PointField = (props)=>{
    const { name, admin: { className, components: { Error, Label, afterInput, beforeInput } = {}, condition, description, placeholder, readOnly, step, style, width } = {}, label, path: pathFromProps, required, validate = _validations.point } = props;
    const ErrorComp = Error || _Error.default;
    const LabelComp = Label || _Label.default;
    const path = pathFromProps || name;
    const { i18n, t } = (0, _reacti18next.useTranslation)('fields');
    const memoizedValidate = (0, _react.useCallback)((value, options)=>{
        return validate(value, {
            ...options,
            required
        });
    }, [
        validate,
        required
    ]);
    const { errorMessage, setValue, showError, value = [
        null,
        null
    ] } = (0, _useField.default)({
        condition,
        path,
        validate: memoizedValidate
    });
    const handleChange = (0, _react.useCallback)((e, index)=>{
        let val = parseFloat(e.target.value);
        if (Number.isNaN(val)) {
            val = e.target.value;
        }
        const coordinates = [
            ...value
        ];
        coordinates[index] = val;
        setValue(coordinates);
    }, [
        setValue,
        value
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            baseClass,
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
    }), /*#__PURE__*/ _react.default.createElement("ul", {
        className: `${baseClass}__wrap`
    }, /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement(LabelComp, {
        htmlFor: `field-longitude-${path.replace(/\./g, '__')}`,
        label: `${(0, _getTranslation.getTranslation)(label || name, i18n)} - ${t('longitude')}`,
        required: required
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "input-wrapper"
    }, Array.isArray(beforeInput) && beforeInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), /*#__PURE__*/ _react.default.createElement("input", {
        disabled: readOnly,
        id: `field-longitude-${path.replace(/\./g, '__')}`,
        name: `${path}.longitude`,
        onChange: (e)=>handleChange(e, 0),
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        step: step,
        type: "number",
        value: value && typeof value[0] === 'number' ? value[0] : ''
    }), Array.isArray(afterInput) && afterInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })))), /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement(LabelComp, {
        htmlFor: `field-latitude-${path.replace(/\./g, '__')}`,
        label: `${(0, _getTranslation.getTranslation)(label || name, i18n)} - ${t('latitude')}`,
        required: required
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "input-wrapper"
    }, Array.isArray(beforeInput) && beforeInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        })), /*#__PURE__*/ _react.default.createElement("input", {
        disabled: readOnly,
        id: `field-latitude-${path.replace(/\./g, '__')}`,
        name: `${path}.latitude`,
        onChange: (e)=>handleChange(e, 1),
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        step: step,
        type: "number",
        value: value && typeof value[1] === 'number' ? value[1] : ''
    }), Array.isArray(afterInput) && afterInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        }))))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description,
        path: path,
        value: value
    }));
};
const _default = (0, _withCondition.default)(PointField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1BvaW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IHBvaW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJ1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgRGVmYXVsdEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJ1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbidcbmltcG9ydCBEZWZhdWx0TGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnXG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnXG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJ1xuaW1wb3J0IHsgZmllbGRCYXNlQ2xhc3MgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3BvaW50J1xuXG5jb25zdCBQb2ludEZpZWxkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYWRtaW46IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbXBvbmVudHM6IHsgRXJyb3IsIExhYmVsLCBhZnRlcklucHV0LCBiZWZvcmVJbnB1dCB9ID0ge30sXG4gICAgICBjb25kaXRpb24sXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmVhZE9ubHksXG4gICAgICBzdGVwLFxuICAgICAgc3R5bGUsXG4gICAgICB3aWR0aCxcbiAgICB9ID0ge30sXG4gICAgbGFiZWwsXG4gICAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgICByZXF1aXJlZCxcbiAgICB2YWxpZGF0ZSA9IHBvaW50LFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBFcnJvckNvbXAgPSBFcnJvciB8fCBEZWZhdWx0RXJyb3JcbiAgY29uc3QgTGFiZWxDb21wID0gTGFiZWwgfHwgRGVmYXVsdExhYmVsXG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZVxuXG4gIGNvbnN0IHsgaTE4biwgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpXG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkIH0pXG4gICAgfSxcbiAgICBbdmFsaWRhdGUsIHJlcXVpcmVkXSxcbiAgKVxuXG4gIGNvbnN0IHtcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgc2V0VmFsdWUsXG4gICAgc2hvd0Vycm9yLFxuICAgIHZhbHVlID0gW251bGwsIG51bGxdLFxuICB9ID0gdXNlRmllbGQ8W251bWJlciwgbnVtYmVyXT4oe1xuICAgIGNvbmRpdGlvbixcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlLCBpbmRleDogMCB8IDEpID0+IHtcbiAgICAgIGxldCB2YWwgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgaWYgKE51bWJlci5pc05hTih2YWwpKSB7XG4gICAgICAgIHZhbCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IFsuLi52YWx1ZV1cbiAgICAgIGNvb3JkaW5hdGVzW2luZGV4XSA9IHZhbFxuICAgICAgc2V0VmFsdWUoY29vcmRpbmF0ZXMpXG4gICAgfSxcbiAgICBbc2V0VmFsdWUsIHZhbHVlXSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgIGZpZWxkQmFzZUNsYXNzLFxuICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgICAgIHJlYWRPbmx5ICYmICdyZWFkLW9ubHknLFxuICAgICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFcnJvckNvbXAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfSBzaG93RXJyb3I9e3Nob3dFcnJvcn0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMYWJlbENvbXBcbiAgICAgICAgICAgIGh0bWxGb3I9e2BmaWVsZC1sb25naXR1ZGUtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfVxuICAgICAgICAgICAgbGFiZWw9e2Ake2dldFRyYW5zbGF0aW9uKGxhYmVsIHx8IG5hbWUsIGkxOG4pfSAtICR7dCgnbG9uZ2l0dWRlJyl9YH1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoYmVmb3JlSW5wdXQpICYmIGJlZm9yZUlucHV0Lm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgaWQ9e2BmaWVsZC1sb25naXR1ZGUtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfVxuICAgICAgICAgICAgICBuYW1lPXtgJHtwYXRofS5sb25naXR1ZGVgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAwKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2dldFRyYW5zbGF0aW9uKHBsYWNlaG9sZGVyLCBpMThuKX1cbiAgICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZSAmJiB0eXBlb2YgdmFsdWVbMF0gPT09ICdudW1iZXInID8gdmFsdWVbMF0gOiAnJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7QXJyYXkuaXNBcnJheShhZnRlcklucHV0KSAmJiBhZnRlcklucHV0Lm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExhYmVsQ29tcFxuICAgICAgICAgICAgaHRtbEZvcj17YGZpZWxkLWxhdGl0dWRlLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH1cbiAgICAgICAgICAgIGxhYmVsPXtgJHtnZXRUcmFuc2xhdGlvbihsYWJlbCB8fCBuYW1lLCBpMThuKX0gLSAke3QoJ2xhdGl0dWRlJyl9YH1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoYmVmb3JlSW5wdXQpICYmIGJlZm9yZUlucHV0Lm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgaWQ9e2BmaWVsZC1sYXRpdHVkZS0ke3BhdGgucmVwbGFjZSgvXFwuL2csICdfXycpfWB9XG4gICAgICAgICAgICAgIG5hbWU9e2Ake3BhdGh9LmxhdGl0dWRlYH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgMSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgJiYgdHlwZW9mIHZhbHVlWzFdID09PSAnbnVtYmVyJyA/IHZhbHVlWzFdIDogJyd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoYWZ0ZXJJbnB1dCkgJiYgYWZ0ZXJJbnB1dC5tYXAoKENvbXBvbmVudCwgaSkgPT4gPENvbXBvbmVudCBrZXk9e2l9IC8+KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8RmllbGREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IHBhdGg9e3BhdGh9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKFBvaW50RmllbGQpXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiUG9pbnRGaWVsZCIsInByb3BzIiwibmFtZSIsImFkbWluIiwiY2xhc3NOYW1lIiwiY29tcG9uZW50cyIsIkVycm9yIiwiTGFiZWwiLCJhZnRlcklucHV0IiwiYmVmb3JlSW5wdXQiLCJjb25kaXRpb24iLCJkZXNjcmlwdGlvbiIsInBsYWNlaG9sZGVyIiwicmVhZE9ubHkiLCJzdGVwIiwic3R5bGUiLCJ3aWR0aCIsImxhYmVsIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwicG9pbnQiLCJFcnJvckNvbXAiLCJEZWZhdWx0RXJyb3IiLCJMYWJlbENvbXAiLCJEZWZhdWx0TGFiZWwiLCJpMThuIiwidCIsInVzZVRyYW5zbGF0aW9uIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcHRpb25zIiwiZXJyb3JNZXNzYWdlIiwic2V0VmFsdWUiLCJzaG93RXJyb3IiLCJ1c2VGaWVsZCIsImhhbmRsZUNoYW5nZSIsImUiLCJpbmRleCIsInZhbCIsInBhcnNlRmxvYXQiLCJ0YXJnZXQiLCJOdW1iZXIiLCJpc05hTiIsImNvb3JkaW5hdGVzIiwiZGl2IiwiZmllbGRCYXNlQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIm1lc3NhZ2UiLCJ1bCIsImxpIiwiaHRtbEZvciIsInJlcGxhY2UiLCJnZXRUcmFuc2xhdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIkNvbXBvbmVudCIsImkiLCJrZXkiLCJpbnB1dCIsImRpc2FibGVkIiwiaWQiLCJvbkNoYW5nZSIsInR5cGUiLCJGaWVsZERlc2NyaXB0aW9uIiwid2l0aENvbmRpdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTZJQTs7O2VBQUE7OzsrREE3SW1DOzhCQUNKOzZC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