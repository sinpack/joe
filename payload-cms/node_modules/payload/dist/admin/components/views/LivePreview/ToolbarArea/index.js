"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ToolbarArea", {
    enumerable: true,
    get: function() {
        return ToolbarArea;
    }
});
const _core = require("@dnd-kit/core");
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'toolbar-area';
const ToolbarArea = (props)=>{
    const { children } = props;
    const { setNodeRef } = (0, _core.useDroppable)({
        id: 'live-preview-area'
    });
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass,
        ref: setNodeRef
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xpdmVQcmV2aWV3L1Rvb2xiYXJBcmVhL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEcm9wcGFibGUgfSBmcm9tICdAZG5kLWtpdC9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3Rvb2xiYXItYXJlYSdcblxuZXhwb3J0IGNvbnN0IFRvb2xiYXJBcmVhOiBSZWFjdC5GQzx7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzXG5cbiAgY29uc3QgeyBzZXROb2RlUmVmIH0gPSB1c2VEcm9wcGFibGUoe1xuICAgIGlkOiAnbGl2ZS1wcmV2aWV3LWFyZWEnLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30gcmVmPXtzZXROb2RlUmVmfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRvb2xiYXJBcmVhIiwiYmFzZUNsYXNzIiwicHJvcHMiLCJjaGlsZHJlbiIsInNldE5vZGVSZWYiLCJ1c2VEcm9wcGFibGUiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQU9hQTs7O2VBQUFBOzs7c0JBUGdCOzhEQUNYO1FBRVg7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFFWCxNQUFNRCxjQUVSLENBQUNFO0lBQ0osTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0Q7SUFFckIsTUFBTSxFQUFFRSxVQUFVLEVBQUUsR0FBR0MsSUFBQUEsa0JBQVksRUFBQztRQUNsQ0MsSUFBSTtJQUNOO0lBRUEscUJBQ0UsNkJBQUNDO1FBQUlDLFdBQVdQO1FBQVdRLEtBQUtMO09BQzdCRDtBQUdQIn0=