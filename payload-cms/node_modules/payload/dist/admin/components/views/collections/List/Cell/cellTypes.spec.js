"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _react = require("@testing-library/react");
const _react1 = /*#__PURE__*/ _interop_require_default(require("react"));
const _Blocks = /*#__PURE__*/ _interop_require_default(require("./field-types/Blocks"));
const _Checkbox = /*#__PURE__*/ _interop_require_default(require("./field-types/Checkbox"));
const _Date = /*#__PURE__*/ _interop_require_default(require("./field-types/Date"));
const _Select = /*#__PURE__*/ _interop_require_default(require("./field-types/Select"));
const _Textarea = /*#__PURE__*/ _interop_require_default(require("./field-types/Textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
jest.mock('../../../../utilities/Config', ()=>({
        useConfig: ()=>({
                admin: {
                    dateFormat: 'MMMM do yyyy, h:mm a'
                }
            })
    }));
jest.mock('react-i18next', ()=>({
        useTranslation: ()=>({
                t: (string)=>string
            })
    }));
describe('Cell Types', ()=>{
    describe('Blocks', ()=>{
        const field = {
            blocks: [
                {
                    fields: [],
                    labels: {
                        plural: 'Numbers',
                        singular: 'Number'
                    },
                    slug: 'number'
                }
            ],
            label: 'Blocks Content',
            labels: {
                plural: 'Blocks Content',
                singular: 'Block'
            },
            name: 'blocks',
            type: 'blocks'
        };
        it('renders multiple', ()=>{
            const data = [
                {
                    blockType: 'number'
                },
                {
                    blockType: 'number'
                }
            ];
            const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Blocks.default, {
                data: data,
                field: field
            }));
            const el = container.querySelector('span');
            expect(el).toHaveTextContent('2 Blocks Content - Number, Number');
        });
        it('renders zero', ()=>{
            const data = [];
            const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Blocks.default, {
                data: data,
                field: field
            }));
            const el = container.querySelector('span');
            expect(el).toHaveTextContent('0 Blocks Content');
        });
        it('renders "and X more" if over maximum of 5', ()=>{
            const data = [
                {
                    blockType: 'number'
                },
                {
                    blockType: 'number'
                },
                {
                    blockType: 'number'
                },
                {
                    blockType: 'number'
                },
                {
                    blockType: 'number'
                },
                {
                    blockType: 'number'
                }
            ];
            const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Blocks.default, {
                data: data,
                field: field
            }));
            const el = container.querySelector('span');
            expect(el).toHaveTextContent('fields:itemsAndMore');
        });
    });
    describe('Date', ()=>{
        const field = {
            admin: {
                date: {
                    pickerAppearance: 'dayOnly'
                }
            },
            name: 'dayOnly',
            type: 'date'
        };
        it('renders date', ()=>{
            const timeStamp = '2020-10-06T14:07:39.033Z';
            const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Date.default, {
                data: timeStamp,
                field: field
            }));
            const dateMatch = /October\s6th\s2020,\s\d{1,2}:07\s[A|P]M/ // Had to account for timezones in CI
            ;
            const el = container.querySelector('span');
            expect(el.textContent).toMatch(dateMatch);
        });
        it('handles undefined', ()=>{
            const timeStamp = undefined;
            const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Date.default, {
                data: timeStamp,
                field: field
            }));
            const el = container.querySelector('span');
            expect(el.textContent).toBe('');
        });
    });
    describe('Checkbox', ()=>{
        it('renders true', ()=>{
            const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Checkbox.default, {
                data: true
            }));
            const el = container.querySelector('span');
            expect(el).toHaveTextContent('true');
        });
        it('renders false', ()=>{
            const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Checkbox.default, {
                data: false
            }));
            const el = container.querySelector('span');
            expect(el).toHaveTextContent('false');
        });
    });
    describe('Textarea', ()=>{
        it('renders data', ()=>{
            const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Textarea.default, {
                data: "data"
            }));
            const el = container.querySelector('span');
            expect(el).toHaveTextContent('data');
        });
        it('handle undefined - bug/13', ()=>{
            const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Textarea.default, {
                data: undefined
            }));
            const el = container.querySelector('span');
            expect(el).toHaveTextContent('');
        });
    });
    describe('Select', ()=>{
        const fieldWithOptionsObject = {
            name: 'selectObject',
            options: [
                {
                    label: 'One',
                    value: 'one'
                },
                {
                    label: 'Two',
                    value: 'two'
                }
            ],
            type: 'select'
        };
        const fieldWithStringsOptions = {
            name: 'selectString',
            options: [
                'blue',
                'green',
                'yellow'
            ],
            type: 'select'
        };
        it('renders options objects', ()=>{
            const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Select.default, {
                data: "one",
                field: fieldWithOptionsObject
            }));
            const el = container.querySelector('span');
            expect(el).toHaveTextContent('One');
        });
        it('renders option strings', ()=>{
            const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Select.default, {
                data: "blue",
                field: fieldWithStringsOptions
            }));
            const el = container.querySelector('span');
            expect(el).toHaveTextContent('blue');
        });
        describe('HasMany', ()=>{
            it('renders options objects', ()=>{
                const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Select.default, {
                    data: [
                        'one',
                        'two'
                    ],
                    field: fieldWithOptionsObject
                }));
                const el = container.querySelector('span');
                expect(el).toHaveTextContent('One, Two');
            });
            it('renders option strings', ()=>{
                const { container } = (0, _react.render)(/*#__PURE__*/ _react1.default.createElement(_Select.default, {
                    data: [
                        'blue',
                        'green'
                    ],
                    field: fieldWithStringsOptions
                }));
                const el = container.querySelector('span');
                expect(el).toHaveTextContent('blue, green');
            });
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9jZWxsVHlwZXMuc3BlYy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnQHRlc3RpbmctbGlicmFyeS9yZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBCbG9ja0ZpZWxkLCBEYXRlRmllbGQsIFNlbGVjdEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IEJsb2Nrc0NlbGwgZnJvbSAnLi9maWVsZC10eXBlcy9CbG9ja3MnXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9maWVsZC10eXBlcy9DaGVja2JveCdcbmltcG9ydCBEYXRlQ2VsbCBmcm9tICcuL2ZpZWxkLXR5cGVzL0RhdGUnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vZmllbGQtdHlwZXMvU2VsZWN0J1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vZmllbGQtdHlwZXMvVGV4dGFyZWEnXG5cbmplc3QubW9jaygnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZycsICgpID0+ICh7XG4gIHVzZUNvbmZpZzogKCkgPT4gKHsgYWRtaW46IHsgZGF0ZUZvcm1hdDogJ01NTU0gZG8geXl5eSwgaDptbSBhJyB9IH0pLFxufSkpXG5cbmplc3QubW9jaygncmVhY3QtaTE4bmV4dCcsICgpID0+ICh7XG4gIHVzZVRyYW5zbGF0aW9uOiAoKSA9PiAoeyB0OiAoc3RyaW5nKSA9PiBzdHJpbmcgfSksXG59KSlcblxuZGVzY3JpYmUoJ0NlbGwgVHlwZXMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdCbG9ja3MnLCAoKSA9PiB7XG4gICAgY29uc3QgZmllbGQ6IEJsb2NrRmllbGQgPSB7XG4gICAgICBibG9ja3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkczogW10sXG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBwbHVyYWw6ICdOdW1iZXJzJyxcbiAgICAgICAgICAgIHNpbmd1bGFyOiAnTnVtYmVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNsdWc6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGxhYmVsOiAnQmxvY2tzIENvbnRlbnQnLFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHBsdXJhbDogJ0Jsb2NrcyBDb250ZW50JyxcbiAgICAgICAgc2luZ3VsYXI6ICdCbG9jaycsXG4gICAgICB9LFxuICAgICAgbmFtZTogJ2Jsb2NrcycsXG4gICAgICB0eXBlOiAnYmxvY2tzJyxcbiAgICB9XG5cbiAgICBpdCgncmVuZGVycyBtdWx0aXBsZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbeyBibG9ja1R5cGU6ICdudW1iZXInIH0sIHsgYmxvY2tUeXBlOiAnbnVtYmVyJyB9XVxuICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHJlbmRlcig8QmxvY2tzQ2VsbCBkYXRhPXtkYXRhfSBmaWVsZD17ZmllbGR9IC8+KVxuICAgICAgY29uc3QgZWwgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpXG4gICAgICBleHBlY3QoZWwpLnRvSGF2ZVRleHRDb250ZW50KCcyIEJsb2NrcyBDb250ZW50IC0gTnVtYmVyLCBOdW1iZXInKVxuICAgIH0pXG5cbiAgICBpdCgncmVuZGVycyB6ZXJvJywgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IFtdXG4gICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxCbG9ja3NDZWxsIGRhdGE9e2RhdGF9IGZpZWxkPXtmaWVsZH0gLz4pXG4gICAgICBjb25zdCBlbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJylcbiAgICAgIGV4cGVjdChlbCkudG9IYXZlVGV4dENvbnRlbnQoJzAgQmxvY2tzIENvbnRlbnQnKVxuICAgIH0pXG5cbiAgICBpdCgncmVuZGVycyBcImFuZCBYIG1vcmVcIiBpZiBvdmVyIG1heGltdW0gb2YgNScsICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgIHsgYmxvY2tUeXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICB7IGJsb2NrVHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgeyBibG9ja1R5cGU6ICdudW1iZXInIH0sXG4gICAgICAgIHsgYmxvY2tUeXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICB7IGJsb2NrVHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgeyBibG9ja1R5cGU6ICdudW1iZXInIH0sXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSByZW5kZXIoPEJsb2Nrc0NlbGwgZGF0YT17ZGF0YX0gZmllbGQ9e2ZpZWxkfSAvPilcbiAgICAgIGNvbnN0IGVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxuICAgICAgZXhwZWN0KGVsKS50b0hhdmVUZXh0Q29udGVudCgnZmllbGRzOml0ZW1zQW5kTW9yZScpXG4gICAgfSlcbiAgfSlcblxuICBkZXNjcmliZSgnRGF0ZScsICgpID0+IHtcbiAgICBjb25zdCBmaWVsZDogRGF0ZUZpZWxkID0ge1xuICAgICAgYWRtaW46IHtcbiAgICAgICAgZGF0ZToge1xuICAgICAgICAgIHBpY2tlckFwcGVhcmFuY2U6ICdkYXlPbmx5JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBuYW1lOiAnZGF5T25seScsXG4gICAgICB0eXBlOiAnZGF0ZScsXG4gICAgfVxuXG4gICAgaXQoJ3JlbmRlcnMgZGF0ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVTdGFtcCA9ICcyMDIwLTEwLTA2VDE0OjA3OjM5LjAzM1onXG4gICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxEYXRlQ2VsbCBkYXRhPXt0aW1lU3RhbXB9IGZpZWxkPXtmaWVsZH0gLz4pXG4gICAgICBjb25zdCBkYXRlTWF0Y2ggPSAvT2N0b2JlclxcczZ0aFxcczIwMjAsXFxzXFxkezEsMn06MDdcXHNbQXxQXU0vIC8vIEhhZCB0byBhY2NvdW50IGZvciB0aW1lem9uZXMgaW4gQ0lcbiAgICAgIGNvbnN0IGVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxuICAgICAgZXhwZWN0KGVsLnRleHRDb250ZW50KS50b01hdGNoKGRhdGVNYXRjaClcbiAgICB9KVxuXG4gICAgaXQoJ2hhbmRsZXMgdW5kZWZpbmVkJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGltZVN0YW1wID0gdW5kZWZpbmVkXG4gICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxEYXRlQ2VsbCBkYXRhPXt0aW1lU3RhbXB9IGZpZWxkPXtmaWVsZH0gLz4pXG4gICAgICBjb25zdCBlbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJylcbiAgICAgIGV4cGVjdChlbC50ZXh0Q29udGVudCkudG9CZSgnJylcbiAgICB9KVxuICB9KVxuXG4gIGRlc2NyaWJlKCdDaGVja2JveCcsICgpID0+IHtcbiAgICBpdCgncmVuZGVycyB0cnVlJywgKCkgPT4ge1xuICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHJlbmRlcig8Q2hlY2tib3ggZGF0YSAvPilcbiAgICAgIGNvbnN0IGVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxuICAgICAgZXhwZWN0KGVsKS50b0hhdmVUZXh0Q29udGVudCgndHJ1ZScpXG4gICAgfSlcbiAgICBpdCgncmVuZGVycyBmYWxzZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSByZW5kZXIoPENoZWNrYm94IGRhdGE9e2ZhbHNlfSAvPilcbiAgICAgIGNvbnN0IGVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxuICAgICAgZXhwZWN0KGVsKS50b0hhdmVUZXh0Q29udGVudCgnZmFsc2UnKVxuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1RleHRhcmVhJywgKCkgPT4ge1xuICAgIGl0KCdyZW5kZXJzIGRhdGEnLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxUZXh0YXJlYSBkYXRhPVwiZGF0YVwiIC8+KVxuICAgICAgY29uc3QgZWwgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpXG4gICAgICBleHBlY3QoZWwpLnRvSGF2ZVRleHRDb250ZW50KCdkYXRhJylcbiAgICB9KVxuICAgIGl0KCdoYW5kbGUgdW5kZWZpbmVkIC0gYnVnLzEzJywgKCkgPT4ge1xuICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHJlbmRlcig8VGV4dGFyZWEgZGF0YT17dW5kZWZpbmVkfSAvPilcbiAgICAgIGNvbnN0IGVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxuICAgICAgZXhwZWN0KGVsKS50b0hhdmVUZXh0Q29udGVudCgnJylcbiAgICB9KVxuICB9KVxuICBkZXNjcmliZSgnU2VsZWN0JywgKCkgPT4ge1xuICAgIGNvbnN0IGZpZWxkV2l0aE9wdGlvbnNPYmplY3Q6IFNlbGVjdEZpZWxkID0ge1xuICAgICAgbmFtZTogJ3NlbGVjdE9iamVjdCcsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ09uZScsXG4gICAgICAgICAgdmFsdWU6ICdvbmUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdUd28nLFxuICAgICAgICAgIHZhbHVlOiAndHdvJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICB9XG4gICAgY29uc3QgZmllbGRXaXRoU3RyaW5nc09wdGlvbnM6IFNlbGVjdEZpZWxkID0ge1xuICAgICAgbmFtZTogJ3NlbGVjdFN0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ2JsdWUnLCAnZ3JlZW4nLCAneWVsbG93J10sXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICB9XG4gICAgaXQoJ3JlbmRlcnMgb3B0aW9ucyBvYmplY3RzJywgKCkgPT4ge1xuICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHJlbmRlcig8U2VsZWN0IGRhdGE9XCJvbmVcIiBmaWVsZD17ZmllbGRXaXRoT3B0aW9uc09iamVjdH0gLz4pXG4gICAgICBjb25zdCBlbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJylcbiAgICAgIGV4cGVjdChlbCkudG9IYXZlVGV4dENvbnRlbnQoJ09uZScpXG4gICAgfSlcbiAgICBpdCgncmVuZGVycyBvcHRpb24gc3RyaW5ncycsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSByZW5kZXIoPFNlbGVjdCBkYXRhPVwiYmx1ZVwiIGZpZWxkPXtmaWVsZFdpdGhTdHJpbmdzT3B0aW9uc30gLz4pXG4gICAgICBjb25zdCBlbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJylcbiAgICAgIGV4cGVjdChlbCkudG9IYXZlVGV4dENvbnRlbnQoJ2JsdWUnKVxuICAgIH0pXG5cbiAgICBkZXNjcmliZSgnSGFzTWFueScsICgpID0+IHtcbiAgICAgIGl0KCdyZW5kZXJzIG9wdGlvbnMgb2JqZWN0cycsICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHJlbmRlcihcbiAgICAgICAgICA8U2VsZWN0IGRhdGE9e1snb25lJywgJ3R3byddfSBmaWVsZD17ZmllbGRXaXRoT3B0aW9uc09iamVjdH0gLz4sXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgZWwgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpXG4gICAgICAgIGV4cGVjdChlbCkudG9IYXZlVGV4dENvbnRlbnQoJ09uZSwgVHdvJylcbiAgICAgIH0pXG4gICAgICBpdCgncmVuZGVycyBvcHRpb24gc3RyaW5ncycsICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHJlbmRlcihcbiAgICAgICAgICA8U2VsZWN0IGRhdGE9e1snYmx1ZScsICdncmVlbiddfSBmaWVsZD17ZmllbGRXaXRoU3RyaW5nc09wdGlvbnN9IC8+LFxuICAgICAgICApXG4gICAgICAgIGNvbnN0IGVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxuICAgICAgICBleHBlY3QoZWwpLnRvSGF2ZVRleHRDb250ZW50KCdibHVlLCBncmVlbicpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImplc3QiLCJtb2NrIiwidXNlQ29uZmlnIiwiYWRtaW4iLCJkYXRlRm9ybWF0IiwidXNlVHJhbnNsYXRpb24iLCJ0Iiwic3RyaW5nIiwiZGVzY3JpYmUiLCJmaWVsZCIsImJsb2NrcyIsImZpZWxkcyIsImxhYmVscyIsInBsdXJhbCIsInNpbmd1bGFyIiwic2x1ZyIsImxhYmVsIiwibmFtZSIsInR5cGUiLCJpdCIsImRhdGEiLCJibG9ja1R5cGUiLCJjb250YWluZXIiLCJyZW5kZXIiLCJCbG9ja3NDZWxsIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiZXhwZWN0IiwidG9IYXZlVGV4dENvbnRlbnQiLCJkYXRlIiwicGlja2VyQXBwZWFyYW5jZSIsInRpbWVTdGFtcCIsIkRhdGVDZWxsIiwiZGF0ZU1hdGNoIiwidGV4dENvbnRlbnQiLCJ0b01hdGNoIiwidW5kZWZpbmVkIiwidG9CZSIsIkNoZWNrYm94IiwiVGV4dGFyZWEiLCJmaWVsZFdpdGhPcHRpb25zT2JqZWN0Iiwib3B0aW9ucyIsInZhbHVlIiwiZmllbGRXaXRoU3RyaW5nc09wdGlvbnMiLCJTZWxlY3QiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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