"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Dropzone", {
    enumerable: true,
    get: function() {
        return Dropzone;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const handleDragOver = (e)=>{
    e.preventDefault();
    e.stopPropagation();
};
const baseClass = 'dropzone';
const Dropzone = ({ className, mimeTypes, onChange, onPasteUrlClick })=>{
    const dropRef = _react.default.useRef(null);
    const [dragging, setDragging] = _react.default.useState(false);
    const inputRef = _react.default.useRef(null);
    const { t } = (0, _reacti18next.useTranslation)([
        'upload',
        'general'
    ]);
    const handlePaste = _react.default.useCallback((e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.clipboardData.files && e.clipboardData.files.length > 0) {
            onChange(e.clipboardData.files);
        }
    }, [
        onChange
    ]);
    const handleDragEnter = _react.default.useCallback((e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    }, []);
    const handleDragLeave = _react.default.useCallback((e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    }, []);
    const handleDrop = _react.default.useCallback((e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            onChange(e.dataTransfer.files);
            setDragging(false);
            e.dataTransfer.clearData();
        }
    }, [
        onChange
    ]);
    const handleFileSelection = _react.default.useCallback((e)=>{
        if (e.target.files && e.target.files.length > 0) {
            onChange(e.target.files);
        }
    }, [
        onChange
    ]);
    _react.default.useEffect(()=>{
        const div = dropRef.current;
        if (div) {
            div.addEventListener('dragenter', handleDragEnter);
            div.addEventListener('dragleave', handleDragLeave);
            div.addEventListener('dragover', handleDragOver);
            div.addEventListener('drop', handleDrop);
            div.addEventListener('paste', handlePaste);
            return ()=>{
                div.removeEventListener('dragenter', handleDragEnter);
                div.removeEventListener('dragleave', handleDragLeave);
                div.removeEventListener('dragover', handleDragOver);
                div.removeEventListener('drop', handleDrop);
                div.removeEventListener('paste', handlePaste);
            };
        }
        return ()=>null;
    }, [
        handleDragEnter,
        handleDragLeave,
        handleDrop,
        handlePaste
    ]);
    const classes = [
        baseClass,
        className,
        dragging ? 'dragging' : ''
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes,
        ref: dropRef
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        className: `${baseClass}__file-button`,
        onClick: ()=>{
            inputRef.current.click();
        },
        size: "small"
    }, t('upload:selectFile')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        className: `${baseClass}__file-button`,
        onClick: onPasteUrlClick,
        size: "small"
    }, t('upload:pasteURL')), /*#__PURE__*/ _react.default.createElement("input", {
        accept: mimeTypes?.join(','),
        className: `${baseClass}__hidden-input`,
        onChange: handleFileSelection,
        ref: inputRef,
        type: "file"
    }), /*#__PURE__*/ _react.default.createElement("p", {
        className: `${baseClass}__label`
    }, t('general:or'), " ", t('dragAndDrop')));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0Ryb3B6b25lL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGU6IERyYWdFdmVudCkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxufVxuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZHJvcHpvbmUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBtaW1lVHlwZXM/OiBzdHJpbmdbXVxuICBvbkNoYW5nZTogKGU6IEZpbGVMaXN0KSA9PiB2b2lkXG4gIG9uUGFzdGVVcmxDbGljaz86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IERyb3B6b25lOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjbGFzc05hbWUsIG1pbWVUeXBlcywgb25DaGFuZ2UsIG9uUGFzdGVVcmxDbGljayB9KSA9PiB7XG4gIGNvbnN0IGRyb3BSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpXG5cbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihbJ3VwbG9hZCcsICdnZW5lcmFsJ10pXG5cbiAgY29uc3QgaGFuZGxlUGFzdGUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZTogQ2xpcGJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBpZiAoZS5jbGlwYm9hcmREYXRhLmZpbGVzICYmIGUuY2xpcGJvYXJkRGF0YS5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9uQ2hhbmdlKGUuY2xpcGJvYXJkRGF0YS5maWxlcylcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvbkNoYW5nZV0sXG4gIClcblxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoZTogRHJhZ0V2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHNldERyYWdnaW5nKHRydWUpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZURyYWdMZWF2ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKChlOiBEcmFnRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgc2V0RHJhZ2dpbmcoZmFsc2UpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZURyb3AgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZTogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHNldERyYWdnaW5nKGZhbHNlKVxuXG4gICAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZmlsZXMgJiYgZS5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBvbkNoYW5nZShlLmRhdGFUcmFuc2Zlci5maWxlcylcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpXG5cbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuY2xlYXJEYXRhKClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvbkNoYW5nZV0sXG4gIClcblxuICBjb25zdCBoYW5kbGVGaWxlU2VsZWN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBvbkNoYW5nZShlLnRhcmdldC5maWxlcylcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvbkNoYW5nZV0sXG4gIClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRyb3BSZWYuY3VycmVudFxuXG4gICAgaWYgKGRpdikge1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGhhbmRsZURyYWdFbnRlcilcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBoYW5kbGVEcmFnTGVhdmUpXG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnT3ZlcilcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlRHJvcClcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGhhbmRsZVBhc3RlKVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgaGFuZGxlRHJhZ0VudGVyKVxuICAgICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgaGFuZGxlRHJhZ0xlYXZlKVxuICAgICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnT3ZlcilcbiAgICAgICAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBoYW5kbGVEcm9wKVxuICAgICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBoYW5kbGVQYXN0ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gbnVsbFxuICB9LCBbaGFuZGxlRHJhZ0VudGVyLCBoYW5kbGVEcmFnTGVhdmUsIGhhbmRsZURyb3AsIGhhbmRsZVBhc3RlXSlcblxuICBjb25zdCBjbGFzc2VzID0gW2Jhc2VDbGFzcywgY2xhc3NOYW1lLCBkcmFnZ2luZyA/ICdkcmFnZ2luZycgOiAnJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHJlZj17ZHJvcFJlZn0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19maWxlLWJ1dHRvbmB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKClcbiAgICAgICAgfX1cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgID5cbiAgICAgICAge3QoJ3VwbG9hZDpzZWxlY3RGaWxlJyl9XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ZpbGUtYnV0dG9uYH1cbiAgICAgICAgb25DbGljaz17b25QYXN0ZVVybENsaWNrfVxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgPlxuICAgICAgICB7dCgndXBsb2FkOnBhc3RlVVJMJyl9XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBhY2NlcHQ9e21pbWVUeXBlcz8uam9pbignLCcpfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hpZGRlbi1pbnB1dGB9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlU2VsZWN0aW9ufVxuICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAvPlxuXG4gICAgICA8cCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgIHt0KCdnZW5lcmFsOm9yJyl9IHt0KCdkcmFnQW5kRHJvcCcpfVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiRHJvcHpvbmUiLCJoYW5kbGVEcmFnT3ZlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImJhc2VDbGFzcyIsImNsYXNzTmFtZSIsIm1pbWVUeXBlcyIsIm9uQ2hhbmdlIiwib25QYXN0ZVVybENsaWNrIiwiZHJvcFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsInVzZVN0YXRlIiwiaW5wdXRSZWYiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJoYW5kbGVQYXN0ZSIsInVzZUNhbGxiYWNrIiwiY2xpcGJvYXJkRGF0YSIsImZpbGVzIiwibGVuZ3RoIiwiaGFuZGxlRHJhZ0VudGVyIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaGFuZGxlRHJvcCIsImRhdGFUcmFuc2ZlciIsImNsZWFyRGF0YSIsImhhbmRsZUZpbGVTZWxlY3Rpb24iLCJ0YXJnZXQiLCJ1c2VFZmZlY3QiLCJkaXYiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJyZWYiLCJCdXR0b24iLCJidXR0b25TdHlsZSIsIm9uQ2xpY2siLCJjbGljayIsInNpemUiLCJpbnB1dCIsImFjY2VwdCIsInR5cGUiLCJwIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQW9CYUE7OztlQUFBQTs7OzhEQXBCSzs4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