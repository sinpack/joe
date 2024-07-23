"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sanitizeConfig", {
    enumerable: true,
    get: function() {
        return sanitizeConfig;
    }
});
const _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
const _isplainobject = require("is-plain-object");
const _defaultUser = require("../auth/defaultUser");
const _sanitize = /*#__PURE__*/ _interop_require_default(require("../collections/config/sanitize"));
const _migrationsCollection = require("../database/migrations/migrationsCollection");
const _errors = require("../errors");
const _sanitize1 = /*#__PURE__*/ _interop_require_default(require("../globals/config/sanitize"));
const _preferencesCollection = /*#__PURE__*/ _interop_require_default(require("../preferences/preferencesCollection"));
const _checkDuplicateCollections = /*#__PURE__*/ _interop_require_default(require("../utilities/checkDuplicateCollections"));
const _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const sanitizeAdminConfig = (configToSanitize)=>{
    const sanitizedConfig = {
        ...configToSanitize
    };
    // add default user collection if none provided
    if (!sanitizedConfig?.admin?.user) {
        const firstCollectionWithAuth = sanitizedConfig.collections.find(({ auth })=>Boolean(auth));
        if (firstCollectionWithAuth) {
            sanitizedConfig.admin.user = firstCollectionWithAuth.slug;
        } else {
            sanitizedConfig.admin.user = _defaultUser.defaultUserCollection.slug;
            sanitizedConfig.collections.push(_defaultUser.defaultUserCollection);
        }
    }
    if (!sanitizedConfig.collections.find(({ slug })=>slug === sanitizedConfig.admin.user)) {
        throw new _errors.InvalidConfiguration(`${sanitizedConfig.admin.user} is not a valid admin user collection`);
    }
    return sanitizedConfig;
};
const sanitizeConfig = (incomingConfig)=>{
    const configWithDefaults = (0, _deepmerge.default)(_defaults.defaults, incomingConfig, {
        isMergeableObject: _isplainobject.isPlainObject
    });
    if (!configWithDefaults.serverURL) {
        configWithDefaults.serverURL = '';
    }
    const config = sanitizeAdminConfig(configWithDefaults);
    if (config.localization && config.localization.locales?.length > 0) {
        // clone localization config so to not break everything
        const firstLocale = config.localization.locales[0];
        if (typeof firstLocale === 'string') {
            config.localization.localeCodes = [
                ...config.localization.locales
            ];
            // is string[], so convert to Locale[]
            config.localization.locales = config.localization.locales.map((locale)=>({
                    code: locale,
                    label: locale,
                    rtl: false,
                    toString: ()=>locale
                }));
        } else {
            // is Locale[], so convert to string[] for localeCodes
            config.localization.localeCodes = config.localization.locales.reduce((locales, locale)=>{
                locales.push(locale.code);
                return locales;
            }, []);
            config.localization.locales = config.localization.locales.map((locale)=>({
                    ...locale,
                    toString: ()=>locale.code
                }));
        }
    }
    configWithDefaults.collections.push((0, _preferencesCollection.default)(configWithDefaults));
    configWithDefaults.collections.push(_migrationsCollection.migrationsCollection);
    config.collections = config.collections.map((collection)=>(0, _sanitize.default)(configWithDefaults, collection));
    (0, _checkDuplicateCollections.default)(config.collections);
    if (config.globals.length > 0) {
        config.globals = (0, _sanitize1.default)(config);
    }
    if (config.serverURL !== '') {
        config.csrf.push(config.serverURL);
    }
    return config;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvc2FuaXRpemUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QgfSBmcm9tICdpcy1wbGFpbi1vYmplY3QnXG5cbmltcG9ydCB0eXBlIHtcbiAgQ29uZmlnLFxuICBMb2NhbGl6YXRpb25Db25maWdXaXRoTGFiZWxzLFxuICBMb2NhbGl6YXRpb25Db25maWdXaXRoTm9MYWJlbHMsXG4gIFNhbml0aXplZENvbmZpZyxcbn0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgZGVmYXVsdFVzZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi4vYXV0aC9kZWZhdWx0VXNlcidcbmltcG9ydCBzYW5pdGl6ZUNvbGxlY3Rpb24gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3Nhbml0aXplJ1xuaW1wb3J0IHsgbWlncmF0aW9uc0NvbGxlY3Rpb24gfSBmcm9tICcuLi9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGlvbnNDb2xsZWN0aW9uJ1xuaW1wb3J0IHsgSW52YWxpZENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9lcnJvcnMnXG5pbXBvcnQgc2FuaXRpemVHbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMvY29uZmlnL3Nhbml0aXplJ1xuaW1wb3J0IGdldFByZWZlcmVuY2VzQ29sbGVjdGlvbiBmcm9tICcuLi9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlc0NvbGxlY3Rpb24nXG5pbXBvcnQgY2hlY2tEdXBsaWNhdGVDb2xsZWN0aW9ucyBmcm9tICcuLi91dGlsaXRpZXMvY2hlY2tEdXBsaWNhdGVDb2xsZWN0aW9ucydcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9kZWZhdWx0cydcblxuY29uc3Qgc2FuaXRpemVBZG1pbkNvbmZpZyA9IChjb25maWdUb1Nhbml0aXplOiBDb25maWcpOiBQYXJ0aWFsPFNhbml0aXplZENvbmZpZz4gPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRDb25maWcgPSB7IC4uLmNvbmZpZ1RvU2FuaXRpemUgfVxuXG4gIC8vIGFkZCBkZWZhdWx0IHVzZXIgY29sbGVjdGlvbiBpZiBub25lIHByb3ZpZGVkXG4gIGlmICghc2FuaXRpemVkQ29uZmlnPy5hZG1pbj8udXNlcikge1xuICAgIGNvbnN0IGZpcnN0Q29sbGVjdGlvbldpdGhBdXRoID0gc2FuaXRpemVkQ29uZmlnLmNvbGxlY3Rpb25zLmZpbmQoKHsgYXV0aCB9KSA9PiBCb29sZWFuKGF1dGgpKVxuICAgIGlmIChmaXJzdENvbGxlY3Rpb25XaXRoQXV0aCkge1xuICAgICAgc2FuaXRpemVkQ29uZmlnLmFkbWluLnVzZXIgPSBmaXJzdENvbGxlY3Rpb25XaXRoQXV0aC5zbHVnXG4gICAgfSBlbHNlIHtcbiAgICAgIHNhbml0aXplZENvbmZpZy5hZG1pbi51c2VyID0gZGVmYXVsdFVzZXJDb2xsZWN0aW9uLnNsdWdcbiAgICAgIHNhbml0aXplZENvbmZpZy5jb2xsZWN0aW9ucy5wdXNoKGRlZmF1bHRVc2VyQ29sbGVjdGlvbilcbiAgICB9XG4gIH1cblxuICBpZiAoIXNhbml0aXplZENvbmZpZy5jb2xsZWN0aW9ucy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gc2FuaXRpemVkQ29uZmlnLmFkbWluLnVzZXIpKSB7XG4gICAgdGhyb3cgbmV3IEludmFsaWRDb25maWd1cmF0aW9uKFxuICAgICAgYCR7c2FuaXRpemVkQ29uZmlnLmFkbWluLnVzZXJ9IGlzIG5vdCBhIHZhbGlkIGFkbWluIHVzZXIgY29sbGVjdGlvbmAsXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHNhbml0aXplZENvbmZpZyBhcyBQYXJ0aWFsPFNhbml0aXplZENvbmZpZz5cbn1cblxuZXhwb3J0IGNvbnN0IHNhbml0aXplQ29uZmlnID0gKGluY29taW5nQ29uZmlnOiBDb25maWcpOiBTYW5pdGl6ZWRDb25maWcgPT4ge1xuICBjb25zdCBjb25maWdXaXRoRGVmYXVsdHM6IENvbmZpZyA9IG1lcmdlKGRlZmF1bHRzLCBpbmNvbWluZ0NvbmZpZywge1xuICAgIGlzTWVyZ2VhYmxlT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICB9KSBhcyBDb25maWdcblxuICBpZiAoIWNvbmZpZ1dpdGhEZWZhdWx0cy5zZXJ2ZXJVUkwpIHtcbiAgICBjb25maWdXaXRoRGVmYXVsdHMuc2VydmVyVVJMID0gJydcbiAgfVxuXG4gIGNvbnN0IGNvbmZpZzogUGFydGlhbDxTYW5pdGl6ZWRDb25maWc+ID0gc2FuaXRpemVBZG1pbkNvbmZpZyhjb25maWdXaXRoRGVmYXVsdHMpXG5cbiAgaWYgKGNvbmZpZy5sb2NhbGl6YXRpb24gJiYgY29uZmlnLmxvY2FsaXphdGlvbi5sb2NhbGVzPy5sZW5ndGggPiAwKSB7XG4gICAgLy8gY2xvbmUgbG9jYWxpemF0aW9uIGNvbmZpZyBzbyB0byBub3QgYnJlYWsgZXZlcnl0aGluZ1xuICAgIGNvbnN0IGZpcnN0TG9jYWxlID0gY29uZmlnLmxvY2FsaXphdGlvbi5sb2NhbGVzWzBdXG4gICAgaWYgKHR5cGVvZiBmaXJzdExvY2FsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZy5sb2NhbGl6YXRpb24ubG9jYWxlQ29kZXMgPSBbXG4gICAgICAgIC4uLihjb25maWcubG9jYWxpemF0aW9uIGFzIHVua25vd24gYXMgTG9jYWxpemF0aW9uQ29uZmlnV2l0aE5vTGFiZWxzKS5sb2NhbGVzLFxuICAgICAgXVxuXG4gICAgICAvLyBpcyBzdHJpbmdbXSwgc28gY29udmVydCB0byBMb2NhbGVbXVxuICAgICAgY29uZmlnLmxvY2FsaXphdGlvbi5sb2NhbGVzID0gKFxuICAgICAgICBjb25maWcubG9jYWxpemF0aW9uIGFzIHVua25vd24gYXMgTG9jYWxpemF0aW9uQ29uZmlnV2l0aE5vTGFiZWxzXG4gICAgICApLmxvY2FsZXMubWFwKChsb2NhbGUpID0+ICh7XG4gICAgICAgIGNvZGU6IGxvY2FsZSxcbiAgICAgICAgbGFiZWw6IGxvY2FsZSxcbiAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgdG9TdHJpbmc6ICgpID0+IGxvY2FsZSxcbiAgICAgIH0pKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpcyBMb2NhbGVbXSwgc28gY29udmVydCB0byBzdHJpbmdbXSBmb3IgbG9jYWxlQ29kZXNcbiAgICAgIGNvbmZpZy5sb2NhbGl6YXRpb24ubG9jYWxlQ29kZXMgPSBjb25maWcubG9jYWxpemF0aW9uLmxvY2FsZXMucmVkdWNlKChsb2NhbGVzLCBsb2NhbGUpID0+IHtcbiAgICAgICAgbG9jYWxlcy5wdXNoKGxvY2FsZS5jb2RlKVxuICAgICAgICByZXR1cm4gbG9jYWxlc1xuICAgICAgfSwgW10gYXMgc3RyaW5nW10pXG5cbiAgICAgIGNvbmZpZy5sb2NhbGl6YXRpb24ubG9jYWxlcyA9IChcbiAgICAgICAgY29uZmlnLmxvY2FsaXphdGlvbiBhcyBMb2NhbGl6YXRpb25Db25maWdXaXRoTGFiZWxzXG4gICAgICApLmxvY2FsZXMubWFwKChsb2NhbGUpID0+ICh7XG4gICAgICAgIC4uLmxvY2FsZSxcbiAgICAgICAgdG9TdHJpbmc6ICgpID0+IGxvY2FsZS5jb2RlLFxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgY29uZmlnV2l0aERlZmF1bHRzLmNvbGxlY3Rpb25zLnB1c2goZ2V0UHJlZmVyZW5jZXNDb2xsZWN0aW9uKGNvbmZpZ1dpdGhEZWZhdWx0cykpXG4gIGNvbmZpZ1dpdGhEZWZhdWx0cy5jb2xsZWN0aW9ucy5wdXNoKG1pZ3JhdGlvbnNDb2xsZWN0aW9uKVxuXG4gIGNvbmZpZy5jb2xsZWN0aW9ucyA9IGNvbmZpZy5jb2xsZWN0aW9ucy5tYXAoKGNvbGxlY3Rpb24pID0+XG4gICAgc2FuaXRpemVDb2xsZWN0aW9uKGNvbmZpZ1dpdGhEZWZhdWx0cywgY29sbGVjdGlvbiksXG4gIClcbiAgY2hlY2tEdXBsaWNhdGVDb2xsZWN0aW9ucyhjb25maWcuY29sbGVjdGlvbnMpXG5cbiAgaWYgKGNvbmZpZy5nbG9iYWxzLmxlbmd0aCA+IDApIHtcbiAgICBjb25maWcuZ2xvYmFscyA9IHNhbml0aXplR2xvYmFscyhjb25maWcgYXMgU2FuaXRpemVkQ29uZmlnKVxuICB9XG5cbiAgaWYgKGNvbmZpZy5zZXJ2ZXJVUkwgIT09ICcnKSB7XG4gICAgY29uZmlnLmNzcmYucHVzaChjb25maWcuc2VydmVyVVJMKVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZyBhcyBTYW5pdGl6ZWRDb25maWdcbn1cbiJdLCJuYW1lcyI6WyJzYW5pdGl6ZUNvbmZpZyIsInNhbml0aXplQWRtaW5Db25maWciLCJjb25maWdUb1Nhbml0aXplIiwic2FuaXRpemVkQ29uZmlnIiwiYWRtaW4iLCJ1c2VyIiwiZmlyc3RDb2xsZWN0aW9uV2l0aEF1dGgiLCJjb2xsZWN0aW9ucyIsImZpbmQiLCJhdXRoIiwiQm9vbGVhbiIsInNsdWciLCJkZWZhdWx0VXNlckNvbGxlY3Rpb24iLCJwdXNoIiwiSW52YWxpZENvbmZpZ3VyYXRpb24iLCJpbmNvbWluZ0NvbmZpZyIsImNvbmZpZ1dpdGhEZWZhdWx0cyIsIm1lcmdlIiwiZGVmYXVsdHMiLCJpc01lcmdlYWJsZU9iamVjdCIsImlzUGxhaW5PYmplY3QiLCJzZXJ2ZXJVUkwiLCJjb25maWciLCJsb2NhbGl6YXRpb24iLCJsb2NhbGVzIiwibGVuZ3RoIiwiZmlyc3RMb2NhbGUiLCJsb2NhbGVDb2RlcyIsIm1hcCIsImxvY2FsZSIsImNvZGUiLCJsYWJlbCIsInJ0bCIsInRvU3RyaW5nIiwicmVkdWNlIiwiZ2V0UHJlZmVyZW5jZXNDb2xsZWN0aW9uIiwibWlncmF0aW9uc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwic2FuaXRpemVDb2xsZWN0aW9uIiwiY2hlY2tEdXBsaWNhdGVDb2xsZWN0aW9ucyIsImdsb2JhbHMiLCJzYW5pdGl6ZUdsb2JhbHMiLCJjc3JmIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7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