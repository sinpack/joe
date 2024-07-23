"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "filterFields", {
    enumerable: true,
    get: function() {
        return filterFields;
    }
});
const _types = require("../../../../exports/types");
const filterFields = (args)=>{
    const { fieldSchema, fieldTypes, filter, operation, permissions, readOnly: readOnlyOverride } = args;
    return fieldSchema.reduce((acc, field)=>{
        const fieldIsPresentational = (0, _types.fieldIsPresentationalOnly)(field);
        let FieldComponent = fieldTypes[field.type];
        if (fieldIsPresentational || !field?.hidden && field?.admin?.disabled !== true) {
            if (filter && typeof filter === 'function' && filter(field) || !filter) {
                if (field.admin && 'hidden' in field.admin && field?.admin?.hidden) {
                    FieldComponent = fieldTypes.hidden;
                }
                const isFieldAffectingData = (0, _types.fieldAffectsData)(field);
                const fieldPermissions = isFieldAffectingData ? permissions?.[field.name] : permissions;
                // if the user cannot read the field, then filter it out
                if (fieldPermissions?.read?.permission === false) {
                    return acc;
                }
                // readOnly from field config
                let readOnly = field.admin && 'readOnly' in field.admin ? field.admin.readOnly : undefined;
                // if parent field is readOnly
                // but this field is `readOnly: false`
                // the field should be editable
                if (readOnlyOverride && readOnly !== false) readOnly = true;
                // unless the user does not pass access control
                if (fieldPermissions?.[operation]?.permission === false) {
                    readOnly = true;
                }
                if (FieldComponent) {
                    acc.push({
                        name: 'name' in field ? field.name : '',
                        FieldComponent,
                        field,
                        fieldIsPresentational,
                        fieldPermissions,
                        isFieldAffectingData,
                        readOnly
                    });
                }
            }
        }
        return acc;
    }, []);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL1JlbmRlckZpZWxkcy9maWx0ZXJGaWVsZHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IEZpZWxkUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi8uLi8uLi9hdXRoJ1xuaW1wb3J0IHR5cGUgeyBGaWVsZCwgRmllbGRXaXRoUGF0aCB9IGZyb20gJy4uLy4uLy4uLy4uL2V4cG9ydHMvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IEZpZWxkVHlwZXMgfSBmcm9tICcuLi9maWVsZC10eXBlcydcblxuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSwgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSB9IGZyb20gJy4uLy4uLy4uLy4uL2V4cG9ydHMvdHlwZXMnXG5cbmV4cG9ydCB0eXBlIFJlZHVjZWRGaWVsZCA9IHtcbiAgRmllbGRDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICBmaWVsZDogRmllbGRXaXRoUGF0aFxuICBmaWVsZElzUHJlc2VudGF0aW9uYWw6IGJvb2xlYW5cbiAgZmllbGRQZXJtaXNzaW9uczogRmllbGRQZXJtaXNzaW9uc1xuICBpc0ZpZWxkQWZmZWN0aW5nRGF0YTogYm9vbGVhblxuICBuYW1lOiBzdHJpbmdcbiAgcmVhZE9ubHk6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IGZpbHRlckZpZWxkcyA9IChhcmdzOiB7XG4gIGZpZWxkU2NoZW1hOiBGaWVsZFdpdGhQYXRoW11cbiAgZmllbGRUeXBlczogRmllbGRUeXBlc1xuICBmaWx0ZXI6IChmaWVsZDogRmllbGQpID0+IGJvb2xlYW5cbiAgb3BlcmF0aW9uPzogJ2NyZWF0ZScgfCAndXBkYXRlJ1xuICBwZXJtaXNzaW9ucz86XG4gICAgfCB7XG4gICAgICAgIFtmaWVsZDogc3RyaW5nXTogRmllbGRQZXJtaXNzaW9uc1xuICAgICAgfVxuICAgIHwgRmllbGRQZXJtaXNzaW9uc1xuICByZWFkT25seT86IGJvb2xlYW5cbn0pOiBSZWR1Y2VkRmllbGRbXSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZFNjaGVtYSxcbiAgICBmaWVsZFR5cGVzLFxuICAgIGZpbHRlcixcbiAgICBvcGVyYXRpb24sXG4gICAgcGVybWlzc2lvbnMsXG4gICAgcmVhZE9ubHk6IHJlYWRPbmx5T3ZlcnJpZGUsXG4gIH0gPSBhcmdzXG5cbiAgcmV0dXJuIGZpZWxkU2NoZW1hLnJlZHVjZSgoYWNjLCBmaWVsZCk6IFJlZHVjZWRGaWVsZFtdID0+IHtcbiAgICBjb25zdCBmaWVsZElzUHJlc2VudGF0aW9uYWwgPSBmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5KGZpZWxkKVxuICAgIGxldCBGaWVsZENvbXBvbmVudCA9IGZpZWxkVHlwZXNbZmllbGQudHlwZV1cblxuICAgIGlmIChmaWVsZElzUHJlc2VudGF0aW9uYWwgfHwgKCFmaWVsZD8uaGlkZGVuICYmIGZpZWxkPy5hZG1pbj8uZGlzYWJsZWQgIT09IHRydWUpKSB7XG4gICAgICBpZiAoKGZpbHRlciAmJiB0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nICYmIGZpbHRlcihmaWVsZCkpIHx8ICFmaWx0ZXIpIHtcbiAgICAgICAgaWYgKGZpZWxkLmFkbWluICYmICdoaWRkZW4nIGluIGZpZWxkLmFkbWluICYmIGZpZWxkPy5hZG1pbj8uaGlkZGVuKSB7XG4gICAgICAgICAgRmllbGRDb21wb25lbnQgPSBmaWVsZFR5cGVzLmhpZGRlblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNGaWVsZEFmZmVjdGluZ0RhdGEgPSBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKVxuICAgICAgICBjb25zdCBmaWVsZFBlcm1pc3Npb25zID0gaXNGaWVsZEFmZmVjdGluZ0RhdGEgPyBwZXJtaXNzaW9ucz8uW2ZpZWxkLm5hbWVdIDogcGVybWlzc2lvbnNcblxuICAgICAgICAvLyBpZiB0aGUgdXNlciBjYW5ub3QgcmVhZCB0aGUgZmllbGQsIHRoZW4gZmlsdGVyIGl0IG91dFxuICAgICAgICBpZiAoZmllbGRQZXJtaXNzaW9ucz8ucmVhZD8ucGVybWlzc2lvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWFkT25seSBmcm9tIGZpZWxkIGNvbmZpZ1xuICAgICAgICBsZXQgcmVhZE9ubHkgPSBmaWVsZC5hZG1pbiAmJiAncmVhZE9ubHknIGluIGZpZWxkLmFkbWluID8gZmllbGQuYWRtaW4ucmVhZE9ubHkgOiB1bmRlZmluZWRcblxuICAgICAgICAvLyBpZiBwYXJlbnQgZmllbGQgaXMgcmVhZE9ubHlcbiAgICAgICAgLy8gYnV0IHRoaXMgZmllbGQgaXMgYHJlYWRPbmx5OiBmYWxzZWBcbiAgICAgICAgLy8gdGhlIGZpZWxkIHNob3VsZCBiZSBlZGl0YWJsZVxuICAgICAgICBpZiAocmVhZE9ubHlPdmVycmlkZSAmJiByZWFkT25seSAhPT0gZmFsc2UpIHJlYWRPbmx5ID0gdHJ1ZVxuXG4gICAgICAgIC8vIHVubGVzcyB0aGUgdXNlciBkb2VzIG5vdCBwYXNzIGFjY2VzcyBjb250cm9sXG4gICAgICAgIGlmIChmaWVsZFBlcm1pc3Npb25zPy5bb3BlcmF0aW9uXT8ucGVybWlzc2lvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZWFkT25seSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChGaWVsZENvbXBvbmVudCkge1xuICAgICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJyBpbiBmaWVsZCA/IGZpZWxkLm5hbWUgOiAnJyxcbiAgICAgICAgICAgIEZpZWxkQ29tcG9uZW50LFxuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICBmaWVsZElzUHJlc2VudGF0aW9uYWwsXG4gICAgICAgICAgICBmaWVsZFBlcm1pc3Npb25zLFxuICAgICAgICAgICAgaXNGaWVsZEFmZmVjdGluZ0RhdGEsXG4gICAgICAgICAgICByZWFkT25seSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcbn1cbiJdLCJuYW1lcyI6WyJmaWx0ZXJGaWVsZHMiLCJhcmdzIiwiZmllbGRTY2hlbWEiLCJmaWVsZFR5cGVzIiwiZmlsdGVyIiwib3BlcmF0aW9uIiwicGVybWlzc2lvbnMiLCJyZWFkT25seSIsInJlYWRPbmx5T3ZlcnJpZGUiLCJyZWR1Y2UiLCJhY2MiLCJmaWVsZCIsImZpZWxkSXNQcmVzZW50YXRpb25hbCIsImZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkiLCJGaWVsZENvbXBvbmVudCIsInR5cGUiLCJoaWRkZW4iLCJhZG1pbiIsImRpc2FibGVkIiwiaXNGaWVsZEFmZmVjdGluZ0RhdGEiLCJmaWVsZEFmZmVjdHNEYXRhIiwiZmllbGRQZXJtaXNzaW9ucyIsIm5hbWUiLCJyZWFkIiwicGVybWlzc2lvbiIsInVuZGVmaW5lZCIsInB1c2giXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFrQmFBOzs7ZUFBQUE7Ozt1QkFaK0M7QUFZckQsTUFBTUEsZUFBZSxDQUFDQztJQVkzQixNQUFNLEVBQ0pDLFdBQVcsRUFDWEMsVUFBVSxFQUNWQyxNQUFNLEVBQ05DLFNBQVMsRUFDVEMsV0FBVyxFQUNYQyxVQUFVQyxnQkFBZ0IsRUFDM0IsR0FBR1A7SUFFSixPQUFPQyxZQUFZTyxNQUFNLENBQUMsQ0FBQ0MsS0FBS0M7UUFDOUIsTUFBTUMsd0JBQXdCQyxJQUFBQSxnQ0FBeUIsRUFBQ0Y7UUFDeEQsSUFBSUcsaUJBQWlCWCxVQUFVLENBQUNRLE1BQU1JLElBQUksQ0FBQztRQUUzQyxJQUFJSCx5QkFBMEIsQ0FBQ0QsT0FBT0ssVUFBVUwsT0FBT00sT0FBT0MsYUFBYSxNQUFPO1lBQ2hGLElBQUksQUFBQ2QsVUFBVSxPQUFPQSxXQUFXLGNBQWNBLE9BQU9PLFVBQVcsQ0FBQ1AsUUFBUTtnQkFDeEUsSUFBSU8sTUFBTU0sS0FBSyxJQUFJLFlBQVlOLE1BQU1NLEtBQUssSUFBSU4sT0FBT00sT0FBT0QsUUFBUTtvQkFDbEVGLGlCQUFpQlgsV0FBV2EsTUFBTTtnQkFDcEM7Z0JBRUEsTUFBTUcsdUJBQXVCQyxJQUFBQSx1QkFBZ0IsRUFBQ1Q7Z0JBQzlDLE1BQU1VLG1CQUFtQkYsdUJBQXVCYixhQUFhLENBQUNLLE1BQU1XLElBQUksQ0FBQyxHQUFHaEI7Z0JBRTVFLHdEQUF3RDtnQkFDeEQsSUFBSWUsa0JBQWtCRSxNQUFNQyxlQUFlLE9BQU87b0JBQ2hELE9BQU9kO2dCQUNUO2dCQUVBLDZCQUE2QjtnQkFDN0IsSUFBSUgsV0FBV0ksTUFBTU0sS0FBSyxJQUFJLGNBQWNOLE1BQU1NLEtBQUssR0FBR04sTUFBTU0sS0FBSyxDQUFDVixRQUFRLEdBQUdrQjtnQkFFakYsOEJBQThCO2dCQUM5QixzQ0FBc0M7Z0JBQ3RDLCtCQUErQjtnQkFDL0IsSUFBSWpCLG9CQUFvQkQsYUFBYSxPQUFPQSxXQUFXO2dCQUV2RCwrQ0FBK0M7Z0JBQy9DLElBQUljLGtCQUFrQixDQUFDaEIsVUFBVSxFQUFFbUIsZUFBZSxPQUFPO29CQUN2RGpCLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSU8sZ0JBQWdCO29CQUNsQkosSUFBSWdCLElBQUksQ0FBQzt3QkFDUEosTUFBTSxVQUFVWCxRQUFRQSxNQUFNVyxJQUFJLEdBQUc7d0JBQ3JDUjt3QkFDQUg7d0JBQ0FDO3dCQUNBUzt3QkFDQUY7d0JBQ0FaO29CQUNGO2dCQUNGO1lBQ0Y7UUFDRjtRQUVBLE9BQU9HO0lBQ1QsR0FBRyxFQUFFO0FBQ1AifQ==