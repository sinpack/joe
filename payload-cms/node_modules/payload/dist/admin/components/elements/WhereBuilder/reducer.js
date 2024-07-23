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
const reducer = (state, action)=>{
    const newState = [
        ...state
    ];
    const { andIndex, orIndex } = action;
    switch(action.type){
        case 'add':
            {
                const { field, relation } = action;
                if (relation === 'and') {
                    newState[orIndex].and.splice(andIndex, 0, {
                        [field]: {}
                    });
                    return newState;
                }
                return [
                    ...newState,
                    {
                        and: [
                            {
                                [field]: {}
                            }
                        ]
                    }
                ];
            }
        case 'remove':
            {
                newState[orIndex].and.splice(andIndex, 1);
                if (newState[orIndex].and.length === 0) {
                    newState.splice(orIndex, 1);
                }
                return newState;
            }
        case 'update':
            {
                const { field, operator, value } = action;
                if (typeof newState[orIndex].and[andIndex] === 'object') {
                    newState[orIndex].and[andIndex] = {
                        ...newState[orIndex].and[andIndex]
                    };
                    const [existingFieldName, existingCondition] = Object.entries(newState[orIndex].and[andIndex])[0] || [
                        undefined,
                        undefined
                    ];
                    if (operator) {
                        const existingOperator = Object.keys(existingCondition)[0];
                        const newValue = existingOperator && existingOperator !== operator ? undefined : Object.values(existingCondition)[0];
                        newState[orIndex].and[andIndex] = {
                            [existingFieldName]: {
                                [operator]: newValue
                            }
                        };
                    }
                    if (field) {
                        newState[orIndex].and[andIndex] = {
                            [field]: operator ? {
                                [operator]: value
                            } : {}
                        };
                    }
                    if (value !== undefined) {
                        newState[orIndex].and[andIndex] = {
                            [existingFieldName]: Object.keys(existingCondition)[0] ? {
                                [Object.keys(existingCondition)[0]]: value
                            } : {}
                        };
                    }
                }
                return newState;
            }
        default:
            {
                return newState;
            }
    }
};
const _default = reducer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9yZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcydcbmltcG9ydCB0eXBlIHsgQWN0aW9uIH0gZnJvbSAnLi90eXBlcydcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogV2hlcmVbXSwgYWN0aW9uOiBBY3Rpb24pOiBXaGVyZVtdID0+IHtcbiAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGVdXG5cbiAgY29uc3QgeyBhbmRJbmRleCwgb3JJbmRleCB9ID0gYWN0aW9uXG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2FkZCc6IHtcbiAgICAgIGNvbnN0IHsgZmllbGQsIHJlbGF0aW9uIH0gPSBhY3Rpb25cblxuICAgICAgaWYgKHJlbGF0aW9uID09PSAnYW5kJykge1xuICAgICAgICBuZXdTdGF0ZVtvckluZGV4XS5hbmQuc3BsaWNlKGFuZEluZGV4LCAwLCB7IFtmaWVsZF06IHt9IH0pXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgICAge1xuICAgICAgICAgIGFuZDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBbZmllbGRdOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9XG5cbiAgICBjYXNlICdyZW1vdmUnOiB7XG4gICAgICBuZXdTdGF0ZVtvckluZGV4XS5hbmQuc3BsaWNlKGFuZEluZGV4LCAxKVxuXG4gICAgICBpZiAobmV3U3RhdGVbb3JJbmRleF0uYW5kLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBuZXdTdGF0ZS5zcGxpY2Uob3JJbmRleCwgMSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgfVxuXG4gICAgY2FzZSAndXBkYXRlJzoge1xuICAgICAgY29uc3QgeyBmaWVsZCwgb3BlcmF0b3IsIHZhbHVlIH0gPSBhY3Rpb25cblxuICAgICAgaWYgKHR5cGVvZiBuZXdTdGF0ZVtvckluZGV4XS5hbmRbYW5kSW5kZXhdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBuZXdTdGF0ZVtvckluZGV4XS5hbmRbYW5kSW5kZXhdID0ge1xuICAgICAgICAgIC4uLm5ld1N0YXRlW29ySW5kZXhdLmFuZFthbmRJbmRleF0sXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBbZXhpc3RpbmdGaWVsZE5hbWUsIGV4aXN0aW5nQ29uZGl0aW9uXSA9IE9iamVjdC5lbnRyaWVzKFxuICAgICAgICAgIG5ld1N0YXRlW29ySW5kZXhdLmFuZFthbmRJbmRleF0sXG4gICAgICAgIClbMF0gfHwgW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuXG4gICAgICAgIGlmIChvcGVyYXRvcikge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nT3BlcmF0b3IgPSBPYmplY3Qua2V5cyhleGlzdGluZ0NvbmRpdGlvbilbMF1cblxuICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID1cbiAgICAgICAgICAgIGV4aXN0aW5nT3BlcmF0b3IgJiYgZXhpc3RpbmdPcGVyYXRvciAhPT0gb3BlcmF0b3JcbiAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgOiBPYmplY3QudmFsdWVzKGV4aXN0aW5nQ29uZGl0aW9uKVswXVxuICAgICAgICAgIG5ld1N0YXRlW29ySW5kZXhdLmFuZFthbmRJbmRleF0gPSB7XG4gICAgICAgICAgICBbZXhpc3RpbmdGaWVsZE5hbWVdOiB7XG4gICAgICAgICAgICAgIFtvcGVyYXRvcl06IG5ld1ZhbHVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICBuZXdTdGF0ZVtvckluZGV4XS5hbmRbYW5kSW5kZXhdID0ge1xuICAgICAgICAgICAgW2ZpZWxkXTogb3BlcmF0b3IgPyB7IFtvcGVyYXRvcl06IHZhbHVlIH0gOiB7fSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG5ld1N0YXRlW29ySW5kZXhdLmFuZFthbmRJbmRleF0gPSB7XG4gICAgICAgICAgICBbZXhpc3RpbmdGaWVsZE5hbWVdOiBPYmplY3Qua2V5cyhleGlzdGluZ0NvbmRpdGlvbilbMF1cbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBbT2JqZWN0LmtleXMoZXhpc3RpbmdDb25kaXRpb24pWzBdXTogdmFsdWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IHt9LFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGVcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gbmV3U3RhdGVcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm5ld1N0YXRlIiwiYW5kSW5kZXgiLCJvckluZGV4IiwidHlwZSIsImZpZWxkIiwicmVsYXRpb24iLCJhbmQiLCJzcGxpY2UiLCJsZW5ndGgiLCJvcGVyYXRvciIsInZhbHVlIiwiZXhpc3RpbmdGaWVsZE5hbWUiLCJleGlzdGluZ0NvbmRpdGlvbiIsIk9iamVjdCIsImVudHJpZXMiLCJ1bmRlZmluZWQiLCJleGlzdGluZ09wZXJhdG9yIiwia2V5cyIsIm5ld1ZhbHVlIiwidmFsdWVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkEyRkE7OztlQUFBOzs7QUF4RkEsTUFBTUEsVUFBVSxDQUFDQyxPQUFnQkM7SUFDL0IsTUFBTUMsV0FBVztXQUFJRjtLQUFNO0lBRTNCLE1BQU0sRUFBRUcsUUFBUSxFQUFFQyxPQUFPLEVBQUUsR0FBR0g7SUFFOUIsT0FBUUEsT0FBT0ksSUFBSTtRQUNqQixLQUFLO1lBQU87Z0JBQ1YsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHTjtnQkFFNUIsSUFBSU0sYUFBYSxPQUFPO29CQUN0QkwsUUFBUSxDQUFDRSxRQUFRLENBQUNJLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDTixVQUFVLEdBQUc7d0JBQUUsQ0FBQ0csTUFBTSxFQUFFLENBQUM7b0JBQUU7b0JBQ3hELE9BQU9KO2dCQUNUO2dCQUVBLE9BQU87dUJBQ0ZBO29CQUNIO3dCQUNFTSxLQUFLOzRCQUNIO2dDQUNFLENBQUNGLE1BQU0sRUFBRSxDQUFDOzRCQUNaO3lCQUNEO29CQUNIO2lCQUNEO1lBQ0g7UUFFQSxLQUFLO1lBQVU7Z0JBQ2JKLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDSSxHQUFHLENBQUNDLE1BQU0sQ0FBQ04sVUFBVTtnQkFFdkMsSUFBSUQsUUFBUSxDQUFDRSxRQUFRLENBQUNJLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEdBQUc7b0JBQ3RDUixTQUFTTyxNQUFNLENBQUNMLFNBQVM7Z0JBQzNCO2dCQUVBLE9BQU9GO1lBQ1Q7UUFFQSxLQUFLO1lBQVU7Z0JBQ2IsTUFBTSxFQUFFSSxLQUFLLEVBQUVLLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUdYO2dCQUVuQyxJQUFJLE9BQU9DLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDSSxHQUFHLENBQUNMLFNBQVMsS0FBSyxVQUFVO29CQUN2REQsUUFBUSxDQUFDRSxRQUFRLENBQUNJLEdBQUcsQ0FBQ0wsU0FBUyxHQUFHO3dCQUNoQyxHQUFHRCxRQUFRLENBQUNFLFFBQVEsQ0FBQ0ksR0FBRyxDQUFDTCxTQUFTO29CQUNwQztvQkFFQSxNQUFNLENBQUNVLG1CQUFtQkMsa0JBQWtCLEdBQUdDLE9BQU9DLE9BQU8sQ0FDM0RkLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDSSxHQUFHLENBQUNMLFNBQVMsQ0FDaEMsQ0FBQyxFQUFFLElBQUk7d0JBQUNjO3dCQUFXQTtxQkFBVTtvQkFFOUIsSUFBSU4sVUFBVTt3QkFDWixNQUFNTyxtQkFBbUJILE9BQU9JLElBQUksQ0FBQ0wsa0JBQWtCLENBQUMsRUFBRTt3QkFFMUQsTUFBTU0sV0FDSkYsb0JBQW9CQSxxQkFBcUJQLFdBQ3JDTSxZQUNBRixPQUFPTSxNQUFNLENBQUNQLGtCQUFrQixDQUFDLEVBQUU7d0JBQ3pDWixRQUFRLENBQUNFLFFBQVEsQ0FBQ0ksR0FBRyxDQUFDTCxTQUFTLEdBQUc7NEJBQ2hDLENBQUNVLGtCQUFrQixFQUFFO2dDQUNuQixDQUFDRixTQUFTLEVBQUVTOzRCQUNkO3dCQUNGO29CQUNGO29CQUVBLElBQUlkLE9BQU87d0JBQ1RKLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDSSxHQUFHLENBQUNMLFNBQVMsR0FBRzs0QkFDaEMsQ0FBQ0csTUFBTSxFQUFFSyxXQUFXO2dDQUFFLENBQUNBLFNBQVMsRUFBRUM7NEJBQU0sSUFBSSxDQUFDO3dCQUMvQztvQkFDRjtvQkFFQSxJQUFJQSxVQUFVSyxXQUFXO3dCQUN2QmYsUUFBUSxDQUFDRSxRQUFRLENBQUNJLEdBQUcsQ0FBQ0wsU0FBUyxHQUFHOzRCQUNoQyxDQUFDVSxrQkFBa0IsRUFBRUUsT0FBT0ksSUFBSSxDQUFDTCxrQkFBa0IsQ0FBQyxFQUFFLEdBQ2xEO2dDQUNFLENBQUNDLE9BQU9JLElBQUksQ0FBQ0wsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUVGOzRCQUN2QyxJQUNBLENBQUM7d0JBQ1A7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT1Y7WUFDVDtRQUVBO1lBQVM7Z0JBQ1AsT0FBT0E7WUFDVDtJQUNGO0FBQ0Y7TUFFQSxXQUFlSCJ9