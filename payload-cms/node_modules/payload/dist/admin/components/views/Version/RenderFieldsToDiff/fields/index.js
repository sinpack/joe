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
const _Iterable = /*#__PURE__*/ _interop_require_default(require("./Iterable"));
const _Nested = /*#__PURE__*/ _interop_require_default(require("./Nested"));
const _Relationship = /*#__PURE__*/ _interop_require_default(require("./Relationship"));
const _Select = /*#__PURE__*/ _interop_require_default(require("./Select"));
const _Tabs = /*#__PURE__*/ _interop_require_default(require("./Tabs"));
const _Text = /*#__PURE__*/ _interop_require_default(require("./Text"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = {
    array: _Iterable.default,
    blocks: _Iterable.default,
    checkbox: _Text.default,
    code: _Text.default,
    collapsible: _Nested.default,
    date: _Text.default,
    email: _Text.default,
    group: _Nested.default,
    json: _Text.default,
    number: _Text.default,
    point: _Text.default,
    radio: _Select.default,
    relationship: _Relationship.default,
    richText: _Text.default,
    row: _Nested.default,
    select: _Select.default,
    tabs: _Tabs.default,
    text: _Text.default,
    textarea: _Text.default,
    upload: _Relationship.default
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0ZXJhYmxlIGZyb20gJy4vSXRlcmFibGUnXG5pbXBvcnQgTmVzdGVkIGZyb20gJy4vTmVzdGVkJ1xuaW1wb3J0IFJlbGF0aW9uc2hpcCBmcm9tICcuL1JlbGF0aW9uc2hpcCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXJyYXk6IEl0ZXJhYmxlLFxuICBibG9ja3M6IEl0ZXJhYmxlLFxuICBjaGVja2JveDogVGV4dCxcbiAgY29kZTogVGV4dCxcbiAgY29sbGFwc2libGU6IE5lc3RlZCxcbiAgZGF0ZTogVGV4dCxcbiAgZW1haWw6IFRleHQsXG4gIGdyb3VwOiBOZXN0ZWQsXG4gIGpzb246IFRleHQsXG4gIG51bWJlcjogVGV4dCxcbiAgcG9pbnQ6IFRleHQsXG4gIHJhZGlvOiBTZWxlY3QsXG4gIHJlbGF0aW9uc2hpcDogUmVsYXRpb25zaGlwLFxuICByaWNoVGV4dDogVGV4dCxcbiAgcm93OiBOZXN0ZWQsXG4gIHNlbGVjdDogU2VsZWN0LFxuICB0YWJzOiBUYWJzLFxuICB0ZXh0OiBUZXh0LFxuICB0ZXh0YXJlYTogVGV4dCxcbiAgdXBsb2FkOiBSZWxhdGlvbnNoaXAsXG59XG4iXSwibmFtZXMiOlsiYXJyYXkiLCJJdGVyYWJsZSIsImJsb2NrcyIsImNoZWNrYm94IiwiVGV4dCIsImNvZGUiLCJjb2xsYXBzaWJsZSIsIk5lc3RlZCIsImRhdGUiLCJlbWFpbCIsImdyb3VwIiwianNvbiIsIm51bWJlciIsInBvaW50IiwicmFkaW8iLCJTZWxlY3QiLCJyZWxhdGlvbnNoaXAiLCJSZWxhdGlvbnNoaXAiLCJyaWNoVGV4dCIsInJvdyIsInNlbGVjdCIsInRhYnMiLCJUYWJzIiwidGV4dCIsInRleHRhcmVhIiwidXBsb2FkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFPQTs7O2VBQUE7OztpRUFQcUI7K0RBQ0Y7cUVBQ007K0RBQ047NkRBQ0Y7NkRBQ0E7Ozs7OztNQUVqQixXQUFlO0lBQ2JBLE9BQU9DLGlCQUFRO0lBQ2ZDLFFBQVFELGlCQUFRO0lBQ2hCRSxVQUFVQyxhQUFJO0lBQ2RDLE1BQU1ELGFBQUk7SUFDVkUsYUFBYUMsZUFBTTtJQUNuQkMsTUFBTUosYUFBSTtJQUNWSyxPQUFPTCxhQUFJO0lBQ1hNLE9BQU9ILGVBQU07SUFDYkksTUFBTVAsYUFBSTtJQUNWUSxRQUFRUixhQUFJO0lBQ1pTLE9BQU9ULGFBQUk7SUFDWFUsT0FBT0MsZUFBTTtJQUNiQyxjQUFjQyxxQkFBWTtJQUMxQkMsVUFBVWQsYUFBSTtJQUNkZSxLQUFLWixlQUFNO0lBQ1hhLFFBQVFMLGVBQU07SUFDZE0sTUFBTUMsYUFBSTtJQUNWQyxNQUFNbkIsYUFBSTtJQUNWb0IsVUFBVXBCLGFBQUk7SUFDZHFCLFFBQVFSLHFCQUFZO0FBQ3RCIn0=