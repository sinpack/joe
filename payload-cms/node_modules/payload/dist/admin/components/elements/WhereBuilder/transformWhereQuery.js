"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "transformWhereQuery", {
    enumerable: true,
    get: function() {
        return transformWhereQuery;
    }
});
const transformWhereQuery = (whereQuery)=>{
    if (!whereQuery) {
        return {};
    }
    // Check if 'whereQuery' has 'or' field but no 'and'. This is the case for "correct" queries
    if (whereQuery.or && !whereQuery.and) {
        return {
            or: whereQuery.or.map((query)=>{
                // ...but if the or query does not have an and, we need to add it
                if (!query.and) {
                    return {
                        and: [
                            query
                        ]
                    };
                }
                return query;
            })
        };
    }
    // Check if 'whereQuery' has 'and' field but no 'or'.
    if (whereQuery.and && !whereQuery.or) {
        return {
            or: [
                {
                    and: whereQuery.and
                }
            ]
        };
    }
    // Check if 'whereQuery' has neither 'or' nor 'and'.
    if (!whereQuery.or && !whereQuery.and) {
        return {
            or: [
                {
                    and: [
                        whereQuery
                    ]
                }
            ]
        };
    }
    // If 'whereQuery' has 'or' and 'and', just return it as it is.
    return whereQuery;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci90cmFuc2Zvcm1XaGVyZVF1ZXJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcydcblxuLyoqXG4gKiBTb21ldGhpbmcgbGlrZSBbb3JdWzBdW2FuZF1bMF1bdGV4dF1bZXF1YWxzXT1leGFtcGxlJTIwcG9zdCB3aWxsIHdvcmsgYW5kIHBhc3MgdGhyb3VnaCB0aGUgdmFsaWRhdGVXaGVyZVF1ZXJ5IGNoZWNrLlxuICogSG93ZXZlciwgc29tZXRoaW5nIGxpa2UgW3RleHRdW2VxdWFsc109ZXhhbXBsZSUyMHBvc3Qgd2lsbCBub3Qgd29yayBhbmQgd2lsbCBmYWlsIHRoZSB2YWxpZGF0ZVdoZXJlUXVlcnkgY2hlY2ssXG4gKiBldmVuIHRob3VnaCBpdCBpcyBhIHZhbGlkIFdoZXJlIHF1ZXJ5LiBUaGlzIG5lZWRzIHRvIGJlIHRyYW5zZm9ybWVkIGhlcmUuXG4gKi9cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1XaGVyZVF1ZXJ5ID0gKHdoZXJlUXVlcnkpOiBXaGVyZSA9PiB7XG4gIGlmICghd2hlcmVRdWVyeSkge1xuICAgIHJldHVybiB7fVxuICB9XG4gIC8vIENoZWNrIGlmICd3aGVyZVF1ZXJ5JyBoYXMgJ29yJyBmaWVsZCBidXQgbm8gJ2FuZCcuIFRoaXMgaXMgdGhlIGNhc2UgZm9yIFwiY29ycmVjdFwiIHF1ZXJpZXNcbiAgaWYgKHdoZXJlUXVlcnkub3IgJiYgIXdoZXJlUXVlcnkuYW5kKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yOiB3aGVyZVF1ZXJ5Lm9yLm1hcCgocXVlcnkpID0+IHtcbiAgICAgICAgLy8gLi4uYnV0IGlmIHRoZSBvciBxdWVyeSBkb2VzIG5vdCBoYXZlIGFuIGFuZCwgd2UgbmVlZCB0byBhZGQgaXRcbiAgICAgICAgaWYgKCFxdWVyeS5hbmQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW5kOiBbcXVlcnldLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnlcbiAgICAgIH0pLFxuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmICd3aGVyZVF1ZXJ5JyBoYXMgJ2FuZCcgZmllbGQgYnV0IG5vICdvcicuXG4gIGlmICh3aGVyZVF1ZXJ5LmFuZCAmJiAhd2hlcmVRdWVyeS5vcikge1xuICAgIHJldHVybiB7XG4gICAgICBvcjogW1xuICAgICAgICB7XG4gICAgICAgICAgYW5kOiB3aGVyZVF1ZXJ5LmFuZCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgJ3doZXJlUXVlcnknIGhhcyBuZWl0aGVyICdvcicgbm9yICdhbmQnLlxuICBpZiAoIXdoZXJlUXVlcnkub3IgJiYgIXdoZXJlUXVlcnkuYW5kKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBhbmQ6IFt3aGVyZVF1ZXJ5XSwgLy8gdG9wLWxldmVsIHNpYmxpbmdzIGFyZSBjb25zaWRlcmVkICdhbmQnXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH1cbiAgfVxuXG4gIC8vIElmICd3aGVyZVF1ZXJ5JyBoYXMgJ29yJyBhbmQgJ2FuZCcsIGp1c3QgcmV0dXJuIGl0IGFzIGl0IGlzLlxuICByZXR1cm4gd2hlcmVRdWVyeVxufVxuIl0sIm5hbWVzIjpbInRyYW5zZm9ybVdoZXJlUXVlcnkiLCJ3aGVyZVF1ZXJ5Iiwib3IiLCJhbmQiLCJtYXAiLCJxdWVyeSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBT2FBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLHNCQUFzQixDQUFDQztJQUNsQyxJQUFJLENBQUNBLFlBQVk7UUFDZixPQUFPLENBQUM7SUFDVjtJQUNBLDRGQUE0RjtJQUM1RixJQUFJQSxXQUFXQyxFQUFFLElBQUksQ0FBQ0QsV0FBV0UsR0FBRyxFQUFFO1FBQ3BDLE9BQU87WUFDTEQsSUFBSUQsV0FBV0MsRUFBRSxDQUFDRSxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ3JCLGlFQUFpRTtnQkFDakUsSUFBSSxDQUFDQSxNQUFNRixHQUFHLEVBQUU7b0JBQ2QsT0FBTzt3QkFDTEEsS0FBSzs0QkFBQ0U7eUJBQU07b0JBQ2Q7Z0JBQ0Y7Z0JBQ0EsT0FBT0E7WUFDVDtRQUNGO0lBQ0Y7SUFFQSxxREFBcUQ7SUFDckQsSUFBSUosV0FBV0UsR0FBRyxJQUFJLENBQUNGLFdBQVdDLEVBQUUsRUFBRTtRQUNwQyxPQUFPO1lBQ0xBLElBQUk7Z0JBQ0Y7b0JBQ0VDLEtBQUtGLFdBQVdFLEdBQUc7Z0JBQ3JCO2FBQ0Q7UUFDSDtJQUNGO0lBRUEsb0RBQW9EO0lBQ3BELElBQUksQ0FBQ0YsV0FBV0MsRUFBRSxJQUFJLENBQUNELFdBQVdFLEdBQUcsRUFBRTtRQUNyQyxPQUFPO1lBQ0xELElBQUk7Z0JBQ0Y7b0JBQ0VDLEtBQUs7d0JBQUNGO3FCQUFXO2dCQUNuQjthQUNEO1FBQ0g7SUFDRjtJQUVBLCtEQUErRDtJQUMvRCxPQUFPQTtBQUNUIn0=