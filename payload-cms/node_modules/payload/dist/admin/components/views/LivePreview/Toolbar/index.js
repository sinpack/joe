"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LivePreviewToolbar", {
    enumerable: true,
    get: function() {
        return LivePreviewToolbar;
    }
});
const _core = require("@dnd-kit/core");
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _Drag = /*#__PURE__*/ _interop_require_default(require("../../../icons/Drag"));
const _context = require("../Context/context");
const _Controls = require("./Controls");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'live-preview-toolbar';
const DraggableToolbar = (props)=>{
    const { toolbarPosition } = (0, _context.useLivePreviewContext)();
    const { attributes, listeners, setNodeRef, transform } = (0, _core.useDraggable)({
        id: 'live-preview-toolbar'
    });
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            `${baseClass}--draggable`
        ].join(' '),
        style: {
            left: `${toolbarPosition.x}px`,
            top: `${toolbarPosition.y}px`,
            ...transform ? {
                transform: transform ? `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)` : undefined
            } : {}
        }
    }, /*#__PURE__*/ _react.default.createElement("button", {
        ...listeners,
        ...attributes,
        className: `${baseClass}__drag-handle`,
        ref: setNodeRef,
        type: "button"
    }, /*#__PURE__*/ _react.default.createElement(_Drag.default, null)), /*#__PURE__*/ _react.default.createElement(_Controls.ToolbarControls, props));
};
const StaticToolbar = (props)=>{
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            `${baseClass}--static`
        ].join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_Controls.ToolbarControls, props));
};
const LivePreviewToolbar = (props)=>{
    const { draggable } = props;
    if (draggable) {
        return /*#__PURE__*/ _react.default.createElement(DraggableToolbar, props);
    }
    return /*#__PURE__*/ _react.default.createElement(StaticToolbar, props);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xpdmVQcmV2aWV3L1Rvb2xiYXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURyYWdnYWJsZSB9IGZyb20gJ0BkbmQta2l0L2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgRWRpdFZpZXdQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5pbXBvcnQgRHJhZ0hhbmRsZSBmcm9tICcuLi8uLi8uLi9pY29ucy9EcmFnJ1xuaW1wb3J0IHsgdXNlTGl2ZVByZXZpZXdDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dC9jb250ZXh0J1xuaW1wb3J0IHsgVG9vbGJhckNvbnRyb2xzIH0gZnJvbSAnLi9Db250cm9scydcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbGl2ZS1wcmV2aWV3LXRvb2xiYXInXG5cbmNvbnN0IERyYWdnYWJsZVRvb2xiYXI6IFJlYWN0LkZDPEVkaXRWaWV3UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdG9vbGJhclBvc2l0aW9uIH0gPSB1c2VMaXZlUHJldmlld0NvbnRleHQoKVxuXG4gIGNvbnN0IHsgYXR0cmlidXRlcywgbGlzdGVuZXJzLCBzZXROb2RlUmVmLCB0cmFuc2Zvcm0gfSA9IHVzZURyYWdnYWJsZSh7XG4gICAgaWQ6ICdsaXZlLXByZXZpZXctdG9vbGJhcicsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tiYXNlQ2xhc3MsIGAke2Jhc2VDbGFzc30tLWRyYWdnYWJsZWBdLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGxlZnQ6IGAke3Rvb2xiYXJQb3NpdGlvbi54fXB4YCxcbiAgICAgICAgdG9wOiBgJHt0b29sYmFyUG9zaXRpb24ueX1weGAsXG4gICAgICAgIC4uLih0cmFuc2Zvcm1cbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICA/IGB0cmFuc2xhdGUzZCgke3RyYW5zZm9ybT8ueCB8fCAwfXB4LCAke3RyYW5zZm9ybT8ueSB8fCAwfXB4LCAwKWBcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB7Li4ubGlzdGVuZXJzfVxuICAgICAgICB7Li4uYXR0cmlidXRlc31cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kcmFnLWhhbmRsZWB9XG4gICAgICAgIHJlZj17c2V0Tm9kZVJlZn1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxEcmFnSGFuZGxlIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxUb29sYmFyQ29udHJvbHMgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFN0YXRpY1Rvb2xiYXI6IFJlYWN0LkZDPEVkaXRWaWV3UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1tiYXNlQ2xhc3MsIGAke2Jhc2VDbGFzc30tLXN0YXRpY2BdLmpvaW4oJyAnKX0+XG4gICAgICA8VG9vbGJhckNvbnRyb2xzIHsuLi5wcm9wc30gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgTGl2ZVByZXZpZXdUb29sYmFyOiBSZWFjdC5GQzxcbiAgRWRpdFZpZXdQcm9wcyAmIHtcbiAgICBkcmFnZ2FibGU/OiBib29sZWFuXG4gIH1cbj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkcmFnZ2FibGUgfSA9IHByb3BzXG5cbiAgaWYgKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiA8RHJhZ2dhYmxlVG9vbGJhciB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICByZXR1cm4gPFN0YXRpY1Rvb2xiYXIgey4uLnByb3BzfSAvPlxufVxuIl0sIm5hbWVzIjpbIkxpdmVQcmV2aWV3VG9vbGJhciIsImJhc2VDbGFzcyIsIkRyYWdnYWJsZVRvb2xiYXIiLCJwcm9wcyIsInRvb2xiYXJQb3NpdGlvbiIsInVzZUxpdmVQcmV2aWV3Q29udGV4dCIsImF0dHJpYnV0ZXMiLCJsaXN0ZW5lcnMiLCJzZXROb2RlUmVmIiwidHJhbnNmb3JtIiwidXNlRHJhZ2dhYmxlIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJqb2luIiwic3R5bGUiLCJsZWZ0IiwieCIsInRvcCIsInkiLCJ1bmRlZmluZWQiLCJidXR0b24iLCJyZWYiLCJ0eXBlIiwiRHJhZ0hhbmRsZSIsIlRvb2xiYXJDb250cm9scyIsIlN0YXRpY1Rvb2xiYXIiLCJkcmFnZ2FibGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF3RGFBOzs7ZUFBQUE7OztzQkF4RGdCOzhEQUNYOzZEQUlLO3lCQUNlOzBCQUNOO1FBQ3pCOzs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBRWxCLE1BQU1DLG1CQUE0QyxDQUFDQztJQUNqRCxNQUFNLEVBQUVDLGVBQWUsRUFBRSxHQUFHQyxJQUFBQSw4QkFBcUI7SUFFakQsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsSUFBQUEsa0JBQVksRUFBQztRQUNwRUMsSUFBSTtJQUNOO0lBRUEscUJBQ0UsNkJBQUNDO1FBQ0NDLFdBQVc7WUFBQ1o7WUFBVyxDQUFDLEVBQUVBLFVBQVUsV0FBVyxDQUFDO1NBQUMsQ0FBQ2EsSUFBSSxDQUFDO1FBQ3ZEQyxPQUFPO1lBQ0xDLE1BQU0sQ0FBQyxFQUFFWixnQkFBZ0JhLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUJDLEtBQUssQ0FBQyxFQUFFZCxnQkFBZ0JlLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDN0IsR0FBSVYsWUFDQTtnQkFDRUEsV0FBV0EsWUFDUCxDQUFDLFlBQVksRUFBRUEsV0FBV1EsS0FBSyxFQUFFLElBQUksRUFBRVIsV0FBV1UsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUNoRUM7WUFDTixJQUNBLENBQUMsQ0FBQztRQUNSO3FCQUVBLDZCQUFDQztRQUNFLEdBQUdkLFNBQVM7UUFDWixHQUFHRCxVQUFVO1FBQ2RPLFdBQVcsQ0FBQyxFQUFFWixVQUFVLGFBQWEsQ0FBQztRQUN0Q3FCLEtBQUtkO1FBQ0xlLE1BQUs7cUJBRUwsNkJBQUNDLGFBQVUsd0JBRWIsNkJBQUNDLHlCQUFlLEVBQUt0QjtBQUczQjtBQUVBLE1BQU11QixnQkFBeUMsQ0FBQ3ZCO0lBQzlDLHFCQUNFLDZCQUFDUztRQUFJQyxXQUFXO1lBQUNaO1lBQVcsQ0FBQyxFQUFFQSxVQUFVLFFBQVEsQ0FBQztTQUFDLENBQUNhLElBQUksQ0FBQztxQkFDdkQsNkJBQUNXLHlCQUFlLEVBQUt0QjtBQUczQjtBQUVPLE1BQU1ILHFCQUlULENBQUNHO0lBQ0gsTUFBTSxFQUFFd0IsU0FBUyxFQUFFLEdBQUd4QjtJQUV0QixJQUFJd0IsV0FBVztRQUNiLHFCQUFPLDZCQUFDekIsa0JBQXFCQztJQUMvQjtJQUVBLHFCQUFPLDZCQUFDdUIsZUFBa0J2QjtBQUM1QiJ9