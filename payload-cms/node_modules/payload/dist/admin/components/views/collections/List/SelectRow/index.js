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
const _Input = require("../../../../forms/field-types/Checkbox/Input");
const _SelectionProvider = require("../SelectionProvider");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'select-row';
const SelectRow = ({ id })=>{
    const { selected, setSelection } = (0, _SelectionProvider.useSelection)();
    return /*#__PURE__*/ _react.default.createElement(_Input.CheckboxInput, {
        checked: selected[id],
        onToggle: ()=>setSelection(id),
        className: `${baseClass}__checkbox`
    });
};
const _default = SelectRow;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0Um93L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IENoZWNrYm94SW5wdXQgfSBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9DaGVja2JveC9JbnB1dCdcbmltcG9ydCB7IHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uL1NlbGVjdGlvblByb3ZpZGVyJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdzZWxlY3Qtcm93J1xuXG5jb25zdCBTZWxlY3RSb3c6IFJlYWN0LkZDPHsgaWQ6IG51bWJlciB8IHN0cmluZyB9PiA9ICh7IGlkIH0pID0+IHtcbiAgY29uc3QgeyBzZWxlY3RlZCwgc2V0U2VsZWN0aW9uIH0gPSB1c2VTZWxlY3Rpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPENoZWNrYm94SW5wdXRcbiAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkW2lkXX1cbiAgICAgIG9uVG9nZ2xlPXsoKSA9PiBzZXRTZWxlY3Rpb24oaWQpfVxuICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jaGVja2JveGB9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RSb3dcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJTZWxlY3RSb3ciLCJpZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0aW9uIiwidXNlU2VsZWN0aW9uIiwiQ2hlY2tib3hJbnB1dCIsImNoZWNrZWQiLCJvblRvZ2dsZSIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQW9CQTs7O2VBQUE7Ozs4REFwQmtCO3VCQUVZO21DQUNEO1FBQ3RCOzs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLFlBQStDLENBQUMsRUFBRUMsRUFBRSxFQUFFO0lBQzFELE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR0MsSUFBQUEsK0JBQVk7SUFFL0MscUJBQ0UsNkJBQUNDLG9CQUFhO1FBQ1pDLFNBQVNKLFFBQVEsQ0FBQ0QsR0FBRztRQUNyQk0sVUFBVSxJQUFNSixhQUFhRjtRQUM3Qk8sV0FBVyxDQUFDLEVBQUVULFVBQVUsVUFBVSxDQUFDOztBQUd6QztNQUVBLFdBQWVDIn0=