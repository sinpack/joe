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
const _constants = require("../../../../types/constants");
const validateWhereQuery = (whereQuery)=>{
    if (whereQuery?.or?.length > 0 && whereQuery?.or?.[0]?.and && whereQuery?.or?.[0]?.and?.length > 0) {
        // At this point we know that the whereQuery has 'or' and 'and' fields,
        // now let's check the structure and content of these fields.
        const isValid = whereQuery.or.every((orQuery)=>{
            if (orQuery.and && Array.isArray(orQuery.and)) {
                return orQuery.and.every((andQuery)=>{
                    if (typeof andQuery !== 'object') {
                        return false;
                    }
                    const andKeys = Object.keys(andQuery);
                    // If there are no keys, it's not a valid WhereField.
                    if (andKeys.length === 0) {
                        return false;
                    }
                    // eslint-disable-next-line no-restricted-syntax
                    for (const key of andKeys){
                        const operator = Object.keys(andQuery[key])[0];
                        // Check if the key is a valid Operator.
                        if (!operator || !_constants.validOperators.includes(operator)) {
                            return false;
                        }
                    }
                    return true;
                });
            }
            return false;
        });
        return isValid;
    }
    return false;
};
const _default = validateWhereQuery;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci92YWxpZGF0ZVdoZXJlUXVlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBPcGVyYXRvciwgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcydcblxuaW1wb3J0IHsgdmFsaWRPcGVyYXRvcnMgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcy9jb25zdGFudHMnXG5cbmNvbnN0IHZhbGlkYXRlV2hlcmVRdWVyeSA9ICh3aGVyZVF1ZXJ5KTogd2hlcmVRdWVyeSBpcyBXaGVyZSA9PiB7XG4gIGlmIChcbiAgICB3aGVyZVF1ZXJ5Py5vcj8ubGVuZ3RoID4gMCAmJlxuICAgIHdoZXJlUXVlcnk/Lm9yPy5bMF0/LmFuZCAmJlxuICAgIHdoZXJlUXVlcnk/Lm9yPy5bMF0/LmFuZD8ubGVuZ3RoID4gMFxuICApIHtcbiAgICAvLyBBdCB0aGlzIHBvaW50IHdlIGtub3cgdGhhdCB0aGUgd2hlcmVRdWVyeSBoYXMgJ29yJyBhbmQgJ2FuZCcgZmllbGRzLFxuICAgIC8vIG5vdyBsZXQncyBjaGVjayB0aGUgc3RydWN0dXJlIGFuZCBjb250ZW50IG9mIHRoZXNlIGZpZWxkcy5cblxuICAgIGNvbnN0IGlzVmFsaWQgPSB3aGVyZVF1ZXJ5Lm9yLmV2ZXJ5KChvclF1ZXJ5KSA9PiB7XG4gICAgICBpZiAob3JRdWVyeS5hbmQgJiYgQXJyYXkuaXNBcnJheShvclF1ZXJ5LmFuZCkpIHtcbiAgICAgICAgcmV0dXJuIG9yUXVlcnkuYW5kLmV2ZXJ5KChhbmRRdWVyeSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgYW5kUXVlcnkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYW5kS2V5cyA9IE9iamVjdC5rZXlzKGFuZFF1ZXJ5KVxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBrZXlzLCBpdCdzIG5vdCBhIHZhbGlkIFdoZXJlRmllbGQuXG4gICAgICAgICAgaWYgKGFuZEtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgYW5kS2V5cykge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSBPYmplY3Qua2V5cyhhbmRRdWVyeVtrZXldKVswXVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGtleSBpcyBhIHZhbGlkIE9wZXJhdG9yLlxuICAgICAgICAgICAgaWYgKCFvcGVyYXRvciB8fCAhdmFsaWRPcGVyYXRvcnMuaW5jbHVkZXMob3BlcmF0b3IgYXMgT3BlcmF0b3IpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIHJldHVybiBpc1ZhbGlkXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVXaGVyZVF1ZXJ5XG4iXSwibmFtZXMiOlsidmFsaWRhdGVXaGVyZVF1ZXJ5Iiwid2hlcmVRdWVyeSIsIm9yIiwibGVuZ3RoIiwiYW5kIiwiaXNWYWxpZCIsImV2ZXJ5Iiwib3JRdWVyeSIsIkFycmF5IiwiaXNBcnJheSIsImFuZFF1ZXJ5IiwiYW5kS2V5cyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJvcGVyYXRvciIsInZhbGlkT3BlcmF0b3JzIiwiaW5jbHVkZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE0Q0E7OztlQUFBOzs7MkJBMUMrQjtBQUUvQixNQUFNQSxxQkFBcUIsQ0FBQ0M7SUFDMUIsSUFDRUEsWUFBWUMsSUFBSUMsU0FBUyxLQUN6QkYsWUFBWUMsSUFBSSxDQUFDLEVBQUUsRUFBRUUsT0FDckJILFlBQVlDLElBQUksQ0FBQyxFQUFFLEVBQUVFLEtBQUtELFNBQVMsR0FDbkM7UUFDQSx1RUFBdUU7UUFDdkUsNkRBQTZEO1FBRTdELE1BQU1FLFVBQVVKLFdBQVdDLEVBQUUsQ0FBQ0ksS0FBSyxDQUFDLENBQUNDO1lBQ25DLElBQUlBLFFBQVFILEdBQUcsSUFBSUksTUFBTUMsT0FBTyxDQUFDRixRQUFRSCxHQUFHLEdBQUc7Z0JBQzdDLE9BQU9HLFFBQVFILEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQUNJO29CQUN4QixJQUFJLE9BQU9BLGFBQWEsVUFBVTt3QkFDaEMsT0FBTztvQkFDVDtvQkFDQSxNQUFNQyxVQUFVQyxPQUFPQyxJQUFJLENBQUNIO29CQUM1QixxREFBcUQ7b0JBQ3JELElBQUlDLFFBQVFSLE1BQU0sS0FBSyxHQUFHO3dCQUN4QixPQUFPO29CQUNUO29CQUNBLGdEQUFnRDtvQkFDaEQsS0FBSyxNQUFNVyxPQUFPSCxRQUFTO3dCQUN6QixNQUFNSSxXQUFXSCxPQUFPQyxJQUFJLENBQUNILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDOUMsd0NBQXdDO3dCQUN4QyxJQUFJLENBQUNDLFlBQVksQ0FBQ0MseUJBQWMsQ0FBQ0MsUUFBUSxDQUFDRixXQUF1Qjs0QkFDL0QsT0FBTzt3QkFDVDtvQkFDRjtvQkFDQSxPQUFPO2dCQUNUO1lBQ0Y7WUFDQSxPQUFPO1FBQ1Q7UUFFQSxPQUFPVjtJQUNUO0lBRUEsT0FBTztBQUNUO01BRUEsV0FBZUwifQ==