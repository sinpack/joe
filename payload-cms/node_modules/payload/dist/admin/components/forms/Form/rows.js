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
    flattenRows: function() {
        return flattenRows;
    },
    separateRows: function() {
        return separateRows;
    }
});
const separateRows = (path, fields)=>{
    const remainingFields = {};
    const rows = Object.entries(fields).reduce((incomingRows, [fieldPath, field])=>{
        const newRows = incomingRows;
        if (fieldPath.indexOf(`${path}.`) === 0) {
            const [rowIndex] = fieldPath.replace(`${path}.`, '').split('.');
            if (!newRows[rowIndex]) newRows[rowIndex] = {};
            newRows[rowIndex][fieldPath.replace(`${path}.${String(rowIndex)}.`, '')] = {
                ...field
            };
        } else {
            remainingFields[fieldPath] = field;
        }
        return newRows;
    }, []);
    return {
        remainingFields,
        rows
    };
};
const flattenRows = (path, rows)=>{
    return rows.reduce((fields, row, i)=>({
            ...fields,
            ...Object.entries(row).reduce((subFields, [subPath, subField])=>{
                return {
                    ...subFields,
                    [`${path}.${i}.${subPath}`]: {
                        ...subField
                    }
                };
            }, {})
        }), {});
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vcm93cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpZWxkcyB9IGZyb20gJy4vdHlwZXMnXG5cbnR5cGUgUmVzdWx0ID0ge1xuICByZW1haW5pbmdGaWVsZHM6IEZpZWxkc1xuICByb3dzOiBGaWVsZHNbXVxufVxuXG5leHBvcnQgY29uc3Qgc2VwYXJhdGVSb3dzID0gKHBhdGg6IHN0cmluZywgZmllbGRzOiBGaWVsZHMpOiBSZXN1bHQgPT4ge1xuICBjb25zdCByZW1haW5pbmdGaWVsZHM6IEZpZWxkcyA9IHt9XG5cbiAgY29uc3Qgcm93cyA9IE9iamVjdC5lbnRyaWVzKGZpZWxkcykucmVkdWNlKChpbmNvbWluZ1Jvd3MsIFtmaWVsZFBhdGgsIGZpZWxkXSkgPT4ge1xuICAgIGNvbnN0IG5ld1Jvd3MgPSBpbmNvbWluZ1Jvd3NcblxuICAgIGlmIChmaWVsZFBhdGguaW5kZXhPZihgJHtwYXRofS5gKSA9PT0gMCkge1xuICAgICAgY29uc3QgW3Jvd0luZGV4XSA9IGZpZWxkUGF0aC5yZXBsYWNlKGAke3BhdGh9LmAsICcnKS5zcGxpdCgnLicpXG4gICAgICBpZiAoIW5ld1Jvd3Nbcm93SW5kZXhdKSBuZXdSb3dzW3Jvd0luZGV4XSA9IHt9XG4gICAgICBuZXdSb3dzW3Jvd0luZGV4XVtmaWVsZFBhdGgucmVwbGFjZShgJHtwYXRofS4ke1N0cmluZyhyb3dJbmRleCl9LmAsICcnKV0gPSB7IC4uLmZpZWxkIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVtYWluaW5nRmllbGRzW2ZpZWxkUGF0aF0gPSBmaWVsZFxuICAgIH1cblxuICAgIHJldHVybiBuZXdSb3dzXG4gIH0sIFtdKVxuXG4gIHJldHVybiB7XG4gICAgcmVtYWluaW5nRmllbGRzLFxuICAgIHJvd3MsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW5Sb3dzID0gKHBhdGg6IHN0cmluZywgcm93czogRmllbGRzW10pOiBGaWVsZHMgPT4ge1xuICByZXR1cm4gcm93cy5yZWR1Y2UoXG4gICAgKGZpZWxkcywgcm93LCBpKSA9PiAoe1xuICAgICAgLi4uZmllbGRzLFxuICAgICAgLi4uT2JqZWN0LmVudHJpZXMocm93KS5yZWR1Y2UoKHN1YkZpZWxkcywgW3N1YlBhdGgsIHN1YkZpZWxkXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN1YkZpZWxkcyxcbiAgICAgICAgICBbYCR7cGF0aH0uJHtpfS4ke3N1YlBhdGh9YF06IHsgLi4uc3ViRmllbGQgfSxcbiAgICAgICAgfVxuICAgICAgfSwge30pLFxuICAgIH0pLFxuICAgIHt9LFxuICApXG59XG4iXSwibmFtZXMiOlsiZmxhdHRlblJvd3MiLCJzZXBhcmF0ZVJvd3MiLCJwYXRoIiwiZmllbGRzIiwicmVtYWluaW5nRmllbGRzIiwicm93cyIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJpbmNvbWluZ1Jvd3MiLCJmaWVsZFBhdGgiLCJmaWVsZCIsIm5ld1Jvd3MiLCJpbmRleE9mIiwicm93SW5kZXgiLCJyZXBsYWNlIiwic3BsaXQiLCJTdHJpbmciLCJyb3ciLCJpIiwic3ViRmllbGRzIiwic3ViUGF0aCIsInN1YkZpZWxkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQThCYUEsV0FBVztlQUFYQTs7SUF2QkFDLFlBQVk7ZUFBWkE7OztBQUFOLE1BQU1BLGVBQWUsQ0FBQ0MsTUFBY0M7SUFDekMsTUFBTUMsa0JBQTBCLENBQUM7SUFFakMsTUFBTUMsT0FBT0MsT0FBT0MsT0FBTyxDQUFDSixRQUFRSyxNQUFNLENBQUMsQ0FBQ0MsY0FBYyxDQUFDQyxXQUFXQyxNQUFNO1FBQzFFLE1BQU1DLFVBQVVIO1FBRWhCLElBQUlDLFVBQVVHLE9BQU8sQ0FBQyxDQUFDLEVBQUVYLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRztZQUN2QyxNQUFNLENBQUNZLFNBQVMsR0FBR0osVUFBVUssT0FBTyxDQUFDLENBQUMsRUFBRWIsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJYyxLQUFLLENBQUM7WUFDM0QsSUFBSSxDQUFDSixPQUFPLENBQUNFLFNBQVMsRUFBRUYsT0FBTyxDQUFDRSxTQUFTLEdBQUcsQ0FBQztZQUM3Q0YsT0FBTyxDQUFDRSxTQUFTLENBQUNKLFVBQVVLLE9BQU8sQ0FBQyxDQUFDLEVBQUViLEtBQUssQ0FBQyxFQUFFZSxPQUFPSCxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRztnQkFBRSxHQUFHSCxLQUFLO1lBQUM7UUFDeEYsT0FBTztZQUNMUCxlQUFlLENBQUNNLFVBQVUsR0FBR0M7UUFDL0I7UUFFQSxPQUFPQztJQUNULEdBQUcsRUFBRTtJQUVMLE9BQU87UUFDTFI7UUFDQUM7SUFDRjtBQUNGO0FBRU8sTUFBTUwsY0FBYyxDQUFDRSxNQUFjRztJQUN4QyxPQUFPQSxLQUFLRyxNQUFNLENBQ2hCLENBQUNMLFFBQVFlLEtBQUtDLElBQU8sQ0FBQTtZQUNuQixHQUFHaEIsTUFBTTtZQUNULEdBQUdHLE9BQU9DLE9BQU8sQ0FBQ1csS0FBS1YsTUFBTSxDQUFDLENBQUNZLFdBQVcsQ0FBQ0MsU0FBU0MsU0FBUztnQkFDM0QsT0FBTztvQkFDTCxHQUFHRixTQUFTO29CQUNaLENBQUMsQ0FBQyxFQUFFbEIsS0FBSyxDQUFDLEVBQUVpQixFQUFFLENBQUMsRUFBRUUsUUFBUSxDQUFDLENBQUMsRUFBRTt3QkFBRSxHQUFHQyxRQUFRO29CQUFDO2dCQUM3QztZQUNGLEdBQUcsQ0FBQyxFQUFFO1FBQ1IsQ0FBQSxHQUNBLENBQUM7QUFFTCJ9