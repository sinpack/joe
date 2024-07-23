"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "combineMerge", {
    enumerable: true,
    get: function() {
        return combineMerge;
    }
});
const _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const combineMerge = (target, source, options)=>{
    const destination = target.slice();
    source.forEach((item, index)=>{
        if (typeof destination[index] === 'undefined') {
            destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
        } else if (options.isMergeableObject(item)) {
            destination[index] = (0, _deepmerge.default)(target[index], item, options);
        } else if (target.indexOf(item) === -1) {
            destination.push(item);
        }
    });
    return destination;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29tYmluZU1lcmdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnXG5cbmV4cG9ydCBjb25zdCBjb21iaW5lTWVyZ2UgPSAodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGVzdGluYXRpb24gPSB0YXJnZXQuc2xpY2UoKVxuXG4gIHNvdXJjZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25baW5kZXhdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZGVzdGluYXRpb25baW5kZXhdID0gb3B0aW9ucy5jbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChpdGVtLCBvcHRpb25zKVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChpdGVtKSkge1xuICAgICAgZGVzdGluYXRpb25baW5kZXhdID0gbWVyZ2UodGFyZ2V0W2luZGV4XSwgaXRlbSwgb3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgZGVzdGluYXRpb24ucHVzaChpdGVtKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG4iXSwibmFtZXMiOlsiY29tYmluZU1lcmdlIiwidGFyZ2V0Iiwic291cmNlIiwib3B0aW9ucyIsImRlc3RpbmF0aW9uIiwic2xpY2UiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQiLCJpc01lcmdlYWJsZU9iamVjdCIsIm1lcmdlIiwiaW5kZXhPZiIsInB1c2giXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFFYUE7OztlQUFBQTs7O2tFQUZLOzs7Ozs7QUFFWCxNQUFNQSxlQUFlLENBQUNDLFFBQVFDLFFBQVFDO0lBQzNDLE1BQU1DLGNBQWNILE9BQU9JLEtBQUs7SUFFaENILE9BQU9JLE9BQU8sQ0FBQyxDQUFDQyxNQUFNQztRQUNwQixJQUFJLE9BQU9KLFdBQVcsQ0FBQ0ksTUFBTSxLQUFLLGFBQWE7WUFDN0NKLFdBQVcsQ0FBQ0ksTUFBTSxHQUFHTCxRQUFRTSw2QkFBNkIsQ0FBQ0YsTUFBTUo7UUFDbkUsT0FBTyxJQUFJQSxRQUFRTyxpQkFBaUIsQ0FBQ0gsT0FBTztZQUMxQ0gsV0FBVyxDQUFDSSxNQUFNLEdBQUdHLElBQUFBLGtCQUFLLEVBQUNWLE1BQU0sQ0FBQ08sTUFBTSxFQUFFRCxNQUFNSjtRQUNsRCxPQUFPLElBQUlGLE9BQU9XLE9BQU8sQ0FBQ0wsVUFBVSxDQUFDLEdBQUc7WUFDdENILFlBQVlTLElBQUksQ0FBQ047UUFDbkI7SUFDRjtJQUNBLE9BQU9IO0FBQ1QifQ==