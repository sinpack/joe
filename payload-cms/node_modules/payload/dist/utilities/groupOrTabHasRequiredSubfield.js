"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "groupOrTabHasRequiredSubfield", {
    enumerable: true,
    get: function() {
        return groupOrTabHasRequiredSubfield;
    }
});
const _types = require("../fields/config/types");
const groupOrTabHasRequiredSubfield = (entity)=>{
    if ('type' in entity && entity.type === 'group') {
        return entity.fields.some((subField)=>{
            return (0, _types.fieldAffectsData)(subField) && 'required' in subField && subField.required || groupOrTabHasRequiredSubfield(subField);
        });
    }
    if ('fields' in entity && 'name' in entity) {
        return entity.fields.some((subField)=>groupOrTabHasRequiredSubfield(subField));
    }
    return false;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ3JvdXBPclRhYkhhc1JlcXVpcmVkU3ViZmllbGQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGaWVsZCwgVGFiIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBncm91cE9yVGFiSGFzUmVxdWlyZWRTdWJmaWVsZCA9IChlbnRpdHk6IEZpZWxkIHwgVGFiKTogYm9vbGVhbiA9PiB7XG4gIGlmICgndHlwZScgaW4gZW50aXR5ICYmIGVudGl0eS50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgcmV0dXJuIGVudGl0eS5maWVsZHMuc29tZSgoc3ViRmllbGQpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChmaWVsZEFmZmVjdHNEYXRhKHN1YkZpZWxkKSAmJiAncmVxdWlyZWQnIGluIHN1YkZpZWxkICYmIHN1YkZpZWxkLnJlcXVpcmVkKSB8fFxuICAgICAgICBncm91cE9yVGFiSGFzUmVxdWlyZWRTdWJmaWVsZChzdWJGaWVsZClcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgaWYgKCdmaWVsZHMnIGluIGVudGl0eSAmJiAnbmFtZScgaW4gZW50aXR5KSB7XG4gICAgcmV0dXJuIChlbnRpdHkgYXMgVGFiKS5maWVsZHMuc29tZSgoc3ViRmllbGQpID0+IGdyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkKHN1YkZpZWxkKSlcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuIl0sIm5hbWVzIjpbImdyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkIiwiZW50aXR5IiwidHlwZSIsImZpZWxkcyIsInNvbWUiLCJzdWJGaWVsZCIsImZpZWxkQWZmZWN0c0RhdGEiLCJyZXF1aXJlZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBSWFBOzs7ZUFBQUE7Ozt1QkFGb0I7QUFFMUIsTUFBTUEsZ0NBQWdDLENBQUNDO0lBQzVDLElBQUksVUFBVUEsVUFBVUEsT0FBT0MsSUFBSSxLQUFLLFNBQVM7UUFDL0MsT0FBT0QsT0FBT0UsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0M7WUFDekIsT0FDRSxBQUFDQyxJQUFBQSx1QkFBZ0IsRUFBQ0QsYUFBYSxjQUFjQSxZQUFZQSxTQUFTRSxRQUFRLElBQzFFUCw4QkFBOEJLO1FBRWxDO0lBQ0Y7SUFFQSxJQUFJLFlBQVlKLFVBQVUsVUFBVUEsUUFBUTtRQUMxQyxPQUFPLEFBQUNBLE9BQWVFLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLFdBQWFMLDhCQUE4Qks7SUFDakY7SUFFQSxPQUFPO0FBQ1QifQ==