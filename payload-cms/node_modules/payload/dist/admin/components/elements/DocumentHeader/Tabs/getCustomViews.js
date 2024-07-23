"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getCustomViews", {
    enumerable: true,
    get: function() {
        return getCustomViews;
    }
});
const _CustomComponent = require("../../../views/Global/Routes/CustomComponent");
const _CustomComponent1 = require("../../../views/collections/Edit/Routes/CustomComponent");
const getCustomViews = (args)=>{
    const { collection, global } = args;
    let customViews;
    if (collection) {
        const collectionViewsConfig = typeof collection?.admin?.components?.views?.Edit === 'object' && typeof collection?.admin?.components?.views?.Edit !== 'function' ? collection?.admin?.components?.views?.Edit : undefined;
        const defaultViewKeys = Object.keys((0, _CustomComponent1.defaultCollectionViews)());
        customViews = Object.entries(collectionViewsConfig || {}).reduce((prev, [key, view])=>{
            if (defaultViewKeys.includes(key)) {
                return prev;
            }
            return [
                ...prev,
                {
                    ...view,
                    key
                }
            ];
        }, []);
    }
    if (global) {
        const globalViewsConfig = typeof global?.admin?.components?.views?.Edit === 'object' && typeof global?.admin?.components?.views?.Edit !== 'function' ? global?.admin?.components?.views?.Edit : undefined;
        const defaultViewKeys = Object.keys((0, _CustomComponent.defaultGlobalViews)());
        customViews = Object.entries(globalViewsConfig || {}).reduce((prev, [key, view])=>{
            if (defaultViewKeys.includes(key)) {
                return prev;
            }
            return [
                ...prev,
                {
                    ...view,
                    key
                }
            ];
        }, []);
    }
    return customViews;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RvY3VtZW50SGVhZGVyL1RhYnMvZ2V0Q3VzdG9tVmlld3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBFZGl0Vmlld0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IGRlZmF1bHRHbG9iYWxWaWV3cyB9IGZyb20gJy4uLy4uLy4uL3ZpZXdzL0dsb2JhbC9Sb3V0ZXMvQ3VzdG9tQ29tcG9uZW50J1xuaW1wb3J0IHsgZGVmYXVsdENvbGxlY3Rpb25WaWV3cyB9IGZyb20gJy4uLy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvUm91dGVzL0N1c3RvbUNvbXBvbmVudCdcblxuZXhwb3J0IGNvbnN0IGdldEN1c3RvbVZpZXdzID0gKGFyZ3M6IHtcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBnbG9iYWw6IFNhbml0aXplZEdsb2JhbENvbmZpZ1xufSk6IEVkaXRWaWV3Q29uZmlnW10gPT4ge1xuICBjb25zdCB7IGNvbGxlY3Rpb24sIGdsb2JhbCB9ID0gYXJnc1xuXG4gIGxldCBjdXN0b21WaWV3czogRWRpdFZpZXdDb25maWdbXVxuXG4gIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgY29uc3QgY29sbGVjdGlvblZpZXdzQ29uZmlnID1cbiAgICAgIHR5cGVvZiBjb2xsZWN0aW9uPy5hZG1pbj8uY29tcG9uZW50cz8udmlld3M/LkVkaXQgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2YgY29sbGVjdGlvbj8uYWRtaW4/LmNvbXBvbmVudHM/LnZpZXdzPy5FZGl0ICE9PSAnZnVuY3Rpb24nXG4gICAgICAgID8gY29sbGVjdGlvbj8uYWRtaW4/LmNvbXBvbmVudHM/LnZpZXdzPy5FZGl0XG4gICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICBjb25zdCBkZWZhdWx0Vmlld0tleXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0Q29sbGVjdGlvblZpZXdzKCkpXG5cbiAgICBjdXN0b21WaWV3cyA9IE9iamVjdC5lbnRyaWVzKGNvbGxlY3Rpb25WaWV3c0NvbmZpZyB8fCB7fSkucmVkdWNlKChwcmV2LCBba2V5LCB2aWV3XSkgPT4ge1xuICAgICAgaWYgKGRlZmF1bHRWaWV3S2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiBwcmV2XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbLi4ucHJldiwgeyAuLi52aWV3LCBrZXkgfV1cbiAgICB9LCBbXSlcbiAgfVxuXG4gIGlmIChnbG9iYWwpIHtcbiAgICBjb25zdCBnbG9iYWxWaWV3c0NvbmZpZyA9XG4gICAgICB0eXBlb2YgZ2xvYmFsPy5hZG1pbj8uY29tcG9uZW50cz8udmlld3M/LkVkaXQgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2YgZ2xvYmFsPy5hZG1pbj8uY29tcG9uZW50cz8udmlld3M/LkVkaXQgIT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBnbG9iYWw/LmFkbWluPy5jb21wb25lbnRzPy52aWV3cz8uRWRpdFxuICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgY29uc3QgZGVmYXVsdFZpZXdLZXlzID0gT2JqZWN0LmtleXMoZGVmYXVsdEdsb2JhbFZpZXdzKCkpXG5cbiAgICBjdXN0b21WaWV3cyA9IE9iamVjdC5lbnRyaWVzKGdsb2JhbFZpZXdzQ29uZmlnIHx8IHt9KS5yZWR1Y2UoKHByZXYsIFtrZXksIHZpZXddKSA9PiB7XG4gICAgICBpZiAoZGVmYXVsdFZpZXdLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHByZXZcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFsuLi5wcmV2LCB7IC4uLnZpZXcsIGtleSB9XVxuICAgIH0sIFtdKVxuICB9XG5cbiAgcmV0dXJuIGN1c3RvbVZpZXdzXG59XG4iXSwibmFtZXMiOlsiZ2V0Q3VzdG9tVmlld3MiLCJhcmdzIiwiY29sbGVjdGlvbiIsImdsb2JhbCIsImN1c3RvbVZpZXdzIiwiY29sbGVjdGlvblZpZXdzQ29uZmlnIiwiYWRtaW4iLCJjb21wb25lbnRzIiwidmlld3MiLCJFZGl0IiwidW5kZWZpbmVkIiwiZGVmYXVsdFZpZXdLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImRlZmF1bHRDb2xsZWN0aW9uVmlld3MiLCJlbnRyaWVzIiwicmVkdWNlIiwicHJldiIsImtleSIsInZpZXciLCJpbmNsdWRlcyIsImdsb2JhbFZpZXdzQ29uZmlnIiwiZGVmYXVsdEdsb2JhbFZpZXdzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFPYUE7OztlQUFBQTs7O2lDQUhzQjtrQ0FDSTtBQUVoQyxNQUFNQSxpQkFBaUIsQ0FBQ0M7SUFJN0IsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtJQUUvQixJQUFJRztJQUVKLElBQUlGLFlBQVk7UUFDZCxNQUFNRyx3QkFDSixPQUFPSCxZQUFZSSxPQUFPQyxZQUFZQyxPQUFPQyxTQUFTLFlBQ3RELE9BQU9QLFlBQVlJLE9BQU9DLFlBQVlDLE9BQU9DLFNBQVMsYUFDbERQLFlBQVlJLE9BQU9DLFlBQVlDLE9BQU9DLE9BQ3RDQztRQUVOLE1BQU1DLGtCQUFrQkMsT0FBT0MsSUFBSSxDQUFDQyxJQUFBQSx3Q0FBc0I7UUFFMURWLGNBQWNRLE9BQU9HLE9BQU8sQ0FBQ1YseUJBQXlCLENBQUMsR0FBR1csTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBS0MsS0FBSztZQUNqRixJQUFJUixnQkFBZ0JTLFFBQVEsQ0FBQ0YsTUFBTTtnQkFDakMsT0FBT0Q7WUFDVDtZQUVBLE9BQU87bUJBQUlBO2dCQUFNO29CQUFFLEdBQUdFLElBQUk7b0JBQUVEO2dCQUFJO2FBQUU7UUFDcEMsR0FBRyxFQUFFO0lBQ1A7SUFFQSxJQUFJZixRQUFRO1FBQ1YsTUFBTWtCLG9CQUNKLE9BQU9sQixRQUFRRyxPQUFPQyxZQUFZQyxPQUFPQyxTQUFTLFlBQ2xELE9BQU9OLFFBQVFHLE9BQU9DLFlBQVlDLE9BQU9DLFNBQVMsYUFDOUNOLFFBQVFHLE9BQU9DLFlBQVlDLE9BQU9DLE9BQ2xDQztRQUVOLE1BQU1DLGtCQUFrQkMsT0FBT0MsSUFBSSxDQUFDUyxJQUFBQSxtQ0FBa0I7UUFFdERsQixjQUFjUSxPQUFPRyxPQUFPLENBQUNNLHFCQUFxQixDQUFDLEdBQUdMLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUtDLEtBQUs7WUFDN0UsSUFBSVIsZ0JBQWdCUyxRQUFRLENBQUNGLE1BQU07Z0JBQ2pDLE9BQU9EO1lBQ1Q7WUFFQSxPQUFPO21CQUFJQTtnQkFBTTtvQkFBRSxHQUFHRSxJQUFJO29CQUFFRDtnQkFBSTthQUFFO1FBQ3BDLEdBQUcsRUFBRTtJQUNQO0lBRUEsT0FBT2Q7QUFDVCJ9