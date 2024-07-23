"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _errors = require("../../errors");
const _sanitize = require("./sanitize");
const dummyConfig = {
    collections: [],
    db: ()=>({})
};
describe('sanitizeFields', ()=>{
    it('should throw on missing type field', ()=>{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const fields = [
            {
                label: 'some-collection',
                name: 'Some Collection'
            }
        ];
        expect(()=>{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (0, _sanitize.sanitizeFields)({
                config: dummyConfig,
                fields,
                validRelationships: []
            });
        }).toThrow(_errors.MissingFieldType);
    });
    it('should throw on invalid field name', ()=>{
        const fields = [
            {
                label: 'some.collection',
                name: 'some.collection',
                type: 'text'
            }
        ];
        expect(()=>{
            (0, _sanitize.sanitizeFields)({
                config: dummyConfig,
                fields,
                validRelationships: []
            });
        }).toThrow(_errors.InvalidFieldName);
    });
    describe('auto-labeling', ()=>{
        it('should populate label if missing', ()=>{
            const fields = [
                {
                    name: 'someField',
                    type: 'text'
                }
            ];
            const sanitizedField = (0, _sanitize.sanitizeFields)({
                config: dummyConfig,
                fields,
                validRelationships: []
            })[0];
            expect(sanitizedField.name).toStrictEqual('someField');
            expect(sanitizedField.label).toStrictEqual('Some Field');
            expect(sanitizedField.type).toStrictEqual('text');
        });
        it('should allow auto-label override', ()=>{
            const fields = [
                {
                    label: 'Do not label',
                    name: 'someField',
                    type: 'text'
                }
            ];
            const sanitizedField = (0, _sanitize.sanitizeFields)({
                config: dummyConfig,
                fields,
                validRelationships: []
            })[0];
            expect(sanitizedField.name).toStrictEqual('someField');
            expect(sanitizedField.label).toStrictEqual('Do not label');
            expect(sanitizedField.type).toStrictEqual('text');
        });
        describe('opt-out', ()=>{
            it('should allow label opt-out', ()=>{
                const fields = [
                    {
                        label: false,
                        name: 'someField',
                        type: 'text'
                    }
                ];
                const sanitizedField = (0, _sanitize.sanitizeFields)({
                    config: dummyConfig,
                    fields,
                    validRelationships: []
                })[0];
                expect(sanitizedField.name).toStrictEqual('someField');
                expect(sanitizedField.label).toStrictEqual(false);
                expect(sanitizedField.type).toStrictEqual('text');
            });
            it('should allow label opt-out for arrays', ()=>{
                const arrayField = {
                    fields: [
                        {
                            name: 'itemName',
                            type: 'text'
                        }
                    ],
                    label: false,
                    name: 'items',
                    type: 'array'
                };
                const sanitizedField = (0, _sanitize.sanitizeFields)({
                    config: dummyConfig,
                    fields: [
                        arrayField
                    ],
                    validRelationships: []
                })[0];
                expect(sanitizedField.name).toStrictEqual('items');
                expect(sanitizedField.label).toStrictEqual(false);
                expect(sanitizedField.type).toStrictEqual('array');
                expect(sanitizedField.labels).toBeUndefined();
            });
            it('should allow label opt-out for blocks', ()=>{
                const fields = [
                    {
                        blocks: [
                            {
                                fields: [
                                    {
                                        name: 'testNumber',
                                        type: 'number'
                                    }
                                ],
                                slug: 'number'
                            }
                        ],
                        label: false,
                        name: 'noLabelBlock',
                        type: 'blocks'
                    }
                ];
                const sanitizedField = (0, _sanitize.sanitizeFields)({
                    config: dummyConfig,
                    fields,
                    validRelationships: []
                })[0];
                expect(sanitizedField.name).toStrictEqual('noLabelBlock');
                expect(sanitizedField.label).toStrictEqual(false);
                expect(sanitizedField.type).toStrictEqual('blocks');
                expect(sanitizedField.labels).toBeUndefined();
            });
        });
        it('should label arrays with plural and singular', ()=>{
            const fields = [
                {
                    fields: [
                        {
                            name: 'itemName',
                            type: 'text'
                        }
                    ],
                    name: 'items',
                    type: 'array'
                }
            ];
            const sanitizedField = (0, _sanitize.sanitizeFields)({
                config: dummyConfig,
                fields,
                validRelationships: []
            })[0];
            expect(sanitizedField.name).toStrictEqual('items');
            expect(sanitizedField.label).toStrictEqual('Items');
            expect(sanitizedField.type).toStrictEqual('array');
            expect(sanitizedField.labels).toMatchObject({
                plural: 'Items',
                singular: 'Item'
            });
        });
        it('should label blocks with plural and singular', ()=>{
            const fields = [
                {
                    blocks: [
                        {
                            fields: [
                                {
                                    name: 'testNumber',
                                    type: 'number'
                                }
                            ],
                            slug: 'number'
                        }
                    ],
                    name: 'specialBlock',
                    type: 'blocks'
                }
            ];
            const sanitizedField = (0, _sanitize.sanitizeFields)({
                config: dummyConfig,
                fields,
                validRelationships: []
            })[0];
            expect(sanitizedField.name).toStrictEqual('specialBlock');
            expect(sanitizedField.label).toStrictEqual('Special Block');
            expect(sanitizedField.type).toStrictEqual('blocks');
            expect(sanitizedField.labels).toMatchObject({
                plural: 'Special Blocks',
                singular: 'Special Block'
            });
            expect(sanitizedField.blocks[0].fields[0].label).toStrictEqual('Test Number');
        });
    });
    describe('relationships', ()=>{
        it('should not throw on valid relationship', ()=>{
            const validRelationships = [
                'some-collection'
            ];
            const fields = [
                {
                    label: 'my-relationship',
                    name: 'My Relationship',
                    relationTo: 'some-collection',
                    type: 'relationship'
                }
            ];
            expect(()=>{
                (0, _sanitize.sanitizeFields)({
                    config: dummyConfig,
                    fields,
                    validRelationships
                });
            }).not.toThrow();
        });
        it('should not throw on valid relationship - multiple', ()=>{
            const validRelationships = [
                'some-collection',
                'another-collection'
            ];
            const fields = [
                {
                    label: 'my-relationship',
                    name: 'My Relationship',
                    relationTo: [
                        'some-collection',
                        'another-collection'
                    ],
                    type: 'relationship'
                }
            ];
            expect(()=>{
                (0, _sanitize.sanitizeFields)({
                    config: dummyConfig,
                    fields,
                    validRelationships
                });
            }).not.toThrow();
        });
        it('should not throw on valid relationship inside blocks', ()=>{
            const validRelationships = [
                'some-collection'
            ];
            const relationshipBlock = {
                fields: [
                    {
                        label: 'my-relationship',
                        name: 'My Relationship',
                        relationTo: 'some-collection',
                        type: 'relationship'
                    }
                ],
                slug: 'relationshipBlock'
            };
            const fields = [
                {
                    blocks: [
                        relationshipBlock
                    ],
                    label: 'Layout Blocks',
                    name: 'layout',
                    type: 'blocks'
                }
            ];
            expect(()=>{
                (0, _sanitize.sanitizeFields)({
                    config: dummyConfig,
                    fields,
                    validRelationships
                });
            }).not.toThrow();
        });
        it('should throw on invalid relationship', ()=>{
            const validRelationships = [
                'some-collection'
            ];
            const fields = [
                {
                    label: 'my-relationship',
                    name: 'My Relationship',
                    relationTo: 'not-valid',
                    type: 'relationship'
                }
            ];
            expect(()=>{
                (0, _sanitize.sanitizeFields)({
                    config: dummyConfig,
                    fields,
                    validRelationships
                });
            }).toThrow(_errors.InvalidFieldRelationship);
        });
        it('should throw on invalid relationship - multiple', ()=>{
            const validRelationships = [
                'some-collection',
                'another-collection'
            ];
            const fields = [
                {
                    label: 'my-relationship',
                    name: 'My Relationship',
                    relationTo: [
                        'some-collection',
                        'not-valid'
                    ],
                    type: 'relationship'
                }
            ];
            expect(()=>{
                (0, _sanitize.sanitizeFields)({
                    config: dummyConfig,
                    fields,
                    validRelationships
                });
            }).toThrow(_errors.InvalidFieldRelationship);
        });
        it('should throw on invalid relationship inside blocks', ()=>{
            const validRelationships = [
                'some-collection'
            ];
            const relationshipBlock = {
                fields: [
                    {
                        label: 'my-relationship',
                        name: 'My Relationship',
                        relationTo: 'not-valid',
                        type: 'relationship'
                    }
                ],
                slug: 'relationshipBlock'
            };
            const fields = [
                {
                    blocks: [
                        relationshipBlock
                    ],
                    label: 'Layout Blocks',
                    name: 'layout',
                    type: 'blocks'
                }
            ];
            expect(()=>{
                (0, _sanitize.sanitizeFields)({
                    config: dummyConfig,
                    fields,
                    validRelationships
                });
            }).toThrow(_errors.InvalidFieldRelationship);
        });
        it('should defaultValue of checkbox to false if required and undefined', ()=>{
            const fields = [
                {
                    name: 'My Checkbox',
                    required: true,
                    type: 'checkbox'
                }
            ];
            const sanitizedField = (0, _sanitize.sanitizeFields)({
                config: dummyConfig,
                fields,
                validRelationships: []
            })[0];
            expect(sanitizedField.defaultValue).toStrictEqual(false);
        });
        it('should return empty field array if no fields', ()=>{
            const sanitizedFields = (0, _sanitize.sanitizeFields)({
                config: dummyConfig,
                fields: [],
                validRelationships: []
            });
            expect(sanitizedFields).toStrictEqual([]);
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWVsZHMvY29uZmlnL3Nhbml0aXplLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBBcnJheUZpZWxkLFxuICBCbG9jayxcbiAgQmxvY2tGaWVsZCxcbiAgQ2hlY2tib3hGaWVsZCxcbiAgRmllbGQsXG4gIE51bWJlckZpZWxkLFxuICBUZXh0RmllbGQsXG59IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5pbXBvcnQgeyBJbnZhbGlkRmllbGROYW1lLCBJbnZhbGlkRmllbGRSZWxhdGlvbnNoaXAsIE1pc3NpbmdGaWVsZFR5cGUgfSBmcm9tICcuLi8uLi9lcnJvcnMnXG5pbXBvcnQgeyBzYW5pdGl6ZUZpZWxkcyB9IGZyb20gJy4vc2FuaXRpemUnXG5pbXBvcnQgeyBEYXRhYmFzZUFkYXB0ZXIgfSBmcm9tICcuLi8uLidcblxuY29uc3QgZHVtbXlDb25maWc6IENvbmZpZyA9IHtcbiAgY29sbGVjdGlvbnM6IFtdLFxuICBkYjogKCkgPT4gKHt9KSBhcyBEYXRhYmFzZUFkYXB0ZXIsXG59XG5cbmRlc2NyaWJlKCdzYW5pdGl6ZUZpZWxkcycsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCB0aHJvdyBvbiBtaXNzaW5nIHR5cGUgZmllbGQnLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnc29tZS1jb2xsZWN0aW9uJyxcbiAgICAgICAgbmFtZTogJ1NvbWUgQ29sbGVjdGlvbicsXG4gICAgICB9LFxuICAgIF1cbiAgICBleHBlY3QoKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgc2FuaXRpemVGaWVsZHMoe1xuICAgICAgICBjb25maWc6IGR1bW15Q29uZmlnLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIHZhbGlkUmVsYXRpb25zaGlwczogW10sXG4gICAgICB9KVxuICAgIH0pLnRvVGhyb3coTWlzc2luZ0ZpZWxkVHlwZSlcbiAgfSlcbiAgaXQoJ3Nob3VsZCB0aHJvdyBvbiBpbnZhbGlkIGZpZWxkIG5hbWUnLCAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ3NvbWUuY29sbGVjdGlvbicsXG4gICAgICAgIG5hbWU6ICdzb21lLmNvbGxlY3Rpb24nLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB9LFxuICAgIF1cbiAgICBleHBlY3QoKCkgPT4ge1xuICAgICAgc2FuaXRpemVGaWVsZHMoe1xuICAgICAgICBjb25maWc6IGR1bW15Q29uZmlnLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIHZhbGlkUmVsYXRpb25zaGlwczogW10sXG4gICAgICB9KVxuICAgIH0pLnRvVGhyb3coSW52YWxpZEZpZWxkTmFtZSlcbiAgfSlcblxuICBkZXNjcmliZSgnYXV0by1sYWJlbGluZycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHBvcHVsYXRlIGxhYmVsIGlmIG1pc3NpbmcnLCAoKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnc29tZUZpZWxkJyxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgICBjb25zdCBzYW5pdGl6ZWRGaWVsZCA9IHNhbml0aXplRmllbGRzKHtcbiAgICAgICAgY29uZmlnOiBkdW1teUNvbmZpZyxcbiAgICAgICAgZmllbGRzLFxuICAgICAgICB2YWxpZFJlbGF0aW9uc2hpcHM6IFtdLFxuICAgICAgfSlbMF0gYXMgVGV4dEZpZWxkXG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubmFtZSkudG9TdHJpY3RFcXVhbCgnc29tZUZpZWxkJylcbiAgICAgIGV4cGVjdChzYW5pdGl6ZWRGaWVsZC5sYWJlbCkudG9TdHJpY3RFcXVhbCgnU29tZSBGaWVsZCcpXG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQudHlwZSkudG9TdHJpY3RFcXVhbCgndGV4dCcpXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIGFsbG93IGF1dG8tbGFiZWwgb3ZlcnJpZGUnLCAoKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0RvIG5vdCBsYWJlbCcsXG4gICAgICAgICAgbmFtZTogJ3NvbWVGaWVsZCcsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgICAgY29uc3Qgc2FuaXRpemVkRmllbGQgPSBzYW5pdGl6ZUZpZWxkcyh7XG4gICAgICAgIGNvbmZpZzogZHVtbXlDb25maWcsXG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgdmFsaWRSZWxhdGlvbnNoaXBzOiBbXSxcbiAgICAgIH0pWzBdIGFzIFRleHRGaWVsZFxuICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLm5hbWUpLnRvU3RyaWN0RXF1YWwoJ3NvbWVGaWVsZCcpXG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubGFiZWwpLnRvU3RyaWN0RXF1YWwoJ0RvIG5vdCBsYWJlbCcpXG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQudHlwZSkudG9TdHJpY3RFcXVhbCgndGV4dCcpXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCdvcHQtb3V0JywgKCkgPT4ge1xuICAgICAgaXQoJ3Nob3VsZCBhbGxvdyBsYWJlbCBvcHQtb3V0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbmFtZTogJ3NvbWVGaWVsZCcsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgICBjb25zdCBzYW5pdGl6ZWRGaWVsZCA9IHNhbml0aXplRmllbGRzKHtcbiAgICAgICAgICBjb25maWc6IGR1bW15Q29uZmlnLFxuICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICB2YWxpZFJlbGF0aW9uc2hpcHM6IFtdLFxuICAgICAgICB9KVswXSBhcyBUZXh0RmllbGRcbiAgICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLm5hbWUpLnRvU3RyaWN0RXF1YWwoJ3NvbWVGaWVsZCcpXG4gICAgICAgIGV4cGVjdChzYW5pdGl6ZWRGaWVsZC5sYWJlbCkudG9TdHJpY3RFcXVhbChmYWxzZSlcbiAgICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLnR5cGUpLnRvU3RyaWN0RXF1YWwoJ3RleHQnKVxuICAgICAgfSlcblxuICAgICAgaXQoJ3Nob3VsZCBhbGxvdyBsYWJlbCBvcHQtb3V0IGZvciBhcnJheXMnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycmF5RmllbGQ6IEFycmF5RmllbGQgPSB7XG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpdGVtTmFtZScsXG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBsYWJlbDogZmFsc2UsXG4gICAgICAgICAgbmFtZTogJ2l0ZW1zJyxcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNhbml0aXplZEZpZWxkID0gc2FuaXRpemVGaWVsZHMoe1xuICAgICAgICAgIGNvbmZpZzogZHVtbXlDb25maWcsXG4gICAgICAgICAgZmllbGRzOiBbYXJyYXlGaWVsZF0sXG4gICAgICAgICAgdmFsaWRSZWxhdGlvbnNoaXBzOiBbXSxcbiAgICAgICAgfSlbMF0gYXMgQXJyYXlGaWVsZFxuICAgICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubmFtZSkudG9TdHJpY3RFcXVhbCgnaXRlbXMnKVxuICAgICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubGFiZWwpLnRvU3RyaWN0RXF1YWwoZmFsc2UpXG4gICAgICAgIGV4cGVjdChzYW5pdGl6ZWRGaWVsZC50eXBlKS50b1N0cmljdEVxdWFsKCdhcnJheScpXG4gICAgICAgIGV4cGVjdChzYW5pdGl6ZWRGaWVsZC5sYWJlbHMpLnRvQmVVbmRlZmluZWQoKVxuICAgICAgfSlcbiAgICAgIGl0KCdzaG91bGQgYWxsb3cgbGFiZWwgb3B0LW91dCBmb3IgYmxvY2tzJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmxvY2tzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Rlc3ROdW1iZXInLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzbHVnOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBuYW1lOiAnbm9MYWJlbEJsb2NrJyxcbiAgICAgICAgICAgIHR5cGU6ICdibG9ja3MnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgICAgY29uc3Qgc2FuaXRpemVkRmllbGQgPSBzYW5pdGl6ZUZpZWxkcyh7XG4gICAgICAgICAgY29uZmlnOiBkdW1teUNvbmZpZyxcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgdmFsaWRSZWxhdGlvbnNoaXBzOiBbXSxcbiAgICAgICAgfSlbMF0gYXMgQmxvY2tGaWVsZFxuICAgICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubmFtZSkudG9TdHJpY3RFcXVhbCgnbm9MYWJlbEJsb2NrJylcbiAgICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLmxhYmVsKS50b1N0cmljdEVxdWFsKGZhbHNlKVxuICAgICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQudHlwZSkudG9TdHJpY3RFcXVhbCgnYmxvY2tzJylcbiAgICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLmxhYmVscykudG9CZVVuZGVmaW5lZCgpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIGxhYmVsIGFycmF5cyB3aXRoIHBsdXJhbCBhbmQgc2luZ3VsYXInLCAoKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2l0ZW1OYW1lJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIG5hbWU6ICdpdGVtcycsXG4gICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICAgIGNvbnN0IHNhbml0aXplZEZpZWxkID0gc2FuaXRpemVGaWVsZHMoe1xuICAgICAgICBjb25maWc6IGR1bW15Q29uZmlnLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIHZhbGlkUmVsYXRpb25zaGlwczogW10sXG4gICAgICB9KVswXSBhcyBBcnJheUZpZWxkXG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubmFtZSkudG9TdHJpY3RFcXVhbCgnaXRlbXMnKVxuICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLmxhYmVsKS50b1N0cmljdEVxdWFsKCdJdGVtcycpXG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQudHlwZSkudG9TdHJpY3RFcXVhbCgnYXJyYXknKVxuICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLmxhYmVscykudG9NYXRjaE9iamVjdCh7IHBsdXJhbDogJ0l0ZW1zJywgc2luZ3VsYXI6ICdJdGVtJyB9KVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIGxhYmVsIGJsb2NrcyB3aXRoIHBsdXJhbCBhbmQgc2luZ3VsYXInLCAoKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBibG9ja3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmllbGRzOiBbeyBuYW1lOiAndGVzdE51bWJlcicsIHR5cGU6ICdudW1iZXInIH1dLFxuICAgICAgICAgICAgICBzbHVnOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBuYW1lOiAnc3BlY2lhbEJsb2NrJyxcbiAgICAgICAgICB0eXBlOiAnYmxvY2tzJyxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICAgIGNvbnN0IHNhbml0aXplZEZpZWxkID0gc2FuaXRpemVGaWVsZHMoe1xuICAgICAgICBjb25maWc6IGR1bW15Q29uZmlnLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIHZhbGlkUmVsYXRpb25zaGlwczogW10sXG4gICAgICB9KVswXSBhcyBCbG9ja0ZpZWxkXG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubmFtZSkudG9TdHJpY3RFcXVhbCgnc3BlY2lhbEJsb2NrJylcbiAgICAgIGV4cGVjdChzYW5pdGl6ZWRGaWVsZC5sYWJlbCkudG9TdHJpY3RFcXVhbCgnU3BlY2lhbCBCbG9jaycpXG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQudHlwZSkudG9TdHJpY3RFcXVhbCgnYmxvY2tzJylcbiAgICAgIGV4cGVjdChzYW5pdGl6ZWRGaWVsZC5sYWJlbHMpLnRvTWF0Y2hPYmplY3Qoe1xuICAgICAgICBwbHVyYWw6ICdTcGVjaWFsIEJsb2NrcycsXG4gICAgICAgIHNpbmd1bGFyOiAnU3BlY2lhbCBCbG9jaycsXG4gICAgICB9KVxuICAgICAgZXhwZWN0KChzYW5pdGl6ZWRGaWVsZC5ibG9ja3NbMF0uZmllbGRzWzBdIGFzIE51bWJlckZpZWxkKS5sYWJlbCkudG9TdHJpY3RFcXVhbCgnVGVzdCBOdW1iZXInKVxuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ3JlbGF0aW9uc2hpcHMnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBub3QgdGhyb3cgb24gdmFsaWQgcmVsYXRpb25zaGlwJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRSZWxhdGlvbnNoaXBzID0gWydzb21lLWNvbGxlY3Rpb24nXVxuICAgICAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdteS1yZWxhdGlvbnNoaXAnLFxuICAgICAgICAgIG5hbWU6ICdNeSBSZWxhdGlvbnNoaXAnLFxuICAgICAgICAgIHJlbGF0aW9uVG86ICdzb21lLWNvbGxlY3Rpb24nLFxuICAgICAgICAgIHR5cGU6ICdyZWxhdGlvbnNoaXAnLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgICAgZXhwZWN0KCgpID0+IHtcbiAgICAgICAgc2FuaXRpemVGaWVsZHMoeyBjb25maWc6IGR1bW15Q29uZmlnLCBmaWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyB9KVxuICAgICAgfSkubm90LnRvVGhyb3coKVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIG5vdCB0aHJvdyBvbiB2YWxpZCByZWxhdGlvbnNoaXAgLSBtdWx0aXBsZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkUmVsYXRpb25zaGlwcyA9IFsnc29tZS1jb2xsZWN0aW9uJywgJ2Fub3RoZXItY29sbGVjdGlvbiddXG4gICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ215LXJlbGF0aW9uc2hpcCcsXG4gICAgICAgICAgbmFtZTogJ015IFJlbGF0aW9uc2hpcCcsXG4gICAgICAgICAgcmVsYXRpb25UbzogWydzb21lLWNvbGxlY3Rpb24nLCAnYW5vdGhlci1jb2xsZWN0aW9uJ10sXG4gICAgICAgICAgdHlwZTogJ3JlbGF0aW9uc2hpcCcsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgICBleHBlY3QoKCkgPT4ge1xuICAgICAgICBzYW5pdGl6ZUZpZWxkcyh7IGNvbmZpZzogZHVtbXlDb25maWcsIGZpZWxkcywgdmFsaWRSZWxhdGlvbnNoaXBzIH0pXG4gICAgICB9KS5ub3QudG9UaHJvdygpXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgbm90IHRocm93IG9uIHZhbGlkIHJlbGF0aW9uc2hpcCBpbnNpZGUgYmxvY2tzJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRSZWxhdGlvbnNoaXBzID0gWydzb21lLWNvbGxlY3Rpb24nXVxuICAgICAgY29uc3QgcmVsYXRpb25zaGlwQmxvY2s6IEJsb2NrID0ge1xuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ215LXJlbGF0aW9uc2hpcCcsXG4gICAgICAgICAgICBuYW1lOiAnTXkgUmVsYXRpb25zaGlwJyxcbiAgICAgICAgICAgIHJlbGF0aW9uVG86ICdzb21lLWNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgdHlwZTogJ3JlbGF0aW9uc2hpcCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2x1ZzogJ3JlbGF0aW9uc2hpcEJsb2NrJyxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGJsb2NrczogW3JlbGF0aW9uc2hpcEJsb2NrXSxcbiAgICAgICAgICBsYWJlbDogJ0xheW91dCBCbG9ja3MnLFxuICAgICAgICAgIG5hbWU6ICdsYXlvdXQnLFxuICAgICAgICAgIHR5cGU6ICdibG9ja3MnLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgICAgZXhwZWN0KCgpID0+IHtcbiAgICAgICAgc2FuaXRpemVGaWVsZHMoeyBjb25maWc6IGR1bW15Q29uZmlnLCBmaWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyB9KVxuICAgICAgfSkubm90LnRvVGhyb3coKVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIHRocm93IG9uIGludmFsaWQgcmVsYXRpb25zaGlwJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRSZWxhdGlvbnNoaXBzID0gWydzb21lLWNvbGxlY3Rpb24nXVxuICAgICAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdteS1yZWxhdGlvbnNoaXAnLFxuICAgICAgICAgIG5hbWU6ICdNeSBSZWxhdGlvbnNoaXAnLFxuICAgICAgICAgIHJlbGF0aW9uVG86ICdub3QtdmFsaWQnLFxuICAgICAgICAgIHR5cGU6ICdyZWxhdGlvbnNoaXAnLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgICAgZXhwZWN0KCgpID0+IHtcbiAgICAgICAgc2FuaXRpemVGaWVsZHMoeyBjb25maWc6IGR1bW15Q29uZmlnLCBmaWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyB9KVxuICAgICAgfSkudG9UaHJvdyhJbnZhbGlkRmllbGRSZWxhdGlvbnNoaXApXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgdGhyb3cgb24gaW52YWxpZCByZWxhdGlvbnNoaXAgLSBtdWx0aXBsZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkUmVsYXRpb25zaGlwcyA9IFsnc29tZS1jb2xsZWN0aW9uJywgJ2Fub3RoZXItY29sbGVjdGlvbiddXG4gICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ215LXJlbGF0aW9uc2hpcCcsXG4gICAgICAgICAgbmFtZTogJ015IFJlbGF0aW9uc2hpcCcsXG4gICAgICAgICAgcmVsYXRpb25UbzogWydzb21lLWNvbGxlY3Rpb24nLCAnbm90LXZhbGlkJ10sXG4gICAgICAgICAgdHlwZTogJ3JlbGF0aW9uc2hpcCcsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgICBleHBlY3QoKCkgPT4ge1xuICAgICAgICBzYW5pdGl6ZUZpZWxkcyh7IGNvbmZpZzogZHVtbXlDb25maWcsIGZpZWxkcywgdmFsaWRSZWxhdGlvbnNoaXBzIH0pXG4gICAgICB9KS50b1Rocm93KEludmFsaWRGaWVsZFJlbGF0aW9uc2hpcClcbiAgICB9KVxuXG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBvbiBpbnZhbGlkIHJlbGF0aW9uc2hpcCBpbnNpZGUgYmxvY2tzJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRSZWxhdGlvbnNoaXBzID0gWydzb21lLWNvbGxlY3Rpb24nXVxuICAgICAgY29uc3QgcmVsYXRpb25zaGlwQmxvY2s6IEJsb2NrID0ge1xuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ215LXJlbGF0aW9uc2hpcCcsXG4gICAgICAgICAgICBuYW1lOiAnTXkgUmVsYXRpb25zaGlwJyxcbiAgICAgICAgICAgIHJlbGF0aW9uVG86ICdub3QtdmFsaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3JlbGF0aW9uc2hpcCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2x1ZzogJ3JlbGF0aW9uc2hpcEJsb2NrJyxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGJsb2NrczogW3JlbGF0aW9uc2hpcEJsb2NrXSxcbiAgICAgICAgICBsYWJlbDogJ0xheW91dCBCbG9ja3MnLFxuICAgICAgICAgIG5hbWU6ICdsYXlvdXQnLFxuICAgICAgICAgIHR5cGU6ICdibG9ja3MnLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgICAgZXhwZWN0KCgpID0+IHtcbiAgICAgICAgc2FuaXRpemVGaWVsZHMoeyBjb25maWc6IGR1bW15Q29uZmlnLCBmaWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyB9KVxuICAgICAgfSkudG9UaHJvdyhJbnZhbGlkRmllbGRSZWxhdGlvbnNoaXApXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgZGVmYXVsdFZhbHVlIG9mIGNoZWNrYm94IHRvIGZhbHNlIGlmIHJlcXVpcmVkIGFuZCB1bmRlZmluZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnTXkgQ2hlY2tib3gnLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIH0sXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHNhbml0aXplZEZpZWxkID0gc2FuaXRpemVGaWVsZHMoe1xuICAgICAgICBjb25maWc6IGR1bW15Q29uZmlnLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIHZhbGlkUmVsYXRpb25zaGlwczogW10sXG4gICAgICB9KVswXSBhcyBDaGVja2JveEZpZWxkXG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQuZGVmYXVsdFZhbHVlKS50b1N0cmljdEVxdWFsKGZhbHNlKVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBlbXB0eSBmaWVsZCBhcnJheSBpZiBubyBmaWVsZHMnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRGaWVsZHMgPSBzYW5pdGl6ZUZpZWxkcyh7XG4gICAgICAgIGNvbmZpZzogZHVtbXlDb25maWcsXG4gICAgICAgIGZpZWxkczogW10sXG4gICAgICAgIHZhbGlkUmVsYXRpb25zaGlwczogW10sXG4gICAgICB9KVxuICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkcykudG9TdHJpY3RFcXVhbChbXSlcbiAgICB9KVxuICB9KVxufSlcbiJdLCJuYW1lcyI6WyJkdW1teUNvbmZpZyIsImNvbGxlY3Rpb25zIiwiZGIiLCJkZXNjcmliZSIsIml0IiwiZmllbGRzIiwibGFiZWwiLCJuYW1lIiwiZXhwZWN0Iiwic2FuaXRpemVGaWVsZHMiLCJjb25maWciLCJ2YWxpZFJlbGF0aW9uc2hpcHMiLCJ0b1Rocm93IiwiTWlzc2luZ0ZpZWxkVHlwZSIsInR5cGUiLCJJbnZhbGlkRmllbGROYW1lIiwic2FuaXRpemVkRmllbGQiLCJ0b1N0cmljdEVxdWFsIiwiYXJyYXlGaWVsZCIsImxhYmVscyIsInRvQmVVbmRlZmluZWQiLCJibG9ja3MiLCJzbHVnIiwidG9NYXRjaE9iamVjdCIsInBsdXJhbCIsInNpbmd1bGFyIiwicmVsYXRpb25UbyIsIm5vdCIsInJlbGF0aW9uc2hpcEJsb2NrIiwiSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwIiwicmVxdWlyZWQiLCJkZWZhdWx0VmFsdWUiLCJzYW5pdGl6ZWRGaWVsZHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7O3dCQVU2RTswQkFDOUM7QUFHL0IsTUFBTUEsY0FBc0I7SUFDMUJDLGFB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