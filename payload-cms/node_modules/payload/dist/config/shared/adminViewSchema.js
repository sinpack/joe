"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "adminViewSchema", {
    enumerable: true,
    get: function() {
        return adminViewSchema;
    }
});
const _joi = /*#__PURE__*/ _interop_require_default(require("joi"));
const _componentSchema = require("./componentSchema");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const adminViewSchema = _joi.default.array().items(_joi.default.object().keys({
    Component: _componentSchema.componentSchema,
    exact: _joi.default.bool(),
    path: _joi.default.string().required(),
    sensitive: _joi.default.bool(),
    strict: _joi.default.bool()
}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvc2hhcmVkL2FkbWluVmlld1NjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgam9pIGZyb20gJ2pvaSdcblxuaW1wb3J0IHsgY29tcG9uZW50U2NoZW1hIH0gZnJvbSAnLi9jb21wb25lbnRTY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBhZG1pblZpZXdTY2hlbWEgPSBqb2kuYXJyYXkoKS5pdGVtcyhcbiAgam9pLm9iamVjdCgpLmtleXMoe1xuICAgIENvbXBvbmVudDogY29tcG9uZW50U2NoZW1hLFxuICAgIGV4YWN0OiBqb2kuYm9vbCgpLFxuICAgIHBhdGg6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgIHNlbnNpdGl2ZTogam9pLmJvb2woKSxcbiAgICBzdHJpY3Q6IGpvaS5ib29sKCksXG4gIH0pLFxuKVxuIl0sIm5hbWVzIjpbImFkbWluVmlld1NjaGVtYSIsImpvaSIsImFycmF5IiwiaXRlbXMiLCJvYmplY3QiLCJrZXlzIiwiQ29tcG9uZW50IiwiY29tcG9uZW50U2NoZW1hIiwiZXhhY3QiLCJib29sIiwicGF0aCIsInN0cmluZyIsInJlcXVpcmVkIiwic2Vuc2l0aXZlIiwic3RyaWN0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUlhQTs7O2VBQUFBOzs7NERBSkc7aUNBRWdCOzs7Ozs7QUFFekIsTUFBTUEsa0JBQWtCQyxZQUFHLENBQUNDLEtBQUssR0FBR0MsS0FBSyxDQUM5Q0YsWUFBRyxDQUFDRyxNQUFNLEdBQUdDLElBQUksQ0FBQztJQUNoQkMsV0FBV0MsZ0NBQWU7SUFDMUJDLE9BQU9QLFlBQUcsQ0FBQ1EsSUFBSTtJQUNmQyxNQUFNVCxZQUFHLENBQUNVLE1BQU0sR0FBR0MsUUFBUTtJQUMzQkMsV0FBV1osWUFBRyxDQUFDUSxJQUFJO0lBQ25CSyxRQUFRYixZQUFHLENBQUNRLElBQUk7QUFDbEIifQ==