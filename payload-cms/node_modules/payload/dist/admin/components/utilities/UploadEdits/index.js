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
    UploadEditsProvider: function() {
        return UploadEditsProvider;
    },
    useUploadEdits: function() {
        return useUploadEdits;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Context = /*#__PURE__*/ _react.default.createContext({
    resetUploadEdits: undefined,
    updateUploadEdits: undefined,
    uploadEdits: undefined
});
const UploadEditsProvider = ({ children })=>{
    const [uploadEdits, setUploadEdits] = _react.default.useState(undefined);
    const resetUploadEdits = ()=>{
        setUploadEdits({});
    };
    const updateUploadEdits = (edits)=>{
        setUploadEdits((prevEdits)=>({
                ...prevEdits || {},
                ...edits || {}
            }));
    };
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: {
            resetUploadEdits,
            updateUploadEdits,
            uploadEdits
        }
    }, children);
};
const useUploadEdits = ()=>_react.default.useContext(Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9VcGxvYWRFZGl0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFVwbG9hZEVkaXRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXBsb2Fkcy90eXBlcydcblxuZXhwb3J0IHR5cGUgVXBsb2FkRWRpdHNDb250ZXh0ID0ge1xuICByZXNldFVwbG9hZEVkaXRzOiAoKSA9PiB2b2lkXG4gIHVwZGF0ZVVwbG9hZEVkaXRzOiAoZWRpdHM6IFVwbG9hZEVkaXRzKSA9PiB2b2lkXG4gIHVwbG9hZEVkaXRzOiBVcGxvYWRFZGl0c1xufVxuXG5jb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxVcGxvYWRFZGl0c0NvbnRleHQ+KHtcbiAgcmVzZXRVcGxvYWRFZGl0czogdW5kZWZpbmVkLFxuICB1cGRhdGVVcGxvYWRFZGl0czogdW5kZWZpbmVkLFxuICB1cGxvYWRFZGl0czogdW5kZWZpbmVkLFxufSlcblxuZXhwb3J0IGNvbnN0IFVwbG9hZEVkaXRzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1cGxvYWRFZGl0cywgc2V0VXBsb2FkRWRpdHNdID0gUmVhY3QudXNlU3RhdGU8VXBsb2FkRWRpdHM+KHVuZGVmaW5lZClcblxuICBjb25zdCByZXNldFVwbG9hZEVkaXRzID0gKCkgPT4ge1xuICAgIHNldFVwbG9hZEVkaXRzKHt9KVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVXBsb2FkRWRpdHMgPSAoZWRpdHM6IFVwbG9hZEVkaXRzKSA9PiB7XG4gICAgc2V0VXBsb2FkRWRpdHMoKHByZXZFZGl0cykgPT4gKHtcbiAgICAgIC4uLihwcmV2RWRpdHMgfHwge30pLFxuICAgICAgLi4uKGVkaXRzIHx8IHt9KSxcbiAgICB9KSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcmVzZXRVcGxvYWRFZGl0cywgdXBkYXRlVXBsb2FkRWRpdHMsIHVwbG9hZEVkaXRzIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlVXBsb2FkRWRpdHMgPSAoKTogVXBsb2FkRWRpdHNDb250ZXh0ID0+IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dClcbiJdLCJuYW1lcyI6WyJVcGxvYWRFZGl0c1Byb3ZpZGVyIiwidXNlVXBsb2FkRWRpdHMiLCJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwicmVzZXRVcGxvYWRFZGl0cyIsInVuZGVmaW5lZCIsInVwZGF0ZVVwbG9hZEVkaXRzIiwidXBsb2FkRWRpdHMiLCJjaGlsZHJlbiIsInNldFVwbG9hZEVkaXRzIiwidXNlU3RhdGUiLCJlZGl0cyIsInByZXZFZGl0cyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDb250ZXh0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFnQmFBLG1CQUFtQjtlQUFuQkE7O0lBcUJBQyxjQUFjO2VBQWRBOzs7OERBckNLOzs7Ozs7QUFVbEIsTUFBTUMsd0JBQVVDLGNBQUssQ0FBQ0MsYUFBYSxDQUFxQjtJQUN0REMsa0JBQWtCQztJQUNsQkMsbUJBQW1CRDtJQUNuQkUsYUFBYUY7QUFDZjtBQUVPLE1BQU1OLHNCQUFzQixDQUFDLEVBQUVTLFFBQVEsRUFBRTtJQUM5QyxNQUFNLENBQUNELGFBQWFFLGVBQWUsR0FBR1AsY0FBSyxDQUFDUSxRQUFRLENBQWNMO0lBRWxFLE1BQU1ELG1CQUFtQjtRQUN2QkssZUFBZSxDQUFDO0lBQ2xCO0lBRUEsTUFBTUgsb0JBQW9CLENBQUNLO1FBQ3pCRixlQUFlLENBQUNHLFlBQWUsQ0FBQTtnQkFDN0IsR0FBSUEsYUFBYSxDQUFDLENBQUM7Z0JBQ25CLEdBQUlELFNBQVMsQ0FBQyxDQUFDO1lBQ2pCLENBQUE7SUFDRjtJQUVBLHFCQUNFLDZCQUFDVixRQUFRWSxRQUFRO1FBQUNDLE9BQU87WUFBRVY7WUFBa0JFO1lBQW1CQztRQUFZO09BQ3pFQztBQUdQO0FBRU8sTUFBTVIsaUJBQWlCLElBQTBCRSxjQUFLLENBQUNhLFVBQVUsQ0FBQ2QifQ==