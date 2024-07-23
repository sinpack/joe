/* eslint-disable max-classes-per-file */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ExtendableError extends Error {
    data;
    isOperational;
    isPublic;
    status;
    constructor(message, status, data, isPublic){
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        this.data = data;
        this.isPublic = isPublic;
        this.isOperational = true // This is required since bluebird 4 doesn't append it anymore.
        ;
        Error.captureStackTrace(this, this.constructor);
    }
}
/**
 * Class representing an API error.
 * @extends ExtendableError
 */ class APIError extends ExtendableError {
    /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {object} data - response data to be returned.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */ constructor(message, status = _httpstatus.default.INTERNAL_SERVER_ERROR, data = null, isPublic = false){
        super(message, status, data, isPublic);
    }
}
const _default = APIError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvQVBJRXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5jbGFzcyBFeHRlbmRhYmxlRXJyb3I8VERhdGEgZXh0ZW5kcyBvYmplY3QgPSB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gZXh0ZW5kcyBFcnJvciB7XG4gIGRhdGE6IFREYXRhXG5cbiAgaXNPcGVyYXRpb25hbDogYm9vbGVhblxuXG4gIGlzUHVibGljOiBib29sZWFuXG5cbiAgc3RhdHVzOiBudW1iZXJcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyLCBkYXRhOiBURGF0YSwgaXNQdWJsaWM6IGJvb2xlYW4pIHtcbiAgICBzdXBlcihtZXNzYWdlKVxuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c1xuICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB0aGlzLmlzUHVibGljID0gaXNQdWJsaWNcbiAgICB0aGlzLmlzT3BlcmF0aW9uYWwgPSB0cnVlIC8vIFRoaXMgaXMgcmVxdWlyZWQgc2luY2UgYmx1ZWJpcmQgNCBkb2Vzbid0IGFwcGVuZCBpdCBhbnltb3JlLlxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpXG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYW4gQVBJIGVycm9yLlxuICogQGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yXG4gKi9cbmNsYXNzIEFQSUVycm9yPFxuICBURGF0YSBleHRlbmRzIG51bGwgfCBvYmplY3QgPSB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSB8IG51bGwsXG4+IGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yPFREYXRhPiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIEFQSSBlcnJvci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBFcnJvciBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzIC0gSFRUUCBzdGF0dXMgY29kZSBvZiBlcnJvci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSByZXNwb25zZSBkYXRhIHRvIGJlIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzUHVibGljIC0gV2hldGhlciB0aGUgbWVzc2FnZSBzaG91bGQgYmUgdmlzaWJsZSB0byB1c2VyIG9yIG5vdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBzdGF0dXM6IG51bWJlciA9IGh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgIGRhdGE6IFREYXRhID0gbnVsbCxcbiAgICBpc1B1YmxpYyA9IGZhbHNlLFxuICApIHtcbiAgICBzdXBlcihtZXNzYWdlLCBzdGF0dXMsIGRhdGEsIGlzUHVibGljKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQSUVycm9yXG4iXSwibmFtZXMiOlsiRXh0ZW5kYWJsZUVycm9yIiwiRXJyb3IiLCJkYXRhIiwiaXNPcGVyYXRpb25hbCIsImlzUHVibGljIiwic3RhdHVzIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwibmFtZSIsImNhcHR1cmVTdGFja1RyYWNlIiwiQVBJRXJyb3IiLCJodHRwU3RhdHVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7Ozs7K0JBZ0R2Qzs7O2VBQUE7OzttRUEvQ3VCOzs7Ozs7QUFFdkIsTUFBTUEsd0JBQTJFQztJQUMvRUMsS0FBVztJQUVYQyxjQUFzQjtJQUV0QkMsU0FBaUI7SUFFakJDLE9BQWM7SUFFZEMsWUFBWUMsT0FBZSxFQUFFRixNQUFjLEVBQUVILElBQVcsRUFBRUUsUUFBaUIsQ0FBRTtRQUMzRSxLQUFLLENBQUNHO1FBQ04sSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDRixXQUFXLENBQUNFLElBQUk7UUFDakMsSUFBSSxDQUFDRCxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDRixNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDSCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDRSxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0QsYUFBYSxHQUFHLEtBQUssK0RBQStEOztRQUN6RkYsTUFBTVEsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ0gsV0FBVztJQUNoRDtBQUNGO0FBRUE7OztDQUdDLEdBQ0QsTUFBTUksaUJBRUlWO0lBQ1I7Ozs7OztHQU1DLEdBQ0RNLFlBQ0VDLE9BQWUsRUFDZkYsU0FBaUJNLG1CQUFVLENBQUNDLHFCQUFxQixFQUNqRFYsT0FBYyxJQUFJLEVBQ2xCRSxXQUFXLEtBQUssQ0FDaEI7UUFDQSxLQUFLLENBQUNHLFNBQVNGLFFBQVFILE1BQU1FO0lBQy9CO0FBQ0Y7TUFFQSxXQUFlTSJ9