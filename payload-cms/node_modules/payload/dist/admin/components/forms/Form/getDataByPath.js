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
const _unflatten = require("../../../utilities/unflatten");
const getDataByPath = (fields, path)=>{
    const pathPrefixToRemove = path.substring(0, path.lastIndexOf('.') + 1);
    const name = path.split('.').pop();
    const data = {};
    Object.keys(fields).forEach((key)=>{
        if (!fields[key].disableFormData && (key.indexOf(`${path}.`) === 0 || key === path)) {
            data[key.replace(pathPrefixToRemove, '')] = fields[key].value;
            if (fields[key]?.rows && fields[key].rows.length === 0) {
                data[key.replace(pathPrefixToRemove, '')] = [];
            }
        }
    });
    const unflattenedData = (0, _unflatten.unflatten)(data);
    return unflattenedData?.[name];
};
const _default = getDataByPath;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vZ2V0RGF0YUJ5UGF0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpZWxkcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IHVuZmxhdHRlbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy91bmZsYXR0ZW4nXG5cbmNvbnN0IGdldERhdGFCeVBhdGggPSA8VCA9IHVua25vd24+KGZpZWxkczogRmllbGRzLCBwYXRoOiBzdHJpbmcpOiBUID0+IHtcbiAgY29uc3QgcGF0aFByZWZpeFRvUmVtb3ZlID0gcGF0aC5zdWJzdHJpbmcoMCwgcGF0aC5sYXN0SW5kZXhPZignLicpICsgMSlcbiAgY29uc3QgbmFtZSA9IHBhdGguc3BsaXQoJy4nKS5wb3AoKVxuXG4gIGNvbnN0IGRhdGEgPSB7fVxuICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghZmllbGRzW2tleV0uZGlzYWJsZUZvcm1EYXRhICYmIChrZXkuaW5kZXhPZihgJHtwYXRofS5gKSA9PT0gMCB8fCBrZXkgPT09IHBhdGgpKSB7XG4gICAgICBkYXRhW2tleS5yZXBsYWNlKHBhdGhQcmVmaXhUb1JlbW92ZSwgJycpXSA9IGZpZWxkc1trZXldLnZhbHVlXG5cbiAgICAgIGlmIChmaWVsZHNba2V5XT8ucm93cyAmJiBmaWVsZHNba2V5XS5yb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkYXRhW2tleS5yZXBsYWNlKHBhdGhQcmVmaXhUb1JlbW92ZSwgJycpXSA9IFtdXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHVuZmxhdHRlbmVkRGF0YSA9IHVuZmxhdHRlbihkYXRhKVxuXG4gIHJldHVybiB1bmZsYXR0ZW5lZERhdGE/LltuYW1lXVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhQnlQYXRoXG4iXSwibmFtZXMiOlsiZ2V0RGF0YUJ5UGF0aCIsImZpZWxkcyIsInBhdGgiLCJwYXRoUHJlZml4VG9SZW1vdmUiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsIm5hbWUiLCJzcGxpdCIsInBvcCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImRpc2FibGVGb3JtRGF0YSIsImluZGV4T2YiLCJyZXBsYWNlIiwidmFsdWUiLCJyb3dzIiwibGVuZ3RoIiwidW5mbGF0dGVuZWREYXRhIiwidW5mbGF0dGVuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXdCQTs7O2VBQUE7OzsyQkF0QjBCO0FBRTFCLE1BQU1BLGdCQUFnQixDQUFjQyxRQUFnQkM7SUFDbEQsTUFBTUMscUJBQXFCRCxLQUFLRSxTQUFTLENBQUMsR0FBR0YsS0FBS0csV0FBVyxDQUFDLE9BQU87SUFDckUsTUFBTUMsT0FBT0osS0FBS0ssS0FBSyxDQUFDLEtBQUtDLEdBQUc7SUFFaEMsTUFBTUMsT0FBTyxDQUFDO0lBQ2RDLE9BQU9DLElBQUksQ0FBQ1YsUUFBUVcsT0FBTyxDQUFDLENBQUNDO1FBQzNCLElBQUksQ0FBQ1osTUFBTSxDQUFDWSxJQUFJLENBQUNDLGVBQWUsSUFBS0QsQ0FBQUEsSUFBSUUsT0FBTyxDQUFDLENBQUMsRUFBRWIsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLVyxRQUFRWCxJQUFHLEdBQUk7WUFDbkZPLElBQUksQ0FBQ0ksSUFBSUcsT0FBTyxDQUFDYixvQkFBb0IsSUFBSSxHQUFHRixNQUFNLENBQUNZLElBQUksQ0FBQ0ksS0FBSztZQUU3RCxJQUFJaEIsTUFBTSxDQUFDWSxJQUFJLEVBQUVLLFFBQVFqQixNQUFNLENBQUNZLElBQUksQ0FBQ0ssSUFBSSxDQUFDQyxNQUFNLEtBQUssR0FBRztnQkFDdERWLElBQUksQ0FBQ0ksSUFBSUcsT0FBTyxDQUFDYixvQkFBb0IsSUFBSSxHQUFHLEVBQUU7WUFDaEQ7UUFDRjtJQUNGO0lBRUEsTUFBTWlCLGtCQUFrQkMsSUFBQUEsb0JBQVMsRUFBQ1o7SUFFbEMsT0FBT1csaUJBQWlCLENBQUNkLEtBQUs7QUFDaEM7TUFFQSxXQUFlTiJ9