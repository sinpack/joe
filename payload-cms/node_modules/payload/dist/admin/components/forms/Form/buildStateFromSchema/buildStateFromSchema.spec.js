"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _index = /*#__PURE__*/ _interop_require_default(require("./index"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
describe('Form - buildStateFromSchema', ()=>{
    const defaultValue = 'Default';
    it('populates default value - normal fields', async ()=>{
        const fieldSchema = [
            {
                name: 'text',
                defaultValue,
                label: 'Text',
                type: 'text'
            }
        ];
        const state = await (0, _index.default)({
            fieldSchema
        });
        expect(state.text.value).toBe(defaultValue);
    });
    it('field value overrides defaultValue - normal fields', async ()=>{
        const value = 'value';
        const data = {
            text: value
        };
        const fieldSchema = [
            {
                name: 'text',
                defaultValue,
                label: 'Text',
                type: 'text'
            }
        ];
        const state = await (0, _index.default)({
            data,
            fieldSchema
        });
        expect(state.text.value).toBe(value);
    });
    it('populates default value from a function - normal fields', async ()=>{
        const user = {
            email: 'user@example.com'
        };
        const locale = 'en';
        const fieldSchema = [
            {
                name: 'text',
                defaultValue: (args)=>{
                    if (!args.locale) {
                        return 'missing locale';
                    }
                    if (!args.user) {
                        return 'missing user';
                    }
                    return 'Default';
                },
                label: 'Text',
                type: 'text'
            }
        ];
        const state = await (0, _index.default)({
            fieldSchema,
            locale,
            user
        });
        expect(state.text.value).toBe(defaultValue);
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEvYnVpbGRTdGF0ZUZyb21TY2hlbWEuc3BlYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGRTdGF0ZUZyb21TY2hlbWEgZnJvbSAnLi9pbmRleCdcblxuZGVzY3JpYmUoJ0Zvcm0gLSBidWlsZFN0YXRlRnJvbVNjaGVtYScsICgpID0+IHtcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gJ0RlZmF1bHQnXG4gIGl0KCdwb3B1bGF0ZXMgZGVmYXVsdCB2YWx1ZSAtIG5vcm1hbCBmaWVsZHMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRTY2hlbWEgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0ZXh0JyxcbiAgICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgICBsYWJlbDogJ1RleHQnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB9LFxuICAgIF1cbiAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHsgZmllbGRTY2hlbWEgfSlcbiAgICBleHBlY3Qoc3RhdGUudGV4dC52YWx1ZSkudG9CZShkZWZhdWx0VmFsdWUpXG4gIH0pXG4gIGl0KCdmaWVsZCB2YWx1ZSBvdmVycmlkZXMgZGVmYXVsdFZhbHVlIC0gbm9ybWFsIGZpZWxkcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9ICd2YWx1ZSdcbiAgICBjb25zdCBkYXRhID0geyB0ZXh0OiB2YWx1ZSB9XG4gICAgY29uc3QgZmllbGRTY2hlbWEgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0ZXh0JyxcbiAgICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgICBsYWJlbDogJ1RleHQnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB9LFxuICAgIF1cbiAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHsgZGF0YSwgZmllbGRTY2hlbWEgfSlcbiAgICBleHBlY3Qoc3RhdGUudGV4dC52YWx1ZSkudG9CZSh2YWx1ZSlcbiAgfSlcbiAgaXQoJ3BvcHVsYXRlcyBkZWZhdWx0IHZhbHVlIGZyb20gYSBmdW5jdGlvbiAtIG5vcm1hbCBmaWVsZHMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IHsgZW1haWw6ICd1c2VyQGV4YW1wbGUuY29tJyB9XG4gICAgY29uc3QgbG9jYWxlID0gJ2VuJ1xuICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAndGV4dCcsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWFyZ3MubG9jYWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ21pc3NpbmcgbG9jYWxlJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWFyZ3MudXNlcikge1xuICAgICAgICAgICAgcmV0dXJuICdtaXNzaW5nIHVzZXInXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnRGVmYXVsdCdcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6ICdUZXh0JyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgfSxcbiAgICBdXG4gICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7IGZpZWxkU2NoZW1hLCBsb2NhbGUsIHVzZXIgfSlcbiAgICBleHBlY3Qoc3RhdGUudGV4dC52YWx1ZSkudG9CZShkZWZhdWx0VmFsdWUpXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiZGVmYXVsdFZhbHVlIiwiaXQiLCJmaWVsZFNjaGVtYSIsIm5hbWUiLCJsYWJlbCIsInR5cGUiLCJzdGF0ZSIsImJ1aWxkU3RhdGVGcm9tU2NoZW1hIiwiZXhwZWN0IiwidGV4dCIsInZhbHVlIiwidG9CZSIsImRhdGEiLCJ1c2VyIiwiZW1haWwiLCJsb2NhbGUiLCJhcmdzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7OERBQWlDOzs7Ozs7QUFFakNBLFNBQVMsK0JBQStCO0lBQ3RDLE1BQU1DLGVBQWU7SUFDckJDLEdBQUcsMkNBQTJDO1FBQzVDLE1BQU1DLGNBQWM7WUFDbEI7Z0JBQ0VDLE1BQU07Z0JBQ05IO2dCQUNBSSxPQUFPO2dCQUNQQyxNQUFNO1lBQ1I7U0FDRDtRQUNELE1BQU1DLFFBQVEsTUFBTUMsSUFBQUEsY0FBb0IsRUFBQztZQUFFTDtRQUFZO1FBQ3ZETSxPQUFPRixNQUFNRyxJQUFJLENBQUNDLEtBQUssRUFBRUMsSUFBSSxDQUFDWDtJQUNoQztJQUNBQyxHQUFHLHNEQUFzRDtRQUN2RCxNQUFNUyxRQUFRO1FBQ2QsTUFBTUUsT0FBTztZQUFFSCxNQUFNQztRQUFNO1FBQzNCLE1BQU1SLGNBQWM7WUFDbEI7Z0JBQ0VDLE1BQU07Z0JBQ05IO2dCQUNBSSxPQUFPO2dCQUNQQyxNQUFNO1lBQ1I7U0FDRDtRQUNELE1BQU1DLFFBQVEsTUFBTUMsSUFBQUEsY0FBb0IsRUFBQztZQUFFSztZQUFNVjtRQUFZO1FBQzdETSxPQUFPRixNQUFNRyxJQUFJLENBQUNDLEtBQUssRUFBRUMsSUFBSSxDQUFDRDtJQUNoQztJQUNBVCxHQUFHLDJEQUEyRDtRQUM1RCxNQUFNWSxPQUFPO1lBQUVDLE9BQU87UUFBbUI7UUFDekMsTUFBTUMsU0FBUztRQUNmLE1BQU1iLGNBQWM7WUFDbEI7Z0JBQ0VDLE1BQU07Z0JBQ05ILGNBQWMsQ0FBQ2dCO29CQUNiLElBQUksQ0FBQ0EsS0FBS0QsTUFBTSxFQUFFO3dCQUNoQixPQUFPO29CQUNUO29CQUNBLElBQUksQ0FBQ0MsS0FBS0gsSUFBSSxFQUFFO3dCQUNkLE9BQU87b0JBQ1Q7b0JBQ0EsT0FBTztnQkFDVDtnQkFDQVQsT0FBTztnQkFDUEMsTUFBTTtZQUNSO1NBQ0Q7UUFDRCxNQUFNQyxRQUFRLE1BQU1DLElBQUFBLGNBQW9CLEVBQUM7WUFBRUw7WUFBYWE7WUFBUUY7UUFBSztRQUNyRUwsT0FBT0YsTUFBTUcsSUFBSSxDQUFDQyxLQUFLLEVBQUVDLElBQUksQ0FBQ1g7SUFDaEM7QUFDRiJ9