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
const _local = /*#__PURE__*/ _interop_require_default(require("../../../auth/operations/local"));
const _count = /*#__PURE__*/ _interop_require_default(require("./count"));
const _create = /*#__PURE__*/ _interop_require_default(require("./create"));
const _delete = /*#__PURE__*/ _interop_require_default(require("./delete"));
const _find = /*#__PURE__*/ _interop_require_default(require("./find"));
const _findByID = /*#__PURE__*/ _interop_require_default(require("./findByID"));
const _findVersionByID = /*#__PURE__*/ _interop_require_default(require("./findVersionByID"));
const _findVersions = /*#__PURE__*/ _interop_require_default(require("./findVersions"));
const _restoreVersion = /*#__PURE__*/ _interop_require_default(require("./restoreVersion"));
const _update = /*#__PURE__*/ _interop_require_default(require("./update"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = {
    auth: _local.default,
    count: _count.default,
    create: _create.default,
    deleteLocal: _delete.default,
    find: _find.default,
    findByID: _findByID.default,
    findVersionByID: _findVersionByID.default,
    findVersions: _findVersions.default,
    restoreVersion: _restoreVersion.default,
    update: _update.default
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL2F1dGgvb3BlcmF0aW9ucy9sb2NhbCdcbmltcG9ydCBjb3VudCBmcm9tICcuL2NvdW50J1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL2NyZWF0ZSdcbmltcG9ydCBkZWxldGVMb2NhbCBmcm9tICcuL2RlbGV0ZSdcbmltcG9ydCBmaW5kIGZyb20gJy4vZmluZCdcbmltcG9ydCBmaW5kQnlJRCBmcm9tICcuL2ZpbmRCeUlEJ1xuaW1wb3J0IGZpbmRWZXJzaW9uQnlJRCBmcm9tICcuL2ZpbmRWZXJzaW9uQnlJRCdcbmltcG9ydCBmaW5kVmVyc2lvbnMgZnJvbSAnLi9maW5kVmVyc2lvbnMnXG5pbXBvcnQgcmVzdG9yZVZlcnNpb24gZnJvbSAnLi9yZXN0b3JlVmVyc2lvbidcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi91cGRhdGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXV0aCxcbiAgY291bnQsXG4gIGNyZWF0ZSxcbiAgZGVsZXRlTG9jYWwsXG4gIGZpbmQsXG4gIGZpbmRCeUlELFxuICBmaW5kVmVyc2lvbkJ5SUQsXG4gIGZpbmRWZXJzaW9ucyxcbiAgcmVzdG9yZVZlcnNpb24sXG4gIHVwZGF0ZSxcbn1cbiJdLCJuYW1lcyI6WyJhdXRoIiwiY291bnQiLCJjcmVhdGUiLCJkZWxldGVMb2NhbCIsImZpbmQiLCJmaW5kQnlJRCIsImZpbmRWZXJzaW9uQnlJRCIsImZpbmRWZXJzaW9ucyIsInJlc3RvcmVWZXJzaW9uIiwidXBkYXRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFXQTs7O2VBQUE7Ozs4REFYaUI7OERBQ0M7K0RBQ0M7K0RBQ0s7NkRBQ1A7aUVBQ0k7d0VBQ087cUVBQ0g7dUVBQ0U7K0RBQ1I7Ozs7OztNQUVuQixXQUFlO0lBQ2JBLE1BQUFBLGNBQUk7SUFDSkMsT0FBQUEsY0FBSztJQUNMQyxRQUFBQSxlQUFNO0lBQ05DLGFBQUFBLGVBQVc7SUFDWEMsTUFBQUEsYUFBSTtJQUNKQyxVQUFBQSxpQkFBUTtJQUNSQyxpQkFBQUEsd0JBQWU7SUFDZkMsY0FBQUEscUJBQVk7SUFDWkMsZ0JBQUFBLHVCQUFjO0lBQ2RDLFFBQUFBLGVBQU07QUFDUiJ9