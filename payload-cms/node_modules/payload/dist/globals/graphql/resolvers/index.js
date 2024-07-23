"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    findOne: function() {
        return _findOne.default;
    },
    findVersionByID: function() {
        return _findVersionByID.default;
    },
    findVersions: function() {
        return _findVersions.default;
    },
    restoreVersion: function() {
        return _restoreVersion.default;
    },
    update: function() {
        return _update.default;
    }
});
const _findOne = /*#__PURE__*/ _interop_require_default(require("./findOne"));
const _findVersionByID = /*#__PURE__*/ _interop_require_default(require("./findVersionByID"));
const _findVersions = /*#__PURE__*/ _interop_require_default(require("./findVersions"));
const _restoreVersion = /*#__PURE__*/ _interop_require_default(require("./restoreVersion"));
const _update = /*#__PURE__*/ _interop_require_default(require("./update"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaW5kT25lIGZyb20gJy4vZmluZE9uZSdcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SUQgZnJvbSAnLi9maW5kVmVyc2lvbkJ5SUQnXG5pbXBvcnQgZmluZFZlcnNpb25zIGZyb20gJy4vZmluZFZlcnNpb25zJ1xuaW1wb3J0IHJlc3RvcmVWZXJzaW9uIGZyb20gJy4vcmVzdG9yZVZlcnNpb24nXG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vdXBkYXRlJ1xuXG5leHBvcnQgeyBmaW5kT25lLCBmaW5kVmVyc2lvbkJ5SUQsIGZpbmRWZXJzaW9ucywgcmVzdG9yZVZlcnNpb24sIHVwZGF0ZSB9XG4iXSwibmFtZXMiOlsiZmluZE9uZSIsImZpbmRWZXJzaW9uQnlJRCIsImZpbmRWZXJzaW9ucyIsInJlc3RvcmVWZXJzaW9uIiwidXBkYXRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBTVNBLE9BQU87ZUFBUEEsZ0JBQU87O0lBQUVDLGVBQWU7ZUFBZkEsd0JBQWU7O0lBQUVDLFlBQVk7ZUFBWkEscUJBQVk7O0lBQUVDLGNBQWM7ZUFBZEEsdUJBQWM7O0lBQUVDLE1BQU07ZUFBTkEsZUFBTTs7O2dFQU5uRDt3RUFDUTtxRUFDSDt1RUFDRTsrREFDUiJ9