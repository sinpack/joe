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
const _types = require("../../../../fields/config/types");
const getRemainingColumns = (fields, useAsTitle)=>fields.reduce((remaining, field)=>{
        if ((0, _types.fieldAffectsData)(field) && field.name === useAsTitle) {
            return remaining;
        }
        if (!(0, _types.fieldAffectsData)(field) && (0, _types.fieldHasSubFields)(field)) {
            return [
                ...remaining,
                ...getRemainingColumns(field.fields, useAsTitle)
            ];
        }
        if (field.type === 'tabs') {
            return [
                ...remaining,
                ...field.tabs.reduce((tabFieldColumns, tab)=>[
                        ...tabFieldColumns,
                        ...(0, _types.tabHasName)(tab) ? [
                            tab.name
                        ] : getRemainingColumns(tab.fields, useAsTitle)
                    ], [])
            ];
        }
        return [
            ...remaining,
            field.name
        ];
    }, []);
const getInitialColumnState = (fields, useAsTitle, defaultColumns)=>{
    let initialColumns = [];
    if (Array.isArray(defaultColumns) && defaultColumns.length >= 1) {
        return defaultColumns;
    }
    if (useAsTitle) {
        initialColumns.push(useAsTitle);
    }
    const remainingColumns = getRemainingColumns(fields, useAsTitle);
    initialColumns = initialColumns.concat(remainingColumns);
    initialColumns = initialColumns.slice(0, 4);
    return initialColumns;
};
const _default = getInitialColumnState;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlQ29sdW1ucy9nZXRJbml0aWFsQ29sdW1ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSwgZmllbGRIYXNTdWJGaWVsZHMsIHRhYkhhc05hbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5jb25zdCBnZXRSZW1haW5pbmdDb2x1bW5zID0gKGZpZWxkczogRmllbGRbXSwgdXNlQXNUaXRsZTogc3RyaW5nKTogc3RyaW5nW10gPT5cbiAgZmllbGRzLnJlZHVjZSgocmVtYWluaW5nLCBmaWVsZCkgPT4ge1xuICAgIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSB1c2VBc1RpdGxlKSB7XG4gICAgICByZXR1cm4gcmVtYWluaW5nXG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZEhhc1N1YkZpZWxkcyhmaWVsZCkpIHtcbiAgICAgIHJldHVybiBbLi4ucmVtYWluaW5nLCAuLi5nZXRSZW1haW5pbmdDb2x1bW5zKGZpZWxkLmZpZWxkcywgdXNlQXNUaXRsZSldXG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4ucmVtYWluaW5nLFxuICAgICAgICAuLi5maWVsZC50YWJzLnJlZHVjZShcbiAgICAgICAgICAodGFiRmllbGRDb2x1bW5zLCB0YWIpID0+IFtcbiAgICAgICAgICAgIC4uLnRhYkZpZWxkQ29sdW1ucyxcbiAgICAgICAgICAgIC4uLih0YWJIYXNOYW1lKHRhYikgPyBbdGFiLm5hbWVdIDogZ2V0UmVtYWluaW5nQ29sdW1ucyh0YWIuZmllbGRzLCB1c2VBc1RpdGxlKSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXSxcbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLnJlbWFpbmluZywgZmllbGQubmFtZV1cbiAgfSwgW10pXG5cbmNvbnN0IGdldEluaXRpYWxDb2x1bW5TdGF0ZSA9IChcbiAgZmllbGRzOiBGaWVsZFtdLFxuICB1c2VBc1RpdGxlOiBzdHJpbmcsXG4gIGRlZmF1bHRDb2x1bW5zOiBzdHJpbmdbXSxcbik6IHN0cmluZ1tdID0+IHtcbiAgbGV0IGluaXRpYWxDb2x1bW5zID0gW11cblxuICBpZiAoQXJyYXkuaXNBcnJheShkZWZhdWx0Q29sdW1ucykgJiYgZGVmYXVsdENvbHVtbnMubGVuZ3RoID49IDEpIHtcbiAgICByZXR1cm4gZGVmYXVsdENvbHVtbnNcbiAgfVxuXG4gIGlmICh1c2VBc1RpdGxlKSB7XG4gICAgaW5pdGlhbENvbHVtbnMucHVzaCh1c2VBc1RpdGxlKVxuICB9XG5cbiAgY29uc3QgcmVtYWluaW5nQ29sdW1ucyA9IGdldFJlbWFpbmluZ0NvbHVtbnMoZmllbGRzLCB1c2VBc1RpdGxlKVxuXG4gIGluaXRpYWxDb2x1bW5zID0gaW5pdGlhbENvbHVtbnMuY29uY2F0KHJlbWFpbmluZ0NvbHVtbnMpXG4gIGluaXRpYWxDb2x1bW5zID0gaW5pdGlhbENvbHVtbnMuc2xpY2UoMCwgNClcblxuICByZXR1cm4gaW5pdGlhbENvbHVtbnNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SW5pdGlhbENvbHVtblN0YXRlXG4iXSwibmFtZXMiOlsiZ2V0UmVtYWluaW5nQ29sdW1ucyIsImZpZWxkcyIsInVzZUFzVGl0bGUiLCJyZWR1Y2UiLCJyZW1haW5pbmciLCJmaWVsZCIsImZpZWxkQWZmZWN0c0RhdGEiLCJuYW1lIiwiZmllbGRIYXNTdWJGaWVsZHMiLCJ0eXBlIiwidGFicyIsInRhYkZpZWxkQ29sdW1ucyIsInRhYiIsInRhYkhhc05hbWUiLCJnZXRJbml0aWFsQ29sdW1uU3RhdGUiLCJkZWZhdWx0Q29sdW1ucyIsImluaXRpYWxDb2x1bW5zIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwicHVzaCIsInJlbWFpbmluZ0NvbHVtbnMiLCJjb25jYXQiLCJzbGljZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFxREE7OztlQUFBOzs7dUJBbkRnRTtBQUVoRSxNQUFNQSxzQkFBc0IsQ0FBQ0MsUUFBaUJDLGFBQzVDRCxPQUFPRSxNQUFNLENBQUMsQ0FBQ0MsV0FBV0M7UUFDeEIsSUFBSUMsSUFBQUEsdUJBQWdCLEVBQUNELFVBQVVBLE1BQU1FLElBQUksS0FBS0wsWUFBWTtZQUN4RCxPQUFPRTtRQUNUO1FBRUEsSUFBSSxDQUFDRSxJQUFBQSx1QkFBZ0IsRUFBQ0QsVUFBVUcsSUFBQUEsd0JBQWlCLEVBQUNILFFBQVE7WUFDeEQsT0FBTzttQkFBSUQ7bUJBQWNKLG9CQUFvQkssTUFBTUosTUFBTSxFQUFFQzthQUFZO1FBQ3pFO1FBRUEsSUFBSUcsTUFBTUksSUFBSSxLQUFLLFFBQVE7WUFDekIsT0FBTzttQkFDRkw7bUJBQ0FDLE1BQU1LLElBQUksQ0FBQ1AsTUFBTSxDQUNsQixDQUFDUSxpQkFBaUJDLE1BQVE7MkJBQ3JCRDsyQkFDQ0UsSUFBQUEsaUJBQVUsRUFBQ0QsT0FBTzs0QkFBQ0EsSUFBSUwsSUFBSTt5QkFBQyxHQUFHUCxvQkFBb0JZLElBQUlYLE1BQU0sRUFBRUM7cUJBQ3BFLEVBQ0QsRUFBRTthQUVMO1FBQ0g7UUFFQSxPQUFPO2VBQUlFO1lBQVdDLE1BQU1FLElBQUk7U0FBQztJQUNuQyxHQUFHLEVBQUU7QUFFUCxNQUFNTyx3QkFBd0IsQ0FDNUJiLFFBQ0FDLFlBQ0FhO0lBRUEsSUFBSUMsaUJBQWlCLEVBQUU7SUFFdkIsSUFBSUMsTUFBTUMsT0FBTyxDQUFDSCxtQkFBbUJBLGVBQWVJLE1BQU0sSUFBSSxHQUFHO1FBQy9ELE9BQU9KO0lBQ1Q7SUFFQSxJQUFJYixZQUFZO1FBQ2RjLGVBQWVJLElBQUksQ0FBQ2xCO0lBQ3RCO0lBRUEsTUFBTW1CLG1CQUFtQnJCLG9CQUFvQkMsUUFBUUM7SUFFckRjLGlCQUFpQkEsZUFBZU0sTUFBTSxDQUFDRDtJQUN2Q0wsaUJBQWlCQSxlQUFlTyxLQUFLLENBQUMsR0FBRztJQUV6QyxPQUFPUDtBQUNUO01BRUEsV0FBZUYifQ==