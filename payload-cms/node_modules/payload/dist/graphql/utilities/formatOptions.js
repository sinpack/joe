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
const _types = require("../../fields/config/types");
const _formatName = /*#__PURE__*/ _interop_require_default(require("./formatName"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const formatOptions = (field)=>{
    return field.options.reduce((values, option)=>{
        if ((0, _types.optionIsObject)(option)) {
            return {
                ...values,
                [(0, _formatName.default)(option.value)]: {
                    value: option.value
                }
            };
        }
        return {
            ...values,
            [(0, _formatName.default)(option)]: {
                value: option
            }
        };
    }, {});
};
const _default = formatOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy9mb3JtYXRPcHRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmFkaW9GaWVsZCwgU2VsZWN0RmllbGQgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBvcHRpb25Jc09iamVjdCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgZm9ybWF0TmFtZSBmcm9tICcuL2Zvcm1hdE5hbWUnXG5cbmNvbnN0IGZvcm1hdE9wdGlvbnMgPSAoZmllbGQ6IFJhZGlvRmllbGQgfCBTZWxlY3RGaWVsZCkgPT4ge1xuICByZXR1cm4gZmllbGQub3B0aW9ucy5yZWR1Y2UoKHZhbHVlcywgb3B0aW9uKSA9PiB7XG4gICAgaWYgKG9wdGlvbklzT2JqZWN0KG9wdGlvbikpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW2Zvcm1hdE5hbWUob3B0aW9uLnZhbHVlKV06IHtcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBbZm9ybWF0TmFtZShvcHRpb24pXToge1xuICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgfSxcbiAgICB9XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRPcHRpb25zXG4iXSwibmFtZXMiOlsiZm9ybWF0T3B0aW9ucyIsImZpZWxkIiwib3B0aW9ucyIsInJlZHVjZSIsInZhbHVlcyIsIm9wdGlvbiIsIm9wdGlvbklzT2JqZWN0IiwiZm9ybWF0TmFtZSIsInZhbHVlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXlCQTs7O2VBQUE7Ozt1QkF2QitCO21FQUNSOzs7Ozs7QUFFdkIsTUFBTUEsZ0JBQWdCLENBQUNDO0lBQ3JCLE9BQU9BLE1BQU1DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLFFBQVFDO1FBQ25DLElBQUlDLElBQUFBLHFCQUFjLEVBQUNELFNBQVM7WUFDMUIsT0FBTztnQkFDTCxHQUFHRCxNQUFNO2dCQUNULENBQUNHLElBQUFBLG1CQUFVLEVBQUNGLE9BQU9HLEtBQUssRUFBRSxFQUFFO29CQUMxQkEsT0FBT0gsT0FBT0csS0FBSztnQkFDckI7WUFDRjtRQUNGO1FBRUEsT0FBTztZQUNMLEdBQUdKLE1BQU07WUFDVCxDQUFDRyxJQUFBQSxtQkFBVSxFQUFDRixRQUFRLEVBQUU7Z0JBQ3BCRyxPQUFPSDtZQUNUO1FBQ0Y7SUFDRixHQUFHLENBQUM7QUFDTjtNQUVBLFdBQWVMIn0=