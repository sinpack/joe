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
const _unflatten = require("../../../utilities/unflatten");
/**
 * Reduce flattened form fields (Fields) to just map to the respective values instead of the full FormField object
 *
 * @param unflatten This also unflattens the data if `unflatten` is true. The unflattened data should match the original data structure
 * @param ignoreDisableFormData - if true, will include fields that have `disableFormData` set to true, for example, blocks or arrays fields.
 *
 */ const reduceFieldsToValues = (fields, unflatten, ignoreDisableFormData)=>{
    const data = {};
    Object.keys(fields).forEach((key)=>{
        if (ignoreDisableFormData === true || !fields[key].disableFormData) {
            data[key] = fields[key].value;
        }
    });
    if (unflatten) {
        return (0, _unflatten.unflatten)(data);
    }
    return data;
};
const _default = reduceFieldsToValues;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vcmVkdWNlRmllbGRzVG9WYWx1ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBEYXRhLCBGaWVsZHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyB1bmZsYXR0ZW4gYXMgZmxhdGxleVVuZmxhdHRlbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy91bmZsYXR0ZW4nXG5cbi8qKlxuICogUmVkdWNlIGZsYXR0ZW5lZCBmb3JtIGZpZWxkcyAoRmllbGRzKSB0byBqdXN0IG1hcCB0byB0aGUgcmVzcGVjdGl2ZSB2YWx1ZXMgaW5zdGVhZCBvZiB0aGUgZnVsbCBGb3JtRmllbGQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHVuZmxhdHRlbiBUaGlzIGFsc28gdW5mbGF0dGVucyB0aGUgZGF0YSBpZiBgdW5mbGF0dGVuYCBpcyB0cnVlLiBUaGUgdW5mbGF0dGVuZWQgZGF0YSBzaG91bGQgbWF0Y2ggdGhlIG9yaWdpbmFsIGRhdGEgc3RydWN0dXJlXG4gKiBAcGFyYW0gaWdub3JlRGlzYWJsZUZvcm1EYXRhIC0gaWYgdHJ1ZSwgd2lsbCBpbmNsdWRlIGZpZWxkcyB0aGF0IGhhdmUgYGRpc2FibGVGb3JtRGF0YWAgc2V0IHRvIHRydWUsIGZvciBleGFtcGxlLCBibG9ja3Mgb3IgYXJyYXlzIGZpZWxkcy5cbiAqXG4gKi9cbmNvbnN0IHJlZHVjZUZpZWxkc1RvVmFsdWVzID0gKFxuICBmaWVsZHM6IEZpZWxkcyxcbiAgdW5mbGF0dGVuPzogYm9vbGVhbixcbiAgaWdub3JlRGlzYWJsZUZvcm1EYXRhPzogYm9vbGVhbixcbik6IERhdGEgPT4ge1xuICBjb25zdCBkYXRhID0ge31cblxuICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChpZ25vcmVEaXNhYmxlRm9ybURhdGEgPT09IHRydWUgfHwgIWZpZWxkc1trZXldLmRpc2FibGVGb3JtRGF0YSkge1xuICAgICAgZGF0YVtrZXldID0gZmllbGRzW2tleV0udmFsdWVcbiAgICB9XG4gIH0pXG5cbiAgaWYgKHVuZmxhdHRlbikge1xuICAgIHJldHVybiBmbGF0bGV5VW5mbGF0dGVuKGRhdGEpXG4gIH1cblxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VGaWVsZHNUb1ZhbHVlc1xuIl0sIm5hbWVzIjpbInJlZHVjZUZpZWxkc1RvVmFsdWVzIiwiZmllbGRzIiwidW5mbGF0dGVuIiwiaWdub3JlRGlzYWJsZUZvcm1EYXRhIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZGlzYWJsZUZvcm1EYXRhIiwidmFsdWUiLCJmbGF0bGV5VW5mbGF0dGVuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQStCQTs7O2VBQUE7OzsyQkE3QjhDO0FBRTlDOzs7Ozs7Q0FNQyxHQUNELE1BQU1BLHVCQUF1QixDQUMzQkMsUUFDQUMsV0FDQUM7SUFFQSxNQUFNQyxPQUFPLENBQUM7SUFFZEMsT0FBT0MsSUFBSSxDQUFDTCxRQUFRTSxPQUFPLENBQUMsQ0FBQ0M7UUFDM0IsSUFBSUwsMEJBQTBCLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDTyxJQUFJLENBQUNDLGVBQWUsRUFBRTtZQUNsRUwsSUFBSSxDQUFDSSxJQUFJLEdBQUdQLE1BQU0sQ0FBQ08sSUFBSSxDQUFDRSxLQUFLO1FBQy9CO0lBQ0Y7SUFFQSxJQUFJUixXQUFXO1FBQ2IsT0FBT1MsSUFBQUEsb0JBQWdCLEVBQUNQO0lBQzFCO0lBRUEsT0FBT0E7QUFDVDtNQUVBLFdBQWVKIn0=