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
const _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
const _context = require("../../Form/context");
const _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
const _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
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
const ConfirmPassword = (props)=>{
    const { disabled } = props;
    const password = (0, _context.useFormFields)(([fields])=>fields.password);
    const { t } = (0, _reacti18next.useTranslation)('fields');
    const validate = (0, _react.useCallback)((value)=>{
        if (!value) {
            return t('validation:required');
        }
        if (value === password?.value) {
            return true;
        }
        return t('passwordsDoNotMatch');
    }, [
        password,
        t
    ]);
    const { errorMessage, setValue, showError, value } = (0, _useField.default)({
        disableFormData: true,
        path: 'confirm-password',
        validate
    });
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            'confirm-password',
            showError && 'error'
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        message: errorMessage,
        showError: showError
    }), /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: "field-confirm-password",
        label: t('authentication:confirmPassword'),
        required: true
    }), /*#__PURE__*/ _react.default.createElement("input", {
        autoComplete: "off",
        disabled: !!disabled,
        id: "field-confirm-password",
        name: "confirm-password",
        onChange: setValue,
        type: "password",
        value: value || ''
    }));
};
const _default = ConfirmPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NvbmZpcm1QYXNzd29yZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vRm9ybS90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InXG5pbXBvcnQgeyB1c2VGb3JtRmllbGRzIH0gZnJvbSAnLi4vLi4vRm9ybS9jb250ZXh0J1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJ1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5pbXBvcnQgeyBmaWVsZEJhc2VDbGFzcyB9IGZyb20gJy4uL3NoYXJlZCdcblxuY29uc3QgQ29uZmlybVBhc3N3b3JkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gcHJvcHNcblxuICBjb25zdCBwYXNzd29yZCA9IHVzZUZvcm1GaWVsZHM8Rm9ybUZpZWxkPigoW2ZpZWxkc10pID0+IGZpZWxkcy5wYXNzd29yZClcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZmllbGRzJylcblxuICBjb25zdCB2YWxpZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOnJlcXVpcmVkJylcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlID09PSBwYXNzd29yZD8udmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHQoJ3Bhc3N3b3Jkc0RvTm90TWF0Y2gnKVxuICAgIH0sXG4gICAgW3Bhc3N3b3JkLCB0XSxcbiAgKVxuXG4gIGNvbnN0IHsgZXJyb3JNZXNzYWdlLCBzZXRWYWx1ZSwgc2hvd0Vycm9yLCB2YWx1ZSB9ID0gdXNlRmllbGQoe1xuICAgIGRpc2FibGVGb3JtRGF0YTogdHJ1ZSxcbiAgICBwYXRoOiAnY29uZmlybS1wYXNzd29yZCcsXG4gICAgdmFsaWRhdGUsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tmaWVsZEJhc2VDbGFzcywgJ2NvbmZpcm0tcGFzc3dvcmQnLCBzaG93RXJyb3IgJiYgJ2Vycm9yJ11cbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAuam9pbignICcpfVxuICAgID5cbiAgICAgIDxFcnJvciBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9IHNob3dFcnJvcj17c2hvd0Vycm9yfSAvPlxuICAgICAgPExhYmVsXG4gICAgICAgIGh0bWxGb3I9XCJmaWVsZC1jb25maXJtLXBhc3N3b3JkXCJcbiAgICAgICAgbGFiZWw9e3QoJ2F1dGhlbnRpY2F0aW9uOmNvbmZpcm1QYXNzd29yZCcpfVxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICBkaXNhYmxlZD17ISFkaXNhYmxlZH1cbiAgICAgICAgaWQ9XCJmaWVsZC1jb25maXJtLXBhc3N3b3JkXCJcbiAgICAgICAgbmFtZT1cImNvbmZpcm0tcGFzc3dvcmRcIlxuICAgICAgICBvbkNoYW5nZT17c2V0VmFsdWV9XG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIHZhbHVlPXsodmFsdWUgYXMgc3RyaW5nKSB8fCAnJ31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybVBhc3N3b3JkXG4iXSwibmFtZXMiOlsiQ29uZmlybVBhc3N3b3JkIiwicHJvcHMiLCJkaXNhYmxlZCIsInBhc3N3b3JkIiwidXNlRm9ybUZpZWxkcyIsImZpZWxkcyIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInZhbGlkYXRlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsInNldFZhbHVlIiwic2hvd0Vycm9yIiwidXNlRmllbGQiLCJkaXNhYmxlRm9ybURhdGEiLCJwYXRoIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmllbGRCYXNlQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkVycm9yIiwibWVzc2FnZSIsIkxhYmVsIiwiaHRtbEZvciIsImxhYmVsIiwicmVxdWlyZWQiLCJpbnB1dCIsImF1dG9Db21wbGV0ZSIsImlkIiwibmFtZSIsIm9uQ2hhbmdlIiwidHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBaUVBOzs7ZUFBQTs7OytEQWpFbUM7OEJBQ0o7OERBS2I7eUJBQ1k7OERBQ1o7aUVBQ0c7UUFDZDt3QkFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLE1BQU1BLGtCQUFtQyxDQUFDQztJQUN4QyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRDtJQUVyQixNQUFNRSxXQUFXQyxJQUFBQSxzQkFBYSxFQUFZLENBQUMsQ0FBQ0MsT0FBTyxHQUFLQSxPQUFPRixRQUFRO0lBQ3ZFLE1BQU0sRUFBRUcsQ0FBQyxFQUFFLEdBQUdDLElBQUFBLDRCQUFjLEVBQUM7SUFFN0IsTUFBTUMsV0FBV0MsSUFBQUEsa0JBQVcsRUFDMUIsQ0FBQ0M7UUFDQyxJQUFJLENBQUNBLE9BQU87WUFDVixPQUFPSixFQUFFO1FBQ1g7UUFFQSxJQUFJSSxVQUFVUCxVQUFVTyxPQUFPO1lBQzdCLE9BQU87UUFDVDtRQUVBLE9BQU9KLEVBQUU7SUFDWCxHQUNBO1FBQUNIO1FBQVVHO0tBQUU7SUFHZixNQUFNLEVBQUVLLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVILEtBQUssRUFBRSxHQUFHSSxJQUFBQSxpQkFBUSxFQUFDO1FBQzVEQyxpQkFBaUI7UUFDakJDLE1BQU07UUFDTlI7SUFDRjtJQUVBLHFCQUNFLDZCQUFDUztRQUNDQyxXQUFXO1lBQUNDLHNCQUFjO1lBQUU7WUFBb0JOLGFBQWE7U0FBUSxDQUNsRU8sTUFBTSxDQUFDQyxTQUNQQyxJQUFJLENBQUM7cUJBRVIsNkJBQUNDLGNBQUs7UUFBQ0MsU0FBU2I7UUFBY0UsV0FBV0E7c0JBQ3pDLDZCQUFDWSxjQUFLO1FBQ0pDLFNBQVE7UUFDUkMsT0FBT3JCLEVBQUU7UUFDVHNCLFVBQUFBO3NCQUVGLDZCQUFDQztRQUNDQyxjQUFhO1FBQ2I1QixVQUFVLENBQUMsQ0FBQ0E7UUFDWjZCLElBQUc7UUFDSEMsTUFBSztRQUNMQyxVQUFVckI7UUFDVnNCLE1BQUs7UUFDTHhCLE9BQU8sQUFBQ0EsU0FBb0I7O0FBSXBDO01BRUEsV0FBZVYifQ==