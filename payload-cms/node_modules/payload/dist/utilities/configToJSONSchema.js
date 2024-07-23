"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    configToJSONSchema: function() {
        return configToJSONSchema;
    },
    entityToJSONSchema: function() {
        return entityToJSONSchema;
    },
    fieldsToJSONSchema: function() {
        return fieldsToJSONSchema;
    },
    withNullableJSONSchemaType: function() {
        return withNullableJSONSchemaType;
    }
});
const _pluralize = require("pluralize");
const _types = require("../fields/config/types");
const _deepCopyObject = require("./deepCopyObject");
const _formatLabels = require("./formatLabels");
const _getCollectionIDFieldTypes = require("./getCollectionIDFieldTypes");
const fieldIsRequired = (field)=>{
    const isConditional = Boolean(field?.admin && field?.admin?.condition);
    if (isConditional) return false;
    const isMarkedRequired = 'required' in field && field.required === true;
    if ((0, _types.fieldAffectsData)(field) && isMarkedRequired) return true;
    // if any subfields are required, this field is required
    if ('fields' in field && field.type !== 'array') {
        return field.fields.some((subField)=>fieldIsRequired(subField));
    }
    // if any tab subfields have required fields, this field is required
    if (field.type === 'tabs') {
        return field.tabs.some((tab)=>{
            if ('name' in tab) {
                return tab.fields.some((subField)=>fieldIsRequired(subField));
            }
            return false;
        });
    }
    return false;
};
function buildOptionEnums(options) {
    return options.map((option)=>{
        if (typeof option === 'object' && 'value' in option) {
            return option.value;
        }
        return option;
    });
}
function generateEntitySchemas(entities) {
    const properties = [
        ...entities
    ].reduce((acc, { slug })=>{
        acc[slug] = {
            $ref: `#/definitions/${slug}`
        };
        return acc;
    }, {});
    return {
        type: 'object',
        additionalProperties: false,
        properties,
        required: Object.keys(properties)
    };
}
function withNullableJSONSchemaType(fieldType, isRequired) {
    const fieldTypes = [
        fieldType
    ];
    if (isRequired) return fieldType;
    fieldTypes.push('null');
    return fieldTypes;
}
function fieldsToJSONSchema(/**
   * Used for relationship fields, to determine whether to use a string or number type for the ID.
   * While there is a default ID field type set by the db adapter, they can differ on a collection-level
   * if they have custom ID fields.
   */ collectionIDFieldTypes, fields, /**
   * Allows you to define new top-level interfaces that can be re-used in the output schema.
   */ interfaceNameDefinitions, payload, config) {
    const requiredFieldNames = new Set();
    return {
        properties: Object.fromEntries(fields.reduce((fieldSchemas, field)=>{
            const isRequired = (0, _types.fieldAffectsData)(field) && fieldIsRequired(field);
            if (isRequired) requiredFieldNames.add(field.name);
            let fieldSchema;
            switch(field.type){
                case 'text':
                    if (field.hasMany === true) {
                        fieldSchema = {
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: {
                                type: 'string'
                            }
                        };
                    } else {
                        fieldSchema = {
                            type: withNullableJSONSchemaType('string', isRequired)
                        };
                    }
                    break;
                case 'textarea':
                case 'code':
                case 'email':
                case 'date':
                    {
                        fieldSchema = {
                            type: withNullableJSONSchemaType('string', isRequired)
                        };
                        break;
                    }
                case 'number':
                    {
                        if (field.hasMany === true) {
                            fieldSchema = {
                                type: withNullableJSONSchemaType('array', isRequired),
                                items: {
                                    type: 'number'
                                }
                            };
                        } else {
                            fieldSchema = {
                                type: withNullableJSONSchemaType('number', isRequired)
                            };
                        }
                        break;
                    }
                case 'checkbox':
                    {
                        fieldSchema = {
                            type: withNullableJSONSchemaType('boolean', isRequired)
                        };
                        break;
                    }
                case 'json':
                    {
                        fieldSchema = {
                            type: [
                                'object',
                                'array',
                                'string',
                                'number',
                                'boolean',
                                'null'
                            ]
                        };
                        break;
                    }
                case 'richText':
                    {
                        if (field.editor.outputSchema) {
                            fieldSchema = field.editor.outputSchema({
                                collectionIDFieldTypes,
                                config: config || payload?.config,
                                field,
                                interfaceNameDefinitions,
                                isRequired,
                                payload
                            });
                        } else {
                            // Maintain backwards compatibility with existing rich text editors
                            fieldSchema = {
                                type: withNullableJSONSchemaType('array', isRequired),
                                items: {
                                    type: 'object'
                                }
                            };
                        }
                        break;
                    }
                case 'radio':
                    {
                        fieldSchema = {
                            type: withNullableJSONSchemaType('string', isRequired),
                            enum: buildOptionEnums(field.options)
                        };
                        break;
                    }
                case 'select':
                    {
                        const optionEnums = buildOptionEnums(field.options);
                        if (field.hasMany) {
                            fieldSchema = {
                                type: withNullableJSONSchemaType('array', isRequired),
                                items: {
                                    type: 'string',
                                    enum: optionEnums
                                }
                            };
                        } else {
                            fieldSchema = {
                                type: withNullableJSONSchemaType('string', isRequired),
                                enum: optionEnums
                            };
                        }
                        break;
                    }
                case 'point':
                    {
                        fieldSchema = {
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: [
                                {
                                    type: 'number'
                                },
                                {
                                    type: 'number'
                                }
                            ],
                            maxItems: 2,
                            minItems: 2
                        };
                        break;
                    }
                case 'relationship':
                    {
                        if (Array.isArray(field.relationTo)) {
                            if (field.hasMany) {
                                fieldSchema = {
                                    type: withNullableJSONSchemaType('array', isRequired),
                                    items: {
                                        oneOf: field.relationTo.map((relation)=>{
                                            return {
                                                type: 'object',
                                                additionalProperties: false,
                                                properties: {
                                                    relationTo: {
                                                        const: relation
                                                    },
                                                    value: {
                                                        oneOf: [
                                                            {
                                                                type: collectionIDFieldTypes[relation]
                                                            },
                                                            {
                                                                $ref: `#/definitions/${relation}`
                                                            }
                                                        ]
                                                    }
                                                },
                                                required: [
                                                    'value',
                                                    'relationTo'
                                                ]
                                            };
                                        })
                                    }
                                };
                            } else {
                                fieldSchema = {
                                    oneOf: field.relationTo.map((relation)=>{
                                        return {
                                            type: withNullableJSONSchemaType('object', isRequired),
                                            additionalProperties: false,
                                            properties: {
                                                relationTo: {
                                                    const: relation
                                                },
                                                value: {
                                                    oneOf: [
                                                        {
                                                            type: collectionIDFieldTypes[relation]
                                                        },
                                                        {
                                                            $ref: `#/definitions/${relation}`
                                                        }
                                                    ]
                                                }
                                            },
                                            required: [
                                                'value',
                                                'relationTo'
                                            ]
                                        };
                                    })
                                };
                            }
                        } else if (field.hasMany) {
                            fieldSchema = {
                                type: withNullableJSONSchemaType('array', isRequired),
                                items: {
                                    oneOf: [
                                        {
                                            type: collectionIDFieldTypes[field.relationTo]
                                        },
                                        {
                                            $ref: `#/definitions/${field.relationTo}`
                                        }
                                    ]
                                }
                            };
                        } else {
                            fieldSchema = {
                                oneOf: [
                                    {
                                        type: withNullableJSONSchemaType(collectionIDFieldTypes[field.relationTo], isRequired)
                                    },
                                    {
                                        $ref: `#/definitions/${field.relationTo}`
                                    }
                                ]
                            };
                        }
                        break;
                    }
                case 'upload':
                    {
                        fieldSchema = {
                            oneOf: [
                                {
                                    type: collectionIDFieldTypes[field.relationTo]
                                },
                                {
                                    $ref: `#/definitions/${field.relationTo}`
                                }
                            ]
                        };
                        if (!isRequired) fieldSchema.oneOf.push({
                            type: 'null'
                        });
                        break;
                    }
                case 'blocks':
                    {
                        fieldSchema = {
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: {
                                oneOf: field.blocks.map((block)=>{
                                    const blockFieldSchemas = fieldsToJSONSchema(collectionIDFieldTypes, block.fields, interfaceNameDefinitions, payload, config);
                                    const blockSchema = {
                                        type: 'object',
                                        additionalProperties: false,
                                        properties: {
                                            ...blockFieldSchemas.properties,
                                            blockType: {
                                                const: block.slug
                                            }
                                        },
                                        required: [
                                            'blockType',
                                            ...blockFieldSchemas.required
                                        ]
                                    };
                                    if (block.interfaceName) {
                                        interfaceNameDefinitions.set(block.interfaceName, blockSchema);
                                        return {
                                            $ref: `#/definitions/${block.interfaceName}`
                                        };
                                    }
                                    return blockSchema;
                                })
                            }
                        };
                        break;
                    }
                case 'array':
                    {
                        fieldSchema = {
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: {
                                type: 'object',
                                additionalProperties: false,
                                ...fieldsToJSONSchema(collectionIDFieldTypes, field.fields, interfaceNameDefinitions, payload, config)
                            }
                        };
                        if (field.interfaceName) {
                            interfaceNameDefinitions.set(field.interfaceName, fieldSchema);
                            fieldSchema = {
                                $ref: `#/definitions/${field.interfaceName}`
                            };
                        }
                        break;
                    }
                case 'row':
                case 'collapsible':
                    {
                        const childSchema = fieldsToJSONSchema(collectionIDFieldTypes, field.fields, interfaceNameDefinitions, payload, config);
                        Object.entries(childSchema.properties).forEach(([propName, propSchema])=>{
                            fieldSchemas.set(propName, propSchema);
                        });
                        childSchema.required.forEach((propName)=>{
                            requiredFieldNames.add(propName);
                        });
                        break;
                    }
                case 'tabs':
                    {
                        field.tabs.forEach((tab)=>{
                            const childSchema = fieldsToJSONSchema(collectionIDFieldTypes, tab.fields, interfaceNameDefinitions, payload, config);
                            if ((0, _types.tabHasName)(tab)) {
                                // could have interface
                                fieldSchemas.set(tab.name, {
                                    type: 'object',
                                    additionalProperties: false,
                                    ...childSchema
                                });
                                requiredFieldNames.add(tab.name);
                            } else {
                                Object.entries(childSchema.properties).forEach(([propName, propSchema])=>{
                                    fieldSchemas.set(propName, propSchema);
                                });
                                childSchema.required.forEach((propName)=>{
                                    requiredFieldNames.add(propName);
                                });
                            }
                        });
                        break;
                    }
                case 'group':
                    {
                        fieldSchema = {
                            type: 'object',
                            additionalProperties: false,
                            ...fieldsToJSONSchema(collectionIDFieldTypes, field.fields, interfaceNameDefinitions, payload, config)
                        };
                        if (field.interfaceName) {
                            interfaceNameDefinitions.set(field.interfaceName, fieldSchema);
                            fieldSchema = {
                                $ref: `#/definitions/${field.interfaceName}`
                            };
                        }
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            if (fieldSchema && (0, _types.fieldAffectsData)(field)) {
                fieldSchemas.set(field.name, fieldSchema);
            }
            return fieldSchemas;
        }, new Map())),
        required: Array.from(requiredFieldNames)
    };
}
function entityToJSONSchema(config, incomingEntity, interfaceNameDefinitions, defaultIDType, payload) {
    const entity = (0, _deepCopyObject.deepCopyObject)(incomingEntity);
    const title = entity.typescript?.interface ? entity.typescript.interface : (0, _pluralize.singular)((0, _formatLabels.toWords)(entity.slug, true));
    const idField = {
        name: 'id',
        type: defaultIDType,
        required: true
    };
    const customIdField = entity.fields.find((field)=>(0, _types.fieldAffectsData)(field) && field.name === 'id');
    if (customIdField && customIdField.type !== 'group' && customIdField.type !== 'tab') {
        customIdField.required = true;
    } else {
        entity.fields.unshift(idField);
    }
    // mark timestamp fields required
    if ('timestamps' in entity && entity.timestamps !== false) {
        entity.fields = entity.fields.map((field)=>{
            if ((0, _types.fieldAffectsData)(field) && (field.name === 'createdAt' || field.name === 'updatedAt')) {
                return {
                    ...field,
                    required: true
                };
            }
            return field;
        });
    }
    if ('auth' in entity && entity.auth && !entity.auth?.disableLocalStrategy) {
        entity.fields.push({
            name: 'password',
            type: 'text'
        });
    }
    //  Used for relationship fields, to determine whether to use a string or number type for the ID.
    const collectionIDFieldTypes = (0, _getCollectionIDFieldTypes.getCollectionIDFieldTypes)({
        config,
        defaultIDType
    });
    return {
        type: 'object',
        additionalProperties: false,
        title,
        ...fieldsToJSONSchema(collectionIDFieldTypes, entity.fields, interfaceNameDefinitions, payload, config)
    };
}
function configToJSONSchema(config, defaultIDType, payload) {
    // a mutable Map to store custom top-level `interfaceName` types. Fields with an `interfaceName` property will be moved to the top-level definitions here
    const interfaceNameDefinitions = new Map();
    // Collections and Globals have to be moved to the top-level definitions as well. Reason: The top-level type will be the `Config` type - we don't want all collection and global
    // types to be inlined inside the `Config` type
    const entityDefinitions = [
        ...config.globals,
        ...config.collections
    ].reduce((acc, entity)=>{
        acc[entity.slug] = entityToJSONSchema(config, entity, interfaceNameDefinitions, defaultIDType, payload);
        return acc;
    }, {});
    return {
        additionalProperties: false,
        definitions: {
            ...entityDefinitions,
            ...Object.fromEntries(interfaceNameDefinitions)
        },
        // These properties here will be very simple, as all the complexity is in the definitions. These are just the properties for the top-level `Config` type
        type: 'object',
        properties: {
            collections: generateEntitySchemas(config.collections || []),
            globals: generateEntitySchemas(config.globals || [])
        },
        required: [
            'collections',
            'globals'
        ],
        title: 'Config'
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlnVG9KU09OU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSlNPTlNjaGVtYTQsIEpTT05TY2hlbWE0VHlwZU5hbWUgfSBmcm9tICdqc29uLXNjaGVtYSdcblxuaW1wb3J0IHsgc2luZ3VsYXIgfSBmcm9tICdwbHVyYWxpemUnXG5cbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vZXhwb3J0cy9jb25maWcnXG5pbXBvcnQgdHlwZSB7IEZpZWxkLCBGaWVsZEFmZmVjdGluZ0RhdGEsIE9wdGlvbiB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2dsb2JhbHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vcGF5bG9hZCdcblxuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSwgdGFiSGFzTmFtZSB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgeyBkZWVwQ29weU9iamVjdCB9IGZyb20gJy4vZGVlcENvcHlPYmplY3QnXG5pbXBvcnQgeyB0b1dvcmRzIH0gZnJvbSAnLi9mb3JtYXRMYWJlbHMnXG5pbXBvcnQgeyBnZXRDb2xsZWN0aW9uSURGaWVsZFR5cGVzIH0gZnJvbSAnLi9nZXRDb2xsZWN0aW9uSURGaWVsZFR5cGVzJ1xuXG5jb25zdCBmaWVsZElzUmVxdWlyZWQgPSAoZmllbGQ6IEZpZWxkKSA9PiB7XG4gIGNvbnN0IGlzQ29uZGl0aW9uYWwgPSBCb29sZWFuKGZpZWxkPy5hZG1pbiAmJiBmaWVsZD8uYWRtaW4/LmNvbmRpdGlvbilcbiAgaWYgKGlzQ29uZGl0aW9uYWwpIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IGlzTWFya2VkUmVxdWlyZWQgPSAncmVxdWlyZWQnIGluIGZpZWxkICYmIGZpZWxkLnJlcXVpcmVkID09PSB0cnVlXG4gIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBpc01hcmtlZFJlcXVpcmVkKSByZXR1cm4gdHJ1ZVxuXG4gIC8vIGlmIGFueSBzdWJmaWVsZHMgYXJlIHJlcXVpcmVkLCB0aGlzIGZpZWxkIGlzIHJlcXVpcmVkXG4gIGlmICgnZmllbGRzJyBpbiBmaWVsZCAmJiBmaWVsZC50eXBlICE9PSAnYXJyYXknKSB7XG4gICAgcmV0dXJuIGZpZWxkLmZpZWxkcy5zb21lKChzdWJGaWVsZCkgPT4gZmllbGRJc1JlcXVpcmVkKHN1YkZpZWxkKSlcbiAgfVxuXG4gIC8vIGlmIGFueSB0YWIgc3ViZmllbGRzIGhhdmUgcmVxdWlyZWQgZmllbGRzLCB0aGlzIGZpZWxkIGlzIHJlcXVpcmVkXG4gIGlmIChmaWVsZC50eXBlID09PSAndGFicycpIHtcbiAgICByZXR1cm4gZmllbGQudGFicy5zb21lKCh0YWIpID0+IHtcbiAgICAgIGlmICgnbmFtZScgaW4gdGFiKSB7XG4gICAgICAgIHJldHVybiB0YWIuZmllbGRzLnNvbWUoKHN1YkZpZWxkKSA9PiBmaWVsZElzUmVxdWlyZWQoc3ViRmllbGQpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBidWlsZE9wdGlvbkVudW1zKG9wdGlvbnM6IE9wdGlvbltdKTogc3RyaW5nW10ge1xuICByZXR1cm4gb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiAndmFsdWUnIGluIG9wdGlvbikge1xuICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVFbnRpdHlTY2hlbWFzKFxuICBlbnRpdGllczogKFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfCBTYW5pdGl6ZWRHbG9iYWxDb25maWcpW10sXG4pOiBKU09OU2NoZW1hNCB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSBbLi4uZW50aXRpZXNdLnJlZHVjZSgoYWNjLCB7IHNsdWcgfSkgPT4ge1xuICAgIGFjY1tzbHVnXSA9IHtcbiAgICAgICRyZWY6IGAjL2RlZmluaXRpb25zLyR7c2x1Z31gLFxuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSwge30pXG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgcHJvcGVydGllcyxcbiAgICByZXF1aXJlZDogT2JqZWN0LmtleXMocHJvcGVydGllcyksXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgSlNPTiBTY2hlbWEgVHlwZSB3aXRoICdudWxsJyBhZGRlZCBpZiB0aGUgZmllbGQgaXMgbm90IHJlcXVpcmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aE51bGxhYmxlSlNPTlNjaGVtYVR5cGUoXG4gIGZpZWxkVHlwZTogSlNPTlNjaGVtYTRUeXBlTmFtZSxcbiAgaXNSZXF1aXJlZDogYm9vbGVhbixcbik6IEpTT05TY2hlbWE0VHlwZU5hbWUgfCBKU09OU2NoZW1hNFR5cGVOYW1lW10ge1xuICBjb25zdCBmaWVsZFR5cGVzID0gW2ZpZWxkVHlwZV1cbiAgaWYgKGlzUmVxdWlyZWQpIHJldHVybiBmaWVsZFR5cGVcbiAgZmllbGRUeXBlcy5wdXNoKCdudWxsJylcbiAgcmV0dXJuIGZpZWxkVHlwZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZWxkc1RvSlNPTlNjaGVtYShcbiAgLyoqXG4gICAqIFVzZWQgZm9yIHJlbGF0aW9uc2hpcCBmaWVsZHMsIHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHVzZSBhIHN0cmluZyBvciBudW1iZXIgdHlwZSBmb3IgdGhlIElELlxuICAgKiBXaGlsZSB0aGVyZSBpcyBhIGRlZmF1bHQgSUQgZmllbGQgdHlwZSBzZXQgYnkgdGhlIGRiIGFkYXB0ZXIsIHRoZXkgY2FuIGRpZmZlciBvbiBhIGNvbGxlY3Rpb24tbGV2ZWxcbiAgICogaWYgdGhleSBoYXZlIGN1c3RvbSBJRCBmaWVsZHMuXG4gICAqL1xuICBjb2xsZWN0aW9uSURGaWVsZFR5cGVzOiB7IFtrZXk6IHN0cmluZ106ICdudW1iZXInIHwgJ3N0cmluZycgfSxcbiAgZmllbGRzOiBGaWVsZFtdLFxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byBkZWZpbmUgbmV3IHRvcC1sZXZlbCBpbnRlcmZhY2VzIHRoYXQgY2FuIGJlIHJlLXVzZWQgaW4gdGhlIG91dHB1dCBzY2hlbWEuXG4gICAqL1xuICBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnM6IE1hcDxzdHJpbmcsIEpTT05TY2hlbWE0PixcbiAgcGF5bG9hZD86IFBheWxvYWQsXG4gIGNvbmZpZz86IFNhbml0aXplZENvbmZpZyxcbik6IHtcbiAgcHJvcGVydGllczoge1xuICAgIFtrOiBzdHJpbmddOiBKU09OU2NoZW1hNFxuICB9XG4gIHJlcXVpcmVkOiBzdHJpbmdbXVxufSB7XG4gIGNvbnN0IHJlcXVpcmVkRmllbGROYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0aWVzOiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICBmaWVsZHMucmVkdWNlKChmaWVsZFNjaGVtYXMsIGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZElzUmVxdWlyZWQoZmllbGQpXG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSByZXF1aXJlZEZpZWxkTmFtZXMuYWRkKGZpZWxkLm5hbWUpXG5cbiAgICAgICAgbGV0IGZpZWxkU2NoZW1hOiBKU09OU2NoZW1hNFxuICAgICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgIGlmIChmaWVsZC5oYXNNYW55ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGZpZWxkU2NoZW1hID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IHdpdGhOdWxsYWJsZUpTT05TY2hlbWFUeXBlKCdhcnJheScsIGlzUmVxdWlyZWQpLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpZWxkU2NoZW1hID0geyB0eXBlOiB3aXRoTnVsbGFibGVKU09OU2NoZW1hVHlwZSgnc3RyaW5nJywgaXNSZXF1aXJlZCkgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgY2FzZSAnY29kZSc6XG4gICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgIGNhc2UgJ2RhdGUnOiB7XG4gICAgICAgICAgICBmaWVsZFNjaGVtYSA9IHsgdHlwZTogd2l0aE51bGxhYmxlSlNPTlNjaGVtYVR5cGUoJ3N0cmluZycsIGlzUmVxdWlyZWQpIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnbnVtYmVyJzoge1xuICAgICAgICAgICAgaWYgKGZpZWxkLmhhc01hbnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogd2l0aE51bGxhYmxlSlNPTlNjaGVtYVR5cGUoJ2FycmF5JywgaXNSZXF1aXJlZCksXG4gICAgICAgICAgICAgICAgaXRlbXM6IHsgdHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7IHR5cGU6IHdpdGhOdWxsYWJsZUpTT05TY2hlbWFUeXBlKCdudW1iZXInLCBpc1JlcXVpcmVkKSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ2NoZWNrYm94Jzoge1xuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7IHR5cGU6IHdpdGhOdWxsYWJsZUpTT05TY2hlbWFUeXBlKCdib29sZWFuJywgaXNSZXF1aXJlZCkgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlICdqc29uJzoge1xuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgIHR5cGU6IFsnb2JqZWN0JywgJ2FycmF5JywgJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbicsICdudWxsJ10sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ3JpY2hUZXh0Jzoge1xuICAgICAgICAgICAgaWYgKGZpZWxkLmVkaXRvci5vdXRwdXRTY2hlbWEpIHtcbiAgICAgICAgICAgICAgZmllbGRTY2hlbWEgPSBmaWVsZC5lZGl0b3Iub3V0cHV0U2NoZW1hKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uSURGaWVsZFR5cGVzLFxuICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnIHx8IHBheWxvYWQ/LmNvbmZpZyxcbiAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnMsXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gTWFpbnRhaW4gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBleGlzdGluZyByaWNoIHRleHQgZWRpdG9yc1xuICAgICAgICAgICAgICBmaWVsZFNjaGVtYSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiB3aXRoTnVsbGFibGVKU09OU2NoZW1hVHlwZSgnYXJyYXknLCBpc1JlcXVpcmVkKSxcbiAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ3JhZGlvJzoge1xuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgIHR5cGU6IHdpdGhOdWxsYWJsZUpTT05TY2hlbWFUeXBlKCdzdHJpbmcnLCBpc1JlcXVpcmVkKSxcbiAgICAgICAgICAgICAgZW51bTogYnVpbGRPcHRpb25FbnVtcyhmaWVsZC5vcHRpb25zKSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlICdzZWxlY3QnOiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25FbnVtcyA9IGJ1aWxkT3B0aW9uRW51bXMoZmllbGQub3B0aW9ucylcblxuICAgICAgICAgICAgaWYgKGZpZWxkLmhhc01hbnkpIHtcbiAgICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogd2l0aE51bGxhYmxlSlNPTlNjaGVtYVR5cGUoJ2FycmF5JywgaXNSZXF1aXJlZCksXG4gICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgZW51bTogb3B0aW9uRW51bXMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogd2l0aE51bGxhYmxlSlNPTlNjaGVtYVR5cGUoJ3N0cmluZycsIGlzUmVxdWlyZWQpLFxuICAgICAgICAgICAgICAgIGVudW06IG9wdGlvbkVudW1zLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAncG9pbnQnOiB7XG4gICAgICAgICAgICBmaWVsZFNjaGVtYSA9IHtcbiAgICAgICAgICAgICAgdHlwZTogd2l0aE51bGxhYmxlSlNPTlNjaGVtYVR5cGUoJ2FycmF5JywgaXNSZXF1aXJlZCksXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBtYXhJdGVtczogMixcbiAgICAgICAgICAgICAgbWluSXRlbXM6IDIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ3JlbGF0aW9uc2hpcCc6IHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkLnJlbGF0aW9uVG8pKSB7XG4gICAgICAgICAgICAgIGlmIChmaWVsZC5oYXNNYW55KSB7XG4gICAgICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiB3aXRoTnVsbGFibGVKU09OU2NoZW1hVHlwZSgnYXJyYXknLCBpc1JlcXVpcmVkKSxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIG9uZU9mOiBmaWVsZC5yZWxhdGlvblRvLm1hcCgocmVsYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uVG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdDogcmVsYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25lT2Y6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY29sbGVjdGlvbklERmllbGRUeXBlc1tyZWxhdGlvbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke3JlbGF0aW9ufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFsndmFsdWUnLCAncmVsYXRpb25UbyddLFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWVsZFNjaGVtYSA9IHtcbiAgICAgICAgICAgICAgICAgIG9uZU9mOiBmaWVsZC5yZWxhdGlvblRvLm1hcCgocmVsYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB3aXRoTnVsbGFibGVKU09OU2NoZW1hVHlwZSgnb2JqZWN0JywgaXNSZXF1aXJlZCksXG4gICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uVG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Q6IHJlbGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uZU9mOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY29sbGVjdGlvbklERmllbGRUeXBlc1tyZWxhdGlvbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke3JlbGF0aW9ufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogWyd2YWx1ZScsICdyZWxhdGlvblRvJ10sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5oYXNNYW55KSB7XG4gICAgICAgICAgICAgIGZpZWxkU2NoZW1hID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IHdpdGhOdWxsYWJsZUpTT05TY2hlbWFUeXBlKCdhcnJheScsIGlzUmVxdWlyZWQpLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICBvbmVPZjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogY29sbGVjdGlvbklERmllbGRUeXBlc1tmaWVsZC5yZWxhdGlvblRvXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICRyZWY6IGAjL2RlZmluaXRpb25zLyR7ZmllbGQucmVsYXRpb25Ub31gLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmaWVsZFNjaGVtYSA9IHtcbiAgICAgICAgICAgICAgICBvbmVPZjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB3aXRoTnVsbGFibGVKU09OU2NoZW1hVHlwZShcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uSURGaWVsZFR5cGVzW2ZpZWxkLnJlbGF0aW9uVG9dLFxuICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke2ZpZWxkLnJlbGF0aW9uVG99YCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ3VwbG9hZCc6IHtcbiAgICAgICAgICAgIGZpZWxkU2NoZW1hID0ge1xuICAgICAgICAgICAgICBvbmVPZjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbGxlY3Rpb25JREZpZWxkVHlwZXNbZmllbGQucmVsYXRpb25Ub10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke2ZpZWxkLnJlbGF0aW9uVG99YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1JlcXVpcmVkKSBmaWVsZFNjaGVtYS5vbmVPZi5wdXNoKHsgdHlwZTogJ251bGwnIH0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ2Jsb2Nrcyc6IHtcbiAgICAgICAgICAgIGZpZWxkU2NoZW1hID0ge1xuICAgICAgICAgICAgICB0eXBlOiB3aXRoTnVsbGFibGVKU09OU2NoZW1hVHlwZSgnYXJyYXknLCBpc1JlcXVpcmVkKSxcbiAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICBvbmVPZjogZmllbGQuYmxvY2tzLm1hcCgoYmxvY2spID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrRmllbGRTY2hlbWFzID0gZmllbGRzVG9KU09OU2NoZW1hKFxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uSURGaWVsZFR5cGVzLFxuICAgICAgICAgICAgICAgICAgICBibG9jay5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgIGludGVyZmFjZU5hbWVEZWZpbml0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICBjb25zdCBibG9ja1NjaGVtYTogSlNPTlNjaGVtYTQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5ibG9ja0ZpZWxkU2NoZW1hcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgICAgICAgICAgIGJsb2NrVHlwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Q6IGJsb2NrLnNsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFsnYmxvY2tUeXBlJywgLi4uYmxvY2tGaWVsZFNjaGVtYXMucmVxdWlyZWRdLFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoYmxvY2suaW50ZXJmYWNlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnMuc2V0KGJsb2NrLmludGVyZmFjZU5hbWUsIGJsb2NrU2NoZW1hKVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgJHJlZjogYCMvZGVmaW5pdGlvbnMvJHtibG9jay5pbnRlcmZhY2VOYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NrU2NoZW1hXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ2FycmF5Jzoge1xuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgIHR5cGU6IHdpdGhOdWxsYWJsZUpTT05TY2hlbWFUeXBlKCdhcnJheScsIGlzUmVxdWlyZWQpLFxuICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAuLi5maWVsZHNUb0pTT05TY2hlbWEoXG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uSURGaWVsZFR5cGVzLFxuICAgICAgICAgICAgICAgICAgZmllbGQuZmllbGRzLFxuICAgICAgICAgICAgICAgICAgaW50ZXJmYWNlTmFtZURlZmluaXRpb25zLFxuICAgICAgICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmllbGQuaW50ZXJmYWNlTmFtZSkge1xuICAgICAgICAgICAgICBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnMuc2V0KGZpZWxkLmludGVyZmFjZU5hbWUsIGZpZWxkU2NoZW1hKVxuXG4gICAgICAgICAgICAgIGZpZWxkU2NoZW1hID0ge1xuICAgICAgICAgICAgICAgICRyZWY6IGAjL2RlZmluaXRpb25zLyR7ZmllbGQuaW50ZXJmYWNlTmFtZX1gLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ3Jvdyc6XG4gICAgICAgICAgY2FzZSAnY29sbGFwc2libGUnOiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZFNjaGVtYSA9IGZpZWxkc1RvSlNPTlNjaGVtYShcbiAgICAgICAgICAgICAgY29sbGVjdGlvbklERmllbGRUeXBlcyxcbiAgICAgICAgICAgICAgZmllbGQuZmllbGRzLFxuICAgICAgICAgICAgICBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnMsXG4gICAgICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNoaWxkU2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFNjaGVtYV0pID0+IHtcbiAgICAgICAgICAgICAgZmllbGRTY2hlbWFzLnNldChwcm9wTmFtZSwgcHJvcFNjaGVtYSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjaGlsZFNjaGVtYS5yZXF1aXJlZC5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xuICAgICAgICAgICAgICByZXF1aXJlZEZpZWxkTmFtZXMuYWRkKHByb3BOYW1lKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAndGFicyc6IHtcbiAgICAgICAgICAgIGZpZWxkLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkU2NoZW1hID0gZmllbGRzVG9KU09OU2NoZW1hKFxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25JREZpZWxkVHlwZXMsXG4gICAgICAgICAgICAgICAgdGFiLmZpZWxkcyxcbiAgICAgICAgICAgICAgICBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnMsXG4gICAgICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKHRhYkhhc05hbWUodGFiKSkge1xuICAgICAgICAgICAgICAgIC8vIGNvdWxkIGhhdmUgaW50ZXJmYWNlXG4gICAgICAgICAgICAgICAgZmllbGRTY2hlbWFzLnNldCh0YWIubmFtZSwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAuLi5jaGlsZFNjaGVtYSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkRmllbGROYW1lcy5hZGQodGFiLm5hbWUpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2hpbGRTY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wU2NoZW1hXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZmllbGRTY2hlbWFzLnNldChwcm9wTmFtZSwgcHJvcFNjaGVtYSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNoaWxkU2NoZW1hLnJlcXVpcmVkLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZEZpZWxkTmFtZXMuYWRkKHByb3BOYW1lKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ2dyb3VwJzoge1xuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgICAgICAgIC4uLmZpZWxkc1RvSlNPTlNjaGVtYShcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uSURGaWVsZFR5cGVzLFxuICAgICAgICAgICAgICAgIGZpZWxkLmZpZWxkcyxcbiAgICAgICAgICAgICAgICBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnMsXG4gICAgICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmaWVsZC5pbnRlcmZhY2VOYW1lKSB7XG4gICAgICAgICAgICAgIGludGVyZmFjZU5hbWVEZWZpbml0aW9ucy5zZXQoZmllbGQuaW50ZXJmYWNlTmFtZSwgZmllbGRTY2hlbWEpXG5cbiAgICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgICAgJHJlZjogYCMvZGVmaW5pdGlvbnMvJHtmaWVsZC5pbnRlcmZhY2VOYW1lfWAsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGRTY2hlbWEgJiYgZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICAgICAgICBmaWVsZFNjaGVtYXMuc2V0KGZpZWxkLm5hbWUsIGZpZWxkU2NoZW1hKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkU2NoZW1hc1xuICAgICAgfSwgbmV3IE1hcDxzdHJpbmcsIEpTT05TY2hlbWE0PigpKSxcbiAgICApLFxuICAgIHJlcXVpcmVkOiBBcnJheS5mcm9tKHJlcXVpcmVkRmllbGROYW1lcyksXG4gIH1cbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIGFuZCBpcyBleHBvcnRlZCB0aHJvdWdoIHBheWxvYWQvdXRpbGl0aWVzXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5VG9KU09OU2NoZW1hKFxuICBjb25maWc6IFNhbml0aXplZENvbmZpZyxcbiAgaW5jb21pbmdFbnRpdHk6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfCBTYW5pdGl6ZWRHbG9iYWxDb25maWcsXG4gIGludGVyZmFjZU5hbWVEZWZpbml0aW9uczogTWFwPHN0cmluZywgSlNPTlNjaGVtYTQ+LFxuICBkZWZhdWx0SURUeXBlOiAnbnVtYmVyJyB8ICd0ZXh0JyxcbiAgcGF5bG9hZD86IFBheWxvYWQsXG4pOiBKU09OU2NoZW1hNCB7XG4gIGNvbnN0IGVudGl0eTogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB8IFNhbml0aXplZEdsb2JhbENvbmZpZyA9IGRlZXBDb3B5T2JqZWN0KGluY29taW5nRW50aXR5KVxuICBjb25zdCB0aXRsZSA9IGVudGl0eS50eXBlc2NyaXB0Py5pbnRlcmZhY2VcbiAgICA/IGVudGl0eS50eXBlc2NyaXB0LmludGVyZmFjZVxuICAgIDogc2luZ3VsYXIodG9Xb3JkcyhlbnRpdHkuc2x1ZywgdHJ1ZSkpXG5cbiAgY29uc3QgaWRGaWVsZDogRmllbGRBZmZlY3RpbmdEYXRhID0geyBuYW1lOiAnaWQnLCB0eXBlOiBkZWZhdWx0SURUeXBlIGFzICd0ZXh0JywgcmVxdWlyZWQ6IHRydWUgfVxuICBjb25zdCBjdXN0b21JZEZpZWxkID0gZW50aXR5LmZpZWxkcy5maW5kKFxuICAgIChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gJ2lkJyxcbiAgKSBhcyBGaWVsZEFmZmVjdGluZ0RhdGFcblxuICBpZiAoY3VzdG9tSWRGaWVsZCAmJiBjdXN0b21JZEZpZWxkLnR5cGUgIT09ICdncm91cCcgJiYgY3VzdG9tSWRGaWVsZC50eXBlICE9PSAndGFiJykge1xuICAgIGN1c3RvbUlkRmllbGQucmVxdWlyZWQgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgZW50aXR5LmZpZWxkcy51bnNoaWZ0KGlkRmllbGQpXG4gIH1cblxuICAvLyBtYXJrIHRpbWVzdGFtcCBmaWVsZHMgcmVxdWlyZWRcbiAgaWYgKCd0aW1lc3RhbXBzJyBpbiBlbnRpdHkgJiYgZW50aXR5LnRpbWVzdGFtcHMgIT09IGZhbHNlKSB7XG4gICAgZW50aXR5LmZpZWxkcyA9IGVudGl0eS5maWVsZHMubWFwKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIChmaWVsZC5uYW1lID09PSAnY3JlYXRlZEF0JyB8fCBmaWVsZC5uYW1lID09PSAndXBkYXRlZEF0JykpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpZWxkXG4gICAgfSlcbiAgfVxuXG4gIGlmICgnYXV0aCcgaW4gZW50aXR5ICYmIGVudGl0eS5hdXRoICYmICFlbnRpdHkuYXV0aD8uZGlzYWJsZUxvY2FsU3RyYXRlZ3kpIHtcbiAgICBlbnRpdHkuZmllbGRzLnB1c2goe1xuICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB9KVxuICB9XG5cbiAgLy8gIFVzZWQgZm9yIHJlbGF0aW9uc2hpcCBmaWVsZHMsIHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHVzZSBhIHN0cmluZyBvciBudW1iZXIgdHlwZSBmb3IgdGhlIElELlxuICBjb25zdCBjb2xsZWN0aW9uSURGaWVsZFR5cGVzID0gZ2V0Q29sbGVjdGlvbklERmllbGRUeXBlcyh7IGNvbmZpZywgZGVmYXVsdElEVHlwZSB9KVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ29iamVjdCcsXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgIHRpdGxlLFxuICAgIC4uLmZpZWxkc1RvSlNPTlNjaGVtYShcbiAgICAgIGNvbGxlY3Rpb25JREZpZWxkVHlwZXMsXG4gICAgICBlbnRpdHkuZmllbGRzLFxuICAgICAgaW50ZXJmYWNlTmFtZURlZmluaXRpb25zLFxuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbmZpZyxcbiAgICApLFxuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyB1c2VkIGZvciBnZW5lcmF0aW5nIHRoZSBUeXBlU2NyaXB0IHR5cGVzIChwYXlsb2FkLXR5cGVzLnRzKSB3aXRoIHRoZSBwYXlsb2FkIGdlbmVyYXRlOnR5cGVzIGNvbW1hbmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdUb0pTT05TY2hlbWEoXG4gIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLFxuICBkZWZhdWx0SURUeXBlPzogJ251bWJlcicgfCAndGV4dCcsXG4gIHBheWxvYWQ/OiBQYXlsb2FkLFxuKTogSlNPTlNjaGVtYTQge1xuICAvLyBhIG11dGFibGUgTWFwIHRvIHN0b3JlIGN1c3RvbSB0b3AtbGV2ZWwgYGludGVyZmFjZU5hbWVgIHR5cGVzLiBGaWVsZHMgd2l0aCBhbiBgaW50ZXJmYWNlTmFtZWAgcHJvcGVydHkgd2lsbCBiZSBtb3ZlZCB0byB0aGUgdG9wLWxldmVsIGRlZmluaXRpb25zIGhlcmVcbiAgY29uc3QgaW50ZXJmYWNlTmFtZURlZmluaXRpb25zOiBNYXA8c3RyaW5nLCBKU09OU2NoZW1hND4gPSBuZXcgTWFwKClcblxuICAvLyBDb2xsZWN0aW9ucyBhbmQgR2xvYmFscyBoYXZlIHRvIGJlIG1vdmVkIHRvIHRoZSB0b3AtbGV2ZWwgZGVmaW5pdGlvbnMgYXMgd2VsbC4gUmVhc29uOiBUaGUgdG9wLWxldmVsIHR5cGUgd2lsbCBiZSB0aGUgYENvbmZpZ2AgdHlwZSAtIHdlIGRvbid0IHdhbnQgYWxsIGNvbGxlY3Rpb24gYW5kIGdsb2JhbFxuICAvLyB0eXBlcyB0byBiZSBpbmxpbmVkIGluc2lkZSB0aGUgYENvbmZpZ2AgdHlwZVxuICBjb25zdCBlbnRpdHlEZWZpbml0aW9uczogeyBbazogc3RyaW5nXTogSlNPTlNjaGVtYTQgfSA9IFtcbiAgICAuLi5jb25maWcuZ2xvYmFscyxcbiAgICAuLi5jb25maWcuY29sbGVjdGlvbnMsXG4gIF0ucmVkdWNlKChhY2MsIGVudGl0eSkgPT4ge1xuICAgIGFjY1tlbnRpdHkuc2x1Z10gPSBlbnRpdHlUb0pTT05TY2hlbWEoXG4gICAgICBjb25maWcsXG4gICAgICBlbnRpdHksXG4gICAgICBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnMsXG4gICAgICBkZWZhdWx0SURUeXBlLFxuICAgICAgcGF5bG9hZCxcbiAgICApXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSlcblxuICByZXR1cm4ge1xuICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICBkZWZpbml0aW9uczogeyAuLi5lbnRpdHlEZWZpbml0aW9ucywgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGludGVyZmFjZU5hbWVEZWZpbml0aW9ucykgfSxcbiAgICAvLyBUaGVzZSBwcm9wZXJ0aWVzIGhlcmUgd2lsbCBiZSB2ZXJ5IHNpbXBsZSwgYXMgYWxsIHRoZSBjb21wbGV4aXR5IGlzIGluIHRoZSBkZWZpbml0aW9ucy4gVGhlc2UgYXJlIGp1c3QgdGhlIHByb3BlcnRpZXMgZm9yIHRoZSB0b3AtbGV2ZWwgYENvbmZpZ2AgdHlwZVxuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGNvbGxlY3Rpb25zOiBnZW5lcmF0ZUVudGl0eVNjaGVtYXMoY29uZmlnLmNvbGxlY3Rpb25zIHx8IFtdKSxcbiAgICAgIGdsb2JhbHM6IGdlbmVyYXRlRW50aXR5U2NoZW1hcyhjb25maWcuZ2xvYmFscyB8fCBbXSksXG4gICAgfSxcbiAgICByZXF1aXJlZDogWydjb2xsZWN0aW9ucycsICdnbG9iYWxzJ10sXG4gICAgdGl0bGU6ICdDb25maWcnLFxuICB9XG59XG4iXSwibmFtZXMiOlsiY29uZmlnVG9KU09OU2NoZW1hIiwiZW50aXR5VG9KU09OU2NoZW1hIiwiZmllbGRzVG9KU09OU2NoZW1hIiwid2l0aE51bGxhYmxlSlNPTlNjaGVtYVR5cGUiLCJmaWVsZElzUmVxdWlyZWQiLCJmaWVsZCIsImlzQ29uZGl0aW9uYWwiLCJCb29sZWFuIiwiYWRtaW4iLCJjb25kaXRpb24iLCJpc01hcmtlZFJlcXVpcmVkIiwicmVxdWlyZWQiLCJmaWVsZEFmZmVjdHNEYXRhIiwidHlwZSIsImZpZWxkcyIsInNvbWUiLCJzdWJGaWVsZCIsInRhYnMiLCJ0YWIiLCJidWlsZE9wdGlvbkVudW1zIiwib3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsInZhbHVlIiwiZ2VuZXJhdGVFbnRpdHlTY2hlbWFzIiwiZW50aXRpZXMiLCJwcm9wZXJ0aWVzIiwicmVkdWNlIiwiYWNjIiwic2x1ZyIsIiRyZWYiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJmaWVsZFR5cGUiLCJpc1JlcXVpcmVkIiwiZmllbGRUeXBlcyIsInB1c2giLCJjb2xsZWN0aW9uSURGaWVsZFR5cGVzIiwiaW50ZXJmYWNlTmFtZURlZmluaXRpb25zIiwicGF5bG9hZCIsImNvbmZpZyIsInJlcXVpcmVkRmllbGROYW1lcyIsIlNldCIsImZyb21FbnRyaWVzIiwiZmllbGRTY2hlbWFzIiwiYWRkIiwibmFtZSIsImZpZWxkU2NoZW1hIiwiaGFzTWFueSIsIml0ZW1zIiwiZWRpdG9yIiwib3V0cHV0U2NoZW1hIiwiZW51bSIsIm9wdGlvbkVudW1zIiwibWF4SXRlbXMiLCJtaW5JdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsInJlbGF0aW9uVG8iLCJvbmVPZiIsInJlbGF0aW9uIiwiY29uc3QiLCJibG9ja3MiLCJibG9jayIsImJsb2NrRmllbGRTY2hlbWFzIiwiYmxvY2tTY2hlbWEiLCJibG9ja1R5cGUiLCJpbnRlcmZhY2VOYW1lIiwic2V0IiwiY2hpbGRTY2hlbWEiLCJlbnRyaWVzIiwiZm9yRWFjaCIsInByb3BOYW1lIiwicHJvcFNjaGVtYSIsInRhYkhhc05hbWUiLCJNYXAiLCJmcm9tIiwiaW5jb21pbmdFbnRpdHkiLCJkZWZhdWx0SURUeXBlIiwiZW50aXR5IiwiZGVlcENvcHlPYmplY3QiLCJ0aXRsZSIsInR5cGVzY3JpcHQiLCJpbnRlcmZhY2UiLCJzaW5ndWxhciIsInRvV29yZHMiLCJpZEZpZWxkIiwiY3VzdG9tSWRGaWVsZCIsImZpbmQiLCJ1bnNoaWZ0IiwidGltZXN0YW1wcyIsImF1dGgiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsImdldENvbGxlY3Rpb25JREZpZWxkVHlwZXMiLCJlbnRpdHlEZWZpbml0aW9ucyIsImdsb2JhbHMiLCJjb2xsZWN0aW9ucyIsImRlZmluaXRpb25zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWdpQmdCQSxrQkFBa0I7ZUFBbEJBOztJQS9EQUMsa0JBQWtCO2VBQWxCQTs7SUEvWUFDLGtCQUFrQjtlQUFsQkE7O0lBVkFDLDBCQUEwQjtlQUExQkE7OzsyQkF0RVM7dUJBUW9CO2dDQUNkOzhCQUNQOzJDQUNrQjtBQUUx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