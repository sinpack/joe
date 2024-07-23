"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "iterateFields", {
    enumerable: true,
    get: function() {
        return iterateFields;
    }
});
const _types = require("../../../../../fields/config/types");
const _addFieldStatePromise = require("./addFieldStatePromise");
const iterateFields = async ({ id, anyParentLocalized = false, config, data, fields, filter, forceFullValue = false, fullData, includeSchema = false, locale, omitParents = false, operation, parentPassesCondition = true, path = '', preferences, skipConditionChecks = false, skipValidation = false, state = {}, t, user })=>{
    const promises = [];
    fields.forEach((field)=>{
        if (!(0, _types.fieldIsPresentationalOnly)(field) && !field?.admin?.disabled) {
            let passesCondition = true;
            if (!skipConditionChecks) {
                passesCondition = Boolean((field?.admin?.condition ? Boolean(field.admin.condition(fullData || {}, data || {}, {
                    user
                })) : true) && parentPassesCondition);
            }
            promises.push((0, _addFieldStatePromise.addFieldStatePromise)({
                id,
                anyParentLocalized,
                config,
                data,
                field,
                filter,
                forceFullValue,
                fullData,
                includeSchema,
                locale,
                omitParents,
                operation,
                passesCondition,
                path,
                preferences,
                skipConditionChecks,
                skipValidation,
                state,
                t,
                user
            }));
        }
    });
    await Promise.all(promises);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEvaXRlcmF0ZUZpZWxkcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFRGdW5jdGlvbiB9IGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2F1dGgnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgRmllbGQgYXMgRmllbGRTY2hlbWEgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBEYXRhLCBGaWVsZHMgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB0eXBlIHsgQWRkRmllbGRTdGF0ZVByb21pc2VBcmdzIH0gZnJvbSAnLi9hZGRGaWVsZFN0YXRlUHJvbWlzZSdcblxuaW1wb3J0IHsgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgeyBhZGRGaWVsZFN0YXRlUHJvbWlzZSB9IGZyb20gJy4vYWRkRmllbGRTdGF0ZVByb21pc2UnXG5cbnR5cGUgQXJncyA9IHtcbiAgLyoqXG4gICAqIGlmIGFueSBwYXJlbnRzIGlzIGxvY2FsaXplZCwgdGhlbiB0aGUgZmllbGQgaXMgbG9jYWxpemVkLiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYW55UGFyZW50TG9jYWxpemVkPzogYm9vbGVhblxuICAvKipcbiAgICogY29uZmlnIGlzIG9ubHkgbmVlZGVkIGZvciB2YWxpZGF0aW9uXG4gICAqL1xuICBjb25maWc/OiBTYW5pdGl6ZWRDb25maWdcbiAgZGF0YTogRGF0YVxuICBmaWVsZHM6IEZpZWxkU2NoZW1hW11cbiAgZmlsdGVyPzogKGFyZ3M6IEFkZEZpZWxkU3RhdGVQcm9taXNlQXJncykgPT4gYm9vbGVhblxuICAvKipcbiAgICogRm9yY2UgdGhlIHZhbHVlIG9mIGZpZWxkcyBsaWtlIGFycmF5cyBvciBibG9ja3MgdG8gYmUgdGhlIGZ1bGwgdmFsdWUgaW5zdGVhZCBvZiB0aGUgbGVuZ3RoIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBmb3JjZUZ1bGxWYWx1ZT86IGJvb2xlYW5cbiAgZnVsbERhdGE6IERhdGFcbiAgaWQ/OiBudW1iZXIgfCBzdHJpbmdcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGZpZWxkIHNjaGVtYSBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIHN0YXRlLiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgaW5jbHVkZVNjaGVtYT86IGJvb2xlYW5cblxuICAvKipcbiAgICogb3BlcmF0aW9uIGlzIG9ubHkgbmVlZGVkIGZvciBjaGVja2luZyBmaWVsZCBjb25kaXRpb25zXG4gICAqL1xuICBsb2NhbGU6IHN0cmluZ1xuICAvKipcbiAgICogV2hldGhlciB0byBvbWl0IHBhcmVudCBmaWVsZHMgaW4gdGhlIHN0YXRlLiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgb21pdFBhcmVudHM/OiBib29sZWFuXG4gIC8qKlxuICAgKiBvcGVyYXRpb24gaXMgb25seSBuZWVkZWQgZm9yIHZhbGlkYXRpb25cbiAgICovXG4gIG9wZXJhdGlvbjogJ2NyZWF0ZScgfCAndXBkYXRlJ1xuICBwYXJlbnRQYXNzZXNDb25kaXRpb24/OiBib29sZWFuXG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBwYXRoIG9mIHRoZSBmaWVsZC4gQGRlZmF1bHQgJydcbiAgICovXG4gIHBhdGg/OiBzdHJpbmdcbiAgcHJlZmVyZW5jZXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogdW5rbm93blxuICB9XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNraXAgY2hlY2tpbmcgdGhlIGZpZWxkJ3MgY29uZGl0aW9uLiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgc2tpcENvbmRpdGlvbkNoZWNrcz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2tpcCB2YWxpZGF0aW5nIHRoZSBmaWVsZC4gQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHNraXBWYWxpZGF0aW9uPzogYm9vbGVhblxuICBzdGF0ZT86IEZpZWxkc1xuICB0OiBURnVuY3Rpb25cbiAgdXNlcjogVXNlclxufVxuXG4vKipcbiAqIEZsYXR0ZW5zIHRoZSBmaWVsZHMgc2NoZW1hIGFuZCBmaWVsZHMgZGF0YVxuICovXG5leHBvcnQgY29uc3QgaXRlcmF0ZUZpZWxkcyA9IGFzeW5jICh7XG4gIGlkLFxuICBhbnlQYXJlbnRMb2NhbGl6ZWQgPSBmYWxzZSxcbiAgY29uZmlnLFxuICBkYXRhLFxuICBmaWVsZHMsXG4gIGZpbHRlcixcbiAgZm9yY2VGdWxsVmFsdWUgPSBmYWxzZSxcbiAgZnVsbERhdGEsXG4gIGluY2x1ZGVTY2hlbWEgPSBmYWxzZSxcbiAgbG9jYWxlLFxuICBvbWl0UGFyZW50cyA9IGZhbHNlLFxuICBvcGVyYXRpb24sXG4gIHBhcmVudFBhc3Nlc0NvbmRpdGlvbiA9IHRydWUsXG4gIHBhdGggPSAnJyxcbiAgcHJlZmVyZW5jZXMsXG4gIHNraXBDb25kaXRpb25DaGVja3MgPSBmYWxzZSxcbiAgc2tpcFZhbGlkYXRpb24gPSBmYWxzZSxcbiAgc3RhdGUgPSB7fSxcbiAgdCxcbiAgdXNlcixcbn06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgcHJvbWlzZXMgPSBbXVxuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpZiAoIWZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkoZmllbGQpICYmICFmaWVsZD8uYWRtaW4/LmRpc2FibGVkKSB7XG4gICAgICBsZXQgcGFzc2VzQ29uZGl0aW9uID0gdHJ1ZVxuICAgICAgaWYgKCFza2lwQ29uZGl0aW9uQ2hlY2tzKSB7XG4gICAgICAgIHBhc3Nlc0NvbmRpdGlvbiA9IEJvb2xlYW4oXG4gICAgICAgICAgKGZpZWxkPy5hZG1pbj8uY29uZGl0aW9uXG4gICAgICAgICAgICA/IEJvb2xlYW4oZmllbGQuYWRtaW4uY29uZGl0aW9uKGZ1bGxEYXRhIHx8IHt9LCBkYXRhIHx8IHt9LCB7IHVzZXIgfSkpXG4gICAgICAgICAgICA6IHRydWUpICYmIHBhcmVudFBhc3Nlc0NvbmRpdGlvbixcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICBhZGRGaWVsZFN0YXRlUHJvbWlzZSh7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgYW55UGFyZW50TG9jYWxpemVkLFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICBmb3JjZUZ1bGxWYWx1ZSxcbiAgICAgICAgICBmdWxsRGF0YSxcbiAgICAgICAgICBpbmNsdWRlU2NoZW1hLFxuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICBvbWl0UGFyZW50cyxcbiAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgcGFzc2VzQ29uZGl0aW9uLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgICAgc2tpcENvbmRpdGlvbkNoZWNrcyxcbiAgICAgICAgICBza2lwVmFsaWRhdGlvbixcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICB0LFxuICAgICAgICAgIHVzZXIsXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgIH1cbiAgfSlcbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG59XG4iXSwibmFtZXMiOlsiaXRlcmF0ZUZpZWxkcyIsImlkIiwiYW55UGFyZW50TG9jYWxpemVkIiwiY29uZmlnIiwiZGF0YSIsImZpZWxkcyIsImZpbHRlciIsImZvcmNlRnVsbFZhbHVlIiwiZnVsbERhdGEiLCJpbmNsdWRlU2NoZW1hIiwibG9jYWxlIiwib21pdFBhcmVudHMiLCJvcGVyYXRpb24iLCJwYXJlbnRQYXNzZXNDb25kaXRpb24iLCJwYXRoIiwicHJlZmVyZW5jZXMiLCJza2lwQ29uZGl0aW9uQ2hlY2tzIiwic2tpcFZhbGlkYXRpb24iLCJzdGF0ZSIsInQiLCJ1c2VyIiwicHJvbWlzZXMiLCJmb3JFYWNoIiwiZmllbGQiLCJmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5IiwiYWRtaW4iLCJkaXNhYmxlZCIsInBhc3Nlc0NvbmRpdGlvbiIsIkJvb2xlYW4iLCJjb25kaXRpb24iLCJwdXNoIiwiYWRkRmllbGRTdGF0ZVByb21pc2UiLCJQcm9taXNlIiwiYWxsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXNFYUE7OztlQUFBQTs7O3VCQTlENkI7c0NBQ0w7QUE2RDlCLE1BQU1BLGdCQUFnQixPQUFPLEVBQ2xDQyxFQUFFLEVBQ0ZDLHFCQUFxQixLQUFLLEVBQzFCQyxNQUFNLEVBQ05DLElBQUksRUFDSkMsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLGlCQUFpQixLQUFLLEVBQ3RCQyxRQUFRLEVBQ1JDLGdCQUFnQixLQUFLLEVBQ3JCQyxNQUFNLEVBQ05DLGNBQWMsS0FBSyxFQUNuQkMsU0FBUyxFQUNUQyx3QkFBd0IsSUFBSSxFQUM1QkMsT0FBTyxFQUFFLEVBQ1RDLFdBQVcsRUFDWEMsc0JBQXNCLEtBQUssRUFDM0JDLGlCQUFpQixLQUFLLEVBQ3RCQyxRQUFRLENBQUMsQ0FBQyxFQUNWQyxDQUFDLEVBQ0RDLElBQUksRUFDQztJQUNMLE1BQU1DLFdBQVcsRUFBRTtJQUNuQmhCLE9BQU9pQixPQUFPLENBQUMsQ0FBQ0M7UUFDZCxJQUFJLENBQUNDLElBQUFBLGdDQUF5QixFQUFDRCxVQUFVLENBQUNBLE9BQU9FLE9BQU9DLFVBQVU7WUFDaEUsSUFBSUMsa0JBQWtCO1lBQ3RCLElBQUksQ0FBQ1gscUJBQXFCO2dCQUN4Qlcsa0JBQWtCQyxRQUNoQixBQUFDTCxDQUFBQSxPQUFPRSxPQUFPSSxZQUNYRCxRQUFRTCxNQUFNRSxLQUFLLENBQUNJLFNBQVMsQ0FBQ3JCLFlBQVksQ0FBQyxHQUFHSixRQUFRLENBQUMsR0FBRztvQkFBRWdCO2dCQUFLLE1BQ2pFLElBQUcsS0FBTVA7WUFFakI7WUFFQVEsU0FBU1MsSUFBSSxDQUNYQyxJQUFBQSwwQ0FBb0IsRUFBQztnQkFDbkI5QjtnQkFDQUM7Z0JBQ0FDO2dCQUNBQztnQkFDQW1CO2dCQUNBakI7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7Z0JBQ0FlO2dCQUNBYjtnQkFDQUM7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO2dCQUNBQztZQUNGO1FBRUo7SUFDRjtJQUNBLE1BQU1ZLFFBQVFDLEdBQUcsQ0FBQ1o7QUFDcEIifQ==