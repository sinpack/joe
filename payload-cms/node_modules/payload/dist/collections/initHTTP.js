"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return initCollectionsHTTP;
    }
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _passport = /*#__PURE__*/ _interop_require_default(require("passport"));
const _apiKey = /*#__PURE__*/ _interop_require_default(require("../auth/strategies/apiKey"));
const _mountEndpoints = /*#__PURE__*/ _interop_require_default(require("../express/mountEndpoints"));
const _bindCollection = /*#__PURE__*/ _interop_require_default(require("./bindCollection"));
const _buildEndpoints = /*#__PURE__*/ _interop_require_default(require("./buildEndpoints"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initCollectionsHTTP(ctx) {
    ctx.config.collections = ctx.config.collections.map((collection)=>{
        const formattedCollection = collection;
        const router = _express.default.Router();
        const { slug } = collection;
        router.all('*', (0, _bindCollection.default)(ctx.collections[formattedCollection.slug]));
        if (collection.auth) {
            const { config } = ctx.collections[formattedCollection.slug];
            if (collection.auth.useAPIKey) {
                _passport.default.use(`${config.slug}-api-key`, (0, _apiKey.default)(ctx, config));
            }
            if (Array.isArray(collection.auth.strategies)) {
                collection.auth.strategies.forEach(({ name, strategy }, index)=>{
                    const passportStrategy = typeof strategy === 'object' ? strategy : strategy(ctx);
                    _passport.default.use(`${config.slug}-${name ?? index}`, passportStrategy);
                });
            }
        }
        const endpoints = (0, _buildEndpoints.default)(collection);
        (0, _mountEndpoints.default)(ctx.express, router, endpoints);
        ctx.router.use(`/${slug}`, router);
        return formattedCollection;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xsZWN0aW9ucy9pbml0SFRUUC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBhcGlLZXlTdHJhdGVneSBmcm9tICcuLi9hdXRoL3N0cmF0ZWdpZXMvYXBpS2V5J1xuaW1wb3J0IG1vdW50RW5kcG9pbnRzIGZyb20gJy4uL2V4cHJlc3MvbW91bnRFbmRwb2ludHMnXG5pbXBvcnQgYmluZENvbGxlY3Rpb25NaWRkbGV3YXJlIGZyb20gJy4vYmluZENvbGxlY3Rpb24nXG5pbXBvcnQgYnVpbGRFbmRwb2ludHMgZnJvbSAnLi9idWlsZEVuZHBvaW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdENvbGxlY3Rpb25zSFRUUChjdHg6IFBheWxvYWQpOiB2b2lkIHtcbiAgY3R4LmNvbmZpZy5jb2xsZWN0aW9ucyA9IGN0eC5jb25maWcuY29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgZm9ybWF0dGVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb25cblxuICAgIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcbiAgICBjb25zdCB7IHNsdWcgfSA9IGNvbGxlY3Rpb25cblxuICAgIHJvdXRlci5hbGwoJyonLCBiaW5kQ29sbGVjdGlvbk1pZGRsZXdhcmUoY3R4LmNvbGxlY3Rpb25zW2Zvcm1hdHRlZENvbGxlY3Rpb24uc2x1Z10pKVxuXG4gICAgaWYgKGNvbGxlY3Rpb24uYXV0aCkge1xuICAgICAgY29uc3QgeyBjb25maWcgfSA9IGN0eC5jb2xsZWN0aW9uc1tmb3JtYXR0ZWRDb2xsZWN0aW9uLnNsdWddXG5cbiAgICAgIGlmIChjb2xsZWN0aW9uLmF1dGgudXNlQVBJS2V5KSB7XG4gICAgICAgIHBhc3Nwb3J0LnVzZShgJHtjb25maWcuc2x1Z30tYXBpLWtleWAsIGFwaUtleVN0cmF0ZWd5KGN0eCwgY29uZmlnKSlcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdGlvbi5hdXRoLnN0cmF0ZWdpZXMpKSB7XG4gICAgICAgIGNvbGxlY3Rpb24uYXV0aC5zdHJhdGVnaWVzLmZvckVhY2goKHsgbmFtZSwgc3RyYXRlZ3kgfSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXNzcG9ydFN0cmF0ZWd5ID0gdHlwZW9mIHN0cmF0ZWd5ID09PSAnb2JqZWN0JyA/IHN0cmF0ZWd5IDogc3RyYXRlZ3koY3R4KVxuICAgICAgICAgIHBhc3Nwb3J0LnVzZShgJHtjb25maWcuc2x1Z30tJHtuYW1lID8/IGluZGV4fWAsIHBhc3Nwb3J0U3RyYXRlZ3kpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW5kcG9pbnRzID0gYnVpbGRFbmRwb2ludHMoY29sbGVjdGlvbilcbiAgICBtb3VudEVuZHBvaW50cyhjdHguZXhwcmVzcywgcm91dGVyLCBlbmRwb2ludHMpXG5cbiAgICBjdHgucm91dGVyLnVzZShgLyR7c2x1Z31gLCByb3V0ZXIpXG5cbiAgICByZXR1cm4gZm9ybWF0dGVkQ29sbGVjdGlvblxuICB9KVxufVxuIl0sIm5hbWVzIjpbImluaXRDb2xsZWN0aW9uc0hUVFAiLCJjdHgiLCJjb25maWciLCJjb2xsZWN0aW9ucyIsIm1hcCIsImNvbGxlY3Rpb24iLCJmb3JtYXR0ZWRDb2xsZWN0aW9uIiwicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsInNsdWciLCJhbGwiLCJiaW5kQ29sbGVjdGlvbk1pZGRsZXdhcmUiLCJhdXRoIiwidXNlQVBJS2V5IiwicGFzc3BvcnQiLCJ1c2UiLCJhcGlLZXlTdHJhdGVneSIsIkFycmF5IiwiaXNBcnJheSIsInN0cmF0ZWdpZXMiLCJmb3JFYWNoIiwibmFtZSIsInN0cmF0ZWd5IiwiaW5kZXgiLCJwYXNzcG9ydFN0cmF0ZWd5IiwiZW5kcG9pbnRzIiwiYnVpbGRFbmRwb2ludHMiLCJtb3VudEVuZHBvaW50cyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFXQTs7O2VBQXdCQTs7O2dFQVhKO2lFQUNDOytEQUtNO3VFQUNBO3VFQUNVO3VFQUNWOzs7Ozs7QUFFWixTQUFTQSxvQkFBb0JDLEdBQVk7SUFDdERBLElBQUlDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHRixJQUFJQyxNQUFNLENBQUNDLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO1FBQ25ELE1BQU1DLHNCQUFzQkQ7UUFFNUIsTUFBTUUsU0FBU0MsZ0JBQU8sQ0FBQ0MsTUFBTTtRQUM3QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHTDtRQUVqQkUsT0FBT0ksR0FBRyxDQUFDLEtBQUtDLElBQUFBLHVCQUF3QixFQUFDWCxJQUFJRSxXQUFXLENBQUNHLG9CQUFvQkksSUFBSSxDQUFDO1FBRWxGLElBQUlMLFdBQVdRLElBQUksRUFBRTtZQUNuQixNQUFNLEVBQUVYLE1BQU0sRUFBRSxHQUFHRCxJQUFJRSxXQUFXLENBQUNHLG9CQUFvQkksSUFBSSxDQUFDO1lBRTVELElBQUlMLFdBQVdRLElBQUksQ0FBQ0MsU0FBUyxFQUFFO2dCQUM3QkMsaUJBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRWQsT0FBT1EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFTyxJQUFBQSxlQUFjLEVBQUNoQixLQUFLQztZQUM3RDtZQUVBLElBQUlnQixNQUFNQyxPQUFPLENBQUNkLFdBQVdRLElBQUksQ0FBQ08sVUFBVSxHQUFHO2dCQUM3Q2YsV0FBV1EsSUFBSSxDQUFDTyxVQUFVLENBQUNDLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFLEVBQUVDO29CQUN0RCxNQUFNQyxtQkFBbUIsT0FBT0YsYUFBYSxXQUFXQSxXQUFXQSxTQUFTdEI7b0JBQzVFYyxpQkFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxFQUFFZCxPQUFPUSxJQUFJLENBQUMsQ0FBQyxFQUFFWSxRQUFRRSxNQUFNLENBQUMsRUFBRUM7Z0JBQ2xEO1lBQ0Y7UUFDRjtRQUVBLE1BQU1DLFlBQVlDLElBQUFBLHVCQUFjLEVBQUN0QjtRQUNqQ3VCLElBQUFBLHVCQUFjLEVBQUMzQixJQUFJTyxPQUFPLEVBQUVELFFBQVFtQjtRQUVwQ3pCLElBQUlNLE1BQU0sQ0FBQ1MsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFTixLQUFLLENBQUMsRUFBRUg7UUFFM0IsT0FBT0Q7SUFDVDtBQUNGIn0=