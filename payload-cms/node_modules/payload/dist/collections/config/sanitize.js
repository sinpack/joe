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
const _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
const _isplainobject = require("is-plain-object");
const _accountLock = /*#__PURE__*/ _interop_require_default(require("../../auth/baseFields/accountLock"));
const _apiKey = /*#__PURE__*/ _interop_require_default(require("../../auth/baseFields/apiKey"));
const _auth = /*#__PURE__*/ _interop_require_default(require("../../auth/baseFields/auth"));
const _verification = /*#__PURE__*/ _interop_require_default(require("../../auth/baseFields/verification"));
const _TimestampsRequired = /*#__PURE__*/ _interop_require_default(require("../../errors/TimestampsRequired"));
const _sanitize = require("../../fields/config/sanitize");
const _types = require("../../fields/config/types");
const _mergeBaseFields = /*#__PURE__*/ _interop_require_default(require("../../fields/mergeBaseFields"));
const _extractTranslations = require("../../translations/extractTranslations");
const _getBaseFields = /*#__PURE__*/ _interop_require_default(require("../../uploads/getBaseFields"));
const _formatLabels = require("../../utilities/formatLabels");
const _baseFields = /*#__PURE__*/ _interop_require_default(require("../../versions/baseFields"));
const _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const translations = (0, _extractTranslations.extractTranslations)([
    'general:createdAt',
    'general:updatedAt'
]);
const sanitizeCollection = (config, collection)=>{
    // /////////////////////////////////
    // Make copy of collection config
    // /////////////////////////////////
    const sanitized = (0, _deepmerge.default)(_defaults.defaults, collection, {
        isMergeableObject: _isplainobject.isPlainObject
    });
    if (sanitized.timestamps !== false) {
        // add default timestamps fields only as needed
        let hasUpdatedAt = null;
        let hasCreatedAt = null;
        sanitized.fields.some((field)=>{
            if ((0, _types.fieldAffectsData)(field)) {
                if (field.name === 'updatedAt') hasUpdatedAt = true;
                if (field.name === 'createdAt') hasCreatedAt = true;
            }
            return hasCreatedAt && hasUpdatedAt;
        });
        if (!hasUpdatedAt) {
            sanitized.fields.push({
                name: 'updatedAt',
                type: 'date',
                admin: {
                    disableBulkEdit: true,
                    hidden: true
                },
                label: translations['general:updatedAt']
            });
        }
        if (!hasCreatedAt) {
            sanitized.fields.push({
                name: 'createdAt',
                admin: {
                    disableBulkEdit: true,
                    hidden: true
                },
                // The default sort for list view is createdAt. Thus, enabling indexing by default, is a major performance improvement, especially for large or a large amount of collections.
                type: 'date',
                index: true,
                label: translations['general:createdAt']
            });
        }
    }
    sanitized.labels = sanitized.labels || (0, _formatLabels.formatLabels)(sanitized.slug);
    if (sanitized.versions) {
        if (sanitized.versions === true) sanitized.versions = {
            drafts: false
        };
        if (sanitized.timestamps === false) {
            throw new _TimestampsRequired.default(collection);
        }
        if (sanitized.versions.drafts) {
            if (sanitized.versions.drafts === true) {
                sanitized.versions.drafts = {
                    autosave: false,
                    validate: false
                };
            }
            if (sanitized.versions.drafts.autosave === true) {
                sanitized.versions.drafts.autosave = {
                    interval: 2000
                };
            }
            if (sanitized.versions.drafts.validate === undefined) {
                sanitized.versions.drafts.validate = false;
            }
            sanitized.fields = (0, _mergeBaseFields.default)(sanitized.fields, _baseFields.default);
        }
    }
    if (sanitized.upload) {
        if (sanitized.upload === true) sanitized.upload = {};
        sanitized.upload.staticDir = sanitized.upload.staticDir || sanitized.slug;
        sanitized.upload.staticURL = sanitized.upload.staticURL || `/${sanitized.slug}`;
        sanitized.admin.useAsTitle = sanitized.admin.useAsTitle && sanitized.admin.useAsTitle !== 'id' ? sanitized.admin.useAsTitle : 'filename';
        const uploadFields = (0, _getBaseFields.default)({
            collection: sanitized,
            config
        });
        sanitized.fields = (0, _mergeBaseFields.default)(sanitized.fields, uploadFields);
    }
    if (sanitized.auth) {
        sanitized.auth = (0, _deepmerge.default)(_defaults.authDefaults, typeof sanitized.auth === 'object' ? sanitized.auth : {}, {
            isMergeableObject: _isplainobject.isPlainObject
        });
        let authFields = [];
        if (sanitized.auth.useAPIKey) {
            authFields = authFields.concat(_apiKey.default);
        }
        if (!sanitized.auth.disableLocalStrategy) {
            authFields = authFields.concat(_auth.default);
            if (sanitized.auth.verify) {
                if (sanitized.auth.verify === true) sanitized.auth.verify = {};
                authFields = authFields.concat(_verification.default);
            }
            if (sanitized.auth.maxLoginAttempts > 0) {
                authFields = authFields.concat(_accountLock.default);
            }
        }
        sanitized.fields = (0, _mergeBaseFields.default)(sanitized.fields, authFields);
    }
    // /////////////////////////////////
    // Sanitize fields
    // /////////////////////////////////
    const validRelationships = config.collections.map((c)=>c.slug) || [];
    sanitized.fields = (0, _sanitize.sanitizeFields)({
        config,
        fields: sanitized.fields,
        validRelationships
    });
    return sanitized;
};
const _default = sanitizeCollection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9jb25maWcvc2FuaXRpemUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QgfSBmcm9tICdpcy1wbGFpbi1vYmplY3QnXG5cbmltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uQ29uZmlnLCBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IGJhc2VBY2NvdW50TG9ja0ZpZWxkcyBmcm9tICcuLi8uLi9hdXRoL2Jhc2VGaWVsZHMvYWNjb3VudExvY2snXG5pbXBvcnQgYmFzZUFQSUtleUZpZWxkcyBmcm9tICcuLi8uLi9hdXRoL2Jhc2VGaWVsZHMvYXBpS2V5J1xuaW1wb3J0IGJhc2VBdXRoRmllbGRzIGZyb20gJy4uLy4uL2F1dGgvYmFzZUZpZWxkcy9hdXRoJ1xuaW1wb3J0IGJhc2VWZXJpZmljYXRpb25GaWVsZHMgZnJvbSAnLi4vLi4vYXV0aC9iYXNlRmllbGRzL3ZlcmlmaWNhdGlvbidcbmltcG9ydCBUaW1lc3RhbXBzUmVxdWlyZWQgZnJvbSAnLi4vLi4vZXJyb3JzL1RpbWVzdGFtcHNSZXF1aXJlZCdcbmltcG9ydCB7IHNhbml0aXplRmllbGRzIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy9zYW5pdGl6ZSdcbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IG1lcmdlQmFzZUZpZWxkcyBmcm9tICcuLi8uLi9maWVsZHMvbWVyZ2VCYXNlRmllbGRzJ1xuaW1wb3J0IHsgZXh0cmFjdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy9leHRyYWN0VHJhbnNsYXRpb25zJ1xuaW1wb3J0IGdldEJhc2VVcGxvYWRGaWVsZHMgZnJvbSAnLi4vLi4vdXBsb2Fkcy9nZXRCYXNlRmllbGRzJ1xuaW1wb3J0IHsgZm9ybWF0TGFiZWxzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2Zvcm1hdExhYmVscydcbmltcG9ydCBiYXNlVmVyc2lvbkZpZWxkcyBmcm9tICcuLi8uLi92ZXJzaW9ucy9iYXNlRmllbGRzJ1xuaW1wb3J0IHsgYXV0aERlZmF1bHRzLCBkZWZhdWx0cyB9IGZyb20gJy4vZGVmYXVsdHMnXG5cbmNvbnN0IHRyYW5zbGF0aW9ucyA9IGV4dHJhY3RUcmFuc2xhdGlvbnMoWydnZW5lcmFsOmNyZWF0ZWRBdCcsICdnZW5lcmFsOnVwZGF0ZWRBdCddKVxuXG5jb25zdCBzYW5pdGl6ZUNvbGxlY3Rpb24gPSAoXG4gIGNvbmZpZzogQ29uZmlnLFxuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uQ29uZmlnLFxuKTogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyA9PiB7XG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBNYWtlIGNvcHkgb2YgY29sbGVjdGlvbiBjb25maWdcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgY29uc3Qgc2FuaXRpemVkOiBDb2xsZWN0aW9uQ29uZmlnID0gbWVyZ2UoZGVmYXVsdHMsIGNvbGxlY3Rpb24sIHtcbiAgICBpc01lcmdlYWJsZU9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgfSlcblxuICBpZiAoc2FuaXRpemVkLnRpbWVzdGFtcHMgIT09IGZhbHNlKSB7XG4gICAgLy8gYWRkIGRlZmF1bHQgdGltZXN0YW1wcyBmaWVsZHMgb25seSBhcyBuZWVkZWRcbiAgICBsZXQgaGFzVXBkYXRlZEF0ID0gbnVsbFxuICAgIGxldCBoYXNDcmVhdGVkQXQgPSBudWxsXG4gICAgc2FuaXRpemVkLmZpZWxkcy5zb21lKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgICAgIGlmIChmaWVsZC5uYW1lID09PSAndXBkYXRlZEF0JykgaGFzVXBkYXRlZEF0ID0gdHJ1ZVxuICAgICAgICBpZiAoZmllbGQubmFtZSA9PT0gJ2NyZWF0ZWRBdCcpIGhhc0NyZWF0ZWRBdCA9IHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNDcmVhdGVkQXQgJiYgaGFzVXBkYXRlZEF0XG4gICAgfSlcbiAgICBpZiAoIWhhc1VwZGF0ZWRBdCkge1xuICAgICAgc2FuaXRpemVkLmZpZWxkcy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3VwZGF0ZWRBdCcsXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgYWRtaW46IHtcbiAgICAgICAgICBkaXNhYmxlQnVsa0VkaXQ6IHRydWUsXG4gICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsYWJlbDogdHJhbnNsYXRpb25zWydnZW5lcmFsOnVwZGF0ZWRBdCddLFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKCFoYXNDcmVhdGVkQXQpIHtcbiAgICAgIHNhbml0aXplZC5maWVsZHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdjcmVhdGVkQXQnLFxuICAgICAgICBhZG1pbjoge1xuICAgICAgICAgIGRpc2FibGVCdWxrRWRpdDogdHJ1ZSxcbiAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IHNvcnQgZm9yIGxpc3QgdmlldyBpcyBjcmVhdGVkQXQuIFRodXMsIGVuYWJsaW5nIGluZGV4aW5nIGJ5IGRlZmF1bHQsIGlzIGEgbWFqb3IgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQsIGVzcGVjaWFsbHkgZm9yIGxhcmdlIG9yIGEgbGFyZ2UgYW1vdW50IG9mIGNvbGxlY3Rpb25zLlxuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgICBsYWJlbDogdHJhbnNsYXRpb25zWydnZW5lcmFsOmNyZWF0ZWRBdCddLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZWQubGFiZWxzID0gc2FuaXRpemVkLmxhYmVscyB8fCBmb3JtYXRMYWJlbHMoc2FuaXRpemVkLnNsdWcpXG5cbiAgaWYgKHNhbml0aXplZC52ZXJzaW9ucykge1xuICAgIGlmIChzYW5pdGl6ZWQudmVyc2lvbnMgPT09IHRydWUpIHNhbml0aXplZC52ZXJzaW9ucyA9IHsgZHJhZnRzOiBmYWxzZSB9XG5cbiAgICBpZiAoc2FuaXRpemVkLnRpbWVzdGFtcHMgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgVGltZXN0YW1wc1JlcXVpcmVkKGNvbGxlY3Rpb24pXG4gICAgfVxuXG4gICAgaWYgKHNhbml0aXplZC52ZXJzaW9ucy5kcmFmdHMpIHtcbiAgICAgIGlmIChzYW5pdGl6ZWQudmVyc2lvbnMuZHJhZnRzID09PSB0cnVlKSB7XG4gICAgICAgIHNhbml0aXplZC52ZXJzaW9ucy5kcmFmdHMgPSB7XG4gICAgICAgICAgYXV0b3NhdmU6IGZhbHNlLFxuICAgICAgICAgIHZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2FuaXRpemVkLnZlcnNpb25zLmRyYWZ0cy5hdXRvc2F2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBzYW5pdGl6ZWQudmVyc2lvbnMuZHJhZnRzLmF1dG9zYXZlID0ge1xuICAgICAgICAgIGludGVydmFsOiAyMDAwLFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzYW5pdGl6ZWQudmVyc2lvbnMuZHJhZnRzLnZhbGlkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2FuaXRpemVkLnZlcnNpb25zLmRyYWZ0cy52YWxpZGF0ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHNhbml0aXplZC5maWVsZHMgPSBtZXJnZUJhc2VGaWVsZHMoc2FuaXRpemVkLmZpZWxkcywgYmFzZVZlcnNpb25GaWVsZHMpXG4gICAgfVxuICB9XG5cbiAgaWYgKHNhbml0aXplZC51cGxvYWQpIHtcbiAgICBpZiAoc2FuaXRpemVkLnVwbG9hZCA9PT0gdHJ1ZSkgc2FuaXRpemVkLnVwbG9hZCA9IHt9XG5cbiAgICBzYW5pdGl6ZWQudXBsb2FkLnN0YXRpY0RpciA9IHNhbml0aXplZC51cGxvYWQuc3RhdGljRGlyIHx8IHNhbml0aXplZC5zbHVnXG4gICAgc2FuaXRpemVkLnVwbG9hZC5zdGF0aWNVUkwgPSBzYW5pdGl6ZWQudXBsb2FkLnN0YXRpY1VSTCB8fCBgLyR7c2FuaXRpemVkLnNsdWd9YFxuICAgIHNhbml0aXplZC5hZG1pbi51c2VBc1RpdGxlID1cbiAgICAgIHNhbml0aXplZC5hZG1pbi51c2VBc1RpdGxlICYmIHNhbml0aXplZC5hZG1pbi51c2VBc1RpdGxlICE9PSAnaWQnXG4gICAgICAgID8gc2FuaXRpemVkLmFkbWluLnVzZUFzVGl0bGVcbiAgICAgICAgOiAnZmlsZW5hbWUnXG5cbiAgICBjb25zdCB1cGxvYWRGaWVsZHMgPSBnZXRCYXNlVXBsb2FkRmllbGRzKHtcbiAgICAgIGNvbGxlY3Rpb246IHNhbml0aXplZCxcbiAgICAgIGNvbmZpZyxcbiAgICB9KVxuXG4gICAgc2FuaXRpemVkLmZpZWxkcyA9IG1lcmdlQmFzZUZpZWxkcyhzYW5pdGl6ZWQuZmllbGRzLCB1cGxvYWRGaWVsZHMpXG4gIH1cblxuICBpZiAoc2FuaXRpemVkLmF1dGgpIHtcbiAgICBzYW5pdGl6ZWQuYXV0aCA9IG1lcmdlKGF1dGhEZWZhdWx0cywgdHlwZW9mIHNhbml0aXplZC5hdXRoID09PSAnb2JqZWN0JyA/IHNhbml0aXplZC5hdXRoIDoge30sIHtcbiAgICAgIGlzTWVyZ2VhYmxlT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICAgIH0pXG5cbiAgICBsZXQgYXV0aEZpZWxkcyA9IFtdXG5cbiAgICBpZiAoc2FuaXRpemVkLmF1dGgudXNlQVBJS2V5KSB7XG4gICAgICBhdXRoRmllbGRzID0gYXV0aEZpZWxkcy5jb25jYXQoYmFzZUFQSUtleUZpZWxkcylcbiAgICB9XG5cbiAgICBpZiAoIXNhbml0aXplZC5hdXRoLmRpc2FibGVMb2NhbFN0cmF0ZWd5KSB7XG4gICAgICBhdXRoRmllbGRzID0gYXV0aEZpZWxkcy5jb25jYXQoYmFzZUF1dGhGaWVsZHMpXG5cbiAgICAgIGlmIChzYW5pdGl6ZWQuYXV0aC52ZXJpZnkpIHtcbiAgICAgICAgaWYgKHNhbml0aXplZC5hdXRoLnZlcmlmeSA9PT0gdHJ1ZSkgc2FuaXRpemVkLmF1dGgudmVyaWZ5ID0ge31cbiAgICAgICAgYXV0aEZpZWxkcyA9IGF1dGhGaWVsZHMuY29uY2F0KGJhc2VWZXJpZmljYXRpb25GaWVsZHMpXG4gICAgICB9XG5cbiAgICAgIGlmIChzYW5pdGl6ZWQuYXV0aC5tYXhMb2dpbkF0dGVtcHRzID4gMCkge1xuICAgICAgICBhdXRoRmllbGRzID0gYXV0aEZpZWxkcy5jb25jYXQoYmFzZUFjY291bnRMb2NrRmllbGRzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHNhbml0aXplZC5maWVsZHMgPSBtZXJnZUJhc2VGaWVsZHMoc2FuaXRpemVkLmZpZWxkcywgYXV0aEZpZWxkcylcbiAgfVxuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBTYW5pdGl6ZSBmaWVsZHNcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgY29uc3QgdmFsaWRSZWxhdGlvbnNoaXBzID0gY29uZmlnLmNvbGxlY3Rpb25zLm1hcCgoYykgPT4gYy5zbHVnKSB8fCBbXVxuICBzYW5pdGl6ZWQuZmllbGRzID0gc2FuaXRpemVGaWVsZHMoe1xuICAgIGNvbmZpZyxcbiAgICBmaWVsZHM6IHNhbml0aXplZC5maWVsZHMsXG4gICAgdmFsaWRSZWxhdGlvbnNoaXBzLFxuICB9KVxuXG4gIHJldHVybiBzYW5pdGl6ZWQgYXMgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBzYW5pdGl6ZUNvbGxlY3Rpb25cbiJdLCJuYW1lcyI6WyJ0cmFuc2xhdGlvbnMiLCJleHRyYWN0VHJhbnNsYXRpb25zIiwic2FuaXRpemVDb2xsZWN0aW9uIiwiY29uZmlnIiwiY29sbGVjdGlvbiIsInNhbml0aXplZCIsIm1lcmdlIiwiZGVmYXVsdHMiLCJpc01lcmdlYWJsZU9iamVjdCIsImlzUGxhaW5PYmplY3QiLCJ0aW1lc3RhbXBzIiwiaGFzVXBkYXRlZEF0IiwiaGFzQ3JlYXRlZEF0IiwiZmllbGRzIiwic29tZSIsImZpZWxkIiwiZmllbGRBZmZlY3RzRGF0YSIsIm5hbWUiLCJwdXNoIiwidHlwZSIsImFkbWluIiwiZGlzYWJsZUJ1bGtFZGl0IiwiaGlkZGVuIiwibGFiZWwiLCJpbmRleCIsImxhYmVscyIsImZvcm1hdExhYmVscyIsInNsdWciLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsIlRpbWVzdGFtcHNSZXF1aXJlZCIsImF1dG9zYXZlIiwidmFsaWRhdGUiLCJpbnRlcnZhbCIsInVuZGVmaW5lZCIsIm1lcmdlQmFzZUZpZWxkcyIsImJhc2VWZXJzaW9uRmllbGRzIiwidXBsb2FkIiwic3RhdGljRGlyIiwic3RhdGljVVJMIiwidXNlQXNUaXRsZSIsInVwbG9hZEZpZWxkcyIsImdldEJhc2VVcGxvYWRGaWVsZHMiLCJhdXRoIiwiYXV0aERlZmF1bHRzIiwiYXV0aEZpZWxkcyIsInVzZUFQSUtleSIsImNvbmNhdCIsImJhc2VBUElLZXlGaWVsZHMiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsImJhc2VBdXRoRmllbGRzIiwidmVyaWZ5IiwiYmFzZVZlcmlmaWNhdGlvbkZpZWxkcyIsIm1heExvZ2luQXR0ZW1wdHMiLCJiYXNlQWNjb3VudExvY2tGaWVsZHMiLCJ2YWxpZFJlbGF0aW9uc2hpcHMiLCJjb2xsZWN0aW9ucyIsIm1hcCIsImMiLCJzYW5pdGl6ZUZpZWxkcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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