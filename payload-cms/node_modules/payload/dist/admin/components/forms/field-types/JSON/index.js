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
const _CodeEditor = require("../../../elements/CodeEditor");
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
const baseClass = 'json-field';
const JSONField = (props)=>{
    const { name, admin: { className, components: { Error, Label } = {}, condition, description, editorOptions, readOnly, style, width } = {}, jsonSchema, label, path: pathFromProps, required, validate = _validations.json } = props;
    const ErrorComp = Error || _Error.default;
    const LabelComp = Label || _Label.default;
    const path = pathFromProps || name;
    const [stringValue, setStringValue] = (0, _react.useState)();
    const [jsonError, setJsonError] = (0, _react.useState)();
    const [hasLoadedValue, setHasLoadedValue] = (0, _react.useState)(false);
    const memoizedValidate = (0, _react.useCallback)((value, options)=>{
        return validate(value, {
            ...options,
            jsonError,
            required
        });
    }, [
        validate,
        required,
        jsonError
    ]);
    const { errorMessage, initialValue, setValue, showError, value } = (0, _useField.default)({
        condition,
        path,
        validate: memoizedValidate
    });
    const handleMount = (0, _react.useCallback)((editor, monaco)=>{
        if (!jsonSchema) return;
        const existingSchemas = monaco.languages.json.jsonDefaults.diagnosticsOptions.schemas || [];
        const modelUri = monaco.Uri.parse(jsonSchema.uri);
        const model = monaco.editor.createModel(JSON.stringify(value, null, 2), 'json', modelUri);
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            enableSchemaRequest: true,
            schemas: [
                ...existingSchemas,
                jsonSchema
            ],
            validate: true
        });
        editor.setModel(model);
    }, [
        value,
        jsonSchema
    ]);
    const handleChange = (0, _react.useCallback)((val)=>{
        try {
            if (readOnly) return;
            setStringValue(val);
            setValue(val ? JSON.parse(val) : '');
            setJsonError(undefined);
        } catch (e) {
            setJsonError(e);
        }
    }, [
        readOnly,
        setValue,
        setStringValue
    ]);
    (0, _react.useEffect)(()=>{
        try {
            const hasValue = value && value.toString().length > 0;
            if (hasLoadedValue) {
                setStringValue(hasValue ? JSON.stringify(value, null, 2) : '');
            } else {
                setStringValue(JSON.stringify(hasValue ? value : initialValue, null, 2));
                setHasLoadedValue(true);
            }
        } catch (e) {
            setJsonError(e);
        }
    }, [
        initialValue,
        value,
        hasLoadedValue
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
    }), /*#__PURE__*/ _react.default.createElement(LabelComp, {
        htmlFor: `field-${path}`,
        label: label,
        required: required
    }), /*#__PURE__*/ _react.default.createElement(_CodeEditor.CodeEditor, {
        defaultLanguage: "json",
        onChange: handleChange,
        onMount: handleMount,
        options: editorOptions,
        readOnly: readOnly,
        value: stringValue
    }), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description,
        path: path,
        value: value
    }));
};
const _default = (0, _withCondition.default)(JSONField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0pTT04vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsganNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucydcbmltcG9ydCB7IENvZGVFZGl0b3IgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db2RlRWRpdG9yJ1xuaW1wb3J0IERlZmF1bHRFcnJvciBmcm9tICcuLi8uLi9FcnJvcidcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nXG5pbXBvcnQgRGVmYXVsdExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJ1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJ1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbidcbmltcG9ydCB7IGZpZWxkQmFzZUNsYXNzIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdqc29uLWZpZWxkJ1xuXG5jb25zdCBKU09ORmllbGQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBhZG1pbjoge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29tcG9uZW50czogeyBFcnJvciwgTGFiZWwgfSA9IHt9LFxuICAgICAgY29uZGl0aW9uLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBlZGl0b3JPcHRpb25zLFxuICAgICAgcmVhZE9ubHksXG4gICAgICBzdHlsZSxcbiAgICAgIHdpZHRoLFxuICAgIH0gPSB7fSxcbiAgICBqc29uU2NoZW1hLFxuICAgIGxhYmVsLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSBqc29uLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBFcnJvckNvbXAgPSBFcnJvciB8fCBEZWZhdWx0RXJyb3JcbiAgY29uc3QgTGFiZWxDb21wID0gTGFiZWwgfHwgRGVmYXVsdExhYmVsXG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZVxuICBjb25zdCBbc3RyaW5nVmFsdWUsIHNldFN0cmluZ1ZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxuICBjb25zdCBbanNvbkVycm9yLCBzZXRKc29uRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpXG4gIGNvbnN0IFtoYXNMb2FkZWRWYWx1ZSwgc2V0SGFzTG9hZGVkVmFsdWVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIGpzb25FcnJvciwgcmVxdWlyZWQgfSlcbiAgICB9LFxuICAgIFt2YWxpZGF0ZSwgcmVxdWlyZWQsIGpzb25FcnJvcl0sXG4gIClcblxuICBjb25zdCB7IGVycm9yTWVzc2FnZSwgaW5pdGlhbFZhbHVlLCBzZXRWYWx1ZSwgc2hvd0Vycm9yLCB2YWx1ZSB9ID0gdXNlRmllbGQ8c3RyaW5nPih7XG4gICAgY29uZGl0aW9uLFxuICAgIHBhdGgsXG4gICAgdmFsaWRhdGU6IG1lbW9pemVkVmFsaWRhdGUsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlTW91bnQgPSB1c2VDYWxsYmFjayhcbiAgICAoZWRpdG9yLCBtb25hY28pID0+IHtcbiAgICAgIGlmICghanNvblNjaGVtYSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGV4aXN0aW5nU2NoZW1hcyA9IG1vbmFjby5sYW5ndWFnZXMuanNvbi5qc29uRGVmYXVsdHMuZGlhZ25vc3RpY3NPcHRpb25zLnNjaGVtYXMgfHwgW11cbiAgICAgIGNvbnN0IG1vZGVsVXJpID0gbW9uYWNvLlVyaS5wYXJzZShqc29uU2NoZW1hLnVyaSlcblxuICAgICAgY29uc3QgbW9kZWwgPSBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKSwgJ2pzb24nLCBtb2RlbFVyaSlcbiAgICAgIG1vbmFjby5sYW5ndWFnZXMuanNvbi5qc29uRGVmYXVsdHMuc2V0RGlhZ25vc3RpY3NPcHRpb25zKHtcbiAgICAgICAgZW5hYmxlU2NoZW1hUmVxdWVzdDogdHJ1ZSxcbiAgICAgICAgc2NoZW1hczogWy4uLmV4aXN0aW5nU2NoZW1hcywganNvblNjaGVtYV0sXG4gICAgICAgIHZhbGlkYXRlOiB0cnVlLFxuICAgICAgfSlcblxuICAgICAgZWRpdG9yLnNldE1vZGVsKG1vZGVsKVxuICAgIH0sXG4gICAgW3ZhbHVlLCBqc29uU2NoZW1hXSxcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWwpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChyZWFkT25seSkgcmV0dXJuXG4gICAgICAgIHNldFN0cmluZ1ZhbHVlKHZhbClcblxuICAgICAgICBzZXRWYWx1ZSh2YWwgPyBKU09OLnBhcnNlKHZhbCkgOiAnJylcbiAgICAgICAgc2V0SnNvbkVycm9yKHVuZGVmaW5lZClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0SnNvbkVycm9yKGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBbcmVhZE9ubHksIHNldFZhbHVlLCBzZXRTdHJpbmdWYWx1ZV0sXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBoYXNWYWx1ZSA9IHZhbHVlICYmIHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoID4gMFxuICAgICAgaWYgKGhhc0xvYWRlZFZhbHVlKSB7XG4gICAgICAgIHNldFN0cmluZ1ZhbHVlKGhhc1ZhbHVlID8gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpIDogJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdHJpbmdWYWx1ZShKU09OLnN0cmluZ2lmeShoYXNWYWx1ZSA/IHZhbHVlIDogaW5pdGlhbFZhbHVlLCBudWxsLCAyKSlcbiAgICAgICAgc2V0SGFzTG9hZGVkVmFsdWUodHJ1ZSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRKc29uRXJyb3IoZSlcbiAgICB9XG4gIH0sIFtpbml0aWFsVmFsdWUsIHZhbHVlLCBoYXNMb2FkZWRWYWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgZmllbGRCYXNlQ2xhc3MsXG4gICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBzaG93RXJyb3IgJiYgJ2Vycm9yJyxcbiAgICAgICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gICAgICBdXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEVycm9yQ29tcCBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9IHNob3dFcnJvcj17c2hvd0Vycm9yfSAvPlxuICAgICAgPExhYmVsQ29tcCBodG1sRm9yPXtgZmllbGQtJHtwYXRofWB9IGxhYmVsPXtsYWJlbH0gcmVxdWlyZWQ9e3JlcXVpcmVkfSAvPlxuICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgZGVmYXVsdExhbmd1YWdlPVwianNvblwiXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIG9uTW91bnQ9e2hhbmRsZU1vdW50fVxuICAgICAgICBvcHRpb25zPXtlZGl0b3JPcHRpb25zfVxuICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgIHZhbHVlPXtzdHJpbmdWYWx1ZX1cbiAgICAgIC8+XG4gICAgICA8RmllbGREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IHBhdGg9e3BhdGh9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKEpTT05GaWVsZClcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJKU09ORmllbGQiLCJwcm9wcyIsIm5hbWUiLCJhZG1pbiIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJFcnJvciIsIkxhYmVsIiwiY29uZGl0aW9uIiwiZGVzY3JpcHRpb24iLCJlZGl0b3JPcHRpb25zIiwicmVhZE9ubHkiLCJzdHlsZSIsIndpZHRoIiwianNvblNjaGVtYSIsImxhYmVsIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwianNvbiIsIkVycm9yQ29tcCIsIkRlZmF1bHRFcnJvciIsIkxhYmVsQ29tcCIsIkRlZmF1bHRMYWJlbCIsInN0cmluZ1ZhbHVlIiwic2V0U3RyaW5nVmFsdWUiLCJ1c2VTdGF0ZSIsImpzb25FcnJvciIsInNldEpzb25FcnJvciIsImhhc0xvYWRlZFZhbHVlIiwic2V0SGFzTG9hZGVkVmFsdWUiLCJtZW1vaXplZFZhbGlkYXRlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsIm9wdGlvbnMiLCJlcnJvck1lc3NhZ2UiLCJpbml0aWFsVmFsdWUiLCJzZXRWYWx1ZSIsInNob3dFcnJvciIsInVzZUZpZWxkIiwiaGFuZGxlTW91bnQiLCJlZGl0b3IiLCJtb25hY28iLCJleGlzdGluZ1NjaGVtYXMiLCJsYW5ndWFnZXMiLCJqc29uRGVmYXVsdHMiLCJkaWFnbm9zdGljc09wdGlvbnMiLCJzY2hlbWFzIiwibW9kZWxVcmkiLCJVcmkiLCJwYXJzZSIsInVyaSIsIm1vZGVsIiwiY3JlYXRlTW9kZWwiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0RGlhZ25vc3RpY3NPcHRpb25zIiwiZW5hYmxlU2NoZW1hUmVxdWVzdCIsInNldE1vZGVsIiwiaGFuZGxlQ2hhbmdlIiwidmFsIiwidW5kZWZpbmVkIiwiZSIsInVzZUVmZmVjdCIsImhhc1ZhbHVlIiwidG9TdHJpbmciLCJsZW5ndGgiLCJkaXYiLCJmaWVsZEJhc2VDbGFzcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwibWVzc2FnZSIsImh0bWxGb3IiLCJDb2RlRWRpdG9yIiwiZGVmYXVsdExhbmd1YWdlIiwib25DaGFuZ2UiLCJvbk1vdW50IiwiRmllbGREZXNjcmlwdGlvbiIsIndpdGhDb25kaXRpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF3SUE7OztlQUFBOzs7K0RBeEl3RDs2QkFJbkM7NEJBQ007OERBQ0Y7eUVBQ0k7OERBQ0o7aUVBQ0o7c0VBQ0s7d0JBQ0s7UUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxZQUE2QixDQUFDQztJQUNsQyxNQUFNLEVBQ0pDLElBQUksRUFDSkMsT0FBTyxFQUNMQyxTQUFTLEVBQ1RDLFlBQVksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDakNDLFNBQVMsRUFDVEMsV0FBVyxFQUNYQyxhQUFhLEVBQ2JDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxLQUFLLEVBQ04sR0FBRyxDQUFDLENB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