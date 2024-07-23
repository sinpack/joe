"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findOptionsByValue", {
    enumerable: true,
    get: function() {
        return findOptionsByValue;
    }
});
const findOptionsByValue = ({ options, value })=>{
    if (value) {
        if (Array.isArray(value)) {
            return value.map((val)=>{
                let matchedOption;
                options.forEach((optGroup)=>{
                    if (!matchedOption) {
                        matchedOption = optGroup.options.find((option)=>{
                            if (typeof val === 'object') {
                                return option.value === val.value && option.relationTo === val.relationTo;
                            }
                            return val === option.value;
                        });
                    }
                });
                return matchedOption;
            });
        }
        let matchedOption;
        options.forEach((optGroup)=>{
            if (!matchedOption) {
                matchedOption = optGroup.options.find((option)=>{
                    if (typeof value === 'object') {
                        return option.value === value.value && option.relationTo === value.relationTo;
                    }
                    return value === option.value;
                });
            }
        });
        return matchedOption;
    }
    return undefined;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9maW5kT3B0aW9uc0J5VmFsdWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9SZWFjdFNlbGVjdC90eXBlcydcbmltcG9ydCB0eXBlIHsgT3B0aW9uR3JvdXAsIFZhbHVlIH0gZnJvbSAnLi90eXBlcydcblxudHlwZSBBcmdzID0ge1xuICBvcHRpb25zOiBPcHRpb25Hcm91cFtdXG4gIHZhbHVlOiBWYWx1ZSB8IFZhbHVlW11cbn1cblxuZXhwb3J0IGNvbnN0IGZpbmRPcHRpb25zQnlWYWx1ZSA9ICh7IG9wdGlvbnMsIHZhbHVlIH06IEFyZ3MpOiBPcHRpb24gfCBPcHRpb25bXSA9PiB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hcCgodmFsKSA9PiB7XG4gICAgICAgIGxldCBtYXRjaGVkT3B0aW9uOiBPcHRpb25cblxuICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdEdyb3VwKSA9PiB7XG4gICAgICAgICAgaWYgKCFtYXRjaGVkT3B0aW9uKSB7XG4gICAgICAgICAgICBtYXRjaGVkT3B0aW9uID0gb3B0R3JvdXAub3B0aW9ucy5maW5kKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZSA9PT0gdmFsLnZhbHVlICYmIG9wdGlvbi5yZWxhdGlvblRvID09PSB2YWwucmVsYXRpb25Ub1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZhbCA9PT0gb3B0aW9uLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbWF0Y2hlZE9wdGlvblxuICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgbWF0Y2hlZE9wdGlvbjogT3B0aW9uXG5cbiAgICBvcHRpb25zLmZvckVhY2goKG9wdEdyb3VwKSA9PiB7XG4gICAgICBpZiAoIW1hdGNoZWRPcHRpb24pIHtcbiAgICAgICAgbWF0Y2hlZE9wdGlvbiA9IG9wdEdyb3VwLm9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWUgPT09IHZhbHVlLnZhbHVlICYmIG9wdGlvbi5yZWxhdGlvblRvID09PSB2YWx1ZS5yZWxhdGlvblRvXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtYXRjaGVkT3B0aW9uXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG4iXSwibmFtZXMiOlsiZmluZE9wdGlvbnNCeVZhbHVlIiwib3B0aW9ucyIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwidmFsIiwibWF0Y2hlZE9wdGlvbiIsImZvckVhY2giLCJvcHRHcm91cCIsImZpbmQiLCJvcHRpb24iLCJyZWxhdGlvblRvIiwidW5kZWZpbmVkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFRYUE7OztlQUFBQTs7O0FBQU4sTUFBTUEscUJBQXFCLENBQUMsRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQVE7SUFDekQsSUFBSUEsT0FBTztRQUNULElBQUlDLE1BQU1DLE9BQU8sQ0FBQ0YsUUFBUTtZQUN4QixPQUFPQSxNQUFNRyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2hCLElBQUlDO2dCQUVKTixRQUFRTyxPQUFPLENBQUMsQ0FBQ0M7b0JBQ2YsSUFBSSxDQUFDRixlQUFlO3dCQUNsQkEsZ0JBQWdCRSxTQUFTUixPQUFPLENBQUNTLElBQUksQ0FBQyxDQUFDQzs0QkFDckMsSUFBSSxPQUFPTCxRQUFRLFVBQVU7Z0NBQzNCLE9BQU9LLE9BQU9ULEtBQUssS0FBS0ksSUFBSUosS0FBSyxJQUFJUyxPQUFPQyxVQUFVLEtBQUtOLElBQUlNLFVBQVU7NEJBQzNFOzRCQUVBLE9BQU9OLFFBQVFLLE9BQU9ULEtBQUs7d0JBQzdCO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9LO1lBQ1Q7UUFDRjtRQUVBLElBQUlBO1FBRUpOLFFBQVFPLE9BQU8sQ0FBQyxDQUFDQztZQUNmLElBQUksQ0FBQ0YsZUFBZTtnQkFDbEJBLGdCQUFnQkUsU0FBU1IsT0FBTyxDQUFDUyxJQUFJLENBQUMsQ0FBQ0M7b0JBQ3JDLElBQUksT0FBT1QsVUFBVSxVQUFVO3dCQUM3QixPQUFPUyxPQUFPVCxLQUFLLEtBQUtBLE1BQU1BLEtBQUssSUFBSVMsT0FBT0MsVUFBVSxLQUFLVixNQUFNVSxVQUFVO29CQUMvRTtvQkFDQSxPQUFPVixVQUFVUyxPQUFPVCxLQUFLO2dCQUMvQjtZQUNGO1FBQ0Y7UUFFQSxPQUFPSztJQUNUO0lBRUEsT0FBT007QUFDVCJ9