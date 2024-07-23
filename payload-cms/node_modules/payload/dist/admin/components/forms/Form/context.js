"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FormContext: function() {
        return FormContext;
    },
    FormFieldsContext: function() {
        return FormFieldsContext;
    },
    FormWatchContext: function() {
        return FormWatchContext;
    },
    ModifiedContext: function() {
        return ModifiedContext;
    },
    ProcessingContext: function() {
        return ProcessingContext;
    },
    SubmittedContext: function() {
        return SubmittedContext;
    },
    useAllFormFields: function() {
        return useAllFormFields;
    },
    useForm: function() {
        return useForm;
    },
    useFormFields: function() {
        return useFormFields;
    },
    useFormModified: function() {
        return useFormModified;
    },
    useFormProcessing: function() {
        return useFormProcessing;
    },
    useFormSubmitted: function() {
        return useFormSubmitted;
    },
    useWatchForm: function() {
        return useWatchForm;
    }
});
const _react = require("react");
const _usecontextselector = require("use-context-selector");
const FormContext = (0, _react.createContext)({});
const FormWatchContext = (0, _react.createContext)({});
const SubmittedContext = (0, _react.createContext)(false);
const ProcessingContext = (0, _react.createContext)(false);
const ModifiedContext = (0, _react.createContext)(false);
const FormFieldsContext = (0, _usecontextselector.createContext)([
    {},
    ()=>null
]);
/**
 * Get the state of the form, can be used to submit & validate the form.
 *
 * @see https://payloadcms.com/docs/admin/hooks#useform
 */ const useForm = ()=>(0, _react.useContext)(FormContext);
const useWatchForm = ()=>(0, _react.useContext)(FormWatchContext);
const useFormSubmitted = ()=>(0, _react.useContext)(SubmittedContext);
const useFormProcessing = ()=>(0, _react.useContext)(ProcessingContext);
const useFormModified = ()=>(0, _react.useContext)(ModifiedContext);
/**
 * Get and set the value of a form field based on a selector
 *
 * @see https://payloadcms.com/docs/admin/hooks#useformfields
 */ const useFormFields = (selector)=>(0, _usecontextselector.useContextSelector)(FormFieldsContext, selector);
