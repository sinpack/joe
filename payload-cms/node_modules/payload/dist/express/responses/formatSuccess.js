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
const formatSuccessResponse = (incoming, type)=>{
    switch(type){
        case 'message':
            return {
                message: incoming
            };
        default:
            return incoming;
    }
};
const _default = formatSuccessResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL3Jlc3BvbnNlcy9mb3JtYXRTdWNjZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1hdFN1Y2Nlc3NSZXNwb25zZSA9IChpbmNvbWluZywgdHlwZSkgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdtZXNzYWdlJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6IGluY29taW5nLFxuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpbmNvbWluZ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFN1Y2Nlc3NSZXNwb25zZVxuIl0sIm5hbWVzIjpbImZvcm1hdFN1Y2Nlc3NSZXNwb25zZSIsImluY29taW5nIiwidHlwZSIsIm1lc3NhZ2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBWUE7OztlQUFBOzs7QUFaQSxNQUFNQSx3QkFBd0IsQ0FBQ0MsVUFBVUM7SUFDdkMsT0FBUUE7UUFDTixLQUFLO1lBQ0gsT0FBTztnQkFDTEMsU0FBU0Y7WUFDWDtRQUVGO1lBQ0UsT0FBT0E7SUFDWDtBQUNGO01BRUEsV0FBZUQifQ==