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
const _types = require("../../../../../fields/config/types");
const formatFields = (config)=>{
    const hasID = config.fields.findIndex((field)=>(0, _types.fieldAffectsData)(field) && field.name === 'id') > -1;
    const defaultIDField = {
        name: 'id',
        type: 'text',
        admin: {
            disableBulkEdit: true
        },
        label: 'ID'
    };
    const shouldSkipField = (field)=>!(0, _types.fieldIsPresentationalOnly)(field) && (field.hidden === true || field.admin?.disabled === true);
    const fields = config.fields.reduce((formatted, field)=>{
        if (shouldSkipField(field)) {
            return formatted;
        }
        const formattedField = field.type === 'tabs' ? {
            ...field,
            tabs: field.tabs.map((tab)=>({
                    ...tab,
                    fields: tab.fields.filter((tabField)=>!shouldSkipField(tabField))
                }))
        } : field;
        return [
            ...formatted,
            formattedField
        ];
    }, hasID ? [] : [
        defaultIDField
    ]);
    return fields;
};
const _default = formatFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvZm9ybWF0RmllbGRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSwgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5cbmNvbnN0IGZvcm1hdEZpZWxkcyA9IChjb25maWc6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcpOiBGaWVsZFtdID0+IHtcbiAgY29uc3QgaGFzSUQgPVxuICAgIGNvbmZpZy5maWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gJ2lkJykgPiAtMVxuXG4gIGNvbnN0IGRlZmF1bHRJREZpZWxkOiBGaWVsZCA9IHtcbiAgICBuYW1lOiAnaWQnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBhZG1pbjoge1xuICAgICAgZGlzYWJsZUJ1bGtFZGl0OiB0cnVlLFxuICAgIH0sXG4gICAgbGFiZWw6ICdJRCcsXG4gIH1cblxuICBjb25zdCBzaG91bGRTa2lwRmllbGQgPSAoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiA9PlxuICAgICFmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5KGZpZWxkKSAmJiAoZmllbGQuaGlkZGVuID09PSB0cnVlIHx8IGZpZWxkLmFkbWluPy5kaXNhYmxlZCA9PT0gdHJ1ZSlcblxuICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBjb25maWcuZmllbGRzLnJlZHVjZShcbiAgICAoZm9ybWF0dGVkLCBmaWVsZCkgPT4ge1xuICAgICAgaWYgKHNob3VsZFNraXBGaWVsZChmaWVsZCkpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFxuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZWRGaWVsZCA9XG4gICAgICAgIGZpZWxkLnR5cGUgPT09ICd0YWJzJ1xuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgdGFiczogZmllbGQudGFicy5tYXAoKHRhYikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgZmllbGRzOiB0YWIuZmllbGRzLmZpbHRlcigodGFiRmllbGQpID0+ICFzaG91bGRTa2lwRmllbGQodGFiRmllbGQpKSxcbiAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogZmllbGRcblxuICAgICAgcmV0dXJuIFsuLi5mb3JtYXR0ZWQsIGZvcm1hdHRlZEZpZWxkXVxuICAgIH0sXG4gICAgaGFzSUQgPyBbXSA6IFtkZWZhdWx0SURGaWVsZF0sXG4gIClcblxuICByZXR1cm4gZmllbGRzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdEZpZWxkc1xuIl0sIm5hbWVzIjpbImZvcm1hdEZpZWxkcyIsImNvbmZpZyIsImhhc0lEIiwiZmllbGRzIiwiZmluZEluZGV4IiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwibmFtZSIsImRlZmF1bHRJREZpZWxkIiwidHlwZSIsImFkbWluIiwiZGlzYWJsZUJ1bGtFZGl0IiwibGFiZWwiLCJzaG91bGRTa2lwRmllbGQiLCJmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5IiwiaGlkZGVuIiwiZGlzYWJsZWQiLCJyZWR1Y2UiLCJmb3JtYXR0ZWQiLCJmb3JtYXR0ZWRGaWVsZCIsInRhYnMiLCJtYXAiLCJ0YWIiLCJmaWx0ZXIiLCJ0YWJGaWVsZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBOENBOzs7ZUFBQTs7O3VCQTNDNEQ7QUFFNUQsTUFBTUEsZUFBZSxDQUFDQztJQUNwQixNQUFNQyxRQUNKRCxPQUFPRSxNQUFNLENBQUNDLFNBQVMsQ0FBQyxDQUFDQyxRQUFVQyxJQUFBQSx1QkFBZ0IsRUFBQ0QsVUFBVUEsTUFBTUUsSUFBSSxLQUFLLFFBQVEsQ0FBQztJQUV4RixNQUFNQyxpQkFBd0I7UUFDNUJELE1BQU07UUFDTkUsTUFBTTtRQUNOQyxPQUFPO1lBQ0xDLGlCQUFpQjtRQUNuQjtRQUNBQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ1IsUUFDdkIsQ0FBQ1MsSUFBQUEsZ0NBQXlCLEVBQUNULFVBQVdBLENBQUFBLE1BQU1VLE1BQU0sS0FBSyxRQUFRVixNQUFNSyxLQUFLLEVBQUVNLGFBQWEsSUFBRztJQUU5RixNQUFNYixTQUFrQkYsT0FBT0UsTUFBTSxDQUFDYyxNQUFNLENBQzFDLENBQUNDLFdBQVdiO1FBQ1YsSUFBSVEsZ0JBQWdCUixRQUFRO1lBQzFCLE9BQU9hO1FBQ1Q7UUFFQSxNQUFNQyxpQkFDSmQsTUFBTUksSUFBSSxLQUFLLFNBQ1g7WUFDRSxHQUFHSixLQUFLO1lBQ1JlLE1BQU1mLE1BQU1lLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQVMsQ0FBQTtvQkFDN0IsR0FBR0EsR0FBRztvQkFDTm5CLFFBQVFtQixJQUFJbkIsTUFBTSxDQUFDb0IsTUFBTSxDQUFDLENBQUNDLFdBQWEsQ0FBQ1gsZ0JBQWdCVztnQkFDM0QsQ0FBQTtRQUNGLElBQ0FuQjtRQUVOLE9BQU87ZUFBSWE7WUFBV0M7U0FBZTtJQUN2QyxHQUNBakIsUUFBUSxFQUFFLEdBQUc7UUFBQ007S0FBZTtJQUcvQixPQUFPTDtBQUNUO01BRUEsV0FBZUgifQ==