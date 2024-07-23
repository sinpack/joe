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
const _APIError = /*#__PURE__*/ _interop_require_default(require("./APIError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TimestampsRequired extends _APIError.default {
    constructor(collection){
        super(`Timestamps are required in the collection ${collection.slug} because you have opted in to Versions.`);
    }
}
const _default = TimestampsRequired;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvVGltZXN0YW1wc1JlcXVpcmVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InXG5cbmNsYXNzIFRpbWVzdGFtcHNSZXF1aXJlZCBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IoY29sbGVjdGlvbjogQ29sbGVjdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKFxuICAgICAgYFRpbWVzdGFtcHMgYXJlIHJlcXVpcmVkIGluIHRoZSBjb2xsZWN0aW9uICR7Y29sbGVjdGlvbi5zbHVnfSBiZWNhdXNlIHlvdSBoYXZlIG9wdGVkIGluIHRvIFZlcnNpb25zLmAsXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVzdGFtcHNSZXF1aXJlZFxuIl0sIm5hbWVzIjpbIlRpbWVzdGFtcHNSZXF1aXJlZCIsIkFQSUVycm9yIiwiY29uc3RydWN0b3IiLCJjb2xsZWN0aW9uIiwic2x1ZyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBWUE7OztlQUFBOzs7aUVBVnFCOzs7Ozs7QUFFckIsTUFBTUEsMkJBQTJCQyxpQkFBUTtJQUN2Q0MsWUFBWUMsVUFBNEIsQ0FBRTtRQUN4QyxLQUFLLENBQ0gsQ0FBQywwQ0FBMEMsRUFBRUEsV0FBV0MsSUFBSSxDQUFDLHVDQUF1QyxDQUFDO0lBRXpHO0FBQ0Y7TUFFQSxXQUFlSiJ9