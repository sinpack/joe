"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _validations = require("./validations");
const t = jest.fn((string)=>string);
let options = {
    data: undefined,
    operation: 'create',
    siblingData: undefined,
    t
};
describe('Field Validations', ()=>{
    describe('text', ()=>{
        it('should validate', ()=>{
            const val = 'test';
            const result = (0, _validations.text)(val, options);
            expect(result).toBe(true);
        });
        it('should show required message', ()=>{
            const val = undefined;
            const result = (0, _validations.text)(val, {
                ...options,
                required: true
            });
            expect(result).toBe('validation:required');
        });
        it('should handle undefined', ()=>{
            const val = undefined;
            const result = (0, _validations.text)(val, options);
            expect(result).toBe(true);
        });
        it('should validate maxLength', ()=>{
            const val = 'toolong';
            const result = (0, _validations.text)(val, {
                ...options,
                maxLength: 5
            });
            expect(result).toBe('validation:shorterThanMax');
        });
        it('should validate minLength', ()=>{
            const val = 'short';
            const result = (0, _validations.text)(val, {
                ...options,
                minLength: 10
            });
            expect(result).toBe('validation:longerThanMin');
        });
        it('should validate maxLength with no value', ()=>{
            const val = undefined;
            const result = (0, _validations.text)(val, {
                ...options,
                maxLength: 5
            });
            expect(result).toBe(true);
        });
        it('should validate minLength with no value', ()=>{
            const val = undefined;
            const result = (0, _validations.text)(val, {
                ...options,
                minLength: 10
            });
            expect(result).toBe(true);
        });
        it('should validate an array of texts', async ()=>{
            const val = [
                'test'
            ];
            const result = (0, _validations.text)(val, {
                ...options,
                hasMany: true
            });
            expect(result).toBe(true);
        });
        it('should handle required array of texts', async ()=>{
            const val = [
                'test'
            ];
            const result = (0, _validations.text)(val, {
                ...options,
                hasMany: true,
                required: true
            });
            expect(result).toBe(true);
        });
    });
    describe('textarea', ()=>{
        options = {
            ...options,
            field: {
                name: 'test',
                type: 'textarea'
            }
        };
        it('should validate', ()=>{
            const val = 'test';
            const result = (0, _validations.textarea)(val, options);
            expect(result).toBe(true);
        });
        it('should show required message', ()=>{
            const val = undefined;
            const result = (0, _validations.textarea)(val, {
                ...options,
                required: true
            });
            expect(result).toBe('validation:required');
        });
        it('should handle undefined', ()=>{
            const val = undefined;
            const result = (0, _validations.textarea)(val, options);
            expect(result).toBe(true);
        });
        it('should validate maxLength', ()=>{
            const val = 'toolong';
            const result = (0, _validations.textarea)(val, {
                ...options,
                maxLength: 5
            });
            expect(result).toBe('validation:shorterThanMax');
        });
        it('should validate minLength', ()=>{
            const val = 'short';
            const result = (0, _validations.textarea)(val, {
                ...options,
                minLength: 10
            });
            expect(result).toBe('validation:longerThanMin');
        });
        it('should validate maxLength with no value', ()=>{
            const val = undefined;
            const result = (0, _validations.textarea)(val, {
                ...options,
                maxLength: 5
            });
            expect(result).toBe(true);
        });
        it('should validate minLength with no value', ()=>{
            const val = undefined;
            const result = (0, _validations.textarea)(val, {
                ...options,
                minLength: 10
            });
            expect(result).toBe(true);
        });
    });
    describe('password', ()=>{
        const passwordOptions = {
            ...options,
            name: 'test',
            type: 'password'
        };
        it('should validate', ()=>{
            const val = 'test';
            const result = (0, _validations.password)(val, passwordOptions);
            expect(result).toBe(true);
        });
        it('should show required message', ()=>{
            const val = undefined;
            const result = (0, _validations.password)(val, {
                ...passwordOptions,
                required: true
            });
            expect(result).toBe('validation:required');
        });
        it('should handle undefined', ()=>{
            const val = undefined;
            const result = (0, _validations.password)(val, passwordOptions);
            expect(result).toBe(true);
        });
        it('should validate maxLength', ()=>{
            const val = 'toolong';
            const result = (0, _validations.password)(val, {
                ...passwordOptions,
                maxLength: 5
            });
            expect(result).toBe('validation:shorterThanMax');
        });
        it('should validate minLength', ()=>{
            const val = 'short';
            const result = (0, _validations.password)(val, {
                ...passwordOptions,
                minLength: 10
            });
            expect(result).toBe('validation:longerThanMin');
        });
        it('should validate maxLength with no value', ()=>{
            const val = undefined;
            const result = (0, _validations.password)(val, {
                ...passwordOptions,
                maxLength: 5
            });
            expect(result).toBe(true);
        });
        it('should validate minLength with no value', ()=>{
            const val = undefined;
            const result = (0, _validations.password)(val, {
                ...passwordOptions,
                minLength: 10
            });
            expect(result).toBe(true);
        });
    });
    describe('point', ()=>{
        const pointOptions = {
            ...options,
            name: 'point',
            type: 'point'
        };
        it('should validate numbers', ()=>{
            const val = [
                '0.1',
                '0.2'
            ];
            const result = (0, _validations.point)(val, pointOptions);
            expect(result).toBe(true);
        });
        it('should validate strings that could be numbers', ()=>{
            const val = [
                '0.1',
                '0.2'
            ];
            const result = (0, _validations.point)(val, pointOptions);
            expect(result).toBe(true);
        });
        it('should show required message when undefined', ()=>{
            const val = undefined;
            const result = (0, _validations.point)(val, {
                ...pointOptions,
                required: true
            });
            expect(result).not.toBe(true);
        });
        it('should show required message when array', ()=>{
            const val = [];
            const result = (0, _validations.point)(val, {
                ...pointOptions,
                required: true
            });
            expect(result).not.toBe(true);
        });
        it('should show required message when array of undefined', ()=>{
            const val = [
                undefined,
                undefined
            ];
            const result = (0, _validations.point)(val, {
                ...pointOptions,
                required: true
            });
            expect(result).not.toBe(true);
        });
        it('should handle undefined not required', ()=>{
            const val = undefined;
            const result = (0, _validations.password)(val, pointOptions);
            expect(result).toBe(true);
        });
        it('should handle empty array not required', ()=>{
            const val = [];
            const result = (0, _validations.point)(val, pointOptions);
            expect(result).toBe(true);
        });
        it('should handle array of undefined not required', ()=>{
            const val = [
                undefined,
                undefined
            ];
            const result = (0, _validations.point)(val, pointOptions);
            expect(result).toBe(true);
        });
        it('should prevent text input', ()=>{
            const val = [
                'bad',
                'input'
            ];
            const result = (0, _validations.point)(val, pointOptions);
            expect(result).not.toBe(true);
        });
        it('should prevent missing value', ()=>{
            const val = [
                0.1
            ];
            const result = (0, _validations.point)(val, pointOptions);
            expect(result).not.toBe(true);
        });
    });
    describe('relationship', ()=>{
        const relationCollection = {
            fields: [
                {
                    name: 'id',
                    type: 'text'
                }
            ],
            slug: 'relation'
        };
        const relationshipOptions = {
            ...options,
            config: {
                collections: [
                    relationCollection
                ]
            },
            payload: {
                collections: {
                    relation: {
                        config: relationCollection
                    }
                }
            },
            relationTo: 'relation'
        };
        it('should handle required', async ()=>{
            const val = undefined;
            const result = await (0, _validations.relationship)(val, {
                ...relationshipOptions,
                required: true
            });
            expect(result).not.toBe(true);
        });
        it('should handle required with hasMany', async ()=>{
            const val = [];
            const result = await (0, _validations.relationship)(val, {
                ...relationshipOptions,
                hasMany: true,
                required: true
            });
            expect(result).not.toBe(true);
        });
        it('should enforce hasMany min', async ()=>{
            const minOptions = {
                ...relationshipOptions,
                hasMany: true,
                minRows: 2
            };
            const val = [
                'a'
            ];
            const result = await (0, _validations.relationship)(val, minOptions);
            expect(result).not.toBe(true);
            const allowed = await (0, _validations.relationship)([
                'a',
                'b'
            ], minOptions);
            expect(allowed).toStrictEqual(true);
        });
        it('should enforce hasMany max', async ()=>{
            const maxOptions = {
                ...relationshipOptions,
                hasMany: true,
                maxRows: 2
            };
            let val = [
                'a',
                'b',
                'c'
            ];
            const result = await (0, _validations.relationship)(val, maxOptions);
            expect(result).not.toBe(true);
            val = [
                'a'
            ];
            const allowed = await (0, _validations.relationship)(val, maxOptions);
            expect(allowed).toStrictEqual(true);
        });
    });
    describe('select', ()=>{
        const selectOptions = {
            ...options,
            options: [
                'one',
                'two',
                'three'
            ],
            type: 'select'
        };
        const optionsRequired = {
            ...selectOptions,
            options: [
                {
                    label: 'One',
                    value: 'one'
                },
                {
                    label: 'two',
                    value: 'two'
                },
                {
                    label: 'three',
                    value: 'three'
                }
            ],
            required: true
        };
        const optionsWithEmptyString = {
            ...selectOptions,
            options: [
                {
                    label: 'None',
                    value: ''
                },
                {
                    label: 'Option',
                    value: 'option'
                }
            ]
        };
        it('should allow valid input', ()=>{
            const val = 'one';
            const result = (0, _validations.select)(val, selectOptions);
            expect(result).toStrictEqual(true);
        });
        it('should prevent invalid input', ()=>{
            const val = 'bad';
            const result = (0, _validations.select)(val, selectOptions);
            expect(result).not.toStrictEqual(true);
        });
        it('should allow null input', ()=>{
            const val = null;
            const result = (0, _validations.select)(val, selectOptions);
            expect(result).toStrictEqual(true);
        });
        it('should allow undefined input', ()=>{
            let val;
            const result = (0, _validations.select)(val, selectOptions);
            expect(result).toStrictEqual(true);
        });
        it('should prevent empty string input', ()=>{
            const val = '';
            const result = (0, _validations.select)(val, selectOptions);
            expect(result).not.toStrictEqual(true);
        });
        it('should prevent undefined input with required', ()=>{
            let val;
            const result = (0, _validations.select)(val, optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it('should prevent empty string input with required', ()=>{
            const result = (0, _validations.select)('', optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it('should prevent undefined input with required and hasMany', ()=>{
            let val;
            options.hasMany = true;
            const result = (0, _validations.select)(val, optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it('should prevent empty array input with required and hasMany', ()=>{
            optionsRequired.hasMany = true;
            const result = (0, _validations.select)([], optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it('should prevent empty string array input with required and hasMany', ()=>{
            options.hasMany = true;
            const result = (0, _validations.select)([
                ''
            ], optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it('should prevent null input with required and hasMany', ()=>{
            const val = null;
            options.hasMany = true;
            const result = (0, _validations.select)(val, optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it('should allow valid input with option objects', ()=>{
            const val = 'one';
            options.hasMany = false;
            const result = (0, _validations.select)(val, optionsRequired);
            expect(result).toStrictEqual(true);
        });
        it('should prevent invalid input with option objects', ()=>{
            const val = 'bad';
            options.hasMany = false;
            const result = (0, _validations.select)(val, optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it('should allow empty string input with option object', ()=>{
            const val = '';
            const result = (0, _validations.select)(val, optionsWithEmptyString);
            expect(result).toStrictEqual(true);
        });
        it('should allow empty string input with option object and required', ()=>{
            const val = '';
            optionsWithEmptyString.required = true;
            const result = (0, _validations.select)(val, optionsWithEmptyString);
            expect(result).toStrictEqual(true);
        });
        it('should allow valid input with hasMany', ()=>{
            const val = [
                'one',
                'two'
            ];
            const result = (0, _validations.select)(val, selectOptions);
            expect(result).toStrictEqual(true);
        });
        it('should prevent invalid input with hasMany', ()=>{
            const val = [
                'one',
                'bad'
            ];
            const result = (0, _validations.select)(val, selectOptions);
            expect(result).not.toStrictEqual(true);
        });
        it('should allow valid input with hasMany option objects', ()=>{
            const val = [
                'one',
                'three'
            ];
            optionsRequired.hasMany = true;
            const result = (0, _validations.select)(val, optionsRequired);
            expect(result).toStrictEqual(true);
        });
        it('should prevent invalid input with hasMany option objects', ()=>{
            const val = [
                'three',
                'bad'
            ];
            optionsRequired.hasMany = true;
            const result = (0, _validations.select)(val, optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
    });
    describe('number', ()=>{
        const numberOptions = {
            ...options,
            name: 'test',
            type: 'number'
        };
        it('should validate', ()=>{
            const val = 1;
            const result = (0, _validations.number)(val, numberOptions);
            expect(result).toBe(true);
        });
        it('should validate 0', ()=>{
            const val = 0;
            const result = (0, _validations.number)(val, {
                ...numberOptions,
                required: true
            });
            expect(result).toBe(true);
        });
        it('should validate 2', ()=>{
            const val = 1.5;
            const result = (0, _validations.number)(val, numberOptions);
            expect(result).toBe(true);
        });
        it('should show invalid number message', ()=>{
            const val = 'test';
            const result = (0, _validations.number)(val, {
                ...numberOptions
            });
            expect(result).toBe('validation:enterNumber');
        });
        it('should handle empty value', ()=>{
            const val = '';
            const result = (0, _validations.number)(val, {
                ...numberOptions
            });
            expect(result).toBe(true);
        });
        it('should handle required value', ()=>{
            const val = '';
            const result = (0, _validations.number)(val, {
                ...numberOptions,
                required: true
            });
            expect(result).toBe('validation:required');
        });
        it('should validate minValue', ()=>{
            const val = 2.4;
            const result = (0, _validations.number)(val, {
                ...numberOptions,
                min: 2.5
            });
            expect(result).toBe('validation:lessThanMin');
        });
        it('should validate maxValue', ()=>{
            const val = 1.25;
            const result = (0, _validations.number)(val, {
                ...numberOptions,
                max: 1
            });
            expect(result).toBe('validation:greaterThanMax');
        });
        it('should validate an array of numbers', async ()=>{
            const val = [
                1.25,
                2.5
            ];
            const result = (0, _validations.number)(val, {
                ...numberOptions,
                hasMany: true
            });
            expect(result).toBe(true);
        });
        it('should validate an array of numbers using min', async ()=>{
            const val = [
                1.25,
                2.5
            ];
            const result = (0, _validations.number)(val, {
                ...numberOptions,
                hasMany: true,
                min: 3
            });
            expect(result).toBe('validation:lessThanMin');
        });
        it('should validate an array of numbers using max', async ()=>{
            const val = [
                1.25,
                2.5
            ];
            const result = (0, _validations.number)(val, {
                ...numberOptions,
                hasMany: true,
                max: 1
            });
            expect(result).toBe('validation:greaterThanMax');
        });
        it('should validate an array of numbers using minRows', async ()=>{
            const val = [
                1.25,
                2.5
            ];
            const result = (0, _validations.number)(val, {
                ...numberOptions,
                hasMany: true,
                minRows: 4
            });
            expect(result).toBe('validation:requiresAtLeast');
        });
        it('should validate an array of numbers using maxRows', async ()=>{
            const val = [
                1.25,
                2.5,
                3.5
            ];
            const result = (0, _validations.number)(val, {
                ...numberOptions,
                hasMany: true,
                maxRows: 2
            });
            expect(result).toBe('validation:requiresNoMoreThan');
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWVsZHMvdmFsaWRhdGlvbnMuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFZhbGlkYXRlT3B0aW9ucyB9IGZyb20gJy4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBudW1iZXIsIHBhc3N3b3JkLCBwb2ludCwgcmVsYXRpb25zaGlwLCBzZWxlY3QsIHRleHQsIHRleHRhcmVhIH0gZnJvbSAnLi92YWxpZGF0aW9ucydcblxuY29uc3QgdCA9IGplc3QuZm4oKHN0cmluZykgPT4gc3RyaW5nKVxuXG5sZXQgb3B0aW9uczogVmFsaWRhdGVPcHRpb25zPGFueSwgYW55LCBhbnk+ID0ge1xuICBkYXRhOiB1bmRlZmluZWQsXG4gIG9wZXJhdGlvbjogJ2NyZWF0ZScsXG4gIHNpYmxpbmdEYXRhOiB1bmRlZmluZWQsXG4gIHQsXG59XG5cbmRlc2NyaWJlKCdGaWVsZCBWYWxpZGF0aW9ucycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ3RleHQnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICd0ZXN0J1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGV4dCh2YWwsIG9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHNob3cgcmVxdWlyZWQgbWVzc2FnZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHVuZGVmaW5lZFxuICAgICAgY29uc3QgcmVzdWx0ID0gdGV4dCh2YWwsIHsgLi4ub3B0aW9ucywgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUoJ3ZhbGlkYXRpb246cmVxdWlyZWQnKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgdW5kZWZpbmVkJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdW5kZWZpbmVkXG4gICAgICBjb25zdCByZXN1bHQgPSB0ZXh0KHZhbCwgb3B0aW9ucylcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWF4TGVuZ3RoJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJ3Rvb2xvbmcnXG4gICAgICBjb25zdCByZXN1bHQgPSB0ZXh0KHZhbCwgeyAuLi5vcHRpb25zLCBtYXhMZW5ndGg6IDUgfSlcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUoJ3ZhbGlkYXRpb246c2hvcnRlclRoYW5NYXgnKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBtaW5MZW5ndGgnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAnc2hvcnQnXG4gICAgICBjb25zdCByZXN1bHQgPSB0ZXh0KHZhbCwgeyAuLi5vcHRpb25zLCBtaW5MZW5ndGg6IDEwIH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOmxvbmdlclRoYW5NaW4nKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBtYXhMZW5ndGggd2l0aCBubyB2YWx1ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHVuZGVmaW5lZFxuICAgICAgY29uc3QgcmVzdWx0ID0gdGV4dCh2YWwsIHsgLi4ub3B0aW9ucywgbWF4TGVuZ3RoOiA1IH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIG1pbkxlbmd0aCB3aXRoIG5vIHZhbHVlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdW5kZWZpbmVkXG4gICAgICBjb25zdCByZXN1bHQgPSB0ZXh0KHZhbCwgeyAuLi5vcHRpb25zLCBtaW5MZW5ndGg6IDEwIH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIGFuIGFycmF5IG9mIHRleHRzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWyd0ZXN0J11cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHQodmFsLCB7IC4uLm9wdGlvbnMsIGhhc01hbnk6IHRydWUgfSlcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgaGFuZGxlIHJlcXVpcmVkIGFycmF5IG9mIHRleHRzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWyd0ZXN0J11cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHQodmFsLCB7IC4uLm9wdGlvbnMsIGhhc01hbnk6IHRydWUsIHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgfSlcblxuICBkZXNjcmliZSgndGV4dGFyZWEnLCAoKSA9PiB7XG4gICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgZmllbGQ6IHsgbmFtZTogJ3Rlc3QnLCB0eXBlOiAndGV4dGFyZWEnIH0gfVxuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAndGVzdCdcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHRhcmVhKHZhbCwgb3B0aW9ucylcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgc2hvdyByZXF1aXJlZCBtZXNzYWdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdW5kZWZpbmVkXG4gICAgICBjb25zdCByZXN1bHQgPSB0ZXh0YXJlYSh2YWwsIHsgLi4ub3B0aW9ucywgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUoJ3ZhbGlkYXRpb246cmVxdWlyZWQnKVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIGhhbmRsZSB1bmRlZmluZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHRhcmVhKHZhbCwgb3B0aW9ucylcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWF4TGVuZ3RoJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJ3Rvb2xvbmcnXG4gICAgICBjb25zdCByZXN1bHQgPSB0ZXh0YXJlYSh2YWwsIHsgLi4ub3B0aW9ucywgbWF4TGVuZ3RoOiA1IH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOnNob3J0ZXJUaGFuTWF4JylcbiAgICB9KVxuXG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBtaW5MZW5ndGgnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAnc2hvcnQnXG4gICAgICBjb25zdCByZXN1bHQgPSB0ZXh0YXJlYSh2YWwsIHsgLi4ub3B0aW9ucywgbWluTGVuZ3RoOiAxMCB9KVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpsb25nZXJUaGFuTWluJylcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWF4TGVuZ3RoIHdpdGggbm8gdmFsdWUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHRhcmVhKHZhbCwgeyAuLi5vcHRpb25zLCBtYXhMZW5ndGg6IDUgfSlcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWluTGVuZ3RoIHdpdGggbm8gdmFsdWUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHRhcmVhKHZhbCwgeyAuLi5vcHRpb25zLCBtaW5MZW5ndGg6IDEwIH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgfSlcblxuICBkZXNjcmliZSgncGFzc3dvcmQnLCAoKSA9PiB7XG4gICAgY29uc3QgcGFzc3dvcmRPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIG5hbWU6ICd0ZXN0JyxcbiAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgfVxuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAndGVzdCdcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBhc3N3b3JkKHZhbCwgcGFzc3dvcmRPcHRpb25zKVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSh0cnVlKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCBzaG93IHJlcXVpcmVkIG1lc3NhZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBhc3N3b3JkKHZhbCwgeyAuLi5wYXNzd29yZE9wdGlvbnMsIHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOnJlcXVpcmVkJylcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgaGFuZGxlIHVuZGVmaW5lZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHVuZGVmaW5lZFxuICAgICAgY29uc3QgcmVzdWx0ID0gcGFzc3dvcmQodmFsLCBwYXNzd29yZE9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIG1heExlbmd0aCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICd0b29sb25nJ1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGFzc3dvcmQodmFsLCB7IC4uLnBhc3N3b3JkT3B0aW9ucywgbWF4TGVuZ3RoOiA1IH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOnNob3J0ZXJUaGFuTWF4JylcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWluTGVuZ3RoJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJ3Nob3J0J1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGFzc3dvcmQodmFsLCB7IC4uLnBhc3N3b3JkT3B0aW9ucywgbWluTGVuZ3RoOiAxMCB9KVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpsb25nZXJUaGFuTWluJylcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWF4TGVuZ3RoIHdpdGggbm8gdmFsdWUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBhc3N3b3JkKHZhbCwgeyAuLi5wYXNzd29yZE9wdGlvbnMsIG1heExlbmd0aDogNSB9KVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSh0cnVlKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBtaW5MZW5ndGggd2l0aCBubyB2YWx1ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHVuZGVmaW5lZFxuICAgICAgY29uc3QgcmVzdWx0ID0gcGFzc3dvcmQodmFsLCB7IC4uLnBhc3N3b3JkT3B0aW9ucywgbWluTGVuZ3RoOiAxMCB9KVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSh0cnVlKVxuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ3BvaW50JywgKCkgPT4ge1xuICAgIGNvbnN0IHBvaW50T3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBuYW1lOiAncG9pbnQnLFxuICAgICAgdHlwZTogJ3BvaW50JyxcbiAgICB9XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBudW1iZXJzJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWycwLjEnLCAnMC4yJ11cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50KHZhbCwgcG9pbnRPcHRpb25zKVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSh0cnVlKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBzdHJpbmdzIHRoYXQgY291bGQgYmUgbnVtYmVycycsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IFsnMC4xJywgJzAuMiddXG4gICAgICBjb25zdCByZXN1bHQgPSBwb2ludCh2YWwsIHBvaW50T3B0aW9ucylcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgc2hvdyByZXF1aXJlZCBtZXNzYWdlIHdoZW4gdW5kZWZpbmVkJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdW5kZWZpbmVkXG4gICAgICBjb25zdCByZXN1bHQgPSBwb2ludCh2YWwsIHsgLi4ucG9pbnRPcHRpb25zLCByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvQmUodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgc2hvdyByZXF1aXJlZCBtZXNzYWdlIHdoZW4gYXJyYXknLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbXVxuICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnQodmFsLCB7IC4uLnBvaW50T3B0aW9ucywgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHNob3cgcmVxdWlyZWQgbWVzc2FnZSB3aGVuIGFycmF5IG9mIHVuZGVmaW5lZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50KHZhbCwgeyAuLi5wb2ludE9wdGlvbnMsIHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9CZSh0cnVlKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgdW5kZWZpbmVkIG5vdCByZXF1aXJlZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHVuZGVmaW5lZFxuICAgICAgY29uc3QgcmVzdWx0ID0gcGFzc3dvcmQodmFsLCBwb2ludE9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIGhhbmRsZSBlbXB0eSBhcnJheSBub3QgcmVxdWlyZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbXVxuICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnQodmFsLCBwb2ludE9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIGhhbmRsZSBhcnJheSBvZiB1bmRlZmluZWQgbm90IHJlcXVpcmVkJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnQodmFsLCBwb2ludE9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHByZXZlbnQgdGV4dCBpbnB1dCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IFsnYmFkJywgJ2lucHV0J11cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50KHZhbCwgcG9pbnRPcHRpb25zKVxuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvQmUodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgcHJldmVudCBtaXNzaW5nIHZhbHVlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWzAuMV1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50KHZhbCwgcG9pbnRPcHRpb25zKVxuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvQmUodHJ1ZSlcbiAgICB9KVxuICB9KVxuXG4gIGRlc2NyaWJlKCdyZWxhdGlvbnNoaXAnLCAoKSA9PiB7XG4gICAgY29uc3QgcmVsYXRpb25Db2xsZWN0aW9uID0ge1xuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzbHVnOiAncmVsYXRpb24nLFxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0aW9uc2hpcE9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGNvbGxlY3Rpb25zOiBbcmVsYXRpb25Db2xsZWN0aW9uXSxcbiAgICAgIH0sXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGNvbGxlY3Rpb25zOiB7XG4gICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgIGNvbmZpZzogcmVsYXRpb25Db2xsZWN0aW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVsYXRpb25UbzogJ3JlbGF0aW9uJyxcbiAgICB9XG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgcmVxdWlyZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlbGF0aW9uc2hpcCh2YWwsIHsgLi4ucmVsYXRpb25zaGlwT3B0aW9ucywgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIGhhbmRsZSByZXF1aXJlZCB3aXRoIGhhc01hbnknLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbXVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVsYXRpb25zaGlwKHZhbCwge1xuICAgICAgICAuLi5yZWxhdGlvbnNoaXBPcHRpb25zLFxuICAgICAgICBoYXNNYW55OiB0cnVlLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9CZSh0cnVlKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCBlbmZvcmNlIGhhc01hbnkgbWluJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbWluT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ucmVsYXRpb25zaGlwT3B0aW9ucyxcbiAgICAgICAgaGFzTWFueTogdHJ1ZSxcbiAgICAgICAgbWluUm93czogMixcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsID0gWydhJ11cblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVsYXRpb25zaGlwKHZhbCwgbWluT3B0aW9ucylcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b0JlKHRydWUpXG5cbiAgICAgIGNvbnN0IGFsbG93ZWQgPSBhd2FpdCByZWxhdGlvbnNoaXAoWydhJywgJ2InXSwgbWluT3B0aW9ucylcbiAgICAgIGV4cGVjdChhbGxvd2VkKS50b1N0cmljdEVxdWFsKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIGVuZm9yY2UgaGFzTWFueSBtYXgnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtYXhPcHRpb25zID0ge1xuICAgICAgICAuLi5yZWxhdGlvbnNoaXBPcHRpb25zLFxuICAgICAgICBoYXNNYW55OiB0cnVlLFxuICAgICAgICBtYXhSb3dzOiAyLFxuICAgICAgfVxuICAgICAgbGV0IHZhbCA9IFsnYScsICdiJywgJ2MnXVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWxhdGlvbnNoaXAodmFsLCBtYXhPcHRpb25zKVxuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvQmUodHJ1ZSlcblxuICAgICAgdmFsID0gWydhJ11cbiAgICAgIGNvbnN0IGFsbG93ZWQgPSBhd2FpdCByZWxhdGlvbnNoaXAodmFsLCBtYXhPcHRpb25zKVxuICAgICAgZXhwZWN0KGFsbG93ZWQpLnRvU3RyaWN0RXF1YWwodHJ1ZSlcbiAgICB9KVxuICB9KVxuXG4gIGRlc2NyaWJlKCdzZWxlY3QnLCAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBvcHRpb25zOiBbJ29uZScsICd0d28nLCAndGhyZWUnXSxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgIH1cbiAgICBjb25zdCBvcHRpb25zUmVxdWlyZWQgPSB7XG4gICAgICAuLi5zZWxlY3RPcHRpb25zLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdPbmUnLFxuICAgICAgICAgIHZhbHVlOiAnb25lJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAndHdvJyxcbiAgICAgICAgICB2YWx1ZTogJ3R3bycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ3RocmVlJyxcbiAgICAgICAgICB2YWx1ZTogJ3RocmVlJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9uc1dpdGhFbXB0eVN0cmluZyA9IHtcbiAgICAgIC4uLnNlbGVjdE9wdGlvbnMsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ05vbmUnLFxuICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnT3B0aW9uJyxcbiAgICAgICAgICB2YWx1ZTogJ29wdGlvbicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH1cbiAgICBpdCgnc2hvdWxkIGFsbG93IHZhbGlkIGlucHV0JywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJ29uZSdcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCh2YWwsIHNlbGVjdE9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS50b1N0cmljdEVxdWFsKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHByZXZlbnQgaW52YWxpZCBpbnB1dCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICdiYWQnXG4gICAgICBjb25zdCByZXN1bHQgPSBzZWxlY3QodmFsLCBzZWxlY3RPcHRpb25zKVxuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvU3RyaWN0RXF1YWwodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgYWxsb3cgbnVsbCBpbnB1dCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IG51bGxcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCh2YWwsIHNlbGVjdE9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS50b1N0cmljdEVxdWFsKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIGFsbG93IHVuZGVmaW5lZCBpbnB1dCcsICgpID0+IHtcbiAgICAgIGxldCB2YWxcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCh2YWwsIHNlbGVjdE9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS50b1N0cmljdEVxdWFsKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHByZXZlbnQgZW1wdHkgc3RyaW5nIGlucHV0JywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJydcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCh2YWwsIHNlbGVjdE9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9TdHJpY3RFcXVhbCh0cnVlKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCBwcmV2ZW50IHVuZGVmaW5lZCBpbnB1dCB3aXRoIHJlcXVpcmVkJywgKCkgPT4ge1xuICAgICAgbGV0IHZhbFxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgb3B0aW9uc1JlcXVpcmVkKVxuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvU3RyaWN0RXF1YWwodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgcHJldmVudCBlbXB0eSBzdHJpbmcgaW5wdXQgd2l0aCByZXF1aXJlZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCgnJywgb3B0aW9uc1JlcXVpcmVkKVxuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvU3RyaWN0RXF1YWwodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgcHJldmVudCB1bmRlZmluZWQgaW5wdXQgd2l0aCByZXF1aXJlZCBhbmQgaGFzTWFueScsICgpID0+IHtcbiAgICAgIGxldCB2YWxcbiAgICAgIG9wdGlvbnMuaGFzTWFueSA9IHRydWVcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCh2YWwsIG9wdGlvbnNSZXF1aXJlZClcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b1N0cmljdEVxdWFsKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHByZXZlbnQgZW1wdHkgYXJyYXkgaW5wdXQgd2l0aCByZXF1aXJlZCBhbmQgaGFzTWFueScsICgpID0+IHtcbiAgICAgIG9wdGlvbnNSZXF1aXJlZC5oYXNNYW55ID0gdHJ1ZVxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KFtdLCBvcHRpb25zUmVxdWlyZWQpXG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9TdHJpY3RFcXVhbCh0cnVlKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCBwcmV2ZW50IGVtcHR5IHN0cmluZyBhcnJheSBpbnB1dCB3aXRoIHJlcXVpcmVkIGFuZCBoYXNNYW55JywgKCkgPT4ge1xuICAgICAgb3B0aW9ucy5oYXNNYW55ID0gdHJ1ZVxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KFsnJ10sIG9wdGlvbnNSZXF1aXJlZClcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b1N0cmljdEVxdWFsKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHByZXZlbnQgbnVsbCBpbnB1dCB3aXRoIHJlcXVpcmVkIGFuZCBoYXNNYW55JywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gbnVsbFxuICAgICAgb3B0aW9ucy5oYXNNYW55ID0gdHJ1ZVxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgb3B0aW9uc1JlcXVpcmVkKVxuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvU3RyaWN0RXF1YWwodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgYWxsb3cgdmFsaWQgaW5wdXQgd2l0aCBvcHRpb24gb2JqZWN0cycsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICdvbmUnXG4gICAgICBvcHRpb25zLmhhc01hbnkgPSBmYWxzZVxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgb3B0aW9uc1JlcXVpcmVkKVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9TdHJpY3RFcXVhbCh0cnVlKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCBwcmV2ZW50IGludmFsaWQgaW5wdXQgd2l0aCBvcHRpb24gb2JqZWN0cycsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICdiYWQnXG4gICAgICBvcHRpb25zLmhhc01hbnkgPSBmYWxzZVxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgb3B0aW9uc1JlcXVpcmVkKVxuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvU3RyaWN0RXF1YWwodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgYWxsb3cgZW1wdHkgc3RyaW5nIGlucHV0IHdpdGggb3B0aW9uIG9iamVjdCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICcnXG4gICAgICBjb25zdCByZXN1bHQgPSBzZWxlY3QodmFsLCBvcHRpb25zV2l0aEVtcHR5U3RyaW5nKVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9TdHJpY3RFcXVhbCh0cnVlKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCBhbGxvdyBlbXB0eSBzdHJpbmcgaW5wdXQgd2l0aCBvcHRpb24gb2JqZWN0IGFuZCByZXF1aXJlZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICcnXG4gICAgICBvcHRpb25zV2l0aEVtcHR5U3RyaW5nLnJlcXVpcmVkID0gdHJ1ZVxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgb3B0aW9uc1dpdGhFbXB0eVN0cmluZylcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvU3RyaWN0RXF1YWwodHJ1ZSlcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgYWxsb3cgdmFsaWQgaW5wdXQgd2l0aCBoYXNNYW55JywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWydvbmUnLCAndHdvJ11cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCh2YWwsIHNlbGVjdE9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS50b1N0cmljdEVxdWFsKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHByZXZlbnQgaW52YWxpZCBpbnB1dCB3aXRoIGhhc01hbnknLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbJ29uZScsICdiYWQnXVxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgc2VsZWN0T3B0aW9ucylcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b1N0cmljdEVxdWFsKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIGFsbG93IHZhbGlkIGlucHV0IHdpdGggaGFzTWFueSBvcHRpb24gb2JqZWN0cycsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IFsnb25lJywgJ3RocmVlJ11cbiAgICAgIG9wdGlvbnNSZXF1aXJlZC5oYXNNYW55ID0gdHJ1ZVxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgb3B0aW9uc1JlcXVpcmVkKVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9TdHJpY3RFcXVhbCh0cnVlKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCBwcmV2ZW50IGludmFsaWQgaW5wdXQgd2l0aCBoYXNNYW55IG9wdGlvbiBvYmplY3RzJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWyd0aHJlZScsICdiYWQnXVxuICAgICAgb3B0aW9uc1JlcXVpcmVkLmhhc01hbnkgPSB0cnVlXG4gICAgICBjb25zdCByZXN1bHQgPSBzZWxlY3QodmFsLCBvcHRpb25zUmVxdWlyZWQpXG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9TdHJpY3RFcXVhbCh0cnVlKVxuICAgIH0pXG4gIH0pXG4gIGRlc2NyaWJlKCdudW1iZXInLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtYmVyT3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBuYW1lOiAndGVzdCcsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICB9XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IDFcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG51bWJlcih2YWwsIG51bWJlck9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIDAnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAwXG4gICAgICBjb25zdCByZXN1bHQgPSBudW1iZXIodmFsLCB7IC4uLm51bWJlck9wdGlvbnMsIHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIDInLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAxLjVcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG51bWJlcih2YWwsIG51bWJlck9wdGlvbnMpXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHNob3cgaW52YWxpZCBudW1iZXIgbWVzc2FnZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICd0ZXN0J1xuICAgICAgY29uc3QgcmVzdWx0ID0gbnVtYmVyKHZhbCwgeyAuLi5udW1iZXJPcHRpb25zIH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOmVudGVyTnVtYmVyJylcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgaGFuZGxlIGVtcHR5IHZhbHVlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJydcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG51bWJlcih2YWwsIHsgLi4ubnVtYmVyT3B0aW9ucyB9KVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSh0cnVlKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgcmVxdWlyZWQgdmFsdWUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAnJ1xuICAgICAgY29uc3QgcmVzdWx0ID0gbnVtYmVyKHZhbCwgeyAuLi5udW1iZXJPcHRpb25zLCByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpyZXF1aXJlZCcpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIG1pblZhbHVlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gMi40XG4gICAgICBjb25zdCByZXN1bHQgPSBudW1iZXIodmFsLCB7IC4uLm51bWJlck9wdGlvbnMsIG1pbjogMi41IH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOmxlc3NUaGFuTWluJylcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWF4VmFsdWUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAxLjI1XG4gICAgICBjb25zdCByZXN1bHQgPSBudW1iZXIodmFsLCB7IC4uLm51bWJlck9wdGlvbnMsIG1heDogMSB9KVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpncmVhdGVyVGhhbk1heCcpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIGFuIGFycmF5IG9mIG51bWJlcnMnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbMS4yNSwgMi41XVxuICAgICAgY29uc3QgcmVzdWx0ID0gbnVtYmVyKHZhbCwgeyAuLi5udW1iZXJPcHRpb25zLCBoYXNNYW55OiB0cnVlIH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIGFuIGFycmF5IG9mIG51bWJlcnMgdXNpbmcgbWluJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWzEuMjUsIDIuNV1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IG51bWJlcih2YWwsIHsgLi4ubnVtYmVyT3B0aW9ucywgaGFzTWFueTogdHJ1ZSwgbWluOiAzIH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOmxlc3NUaGFuTWluJylcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgYW4gYXJyYXkgb2YgbnVtYmVycyB1c2luZyBtYXgnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbMS4yNSwgMi41XVxuICAgICAgY29uc3QgcmVzdWx0ID0gbnVtYmVyKHZhbCwgeyAuLi5udW1iZXJPcHRpb25zLCBoYXNNYW55OiB0cnVlLCBtYXg6IDEgfSlcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUoJ3ZhbGlkYXRpb246Z3JlYXRlclRoYW5NYXgnKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBhbiBhcnJheSBvZiBudW1iZXJzIHVzaW5nIG1pblJvd3MnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbMS4yNSwgMi41XVxuICAgICAgY29uc3QgcmVzdWx0ID0gbnVtYmVyKHZhbCwgeyAuLi5udW1iZXJPcHRpb25zLCBoYXNNYW55OiB0cnVlLCBtaW5Sb3dzOiA0IH0pXG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOnJlcXVpcmVzQXRMZWFzdCcpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIGFuIGFycmF5IG9mIG51bWJlcnMgdXNpbmcgbWF4Um93cycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IFsxLjI1LCAyLjUsIDMuNV1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IG51bWJlcih2YWwsIHsgLi4ubnVtYmVyT3B0aW9ucywgaGFzTWFueTogdHJ1ZSwgbWF4Um93czogMiB9KVxuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpyZXF1aXJlc05vTW9yZVRoYW4nKVxuICAgIH0pXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbInQiLCJqZXN0IiwiZm4iLCJzdHJpbmciLCJvcHRpb25zIiwiZGF0YSIsInVuZGVmaW5lZCIsIm9wZXJhdGlvbiIsInNpYmxpbmdEYXRhIiwiZGVzY3JpYmUiLCJpdCIsInZhbCIsInJlc3VsdCIsInRleHQiLCJleHBlY3QiLCJ0b0JlIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJtaW5MZW5ndGgiLCJoYXNNYW55IiwiZmllbGQiLCJuYW1lIiwidHlwZSIsInRleHRhcmVhIiwicGFzc3dvcmRPcHRpb25zIiwicGFzc3dvcmQiLCJwb2ludE9wdGlvbnMiLCJwb2ludCIsIm5vdCIsInJlbGF0aW9uQ29sbGVjdGlvbiIsImZpZWxkcyIsInNsdWciLCJyZWxhdGlvbnNoaXBPcHRpb25zIiwiY29uZmlnIiwiY29sbGVjdGlvbnMiLCJwYXlsb2FkIiwicmVsYXRpb24iLCJyZWxhdGlvblRvIiwicmVsYXRpb25zaGlwIiwibWluT3B0aW9ucyIsIm1pblJvd3MiLCJhbGxvd2VkIiwidG9TdHJpY3RFcXVhbCIsIm1heE9wdGlvbnMiLCJtYXhSb3dzIiwic2VsZWN0T3B0aW9ucyIsIm9wdGlvbnNSZXF1aXJlZCIsImxhYmVsIiwidmFsdWUiLCJvcHRpb25zV2l0aEVtcHR5U3RyaW5nIiwic2VsZWN0IiwibnVtYmVyT3B0aW9ucyIsIm51bWJlciIsIm1pbiIsIm1heCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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