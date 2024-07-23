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
const _passport = /*#__PURE__*/ _interop_require_default(require("passport"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (config)=>{
    const defaultMethods = [
        'jwt',
        'anonymous'
    ];
    const methods = config.collections.reduce((enabledMethods, collection)=>{
        if (typeof collection.auth === 'object') {
            const collectionMethods = [
                ...enabledMethods
            ];
            if (Array.isArray(collection.auth.strategies)) {
                collection.auth.strategies.forEach(({ name, strategy })=>{
                    collectionMethods.unshift(`${collection.slug}-${name ?? strategy.name}`);
                });
            }
            if (collection.auth.useAPIKey) {
                collectionMethods.unshift(`${collection.slug}-api-key`);
            }
            return collectionMethods;
        }
        return enabledMethods;
    }, defaultMethods);
    const authenticate = _passport.default.authenticate(methods, {
        session: false
    });
    return authenticate;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvYXV0aGVudGljYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmV4cG9ydCB0eXBlIFBheWxvYWRBdXRoZW50aWNhdGUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IE5leHRGdW5jdGlvblxuXG5leHBvcnQgZGVmYXVsdCAoY29uZmlnOiBTYW5pdGl6ZWRDb25maWcpOiBQYXlsb2FkQXV0aGVudGljYXRlID0+IHtcbiAgY29uc3QgZGVmYXVsdE1ldGhvZHMgPSBbJ2p3dCcsICdhbm9ueW1vdXMnXVxuXG4gIGNvbnN0IG1ldGhvZHMgPSBjb25maWcuY29sbGVjdGlvbnMucmVkdWNlKChlbmFibGVkTWV0aG9kcywgY29sbGVjdGlvbikgPT4ge1xuICAgIGlmICh0eXBlb2YgY29sbGVjdGlvbi5hdXRoID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3QgY29sbGVjdGlvbk1ldGhvZHMgPSBbLi4uZW5hYmxlZE1ldGhvZHNdXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbGxlY3Rpb24uYXV0aC5zdHJhdGVnaWVzKSkge1xuICAgICAgICBjb2xsZWN0aW9uLmF1dGguc3RyYXRlZ2llcy5mb3JFYWNoKCh7IG5hbWUsIHN0cmF0ZWd5IH0pID0+IHtcbiAgICAgICAgICBjb2xsZWN0aW9uTWV0aG9kcy51bnNoaWZ0KGAke2NvbGxlY3Rpb24uc2x1Z30tJHtuYW1lID8/IHN0cmF0ZWd5Lm5hbWV9YClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxlY3Rpb24uYXV0aC51c2VBUElLZXkpIHtcbiAgICAgICAgY29sbGVjdGlvbk1ldGhvZHMudW5zaGlmdChgJHtjb2xsZWN0aW9uLnNsdWd9LWFwaS1rZXlgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29sbGVjdGlvbk1ldGhvZHNcbiAgICB9XG5cbiAgICByZXR1cm4gZW5hYmxlZE1ldGhvZHNcbiAgfSwgZGVmYXVsdE1ldGhvZHMpXG5cbiAgY29uc3QgYXV0aGVudGljYXRlID0gcGFzc3BvcnQuYXV0aGVudGljYXRlKG1ldGhvZHMsIHsgc2Vzc2lvbjogZmFsc2UgfSlcbiAgcmV0dXJuIGF1dGhlbnRpY2F0ZVxufVxuIl0sIm5hbWVzIjpbImNvbmZpZyIsImRlZmF1bHRNZXRob2RzIiwibWV0aG9kcyIsImNvbGxlY3Rpb25zIiwicmVkdWNlIiwiZW5hYmxlZE1ldGhvZHMiLCJjb2xsZWN0aW9uIiwiYXV0aCIsImNvbGxlY3Rpb25NZXRob2RzIiwiQXJyYXkiLCJpc0FycmF5Iiwic3RyYXRlZ2llcyIsImZvckVhY2giLCJuYW1lIiwic3RyYXRlZ3kiLCJ1bnNoaWZ0Iiwic2x1ZyIsInVzZUFQSUtleSIsImF1dGhlbnRpY2F0ZSIsInBhc3Nwb3J0Iiwic2Vzc2lvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBUUE7OztlQUFBOzs7aUVBTnFCOzs7Ozs7TUFNckIsV0FBZSxDQUFDQTtJQUNkLE1BQU1DLGlCQUFpQjtRQUFDO1FBQU87S0FBWTtJQUUzQyxNQUFNQyxVQUFVRixPQUFPRyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxnQkFBZ0JDO1FBQ3pELElBQUksT0FBT0EsV0FBV0MsSUFBSSxLQUFLLFVBQVU7WUFDdkMsTUFBTUMsb0JBQW9CO21CQUFJSDthQUFlO1lBRTdDLElBQUlJLE1BQU1DLE9BQU8sQ0FBQ0osV0FBV0MsSUFBSSxDQUFDSSxVQUFVLEdBQUc7Z0JBQzdDTCxXQUFXQyxJQUFJLENBQUNJLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7b0JBQ3BETixrQkFBa0JPLE9BQU8sQ0FBQyxDQUFDLEVBQUVULFdBQVdVLElBQUksQ0FBQyxDQUFDLEVBQUVILFFBQVFDLFNBQVNELElBQUksQ0FBQyxDQUFDO2dCQUN6RTtZQUNGO1lBRUEsSUFBSVAsV0FBV0MsSUFBSSxDQUFDVSxTQUFTLEVBQUU7Z0JBQzdCVCxrQkFBa0JPLE9BQU8sQ0FBQyxDQUFDLEVBQUVULFdBQVdVLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEQ7WUFFQSxPQUFPUjtRQUNUO1FBRUEsT0FBT0g7SUFDVCxHQUFHSjtJQUVILE1BQU1pQixlQUFlQyxpQkFBUSxDQUFDRCxZQUFZLENBQUNoQixTQUFTO1FBQUVrQixTQUFTO0lBQU07SUFDckUsT0FBT0Y7QUFDVCJ9