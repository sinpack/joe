"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "oneWayHash", {
    enumerable: true,
    get: function() {
        return oneWayHash;
    }
});
const _crypto = require("crypto");
const oneWayHash = (data, secret)=>{
    const hash = (0, _crypto.createHash)('sha256');
    // prepend value with payload secret. This ensure one-way.
    hash.update(secret);
    // Update is an append operation, not a replacement. The secret from the prior
    // update is still present!
    hash.update(data);
    return hash.digest('hex');
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGVsZW1ldHJ5L29uZVdheUhhc2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCaW5hcnlMaWtlIH0gZnJvbSAnY3J5cHRvJ1xuXG5pbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSAnY3J5cHRvJ1xuXG5leHBvcnQgY29uc3Qgb25lV2F5SGFzaCA9IChkYXRhOiBCaW5hcnlMaWtlLCBzZWNyZXQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGhhc2ggPSBjcmVhdGVIYXNoKCdzaGEyNTYnKVxuXG4gIC8vIHByZXBlbmQgdmFsdWUgd2l0aCBwYXlsb2FkIHNlY3JldC4gVGhpcyBlbnN1cmUgb25lLXdheS5cbiAgaGFzaC51cGRhdGUoc2VjcmV0KVxuXG4gIC8vIFVwZGF0ZSBpcyBhbiBhcHBlbmQgb3BlcmF0aW9uLCBub3QgYSByZXBsYWNlbWVudC4gVGhlIHNlY3JldCBmcm9tIHRoZSBwcmlvclxuICAvLyB1cGRhdGUgaXMgc3RpbGwgcHJlc2VudCFcbiAgaGFzaC51cGRhdGUoZGF0YSlcbiAgcmV0dXJuIGhhc2guZGlnZXN0KCdoZXgnKVxufVxuIl0sIm5hbWVzIjpbIm9uZVdheUhhc2giLCJkYXRhIiwic2VjcmV0IiwiaGFzaCIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFJYUE7OztlQUFBQTs7O3dCQUZjO0FBRXBCLE1BQU1BLGFBQWEsQ0FBQ0MsTUFBa0JDO0lBQzNDLE1BQU1DLE9BQU9DLElBQUFBLGtCQUFVLEVBQUM7SUFFeEIsMERBQTBEO0lBQzFERCxLQUFLRSxNQUFNLENBQUNIO0lBRVosOEVBQThFO0lBQzlFLDJCQUEyQjtJQUMzQkMsS0FBS0UsTUFBTSxDQUFDSjtJQUNaLE9BQU9FLEtBQUtHLE1BQU0sQ0FBQztBQUNyQiJ9