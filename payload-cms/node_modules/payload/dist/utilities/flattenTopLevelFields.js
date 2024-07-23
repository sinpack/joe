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
const _types = require("../fields/config/types");
/**
 * Flattens a collection's fields into a single array of fields, as long
 * as the fields do not affect data.
 *
 * @param fields
 * @param keepPresentationalFields if true, will skip flattening fields that are presentational only
 */ const flattenFields = (fields, keepPresentationalFields)=>{
    return fields.reduce((fieldsToUse, field)=>{
        if ((0, _types.fieldAffectsData)(field) || keepPresentationalFields && (0, _types.fieldIsPresentationalOnly)(field)) {
            return [
                ...fieldsToUse,
                field
            ];
        }
        if ((0, _types.fieldHasSubFields)(field)) {
            return [
                ...fieldsToUse,
                ...flattenFields(field.fields, keepPresentationalFields)
            ];
        }
        if (field.type === 'tabs') {
            return [
                ...fieldsToUse,
                ...field.tabs.reduce((tabFields, tab)=>{
                    return [
                        ...tabFields,
                        ...(0, _types.tabHasName)(tab) ? [
                            {
                                ...tab,
                                type: 'tab'
                            }
                        ] : flattenFields(tab.fields, keepPresentationalFields)
                    ];
                }, [])
            ];
        }
        return fieldsToUse;
    }, []);
};
const _default = flattenFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmxhdHRlblRvcExldmVsRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmllbGQsIEZpZWxkQWZmZWN0aW5nRGF0YSwgRmllbGRQcmVzZW50YXRpb25hbE9ubHkgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQge1xuICBmaWVsZEFmZmVjdHNEYXRhLFxuICBmaWVsZEhhc1N1YkZpZWxkcyxcbiAgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSxcbiAgdGFiSGFzTmFtZSxcbn0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuLyoqXG4gKiBGbGF0dGVucyBhIGNvbGxlY3Rpb24ncyBmaWVsZHMgaW50byBhIHNpbmdsZSBhcnJheSBvZiBmaWVsZHMsIGFzIGxvbmdcbiAqIGFzIHRoZSBmaWVsZHMgZG8gbm90IGFmZmVjdCBkYXRhLlxuICpcbiAqIEBwYXJhbSBmaWVsZHNcbiAqIEBwYXJhbSBrZWVwUHJlc2VudGF0aW9uYWxGaWVsZHMgaWYgdHJ1ZSwgd2lsbCBza2lwIGZsYXR0ZW5pbmcgZmllbGRzIHRoYXQgYXJlIHByZXNlbnRhdGlvbmFsIG9ubHlcbiAqL1xuY29uc3QgZmxhdHRlbkZpZWxkcyA9IChcbiAgZmllbGRzOiBGaWVsZFtdLFxuICBrZWVwUHJlc2VudGF0aW9uYWxGaWVsZHM/OiBib29sZWFuLFxuKTogKEZpZWxkQWZmZWN0aW5nRGF0YSB8IEZpZWxkUHJlc2VudGF0aW9uYWxPbmx5KVtdID0+IHtcbiAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKGZpZWxkc1RvVXNlLCBmaWVsZCkgPT4ge1xuICAgIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSB8fCAoa2VlcFByZXNlbnRhdGlvbmFsRmllbGRzICYmIGZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkoZmllbGQpKSkge1xuICAgICAgcmV0dXJuIFsuLi5maWVsZHNUb1VzZSwgZmllbGRdXG4gICAgfVxuXG4gICAgaWYgKGZpZWxkSGFzU3ViRmllbGRzKGZpZWxkKSkge1xuICAgICAgcmV0dXJuIFsuLi5maWVsZHNUb1VzZSwgLi4uZmxhdHRlbkZpZWxkcyhmaWVsZC5maWVsZHMsIGtlZXBQcmVzZW50YXRpb25hbEZpZWxkcyldXG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uZmllbGRzVG9Vc2UsXG4gICAgICAgIC4uLmZpZWxkLnRhYnMucmVkdWNlKCh0YWJGaWVsZHMsIHRhYikgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi50YWJGaWVsZHMsXG4gICAgICAgICAgICAuLi4odGFiSGFzTmFtZSh0YWIpXG4gICAgICAgICAgICAgID8gW3sgLi4udGFiLCB0eXBlOiAndGFiJyB9XVxuICAgICAgICAgICAgICA6IGZsYXR0ZW5GaWVsZHModGFiLmZpZWxkcywga2VlcFByZXNlbnRhdGlvbmFsRmllbGRzKSksXG4gICAgICAgICAgXVxuICAgICAgICB9LCBbXSksXG4gICAgICBdXG4gICAgfVxuICAgIHJldHVybiBmaWVsZHNUb1VzZVxuICB9LCBbXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmxhdHRlbkZpZWxkc1xuIl0sIm5hbWVzIjpbImZsYXR0ZW5GaWVsZHMiLCJmaWVsZHMiLCJrZWVwUHJlc2VudGF0aW9uYWxGaWVsZHMiLCJyZWR1Y2UiLCJmaWVsZHNUb1VzZSIsImZpZWxkIiwiZmllbGRBZmZlY3RzRGF0YSIsImZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkiLCJmaWVsZEhhc1N1YkZpZWxkcyIsInR5cGUiLCJ0YWJzIiwidGFiRmllbGRzIiwidGFiIiwidGFiSGFzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE4Q0E7OztlQUFBOzs7dUJBdkNPO0FBRVA7Ozs7OztDQU1DLEdBQ0QsTUFBTUEsZ0JBQWdCLENBQ3BCQyxRQUNBQztJQUVBLE9BQU9ELE9BQU9FLE1BQU0sQ0FBQyxDQUFDQyxhQUFhQztRQUNqQyxJQUFJQyxJQUFBQSx1QkFBZ0IsRUFBQ0QsVUFBV0gsNEJBQTRCSyxJQUFBQSxnQ0FBeUIsRUFBQ0YsUUFBUztZQUM3RixPQUFPO21CQUFJRDtnQkFBYUM7YUFBTTtRQUNoQztRQUVBLElBQUlHLElBQUFBLHdCQUFpQixFQUFDSCxRQUFRO1lBQzVCLE9BQU87bUJBQUlEO21CQUFnQkosY0FBY0ssTUFBTUosTUFBTSxFQUFFQzthQUEwQjtRQUNuRjtRQUVBLElBQUlHLE1BQU1JLElBQUksS0FBSyxRQUFRO1lBQ3pCLE9BQU87bUJBQ0ZMO21CQUNBQyxNQUFNSyxJQUFJLENBQUNQLE1BQU0sQ0FBQyxDQUFDUSxXQUFXQztvQkFDL0IsT0FBTzsyQkFDRkQ7MkJBQ0NFLElBQUFBLGlCQUFVLEVBQUNELE9BQ1g7NEJBQUM7Z0NBQUUsR0FBR0EsR0FBRztnQ0FBRUgsTUFBTTs0QkFBTTt5QkFBRSxHQUN6QlQsY0FBY1ksSUFBSVgsTUFBTSxFQUFFQztxQkFDL0I7Z0JBQ0gsR0FBRyxFQUFFO2FBQ047UUFDSDtRQUNBLE9BQU9FO0lBQ1QsR0FBRyxFQUFFO0FBQ1A7TUFFQSxXQUFlSiJ9