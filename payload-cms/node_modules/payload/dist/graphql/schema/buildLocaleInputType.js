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
const _graphql = require("graphql");
const _formatName = /*#__PURE__*/ _interop_require_default(require("../utilities/formatName"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const buildLocaleInputType = (localization)=>{
    return new _graphql.GraphQLEnumType({
        name: 'LocaleInputType',
        values: localization.localeCodes.reduce((values, locale)=>({
                ...values,
                [(0, _formatName.default)(locale)]: {
                    value: locale
                }
            }), {})
    });
};
const _default = buildLocaleInputType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZExvY2FsZUlucHV0VHlwZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEdyYXBoUUxTY2FsYXJUeXBlIH0gZnJvbSAnZ3JhcGhxbCdcblxuaW1wb3J0IHsgR3JhcGhRTEVudW1UeXBlIH0gZnJvbSAnZ3JhcGhxbCdcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRMb2NhbGl6YXRpb25Db25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXROYW1lJ1xuXG5jb25zdCBidWlsZExvY2FsZUlucHV0VHlwZSA9IChcbiAgbG9jYWxpemF0aW9uOiBTYW5pdGl6ZWRMb2NhbGl6YXRpb25Db25maWcsXG4pOiBHcmFwaFFMRW51bVR5cGUgfCBHcmFwaFFMU2NhbGFyVHlwZSA9PiB7XG4gIHJldHVybiBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgICBuYW1lOiAnTG9jYWxlSW5wdXRUeXBlJyxcbiAgICB2YWx1ZXM6IGxvY2FsaXphdGlvbi5sb2NhbGVDb2Rlcy5yZWR1Y2UoXG4gICAgICAodmFsdWVzLCBsb2NhbGUpID0+ICh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW2Zvcm1hdE5hbWUobG9jYWxlKV06IHtcbiAgICAgICAgICB2YWx1ZTogbG9jYWxlLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB7fSxcbiAgICApLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZExvY2FsZUlucHV0VHlwZVxuIl0sIm5hbWVzIjpbImJ1aWxkTG9jYWxlSW5wdXRUeXBlIiwibG9jYWxpemF0aW9uIiwiR3JhcGhRTEVudW1UeXBlIiwibmFtZSIsInZhbHVlcyIsImxvY2FsZUNvZGVzIiwicmVkdWNlIiwibG9jYWxlIiwiZm9ybWF0TmFtZSIsInZhbHVlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBeUJBOzs7ZUFBQTs7O3lCQXZCZ0M7bUVBSVQ7Ozs7OztBQUV2QixNQUFNQSx1QkFBdUIsQ0FDM0JDO0lBRUEsT0FBTyxJQUFJQyx3QkFBZSxDQUFDO1FBQ3pCQyxNQUFNO1FBQ05DLFFBQVFILGFBQWFJLFdBQVcsQ0FBQ0MsTUFBTSxDQUNyQyxDQUFDRixRQUFRRyxTQUFZLENBQUE7Z0JBQ25CLEdBQUdILE1BQU07Z0JBQ1QsQ0FBQ0ksSUFBQUEsbUJBQVUsRUFBQ0QsUUFBUSxFQUFFO29CQUNwQkUsT0FBT0Y7Z0JBQ1Q7WUFDRixDQUFBLEdBQ0EsQ0FBQztJQUVMO0FBQ0Y7TUFFQSxXQUFlUCJ9