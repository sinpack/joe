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
const internalFields = [
    '__v'
];
const sanitizeInternalFields = (incomingDoc)=>Object.entries(incomingDoc).reduce((newDoc, [key, val])=>{
        if (key === '_id') {
            return {
                ...newDoc,
                id: val
            };
        }
        if (internalFields.indexOf(key) > -1) {
            return newDoc;
        }
        return {
            ...newDoc,
            [key]: val
        };
    }, {});
const _default = sanitizeInternalFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbnRlcm5hbEZpZWxkcyA9IFsnX192J11cblxuY29uc3Qgc2FuaXRpemVJbnRlcm5hbEZpZWxkcyA9IDxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KGluY29taW5nRG9jOiBUKTogVCA9PlxuICBPYmplY3QuZW50cmllcyhpbmNvbWluZ0RvYykucmVkdWNlKChuZXdEb2MsIFtrZXksIHZhbF0pOiBUID0+IHtcbiAgICBpZiAoa2V5ID09PSAnX2lkJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV3RG9jLFxuICAgICAgICBpZDogdmFsLFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbnRlcm5hbEZpZWxkcy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgcmV0dXJuIG5ld0RvY1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5uZXdEb2MsXG4gICAgICBba2V5XTogdmFsLFxuICAgIH1cbiAgfSwge30gYXMgVClcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXRpemVJbnRlcm5hbEZpZWxkc1xuIl0sIm5hbWVzIjpbImludGVybmFsRmllbGRzIiwic2FuaXRpemVJbnRlcm5hbEZpZWxkcyIsImluY29taW5nRG9jIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsIm5ld0RvYyIsImtleSIsInZhbCIsImlkIiwiaW5kZXhPZiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXFCQTs7O2VBQUE7OztBQXJCQSxNQUFNQSxpQkFBaUI7SUFBQztDQUFNO0FBRTlCLE1BQU1DLHlCQUF5QixDQUFvQ0MsY0FDakVDLE9BQU9DLE9BQU8sQ0FBQ0YsYUFBYUcsTUFBTSxDQUFDLENBQUNDLFFBQVEsQ0FBQ0MsS0FBS0MsSUFBSTtRQUNwRCxJQUFJRCxRQUFRLE9BQU87WUFDakIsT0FBTztnQkFDTCxHQUFHRCxNQUFNO2dCQUNURyxJQUFJRDtZQUNOO1FBQ0Y7UUFFQSxJQUFJUixlQUFlVSxPQUFPLENBQUNILE9BQU8sQ0FBQyxHQUFHO1lBQ3BDLE9BQU9EO1FBQ1Q7UUFFQSxPQUFPO1lBQ0wsR0FBR0EsTUFBTTtZQUNULENBQUNDLElBQUksRUFBRUM7UUFDVDtJQUNGLEdBQUcsQ0FBQztNQUVOLFdBQWVQIn0=