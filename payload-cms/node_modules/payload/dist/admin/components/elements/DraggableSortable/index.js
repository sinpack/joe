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
const _core = require("@dnd-kit/core");
const _sortable = require("@dnd-kit/sortable");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
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
const DraggableSortable = (props)=>{
    const { children, className, ids, onDragEnd } = props;
    const id = (0, _react.useId)();
    const { setNodeRef } = (0, _core.useDroppable)({
        id
    });
    const sensors = (0, _core.useSensors)((0, _core.useSensor)(_core.PointerSensor, {
        activationConstraint: {
            distance: 5
        }
    }), (0, _core.useSensor)(_core.KeyboardSensor, {
        coordinateGetter: _sortable.sortableKeyboardCoordinates
    }));
    const handleDragEnd = (0, _react.useCallback)((event)=>{
        const { active, over } = event;
        if (!active || !over) return;
        if (typeof onDragEnd === 'function') {
            onDragEnd({
                event,
                moveFromIndex: ids.findIndex((_id)=>_id === active.id),
                moveToIndex: ids.findIndex((_id)=>_id === over.id)
            });
        }
    }, [
        onDragEnd,
        ids
    ]);
    return /*#__PURE__*/ _react.default.createElement(_core.DndContext, {
        collisionDetection: _core.closestCenter,
        onDragEnd: handleDragEnd,
        sensors: sensors
    }, /*#__PURE__*/ _react.default.createElement(_sortable.SortableContext, {
        items: ids
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: className,
        ref: setNodeRef
    }, children)));
};
const _default = DraggableSortable;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERyYWdFbmRFdmVudCB9IGZyb20gJ0BkbmQta2l0L2NvcmUnXG5cbmltcG9ydCB7XG4gIERuZENvbnRleHQsXG4gIEtleWJvYXJkU2Vuc29yLFxuICBQb2ludGVyU2Vuc29yLFxuICBjbG9zZXN0Q2VudGVyLFxuICB1c2VEcm9wcGFibGUsXG4gIHVzZVNlbnNvcixcbiAgdXNlU2Vuc29ycyxcbn0gZnJvbSAnQGRuZC1raXQvY29yZSdcbmltcG9ydCB7IFNvcnRhYmxlQ29udGV4dCwgc29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzIH0gZnJvbSAnQGRuZC1raXQvc29ydGFibGUnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUlkIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCBEcmFnZ2FibGVTb3J0YWJsZTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgaWRzLCBvbkRyYWdFbmQgfSA9IHByb3BzXG5cbiAgY29uc3QgaWQgPSB1c2VJZCgpXG5cbiAgY29uc3QgeyBzZXROb2RlUmVmIH0gPSB1c2VEcm9wcGFibGUoe1xuICAgIGlkLFxuICB9KVxuXG4gIGNvbnN0IHNlbnNvcnMgPSB1c2VTZW5zb3JzKFxuICAgIHVzZVNlbnNvcihQb2ludGVyU2Vuc29yLCB7XG4gICAgICBhY3RpdmF0aW9uQ29uc3RyYWludDoge1xuICAgICAgICBkaXN0YW5jZTogNSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdXNlU2Vuc29yKEtleWJvYXJkU2Vuc29yLCB7XG4gICAgICBjb29yZGluYXRlR2V0dGVyOiBzb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXMsXG4gICAgfSksXG4gIClcblxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBEcmFnRW5kRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgYWN0aXZlLCBvdmVyIH0gPSBldmVudFxuXG4gICAgICBpZiAoIWFjdGl2ZSB8fCAhb3ZlcikgcmV0dXJuXG5cbiAgICAgIGlmICh0eXBlb2Ygb25EcmFnRW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uRHJhZ0VuZCh7XG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgbW92ZUZyb21JbmRleDogaWRzLmZpbmRJbmRleCgoX2lkKSA9PiBfaWQgPT09IGFjdGl2ZS5pZCksXG4gICAgICAgICAgbW92ZVRvSW5kZXg6IGlkcy5maW5kSW5kZXgoKF9pZCkgPT4gX2lkID09PSBvdmVyLmlkKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvbkRyYWdFbmQsIGlkc10sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxEbmRDb250ZXh0IGNvbGxpc2lvbkRldGVjdGlvbj17Y2xvc2VzdENlbnRlcn0gb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfSBzZW5zb3JzPXtzZW5zb3JzfT5cbiAgICAgIDxTb3J0YWJsZUNvbnRleHQgaXRlbXM9e2lkc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHJlZj17c2V0Tm9kZVJlZn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU29ydGFibGVDb250ZXh0PlxuICAgIDwvRG5kQ29udGV4dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnZ2FibGVTb3J0YWJsZVxuIl0sIm5hbWVzIjpbIkRyYWdnYWJsZVNvcnRhYmxlIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImlkcyIsIm9uRHJhZ0VuZCIsImlkIiwidXNlSWQiLCJzZXROb2RlUmVmIiwidXNlRHJvcHBhYmxlIiwic2Vuc29ycyIsInVzZVNlbnNvcnMiLCJ1c2VTZW5zb3IiLCJQb2ludGVyU2Vuc29yIiwiYWN0aXZhdGlvbkNvbnN0cmFpbnQiLCJkaXN0YW5jZSIsIktleWJvYXJkU2Vuc29yIiwiY29vcmRpbmF0ZUdldHRlciIsInNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyIsImhhbmRsZURyYWdFbmQiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwiYWN0aXZlIiwib3ZlciIsIm1vdmVGcm9tSW5kZXgiLCJmaW5kSW5kZXgiLCJfaWQiLCJtb3ZlVG9JbmRleCIsIkRuZENvbnRleHQiLCJjb2xsaXNpb25EZXRlY3Rpb24iLCJjbG9zZXN0Q2VudGVyIiwiU29ydGFibGVDb250ZXh0IiwiaXRlbXMiLCJkaXYiLCJyZWYiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZ0VBOzs7ZUFBQTs7O3NCQXRETzswQkFDc0Q7K0RBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUMsTUFBTUEsb0JBQXFDLENBQUNDO0lBQzFDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLEdBQUcsRUFBRUMsU0FBUyxFQUFFLEdBQUdKO0lBRWhELE1BQU1LLEtBQUtDLElBQUFBLFlBQUs7SUFFaEIsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0MsSUFBQUEsa0JBQVksRUFBQztRQUNsQ0g7SUFDRjtJQUVBLE1BQU1JLFVBQVVDLElBQUFBLGdCQUFVLEVBQ3hCQyxJQUFBQSxlQUFTLEVBQUNDLG1CQUFhLEVBQUU7UUFDdkJDLHNCQUFzQjtZQUNwQkMsVUFBVTtRQUNaO0lBQ0YsSUFDQUgsSUFBQUEsZUFBUyxFQUFDSSxvQkFBYyxFQUFFO1FBQ3hCQyxrQkFBa0JDLHFDQUEyQjtJQUMvQztJQUdGLE1BQU1DLGdCQUFnQkMsSUFBQUEsa0JBQVcsRUFDL0IsQ0FBQ0M7UUFDQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBRXpCLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxNQUFNO1FBRXRCLElBQUksT0FBT2xCLGNBQWMsWUFBWTtZQUNuQ0EsVUFBVTtnQkFDUmdCO2dCQUNBRyxlQUFlcEIsSUFBSXFCLFNBQVMsQ0FBQyxDQUFDQyxNQUFRQSxRQUFRSixPQUFPaEIsRUFBRTtnQkFDdkRxQixhQUFhdkIsSUFBSXFCLFNBQVMsQ0FBQyxDQUFDQyxNQUFRQSxRQUFRSCxLQUFLakIsRUFBRTtZQUNyRDtRQUNGO0lBQ0YsR0FDQTtRQUFDRDtRQUFXRDtLQUFJO0lBR2xCLHFCQUNFLDZCQUFDd0IsZ0JBQVU7UUFBQ0Msb0JBQW9CQyxtQkFBYTtRQUFFekIsV0FBV2M7UUFBZVQsU0FBU0E7cUJBQ2hGLDZCQUFDcUIseUJBQWU7UUFBQ0MsT0FBTzVCO3FCQUN0Qiw2QkFBQzZCO1FBQUk5QixXQUFXQTtRQUFXK0IsS0FBSzFCO09BQzdCTjtBQUtYO01BRUEsV0FBZUYifQ==