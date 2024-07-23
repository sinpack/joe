"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isValidID", {
    enumerable: true,
    get: function() {
        return isValidID;
    }
});
const _bsonobjectid = /*#__PURE__*/ _interop_require_default(require("bson-objectid"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const isValidID = (value, type)=>{
    if (type === 'text' && value) {
        if ([
            'object',
            'string'
        ].includes(typeof value)) {
            const isObjectID = _bsonobjectid.default.isValid(value);
            return typeof value === 'string' || isObjectID;
        }
        return false;
    }
    if (typeof value === 'number' && !Number.isNaN(value)) return true;
    if (type === 'ObjectID') {
        return _bsonobjectid.default.isValid(String(value));
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaXNWYWxpZElELnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPYmplY3RJRCBmcm9tICdic29uLW9iamVjdGlkJ1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZElEID0gKFxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxuICB0eXBlOiAnT2JqZWN0SUQnIHwgJ251bWJlcicgfCAndGV4dCcsXG4pOiBib29sZWFuID0+IHtcbiAgaWYgKHR5cGUgPT09ICd0ZXh0JyAmJiB2YWx1ZSkge1xuICAgIGlmIChbJ29iamVjdCcsICdzdHJpbmcnXS5pbmNsdWRlcyh0eXBlb2YgdmFsdWUpKSB7XG4gICAgICBjb25zdCBpc09iamVjdElEID0gT2JqZWN0SUQuaXNWYWxpZCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCBpc09iamVjdElEXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIU51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybiB0cnVlXG5cbiAgaWYgKHR5cGUgPT09ICdPYmplY3RJRCcpIHtcbiAgICByZXR1cm4gT2JqZWN0SUQuaXNWYWxpZChTdHJpbmcodmFsdWUpKVxuICB9XG59XG4iXSwibmFtZXMiOlsiaXNWYWxpZElEIiwidmFsdWUiLCJ0eXBlIiwiaW5jbHVkZXMiLCJpc09iamVjdElEIiwiT2JqZWN0SUQiLCJpc1ZhbGlkIiwiTnVtYmVyIiwiaXNOYU4iLCJTdHJpbmciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFFYUE7OztlQUFBQTs7O3FFQUZROzs7Ozs7QUFFZCxNQUFNQSxZQUFZLENBQ3ZCQyxPQUNBQztJQUVBLElBQUlBLFNBQVMsVUFBVUQsT0FBTztRQUM1QixJQUFJO1lBQUM7WUFBVTtTQUFTLENBQUNFLFFBQVEsQ0FBQyxPQUFPRixRQUFRO1lBQy9DLE1BQU1HLGFBQWFDLHFCQUFRLENBQUNDLE9BQU8sQ0FBQ0w7WUFDcEMsT0FBTyxPQUFPQSxVQUFVLFlBQVlHO1FBQ3RDO1FBQ0EsT0FBTztJQUNUO0lBRUEsSUFBSSxPQUFPSCxVQUFVLFlBQVksQ0FBQ00sT0FBT0MsS0FBSyxDQUFDUCxRQUFRLE9BQU87SUFFOUQsSUFBSUMsU0FBUyxZQUFZO1FBQ3ZCLE9BQU9HLHFCQUFRLENBQUNDLE9BQU8sQ0FBQ0csT0FBT1I7SUFDakM7QUFDRiJ9