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
const _Input = require("../../../../forms/field-types/Checkbox/Input");
const _SelectionProvider = require("../SelectionProvider");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'select-all';
const SelectAll = ()=>{
    const { t } = (0, _reacti18next.useTranslation)('general');
    const { selectAll, toggleAll } = (0, _SelectionProvider.useSelection)();
    return /*#__PURE__*/ _react.default.createElement(_Input.CheckboxInput, {
        "aria-label": selectAll === _SelectionProvider.SelectAllStatus.None ? t('selectAllRows') : t('deselectAllRows'),
        checked: selectAll === _SelectionProvider.SelectAllStatus.AllInPage || selectAll === _SelectionProvider.SelectAllStatus.AllAvailable,
        id: "select-all",
        onToggle: ()=>toggleAll(),
        partialChecked: selectAll === _SelectionProvider.SelectAllStatus.Some,
        className: `${baseClass}__checkbox`
    });
};
const _default = SelectAll;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0QWxsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB7IENoZWNrYm94SW5wdXQgfSBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9DaGVja2JveC9JbnB1dCdcbmltcG9ydCB7IFNlbGVjdEFsbFN0YXR1cywgdXNlU2VsZWN0aW9uIH0gZnJvbSAnLi4vU2VsZWN0aW9uUHJvdmlkZXInXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3NlbGVjdC1hbGwnXG5cbmNvbnN0IFNlbGVjdEFsbDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuICBjb25zdCB7IHNlbGVjdEFsbCwgdG9nZ2xlQWxsIH0gPSB1c2VTZWxlY3Rpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPENoZWNrYm94SW5wdXRcbiAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdEFsbCA9PT0gU2VsZWN0QWxsU3RhdHVzLk5vbmUgPyB0KCdzZWxlY3RBbGxSb3dzJykgOiB0KCdkZXNlbGVjdEFsbFJvd3MnKX1cbiAgICAgIGNoZWNrZWQ9e1xuICAgICAgICBzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5BbGxJblBhZ2UgfHwgc2VsZWN0QWxsID09PSBTZWxlY3RBbGxTdGF0dXMuQWxsQXZhaWxhYmxlXG4gICAgICB9XG4gICAgICBpZD1cInNlbGVjdC1hbGxcIlxuICAgICAgb25Ub2dnbGU9eygpID0+IHRvZ2dsZUFsbCgpfVxuICAgICAgcGFydGlhbENoZWNrZWQ9e3NlbGVjdEFsbCA9PT0gU2VsZWN0QWxsU3RhdHVzLlNvbWV9XG4gICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NoZWNrYm94YH1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEFsbFxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlNlbGVjdEFsbCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInNlbGVjdEFsbCIsInRvZ2dsZUFsbCIsInVzZVNlbGVjdGlvbiIsIkNoZWNrYm94SW5wdXQiLCJhcmlhLWxhYmVsIiwiU2VsZWN0QWxsU3RhdHVzIiwiTm9uZSIsImNoZWNrZWQiLCJBbGxJblBhZ2UiLCJBbGxBdmFpbGFibGUiLCJpZCIsIm9uVG9nZ2xlIiwicGFydGlhbENoZWNrZWQiLCJTb21lIiwiY2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkEyQkE7OztlQUFBOzs7OERBM0JrQjs4QkFDYTt1QkFFRDttQ0FDZ0I7UUFDdkM7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsWUFBc0I7SUFDMUIsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUM3QixNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLElBQUFBLCtCQUFZO0lBRTdDLHFCQUNFLDZCQUFDQyxvQkFBYTtRQUNaQyxjQUFZSixjQUFjSyxrQ0FBZSxDQUFDQyxJQUFJLEdBQUdSLEVBQUUsbUJBQW1CQSxFQUFFO1FBQ3hFUyxTQUNFUCxjQUFjSyxrQ0FBZSxDQUFDRyxTQUFTLElBQUlSLGNBQWNLLGtDQUFlLENBQUNJLFlBQVk7UUFFdkZDLElBQUc7UUFDSEMsVUFBVSxJQUFNVjtRQUNoQlcsZ0JBQWdCWixjQUFjSyxrQ0FBZSxDQUFDUSxJQUFJO1FBQ2xEQyxXQUFXLENBQUMsRUFBRWxCLFVBQVUsVUFBVSxDQUFDOztBQUd6QztNQUVBLFdBQWVDIn0=