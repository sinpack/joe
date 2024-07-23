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
const prismToMonacoLanguageMap = {
    js: 'javascript',
    ts: 'typescript'
};
const baseClass = 'code-field';
const Code = (props)=>{
    const { name, admin: { className, components: { Error, Label } = {}, condition, description, editorOptions, language, readOnly, style, width } = {}, label, path: pathFromProps, required, validate = _validations.code } = props;
    const ErrorComp = Error || _Error.default;
    const LabelComp = Label || _Label.default;
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
        defaultLanguage: prismToMonacoLanguageMap[language] || language,
        onChange: readOnly ? ()=>null : (val)=>setValue(val),
        options: editorOptions,
        readOnly: readOnly,
        value: value || ''
    }), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description,
        path: path,
        value: value
    }));
};
const _default = (0, _withCondition.default)(Code);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NvZGUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgY29kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucydcbmltcG9ydCB7IENvZGVFZGl0b3IgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db2RlRWRpdG9yJ1xuaW1wb3J0IERlZmF1bHRFcnJvciBmcm9tICcuLi8uLi9FcnJvcidcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nXG5pbXBvcnQgRGVmYXVsdExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJ1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJ1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbidcbmltcG9ydCB7IGZpZWxkQmFzZUNsYXNzIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IHByaXNtVG9Nb25hY29MYW5ndWFnZU1hcCA9IHtcbiAganM6ICdqYXZhc2NyaXB0JyxcbiAgdHM6ICd0eXBlc2NyaXB0Jyxcbn1cblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvZGUtZmllbGQnXG5cbmNvbnN0IENvZGU6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBhZG1pbjoge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29tcG9uZW50czogeyBFcnJvciwgTGFiZWwgfSA9IHt9LFxuICAgICAgY29uZGl0aW9uLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBlZGl0b3JPcHRpb25zLFxuICAgICAgbGFuZ3VhZ2UsXG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHt9LFxuICAgIGxhYmVsLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSBjb2RlLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBFcnJvckNvbXAgPSBFcnJvciB8fCBEZWZhdWx0RXJyb3JcbiAgY29uc3QgTGFiZWxDb21wID0gTGFiZWwgfHwgRGVmYXVsdExhYmVsXG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZVxuXG4gIGNvbnN0IG1lbW9pemVkVmFsaWRhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi5vcHRpb25zLCByZXF1aXJlZCB9KVxuICAgIH0sXG4gICAgW3ZhbGlkYXRlLCByZXF1aXJlZF0sXG4gIClcblxuICBjb25zdCB7IGVycm9yTWVzc2FnZSwgc2V0VmFsdWUsIHNob3dFcnJvciwgdmFsdWUgfSA9IHVzZUZpZWxkKHtcbiAgICBjb25kaXRpb24sXG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBmaWVsZEJhc2VDbGFzcyxcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICAgICAgICByZWFkT25seSAmJiAncmVhZC1vbmx5JyxcbiAgICAgIF1cbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAuam9pbignICcpfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RXJyb3JDb21wIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX0gc2hvd0Vycm9yPXtzaG93RXJyb3J9IC8+XG4gICAgICA8TGFiZWxDb21wIGh0bWxGb3I9e2BmaWVsZC0ke3BhdGh9YH0gbGFiZWw9e2xhYmVsfSByZXF1aXJlZD17cmVxdWlyZWR9IC8+XG4gICAgICA8Q29kZUVkaXRvclxuICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U9e3ByaXNtVG9Nb25hY29MYW5ndWFnZU1hcFtsYW5ndWFnZV0gfHwgbGFuZ3VhZ2V9XG4gICAgICAgIG9uQ2hhbmdlPXtyZWFkT25seSA/ICgpID0+IG51bGwgOiAodmFsKSA9PiBzZXRWYWx1ZSh2YWwpfVxuICAgICAgICBvcHRpb25zPXtlZGl0b3JPcHRpb25zfVxuICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgIHZhbHVlPXsodmFsdWUgYXMgc3RyaW5nKSB8fCAnJ31cbiAgICAgIC8+XG4gICAgICA8RmllbGREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IHBhdGg9e3BhdGh9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKENvZGUpXG4iXSwibmFtZXMiOlsicHJpc21Ub01vbmFjb0xhbmd1YWdlTWFwIiwianMiLCJ0cyIsImJhc2VDbGFzcyIsIkNvZGUiLCJwcm9wcyIsIm5hbWUiLCJhZG1pbiIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJFcnJvciIsIkxhYmVsIiwiY29uZGl0aW9uIiwiZGVzY3JpcHRpb24iLCJlZGl0b3JPcHRpb25zIiwibGFuZ3VhZ2UiLCJyZWFkT25seSIsInN0eWxlIiwid2lkdGgiLCJsYWJlbCIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsImNvZGUiLCJFcnJvckNvbXAiLCJEZWZhdWx0RXJyb3IiLCJMYWJlbENvbXAiLCJEZWZhdWx0TGFiZWwiLCJtZW1vaXplZFZhbGlkYXRlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsIm9wdGlvbnMiLCJlcnJvck1lc3NhZ2UiLCJzZXRWYWx1ZSIsInNob3dFcnJvciIsInVzZUZpZWxkIiwiZGl2IiwiZmllbGRCYXNlQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIm1lc3NhZ2UiLCJodG1sRm9yIiwiQ29kZUVkaXRvciIsImRlZmF1bHRMYW5ndWFnZSIsIm9uQ2hhbmdlIiwidmFsIiwiRmllbGREZXNjcmlwdGlvbiIsIndpdGhDb25kaXRpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF5RkE7OztlQUFBOzs7K0RBekZtQzs2QkFJZDs0QkFDTTs4REFDRjt5RUFDSTs4REFDSjtpRUFDSjtzRUFDSzt3QkFDSztRQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQSwyQkFBMkI7SUFDL0JDLElBQUk7SUFDSkMsSUFBSTtBQUNOO0FBRUEsTUFBTUMsWUFBWTtBQUVsQixNQUFNQyxPQUF3QixDQUFDQztJQUM3QixNQUFNLEVBQ0pDLElBQUksRUFDSkMsT0FBTyxFQUNMQyxTQUFTLEVBQ1RDLFlBQVksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDakNDLFNBQVMsRUFDVEMsV0FBVyxFQUNYQyxhQUFhLEVBQ2JDLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLEtBQUssRUFDTixHQUFHLENBQUMsQ0FBQyxFQUNOQyxLQUFLLEVBQ0xDLE1BQU1DLGFBQWEsRUFDbkJDLFFBQVEsRUFDUkMsV0FBV0MsaUJBQUksRUFDaEIsR0FBR25CO0lBRUosTUFBTW9CLFlBQVlmLFNBQVNnQixjQUFZO0lBQ3ZDLE1BQU1DLFlBQVloQixTQUFTaUIsY0FBWTtJQUV2QyxNQUFNUixPQUFPQyxpQkFBaUJmO0lBRTlCLE1BQU11QixtQkFBbUJDLElBQUFBLGtCQUFXLEVBQ2xDLENBQUNDLE9BQU9DO1FBQ04sT0FBT1QsU0FBU1EsT0FBTztZQUFFLEdBQUdDLE9BQU87WUFBRVY7UUFBUztJQUNoRCxHQUNBO1FBQUNDO1FBQVVEO0tBQVM7SUFHdEIsTUFBTSxFQUFFVyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFSixLQUFLLEVBQUUsR0FBR0ssSUFBQUEsaUJBQVEsRUFBQztRQUM1RHhCO1FBQ0FRO1FBQ0FHLFVBQVVNO0lBQ1o7SUFFQSxxQkFDRSw2QkFBQ1E7UUFDQzdCLFdBQVc7WUFDVDhCLHNCQUFjO1lBQ2RuQztZQUNBSztZQUNBMkIsYUFBYTtZQUNibkIsWUFBWTtTQUNiLENBQ0V1QixNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQztRQUNSeEIsT0FBTztZQUNMLEdBQUdBLEtBQUs7WUFDUkM7UUFDRjtxQkFFQSw2QkFBQ087UUFBVWlCLFNBQVNUO1FBQWNFLFdBQVdBO3NCQUM3Qyw2QkFBQ1I7UUFBVWdCLFNBQVMsQ0FBQyxNQUFNLEVBQUV2QixLQUFLLENBQUM7UUFBRUQsT0FBT0E7UUFBT0csVUFBVUE7c0JBQzdELDZCQUFDc0Isc0JBQVU7UUFDVEMsaUJBQWlCN0Msd0JBQXdCLENBQUNlLFNBQVMsSUFBSUE7UUFDdkQrQixVQUFVOUIsV0FBVyxJQUFNLE9BQU8sQ0FBQytCLE1BQVFiLFNBQVNhO1FBQ3BEZixTQUFTbEI7UUFDVEUsVUFBVUE7UUFDVmUsT0FBTyxBQUFDQSxTQUFvQjtzQkFFOUIsNkJBQUNpQix5QkFBZ0I7UUFBQ25DLGFBQWFBO1FBQWFPLE1BQU1BO1FBQU1XLE9BQU9BOztBQUdyRTtNQUVBLFdBQWVrQixJQUFBQSxzQkFBYSxFQUFDN0MifQ==