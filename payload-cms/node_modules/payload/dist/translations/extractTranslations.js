"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "extractTranslations", {
    enumerable: true,
    get: function() {
        return extractTranslations;
    }
});
const _index = /*#__PURE__*/ _interop_require_default(require("./index"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const extractTranslations = (keys)=>{
    const result = {};
    keys.forEach((key)=>{
        result[key] = {};
    });
    Object.entries(_index.default).forEach(([language, resource])=>{
        keys.forEach((key)=>{
            const [section, target] = key.split(':');
            result[key][language] = resource[section][target];
        });
    });
    return result;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2xhdGlvbnMvZXh0cmFjdFRyYW5zbGF0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBleHRyYWN0VHJhbnNsYXRpb25zID0gKGtleXM6IHN0cmluZ1tdKTogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0ge31cbiAgfSlcbiAgT2JqZWN0LmVudHJpZXModHJhbnNsYXRpb25zKS5mb3JFYWNoKChbbGFuZ3VhZ2UsIHJlc291cmNlXSkgPT4ge1xuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBbc2VjdGlvbiwgdGFyZ2V0XSA9IGtleS5zcGxpdCgnOicpXG4gICAgICByZXN1bHRba2V5XVtsYW5ndWFnZV0gPSByZXNvdXJjZVtzZWN0aW9uXVt0YXJnZXRdXG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuIl0sIm5hbWVzIjpbImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJrZXlzIiwicmVzdWx0IiwiZm9yRWFjaCIsImtleSIsIk9iamVjdCIsImVudHJpZXMiLCJ0cmFuc2xhdGlvbnMiLCJsYW5ndWFnZSIsInJlc291cmNlIiwic2VjdGlvbiIsInRhcmdldCIsInNwbGl0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBRWFBOzs7ZUFBQUE7Ozs4REFGWTs7Ozs7O0FBRWxCLE1BQU1BLHNCQUFzQixDQUFDQztJQUNsQyxNQUFNQyxTQUFTLENBQUM7SUFDaEJELEtBQUtFLE9BQU8sQ0FBQyxDQUFDQztRQUNaRixNQUFNLENBQUNFLElBQUksR0FBRyxDQUFDO0lBQ2pCO0lBQ0FDLE9BQU9DLE9BQU8sQ0FBQ0MsY0FBWSxFQUFFSixPQUFPLENBQUMsQ0FBQyxDQUFDSyxVQUFVQyxTQUFTO1FBQ3hEUixLQUFLRSxPQUFPLENBQUMsQ0FBQ0M7WUFDWixNQUFNLENBQUNNLFNBQVNDLE9BQU8sR0FBR1AsSUFBSVEsS0FBSyxDQUFDO1lBQ3BDVixNQUFNLENBQUNFLElBQUksQ0FBQ0ksU0FBUyxHQUFHQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTztRQUNuRDtJQUNGO0lBQ0EsT0FBT1Q7QUFDVCJ9