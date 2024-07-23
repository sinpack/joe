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
const boolean = [
    {
        label: 'equals',
        value: 'equals'
    },
    {
        label: 'isNotEqualTo',
        value: 'not_equals'
    }
];
const base = [
    ...boolean,
    {
        label: 'isIn',
        value: 'in'
    },
    {
        label: 'isNotIn',
        value: 'not_in'
    },
    {
        label: 'exists',
        value: 'exists'
    }
];
const numeric = [
    ...base,
    {
        label: 'isGreaterThan',
        value: 'greater_than'
    },
    {
        label: 'isLessThan',
        value: 'less_than'
    },
    {
        label: 'isLessThanOrEqualTo',
        value: 'less_than_equal'
    },
    {
        label: 'isGreaterThanOrEqualTo',
        value: 'greater_than_equal'
    }
];
const geo = [
    ...boolean,
    {
        label: 'exists',
        value: 'exists'
    },
    {
        label: 'near',
        value: 'near'
    }
];
const within = {
    label: 'within',
    value: 'within'
};
const intersects = {
    label: 'intersects',
    value: 'intersects'
};
const like = {
    label: 'isLike',
    value: 'like'
};
const contains = {
    label: 'contains',
    value: 'contains'
};
const filterOperators = (operators, hasMany = false)=>{
    if (hasMany) {
        return operators.filter((operator)=>operator.value !== 'equals' && operator.value !== 'not_equals');
    }
    return operators;
};
const fieldTypeConditions = {
    checkbox: {
        component: 'Text',
        operators: boolean
    },
    code: {
        component: 'Text',
        operators: [
            ...base,
            like,
            contains
        ]
    },
    date: {
        component: 'Date',
        operators: [
            ...base,
            ...numeric
        ]
    },
    email: {
        component: 'Text',
        operators: [
            ...base,
            contains
        ]
    },
    json: {
        component: 'Text',
        operators: [
            ...base,
            like,
            contains,
            within,
            intersects
        ]
    },
    number: {
        component: 'Number',
        operators: (hasMany)=>filterOperators([
                ...base,
                ...numeric
            ], hasMany)
    },
    point: {
        component: 'Point',
        operators: [
            ...geo,
            within,
            intersects
        ]
    },
    radio: {
        component: 'Select',
        operators: [
            ...base
        ]
    },
    relationship: {
        component: 'Relationship',
        operators: [
            ...base
        ]
    },
    richText: {
        component: 'Text',
        operators: [
            ...base,
            like,
            contains
        ]
    },
    select: {
        component: 'Select',
        operators: (hasMany)=>filterOperators([
                ...base
            ], hasMany)
    },
    text: {
        component: 'Text',
        operators: (hasMany)=>filterOperators([
                ...base,
                like,
                contains
            ], hasMany)
    },
    textarea: {
        component: 'Text',
        operators: [
            ...base,
            like,
            contains
        ]
    },
    upload: {
        component: 'Text',
        operators: [
            ...base
        ]
    }
};
const _default = fieldTypeConditions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9maWVsZC10eXBlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9vbGVhbiA9IFtcbiAge1xuICAgIGxhYmVsOiAnZXF1YWxzJyxcbiAgICB2YWx1ZTogJ2VxdWFscycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2lzTm90RXF1YWxUbycsXG4gICAgdmFsdWU6ICdub3RfZXF1YWxzJyxcbiAgfSxcbl1cblxuY29uc3QgYmFzZSA9IFtcbiAgLi4uYm9vbGVhbixcbiAge1xuICAgIGxhYmVsOiAnaXNJbicsXG4gICAgdmFsdWU6ICdpbicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2lzTm90SW4nLFxuICAgIHZhbHVlOiAnbm90X2luJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnZXhpc3RzJyxcbiAgICB2YWx1ZTogJ2V4aXN0cycsXG4gIH0sXG5dXG5cbmNvbnN0IG51bWVyaWMgPSBbXG4gIC4uLmJhc2UsXG4gIHtcbiAgICBsYWJlbDogJ2lzR3JlYXRlclRoYW4nLFxuICAgIHZhbHVlOiAnZ3JlYXRlcl90aGFuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnaXNMZXNzVGhhbicsXG4gICAgdmFsdWU6ICdsZXNzX3RoYW4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdpc0xlc3NUaGFuT3JFcXVhbFRvJyxcbiAgICB2YWx1ZTogJ2xlc3NfdGhhbl9lcXVhbCcsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2lzR3JlYXRlclRoYW5PckVxdWFsVG8nLFxuICAgIHZhbHVlOiAnZ3JlYXRlcl90aGFuX2VxdWFsJyxcbiAgfSxcbl1cblxuY29uc3QgZ2VvID0gW1xuICAuLi5ib29sZWFuLFxuICB7XG4gICAgbGFiZWw6ICdleGlzdHMnLFxuICAgIHZhbHVlOiAnZXhpc3RzJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbmVhcicsXG4gICAgdmFsdWU6ICduZWFyJyxcbiAgfSxcbl1cblxuY29uc3Qgd2l0aGluID0ge1xuICBsYWJlbDogJ3dpdGhpbicsXG4gIHZhbHVlOiAnd2l0aGluJyxcbn1cblxuY29uc3QgaW50ZXJzZWN0cyA9IHtcbiAgbGFiZWw6ICdpbnRlcnNlY3RzJyxcbiAgdmFsdWU6ICdpbnRlcnNlY3RzJyxcbn1cblxuY29uc3QgbGlrZSA9IHtcbiAgbGFiZWw6ICdpc0xpa2UnLFxuICB2YWx1ZTogJ2xpa2UnLFxufVxuXG5jb25zdCBjb250YWlucyA9IHtcbiAgbGFiZWw6ICdjb250YWlucycsXG4gIHZhbHVlOiAnY29udGFpbnMnLFxufVxuXG5jb25zdCBmaWx0ZXJPcGVyYXRvcnMgPSAob3BlcmF0b3JzLCBoYXNNYW55ID0gZmFsc2UpID0+IHtcbiAgaWYgKGhhc01hbnkpIHtcbiAgICByZXR1cm4gb3BlcmF0b3JzLmZpbHRlcihcbiAgICAgIChvcGVyYXRvcikgPT4gb3BlcmF0b3IudmFsdWUgIT09ICdlcXVhbHMnICYmIG9wZXJhdG9yLnZhbHVlICE9PSAnbm90X2VxdWFscycsXG4gICAgKVxuICB9XG4gIHJldHVybiBvcGVyYXRvcnNcbn1cblxuY29uc3QgZmllbGRUeXBlQ29uZGl0aW9ucyA9IHtcbiAgY2hlY2tib3g6IHtcbiAgICBjb21wb25lbnQ6ICdUZXh0JyxcbiAgICBvcGVyYXRvcnM6IGJvb2xlYW4sXG4gIH0sXG4gIGNvZGU6IHtcbiAgICBjb21wb25lbnQ6ICdUZXh0JyxcbiAgICBvcGVyYXRvcnM6IFsuLi5iYXNlLCBsaWtlLCBjb250YWluc10sXG4gIH0sXG4gIGRhdGU6IHtcbiAgICBjb21wb25lbnQ6ICdEYXRlJyxcbiAgICBvcGVyYXRvcnM6IFsuLi5iYXNlLCAuLi5udW1lcmljXSxcbiAgfSxcbiAgZW1haWw6IHtcbiAgICBjb21wb25lbnQ6ICdUZXh0JyxcbiAgICBvcGVyYXRvcnM6IFsuLi5iYXNlLCBjb250YWluc10sXG4gIH0sXG4gIGpzb246IHtcbiAgICBjb21wb25lbnQ6ICdUZXh0JyxcbiAgICBvcGVyYXRvcnM6IFsuLi5iYXNlLCBsaWtlLCBjb250YWlucywgd2l0aGluLCBpbnRlcnNlY3RzXSxcbiAgfSxcbiAgbnVtYmVyOiB7XG4gICAgY29tcG9uZW50OiAnTnVtYmVyJyxcbiAgICBvcGVyYXRvcnM6IChoYXNNYW55KSA9PiBmaWx0ZXJPcGVyYXRvcnMoWy4uLmJhc2UsIC4uLm51bWVyaWNdLCBoYXNNYW55KSxcbiAgfSxcbiAgcG9pbnQ6IHtcbiAgICBjb21wb25lbnQ6ICdQb2ludCcsXG4gICAgb3BlcmF0b3JzOiBbLi4uZ2VvLCB3aXRoaW4sIGludGVyc2VjdHNdLFxuICB9LFxuICByYWRpbzoge1xuICAgIGNvbXBvbmVudDogJ1NlbGVjdCcsXG4gICAgb3BlcmF0b3JzOiBbLi4uYmFzZV0sXG4gIH0sXG4gIHJlbGF0aW9uc2hpcDoge1xuICAgIGNvbXBvbmVudDogJ1JlbGF0aW9uc2hpcCcsXG4gICAgb3BlcmF0b3JzOiBbLi4uYmFzZV0sXG4gIH0sXG4gIHJpY2hUZXh0OiB7XG4gICAgY29tcG9uZW50OiAnVGV4dCcsXG4gICAgb3BlcmF0b3JzOiBbLi4uYmFzZSwgbGlrZSwgY29udGFpbnNdLFxuICB9LFxuICBzZWxlY3Q6IHtcbiAgICBjb21wb25lbnQ6ICdTZWxlY3QnLFxuICAgIG9wZXJhdG9yczogKGhhc01hbnkpID0+IGZpbHRlck9wZXJhdG9ycyhbLi4uYmFzZV0sIGhhc01hbnkpLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgY29tcG9uZW50OiAnVGV4dCcsXG4gICAgb3BlcmF0b3JzOiAoaGFzTWFueSkgPT4gZmlsdGVyT3BlcmF0b3JzKFsuLi5iYXNlLCBsaWtlLCBjb250YWluc10sIGhhc01hbnkpLFxuICB9LFxuICB0ZXh0YXJlYToge1xuICAgIGNvbXBvbmVudDogJ1RleHQnLFxuICAgIG9wZXJhdG9yczogWy4uLmJhc2UsIGxpa2UsIGNvbnRhaW5zXSxcbiAgfSxcbiAgdXBsb2FkOiB7XG4gICAgY29tcG9uZW50OiAnVGV4dCcsXG4gICAgb3BlcmF0b3JzOiBbLi4uYmFzZV0sXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpZWxkVHlwZUNvbmRpdGlvbnNcbiJdLCJuYW1lcyI6WyJib29sZWFuIiwibGFiZWwiLCJ2YWx1ZSIsImJhc2UiLCJudW1lcmljIiwiZ2VvIiwid2l0aGluIiwiaW50ZXJzZWN0cyIsImxpa2UiLCJjb250YWlucyIsImZpbHRlck9wZXJhdG9ycyIsIm9wZXJhdG9ycyIsImhhc01hbnkiLCJmaWx0ZXIiLCJvcGVyYXRvciIsImZpZWxkVHlwZUNvbmRpdGlvbnMiLCJjaGVja2JveCIsImNvbXBvbmVudCIsImNvZGUiLCJkYXRlIiwiZW1haWwiLCJqc29uIiwibnVtYmVyIiwicG9pbnQiLCJyYWRpbyIsInJlbGF0aW9uc2hpcCIsInJpY2hUZXh0Iiwic2VsZWN0IiwidGV4dCIsInRleHRhcmVhIiwidXBsb2FkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQW1KQTs7O2VBQUE7OztBQW5KQSxNQUFNQSxVQUFVO0lBQ2Q7UUFDRUMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUMsT0FBTztPQUNSSDtJQUNIO1FBQ0VDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUUsVUFBVTtPQUNYRDtJQUNIO1FBQ0VGLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsT0FBTztJQUNUO0NBQ0Q7QUFFRCxNQUFNRyxNQUFNO09BQ1BMO0lBQ0g7UUFDRUMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUksU0FBUztJQUNiTCxPQUFPO0lBQ1BDLE9BQU87QUFDVDtBQUVBLE1BQU1LLGFBQWE7SUFDakJOLE9BQU87SUFDUEMsT0FBTztBQUNUO0FBRUEsTUFBTU0sT0FBTztJQUNYUCxPQUFPO0lBQ1BDLE9BQU87QUFDVDtBQUVBLE1BQU1PLFdBQVc7SUFDZlIsT0FBTztJQUNQQyxPQUFPO0FBQ1Q7QUFFQSxNQUFNUSxrQkFBa0IsQ0FBQ0MsV0FBV0MsVUFBVSxLQUFLO0lBQ2pELElBQUlBLFNBQVM7UUFDWCxPQUFPRCxVQUFVRSxNQUFNLENBQ3JCLENBQUNDLFdBQWFBLFNBQVNaLEtBQUssS0FBSyxZQUFZWSxTQUFTWixLQUFLLEtBQUs7SUFFcEU7SUFDQSxPQUFPUztBQUNUO0FBRUEsTUFBTUksc0JBQXNCO0lBQzFCQyxVQUFVO1FBQ1JDLFdBQVc7UUFDWE4sV0FBV1g7SUFDYjtJQUNBa0IsTUFBTTtRQUNKRCxXQUFXO1FBQ1hOLFdBQVc7ZUFBSVI7WUFBTUs7WUFBTUM7U0FBUztJQUN0QztJQUNBVSxNQUFNO1FBQ0pGLFdBQVc7UUFDWE4sV0FBVztlQUFJUjtlQUFTQztTQUFRO0lBQ2xDO0lBQ0FnQixPQUFPO1FBQ0xILFdBQVc7UUFDWE4sV0FBVztlQUFJUjtZQUFNTTtTQUFTO0lBQ2hDO0lBQ0FZLE1BQU07UUFDSkosV0FBVztRQUNYTixXQUFXO2VBQUlSO1lBQU1LO1lBQU1DO1lBQVVIO1lBQVFDO1NBQVc7SUFDMUQ7SUFDQWUsUUFBUTtRQUNOTCxXQUFXO1FBQ1hOLFdBQVcsQ0FBQ0MsVUFBWUYsZ0JBQWdCO21CQUFJUDttQkFBU0M7YUFBUSxFQUFFUTtJQUNqRTtJQUNBVyxPQUFPO1FBQ0xOLFdBQVc7UUFDWE4sV0FBVztlQUFJTjtZQUFLQztZQUFRQztTQUFXO0lBQ3pDO0lBQ0FpQixPQUFPO1FBQ0xQLFdBQVc7UUFDWE4sV0FBVztlQUFJUjtTQUFLO0lBQ3RCO0lBQ0FzQixjQUFjO1FBQ1pSLFdBQVc7UUFDWE4sV0FBVztlQUFJUjtTQUFLO0lBQ3RCO0lBQ0F1QixVQUFVO1FBQ1JULFdBQVc7UUFDWE4sV0FBVztlQUFJUjtZQUFNSztZQUFNQztTQUFTO0lBQ3RDO0lBQ0FrQixRQUFRO1FBQ05WLFdBQVc7UUFDWE4sV0FBVyxDQUFDQyxVQUFZRixnQkFBZ0I7bUJBQUlQO2FBQUssRUFBRVM7SUFDckQ7SUFDQWdCLE1BQU07UUFDSlgsV0FBVztRQUNYTixXQUFXLENBQUNDLFVBQVlGLGdCQUFnQjttQkFBSVA7Z0JBQU1LO2dCQUFNQzthQUFTLEVBQUVHO0lBQ3JFO0lBQ0FpQixVQUFVO1FBQ1JaLFdBQVc7UUFDWE4sV0FBVztlQUFJUjtZQUFNSztZQUFNQztTQUFTO0lBQ3RDO0lBQ0FxQixRQUFRO1FBQ05iLFdBQVc7UUFDWE4sV0FBVztlQUFJUjtTQUFLO0lBQ3RCO0FBQ0Y7TUFFQSxXQUFlWSJ9