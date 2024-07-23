"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRelatedCollections", {
    enumerable: true,
    get: function() {
        return useRelatedCollections;
    }
});
const _react = require("react");
const _Config = require("../../../../utilities/Config");
const useRelatedCollections = (relationTo)=>{
    const config = (0, _Config.useConfig)();
    const [relatedCollections] = (0, _react.useState)(()=>{
        if (relationTo) {
            const relations = typeof relationTo === 'string' ? [
                relationTo
            ] : relationTo;
            return relations.map((relation)=>config.collections.find((collection)=>collection.slug === relation));
        }
        return [];
    });
    return relatedCollections;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9BZGROZXcvdXNlUmVsYXRlZENvbGxlY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcblxuZXhwb3J0IGNvbnN0IHVzZVJlbGF0ZWRDb2xsZWN0aW9ucyA9IChcbiAgcmVsYXRpb25Ubzogc3RyaW5nIHwgc3RyaW5nW10sXG4pOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnW10gPT4ge1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKVxuICBjb25zdCBbcmVsYXRlZENvbGxlY3Rpb25zXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAocmVsYXRpb25Ubykge1xuICAgICAgY29uc3QgcmVsYXRpb25zID0gdHlwZW9mIHJlbGF0aW9uVG8gPT09ICdzdHJpbmcnID8gW3JlbGF0aW9uVG9dIDogcmVsYXRpb25Ub1xuICAgICAgcmV0dXJuIHJlbGF0aW9ucy5tYXAoKHJlbGF0aW9uKSA9PlxuICAgICAgICBjb25maWcuY29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4gY29sbGVjdGlvbi5zbHVnID09PSByZWxhdGlvbiksXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9KVxuXG4gIHJldHVybiByZWxhdGVkQ29sbGVjdGlvbnNcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZWxhdGVkQ29sbGVjdGlvbnMiLCJyZWxhdGlvblRvIiwiY29uZmlnIiwidXNlQ29uZmlnIiwicmVsYXRlZENvbGxlY3Rpb25zIiwidXNlU3RhdGUiLCJyZWxhdGlvbnMiLCJtYXAiLCJyZWxhdGlvbiIsImNvbGxlY3Rpb25zIiwiZmluZCIsImNvbGxlY3Rpb24iLCJzbHVnIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFNYUE7OztlQUFBQTs7O3VCQU5ZO3dCQUlDO0FBRW5CLE1BQU1BLHdCQUF3QixDQUNuQ0M7SUFFQSxNQUFNQyxTQUFTQyxJQUFBQSxpQkFBUztJQUN4QixNQUFNLENBQUNDLG1CQUFtQixHQUFHQyxJQUFBQSxlQUFRLEVBQUM7UUFDcEMsSUFBSUosWUFBWTtZQUNkLE1BQU1LLFlBQVksT0FBT0wsZUFBZSxXQUFXO2dCQUFDQTthQUFXLEdBQUdBO1lBQ2xFLE9BQU9LLFVBQVVDLEdBQUcsQ0FBQyxDQUFDQyxXQUNwQk4sT0FBT08sV0FBVyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsYUFBZUEsV0FBV0MsSUFBSSxLQUFLSjtRQUVoRTtRQUNBLE9BQU8sRUFBRTtJQUNYO0lBRUEsT0FBT0o7QUFDVCJ9