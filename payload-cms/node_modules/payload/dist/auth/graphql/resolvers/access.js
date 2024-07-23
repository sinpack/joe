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
const _formatName = /*#__PURE__*/ _interop_require_default(require("../../../graphql/utilities/formatName"));
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _access = /*#__PURE__*/ _interop_require_default(require("../../operations/access"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const formatConfigNames = (results, configs)=>{
    const formattedResults = {
        ...results
    };
    configs.forEach(({ slug })=>{
        const result = {
            ...formattedResults[slug] || {}
        };
        delete formattedResults[slug];
        formattedResults[(0, _formatName.default)(slug)] = result;
    });
    return formattedResults;
};
function accessResolver(payload) {
    async function resolver(_, args, context) {
        const options = {
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID')
        };
        const accessResults = await (0, _access.default)(options);
        return {
            ...accessResults,
            ...formatConfigNames(accessResults.collections, payload.config.collections),
            ...formatConfigNames(accessResults.globals, payload.config.globals)
        };
    }
    return resolver;
}
const _default = accessResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2FjY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL3BheWxvYWQnXG5cbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uLy4uLy4uL2dyYXBocWwvdXRpbGl0aWVzL2Zvcm1hdE5hbWUnXG5pbXBvcnQgaXNvbGF0ZU9iamVjdFByb3BlcnR5IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9pc29sYXRlT2JqZWN0UHJvcGVydHknXG5pbXBvcnQgYWNjZXNzIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvYWNjZXNzJ1xuXG5jb25zdCBmb3JtYXRDb25maWdOYW1lcyA9IChyZXN1bHRzLCBjb25maWdzKSA9PiB7XG4gIGNvbnN0IGZvcm1hdHRlZFJlc3VsdHMgPSB7IC4uLnJlc3VsdHMgfVxuXG4gIGNvbmZpZ3MuZm9yRWFjaCgoeyBzbHVnIH0pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7IC4uLihmb3JtYXR0ZWRSZXN1bHRzW3NsdWddIHx8IHt9KSB9XG4gICAgZGVsZXRlIGZvcm1hdHRlZFJlc3VsdHNbc2x1Z11cbiAgICBmb3JtYXR0ZWRSZXN1bHRzW2Zvcm1hdE5hbWUoc2x1ZyldID0gcmVzdWx0XG4gIH0pXG5cbiAgcmV0dXJuIGZvcm1hdHRlZFJlc3VsdHNcbn1cblxuZnVuY3Rpb24gYWNjZXNzUmVzb2x2ZXIocGF5bG9hZDogUGF5bG9hZCkge1xuICBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJlcTogaXNvbGF0ZU9iamVjdFByb3BlcnR5PFBheWxvYWRSZXF1ZXN0Pihjb250ZXh0LnJlcSwgJ3RyYW5zYWN0aW9uSUQnKSxcbiAgICB9XG5cbiAgICBjb25zdCBhY2Nlc3NSZXN1bHRzID0gYXdhaXQgYWNjZXNzKG9wdGlvbnMpXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWNjZXNzUmVzdWx0cyxcbiAgICAgIC4uLmZvcm1hdENvbmZpZ05hbWVzKGFjY2Vzc1Jlc3VsdHMuY29sbGVjdGlvbnMsIHBheWxvYWQuY29uZmlnLmNvbGxlY3Rpb25zKSxcbiAgICAgIC4uLmZvcm1hdENvbmZpZ05hbWVzKGFjY2Vzc1Jlc3VsdHMuZ2xvYmFscywgcGF5bG9hZC5jb25maWcuZ2xvYmFscyksXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjY2Vzc1Jlc29sdmVyXG4iXSwibmFtZXMiOlsiZm9ybWF0Q29uZmlnTmFtZXMiLCJyZXN1bHRzIiwiY29uZmlncyIsImZvcm1hdHRlZFJlc3VsdHMiLCJmb3JFYWNoIiwic2x1ZyIsInJlc3VsdCIsImZvcm1hdE5hbWUiLCJhY2Nlc3NSZXNvbHZlciIsInBheWxvYWQiLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsIm9wdGlvbnMiLCJyZXEiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiLCJhY2Nlc3NSZXN1bHRzIiwiYWNjZXNzIiwiY29sbGVjdGlvbnMiLCJjb25maWciLCJnbG9iYWxzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQ0E7OztlQUFBOzs7bUVBbEN1Qjs4RUFDVzsrREFDZjs7Ozs7O0FBRW5CLE1BQU1BLG9CQUFvQixDQUFDQyxTQUFTQztJQUNsQyxNQUFNQyxtQkFBbUI7UUFBRSxHQUFHRixPQUFPO0lBQUM7SUFFdENDLFFBQVFFLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLElBQUksRUFBRTtRQUN2QixNQUFNQyxTQUFTO1lBQUUsR0FBSUgsZ0JBQWdCLENBQUNFLEtBQUssSUFBSSxDQUFDLENBQUM7UUFBRTtRQUNuRCxPQUFPRixnQkFBZ0IsQ0FBQ0UsS0FBSztRQUM3QkYsZ0JBQWdCLENBQUNJLElBQUFBLG1CQUFVLEVBQUNGLE1BQU0sR0FBR0M7SUFDdkM7SUFFQSxPQUFPSDtBQUNUO0FBRUEsU0FBU0ssZUFBZUMsT0FBZ0I7SUFDdEMsZUFBZUMsU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87UUFDdEMsTUFBTUMsVUFBVTtZQUNkQyxLQUFLQyxJQUFBQSw4QkFBcUIsRUFBaUJILFFBQVFFLEdBQUcsRUFBRTtRQUMxRDtRQUVBLE1BQU1FLGdCQUFnQixNQUFNQyxJQUFBQSxlQUFNLEVBQUNKO1FBRW5DLE9BQU87WUFDTCxHQUFHRyxhQUFhO1lBQ2hCLEdBQUdqQixrQkFBa0JpQixjQUFjRSxXQUFXLEVBQUVWLFFBQVFXLE1BQU0sQ0FBQ0QsV0FBVyxDQUFDO1lBQzNFLEdBQUduQixrQkFBa0JpQixjQUFjSSxPQUFPLEVBQUVaLFFBQVFXLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1FBQ3JFO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUO01BRUEsV0FBZUYifQ==