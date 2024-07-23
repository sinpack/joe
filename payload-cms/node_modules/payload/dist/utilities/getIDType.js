"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getIDType", {
    enumerable: true,
    get: function() {
        return getIDType;
    }
});
const getIDType = (idField, defaultIDType)=>{
    if (idField) {
        return idField.type === 'number' ? 'number' : 'text';
    }
    return defaultIDType || 'ObjectID';
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0SURUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQmFzZURhdGFiYXNlQWRhcHRlciB9IGZyb20gJy4uL2RhdGFiYXNlL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBnZXRJRFR5cGUgPSAoXG4gIGlkRmllbGQ6IEZpZWxkIHwgbnVsbCxcbiAgZGVmYXVsdElEVHlwZTogQmFzZURhdGFiYXNlQWRhcHRlclsnZGVmYXVsdElEVHlwZSddIHwgbnVsbCxcbik6ICdPYmplY3RJRCcgfCAnbnVtYmVyJyB8ICd0ZXh0JyA9PiB7XG4gIGlmIChpZEZpZWxkKSB7XG4gICAgcmV0dXJuIGlkRmllbGQudHlwZSA9PT0gJ251bWJlcicgPyAnbnVtYmVyJyA6ICd0ZXh0J1xuICB9XG4gIHJldHVybiBkZWZhdWx0SURUeXBlIHx8ICdPYmplY3RJRCdcbn1cbiJdLCJuYW1lcyI6WyJnZXRJRFR5cGUiLCJpZEZpZWxkIiwiZGVmYXVsdElEVHlwZSIsInR5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUdhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSxZQUFZLENBQ3ZCQyxTQUNBQztJQUVBLElBQUlELFNBQVM7UUFDWCxPQUFPQSxRQUFRRSxJQUFJLEtBQUssV0FBVyxXQUFXO0lBQ2hEO0lBQ0EsT0FBT0QsaUJBQWlCO0FBQzFCIn0=