// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - need to do this because this file doesn't actually exist
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _client = require("react-dom/client");
const _Root = /*#__PURE__*/ _interop_require_default(require("./Root"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const container = document.getElementById('app');
const root = (0, _client.createRoot)(container) // createRoot(container!) if you use TypeScript
;
root.render(/*#__PURE__*/ _react.default.createElement(_Root.default, null));
// Needed for Hot Module Replacement
if (typeof module !== 'undefined' && module && 'hot' in module && typeof module.hot === 'object' && 'accept' in module.hot && typeof module.hot.accept === 'function') {
    module.hot.accept();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZG1pbi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLWlnbm9yZSAtIG5lZWQgdG8gZG8gdGhpcyBiZWNhdXNlIHRoaXMgZmlsZSBkb2Vzbid0IGFjdHVhbGx5IGV4aXN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCdcblxuaW1wb3J0IFJvb3QgZnJvbSAnLi9Sb290J1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcikgLy8gY3JlYXRlUm9vdChjb250YWluZXIhKSBpZiB5b3UgdXNlIFR5cGVTY3JpcHRcbnJvb3QucmVuZGVyKDxSb290IC8+KVxuXG4vLyBOZWVkZWQgZm9yIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmIChcbiAgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgbW9kdWxlICYmXG4gICdob3QnIGluIG1vZHVsZSAmJlxuICB0eXBlb2YgbW9kdWxlLmhvdCA9PT0gJ29iamVjdCcgJiZcbiAgJ2FjY2VwdCcgaW4gbW9kdWxlLmhvdCAmJlxuICB0eXBlb2YgbW9kdWxlLmhvdC5hY2NlcHQgPT09ICdmdW5jdGlvbidcbikge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG59XG4iXSwibmFtZXMiOlsiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJjcmVhdGVSb290IiwicmVuZGVyIiwiUm9vdCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCx3RUFBd0U7Ozs7OzhEQUN0RDt3QkFDUzs2REFFVjs7Ozs7O0FBRWpCLE1BQU1BLFlBQVlDLFNBQVNDLGNBQWMsQ0FBQztBQUMxQyxNQUFNQyxPQUFPQyxJQUFBQSxrQkFBVSxFQUFDSixXQUFXLCtDQUErQzs7QUFDbEZHLEtBQUtFLE1BQU0sZUFBQyw2QkFBQ0MsYUFBSTtBQUVqQixvQ0FBb0M7QUFDcEMsSUFDRSxPQUFPQyxXQUFXLGVBQ2xCQSxVQUNBLFNBQVNBLFVBQ1QsT0FBT0EsT0FBT0MsR0FBRyxLQUFLLFlBQ3RCLFlBQVlELE9BQU9DLEdBQUcsSUFDdEIsT0FBT0QsT0FBT0MsR0FBRyxDQUFDQyxNQUFNLEtBQUssWUFDN0I7SUFDQUYsT0FBT0MsR0FBRyxDQUFDQyxNQUFNO0FBQ25CIn0=