/**
 * Get the state of all form fields.
 *
 * @see https://payloadcms.com/docs/admin/hooks#useallformfields
 */ const useAllFormFields = ()=>(0, _usecontextselector.useContext)(FormFieldsContext);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vY29udGV4dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBjcmVhdGVDb250ZXh0IGFzIGNyZWF0ZVNlbGVjdG9yQ29udGV4dCxcbiAgdXNlQ29udGV4dFNlbGVjdG9yLFxuICB1c2VDb250ZXh0IGFzIHVzZUZ1bGxDb250ZXh0LFxufSBmcm9tICd1c2UtY29udGV4dC1zZWxlY3RvcidcblxuaW1wb3J0IHR5cGUgeyBDb250ZXh0LCBGb3JtRmllbGRzQ29udGV4dCBhcyBGb3JtRmllbGRzQ29udGV4dFR5cGUgfSBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCBGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ29udGV4dClcbmNvbnN0IEZvcm1XYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvbnRleHQpXG5jb25zdCBTdWJtaXR0ZWRDb250ZXh0ID0gY3JlYXRlQ29udGV4dChmYWxzZSlcbmNvbnN0IFByb2Nlc3NpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChmYWxzZSlcbmNvbnN0IE1vZGlmaWVkQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoZmFsc2UpXG5jb25zdCBGb3JtRmllbGRzQ29udGV4dCA9IGNyZWF0ZVNlbGVjdG9yQ29udGV4dDxGb3JtRmllbGRzQ29udGV4dFR5cGU+KFt7fSwgKCkgPT4gbnVsbF0pXG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZSBvZiB0aGUgZm9ybSwgY2FuIGJlIHVzZWQgdG8gc3VibWl0ICYgdmFsaWRhdGUgdGhlIGZvcm0uXG4gKlxuICogQHNlZSBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvYWRtaW4vaG9va3MjdXNlZm9ybVxuICovXG5jb25zdCB1c2VGb3JtID0gKCk6IENvbnRleHQgPT4gdXNlQ29udGV4dChGb3JtQ29udGV4dClcbmNvbnN0IHVzZVdhdGNoRm9ybSA9ICgpOiBDb250ZXh0ID0+IHVzZUNvbnRleHQoRm9ybVdhdGNoQ29udGV4dClcbmNvbnN0IHVzZUZvcm1TdWJtaXR0ZWQgPSAoKTogYm9vbGVhbiA9PiB1c2VDb250ZXh0KFN1Ym1pdHRlZENvbnRleHQpXG5jb25zdCB1c2VGb3JtUHJvY2Vzc2luZyA9ICgpOiBib29sZWFuID0+IHVzZUNvbnRleHQoUHJvY2Vzc2luZ0NvbnRleHQpXG5jb25zdCB1c2VGb3JtTW9kaWZpZWQgPSAoKTogYm9vbGVhbiA9PiB1c2VDb250ZXh0KE1vZGlmaWVkQ29udGV4dClcblxuLyoqXG4gKiBHZXQgYW5kIHNldCB0aGUgdmFsdWUgb2YgYSBmb3JtIGZpZWxkIGJhc2VkIG9uIGEgc2VsZWN0b3JcbiAqXG4gKiBAc2VlIGh0dHBzOi8vcGF5bG9hZGNtcy5jb20vZG9jcy9hZG1pbi9ob29rcyN1c2Vmb3JtZmllbGRzXG4gKi9cbmNvbnN0IHVzZUZvcm1GaWVsZHMgPSA8VmFsdWUgPSB1bmtub3duPihcbiAgc2VsZWN0b3I6IChjb250ZXh0OiBGb3JtRmllbGRzQ29udGV4dFR5cGUpID0+IFZhbHVlLFxuKTogVmFsdWUgPT4gdXNlQ29udGV4dFNlbGVjdG9yKEZvcm1GaWVsZHNDb250ZXh0LCBzZWxlY3RvcilcblxuLyoqXG4gKiBHZXQgdGhlIHN0YXRlIG9mIGFsbCBmb3JtIGZpZWxkcy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcGF5bG9hZGNtcy5jb20vZG9jcy9hZG1pbi9ob29rcyN1c2VhbGxmb3JtZmllbGRzXG4gKi9cbmNvbnN0IHVzZUFsbEZvcm1GaWVsZHMgPSAoKTogRm9ybUZpZWxkc0NvbnRleHRUeXBlID0+IHVzZUZ1bGxDb250ZXh0KEZvcm1GaWVsZHNDb250ZXh0KVxuXG5leHBvcnQge1xuICBGb3JtQ29udGV4dCxcbiAgRm9ybUZpZWxkc0NvbnRleHQsXG4gIEZvcm1XYXRjaENvbnRleHQsXG4gIE1vZGlmaWVkQ29udGV4dCxcbiAgUHJvY2Vzc2luZ0NvbnRleHQsXG4gIFN1Ym1pdHRlZENvbnRleHQsXG4gIHVzZUFsbEZvcm1GaWVsZHMsXG4gIHVzZUZvcm0sXG4gIHVzZUZvcm1GaWVsZHMsXG4gIHVzZUZvcm1Nb2RpZmllZCxcbiAgdXNlRm9ybVByb2Nlc3NpbmcsXG4gIHVzZUZvcm1TdWJtaXR0ZWQsXG4gIHVzZVdhdGNoRm9ybSxcbn1cbiJdLCJuYW1lcyI6WyJGb3JtQ29udGV4dCIsIkZvcm1GaWVsZHNDb250ZXh0IiwiRm9ybVdhdGNoQ29udGV4dCIsIk1vZGlmaWVkQ29udGV4dCIsIlByb2Nlc3NpbmdDb250ZXh0IiwiU3VibWl0dGVkQ29udGV4dCIsInVzZUFsbEZvcm1GaWVsZHMiLCJ1c2VGb3JtIiwidXNlRm9ybUZpZWxkcyIsInVzZUZvcm1Nb2RpZmllZCIsInVzZUZvcm1Qcm9jZXNzaW5nIiwidXNlRm9ybVN1Ym1pdHRlZCIsInVzZVdhdGNoRm9ybSIsImNyZWF0ZUNvbnRleHQiLCJjcmVhdGVTZWxlY3RvckNvbnRleHQiLCJ1c2VDb250ZXh0Iiwic2VsZWN0b3IiLCJ1c2VDb250ZXh0U2VsZWN0b3IiLCJ1c2VGdWxsQ29udGV4dCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUE0Q0VBLFdBQVc7ZUFBWEE7O0lBQ0FDLGlCQUFpQjtlQUFqQkE7O0lBQ0FDLGdCQUFnQjtlQUFoQkE7O0lBQ0FDLGVBQWU7ZUFBZkE7O0lBQ0FDLGlCQUFpQjtlQUFqQkE7O0lBQ0FDLGdCQUFnQjtlQUFoQkE7O0lBQ0FDLGdCQUFnQjtlQUFoQkE7O0lBQ0FDLE9BQU87ZUFBUEE7O0lBQ0FDLGFBQWE7ZUFBYkE7O0lBQ0FDLGVBQWU7ZUFBZkE7O0lBQ0FDLGlCQUFpQjtlQUFqQkE7O0lBQ0FDLGdCQUFnQjtlQUFoQkE7O0lBQ0FDLFlBQVk7ZUFBWkE7Ozt1QkF4RHdDO29DQUtuQztBQUlQLE1BQU1aLGNBQWNhLElBQUFBLG9CQUFhLEVBQUMsQ0FBQztBQUNuQyxNQUFNWCxtQkFBbUJXLElBQUFBLG9CQUFhLEVBQUMsQ0FBQztBQUN4QyxNQUFNUixtQkFBbUJRLElBQUFBLG9CQUFhLEVBQUM7QUFDdkMsTUFBTVQsb0JBQW9CUyxJQUFBQSxvQkFBYSxFQUFDO0FBQ3hDLE1BQU1WLGtCQUFrQlUsSUFBQUEsb0JBQWEsRUFBQztBQUN0QyxNQUFNWixvQkFBb0JhLElBQUFBLGlDQUFxQixFQUF3QjtJQUFDLENBQUM7SUFBRyxJQUFNO0NBQUs7QUFFdkY7Ozs7Q0FJQyxHQUNELE1BQU1QLFVBQVUsSUFBZVEsSUFBQUEsaUJBQVUsRUFBQ2Y7QUFDMUMsTUFBTVksZUFBZSxJQUFlRyxJQUFBQSxpQkFBVSxFQUFDYjtBQUMvQyxNQUFNUyxtQkFBbUIsSUFBZUksSUFBQUEsaUJBQVUsRUFBQ1Y7QUFDbkQsTUFBTUssb0JBQW9CLElBQWVLLElBQUFBLGlCQUFVLEVBQUNYO0FBQ3BELE1BQU1LLGtCQUFrQixJQUFlTSxJQUFBQSxpQkFBVSxFQUFDWjtBQUVsRDs7OztDQUlDLEdBQ0QsTUFBTUssZ0JBQWdCLENBQ3BCUSxXQUNVQyxJQUFBQSxzQ0FBa0IsRUFBQ2hCLG1CQUFtQmU7QUFFbEQ7Ozs7Q0FJQyxHQUNELE1BQU1WLG1CQUFtQixJQUE2QlksSUFBQUEsOEJBQWMsRUFBQ2pCIn0=