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
const _iterateFields = require("./iterateFields");
const buildStateFromSchema = async (args)=>{
    const { id, config, data: fullData = {}, fieldSchema, locale, operation, preferences, t, user } = args;
    if (fieldSchema) {
        const state = {};
        await (0, _iterateFields.iterateFields)({
            id,
            config,
            data: fullData,
            fields: fieldSchema,
            fullData,
            locale,
            operation,
            parentPassesCondition: true,
            path: '',
            preferences,
            state,
            t,
            user
        });
        return state;
    }
    return {};
};
const _default = buildStateFromSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBURnVuY3Rpb24gfSBmcm9tICdpMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hdXRoJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IEZpZWxkIGFzIEZpZWxkU2NoZW1hIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgRGF0YSwgRmllbGRzIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCB7IGl0ZXJhdGVGaWVsZHMgfSBmcm9tICcuL2l0ZXJhdGVGaWVsZHMnXG5cbnR5cGUgQXJncyA9IHtcbiAgY29uZmlnOiBTYW5pdGl6ZWRDb25maWdcbiAgZGF0YT86IERhdGFcbiAgZmllbGRTY2hlbWE6IEZpZWxkU2NoZW1hW10gfCB1bmRlZmluZWRcbiAgaWQ/OiBudW1iZXIgfCBzdHJpbmdcbiAgbG9jYWxlOiBzdHJpbmdcbiAgb3BlcmF0aW9uPzogJ2NyZWF0ZScgfCAndXBkYXRlJ1xuICBwcmVmZXJlbmNlczoge1xuICAgIFtrZXk6IHN0cmluZ106IHVua25vd25cbiAgfVxuICBzaWJsaW5nRGF0YT86IERhdGFcbiAgdDogVEZ1bmN0aW9uXG4gIHVzZXI/OiBVc2VyIHwgbnVsbFxufVxuXG5jb25zdCBidWlsZFN0YXRlRnJvbVNjaGVtYSA9IGFzeW5jIChhcmdzOiBBcmdzKTogUHJvbWlzZTxGaWVsZHM+ID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGNvbmZpZyxcbiAgICBkYXRhOiBmdWxsRGF0YSA9IHt9LFxuICAgIGZpZWxkU2NoZW1hLFxuICAgIGxvY2FsZSxcbiAgICBvcGVyYXRpb24sXG4gICAgcHJlZmVyZW5jZXMsXG4gICAgdCxcbiAgICB1c2VyLFxuICB9ID0gYXJnc1xuXG4gIGlmIChmaWVsZFNjaGVtYSkge1xuICAgIGNvbnN0IHN0YXRlOiBGaWVsZHMgPSB7fVxuXG4gICAgYXdhaXQgaXRlcmF0ZUZpZWxkcyh7XG4gICAgICBpZCxcbiAgICAgIGNvbmZpZyxcbiAgICAgIGRhdGE6IGZ1bGxEYXRhLFxuICAgICAgZmllbGRzOiBmaWVsZFNjaGVtYSxcbiAgICAgIGZ1bGxEYXRhLFxuICAgICAgbG9jYWxlLFxuICAgICAgb3BlcmF0aW9uLFxuICAgICAgcGFyZW50UGFzc2VzQ29uZGl0aW9uOiB0cnVlLFxuICAgICAgcGF0aDogJycsXG4gICAgICBwcmVmZXJlbmNlcyxcbiAgICAgIHN0YXRlLFxuICAgICAgdCxcbiAgICAgIHVzZXIsXG4gICAgfSlcblxuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hXG4iXSwibmFtZXMiOlsiYnVpbGRTdGF0ZUZyb21TY2hlbWEiLCJhcmdzIiwiaWQiLCJjb25maWciLCJkYXRhIiwiZnVsbERhdGEiLCJmaWVsZFNjaGVtYSIsImxvY2FsZSIsIm9wZXJhdGlvbiIsInByZWZlcmVuY2VzIiwidCIsInVzZXIiLCJzdGF0ZSIsIml0ZXJhdGVGaWVsZHMiLCJmaWVsZHMiLCJwYXJlbnRQYXNzZXNDb25kaXRpb24iLCJwYXRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBOERBOzs7ZUFBQTs7OytCQXZEOEI7QUFpQjlCLE1BQU1BLHVCQUF1QixPQUFPQztJQUNsQyxNQUFNLEVBQ0pDLEVBQUUsRUFDRkMsTUFBTSxFQUNOQyxNQUFNQyxXQUFXLENBQUMsQ0FBQyxFQUNuQkMsV0FBVyxFQUNYQyxNQUFNLEVBQ05DLFNBQVMsRUFDVEMsV0FBVyxFQUNYQyxDQUFDLEVBQ0RDLElBQUksRUFDTCxHQUFHVjtJQUVKLElBQUlLLGFBQWE7UUFDZixNQUFNTSxRQUFnQixDQUFDO1FBRXZCLE1BQU1DLElBQUFBLDRCQUFhLEVBQUM7WUFDbEJYO1lBQ0FDO1lBQ0FDLE1BQU1DO1lBQ05TLFFBQVFSO1lBQ1JEO1lBQ0FFO1lBQ0FDO1lBQ0FPLHVCQUF1QjtZQUN2QkMsTUFBTTtZQUNOUDtZQUNBRztZQUNBRjtZQUNBQztRQUNGO1FBRUEsT0FBT0M7SUFDVDtJQUVBLE9BQU8sQ0FBQztBQUNWO01BRUEsV0FBZVoifQ==