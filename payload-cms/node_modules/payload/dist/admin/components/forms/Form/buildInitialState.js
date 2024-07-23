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
const buildInitialState = (data)=>{
    if (data) {
        return Object.entries(data).reduce((state, [path, value])=>({
                ...state,
                [path]: {
                    initialValue: value,
                    valid: true,
                    value
                }
            }), {});
    }
    return undefined;
};
const _default = buildInitialState;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRJbml0aWFsU3RhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVpbGRJbml0aWFsU3RhdGUgPSAoZGF0YSkgPT4ge1xuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhkYXRhKS5yZWR1Y2UoXG4gICAgICAoc3RhdGUsIFtwYXRoLCB2YWx1ZV0pID0+ICh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbcGF0aF06IHtcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IHZhbHVlLFxuICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB7fSxcbiAgICApXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkSW5pdGlhbFN0YXRlXG4iXSwibmFtZXMiOlsiYnVpbGRJbml0aWFsU3RhdGUiLCJkYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsInN0YXRlIiwicGF0aCIsInZhbHVlIiwiaW5pdGlhbFZhbHVlIiwidmFsaWQiLCJ1bmRlZmluZWQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBa0JBOzs7ZUFBQTs7O0FBbEJBLE1BQU1BLG9CQUFvQixDQUFDQztJQUN6QixJQUFJQSxNQUFNO1FBQ1IsT0FBT0MsT0FBT0MsT0FBTyxDQUFDRixNQUFNRyxNQUFNLENBQ2hDLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTUMsTUFBTSxHQUFNLENBQUE7Z0JBQ3pCLEdBQUdGLEtBQUs7Z0JBQ1IsQ0FBQ0MsS0FBSyxFQUFFO29CQUNORSxjQUFjRDtvQkFDZEUsT0FBTztvQkFDUEY7Z0JBQ0Y7WUFDRixDQUFBLEdBQ0EsQ0FBQztJQUVMO0lBRUEsT0FBT0c7QUFDVDtNQUVBLFdBQWVWIn0=