"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return parseCookies;
    }
});
const _errors = require("../errors");
function parseCookies(req) {
    const list = {};
    const rc = req.headers.cookie;
    if (rc) {
        rc.split(';').forEach((cookie)=>{
            const parts = cookie.split('=');
            const key = parts.shift().trim();
            const encodedValue = parts.join('=');
            try {
                const decodedValue = decodeURI(encodedValue);
                list[key] = decodedValue;
            } catch (e) {
                throw new _errors.APIError(`Error decoding cookie value for key ${key}: ${e.message}`);
            }
        });
    }
    return list;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2VDb29raWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUNvb2tpZXMocmVxOiBSZXF1ZXN0KTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gIGNvbnN0IGxpc3QgPSB7fVxuICBjb25zdCByYyA9IHJlcS5oZWFkZXJzLmNvb2tpZVxuXG4gIGlmIChyYykge1xuICAgIHJjLnNwbGl0KCc7JykuZm9yRWFjaCgoY29va2llKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGNvb2tpZS5zcGxpdCgnPScpXG4gICAgICBjb25zdCBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgY29uc3QgZW5jb2RlZFZhbHVlID0gcGFydHMuam9pbignPScpXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWRWYWx1ZSA9IGRlY29kZVVSSShlbmNvZGVkVmFsdWUpXG4gICAgICAgIGxpc3Rba2V5XSA9IGRlY29kZWRWYWx1ZVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgQVBJRXJyb3IoYEVycm9yIGRlY29kaW5nIGNvb2tpZSB2YWx1ZSBmb3Iga2V5ICR7a2V5fTogJHtlLm1lc3NhZ2V9YClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGxpc3Rcbn1cbiJdLCJuYW1lcyI6WyJwYXJzZUNvb2tpZXMiLCJyZXEiLCJsaXN0IiwicmMiLCJoZWFkZXJzIiwiY29va2llIiwic3BsaXQiLCJmb3JFYWNoIiwicGFydHMiLCJrZXkiLCJzaGlmdCIsInRyaW0iLCJlbmNvZGVkVmFsdWUiLCJqb2luIiwiZGVjb2RlZFZhbHVlIiwiZGVjb2RlVVJJIiwiZSIsIkFQSUVycm9yIiwibWVzc2FnZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUlBOzs7ZUFBd0JBOzs7d0JBRkM7QUFFVixTQUFTQSxhQUFhQyxHQUFZO0lBQy9DLE1BQU1DLE9BQU8sQ0FBQztJQUNkLE1BQU1DLEtBQUtGLElBQUlHLE9BQU8sQ0FBQ0MsTUFBTTtJQUU3QixJQUFJRixJQUFJO1FBQ05BLEdBQUdHLEtBQUssQ0FBQyxLQUFLQyxPQUFPLENBQUMsQ0FBQ0Y7WUFDckIsTUFBTUcsUUFBUUgsT0FBT0MsS0FBSyxDQUFDO1lBQzNCLE1BQU1HLE1BQU1ELE1BQU1FLEtBQUssR0FBR0MsSUFBSTtZQUM5QixNQUFNQyxlQUFlSixNQUFNSyxJQUFJLENBQUM7WUFFaEMsSUFBSTtnQkFDRixNQUFNQyxlQUFlQyxVQUFVSDtnQkFDL0JWLElBQUksQ0FBQ08sSUFBSSxHQUFHSztZQUNkLEVBQUUsT0FBT0UsR0FBRztnQkFDVixNQUFNLElBQUlDLGdCQUFRLENBQUMsQ0FBQyxvQ0FBb0MsRUFBRVIsSUFBSSxFQUFFLEVBQUVPLEVBQUVFLE9BQU8sQ0FBQyxDQUFDO1lBQy9FO1FBQ0Y7SUFDRjtJQUVBLE9BQU9oQjtBQUNUIn0=