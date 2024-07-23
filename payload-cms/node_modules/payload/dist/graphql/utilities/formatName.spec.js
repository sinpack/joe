/* eslint-disable indent */ /* eslint-disable jest/prefer-strict-equal */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _formatName = /*#__PURE__*/ _interop_require_default(require("./formatName"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
describe('formatName', ()=>{
    it.each`
    char   | expected
    ${'á'} | ${'a'}
    ${'è'} | ${'e'}
    ${'í'} | ${'i'}
    ${'ó'} | ${'o'}
    ${'ú'} | ${'u'}
    ${'ñ'} | ${'n'}
    ${'ü'} | ${'u'}
  `('should convert accented character: $char', ({ char, expected })=>{
        expect((0, _formatName.default)(char)).toEqual(expected);
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy9mb3JtYXROYW1lLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqZXN0L3ByZWZlci1zdHJpY3QtZXF1YWwgKi9cbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4vZm9ybWF0TmFtZSdcblxuZGVzY3JpYmUoJ2Zvcm1hdE5hbWUnLCAoKSA9PiB7XG4gIGl0LmVhY2hgXG4gICAgY2hhciAgIHwgZXhwZWN0ZWRcbiAgICAkeyfDoSd9IHwgJHsnYSd9XG4gICAgJHsnw6gnfSB8ICR7J2UnfVxuICAgICR7J8OtJ30gfCAkeydpJ31cbiAgICAkeyfDsyd9IHwgJHsnbyd9XG4gICAgJHsnw7onfSB8ICR7J3UnfVxuICAgICR7J8OxJ30gfCAkeyduJ31cbiAgICAkeyfDvCd9IHwgJHsndSd9XG4gIGAoJ3Nob3VsZCBjb252ZXJ0IGFjY2VudGVkIGNoYXJhY3RlcjogJGNoYXInLCAoeyBjaGFyLCBleHBlY3RlZCB9KSA9PiB7XG4gICAgZXhwZWN0KGZvcm1hdE5hbWUoY2hhcikpLnRvRXF1YWwoZXhwZWN0ZWQpXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJlYWNoIiwiY2hhciIsImV4cGVjdGVkIiwiZXhwZWN0IiwiZm9ybWF0TmFtZSIsInRvRXF1YWwiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QixHQUN6QiwyQ0FBMkM7Ozs7bUVBQ3BCOzs7Ozs7QUFFdkJBLFNBQVMsY0FBYztJQUNyQkMsR0FBR0MsSUFBSSxDQUFDOztJQUVOLEVBQUUsSUFBSSxHQUFHLEVBQUUsSUFBSTtJQUNmLEVBQUUsSUFBSSxHQUFHLEVBQUUsSUFBSTtJQUNmLEVBQUUsSUFBSSxHQUFHLEVBQUUsSUFBSTtJQUNmLEVBQUUsSUFBSSxHQUFHLEVBQUUsSUFBSTtJQUNmLEVBQUUsSUFBSSxHQUFHLEVBQUUsSUFBSTtJQUNmLEVBQUUsSUFBSSxHQUFHLEVBQUUsSUFBSTtJQUNmLEVBQUUsSUFBSSxHQUFHLEVBQUUsSUFBSTtFQUNqQixDQUFDLENBQUMsNENBQTRDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7UUFDL0RDLE9BQU9DLElBQUFBLG1CQUFVLEVBQUNILE9BQU9JLE9BQU8sQ0FBQ0g7SUFDbkM7QUFDRiJ9