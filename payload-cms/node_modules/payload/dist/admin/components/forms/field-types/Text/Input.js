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
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../../utilities/getTranslation");
const _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../elements/ReactSelect"));
const _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
const _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
const _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
const _shared = require("../shared");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TextInput = (props)=>{
    const { Error, Label, afterInput, beforeInput, className, description, errorMessage, hasMany, inputRef, label, maxRows, minRows, onChange, onKeyDown, path, placeholder, readOnly, required, rtl, showError, style, value, valueToRender, width } = props;
    const { i18n, t } = (0, _reacti18next.useTranslation)();
    const ErrorComp = Error || _Error.default;
    const LabelComp = Label || _Label.default;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            'text',
            className,
            showError && 'error',
            readOnly && 'read-only',
            hasMany && 'has-many'
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
        })), hasMany ? /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        className: `field-${path.replace(/\./g, '__')}`,
        disabled: readOnly,
        filterOption: (option, rawInput)=>{
            const isOverHasMany = Array.isArray(value) && value.length >= maxRows;
            return !isOverHasMany;
        },
        isClearable: true,
        isCreatable: true,
        isMulti: true,
        isSortable: true,
        noOptionsMessage: ({ inputValue })=>{
            const isOverHasMany = Array.isArray(value) && value.length >= maxRows;
            if (isOverHasMany) {
                return t('validation:limitReached', {
                    max: maxRows,
                    value: value.length + 1
                });
            }
            return null;
        },
        onChange: onChange,
        options: [],
        placeholder: t('general:enterAValue'),
        showError: showError,
        value: valueToRender
    }) : /*#__PURE__*/ _react.default.createElement("input", {
        "data-rtl": rtl,
        disabled: readOnly,
        id: `field-${path.replace(/\./g, '__')}`,
        name: path,
        onChange: onChange,
        onKeyDown: onKeyDown,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        ref: inputRef,
        type: "text",
        value: value || ''
    }), Array.isArray(afterInput) && afterInput.map((Component, i)=>/*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        }))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        className: `field-description-${path.replace(/\./g, '__')}`,
        description: description,
        path: path,
        value: value
    }));
};
const _default = TextInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHQvSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IFRleHRGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IE9wdGlvbiB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1JlYWN0U2VsZWN0L3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBEZXNjcmlwdGlvbiB9IGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24vdHlwZXMnXG5cbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IFJlYWN0U2VsZWN0IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1JlYWN0U2VsZWN0J1xuaW1wb3J0IERlZmF1bHRFcnJvciBmcm9tICcuLi8uLi9FcnJvcidcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nXG5pbXBvcnQgRGVmYXVsdExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJ1xuaW1wb3J0IHsgZmllbGRCYXNlQ2xhc3MgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuZXhwb3J0IHR5cGUgVGV4dElucHV0UHJvcHMgPSBPbWl0PFRleHRGaWVsZCwgJ3R5cGUnPiAmIHtcbiAgRXJyb3I/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgTGFiZWw/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgYWZ0ZXJJbnB1dD86IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PltdXG4gIGJlZm9yZUlucHV0PzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+W11cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogRGVzY3JpcHRpb25cbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nXG4gIGhhc01hbnk/OiBib29sZWFuXG4gIGlucHV0UmVmPzogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PlxuICBvbkNoYW5nZT86IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxuICBvbktleURvd24/OiBSZWFjdC5LZXlib2FyZEV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PlxuICBwYXRoOiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgc3RyaW5nXG4gIHJlYWRPbmx5PzogYm9vbGVhblxuICByZXF1aXJlZD86IGJvb2xlYW5cbiAgcnRsPzogYm9vbGVhblxuICBzaG93RXJyb3I/OiBib29sZWFuXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICB2YWx1ZT86IHN0cmluZ1xuICB2YWx1ZVRvUmVuZGVyPzogT3B0aW9uW11cbiAgd2lkdGg/OiBzdHJpbmdcbn1cblxuY29uc3QgVGV4dElucHV0OiBSZWFjdC5GQzxUZXh0SW5wdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIEVycm9yLFxuICAgIExhYmVsLFxuICAgIGFmdGVySW5wdXQsXG4gICAgYmVmb3JlSW5wdXQsXG4gICAgY2xhc3NOYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBoYXNNYW55LFxuICAgIGlucHV0UmVmLFxuICAgIGxhYmVsLFxuICAgIG1heFJvd3MsXG4gICAgbWluUm93cyxcbiAgICBvbkNoYW5nZSxcbiAgICBvbktleURvd24sXG4gICAgcGF0aCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICByZWFkT25seSxcbiAgICByZXF1aXJlZCxcbiAgICBydGwsXG4gICAgc2hvd0Vycm9yLFxuICAgIHN0eWxlLFxuICAgIHZhbHVlLFxuICAgIHZhbHVlVG9SZW5kZXIsXG4gICAgd2lkdGgsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgaTE4biwgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IEVycm9yQ29tcCA9IEVycm9yIHx8IERlZmF1bHRFcnJvclxuICBjb25zdCBMYWJlbENvbXAgPSBMYWJlbCB8fCBEZWZhdWx0TGFiZWxcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBmaWVsZEJhc2VDbGFzcyxcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICAgICAgICByZWFkT25seSAmJiAncmVhZC1vbmx5JyxcbiAgICAgICAgaGFzTWFueSAmJiAnaGFzLW1hbnknLFxuICAgICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFcnJvckNvbXAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfSBzaG93RXJyb3I9e3Nob3dFcnJvcn0gLz5cbiAgICAgIDxMYWJlbENvbXAgaHRtbEZvcj17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH0gbGFiZWw9e2xhYmVsfSByZXF1aXJlZD17cmVxdWlyZWR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAge0FycmF5LmlzQXJyYXkoYmVmb3JlSW5wdXQpICYmIGJlZm9yZUlucHV0Lm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICB7aGFzTWFueSA/IChcbiAgICAgICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgIGZpbHRlck9wdGlvbj17KG9wdGlvbiwgcmF3SW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNPdmVySGFzTWFueSA9IEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+PSBtYXhSb3dzXG4gICAgICAgICAgICAgIHJldHVybiAhaXNPdmVySGFzTWFueVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgICAgICBpc0NyZWF0YWJsZVxuICAgICAgICAgICAgaXNNdWx0aVxuICAgICAgICAgICAgaXNTb3J0YWJsZVxuICAgICAgICAgICAgbm9PcHRpb25zTWVzc2FnZT17KHsgaW5wdXRWYWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzT3Zlckhhc01hbnkgPSBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPj0gbWF4Um93c1xuICAgICAgICAgICAgICBpZiAoaXNPdmVySGFzTWFueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOmxpbWl0UmVhY2hlZCcsIHsgbWF4OiBtYXhSb3dzLCB2YWx1ZTogdmFsdWUubGVuZ3RoICsgMSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgb3B0aW9ucz17W119XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnZ2VuZXJhbDplbnRlckFWYWx1ZScpfVxuICAgICAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVUb1JlbmRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgZGF0YS1ydGw9e3J0bH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgIGlkPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfVxuICAgICAgICAgICAgbmFtZT17cGF0aH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2dldFRyYW5zbGF0aW9uKHBsYWNlaG9sZGVyLCBpMThuKX1cbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge0FycmF5LmlzQXJyYXkoYWZ0ZXJJbnB1dCkgJiYgYWZ0ZXJJbnB1dC5tYXAoKENvbXBvbmVudCwgaSkgPT4gPENvbXBvbmVudCBrZXk9e2l9IC8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQtZGVzY3JpcHRpb24tJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0XG4iXSwibmFtZXMiOlsiVGV4dElucHV0IiwicHJvcHMiLCJFcnJvciIsIkxhYmVsIiwiYWZ0ZXJJbnB1dCIsImJlZm9yZUlucHV0IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJlcnJvck1lc3NhZ2UiLCJoYXNNYW55IiwiaW5wdXRSZWYiLCJsYWJlbCIsIm1heFJvd3MiLCJtaW5Sb3dzIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJwYXRoIiwicGxhY2Vob2xkZXIiLCJyZWFkT25seSIsInJlcXVpcmVkIiwicnRsIiwic2hvd0Vycm9yIiwic3R5bGUiLCJ2YWx1ZSIsInZhbHVlVG9SZW5kZXIiLCJ3aWR0aCIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJFcnJvckNvbXAiLCJEZWZhdWx0RXJyb3IiLCJMYWJlbENvbXAiLCJEZWZhdWx0TGFiZWwiLCJkaXYiLCJmaWVsZEJhc2VDbGFzcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwibWVzc2FnZSIsImh0bWxGb3IiLCJyZXBsYWNlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiQ29tcG9uZW50IiwiaSIsImtleSIsIlJlYWN0U2VsZWN0IiwiZGlzYWJsZWQiLCJmaWx0ZXJPcHRpb24iLCJvcHRpb24iLCJyYXdJbnB1dCIsImlzT3Zlckhhc01hbnkiLCJsZW5ndGgiLCJpc0NsZWFyYWJsZSIsImlzQ3JlYXRhYmxlIiwiaXNNdWx0aSIsImlzU29ydGFibGUiLCJub09wdGlvbnNNZXNzYWdlIiwiaW5wdXRWYWx1ZSIsIm1heCIsIm9wdGlvbnMiLCJpbnB1dCIsImRhdGEtcnRsIiwiaWQiLCJuYW1lIiwiZ2V0VHJhbnNsYXRpb24iLCJyZWYiLCJ0eXBlIiwiRmllbGREZXNjcmlwdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBa0pBOzs7ZUFBQTs7OzhEQWhKa0I7OEJBQ2E7Z0NBTUE7b0VBQ1A7OERBQ0M7eUVBQ0k7OERBQ0o7d0JBQ007UUFDeEI7Ozs7OztBQTBC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