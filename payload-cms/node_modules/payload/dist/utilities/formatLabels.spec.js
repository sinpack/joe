"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _formatLabels = require("./formatLabels");
describe('formatLabels', ()=>{
    it('should format singular slug', ()=>{
        expect((0, _formatLabels.formatLabels)('word')).toMatchObject({
            plural: 'Words',
            singular: 'Word'
        });
    });
    it('should format plural slug', ()=>{
        expect((0, _formatLabels.formatLabels)('words')).toMatchObject({
            plural: 'Words',
            singular: 'Word'
        });
    });
    it('should format kebab case', ()=>{
        expect((0, _formatLabels.formatLabels)('my-slugs')).toMatchObject({
            plural: 'My Slugs',
            singular: 'My Slug'
        });
    });
    it('should format camelCase', ()=>{
        expect((0, _formatLabels.formatLabels)('camelCaseItems')).toMatchObject({
            plural: 'Camel Case Items',
            singular: 'Camel Case Item'
        });
    });
    describe('toWords', ()=>{
        it('should convert camel to capitalized words', ()=>{
            expect((0, _formatLabels.toWords)('camelCaseItems')).toBe('Camel Case Items');
        });
        it('should allow no separator (used for building GraphQL label from name)', ()=>{
            expect((0, _formatLabels.toWords)('myGraphField', true)).toBe('MyGraphField');
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZm9ybWF0TGFiZWxzLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0TGFiZWxzLCB0b1dvcmRzIH0gZnJvbSAnLi9mb3JtYXRMYWJlbHMnXG5cbmRlc2NyaWJlKCdmb3JtYXRMYWJlbHMnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgZm9ybWF0IHNpbmd1bGFyIHNsdWcnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGZvcm1hdExhYmVscygnd29yZCcpKS50b01hdGNoT2JqZWN0KHtcbiAgICAgIHBsdXJhbDogJ1dvcmRzJyxcbiAgICAgIHNpbmd1bGFyOiAnV29yZCcsXG4gICAgfSlcbiAgfSlcblxuICBpdCgnc2hvdWxkIGZvcm1hdCBwbHVyYWwgc2x1ZycsICgpID0+IHtcbiAgICBleHBlY3QoZm9ybWF0TGFiZWxzKCd3b3JkcycpKS50b01hdGNoT2JqZWN0KHtcbiAgICAgIHBsdXJhbDogJ1dvcmRzJyxcbiAgICAgIHNpbmd1bGFyOiAnV29yZCcsXG4gICAgfSlcbiAgfSlcblxuICBpdCgnc2hvdWxkIGZvcm1hdCBrZWJhYiBjYXNlJywgKCkgPT4ge1xuICAgIGV4cGVjdChmb3JtYXRMYWJlbHMoJ215LXNsdWdzJykpLnRvTWF0Y2hPYmplY3Qoe1xuICAgICAgcGx1cmFsOiAnTXkgU2x1Z3MnLFxuICAgICAgc2luZ3VsYXI6ICdNeSBTbHVnJyxcbiAgICB9KVxuICB9KVxuXG4gIGl0KCdzaG91bGQgZm9ybWF0IGNhbWVsQ2FzZScsICgpID0+IHtcbiAgICBleHBlY3QoZm9ybWF0TGFiZWxzKCdjYW1lbENhc2VJdGVtcycpKS50b01hdGNoT2JqZWN0KHtcbiAgICAgIHBsdXJhbDogJ0NhbWVsIENhc2UgSXRlbXMnLFxuICAgICAgc2luZ3VsYXI6ICdDYW1lbCBDYXNlIEl0ZW0nLFxuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ3RvV29yZHMnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBjb252ZXJ0IGNhbWVsIHRvIGNhcGl0YWxpemVkIHdvcmRzJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHRvV29yZHMoJ2NhbWVsQ2FzZUl0ZW1zJykpLnRvQmUoJ0NhbWVsIENhc2UgSXRlbXMnKVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIGFsbG93IG5vIHNlcGFyYXRvciAodXNlZCBmb3IgYnVpbGRpbmcgR3JhcGhRTCBsYWJlbCBmcm9tIG5hbWUpJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHRvV29yZHMoJ215R3JhcGhGaWVsZCcsIHRydWUpKS50b0JlKCdNeUdyYXBoRmllbGQnKVxuICAgIH0pXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJleHBlY3QiLCJmb3JtYXRMYWJlbHMiLCJ0b01hdGNoT2JqZWN0IiwicGx1cmFsIiwic2luZ3VsYXIiLCJ0b1dvcmRzIiwidG9CZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs4QkFBc0M7QUFFdENBLFNBQVMsZ0JBQWdCO0lBQ3ZCQyxHQUFHLCtCQUErQjtRQUNoQ0MsT0FBT0MsSUFBQUEsMEJBQVksRUFBQyxTQUFTQyxhQUFhLENBQUM7WUFDekNDLFFBQVE7WUFDUkMsVUFBVTtRQUNaO0lBQ0Y7SUFFQUwsR0FBRyw2QkFBNkI7UUFDOUJDLE9BQU9DLElBQUFBLDBCQUFZLEVBQUMsVUFBVUMsYUFBYSxDQUFDO1lBQzFDQyxRQUFRO1lBQ1JDLFVBQVU7UUFDWjtJQUNGO0lBRUFMLEdBQUcsNEJBQTRCO1FBQzdCQyxPQUFPQyxJQUFBQSwwQkFBWSxFQUFDLGFBQWFDLGFBQWEsQ0FBQztZQUM3Q0MsUUFBUTtZQUNSQyxVQUFVO1FBQ1o7SUFDRjtJQUVBTCxHQUFHLDJCQUEyQjtRQUM1QkMsT0FBT0MsSUFBQUEsMEJBQVksRUFBQyxtQkFBbUJDLGFBQWEsQ0FBQztZQUNuREMsUUFBUTtZQUNSQyxVQUFVO1FBQ1o7SUFDRjtJQUVBTixTQUFTLFdBQVc7UUFDbEJDLEdBQUcsNkNBQTZDO1lBQzlDQyxPQUFPSyxJQUFBQSxxQkFBTyxFQUFDLG1CQUFtQkMsSUFBSSxDQUFDO1FBQ3pDO1FBRUFQLEdBQUcseUVBQXlFO1lBQzFFQyxPQUFPSyxJQUFBQSxxQkFBTyxFQUFDLGdCQUFnQixPQUFPQyxJQUFJLENBQUM7UUFDN0M7SUFDRjtBQUNGIn0=