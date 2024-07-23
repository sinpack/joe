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
// Take a where query and flatten it to all top-level operators
const flattenWhereToOperators = (query)=>Object.entries(query).reduce((flattenedConstraints, [key, val])=>{
        if ((key === 'and' || key === 'or') && Array.isArray(val)) {
            return [
                ...flattenedConstraints,
                ...val.reduce((subVals, subVal)=>{
                    return [
                        ...subVals,
                        ...flattenWhereToOperators(subVal)
                    ];
                }, [])
            ];
        }
        return [
            ...flattenedConstraints,
            val
        ];
    }, []);
const _default = flattenWhereToOperators;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9mbGF0dGVuV2hlcmVUb09wZXJhdG9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFdoZXJlLCBXaGVyZUZpZWxkIH0gZnJvbSAnLi4vdHlwZXMnXG5cbi8vIFRha2UgYSB3aGVyZSBxdWVyeSBhbmQgZmxhdHRlbiBpdCB0byBhbGwgdG9wLWxldmVsIG9wZXJhdG9yc1xuY29uc3QgZmxhdHRlbldoZXJlVG9PcGVyYXRvcnMgPSAocXVlcnk6IFdoZXJlKTogV2hlcmVGaWVsZFtdID0+XG4gIE9iamVjdC5lbnRyaWVzKHF1ZXJ5KS5yZWR1Y2UoKGZsYXR0ZW5lZENvbnN0cmFpbnRzLCBba2V5LCB2YWxdKSA9PiB7XG4gICAgaWYgKChrZXkgPT09ICdhbmQnIHx8IGtleSA9PT0gJ29yJykgJiYgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5mbGF0dGVuZWRDb25zdHJhaW50cyxcbiAgICAgICAgLi4udmFsLnJlZHVjZSgoc3ViVmFscywgc3ViVmFsKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5zdWJWYWxzLCAuLi5mbGF0dGVuV2hlcmVUb09wZXJhdG9ycyhzdWJWYWwpXVxuICAgICAgICB9LCBbXSksXG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIFsuLi5mbGF0dGVuZWRDb25zdHJhaW50cywgdmFsXVxuICB9LCBbXSlcblxuZXhwb3J0IGRlZmF1bHQgZmxhdHRlbldoZXJlVG9PcGVyYXRvcnNcbiJdLCJuYW1lcyI6WyJmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyIsInF1ZXJ5IiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImZsYXR0ZW5lZENvbnN0cmFpbnRzIiwia2V5IiwidmFsIiwiQXJyYXkiLCJpc0FycmF5Iiwic3ViVmFscyIsInN1YlZhbCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWlCQTs7O2VBQUE7OztBQWZBLCtEQUErRDtBQUMvRCxNQUFNQSwwQkFBMEIsQ0FBQ0MsUUFDL0JDLE9BQU9DLE9BQU8sQ0FBQ0YsT0FBT0csTUFBTSxDQUFDLENBQUNDLHNCQUFzQixDQUFDQyxLQUFLQyxJQUFJO1FBQzVELElBQUksQUFBQ0QsQ0FBQUEsUUFBUSxTQUFTQSxRQUFRLElBQUcsS0FBTUUsTUFBTUMsT0FBTyxDQUFDRixNQUFNO1lBQ3pELE9BQU87bUJBQ0ZGO21CQUNBRSxJQUFJSCxNQUFNLENBQUMsQ0FBQ00sU0FBU0M7b0JBQ3RCLE9BQU87MkJBQUlEOzJCQUFZVix3QkFBd0JXO3FCQUFRO2dCQUN6RCxHQUFHLEVBQUU7YUFDTjtRQUNIO1FBRUEsT0FBTztlQUFJTjtZQUFzQkU7U0FBSTtJQUN2QyxHQUFHLEVBQUU7TUFFUCxXQUFlUCJ9