"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getObjectDotNotation", {
    enumerable: true,
    get: function() {
        return getObjectDotNotation;
    }
});
const getObjectDotNotation = (obj, path, defaultValue)=>{
    if (!path || !obj) return defaultValue;
    const result = path.split('.').reduce((o, i)=>o?.[i], obj);
    return result === undefined ? defaultValue : result;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0T2JqZWN0RG90Tm90YXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldE9iamVjdERvdE5vdGF0aW9uID0gPFQ+KFxuICBvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBwYXRoOiBzdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZT86IFQsXG4pOiBUID0+IHtcbiAgaWYgKCFwYXRoIHx8ICFvYmopIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgY29uc3QgcmVzdWx0ID0gcGF0aC5zcGxpdCgnLicpLnJlZHVjZSgobywgaSkgPT4gbz8uW2ldLCBvYmopXG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IChyZXN1bHQgYXMgVClcbn1cbiJdLCJuYW1lcyI6WyJnZXRPYmplY3REb3ROb3RhdGlvbiIsIm9iaiIsInBhdGgiLCJkZWZhdWx0VmFsdWUiLCJyZXN1bHQiLCJzcGxpdCIsInJlZHVjZSIsIm8iLCJpIiwidW5kZWZpbmVkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSx1QkFBdUIsQ0FDbENDLEtBQ0FDLE1BQ0FDO0lBRUEsSUFBSSxDQUFDRCxRQUFRLENBQUNELEtBQUssT0FBT0U7SUFDMUIsTUFBTUMsU0FBU0YsS0FBS0csS0FBSyxDQUFDLEtBQUtDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxHQUFHLENBQUNDLEVBQUUsRUFBRVA7SUFDeEQsT0FBT0csV0FBV0ssWUFBWU4sZUFBZ0JDO0FBQ2hEIn0=