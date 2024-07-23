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
const _react = /*#__PURE__*/ _interop_require_default(require("@monaco-editor/react"));
const _react1 = /*#__PURE__*/ _interop_require_default(require("react"));
const _Theme = require("../../utilities/Theme");
const _ShimmerEffect = require("../ShimmerEffect");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'code-editor';
const CodeEditor = (props)=>{
    const { className, height, options, readOnly, ...rest } = props;
    const { theme } = (0, _Theme.useTheme)();
    const classes = [
        baseClass,
        className,
        rest?.defaultLanguage ? `language--${rest.defaultLanguage}` : ''
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ _react1.default.createElement(_react.default, {
        className: classes,
        height: height,
        loading: /*#__PURE__*/ _react1.default.createElement(_ShimmerEffect.ShimmerEffect, {
            height: height
        }),
        options: {
            detectIndentation: true,
            minimap: {
                enabled: false
            },
            readOnly: Boolean(readOnly),
            scrollBeyondLastLine: false,
            tabSize: 2,
            wordWrap: 'on',
            ...options
        },
        theme: theme === 'dark' ? 'vs-dark' : 'vs',
        ...rest
    });
};
const _default = CodeEditor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVFZGl0b3IvQ29kZUVkaXRvci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVkaXRvciBmcm9tICdAbW9uYWNvLWVkaXRvci9yZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1RoZW1lJ1xuaW1wb3J0IHsgU2hpbW1lckVmZmVjdCB9IGZyb20gJy4uL1NoaW1tZXJFZmZlY3QnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvZGUtZWRpdG9yJ1xuXG5jb25zdCBDb2RlRWRpdG9yOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGhlaWdodCwgb3B0aW9ucywgcmVhZE9ubHksIC4uLnJlc3QgfSA9IHByb3BzXG5cbiAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGNsYXNzTmFtZSxcbiAgICByZXN0Py5kZWZhdWx0TGFuZ3VhZ2UgPyBgbGFuZ3VhZ2UtLSR7cmVzdC5kZWZhdWx0TGFuZ3VhZ2V9YCA6ICcnLFxuICBdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKCcgJylcblxuICByZXR1cm4gKFxuICAgIDxFZGl0b3JcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgbG9hZGluZz17PFNoaW1tZXJFZmZlY3QgaGVpZ2h0PXtoZWlnaHR9IC8+fVxuICAgICAgb3B0aW9ucz17e1xuICAgICAgICBkZXRlY3RJbmRlbnRhdGlvbjogdHJ1ZSxcbiAgICAgICAgbWluaW1hcDoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICByZWFkT25seTogQm9vbGVhbihyZWFkT25seSksXG4gICAgICAgIHNjcm9sbEJleW9uZExhc3RMaW5lOiBmYWxzZSxcbiAgICAgICAgdGFiU2l6ZTogMixcbiAgICAgICAgd29yZFdyYXA6ICdvbicsXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9fVxuICAgICAgdGhlbWU9e3RoZW1lID09PSAnZGFyaycgPyAndnMtZGFyaycgOiAndnMnfVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlRWRpdG9yXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiQ29kZUVkaXRvciIsInByb3BzIiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib3B0aW9ucyIsInJlYWRPbmx5IiwicmVzdCIsInRoZW1lIiwidXNlVGhlbWUiLCJjbGFzc2VzIiwiZGVmYXVsdExhbmd1YWdlIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJFZGl0b3IiLCJsb2FkaW5nIiwiU2hpbW1lckVmZmVjdCIsImRldGVjdEluZGVudGF0aW9uIiwibWluaW1hcCIsImVuYWJsZWQiLCJzY3JvbGxCZXlvbmRMYXN0TGluZSIsInRhYlNpemUiLCJ3b3JkV3JhcCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE4Q0E7OztlQUFBOzs7OERBOUNtQjsrREFDRDt1QkFJTzsrQkFDSztRQUN2Qjs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxhQUE4QixDQUFDQztJQUNuQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRSxHQUFHQyxNQUFNLEdBQUdMO0lBRTFELE1BQU0sRUFBRU0sS0FBSyxFQUFFLEdBQUdDLElBQUFBLGVBQVE7SUFFMUIsTUFBTUMsVUFBVTtRQUNkVjtRQUNBRztRQUNBSSxNQUFNSSxrQkFBa0IsQ0FBQyxVQUFVLEVBQUVKLEtBQUtJLGVBQWUsQ0FBQyxDQUFDLEdBQUc7S0FDL0QsQ0FDRUMsTUFBTSxDQUFDQyxTQUNQQyxJQUFJLENBQUM7SUFFUixxQkFDRSw4QkFBQ0MsY0FBTTtRQUNMWixXQUFXTztRQUNYTixRQUFRQTtRQUNSWSx1QkFBUyw4QkFBQ0MsNEJBQWE7WUFBQ2IsUUFBUUE7O1FBQ2hDQyxTQUFTO1lBQ1BhLG1CQUFtQjtZQUNuQkMsU0FBUztnQkFDUEMsU0FBUztZQUNYO1lBQ0FkLFVBQVVPLFFBQVFQO1lBQ2xCZSxzQkFBc0I7WUFDdEJDLFNBQVM7WUFDVEMsVUFBVTtZQUNWLEdBQUdsQixPQUFPO1FBQ1o7UUFDQUcsT0FBT0EsVUFBVSxTQUFTLFlBQVk7UUFDckMsR0FBR0QsSUFBSTs7QUFHZDtNQUVBLFdBQWVOIn0=