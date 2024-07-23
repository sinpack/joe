/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addFieldStatePromise", {
    enumerable: true,
    get: function() {
        return addFieldStatePromise;
    }
});
const _bsonobjectid = /*#__PURE__*/ _interop_require_default(require("bson-objectid"));
const _types = require("../../../../../fields/config/types");
const _getDefaultValue = /*#__PURE__*/ _interop_require_default(require("../../../../../fields/getDefaultValue"));
const _iterateFields = require("./iterateFields");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const addFieldStatePromise = async (args)=>{
    const { id, anyParentLocalized = false, config, data, field, filter, forceFullValue = false, fullData, includeSchema = false, locale, omitParents = false, operation, passesCondition, path, preferences, skipConditionChecks = false, skipValidation = false, state, t, user } = args;
    if ((0, _types.fieldAffectsData)(field)) {
        const fieldState = {
            condition: field.admin?.condition,
            fieldSchema: includeSchema ? field : undefined,
            initialValue: undefined,
            passesCondition,
            valid: true,
            validate: field.validate,
            value: undefined
        };
        const valueWithDefault = await (0, _getDefaultValue.default)({
            defaultValue: field.defaultValue,
            locale,
            user,
            value: data?.[field.name]
        });
        if (data?.[field.name]) {
            data[field.name] = valueWithDefault;
        }
        let validationResult = true;
        if (typeof fieldState.validate === 'function' && !skipValidation) {
            validationResult = await fieldState.validate(data?.[field.name], {
                ...field,
                id,
                config,
                data: fullData,
                operation,
                previousValue: data?.[field.name],
                siblingData: data,
                t,
                user
            });
        }
        if (typeof validationResult === 'string') {
            fieldState.errorMessage = validationResult;
            fieldState.valid = false;
        } else {
            fieldState.valid = true;
        }
        switch(field.type){
            case 'array':
                {
                    const arrayValue = Array.isArray(valueWithDefault) ? valueWithDefault : [];
                    const { promises, rowMetadata } = arrayValue.reduce((acc, row, i)=>{
                        const rowPath = `${path}${field.name}.${i}.`;
                        row.id = row?.id || new _bsonobjectid.default().toHexString();
                        if (!omitParents && (!filter || filter(args))) {
                            state[`${rowPath}id`] = {
                                fieldSchema: includeSchema ? field.fields.find((field)=>'name' in field && field.name === 'id') : undefined,
                                initialValue: row.id,
                                valid: true,
                                value: row.id
                            };
                        }
                        acc.promises.push((0, _iterateFields.iterateFields)({
                            id,
                            anyParentLocalized: field.localized || anyParentLocalized,
                            config,
                            data: row,
                            fields: field.fields,
                            filter,
                            forceFullValue,
                            fullData,
                            includeSchema,
                            locale,
                            omitParents,
                            operation,
                            parentPassesCondition: passesCondition,
                            path: rowPath,
                            preferences,
                            skipConditionChecks,
                            skipValidation,
                            state,
                            t,
                            user
                        }));
                        const collapsedRowIDs = preferences?.fields?.[`${path}${field.name}`]?.collapsed;
                        acc.rowMetadata.push({
                            id: row.id,
                            childErrorPaths: new Set(),
                            collapsed: collapsedRowIDs === undefined ? field.admin.initCollapsed : collapsedRowIDs.includes(row.id)
                        });
                        return acc;
                    }, {
                        promises: [],
                        rowMetadata: []
                    });
                    await Promise.all(promises);
                    // Add values to field state
                    if (valueWithDefault === null) {
                        fieldState.value = null;
                        fieldState.previousValue = fieldState.value;
                        fieldState.initialValue = null;
                    } else {
                        fieldState.value = forceFullValue ? arrayValue : arrayValue.length;
                        fieldState.previousValue = fieldState.value;
                        fieldState.initialValue = forceFullValue ? arrayValue : arrayValue.length;
                        if (arrayValue.length > 0) {
                            fieldState.disableFormData = true;
                        }
                    }
                    fieldState.rows = rowMetadata;
                    // Add field to state
                    if (!omitParents && (!filter || filter(args))) {
                        state[`${path}${field.name}`] = fieldState;
                    }
                    break;
                }
            case 'blocks':
                {
                    const blocksValue = Array.isArray(valueWithDefault) ? valueWithDefault : [];
                    const { promises, rowMetadata } = blocksValue.reduce((acc, row, i)=>{
                        const block = field.blocks.find((blockType)=>blockType.slug === row.blockType);
                        const rowPath = `${path}${field.name}.${i}.`;
                        if (block) {
                            row.id = row?.id || new _bsonobjectid.default().toHexString();
                            if (!omitParents && (!filter || filter(args))) {
                                state[`${rowPath}id`] = {
                                    fieldSchema: includeSchema ? block.fields.find((blockField)=>'name' in blockField && blockField.name === 'id') : undefined,
                                    initialValue: row.id,
                                    valid: true,
                                    value: row.id
                                };
                                state[`${rowPath}blockType`] = {
                                    fieldSchema: includeSchema ? block.fields.find((blockField)=>'name' in blockField && blockField.name === 'blockType') : undefined,
                                    initialValue: row.blockType,
                                    valid: true,
                                    value: row.blockType
                                };
                                state[`${rowPath}blockName`] = {
                                    fieldSchema: includeSchema ? block.fields.find((blockField)=>'name' in blockField && blockField.name === 'blockName') : undefined,
                                    initialValue: row.blockName,
                                    valid: true,
                                    value: row.blockName
                                };
                            }
                            acc.promises.push((0, _iterateFields.iterateFields)({
                                id,
                                anyParentLocalized: field.localized || anyParentLocalized,
                                config,
                                data: row,
                                fields: block.fields,
                                filter,
                                forceFullValue,
                                fullData,
                                includeSchema,
                                locale,
                                omitParents,
                                operation,
                                parentPassesCondition: passesCondition,
                                path: rowPath,
                                preferences,
                                skipConditionChecks,
                                skipValidation,
                                state,
                                t,
                                user
                            }));
                            const collapsedRowIDs = preferences?.fields?.[`${path}${field.name}`]?.collapsed;
                            acc.rowMetadata.push({
                                id: row.id,
                                blockType: row.blockType,
                                childErrorPaths: new Set(),
                                collapsed: collapsedRowIDs === undefined ? field.admin.initCollapsed : collapsedRowIDs.includes(row.id)
                            });
                        }
                        return acc;
                    }, {
                        promises: [],
                        rowMetadata: []
                    });
                    await Promise.all(promises);
                    // Add values to field state
                    if (valueWithDefault === null) {
                        fieldState.value = null;
                        fieldState.previousValue = fieldState.value;
                        fieldState.initialValue = null;
                    } else {
                        fieldState.value = forceFullValue ? blocksValue : blocksValue.length;
                        fieldState.previousValue = fieldState.value;
                        fieldState.initialValue = forceFullValue ? blocksValue : blocksValue.length;
                        if (blocksValue.length > 0) {
                            fieldState.disableFormData = true;
                        }
                    }
                    fieldState.rows = rowMetadata;
                    // Add field to state
                    if (!omitParents && (!filter || filter(args))) {
                        state[`${path}${field.name}`] = fieldState;
                    }
                    break;
                }
            case 'group':
                {
                    await (0, _iterateFields.iterateFields)({
                        id,
                        anyParentLocalized: field.localized || anyParentLocalized,
                        config,
                        data: data?.[field.name] || {},
                        fields: field.fields,
                        filter,
                        forceFullValue,
                        fullData,
                        includeSchema,
                        locale,
                        omitParents,
                        operation,
                        parentPassesCondition: passesCondition,
                        path: `${path}${field.name}.`,
                        preferences,
                        skipConditionChecks,
                        skipValidation,
                        state,
                        t,
                        user
                    });
                    break;
                }
            case 'relationship':
                {
                    if (field.hasMany) {
                        const relationshipValue = Array.isArray(valueWithDefault) ? valueWithDefault.map((relationship)=>{
                            if (Array.isArray(field.relationTo)) {
                                return {
                                    relationTo: relationship.relationTo,
                                    value: relationship.value && typeof relationship.value === 'object' ? relationship.value?.id : relationship.value
                                };
                            }
                            if (typeof relationship === 'object' && relationship !== null) {
                                return relationship.id;
                            }
                            return relationship;
                        }) : undefined;
                        fieldState.value = relationshipValue;
                        fieldState.previousValue = fieldState.value;
                        fieldState.initialValue = relationshipValue;
                    } else if (Array.isArray(field.relationTo)) {
                        if (valueWithDefault && typeof valueWithDefault === 'object' && 'relationTo' in valueWithDefault && 'value' in valueWithDefault) {
                            const value = typeof valueWithDefault?.value === 'object' && valueWithDefault?.value && 'id' in valueWithDefault.value ? valueWithDefault.value.id : valueWithDefault.value;
                            const relationshipValue = {
                                relationTo: valueWithDefault?.relationTo,
                                value
                            };
                            fieldState.value = relationshipValue;
                            fieldState.previousValue = fieldState.value;
                            fieldState.initialValue = relationshipValue;
                        }
                    } else {
                        const relationshipValue = valueWithDefault && typeof valueWithDefault === 'object' && 'id' in valueWithDefault ? valueWithDefault.id : valueWithDefault;
                        fieldState.value = relationshipValue;
                        fieldState.previousValue = fieldState.value;
                        fieldState.initialValue = relationshipValue;
                    }
                    if (!filter || filter(args)) {
                        state[`${path}${field.name}`] = fieldState;
                    }
                    break;
                }
            case 'upload':
                {
                    const relationshipValue = valueWithDefault && typeof valueWithDefault === 'object' && 'id' in valueWithDefault ? valueWithDefault.id : valueWithDefault;
                    fieldState.value = relationshipValue;
                    fieldState.previousValue = fieldState.value;
                    fieldState.initialValue = relationshipValue;
                    if (!filter || filter(args)) {
                        state[`${path}${field.name}`] = fieldState;
                    }
                    break;
                }
            default:
                {
                    fieldState.value = valueWithDefault;
                    fieldState.previousValue = fieldState.value;
                    fieldState.initialValue = valueWithDefault;
                    // Add field to state
                    if (!filter || filter(args)) {
                        state[`${path}${field.name}`] = fieldState;
                    }
                    break;
                }
        }
    } else if ((0, _types.fieldHasSubFields)(field)) {
        // Handle field types that do not use names (row, etc)
        await (0, _iterateFields.iterateFields)({
            id,
            anyParentLocalized: field.localized || anyParentLocalized,
            config,
            data,
            fields: field.fields,
            filter,
            forceFullValue,
            fullData,
            includeSchema,
            locale,
            omitParents,
            operation,
            parentPassesCondition: passesCondition,
            path,
            preferences,
            skipConditionChecks,
            skipValidation,
            state,
            t,
            user
        });
    } else if (field.type === 'tabs') {
        const promises = field.tabs.map((tab)=>(0, _iterateFields.iterateFields)({
                id,
                anyParentLocalized: tab.localized || anyParentLocalized,
                config,
                data: (0, _types.tabHasName)(tab) ? data?.[tab.name] : data,
                fields: tab.fields,
                filter,
                forceFullValue,
                fullData,
                includeSchema,
                locale,
                omitParents,
                operation,
                parentPassesCondition: passesCondition,
                path: (0, _types.tabHasName)(tab) ? `${path}${tab.name}.` : path,
                preferences,
                skipConditionChecks,
                skipValidation,
                state,
                t,
                user
            }));
        await Promise.all(promises);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEvYWRkRmllbGRTdGF0ZVByb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB0eXBlIHsgVEZ1bmN0aW9uIH0gZnJvbSAnaTE4bmV4dCdcblxuaW1wb3J0IE9iamVjdElEIGZyb20gJ2Jzb24tb2JqZWN0aWQnXG5cbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2F1dGgnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgTm9uUHJlc2VudGF0aW9uYWxGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERhdGEsIEZpZWxkcywgRm9ybUZpZWxkIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEsIGZpZWxkSGFzU3ViRmllbGRzLCB0YWJIYXNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCBnZXRWYWx1ZVdpdGhEZWZhdWx0IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9nZXREZWZhdWx0VmFsdWUnXG5pbXBvcnQgeyBpdGVyYXRlRmllbGRzIH0gZnJvbSAnLi9pdGVyYXRlRmllbGRzJ1xuXG5leHBvcnQgdHlwZSBBZGRGaWVsZFN0YXRlUHJvbWlzZUFyZ3MgPSB7XG4gIC8qKlxuICAgKiBpZiBhbGwgcGFyZW50cyBhcmUgbG9jYWxpemVkLCB0aGVuIHRoZSBmaWVsZCBpcyBsb2NhbGl6ZWRcbiAgICovXG4gIGFueVBhcmVudExvY2FsaXplZD86IGJvb2xlYW5cbiAgY29uZmlnOiBTYW5pdGl6ZWRDb25maWdcbiAgZGF0YTogRGF0YVxuICBmaWVsZDogTm9uUHJlc2VudGF0aW9uYWxGaWVsZFxuICAvKipcbiAgICogWW91IGNhbiB1c2UgdGhpcyB0byBmaWx0ZXIgZG93biB0byBvbmx5IGBsb2NhbGl6ZWRgIGZpZWxkcyB0aGF0IHJlcXVpcmUgdHJhbnNhbGF0aW9uICh0eXBlOiB0ZXh0LCB0ZXh0YXJlYSwgZXRjLikuIEFub3RoZXIgcGx1Z2luIG1pZ2h0IHdhbnQgdG8gbG9vayBmb3Igb25seSBgcG9pbnRgIHR5cGUgZmllbGRzIHRvIGRvIHNvbWUgR0lTIGZ1bmN0aW9uLiBXaXRoIHRoZSBmaWx0ZXIgZnVuY3Rpb24geW91IGNhbiBnbyBpbiBsaWtlIGEgc3VyZ2Vvbi5cbiAgICovXG4gIGZpbHRlcj86IChhcmdzOiBBZGRGaWVsZFN0YXRlUHJvbWlzZUFyZ3MpID0+IGJvb2xlYW5cbiAgLyoqXG4gICAqIEZvcmNlIHRoZSB2YWx1ZSBvZiBmaWVsZHMgbGlrZSBhcnJheXMgb3IgYmxvY2tzIHRvIGJlIHRoZSBmdWxsIHZhbHVlIGluc3RlYWQgb2YgdGhlIGxlbmd0aCBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZm9yY2VGdWxsVmFsdWU/OiBib29sZWFuXG4gIGZ1bGxEYXRhOiBEYXRhXG4gIGlkOiBudW1iZXIgfCBzdHJpbmdcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGZpZWxkIHNjaGVtYSBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIHN0YXRlXG4gICAqL1xuICBpbmNsdWRlU2NoZW1hPzogYm9vbGVhblxuICBsb2NhbGU6IHN0cmluZ1xuICAvKipcbiAgICogV2hldGhlciB0byBvbWl0IHBhcmVudCBmaWVsZHMgaW4gdGhlIHN0YXRlLiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgb21pdFBhcmVudHM/OiBib29sZWFuXG4gIG9wZXJhdGlvbjogJ2NyZWF0ZScgfCAndXBkYXRlJ1xuICBwYXNzZXNDb25kaXRpb246IGJvb2xlYW5cbiAgcGF0aDogc3RyaW5nXG4gIHByZWZlcmVuY2VzOiB7XG4gICAgW2tleTogc3RyaW5nXTogdW5rbm93blxuICB9XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNraXAgY2hlY2tpbmcgdGhlIGZpZWxkJ3MgY29uZGl0aW9uLiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgc2tpcENvbmRpdGlvbkNoZWNrcz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2tpcCB2YWxpZGF0aW5nIHRoZSBmaWVsZC4gQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHNraXBWYWxpZGF0aW9uPzogYm9vbGVhblxuICBzdGF0ZTogRmllbGRzXG4gIHQ6IFRGdW5jdGlvblxuICB1c2VyOiBVc2VyXG59XG5cbi8qKlxuICogRmxhdHRlbnMgdGhlIGZpZWxkcyBzY2hlbWEgYW5kIGZpZWxkcyBkYXRhLlxuICogVGhlIG91dHB1dCBpcyB0aGUgZmllbGQgcGF0aCAoZS5nLiBhcnJheS4wLm5hbWUpIG1hcHBlZCB0byBhIEZvcm1GaWVsZCBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCBhZGRGaWVsZFN0YXRlUHJvbWlzZSA9IGFzeW5jIChhcmdzOiBBZGRGaWVsZFN0YXRlUHJvbWlzZUFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGFueVBhcmVudExvY2FsaXplZCA9IGZhbHNlLFxuICAgIGNvbmZpZyxcbiAgICBkYXRhLFxuICAgIGZpZWxkLFxuICAgIGZpbHRlcixcbiAgICBmb3JjZUZ1bGxWYWx1ZSA9IGZhbHNlLFxuICAgIGZ1bGxEYXRhLFxuICAgIGluY2x1ZGVTY2hlbWEgPSBmYWxzZSxcbiAgICBsb2NhbGUsXG4gICAgb21pdFBhcmVudHMgPSBmYWxzZSxcbiAgICBvcGVyYXRpb24sXG4gICAgcGFzc2VzQ29uZGl0aW9uLFxuICAgIHBhdGgsXG4gICAgcHJlZmVyZW5jZXMsXG4gICAgc2tpcENvbmRpdGlvbkNoZWNrcyA9IGZhbHNlLFxuICAgIHNraXBWYWxpZGF0aW9uID0gZmFsc2UsXG4gICAgc3RhdGUsXG4gICAgdCxcbiAgICB1c2VyLFxuICB9ID0gYXJnc1xuICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICBjb25zdCBmaWVsZFN0YXRlOiBGb3JtRmllbGQgPSB7XG4gICAgICBjb25kaXRpb246IGZpZWxkLmFkbWluPy5jb25kaXRpb24sXG4gICAgICBmaWVsZFNjaGVtYTogaW5jbHVkZVNjaGVtYSA/IGZpZWxkIDogdW5kZWZpbmVkLFxuICAgICAgaW5pdGlhbFZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBwYXNzZXNDb25kaXRpb24sXG4gICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlOiBmaWVsZC52YWxpZGF0ZSxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVXaXRoRGVmYXVsdCA9IGF3YWl0IGdldFZhbHVlV2l0aERlZmF1bHQoe1xuICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICBsb2NhbGUsXG4gICAgICB1c2VyLFxuICAgICAgdmFsdWU6IGRhdGE/LltmaWVsZC5uYW1lXSxcbiAgICB9KVxuXG4gICAgaWYgKGRhdGE/LltmaWVsZC5uYW1lXSkge1xuICAgICAgZGF0YVtmaWVsZC5uYW1lXSA9IHZhbHVlV2l0aERlZmF1bHRcbiAgICB9XG5cbiAgICBsZXQgdmFsaWRhdGlvblJlc3VsdDogc3RyaW5nIHwgdHJ1ZSA9IHRydWVcblxuICAgIGlmICh0eXBlb2YgZmllbGRTdGF0ZS52YWxpZGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhc2tpcFZhbGlkYXRpb24pIHtcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBhd2FpdCBmaWVsZFN0YXRlLnZhbGlkYXRlKGRhdGE/LltmaWVsZC5uYW1lXSwge1xuICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgZGF0YTogZnVsbERhdGEsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgcHJldmlvdXNWYWx1ZTogZGF0YT8uW2ZpZWxkLm5hbWVdLFxuICAgICAgICBzaWJsaW5nRGF0YTogZGF0YSxcbiAgICAgICAgdCxcbiAgICAgICAgdXNlcixcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWxpZGF0aW9uUmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgZmllbGRTdGF0ZS5lcnJvck1lc3NhZ2UgPSB2YWxpZGF0aW9uUmVzdWx0XG4gICAgICBmaWVsZFN0YXRlLnZhbGlkID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRTdGF0ZS52YWxpZCA9IHRydWVcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5Jzoge1xuICAgICAgICBjb25zdCBhcnJheVZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZVdpdGhEZWZhdWx0KSA/IHZhbHVlV2l0aERlZmF1bHQgOiBbXVxuICAgICAgICBjb25zdCB7IHByb21pc2VzLCByb3dNZXRhZGF0YSB9ID0gYXJyYXlWYWx1ZS5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywgcm93LCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3dQYXRoID0gYCR7cGF0aH0ke2ZpZWxkLm5hbWV9LiR7aX0uYFxuICAgICAgICAgICAgcm93LmlkID0gcm93Py5pZCB8fCBuZXcgT2JqZWN0SUQoKS50b0hleFN0cmluZygpXG5cbiAgICAgICAgICAgIGlmICghb21pdFBhcmVudHMgJiYgKCFmaWx0ZXIgfHwgZmlsdGVyKGFyZ3MpKSkge1xuICAgICAgICAgICAgICBzdGF0ZVtgJHtyb3dQYXRofWlkYF0gPSB7XG4gICAgICAgICAgICAgICAgZmllbGRTY2hlbWE6IGluY2x1ZGVTY2hlbWFcbiAgICAgICAgICAgICAgICAgID8gZmllbGQuZmllbGRzLmZpbmQoKGZpZWxkKSA9PiAnbmFtZScgaW4gZmllbGQgJiYgZmllbGQubmFtZSA9PT0gJ2lkJylcbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogcm93LmlkLFxuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByb3cuaWQsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWNjLnByb21pc2VzLnB1c2goXG4gICAgICAgICAgICAgIGl0ZXJhdGVGaWVsZHMoe1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGFueVBhcmVudExvY2FsaXplZDogZmllbGQubG9jYWxpemVkIHx8IGFueVBhcmVudExvY2FsaXplZCxcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgZGF0YTogcm93LFxuICAgICAgICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBmb3JjZUZ1bGxWYWx1ZSxcbiAgICAgICAgICAgICAgICBmdWxsRGF0YSxcbiAgICAgICAgICAgICAgICBpbmNsdWRlU2NoZW1hLFxuICAgICAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgICAgICBvbWl0UGFyZW50cyxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICAgICAgcGFyZW50UGFzc2VzQ29uZGl0aW9uOiBwYXNzZXNDb25kaXRpb24sXG4gICAgICAgICAgICAgICAgcGF0aDogcm93UGF0aCxcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcyxcbiAgICAgICAgICAgICAgICBza2lwQ29uZGl0aW9uQ2hlY2tzLFxuICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uLFxuICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgIHQsXG4gICAgICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNlZFJvd0lEcyA9IHByZWZlcmVuY2VzPy5maWVsZHM/LltgJHtwYXRofSR7ZmllbGQubmFtZX1gXT8uY29sbGFwc2VkXG5cbiAgICAgICAgICAgIGFjYy5yb3dNZXRhZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICAgICAgY2hpbGRFcnJvclBhdGhzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDpcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWRSb3dJRHMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgPyBmaWVsZC5hZG1pbi5pbml0Q29sbGFwc2VkXG4gICAgICAgICAgICAgICAgICA6IGNvbGxhcHNlZFJvd0lEcy5pbmNsdWRlcyhyb3cuaWQpLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvbWlzZXM6IFtdLFxuICAgICAgICAgICAgcm93TWV0YWRhdGE6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIClcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcblxuICAgICAgICAvLyBBZGQgdmFsdWVzIHRvIGZpZWxkIHN0YXRlXG4gICAgICAgIGlmICh2YWx1ZVdpdGhEZWZhdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgZmllbGRTdGF0ZS52YWx1ZSA9IG51bGxcbiAgICAgICAgICBmaWVsZFN0YXRlLnByZXZpb3VzVmFsdWUgPSBmaWVsZFN0YXRlLnZhbHVlXG4gICAgICAgICAgZmllbGRTdGF0ZS5pbml0aWFsVmFsdWUgPSBudWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGRTdGF0ZS52YWx1ZSA9IGZvcmNlRnVsbFZhbHVlID8gYXJyYXlWYWx1ZSA6IGFycmF5VmFsdWUubGVuZ3RoXG4gICAgICAgICAgZmllbGRTdGF0ZS5wcmV2aW91c1ZhbHVlID0gZmllbGRTdGF0ZS52YWx1ZVxuICAgICAgICAgIGZpZWxkU3RhdGUuaW5pdGlhbFZhbHVlID0gZm9yY2VGdWxsVmFsdWUgPyBhcnJheVZhbHVlIDogYXJyYXlWYWx1ZS5sZW5ndGhcblxuICAgICAgICAgIGlmIChhcnJheVZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZpZWxkU3RhdGUuZGlzYWJsZUZvcm1EYXRhID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkU3RhdGUucm93cyA9IHJvd01ldGFkYXRhXG5cbiAgICAgICAgLy8gQWRkIGZpZWxkIHRvIHN0YXRlXG4gICAgICAgIGlmICghb21pdFBhcmVudHMgJiYgKCFmaWx0ZXIgfHwgZmlsdGVyKGFyZ3MpKSkge1xuICAgICAgICAgIHN0YXRlW2Ake3BhdGh9JHtmaWVsZC5uYW1lfWBdID0gZmllbGRTdGF0ZVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnYmxvY2tzJzoge1xuICAgICAgICBjb25zdCBibG9ja3NWYWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWVXaXRoRGVmYXVsdCkgPyB2YWx1ZVdpdGhEZWZhdWx0IDogW11cblxuICAgICAgICBjb25zdCB7IHByb21pc2VzLCByb3dNZXRhZGF0YSB9ID0gYmxvY2tzVmFsdWUucmVkdWNlKFxuICAgICAgICAgIChhY2MsIHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBmaWVsZC5ibG9ja3MuZmluZCgoYmxvY2tUeXBlKSA9PiBibG9ja1R5cGUuc2x1ZyA9PT0gcm93LmJsb2NrVHlwZSlcbiAgICAgICAgICAgIGNvbnN0IHJvd1BhdGggPSBgJHtwYXRofSR7ZmllbGQubmFtZX0uJHtpfS5gXG5cbiAgICAgICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgICByb3cuaWQgPSByb3c/LmlkIHx8IG5ldyBPYmplY3RJRCgpLnRvSGV4U3RyaW5nKClcblxuICAgICAgICAgICAgICBpZiAoIW9taXRQYXJlbnRzICYmICghZmlsdGVyIHx8IGZpbHRlcihhcmdzKSkpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtgJHtyb3dQYXRofWlkYF0gPSB7XG4gICAgICAgICAgICAgICAgICBmaWVsZFNjaGVtYTogaW5jbHVkZVNjaGVtYVxuICAgICAgICAgICAgICAgICAgICA/IGJsb2NrLmZpZWxkcy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGJsb2NrRmllbGQpID0+ICduYW1lJyBpbiBibG9ja0ZpZWxkICYmIGJsb2NrRmllbGQubmFtZSA9PT0gJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiByb3cuaWQsXG4gICAgICAgICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3cuaWQsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RhdGVbYCR7cm93UGF0aH1ibG9ja1R5cGVgXSA9IHtcbiAgICAgICAgICAgICAgICAgIGZpZWxkU2NoZW1hOiBpbmNsdWRlU2NoZW1hXG4gICAgICAgICAgICAgICAgICAgID8gYmxvY2suZmllbGRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAoYmxvY2tGaWVsZCkgPT4gJ25hbWUnIGluIGJsb2NrRmllbGQgJiYgYmxvY2tGaWVsZC5uYW1lID09PSAnYmxvY2tUeXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiByb3cuYmxvY2tUeXBlLFxuICAgICAgICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogcm93LmJsb2NrVHlwZSxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdGF0ZVtgJHtyb3dQYXRofWJsb2NrTmFtZWBdID0ge1xuICAgICAgICAgICAgICAgICAgZmllbGRTY2hlbWE6IGluY2x1ZGVTY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgPyBibG9jay5maWVsZHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgIChibG9ja0ZpZWxkKSA9PiAnbmFtZScgaW4gYmxvY2tGaWVsZCAmJiBibG9ja0ZpZWxkLm5hbWUgPT09ICdibG9ja05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU6IHJvdy5ibG9ja05hbWUsXG4gICAgICAgICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3cuYmxvY2tOYW1lLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGFjYy5wcm9taXNlcy5wdXNoKFxuICAgICAgICAgICAgICAgIGl0ZXJhdGVGaWVsZHMoe1xuICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICBhbnlQYXJlbnRMb2NhbGl6ZWQ6IGZpZWxkLmxvY2FsaXplZCB8fCBhbnlQYXJlbnRMb2NhbGl6ZWQsXG4gICAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgICBkYXRhOiByb3csXG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IGJsb2NrLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgIGZvcmNlRnVsbFZhbHVlLFxuICAgICAgICAgICAgICAgICAgZnVsbERhdGEsXG4gICAgICAgICAgICAgICAgICBpbmNsdWRlU2NoZW1hLFxuICAgICAgICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgICAgICAgb21pdFBhcmVudHMsXG4gICAgICAgICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICAgICAgICBwYXJlbnRQYXNzZXNDb25kaXRpb246IHBhc3Nlc0NvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgIHBhdGg6IHJvd1BhdGgsXG4gICAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcyxcbiAgICAgICAgICAgICAgICAgIHNraXBDb25kaXRpb25DaGVja3MsXG4gICAgICAgICAgICAgICAgICBza2lwVmFsaWRhdGlvbixcbiAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgdCxcbiAgICAgICAgICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICBjb25zdCBjb2xsYXBzZWRSb3dJRHMgPSBwcmVmZXJlbmNlcz8uZmllbGRzPy5bYCR7cGF0aH0ke2ZpZWxkLm5hbWV9YF0/LmNvbGxhcHNlZFxuXG4gICAgICAgICAgICAgIGFjYy5yb3dNZXRhZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogcm93LmlkLFxuICAgICAgICAgICAgICAgIGJsb2NrVHlwZTogcm93LmJsb2NrVHlwZSxcbiAgICAgICAgICAgICAgICBjaGlsZEVycm9yUGF0aHM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6XG4gICAgICAgICAgICAgICAgICBjb2xsYXBzZWRSb3dJRHMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLmFkbWluLmluaXRDb2xsYXBzZWRcbiAgICAgICAgICAgICAgICAgICAgOiBjb2xsYXBzZWRSb3dJRHMuaW5jbHVkZXMocm93LmlkKSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvbWlzZXM6IFtdLFxuICAgICAgICAgICAgcm93TWV0YWRhdGE6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIClcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcblxuICAgICAgICAvLyBBZGQgdmFsdWVzIHRvIGZpZWxkIHN0YXRlXG4gICAgICAgIGlmICh2YWx1ZVdpdGhEZWZhdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgZmllbGRTdGF0ZS52YWx1ZSA9IG51bGxcbiAgICAgICAgICBmaWVsZFN0YXRlLnByZXZpb3VzVmFsdWUgPSBmaWVsZFN0YXRlLnZhbHVlXG4gICAgICAgICAgZmllbGRTdGF0ZS5pbml0aWFsVmFsdWUgPSBudWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGRTdGF0ZS52YWx1ZSA9IGZvcmNlRnVsbFZhbHVlID8gYmxvY2tzVmFsdWUgOiBibG9ja3NWYWx1ZS5sZW5ndGhcbiAgICAgICAgICBmaWVsZFN0YXRlLnByZXZpb3VzVmFsdWUgPSBmaWVsZFN0YXRlLnZhbHVlXG4gICAgICAgICAgZmllbGRTdGF0ZS5pbml0aWFsVmFsdWUgPSBmb3JjZUZ1bGxWYWx1ZSA/IGJsb2Nrc1ZhbHVlIDogYmxvY2tzVmFsdWUubGVuZ3RoXG5cbiAgICAgICAgICBpZiAoYmxvY2tzVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmllbGRTdGF0ZS5kaXNhYmxlRm9ybURhdGEgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmllbGRTdGF0ZS5yb3dzID0gcm93TWV0YWRhdGFcblxuICAgICAgICAvLyBBZGQgZmllbGQgdG8gc3RhdGVcbiAgICAgICAgaWYgKCFvbWl0UGFyZW50cyAmJiAoIWZpbHRlciB8fCBmaWx0ZXIoYXJncykpKSB7XG4gICAgICAgICAgc3RhdGVbYCR7cGF0aH0ke2ZpZWxkLm5hbWV9YF0gPSBmaWVsZFN0YXRlXG4gICAgICAgIH1cblxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdncm91cCc6IHtcbiAgICAgICAgYXdhaXQgaXRlcmF0ZUZpZWxkcyh7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgYW55UGFyZW50TG9jYWxpemVkOiBmaWVsZC5sb2NhbGl6ZWQgfHwgYW55UGFyZW50TG9jYWxpemVkLFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBkYXRhOiBkYXRhPy5bZmllbGQubmFtZV0gfHwge30sXG4gICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgIGZvcmNlRnVsbFZhbHVlLFxuICAgICAgICAgIGZ1bGxEYXRhLFxuICAgICAgICAgIGluY2x1ZGVTY2hlbWEsXG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIG9taXRQYXJlbnRzLFxuICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICBwYXJlbnRQYXNzZXNDb25kaXRpb246IHBhc3Nlc0NvbmRpdGlvbixcbiAgICAgICAgICBwYXRoOiBgJHtwYXRofSR7ZmllbGQubmFtZX0uYCxcbiAgICAgICAgICBwcmVmZXJlbmNlcyxcbiAgICAgICAgICBza2lwQ29uZGl0aW9uQ2hlY2tzLFxuICAgICAgICAgIHNraXBWYWxpZGF0aW9uLFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIHQsXG4gICAgICAgICAgdXNlcixcbiAgICAgICAgfSlcblxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdyZWxhdGlvbnNoaXAnOiB7XG4gICAgICAgIGlmIChmaWVsZC5oYXNNYW55KSB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwVmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlV2l0aERlZmF1bHQpXG4gICAgICAgICAgICA/IHZhbHVlV2l0aERlZmF1bHQubWFwKChyZWxhdGlvbnNoaXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZC5yZWxhdGlvblRvKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpb25UbzogcmVsYXRpb25zaGlwLnJlbGF0aW9uVG8sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uc2hpcC52YWx1ZSAmJiB0eXBlb2YgcmVsYXRpb25zaGlwLnZhbHVlID09PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyByZWxhdGlvbnNoaXAudmFsdWU/LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHJlbGF0aW9uc2hpcC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWxhdGlvbnNoaXAgPT09ICdvYmplY3QnICYmIHJlbGF0aW9uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbGF0aW9uc2hpcC5pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVsYXRpb25zaGlwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICAgICAgZmllbGRTdGF0ZS52YWx1ZSA9IHJlbGF0aW9uc2hpcFZhbHVlXG4gICAgICAgICAgZmllbGRTdGF0ZS5wcmV2aW91c1ZhbHVlID0gZmllbGRTdGF0ZS52YWx1ZVxuICAgICAgICAgIGZpZWxkU3RhdGUuaW5pdGlhbFZhbHVlID0gcmVsYXRpb25zaGlwVmFsdWVcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpZWxkLnJlbGF0aW9uVG8pKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdmFsdWVXaXRoRGVmYXVsdCAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlV2l0aERlZmF1bHQgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAncmVsYXRpb25UbycgaW4gdmFsdWVXaXRoRGVmYXVsdCAmJlxuICAgICAgICAgICAgJ3ZhbHVlJyBpbiB2YWx1ZVdpdGhEZWZhdWx0XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9XG4gICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZVdpdGhEZWZhdWx0Py52YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgdmFsdWVXaXRoRGVmYXVsdD8udmFsdWUgJiZcbiAgICAgICAgICAgICAgJ2lkJyBpbiB2YWx1ZVdpdGhEZWZhdWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgPyB2YWx1ZVdpdGhEZWZhdWx0LnZhbHVlLmlkXG4gICAgICAgICAgICAgICAgOiB2YWx1ZVdpdGhEZWZhdWx0LnZhbHVlXG4gICAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXBWYWx1ZSA9IHtcbiAgICAgICAgICAgICAgcmVsYXRpb25UbzogdmFsdWVXaXRoRGVmYXVsdD8ucmVsYXRpb25UbyxcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWVsZFN0YXRlLnZhbHVlID0gcmVsYXRpb25zaGlwVmFsdWVcbiAgICAgICAgICAgIGZpZWxkU3RhdGUucHJldmlvdXNWYWx1ZSA9IGZpZWxkU3RhdGUudmFsdWVcbiAgICAgICAgICAgIGZpZWxkU3RhdGUuaW5pdGlhbFZhbHVlID0gcmVsYXRpb25zaGlwVmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwVmFsdWUgPVxuICAgICAgICAgICAgdmFsdWVXaXRoRGVmYXVsdCAmJiB0eXBlb2YgdmFsdWVXaXRoRGVmYXVsdCA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiB2YWx1ZVdpdGhEZWZhdWx0XG4gICAgICAgICAgICAgID8gdmFsdWVXaXRoRGVmYXVsdC5pZFxuICAgICAgICAgICAgICA6IHZhbHVlV2l0aERlZmF1bHRcbiAgICAgICAgICBmaWVsZFN0YXRlLnZhbHVlID0gcmVsYXRpb25zaGlwVmFsdWVcbiAgICAgICAgICBmaWVsZFN0YXRlLnByZXZpb3VzVmFsdWUgPSBmaWVsZFN0YXRlLnZhbHVlXG4gICAgICAgICAgZmllbGRTdGF0ZS5pbml0aWFsVmFsdWUgPSByZWxhdGlvbnNoaXBWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmaWx0ZXIgfHwgZmlsdGVyKGFyZ3MpKSB7XG4gICAgICAgICAgc3RhdGVbYCR7cGF0aH0ke2ZpZWxkLm5hbWV9YF0gPSBmaWVsZFN0YXRlXG4gICAgICAgIH1cblxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICd1cGxvYWQnOiB7XG4gICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcFZhbHVlID1cbiAgICAgICAgICB2YWx1ZVdpdGhEZWZhdWx0ICYmIHR5cGVvZiB2YWx1ZVdpdGhEZWZhdWx0ID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIHZhbHVlV2l0aERlZmF1bHRcbiAgICAgICAgICAgID8gdmFsdWVXaXRoRGVmYXVsdC5pZFxuICAgICAgICAgICAgOiB2YWx1ZVdpdGhEZWZhdWx0XG4gICAgICAgIGZpZWxkU3RhdGUudmFsdWUgPSByZWxhdGlvbnNoaXBWYWx1ZVxuICAgICAgICBmaWVsZFN0YXRlLnByZXZpb3VzVmFsdWUgPSBmaWVsZFN0YXRlLnZhbHVlXG4gICAgICAgIGZpZWxkU3RhdGUuaW5pdGlhbFZhbHVlID0gcmVsYXRpb25zaGlwVmFsdWVcblxuICAgICAgICBpZiAoIWZpbHRlciB8fCBmaWx0ZXIoYXJncykpIHtcbiAgICAgICAgICBzdGF0ZVtgJHtwYXRofSR7ZmllbGQubmFtZX1gXSA9IGZpZWxkU3RhdGVcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgZmllbGRTdGF0ZS52YWx1ZSA9IHZhbHVlV2l0aERlZmF1bHRcbiAgICAgICAgZmllbGRTdGF0ZS5wcmV2aW91c1ZhbHVlID0gZmllbGRTdGF0ZS52YWx1ZVxuICAgICAgICBmaWVsZFN0YXRlLmluaXRpYWxWYWx1ZSA9IHZhbHVlV2l0aERlZmF1bHRcblxuICAgICAgICAvLyBBZGQgZmllbGQgdG8gc3RhdGVcbiAgICAgICAgaWYgKCFmaWx0ZXIgfHwgZmlsdGVyKGFyZ3MpKSB7XG4gICAgICAgICAgc3RhdGVbYCR7cGF0aH0ke2ZpZWxkLm5hbWV9YF0gPSBmaWVsZFN0YXRlXG4gICAgICAgIH1cblxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChmaWVsZEhhc1N1YkZpZWxkcyhmaWVsZCkpIHtcbiAgICAvLyBIYW5kbGUgZmllbGQgdHlwZXMgdGhhdCBkbyBub3QgdXNlIG5hbWVzIChyb3csIGV0YylcbiAgICBhd2FpdCBpdGVyYXRlRmllbGRzKHtcbiAgICAgIGlkLFxuICAgICAgYW55UGFyZW50TG9jYWxpemVkOiBmaWVsZC5sb2NhbGl6ZWQgfHwgYW55UGFyZW50TG9jYWxpemVkLFxuICAgICAgY29uZmlnLFxuICAgICAgZGF0YSxcbiAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgZmlsdGVyLFxuICAgICAgZm9yY2VGdWxsVmFsdWUsXG4gICAgICBmdWxsRGF0YSxcbiAgICAgIGluY2x1ZGVTY2hlbWEsXG4gICAgICBsb2NhbGUsXG4gICAgICBvbWl0UGFyZW50cyxcbiAgICAgIG9wZXJhdGlvbixcbiAgICAgIHBhcmVudFBhc3Nlc0NvbmRpdGlvbjogcGFzc2VzQ29uZGl0aW9uLFxuICAgICAgcGF0aCxcbiAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgc2tpcENvbmRpdGlvbkNoZWNrcyxcbiAgICAgIHNraXBWYWxpZGF0aW9uLFxuICAgICAgc3RhdGUsXG4gICAgICB0LFxuICAgICAgdXNlcixcbiAgICB9KVxuICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICd0YWJzJykge1xuICAgIGNvbnN0IHByb21pc2VzID0gZmllbGQudGFicy5tYXAoKHRhYikgPT5cbiAgICAgIGl0ZXJhdGVGaWVsZHMoe1xuICAgICAgICBpZCxcbiAgICAgICAgYW55UGFyZW50TG9jYWxpemVkOiB0YWIubG9jYWxpemVkIHx8IGFueVBhcmVudExvY2FsaXplZCxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBkYXRhOiB0YWJIYXNOYW1lKHRhYikgPyBkYXRhPy5bdGFiLm5hbWVdIDogZGF0YSxcbiAgICAgICAgZmllbGRzOiB0YWIuZmllbGRzLFxuICAgICAgICBmaWx0ZXIsXG4gICAgICAgIGZvcmNlRnVsbFZhbHVlLFxuICAgICAgICBmdWxsRGF0YSxcbiAgICAgICAgaW5jbHVkZVNjaGVtYSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBvbWl0UGFyZW50cyxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICBwYXJlbnRQYXNzZXNDb25kaXRpb246IHBhc3Nlc0NvbmRpdGlvbixcbiAgICAgICAgcGF0aDogdGFiSGFzTmFtZSh0YWIpID8gYCR7cGF0aH0ke3RhYi5uYW1lfS5gIDogcGF0aCxcbiAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgIHNraXBDb25kaXRpb25DaGVja3MsXG4gICAgICAgIHNraXBWYWxpZGF0aW9uLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgdCxcbiAgICAgICAgdXNlcixcbiAgICAgIH0pLFxuICAgIClcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuICB9XG59XG4iXSwibmFtZXMiOlsiYWRkRmllbGRTdGF0ZVByb21pc2UiLCJhcmdzIiwiaWQiLCJhbnlQYXJlbnRMb2NhbGl6ZWQiLCJjb25maWciLCJkYXRhIiwiZmllbGQiLCJmaWx0ZXIiLCJmb3JjZUZ1bGxWYWx1ZSIsImZ1bGxEYXRhIiwiaW5jbHVkZVNjaGVtYSIsImxvY2FsZSIsIm9taXRQYXJlbnRzIiwib3BlcmF0aW9uIiwicGFzc2VzQ29uZGl0aW9uIiwicGF0aCIsInByZWZlcmVuY2VzIiwic2tpcENvbmRpdGlvbkNoZWNrcyIsInNraXBWYWxpZGF0aW9uIiwic3RhdGUiLCJ0IiwidXNlciIsImZpZWxkQWZmZWN0c0RhdGEiLCJmaWVsZFN0YXRlIiwiY29uZGl0aW9uIiwiYWRtaW4iLCJmaWVsZFNjaGVtYSIsInVuZGVmaW5lZCIsImluaXRpYWxWYWx1ZSIsInZhbGlkIiwidmFsaWRhdGUiLCJ2YWx1ZSIsInZhbHVlV2l0aERlZmF1bHQiLCJnZXRWYWx1ZVdpdGhEZWZhdWx0IiwiZGVmYXVsdFZhbHVlIiwibmFtZSIsInZhbGlkYXRpb25SZXN1bHQiLCJwcmV2aW91c1ZhbHVlIiwic2libGluZ0RhdGEiLCJlcnJvck1lc3NhZ2UiLCJ0eXBlIiwiYXJyYXlWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInByb21pc2VzIiwicm93TWV0YWRhdGEiLCJyZWR1Y2UiLCJhY2MiLCJyb3ciLCJpIiwicm93UGF0aCIsIk9iamVjdElEIiwidG9IZXhTdHJpbmciLCJmaWVsZHMiLCJmaW5kIiwicHVzaCIsIml0ZXJhdGVGaWVsZHMiLCJsb2NhbGl6ZWQiLCJwYXJlbnRQYXNzZXNDb25kaXRpb24iLCJjb2xsYXBzZWRSb3dJRHMiLCJjb2xsYXBzZWQiLCJjaGlsZEVycm9yUGF0aHMiLCJTZXQiLCJpbml0Q29sbGFwc2VkIiwiaW5jbHVkZXMiLCJQcm9taXNlIiwiYWxsIiwibGVuZ3RoIiwiZGlzYWJsZUZvcm1EYXRhIiwicm93cyIsImJsb2Nrc1ZhbHVlIiwiYmxvY2siLCJibG9ja3MiLCJibG9ja1R5cGUiLCJzbHVnIiwiYmxvY2tGaWVsZCIsImJsb2NrTmFtZSIsImhhc01hbnkiLCJyZWxhdGlvbnNoaXBWYWx1ZSIsIm1hcCIsInJlbGF0aW9uc2hpcCIsInJlbGF0aW9uVG8iLCJmaWVsZEhhc1N1YkZpZWxkcyIsInRhYnMiLCJ0YWIiLCJ0YWJIYXNOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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