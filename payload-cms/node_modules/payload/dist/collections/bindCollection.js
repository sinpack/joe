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
const bindCollectionMiddleware = (collection)=>(req, res, next)=>{
        req.collection = collection;
        next();
    };
const _default = bindCollectionMiddleware;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xsZWN0aW9ucy9iaW5kQ29sbGVjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24gfSBmcm9tICcuL2NvbmZpZy90eXBlcydcblxuY29uc3QgYmluZENvbGxlY3Rpb25NaWRkbGV3YXJlID1cbiAgKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pID0+XG4gIChyZXE6IFJlcXVlc3QgJiB7IGNvbGxlY3Rpb246IENvbGxlY3Rpb24gfSwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgcmVxLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uXG4gICAgbmV4dCgpXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgYmluZENvbGxlY3Rpb25NaWRkbGV3YXJlXG4iXSwibmFtZXMiOlsiYmluZENvbGxlY3Rpb25NaWRkbGV3YXJlIiwiY29sbGVjdGlvbiIsInJlcSIsInJlcyIsIm5leHQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBV0E7OztlQUFBOzs7QUFQQSxNQUFNQSwyQkFDSixDQUFDQyxhQUNELENBQUNDLEtBQTJDQyxLQUFlQztRQUN6REYsSUFBSUQsVUFBVSxHQUFHQTtRQUNqQkc7SUFDRjtNQUVGLFdBQWVKIn0=