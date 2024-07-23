"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "mimeTypeValidator", {
    enumerable: true,
    get: function() {
        return mimeTypeValidator;
    }
});
const mimeTypeValidator = (mimeTypes)=>(val, { siblingData })=>{
        if (!siblingData.filename) {
            return true;
        }
        if (!val) {
            return 'Invalid file type';
        }
        const cleanedMimeTypes = mimeTypes.map((v)=>v.replace('*', ''));
        return !cleanedMimeTypes.some((v)=>val.startsWith(v)) ? `Invalid file type: '${val}'` : true;
    };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL21pbWVUeXBlVmFsaWRhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVmFsaWRhdGUgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgbWltZVR5cGVWYWxpZGF0b3IgPVxuICAobWltZVR5cGVzOiBzdHJpbmdbXSk6IFZhbGlkYXRlID0+XG4gICh2YWw6IHN0cmluZywgeyBzaWJsaW5nRGF0YSB9KSA9PiB7XG4gICAgaWYgKCFzaWJsaW5nRGF0YS5maWxlbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBpZiAoIXZhbCkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIGZpbGUgdHlwZSdcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkTWltZVR5cGVzID0gbWltZVR5cGVzLm1hcCgodikgPT4gdi5yZXBsYWNlKCcqJywgJycpKVxuICAgIHJldHVybiAhY2xlYW5lZE1pbWVUeXBlcy5zb21lKCh2KSA9PiB2YWwuc3RhcnRzV2l0aCh2KSkgPyBgSW52YWxpZCBmaWxlIHR5cGU6ICcke3ZhbH0nYCA6IHRydWVcbiAgfVxuIl0sIm5hbWVzIjpbIm1pbWVUeXBlVmFsaWRhdG9yIiwibWltZVR5cGVzIiwidmFsIiwic2libGluZ0RhdGEiLCJmaWxlbmFtZSIsImNsZWFuZWRNaW1lVHlwZXMiLCJtYXAiLCJ2IiwicmVwbGFjZSIsInNvbWUiLCJzdGFydHNXaXRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBRWFBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLG9CQUNYLENBQUNDLFlBQ0QsQ0FBQ0MsS0FBYSxFQUFFQyxXQUFXLEVBQUU7UUFDM0IsSUFBSSxDQUFDQSxZQUFZQyxRQUFRLEVBQUU7WUFDekIsT0FBTztRQUNUO1FBRUEsSUFBSSxDQUFDRixLQUFLO1lBQ1IsT0FBTztRQUNUO1FBRUEsTUFBTUcsbUJBQW1CSixVQUFVSyxHQUFHLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsT0FBTyxDQUFDLEtBQUs7UUFDN0QsT0FBTyxDQUFDSCxpQkFBaUJJLElBQUksQ0FBQyxDQUFDRixJQUFNTCxJQUFJUSxVQUFVLENBQUNILE1BQU0sQ0FBQyxvQkFBb0IsRUFBRUwsSUFBSSxDQUFDLENBQUMsR0FBRztJQUM1RiJ9