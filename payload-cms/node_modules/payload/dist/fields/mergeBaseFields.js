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
const _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
const _types = require("./config/types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const mergeBaseFields = (fields, baseFields)=>{
    const mergedFields = [
        ...fields || []
    ];
    baseFields.forEach((baseField)=>{
        let matchedIndex = null;
        if ((0, _types.fieldAffectsData)(baseField)) {
            const match = mergedFields.find((field, i)=>{
                if ((0, _types.fieldAffectsData)(field) && field.name === baseField.name) {
                    matchedIndex = i;
                    return true;
                }
                return false;
            });
            if (match) {
                const matchCopy = {
                    ...match
                };
                mergedFields.splice(matchedIndex, 1);
                const mergedField = (0, _deepmerge.default)(baseField, matchCopy);
                if ((0, _types.fieldHasSubFields)(baseField) && (0, _types.fieldHasSubFields)(matchCopy)) {
                    mergedField.fields = mergeBaseFields(matchCopy.fields, baseField.fields);
                }
                mergedFields.push(mergedField);
            } else {
                mergedFields.push(baseField);
            }
        }
    });
    return mergedFields;
};
const _default = mergeBaseFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWVsZHMvbWVyZ2VCYXNlRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnXG5cbmltcG9ydCB0eXBlIHsgRmllbGQsIEZpZWxkV2l0aFN1YkZpZWxkcyB9IGZyb20gJy4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhLCBmaWVsZEhhc1N1YkZpZWxkcyB9IGZyb20gJy4vY29uZmlnL3R5cGVzJ1xuXG5jb25zdCBtZXJnZUJhc2VGaWVsZHMgPSAoZmllbGRzOiBGaWVsZFtdLCBiYXNlRmllbGRzOiBGaWVsZFtdKTogRmllbGRbXSA9PiB7XG4gIGNvbnN0IG1lcmdlZEZpZWxkcyA9IFsuLi4oZmllbGRzIHx8IFtdKV1cblxuICBiYXNlRmllbGRzLmZvckVhY2goKGJhc2VGaWVsZCkgPT4ge1xuICAgIGxldCBtYXRjaGVkSW5kZXggPSBudWxsXG5cbiAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShiYXNlRmllbGQpKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IG1lcmdlZEZpZWxkcy5maW5kKChmaWVsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gYmFzZUZpZWxkLm5hbWUpIHtcbiAgICAgICAgICBtYXRjaGVkSW5kZXggPSBpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSlcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoQ29weTogRmllbGQgPSB7IC4uLm1hdGNoIH1cbiAgICAgICAgbWVyZ2VkRmllbGRzLnNwbGljZShtYXRjaGVkSW5kZXgsIDEpXG5cbiAgICAgICAgY29uc3QgbWVyZ2VkRmllbGQgPSBtZXJnZTxGaWVsZD4oYmFzZUZpZWxkLCBtYXRjaENvcHkpXG5cbiAgICAgICAgaWYgKGZpZWxkSGFzU3ViRmllbGRzKGJhc2VGaWVsZCkgJiYgZmllbGRIYXNTdWJGaWVsZHMobWF0Y2hDb3B5KSkge1xuICAgICAgICAgIDsobWVyZ2VkRmllbGQgYXMgRmllbGRXaXRoU3ViRmllbGRzKS5maWVsZHMgPSBtZXJnZUJhc2VGaWVsZHMoXG4gICAgICAgICAgICBtYXRjaENvcHkuZmllbGRzLFxuICAgICAgICAgICAgYmFzZUZpZWxkLmZpZWxkcyxcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBtZXJnZWRGaWVsZHMucHVzaChtZXJnZWRGaWVsZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZEZpZWxkcy5wdXNoKGJhc2VGaWVsZClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG1lcmdlZEZpZWxkc1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZXJnZUJhc2VGaWVsZHNcbiJdLCJuYW1lcyI6WyJtZXJnZUJhc2VGaWVsZHMiLCJmaWVsZHMiLCJiYXNlRmllbGRzIiwibWVyZ2VkRmllbGRzIiwiZm9yRWFjaCIsImJhc2VGaWVsZCIsIm1hdGNoZWRJbmRleCIsImZpZWxkQWZmZWN0c0RhdGEiLCJtYXRjaCIsImZpbmQiLCJmaWVsZCIsImkiLCJuYW1lIiwibWF0Y2hDb3B5Iiwic3BsaWNlIiwibWVyZ2VkRmllbGQiLCJtZXJnZSIsImZpZWxkSGFzU3ViRmllbGRzIiwicHVzaCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBNkNBOzs7ZUFBQTs7O2tFQTdDa0I7dUJBSWtDOzs7Ozs7QUFFcEQsTUFBTUEsa0JBQWtCLENBQUNDLFFBQWlCQztJQUN4QyxNQUFNQyxlQUFlO1dBQUtGLFVBQVUsRUFBRTtLQUFFO0lBRXhDQyxXQUFXRSxPQUFPLENBQUMsQ0FBQ0M7UUFDbEIsSUFBSUMsZUFBZTtRQUVuQixJQUFJQyxJQUFBQSx1QkFBZ0IsRUFBQ0YsWUFBWTtZQUMvQixNQUFNRyxRQUFRTCxhQUFhTSxJQUFJLENBQUMsQ0FBQ0MsT0FBT0M7Z0JBQ3RDLElBQUlKLElBQUFBLHVCQUFnQixFQUFDRyxVQUFVQSxNQUFNRSxJQUFJLEtBQUtQLFVBQVVPLElBQUksRUFBRTtvQkFDNUROLGVBQWVLO29CQUNmLE9BQU87Z0JBQ1Q7Z0JBRUEsT0FBTztZQUNUO1lBRUEsSUFBSUgsT0FBTztnQkFDVCxNQUFNSyxZQUFtQjtvQkFBRSxHQUFHTCxLQUFLO2dCQUFDO2dCQUNwQ0wsYUFBYVcsTUFBTSxDQUFDUixjQUFjO2dCQUVsQyxNQUFNUyxjQUFjQyxJQUFBQSxrQkFBSyxFQUFRWCxXQUFXUTtnQkFFNUMsSUFBSUksSUFBQUEsd0JBQWlCLEVBQUNaLGNBQWNZLElBQUFBLHdCQUFpQixFQUFDSixZQUFZO29CQUM5REUsWUFBbUNkLE1BQU0sR0FBR0QsZ0JBQzVDYSxVQUFVWixNQUFNLEVBQ2hCSSxVQUFVSixNQUFNO2dCQUVwQjtnQkFFQUUsYUFBYWUsSUFBSSxDQUFDSDtZQUNwQixPQUFPO2dCQUNMWixhQUFhZSxJQUFJLENBQUNiO1lBQ3BCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9GO0FBQ1Q7TUFFQSxXQUFlSCJ9