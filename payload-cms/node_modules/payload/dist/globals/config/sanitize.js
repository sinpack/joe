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
const _defaultAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/defaultAccess"));
const _sanitize = require("../../fields/config/sanitize");
const _types = require("../../fields/config/types");
const _mergeBaseFields = /*#__PURE__*/ _interop_require_default(require("../../fields/mergeBaseFields"));
const _translations = /*#__PURE__*/ _interop_require_default(require("../../translations"));
const _formatLabels = require("../../utilities/formatLabels");
const _baseFields = /*#__PURE__*/ _interop_require_default(require("../../versions/baseFields"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const sanitizeGlobals = (config)=>{
    const { collections, globals } = config;
    const sanitizedGlobals = globals.map((global)=>{
        const sanitizedGlobal = {
            ...global
        };
        sanitizedGlobal.label = sanitizedGlobal.label || (0, _formatLabels.toWords)(sanitizedGlobal.slug);
        // /////////////////////////////////
        // Ensure that collection has required object structure
        // /////////////////////////////////
        sanitizedGlobal.endpoints = sanitizedGlobal.endpoints ?? [];
        if (!sanitizedGlobal.hooks) sanitizedGlobal.hooks = {};
        if (!sanitizedGlobal.access) sanitizedGlobal.access = {};
        if (!sanitizedGlobal.admin) sanitizedGlobal.admin = {};
        if (!sanitizedGlobal.access.read) sanitizedGlobal.access.read = _defaultAccess.default;
        if (!sanitizedGlobal.access.update) sanitizedGlobal.access.update = _defaultAccess.default;
        if (!sanitizedGlobal.hooks.beforeValidate) sanitizedGlobal.hooks.beforeValidate = [];
        if (!sanitizedGlobal.hooks.beforeChange) sanitizedGlobal.hooks.beforeChange = [];
        if (!sanitizedGlobal.hooks.afterChange) sanitizedGlobal.hooks.afterChange = [];
        if (!sanitizedGlobal.hooks.beforeRead) sanitizedGlobal.hooks.beforeRead = [];
        if (!sanitizedGlobal.hooks.afterRead) sanitizedGlobal.hooks.afterRead = [];
        if (sanitizedGlobal.versions) {
            if (sanitizedGlobal.versions === true) sanitizedGlobal.versions = {
                drafts: false
            };
            if (sanitizedGlobal.versions.drafts) {
                if (sanitizedGlobal.versions.drafts === true) {
                    sanitizedGlobal.versions.drafts = {
                        autosave: false,
                        validate: false
                    };
                }
                if (sanitizedGlobal.versions.drafts.autosave === true) {
                    sanitizedGlobal.versions.drafts.autosave = {
                        interval: 2000
                    };
                }
                if (sanitizedGlobal.versions.drafts.validate === undefined) {
                    sanitizedGlobal.versions.drafts.validate = false;
                }
                sanitizedGlobal.fields = (0, _mergeBaseFields.default)(sanitizedGlobal.fields, _baseFields.default);
            }
        }
        if (!sanitizedGlobal.custom) sanitizedGlobal.custom = {};
        // /////////////////////////////////
        // Sanitize fields
        // /////////////////////////////////
        let hasUpdatedAt = null;
        let hasCreatedAt = null;
        sanitizedGlobal.fields.some((field)=>{
            if ((0, _types.fieldAffectsData)(field)) {
                if (field.name === 'updatedAt') hasUpdatedAt = true;
                if (field.name === 'createdAt') hasCreatedAt = true;
            }
            return hasCreatedAt && hasUpdatedAt;
        });
        if (!hasUpdatedAt) {
            sanitizedGlobal.fields.push({
                name: 'updatedAt',
                type: 'date',
                admin: {
                    disableBulkEdit: true,
                    hidden: true
                },
                label: _translations.default['general:updatedAt']
            });
        }
        if (!hasCreatedAt) {
            sanitizedGlobal.fields.push({
                name: 'createdAt',
                type: 'date',
                admin: {
                    disableBulkEdit: true,
                    hidden: true
                },
                label: _translations.default['general:createdAt']
            });
        }
        const validRelationships = collections.map((c)=>c.slug) || [];
        sanitizedGlobal.fields = (0, _sanitize.sanitizeFields)({
            config,
            fields: sanitizedGlobal.fields,
            validRelationships
        });
        return sanitizedGlobal;
    });
    return sanitizedGlobals;
};
const _default = sanitizeGlobals;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL2NvbmZpZy9zYW5pdGl6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IGRlZmF1bHRBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9kZWZhdWx0QWNjZXNzJ1xuaW1wb3J0IHsgc2FuaXRpemVGaWVsZHMgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3Nhbml0aXplJ1xuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgbWVyZ2VCYXNlRmllbGRzIGZyb20gJy4uLy4uL2ZpZWxkcy9tZXJnZUJhc2VGaWVsZHMnXG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucydcbmltcG9ydCB7IHRvV29yZHMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZm9ybWF0TGFiZWxzJ1xuaW1wb3J0IGJhc2VWZXJzaW9uRmllbGRzIGZyb20gJy4uLy4uL3ZlcnNpb25zL2Jhc2VGaWVsZHMnXG5cbmNvbnN0IHNhbml0aXplR2xvYmFscyA9IChjb25maWc6IENvbmZpZyk6IFNhbml0aXplZEdsb2JhbENvbmZpZ1tdID0+IHtcbiAgY29uc3QgeyBjb2xsZWN0aW9ucywgZ2xvYmFscyB9ID0gY29uZmlnXG5cbiAgY29uc3Qgc2FuaXRpemVkR2xvYmFscyA9IGdsb2JhbHMubWFwKChnbG9iYWwpID0+IHtcbiAgICBjb25zdCBzYW5pdGl6ZWRHbG9iYWwgPSB7IC4uLmdsb2JhbCB9XG5cbiAgICBzYW5pdGl6ZWRHbG9iYWwubGFiZWwgPSBzYW5pdGl6ZWRHbG9iYWwubGFiZWwgfHwgdG9Xb3JkcyhzYW5pdGl6ZWRHbG9iYWwuc2x1ZylcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEVuc3VyZSB0aGF0IGNvbGxlY3Rpb24gaGFzIHJlcXVpcmVkIG9iamVjdCBzdHJ1Y3R1cmVcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHNhbml0aXplZEdsb2JhbC5lbmRwb2ludHMgPSBzYW5pdGl6ZWRHbG9iYWwuZW5kcG9pbnRzID8/IFtdXG4gICAgaWYgKCFzYW5pdGl6ZWRHbG9iYWwuaG9va3MpIHNhbml0aXplZEdsb2JhbC5ob29rcyA9IHt9XG4gICAgaWYgKCFzYW5pdGl6ZWRHbG9iYWwuYWNjZXNzKSBzYW5pdGl6ZWRHbG9iYWwuYWNjZXNzID0ge31cbiAgICBpZiAoIXNhbml0aXplZEdsb2JhbC5hZG1pbikgc2FuaXRpemVkR2xvYmFsLmFkbWluID0ge31cblxuICAgIGlmICghc2FuaXRpemVkR2xvYmFsLmFjY2Vzcy5yZWFkKSBzYW5pdGl6ZWRHbG9iYWwuYWNjZXNzLnJlYWQgPSBkZWZhdWx0QWNjZXNzXG4gICAgaWYgKCFzYW5pdGl6ZWRHbG9iYWwuYWNjZXNzLnVwZGF0ZSkgc2FuaXRpemVkR2xvYmFsLmFjY2Vzcy51cGRhdGUgPSBkZWZhdWx0QWNjZXNzXG5cbiAgICBpZiAoIXNhbml0aXplZEdsb2JhbC5ob29rcy5iZWZvcmVWYWxpZGF0ZSkgc2FuaXRpemVkR2xvYmFsLmhvb2tzLmJlZm9yZVZhbGlkYXRlID0gW11cbiAgICBpZiAoIXNhbml0aXplZEdsb2JhbC5ob29rcy5iZWZvcmVDaGFuZ2UpIHNhbml0aXplZEdsb2JhbC5ob29rcy5iZWZvcmVDaGFuZ2UgPSBbXVxuICAgIGlmICghc2FuaXRpemVkR2xvYmFsLmhvb2tzLmFmdGVyQ2hhbmdlKSBzYW5pdGl6ZWRHbG9iYWwuaG9va3MuYWZ0ZXJDaGFuZ2UgPSBbXVxuICAgIGlmICghc2FuaXRpemVkR2xvYmFsLmhvb2tzLmJlZm9yZVJlYWQpIHNhbml0aXplZEdsb2JhbC5ob29rcy5iZWZvcmVSZWFkID0gW11cbiAgICBpZiAoIXNhbml0aXplZEdsb2JhbC5ob29rcy5hZnRlclJlYWQpIHNhbml0aXplZEdsb2JhbC5ob29rcy5hZnRlclJlYWQgPSBbXVxuXG4gICAgaWYgKHNhbml0aXplZEdsb2JhbC52ZXJzaW9ucykge1xuICAgICAgaWYgKHNhbml0aXplZEdsb2JhbC52ZXJzaW9ucyA9PT0gdHJ1ZSkgc2FuaXRpemVkR2xvYmFsLnZlcnNpb25zID0geyBkcmFmdHM6IGZhbHNlIH1cblxuICAgICAgaWYgKHNhbml0aXplZEdsb2JhbC52ZXJzaW9ucy5kcmFmdHMpIHtcbiAgICAgICAgaWYgKHNhbml0aXplZEdsb2JhbC52ZXJzaW9ucy5kcmFmdHMgPT09IHRydWUpIHtcbiAgICAgICAgICBzYW5pdGl6ZWRHbG9iYWwudmVyc2lvbnMuZHJhZnRzID0ge1xuICAgICAgICAgICAgYXV0b3NhdmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYW5pdGl6ZWRHbG9iYWwudmVyc2lvbnMuZHJhZnRzLmF1dG9zYXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgc2FuaXRpemVkR2xvYmFsLnZlcnNpb25zLmRyYWZ0cy5hdXRvc2F2ZSA9IHtcbiAgICAgICAgICAgIGludGVydmFsOiAyMDAwLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYW5pdGl6ZWRHbG9iYWwudmVyc2lvbnMuZHJhZnRzLnZhbGlkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzYW5pdGl6ZWRHbG9iYWwudmVyc2lvbnMuZHJhZnRzLnZhbGlkYXRlID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHNhbml0aXplZEdsb2JhbC5maWVsZHMgPSBtZXJnZUJhc2VGaWVsZHMoc2FuaXRpemVkR2xvYmFsLmZpZWxkcywgYmFzZVZlcnNpb25GaWVsZHMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzYW5pdGl6ZWRHbG9iYWwuY3VzdG9tKSBzYW5pdGl6ZWRHbG9iYWwuY3VzdG9tID0ge31cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFNhbml0aXplIGZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGxldCBoYXNVcGRhdGVkQXQgPSBudWxsXG4gICAgbGV0IGhhc0NyZWF0ZWRBdCA9IG51bGxcbiAgICBzYW5pdGl6ZWRHbG9iYWwuZmllbGRzLnNvbWUoKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICAgICAgaWYgKGZpZWxkLm5hbWUgPT09ICd1cGRhdGVkQXQnKSBoYXNVcGRhdGVkQXQgPSB0cnVlXG4gICAgICAgIGlmIChmaWVsZC5uYW1lID09PSAnY3JlYXRlZEF0JykgaGFzQ3JlYXRlZEF0ID0gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0NyZWF0ZWRBdCAmJiBoYXNVcGRhdGVkQXRcbiAgICB9KVxuICAgIGlmICghaGFzVXBkYXRlZEF0KSB7XG4gICAgICBzYW5pdGl6ZWRHbG9iYWwuZmllbGRzLnB1c2goe1xuICAgICAgICBuYW1lOiAndXBkYXRlZEF0JyxcbiAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICBhZG1pbjoge1xuICAgICAgICAgIGRpc2FibGVCdWxrRWRpdDogdHJ1ZSxcbiAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGlvbnNbJ2dlbmVyYWw6dXBkYXRlZEF0J10sXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoIWhhc0NyZWF0ZWRBdCkge1xuICAgICAgc2FuaXRpemVkR2xvYmFsLmZpZWxkcy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgYWRtaW46IHtcbiAgICAgICAgICBkaXNhYmxlQnVsa0VkaXQ6IHRydWUsXG4gICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsYWJlbDogdHJhbnNsYXRpb25zWydnZW5lcmFsOmNyZWF0ZWRBdCddLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZFJlbGF0aW9uc2hpcHMgPSBjb2xsZWN0aW9ucy5tYXAoKGMpID0+IGMuc2x1ZykgfHwgW11cbiAgICBzYW5pdGl6ZWRHbG9iYWwuZmllbGRzID0gc2FuaXRpemVGaWVsZHMoe1xuICAgICAgY29uZmlnLFxuICAgICAgZmllbGRzOiBzYW5pdGl6ZWRHbG9iYWwuZmllbGRzLFxuICAgICAgdmFsaWRSZWxhdGlvbnNoaXBzLFxuICAgIH0pXG5cbiAgICByZXR1cm4gc2FuaXRpemVkR2xvYmFsIGFzIFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICB9KVxuXG4gIHJldHVybiBzYW5pdGl6ZWRHbG9iYWxzXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0aXplR2xvYmFsc1xuIl0sIm5hbWVzIjpbInNhbml0aXplR2xvYmFscyIsImNvbmZpZyIsImNvbGxlY3Rpb25zIiwiZ2xvYmFscyIsInNhbml0aXplZEdsb2JhbHMiLCJtYXAiLCJnbG9iYWwiLCJzYW5pdGl6ZWRHbG9iYWwiLCJsYWJlbCIsInRvV29yZHMiLCJzbHVnIiwiZW5kcG9pbnRzIiwiaG9va3MiLCJhY2Nlc3MiLCJhZG1pbiIsInJlYWQiLCJkZWZhdWx0QWNjZXNzIiwidXBkYXRlIiwiYmVmb3JlVmFsaWRhdGUiLCJiZWZvcmVDaGFuZ2UiLCJhZnRlckNoYW5nZSIsImJlZm9yZVJlYWQiLCJhZnRlclJlYWQiLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImF1dG9zYXZlIiwidmFsaWRhdGUiLCJpbnRlcnZhbCIsInVuZGVmaW5lZCIsImZpZWxkcyIsIm1lcmdlQmFzZUZpZWxkcyIsImJhc2VWZXJzaW9uRmllbGRzIiwiY3VzdG9tIiwiaGFzVXBkYXRlZEF0IiwiaGFzQ3JlYXRlZEF0Iiwic29tZSIsImZpZWxkIiwiZmllbGRBZmZlY3RzRGF0YSIsIm5hbWUiLCJwdXNoIiwidHlwZSIsImRpc2FibGVCdWxrRWRpdCIsImhpZGRlbiIsInRyYW5zbGF0aW9ucyIsInZhbGlkUmVsYXRpb25zaGlwcyIsImMiLCJzYW5pdGl6ZUZpZWxkcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFnSEE7OztlQUFBOzs7c0VBN0cwQjswQkFDSzt1QkFDRTt3RUFDTDtxRUFDSDs4QkFDRDttRUFDTTs7Ozs7O0FBRTlCLE1BQU1BLGtCQUFrQixDQUFDQztJQUN2QixNQUFNLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFLEdBQUdGO0lBRWpDLE1BQU1HLG1CQUFtQkQsUUFBUUUsR0FBRyxDQUFDLENBQUNDO1FBQ3BDLE1BQU1DLGtCQUFrQjtZQUFFLEdBQUdELE1BQU07UUFBQztRQUVwQ0MsZ0JBQWdCQyxLQUFLLEdBQUdELGdCQUFnQkMsS0FBSyxJQUFJQyxJQUFBQSxxQkFBTyxFQUFDRixnQkFBZ0JHLElBQUk7UUFFN0Usb0NBQW9DO1FBQ3BDLHVEQUF1RDtRQUN2RCxvQ0FBb0M7UUFFcENILGdCQUFnQkksU0FBUyxHQUFHSixnQkFBZ0JJLFNBQVMsSUFBSSxFQUFFO1FBQzNELElBQUksQ0FBQ0osZ0JBQWdCSyxLQUFLLEVBQUVMLGdCQUFnQkssS0FBSyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDTCxnQkFBZ0JNLE1BQU0sRUFBRU4sZ0JBQWdCTSxNQUFNLEdBQUcsQ0FBQztRQUN2RCxJQUFJLENBQUNOLGdCQUFnQk8sS0FBSyxFQUFFUCxnQkFBZ0JPLEtBQUssR0FBRyxDQUFDO1FBRXJELElBQUksQ0FBQ1AsZ0JBQWdCTSxNQUFNLENBQUNFLElBQUksRUFBRVIsZ0JBQWdCTSxNQUFNLENBQUNFLElB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