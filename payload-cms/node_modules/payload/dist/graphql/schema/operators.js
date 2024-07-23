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
const operators = {
    comparison: [
        'greater_than_equal',
        'greater_than',
        'less_than_equal',
        'less_than'
    ],
    contains: [
        'in',
        'not_in',
        'all'
    ],
    equality: [
        'equals',
        'not_equals'
    ],
    geo: [
        'near'
    ],
    geojson: [
        'within',
        'intersects'
    ],
    partial: [
        'like',
        'contains'
    ]
};
const _default = operators;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9vcGVyYXRvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3BlcmF0b3JzID0ge1xuICBjb21wYXJpc29uOiBbJ2dyZWF0ZXJfdGhhbl9lcXVhbCcsICdncmVhdGVyX3RoYW4nLCAnbGVzc190aGFuX2VxdWFsJywgJ2xlc3NfdGhhbiddLFxuICBjb250YWluczogWydpbicsICdub3RfaW4nLCAnYWxsJ10sXG4gIGVxdWFsaXR5OiBbJ2VxdWFscycsICdub3RfZXF1YWxzJ10sXG4gIGdlbzogWyduZWFyJ10sXG4gIGdlb2pzb246IFsnd2l0aGluJywgJ2ludGVyc2VjdHMnXSxcbiAgcGFydGlhbDogWydsaWtlJywgJ2NvbnRhaW5zJ10sXG59XG5cbmV4cG9ydCBkZWZhdWx0IG9wZXJhdG9yc1xuIl0sIm5hbWVzIjpbIm9wZXJhdG9ycyIsImNvbXBhcmlzb24iLCJjb250YWlucyIsImVxdWFsaXR5IiwiZ2VvIiwiZ2VvanNvbiIsInBhcnRpYWwiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBU0E7OztlQUFBOzs7QUFUQSxNQUFNQSxZQUFZO0lBQ2hCQyxZQUFZO1FBQUM7UUFBc0I7UUFBZ0I7UUFBbUI7S0FBWTtJQUNsRkMsVUFBVTtRQUFDO1FBQU07UUFBVTtLQUFNO0lBQ2pDQyxVQUFVO1FBQUM7UUFBVTtLQUFhO0lBQ2xDQyxLQUFLO1FBQUM7S0FBTztJQUNiQyxTQUFTO1FBQUM7UUFBVTtLQUFhO0lBQ2pDQyxTQUFTO1FBQUM7UUFBUTtLQUFXO0FBQy9CO01BRUEsV0FBZU4ifQ==