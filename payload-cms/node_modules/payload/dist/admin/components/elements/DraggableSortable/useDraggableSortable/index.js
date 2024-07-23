"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useDraggableSortable", {
    enumerable: true,
    get: function() {
        return useDraggableSortable;
    }
});
const _sortable = require("@dnd-kit/sortable");
const useDraggableSortable = (props)=>{
    const { id, disabled } = props;
    const { attributes, isDragging, listeners, setNodeRef, transform } = (0, _sortable.useSortable)({
        id,
        disabled
    });
    return {
        attributes: {
            ...attributes,
            style: {
                cursor: isDragging ? 'grabbing' : 'grab'
            }
        },
        isDragging,
        listeners,
        setNodeRef,
        transform: transform && `translate3d(${transform.x}px, ${transform.y}px, 0)`
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlL3VzZURyYWdnYWJsZVNvcnRhYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFVzZURyYWdnYWJsZUFyZ3VtZW50cyB9IGZyb20gJ0BkbmQta2l0L2NvcmUnXG5cbmltcG9ydCB7IHVzZVNvcnRhYmxlIH0gZnJvbSAnQGRuZC1raXQvc29ydGFibGUnXG5cbmltcG9ydCB0eXBlIHsgVXNlRHJhZ2dhYmxlU29ydGFibGVSZXR1cm4gfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgdXNlRHJhZ2dhYmxlU29ydGFibGUgPSAocHJvcHM6IFVzZURyYWdnYWJsZUFyZ3VtZW50cyk6IFVzZURyYWdnYWJsZVNvcnRhYmxlUmV0dXJuID0+IHtcbiAgY29uc3QgeyBpZCwgZGlzYWJsZWQgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBpc0RyYWdnaW5nLCBsaXN0ZW5lcnMsIHNldE5vZGVSZWYsIHRyYW5zZm9ybSB9ID0gdXNlU29ydGFibGUoe1xuICAgIGlkLFxuICAgIGRpc2FibGVkLFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgLi4uYXR0cmlidXRlcyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogaXNEcmFnZ2luZyA/ICdncmFiYmluZycgOiAnZ3JhYicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXNEcmFnZ2luZyxcbiAgICBsaXN0ZW5lcnMsXG4gICAgc2V0Tm9kZVJlZixcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSAmJiBgdHJhbnNsYXRlM2QoJHt0cmFuc2Zvcm0ueH1weCwgJHt0cmFuc2Zvcm0ueX1weCwgMClgLCAvLyB0cmFuc2xhdGUzZCBpcyBmYXN0ZXIgdGhhbiB0cmFuc2xhdGUgaW4gbW9zdCBicm93c2Vyc1xuICB9XG59XG4iXSwibmFtZXMiOlsidXNlRHJhZ2dhYmxlU29ydGFibGUiLCJwcm9wcyIsImlkIiwiZGlzYWJsZWQiLCJhdHRyaWJ1dGVzIiwiaXNEcmFnZ2luZyIsImxpc3RlbmVycyIsInNldE5vZGVSZWYiLCJ0cmFuc2Zvcm0iLCJ1c2VTb3J0YWJsZSIsInN0eWxlIiwiY3Vyc29yIiwieCIsInkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBTWFBOzs7ZUFBQUE7OzswQkFKZTtBQUlyQixNQUFNQSx1QkFBdUIsQ0FBQ0M7SUFDbkMsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLFFBQVEsRUFBRSxHQUFHRjtJQUV6QixNQUFNLEVBQUVHLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLElBQUFBLHFCQUFXLEVBQUM7UUFDL0VQO1FBQ0FDO0lBQ0Y7SUFFQSxPQUFPO1FBQ0xDLFlBQVk7WUFDVixHQUFHQSxVQUFVO1lBQ2JNLE9BQU87Z0JBQ0xDLFFBQVFOLGFBQWEsYUFBYTtZQUNwQztRQUNGO1FBQ0FBO1FBQ0FDO1FBQ0FDO1FBQ0FDLFdBQVdBLGFBQWEsQ0FBQyxZQUFZLEVBQUVBLFVBQVVJLENBQUMsQ0FBQyxJQUFJLEVBQUVKLFVBQVVLLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDOUU7QUFDRiJ9