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
const identifyAPI = (api)=>{
    return (req, _, next)=>{
        req.payloadAPI = api;
        next();
    };
};
const _default = identifyAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvaWRlbnRpZnlBUEkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaWRlbnRpZnlBUEkgPSAoYXBpKSA9PiB7XG4gIHJldHVybiAocmVxLCBfLCBuZXh0KSA9PiB7XG4gICAgcmVxLnBheWxvYWRBUEkgPSBhcGlcbiAgICBuZXh0KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpZGVudGlmeUFQSVxuIl0sIm5hbWVzIjpbImlkZW50aWZ5QVBJIiwiYXBpIiwicmVxIiwiXyIsIm5leHQiLCJwYXlsb2FkQVBJIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBT0E7OztlQUFBOzs7QUFQQSxNQUFNQSxjQUFjLENBQUNDO0lBQ25CLE9BQU8sQ0FBQ0MsS0FBS0MsR0FBR0M7UUFDZEYsSUFBSUcsVUFBVSxHQUFHSjtRQUNqQkc7SUFDRjtBQUNGO01BRUEsV0FBZUoifQ==