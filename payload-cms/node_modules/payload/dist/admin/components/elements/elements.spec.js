"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _react = require("@testing-library/react");
const _react1 = /*#__PURE__*/ _interop_require_default(require("react"));
const _Separator = /*#__PURE__*/ _interop_require_default(require("./Paginator/Separator"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
describe('Elements', ()=>{
    describe('Paginator', ()=>{
        it('separator - renders dash', ()=>{
            const { getByText } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Separator.default, null));
            const linkElement = getByText(/—/) // &mdash;
            ;
            expect(linkElement).toBeInTheDocument();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL2VsZW1lbnRzLnNwZWMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciB9IGZyb20gJ0B0ZXN0aW5nLWxpYnJhcnkvcmVhY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTZXBhcmF0b3IgZnJvbSAnLi9QYWdpbmF0b3IvU2VwYXJhdG9yJ1xuXG5kZXNjcmliZSgnRWxlbWVudHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdQYWdpbmF0b3InLCAoKSA9PiB7XG4gICAgaXQoJ3NlcGFyYXRvciAtIHJlbmRlcnMgZGFzaCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZ2V0QnlUZXh0IH0gPSByZW5kZXIoPFNlcGFyYXRvciAvPilcbiAgICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZ2V0QnlUZXh0KC/igJQvKSAvLyAmbWRhc2g7XG4gICAgICBleHBlY3QobGlua0VsZW1lbnQpLnRvQmVJblRoZURvY3VtZW50KClcbiAgICB9KVxuICB9KVxufSlcbiJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiZ2V0QnlUZXh0IiwicmVuZGVyIiwiU2VwYXJhdG9yIiwibGlua0VsZW1lbnQiLCJleHBlY3QiLCJ0b0JlSW5UaGVEb2N1bWVudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7dUJBQXVCOytEQUNMO2tFQUVJOzs7Ozs7QUFFdEJBLFNBQVMsWUFBWTtJQUNuQkEsU0FBUyxhQUFhO1FBQ3BCQyxHQUFHLDRCQUE0QjtZQUM3QixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxJQUFBQSxhQUFNLGdCQUFDLDhCQUFDQyxrQkFBUztZQUN2QyxNQUFNQyxjQUFjSCxVQUFVLEtBQUssVUFBVTs7WUFDN0NJLE9BQU9ELGFBQWFFLGlCQUFpQjtRQUN2QztJQUNGO0FBQ0YifQ==