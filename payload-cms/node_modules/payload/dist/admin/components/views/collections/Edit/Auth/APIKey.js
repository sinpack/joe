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
const _uuid = require("uuid");
const _validations = require("../../../../../../fields/validations");
const _CopyToClipboard = /*#__PURE__*/ _interop_require_default(require("../../../../elements/CopyToClipboard"));
const _GenerateConfirmation = /*#__PURE__*/ _interop_require_default(require("../../../../elements/GenerateConfirmation"));
const _context = require("../../../../forms/Form/context");
const _Label = /*#__PURE__*/ _interop_require_default(require("../../../../forms/Label"));
const _shared = require("../../../../forms/field-types/shared");
const _useField = /*#__PURE__*/ _interop_require_default(require("../../../../forms/useField"));
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
const path = 'apiKey';
const baseClass = 'api-key';
const APIKey = ({ enabled, readOnly })=>{
    const [initialAPIKey] = (0, _react.useState)((0, _uuid.v4)());
    const [highlightedField, setHighlightedField] = (0, _react.useState)(false);
    const { t } = (0, _reacti18next.useTranslation)();
    const apiKey = (0, _context.useFormFields)(([fields])=>fields[path]);
    const validate = (val)=>(0, _validations.text)(val, {
            data: {},
            maxLength: 48,
            minLength: 24,
            siblingData: {},
            t
        });
    const apiKeyValue = apiKey?.value;
    const APIKeyLabel = (0, _react.useMemo)(()=>/*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__label`
        }, /*#__PURE__*/ _react.default.createElement("span", null, "API Key"), /*#__PURE__*/ _react.default.createElement(_CopyToClipboard.default, {
            value: apiKeyValue
        })), [
        apiKeyValue
    ]);
    const fieldType = (0, _useField.default)({
        path: 'apiKey',
        validate
    });
    const highlightField = ()=>{
        if (highlightedField) {
            setHighlightedField(false);
        }
        setTimeout(()=>{
            setHighlightedField(true);
        }, 1);
    };
    const { setValue, value } = fieldType;
    (0, _react.useEffect)(()=>{
        if (!apiKeyValue && enabled) {
            setValue(initialAPIKey);
        }
        if (!enabled) {
            setValue(null);
        }
    }, [
        apiKeyValue,
        enabled,
        setValue,
        initialAPIKey
    ]);
    (0, _react.useEffect)(()=>{
        if (highlightedField) {
            setTimeout(()=>{
                setHighlightedField(false);
            }, 10000);
        }
    }, [
        highlightedField
    ]);
    if (!enabled) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            'api-key',
            'read-only'
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: path,
        label: APIKeyLabel
    }), /*#__PURE__*/ _react.default.createElement("input", {
        className: highlightedField ? 'highlight' : undefined,
        disabled: true,
        id: "apiKey",
        name: "apiKey",
        type: "text",
        value: value || ''
    })), !readOnly && /*#__PURE__*/ _react.default.createElement(_GenerateConfirmation.default, {
        highlightField: highlightField,
        setKey: ()=>setValue((0, _uuid.v4)())
    }));
};
const _default = APIKey;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvQXV0aC9BUElLZXkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuXG5pbXBvcnQgeyB0ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJ1xuaW1wb3J0IENvcHlUb0NsaXBib2FyZCBmcm9tICcuLi8uLi8uLi8uLi9lbGVtZW50cy9Db3B5VG9DbGlwYm9hcmQnXG5pbXBvcnQgR2VuZXJhdGVDb25maXJtYXRpb24gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvR2VuZXJhdGVDb25maXJtYXRpb24nXG5pbXBvcnQgeyB1c2VGb3JtRmllbGRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZm9ybXMvRm9ybS9jb250ZXh0J1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL0xhYmVsJ1xuaW1wb3J0IHsgZmllbGRCYXNlQ2xhc3MgfSBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9zaGFyZWQnXG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vLi4vLi4vZm9ybXMvdXNlRmllbGQnXG5cbmNvbnN0IHBhdGggPSAnYXBpS2V5J1xuY29uc3QgYmFzZUNsYXNzID0gJ2FwaS1rZXknXG5cbmNvbnN0IEFQSUtleTogUmVhY3QuRkM8eyBlbmFibGVkOiBib29sZWFuOyByZWFkT25seT86IGJvb2xlYW4gfT4gPSAoeyBlbmFibGVkLCByZWFkT25seSB9KSA9PiB7XG4gIGNvbnN0IFtpbml0aWFsQVBJS2V5XSA9IHVzZVN0YXRlKHV1aWR2NCgpKVxuICBjb25zdCBbaGlnaGxpZ2h0ZWRGaWVsZCwgc2V0SGlnaGxpZ2h0ZWRGaWVsZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgYXBpS2V5ID0gdXNlRm9ybUZpZWxkcygoW2ZpZWxkc10pID0+IGZpZWxkc1twYXRoXSlcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsKSA9PlxuICAgIHRleHQodmFsLCB7IGRhdGE6IHt9LCBtYXhMZW5ndGg6IDQ4LCBtaW5MZW5ndGg6IDI0LCBzaWJsaW5nRGF0YToge30sIHQgfSlcblxuICBjb25zdCBhcGlLZXlWYWx1ZSA9IGFwaUtleT8udmFsdWVcblxuICBjb25zdCBBUElLZXlMYWJlbCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgIDxzcGFuPkFQSSBLZXk8L3NwYW4+XG4gICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdmFsdWU9e2FwaUtleVZhbHVlIGFzIHN0cmluZ30gLz5cbiAgICAgIDwvZGl2PlxuICAgICksXG4gICAgW2FwaUtleVZhbHVlXSxcbiAgKVxuXG4gIGNvbnN0IGZpZWxkVHlwZSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoOiAnYXBpS2V5JyxcbiAgICB2YWxpZGF0ZSxcbiAgfSlcblxuICBjb25zdCBoaWdobGlnaHRGaWVsZCA9ICgpID0+IHtcbiAgICBpZiAoaGlnaGxpZ2h0ZWRGaWVsZCkge1xuICAgICAgc2V0SGlnaGxpZ2h0ZWRGaWVsZChmYWxzZSlcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRIaWdobGlnaHRlZEZpZWxkKHRydWUpXG4gICAgfSwgMSlcbiAgfVxuXG4gIGNvbnN0IHsgc2V0VmFsdWUsIHZhbHVlIH0gPSBmaWVsZFR5cGVcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXBpS2V5VmFsdWUgJiYgZW5hYmxlZCkge1xuICAgICAgc2V0VmFsdWUoaW5pdGlhbEFQSUtleSlcbiAgICB9XG4gICAgaWYgKCFlbmFibGVkKSB7XG4gICAgICBzZXRWYWx1ZShudWxsKVxuICAgIH1cbiAgfSwgW2FwaUtleVZhbHVlLCBlbmFibGVkLCBzZXRWYWx1ZSwgaW5pdGlhbEFQSUtleV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGlnaGxpZ2h0ZWRGaWVsZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEhpZ2hsaWdodGVkRmllbGQoZmFsc2UpXG4gICAgICB9LCAxMDAwMClcbiAgICB9XG4gIH0sIFtoaWdobGlnaHRlZEZpZWxkXSlcblxuICBpZiAoIWVuYWJsZWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17W2ZpZWxkQmFzZUNsYXNzLCAnYXBpLWtleScsICdyZWFkLW9ubHknXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfT5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9e3BhdGh9IGxhYmVsPXtBUElLZXlMYWJlbH0gLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtoaWdobGlnaHRlZEZpZWxkID8gJ2hpZ2hsaWdodCcgOiB1bmRlZmluZWR9XG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICBpZD1cImFwaUtleVwiXG4gICAgICAgICAgbmFtZT1cImFwaUtleVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXsodmFsdWUgYXMgc3RyaW5nKSB8fCAnJ31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgIDxHZW5lcmF0ZUNvbmZpcm1hdGlvbiBoaWdobGlnaHRGaWVsZD17aGlnaGxpZ2h0RmllbGR9IHNldEtleT17KCkgPT4gc2V0VmFsdWUodXVpZHY0KCkpfSAvPlxuICAgICAgKX1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQSUtleVxuIl0sIm5hbWVzIjpbInBhdGgiLCJiYXNlQ2xhc3MiLCJBUElLZXkiLCJlbmFibGVkIiwicmVhZE9ubHkiLCJpbml0aWFsQVBJS2V5IiwidXNlU3RhdGUiLCJ1dWlkdjQiLCJoaWdobGlnaHRlZEZpZWxkIiwic2V0SGlnaGxpZ2h0ZWRGaWVsZCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImFwaUtleSIsInVzZUZvcm1GaWVsZHMiLCJmaWVsZHMiLCJ2YWxpZGF0ZSIsInZhbCIsInRleHQiLCJkYXRhIiwibWF4TGVuZ3RoIiwibWluTGVuZ3RoIiwic2libGluZ0RhdGEiLCJhcGlLZXlWYWx1ZSIsInZhbHVlIiwiQVBJS2V5TGFiZWwiLCJ1c2VNZW1vIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIkNvcHlUb0NsaXBib2FyZCIsImZpZWxkVHlwZSIsInVzZUZpZWxkIiwiaGlnaGxpZ2h0RmllbGQiLCJzZXRUaW1lb3V0Iiwic2V0VmFsdWUiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsIkZyYWdtZW50IiwiZmllbGRCYXNlQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkxhYmVsIiwiaHRtbEZvciIsImxhYmVsIiwiaW5wdXQiLCJ1bmRlZmluZWQiLCJkaXNhYmxlZCIsImlkIiwibmFtZSIsInR5cGUiLCJHZW5lcmF0ZUNvbmZpcm1hdGlvbiIsInNldEtleSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBNkZBOzs7ZUFBQTs7OytEQTdGb0Q7OEJBQ3JCO3NCQUNGOzZCQUVS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