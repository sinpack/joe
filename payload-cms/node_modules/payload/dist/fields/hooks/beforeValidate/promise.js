/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "promise", {
    enumerable: true,
    get: function() {
        return promise;
    }
});
const _types = require("../../config/types");
const _getDefaultValue = /*#__PURE__*/ _interop_require_default(require("../../getDefaultValue"));
const _cloneDataFromOriginalDoc = require("../beforeChange/cloneDataFromOriginalDoc");
const _getExistingRowDoc = require("../beforeChange/getExistingRowDoc");
const _traverseFields = require("./traverseFields");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const promise = async ({ id, collection, context, data, doc, field, global, operation, overrideAccess, req, siblingData, siblingDoc, siblingDocKeys })=>{
    if ((0, _types.fieldAffectsData)(field)) {
        // Remove the key from siblingDocKeys
        // the goal is to keep any existing data present
        // before updating, for users that want to maintain
        // external data in the same collections as Payload manages,
        // without having fields defined for them
        if (siblingDocKeys.has(field.name)) {
            siblingDocKeys.delete(field.name);
        }
        if (field.name === 'id') {
            if (field.type === 'number' && typeof siblingData[field.name] === 'string') {
                const value = siblingData[field.name];
                siblingData[field.name] = parseFloat(value);
            }
            if (field.type === 'text' && typeof siblingData[field.name]?.toString === 'function' && typeof siblingData[field.name] !== 'string') {
                siblingData[field.name] = siblingData[field.name].toString();
            }
        }
        // Sanitize incoming data
        switch(field.type){
            case 'number':
                {
                    if (typeof siblingData[field.name] === 'string') {
                        const value = siblingData[field.name];
                        const trimmed = value.trim();
                        siblingData[field.name] = trimmed.length === 0 ? null : parseFloat(trimmed);
                    }
                    break;
                }
            case 'point':
                {
                    if (Array.isArray(siblingData[field.name])) {
                        siblingData[field.name] = siblingData[field.name].map((coordinate, i)=>{
                            if (typeof coordinate === 'string') {
                                const value = siblingData[field.name][i];
                                const trimmed = value.trim();
                                return trimmed.length === 0 ? null : parseFloat(trimmed);
                            }
                            return coordinate;
                        });
                    }
                    break;
                }
            case 'checkbox':
                {
                    if (siblingData[field.name] === 'true') siblingData[field.name] = true;
                    if (siblingData[field.name] === 'false') siblingData[field.name] = false;
                    if (siblingData[field.name] === '') siblingData[field.name] = false;
                    break;
                }
            case 'richText':
                {
                    if (typeof siblingData[field.name] === 'string') {
                        try {
                            const richTextJSON = JSON.parse(siblingData[field.name]);
                            siblingData[field.name] = richTextJSON;
                        } catch  {
                        // Disregard this data as it is not valid.
                        // Will be reported to user by field validation
                        }
                    }
                    break;
                }
            case 'relationship':
            case 'upload':
                {
                    if (siblingData[field.name] === '' || siblingData[field.name] === 'none' || siblingData[field.name] === 'null' || siblingData[field.name] === null) {
                        if (field.type === 'relationship' && field.hasMany === true) {
                            siblingData[field.name] = [];
                        } else {
                            siblingData[field.name] = null;
                        }
                    }
                    const value = siblingData[field.name];
                    if (Array.isArray(field.relationTo)) {
                        if (Array.isArray(value)) {
                            value.forEach((relatedDoc, i)=>{
                                const relatedCollection = req.payload.config.collections.find((collection)=>collection.slug === relatedDoc.relationTo);
                                const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, _types.fieldAffectsData)(collectionField) && collectionField.name === 'id');
                                if (relationshipIDField?.type === 'number') {
                                    siblingData[field.name][i] = {
                                        ...relatedDoc,
                                        value: parseFloat(relatedDoc.value)
                                    };
                                }
                            });
                        }
                        if (field.type === 'relationship' && field.hasMany !== true && (0, _types.valueIsValueWithRelation)(value)) {
                            const relatedCollection = req.payload.config.collections.find((collection)=>collection.slug === value.relationTo);
                            const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, _types.fieldAffectsData)(collectionField) && collectionField.name === 'id');
                            if (relationshipIDField?.type === 'number') {
                                siblingData[field.name] = {
                                    ...value,
                                    value: parseFloat(value.value)
                                };
                            }
                        }
                    } else {
                        if (Array.isArray(value)) {
                            value.forEach((relatedDoc, i)=>{
                                const relatedCollection = req.payload.config.collections.find((collection)=>collection.slug === field.relationTo);
                                const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, _types.fieldAffectsData)(collectionField) && collectionField.name === 'id');
                                if (relationshipIDField?.type === 'number') {
                                    siblingData[field.name][i] = parseFloat(relatedDoc);
                                }
                            });
                        }
                        if (field.type === 'relationship' && field.hasMany !== true && value) {
                            const relatedCollection = req.payload.config.collections.find((collection)=>collection.slug === field.relationTo);
                            const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, _types.fieldAffectsData)(collectionField) && collectionField.name === 'id');
                            if (relationshipIDField?.type === 'number') {
                                siblingData[field.name] = parseFloat(value);
                            }
                        }
                    }
                    break;
                }
            case 'array':
            case 'blocks':
                {
                    // Handle cases of arrays being intentionally set to 0
                    if (siblingData[field.name] === '0' || siblingData[field.name] === 0) {
                        siblingData[field.name] = [];
                    }
                    break;
                }
            default:
                {
                    break;
                }
        }
        // Execute hooks
        if (field.hooks?.beforeValidate) {
            await field.hooks.beforeValidate.reduce(async (priorHook, currentHook)=>{
                await priorHook;
                const hookedValue = await currentHook({
                    collection,
                    context,
                    data,
                    field,
                    global,
                    operation,
                    originalDoc: doc,
                    req,
                    siblingData,
                    value: siblingData[field.name]
                });
                if (hookedValue !== undefined) {
                    siblingData[field.name] = hookedValue;
                }
            }, Promise.resolve());
        }
        // Execute access control
        if (field.access && field.access[operation]) {
            const result = overrideAccess ? true : await field.access[operation]({
                id,
                data,
                doc,
                req,
                siblingData
            });
            if (!result) {
                delete siblingData[field.name];
            }
        }
        if (typeof siblingData[field.name] === 'undefined') {
            // If no incoming data, but existing document data is found, merge it in
            if (typeof siblingDoc[field.name] !== 'undefined') {
                siblingData[field.name] = (0, _cloneDataFromOriginalDoc.cloneDataFromOriginalDoc)(siblingDoc[field.name]);
            // Otherwise compute default value
            } else if (typeof field.defaultValue !== 'undefined') {
                siblingData[field.name] = await (0, _getDefaultValue.default)({
                    defaultValue: field.defaultValue,
                    locale: req.locale,
                    user: req.user,
                    value: siblingData[field.name]
                });
            }
        }
    }
    // Traverse subfields
    switch(field.type){
        case 'group':
            {
                if (typeof siblingData[field.name] !== 'object') siblingData[field.name] = {};
                if (typeof siblingDoc[field.name] !== 'object') siblingDoc[field.name] = {};
                const groupData = siblingData[field.name];
                const groupDoc = siblingDoc[field.name];
                await (0, _traverseFields.traverseFields)({
                    id,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    overrideAccess,
                    req,
                    siblingData: groupData,
                    siblingDoc: groupDoc
                });
                break;
            }
        case 'array':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row)=>{
                        promises.push((0, _traverseFields.traverseFields)({
                            id,
                            collection,
                            context,
                            data,
                            doc,
                            fields: field.fields,
                            global,
                            operation,
                            overrideAccess,
                            req,
                            siblingData: row,
                            siblingDoc: (0, _getExistingRowDoc.getExistingRowDoc)(row, siblingDoc[field.name])
                        }));
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row)=>{
                        const rowSiblingDoc = (0, _getExistingRowDoc.getExistingRowDoc)(row, siblingDoc[field.name]);
                        const blockTypeToMatch = row.blockType || rowSiblingDoc.blockType;
                        const block = field.blocks.find((blockType)=>blockType.slug === blockTypeToMatch);
                        if (block) {
                            row.blockType = blockTypeToMatch;
                            promises.push((0, _traverseFields.traverseFields)({
                                id,
                                collection,
                                context,
                                data,
                                doc,
                                fields: block.fields,
                                global,
                                operation,
                                overrideAccess,
                                req,
                                siblingData: row,
                                siblingDoc: rowSiblingDoc
                            }));
                        }
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'row':
        case 'collapsible':
            {
                await (0, _traverseFields.traverseFields)({
                    id,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    overrideAccess,
                    req,
                    siblingData,
                    siblingDoc,
                    siblingDocKeys
                });
                break;
            }
        case 'tab':
            {
                let tabSiblingData;
                let tabSiblingDoc;
                const isNamedTab = (0, _types.tabHasName)(field);
                if (isNamedTab) {
                    if (typeof siblingData[field.name] !== 'object') siblingData[field.name] = {};
                    if (typeof siblingDoc[field.name] !== 'object') siblingDoc[field.name] = {};
                    tabSiblingData = siblingData[field.name];
                    tabSiblingDoc = siblingDoc[field.name];
                } else {
                    tabSiblingData = siblingData;
                    tabSiblingDoc = siblingDoc;
                }
                await (0, _traverseFields.traverseFields)({
                    id,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    overrideAccess,
                    req,
                    siblingData: tabSiblingData,
                    siblingDoc: tabSiblingDoc,
                    siblingDocKeys: isNamedTab ? undefined : siblingDocKeys
                });
                break;
            }
        case 'tabs':
            {
                await (0, _traverseFields.traverseFields)({
                    id,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    global,
                    operation,
                    overrideAccess,
                    req,
                    siblingData,
                    siblingDoc,
                    siblingDocKeys
                });
                break;
            }
        default:
            {
                break;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlVmFsaWRhdGUvcHJvbWlzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCwgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgRmllbGQsIFRhYkFzRmllbGQgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEsIHRhYkhhc05hbWUsIHZhbHVlSXNWYWx1ZVdpdGhSZWxhdGlvbiB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCBnZXRWYWx1ZVdpdGhEZWZhdWx0IGZyb20gJy4uLy4uL2dldERlZmF1bHRWYWx1ZSdcbmltcG9ydCB7IGNsb25lRGF0YUZyb21PcmlnaW5hbERvYyB9IGZyb20gJy4uL2JlZm9yZUNoYW5nZS9jbG9uZURhdGFGcm9tT3JpZ2luYWxEb2MnXG5pbXBvcnQgeyBnZXRFeGlzdGluZ1Jvd0RvYyB9IGZyb20gJy4uL2JlZm9yZUNoYW5nZS9nZXRFeGlzdGluZ1Jvd0RvYydcbmltcG9ydCB7IHRyYXZlcnNlRmllbGRzIH0gZnJvbSAnLi90cmF2ZXJzZUZpZWxkcydcblxudHlwZSBBcmdzPFQ+ID0ge1xuICBjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIHwgbnVsbFxuICBjb250ZXh0OiBSZXF1ZXN0Q29udGV4dFxuICBkYXRhOiBUXG4gIGRvYzogVFxuICBmaWVsZDogRmllbGQgfCBUYWJBc0ZpZWxkXG4gIGdsb2JhbDogU2FuaXRpemVkR2xvYmFsQ29uZmlnIHwgbnVsbFxuICBpZD86IG51bWJlciB8IHN0cmluZ1xuICBvcGVyYXRpb246ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBzaWJsaW5nRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgc2libGluZ0RvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgc2libGluZ0RvY0tleXM6IFNldDxzdHJpbmc+XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBmb2xsb3dpbmcgYWN0aW9ucywgaW4gb3JkZXI6XG4vLyAtIFNhbml0aXplIGluY29taW5nIGRhdGFcbi8vIC0gRXhlY3V0ZSBmaWVsZCBob29rc1xuLy8gLSBFeGVjdXRlIGZpZWxkIGFjY2VzcyBjb250cm9sXG4vLyAtIE1lcmdlIG9yaWdpbmFsIGRvY3VtZW50IGRhdGEgaW50byBpbmNvbWluZyBkYXRhXG4vLyAtIENvbXB1dGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHVuZGVmaW5lZCBmaWVsZHNcblxuZXhwb3J0IGNvbnN0IHByb21pc2UgPSBhc3luYyA8VD4oe1xuICBpZCxcbiAgY29sbGVjdGlvbixcbiAgY29udGV4dCxcbiAgZGF0YSxcbiAgZG9jLFxuICBmaWVsZCxcbiAgZ2xvYmFsLFxuICBvcGVyYXRpb24sXG4gIG92ZXJyaWRlQWNjZXNzLFxuICByZXEsXG4gIHNpYmxpbmdEYXRhLFxuICBzaWJsaW5nRG9jLFxuICBzaWJsaW5nRG9jS2V5cyxcbn06IEFyZ3M8VD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBrZXkgZnJvbSBzaWJsaW5nRG9jS2V5c1xuICAgIC8vIHRoZSBnb2FsIGlzIHRvIGtlZXAgYW55IGV4aXN0aW5nIGRhdGEgcHJlc2VudFxuICAgIC8vIGJlZm9yZSB1cGRhdGluZywgZm9yIHVzZXJzIHRoYXQgd2FudCB0byBtYWludGFpblxuICAgIC8vIGV4dGVybmFsIGRhdGEgaW4gdGhlIHNhbWUgY29sbGVjdGlvbnMgYXMgUGF5bG9hZCBtYW5hZ2VzLFxuICAgIC8vIHdpdGhvdXQgaGF2aW5nIGZpZWxkcyBkZWZpbmVkIGZvciB0aGVtXG4gICAgaWYgKHNpYmxpbmdEb2NLZXlzLmhhcyhmaWVsZC5uYW1lKSkge1xuICAgICAgc2libGluZ0RvY0tleXMuZGVsZXRlKGZpZWxkLm5hbWUpXG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLm5hbWUgPT09ICdpZCcpIHtcbiAgICAgIGlmIChmaWVsZC50eXBlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc2libGluZ0RhdGFbZmllbGQubmFtZV0gYXMgc3RyaW5nXG5cbiAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBwYXJzZUZsb2F0KHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGZpZWxkLnR5cGUgPT09ICd0ZXh0JyAmJlxuICAgICAgICB0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0/LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIHR5cGVvZiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSAhPT0gJ3N0cmluZydcbiAgICAgICkge1xuICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTYW5pdGl6ZSBpbmNvbWluZyBkYXRhXG4gICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgICBjYXNlICdudW1iZXInOiB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSBhcyBzdHJpbmdcbiAgICAgICAgICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpXG4gICAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSB0cmltbWVkLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBwYXJzZUZsb2F0KHRyaW1tZWQpXG4gICAgICAgIH1cblxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdwb2ludCc6IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2libGluZ0RhdGFbZmllbGQubmFtZV0pKSB7XG4gICAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSAoc2libGluZ0RhdGFbZmllbGQubmFtZV0gYXMgc3RyaW5nW10pLm1hcCgoY29vcmRpbmF0ZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb29yZGluYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdW2ldIGFzIHN0cmluZ1xuICAgICAgICAgICAgICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpXG4gICAgICAgICAgICAgIHJldHVybiB0cmltbWVkLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBwYXJzZUZsb2F0KHRyaW1tZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdjaGVja2JveCc6IHtcbiAgICAgICAgaWYgKHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAndHJ1ZScpIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gdHJ1ZVxuICAgICAgICBpZiAoc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICdmYWxzZScpIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gZmFsc2VcbiAgICAgICAgaWYgKHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAnJykgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBmYWxzZVxuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ3JpY2hUZXh0Jzoge1xuICAgICAgICBpZiAodHlwZW9mIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByaWNoVGV4dEpTT04gPSBKU09OLnBhcnNlKHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdIGFzIHN0cmluZylcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gcmljaFRleHRKU09OXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBEaXNyZWdhcmQgdGhpcyBkYXRhIGFzIGl0IGlzIG5vdCB2YWxpZC5cbiAgICAgICAgICAgIC8vIFdpbGwgYmUgcmVwb3J0ZWQgdG8gdXNlciBieSBmaWVsZCB2YWxpZGF0aW9uXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAncmVsYXRpb25zaGlwJzpcbiAgICAgIGNhc2UgJ3VwbG9hZCc6IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAnJyB8fFxuICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAnbm9uZScgfHxcbiAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gJ251bGwnIHx8XG4gICAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdyZWxhdGlvbnNoaXAnICYmIGZpZWxkLmhhc01hbnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gW11cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkLnJlbGF0aW9uVG8pKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChyZWxhdGVkRG9jOiB7IHJlbGF0aW9uVG86IHN0cmluZzsgdmFsdWU6IHVua25vd24gfSwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCByZWxhdGVkQ29sbGVjdGlvbiA9IHJlcS5wYXlsb2FkLmNvbmZpZy5jb2xsZWN0aW9ucy5maW5kKFxuICAgICAgICAgICAgICAgIChjb2xsZWN0aW9uKSA9PiBjb2xsZWN0aW9uLnNsdWcgPT09IHJlbGF0ZWREb2MucmVsYXRpb25UbyxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXBJREZpZWxkID0gcmVsYXRlZENvbGxlY3Rpb24uZmllbGRzLmZpbmQoXG4gICAgICAgICAgICAgICAgKGNvbGxlY3Rpb25GaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgIGZpZWxkQWZmZWN0c0RhdGEoY29sbGVjdGlvbkZpZWxkKSAmJiBjb2xsZWN0aW9uRmllbGQubmFtZSA9PT0gJ2lkJyxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAocmVsYXRpb25zaGlwSURGaWVsZD8udHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXVtpXSA9IHtcbiAgICAgICAgICAgICAgICAgIC4uLnJlbGF0ZWREb2MsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChyZWxhdGVkRG9jLnZhbHVlIGFzIHN0cmluZyksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBmaWVsZC50eXBlID09PSAncmVsYXRpb25zaGlwJyAmJlxuICAgICAgICAgICAgZmllbGQuaGFzTWFueSAhPT0gdHJ1ZSAmJlxuICAgICAgICAgICAgdmFsdWVJc1ZhbHVlV2l0aFJlbGF0aW9uKHZhbHVlKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb25maWcuY29sbGVjdGlvbnMuZmluZChcbiAgICAgICAgICAgICAgKGNvbGxlY3Rpb24pID0+IGNvbGxlY3Rpb24uc2x1ZyA9PT0gdmFsdWUucmVsYXRpb25UbyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcElERmllbGQgPSByZWxhdGVkQ29sbGVjdGlvbi5maWVsZHMuZmluZChcbiAgICAgICAgICAgICAgKGNvbGxlY3Rpb25GaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZEFmZmVjdHNEYXRhKGNvbGxlY3Rpb25GaWVsZCkgJiYgY29sbGVjdGlvbkZpZWxkLm5hbWUgPT09ICdpZCcsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVsYXRpb25zaGlwSURGaWVsZD8udHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSB7IC4uLnZhbHVlLCB2YWx1ZTogcGFyc2VGbG9hdCh2YWx1ZS52YWx1ZSBhcyBzdHJpbmcpIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChyZWxhdGVkRG9jOiB1bmtub3duLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRDb2xsZWN0aW9uID0gcmVxLnBheWxvYWQuY29uZmlnLmNvbGxlY3Rpb25zLmZpbmQoXG4gICAgICAgICAgICAgICAgKGNvbGxlY3Rpb24pID0+IGNvbGxlY3Rpb24uc2x1ZyA9PT0gZmllbGQucmVsYXRpb25UbyxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXBJREZpZWxkID0gcmVsYXRlZENvbGxlY3Rpb24uZmllbGRzLmZpbmQoXG4gICAgICAgICAgICAgICAgKGNvbGxlY3Rpb25GaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgIGZpZWxkQWZmZWN0c0RhdGEoY29sbGVjdGlvbkZpZWxkKSAmJiBjb2xsZWN0aW9uRmllbGQubmFtZSA9PT0gJ2lkJyxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAocmVsYXRpb25zaGlwSURGaWVsZD8udHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXVtpXSA9IHBhcnNlRmxvYXQocmVsYXRlZERvYyBhcyBzdHJpbmcpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAncmVsYXRpb25zaGlwJyAmJiBmaWVsZC5oYXNNYW55ICE9PSB0cnVlICYmIHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCByZWxhdGVkQ29sbGVjdGlvbiA9IHJlcS5wYXlsb2FkLmNvbmZpZy5jb2xsZWN0aW9ucy5maW5kKFxuICAgICAgICAgICAgICAoY29sbGVjdGlvbikgPT4gY29sbGVjdGlvbi5zbHVnID09PSBmaWVsZC5yZWxhdGlvblRvLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwSURGaWVsZCA9IHJlbGF0ZWRDb2xsZWN0aW9uLmZpZWxkcy5maW5kKFxuICAgICAgICAgICAgICAoY29sbGVjdGlvbkZpZWxkKSA9PlxuICAgICAgICAgICAgICAgIGZpZWxkQWZmZWN0c0RhdGEoY29sbGVjdGlvbkZpZWxkKSAmJiBjb2xsZWN0aW9uRmllbGQubmFtZSA9PT0gJ2lkJyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXBJREZpZWxkPy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IHBhcnNlRmxvYXQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdibG9ja3MnOiB7XG4gICAgICAgIC8vIEhhbmRsZSBjYXNlcyBvZiBhcnJheXMgYmVpbmcgaW50ZW50aW9uYWxseSBzZXQgdG8gMFxuICAgICAgICBpZiAoc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICcwJyB8fCBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gMCkge1xuICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIGhvb2tzXG4gICAgaWYgKGZpZWxkLmhvb2tzPy5iZWZvcmVWYWxpZGF0ZSkge1xuICAgICAgYXdhaXQgZmllbGQuaG9va3MuYmVmb3JlVmFsaWRhdGUucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGN1cnJlbnRIb29rKSA9PiB7XG4gICAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICAgIGNvbnN0IGhvb2tlZFZhbHVlID0gYXdhaXQgY3VycmVudEhvb2soe1xuICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgIGdsb2JhbCxcbiAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgb3JpZ2luYWxEb2M6IGRvYyxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgc2libGluZ0RhdGEsXG4gICAgICAgICAgdmFsdWU6IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdLFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChob29rZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBob29rZWRWYWx1ZVxuICAgICAgICB9XG4gICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSlcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIGFjY2VzcyBjb250cm9sXG4gICAgaWYgKGZpZWxkLmFjY2VzcyAmJiBmaWVsZC5hY2Nlc3Nbb3BlcmF0aW9uXSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gb3ZlcnJpZGVBY2Nlc3NcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogYXdhaXQgZmllbGQuYWNjZXNzW29wZXJhdGlvbl0oeyBpZCwgZGF0YSwgZG9jLCByZXEsIHNpYmxpbmdEYXRhIH0pXG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGRlbGV0ZSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBJZiBubyBpbmNvbWluZyBkYXRhLCBidXQgZXhpc3RpbmcgZG9jdW1lbnQgZGF0YSBpcyBmb3VuZCwgbWVyZ2UgaXQgaW5cbiAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RvY1tmaWVsZC5uYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBjbG9uZURhdGFGcm9tT3JpZ2luYWxEb2Moc2libGluZ0RvY1tmaWVsZC5uYW1lXSlcblxuICAgICAgICAvLyBPdGhlcndpc2UgY29tcHV0ZSBkZWZhdWx0IHZhbHVlXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWVsZC5kZWZhdWx0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gYXdhaXQgZ2V0VmFsdWVXaXRoRGVmYXVsdCh7XG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgbG9jYWxlOiByZXEubG9jYWxlLFxuICAgICAgICAgIHVzZXI6IHJlcS51c2VyLFxuICAgICAgICAgIHZhbHVlOiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUcmF2ZXJzZSBzdWJmaWVsZHNcbiAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgY2FzZSAnZ3JvdXAnOiB7XG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdICE9PSAnb2JqZWN0Jykgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSB7fVxuICAgICAgaWYgKHR5cGVvZiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdICE9PSAnb2JqZWN0Jykgc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9IHt9XG5cbiAgICAgIGNvbnN0IGdyb3VwRGF0YSA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICBjb25zdCBncm91cERvYyA9IHNpYmxpbmdEb2NbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cblxuICAgICAgYXdhaXQgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBpZCxcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZG9jLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgZ2xvYmFsLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhOiBncm91cERhdGEsXG4gICAgICAgIHNpYmxpbmdEb2M6IGdyb3VwRG9jLFxuICAgICAgfSlcblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjYXNlICdhcnJheSc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzKSkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdXG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgICAgIGdsb2JhbCxcbiAgICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICBzaWJsaW5nRGF0YTogcm93LFxuICAgICAgICAgICAgICBzaWJsaW5nRG9jOiBnZXRFeGlzdGluZ1Jvd0RvYyhyb3csIHNpYmxpbmdEb2NbZmllbGQubmFtZV0pLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgY2FzZSAnYmxvY2tzJzoge1xuICAgICAgY29uc3Qgcm93cyA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd3MpKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW11cbiAgICAgICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBjb25zdCByb3dTaWJsaW5nRG9jID0gZ2V0RXhpc3RpbmdSb3dEb2Mocm93LCBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdKVxuICAgICAgICAgIGNvbnN0IGJsb2NrVHlwZVRvTWF0Y2ggPSByb3cuYmxvY2tUeXBlIHx8IHJvd1NpYmxpbmdEb2MuYmxvY2tUeXBlXG4gICAgICAgICAgY29uc3QgYmxvY2sgPSBmaWVsZC5ibG9ja3MuZmluZCgoYmxvY2tUeXBlKSA9PiBibG9ja1R5cGUuc2x1ZyA9PT0gYmxvY2tUeXBlVG9NYXRjaClcblxuICAgICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgcm93LmJsb2NrVHlwZSA9IGJsb2NrVHlwZVRvTWF0Y2hcblxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgICAgICBmaWVsZHM6IGJsb2NrLmZpZWxkcyxcbiAgICAgICAgICAgICAgICBnbG9iYWwsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgICBzaWJsaW5nRGF0YTogcm93LFxuICAgICAgICAgICAgICAgIHNpYmxpbmdEb2M6IHJvd1NpYmxpbmdEb2MsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgY2FzZSAncm93JzpcbiAgICBjYXNlICdjb2xsYXBzaWJsZSc6IHtcbiAgICAgIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGdsb2JhbCxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgcmVxLFxuICAgICAgICBzaWJsaW5nRGF0YSxcbiAgICAgICAgc2libGluZ0RvYyxcbiAgICAgICAgc2libGluZ0RvY0tleXMsXG4gICAgICB9KVxuXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGNhc2UgJ3RhYic6IHtcbiAgICAgIGxldCB0YWJTaWJsaW5nRGF0YVxuICAgICAgbGV0IHRhYlNpYmxpbmdEb2NcblxuICAgICAgY29uc3QgaXNOYW1lZFRhYiA9IHRhYkhhc05hbWUoZmllbGQpXG5cbiAgICAgIGlmIChpc05hbWVkVGFiKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0gIT09ICdvYmplY3QnKSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IHt9XG4gICAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RvY1tmaWVsZC5uYW1lXSAhPT0gJ29iamVjdCcpIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPSB7fVxuXG4gICAgICAgIHRhYlNpYmxpbmdEYXRhID0gc2libGluZ0RhdGFbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgdGFiU2libGluZ0RvYyA9IHNpYmxpbmdEb2NbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYlNpYmxpbmdEYXRhID0gc2libGluZ0RhdGFcbiAgICAgICAgdGFiU2libGluZ0RvYyA9IHNpYmxpbmdEb2NcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBpZCxcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZG9jLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgZ2xvYmFsLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhOiB0YWJTaWJsaW5nRGF0YSxcbiAgICAgICAgc2libGluZ0RvYzogdGFiU2libGluZ0RvYyxcbiAgICAgICAgc2libGluZ0RvY0tleXM6IGlzTmFtZWRUYWIgPyB1bmRlZmluZWQgOiBzaWJsaW5nRG9jS2V5cyxcbiAgICAgIH0pXG5cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgY2FzZSAndGFicyc6IHtcbiAgICAgIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC50YWJzLm1hcCgodGFiKSA9PiAoeyAuLi50YWIsIHR5cGU6ICd0YWInIH0pKSxcbiAgICAgICAgZ2xvYmFsLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhLFxuICAgICAgICBzaWJsaW5nRG9jLFxuICAgICAgICBzaWJsaW5nRG9jS2V5cyxcbiAgICAgIH0pXG5cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcm9taXNlIiwiaWQiLCJjb2xsZWN0aW9uIiwiY29udGV4dCIsImRhdGEiLCJkb2MiLCJmaWVsZCIsImdsb2JhbCIsIm9wZXJhdGlvbiIsIm92ZXJyaWRlQWNjZXNzIiwicmVxIiwic2libGluZ0RhdGEiLCJzaWJsaW5nRG9jIiwic2libGluZ0RvY0tleXMiLCJmaWVsZEFmZmVjdHNEYXRhIiwiaGFzIiwibmFtZSIsImRlbGV0ZSIsInR5cGUiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJ0b1N0cmluZyIsInRyaW1tZWQiLCJ0cmltIiwibGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY29vcmRpbmF0ZSIsImkiLCJyaWNoVGV4dEpTT04iLCJKU09OIiwicGFyc2UiLCJoYXNNYW55IiwicmVsYXRpb25UbyIsImZvckVhY2giLCJyZWxhdGVkRG9jIiwicmVsYXRlZENvbGxlY3Rpb24iLCJwYXlsb2FkIiwiY29uZmlnIiwiY29sbGVjdGlvbnMiLCJmaW5kIiwic2x1ZyIsInJlbGF0aW9uc2hpcElERmllbGQiLCJmaWVsZHMiLCJjb2xsZWN0aW9uRmllbGQiLCJ2YWx1ZUlzVmFsdWVXaXRoUmVsYXRpb24iLCJob29rcyIsImJlZm9yZVZhbGlkYXRlIiwicmVkdWNlIiwicHJpb3JIb29rIiwiY3VycmVudEhvb2siLCJob29rZWRWYWx1ZSIsIm9yaWdpbmFsRG9jIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhY2Nlc3MiLCJyZXN1bHQiLCJjbG9uZURhdGFGcm9tT3JpZ2luYWxEb2MiLCJkZWZhdWx0VmFsdWUiLCJnZXRWYWx1ZVdpdGhEZWZhdWx0IiwibG9jYWxlIiwidXNlciIsImdyb3VwRGF0YSIsImdyb3VwRG9jIiwidHJhdmVyc2VGaWVsZHMiLCJyb3dzIiwicHJvbWlzZXMiLCJyb3ciLCJwdXNoIiwiZ2V0RXhpc3RpbmdSb3dEb2MiLCJhbGwiLCJyb3dTaWJsaW5nRG9jIiwiYmxvY2tUeXBlVG9NYXRjaCIsImJsb2NrVHlwZSIsImJsb2NrIiwiYmxvY2tzIiwidGFiU2libGluZ0RhdGEiLCJ0YWJTaWJsaW5nRG9jIiwiaXNOYW1lZFRhYiIsInRhYkhhc05hbWUiLCJ0YWJzIiwidGFiIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBbUN2QkE7OztlQUFBQTs7O3VCQTdCMEQ7d0VBQ3ZDOzBDQUNTO21DQUNQO2dDQUNIOzs7Ozs7QUF5QnhCLE1BQU1BLFVBQVUsT0FBVSxFQUMvQkMsRUFBRSxFQUNGQyxVQUFVLEVBQ1ZDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxHQUFHLEVBQ0hDLEtBQUssRUFDTEMsTUFBTSxFQUNOQyxTQUFTLEVBQ1RDLGNBQWMsRUFDZEMsR0FBRyxFQUNIQyxXQUFXLEVBQ1hDLFVBQVUsRUFDVkMsY0FBYyxFQUNOO0lBQ1IsSUFBSUMsSUFBQUEsdUJBQWdCLEVBQUNSLFFBQVE7UUFDM0IscUNBQXFDO1FBQ3JDLGdEQUFnRDtRQUNoRCxt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